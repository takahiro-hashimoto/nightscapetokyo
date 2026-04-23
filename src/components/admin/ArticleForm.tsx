"use client";

import { useState, useRef } from "react";
import { Save, Loader2, Trash2, ExternalLink, Link2, ShoppingCart, X } from "lucide-react";
import { createArticle, updateArticle, deleteArticle } from "@/app/(ja)/admin/articles/actions";
import type { Article } from "@/lib/types";

type Props = {
  article?: Article;
};

type ShortcodeType = "relatedLink" | "amazonLink";

const SHORTCODE_FIELDS: Record<ShortcodeType, { key: string; label: string; placeholder: string; required?: boolean }[]> = {
  relatedLink: [
    { key: "url",   label: "URL",       placeholder: "https://ekitan.com/...",  required: true },
    { key: "title", label: "タイトル",  placeholder: "飯給駅　小湊鉄道" },
    { key: "site",  label: "サイト名",  placeholder: "ekitan（省略時は自動取得）" },
  ],
  amazonLink: [
    { key: "url",   label: "Amazon URL / ASIN", placeholder: "https://www.amazon.co.jp/dp/XXXXXXXXXX/ または ASIN10桁", required: true },
    { key: "title", label: "タイトル（フォールバック）", placeholder: "API失敗時に表示する商品名" },
  ],
};

function buildShortcode(type: ShortcodeType, fields: Record<string, string>): string {
  const attrs = Object.entries(fields)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${k}="${v.trim()}"`)
    .join(" ");
  return `[${type} ${attrs}]`;
}

export default function ArticleForm({ article }: Props) {
  const isEdit = !!article;
  const [isPending, setIsPending] = useState(false);
  const [error, setError]   = useState<string | null>(null);
  const [saved, setSaved]   = useState(false);

  // ショートコードパネル
  const [activeShortcode, setActiveShortcode] = useState<ShortcodeType | null>(null);
  const [scFields, setScFields] = useState<Record<string, string>>({});

  const contentRef = useRef<HTMLTextAreaElement>(null);

  // ── フォーム送信 ──────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setError(null);
    setSaved(false);
    setIsPending(true);
    try {
      if (isEdit) {
        const result = await updateArticle(article.id, formData);
        if (result?.error) setError(result.error);
        else { setSaved(true); setTimeout(() => setSaved(false), 3000); }
      } else {
        const result = await createArticle(formData);
        if (result?.error) setError(result.error);
      }
    } finally {
      setIsPending(false);
    }
  }

  async function handleDelete() {
    if (!article || !confirm("この記事を削除しますか？")) return;
    setIsPending(true);
    await deleteArticle(article.id);
  }

  // ── ショートコード操作 ────────────────────────────────────
  function openPanel(type: ShortcodeType) {
    setActiveShortcode(type);
    setScFields({});
  }

  function closePanel() {
    setActiveShortcode(null);
    setScFields({});
  }

  function insertShortcode() {
    if (!activeShortcode) return;
    const ta = contentRef.current;
    if (!ta) return;

    const code = buildShortcode(activeShortcode, scFields);
    const start = ta.selectionStart;
    const end   = ta.selectionEnd;
    ta.value = ta.value.slice(0, start) + code + ta.value.slice(end);
    ta.selectionStart = ta.selectionEnd = start + code.length;
    ta.focus();
    closePanel();
  }

  // ── UI ───────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
          保存しました
        </div>
      )}

      {/* 公開設定 */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h2 className="font-semibold text-gray-700 mb-4">公開設定</h2>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={article?.published ?? false}
            className="w-4 h-4 accent-blue-600"
          />
          <span className="text-sm text-gray-700">公開する</span>
        </label>
      </div>

      {/* 基本情報 */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
        <h2 className="font-semibold text-gray-700">基本情報</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            タイトル <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            defaultValue={article?.title ?? ""}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="記事タイトル"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            スラッグ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="slug"
            defaultValue={article?.slug ?? ""}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
            placeholder="article-slug"
          />
          <p className="text-xs text-gray-400 mt-1">URL: /article/[スラッグ]/</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">ディスクリプション</label>
          <textarea
            name="description"
            defaultValue={article?.description ?? ""}
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
            placeholder="SEO用の説明文（〜120文字）"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">サムネイル URL</label>
          <input
            type="url"
            name="thumbnail"
            defaultValue={article?.thumbnail ?? ""}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://..."
          />
        </div>
      </div>

      {/* 本文 */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-700">本文（HTML）</h2>

          {/* ショートコードツールバー */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openPanel("relatedLink")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                activeShortcode === "relatedLink"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <Link2 size={13} />
              relatedLink
            </button>
            <button
              type="button"
              onClick={() => openPanel("amazonLink")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                activeShortcode === "amazonLink"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-300 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              <ShoppingCart size={13} />
              amazonLink
            </button>
          </div>
        </div>

        {/* ショートコード入力パネル */}
        {activeShortcode && (
          <div className={`mb-3 rounded-lg border p-4 ${
            activeShortcode === "amazonLink"
              ? "bg-orange-50 border-orange-200"
              : "bg-blue-50 border-blue-200"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-600 font-mono">
                [{activeShortcode} ...]
              </span>
              <button type="button" onClick={closePanel} className="text-gray-400 hover:text-gray-600">
                <X size={15} />
              </button>
            </div>

            <div className="space-y-2">
              {SHORTCODE_FIELDS[activeShortcode].map(({ key, label, placeholder, required }) => (
                <div key={key} className="flex items-center gap-2">
                  <label className="w-36 shrink-0 text-xs font-medium text-gray-600">
                    {label}{required && <span className="text-red-500 ml-0.5">*</span>}
                  </label>
                  <input
                    type="text"
                    value={scFields[key] ?? ""}
                    onChange={(e) => setScFields((prev) => ({ ...prev, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white font-mono"
                  />
                </div>
              ))}
            </div>

            {/* プレビュー */}
            {Object.values(scFields).some(Boolean) && (
              <p className="mt-3 text-xs text-gray-500 font-mono bg-white rounded px-2 py-1.5 border border-gray-200 break-all">
                {buildShortcode(activeShortcode, scFields)}
              </p>
            )}

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={insertShortcode}
                disabled={!scFields[SHORTCODE_FIELDS[activeShortcode][0].key]?.trim()}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                  activeShortcode === "amazonLink"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                カーソル位置に挿入
              </button>
              <button
                type="button"
                onClick={closePanel}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                キャンセル
              </button>
            </div>
          </div>
        )}

        <textarea
          ref={contentRef}
          name="content"
          defaultValue={article?.content ?? ""}
          rows={24}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y font-mono"
          placeholder="<p>本文をHTMLで入力...</p>"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {isPending ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            {isEdit ? "保存" : "作成"}
          </button>

          {isEdit && (
            <a
              href={`/article/${article.slug}/`}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline"
            >
              <ExternalLink size={14} />
              プレビュー
            </a>
          )}
        </div>

        {isEdit && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-700 text-sm transition-colors"
          >
            <Trash2 size={15} />
            削除
          </button>
        )}
      </div>
    </form>
  );
}
