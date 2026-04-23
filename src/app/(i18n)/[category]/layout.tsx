import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";
import RootShell from "@/components/layout/RootShell";
import { LOCALE_HTML_LANG } from "@/lib/types";
import { buildSiteNavigationJsonLdForLocale } from "@/lib/json-ld";
import "../../globals.css";

const LOCALE_SITE_NAME: Record<string, string> = {
  en: "Tokyo Night View Guide",
  ko: "도쿄 야경 가이드",
  tw: "東京夜景導覽",
  cn: "东京夜景导览",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: locale } = await params;
  const siteName = LOCALE_SITE_NAME[locale];
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
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </RootShell>
  );
}
