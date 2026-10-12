# Corectarea chipului Andreei în hero

Mod: editare cu instrumentul imagegen integrat, la cererea utilizatorului. Imaginea de grup furnizată a fost folosită ca țintă, iar fotografiile autentice `5F8A4472.JPG`, `5F8A4456.JPG` și `5F8A4484.JPG` din `/Users/tchelaru/Documents/poze_ada` ca referințe de identitate.

Rezultat: `public/images/hero/avocati-harlau-chelaru-botezatu-chiperi-andreea-v2.png`, cu variante responsive WebP și AVIF la 768, 1200 și 1536 px. Originalul anterior rămâne păstrat. Hero-ul folosește noua variantă; fotografiile individuale nu au fost schimbate.

Inspecția vizuală arată trăsături mai apropiate de referințe și aceeași compoziție. Aceasta este o editare generativă, nu o înlocuire deterministă a pixelilor feței: nu se garantează identitate 100% sau lipsa oricăror diferențe în restul imaginii.

## Prompt final

Actualizare: la cererea de apropiere suplimentară de identitatea reală, a fost creată varianta `avocati-harlau-chelaru-botezatu-chiperi-andreea-v3.png`, cu aceleași derivate responsive. Aceasta este varianta folosită acum în hero. Fotografia `5F8A4472.JPG` a fost referința principală, iar `5F8A4456.JPG` referința secundară. Versiunile anterioare sunt păstrate. Asemănarea este supusă confirmării persoanei; nu este garantată identitatea exactă sau invariabilitatea pixelilor din alte zone.

### Prompt v3 — instrumentul imagegen integrat

```text
Use case: identity-preserve. Edit image 1 (three lawyers in an office). Replace ONLY the facial region of the standing blonde woman at the LEFT with the actual face of Andreea Chelaru in image 2. Image 2 is the primary identity source, image 3 confirms her identity. Treat this as a precise photographic identity transfer, not a resemblance or beauty retouch. The current generated face is still too slim and elongated and has different eye/nose/mouth proportions. Reproduce the full natural, wider, rounder cheek and lower-face shape, rounded chin, authentic eye spacing, actual eyelids, eyebrows, nose width and shape, and lip contour from image 2. Preserve the authentic asymmetries and age. Do not average her face with the generated face. Do not thin her cheeks or jaw, enlarge eyes, narrow nose, reshape lips, or beautify. The actual reference identity has priority over preserving the generated face's outline. Use the reference's near-frontal head orientation and expression if necessary for faithful identity, with natural lighting adapted to the office. Keep her head approximately the same size and position, retain the standing black-suit body, hands, hair color, and pose. Preserve both seated lawyers EXACTLY as in image 1, and preserve all furniture, books, background, framing, color and lighting. Change only the left woman's face and immediately adjacent blending edges. Landscape 1536x1024 3:2, no text or annotations.
```

### Prompt v2

```text
Edit the FIRST image, the three lawyers in an office. Make a very localized identity correction ONLY to the face of the blonde woman standing on the LEFT, Andreea Chelaru. Images 2, 3 and 4 are authentic photographs of this same woman and are the identity references. Match her actual facial structure, facial width, cheeks, jaw and chin, eyes, nose and lips to these authentic photographs, retaining her real age and natural skin texture. Her current face in image 1 is too narrow and resembles a different person. Use the authentic identity, not a beautified or generic face. Preserve the existing head angle and expression as closely as possible, and blend the corrected face naturally with the original warm office lighting. Keep her original hairstyle, hair color, body, pose, hands, black suit, and placement. Absolutely preserve the other two lawyers' faces, bodies, clothing, hands and poses. Preserve the entire office, books, furniture, lighting, composition and framing. Do not redraw or restyle the scene. Output the same landscape 3:2 composition without annotations or text. Only the standing woman's facial region should be edited.
```

## Header suprapus

La cererea utilizatorului, fotografia ocupă întreaga lățime a hero-ului și începe în partea de sus, sub header-ul fix transparent. Textul este poziționat în zona inferioară cu un gradient deschis pentru lizibilitate și pentru a păstra chipurile vizibile. Pe mobil fotografia este păstrată integral sub zona meniului, iar textul urmează după fotografie. Header-ul primește fundal la scroll. Build-ul și verificările responsive la șase lățimi au trecut.
