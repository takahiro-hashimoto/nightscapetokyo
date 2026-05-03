"use client";

import AzimuthMap from "@/components/shared/AzimuthMap";

interface SimulatorMapProps {
  center: [number, number];
  zoom: number;
  markerPosition: [number, number];
  sunriseAzimuth: number | null;
  sunsetAzimuth: number | null;
  onMarkerMove: (lat: number, lng: number) => void;
  onViewChange: (lat: number, lng: number, zoom: number) => void;
  onLandmarkClick?: (lat: number, lng: number) => void;
  showLandmarks?: boolean;
}

export default function SimulatorMap({
  sunriseAzimuth,
  sunsetAzimuth,
  ...rest
}: SimulatorMapProps) {
  return (
    <AzimuthMap
      {...rest}
      riseAzimuth={sunriseAzimuth}
      setAzimuth={sunsetAzimuth}
      riseColor="#f0c040"
      setColor="#e05530"
      mapClassName="sim-map"
      ariaLabel="日の出・日の入り方角シミュレーター地図"
    />
  );
}
