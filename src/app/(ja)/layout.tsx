import type { Metadata } from "next";
import { SITE_URL } from "@/lib/types";
import { buildWebSiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld";
import RootShell from "@/components/layout/RootShell";
import "../globals.css";

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
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "東京夜景ナビ | 東京の夜景スポットガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  description: DEFAULT_DESCRIPTION,
};

export default function JaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headContent = (
    <>
      <link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd()),
        }}
      />
    </>
  );
  return (
    <RootShell lang="ja" headContent={headContent}>
      {children}
    </RootShell>
  );
}
