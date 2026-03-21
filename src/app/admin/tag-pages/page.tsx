import Link from "next/link";
import { Plus } from "lucide-react";
import { getTagPages } from "@/lib/supabase/queries";
import { createAdminClient } from "@/lib/supabase/server";
import TagPageList from "@/components/admin/TagPageList";

export default async function TagPagesPage() {
  const [pages, translationsRes] = await Promise.all([
    getTagPages(),
    createAdminClient()
      .from("tag_page_translations")
      .select("tag_page_id, locale"),
  ]);

  // tag_page_id → locale[] のマップ
  const localeMap = new Map<string, string[]>();
  for (const t of translationsRes.data ?? []) {
    const arr = localeMap.get(t.tag_page_id) ?? [];
    arr.push(t.locale);
    localeMap.set(t.tag_page_id, arr);
  }

  const pagesWithLocales = pages.map((p) => ({
    ...p,
    locales: localeMap.get(p.id) ?? [],
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">タグページ管理</h1>
        <Link
          href="/admin/tag-pages/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
        >
          <Plus size={16} />
          新規作成
        </Link>
      </div>
      <TagPageList pages={pagesWithLocales} />
    </div>
  );
}
