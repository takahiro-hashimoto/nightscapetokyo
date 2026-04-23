import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/HeaderWrapper";

export default function RootJaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header locale={null} />
      <main className="flex-1">{children}</main>
      <Footer locale={null} />
    </>
  );
}
