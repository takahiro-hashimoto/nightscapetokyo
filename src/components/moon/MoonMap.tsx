"use client";

import AzimuthMap from "@/components/shared/AzimuthMap";

interface MoonMapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  moonriseAzimuth: number | null;
  moonsetAzimuth: number | null;
  onMarkerMove: (lat: number, lng: number) => void;
  onViewChange: (lat: number, lng: number, zoom: number) => void;
}

export default function MoonMap({
  moonriseAzimuth,
  moonsetAzimuth,
  ...rest
}: MoonMapProps) {
  return (
    <AzimuthMap
      {...rest}
      riseAzimuth={moonriseAzimuth}
      setAzimuth={moonsetAzimuth}
      riseColor="#f0a830"
      setColor="#4a7ec8"
      mapClassName="moon-map"
      ariaLabel="月の出・月の入り方角シミュレーター地図"
    />
  );
}
