"use client";

import { useState, useEffect, useRef, type ComponentType } from "react";
import type { MapSpotItem } from "@/lib/supabase/queries";

type MapLabels = {
  allLabel: string;
  countLabel: string;
  loadingLabel: string;
};

type Props = {
  categories: { slug: string; name: string }[];
  labels?: MapLabels;
  localePrefix?: string;
  endpoint: string;
};

type SpotMapComponentProps = Omit<Props, "endpoint"> & {
  spots: MapSpotItem[];
};

export default function SpotMapLoader({ categories, labels, localePrefix, endpoint }: Props) {
  const [SpotMap, setSpotMap] = useState<ComponentType<SpotMapComponentProps> | null>(null);
  const [spots, setSpots] = useState<MapSpotItem[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ビューポートに入る 300px 手前で Leaflet を読み込む
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          void Promise.all([
            import("./SpotMap"),
            fetch(endpoint, { cache: "force-cache" }).then(async (response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch map spots");
              }
              return response.json() as Promise<MapSpotItem[]>;
            }),
          ])
            .then(([mod, data]) => {
              setSpots(data);
              setSpotMap(() => mod.default);
            })
            .catch(() => {
              setSpots([]);
            });
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endpoint]);

  if (!SpotMap || !spots) {
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

  if (spots.length === 0) {
    return (
      <div className="spot-map-wrapper" ref={containerRef}>
        <div
          className="spot-map-container"
          style={{ background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <p style={{ color: "#888" }}>マップの読み込みに失敗しました</p>
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
