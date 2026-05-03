"use client";

import { useMemo, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
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
  riseLabel?: string;
  setLabel?: string;
  mapClassName: string;
  ariaLabel?: string;
  onMarkerMove: (lat: number, lng: number) => void;
  onViewChange: (lat: number, lng: number, zoom: number) => void;
  onLandmarkClick?: (lat: number, lng: number) => void;
  showLandmarks?: boolean;
  onToggleLandmarks?: () => void;
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

/** MapContainer内でmapインスタンスを外部refに渡す */
function MapRefCapture({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) {
  const map = useMap();
  mapRef.current = map;
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
  riseLabel,
  setLabel,
  mapClassName,
  ariaLabel,
  onMarkerMove,
  onViewChange,
  onLandmarkClick,
  showLandmarks = true,
  onToggleLandmarks,
}: AzimuthMapProps) {
  const mapRef = useRef<L.Map | null>(null);

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

  const showLegend = (riseLabel || setLabel) && (riseAzimuth !== null || setAzimuth !== null);

  return (
    <div className="azimuth-map-wrapper">
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
        <MapSizeInvalidator />
        <MapCenterUpdater center={center} />
        <MapEvents onMarkerMove={onMarkerMove} onViewChange={onViewChange} />
        <MapRefCapture mapRef={mapRef} />
        {onLandmarkClick && showLandmarks && <LandmarkLayer onLandmarkClick={onLandmarkClick} />}
      </MapContainer>

      {/* カスタムコントロール（PC のみ表示） */}
      <div className="map-controls">
        {onToggleLandmarks && (
          <button
            className={`map-ctrl-landmark ${showLandmarks ? "map-ctrl-landmark--on" : "map-ctrl-landmark--off"}`}
            onClick={onToggleLandmarks}
            aria-label={showLandmarks ? "ランドマークを非表示" : "ランドマークを表示"}
            title={showLandmarks ? "ランドマークを非表示" : "ランドマークを表示"}
          >
            <span className="map-ctrl-landmark__icon">🗼</span>
            <span className="map-ctrl-landmark__track">
              <span className="map-ctrl-landmark__thumb" />
            </span>
          </button>
        )}
        <div className="map-ctrl-zoom">
          <button
            className="map-ctrl-zoom__btn"
            onClick={() => mapRef.current?.zoomIn()}
            aria-label="拡大"
          >＋</button>
          <button
            className="map-ctrl-zoom__btn"
            onClick={() => mapRef.current?.zoomOut()}
            aria-label="縮小"
          >－</button>
        </div>
      </div>

      {showLegend && (
        <div className="map-legend">
          {riseAzimuth !== null && riseLabel && (
            <div className="map-legend__item">
              <span className="map-legend__line" style={{ background: riseColor }} />
              <span className="map-legend__label">{riseLabel}</span>
            </div>
          )}
          {setAzimuth !== null && setLabel && (
            <div className="map-legend__item">
              <span className="map-legend__line" style={{ background: setColor }} />
              <span className="map-legend__label">{setLabel}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
