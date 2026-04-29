"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { loadMapState, saveMapState, DEFAULT_MAP_STATE } from "@/lib/map-persistence";

interface UsePersistedMapStateOptions {
  storageKey?: string;
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
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const saved = loadMapState(storageKey);
    mapStateRef.current = saved;
    setMarkerPosition([saved.lat, saved.lng]);
    setMapCenter([saved.lat, saved.lng]);
    setZoom(saved.zoom);
    setInitialized(true);
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
  }, [storageKey]);

  const handleViewChange = useCallback((_lat: number, _lng: number, newZoom: number) => {
    mapStateRef.current = { ...mapStateRef.current, zoom: newZoom };
    setZoom(newZoom);
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveMapState(mapStateRef.current, storageKey);
    }, 300);
  }, [storageKey]);

  const handleLocationFound = useCallback((lat: number, lng: number) => {
    mapStateRef.current = { ...mapStateRef.current, lat, lng };
    setMarkerPosition([lat, lng]);
    setMapCenter([lat, lng]);
    saveMapState(mapStateRef.current, storageKey);
  }, [storageKey]);

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date);
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
