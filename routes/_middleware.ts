import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 630,
  site: "devorioli",
  domains: ["deco-sites-devorioli.deno.dev"],
});