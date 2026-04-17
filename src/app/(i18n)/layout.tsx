import Header from "@/components/layout/HeaderWrapper";
import { buildSiteNavigationJsonLdForLocale } from "@/lib/json-ld";

export default async function I18nLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category: locale } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSiteNavigationJsonLdForLocale(locale)),
        }}
      />
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}
