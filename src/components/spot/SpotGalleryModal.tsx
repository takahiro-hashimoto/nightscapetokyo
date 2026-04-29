"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { SpotImage } from "@/lib/types";

type Props = {
  images: SpotImage[];
  selectedIndex: number;
  isLoading: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onLoad: () => void;
};

export default function SpotGalleryModal({
  images,
  selectedIndex,
  isLoading,
  onClose,
  onPrev,
  onNext,
  onLoad,
}: Props) {
  const current = images[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("modal-open");
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div
      className="modal-overlay gallery-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="画像プレビュー"
    >
      <button
        type="button"
        className="gallery-modal-close"
        onClick={onClose}
        aria-label="閉じる"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className="gallery-modal-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="前の画像"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      <div className="gallery-modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-modal-image-wrap">
          {isLoading && <div className="gallery-modal-skeleton" aria-hidden="true" />}
          <Image
            src={current.url}
            alt={current.alt || ""}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 1000px, 1200px"
            className="gallery-modal-image"
            onLoad={onLoad}
          />
        </div>
        <div className="gallery-modal-footer">
          {current.alt && (
            <p className="gallery-modal-caption">{current.alt}</p>
          )}
          <p className="gallery-modal-counter">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {images.length > 1 && (
        <button
          type="button"
          className="gallery-modal-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="次の画像"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  );
}
