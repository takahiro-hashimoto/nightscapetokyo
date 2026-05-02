"use client";

import { useMemo, useEffect } from "react";
import Link from "next/link";
import { calculateMoonData } from "@/lib/moon-calc";
import { MOON_STORAGE_KEY } from "@/lib/map-persistence";
import { usePersistedMapState } from "@/hooks/usePersistedMapState";
import { MAP_EVENTS } from "@/lib/map-events";
import MoonMap from "@/components/moon/MoonMap";
import MoonSidebar from "@/components/moon/MoonSidebar";
import MoonHeader from "@/components/moon/MoonHeader";
import MoonFooter from "@/components/moon/MoonFooter";
import MoonModal from "@/components/moon/MoonModal";
import LoadingScreen from "@/components/shared/LoadingScreen";
import "./moon.css";

export default function MoonClient() {
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
  } = usePersistedMapState({ storageKey: MOON_STORAGE_KEY });

  // カレンダーから発火される日付選択イベントを受信
  useEffect(() => {
    const handler = (e: Event) => {
      handleDateChange((e as CustomEvent<Date>).detail);
    };
    window.addEventListener(MAP_EVENTS.MOON_DATE_SELECTED, handler);
    return () => window.removeEventListener(MAP_EVENTS.MOON_DATE_SELECTED, handler);
  }, [handleDateChange]);

  const moonData = useMemo(() => {
    return calculateMoonData(selectedDate, markerPosition[0], markerPosition[1]);
  }, [selectedDate, markerPosition]);

  if (!initialized) {
    return <LoadingScreen containerClassName="moon-container" />;
  }

  return (
    <main className="moon-container">
      <MoonSidebar
        moonriseTime={moonData.moonriseTime}
        moonsetTime={moonData.moonsetTime}
        phaseName={moonData.phaseName}
        illumination={moonData.illumination}
        phase={moonData.phase}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onLocationFound={handleLocationFound}
      />

      <MoonHeader
        moonriseTime={moonData.moonriseTime}
        moonsetTime={moonData.moonsetTime}
        phaseName={moonData.phaseName}
        illumination={moonData.illumination}
      />

      <MoonMap
        center={mapCenter}
        zoom={zoom}
        markerPosition={markerPosition}
        moonriseAzimuth={moonData.moonriseAzimuth}
        moonsetAzimuth={moonData.moonsetAzimuth}
        onMarkerMove={handleMarkerMove}
        onViewChange={handleViewChange}
        onLandmarkClick={handleLocationFound}
      />

      <MoonFooter
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        onSearchClick={openModal}
      />

      <nav aria-label="関連ページ">
        <ul className="moon-menu">
          <li>
            <Link href="/">サイトTOP</Link>
          </li>
          <li>
            <Link href="/simulator/">日の出・日の入りの方角</Link>
          </li>
          <li>
            <button onClick={() => window.dispatchEvent(new Event(MAP_EVENTS.MOON_OPEN_INFO))}>
              お役立ち情報
            </button>
          </li>
        </ul>
      </nav>

      <MoonModal
        isOpen={modalOpen}
        onClose={closeModal}
        onLocationFound={handleLocationFound}
      />
    </main>
  );
}
