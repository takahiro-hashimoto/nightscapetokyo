import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/types";

/**
 * AI検索（回答内で引用・リンクしてくれる＝流入になる）クローラー。
 * 明示的に allow しておくと、将来 "*" 側を絞ったときにも巻き添えにならない。
 */
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",    // ChatGPT Search
  "ChatGPT-User",     // ChatGPT がユーザー要求で個別に取得
  "PerplexityBot",    // Perplexity のインデックス
  "Perplexity-User",  // Perplexity がユーザー要求で個別に取得
  "Claude-SearchBot", // Claude の検索インデックス
  "Claude-User",      // Claude がユーザー要求で個別に取得
  "DuckAssistBot",    // DuckDuckGo AI
  "Applebot",         // Siri / Spotlight
  "Amazonbot",        // Alexa
];

/**
 * 学習用（モデルの訓練データに使うだけで流入にならない）クローラー。
 *
 * 注意: Google-Extended は Gemini の「学習」だけでなく、Gemini アプリの
 * グラウンディング（回答内での引用）も止める。検索の AI Overviews は
 * Googlebot 側なので影響しない。Gemini からの引用も取りにいくなら
 * この配列から Google-Extended を外すこと。
 */
const AI_TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "FacebookBot",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "Diffbot",
  "omgilibot",
  "omgili",
  "ImagesiftBot",
  "PanguBot",
  "Timpibot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "AI2Bot",
  "Kangaroo Bot",
];

/** SEO分析ツール・行儀の悪いクローラー（Edge Requests削減目的） */
const SCRAPER_BOTS = [
  "Bytespider",
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
];

// 検索エンジン・AI検索の双方に共通で見せないパス
const DISALLOWED_PATHS = [
  "/admin/",
  "/api/admin/",
  "/api/revalidate",
  "/api/amazon-preview",
  "/api/luminar/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: SCRAPER_BOTS, disallow: "/" },
      { userAgent: AI_TRAINING_BOTS, disallow: "/" },
      { userAgent: AI_SEARCH_BOTS, allow: "/", disallow: DISALLOWED_PATHS },
      {
        userAgent: "*",
        allow: "/",
        // /_next/static/ はブロックしない（CSS/JSを遮断するとGooglebotの
        // レンダリング評価に悪影響）。/search/ は noindex に一本化
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
    host: SITE_URL,
  };
}
