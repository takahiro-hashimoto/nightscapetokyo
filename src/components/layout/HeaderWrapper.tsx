import { getSiteChromeData } from "@/lib/supabase/queries";
import Header from "./Header";
import { buildMainNavItems, buildTopNavItems, flattenNavToLinks } from "./Header";
import { buildSiteNavigationJsonLd } from "@/lib/json-ld";
import { jsonLdHtml } from "@/lib/json-ld-script";

export default async function HeaderWrapper({
  locale,
  withNavJsonLd,
}: {
  locale?: string | null;
  withNavJsonLd?: boolean;
}) {
  const { areas, tags, spotCount } = await getSiteChromeData(locale ?? null);

  const navJsonLd = withNavJsonLd
    ? buildSiteNavigationJsonLd(
        flattenNavToLinks(buildMainNavItems(locale ?? null, areas, tags), buildTopNavItems(locale ?? null))
      )
    : null;

  return (
    <>
      {navJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(navJsonLd) }}
        />
      )}
      <Header areaData={areas} tagData={tags} spotCount={spotCount} locale={locale ?? null} />
    </>
  );
}
