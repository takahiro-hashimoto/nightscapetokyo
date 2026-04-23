"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidateTagCaches } from "@/lib/cache-invalidation";

export async function createTag(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();
  const image_url = (formData.get("image_url") as string)?.trim() || null;

  if (!name || !slug) {
    return { error: "名前とスラッグは必須です" };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: "スラッグは半角英数字とハイフンのみ使用できます" };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("tags").insert({ name, slug, image_url });

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  revalidateTagCaches();
  revalidatePath("/admin/tags");
  return { success: true };
}

export async function updateTag(id: string, formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();
  const image_url = (formData.get("image_url") as string)?.trim() || null;

  if (!name || !slug) {
    return { error: "名前とスラッグは必須です" };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: "スラッグは半角英数字とハイフンのみ使用できます" };
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("tags")
    .update({ name, slug, image_url })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  revalidateTagCaches();
  revalidatePath("/admin/tags");
  return { success: true };
}

export async function deleteTag(id: string) {
  const admin = createAdminClient();
  const { error } = await admin.from("tags").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidateTagCaches();
  revalidatePath("/admin/tags");
  return { success: true };
}
