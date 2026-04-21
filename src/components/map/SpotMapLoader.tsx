"use client";

import { useState, useEffect, type ComponentType } from "react";
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

function SpotMapLoading() {
  return (
    <div className="spot-map-wrapper">
      <div
        className="spot-map-container"
        style={{
          background: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#888" }}>マップを読み込み中...</p>
      </div>
    </div>
  );
}

export default function SpotMapLoader({ spots, categories, labels, localePrefix }: Props) {
  const [SpotMap, setSpotMap] = useState<ComponentType<Props> | null>(null);

  useEffect(() => {
    import("./SpotMap").then((mod) => setSpotMap(() => mod.default));
  }, []);

  if (!SpotMap) return <SpotMapLoading />;

  return (
    <SpotMap
      spots={spots}
      categories={categories}
      labels={labels}
      localePrefix={localePrefix}
    />
  );
}
