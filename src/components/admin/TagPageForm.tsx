"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  Save,
  Languages,
  Loader2,
  Check,
  GripVertical,
} from "lucide-react";
import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { createTagPage, updateTagPage } from "@/app/admin/tag-pages/actions";
import { LOCALE_DISPLAY_NAMES } from "@/lib/types";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type TagOption = { id: string; name: string; slug: string };
type SpotOption = { id: string; slug: string; title: string; name: string | null };

type PrBannerLink = { label: string; href: string };
type PrBannerData = {
  enabled: boolean;
  heading: string;
  image: string;
  body: string[];
  links: PrBannerLink[];
};

type SectionSpot = {
  spot_id: string;
  description: string;
};

type SectionData = {
  key: string;
  heading: string;
  intro: string;
  spots: SectionSpot[];
};

type FaqData = { question: string; answer: string };

type TranslationStatus = { locale: string; updated_at: string };

type TagPageData = {
  id: string;
  tag_id: string;
  title: string;
  breadcrumb: string;
  hero_image: string | null;
  updated_at_label: string | null;
  pr_notice: string | null;
  lead: string;
  map_heading: string | null;
  map_intro: string | null;
  map_iframe_html: string | null;
  faq_heading: string | null;
  published: boolean;
  pr_banner?: {
    heading: string;
    image: string | null;
    body: string[];
    links: { label: string; href: string }[];
  } | null;
  sections?: {
    key: string;
    heading: string;
    intro: string | null;
    spots: { spot_id: string; description: string | null }[];
  }[];
  faqs?: { question: string; answer: string }[];
};

type Props = {
  tagPage?: TagPageData | null;
  tags: TagOption[];
  spots: SpotOption[];
  translations?: TranslationStatus[];
};

/* ------------------------------------------------------------------ */
/* Shared UI                                                           */
/* ------------------------------------------------------------------ */

