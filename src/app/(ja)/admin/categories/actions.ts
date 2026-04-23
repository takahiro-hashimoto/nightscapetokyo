"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidateCategoryCaches } from "@/lib/cache-invalidation";

export async function createCategory(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!name || !slug) {
    return { error: "名前とスラッグは必須です" };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: "スラッグは半角英数字とハイフンのみ使用できます" };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("categories").insert({ name, slug });

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  revalidateCategoryCaches();
  revalidatePath("/admin/categories");
  return { success: true };
}

export async function updateCategory(id: string, formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const slug = (formData.get("slug") as string)?.trim();

  if (!name || !slug) {
    return { error: "名前とスラッグは必須です" };
  }
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { error: "スラッグは半角英数字とハイフンのみ使用できます" };
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from("categories")
    .update({ name, slug })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") return { error: "このスラッグは既に使われています" };
    return { error: error.message };
  }

  revalidateCategoryCaches();
  revalidatePath("/admin/categories");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const admin = createAdminClient();

  // Check for spots referencing this category
  const { count } = await admin
    .from("spots")
    .select("id", { count: "exact", head: true })
    .eq("category_id", id);

  if (count && count > 0) {
    return { error: `${count}件のスポットがこのカテゴリに紐づいています。先にスポットのカテゴリを変更してください` };
  }

  const { error } = await admin.from("categories").delete().eq("id", id);

  if (error) {
    return { error: error.message };
  }

  revalidateCategoryCaches();
  revalidatePath("/admin/categories");
  return { success: true };
}
