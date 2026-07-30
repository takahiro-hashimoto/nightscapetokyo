import { toSitemapIndexXml } from "@/lib/sitemap-builder";

// これが無いと sitemap-builder の import 連鎖（unstable_cache）で動的扱いになり、
// クローラーのヒットごとに関数が起動し lastmod も応答ごとに揺れる。
export const revalidate = false;

export async function GET() {
  const xml = toSitemapIndexXml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