function Section({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-medium text-gray-700 hover:bg-gray-50"
      >
        {title}
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none";

/* ------------------------------------------------------------------ */
/* Sortable helpers                                                    */
/* ------------------------------------------------------------------ */

function SortableFaqItem({
  id,
  faq,
  index,
  onUpdate,
  onDelete,
}: {
  id: string;
  faq: FaqData;
  index: number;
  onUpdate: (i: number, f: FaqData) => void;
  onDelete: (i: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
    >
      <button
        type="button"
        className="mt-2 cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 touch-none"
        {...attributes}
        {...listeners}
      >
        <GripVertical size={20} />
      </button>
      <div className="flex-1 space-y-2">
        <input
          value={faq.question}
          onChange={(e) => onUpdate(index, { ...faq, question: e.target.value })}
          placeholder="質問"
          className={inputClass}
        />
        <textarea
          value={faq.answer}
          onChange={(e) => onUpdate(index, { ...faq, answer: e.target.value })}
          placeholder="回答"
          rows={2}
          className={inputClass}
        />
      </div>
      <button
        type="button"
        onClick={() => onDelete(index)}
        className="mt-2 text-gray-400 hover:text-red-500"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

function SortableSectionItem({
  id,
  section,
  sectionIndex,
  spots: allSpots,
  onUpdate,
  onDelete,
}: {
  id: string;
  section: SectionData;
  sectionIndex: number;
  spots: SpotOption[];
  onUpdate: (i: number, s: SectionData) => void;
  onDelete: (i: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const [open, setOpen] = useState(true);

  const addSpot = () => {
    onUpdate(sectionIndex, {
      ...section,
      spots: [...section.spots, { spot_id: "", description: "" }],
    });
  };

  const updateSpot = (si: number, s: SectionSpot) => {
    const newSpots = [...section.spots];
    newSpots[si] = s;
    onUpdate(sectionIndex, { ...section, spots: newSpots });
  };

  const deleteSpot = (si: number) => {
    onUpdate(sectionIndex, {
      ...section,
      spots: section.spots.filter((_, i) => i !== si),
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border border-gray-200 rounded-lg bg-gray-50 mb-3"
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200">
        <button
          type="button"
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 touch-none"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={18} />
        </button>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex-1 text-left text-sm font-medium text-gray-700"
        >
          {section.heading || `セクション ${sectionIndex + 1}`}
        </button>
        <button
          type="button"
          onClick={() => onDelete(sectionIndex)}
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </div>
      {open && (
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="キー（slug）">
              <input
                value={section.key}
                onChange={(e) =>
                  onUpdate(sectionIndex, { ...section, key: e.target.value })
                }
                placeholder="hotel"
                className={inputClass}
              />
            </Field>
            <Field label="見出し">
              <input
                value={section.heading}
                onChange={(e) =>
                  onUpdate(sectionIndex, { ...section, heading: e.target.value })
                }
                placeholder="東京タワーが綺麗に見えるホテル"
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="イントロ">
            <textarea
              value={section.intro}
              onChange={(e) =>
                onUpdate(sectionIndex, { ...section, intro: e.target.value })
              }
              rows={2}
              className={inputClass}
            />
          </Field>

          <div className="mt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                スポット ({section.spots.length})
              </span>
              <button
                type="button"
                onClick={addSpot}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
              >
                <Plus size={14} /> スポット追加
              </button>
            </div>
            <div className="space-y-2">
              {section.spots.map((spot, si) => (
                <div key={si} className="flex items-start gap-2 bg-white p-2 rounded border border-gray-200">
                  <div className="flex-1 space-y-2">
                    <select
                      value={spot.spot_id}
                      onChange={(e) =>
                        updateSpot(si, { ...spot, spot_id: e.target.value })
                      }
                      className={inputClass}
                    >
                      <option value="">スポットを選択...</option>
                      {allSpots.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name || s.title} ({s.slug})
                        </option>
                      ))}
                    </select>
                    <textarea
                      value={spot.description}
                      onChange={(e) =>
                        updateSpot(si, { ...spot, description: e.target.value })
                      }
                      placeholder="このスポットの説明文"
                      rows={3}
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteSpot(si)}
                    className="mt-2 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Form                                                           */
/* ------------------------------------------------------------------ */

export default function TagPageForm({
  tagPage,
  tags,
  spots,
  translations,
}: Props) {
  const router = useRouter();
  const isEdit = !!tagPage;

  // Basic fields
  const [tagId, setTagId] = useState(tagPage?.tag_id || "");
  const [title, setTitle] = useState(tagPage?.title || "");
  const [breadcrumb, setBreadcrumb] = useState(tagPage?.breadcrumb || "");
  const [heroImage, setHeroImage] = useState(tagPage?.hero_image || "");
  const [updatedAtLabel, setUpdatedAtLabel] = useState(tagPage?.updated_at_label || "");
  const [prNotice, setPrNotice] = useState(tagPage?.pr_notice || "");
  const [lead, setLead] = useState(tagPage?.lead || "");
  const [published, setPublished] = useState(tagPage?.published || false);

  // Map
  const [mapHeading, setMapHeading] = useState(tagPage?.map_heading || "");
  const [mapIntro, setMapIntro] = useState(tagPage?.map_intro || "");
  const [mapIframeHtml, setMapIframeHtml] = useState(tagPage?.map_iframe_html || "");

  // FAQ heading
  const [faqHeading, setFaqHeading] = useState(tagPage?.faq_heading || "");

  // PR Banner
  const [prBanner, setPrBanner] = useState<PrBannerData>(() => ({
    enabled: !!tagPage?.pr_banner,
    heading: tagPage?.pr_banner?.heading || "",
    image: tagPage?.pr_banner?.image || "",
    body: tagPage?.pr_banner?.body ?? [""],
    links: tagPage?.pr_banner?.links ?? [{ label: "", href: "" }],
  }));

  // Sections
  const [sections, setSections] = useState<SectionData[]>(() =>
    tagPage?.sections?.map((s) => ({
      key: s.key,
      heading: s.heading,
      intro: s.intro || "",
      spots: s.spots.map((sp) => ({
        spot_id: sp.spot_id,
        description: sp.description || "",
      })),
    })) ?? []
  );

  // FAQs
  const [faqs, setFaqs] = useState<FaqData[]>(
    tagPage?.faqs ?? []
  );

  // Form submission
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  // Translation
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateResult, setTranslateResult] = useState<string | null>(null);

  /* --------- Submit --------- */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSaved(false);

    const formData = new FormData();

    // Basic fields
    formData.set("tag_id", tagId);
    formData.set("title", title);
    formData.set("breadcrumb", breadcrumb);
    formData.set("hero_image", heroImage);
    formData.set("updated_at_label", updatedAtLabel);
    formData.set("pr_notice", prNotice);
    formData.set("lead", lead);
    formData.set("published", published ? "on" : "");
    formData.set("map_heading", mapHeading);
    formData.set("map_intro", mapIntro);
    formData.set("map_iframe_html", mapIframeHtml);
    formData.set("faq_heading", faqHeading);

    // PR Banner
    if (prBanner.enabled) {
      formData.set("pr_banner_enabled", "on");
      formData.set("pr_banner_heading", prBanner.heading);
      formData.set("pr_banner_image", prBanner.image);
      prBanner.body.forEach((text, i) => {
        formData.set(`pr_banner_body.${i}.text`, text);
      });
      prBanner.links.forEach((link, i) => {
        formData.set(`pr_banner_links.${i}.label`, link.label);
        formData.set(`pr_banner_links.${i}.href`, link.href);
      });
    }

    // Sections
    sections.forEach((sec, si) => {
      formData.set(`sections.${si}.key`, sec.key);
      formData.set(`sections.${si}.heading`, sec.heading);
      formData.set(`sections.${si}.intro`, sec.intro);
      sec.spots.forEach((spot, spi) => {
        formData.set(`sections.${si}.spots.${spi}.spot_id`, spot.spot_id);
        formData.set(`sections.${si}.spots.${spi}.description`, spot.description);
      });
    });

    // FAQs
    faqs.forEach((faq, i) => {
      formData.set(`faqs.${i}.question`, faq.question);
      formData.set(`faqs.${i}.answer`, faq.answer);
    });

    startTransition(async () => {
      const result = isEdit
        ? await updateTagPage(tagPage!.id, formData)
        : await createTagPage(formData);

      if (result && "error" in result && result.error) {
        setError(result.error);
      } else if (isEdit) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    });
  };

  /* --------- Translate --------- */

  const handleTranslate = async () => {
    if (!tagPage?.id) return;
    setIsTranslating(true);
    setTranslateResult(null);

    try {
      const { translateTagPage } = await import(
        "@/app/admin/tag-pages/translate-action"
      );
      const result = await translateTagPage(tagPage.id);
      if (result.error) {
        setTranslateResult(`❌ ${result.error}`);
      } else {
        setTranslateResult("✅ 翻訳が完了しました");
        router.refresh();
      }
    } catch (e) {
      setTranslateResult(`❌ ${String(e)}`);
    } finally {
      setIsTranslating(false);
    }
  };

  /* --------- DnD handlers --------- */

  const handleFaqDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIdx = faqs.findIndex((_, i) => `faq-${i}` === active.id);
    const newIdx = faqs.findIndex((_, i) => `faq-${i}` === over.id);
    if (oldIdx !== -1 && newIdx !== -1) {
      setFaqs(arrayMove(faqs, oldIdx, newIdx));
    }
  };

  const handleSectionDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIdx = sections.findIndex((_, i) => `sec-${i}` === active.id);
    const newIdx = sections.findIndex((_, i) => `sec-${i}` === over.id);
    if (oldIdx !== -1 && newIdx !== -1) {
      setSections(arrayMove(sections, oldIdx, newIdx));
    }
  };

  /* --------- Render --------- */

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* ===== 基本情報 ===== */}
      <Section title="基本情報">
        <Field label="タグ *">
          <select value={tagId} onChange={(e) => setTagId(e.target.value)} className={inputClass}>
            <option value="">選択してください</option>
            {tags.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.slug})
              </option>
            ))}
          </select>
        </Field>
        <Field label="SEOタイトル *">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
        </Field>
        <Field label="パンくず">
          <input value={breadcrumb} onChange={(e) => setBreadcrumb(e.target.value)} className={inputClass} placeholder="タイトルと異なる場合のみ" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="ヒーロー画像 URL">
            <input value={heroImage} onChange={(e) => setHeroImage(e.target.value)} className={inputClass} placeholder="https://..." />
          </Field>
          <Field label="更新日表示ラベル">
            <input value={updatedAtLabel} onChange={(e) => setUpdatedAtLabel(e.target.value)} className={inputClass} placeholder="2026.03.07" />
          </Field>
        </div>
        <Field label="PR表記">
          <input value={prNotice} onChange={(e) => setPrNotice(e.target.value)} className={inputClass} placeholder="本記事にはPRが含まれています" />
        </Field>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="published" className="text-sm text-gray-700">
            公開する
          </label>
        </div>
      </Section>

      {/* ===== リード文 ===== */}
      <Section title="リード文">
        <Field label="リード文 *">
          <textarea
            value={lead}
            onChange={(e) => setLead(e.target.value)}
            rows={5}
            className={inputClass}
          />
        </Field>
      </Section>

      {/* ===== PRバナー ===== */}
      <Section title="PRバナー" defaultOpen={prBanner.enabled}>
        <div className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            id="pr_banner_enabled"
            checked={prBanner.enabled}
            onChange={(e) => setPrBanner({ ...prBanner, enabled: e.target.checked })}
            className="w-4 h-4"
          />
          <label htmlFor="pr_banner_enabled" className="text-sm text-gray-700">
            PRバナーを表示する
          </label>
        </div>
        {prBanner.enabled && (
          <>
            <Field label="見出し">
              <input
                value={prBanner.heading}
                onChange={(e) => setPrBanner({ ...prBanner, heading: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="画像 URL">
              <input
                value={prBanner.image}
                onChange={(e) => setPrBanner({ ...prBanner, image: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="本文（段落）">
              {prBanner.body.map((text, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <textarea
                    value={text}
                    onChange={(e) => {
                      const newBody = [...prBanner.body];
                      newBody[i] = e.target.value;
                      setPrBanner({ ...prBanner, body: newBody });
                    }}
                    rows={2}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPrBanner({
                        ...prBanner,
                        body: prBanner.body.filter((_, j) => j !== i),
                      });
                    }}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setPrBanner({ ...prBanner, body: [...prBanner.body, ""] })}
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 mt-1"
              >
                <Plus size={14} /> 段落追加
              </button>
            </Field>
            <Field label="リンク">
              {prBanner.links.map((link, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    value={link.label}
                    onChange={(e) => {
                      const newLinks = [...prBanner.links];
                      newLinks[i] = { ...link, label: e.target.value };
                      setPrBanner({ ...prBanner, links: newLinks });
                    }}
                    placeholder="ラベル"
                    className={inputClass}
                  />
                  <input
                    value={link.href}
                    onChange={(e) => {
                      const newLinks = [...prBanner.links];
                      newLinks[i] = { ...link, href: e.target.value };
                      setPrBanner({ ...prBanner, links: newLinks });
                    }}
                    placeholder="URL"
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPrBanner({
                        ...prBanner,
                        links: prBanner.links.filter((_, j) => j !== i),
                      });
                    }}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setPrBanner({
                    ...prBanner,
                    links: [...prBanner.links, { label: "", href: "" }],
                  })
                }
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 mt-1"
              >
                <Plus size={14} /> リンク追加
              </button>
            </Field>
          </>
        )}
      </Section>

      {/* ===== セクション ===== */}
      <Section title={`セクション (${sections.length})`}>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleSectionDragEnd}>
          <SortableContext
            items={sections.map((_, i) => `sec-${i}`)}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((sec, i) => (
              <SortableSectionItem
                key={`sec-${i}`}
                id={`sec-${i}`}
                section={sec}
                sectionIndex={i}
                spots={spots}
                onUpdate={(idx, s) => {
                  const newSections = [...sections];
                  newSections[idx] = s;
                  setSections(newSections);
                }}
                onDelete={(idx) => setSections(sections.filter((_, j) => j !== idx))}
              />
            ))}
          </SortableContext>
        </DndContext>
        <button
          type="button"
          onClick={() =>
            setSections([...sections, { key: "", heading: "", intro: "", spots: [] }])
          }
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <Plus size={16} /> セクション追加
        </button>
      </Section>

      {/* ===== マップ ===== */}
      <Section title="マップ" defaultOpen={!!mapHeading}>
        <Field label="見出し">
          <input value={mapHeading} onChange={(e) => setMapHeading(e.target.value)} className={inputClass} />
        </Field>
        <Field label="説明文">
          <textarea value={mapIntro} onChange={(e) => setMapIntro(e.target.value)} rows={2} className={inputClass} />
        </Field>
        <Field label="iframe HTML">
          <textarea value={mapIframeHtml} onChange={(e) => setMapIframeHtml(e.target.value)} rows={3} className={inputClass} placeholder='<iframe src="..." ...' />
        </Field>
      </Section>

      {/* ===== FAQ ===== */}
      <Section title={`FAQ (${faqs.length})`}>
        <Field label="FAQ見出し（カスタム）">
          <input value={faqHeading} onChange={(e) => setFaqHeading(e.target.value)} className={inputClass} placeholder="空欄の場合はデフォルト" />
        </Field>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleFaqDragEnd}>
          <SortableContext
            items={faqs.map((_, i) => `faq-${i}`)}
            strategy={verticalListSortingStrategy}
          >
            {faqs.map((faq, i) => (
              <SortableFaqItem
                key={`faq-${i}`}
                id={`faq-${i}`}
                faq={faq}
                index={i}
                onUpdate={(idx, f) => {
                  const newFaqs = [...faqs];
                  newFaqs[idx] = f;
                  setFaqs(newFaqs);
                }}
                onDelete={(idx) => setFaqs(faqs.filter((_, j) => j !== idx))}
              />
            ))}
          </SortableContext>
        </DndContext>
        <button
          type="button"
          onClick={() => setFaqs([...faqs, { question: "", answer: "" }])}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-2"
        >
          <Plus size={16} /> FAQ追加
        </button>
      </Section>

      {/* ===== 翻訳（edit時のみ） ===== */}
      {isEdit && (
        <Section title="多言語翻訳" defaultOpen={false}>
          <div className="mb-3">
            {translations && translations.length > 0 ? (
              <div className="space-y-1">
                {translations.map((t) => (
                  <div key={t.locale} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-green-500" />
                    <span className="font-medium">
                      {LOCALE_DISPLAY_NAMES[t.locale] || t.locale}
                    </span>
                    <span className="text-gray-400">
                      {new Date(t.updated_at).toLocaleDateString("ja-JP")}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">翻訳データなし</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleTranslate}
            disabled={isTranslating}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 disabled:opacity-50"
          >
            {isTranslating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Languages size={16} />
            )}
            {isTranslating ? "翻訳中..." : "4言語に自動翻訳"}
          </button>
          {translateResult && (
            <p className="text-sm mt-2">{translateResult}</p>
          )}
        </Section>
      )}

      {/* ===== 保存ボタン ===== */}
      <div className="flex items-center gap-3 mt-6">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? (
            <Loader2 size={16} className="animate-spin" />
          ) : saved ? (
            <Check size={16} />
          ) : (
            <Save size={16} />
          )}
          {isPending ? "保存中..." : saved ? "保存しました" : isEdit ? "更新" : "作成"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/tag-pages")}
          className="px-4 py-2.5 text-sm text-gray-600 hover:text-gray-800"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
}
