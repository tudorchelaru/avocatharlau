import type { APIRoute } from "astro";
import { SITE, SERVICES, LOCALITIES } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `# ${SITE.name}

> Cabinet de avocatură pentru clienții din Hârlău și zona Cotnari, județul Iași. Avocat Andreea Chelaru, membră a Baroului Iași din ${SITE.since}. Reprezentare la Judecătoria Hârlău și Tribunalul Iași.

## Contact
- Telefon: ${SITE.phone}
- WhatsApp: ${SITE.whatsapp}
- Email: ${SITE.email}
- Cabinet Iași: ${SITE.officeIasi}
- Cabinet Hârlău: ${SITE.officeHarlau}
- Program: ${SITE.hours}

## Servicii
${SERVICES.map((s) => `- [${s.title}](${SITE.url}/servicii/${s.slug}): ${s.short}`).join("\n")}

## Pagini
- [Despre](${SITE.url}/despre)
- [Zona deservită](${SITE.url}/zona-deservita): ${LOCALITIES.join(", ")}
- [Întrebări frecvente](${SITE.url}/intrebari-frecvente)
- [Contact](${SITE.url}/contact)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
