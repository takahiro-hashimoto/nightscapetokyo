import Header from "@/components/layout/HeaderWrapper";

// Supabase JS クライアントの fetch を ISR キャッシュ対象にする
export const fetchCache = "force-cache";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
