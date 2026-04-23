import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import TagArticle from "@/components/tag/TagArticle";
import RecommendCta from "@/components/common/RecommendCta";
import SpotShare from "@/components/spot/SpotShare";
import TagMapSection from "@/components/tag/TagMapSection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import AreaSpotList from "@/components/area/AreaSpotList";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import { getTagBySlug, getSpotsByTagSlug, getSpotsBySlugs, getSpotListByTagSlug, getTagPageBySlug, getAvailableTagPageLocales, getMapSpotsByTag } from "@/lib/supabase/queries";
import { SITE_URL, calcRatingAvg, LOCALE_LABELS, OG_LOCALE_MAP, ALL_LOCALE_SLUGS, buildTagHreflangAlternates } from "@/lib/types";
import { getComponentLabels } from "@/lib/i18n-labels";
import type { SpotListItem, SpotWithRelations } from "@/lib/types";
import { tagPageContents, dummyTagSpots } from "@/lib/dummy-tag-data";
import type { TagPageContent } from "@/lib/dummy-tag-data";


/** スラッグ別の関連外部リンク */
function getTagExternalLinks(slug: string): ReactNode[] | undefined {
  if (slug === "rainbow-bridge") {
    return [
      <a key="1" href="https://www.navikuru.jp/" target="_blank" rel="noopener noreferrer">ナビクル</a>,
      <a key="2" href="https://www.hanamaru870.net/" target="_blank" rel="noopener noreferrer">はなまる870</a>,
      <a key="3" href="https://www.jackery.jp/pages/jackery-power-station" target="_blank" rel="noopener noreferrer">Jackery ポータブル電源</a>,
    ];
  }
  if (slug === "date") {
    return [
      <span key="1">特別な日を清潔感のある装いでより華やかに過ごすなら<a href="https://www.global-style.jp/" target="_blank" rel="noopener noreferrer">オーダースーツのGlobal Style</a>。約5,000種類の生地から選べる本格スーツを、1着2万円台〜と手頃な価格で提供しています。</span>,
      <span key="2"><a href="https://hana-yume.net/pref/tokyo/" target="_blank" rel="noopener noreferrer">東京の結婚式場</a>を探すなら花嫁の夢を叶える結婚式場探しサイト「<a href="https://hana-yume.net/" target="_blank" rel="noopener noreferrer">ハナユメ</a>」がおすすめ</span>,
    ];
  }
  return undefined;
}

/** シンプルタグ一覧ページ用FAQを自動生成 */
function generateSimpleTagFaq(
  tagName: string,
  spots: SpotListItem[]
): { question: string; answer: string }[] {
  if (spots.length === 0) return [];

  const faqs: { question: string; answer: string }[] = [];
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  const topSpot = sorted[0];

  faqs.push({
    question: `「${tagName}」の夜景スポットはいくつありますか？`,
    answer: `当サイトでは「${tagName}」に関連する夜景スポットを${spots.length}件掲載しています。各スポットの詳細ページでは実際に訪れた際の写真や感想をご覧いただけます。`,
  });

  faqs.push({
    question: `「${tagName}」で一番おすすめの夜景スポットは？`,
    answer: `${topSpot.name}が当サイトの評価で最も高く、平均${topSpot.rating_avg.toFixed(1)}点（5点満点）です。`,
  });

  if (sorted.length >= 3) {
    const top3 = sorted.slice(0, 3);
    const top3Names = top3.map((s, i) => `${i + 1}位「${s.name}」（${s.rating_avg.toFixed(1)}点）`).join("、");
    faqs.push({
      question: `「${tagName}」の夜景スポットランキングTOP3は？`,
      answer: `「${tagName}」の夜景スポットランキングTOP3は、${top3Names}です。`,
    });
  }

  return faqs;
}

type Props = {
  params: Promise<{ slug: string }>;
};

/** DB の TagPageWithRelations → TagPageContent に変換 */
function dbToContent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dbPage: any
): TagPageContent {
  const descriptions: Record<string, string> = {};
  const sections = (dbPage.sections ?? []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s: any) => {
      const spotSlugs: string[] = [];
      for (const sp of s.spots ?? []) {
        const slug = sp.spot?.slug;
        if (slug) {
          spotSlugs.push(slug);
          if (sp.description) {
            descriptions[slug] = sp.description;
          }
        }
      }
      return {
        key: s.key,
        heading: s.heading,
        intro: s.intro ?? "",
        spotSlugs,
      };
    }
  );

  return {
    title: dbPage.title,
    breadcrumb: dbPage.breadcrumb,
    heroImage: dbPage.hero_image ?? undefined,
    updatedAt: dbPage.updated_at_label ?? "",
    prNotice: dbPage.pr_notice ?? "",
    lead: dbPage.lead,
    prBanner: dbPage.pr_banner
      ? {
          heading: dbPage.pr_banner.heading,
          image: dbPage.pr_banner.image ?? "",
          body: dbPage.pr_banner.body ?? [],
          links: (dbPage.pr_banner.links ?? []).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (l: any) => ({ label: l.label, href: l.href })
          ),
        }
      : undefined,
    sections,
    descriptions,
    mapEmbed: dbPage.map_heading
      ? {
          heading: dbPage.map_heading,
          intro: dbPage.map_intro ?? "",
          iframeHtml: dbPage.map_iframe_html ?? "",
        }
      : undefined,
    faqs:
      dbPage.faqs?.length > 0
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dbPage.faqs.map((f: any) => ({
            question: f.question,
            answer: f.answer,
          }))
        : undefined,
  };
}

