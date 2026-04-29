import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";
import BaseLayout from "@/components/layout/BaseLayout";
import RootShell from "@/components/layout/RootShell";
import {
  LOCALE_HTML_LANG,
  LOCALE_SLUGS,
  SITE_NAMES,
  SITE_URL,
} from "@/lib/types";
import {
  buildOrganizationJsonLd,
  buildSiteNavigationJsonLd,
  buildSiteNavigationJsonLdForLocale,
  buildWebSiteJsonLd,
} from "@/lib/json-ld";
import "../../globals.css";

const JA_SITE_NAME = "東京夜景ナビ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const isLocale = (LOCALE_SLUGS as readonly string[]).includes(category);

  return {
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: "/faviconV2.png",
      apple: "/faviconV2.png",
    },
    title: isLocale
      ? {
          template: `%s | ${SITE_NAMES[category] ?? SITE_NAMES.en}`,
          default: SITE_NAMES[category] ?? SITE_NAMES.en,
        }
      : {
          template: `%s | ${JA_SITE_NAME}`,
          default: JA_SITE_NAME,
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
  const { category } = await params;
  const isLocale = (LOCALE_SLUGS as readonly string[]).includes(category);
  const locale = isLocale ? category : null;
  const localeSlug = isLocale ? category : undefined;
  const lang = localeSlug ? (LOCALE_HTML_LANG[localeSlug] ?? "en") : "ja";

  const headContent = localeSlug ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSiteNavigationJsonLdForLocale(localeSlug)),
      }}
    />
  ) : (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSiteNavigationJsonLd()) }}
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
