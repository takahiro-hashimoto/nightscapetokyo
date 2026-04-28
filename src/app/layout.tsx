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
        {/* AdSense vignette/interstitial 後の mid-scroll を防ぐ。back/forward の SPA 遷移は NavigationProgress で制御 */}
        <script dangerouslySetInnerHTML={{ __html: 'try{if("scrollRestoration"in history){history.scrollRestoration="manual";var _bf=false;try{var _ne=performance.getEntriesByType("navigation")[0];_bf=_ne?_ne.type==="back_forward":performance.navigation.type===2;}catch(_e2){}if(!_bf){var _s=function(){window.scrollTo(0,0);};document.addEventListener("DOMContentLoaded",_s,{once:true});window.addEventListener("load",_s,{once:true});}}}catch(_e){}' }} />
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
