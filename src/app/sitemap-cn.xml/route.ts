import { buildAllEntries, toSitemapXml } from "@/lib/sitemap-builder";

export const revalidate = 86400;

export async function GET() {
  const entries = await buildAllEntries();
  const xml = toSitemapXml(entries.cn);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
