import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  trailingSlash: true,

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
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nightscape.tokyo" }],
        destination: "https://nightscape.tokyo/:path*",
        permanent: true,
      },
      {
        source: "/luminar/about/",
        destination: "/about/",
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
      {
        source: "/pickup/sumida-river-bridge/",
        destination: "/article/itabu-station-cherry-blossoms/",
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
        source: "/post",
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
      {
        source: "/:locale(en|ko|tw|cn)/post",
        destination: "/:locale/",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
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
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
