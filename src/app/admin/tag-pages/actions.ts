"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { parseArrayFields } from "@/lib/admin/parse-form";

export async function createTagPage(formData: FormData) {
  const admin = createAdminClient();

  const tagId = (formData.get("tag_id") as string)?.trim();
  const title = (formData.get("title") as string)?.trim();
  const lead = (formData.get("lead") as string)?.trim();

  if (!tagId || !title || !lead) {
    return { error: "タグ、タイトル、リード文は必須です" };
  }

  // 1. tag_pages
  const { data: page, error } = await admin
    .from("tag_pages")
    .insert({
      tag_id: tagId,
      title,
      breadcrumb: (formData.get("breadcrumb") as string)?.trim() || title,
      hero_image: (formData.get("hero_image") as string)?.trim() || null,
      updated_at_label: (formData.get("updated_at_label") as string)?.trim() || null,
      pr_notice: (formData.get("pr_notice") as string)?.trim() || null,
      lead,
      map_heading: (formData.get("map_heading") as string)?.trim() || null,
      map_intro: (formData.get("map_intro") as string)?.trim() || null,
      map_iframe_html: (formData.get("map_iframe_html") as string)?.trim() || null,
      faq_heading: (formData.get("faq_heading") as string)?.trim() || null,
      published: formData.get("published") === "on",
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") return { error: "このタグにはすでにページが存在します" };
    return { error: error.message };
  }

  const pageId = page.id;

  // 2. PR Banner
  await savePrBanner(admin, pageId, formData);

  // 3. Sections + spots
  await saveSections(admin, pageId, formData);

  // 4. FAQs
  await saveFaqs(admin, pageId, formData);

  revalidatePath("/admin/tag-pages");
  redirect("/admin/tag-pages");
}

export async function updateTagPage(id: string, formData: FormData) {
  const admin = createAdminClient();

  const tagId = (formData.get("tag_id") as string)?.trim();
  const title = (formData.get("title") as string)?.trim();
  const lead = (formData.get("lead") as string)?.trim();

  if (!tagId || !title || !lead) {
    return { error: "タグ、タイトル、リード文は必須です" };
  }

  const { error } = await admin
    .from("tag_pages")
    .update({
      tag_id: tagId,
      title,
      breadcrumb: (formData.get("breadcrumb") as string)?.trim() || title,
      hero_image: (formData.get("hero_image") as string)?.trim() || null,
      updated_at_label: (formData.get("updated_at_label") as string)?.trim() || null,
      pr_notice: (formData.get("pr_notice") as string)?.trim() || null,
      lead,
      map_heading: (formData.get("map_heading") as string)?.trim() || null,
      map_intro: (formData.get("map_intro") as string)?.trim() || null,
      map_iframe_html: (formData.get("map_iframe_html") as string)?.trim() || null,
      faq_heading: (formData.get("faq_heading") as string)?.trim() || null,
      published: formData.get("published") === "on",
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") return { error: "このタグにはすでにページが存在します" };
    return { error: error.message };
  }

  // Delete → re-insert children
  await admin.from("tag_page_pr_banners").delete().eq("tag_page_id", id);
  await savePrBanner(admin, id, formData);

  // Sections: delete old (cascade removes section_spots)
  await admin.from("tag_page_sections").delete().eq("tag_page_id", id);
  await saveSections(admin, id, formData);

  await admin.from("tag_page_faqs").delete().eq("tag_page_id", id);
  await saveFaqs(admin, id, formData);

  // Revalidate
  revalidatePath("/admin/tag-pages");
  revalidatePath(`/admin/tag-pages/${id}/edit`);

  // Revalidate public tag page
  const { data: tagData } = await admin
    .from("tag_pages")
    .select("tag:tags(slug)")
    .eq("id", id)
    .single();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tagSlug = (tagData as any)?.tag?.slug;
  if (tagSlug) {
    revalidatePath(`/tag/${tagSlug}`);
  }

  return { success: true };
}

export async function deleteTagPage(id: string) {
  const admin = createAdminClient();
  const { error } = await admin.from("tag_pages").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin/tag-pages");
  return { success: true };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function savePrBanner(admin: any, pageId: string, formData: FormData) {
  const prEnabled = formData.get("pr_banner_enabled") === "on";
  if (!prEnabled) return;

  const heading = (formData.get("pr_banner_heading") as string)?.trim();
  if (!heading) return;

  const { data: banner } = await admin
    .from("tag_page_pr_banners")
    .insert({
      tag_page_id: pageId,
      heading,
      image: (formData.get("pr_banner_image") as string)?.trim() || null,
      body: parseArrayFields(formData, "pr_banner_body")
        .map((b) => b.text?.trim())
        .filter(Boolean),
    })
    .select("id")
    .single();

  if (!banner) return;

  const links = parseArrayFields(formData, "pr_banner_links");
  if (links.length > 0) {
    await admin.from("tag_page_pr_banner_links").insert(
      links
        .filter((l) => l.label?.trim() && l.href?.trim())
        .map((l, i) => ({
          pr_banner_id: banner.id,
          label: l.label.trim(),
          href: l.href.trim(),
          sort_order: i,
        }))
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function saveSections(admin: any, pageId: string, formData: FormData) {
  const sections = parseArrayFields(formData, "sections");

  for (let si = 0; si < sections.length; si++) {
    const sec = sections[si];
    if (!sec.key?.trim() || !sec.heading?.trim()) continue;

    const { data: section } = await admin
      .from("tag_page_sections")
      .insert({
        tag_page_id: pageId,
        key: sec.key.trim(),
        heading: sec.heading.trim(),
        intro: sec.intro?.trim() || null,
        sort_order: si,
      })
      .select("id")
      .single();

    if (!section) continue;

    // Section spots
    const spots = parseArrayFields(formData, `sections.${si}.spots`);
    if (spots.length > 0) {
      await admin.from("tag_page_section_spots").insert(
        spots
          .filter((s) => s.spot_id?.trim())
          .map((s, i) => ({
            section_id: section.id,
            spot_id: s.spot_id.trim(),
            description: s.description?.trim() || null,
            sort_order: i,
          }))
      );
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function saveFaqs(admin: any, pageId: string, formData: FormData) {
  const faqs = parseArrayFields(formData, "faqs");
  if (faqs.length > 0) {
    await admin.from("tag_page_faqs").insert(
      faqs
        .filter((faq) => faq.question?.trim() && faq.answer?.trim())
        .map((faq, i) => ({
          tag_page_id: pageId,
          question: faq.question.trim(),
          answer: faq.answer.trim(),
          sort_order: i,
        }))
    );
  }
}
