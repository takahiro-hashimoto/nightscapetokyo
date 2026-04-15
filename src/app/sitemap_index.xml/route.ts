import { toSitemapIndexXml } from "@/lib/sitemap-builder";

export async function GET() {
  const xml = toSitemapIndexXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
