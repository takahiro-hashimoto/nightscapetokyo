import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/auth";

const ALLOWED_AMAZON_HOSTS = [
  "amazon.co.jp", "amazon.com", "amazon.co.uk", "amazon.de", "amazon.fr",
  "amazon.it", "amazon.es", "amazon.ca", "amazon.com.au", "amazon.com.br",
  "amazon.com.mx", "amazon.nl", "amazon.sg", "amazon.se", "amazon.pl",
  "amazon.ae", "amazon.in", "amazon.com.tr", "amzn.to", "amzn.asia",
];

function isAllowedAmazonUrl(raw: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return false;
  }
  if (parsed.protocol !== "https:") return false;
  const host = parsed.hostname.toLowerCase();
  return ALLOWED_AMAZON_HOSTS.some((d) => host === d || host.endsWith(`.${d}`));
}

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
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "url パラメータが必要です" }, { status: 400 });
  }

  if (!isAllowedAmazonUrl(url)) {
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

    // 短縮URL（amzn.to等）のリダイレクト先もAmazonドメインであることを確認
    const finalUrl = res.url;
    if (finalUrl && !isAllowedAmazonUrl(finalUrl)) {
      return NextResponse.json({ error: "Amazon の URL を入力してください" }, { status: 400 });
    }

    const html = await res.text();

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

    // Price: Amazon アソシエイト・プログラム運営規約により、Amazon価格コンテンツは
    // 24時間を超えて保存・表示できない。カードに価格を表示しないため、
    // 価格のスクレイピング・取得は行わない。
    const price: string | null = null;

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
