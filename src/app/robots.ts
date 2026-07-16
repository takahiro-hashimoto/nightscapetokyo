import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // SEO分析ツール・行儀の悪い学習用クローラーをブロック（Edge Requests削減）。
      // 検索エンジン（Googlebot/Bingbot）とAI検索系（OAI-SearchBot,
      // PerplexityBot, Claude-SearchBot等）は "*" ルールで許可されたまま
      {
        userAgent: [
          "Bytespider",
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "DataForSeoBot",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        // /_next/static/ はブロックしない（CSS/JSを遮断するとGooglebotの
        // レンダリング評価に悪影響）。/search/ は noindex に一本化
        disallow: [
          "/admin/",
          "/api/admin/",
          "/api/revalidate",
          "/api/amazon-preview",
          "/api/luminar/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap_index.xml`,
  };
}
