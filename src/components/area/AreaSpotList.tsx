"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { SpotListItem } from "@/lib/types";

type SortKey = "rating" | "updated";

type Props = {
  spots: SpotListItem[];
  localeSlug?: string;
  labels?: {
    countText: string;
    sortLabel: string;
    sortRating: string;
    sortUpdated: string;
  };
  /** Image alt pattern: "{name}" is replaced with spot name */
  imageAltPattern?: string;
};

export default function AreaSpotList({ spots, localeSlug, labels, imageAltPattern }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("rating");

  const countText = labels?.countText ?? `掲載数：${spots.length}件`;
  const sortLabel = labels?.sortLabel ?? "並び替え：";
  const sortRating = labels?.sortRating ?? "評価高い順";
  const sortUpdated = labels?.sortUpdated ?? "更新日新しい順";

  const sorted = [...spots].sort((a, b) => {
    if (sortKey === "rating") return b.rating_avg - a.rating_avg;
    return b.id.localeCompare(a.id);
  });

  const buildHref = (spot: SpotListItem) =>
    localeSlug
      ? `/${localeSlug}/${spot.category.slug}/${spot.slug}`
      : `/${spot.category.slug}/${spot.slug}`;

  const buildAlt = (name: string) =>
    imageAltPattern
      ? imageAltPattern.replace("{name}", name)
      : `${name}の夜景`;

  return (
    <>
      <div className="area-toolbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", fontSize: 14 }}>
        <span style={{ fontWeight: 600, color: "#333" }}>
          {countText}
        </span>
        <label style={{ display: "flex", alignItems: "center", gap: 4, color: "#666", fontSize: 14 }}>
          {sortLabel}
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "6px 12px", fontSize: 14, color: "#333", background: "#fff", cursor: "pointer" }}
          >
            <option value="rating">{sortRating}</option>
            <option value="updated">{sortUpdated}</option>
          </select>
        </label>
      </div>

      <div className="area-spot-grid">
        {sorted.map((spot) => (
          <article key={spot.id} className="spot-card" itemScope itemType="https://schema.org/TouristAttraction">
            <Link
              href={buildHref(spot)}
              className="spot-card-link"
              itemProp="url"
            >
              <div className="spot-card-image">
                {spot.featured_image && (
                  <Image
                    src={spot.featured_image}
                    alt={buildAlt(spot.name)}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    itemProp="image"
                  />
                )}
              </div>
              <div className="spot-card-body">
                <div className="spot-card-meta">
                  <div className="spot-card-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                    <meta itemProp="ratingValue" content={spot.rating_avg.toFixed(1)} />
                    <meta itemProp="bestRating" content="5" />
                    <Star size={14} fill="#eab308" stroke="none" aria-hidden="true" />
                    <span aria-label={`評価 ${spot.rating_avg.toFixed(1)}`}>{spot.rating_avg.toFixed(1)}</span>
                  </div>
                </div>
                <h2 className="spot-card-title" itemProp="name">{spot.name}</h2>
                <p className="spot-card-lead" itemProp="description">{spot.lead}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
