import { createAdminClient } from "@/lib/supabase/server";
import SpotForm from "@/components/admin/SpotForm";

export default async function NewSpotPage() {
  const admin = createAdminClient();

  const [categoriesRes, tagsRes] = await Promise.all([
    admin.from("categories").select("id, name, slug").order("name"),
    admin.from("tags").select("id, name, slug").order("name"),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        スポットを新規作成
      </h1>
      <SpotForm
        categories={categoriesRes.data ?? []}
        tags={tagsRes.data ?? []}
      />
    </div>
  );
}
