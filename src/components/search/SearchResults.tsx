"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpDown } from "lucide-react";
import type { SearchSpotItem } from "@/lib/supabase/queries";

type SortKey = "relevance" | "rating" | "name";

const SORT_CYCLE: SortKey[] = ["relevance", "rating", "name"];

type Props = {
  spots: SearchSpotItem[];
  localeSlug?: string;
  sortRelevanceLabel?: string;
  sortRatingLabel?: string;
  sortNameLabel?: string;
  matchHitTemplate?: string;
  resultCountTemplate?: string;
};

export default function SearchResults({
  spots,
  localeSlug,
  sortRelevanceLabel = "関連度順",
  sortRatingLabel = "評価順",
  sortNameLabel = "名前順",
  matchHitTemplate = "{fields}にヒット",
  resultCountTemplate = "検索結果：{count}件",
}: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("relevance");
  const prefix = localeSlug ? `/${localeSlug}` : "";

  const sorted = sortKey === "relevance"
    ? spots // サーバー側の関連度順をそのまま使用
    : [...spots].sort((a, b) => {
        if (sortKey === "name") return a.name.localeCompare(b.name, "ja");
        return b.rating_avg - a.rating_avg;
      });

  const sortLabel = sortKey === "relevance"
    ? sortRelevanceLabel
    : sortKey === "rating"
      ? sortRatingLabel
      : sortNameLabel;

  return (
    <>
      <div className="search-toolbar">
        <span className="search-toolbar-count"
          dangerouslySetInnerHTML={{
            __html: resultCountTemplate.replace("{count}", `<strong>${spots.length}</strong>`),
          }}
        />
        <button
          className="search-toolbar-sort"
          onClick={() => {
            const idx = SORT_CYCLE.indexOf(sortKey);
            setSortKey(SORT_CYCLE[(idx + 1) % SORT_CYCLE.length]);
          }}
        >
          <ArrowUpDown size={14} />
          {sortLabel}
        </button>
      </div>

      <div className="ranking-grid ranking-grid-3">
        {sorted.map((spot) => (
          <Link
            key={spot.id}
            href={`${prefix}/${spot.category.slug}/${spot.slug}`}
            className="spot-card"
          >
            <div className="spot-card-image">
              <Image
                src={spot.featured_image}
                alt={spot.name}
                fill
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
            <div className="spot-card-body">
              <div className="spot-card-meta">
                <span className="badge spot-card-category">
                  {spot.category.name}
                </span>
                <div className="spot-card-rating">
                  <Star size={14} fill="#eab308" stroke="none" />
                  <span>{spot.rating_avg.toFixed(1)}</span>
                </div>
              </div>
              <h3 className="spot-card-title">{spot.name}</h3>
              {spot.matchedFields.length > 0 && (
                <p className="badge spot-card-match">
                  {matchHitTemplate.replace("{fields}", spot.matchedFields.join("・"))}
                </p>
              )}
              <p className="spot-card-lead">{spot.lead}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
