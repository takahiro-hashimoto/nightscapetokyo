import SpotMapLoader from "@/components/map/SpotMapLoader";
import type { MapSpotItem } from "@/lib/supabase/queries";
import { SITE_URL } from "@/lib/types";

type Category = { slug: string; name: string };

type Props = {
  spots: MapSpotItem[];
  categories: Category[];
};

export default function HomeMapSection({ spots, categories }: Props) {
  if (spots.length === 0) return null;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Map",
    name: "東京・横浜 夜景スポットマップ",
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
          地図から夜景スポットを探す
        </h2>
        <p className="home-section-desc" itemProp="description">
          東京・横浜エリアの夜景スポット{spots.length}ヶ所を地図上に表示。マーカーをクリックすると詳細を確認できます。
        </p>

        <SpotMapLoader spots={spots} categories={categories} />

        <div className="visually-hidden" aria-hidden="true">
          <ul>
            {spots.map((spot) => (
              <li key={spot.id}>
                <a href={`/${spot.categorySlug}/${spot.slug}`}>{spot.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
