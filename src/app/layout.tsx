import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/types";
import "./globals.css";

const SITE_NAME = "nightscape.tokyo";
const DEFAULT_DESCRIPTION =
  "東京の夜景スポットを定番から穴場まで200以上掲載。展望台、公園、橋などジャンル別に夜景情報をお届けします。";

export const metadata: Metadata = {
  title: {
    default: "nightscape.tokyo | 東京の夜景スポットガイド",
    template: "%s | nightscape.tokyo",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
    url: SITE_URL,
    title: "nightscape.tokyo | 東京の夜景スポットガイド",
    description: DEFAULT_DESCRIPTION,
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
        <link
          rel="preload"
          href="/css/non-critical.min.css"
          as="style"
        />
        <Script
          id="css-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var l=document.createElement('link');l.rel='stylesheet';l.href='/css/non-critical.min.css';document.head.appendChild(l);`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
