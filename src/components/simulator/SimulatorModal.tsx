"use client";

import MapModal from "@/components/shared/MapModal";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function SimulatorModal(props: SimulatorModalProps) {
  return <MapModal variant="sim" {...props} />;
}
