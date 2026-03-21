"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";

function parseArrayFields(
  formData: FormData,
  prefix: string
): Record<string, string>[] {
  const items = new Map<number, Record<string, string>>();
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith(`${prefix}.`)) continue;
    const parts = key.split(".");
    const index = parseInt(parts[1]);
    const field = parts[2];
    if (isNaN(index) || !field) continue;
    if (!items.has(index)) items.set(index, {});
    items.get(index)![field] = value as string;
  }
  return [...items.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v);
}

export async function createSpot(formData: FormData) {
  const admin = createAdminClient();

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!title || !slug) {
    return { error: "タイトルとスラッグは必須です" };
  }

  const spotData = {
    title,
    slug,
    type: (formData.get("type") as string) || "spot",
    category_id: (formData.get("category_id") as string) || null,
    published: formData.get("published") === "on",
    published_at: formData.get("published") === "on" ? new Date().toISOString() : null,
    name: (formData.get("name") as string)?.trim() || null,
    lead: (formData.get("lead") as string)?.trim() || null,
    report: (formData.get("report") as string)?.trim() || null,
    content: (formData.get("content") as string)?.trim() || null,
    address: (formData.get("address") as string)?.trim() || null,
    latitude: formData.get("latitude") ? parseFloat(formData.get("latitude") as string) : null,
    longitude: formData.get("longitude") ? parseFloat(formData.get("longitude") as string) : null,
    station: (formData.get("station") as string)?.trim() || null,
    parking: (formData.get("parking") as string)?.trim() || null,
    map: (formData.get("map") as string)?.trim() || null,
    height: (formData.get("height") as string)?.trim() || null,
    hours: (formData.get("hours") as string)?.trim() || "終日開放",
    holiday: (formData.get("holiday") as string)?.trim() || "なし",
    money: (formData.get("money") as string)?.trim() || "無料",
    official_url: (formData.get("official_url") as string)?.trim() || null,
    official_label: (formData.get("official_label") as string)?.trim() || null,
    sns_url: (formData.get("sns_url") as string)?.trim() || null,
    sns_label: (formData.get("sns_label") as string)?.trim() || null,
    relation_url: (formData.get("relation_url") as string)?.trim() || null,
    relation_label: (formData.get("relation_label") as string)?.trim() || null,
    movie: (formData.get("movie") as string)?.trim() || null,
    asoview: (formData.get("asoview") as string)?.trim() || null,
    asoview_02: (formData.get("asoview_02") as string)?.trim() || null,
    rating_beautiful: formData.get("rating_beautiful") ? parseFloat(formData.get("rating_beautiful") as string) : null,
    rating_access: formData.get("rating_access") ? parseFloat(formData.get("rating_access") as string) : null,
    rating_atmosphere: formData.get("rating_atmosphere") ? parseFloat(formData.get("rating_atmosphere") as string) : null,
    rating_cost: formData.get("rating_cost") ? parseFloat(formData.get("rating_cost") as string) : null,
  };

  // Auto-set featured_image from first image
  const allImages = parseArrayFields(formData, "images").filter((img) => img.url?.trim());
  (spotData as Record<string, unknown>).featured_image = allImages[0]?.url?.trim() || null;

  const { data: spot, error } = await admin
    .from("spots")
    .insert(spotData)
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  const spotId = spot.id;

  // Tags
  const tagIds = formData.getAll("tag_ids") as string[];
  if (tagIds.length > 0) {
    await admin.from("spot_tags").insert(
      tagIds.map((tag_id) => ({ spot_id: spotId, tag_id }))
    );
  }

  // Images
  const images = parseArrayFields(formData, "images");
  if (images.length > 0) {
    await admin.from("spot_images").insert(
      images
        .filter((img) => img.url?.trim())
        .map((img, i) => ({
          spot_id: spotId,
          url: img.url.trim(),
          alt: img.alt?.trim() || null,
          sort_order: parseInt(img.sort_order) || i,
        }))
    );
  }

  // FAQs
  const faqs = parseArrayFields(formData, "faqs");
  if (faqs.length > 0) {
    await admin.from("spot_faqs").insert(
      faqs
        .filter((faq) => faq.question?.trim() && faq.answer?.trim())
        .map((faq, i) => ({
          spot_id: spotId,
          question: faq.question.trim(),
          answer: faq.answer.trim(),
          sort_order: parseInt(faq.sort_order) || i,
        }))
    );
  }

  // Hotel info
  if (spotData.type === "hotel") {
    await admin.from("spot_hotels").insert({
      spot_id: spotId,
      checkin: (formData.get("checkin") as string)?.trim() || null,
      checkout: (formData.get("checkout") as string)?.trim() || null,
      amenity: (formData.get("amenity") as string)?.trim() || null,
      affiliate_1: (formData.get("affiliate_1") as string)?.trim() || null,
      affiliate_2: (formData.get("affiliate_2") as string)?.trim() || null,
      affiliate_3: (formData.get("affiliate_3") as string)?.trim() || null,
      affiliate_4: (formData.get("affiliate_4") as string)?.trim() || null,
    });
  }

  // Event info
  if (spotData.type === "event") {
    await admin.from("spot_events").insert({
      spot_id: spotId,
      start_date: (formData.get("start_date") as string)?.trim() || null,
      end_date: (formData.get("end_date") as string)?.trim() || null,
      place: (formData.get("place") as string)?.trim() || null,
      event_hour: (formData.get("event_hour") as string)?.trim() || null,
    });
  }

  revalidatePath("/admin/spots");
  redirect("/admin/spots");
}

