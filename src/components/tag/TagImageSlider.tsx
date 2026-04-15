"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteLocale } from "@/lib/types";
import { TAG_SLIDER_LABELS } from "@/lib/i18n-labels";

type Props = {
  images: { url: string; alt: string | null }[];
  name: string;
  locale?: string;
};

export default function TagImageSlider({ images, name, locale }: Props) {
  const l = TAG_SLIDER_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_SLIDER_LABELS.ja;
  const [current, setCurrent] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const total = images.length;

  const prev = useCallback(() => {
    setHasInteracted(true);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setHasInteracted(true);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  if (total === 0) return null;

  const altText = images[current].alt ?? `${name}${l.nightView}`;

  return (
    <div className="tag-slider">
      <div className="tag-slider-viewport">
        <Image
          key={images[current].url}
          src={images[current].url}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 880px"
        />
        {altText && (
          <span className="tag-slider-caption">{altText}</span>
        )}
      </div>
      {total > 1 && (
        <>
          <button className="tag-slider-btn tag-slider-prev" onClick={prev} aria-label={l.prev}>
            <ChevronLeft size={24} />
          </button>
          <button className="tag-slider-btn tag-slider-next" onClick={next} aria-label={l.next}>
            <ChevronRight size={24} />
          </button>
          <div className="tag-slider-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`tag-slider-thumb${i === current ? " active" : ""}`}
                onClick={() => { setHasInteracted(true); setCurrent(i); }}
                aria-label={img.alt ?? l.imageN(i + 1)}
              >
                {hasInteracted ? (
                  <Image
                    src={img.url}
                    alt={img.alt ?? `${name}${l.nightView} ${l.imageN(i + 1)}`}
                    width={60}
                    height={40}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                ) : (
                  <span className="tag-slider-thumb-placeholder" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
