"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Camera } from "lucide-react";
import Image from "next/image";
import type { SpotImage } from "@/lib/types";

const SpotGalleryModal = dynamic(() => import("./SpotGalleryModal"), { ssr: false });

type Props = {
  images: SpotImage[];
  spotName: string | null;
  heading?: string;
};

export default function SpotGallery({ images, spotName, heading: headingProp }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const close = useCallback(() => setSelectedIndex(null), []);

  const openModal = useCallback((i: number) => {
    setIsLoading(true);
    setSelectedIndex(i);
  }, []);

  const prev = useCallback(() => {
    setIsLoading(true);
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const next = useCallback(() => {
    setIsLoading(true);
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % images.length : null
    );
  }, [images.length]);

  if (images.length === 0) return null;

  const heading = headingProp ?? (spotName ? `${spotName}の景色・写真` : "景色・写真");

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
                onClick={() => openModal(i)}
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

      {selectedIndex !== null && (
        <SpotGalleryModal
          images={images}
          selectedIndex={selectedIndex}
          isLoading={isLoading}
          onClose={close}
          onPrev={prev}
          onNext={next}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </section>
  );
}
