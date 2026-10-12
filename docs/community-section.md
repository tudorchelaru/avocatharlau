# Secțiunea comunității

Secțiune reconstruită semantic după referința vizuală a utilizatorului: peisaj panoramic estompat, titlu serif, hartă SVG și card burgundy. Cormorant Garamond este folosit numai în această secțiune pentru a corespunde referinței; restul site-ului păstrează Montserrat.

Imagine: `public/images/comunitate/peisaj-comunitate-original.png`, fundal decorativ generat cu instrumentul integrat image_gen pornind de la referință. Nu reprezintă un sediu sau un monument identificat din Hârlău. Variante WebP/AVIF la 960, 1600 și 2172 px.

Harta folosește poligoane administrative și coordonate reprezentative din OpenStreetMap/Nominatim pentru Hârlău, Deleni, Scobinți, Cotnari și Belcești. Acestea indică zonele geografice, nu sedii de avocatură. Contururile reprezintă aceste zone administrative, nu conturul întregului județ Iași. Pozițiile decorative greșite din referință nu au fost reproduse. Date: `src/data/community-map.json`. Licență ODbL 1.0, © OpenStreetMap contributors, cu atribuire vizibilă.

## Prompt pentru fundal

Use case: precise-object-edit / background reconstruction.
Edit target: attached website-section reference image.
Extract and reconstruct ONLY the decorative photographic landscape background from this reference: softly sunlit rolling hills, woodland, a small historic stone church with a slim tower near the center, warm ivory mist and very muted sage/olive foliage. Keep the same broad composition, soft golden morning atmosphere and pale cream/sepia palette. It is decorative scenic concept imagery, not a claim to depict an identified real landmark or office.
REMOVE COMPLETELY all overlaid typography, text, dots, map outlines, geographic names, burgundy card, icons, divider lines, borders, the white strip at the top, and burgundy next-section strip at the bottom. Reconstruct the landscape naturally under the removed overlays. No UI, no text, no map, no labels.
Output a very wide panoramic photographic background with about a 4:1 aspect ratio for this single website section. Keep the church/tower at roughly 52 percent of the frame width, the left 38 percent softly faded and light for dark text overlay, and the right 30 percent pale, hazy and softly detailed so an actual SVG map can be placed over it in HTML. Preserve rich but understated landscape detail in the central third; do not make the whole image blank cream. No people, no extra large buildings, no logos, no watermark.
