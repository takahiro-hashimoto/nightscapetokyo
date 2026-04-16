import Footer from "@/components/layout/Footer";
import { LOCALE_HTML_LANG } from "@/lib/types";

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
      {children}
      <Footer locale={locale} />
    </div>
  );
}
