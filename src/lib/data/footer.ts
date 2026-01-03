/**
 * Footer Data Parser
 *
 * Parses content/footer.md to generate structured footer data.
 * The markdown file is the single source of truth for footer content.
 *
 * Format:
 *   ---
 *   title: Portfolio
 *   description: Your description here
 *   sourceCodeLabel: View Source on GitHub
 *   sourceCodeUrl: https://github.com/...
 *   ---
 *
 *   ## Quick Links
 *   - [Label](url)
 *   - [Label](url){external}     <- opens in new tab
 *
 *   ## Connect
 *   - [Label](url){icon=name}    <- uses icon from $lib/assets
 */

import footerMd from '../../../content/footer.md?raw';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface FooterLink {
	label: string;
	url: string;
	external?: boolean;
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface FooterData {
	title: string;
	description: string;
	quickLinks: FooterLink[];
	socialLinks: SocialLink[];
	sourceCode: { label: string; url: string };
}

// ─────────────────────────────────────────────────────────────
// Parsing Helpers
// ─────────────────────────────────────────────────────────────

/** Extract YAML frontmatter between --- delimiters */
function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
	const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) return { meta: {}, body: content };

	const meta: Record<string, string> = {};
	for (const line of match[1].split('\n')) {
		const idx = line.indexOf(':');
		if (idx > 0) {
			meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
		}
	}
	return { meta, body: match[2] };
}

/** Extract content under a ## heading */
function getSection(body: string, heading: string): string {
	const match = body.match(new RegExp(`## ${heading}\\n([\\s\\S]*?)(?=\\n## |$)`, 'i'));
	return match?.[1]?.trim() ?? '';
}

/** Parse markdown links: - [label](url){attrs} */
function parseLinks(section: string) {
	const regex = /- \[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/g;
	const links: Array<{ label: string; url: string; attrs: Record<string, string | true> }> = [];

	for (const [, label, url, attrStr] of section.matchAll(regex)) {
		const attrs: Record<string, string | true> = {};
		if (attrStr) {
			for (const part of attrStr.split(',')) {
				const [key, val] = part.trim().split('=');
				attrs[key] = val ?? true;
			}
		}
		links.push({ label, url, attrs });
	}
	return links;
}

// ─────────────────────────────────────────────────────────────
// Main Parser
// ─────────────────────────────────────────────────────────────

function parseFooter(markdown: string): FooterData {
	const { meta, body } = parseFrontmatter(markdown);

	const quickLinks = parseLinks(getSection(body, 'Quick Links')).map(({ label, url, attrs }) => ({
		label,
		url,
		external: attrs.external === true
	}));

	const socialLinks = parseLinks(getSection(body, 'Connect')).map(({ label, url, attrs }) => ({
		name: label,
		url,
		icon: (attrs.icon as string) ?? label.toLowerCase()
	}));

	return {
		title: meta.title ?? 'Portfolio',
		description: meta.description ?? '',
		quickLinks,
		socialLinks,
		sourceCode: {
			label: meta.sourceCodeLabel ?? 'View Source',
			url: meta.sourceCodeUrl ?? ''
		}
	};
}

// ─────────────────────────────────────────────────────────────
// Exports (parsed at build time)
// ─────────────────────────────────────────────────────────────

export const footerData = parseFooter(footerMd);
export const socialLinks = footerData.socialLinks;
