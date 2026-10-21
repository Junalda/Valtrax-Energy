/**
 * Regenerates the Open Graph images (public/og/og-{en,nl}.png) and raster icons from
 * HTML/SVG using Playwright's Chromium. Run after copy or brand changes:
 *
 *   node tools/generate-images.mjs
 *   PLAYWRIGHT_MODULE=/path/to/node_modules/playwright/index.js node tools/generate-images.mjs
 *
 * Playwright is intentionally not a project dependency; any local install works.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Fonts are inlined as data URLs: pages loaded via setContent cannot read file:// URLs.
const font = (f) => `data:font/woff2;base64,${readFileSync(path.join(root, 'public/fonts', f)).toString('base64')}`;

const copy = {
  en: { title: 'Physical Energy Sourcing &amp; Commercial Intermediation', strap: 'Netherlands-based · ARA market focus · International reach' },
  nl: { title: 'Fysieke energie-inkoop en commerciële bemiddeling', strap: 'Gevestigd in Nederland · Focus op de ARA-markt · Internationaal bereik' },
};

const rings = [60, 120, 190, 260, 330].map((r, i) =>
  `<circle cx="960" cy="315" r="${r}" fill="none" stroke="${i === 1 ? 'rgba(184,151,90,.75)' : 'rgba(255,255,255,.16)'}" ${i === 1 ? 'stroke-dasharray="2 6"' : ''}/>`,
).join('');

const page = (lang) => `<!doctype html><html><head><style>
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(180deg,#06122a,#0b1f3a);color:#fff;font-family:Sans;position:relative}
svg{position:absolute;inset:0}
.wrap{position:absolute;left:80px;top:72px;width:820px;display:flex;flex-direction:column;gap:30px;height:486px}
.mark{display:flex;align-items:center;gap:16px}
.mark b{font:600 34px Serif;letter-spacing:.16em;text-transform:uppercase}
.mark i{width:1px;height:30px;background:#b8975a}
.mark span{font:600 16px Sans;letter-spacing:.32em;text-transform:uppercase;color:#b8975a}
h1{font:500 60px/1.08 Serif;letter-spacing:-.02em;margin:auto 0 0}
p{margin:0;font:600 15px Sans;letter-spacing:.14em;text-transform:uppercase;color:#9fb0c8}
p:before{content:'';display:inline-block;width:40px;height:1px;background:#b8975a;vertical-align:middle;margin-right:16px}
</style></head><body>
<svg width="1200" height="630">${rings}<circle cx="960" cy="315" r="6" fill="#b8975a"/></svg>
<div class="wrap"><div class="mark"><b>Valtrax</b><i></i><span>Energy</span></div><h1>${copy[lang].title}</h1><p>${copy[lang].strap}</p></div>
</body></html>`;

const pw = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const chromium = pw.chromium ?? pw.default.chromium;
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 } });
const tab = await ctx.newPage();
for (const lang of ['en', 'nl']) {
  await tab.setContent(page(lang), { waitUntil: 'load' });
  // Register fonts through the FontFace API (CSS @font-face with data URLs is unreliable here).
  await tab.evaluate(async (faces) => {
    for (const [family, src] of faces) {
      const face = new FontFace(family, `url(${src})`, { weight: '100 900' });
      document.fonts.add(await face.load());
    }
  }, [['Serif', font('source-serif-4-latin-var.woff2')], ['Sans', font('inter-latin-var.woff2')]]);
  await tab.screenshot({ path: path.join(root, `public/og/og-${lang}.png`) });
}

const svg = readFileSync(path.join(root, 'public/favicon.svg'), 'utf8');
for (const [size, file] of [[180, 'apple-touch-icon.png'], [32, 'favicon-32.png']]) {
  await tab.setViewportSize({ width: size, height: size });
  await tab.setContent(`<html><body style="margin:0">${svg.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body></html>`);
  await tab.screenshot({ path: path.join(root, file === 'favicon-32.png' ? 'tools/.favicon-32.png' : `public/${file}`), omitBackground: true });
}
await browser.close();

// Wrap the 32px PNG in a single-image ICO container.
const png = readFileSync(path.join(root, 'tools/.favicon-32.png'));
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
writeFileSync(path.join(root, 'public/favicon.ico'), Buffer.concat([header, png]));
console.log('Images generated.');
