import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import { execSync } from "node:child_process";

/**
 * サイトマップの lastmod に使うデプロイ時刻。
 *
 * Vercel は VERCEL_GIT_COMMIT_TIMESTAMP を自動で入れるが、Cloudflare Workers には
 * 相当する変数がない。git のコミット時刻を見れば両方の環境で同じ値になる。
 *
 * ここで解決してビルド時に埋め込むのが重要で、実行時に new Date() を評価すると
 * ページが再生成されるたび lastmod が動き、Google に「全ページが更新された」と
 * 誤って伝わってしまう。
 */
function resolveDeployTime(): string {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_TIMESTAMP;
  if (fromVercel) return new Date(Number(fromVercel) * 1000).toISOString();

  try {
    const committedAt = execSync("git log -1 --format=%ct", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (committedAt) return new Date(Number(committedAt) * 1000).toISOString();
  } catch {
    // git が使えない環境（tarball 展開など）ではビルド時刻にフォールバック
  }

  return new Date().toISOString();
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  trailingSlash: true,

  env: {
    DEPLOY_TIME: resolveDeployTime(),
  },

  images: {
    // R2直配信: 事前生成した幅別webp（scripts/backfill-r2-image-variants.mjs +
    // /api/admin/upload が生成）を src/lib/image-loader.ts が返す。
    // /_next/image を通らないため Image Transformations と画像分の
    // Fast Data Transfer 課金がゼロになる（R2エグレスは無料）。
    // deviceSizes / imageSizes は srcset の幅集合として引き続き使われるので、
    // 変更する場合はバリアントの再生成（image-variants.ts と backfill）が必要。
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 960, 1280, 1920],
    imageSizes: [180, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "nightscape.tokyo",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "suncalc"],
  },

  async redirects() {
    return [
      // ── www → apex ──
      // trailingSlash: true なので destination にも末尾スラッシュが必要。
      // 付けないと www/foo/ → apex/foo → apex/foo/ と必ず2ホップになる。
      // ファイルパス（robots.txt / sitemap.xml など）はスラッシュを付けてはいけないので先に処理する。
      {
        source: "/:file(.*\\..*)",
        has: [{ type: "host", value: "www.nightscape.tokyo" }],
        destination: "https://nightscape.tokyo/:file",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.nightscape.tokyo" }],
        destination: "https://nightscape.tokyo/",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.nightscape.tokyo" }],
        destination: "https://nightscape.tokyo/:path+/",
        permanent: true,
      },
      {
        source: "/luminar/about/",
        destination: "/about/",
        permanent: true,
      },
      // ── WordPress 遺産の /feed/ ──
      // 汎用ルール /:path+/feed/ → /:path*/ だけだと、その飛び先がさらに
      // リダイレクト対象で2ホップになるため、既知の組み合わせは直接最終URLへ送る。
      {
        source: "/recommend/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pickup/:slug/feed/",
        destination: "/article/:slug/",
        permanent: true,
      },
      {
        source: "/post/:slug*/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/luminar/category/:slug*/feed/",
        destination: "/luminar/",
        permanent: true,
      },
      {
        source: "/page/:num/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/recommend/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:locale(en|ko|tw|cn)/recommend/",
        destination: "/:locale/",
        permanent: true,
      },
      {
        source: "/pickup/",
        destination: "/article/",
        permanent: true,
      },
      // /article/timelapse-calculator/ 自体がさらに転送されるため、
      // 汎用の /pickup/:slug/ より前に最終URLへ直接送る
      {
        source: "/pickup/timelapse-calculator/",
        destination: "/article/create-timelapse/",
        permanent: true,
      },
      {
        source: "/pickup/:slug/",
        destination: "/article/:slug/",
        permanent: true,
      },
      {
        source: "/article/timelapse-calculator/",
        destination: "/article/create-timelapse/",
        permanent: true,
      },
      {
        source: "/luminar/category/:slug*/",
        destination: "/luminar/",
        permanent: true,
      },
      {
        // WordPress遺産の各ページ配下 /feed/ は親ページへ。
        // :path+ (1セグメント以上) にすることでルートの /feed/ (RSS配信) は除外する
        source: "/:path+/feed/",
        destination: "/:path*/",
        permanent: true,
      },
      {
        source: "/page/:num/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:locale(en|ko|tw|cn)/page/:num/",
        destination: "/:locale/",
        permanent: true,
      },
      // 末尾スラッシュ無しの /post・/{locale}/post は Next の内部正規化
      // (/:notfile → /:notfile/) が全ユーザールールより先に走るため到達しない。
      // 記述しても2ホップになるだけなので、スラッシュ付きのみを残す。
      {
        source: "/post/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/:slug*/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:locale(en|ko|tw|cn)/post/",
        destination: "/:locale/",
        permanent: true,
      },
      {
        source: "/:locale(en|ko|tw|cn)/post/:slug*/",
        destination: "/:locale/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
          {
            key: "Content-Language",
            value: "ja",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
      {
        source: "/en/:path*",
        headers: [
          {
            key: "Content-Language",
            value: "en",
          },
        ],
      },
      {
        source: "/ko/:path*",
        headers: [
          {
            key: "Content-Language",
            value: "ko",
          },
        ],
      },
      {
        source: "/tw/:path*",
        headers: [
          {
            key: "Content-Language",
            value: "zh-Hant",
          },
        ],
      },
      {
        source: "/cn/:path*",
        headers: [
          {
            key: "Content-Language",
            value: "zh-Hans",
          },
        ],
      },
      {
        source: "/logo.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // 管理画面は catch-all の public, s-maxage=86400 を打ち消す必要がある。
      // 同一キーは後勝ちなので、必ず /(.*) より後ろに置くこと
      // （以前は前に置いていたため no-store が無効化され、CDN に公開キャッシュされうる状態だった）
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
      // 天気APIは鮮度が重要なため catch-all の 86400 を上書き（同一キーは後勝ち）
      {
        source: "/api/weather/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=1800, stale-while-revalidate=3600",
          },
        ],
      },
      {
        source: "/api/weather-hourly/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=1800, stale-while-revalidate=3600",
          },
        ],
      },
      // マップデータはスポット公開後1時間以内に反映させる
      {
        source: "/api/map-spots/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      // サイトマップXMLのキャッシュはここが唯一の定義（route.ts 側で
      // Cache-Control を書いても catch-all の /(.*) 共々このルールに上書きされる）。
      // catch-all の s-maxage=86400 + SWR 7日 のままだと、実測で age が6日に達し
      // 更新後1週間ちかく古いXMLをGoogleに返しうる。SWRは短くして鮮度を優先する。
      {
        source: "/:path(sitemap[^/]*\\.xml)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=600",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
