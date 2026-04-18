"use client";

import { useState, useTransition, useRef } from "react";
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
  Upload,
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
import { createSpot, updateSpot } from "@/app/admin/spots/actions";
import { translateSpot } from "@/app/admin/spots/translate-action";
import { LOCALE_DISPLAY_NAMES } from "@/lib/types";

type Category = { id: string; name: string; slug: string };
type Tag = { id: string; name: string; slug: string };
type SpotImage = { url: string; alt: string | null; sort_order: number };
type SpotFaq = {
  question: string;
  answer: string;
  sort_order: number;
};

type SpotData = {
  id: string;
  title: string;
  slug: string;
  type: string;
  category_id: string;
  published: boolean;
  closed: boolean;
  name: string | null;
  lead: string | null;
  recommend_description: string | null;
  report: string | null;
  content: string | null;
  featured_image: string | null;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  station: string | null;
  parking: string | null;
  map: string | null;
  height: string | null;
  hours: string | null;
  holiday: string | null;
  money: string | null;
  official_url: string | null;
  official_label: string | null;
  sns_url: string | null;
  sns_label: string | null;
  relation_url: string | null;
  relation_label: string | null;
  movie: string | null;
  asoview: string | null;
  asoview_02: string | null;
  rating_beautiful: number | null;
  rating_access: number | null;
  rating_atmosphere: number | null;
  rating_cost: number | null;
  tags?: { id: string }[];
  images?: SpotImage[];
  faqs?: SpotFaq[];
  hotel?: {
    checkin: string | null;
    checkout: string | null;
    amenity: string | null;
    affiliate_1: string | null;
    affiliate_2: string | null;
    affiliate_3: string | null;
    affiliate_4: string | null;
  } | null;
  event?: {
    start_date: string | null;
    end_date: string | null;
    place: string | null;
    event_hour: string | null;
  } | null;
};

type TranslationStatus = {
  locale: string;
  updated_at: string;
};

type Props = {
  spot?: SpotData | null;
  categories: Category[];
  tags: Tag[];
  translations?: TranslationStatus[];
};

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

function SortableImageItem({
  id,
  img,
  index,
  onUpdate,
  onDelete,
}: {
  id: string;
  img: SpotImage;
  index: number;
  onUpdate: (index: number, updated: SpotImage) => void;
  onDelete: (index: number) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError(null);

    try {
      // 署名付きURLを取得
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error ?? "アップロードURLの取得に失敗しました");
      }

      const { signedUrl, publicUrl } = await res.json();

      // R2に直接アップロード
      const uploadRes = await fetch(signedUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadRes.ok) throw new Error("R2へのアップロードに失敗しました");

      // URLフィールドに自動セット
      onUpdate(index, { ...img, url: publicUrl });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setUploading(false);
      // input をリセット（同じファイルを再選択できるように）
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

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
        <div className="flex gap-2">
          <input
            value={img.url}
            onChange={(e) => onUpdate(index, { ...img, url: e.target.value })}
            placeholder="画像URL"
            className={`${inputClass} flex-1`}
          />
          {/* アップロードボタン */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {uploading
              ? <Loader2 size={14} className="animate-spin" />
              : <Upload size={14} />
            }
            {uploading ? "アップロード中..." : "アップロード"}
          </button>
        </div>
        {uploadError && (
          <p className="text-xs text-red-500">{uploadError}</p>
        )}
        <div>
          <label className="block text-xs text-gray-500 mb-1">alt テキスト</label>
          <input
            value={img.alt ?? ""}
            onChange={(e) => onUpdate(index, { ...img, alt: e.target.value })}
            placeholder="画像の説明テキスト"
            className={inputClass}
          />
        </div>
      </div>
      {img.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img.url}
          alt=""
          className="w-20 h-14 object-cover rounded flex-shrink-0 mt-1"
        />
      )}
      <button
        type="button"
        onClick={() => onDelete(index)}
        className="text-gray-400 hover:text-red-600 p-1 mt-1"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
