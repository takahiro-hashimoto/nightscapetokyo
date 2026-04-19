import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { LOCALE_HTML_LANG } from "@/lib/types";
import { buildSiteNavigationJsonLdForLocale } from "@/lib/json-ld";

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

  return (
    <div lang={lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSiteNavigationJsonLdForLocale(locale)),
        }}
      />
      {children}
      <Footer locale={locale} />
    </div>
  );
}
