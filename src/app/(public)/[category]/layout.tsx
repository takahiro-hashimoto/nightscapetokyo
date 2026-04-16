import Footer from "@/components/layout/Footer";
import { LOCALE_SLUGS, LOCALE_HTML_LANG } from "@/lib/types";

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
  const lang = isLocale ? (LOCALE_HTML_LANG[category] ?? "en") : undefined;

  return (
    <div {...(lang ? { lang } : {})}>
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
