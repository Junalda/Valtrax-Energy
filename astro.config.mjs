// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// Production origin. Keep configurable until the domain is confirmed (see docs/OWNER-REVIEW.md).
const SITE_URL = (process.env.SITE_URL || 'https://valtraxenergy.com').replace(/\/+$/, '');

// Indexing is opt-in: SITE_INDEXING=true, and on Vercel only for the Production environment.
// Preview and development builds therefore always ship `noindex` and a disallowing robots.txt.
const SITE_INDEXABLE =
  process.env.SITE_INDEXING === 'true' &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  // Pages are prerendered; only /api/enquiry opts out and runs as a Vercel function.
  output: 'static',
  adapter: vercel(),
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  vite: {
    define: { __SITE_INDEXABLE__: JSON.stringify(SITE_INDEXABLE) },
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