const textareaClass = `${inputClass} min-h-[80px]`;

const LOCALE_LABELS = LOCALE_DISPLAY_NAMES;

export default function SpotForm({ spot, categories, tags, translations = [] }: Props) {
  const isEdit = !!spot;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [translateSuccess, setTranslateSuccess] = useState(false);
  const [selectedLocales, setSelectedLocales] = useState<Set<string>>(
    new Set(["en", "ko", "zh-Hant", "zh-Hans"])
  );
  const [error, setError] = useState<string | null>(null);
  const [spotType, setSpotType] = useState(spot?.type ?? "spot");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(
    new Set(spot?.tags?.map((t) => t.id) ?? [])
  );
  const [images, setImages] = useState<SpotImage[]>(
    spot?.images ?? []
  );
  const [faqs, setFaqs] = useState<SpotFaq[]>(spot?.faqs ?? []);

  function handleSubmit(formData: FormData) {
    // Append tag IDs
    selectedTags.forEach((id) => formData.append("tag_ids", id));

    // Append images
    images.forEach((img, i) => {
      formData.append(`images.${i}.url`, img.url);
      formData.append(`images.${i}.alt`, img.alt ?? "");
      formData.append(`images.${i}.sort_order`, String(img.sort_order));
    });

    // Append FAQs
    faqs.forEach((faq, i) => {
      formData.append(`faqs.${i}.question`, faq.question);
      formData.append(`faqs.${i}.answer`, faq.answer);
      formData.append(`faqs.${i}.sort_order`, String(faq.sort_order));
    });

    setError(null);
    startTransition(async () => {
      const result = isEdit
        ? await updateSpot(spot!.id, formData)
        : await createSpot(formData);
      if (result?.error) {
        setError(result.error);
        window.scrollTo(0, 0);
      } else if (isEdit) {
        router.refresh();
      }
    });
  }

  return (
    <form action={handleSubmit}>
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {/* Section 1: Basic Info */}
      <Section title="基本情報" defaultOpen>
        <div className="grid grid-cols-2 gap-4">
          <Field label="タイトル *">
            <input
              name="title"
              defaultValue={spot?.title ?? ""}
              required
              className={inputClass}
            />
          </Field>
          <Field label="スラッグ *">
            <input
              name="slug"
              defaultValue={spot?.slug ?? ""}
              required
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field label="タイプ">
            <select
              name="type"
              value={spotType}
              onChange={(e) => setSpotType(e.target.value)}
              className={inputClass}
            >
              <option value="spot">スポット</option>
              <option value="hotel">ホテル</option>
              <option value="event">イベント</option>
            </select>
          </Field>
          <Field label="カテゴリ">
            <select
              name="category_id"
              defaultValue={spot?.category_id ?? ""}
              className={inputClass}
            >
              <option value="">未選択</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="公開設定">
            <label className="flex items-center gap-2 mt-2">
              <input
                name="published"
                type="checkbox"
                defaultChecked={spot?.published ?? false}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-600">公開する</span>
            </label>
          </Field>
          <Field label="閉鎖">
            <label className="flex items-center gap-2 mt-2">
              <input
                name="closed"
                type="checkbox"
                defaultChecked={spot?.closed ?? false}
                className="w-4 h-4 accent-red-500"
              />
              <span className="text-sm text-red-600 font-medium">閉鎖済み（評点グレーアウト・ラベル表示）</span>
            </label>
          </Field>
        </div>
        {/* featured_image is auto-set from the first image on save */}
      </Section>

      {/* Section 2: Content */}
      <Section title="コンテンツ" defaultOpen={isEdit}>
        <Field label="名前（表示名）">
          <input
            name="name"
            defaultValue={spot?.name ?? ""}
            className={inputClass}
          />
        </Field>
        <Field label="リード文">
          <textarea
            name="lead"
            defaultValue={spot?.lead ?? ""}
            className={textareaClass}
          />
        </Field>
        <Field label="おすすめページ説明文（未入力時はリード文を使用）">
          <textarea
            name="recommend_description"
            defaultValue={spot?.recommend_description ?? ""}
            className={textareaClass}
            placeholder="未入力の場合はリード文が使用されます"
          />
        </Field>
        <Field label="レポート">
          <textarea
            name="report"
            defaultValue={spot?.report ?? ""}
            className={`${inputClass} min-h-[200px]`}
          />
        </Field>
      </Section>

      {/* Section 3: Location */}
      <Section title="場所・アクセス">
        <Field label="住所">
          <input
            name="address"
            defaultValue={spot?.address ?? ""}
            className={inputClass}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="緯度">
            <input
              name="latitude"
              type="number"
              step="0.000001"
              defaultValue={spot?.latitude ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="経度">
            <input
              name="longitude"
              type="number"
              step="0.000001"
              defaultValue={spot?.longitude ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="最寄駅">
            <input
              name="station"
              defaultValue={spot?.station ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="駐車場">
            <input
              name="parking"
              defaultValue={spot?.parking ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="高さ">
          <input
            name="height"
            defaultValue={spot?.height ?? ""}
            className={inputClass}
          />
        </Field>
        <Field label="地図埋め込み">
          <textarea
            name="map"
            defaultValue={spot?.map ?? ""}
            className={textareaClass}
          />
        </Field>
      </Section>

      {/* Section 4: Business Info */}
      <Section title="営業情報・リンク">
        <div className="grid grid-cols-3 gap-4">
          <Field label="営業時間">
            <input
              name="hours"
              defaultValue={spot?.hours ?? "終日開放"}
              className={inputClass}
            />
          </Field>
          <Field label="定休日">
            <input
              name="holiday"
              defaultValue={spot?.holiday ?? "なし"}
              className={inputClass}
            />
          </Field>
          <Field label="料金">
            <input
              name="money"
              defaultValue={spot?.money ?? "無料"}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="公式サイト URL">
            <input
              name="official_url"
              defaultValue={spot?.official_url ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="公式サイト ラベル">
            <input
              name="official_label"
              defaultValue={spot?.official_label ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="SNS URL">
            <input
              name="sns_url"
              defaultValue={spot?.sns_url ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="SNS ラベル">
            <input
              name="sns_label"
              defaultValue={spot?.sns_label ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="関連サイト URL">
            <input
              name="relation_url"
              defaultValue={spot?.relation_url ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="関連サイト ラベル">
            <input
              name="relation_label"
              defaultValue={spot?.relation_label ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="動画埋め込み">
          <textarea
            name="movie"
            defaultValue={spot?.movie ?? ""}
            className={textareaClass}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="asoview">
            <input
              name="asoview"
              defaultValue={spot?.asoview ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="asoview_02">
            <input
              name="asoview_02"
              defaultValue={spot?.asoview_02 ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
      </Section>

      {/* Section 5: Ratings */}
      <Section title="評価">
        <div className="grid grid-cols-4 gap-4">
          <Field label="美しさ">
            <input
              name="rating_beautiful"
              type="number"
              min="0"
              max="5"
              step="0.1"
              defaultValue={spot?.rating_beautiful ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="アクセス">
            <input
              name="rating_access"
              type="number"
              min="0"
              max="5"
              step="0.1"
              defaultValue={spot?.rating_access ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="雰囲気">
            <input
              name="rating_atmosphere"
              type="number"
              min="0"
              max="5"
              step="0.1"
              defaultValue={spot?.rating_atmosphere ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="コスパ">
            <input
              name="rating_cost"
              type="number"
              min="0"
              max="5"
              step="0.1"
              defaultValue={spot?.rating_cost ?? ""}
              className={inputClass}
            />
          </Field>
        </div>
      </Section>

      {/* Section 6: Tags */}
      <Section title="タグ">
        <div className="grid grid-cols-3 gap-2">
          {tags.map((tag) => (
            <label key={tag.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedTags.has(tag.id)}
                onChange={(e) => {
                  const next = new Set(selectedTags);
                  if (e.target.checked) next.add(tag.id);
                  else next.delete(tag.id);
                  setSelectedTags(next);
                }}
                className="w-4 h-4"
              />
              {tag.name}
            </label>
          ))}
        </div>
      </Section>

      {/* Section 7: Images */}
      <Section title={`画像（${images.length}件）`}>
        <DndContext
          id="image-sort"
          collisionDetection={closestCenter}
          onDragEnd={(event: DragEndEvent) => {
            const { active, over } = event;
            if (over && active.id !== over.id) {
              const oldIndex = images.findIndex((_, i) => `img-${i}` === active.id);
              const newIndex = images.findIndex((_, i) => `img-${i}` === over.id);
              if (oldIndex !== -1 && newIndex !== -1) {
                const reordered = arrayMove(images, oldIndex, newIndex).map(
                  (img, i) => ({ ...img, sort_order: i })
                );
                setImages(reordered);
              }
            }
          }}
        >
          <SortableContext
            items={images.map((_, i) => `img-${i}`)}
            strategy={verticalListSortingStrategy}
          >
            {images.map((img, i) => (
              <SortableImageItem
                key={`img-${i}`}
                id={`img-${i}`}
                img={img}
                index={i}
                onUpdate={(idx, updated) => {
                  const next = [...images];
                  next[idx] = updated;
                  setImages(next);
                }}
                onDelete={(idx) => {
                  setImages(
                    images
                      .filter((_, j) => j !== idx)
                      .map((img, i) => ({ ...img, sort_order: i }))
                  );
                }}
              />
            ))}
          </SortableContext>
        </DndContext>
        <button
          type="button"
          onClick={() =>
            setImages([...images, { url: "", alt: "", sort_order: images.length }])
          }
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mt-2"
        >
          <Plus size={14} />
          画像を追加
        </button>
      </Section>

      {/* Section 8: FAQs */}
      <Section title={`FAQ（${faqs.length}件）`}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="pb-3 border-b border-gray-100 last:border-0 space-y-2"
          >
            <div className="flex gap-3">
              <div className="flex-1 space-y-2">
                <input
                  value={faq.question}
                  onChange={(e) => {
                    const next = [...faqs];
                    next[i] = { ...next[i], question: e.target.value };
                    setFaqs(next);
                  }}
                  placeholder="質問"
                  className={inputClass}
                />
                <textarea
                  value={faq.answer}
                  onChange={(e) => {
                    const next = [...faqs];
                    next[i] = { ...next[i], answer: e.target.value };
                    setFaqs(next);
                  }}
                  placeholder="回答"
                  className={textareaClass}
                />
              </div>
              <button
                type="button"
                onClick={() => setFaqs(faqs.filter((_, j) => j !== i))}
                className="text-gray-400 hover:text-red-600 p-1 mt-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFaqs([
              ...faqs,
              { question: "", answer: "", sort_order: faqs.length },
            ])
          }
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
        >
          <Plus size={14} />
          FAQを追加
        </button>
      </Section>

      {/* Section 9: Hotel Info (conditional) */}
      {spotType === "hotel" && (
        <Section title="ホテル情報" defaultOpen>
          <div className="grid grid-cols-2 gap-4">
            <Field label="チェックイン">
              <input
                name="checkin"
                defaultValue={spot?.hotel?.checkin ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="チェックアウト">
              <input
                name="checkout"
                defaultValue={spot?.hotel?.checkout ?? ""}
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="アメニティ">
            <textarea
              name="amenity"
              defaultValue={spot?.hotel?.amenity ?? ""}
              className={textareaClass}
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="アフィリエイト1">
              <input
                name="affiliate_1"
                defaultValue={spot?.hotel?.affiliate_1 ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="アフィリエイト2">
              <input
                name="affiliate_2"
                defaultValue={spot?.hotel?.affiliate_2 ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="アフィリエイト3">
              <input
                name="affiliate_3"
                defaultValue={spot?.hotel?.affiliate_3 ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="アフィリエイト4">
              <input
                name="affiliate_4"
                defaultValue={spot?.hotel?.affiliate_4 ?? ""}
                className={inputClass}
              />
            </Field>
          </div>
        </Section>
      )}

      {/* Section 10: Event Info (conditional) */}
      {spotType === "event" && (
        <Section title="イベント情報" defaultOpen>
          <div className="grid grid-cols-2 gap-4">
            <Field label="開始日">
              <input
                name="start_date"
                defaultValue={spot?.event?.start_date ?? ""}
                className={inputClass}
                placeholder="2026-01-01"
              />
            </Field>
            <Field label="終了日">
              <input
                name="end_date"
                defaultValue={spot?.event?.end_date ?? ""}
                className={inputClass}
                placeholder="2026-01-31"
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="場所">
              <input
                name="place"
                defaultValue={spot?.event?.place ?? ""}
                className={inputClass}
              />
            </Field>
            <Field label="開催時間">
              <input
                name="event_hour"
                defaultValue={spot?.event?.event_hour ?? ""}
                className={inputClass}
              />
            </Field>
          </div>
        </Section>
      )}

      {/* Translation Section (edit mode only) */}
      {isEdit && (
        <Section title="多言語翻訳">
          {translateError && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-md">
              {translateError}
            </div>
          )}
          {translateSuccess && (
            <div className="bg-green-50 text-green-600 text-sm px-4 py-3 rounded-md">
              {selectedLocales.size}言語の翻訳が完了しました
            </div>
          )}
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedLocales.size === 4}
                onChange={(e) => {
                  setSelectedLocales(
                    e.target.checked
                      ? new Set(["en", "ko", "zh-Hant", "zh-Hans"])
                      : new Set()
                  );
                }}
              />
              一括選択
            </label>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {Object.entries(LOCALE_LABELS).map(([locale, label]) => {
              const t = translations.find((tr) => tr.locale === locale);
              const checked = selectedLocales.has(locale);
              return (
                <label
                  key={locale}
                  className={`rounded-md border px-3 py-2 text-sm cursor-pointer select-none transition-colors ${
                    checked
                      ? "border-purple-300 bg-purple-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-purple-600"
                      checked={checked}
                      onChange={(e) => {
                        const next = new Set(selectedLocales);
                        if (e.target.checked) next.add(locale);
                        else next.delete(locale);
                        setSelectedLocales(next);
                      }}
                    />
                    <span className="font-medium">{label}</span>
                    {t && <Check size={14} className="text-green-600 ml-auto" />}
                  </div>
                  {t && (
                    <p className="text-xs text-gray-400 mt-1 ml-5.5">
                      翻訳済 {new Date(t.updated_at).toLocaleDateString("ja-JP")}
                    </p>
                  )}
                </label>
              );
            })}
          </div>
          <button
            type="button"
            disabled={isTranslating || selectedLocales.size === 0}
            onClick={() => {
              setTranslateError(null);
              setTranslateSuccess(false);
              setIsTranslating(true);
              translateSpot(spot!.id, Array.from(selectedLocales))
                .then((result) => {
                  if (result.error) {
                    setTranslateError(result.error);
                  } else {
                    setTranslateSuccess(true);
                    router.refresh();
                  }
                })
                .catch((err) => {
                  setTranslateError(String(err));
                })
                .finally(() => setIsTranslating(false));
            }}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
          >
            {isTranslating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Languages size={16} />
            )}
            {isTranslating
              ? "翻訳中（1〜2分かかります）..."
              : `翻訳を生成（${selectedLocales.size}言語）`}
          </button>
        </Section>
      )}

      {/* Submit */}
      <div className="flex items-center gap-4 mt-6">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          <Save size={16} />
          {isPending ? "保存中..." : isEdit ? "更新する" : "作成する"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/spots")}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
}
