import Footer from "@/components/layout/Footer";
import { LOCALE_SLUGS } from "@/lib/types";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const locale = (LOCALE_SLUGS as readonly string[]).includes(category)
    ? category
    : null;

  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
