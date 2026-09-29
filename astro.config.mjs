import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://avocatharlau.ro",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  server: {
    host: true,
  },
});
