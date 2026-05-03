"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calculateSunData } from "@/lib/sun-calc";
import { usePersistedMapState } from "@/hooks/usePersistedMapState";
import { MAP_EVENTS } from "@/lib/map-events";
import { formatDateJa } from "@/lib/date-utils";
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

  const [showLandmarks, setShowLandmarks] = useState(true);

  const sunData = useMemo(() => {
    return calculateSunData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  const shareText = useMemo(() => {
    const dateStr = formatDateJa(selectedDate);
    const rise = sunData.sunriseTime ?? "日の出なし";
    const set = sunData.sunsetTime ?? "日の入りなし";
    const riseAz = sunData.sunriseAzimuth !== null ? `（方位角 ${Math.round(sunData.sunriseAzimuth)}°）` : "";
    const setAz = sunData.sunsetAzimuth !== null ? `（方位角 ${Math.round(sunData.sunsetAzimuth)}°）` : "";
    return `【日の出・日の入りナビ】\n📅 ${dateStr}\n🌅 日の出 ${rise}${riseAz}\n🌇 日の入り ${set}${setAz}`;
  }, [selectedDate, sunData]);

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
        shareText={shareText}
        showLandmarks={showLandmarks}
        onToggleLandmarks={() => setShowLandmarks((v) => !v)}
      />

      <SimulatorHeader
        sunriseTime={sunData.sunriseTime}
        sunsetTime={sunData.sunsetTime}
        shareText={shareText}
      />

      <SimulatorMap
        center={mapCenter}
        zoom={zoom}
        markerPosition={markerPosition}
        sunriseAzimuth={sunData.sunriseAzimuth}
        sunsetAzimuth={sunData.sunsetAzimuth}
        onMarkerMove={handleMarkerMove}
        onViewChange={handleViewChange}
        onLandmarkClick={handleLocationFound}
        showLandmarks={showLandmarks}
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
