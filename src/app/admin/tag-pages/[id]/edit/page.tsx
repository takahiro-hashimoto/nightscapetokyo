import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import TagPageForm from "@/components/admin/TagPageForm";
import { getTagPageById, getTagPageTranslationStatus } from "@/lib/supabase/queries";
import { createAdminClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditTagPage({ params }: Props) {
  const { id } = await params;
  const admin = createAdminClient();

  const [tagPage, { data: tags }, { data: spots }, translationStatus] =
    await Promise.all([
      getTagPageById(id),
      admin.from("tags").select("id, name, slug").order("name"),
      admin
        .from("spots")
        .select("id, slug, title, name")
        .eq("published", true)
        .order("title"),
      getTagPageTranslationStatus(id),
    ]);

  if (!tagPage) notFound();

  // Flatten to form data shape
  const formData = {
    id: tagPage.id,
    tag_id: tagPage.tag_id,
    title: tagPage.title,
    breadcrumb: tagPage.breadcrumb,
    hero_image: tagPage.hero_image,
    updated_at_label: tagPage.updated_at_label,
    pr_notice: tagPage.pr_notice,
    lead: tagPage.lead,
    map_heading: tagPage.map_heading,
    map_intro: tagPage.map_intro,
    map_iframe_html: tagPage.map_iframe_html,
    faq_heading: tagPage.faq_heading,
    published: tagPage.published,
    pr_banner: tagPage.pr_banner
      ? {
          heading: tagPage.pr_banner.heading,
          image: tagPage.pr_banner.image,
          body: tagPage.pr_banner.body,
          links: tagPage.pr_banner.links.map((l) => ({
            label: l.label,
            href: l.href,
          })),
        }
      : null,
    sections: tagPage.sections.map((s) => ({
      key: s.key,
      heading: s.heading,
      intro: s.intro,
      spots: s.spots.map((sp) => ({
        spot_id: sp.spot_id,
        description: sp.description,
      })),
    })),
    faqs: tagPage.faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  };

  const tagSlug = tagPage.tag?.slug;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          タグページ編集
        </h1>
        {tagSlug && (
          <Link
            href={`/tag/${tagSlug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm transition-colors"
          >
            <ExternalLink size={15} />
            公開ページを見る
          </Link>
        )}
      </div>
      <TagPageForm
        tagPage={formData}
        tags={(tags ?? []) as { id: string; name: string; slug: string }[]}
        spots={
          (spots ?? []) as {
            id: string;
            slug: string;
            title: string;
            name: string | null;
          }[]
        }
        translations={translationStatus}
      />
    </div>
  );
}
