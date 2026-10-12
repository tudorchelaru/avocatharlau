# Logo, tipografie și hero după referința utilizatorului

Header separat de hero, pe fundal deschis; textul hero-ului este în stânga, fotografia grupului în dreapta, cu tranziție discretă. Imaginea folosită este varianta existentă `avocati-harlau-chelaru-botezatu-chiperi-andreea-v3`, nu fotografia din mockup. Pe mobil textul și fotografia integrală sunt stivuite. Nu a fost generată o imagine nouă în această etapă.

## Sistem tipografic

Plus Jakarta Sans pentru h1–h4; DM Sans pentru corp, navigare, butoane și etichete. Hero-ul folosește noua cerință `clamp(48px, 6.2vw, 88px)`, greutate 600, line-height 1.08 și letter-spacing -0.055em. Celelalte headinguri păstrează scara responsive: h2–h4 desktop 54/30/24 px, tabletă 44/27/22 px și mobil 36/25/21 px. Corpul este 17 px pe desktop și 16 px pe tabletă/mobil. Fontul serif anterior a fost înlocuit în toate stilurile active, inclusiv în comunitate și în variantele SVG de logo. Culorile sunt #202020, #686460, #67373e și #f8f6f2.

## Brand

`src/components/BrandLogo.astro` folosește un simbol SVG cu trei coloane și text HTML real, reutilizat în header și footer, cu link accesibil către homepage. Wordmark 32 px/700 și letter-spacing -0.045em, subtitlu 9 px/500; pe mobil 25 px și 7 px. Nu sunt utilizate imagini decupate din mockup.

În `public/images/logo/`: variantele `avocat-harlau-primary.svg`, `avocat-harlau-white.svg`, `avocat-harlau-symbol.svg` și `avocat-harlau-monogram.svg`. SVG-urile cu wordmark includ subseturi ale fonturilor (doar caracterele logo-ului) pentru afișare independentă. Fonturile și licențele OFL sunt în `public/fonts/brand/`; surse: Google Fonts și depozitul oficial google/fonts. Generatorul reproductibil este `scripts/build-brand-assets.mjs`.

Favicon AH geometric, transparent: `public/favicon.svg`; compatibilitate: `favicon.ico`, `favicon-96x96.png`, `icon-192.png`, `icon-512.png`; Apple touch icon: `apple-touch-icon.png`. Manifestul folosește aceleași culori. Asseturile raster ale logo-ului anterior sunt păstrate, dar header-ul/footer-ul nu le mai folosesc.

## Validare

Astro check și build fără erori. Verificări browser la 375, 430, 768, 1024, 1440 și 1920 px pentru poziționare, imagine, fonturi, dimensiunile titlului și lipsa overflow-ului orizontal. Meniu mobil funcțional; axe WCAG 2 A/AA și 2.1 AA fără încălcări pe homepage.

Actualizare Plus Jakarta Sans: logo cu greutate 700 și headinguri geometrice, păstrând DM Sans, paleta și compoziția. Subsetul SVG este `plus-jakarta-sans-700-logo.ttf`, cu licență OFL. Fontul precedent nu mai este utilizat în designul activ. Verificate și șapte pagini la 375/1440 px, fără overflow.

## Hero compact pentru laptop

La cererea ulterioară a utilizatorului, titlul homepage-ului este redus la `clamp(44px, 4.8vw, 72px)`, cu înălțime minimă a hero-ului de 560 px. Pentru viewport-uri desktop/tabletă cu înălțime ≤800 px: titlu până la 64 px, hero de minimum 500 px și spațiere verticală redusă. La 1280×650, următoarea secțiune începe la y=581, deci este vizibilă fără scroll. Fotografia este ancorată sus pentru păstrarea chipurilor.

## Subtitlu aliniat la lățimea wordmark-ului

Subtitlul logo-ului este distribuit caracter cu caracter pe lățimea rândului principal, fără deformarea literelor. Măsurătorile browserului confirmă 234.21875 px pentru ambele rânduri pe desktop și 182.984375 px pe mobil, cu margini aliniate. SVG-urile primary/white folosesc textLength și lengthAdjust=spacing pentru aceeași aliniere.
