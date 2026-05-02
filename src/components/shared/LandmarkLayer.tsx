"use client";

import { useMemo } from "react";
import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { LANDMARKS, CATEGORY_EMOJI, type LandmarkCategory } from "@/lib/landmarks";

function createIcon(category: LandmarkCategory) {
  return L.divIcon({
    html: `<div class="landmark-pin">${CATEGORY_EMOJI[category]}</div>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    tooltipAnchor: [16, 0],
  });
}

interface Props {
  onLandmarkClick: (lat: number, lng: number) => void;
}

export default function LandmarkLayer({ onLandmarkClick }: Props) {
  const icons = useMemo(() => {
    const categories: LandmarkCategory[] = ["tower", "castle", "mountain", "bridge", "temple", "other"];
    return Object.fromEntries(
      categories.map((cat) => [cat, createIcon(cat)])
    ) as Record<LandmarkCategory, L.DivIcon>;
  }, []);

  return (
    <>
      {LANDMARKS.map((lm) => (
        <Marker
          key={lm.id}
          position={[lm.lat, lm.lng]}
          icon={icons[lm.category]}
          eventHandlers={{ click: () => onLandmarkClick(lm.lat, lm.lng) }}
        >
          <Tooltip direction="top" offset={[0, -8]}>
            {CATEGORY_EMOJI[lm.category]} {lm.name}
          </Tooltip>
        </Marker>
      ))}
    </>
  );
}
