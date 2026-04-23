import { createAdminClient } from "@/lib/supabase/server";
import TagList from "@/components/admin/TagList";

export default async function TagsPage() {
  const admin = createAdminClient();
  const { data } = await admin
    .from("tags")
    .select("*")
    .order("name");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">タグ管理</h1>
      <TagList tags={data ?? []} />
    </div>
  );
}
