import { buildAllEntries, toSitemapXml } from "@/lib/sitemap-builder";

export async function GET() {
  const entries = await buildAllEntries();
  const xml = toSitemapXml(entries.ja);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
