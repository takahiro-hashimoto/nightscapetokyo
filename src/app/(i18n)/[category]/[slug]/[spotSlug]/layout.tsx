// URL slug → HTML lang attribute
const SLUG_HTML_LANG: Record<string, string> = {
  en: "en",
  ko: "ko",
  tw: "zh-Hant",
  cn: "zh-Hans",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  // URL: /[locale]/[categorySlug]/[spotSlug]
  // category param = locale due to Next.js dynamic param naming constraints
  const { category: locale } = await params;
  const lang = SLUG_HTML_LANG[locale] ?? "en";

  return (
    <div lang={lang}>
      {children}
    </div>
  );
}
