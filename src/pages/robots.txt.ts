import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** Production: allow crawling and reference the sitemap. Previews/pre-launch: disallow everything. */
export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite?.origin ?? '').replace(/\/$/, '');
  const body = site.indexable
    ? `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${origin}/sitemap.xml\n`
    : `# Non-production build: indexing disabled (set SITE_INDEXING=true for the production launch).\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
