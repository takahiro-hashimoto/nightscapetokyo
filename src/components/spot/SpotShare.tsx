"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import type { ShareLabels } from "@/lib/i18n-labels";

type Props = {
  url: string;
  title: string;
  labels: ShareLabels;
};

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function HatenaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.47 0C22.42 0 24 1.58 24 3.53v16.94c0 1.95-1.58 3.53-3.53 3.53H3.53C1.58 24 0 22.42 0 20.47V3.53C0 1.58 1.58 0 3.53 0h16.94zm-3.705 14.47c-.78 0-1.41.63-1.41 1.41s.63 1.414 1.41 1.414 1.41-.634 1.41-1.414-.63-1.41-1.41-1.41zm-7.37-8.56H6.162v12.18h3.12v-4.32h.075c.408.616 1.107.98 2.022.98 2.023 0 3.406-1.8 3.406-4.49 0-2.482-1.232-4.35-3.293-4.35-.97 0-1.72.41-2.1 1.08h-.075l.075-1.08zm.78 4.46c0-1.382.654-2.316 1.602-2.316 1.005 0 1.602.934 1.602 2.316s-.597 2.35-1.602 2.35c-.948 0-1.602-.968-1.602-2.35zm7.7-4.46h-2.092v8.24h2.092V5.91z" />
    </svg>
  );
}

export default function SpotShare({ url, title, labels }: Props) {
  const [copied, setCopied] = useState(false);

  const shareOnX = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  };

  const shareOnLine = () => {
    const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  };

  const shareOnHatena = () => {
    const shareUrl = `https://b.hatena.ne.jp/entry/s/${url.replace(/^https?:\/\//, "")}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  };

  return (
    <div className="share-section">
      <p className="share-heading">{labels.heading}</p>
      <div className="share-buttons">
        <button type="button" className="share-btn share-btn-x" onClick={shareOnX}>
          <XIcon />
          <span>{labels.x}</span>
        </button>
        <button type="button" className="share-btn share-btn-line" onClick={shareOnLine}>
          <LineIcon />
          <span>{labels.line}</span>
        </button>
        <button type="button" className="share-btn share-btn-hatena" onClick={shareOnHatena}>
          <HatenaIcon />
          <span>{labels.hatena}</span>
        </button>
        <button
          type="button"
          className={`share-btn share-btn-copy ${copied ? "share-btn-copied" : ""}`}
          onClick={copyUrl}
        >
          {copied ? <Check size={18} /> : <Link2 size={18} />}
          <span>{copied ? labels.copied : labels.copy}</span>
        </button>
      </div>
    </div>
  );
}
