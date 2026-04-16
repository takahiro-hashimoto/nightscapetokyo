import { NextRequest, NextResponse } from "next/server";

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)));
}

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "url パラメータが必要です" }, { status: 400 });
  }

  const isAmazon =
    /amazon\.(co\.jp|com|co\.uk|de|fr|it|es|ca|com\.au|com\.br|com\.mx|nl|sg|se|pl|ae|in|com\.tr)\//i.test(url) ||
    /amzn\.to\//i.test(url);
  if (!isAmazon) {
    return NextResponse.json({ error: "Amazon の URL を入力してください" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
        "Cache-Control": "no-cache",
      },
      redirect: "follow",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `ページの取得に失敗しました (HTTP ${res.status})` },
        { status: 502 }
      );
    }

    const html = await res.text();
    const finalUrl = res.url;

    // Title: og:title → <title>
    const ogTitleMatch =
      html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i) ||
      html.match(/<meta\s+content="([^"]+)"\s+property="og:title"/i);
    const titleTagMatch = html.match(/<title>([^<]+)<\/title>/i);
    const rawTitle = ogTitleMatch?.[1] ?? titleTagMatch?.[1] ?? null;
    const title = rawTitle
      ? decodeHtmlEntities(rawTitle)
          .replace(/\s*[:\|]?\s*Amazon\.co\.jp\s*$/i, "")
          .trim()
      : null;

    // Image: og:image
    const ogImageMatch =
      html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i) ||
      html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i);
    const image = ogImageMatch?.[1] ?? null;

    // Price: a-offscreen (スクリーンリーダー向け価格テキスト) → priceblock
    let price: string | null = null;
    const offscreenMatches = [...html.matchAll(/<span\s+class="a-offscreen">([^<]+)<\/span>/g)];
    if (offscreenMatches.length > 0) {
      price = offscreenMatches[0][1].trim();
    }
    if (!price) {
      const priceMatch = html.match(/id="priceblock_ourprice"[^>]*>\s*([^<]+)</);
      if (priceMatch) price = priceMatch[1].trim();
    }
    if (!price) {
      const aprice = html.match(/<span[^>]*class="[^"]*a-price-whole[^"]*"[^>]*>([^<]+)</);
      if (aprice) {
        const fraction = html.match(/<span[^>]*class="[^"]*a-price-fraction[^"]*"[^>]*>([^<]+)</);
        price = `¥${aprice[1].replace(/[^\d,]/g, "")}${fraction ? fraction[1] : ""}`;
      }
    }

    // Canonical URL
    const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    const productUrl = canonicalMatch?.[1] ?? finalUrl;

    return NextResponse.json({
      title,
      image,
      price,
      url: productUrl,
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "取得中にエラーが発生しました" }, { status: 500 });
  }
}
