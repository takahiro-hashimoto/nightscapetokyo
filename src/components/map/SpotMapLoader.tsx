"use client";

import { Suspense, lazy } from "react";
import type { MapSpotItem } from "@/lib/supabase/queries";

const SpotMap = lazy(() => import("./SpotMap"));

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

function SpotMapLoading({ label }: { label: string }) {
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
        <p style={{ color: "#888" }}>{label}</p>
      </div>
    </div>
  );
}

export default function SpotMapLoader({ spots, categories, labels, localePrefix }: Props) {
  const loadingLabel = labels?.loadingLabel ?? "マップを読み込み中...";
  return (
    <Suspense fallback={<SpotMapLoading label={loadingLabel} />}>
      <SpotMap
        spots={spots}
        categories={categories}
        labels={labels}
        localePrefix={localePrefix}
      />
    </Suspense>
  );
}