/** SpotWithRelations → SpotListItem 変換 */
function toListItem(s: SpotWithRelations): SpotListItem {
  return {
    id: s.id,
    slug: s.slug,
    name: s.name || s.title,
    featured_image: s.featured_image || "",
    category: s.category ? { slug: s.category.slug, name: s.category.name } : { slug: "", name: "" },
    rating_avg: calcRatingAvg(s),
    rating_beautiful: s.rating_beautiful ?? null,
    rating_access: s.rating_access ?? null,
    rating_atmosphere: s.rating_atmosphere ?? null,
    rating_cost: s.rating_cost ?? null,
    lead: s.lead || "",
    closed: s.closed ?? false,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // DB first, then dummy fallback
  const dbPage = await getTagPageBySlug(slug);
  const content = dbPage ? dbToContent(dbPage) : tagPageContents[slug];

  // リッチコンテンツがある場合
  if (content) {
    const tagDescription = content.lead.split("\n")[0];
    const canonicalUrl = `${SITE_URL}/tag/${slug}/`;
    const heroImage = content.heroImage;
    const availableLocales = await getAvailableTagPageLocales(slug);

    return {
      title: content.title,
      description: tagDescription,
      openGraph: {
        type: "article",
        title: content.title,
        description: tagDescription,
        url: canonicalUrl,
        siteName: "nightscape.tokyo",
        locale: "ja_JP",
        alternateLocale: availableLocales.map((s) => OG_LOCALE_MAP[s]).filter(Boolean),
        publishedTime: dbPage?.created_at ?? dbPage?.updated_at ?? undefined,
        modifiedTime: dbPage?.updated_at ?? undefined,
        images: heroImage
          ? [{ url: heroImage, width: 1200, height: 630, alt: content.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: content.title,
        description: tagDescription,
        images: heroImage ? [heroImage] : undefined,
      },
      alternates: {
        canonical: canonicalUrl,
        languages: availableLocales.length > 0
          ? buildTagHreflangAlternates(SITE_URL, slug, availableLocales)
          : undefined,
      },
    };
  }

  // シンプル一覧ページ用メタデータ
  const [tag, simpleSpots] = await Promise.all([
    getTagBySlug(slug),
    getSpotsByTagSlug(slug),
  ]);
  if (!tag) return {};

  const title = `${tag.name}の夜景スポット一覧`;
  const canonicalUrl = `${SITE_URL}/tag/${slug}/`;
  const topSpot = [...simpleSpots].sort((a, b) => calcRatingAvg(b) - calcRatingAvg(a))[0];
  const heroImage = topSpot?.featured_image || undefined;

  return {
    title,
    description: `「${tag.name}」に関連する夜景スポットの一覧です。各スポットの詳細ページでは実際に訪問した感想や写真を掲載しています。`,
    openGraph: {
      type: "website",
      title,
      description: `「${tag.name}」に関連する夜景スポットの一覧です。`,
      url: canonicalUrl,
      siteName: "nightscape.tokyo",
      locale: "ja_JP",
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: heroImage ? [heroImage] : undefined,
    },
    alternates: { canonical: canonicalUrl },
  };
}

export const revalidate = 86400;
export const fetchCache = "force-cache";

export default async function TagPage({ params }: Props) {
  const { slug } = await params;

  // DB first, then dummy fallback
  const dbPage = await getTagPageBySlug(slug);
  const content = dbPage ? dbToContent(dbPage) : tagPageContents[slug];

  // ── リッチコンテンツがある場合: 従来の TagArticle を表示 ──
  if (content) {
    // DB から取得した場合でも、descriptions が空のスポットにはダミーデータの記述をフォールバック
    const dummyContent = tagPageContents[slug];
    if (dbPage && dummyContent) {
      for (const [spotSlug, desc] of Object.entries(dummyContent.descriptions)) {
        if (!content.descriptions[spotSlug]) {
          content.descriptions[spotSlug] = desc;
        }
      }
      if (!content.serviceSection && dummyContent.serviceSection) {
        content.serviceSection = dummyContent.serviceSection;
      }
    }

    // セクション内のスポットslugsからスポットデータを取得
    const allSpotSlugs = content.sections.flatMap((s) => s.spotSlugs);

    const [tag, spotsBySlugs, otherSpots, , mapSpots] = await Promise.all([
      getTagBySlug(slug),
      allSpotSlugs.length > 0 ? getSpotsBySlugs(allSpotSlugs) : Promise.resolve([]),
      getSpotListByTagSlug(slug, allSpotSlugs),
      getAvailableTagPageLocales(slug),
      getMapSpotsByTag(slug),
    ]);

    // DB に存在しないスポットはダミーデータからフォールバック
    const dbSlugs = new Set(spotsBySlugs.map((s) => s.slug));
    const missingSlugs = allSpotSlugs.filter((s) => !dbSlugs.has(s));
    const dummySpots = dummyTagSpots[slug] ?? [];
    const fallbackSpots = missingSlugs.length > 0
      ? dummySpots.filter((s) => missingSlugs.includes(s.slug))
      : [];
    const allSpots = [...spotsBySlugs, ...fallbackSpots];

    const tagName = tag?.name ?? slug;

    return (
      <>
        {dbPage && <DevEditLink href={`/admin/tag-pages/${dbPage.id}/edit`} />}
        <LanguageSwitcher
          currentLocale={null}
          categorySlug={`tag/${slug}`}
          availableLocales={ALL_LOCALE_SLUGS}
          localeLabels={LOCALE_LABELS}
        />
        <TagArticle
          tagName={tagName}
          content={content}
          allSpots={allSpots}
          otherSpots={otherSpots}
          mapSpots={mapSpots}
          spotHeadingLevel="h3"
          shareUrl={`${SITE_URL}/tag/${slug}`}
          externalLinks={getTagExternalLinks(slug)}
        />
      </>
    );
  }

  // ── リッチコンテンツがない場合: シンプルなスポット一覧を表示 ──
  const [tag, spotsByTag, simpleMapSpots] = await Promise.all([
    getTagBySlug(slug),
    getSpotsByTagSlug(slug),
    getMapSpotsByTag(slug),
  ]);

  if (!tag) notFound();

  const tagName = tag.name;
  const spots: SpotListItem[] = spotsByTag.map(toListItem);

  // 自動FAQ生成
  const faqs = generateSimpleTagFaq(tagName, spots);

  // ItemList JSON-LD
  const itemListJsonLd = spots.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [...spots]
          .sort((a, b) => b.rating_avg - a.rating_avg)
          .map((spot, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/${spot.category.slug}/${spot.slug}`,
            name: spot.name,
            ...(spot.featured_image && { image: spot.featured_image }),
          })),
      }
    : null;

  // FAQPage JSON-LD
  const faqJsonLd = faqs.length > 0
    ? {
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
      }
    : null;

  return (
    <>
      <LanguageSwitcher
        currentLocale={null}
        categorySlug={`tag/${slug}`}
        availableLocales={ALL_LOCALE_SLUGS}
        localeLabels={LOCALE_LABELS}
      />
    <div className="l-article-body" itemScope itemType="https://schema.org/CollectionPage">
      <meta itemProp="name" content={`${tagName}の夜景スポット一覧`} />
      <link itemProp="url" href={`${SITE_URL}/tag/${slug}`} />
      <div className="l-article-container">
        <Breadcrumb items={[{ label: `${tagName}の夜景スポット一覧` }]} />

        <header className="content-card card-padding">
          <h1 className="area-page-heading">
            {tagName}の夜景スポット一覧
          </h1>
          <p className="area-page-lead" itemProp="description">
            「{tagName}」に関連する夜景スポットを{spots.length}件掲載しています。気になるスポットをチェックしてみてください。
          </p>
          <Link href="/" className="content-top-link">東京都内の夜景情報一覧</Link>
        </header>

        {spots.length === 0 ? (
          <p className="area-page-empty">
            このタグにはまだ夜景スポットが登録されていません。
          </p>
        ) : (
          <section aria-labelledby="spotlist-heading">
            <h2 className="visually-hidden" id="spotlist-heading">{tagName}の夜景スポット</h2>
            <AreaSpotList spots={spots} />
          </section>
        )}

        {/* マップ */}
        {simpleMapSpots.length > 0 && (
          <TagMapSection
            spots={simpleMapSpots}
            heading={`${tagName}の夜景スポットを地図から探す`}
          />
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="content-card card-padding area-faq" id="faq" aria-labelledby="faq-heading">
            <h2 className="area-section-heading" id="faq-heading">{tagName}の夜景スポットに関するFAQ</h2>
            <dl className="area-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <dt className="faq-q">{faq.question}</dt>
                  <dd className="faq-a">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <RecommendCta locale={null} />
        <SpotShare
          url={`${SITE_URL}/tag/${slug}`}
          title={`${tagName}の夜景スポット一覧`}
          labels={getComponentLabels("ja").share}
        />

        {/* ItemList JSON-LD */}
        {itemListJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
          />
        )}

        {/* FAQPage JSON-LD */}
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
      </div>
    </div>
    </>
  );
}
