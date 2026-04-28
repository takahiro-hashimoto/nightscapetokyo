"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import LocationSearch from "./LocationSearch";

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationFound: (lat: number, lng: number) => void;
}

export default function SimulatorModal({
  isOpen,
  onClose,
  onLocationFound,
}: SimulatorModalProps) {
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
    <div className="modal-overlay sim-modal__overlay" onClick={onClose}>
      <div
        className="sim-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="sim-modal__close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="sim-modal__body">
          <div className="sim-modal__section">
            <h2 className="sim-modal__title">気になるスポットを検索</h2>
            <LocationSearch
              onLocationFound={onLocationFound}
              onSearchComplete={onClose}
            />
            <ul className="sim-modal__list">
              <li>任意の場所の日の出と日の入りの時刻や方角をチェックできるツールです</li>
              <li>スポット検索は住所、郵便番号、施設名に対応しています</li>
              <li>時差など考慮していないので日本国内向けのツールとしてお使い下さい</li>
              <li>マーカーと方位線はタップして自由に動かすことができます</li>
            </ul>
          </div>
        </div>

        <div className="sim-modal__footer">
          <Link href="/" className="sim-modal__footer-link">
            ← サイトトップへ
          </Link>
        </div>
      </div>
    </div>
  );
}
