import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";
import RootShell from "@/components/layout/RootShell";
import HtmlLang from "@/components/layout/HtmlLang";
import { LOCALE_HTML_LANG, SITE_NAMES } from "@/lib/types";
import { buildSiteNavigationJsonLdForLocale } from "@/lib/json-ld";
import "../../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: locale } = await params;
  const siteName = SITE_NAMES[locale];
  if (!siteName) return {};
  return {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSiteNavigationJsonLdForLocale(locale)),
      }}
    />
  );

  return (
    <RootShell lang={lang} headContent={headContent}>
      <HtmlLang lang={lang} />
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </RootShell>
  );
}
