import TagPageForm from "@/components/admin/TagPageForm";
import { createAdminClient } from "@/lib/supabase/server";

export default async function NewTagPage() {
  const admin = createAdminClient();

  const [{ data: tags }, { data: spots }] = await Promise.all([
    admin.from("tags").select("id, name, slug").order("name"),
    admin
      .from("spots")
      .select("id, slug, title, name")
      .eq("published", true)
      .order("title"),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        タグページ新規作成
      </h1>
      <TagPageForm
        tags={(tags ?? []) as { id: string; name: string; slug: string }[]}
        spots={
          (spots ?? []) as {
            id: string;
            slug: string;
            title: string;
            name: string | null;
          }[]
        }
      />
    </div>
  );
}
