"use client";

import dynamic from "next/dynamic";
import type { MapSpotItem } from "@/lib/supabase/queries";

const SpotMap = dynamic(() => import("./SpotMap"), {
  ssr: false,
  loading: () => (
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
  ),
});

type Props = {
  spots: MapSpotItem[];
  categories: { slug: string; name: string }[];
};

export default function SpotMapLoader({ spots, categories }: Props) {
  return <SpotMap spots={spots} categories={categories} />;
}
