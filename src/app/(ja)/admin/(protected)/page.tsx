import { createAdminClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const admin = createAdminClient();

  const [spotsRes, categoriesRes, tagsRes] = await Promise.all([
    admin.from("spots").select("id, published"),
    admin.from("categories").select("id"),
    admin.from("tags").select("id"),
  ]);

  const spots = spotsRes.data ?? [];
  const publishedCount = spots.filter((s) => s.published).length;
  const unpublishedCount = spots.length - publishedCount;
  const categoryCount = categoriesRes.data?.length ?? 0;
  const tagCount = tagsRes.data?.length ?? 0;

  const cards = [
    { label: "スポット（公開）", value: publishedCount, color: "bg-green-500" },
    {
      label: "スポット（非公開）",
      value: unpublishedCount,
      color: "bg-yellow-500",
    },
    { label: "カテゴリ", value: categoryCount, color: "bg-blue-500" },
    { label: "タグ", value: tagCount, color: "bg-purple-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">ダッシュボード</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div
              className={`w-2 h-2 rounded-full ${card.color} mb-2 inline-block`}
            />
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
