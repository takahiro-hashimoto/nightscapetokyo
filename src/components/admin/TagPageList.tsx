"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Pencil, Trash2, Loader2, ExternalLink } from "lucide-react";
import { deleteTagPage } from "@/app/admin/tag-pages/actions";

type TagPageItem = {
  id: string;
  title: string;
  published: boolean;
  tag: { name: string; slug: string };
  updated_at: string;
  locales: string[];
};

type Props = {
  pages: TagPageItem[];
};

const ALL_LOCALES = ["en", "ko", "zh-Hant", "zh-Hans"] as const;
const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  ko: "KO",
  "zh-Hant": "繁",
  "zh-Hans": "簡",
};

function LocaleBadges({ locales }: { locales: string[] }) {
  if (locales.length === 0) {
    return <span className="text-xs text-gray-300">—</span>;
  }
  return (
    <div className="flex gap-1">
      {ALL_LOCALES.map((loc) => (
        <span
          key={loc}
          className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
            locales.includes(loc)
              ? "bg-emerald-100 text-emerald-700"
              : "bg-gray-100 text-gray-300"
          }`}
        >
          {LOCALE_LABELS[loc]}
        </span>
      ))}
    </div>
  );
}

export default function TagPageList({ pages }: Props) {
  const [items, setItems] = useState(pages);
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`「${title}」を削除しますか？`)) return;
    setDeletingId(id);
    startTransition(async () => {
      const result = await deleteTagPage(id);
      if (result.error) {
        alert(result.error);
      } else {
        setItems((prev) => prev.filter((p) => p.id !== id));
      }
      setDeletingId(null);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left px-5 py-3 font-medium text-gray-600">タイトル</th>
            <th className="text-left px-5 py-3 font-medium text-gray-600 w-32">タグ</th>
            <th className="text-center px-5 py-3 font-medium text-gray-600 w-20">公開</th>
            <th className="text-left px-5 py-3 font-medium text-gray-600 w-36">翻訳</th>
            <th className="text-left px-5 py-3 font-medium text-gray-600 w-36">更新日</th>
            <th className="text-center px-5 py-3 font-medium text-gray-600 w-24">操作</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={6} className="px-5 py-8 text-center text-gray-400">
                タグページがありません
              </td>
            </tr>
          )}
          {items.map((page) => (
            <tr key={page.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-5 py-3">
                <Link
                  href={`/admin/tag-pages/${page.id}/edit`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {page.title}
                </Link>
              </td>
              <td className="px-5 py-3 text-gray-500">{page.tag?.name}</td>
              <td className="px-5 py-3 text-center">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    page.published ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              </td>
              <td className="px-5 py-3">
                <LocaleBadges locales={page.locales} />
              </td>
              <td className="px-5 py-3 text-gray-500">
                {new Date(page.updated_at).toLocaleDateString("ja-JP")}
              </td>
              <td className="px-5 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    href={`/tag/${page.tag?.slug}`}
                    target="_blank"
                    className="text-gray-400 hover:text-green-600"
                    title="公開ページを見る"
                  >
                    <ExternalLink size={16} />
                  </Link>
                  <Link
                    href={`/admin/tag-pages/${page.id}/edit`}
                    className="text-gray-400 hover:text-blue-600"
                    title="編集"
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(page.id, page.title)}
                    disabled={isPending && deletingId === page.id}
                    className="text-gray-400 hover:text-red-600 disabled:opacity-50"
                    title="削除"
                  >
                    {isPending && deletingId === page.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
