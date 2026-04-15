"use client";

import { useState } from "react";
import { Save, Loader2, Trash2, ExternalLink } from "lucide-react";
import { createArticle, updateArticle, deleteArticle } from "@/app/admin/articles/actions";
import type { Article } from "@/lib/types";

type Props = {
  article?: Article;
};

export default function ArticleForm({ article }: Props) {
  const isEdit = !!article;
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

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
        <h2 className="font-semibold text-gray-700 mb-4">本文（HTML）</h2>
        <textarea
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
