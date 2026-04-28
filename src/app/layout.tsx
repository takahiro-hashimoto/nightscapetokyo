import { SITE_URL } from "@/lib/types";
import NonCriticalCss from "@/components/layout/NonCriticalCss";
import GtmLoader from "@/components/layout/GtmLoader";
import "./globals.css";

const GTM_ID = "GTM-WB56L85";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="ja">
      <head>
        {/* AdSense vignette 広告後の mid-scroll を防ぐ。back/forward(type=2)には適用しない */}
        <script dangerouslySetInnerHTML={{ __html: 'try{if(performance.navigation.type===0&&"scrollRestoration"in history)history.scrollRestoration="manual";}catch(e){}' }} />
        {isProd && <GtmLoader gtmId={GTM_ID} />}
        <link rel="preconnect" href="https://idnhefzhidetbiqiveci.supabase.co" />
        <link
          rel="preconnect"
          href="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev"
          crossOrigin="anonymous"
        />
        {isProd && (
          <>
            <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
            <link
              rel="preconnect"
              href="https://googleads.g.doubleclick.net"
              crossOrigin="anonymous"
            />
          </>
        )}
        <NonCriticalCss href="/css/non-critical.min.css?v=20260425a" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {isProd && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
};
