import type { APIRoute } from "astro";
import { SITE, AREAS, TEAM, LOCALITIES } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${SITE.name} – ${SITE.firm}

> ${SITE.tagline} pentru clienții din Hârlău și din localitățile învecinate (${LOCALITIES.join(", ")}), județul Iași.

## Avocați
${TEAM.map((p) => `- ${p.name}: ${p.phone}`).join("\n")}

## Contact
- Email: ${SITE.email}
- Hârlău: ${SITE.officeHarlau}
- Program: ${SITE.hours}
- Formular: ${SITE.url}/contact

## Domenii de activitate
${AREAS.map((a) => `- [${a.title}](${SITE.url}/${a.slug}): ${a.short}`).join("\n")}

## Pagini
- [Servicii](${SITE.url}/servicii)
- [Articole](${SITE.url}/articole)
- [Despre noi](${SITE.url}/despre-noi)
- [Contact](${SITE.url}/contact)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
