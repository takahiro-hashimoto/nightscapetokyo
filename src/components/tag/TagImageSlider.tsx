"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteLocale } from "@/lib/types";
import { TAG_SLIDER_LABELS } from "@/lib/i18n-labels";

type Props = {
  images: { url: string; alt: string | null }[];
  name: string;
  locale?: string;
  priority?: boolean;
  rank?: number;
};

export default function TagImageSlider({ images, name, locale, priority, rank }: Props) {
  const l = TAG_SLIDER_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_SLIDER_LABELS.ja;
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loadedUrls = useRef<Set<string>>(new Set());
  const total = images.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  // 未ロードの画像のみスケルトンを表示
  useEffect(() => {
    setIsLoading(!loadedUrls.current.has(images[current].url));
  }, [current, images]);

  if (total === 0) return null;

  const altText = images[current].alt ?? `${name}${l.nightView}`;

  return (
    <div className="tag-slider">
      <div className="tag-slider-viewport">
        {isLoading && <div className="tag-slider-skeleton" aria-hidden="true" />}
        {images.map((img, i) => (
          <Image
            key={img.url}
            src={img.url}
            alt={i === current ? altText : ""}
            fill
            sizes="(max-width: 768px) 100vw, 880px"
            priority={priority && i === 0}
            style={{ opacity: i === current ? 1 : 0 }}
            onLoad={() => {
              loadedUrls.current.add(img.url);
              if (i === current) setIsLoading(false);
            }}
          />
        ))}
        {rank != null && (
          <span className="tag-slider-rank-badge">{l.rankBadge(rank)}</span>
        )}
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
                onClick={() => setCurrent(i)}
                aria-label={img.alt ?? l.imageN(i + 1)}
              >
                <Image
                  src={img.url}
                  alt={img.alt ?? `${name}${l.nightView} ${l.imageN(i + 1)}`}
                  width={60}
                  height={40}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
