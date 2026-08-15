import type { Metadata } from "next";
import { SITE_URL, LOCALE_OG_ALTERNATES } from "@/lib/types";
import { buildWebSiteJsonLd, buildOrganizationJsonLd } from "@/lib/json-ld";
import BaseLayout from "@/components/layout/BaseLayout";
import RootShell from "@/components/layout/RootShell";
import { jsonLdHtml } from "@/lib/json-ld-script";
import "../globals.css";
// 記事UIの共通パーツ（m-point-box / m-notice / m-table など）。
// globals.css の後に読むことで、重複していた表組みのスタイルはこちらが勝つ。
import "../ui-components.css";

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
    icon: "/faviconV2.png",
    apple: "/faviconV2.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
    alternateLocale: LOCALE_OG_ALTERNATES as string[],
    // trailingSlash: true のサイトなので canonical と揃えて末尾スラッシュ付きにする
    url: `${SITE_URL}/`,
    title: "東京夜景ナビ | 東京の夜景スポットガイド",
    images: [
      {
        url: "https://nightscape.tokyo/hero.jpg",
        width: 1200,
        height: 630,
        alt: "東京夜景ナビ | 東京の夜景スポットガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://nightscape.tokyo/hero.jpg"],
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
      <link
        rel="alternate"
        type="application/rss+xml"
        title="東京夜景ナビ 新着記事"
        href={`${SITE_URL}/feed/`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildWebSiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(buildOrganizationJsonLd()),
        }}
      />
    </>
  );
  return (
    <BaseLayout lang="ja">
      <RootShell headContent={headContent}>
        {children}
      </RootShell>
    </BaseLayout>
  );
}
