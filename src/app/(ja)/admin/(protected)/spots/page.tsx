import { createAdminClient } from "@/lib/supabase/server";
import SpotListPage from "@/components/admin/SpotListPage";

export default async function SpotsPage() {
  const admin = createAdminClient();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [spotsRes, categoriesRes, translationsRes] = await Promise.all([
    admin
      .from("spots")
      .select("id, slug, title, type, published, featured_image, updated_at, rating_beautiful, rating_access, rating_atmosphere, rating_cost, category:categories(name)")
      .order("updated_at", { ascending: false }) as any,
    admin.from("categories").select("id, name").order("name"),
    admin.from("spot_translations").select("spot_id, locale") as any,
  ]);

  // spot_id → locale[] のマップ
  const localeMap = new Map<string, string[]>();
  for (const t of translationsRes.data ?? []) {
    const arr = localeMap.get(t.spot_id) ?? [];
    arr.push(t.locale);
    localeMap.set(t.spot_id, arr);
  }

  const spots = (spotsRes.data ?? []).map((s: any) => ({
    ...s,
    category: Array.isArray(s.category) ? s.category[0] ?? null : s.category,
    locales: localeMap.get(s.id) ?? [],
  }));
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">スポット管理</h1>
      <SpotListPage
        spots={spots}
        categories={categoriesRes.data ?? []}
      />
    </div>
  );
}
