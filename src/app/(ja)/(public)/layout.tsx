import HeaderWrapper from "@/components/layout/HeaderWrapper";

export const revalidate = 3600;

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
