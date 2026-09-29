import type { APIRoute } from "astro";
import { SITE, SERVICES } from "../data/site";

export const prerender = true;

const pages: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/servicii", priority: "0.9", changefreq: "monthly" },
  ...SERVICES.map((s) => ({ path: `/servicii/${s.slug}`, priority: "0.8", changefreq: "monthly" })),
  { path: "/despre", priority: "0.7", changefreq: "yearly" },
  { path: "/zona-deservita", priority: "0.7", changefreq: "yearly" },
  { path: "/intrebari-frecvente", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${SITE.url}${p.path === "/" ? "/" : p.path}</loc>
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
