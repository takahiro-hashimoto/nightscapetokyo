"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Link from "next/link";
import { calculateSunData } from "@/lib/sun-calc";
import { loadMapState, saveMapState } from "@/lib/map-persistence";
import SimulatorMap from "@/components/simulator/SimulatorMap";
import SimulatorSidebar from "@/components/simulator/SimulatorSidebar";
import SimulatorHeader from "@/components/simulator/SimulatorHeader";
import SimulatorFooter from "@/components/simulator/SimulatorFooter";
import SimulatorModal from "@/components/simulator/SimulatorModal";
import PcContentModal from "@/components/simulator/PcContentModal";
import "./simulator.css";

export default function SimulatorClient() {
  const [initialized, setInitialized] = useState(false);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    35.6895, 139.6917,
  ]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    35.6895, 139.6917,
  ]);
  const [zoom, setZoom] = useState(16);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [pcModalOpen, setPcModalOpen] = useState(false);
  const [pcModalContent, setPcModalContent] = useState<
    "howto" | "trivia" | "links" | null
  >(null);

  // Load saved state on mount (localStorage は初回マウント時のみ読む設計)
  useEffect(() => {
    const saved = loadMapState();
    /* eslint-disable react-hooks/set-state-in-effect */
    setMarkerPosition([saved.lat, saved.lng]);
    setMapCenter([saved.lat, saved.lng]);
    setZoom(saved.zoom);
    setInitialized(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Calculate sun data
  const sunData = useMemo(() => {
    return calculateSunData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  // Handlers
  const handleMarkerMove = useCallback(
    (lat: number, lng: number) => {
      setMarkerPosition([lat, lng]);
      saveMapState({ lat, lng, zoom });
    },
    [zoom]
  );

  const handleViewChange = useCallback(
    (lat: number, lng: number, newZoom: number) => {
      setZoom(newZoom);
      saveMapState({ lat: markerPosition[0], lng: markerPosition[1], zoom: newZoom });
    },
    [markerPosition]
  );

  const handleLocationFound = useCallback(
    (lat: number, lng: number) => {
      setMarkerPosition([lat, lng]);
      setMapCenter([lat, lng]);
      saveMapState({ lat, lng, zoom });
    },
    [zoom]
  );

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const openPcModal = useCallback(
    (content: "howto" | "trivia" | "links") => {
      setPcModalContent(content);
      setPcModalOpen(true);
    },
    []
  );
  const closePcModal = useCallback(() => {
    setPcModalOpen(false);
    setPcModalContent(null);
  }, []);

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
        onSearchClick={openModal}
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
          <button onClick={() => openPcModal("howto")}>使い方</button>
        </li>
        <li>
          <button onClick={() => openPcModal("trivia")}>豆知識</button>
        </li>
        <li>
          <button onClick={() => openPcModal("links")}>お役立ちリンク</button>
        </li>
      </ul>

      {/* SP: Full modal */}
      <SimulatorModal
        isOpen={modalOpen}
        onClose={closeModal}
        onLocationFound={handleLocationFound}
      />

      {/* PC: Content modals */}
      {pcModalOpen && pcModalContent && (
        <PcContentModal content={pcModalContent} onClose={closePcModal} />
      )}
    </div>
  );
}
