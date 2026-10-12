# Articole locale

Lista este `/articole`; fiecare articol are URL-ul `/articole/{slug}`.
Șablonul de lectură este `src/pages/articole/[slug].astro`, iar conținutul este în `src/data/articles.ts`.
Structura adaptează lista și pagina de articol din proiectul avocatchelaru.ro, păstrând identitatea AvocatHârlău.ro.

Primul articol complet, despre uzucapiune, este în `src/data/articles/uzucapiune.ts`. Restul intrărilor sunt modele de structură; PDF-urile vor înlocui titlurile și textele demonstrative.
Nu sunt preluate textele juridice, datele publicării sau autorii de pe site-ul de referință.

Pentru fiecare PDF, completați o intrare `Article` cu:

- `slug`, `title`, `category`, `summary`;
- `sections`: ID unic, titlu, paragrafe, liste, subtitluri și opțional notă;
- opțional `faqs`, `tags`;
- `authorSlug` din TEAM, numai când autorul este confirmat — activează portretul și secțiunea „Despre autor”;
- `date` / `updated` în format YYYY-MM-DD, numai când sunt confirmate;
- `featured` pentru articolul evidențiat în listă;
- `status: "published"` după înlocuirea integrală a conținutului demonstrativ.

Modelele `draft` au noindex, nu au schema Article și nu intră în sitemap.
Articolele publicate primesc canonical local, schema Article și intră automat în sitemap.
Lista afișează articolele publicate. Modelele apar în listă numai când nu există încă articole publicate; paginile lor rămân disponibile direct pentru verificarea structurii.

După import: `npm run check` și `npm run build`; verificați linkurile locale, cuprinsul, numele autorului și versiunea mobilă.

## Box de autor

`src/components/ArticleAuthor.astro` refolosește fotografia responsive și stilul cardului de avocat din paginile de servicii. Afișează nume, profesie, telefon și link spre profil, în sidebar pe desktop și înaintea cuprinsului pe mobil. Componenta se afișează numai când `authorSlug` este precizat și corespunde unui membru TEAM; atribuirea autorului trebuie confirmată, fără fallback către un avocat ales automat.
