import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PrBanner from "@/components/common/PrBanner";
import TagSpotCard from "@/components/tag/TagSpotCard";
import TagMapSection from "@/components/tag/TagMapSection";
import SpotsGrid from "@/components/common/SpotsGrid";
import AreaSpotList from "@/components/area/AreaSpotList";
import ExternalLinkCallout from "@/components/common/ExternalLinkCallout";
import SpotFaq from "@/components/spot/SpotFaq";
import SpotShare from "@/components/spot/SpotShare";
import HomeAuthorCard from "@/components/common/HomeAuthorCard";
import type { ReactNode } from "react";
import type { SpotWithRelations, SiteLocale, SpotListItem } from "@/lib/types";
import { SITE_URL, calcRatingAvg, LOCALE_SLUG_MAP } from "@/lib/types";
import { TAG_ARTICLE_LABELS, getComponentLabels } from "@/lib/i18n-labels";
import type { TagPageContent } from "@/lib/dummy-tag-data";
import type { MapSpotItem } from "@/lib/supabase/queries";


/** ItemList JSON-LD: スポットを評価順でリスト化 */
function buildItemListJsonLd(spots: SpotWithRelations[], locale = "ja", name?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    inLanguage: locale,
    ...(name && { name }),
    ...(description && { description }),
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
function buildFaqJsonLd(faqs: { question: string; answer: string }[], locale = "ja") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
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
  otherSpots?: SpotListItem[];
  mapSpots?: MapSpotItem[];
  locale?: string;
  spotHeadingLevel?: "h2" | "h3";
  shareUrl?: string;
  showRank?: boolean;
  externalLinks?: ReactNode[];
};

