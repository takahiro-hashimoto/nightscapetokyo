import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HomePageLabels } from "@/lib/i18n-labels";

type PurposeTag = {
  slug: string;
  name: string;
  image_url: string | null;
  spot_count: number;
};

type Props = {
  tags: PurposeTag[];
  labels?: HomePageLabels["purposeSearch"];
  localeSlug?: string;
};

/** DB image_url → ローカル画像フォールバック */
function resolveTagImage(tag: PurposeTag): string | null {
  if (tag.image_url) return tag.image_url;
  return `/images/tag/${tag.slug}.jpg`;
}

export default function PurposeSearch({ tags, labels, localeSlug }: Props) {
  const prefix = localeSlug ? `/${localeSlug}` : "";
  if (!tags || tags.length === 0) return null;

  return (
    <section className="home-section" id="purpose">
      <div className="home-container">
        <h2 className="home-section-heading">
          {labels?.heading ?? "目的別に夜景が綺麗な場所を探す"}
        </h2>
        <p className="home-section-desc">
          {"デートや撮影、無料で楽しめる場所など、シーン・目的に合わせて夜景スポットを絞り込めます。"}
        </p>
        <div className="tag-card-grid" style={{ marginTop: 30 }} role="list">
          {tags.map((p) => {
            const imgSrc = resolveTagImage(p);
            return (
              <Link
                key={p.slug}
                href={`${prefix}/tag/${p.slug}`}
                className="tag-card"
                role="listitem"
              >
                <span className="tag-card-thumb">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt=""
                      width={80}
                      height={80}
                      sizes="80px"
                      loading="lazy"
                    />
                  ) : (
                    <span className="tag-card-thumb-placeholder" />
                  )}
                </span>
                <span className="tag-card-name">
                  {labels?.tagNames?.[p.name] ?? p.name}（{p.spot_count}）
                </span>
                <ChevronRight
                  size={16}
                  className="tag-card-arrow"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
