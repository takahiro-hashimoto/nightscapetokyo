import { buildSiteNavigationJsonLd } from "@/lib/json-ld";
import { buildMainNavItems, buildTopNavItems, flattenNavToLinks } from "@/components/layout/Header";
import { getSiteChromeData } from "@/lib/supabase/queries/site-chrome";

export const fetchCache = "force-cache";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { areas, tags } = await getSiteChromeData(null);
  const navLinks = flattenNavToLinks(buildMainNavItems(null, areas, tags), buildTopNavItems(null));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSiteNavigationJsonLd(navLinks)) }}
      />
      {children}
    </>
  );
}
