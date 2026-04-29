"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { calculateMoonData } from "@/lib/moon-calc";
import {
  loadMapState,
  saveMapState,
  DEFAULT_MAP_STATE,
  MOON_STORAGE_KEY,
} from "@/lib/map-persistence";
import MoonMap from "@/components/moon/MoonMap";
import MoonSidebar from "@/components/moon/MoonSidebar";
import MoonHeader from "@/components/moon/MoonHeader";
import MoonFooter from "@/components/moon/MoonFooter";
import MoonModal from "@/components/moon/MoonModal";
import "./moon.css";

export default function MoonClient() {
  const [initialized, setInitialized] = useState(false);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    DEFAULT_MAP_STATE.lat, DEFAULT_MAP_STATE.lng,
  ]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    DEFAULT_MAP_STATE.lat, DEFAULT_MAP_STATE.lng,
  ]);
  const [zoom, setZoom] = useState(DEFAULT_MAP_STATE.zoom);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  // Ref to always hold latest map state for race-free persistence
  const mapStateRef = useRef(DEFAULT_MAP_STATE);

  // Load saved state on mount (localStorage は初回マウント時のみ読む設計)
  useEffect(() => {
    const saved = loadMapState(MOON_STORAGE_KEY);
    mapStateRef.current = saved;
    setMarkerPosition([saved.lat, saved.lng]);
    setMapCenter([saved.lat, saved.lng]);
    setZoom(saved.zoom);
    setInitialized(true);
  }, []);

  // Calculate moon data
  const moonData = useMemo(() => {
    return calculateMoonData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  // Handlers
  // drag中: 位置表示のみ（localStorage保存なし）
  const handleMarkerDrag = useCallback((lat: number, lng: number) => {
    setMarkerPosition([lat, lng]);
  }, []);

  // dragend: 確定後に保存
  const handleMarkerMove = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    saveMapState(mapStateRef.current, MOON_STORAGE_KEY);
  }, []);

  const handleViewChange = useCallback((_lat: number, _lng: number, newZoom: number) => {
    mapStateRef.current = { ...mapStateRef.current, zoom: newZoom };
    setZoom(newZoom);
    saveMapState(mapStateRef.current, MOON_STORAGE_KEY);
  }, []);

  const handleLocationFound = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    setMapCenter([lat, lng]);
    saveMapState(mapStateRef.current, MOON_STORAGE_KEY);
  }, []);

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      handleDateChange((e as CustomEvent<Date>).detail);
    };
    window.addEventListener("moon:date-selected", handler);
    return () => window.removeEventListener("moon:date-selected", handler);
  }, [handleDateChange]);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  if (!initialized) {
    return (
      <div className="moon-container">
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
          }}
        >
          読み込み中...
        </div>
      </div>
    );
  }

  return (
    <div className="moon-container">
      {/* PC: Sidebar */}
      <MoonSidebar
        moonriseTime={moonData.moonriseTime}
        moonsetTime={moonData.moonsetTime}
        phaseName={moonData.phaseName}
        illumination={moonData.illumination}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onLocationFound={handleLocationFound}
      />

      {/* SP: Header */}
      <MoonHeader
        moonriseTime={moonData.moonriseTime}
        moonsetTime={moonData.moonsetTime}
        phaseName={moonData.phaseName}
        illumination={moonData.illumination}
      />

      {/* Map */}
      <MoonMap
        center={mapCenter}
        zoom={zoom}
        markerPosition={markerPosition}
        moonriseAzimuth={moonData.moonriseAzimuth}
        moonsetAzimuth={moonData.moonsetAzimuth}
        onMarkerDrag={handleMarkerDrag}
        onMarkerMove={handleMarkerMove}
        onViewChange={handleViewChange}
      />

      {/* SP: Footer */}
      <MoonFooter
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onSearchClick={openModal}
      />

      {/* PC: Menu buttons */}
      <ul className="moon-menu">
        <li>
          <Link href="/">サイトTOP</Link>
        </li>
        <li>
          <Link href="/simulator/">日の出・日の入りの方角</Link>
        </li>
        <li>
          <button onClick={() => window.dispatchEvent(new Event("moon:open-info"))}>
            お役立ち情報
          </button>
        </li>
      </ul>

      {/* SP: Full modal */}
      <MoonModal
        isOpen={modalOpen}
        onClose={closeModal}
        onLocationFound={handleLocationFound}
      />
    </div>
  );
}
