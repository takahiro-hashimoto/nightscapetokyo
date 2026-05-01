import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SpotArticle from "@/components/spot/SpotArticle";
import {
  getSpotWithTranslation,
  getAvailableTranslations,
  getRelatedSpotsTranslated,
} from "@/lib/supabase/queries";
import { ALL_LOCALE_SLUGS } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import { buildSpotMetadata } from "@/lib/metadata";

/*
 * URL: /en/shibuya/shibuya-sky, /tw/shibuya/shibuya-sky
 * Next.js params: { category: "en", slug: "shibuya", spotSlug: "shibuya-sky" }
 *
 * "category" param = URL locale slug (en, ko, tw, cn)
 */

type Props = {
  params: Promise<{ category: string; slug: string; spotSlug: string }>;
};

export async function generateStaticParams() {
  // 全件 SSG せず ISR で提供（Build Minutes 削減）
  // 未生成パスは revalidate=86400 のオンデマンド ISR でキャッシュされる
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: localeSlug, slug: categorySlug, spotSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) return {};

  const spot = await getSpotWithTranslation(categorySlug, spotSlug, localeSlug);
  if (!spot) return {};

  const translations = await getAvailableTranslations(spot.id);
  const labels = getComponentLabels(localeSlug);

  return buildSpotMetadata(
    spot, labels, categorySlug, spotSlug, localeSlug,
    translations.map((t) => t.locale)
  );
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function TranslatedSpotPage({ params }: Props) {
  const { category: localeSlug, slug: categorySlug, spotSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) notFound();

  const spot = await getSpotWithTranslation(categorySlug, spotSlug, localeSlug);
  if (!spot) notFound();

  const [translations, relatedSpots] = await Promise.all([
    getAvailableTranslations(spot.id),
    getRelatedSpotsTranslated(spot.category_id, spot.id, localeSlug, 8),
  ]);
  const labels = getComponentLabels(localeSlug);

  return (
    <>
      <SpotArticle
        spot={spot}
        labels={labels}
        currentLocale={localeSlug}
        categorySlug={categorySlug}
        spotSlug={spotSlug}
        availableLocales={translations.map((t) => t.locale)}
        relatedSpots={relatedSpots}
      />
    </>
  );
}
