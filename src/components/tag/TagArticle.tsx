import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import TagSpotCard from "@/components/tag/TagSpotCard";
import SpotFaq from "@/components/spot/SpotFaq";
import type { SpotWithRelations } from "@/lib/types";
import { SITE_URL, calcRatingAvg } from "@/lib/types";
import type { TagPageContent } from "@/lib/dummy-tag-data";

/** ロケール別UIラベル */
const TAG_ARTICLE_LABELS: Record<string, {
  toc: string;
  tocAriaLabel: string;
  faqLink: string;
  faqHeading: (tagName: string) => string;
  lastUpdated: string;
}> = {
  ja: {
    toc: "≡ タップできる目次",
    tocAriaLabel: "目次",
    faqLink: "よくある質問",
    faqHeading: (tagName) => `${tagName}スポットを撮影する際によくある質問`,
    lastUpdated: "最終更新日",
  },
  en: {
    toc: "≡ Table of Contents",
    tocAriaLabel: "Table of Contents",
    faqLink: "FAQ",
    faqHeading: (tagName) => `Frequently Asked Questions About ${tagName} Spots`,
    lastUpdated: "Last updated",
  },
  ko: {
    toc: "≡ 목차",
    tocAriaLabel: "목차",
    faqLink: "자주 묻는 질문",
    faqHeading: (tagName) => `${tagName} 스폿 촬영 시 자주 묻는 질문`,
    lastUpdated: "최종 업데이트",
  },
  tw: {
    toc: "≡ 點擊查看目錄",
    tocAriaLabel: "目錄",
    faqLink: "常見問題",
    faqHeading: (tagName) => `關於${tagName}景點的常見問題`,
    lastUpdated: "最後更新",
  },
  cn: {
    toc: "≡ 点击查看目录",
    tocAriaLabel: "目录",
    faqLink: "常见问题",
    faqHeading: (tagName) => `关于${tagName}景点的常见问题`,
    lastUpdated: "最后更新",
  },
};

