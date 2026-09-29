import type { APIRoute } from "astro";
import { SITE, AREAS, TEAM, LOCALITIES } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${SITE.name} – ${SITE.firm}

> Casă de avocatură cu ${SITE.tagline.toLowerCase()}, pentru clienții din Hârlău și din comunele arondate Judecătoriei Hârlău (${LOCALITIES.join(", ")}), județul Iași.

## Avocați
${TEAM.map((p) => `- ${p.name}: ${p.phone}`).join("\n")}

## Contact
- Email: ${SITE.email}
- Adresă: ${SITE.address}
- Hârlău: ${SITE.officeHarlau}
- Program: ${SITE.hours}
- Formular: ${SITE.url}/contact

## Domenii de activitate
${AREAS.map((a) => `- [${a.title}](${SITE.url}/${a.slug}): ${a.short}`).join("\n")}

## Pagini
- [Despre noi](${SITE.url}/despre-noi)
- [Contact](${SITE.url}/contact)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
