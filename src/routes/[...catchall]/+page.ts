import { error } from '@sveltejs/kit';

export const prerender = false;

export const load = async ({ url }: { url: URL }) => {
  // This is a catch-all route - if we get here, the route wasn't found
  error(404, `Page not found: ${url.pathname}`);
};
