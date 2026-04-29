"use client";

import { useMemo } from "react";
import Link from "next/link";
import { calculateSunData } from "@/lib/sun-calc";
import { usePersistedMapState } from "@/hooks/usePersistedMapState";
import { MAP_EVENTS } from "@/lib/map-events";
import SimulatorMap from "@/components/simulator/SimulatorMap";
import SimulatorSidebar from "@/components/simulator/SimulatorSidebar";
import SimulatorHeader from "@/components/simulator/SimulatorHeader";
import SimulatorFooter from "@/components/simulator/SimulatorFooter";
import SimulatorModal from "@/components/simulator/SimulatorModal";
import LoadingScreen from "@/components/shared/LoadingScreen";
import "./simulator.css";

export default function SimulatorClient() {
  const {
    initialized,
    markerPosition,
    mapCenter,
    zoom,
    selectedDate,
    modalOpen,
    handleMarkerMove,
    handleViewChange,
    handleLocationFound,
    handleDateChange,
    openModal,
    closeModal,
  } = usePersistedMapState();

  const sunData = useMemo(() => {
    return calculateSunData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  if (!initialized) {
    return <LoadingScreen containerClassName="sim-container" />;
  }

  return (
    <main className="sim-container">
      <SimulatorSidebar
        sunriseTime={sunData.sunriseTime}
        sunsetTime={sunData.sunsetTime}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onLocationFound={handleLocationFound}
      />

      <SimulatorHeader
        sunriseTime={sunData.sunriseTime}
        sunsetTime={sunData.sunsetTime}
      />

      <SimulatorMap
        center={mapCenter}
        zoom={zoom}
        markerPosition={markerPosition}
        sunriseAzimuth={sunData.sunriseAzimuth}
        sunsetAzimuth={sunData.sunsetAzimuth}
        onMarkerMove={handleMarkerMove}
        onViewChange={handleViewChange}
      />

      <SimulatorFooter
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onSearchClick={openModal}
      />

      <nav aria-label="関連ページ">
        <ul className="sim-menu">
          <li>
            <Link href="/">サイトTOP</Link>
          </li>
          <li>
            <Link href="/moon/">月の出・月の入りの方角</Link>
          </li>
          <li>
            <button onClick={() => window.dispatchEvent(new Event(MAP_EVENTS.SIM_OPEN_INFO))}>
              お役立ち情報
            </button>
          </li>
        </ul>
      </nav>

      <SimulatorModal
        isOpen={modalOpen}
        onClose={closeModal}
        onLocationFound={handleLocationFound}
      />
    </main>
  );
}
