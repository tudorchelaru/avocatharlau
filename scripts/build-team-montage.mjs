/** Deterministic photo montage: original faces are composited, never synthesized or retouched. */
import sharp from "sharp";
import fs from "node:fs/promises";
const root = new URL("../", import.meta.url);
const at = (path) => new URL(path, root).pathname;
const width = 1536,
  height = 1024;
const people = [
  {
    name: "Andreea Chelaru",
    path: "public/images/hero/sources/andreea-chelaru-5F8A4484.jpg",
    w: 660,
    h: 990,
    x: 65,
    y: 100,
    mask: "M298 99 C271 100 241 115 223 147 C208 174 200 208 197 243 L194 279 197 299 C176 299 151 310 149 336 C147 380 148 401 157 431 L173 477 C175 491 177 500 185 516 L188 561 C185 583 182 611 181 645 L178 696 C175 742 172 781 174 810 C185 815 197 811 208 808 L221 900 H423 L418 867 413 810 C428 807 440 800 450 786 L446 750 441 700 437 653 429 611 426 588 L428 571 C457 568 472 548 476 525 C480 507 478 483 467 465 L451 434 430 401 409 360 C407 344 404 319 387 307 L378 287 C380 266 381 243 378 212 C376 181 367 148 352 128 C337 107 316 98 298 99 Z",
    baseH: 900,
    face: { left: 278, top: 179, width: 102, height: 116 },
  },
  {
    name: "Răzvan Botezatu",
    path: "public/images/echipa/avocat-razvan-botezatu-600w.webp",
    w: 660,
    h: 825,
    x: 440,
    y: 100,
    mask: "M316 225 C285 225 264 240 255 258 C248 273 246 293 249 307 L245 311 C239 309 237 315 240 329 C240 342 244 350 251 359 L262 375 266 394 C236 402 189 410 164 425 C158 435 153 450 146 470 L125 513 108 565 89 595 C80 615 71 642 68 668 C64 691 76 714 104 717 L164 735 235 744 C300 755 352 747 400 745 L451 739 497 736 531 735 C556 737 577 727 584 713 C594 692 582 662 574 642 L565 592 551 539 535 494 527 467 C509 446 497 427 468 417 L385 393 383 373 C391 356 400 348 400 332 C403 323 404 314 395 311 L390 287 C385 250 355 224 316 225 Z",
    baseH: 750,
    face: { left: 294, top: 324, width: 104, height: 108 },
  },
  {
    name: "Roxana Chiperi",
    path: "public/images/echipa/avocat-roxana-chiperi-600w.webp",
    w: 660,
    h: 825,
    x: 830,
    y: -10,
    mask: "M305 326 C276 325 246 335 230 357 C218 375 213 397 211 425 C205 436 210 449 219 459 C223 469 222 480 210 493 C195 506 195 513 210 523 L208 527 C184 529 160 534 147 546 C127 560 114 586 104 610 L84 652 74 666 82 672 C63 696 56 720 51 750 H528 C519 713 511 694 497 678 L480 652 C474 624 462 598 445 572 C435 553 425 543 409 536 L392 535 C418 517 422 507 413 495 L405 477 C409 466 403 450 399 442 C400 418 391 391 385 377 C373 346 340 324 305 326 Z",
    baseH: 750,
    face: { left: 272, top: 451, width: 103, height: 105 },
  },
];
const background = at("public/images/hero/birou-verde-fundal.png");
const layers = [],
  originals = [];
for (const p of people) {
  const photo = await sharp(at(p.path))
    .rotate()
    .resize(p.w, p.h)
    .ensureAlpha()
    .png()
    .toBuffer();
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${p.w}" height="${p.h}" viewBox="0 0 600 ${p.baseH}"><path fill="white" d="${p.mask}"/></svg>`,
  );
  const cutout = await sharp(photo)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
  // Clip only at canvas boundaries; do not move or warp any facial feature.
  const left = Math.max(p.x, 0),
    top = Math.max(p.y, 0),
    cropLeft = Math.max(-p.x, 0),
    cropTop = Math.max(-p.y, 0);
  const clipped = await sharp(cutout)
    .extract({
      left: cropLeft,
      top: cropTop,
      width: Math.min(p.w - cropLeft, width - left),
      height: Math.min(p.h - cropTop, height - top),
    })
    .toBuffer();
  layers.push({ input: clipped, left, top });
  originals.push({ p, photo });
}
// The desk foreground hides the lower cutout boundaries, without touching any face.
const desk = await sharp(background)
  .extract({ left: 0, top: 803, width: 1536, height: 221 })
  .resize(1536, 244)
  .png()
  .toBuffer();
layers.push({ input: desk, left: 0, top: 780 });
const final = await sharp(background).composite(layers).png().toBuffer();
const checks = [];
for (const { p, photo } of originals) {
  const a = await sharp(photo).extract(p.face).removeAlpha().raw().toBuffer();
  const b = await sharp(final)
    .extract({ ...p.face, left: p.face.left + p.x, top: p.face.top + p.y })
    .removeAlpha()
    .raw()
    .toBuffer();
  if (!a.equals(b))
    throw new Error(`Original face pixels changed for ${p.name}`);
  checks.push({ person: p.name, originalFacePixelsMatch: true });
}
const basename = at("public/images/hero/avocati-fotomontaj-original");
await fs.writeFile(basename + ".png", final);
for (const size of [768, 1200, 1536]) {
  await sharp(final)
    .resize({ width: size })
    .webp({ quality: 90 })
    .toFile(`${basename}-${size}w.webp`);
  await sharp(final)
    .resize({ width: size })
    .avif({ quality: 70, effort: 5 })
    .toFile(`${basename}-${size}w.avif`);
}
await fs.writeFile(
  at("docs/team-montage-verification.json"),
  JSON.stringify(
    {
      method:
        "Original photo pixels, spatial resize only; no generative processing or facial retouching",
      checks,
    },
    null,
    2,
  ) + "\n",
);
console.log(checks);
