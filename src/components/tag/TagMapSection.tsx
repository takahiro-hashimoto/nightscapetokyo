import AreaMapLoader from "@/components/map/AreaMapLoader";
import type { MapSpotItem } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";

type Props = {
  spots: MapSpotItem[];
  heading: string;
  intro?: string;
  localeSlug?: string;
};

/**
 * タグページ用のインタラクティブマップセクション。
 * 該当タグが付与された夜景スポットをピン表示する汎用モジュール。
 */
export default function TagMapSection({ spots, heading, intro, localeSlug }: Props) {
  if (spots.length === 0) return null;

  const labels = getComponentLabels(localeSlug ?? "ja");
  const countLabel = labels.homePage.mapSection.countLabel.replace("{n}", String(spots.length));

  return (
    <section id="map" className="content-card card-padding" aria-labelledby="map-heading">
      <h2 className="section-heading" id="map-heading">
        {heading}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
      <AreaMapLoader
        spots={spots}
        areaName=""
        localeSlug={localeSlug}
        countLabel={countLabel}
      />
    </section>
  );
}
