# AGENTS.md

Instructions for AI agents working with this codebase.

## Project Overview

This is a SvelteKit 5 static portfolio site deployed to AWS S3 + CloudFront at `cdn.aztek.io`. The apex domain `aztek.io` redirects here.

## Tech Stack

- **Framework**: SvelteKit 5 with TypeScript
- **Styling**: Custom CSS (no framework) - see `src/lib/styles/design-system.css`
- **Build**: Vite with `@sveltejs/adapter-static`
- **Deployment**: S3 bucket `cdn.aztek.io` + CloudFront distribution `E6X0JGRX63W96`
- **Local Dev**: Docker with nginx or `npm run dev`

## Key Files

| File | Purpose |
|------|---------|
| `src/routes/+layout.ts` | Global config - `prerender: true`, `trailingSlash: 'always'` |
| `src/lib/data/certs.ts` | Certification data (dates, titles, PDF paths) |
| `svelte.config.js` | Adapter config - outputs to `build/` |
| `nginx.conf` | Local nginx config mimicking S3 behavior |

## Build & Deploy

```bash
# Build
npm run build

# Deploy to S3
aws s3 sync build/ s3://cdn.aztek.io --delete --acl public-read --profile aztek-org

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E6X0JGRX63W96 --paths "/*" --profile aztek-org
```

## Important Patterns

### Routing
- Uses `trailingSlash: 'always'` so `/certs` becomes `/certs/index.html`
- This is required for S3 static hosting to resolve paths correctly
- All routes have `prerender = true` for static generation

### Error Handling
- CloudFront custom error response serves `/certs/index.html` for 404s (temporary hack)
- S3 bucket website config also points errors to `certs/index.html`
- Catch-all route at `src/routes/[...catchall]/+page.ts` handles client-side 404s

### Static Assets
- Certificate PDFs go in `static/certs/` (copied to `build/certs/`)
- Favicons and manifest in `static/`

## AWS Resources

| Resource | ID/Name |
|----------|---------|
| S3 Bucket (site) | `cdn.aztek.io` |
| S3 Bucket (redirect) | `aztek.io` |
| CloudFront (cdn) | `E6X0JGRX63W96` |
| CloudFront (apex redirect) | `E342KA6NUOJVTZ` |
| Route53 Zone | `Z1ITL1EF2GOI1` |
| ACM Cert (cdn) | `55e0dc07-aaa1-4958-af23-1fe95768141e` |
| ACM Cert (apex) | `5fcb4c05-3fde-4509-b6ae-072210f304b5` |
| AWS Profile | `aztek-org` |

### Apex Domain Redirect (aztek.io → cdn.aztek.io)
- **S3 Bucket**: `aztek.io` configured with `RedirectAllRequestsTo` pointing to `cdn.aztek.io` over HTTPS
- **CloudFront**: `E342KA6NUOJVTZ` (`d3q01u8w6pp2do.cloudfront.net`) serves the redirect with TLS
- **Route53**: A record alias for `aztek.io` pointing to the CloudFront distribution
- **Origin**: Uses S3 website endpoint `aztek.io.s3-website-us-west-2.amazonaws.com` with HTTP-only origin protocol

## Common Tasks

### Add a new page
1. Create `src/routes/newpage/+page.svelte`
2. Add `+page.ts` with `export const prerender = true`
3. Update nav in `src/routes/+layout.svelte`
4. Build and deploy

### Update certifications
Edit `src/lib/data/certs.ts` - keep sorted newest to oldest

### Fix routing issues
Ensure `trailingSlash: 'always'` is set in `+layout.ts` and rebuild

## Don't Do

- Don't use `cat << EOF` heredocs in terminal - crashes the VS Code terminal
- Don't forget to invalidate CloudFront after S3 deploy
- Don't put files in `/tmp` - use workspace directory and clean up after
