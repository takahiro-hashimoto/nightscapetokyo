import Footer from "@/components/layout/Footer";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category: locale } = await params;

  return (
    <>
      {children}
      <Footer locale={locale} />
    </>
  );
}
