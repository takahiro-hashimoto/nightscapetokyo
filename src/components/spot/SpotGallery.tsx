"use client";

import { useState, useEffect, useCallback } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { SpotImage } from "@/lib/types";

type Props = {
  images: SpotImage[];
  spotName: string | null;
  heading?: string;
};

export default function SpotGallery({ images, spotName, heading: headingProp }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % images.length : null
    );
  }, [images.length]);

  /* キーボード操作 + body scroll lock */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [selectedIndex, close, prev, next]);

  if (images.length === 0) return null;

  const heading = headingProp
    ?? (spotName ? `${spotName}の景色・写真` : "景色・写真");

  const current = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section
      className="content-card card-padding"
      id="gallery"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading">
        <span className="heading-icon">
          <Camera size={18} aria-hidden="true" />
        </span>
        {heading}
      </h2>
      <ul className="gallery-grid">
        {images.map((img, i) => (
          <li key={img.id} className="gallery-item">
          <figure>
            <button
              type="button"
              className="gallery-item-btn"
              onClick={() => setSelectedIndex(i)}
              aria-label={img.alt || `写真 ${i + 1}`}
            >
              <Image
                src={img.url}
                alt={img.alt || ""}
                width={300}
                height={200}
                sizes="(max-width: 768px) 50vw, 220px"
                loading="lazy"
              />
            </button>
            {img.alt && <figcaption>{img.alt}</figcaption>}
          </figure>
          </li>
        ))}
      </ul>

      {/* ライトボックス モーダル */}
      {current && (
        <div
          className="modal-overlay gallery-modal-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="画像プレビュー"
        >
          {/* 閉じる */}
          <button
            type="button"
            className="gallery-modal-close"
            onClick={close}
            aria-label="閉じる"
          >
            <X size={28} />
          </button>

          {/* 前へ */}
          {images.length > 1 && (
            <button
              type="button"
              className="gallery-modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="前の画像"
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* 画像 + フッター */}
          <div className="gallery-modal-body" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.url}
              alt={current.alt || ""}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 1000px, 1200px"
              className="gallery-modal-image"
            />
            {/* キャプション + カウンター */}
            <div className="gallery-modal-footer">
              {current.alt && (
                <p className="gallery-modal-caption">{current.alt}</p>
              )}
              <p className="gallery-modal-counter">
                {selectedIndex! + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* 次へ */}
          {images.length > 1 && (
            <button
              type="button"
              className="gallery-modal-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="次の画像"
            >
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
