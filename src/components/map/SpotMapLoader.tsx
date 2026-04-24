"use client";

import { useState, useEffect, useRef, type ComponentType } from "react";
import type { MapSpotItem } from "@/lib/supabase/queries";

type MapLabels = {
  allLabel: string;
  countLabel: string;
  loadingLabel: string;
};

type Props = {
  spots: MapSpotItem[];
  categories: { slug: string; name: string }[];
  labels?: MapLabels;
  localePrefix?: string;
};

export default function SpotMapLoader({ spots, categories, labels, localePrefix }: Props) {
  const [SpotMap, setSpotMap] = useState<ComponentType<Props> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ビューポートに入る 300px 手前で Leaflet を読み込む
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          import("./SpotMap").then((mod) => setSpotMap(() => mod.default));
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!SpotMap) {
    return (
      <div className="spot-map-wrapper" ref={containerRef}>
        <div
          className="spot-map-container"
          style={{ background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <p style={{ color: "#888" }}>{labels?.loadingLabel ?? "マップを読み込み中..."}</p>
        </div>
      </div>
    );
  }

  return (
    <SpotMap
      spots={spots}
      categories={categories}
      labels={labels}
      localePrefix={localePrefix}
    />
  );
}
