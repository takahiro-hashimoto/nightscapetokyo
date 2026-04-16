/**
 * OGP (Open Graph Protocol) メタデータを外部URLから取得するユーティリティ。
 * ref-card のサムネイル表示に使用する。
 */

export type OgpData = {
  imageUrl?: string;
};

/** og:image の安全なHTTP(S) URLのみ許可 */
function sanitizeImageUrl(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return undefined;
    return url;
  } catch {
    return undefined;
  }
}

/** HTML文字列から og:image を抽出 */
function extractOgImage(html: string): string | undefined {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return sanitizeImageUrl(m[1]);
  }
  return undefined;
}

async function fetchOgp(url: string): Promise<OgpData> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" },
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });
    clearTimeout(timer);

    if (!res.ok) return {};

    // HTML 全体を読み込むと重いため <head> 部分だけを処理
    const text = await res.text();
    const head = text.slice(0, 10000); // 先頭10KB で十分

    const imageUrl = extractOgImage(head);
    return imageUrl ? { imageUrl } : {};
  } catch {
    return {};
  }
}

/**
 * HTML 文字列内の relatedLink ショートコードおよび wp:loos/post-link ブロックに含まれる
 * URLのOGPデータを一括取得する。
 *
 * @returns URL → OgpData のマップ（og:image が取得できた URL のみ含む）
 */
export async function prefetchOgpData(html: string): Promise<Map<string, OgpData>> {
  const urls = new Set<string>();

  // [relatedLink url="..."]
  const relatedRe = /\[relatedLink\s+[^\]]*url="([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = relatedRe.exec(html)) !== null) {
    urls.add(m[1]);
  }

  // <!-- wp:loos/post-link {"linkData":{"url":"..."}} /-->
  const postLinkRe = /<!--\s*wp:loos\/post-link\s+([\s\S]*?)\s*\/-->/g;
  while ((m = postLinkRe.exec(html)) !== null) {
    try {
      const data = JSON.parse(m[1]) as { linkData?: { url?: string } };
      if (data.linkData?.url) urls.add(data.linkData.url);
    } catch {
      // ignore
    }
  }

  if (urls.size === 0) return new Map();

  const entries = await Promise.all(
    [...urls].map(async (url) => {
      const ogp = await fetchOgp(url);
      return [url, ogp] as [string, OgpData];
    })
  );

  // og:image が取れたもののみ格納
  return new Map(entries.filter(([, ogp]) => ogp.imageUrl));
}
