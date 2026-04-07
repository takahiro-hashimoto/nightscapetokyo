"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapSpotItem } from "@/lib/supabase/queries";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

/** スポットの範囲に自動フィット */
function FitBounds({ spots }: { spots: MapSpotItem[] }) {
  const map = useMap();
  const fitted = useRef(false);

  useEffect(() => {
    if (fitted.current || spots.length === 0) return;
    fitted.current = true;

    if (spots.length === 1) {
      map.setView([spots[0].latitude, spots[0].longitude], 14);
      return;
    }

    const bounds = L.latLngBounds(
      spots.map((s) => [s.latitude, s.longitude] as [number, number])
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, spots]);

  return null;
}

type Props = {
  spots: MapSpotItem[];
  areaName: string;
  localeSlug?: string;
  countLabel?: string;
  nameOverrides?: Record<string, string>;
};

export default function AreaMap({ spots, areaName, localeSlug, countLabel, nameOverrides }: Props) {
  if (spots.length === 0) return null;

  // 初期センターはスポット群の重心
  const avgLat = spots.reduce((s, p) => s + p.latitude, 0) / spots.length;
  const avgLng = spots.reduce((s, p) => s + p.longitude, 0) / spots.length;

  return (
    <div className="area-map-wrapper">
      <div className="area-map-container">
        <MapContainer
          center={[avgLat, avgLng]}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds spots={spots} />
          {spots.map((spot) => {
            const href = localeSlug
              ? `/${localeSlug}/${spot.categorySlug}/${spot.slug}`
              : `/${spot.categorySlug}/${spot.slug}`;
            const displayName = nameOverrides?.[spot.slug] ?? spot.name;
            return (
            <Marker
              key={spot.id}
              position={[spot.latitude, spot.longitude]}
              icon={defaultIcon}
            >
              <Popup>
                <div className="spot-map-popup">
                  {spot.featured_image && (
                    <a href={href}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={spot.featured_image}
                        alt={displayName}
                        className="spot-map-popup-img"
                      />
                    </a>
                  )}
                  <div className="spot-map-popup-body">
                    <a
                      href={href}
                      className="spot-map-popup-name"
                    >
                      {displayName}
                    </a>
                    {spot.rating_avg > 0 && (
                      <div className="spot-map-popup-meta">
                        <span className="spot-map-popup-rating">
                          ★ {spot.rating_avg.toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
            );
          })}
        </MapContainer>
      </div>
      <p className="spot-map-count">
        {countLabel ?? `${areaName}エリアの夜景スポット ${spots.length}件`}
      </p>
    </div>
  );
}
