import type { APIRoute } from "astro";

// Serve an HTTP redirect rather than a prerendered meta-refresh document.
export const prerender = false;

export const GET: APIRoute = ({ url }) =>
  new Response(null, {
    status: 301,
    headers: { Location: `/avocat-drept-penal-harlau${url.search}` },
  });

export const HEAD = GET;
