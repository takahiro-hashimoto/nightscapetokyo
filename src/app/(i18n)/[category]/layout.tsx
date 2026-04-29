import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";
import BaseLayout from "@/components/layout/BaseLayout";
import RootShell from "@/components/layout/RootShell";
import { LOCALE_HTML_LANG, SITE_NAMES, SITE_URL } from "@/lib/types";
import { buildSiteNavigationJsonLdForLocale, buildWebSiteJsonLd } from "@/lib/json-ld";
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSiteNavigationJsonLdForLocale(locale)),
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
