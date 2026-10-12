# Portret Răzvan — verde unitar și încadrare apropiată

La cererea utilizatorului, fundalul fotografiei autentice `avocat-razvan-botezatu-site-original.jpg` a fost uniformizat cu imagegen integrat, păstrând tonul verde existent. Promptul cere protejarea persoanei, a chipului și a posturii. O editare generativă poate introduce mici diferențe; nu este garantată identitatea pixel cu pixel.

Rezultatul este `public/images/echipa/avocat-razvan-botezatu-verde-unitar-closeup-v2-original.png`. Pentru o proporție a chipului apropiată de portretul Andreei, derivatele sunt crop-uite determinist cu Sharp: {left:140, top:350, width:800, height:1000}, apoi convertite în WebP/AVIF la 400×500 și 600×750 px. Site-ul folosește aceste derivate prin Portrait și metadatele Person. Originalul precedent este păstrat; hero-ul nu se schimbă.

## Prompt final

```text
Use case: precise-object-edit / identity-preserve. Edit this authentic portrait of lawyer Razvan Botezatu. Change ONLY the background behind him into one continuous, uniform muted sage green wall matching the green wall already present in the original photograph. Extend that existing green across the full background: remove the white wall and white border on the left, the white ceiling trim, the clutter and stacked papers on the left, and the beige wall panel on the right. No furniture, frames, shelves, gradients or patterns in the background; use a plain matte green wall with natural subtle photographic illumination. Preserve Razvan exactly as photographed: same face, bald head, ears, eyes, expression, facial proportions, age, skin texture, navy jacket with its small red lapel detail, white shirt, hands, watch, seated posture, and brown chair. Keep the desk foreground and hands exactly as they are. Do not beautify, slim, retouch or synthesize a new face. Keep the original full portrait composition and person size; framing approximately 2:3. No words, watermarks or new objects. Edit the background only; face and person are protected.
```
