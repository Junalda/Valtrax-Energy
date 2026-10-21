import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { allPages, languages, pathFor, defaultLang } from '../i18n';

/** XML sitemap with reciprocal hreflang alternates. Empty when the build is not indexable. */
export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite?.origin ?? '').replace(/\/$/, '');
  const urls = site.indexable
    ? allPages().flatMap((page) =>
        languages.map((lang) => {
          const alternates = [
            ...languages.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${origin}${pathFor(page, l)}"/>`),
            `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${pathFor(page, defaultLang)}"/>`,
          ].join('');
          return `<url><loc>${origin}${pathFor(page, lang)}</loc>${alternates}</url>`;
        }),
      )
    : [];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
