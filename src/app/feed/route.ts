import { getArticles } from "@/lib/supabase/queries/articles";
import { SITE_URL } from "@/lib/types";

export const revalidate = false;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = await getArticles();

  // getArticles は published_at DESC 順なので articles[0] は「最新公開」であって
  // 「最終更新」ではない。古い記事を直しても lastBuildDate が動かないため最大値を取る。
  const lastBuildDate =
    articles.length > 0
      ? new Date(
          Math.max(
            ...articles.map((a) =>
              new Date(a.updated_at ?? a.created_at ?? 0).getTime()
            )
          )
        ).toUTCString()
      : new Date().toUTCString();

  const items = articles
    .slice(0, 50)
    .map((article) => {
      const link = `${SITE_URL}/article/${article.slug}/`;
      const pubDate = article.published_at
        ? new Date(article.published_at).toUTCString()
        : new Date(article.created_at).toUTCString();
      const title = escapeXml(article.title ?? "");
      // description が空の記事で <description></description> を出すと、
      // リーダー側は「本文なし」として扱う。無い場合は要素ごと省く。
      const descriptionXml = article.description
        ? `\n      <description>${escapeXml(article.description)}</description>`
        : "";

      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>${descriptionXml}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>nightscape.tokyo</title>
    <link>${SITE_URL}/</link>
    <description>夜景・星空・絶景スポット情報メディア</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed/" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
