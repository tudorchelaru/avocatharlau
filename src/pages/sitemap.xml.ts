import type { APIRoute } from "astro";
import { SITE, AREAS } from "../data/site";

export const prerender = true;

const pages: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  ...AREAS.map((a) => ({ path: `/${a.slug}`, priority: "0.8", changefreq: "monthly" })),
  { path: "/despre-noi", priority: "0.7", changefreq: "yearly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/politica-de-confidentialitate", priority: "0.2", changefreq: "yearly" },
  { path: "/termeni-si-conditii", priority: "0.2", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${SITE.url}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
