"use client";

import { useMemo, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon path issue in webpack/next.js
const defaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface SimulatorMapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  sunriseAzimuth: number | null;
  sunsetAzimuth: number | null;
  onMarkerDrag: (lat: number, lng: number) => void;  // drag中: 位置更新のみ
  onMarkerMove: (lat: number, lng: number) => void;  // dragend: 保存まで行う
  onViewChange: (lat: number, lng: number, zoom: number) => void;
}

function MapSizeInvalidator() {
  const map = useMap();
  useEffect(() => {
    const container = map.getContainer();
    let prevW = 0, prevH = 0, rafId = 0;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      console.log(`[SimMap] ResizeObserver fired | ${width.toFixed(0)}×${height.toFixed(0)} | t: ${Date.now()}`);
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (width < 50 || height < 50) return; // 極小サイズ時はスキップ
        if (width !== prevW || height !== prevH) {
          prevW = width; prevH = height;
          map.invalidateSize();
          console.log(`[SimMap] invalidateSize() called | t: ${Date.now()}`);
        }
      });
    });
    ro.observe(container);
    return () => { ro.disconnect(); cancelAnimationFrame(rafId); };
  }, [map]);
  return null;
}

function MapCenterUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

function MapEvents({
  onMarkerMove,
  onViewChange,
}: {
  onMarkerMove: (lat: number, lng: number) => void;
  onViewChange: (lat: number, lng: number, zoom: number) => void;
}) {
  useMapEvents({
    click(e) {
      onMarkerMove(e.latlng.lat, e.latlng.lng);
    },
    moveend(e) {
      const map = e.target;
      const center = map.getCenter();
      onViewChange(center.lat, center.lng, map.getZoom());
    },
  });
  return null;
}

function calcSunPathEnd(
  lat: number,
  lng: number,
  azimuth: number
): [number, number] {
  const radius = 10;
  const endLat = lat + radius * Math.cos((azimuth * Math.PI) / 180);
  const endLng = lng + radius * Math.sin((azimuth * Math.PI) / 180);
  return [endLat, endLng];
}

export default function SimulatorMap({
  center,
  zoom,
  markerPosition,
  sunriseAzimuth,
  sunsetAzimuth,
  onMarkerDrag,
  onMarkerMove,
  onViewChange,
}: SimulatorMapProps) {
  const sunrisePath = useMemo(() => {
    if (sunriseAzimuth === null) return null;
    return [
      markerPosition,
      calcSunPathEnd(markerPosition[0], markerPosition[1], sunriseAzimuth),
    ] as [[number, number], [number, number]];
  }, [markerPosition, sunriseAzimuth]);

  const sunsetPath = useMemo(() => {
    if (sunsetAzimuth === null) return null;
    return [
      markerPosition,
      calcSunPathEnd(markerPosition[0], markerPosition[1], sunsetAzimuth),
    ] as [[number, number], [number, number]];
  }, [markerPosition, sunsetAzimuth]);

  const eventHandlers = useMemo(
    () => ({
      drag(e: L.LeafletEvent) {
        const marker = e.target as L.Marker;
        const pos = marker.getLatLng();
        onMarkerDrag(pos.lat, pos.lng); // 位置表示のみ更新（localStorage保存なし）
      },
      dragend(e: L.LeafletEvent) {
        const marker = e.target as L.Marker;
        const pos = marker.getLatLng();
        onMarkerMove(pos.lat, pos.lng); // 確定位置を保存
      },
    }),
    [onMarkerDrag, onMarkerMove]
  );

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="sim-map"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={markerPosition}
        draggable
        icon={defaultIcon}
        eventHandlers={eventHandlers}
      />
      {sunrisePath && (
        <Polyline positions={sunrisePath} pathOptions={{ color: "#f0c040", weight: 3 }} />
      )}
      {sunsetPath && (
        <Polyline positions={sunsetPath} pathOptions={{ color: "#e05530", weight: 3 }} />
      )}
      <ZoomControl position="bottomright" />
      <MapSizeInvalidator />
      <MapCenterUpdater center={center} />
      <MapEvents onMarkerMove={onMarkerMove} onViewChange={onViewChange} />
    </MapContainer>
  );
}
