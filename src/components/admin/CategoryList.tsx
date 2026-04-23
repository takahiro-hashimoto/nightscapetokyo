"use client";

import { useState, useTransition } from "react";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/app/(ja)/admin/categories/actions";

type Category = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

type Props = {
  categories: Category[];
};

export default function CategoryList({ categories: initial }: Props) {
  const [categories, setCategories] = useState(initial);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleCreate(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await createCategory(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setIsAdding(false);
        // Reload to get fresh data
        window.location.reload();
      }
    });
  }

  function handleUpdate(id: string, formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await updateCategory(id, formData);
      if (result.error) {
        setError(result.error);
      } else {
        setEditingId(null);
        window.location.reload();
      }
    });
  }

  function handleDelete(id: string, name: string) {
    if (!confirm(`「${name}」を削除しますか？`)) return;
    setError(null);
    startTransition(async () => {
      const result = await deleteCategory(id);
      if (result.error) {
        setError(result.error);
      } else {
        setCategories((prev) => prev.filter((c) => c.id !== id));
      }
    });
  }

  return (
    <div>
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-md mb-4">
          {error}
        </div>
      )}
      <div className="mb-4">
        <button
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          <Plus size={16} />
          カテゴリを追加
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                名前
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                スラッグ
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                作成日
              </th>
              <th className="px-4 py-3 w-24" />
            </tr>
          </thead>
          <tbody>
            {isAdding && (
              <tr className="border-b border-gray-200 bg-blue-50">
                <td colSpan={4} className="px-4 py-3">
                  <form action={handleCreate} className="flex items-center gap-3">
                    <input
                      name="name"
                      placeholder="名前"
                      required
                      className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                    />
                    <input
                      name="slug"
                      placeholder="スラッグ"
                      required
                      className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="text-green-600 hover:text-green-800 p-1"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAdding(false)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <X size={18} />
                    </button>
                  </form>
                </td>
              </tr>
            )}
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b border-gray-200 last:border-0">
                {editingId === cat.id ? (
                  <td colSpan={4} className="px-4 py-3">
                    <form
                      action={(fd) => handleUpdate(cat.id, fd)}
                      className="flex items-center gap-3"
                    >
                      <input
                        name="name"
                        defaultValue={cat.name}
                        required
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                      />
                      <input
                        name="slug"
                        defaultValue={cat.slug}
                        required
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                      />
                      <button
                        type="submit"
                        disabled={isPending}
                        className="text-green-600 hover:text-green-800 p-1"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X size={18} />
                      </button>
                    </form>
                  </td>
                ) : (
                  <>
                    <td className="px-4 py-3">{cat.name}</td>
                    <td className="px-4 py-3 text-gray-500">{cat.slug}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(cat.created_at).toLocaleDateString("ja-JP")}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => {
                            setEditingId(cat.id);
                            setIsAdding(false);
                          }}
                          className="text-gray-400 hover:text-blue-600 p-1"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id, cat.name)}
                          disabled={isPending}
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {categories.length === 0 && !isAdding && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                  カテゴリがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
