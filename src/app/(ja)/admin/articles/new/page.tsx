import ArticleForm from "@/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">記事を新規作成</h1>
      <ArticleForm />
    </div>
  );
}
