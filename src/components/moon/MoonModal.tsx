"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import LocationSearch from "@/components/simulator/LocationSearch";

interface MoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function MoonModal({
  isOpen,
  onClose,
  onLocationFound,
}: MoonModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="sp-overlay moon-modal__overlay" onClick={onClose}>
      <div
        className="moon-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="moon-modal__close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="moon-modal__body">
          <h2 className="moon-modal__title">気になるスポットを検索</h2>
          <LocationSearch
            onLocationFound={onLocationFound}
            onSearchComplete={onClose}
          />
        </div>
      </div>
    </div>
  );
}
