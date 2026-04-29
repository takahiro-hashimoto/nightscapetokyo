"use client";

import MapModal from "@/components/shared/MapModal";

interface MoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function MoonModal(props: MoonModalProps) {
  return <MapModal variant="moon" {...props} />;
}
