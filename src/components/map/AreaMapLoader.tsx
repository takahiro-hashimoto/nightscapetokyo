"use client";

import dynamic from "next/dynamic";
import type { MapSpotItem } from "@/lib/supabase/queries";

const AreaMap = dynamic(() => import("./AreaMap"), {
  ssr: false,
  loading: () => (
    <div className="area-map-wrapper">
      <div
        className="area-map-container"
        style={{
          background: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#888", fontSize: 14 }}>マップを読み込み中...</p>
      </div>
    </div>
  ),
});

type Props = {
  spots: MapSpotItem[];
  areaName: string;
  localeSlug?: string;
  countLabel?: string;
  nameOverrides?: Record<string, string>;
};

export default function AreaMapLoader({ spots, areaName, localeSlug, countLabel, nameOverrides }: Props) {
  return <AreaMap spots={spots} areaName={areaName} localeSlug={localeSlug} countLabel={countLabel} nameOverrides={nameOverrides} />;
}
