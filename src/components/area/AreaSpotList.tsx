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
    closedBadge?: string;
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
  const closedBadge = labels?.closedBadge ?? "閉鎖済み";

  const sorted = [...spots].sort((a, b) => {
    // 閉鎖済みは常に最後尾
    const aClosed = a.closed ?? false;
    const bClosed = b.closed ?? false;
    if (aClosed !== bClosed) return aClosed ? 1 : -1;
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
      <div className="search-toolbar">
        <span className="search-toolbar-count">
          {countText}
        </span>
        <label className="area-sort-label">
          {sortLabel}
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="area-sort-select"
          >
            <option value="rating">{sortRating}</option>
            <option value="updated">{sortUpdated}</option>
          </select>
        </label>
      </div>

      <ul className="area-spot-grid">
        {sorted.map((spot, index) => (
          <li key={spot.id}>
          <article className={`spot-card${spot.closed ? " spot-card--closed" : ""}`} itemScope itemType="https://schema.org/TouristAttraction">
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
                    priority={index === 0}
                  />
                )}
                {spot.closed && (
                  <span className="spot-card-closed-badge" aria-label={closedBadge}>{closedBadge}</span>
                )}
              </div>
              <div className="spot-card-body">
                <div className="spot-card-meta">
                  <span className="badge spot-card-category">{spot.category.name}</span>
                  <div className={`spot-card-rating${spot.closed ? " spot-card-rating--closed" : ""}`} itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                    <meta itemProp="ratingValue" content={spot.rating_avg.toFixed(1)} />
                    <meta itemProp="bestRating" content="5" />
                    <Star size={14} fill={spot.closed ? "#aaa" : "#eab308"} stroke="none" aria-hidden="true" />
                    <span aria-label={`評価 ${spot.rating_avg.toFixed(1)}`}>{spot.rating_avg.toFixed(1)}</span>
                  </div>
                </div>
                <h3 className="spot-card-title" itemProp="name">{spot.name}</h3>
                <p className="spot-card-lead" itemProp="description">{spot.lead}</p>
              </div>
            </Link>
          </article>
          </li>
        ))}
      </ul>
    </>
  );
}
