/**
 * Social Icons
 *
 * Maps icon names to their SVG imports.
 * Add new icons here when adding social links.
 */

import emailIcon from '$lib/assets/email.svg';
import githubIcon from '$lib/assets/github.svg';
import linkedinIcon from '$lib/assets/linkedin.svg';
import stackoverflowIcon from '$lib/assets/stackoverflow.svg';
import youtubeIcon from '$lib/assets/youtube.svg';

export const icons: Record<string, string> = {
	email: emailIcon,
	github: githubIcon,
	linkedin: linkedinIcon,
	stackoverflow: stackoverflowIcon,
	youtube: youtubeIcon
};
