import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Enable fallback for client-side routing
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s during prerendering - we handle them client-side
				if (message.includes('404')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
