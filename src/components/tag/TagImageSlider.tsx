"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** ロケール別UIラベル */
const SLIDER_LABELS: Record<string, {
  nightView: string;
  prev: string;
  next: string;
  imageN: (n: number) => string;
}> = {
  ja: { nightView: "の夜景", prev: "前の画像", next: "次の画像", imageN: (n) => `画像${n}` },
  en: { nightView: " night view", prev: "Previous image", next: "Next image", imageN: (n) => `Image ${n}` },
  ko: { nightView: " 야경", prev: "이전 이미지", next: "다음 이미지", imageN: (n) => `이미지 ${n}` },
  tw: { nightView: "夜景", prev: "上一張", next: "下一張", imageN: (n) => `圖片${n}` },
  cn: { nightView: "夜景", prev: "上一张", next: "下一张", imageN: (n) => `图片${n}` },
};

type Props = {
  images: { url: string; alt: string | null }[];
  name: string;
  locale?: string;
};

export default function TagImageSlider({ images, name, locale }: Props) {
  const l = SLIDER_LABELS[locale ?? "ja"] ?? SLIDER_LABELS.ja;
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

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
          <div className="tag-slider-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`tag-slider-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={l.imageN(i + 1)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
