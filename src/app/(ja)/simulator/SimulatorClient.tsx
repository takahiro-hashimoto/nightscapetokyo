"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { calculateSunData } from "@/lib/sun-calc";
import { loadMapState, saveMapState, DEFAULT_MAP_STATE } from "@/lib/map-persistence";
import SimulatorMap from "@/components/simulator/SimulatorMap";
import SimulatorSidebar from "@/components/simulator/SimulatorSidebar";
import SimulatorHeader from "@/components/simulator/SimulatorHeader";
import SimulatorFooter from "@/components/simulator/SimulatorFooter";
import SimulatorModal from "@/components/simulator/SimulatorModal";
import "./simulator.css";

export default function SimulatorClient() {
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
    const saved = loadMapState();
    mapStateRef.current = saved;
    setMarkerPosition([saved.lat, saved.lng]);
    setMapCenter([saved.lat, saved.lng]);
    setZoom(saved.zoom);
    setInitialized(true);
  }, []);

  // Calculate sun data
  const sunData = useMemo(() => {
    return calculateSunData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  // Handlers
  const handleMarkerMove = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    saveMapState(mapStateRef.current);
  }, []);

  const handleViewChange = useCallback((_lat: number, _lng: number, newZoom: number) => {
    mapStateRef.current = { ...mapStateRef.current, zoom: newZoom };
    setZoom(newZoom);
    saveMapState(mapStateRef.current);
  }, []);

  const handleLocationFound = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    setMapCenter([lat, lng]);
    saveMapState(mapStateRef.current);
  }, []);

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  if (!initialized) {
    return (
      <div className="sim-container">
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
    <div className="sim-container">
      {/* PC: Sidebar */}
      <SimulatorSidebar
        sunriseTime={sunData.sunriseTime}
        sunsetTime={sunData.sunsetTime}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onLocationFound={handleLocationFound}
      />

      {/* SP: Header */}
      <SimulatorHeader
        sunriseTime={sunData.sunriseTime}
        sunsetTime={sunData.sunsetTime}
      />

      {/* Map */}
      <SimulatorMap
        center={mapCenter}
        zoom={zoom}
        markerPosition={markerPosition}
        sunriseAzimuth={sunData.sunriseAzimuth}
        sunsetAzimuth={sunData.sunsetAzimuth}
        onMarkerMove={handleMarkerMove}
        onViewChange={handleViewChange}
      />

      {/* SP: Footer */}
      <SimulatorFooter
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onSearchClick={openModal}
      />

      {/* PC: Menu buttons */}
      <ul className="sim-menu">
        <li>
          <Link href="/">サイトTOP</Link>
        </li>
        <li>
          <button onClick={() => window.dispatchEvent(new Event("sim:open-info"))}>
            お役立ち情報
          </button>
        </li>
      </ul>

      {/* SP: Full modal */}
      <SimulatorModal
        isOpen={modalOpen}
        onClose={closeModal}
        onLocationFound={handleLocationFound}
      />
    </div>
  );
}