export async function updateSpot(id: string, formData: FormData) {
  const admin = createAdminClient();

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!title || !slug) {
    return { error: "タイトルとスラッグは必須です" };
  }

  const published = formData.get("published") === "on";
  // Get current spot to check if it was previously published
  const { data: current } = await admin
    .from("spots")
    .select("published, published_at, category:categories(slug)")
    .eq("id", id)
    .single();

  const spotData = {
    title,
    slug,
    type: (formData.get("type") as string) || "spot",
    category_id: (formData.get("category_id") as string) || null,
    published,
    published_at: published && !current?.published_at
      ? new Date().toISOString()
      : current?.published_at ?? null,
    name: (formData.get("name") as string)?.trim() || null,
    lead: (formData.get("lead") as string)?.trim() || null,
    report: (formData.get("report") as string)?.trim() || null,
    content: (formData.get("content") as string)?.trim() || null,
    address: (formData.get("address") as string)?.trim() || null,
    latitude: formData.get("latitude") ? parseFloat(formData.get("latitude") as string) : null,
    longitude: formData.get("longitude") ? parseFloat(formData.get("longitude") as string) : null,
    station: (formData.get("station") as string)?.trim() || null,
    parking: (formData.get("parking") as string)?.trim() || null,
    map: (formData.get("map") as string)?.trim() || null,
    height: (formData.get("height") as string)?.trim() || null,
    hours: (formData.get("hours") as string)?.trim() || "終日開放",
    holiday: (formData.get("holiday") as string)?.trim() || "なし",
    money: (formData.get("money") as string)?.trim() || "無料",
    official_url: (formData.get("official_url") as string)?.trim() || null,
    official_label: (formData.get("official_label") as string)?.trim() || null,
    sns_url: (formData.get("sns_url") as string)?.trim() || null,
    sns_label: (formData.get("sns_label") as string)?.trim() || null,
    relation_url: (formData.get("relation_url") as string)?.trim() || null,
    relation_label: (formData.get("relation_label") as string)?.trim() || null,
    movie: (formData.get("movie") as string)?.trim() || null,
    asoview: (formData.get("asoview") as string)?.trim() || null,
    asoview_02: (formData.get("asoview_02") as string)?.trim() || null,
    rating_beautiful: formData.get("rating_beautiful") ? parseFloat(formData.get("rating_beautiful") as string) : null,
    rating_access: formData.get("rating_access") ? parseFloat(formData.get("rating_access") as string) : null,
    rating_atmosphere: formData.get("rating_atmosphere") ? parseFloat(formData.get("rating_atmosphere") as string) : null,
    rating_cost: formData.get("rating_cost") ? parseFloat(formData.get("rating_cost") as string) : null,
  };

  // Auto-set featured_image from first image
  const allImages = parseArrayFields(formData, "images").filter((img) => img.url?.trim());
  (spotData as Record<string, unknown>).featured_image = allImages[0]?.url?.trim() || null;

  const { error } = await admin.from("spots").update(spotData).eq("id", id);

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  // Sync tags: delete all → re-insert
  await admin.from("spot_tags").delete().eq("spot_id", id);
  const tagIds = formData.getAll("tag_ids") as string[];
  if (tagIds.length > 0) {
    await admin.from("spot_tags").insert(
      tagIds.map((tag_id) => ({ spot_id: id, tag_id }))
    );
  }

  // Sync images: delete all → re-insert
  await admin.from("spot_images").delete().eq("spot_id", id);
  const images = parseArrayFields(formData, "images");
  if (images.length > 0) {
    await admin.from("spot_images").insert(
      images
        .filter((img) => img.url?.trim())
        .map((img, i) => ({
          spot_id: id,
          url: img.url.trim(),
          alt: img.alt?.trim() || null,
          sort_order: parseInt(img.sort_order) || i,
        }))
    );
  }

  // Sync FAQs: delete all → re-insert
  await admin.from("spot_faqs").delete().eq("spot_id", id);
  const faqs = parseArrayFields(formData, "faqs");
  if (faqs.length > 0) {
    await admin.from("spot_faqs").insert(
      faqs
        .filter((faq) => faq.question?.trim() && faq.answer?.trim())
        .map((faq, i) => ({
          spot_id: id,
          question: faq.question.trim(),
          answer: faq.answer.trim(),
          sort_order: parseInt(faq.sort_order) || i,
        }))
    );
  }

  // Sync hotel info
  await admin.from("spot_hotels").delete().eq("spot_id", id);
  if (spotData.type === "hotel") {
    await admin.from("spot_hotels").insert({
      spot_id: id,
      checkin: (formData.get("checkin") as string)?.trim() || null,
      checkout: (formData.get("checkout") as string)?.trim() || null,
      amenity: (formData.get("amenity") as string)?.trim() || null,
      affiliate_1: (formData.get("affiliate_1") as string)?.trim() || null,
      affiliate_2: (formData.get("affiliate_2") as string)?.trim() || null,
      affiliate_3: (formData.get("affiliate_3") as string)?.trim() || null,
      affiliate_4: (formData.get("affiliate_4") as string)?.trim() || null,
    });
  }

  // Sync event info
  await admin.from("spot_events").delete().eq("spot_id", id);
  if (spotData.type === "event") {
    await admin.from("spot_events").insert({
      spot_id: id,
      start_date: (formData.get("start_date") as string)?.trim() || null,
      end_date: (formData.get("end_date") as string)?.trim() || null,
      place: (formData.get("place") as string)?.trim() || null,
      event_hour: (formData.get("event_hour") as string)?.trim() || null,
    });
  }

  // Revalidate both admin and public pages
  revalidatePath("/admin/spots");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const catSlug = (current as any)?.category?.slug;
  if (catSlug) {
    revalidatePath(`/${catSlug}/${slug}`);
  }

  return { success: true };
}

export async function deleteSpot(id: string) {
  const admin = createAdminClient();
  const { error } = await admin.from("spots").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin/spots");
  return { success: true };
}

export async function toggleSpotPublished(id: string, published: boolean) {
  const admin = createAdminClient();
  const updateData: Record<string, unknown> = { published };
  if (published) {
    // Only set published_at if not already set
    const { data: current } = await admin
      .from("spots")
      .select("published_at")
      .eq("id", id)
      .single();
    if (!current?.published_at) {
      updateData.published_at = new Date().toISOString();
    }
  }

  const { error } = await admin.from("spots").update(updateData).eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin/spots");
  return { success: true };
}
