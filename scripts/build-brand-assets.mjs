import fs from "node:fs/promises";
import sharp from "sharp";
const root = new URL("../public/", import.meta.url);
const at = (p) => new URL(p, root);
const brand = JSON.parse(await fs.readFile(new URL('../src/data/brand.json', import.meta.url), 'utf8'));
// Keep the exported assets and favicon identical to the live Astro monogram.
const paths = (accent = brand.accent, ink = brand.ink) => `<g fill="none"><path d="${brand.a}" stroke="${accent}" stroke-width="${brand.aStroke}"/><path d="${brand.h}" stroke="${ink}" stroke-width="${brand.hStroke}"/></g>`;
const fontCss = await fs.readFile(new URL('../src/styles/fonts.css', import.meta.url), 'utf8');
let embeddedFonts = fontCss;
for (const file of ['fraunces-latin-ext', 'fraunces-latin', 'manrope-latin-ext', 'manrope-latin']) {
  const data = (await fs.readFile(at(`fonts/editorial/${file}.woff2`))).toString('base64');
  embeddedFonts = embeddedFonts.replace(`/fonts/editorial/${file}.woff2`, `data:font/woff2;base64,${data}`);
}
await fs.mkdir(at('images/logo'), {recursive:true});
for (const [name, color, accent] of [['primary',brand.ink,brand.accent], ['white','#fff','#fff']]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="140" viewBox="0 0 720 140" role="img" aria-label="AvocatHârlău.ro — Chelaru, Botezatu, Chiperi"><style>${embeddedFonts}</style><g transform="translate(8 20)">${paths(accent,color)}</g><text x="174" y="89" fill="${color}" font-family="Fraunces, Georgia, serif" font-size="72" font-weight="400" letter-spacing="-3.24" style="font-variation-settings:'opsz' 72,'SOFT' 0,'WONK' 0">AvocatHârlău.ro</text><text x="174" y="116" fill="${color}" font-family="Manrope, Arial, sans-serif" font-size="19" font-weight="500" textLength="516" lengthAdjust="spacing">CHELARU | BOTEZATU | CHIPERI</text></svg>`;
  await fs.writeFile(at(`images/logo/avocat-harlau-${name}.svg`), svg);
}
const symbol = `<svg xmlns="http://www.w3.org/2000/svg" width="124" height="100" viewBox="${brand.viewBox}" role="img" aria-label="Monogramă AH">${paths()}</svg>`;
await fs.writeFile(at('images/logo/avocat-harlau-symbol.svg'),symbol);
await fs.writeFile(at('images/logo/avocat-harlau-monogram.svg'),symbol);
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 140 140" role="img" aria-label="AH"><g transform="translate(8 20)">${paths()}</g></svg>`;
await fs.writeFile(at('favicon.svg'), favicon);
for (const [file,size] of [['favicon-96x96.png',96],['icon-192.png',192],['icon-512.png',512]]) {
  await sharp(Buffer.from(favicon)).resize(size,size).png().toFile(at(file).pathname);
}
const apple = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 140 140"><rect width="140" height="140" fill="#f8f6f3"/><g transform="translate(8 20)">${paths()}</g></svg>`;
await sharp(Buffer.from(apple)).png().toFile(at('apple-touch-icon.png').pathname);
const png=await sharp(Buffer.from(favicon)).resize(48,48).png().toBuffer();
const header=Buffer.alloc(22);
header.writeUInt16LE(1,2); header.writeUInt16LE(1,4); header[6]=48; header[7]=48;
header.writeUInt16LE(1,10); header.writeUInt16LE(32,12); header.writeUInt32LE(png.length,14); header.writeUInt32LE(22,18);
await fs.writeFile(at('favicon.ico'),Buffer.concat([header,png]));
console.log('Reference AH logo variants and favicon assets saved.');