/** ItemList JSON-LD: スポットを評価順でリスト化 */
function buildItemListJsonLd(spots: SpotWithRelations[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: spots
      .map((s) => ({ spot: s, rating: calcRatingAvg(s) }))
      .sort((a, b) => b.rating - a.rating)
      .map(({ spot }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${spot.category?.slug ?? ""}/${spot.slug}`,
        name: spot.name || spot.title,
        ...(spot.featured_image && { image: spot.featured_image }),
      })),
  };
}

/** FAQPage JSON-LD */
function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type Props = {
  tagName: string;
  content: TagPageContent;
  allSpots: SpotWithRelations[];
  locale?: string;
};

export default function TagArticle({ tagName, content, allSpots, locale }: Props) {
  const l = TAG_ARTICLE_LABELS[locale ?? "ja"] ?? TAG_ARTICLE_LABELS.ja;
  /** slug → SpotWithRelations のマップ */
  const spotMap = new Map(allSpots.map((s) => [s.slug, s]));

  /** 目次用: セクション見出し + 各スポット名 */
  const tocSections = content.sections
    .map((section) => {
      const spots = section.spotSlugs
        .map((slug) => spotMap.get(slug))
        .filter((s): s is SpotWithRelations => !!s);
      if (spots.length === 0) return null;
      return {
        key: section.key,
        heading: section.heading,
        spots: spots.map((s) => ({
          slug: s.slug,
          name: s.name || s.title,
        })),
      };
    })
    .filter(Boolean);

  // JSON-LD用: 全セクションのスポットをフラットに収集
  const allResolvedSpots = content.sections.flatMap((section) =>
    section.spotSlugs
      .map((slug) => spotMap.get(slug))
      .filter((s): s is SpotWithRelations => !!s)
  );

  // updatedAt を ISO 形式に変換（例: "2025.12.29" → "2025-12-29"）
  const isoDate = content.updatedAt.replace(/\./g, "-");

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb items={[{ label: content.breadcrumb }]} />

        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="author" content="nightscape.tokyo" />
          <meta itemProp="dateModified" content={isoDate} />

          {/* メインビジュアル */}
          {content.heroImage && (
            <figure className="tag-hero" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
              <Image
                src={content.heroImage}
                alt={content.title}
                fill
                sizes="(max-width: 768px) 100vw, 880px"
                priority
                style={{ objectFit: "cover" }}
              />
              <meta itemProp="url" content={content.heroImage} />
            </figure>
          )}

          {/* タイトル + リード */}
          <header className="content-card card-padding">
            <h1 className="tag-page-title" itemProp="headline">{content.title}</h1>
            <div className="tag-page-meta">
              <time className="tag-page-date" dateTime={isoDate} itemProp="datePublished">
                {l.lastUpdated}: {content.updatedAt}
              </time>
              <span className="tag-page-pr">{content.prNotice}</span>
            </div>
            <div className="tag-page-lead" itemProp="description">
              {content.lead.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* PRバナー */}
            {content.prBanner && (
              <aside className="tag-pr-banner" aria-label="PR">
                <p className="tag-pr-banner-heading">
                  {content.prBanner.heading}
                </p>
                <div className="tag-pr-banner-body">
                  <div className="tag-pr-banner-image">
                    <Image
                      src={content.prBanner.image}
                      alt=""
                      width={280}
                      height={187}
                      style={{ objectFit: "cover", borderRadius: 4 }}
                    />
                  </div>
                  <div className="tag-pr-banner-text">
                    {content.prBanner.body.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <div className="tag-pr-banner-links">
                      {content.prBanner.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className={`tag-pr-banner-cta ${i === 0 ? "cta-filled" : "cta-outline"}`}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer sponsored"
                              : undefined
                          }
                        >
                          ▸ {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </header>

          {/* 目次 */}
          <nav className="tag-toc content-card card-padding" aria-label={l.tocAriaLabel}>
            <p className="tag-toc-title">{l.toc}</p>
            <ol className="tag-toc-list">
              {tocSections.map(
                (sec) =>
                  sec && (
                    <li key={sec.key}>
                      <a href={`#section-${sec.key}`}>{sec.heading}</a>
                      <ol className="tag-toc-sublist">
                        {sec.spots.map((s) => (
                          <li key={s.slug}>
                            <a href={`#spot-${s.slug}`}>{s.name}</a>
                          </li>
                        ))}
                      </ol>
                    </li>
                  )
              )}
              {content.mapEmbed && (
                <li>
                  <a href="#map">{content.mapEmbed.heading}</a>
                </li>
              )}
              {content.faqs && content.faqs.length > 0 && (
                <li>
                  <a href="#faq">{l.faqLink}</a>
                </li>
              )}
            </ol>
          </nav>

          {/* セクション */}
          {content.sections.map((section) => {
            const sectionSpots = section.spotSlugs
              .map((slug) => spotMap.get(slug))
              .filter((s): s is SpotWithRelations => !!s);

            if (sectionSpots.length === 0) return null;

            return (
              <section key={section.key} id={`section-${section.key}`} aria-labelledby={`heading-${section.key}`}>
                <div className="tag-spot-section-header">
                  <h2 className="tag-section-heading" id={`heading-${section.key}`}>{section.heading}</h2>
                  <p className="tag-section-intro">{section.intro}</p>
                </div>

                {sectionSpots.map((spot) => {
                  const desc =
                    content.descriptions[spot.slug] ?? spot.lead ?? "";
                  return (
                    <div key={spot.id} id={`spot-${spot.slug}`}>
                      <TagSpotCard spot={spot} description={desc} locale={locale} />
                    </div>
                  );
                })}
              </section>
            );
          })}

          {/* マップ */}
          {content.mapEmbed && (
            <section id="map" className="content-card card-padding" aria-labelledby="map-heading">
              <h2 className="tag-section-heading" id="map-heading">
                {content.mapEmbed.heading}
              </h2>
              <p className="tag-section-intro">{content.mapEmbed.intro}</p>
              <div
                className="tag-map-embed"
                dangerouslySetInnerHTML={{ __html: content.mapEmbed.iframeHtml }}
              />
            </section>
          )}

          {/* FAQ */}
          {content.faqs && content.faqs.length > 0 && (
            <SpotFaq
              faqs={content.faqs}
              heading={l.faqHeading(tagName)}
            />
          )}
        </article>

        {/* ItemList JSON-LD */}
        {allResolvedSpots.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildItemListJsonLd(allResolvedSpots)),
            }}
          />
        )}

        {/* FAQPage JSON-LD */}
        {content.faqs && content.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildFaqJsonLd(content.faqs)),
            }}
          />
        )}
      </div>
    </div>
  );
}
