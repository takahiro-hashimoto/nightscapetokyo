import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/types";
import { buildWebSiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld";
import NonCriticalCss from "@/components/layout/NonCriticalCss";
import NavigationProgress from "@/components/layout/NavigationProgress";
import "./globals.css";

const ADSENSE_ALLOWED_HOSTS = ["nightscape.tokyo", "www.nightscape.tokyo"];

const SITE_NAME = "東京夜景ナビ";
const DEFAULT_DESCRIPTION =
  "東京の夜景スポットを定番から穴場まで200以上掲載。展望台、公園、橋などジャンル別に夜景情報をお届けします。";

export const metadata: Metadata = {
  title: {
    default: "東京夜景ナビ | 東京の夜景スポットガイド",
    template: "%s | 東京夜景ナビ",
  },
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    apple: "/faviconV2.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
    alternateLocale: ["en_US", "ko_KR", "zh_TW", "zh_CN"],
    url: SITE_URL,
    title: "東京夜景ナビ | 東京の夜景スポットガイド",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "東京夜景ナビ | 東京の夜景スポットガイド" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const showAdsense = ADSENSE_ALLOWED_HOSTS.includes(host);

  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WB56L85');`,
            }}
          />
        )}
        <link rel="preconnect" href="https://idnhefzhidetbiqiveci.supabase.co" />
        <link rel="preconnect" href="https://nightscape.tokyo" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />
        {/* non-critical CSS: 非ブロッキングロード (Client Component でイベント処理) */}
        <NonCriticalCss href="/css/non-critical.min.css?v=20260419a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        {/* Google AdSense: nightscape.tokyo のみ読み込む */}
        {showAdsense && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WB56L85"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <NavigationProgress />
        {children}
      </body>
    </html>
  );
}
