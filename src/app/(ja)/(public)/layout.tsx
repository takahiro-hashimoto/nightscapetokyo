import HeaderWrapper from "@/components/layout/HeaderWrapper";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderWrapper locale={null} withNavJsonLd />
      {children}
    </>
  );
}
