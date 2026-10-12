# Secțiunea Articole

La cererea utilizatorului, linkul „Echipa” din meniul principal a fost înlocuit cu „Articole”. Echipa rămâne disponibilă în homepage și în pagina Despre noi.

Utilizatorul a ales explicit „Articole existente, cu link spre sursă”. Pagina `/articole` prezintă șapte articole de pe https://avocatchelaru.ro/articole, cu titluri editoriale scurte, rezumate proprii, categoria și data din catalogul sursă. Linkurile duc la textele originale. Nu s-au copiat integral articolele și nu s-au creat autori sau date fictive.

Structura: hero în designul actual, un articol recomandat, căutare care ignoră diacriticele, filtre pe domenii, număr de rezultate, stare fără rezultate și resetare. Fără JavaScript toate articolele rămân accesibile, iar instrumentele de filtrare sunt ascunse. Pagina este în sitemap, footer și llms.txt și include metadate CollectionPage/ItemList.

Conținutul este centralizat în `src/data/articles.ts`. Referințele originale au fost accesate pentru verificarea adreselor; pagina folosește asseturile existente ale site-ului. Astro check și build au trecut. Verificări browser la 375/768/1440 px: filtrare combinată, căutare fără diacritice, resetare, linkuri, navigare activă, fără overflow și axe WCAG 2/2.1 A/AA.
