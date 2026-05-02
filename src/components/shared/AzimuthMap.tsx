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
import { defaultMarkerIcon } from "@/lib/leaflet-config";
import LandmarkLayer from "@/components/shared/LandmarkLayer";

export interface AzimuthMapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  riseAzimuth: number | null;
  setAzimuth: number | null;
  riseColor: string;
  setColor: string;
  mapClassName: string;
  ariaLabel?: string;
  onMarkerMove: (lat: number, lng: number) => void;
  onViewChange: (lat: number, lng: number, zoom: number) => void;
  onLandmarkClick?: (lat: number, lng: number) => void;
}

function calcPathEnd(lat: number, lng: number, azimuth: number): [number, number] {
  const radius = 10;
  const endLat = lat + radius * Math.cos((azimuth * Math.PI) / 180);
  const endLng = lng + radius * Math.sin((azimuth * Math.PI) / 180);
  return [endLat, endLng];
}

function MapSizeInvalidator() {
  const map = useMap();
  useEffect(() => {
    const container = map.getContainer();
    let prevW = 0, prevH = 0, rafId = 0;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (width < 50 || height < 50) return;
        if (width !== prevW || height !== prevH) {
          prevW = width; prevH = height;
          map.invalidateSize();
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

export default function AzimuthMap({
  center,
  zoom,
  markerPosition,
  riseAzimuth,
  setAzimuth,
  riseColor,
  setColor,
  mapClassName,
  ariaLabel,
  onMarkerMove,
  onViewChange,
  onLandmarkClick,
}: AzimuthMapProps) {
  const risePath = useMemo(() => {
    if (riseAzimuth === null) return null;
    return [
      markerPosition,
      calcPathEnd(markerPosition[0], markerPosition[1], riseAzimuth),
    ] as [[number, number], [number, number]];
  }, [markerPosition, riseAzimuth]);

  const setPath = useMemo(() => {
    if (setAzimuth === null) return null;
    return [
      markerPosition,
      calcPathEnd(markerPosition[0], markerPosition[1], setAzimuth),
    ] as [[number, number], [number, number]];
  }, [markerPosition, setAzimuth]);

  const eventHandlers = useMemo(
    () => ({
      dragend(e: L.LeafletEvent) {
        const marker = e.target as L.Marker;
        const pos = marker.getLatLng();
        onMarkerMove(pos.lat, pos.lng);
      },
    }),
    [onMarkerMove]
  );

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={mapClassName}
      zoomControl={false}
      aria-label={ariaLabel}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={markerPosition}
        draggable
        icon={defaultMarkerIcon}
        eventHandlers={eventHandlers}
      />
      {risePath && (
        <Polyline positions={risePath} pathOptions={{ color: riseColor, weight: 3 }} />
      )}
      {setPath && (
        <Polyline positions={setPath} pathOptions={{ color: setColor, weight: 3 }} />
      )}
      <ZoomControl position="bottomright" />
      <MapSizeInvalidator />
      <MapCenterUpdater center={center} />
      <MapEvents onMarkerMove={onMarkerMove} onViewChange={onViewChange} />
      {onLandmarkClick && <LandmarkLayer onLandmarkClick={onLandmarkClick} />}
    </MapContainer>
  );
}
