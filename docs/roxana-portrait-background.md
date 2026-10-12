# Portret Roxana — fundal de birou ivory

Editare cu instrumentul imagegen integrat, la cererea utilizatorului. Ținta a fost `public/images/echipa/avocat-roxana-chiperi-site-original.jpg`; referința pentru fundal a fost fotografia Andreei `avocat-andreea-chelaru-site-personal-original.webp`.

Rezultatul selectat este `public/images/echipa/avocat-roxana-chiperi-birou-ivory-v2-original.png`. Variantele WebP și AVIF de 400×500 și 600×750 px sunt folosite de componenta comună Portrait și de metadatele Person. Originalul este păstrat. Fotografia de hero nu a fost schimbată.

Promptul cere modificarea exclusivă a fundalului și păstrarea Roxanei. Inspecția vizuală confirmă aceeași persoană, vestimentație și postură, cu biblioteca, perdelele și lumina caldă din referință. Editarea generativă nu garantează identitate pixel cu pixel și poate introduce mici diferențe în persoană și iluminare.

## Prompt final

```text
Use case: precise-object-edit / identity-preserve. Edit image 1, the authentic portrait of Roxana Chiperi (auburn hair, glasses, green blouse, seated with hands on a desk). Replace ONLY the green wall and framed artwork behind her with the office background from image 2 (Andreea's portrait): dark walnut law-book shelves on the left, softly lit ivory curtains and window, warm cream office interior, brass desk lamp and softly blurred white flowers on the right. Match that background's materials, soft depth of field, and warm natural daylight. Image 2 is exclusively an office/background reference: NEVER transfer the blonde woman's face, clothing or pose. Keep Roxana from image 1 completely intact: same actual facial identity and proportions, eyes, glasses, expression, skin texture, hair, earrings, green blouse, necklace, bracelets, hands, seated pose, original size and placement. Preserve the original desk and reflection in the foreground. Do not beautify, slim, smooth, reshape or redraw her face. Keep the original portrait framing, subject scale and aspect ratio approximately 2:3. Make the replacement background look naturally photographed behind her, with no seams, no other people, no lettering, no watermark. Change background only.
```

## Încadrare apropiată v3

La cererea utilizatorului, portretul este încadrat mai aproape pentru ca fața Roxanei să ocupe aproximativ aceeași proporție ca în portretul Andreei. Procesare deterministă cu Sharp: crop din originalul editat {left:175, top:480, width:650, height:813}, apoi redimensionare/compresie la 400×500 și 600×750 px. Noile variante `avocat-roxana-chiperi-birou-ivory-closeup-v3` sunt folosite în site cu object-position center top. Nu s-a generat sau retușat din nou chipul.
