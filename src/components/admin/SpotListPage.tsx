"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import {
  deleteSpot,
  toggleSpotPublished,
} from "@/app/admin/spots/actions";

type SpotItem = {
  id: string;
  slug: string;
  title: string;
  type: string;
  published: boolean;
  featured_image: string | null;
  category: { name: string } | null;
  updated_at: string;
  locales: string[];
};

type Category = {
  id: string;
  name: string;
};

type Props = {
  spots: SpotItem[];
  categories: Category[];
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
    <div className="flex gap-1 flex-wrap">
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

export default function SpotListPage({ spots: initial, categories }: Props) {
  const [spots, setSpots] = useState(initial);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [publishedFilter, setPublishedFilter] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const filtered = spots.filter((s) => {
    if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.slug.includes(search.toLowerCase()))
      return false;
    if (typeFilter && s.type !== typeFilter) return false;
    if (categoryFilter && s.category?.name !== categoryFilter) return false;
    if (publishedFilter === "published" && !s.published) return false;
    if (publishedFilter === "unpublished" && s.published) return false;
    return true;
  });

  function handleTogglePublished(id: string, currentPublished: boolean) {
    setError(null);
    startTransition(async () => {
      const result = await toggleSpotPublished(id, !currentPublished);
      if (result.error) {
        setError(result.error);
      } else {
        setSpots((prev) =>
          prev.map((s) => (s.id === id ? { ...s, published: !s.published } : s))
        );
      }
    });
  }

  function handleDelete(id: string, title: string) {
    if (!confirm(`「${title}」を削除しますか？関連する画像・FAQ等も全て削除されます。`))
      return;
    setError(null);
    startTransition(async () => {
      const result = await deleteSpot(id);
      if (result.error) {
        setError(result.error);
      } else {
        setSpots((prev) => prev.filter((s) => s.id !== id));
      }
    });
  }

  const typeLabel = (t: string) => {
    switch (t) {
      case "hotel": return "ホテル";
      case "event": return "イベント";
      default: return "スポット";
    }
  };

  return (
    <div>
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="タイトル・スラッグで検索"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-56"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">全タイプ</option>
            <option value="spot">スポット</option>
            <option value="hotel">ホテル</option>
            <option value="event">イベント</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">全カテゴリ</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            value={publishedFilter}
            onChange={(e) => setPublishedFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">全て</option>
            <option value="published">公開</option>
            <option value="unpublished">非公開</option>
          </select>
        </div>
        <Link
          href="/admin/spots/new"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          <Plus size={16} />
          新規作成
        </Link>
      </div>

      <p className="text-sm text-gray-500 mb-3">
        {filtered.length}件表示 / 全{spots.length}件
      </p>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-600 w-12" />
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                タイトル
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                カテゴリ
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                タイプ
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                公開
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                翻訳
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                更新日
              </th>
              <th className="px-4 py-3 w-24" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((spot) => (
              <tr
                key={spot.id}
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  {spot.featured_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={spot.featured_image}
                      alt=""
                      className="w-10 h-7 object-cover rounded"
                    />
                  ) : (
                    <div className="w-10 h-7 bg-gray-200 rounded" />
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => router.push(`/admin/spots/${spot.id}/edit`)}
                    className="text-blue-600 hover:underline text-left"
                  >
                    {spot.title}
                  </button>
                  <p className="text-xs text-gray-400">{spot.slug}</p>
                </td>
                <td className="px-4 py-2 text-gray-500">
                  {spot.category?.name ?? "-"}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      spot.type === "hotel"
                        ? "bg-purple-100 text-purple-700"
                        : spot.type === "event"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {typeLabel(spot.type)}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleTogglePublished(spot.id, spot.published)}
                    disabled={isPending}
                    className={`p-1 rounded ${
                      spot.published
                        ? "text-green-600 hover:text-green-800"
                        : "text-gray-300 hover:text-gray-500"
                    }`}
                    title={spot.published ? "公開中（クリックで非公開に）" : "非公開（クリックで公開に）"}
                  >
                    {spot.published ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </td>
                <td className="px-4 py-2">
                  <LocaleBadges locales={spot.locales} />
                </td>
                <td className="px-4 py-2 text-gray-400 text-xs">
                  {new Date(spot.updated_at).toLocaleDateString("ja-JP")}
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2 justify-end">
                    <Link
                      href={`/admin/spots/${spot.id}/edit`}
                      className="text-gray-400 hover:text-blue-600 p-1"
                    >
                      <Pencil size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(spot.id, spot.title)}
                      disabled={isPending}
                      className="text-gray-400 hover:text-red-600 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                  スポットが見つかりません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
