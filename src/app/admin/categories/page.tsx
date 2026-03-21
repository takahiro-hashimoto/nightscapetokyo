import { createAdminClient } from "@/lib/supabase/server";
import CategoryList from "@/components/admin/CategoryList";

export default async function CategoriesPage() {
  const admin = createAdminClient();
  const { data } = await admin
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">カテゴリ管理</h1>
      <CategoryList categories={data ?? []} />
    </div>
  );
}
