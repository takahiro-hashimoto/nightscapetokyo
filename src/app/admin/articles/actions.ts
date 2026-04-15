"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";

export async function createArticle(formData: FormData) {
  const admin = createAdminClient();

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!title || !slug) {
    return { error: "タイトルとスラッグは必須です" };
  }

  const published = formData.get("published") === "on";

  const { data, error } = await admin.from("articles").insert({
    title,
    slug,
    description: (formData.get("description") as string)?.trim() || null,
    thumbnail: (formData.get("thumbnail") as string)?.trim() || null,
    content: (formData.get("content") as string)?.trim() || null,
    published,
    published_at: published ? new Date().toISOString() : null,
  }).select("id").single();

  if (error) return { error: error.message };

  revalidatePath("/article");
  revalidatePath("/admin/articles");
  redirect(`/admin/articles/${data.id}/edit`);
}

export async function updateArticle(id: string, formData: FormData) {
  const admin = createAdminClient();

  const title = (formData.get("title") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!title || !slug) {
    return { error: "タイトルとスラッグは必須です" };
  }

  const published = formData.get("published") === "on";

  // 既存の published_at を取得（初回公開時のみセット）
  const { data: existing } = await admin
    .from("articles")
    .select("published_at, published")
    .eq("id", id)
    .single();

  const published_at =
    published && !existing?.published_at
      ? new Date().toISOString()
      : existing?.published_at ?? null;

  const { error } = await admin.from("articles").update({
    title,
    slug,
    description: (formData.get("description") as string)?.trim() || null,
    thumbnail: (formData.get("thumbnail") as string)?.trim() || null,
    content: (formData.get("content") as string)?.trim() || null,
    published,
    published_at,
  }).eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/article");
  revalidatePath(`/article/${slug}`);
  revalidatePath("/admin/articles");
  return { success: true };
}

export async function deleteArticle(id: string) {
  const admin = createAdminClient();
  const { error } = await admin.from("articles").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/article");
  revalidatePath("/admin/articles");
  redirect("/admin/articles");
}
