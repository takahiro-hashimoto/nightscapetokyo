"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import LocationSearch from "@/components/simulator/LocationSearch";

interface MapModalProps {
  variant: "sim" | "moon";
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function MapModal({ variant, isOpen, onClose, onLocationFound }: MapModalProps) {
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

  const p = `${variant}-modal`;

  return (
    <div className={`sp-overlay ${p}__overlay`} onClick={onClose}>
      <div
        className={`${p}__container`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${p}-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={`${p}__close`} onClick={onClose} aria-label="閉じる">
          <X size={24} />
        </button>
        <div className={`${p}__body`}>
          <h2 id={`${p}-title`} className={`${p}__title`}>気になるスポットを検索</h2>
          <LocationSearch onLocationFound={onLocationFound} onSearchComplete={onClose} />
        </div>
      </div>
    </div>
  );
}
