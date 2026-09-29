import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://avocatharlau.ro",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  trailingSlash: "never",
  // Trust Host / X-Forwarded-* from nginx + Cloudflare, otherwise the origin check
  // rejects every contact form POST (Astro falls back to "localhost").
  security: {
    allowedDomains: [{ hostname: "avocatharlau.ro", protocol: "https" }, { hostname: "localhost" }, { hostname: "127.0.0.1" }],
  },
  // Old URLs from the first version of the site, and the original site's "desprenoi" slug.
  redirects: {
    "/despre": "/despre-noi",
    "/desprenoi": "/despre-noi",
    "/servicii": "/",
    "/zona-deservita": "/",
    "/intrebari-frecvente": "/",
    "/servicii/dreptul-familiei": "/familie",
    "/servicii/drept-civil": "/civil",
    "/servicii/dreptul-muncii": "/civil",
    "/servicii/drept-contraventional": "/amenzi-contraventii",
    "/servicii/drept-comercial-bancar": "/drept-bancar-si-fiscal",
    "/servicii/contencios-administrativ": "/drept-bancar-si-fiscal",
  },
  build: {
    inlineStylesheets: "always",
  },
  server: {
    host: true,
  },
});
