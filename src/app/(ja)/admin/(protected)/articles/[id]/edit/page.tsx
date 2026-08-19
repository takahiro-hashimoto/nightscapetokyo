import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import ArticleForm from "@/components/admin/ArticleForm";
import type { Article } from "@/lib/types";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params;
  const admin = createAdminClient();

  const { data } = await admin
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        記事を編集: {data.title}
      </h1>
      <ArticleForm article={data as Article} />
    </div>
  );
}
