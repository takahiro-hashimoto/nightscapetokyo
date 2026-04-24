import Link from "next/link";
import SpotMapLoader from "@/components/map/SpotMapLoader";
import type { MapSpotItem } from "@/lib/supabase/queries";
import { SITE_URL } from "@/lib/types";

type Category = { slug: string; name: string };

type MapSectionLabels = {
  heading: string;
  desc: (count: number) => string;
  allLabel?: string;
  countLabel?: string;
  loadingLabel?: string;
};

const JA_LABELS: MapSectionLabels = {
  heading: "地図から夜景スポットを探す",
  desc: (n) => `東京・横浜エリアの夜景スポット${n}ヶ所を地図上に表示。マーカーをクリックすると詳細を確認できます。`,
  allLabel: "すべて",
  countLabel: "{n}件のスポットを表示中",
  loadingLabel: "マップを読み込み中...",
};

type Props = {
  spots: Pick<MapSpotItem, "id" | "slug" | "name" | "categorySlug" | "latitude" | "longitude">[];
  categories: Category[];
  labels?: MapSectionLabels;
  localePrefix?: string;
  endpoint?: string;
};

export default function HomeMapSection({
  spots,
  categories,
  labels = JA_LABELS,
  localePrefix,
  endpoint = "/api/map-spots",
}: Props) {
  if (spots.length === 0) return null;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Map",
    name: labels.heading,
    url: `${SITE_URL}/`,
    hasPart: spots.slice(0, 50).map((spot) => ({
      "@type": "TouristAttraction",
      name: spot.name,
      url: `${SITE_URL}/${spot.categorySlug}/${spot.slug}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: spot.latitude,
        longitude: spot.longitude,
      },
    })),
  };

  return (
    <section className="home-section" id="map" itemScope itemType="https://schema.org/Map">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="home-container">
        <h2 className="home-section-heading" itemProp="name">
          {labels.heading}
        </h2>
        <p className="home-section-desc" itemProp="description">
          {labels.desc(spots.length)}
        </p>

        <SpotMapLoader
          categories={categories}
          labels={labels.allLabel ? {
            allLabel: labels.allLabel,
            countLabel: labels.countLabel ?? "{n}",
            loadingLabel: labels.loadingLabel ?? "Loading...",
          } : undefined}
          localePrefix={localePrefix}
          endpoint={endpoint}
        />

        <div className="visually-hidden" aria-hidden="true">
          <ul>
            {spots.slice(0, 50).map((spot) => (
              <li key={spot.id}>
                <Link href={`${localePrefix ?? ""}/${spot.categorySlug}/${spot.slug}`}>{spot.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
