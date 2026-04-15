"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeFacade({ videoId, title }: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label={`${title}を再生`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        padding: 0,
        border: 0,
        background: "none",
        cursor: "pointer",
      }}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      {/* Play button overlay */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="68"
          height="48"
          viewBox="0 0 68 48"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.4))" }}
        >
          <path d="M66.5 7.7c-.8-2.9-2.9-5-5.8-5.8C55.8 0 34 0 34 0S12.2 0 7.3 1.9C4.5 2.7 2.3 4.9 1.5 7.7 0 12.7 0 24 0 24s0 11.3 1.5 16.3c.8 2.9 2.9 5 5.8 5.8C12.2 48 34 48 34 48s21.8 0 26.7-1.9c2.9-.8 5-2.9 5.8-5.8C68 35.3 68 24 68 24s0-11.3-1.5-16.3z" fill="#ff0000" />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
