import Image from "next/image";
import Link from "next/link";
import { Star, Train } from "lucide-react";
import type { SpotListItem } from "@/lib/types";
import { extractTownAddress } from "@/lib/types";

type Props = {
  spots: SpotListItem[];
  localeSlug?: string;
  closedBadge?: string;
};

export default function SpotsGrid({ spots, localeSlug, closedBadge = "閉鎖済み" }: Props) {
  const sorted = [...spots].sort((a, b) => {
    if ((a.closed ?? false) !== (b.closed ?? false)) return (a.closed ?? false) ? 1 : -1;
    return b.rating_avg - a.rating_avg;
  });

  return (
    <ul className="area-spot-grid">
      {sorted.map((spot) => {
        const href = localeSlug
          ? `/${localeSlug}/${spot.category.slug}/${spot.slug}`
          : `/${spot.category.slug}/${spot.slug}`;
        const stationText = spot.station_names;
        return (
          <li key={spot.id}>
            <article
              className={`spot-card${spot.closed ? " spot-card--closed" : ""}`}
              itemScope
              itemType="https://schema.org/TouristAttraction"
            >
              <Link href={href} className="spot-card-link" itemProp="url">
                <div className="spot-card-image">
                  {spot.featured_image && (
                    <Image
                      src={spot.featured_image}
                      alt={`${spot.name}の夜景`}
                      fill
                      sizes="(max-width: 768px) calc(50vw - 28px), 320px"
                      itemProp="image"
                    />
                  )}
                  {spot.closed && (
                    <span className="spot-card-closed-badge" aria-label={closedBadge}>
                      {closedBadge}
                    </span>
                  )}
                </div>
                <div className="spot-card-body">
                  <div className="spot-card-meta">
                    <span className="badge spot-card-category">{localeSlug ? spot.category.name : extractTownAddress(spot.address, spot.category.name)}</span>
                    <div
                      className={`spot-card-rating${spot.closed ? " spot-card-rating--closed" : ""}`}
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org/AggregateRating"
                    >
                      <meta itemProp="ratingValue" content={spot.rating_avg.toFixed(1)} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="ratingCount" content={String([spot.rating_beautiful, spot.rating_access, spot.rating_atmosphere, spot.rating_cost].filter(v => v != null).length || 1)} />
                      <Star
                        size={14}
                        fill={spot.closed ? "#aaa" : "#eab308"}
                        stroke="none"
                        aria-hidden="true"
                      />
                      <span aria-label={`評価 ${spot.rating_avg.toFixed(1)}`}>
                        {spot.rating_avg.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <h3 className="spot-card-title" itemProp="name">
                    {spot.name}
                  </h3>
                  <p className="spot-card-lead" itemProp="description">
                    {spot.lead}
                  </p>
                  {stationText && (
                    <p className="spot-card-station">
                      <Train size={11} aria-hidden="true" />
                      <span className="sr-only">最寄駅：</span>
                      <span className="spot-card-station-text">{stationText}</span>
                    </p>
                  )}
                </div>
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
