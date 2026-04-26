import { getArticles } from "@/lib/supabase/queries/articles";
import { SITE_URL } from "@/lib/types";

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

  const lastBuildDate =
    articles.length > 0
      ? new Date(articles[0].updated_at ?? articles[0].created_at ?? Date.now()).toUTCString()
      : new Date().toUTCString();

  const items = articles
    .slice(0, 50)
    .map((article) => {
      const link = `${SITE_URL}/article/${article.slug}/`;
      const pubDate = article.published_at
        ? new Date(article.published_at).toUTCString()
        : new Date(article.created_at).toUTCString();
      const title = escapeXml(article.title ?? "");
      const description = escapeXml(article.description ?? "");

      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
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
