"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { loadMapState, saveMapState, DEFAULT_MAP_STATE } from "@/lib/map-persistence";

interface UsePersistedMapStateOptions {
  storageKey?: string;
}

function parseDateParam(dateStr: string | null): Date | null {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null;
  const d = new Date(dateStr + "T00:00:00");
  return isNaN(d.getTime()) ? null : d;
}

function toDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function updateUrlState(lat: number, lng: number, zoom: number, date: Date) {
  const params = new URLSearchParams(window.location.search);
  params.set("lat", lat.toFixed(5));
  params.set("lng", lng.toFixed(5));
  params.set("zoom", String(zoom));
  params.set("date", toDateStr(date));
  history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
}

export function usePersistedMapState({ storageKey }: UsePersistedMapStateOptions = {}) {
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

  const mapStateRef = useRef(DEFAULT_MAP_STATE);
  const dateRef = useRef(new Date());
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // URLパラメータを優先、なければlocalStorage、なければデフォルト
    const params = new URLSearchParams(window.location.search);
    const urlLat = parseFloat(params.get("lat") ?? "");
    const urlLng = parseFloat(params.get("lng") ?? "");
    const urlZoom = parseInt(params.get("zoom") ?? "");
    const urlDate = parseDateParam(params.get("date"));

    const hasUrlPosition =
      !isNaN(urlLat) && !isNaN(urlLng) &&
      urlLat >= -90 && urlLat <= 90 &&
      urlLng >= -180 && urlLng <= 180;
    const hasUrlZoom = !isNaN(urlZoom) && urlZoom >= 1 && urlZoom <= 20;

    const saved = loadMapState(storageKey);

    const initLat = hasUrlPosition ? urlLat : saved.lat;
    const initLng = hasUrlPosition ? urlLng : saved.lng;
    const initZoom = hasUrlZoom ? urlZoom : saved.zoom;
    const initDate = urlDate ?? new Date();

    mapStateRef.current = { lat: initLat, lng: initLng, zoom: initZoom };
    dateRef.current = initDate;

    setMarkerPosition([initLat, initLng]);
    setMapCenter([initLat, initLng]);
    setZoom(initZoom);
    setSelectedDate(initDate);
    setInitialized(true);

    // URLを正規化（部分的なパラメータしかない場合も補完）
    updateUrlState(initLat, initLng, initZoom, initDate);
  }, [storageKey]);

  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  const handleMarkerMove = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    saveMapState(mapStateRef.current, storageKey);
    updateUrlState(lat, lng, mapStateRef.current.zoom, dateRef.current);
  }, [storageKey]);

  const handleViewChange = useCallback((_lat: number, _lng: number, newZoom: number) => {
    mapStateRef.current = { ...mapStateRef.current, zoom: newZoom };
    setZoom(newZoom);
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveMapState(mapStateRef.current, storageKey);
      updateUrlState(
        mapStateRef.current.lat,
        mapStateRef.current.lng,
        newZoom,
        dateRef.current,
      );
    }, 300);
  }, [storageKey]);

  const handleLocationFound = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    setMapCenter([lat, lng]);
    saveMapState(mapStateRef.current, storageKey);
    updateUrlState(lat, lng, mapStateRef.current.zoom, dateRef.current);
  }, [storageKey]);

  const handleDateChange = useCallback((date: Date) => {
    dateRef.current = date;
    setSelectedDate(date);
    updateUrlState(
      mapStateRef.current.lat,
      mapStateRef.current.lng,
      mapStateRef.current.zoom,
      date,
    );
  }, []);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return {
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
  };
}
