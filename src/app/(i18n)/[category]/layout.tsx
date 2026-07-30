import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";
import BaseLayout from "@/components/layout/BaseLayout";
import RootShell from "@/components/layout/RootShell";
import {
  ALL_OG_LOCALES,
  LOCALE_HTML_LANG,
  OG_LOCALE_MAP,
  SITE_NAMES,
  SITE_URL,
} from "@/lib/types";
import {
  buildOrganizationJsonLd,
  buildSiteNavigationJsonLdForLocale,
  buildWebSiteJsonLd,
} from "@/lib/json-ld";
import { jsonLdHtml } from "@/lib/json-ld-script";
import "../../globals.css";

export const fetchCache = "force-cache";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: locale } = await params;
  const siteName = SITE_NAMES[locale];
  if (!siteName) return {};
  const ogLocale = OG_LOCALE_MAP[locale] ?? "en_US";
  return {
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: "/faviconV2.png",
      apple: "/faviconV2.png",
    },
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    // 配下ページが openGraph / twitter を自前で定義した場合 Next.js は
    // 浅くマージ（＝丸ごと置換）するため、ここの値は「何も定義しないページ」
    // 向けのフォールバック。各ページ側でも同等の値を明示すること。
    openGraph: {
      type: "website",
      siteName,
      locale: ogLocale,
      alternateLocale: ALL_OG_LOCALES.filter((ol) => ol !== ogLocale),
      images: [{ url: `${SITE_URL}/hero.jpg`, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}/hero.jpg`],
    },
  };
}

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category: locale } = await params;
  const lang = LOCALE_HTML_LANG[locale] ?? "en";

  const headContent = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildWebSiteJsonLd()) }}
      />
      {/* WebSite.publisher / 記事の author・publisher は @id 参照なので、
          参照先の Organization（＋その founder Person）を i18n 側でも出力する */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml(buildOrganizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(buildSiteNavigationJsonLdForLocale(locale)),
        }}
      />
    </>
  );

  return (
    <BaseLayout lang={lang}>
      <RootShell headContent={headContent}>
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </RootShell>
    </BaseLayout>
  );
}
