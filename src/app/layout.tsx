import { headers } from "next/headers";
import { ALL_LOCALE_SLUGS, LOCALE_HTML_LANG, SITE_URL } from "@/lib/types";
import NonCriticalCss from "@/components/layout/NonCriticalCss";
import "./globals.css";

const GTM_ID = "GTM-WB56L85";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStore = await headers();
  const nonce = headerStore.get("x-nonce") ?? "";
  const localeSlug = headerStore.get("x-locale") ?? "";
  const locale = ALL_LOCALE_SLUGS.includes(localeSlug) ? localeSlug : "ja";
  const lang = locale === "ja" ? "ja" : (LOCALE_HTML_LANG[locale] ?? "en");
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang={lang}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {isProd && (
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;j.setAttribute('nonce','${nonce}');f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
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