export default function TagArticle({ tagName, content, allSpots, otherSpots, mapSpots, locale, spotHeadingLevel = "h2", shareUrl, showRank, externalLinks }: Props) {
  const l = TAG_ARTICLE_LABELS[(locale ?? "ja") as SiteLocale] ?? TAG_ARTICLE_LABELS.ja;
  const bcp47Locale = locale ? (LOCALE_SLUG_MAP[locale] ?? locale) : "ja";
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

  const isSimple = content.sections.length === 0;

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb items={[{ label: isSimple ? l.simplePageTitle(tagName) : content.breadcrumb }]} locale={locale} />

        <article itemScope itemType="https://schema.org/Article">
          <div itemProp="author" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="nightscape.tokyo" />
            <meta itemProp="url" content="https://nightscape.tokyo" />
          </div>
          <meta itemProp="dateModified" content={isoDate} />

          {isSimple ? (
            /* シンプル一覧ヘッダー（日本語版シンプルページと同構造） */
            <header className="content-card card-padding">
              <h1 className="area-page-heading" itemProp="headline">{l.simplePageTitle(tagName)}</h1>
              <p className="area-page-lead" itemProp="description">
                {l.simplePageLead(tagName, otherSpots?.length ?? 0)}
              </p>
              <Link href={l.topLinkHref} className="content-top-link">{l.topLink}</Link>
            </header>
          ) : (
            <>
              {/* firstVisual: ヒーロー画像 + ヘッダー + リード文 */}
              <div className="firstVisual">
                {content.heroImage && (
                  <figure className="firstVisual-image" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
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
                <header className="firstVisual-header">
                  <h1 className="firstVisual-title" itemProp="headline">{content.title}</h1>
                  <div className="firstVisual-meta">
                    <time className="firstVisual-date" dateTime={isoDate} itemProp="datePublished">
                      {l.lastUpdated}: {content.updatedAt}
                    </time>
                    {(!locale || locale === "ja") && content.prNotice && <span className="firstVisual-badge">{content.prNotice}</span>}
                  </div>
                </header>
                <div className="firstVisual-body" itemProp="description">
                  {content.lead.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <Link href={l.topLinkHref} className="content-top-link">{l.topLink}</Link>
                  {(!locale || locale === "ja") && content.prBanner && (
                    <div className="mt-6">
                      <PrBanner
                        heading={content.prBanner.heading}
                        image={{ src: content.prBanner.image }}
                        paragraphs={content.prBanner.body}
                        links={content.prBanner.links.map((link, i) => ({
                          label: `▸ ${link.label}`,
                          href: link.href,
                          variant: i === 0 ? "filled" : "outline",
                          external: link.href.startsWith("http"),
                        }))}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* 目次 */}
              <nav className="toc content-card card-padding" aria-label={l.tocAriaLabel}>
                <p className="toc-title">{l.toc}</p>
                <ol className="toc-list">
                  {tocSections.map(
                    (sec) =>
                      sec && (
                        sec.heading ? (
                          <li key={sec.key}>
                            <a href={`#section-${sec.key}`}>{sec.heading}</a>
                            <ol className="toc-sublist">
                              {sec.spots.map((s) => (
                                <li key={s.slug}>
                                  <a href={`#spot-${s.slug}`}>{s.name}</a>
                                </li>
                              ))}
                            </ol>
                          </li>
                        ) : (
                          <Fragment key={sec.key}>
                            {sec.spots.map((s) => (
                              <li key={s.slug}>
                                <a href={`#spot-${s.slug}`}>{s.name}</a>
                              </li>
                            ))}
                          </Fragment>
                        )
                      )
                  )}
                  {otherSpots && otherSpots.length > 0 && (
                    <li>
                      <a href="#other-spots-heading">{l.otherSpotsHeading(tagName)}</a>
                    </li>
                  )}
                  {(content.mapEmbed || (mapSpots && mapSpots.length > 0)) && (
                    <li>
                      <a href="#map">{content.mapEmbed?.heading ?? l.mapHeading(tagName)}</a>
                    </li>
                  )}
                  {content.faqs && content.faqs.length > 0 && (
                    <li>
                      <a href="#faq">{l.faqLink}</a>
                    </li>
                  )}
                </ol>
              </nav>
            </>
          )}

          {/* セクション（render外でランクを事前計算し、render中のmutationを回避） */}
          {(() => {
            let rank = 0;
            return content.sections
              .map((section, sectionIndex) => {
                const seenIds = new Set<string>();
                const spots = section.spotSlugs
                  .map((slug) => spotMap.get(slug))
                  .filter((s): s is SpotWithRelations => {
                    if (!s || seenIds.has(s.id)) return false;
                    seenIds.add(s.id);
                    return true;
                  })
                  .map((spot, spotIndex) => ({
                    spot,
                    isFirst: sectionIndex === 0 && spotIndex === 0,
                    rank: ++rank,
                  }));
                return { section, spots };
              })
              .filter(({ spots }) => spots.length > 0)
              .map(({ section, spots }) => (
                <section key={section.key} id={`section-${section.key}`} {...(section.heading ? { "aria-labelledby": `heading-${section.key}` } : {})}>
                  {(section.heading || section.intro) && (
                    <div className="spot-section-header">
                      {section.heading && <h2 className="section-heading" id={`heading-${section.key}`}>{section.heading}</h2>}
                      {section.intro && <p className="section-intro">{section.intro}</p>}
                    </div>
                  )}
                  {spots.map(({ spot, isFirst, rank: spotRank }) => {
                    const desc = content.descriptions[spot.slug] ?? spot.lead ?? "";
                    return (
                      <div key={spot.id} id={`spot-${spot.slug}`}>
                        <TagSpotCard spot={spot} description={desc} locale={locale} headingLevel={spotHeadingLevel} priority={isFirst} rank={showRank ? spotRank : undefined} />
                      </div>
                    );
                  })}
                </section>
              ));
          })()}

          {/* その他のスポット */}
          {otherSpots && otherSpots.length > 0 && (
            isSimple ? (
              /* シンプルモード: 件数・ソート付き一覧（日本語版と同構造） */
              <section aria-labelledby="spotlist-heading">
                <h2 className="visually-hidden" id="spotlist-heading">{l.simplePageTitle(tagName)}</h2>
                <AreaSpotList
                  spots={otherSpots}
                  localeSlug={locale}
                  labels={{
                    countText: l.simpleCount(otherSpots.length),
                    sortLabel: l.sortLabel,
                    sortRating: l.sortRating,
                    sortUpdated: l.sortUpdated,
                    closedBadge: getComponentLabels(locale ?? "ja").closedBadge,
                  }}
                />
              </section>
            ) : (
              /* リッチモード: セクション見出し付き */
              <section aria-labelledby="other-spots-heading">
                <div className="spot-section-header">
                  <h2 className="section-heading" id="other-spots-heading">
                    {l.otherSpotsHeading(tagName)}
                  </h2>
                </div>
                <SpotsGrid spots={otherSpots} localeSlug={locale} closedBadge={getComponentLabels(locale ?? "ja").closedBadge} />
              </section>
            )
          )}

          {/* マップ */}
          {mapSpots && mapSpots.length > 0 && (
            <TagMapSection
              spots={mapSpots}
              heading={content.mapEmbed?.heading ?? l.mapHeading(tagName)}
              intro={content.mapEmbed?.intro}
              localeSlug={locale}
            />
          )}

          {/* FAQ */}
          {content.faqs && content.faqs.length > 0 && (
            <SpotFaq
              faqs={content.faqs}
              heading={content.faqHeading ?? l.faqHeading(tagName)}
            />
          )}

          {/* サービスセクション */}
          {content.serviceSection && (
            <section className="m-callout m-callout--muted m-callout--service">
              <span className="m-callout__label">{content.serviceSection.heading}</span>
              <dl className="m-callout__service-list">
                {content.serviceSection.items.map((item, i) => (
                  <Fragment key={i}>
                    <dt>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                    </dt>
                    <dd>{item.description}</dd>
                  </Fragment>
                ))}
              </dl>
            </section>
          )}

          {/* 関連リンク（ページ固有） */}
          {externalLinks && externalLinks.length > 0 && (
            <ExternalLinkCallout items={externalLinks} />
          )}

          <HomeAuthorCard locale={locale ?? "ja"} />

          {shareUrl && (
            <SpotShare
              url={shareUrl}
              title={content.title}
              labels={getComponentLabels(locale ?? "ja").share}
              locale={locale ?? "ja"}
            />
          )}
        </article>

        {/* ItemList JSON-LD */}
        {allResolvedSpots.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildItemListJsonLd(allResolvedSpots, bcp47Locale, content.title, content.lead)),
            }}
          />
        )}

        {/* FAQPage JSON-LD */}
        {content.faqs && content.faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildFaqJsonLd(content.faqs, bcp47Locale)),
            }}
          />
        )}
      </div>
    </div>
  );
}
