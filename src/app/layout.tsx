import type { Metadata } from "next";
import { SITE_URL } from "@/lib/types";
import { buildWebSiteJsonLd, buildOrganizationJsonLd, buildSiteNavigationJsonLd } from "@/lib/json-ld";
import "./globals.css";

const SITE_NAME = "東京夜景ナビ";
const DEFAULT_DESCRIPTION =
  "東京の夜景スポットを定番から穴場まで200以上掲載。展望台、公園、橋などジャンル別に夜景情報をお届けします。";

export const metadata: Metadata = {
  title: {
    default: "東京夜景ナビ | 東京の夜景スポットガイド",
    template: "%s | 東京夜景ナビ",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    apple: "/faviconV2.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
    url: SITE_URL,
    title: "東京夜景ナビ | 東京の夜景スポットガイド",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "東京夜景ナビ | 東京の夜景スポットガイド" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://idnhefzhidetbiqiveci.supabase.co" />
        <link rel="preconnect" href="https://nightscape.tokyo" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />
        {/* non-critical CSS: 非ブロッキングロード (media trick) */}
        <link
          rel="stylesheet"
          href="/css/non-critical.min.css?v=20260416a"
          media="print"
          onLoad={(e) => { (e.currentTarget as HTMLLinkElement).media = "all"; }}
        />
        <noscript>
          <link rel="stylesheet" href="/css/non-critical.min.css?v=20260416a" />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSiteNavigationJsonLd()) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
