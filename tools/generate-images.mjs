/**
 * Regenerates the Open Graph images (public/og/og-{en,nl}.png) from HTML using
 * Playwright's Chromium. Logo assets and icons come from tools/build_logo_assets.py
 * (run that first). Run after copy or brand changes:
 *
 *   node tools/generate-images.mjs
 *   PLAYWRIGHT_MODULE=/path/to/node_modules/playwright/index.js node tools/generate-images.mjs
 *
 * Playwright is intentionally not a project dependency; any local install works.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Fonts are inlined as data URLs: pages loaded via setContent cannot read file:// URLs.
const font = (f) => `data:font/woff2;base64,${readFileSync(path.join(root, 'public/fonts', f)).toString('base64')}`;

const copy = {
  en: { title: 'Physical Energy Sourcing &amp; Commercial Intermediation', strap: 'Netherlands-based · ARA market focus · International reach' },
  nl: { title: 'Fysieke energie-inkoop en commerciële bemiddeling', strap: 'Gevestigd in Nederland · Focus op de ARA-markt · Internationaal bereik' },
};

const logo = `data:image/webp;base64,${readFileSync(path.join(root, 'public/brand/valtrax-lockup-light.webp')).toString('base64')}`;

const rings = [60, 120, 190, 260, 330].map((r, i) =>
  `<circle cx="960" cy="315" r="${r}" fill="none" stroke="${i === 1 ? 'rgba(190,138,34,.8)' : 'rgba(255,255,255,.16)'}" ${i === 1 ? 'stroke-dasharray="2 6"' : ''}/>`,
).join('');

const page = (lang) => `<!doctype html><html><head><style>
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(180deg,#011630,#022449);color:#fff;font-family:OGSans;position:relative}
svg{position:absolute;inset:0}
.wrap{position:absolute;left:80px;top:72px;width:820px;display:flex;flex-direction:column;gap:30px;height:486px}
.mark{height:96px;width:auto;align-self:flex-start}
h1{font:500 60px/1.08 OGSerif;letter-spacing:-.02em;margin:auto 0 0}
p{margin:0;font:600 15px OGSans;letter-spacing:.14em;text-transform:uppercase;color:#9fb0c8}
p:before{content:'';display:inline-block;width:40px;height:1px;background:#be8a22;vertical-align:middle;margin-right:16px}
</style></head><body>
<svg width="1200" height="630">${rings}<circle cx="960" cy="315" r="6" fill="#be8a22"/></svg>
<div class="wrap"><img class="mark" src="${logo}" alt=""><h1>${copy[lang].title}</h1><p>${copy[lang].strap}</p></div>
</body></html>`;

const pw = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const chromium = pw.chromium ?? pw.default.chromium;
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
const tab = await ctx.newPage();
for (const lang of ['en', 'nl']) {
  await tab.setContent(page(lang), { waitUntil: 'load' });
  await tab.waitForFunction(() => [...document.images].every((i) => i.complete));
  // Register fonts through the FontFace API (CSS @font-face with data URLs is unreliable here).
  await tab.evaluate(async (faces) => {
    for (const [family, src] of faces) {
      const face = new FontFace(family, `url(${src})`, { weight: '100 900' });
      document.fonts.add(await face.load());
    }
  }, [['OGSerif', font('source-serif-4-latin-var.woff2')], ['OGSans', font('inter-latin-var.woff2')]]);
  await tab.screenshot({ path: path.join(root, `public/og/og-${lang}.png`) });
}

await browser.close();

console.log('Images generated.');
