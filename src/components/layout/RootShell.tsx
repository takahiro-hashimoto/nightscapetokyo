import Script from "next/script";
import NonCriticalCss from "@/components/layout/NonCriticalCss";
import NavigationProgress from "@/components/layout/NavigationProgress";
import { AdsProvider } from "@/contexts/AdsContext";

const showAdsense = process.env.NODE_ENV === "production";

export default function RootShell({
  lang,
  headContent,
  children,
}: {
  lang: string;
  headContent?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout: <head> は正当な使用 */}
      <head>
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
        {showAdsense && (
          <>
            <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
            <link
              rel="preconnect"
              href="https://googleads.g.doubleclick.net"
              crossOrigin="anonymous"
            />
          </>
        )}
        <NonCriticalCss href="/css/non-critical.min.css?v=20260421g" />
        {headContent}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
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
        <AdsProvider showAds={showAdsense}>{children}</AdsProvider>
        {showAdsense && (
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
