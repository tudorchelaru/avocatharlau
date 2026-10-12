# Fotomontaj cu chipurile originale

Varianta finală folosește fotografiile reale ale celor trei avocați. Pentru Andreea a fost aleasă `5F8A4484.JPG` din `/Users/tchelaru/Documents/poze_ada`: în picioare, cu sacou alb și privirea spre cameră.

Persoanele nu sunt regenerate cu AI. Imaginile sursă sunt redimensionate proporțional, decupate cu măști de contur și compuse fără retuș facial, schimbarea expresiei, deformare sau corecții de culoare. La dimensiunea montajului, verificarea automată compară pixelii din zone centrale ale celor trei fețe cu sursele redimensionate, înainte de compresia pentru web. Toate cele trei comparații sunt identice. Variantele web aplică numai redimensionare și compresie.

Instrumentul integrat image_gen a fost folosit doar pentru fundalul gol de birou, cu perete verde și masă, fără persoane. Imaginea nu documentează un sediu real și este etichetată ca fotomontaj.

Fișier final: `public/images/hero/avocati-fotomontaj-original.png`, 1536×1024. Variante AVIF/WebP: 768, 1200 și 1536 px.

Sursă Andreea: `public/images/hero/sources/andreea-chelaru-5F8A4484.jpg`.

Surse Răzvan și Roxana: fotografiile WebP originale de 600 px din `public/images/echipa/`. Fotografiile profilurilor au rămas intacte.

Reproducere: `node scripts/build-team-montage.mjs`. Rezultatul verificării: `docs/team-montage-verification.json`.

## Prompt pentru fundal

Create ONLY an EMPTY office background plate for a non-generative photo montage. The two reference photos show the real office background color: preserve the muted sage/teal green wall, white ceiling trim, subdued ordinary office lighting and simple wooden desk. Remove/omit ALL PEOPLE completely; do not generate any face, body, silhouette, person, reflection of a person or human-shaped object. Landscape 3:2. A large simple medium-brown wood desk occupies the bottom 22% of the frame, camera at seated eye level. Main wall is green, close to the reference wall color. Left edge may have a narrow white bookcase with restrained legal books, the main central and right wall plain green, a small abstract framed artwork high on the upper right. Leave the full middle of the frame clear and empty for us to place the original unaltered photographs ourselves. Natural soft light, ordinary authentic office, no luxury restyling, no text, logos, watermark or extra furniture obstructing people to be inserted. This image will supply the environment only.
