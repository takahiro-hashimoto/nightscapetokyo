"use client";

import { useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapSpotItem } from "@/lib/supabase/queries";

const defaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type MapLabels = {
  allLabel: string;
  countLabel: string;
};

type Props = {
  spots: MapSpotItem[];
  categories: { slug: string; name: string }[];
  labels?: MapLabels;
  localePrefix?: string;
};

const DEFAULT_LABELS: MapLabels = {
  allLabel: "すべて",
  countLabel: "{n}件のスポットを表示中",
};

export default function SpotMap({ spots, categories, labels = DEFAULT_LABELS, localePrefix = "" }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo(
    () =>
      selectedCategory === "all"
        ? spots
        : spots.filter((s) => s.categorySlug === selectedCategory),
    [spots, selectedCategory]
  );

  const categoryNameMap = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.slug, c.name])),
    [categories]
  );

  const center: [number, number] = [35.68, 139.76]; // 東京駅付近

  return (
    <div className="spot-map-wrapper">
      <div className="spot-map-container">
        <MapContainer
          center={center}
          zoom={11}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filtered.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.latitude, spot.longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <div className="spot-map-popup">
                  {spot.featured_image && (
                    <a href={`${localePrefix}/${spot.categorySlug}/${spot.slug}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={spot.featured_image}
                        alt={spot.name}
                        className="spot-map-popup-img"
                      />
                    </a>
                  )}
                  <div className="spot-map-popup-body">
                    <a
                      href={`${localePrefix}/${spot.categorySlug}/${spot.slug}`}
                      className="spot-map-popup-name"
                    >
                      {spot.name}
                    </a>
                    <div className="spot-map-popup-meta">
                      <span className="spot-map-popup-category">
                        {categoryNameMap[spot.categorySlug] ?? spot.categoryName}
                      </span>
                      {spot.rating_avg > 0 && (
                        <span className="spot-map-popup-rating">
                          ★ {spot.rating_avg.toFixed(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="spot-map-filter">
          <button
            className={`spot-map-filter-btn ${selectedCategory === "all" ? "is-active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            {labels.allLabel} ({spots.length})
          </button>
          {categories.map((cat) => {
            const count = spots.filter((s) => s.categorySlug === cat.slug).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.slug}
                className={`spot-map-filter-btn ${selectedCategory === cat.slug ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <p className="spot-map-count">
        {labels.countLabel.replace("{n}", String(filtered.length))}
      </p>
    </div>
  );
}
