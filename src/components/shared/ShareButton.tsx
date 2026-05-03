"use client";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Share2, Check, X } from "lucide-react";

interface ShareButtonProps {
  shareText: string;
  className?: string;
  iconOnly?: boolean; // trueのとき: クリック→モーダル表示
}

function buildSNSLinks(shareText: string) {
  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);
  return [
    {
      label: "𝕏",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      className: "share-sns__btn--x",
      aria: "X(Twitter)でシェア",
    },
    {
      label: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "share-sns__btn--fb",
      aria: "Facebookでシェア",
    },
    {
      label: "B!",
      href: `https://b.hatena.ne.jp/add?url=${encodedUrl}`,
      className: "share-sns__btn--hatena",
      aria: "はてなブックマークに追加",
    },
    {
      label: "LINE",
      href: `https://line.me/R/msg/text/?${encodedUrl}`,
      className: "share-sns__btn--line",
      aria: "LINEでシェア",
    },
  ];
}

export default function ShareButton({
  shareText,
  className = "",
  iconOnly = false,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCopy = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        if (iconOnly) setModalOpen(false);
      }, 1500);
    } catch {
      // unavailable
    }
  }, [shareText, iconOnly]);

  // iconOnly: アイコンボタン → モーダルを開く
  if (iconOnly) {
    return (
      <>
        <button
          className={`share-btn share-btn--icon ${className}`}
          onClick={() => setModalOpen(true)}
          aria-label="シェアメニューを開く"
        >
          <Share2 size={20} />
        </button>

        {modalOpen && createPortal(
          <div
            className="sp-overlay share-modal__overlay"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="share-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="share-modal__close"
                onClick={() => setModalOpen(false)}
                aria-label="閉じる"
              >
                <X size={18} />
              </button>

              <button
                className={`share-btn share-btn--full share-modal__copy ${copied ? "share-btn--copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copied ? "コピーしました！" : "この設定をシェア"}</span>
              </button>

              <ul className="share-sns__links">
                {buildSNSLinks(shareText).map(({ label, href, className: cls, aria }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={aria}
                      className={`share-sns__btn ${cls}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }

  // フルボタン（PCサイドバー）: クリック → クリップボードコピー
  return (
    <button
      className={`share-btn share-btn--full ${copied ? "share-btn--copied" : ""} ${className}`}
      onClick={handleCopy}
      aria-label={copied ? "コピーしました" : "この設定をシェア・コピー"}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      <span>{copied ? "コピーしました！" : "この設定をシェア"}</span>
    </button>
  );
}
