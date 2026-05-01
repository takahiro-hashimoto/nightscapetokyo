import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: false,
    formats: ["image/webp"],
    minimumCacheTTL: 2592000, // 30日: 最適化済み画像をサーバー側でキャッシュ
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
        hostname: "i.ytimg.com",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "suncalc", "swiper"],
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
