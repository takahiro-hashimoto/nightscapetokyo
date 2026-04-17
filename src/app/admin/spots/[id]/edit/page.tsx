import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import SpotForm from "@/components/admin/SpotForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditSpotPage({ params }: Props) {
  const { id } = await params;
  const admin = createAdminClient();

  const [spotRes, categoriesRes, tagsRes] = await Promise.all([
    admin
      .from("spots")
      .select(
        "*, category:categories(slug), images:spot_images(*), faqs:spot_faqs(*), hotel:spot_hotels(*), event:spot_events(*)"
      )
      .eq("id", id)
      .single(),
    admin.from("categories").select("id, name, slug").order("name"),
    admin.from("tags").select("id, name, slug").order("name"),
  ]);

  if (!spotRes.data) notFound();

  // Fetch tags and translations for this spot
  const [{ data: tagRelations }, { data: translationsData }] = await Promise.all([
    admin.from("spot_tags").select("tag_id").eq("spot_id", id),
    admin.from("spot_translations").select("locale, updated_at").eq("spot_id", id),
  ]);

  const spot = spotRes.data;

  // Normalize arrays and single relations
  const spotData = {
    ...spot,
    tags: tagRelations?.map((r: { tag_id: string }) => ({ id: r.tag_id })) ?? [],
    images: Array.isArray(spot.images)
      ? [...spot.images].sort(
          (a: { sort_order: number }, b: { sort_order: number }) =>
            a.sort_order - b.sort_order
        )
      : [],
    faqs: Array.isArray(spot.faqs)
      ? [...spot.faqs].sort(
          (a: { sort_order: number }, b: { sort_order: number }) =>
            a.sort_order - b.sort_order
        )
      : [],
    hotel: Array.isArray(spot.hotel) ? spot.hotel[0] ?? null : spot.hotel,
    event: Array.isArray(spot.event) ? spot.event[0] ?? null : spot.event,
  };

  const categorySlug = Array.isArray(spot.category)
    ? spot.category[0]?.slug
    : spot.category?.slug;
  const previewUrl = categorySlug ? `/${categorySlug}/${spot.slug}` : null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          スポットを編集: {spot.title}
        </h1>
        {previewUrl && (
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium !text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm transition-colors shrink-0"
          >
            <ExternalLink size={15} />
            記事をプレビュー
          </Link>
        )}
      </div>
      <SpotForm
        spot={spotData}
        categories={categoriesRes.data ?? []}
        tags={tagsRes.data ?? []}
        translations={translationsData ?? []}
      />
    </div>
  );
}
