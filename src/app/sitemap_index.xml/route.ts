import { toSitemapIndexXml } from "@/lib/sitemap-builder";

// これが無いと sitemap-builder の import 連鎖（unstable_cache）で動的扱いになり、
// クローラーのヒットごとに関数が起動し lastmod も応答ごとに揺れる。
export const revalidate = false;

export async function GET() {
  const xml = toSitemapIndexXml();

  // Cache-Control は next.config.ts の headers() が一括で付ける（ここに書いても上書きされる）
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
