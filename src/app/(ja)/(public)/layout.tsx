import { buildSiteNavigationJsonLd } from "@/lib/json-ld";

// Supabase JS クライアントの fetch を ISR キャッシュ対象にする
export const fetchCache = "force-cache";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSiteNavigationJsonLd()) }}
      />
      {children}
    </>
  );
}
