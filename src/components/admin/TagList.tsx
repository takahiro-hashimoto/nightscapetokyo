"use client";

import { useState, useTransition } from "react";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import { createTag, updateTag, deleteTag } from "@/app/admin/tags/actions";

type TagItem = {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
  created_at: string;
};

type Props = {
  tags: TagItem[];
};

export default function TagList({ tags: initial }: Props) {
  const [tags, setTags] = useState(initial);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleCreate(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await createTag(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setIsAdding(false);
        window.location.reload();
      }
    });
  }

  function handleUpdate(id: string, formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await updateTag(id, formData);
      if (result.error) {
        setError(result.error);
      } else {
        setEditingId(null);
        window.location.reload();
      }
    });
  }

  function handleDelete(id: string, name: string) {
    if (!confirm(`「${name}」を削除しますか？関連するスポットとの紐付けも削除されます。`))
      return;
    setError(null);
    startTransition(async () => {
      const result = await deleteTag(id);
      if (result.error) {
        setError(result.error);
      } else {
        setTags((prev) => prev.filter((t) => t.id !== id));
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
          タグを追加
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
                画像
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
                <td colSpan={5} className="px-4 py-3">
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
                    <input
                      name="image_url"
                      placeholder="画像URL（任意）"
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
            {tags.map((tag) => (
              <tr key={tag.id} className="border-b border-gray-200 last:border-0">
                {editingId === tag.id ? (
                  <td colSpan={5} className="px-4 py-3">
                    <form
                      action={(fd) => handleUpdate(tag.id, fd)}
                      className="flex items-center gap-3"
                    >
                      <input
                        name="name"
                        defaultValue={tag.name}
                        required
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                      />
                      <input
                        name="slug"
                        defaultValue={tag.slug}
                        required
                        className="border border-gray-300 rounded px-2 py-1.5 text-sm flex-1"
                      />
                      <input
                        name="image_url"
                        defaultValue={tag.image_url ?? ""}
                        placeholder="画像URL（任意）"
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
                    <td className="px-4 py-3">{tag.name}</td>
                    <td className="px-4 py-3 text-gray-500">{tag.slug}</td>
                    <td className="px-4 py-3">
                      {tag.image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={tag.image_url}
                          alt=""
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        <span className="text-gray-300 text-xs">なし</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(tag.created_at).toLocaleDateString("ja-JP")}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => {
                            setEditingId(tag.id);
                            setIsAdding(false);
                          }}
                          className="text-gray-400 hover:text-blue-600 p-1"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(tag.id, tag.name)}
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
            {tags.length === 0 && !isAdding && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  タグがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
