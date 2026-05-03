"use client";

import { useState, useCallback } from "react";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  shareText: string;
  title: string;
  className?: string;
  iconOnly?: boolean;
}

/** タッチデバイスかどうかを判定（PCでWeb Share APIを使わないため） */
function isTouchDevice(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export default function ShareButton({
  shareText,
  title,
  className = "",
  iconOnly = false,
}: ShareButtonProps) {
  const [state, setState] = useState<"idle" | "copied">("idle");

  const handleShare = useCallback(async () => {
    const url = window.location.href;

    // SPのみWeb Share APIを使用。PCは常にクリップボードコピー
    if (navigator.share && isTouchDevice()) {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch {
        // キャンセルまたは失敗 → クリップボードにフォールバック
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      // clipboard API unavailable
    }
  }, [shareText, title]);

  const copied = state === "copied";

  return (
    <button
      className={`share-btn ${iconOnly ? "share-btn--icon" : ""} ${copied ? "share-btn--copied" : ""} ${className}`}
      onClick={handleShare}
      aria-label={copied ? "コピーしました" : "この設定をシェア・コピー"}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {!iconOnly && (
        <span>{copied ? "コピーしました！" : "この設定をシェア"}</span>
      )}
    </button>
  );
}
