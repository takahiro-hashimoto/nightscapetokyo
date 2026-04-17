import Footer from "@/components/layout/Footer";
import { LOCALE_HTML_LANG } from "@/lib/types";
import { buildSiteNavigationJsonLdForLocale } from "@/lib/json-ld";

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
