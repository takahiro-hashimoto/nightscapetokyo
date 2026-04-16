"use client";

import { useRef, useState } from "react";
import { Loader2, ShoppingCart, X, Plus } from "lucide-react";

type ProductData = {
  title: string | null;
  image: string | null;
  price: string | null;
  url: string;
  fetchedAt: string;
};

type Props = {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
};

function formatFetchedAt(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}年${m}月${day}日 ${h}:${min}時点`;
}

function buildCardHtml(product: ProductData): string {
  const timestampLabel = formatFetchedAt(product.fetchedAt);
  const imageHtml = product.image
    ? `<img src="${product.image}" alt="${(product.title ?? "").replace(/"/g, "&quot;")}" loading="lazy" class="amazon-card-image">`
    : "";
  const priceHtml = product.price
    ? `<p class="amazon-card-price">${product.price} <span class="amazon-card-timestamp">(${timestampLabel} <a href="${product.url}" target="_blank" rel="nofollow noopener noreferrer">詳しくはこちら</a>)</span></p>`
    : "";

  return [
    `<div class="amazon-product-card">`,
    `  <div class="amazon-card-inner">`,
    `    <div class="amazon-card-info">`,
    `      <p class="amazon-card-title">${product.title ?? ""}</p>`,
    `      <p class="amazon-card-domain">amzn.to</p>`,
    priceHtml ? `      ${priceHtml}` : "",
    `    </div>`,
    product.image
      ? `    <div class="amazon-card-image-wrap">${imageHtml}</div>`
      : "",
    `  </div>`,
    `  <a href="${product.url}" target="_blank" rel="nofollow noopener noreferrer" class="amazon-card-button">Amazon.co.jpで購入する</a>`,
    `</div>`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function AmazonCardInserter({ textareaRef }: Props) {
  const [open, setOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductData | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFetch() {
    const url = inputUrl.trim();
    if (!url) return;
    setLoading(true);
    setError(null);
    setProduct(null);
    try {
      const res = await fetch(`/api/amazon-preview?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "取得に失敗しました");
      } else {
        setProduct(data as ProductData);
      }
    } catch {
      setError("ネットワークエラーが発生しました");
    } finally {
      setLoading(false);
    }
  }

  function handleInsert() {
    if (!product) return;
    const textarea = textareaRef.current;
    if (!textarea) return;

    const html = "\n" + buildCardHtml(product) + "\n";
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? start;

    textarea.value =
      textarea.value.slice(0, start) + html + textarea.value.slice(end);
    textarea.selectionStart = textarea.selectionEnd = start + html.length;
    textarea.focus();
    textarea.dispatchEvent(new Event("input", { bubbles: true }));

    // Reset
    setOpen(false);
    setInputUrl("");
    setProduct(null);
    setError(null);
  }

  function handleOpen() {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleClose() {
    setOpen(false);
    setInputUrl("");
    setProduct(null);
    setError(null);
  }

  return (
    <div className="mb-3">
      {!open ? (
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 px-3 py-1.5 rounded-md transition-colors"
        >
          <ShoppingCart size={13} />
          Amazonカードを挿入
        </button>
      ) : (
        <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <ShoppingCart size={13} />
              Amazonカード挿入
            </span>
            <button
              type="button"
              onClick={handleClose}
              className="text-amber-600 hover:text-amber-800 transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* URL 入力 */}
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleFetch()}
              placeholder="https://www.amazon.co.jp/dp/..."
              className="flex-1 border border-amber-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
            <button
              type="button"
              onClick={handleFetch}
              disabled={loading || !inputUrl.trim()}
              className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
            >
              {loading ? <Loader2 size={13} className="animate-spin" /> : null}
              取得
            </button>
          </div>

          {/* エラー */}
          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-md">
              {error}
            </p>
          )}

          {/* プレビュー */}
          {product && (
            <div className="space-y-3">
              <p className="text-xs text-amber-700 font-medium">プレビュー</p>
              <div className="amazon-product-card">
                <div className="amazon-card-inner">
                  <div className="amazon-card-info">
                    <p className="amazon-card-title">{product.title}</p>
                    <p className="amazon-card-domain">amzn.to</p>
                    {product.price && (
                      <p className="amazon-card-price">
                        {product.price}{" "}
                        <span className="amazon-card-timestamp">
                          ({formatFetchedAt(product.fetchedAt)}{" "}
                          <a
                            href={product.url}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                          >
                            詳しくはこちら
                          </a>
                          )
                        </span>
                      </p>
                    )}
                  </div>
                  {product.image && (
                    <div className="amazon-card-image-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.title ?? ""}
                        className="amazon-card-image"
                      />
                    </div>
                  )}
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="amazon-card-button"
                >
                  Amazon.co.jpで購入する
                </a>
              </div>

              <button
                type="button"
                onClick={handleInsert}
                className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Plus size={14} />
                カーソル位置に挿入
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
