"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import type { ShareLabels } from "@/lib/i18n-labels";

type Props = {
  url: string;
  title: string;
  labels: ShareLabels;
  locale?: string;
  className?: string;
};

/** ロケールごとに表示するボタンの順序を定義 */
const LOCALE_BUTTONS: Record<string, readonly string[]> = {
  ja: ["x", "line", "hatena", "copy"],
  en: ["x", "facebook", "whatsapp", "copy"],
  ko: ["x", "facebook", "copy"],
  tw: ["x", "line", "facebook", "copy"],
  cn: ["weibo", "copy"],
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

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WeiboIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.74 5.443zM11.298 0C6.037.001 1.577 3.315.328 8.014c-.146.549.175 1.08.716 1.16l.806.116c.557.08 1.096-.27 1.301-.8C4.176 5.058 7.478 2.85 11.298 2.85c5.151 0 9.283 3.552 9.283 8.7 0 4.51-3.188 8.25-7.441 9.092l-.117.023c-.455.089-.797.477-.806.945-.007.342.143.625.38.786.258.174.59.228.913.14C18.965 20.826 23.4 15.96 23.4 10.07 23.4 4.568 17.965 0 11.298 0zM9.987 13.3c-1.505.149-2.65 1.09-2.56 2.104.09 1.016 1.386 1.716 2.893 1.567 1.503-.147 2.648-1.09 2.557-2.104-.091-1.015-1.387-1.714-2.89-1.567zm6.11-3.34c-.146-.405-.59-.63-.99-.503-.4.128-.607.548-.461.952.37 1.01-.033 2.137-.983 2.714-.426.26-.563.813-.307 1.232.256.42.812.551 1.237.29 1.624-1.001 2.306-2.89 1.504-4.685z" />
    </svg>
  );
}

export default function SpotShare({ url, title, labels, locale = "ja", className }: Props) {
  const [copied, setCopied] = useState(false);
  const buttons = LOCALE_BUTTONS[locale] ?? LOCALE_BUTTONS.ja;

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
  };

  const shareOnLine = () => {
    window.open(
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
  };

  const shareOnHatena = () => {
    window.open(
      `https://b.hatena.ne.jp/entry/s/${url.replace(/^https?:\/\//, "")}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
  };

  const shareOnWeibo = () => {
    window.open(
      `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      "_blank", "noopener,noreferrer,width=550,height=420"
    );
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
    <aside className={`share-section${className ? ` ${className}` : ""}`} aria-labelledby="share-heading">
      <div className="home-container">
      <p className="share-heading" id="share-heading">
        {labels.heading}
      </p>
      <div className="share-buttons">
        {buttons.includes("x") && (
          <button type="button" className="share-btn share-btn-x" onClick={shareOnX}>
            <XIcon />
            <span>{labels.x}</span>
          </button>
        )}
        {buttons.includes("line") && (
          <button type="button" className="share-btn share-btn-line" onClick={shareOnLine}>
            <LineIcon />
            <span>{labels.line}</span>
          </button>
        )}
        {buttons.includes("hatena") && (
          <button type="button" className="share-btn share-btn-hatena" onClick={shareOnHatena}>
            <HatenaIcon />
            <span>{labels.hatena}</span>
          </button>
        )}
        {buttons.includes("facebook") && (
          <button type="button" className="share-btn share-btn-facebook" onClick={shareOnFacebook}>
            <FacebookIcon />
            <span>{labels.facebook ?? "Facebook"}</span>
          </button>
        )}
        {buttons.includes("whatsapp") && (
          <button type="button" className="share-btn share-btn-whatsapp" onClick={shareOnWhatsApp}>
            <WhatsAppIcon />
            <span>{labels.whatsapp ?? "WhatsApp"}</span>
          </button>
        )}
        {buttons.includes("weibo") && (
          <button type="button" className="share-btn share-btn-weibo" onClick={shareOnWeibo}>
            <WeiboIcon />
            <span>{labels.weibo ?? "微博"}</span>
          </button>
        )}
        {buttons.includes("copy") && (
          <button
            type="button"
            className={`share-btn share-btn-copy ${copied ? "share-btn-copied" : ""}`}
            onClick={copyUrl}
          >
            {copied ? <Check size={18} /> : <Link2 size={18} />}
            <span>{copied ? labels.copied : labels.copy}</span>
          </button>
        )}
      </div>
      </div>
    </aside>
  );
}
