import {
  PenLine,
  Camera,
  Info,
  CircleHelp,
  Train,
  Clock,
  MessageCircle,
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SpotHero from "@/components/spot/SpotHero";
import SpotOverview from "@/components/spot/SpotOverview";
import SpotGallery from "@/components/spot/SpotGallery";
import SpotRating from "@/components/spot/SpotRating";
import SpotInfo from "@/components/spot/SpotInfo";
import SpotAccess from "@/components/spot/SpotAccess";
import SpotFaq from "@/components/spot/SpotFaq";
import SpotHotel from "@/components/spot/SpotHotel";
import SpotEvent from "@/components/spot/SpotEvent";
import SpotBestTime from "@/components/spot/SpotBestTime";
import SpotReview from "@/components/spot/SpotReview";
import SpotRelated from "@/components/spot/SpotRelated";
import SpotShare from "@/components/spot/SpotShare";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import type { SpotWithRelations, SpotListItem } from "@/lib/types";
import { SITE_URL, LOCALE_LABELS } from "@/lib/types";
import type { ComponentLabels } from "@/lib/i18n-labels";

type Props = {
  spot: SpotWithRelations;
  labels: ComponentLabels;
  currentLocale: string | null;
  categorySlug: string;
  spotSlug: string;
  availableLocales: string[];
  showReview?: boolean;
  relatedSpots?: SpotListItem[];
};

/** JSON-LD 構造化データを生成 */
function buildJsonLd(spot: SpotWithRelations, canonicalUrl: string) {
  const name = spot.name || spot.title;

  const images = [
    spot.featured_image,
    ...spot.images.map((img) => img.url),
  ].filter(Boolean);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attraction: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    url: canonicalUrl,
    ...(spot.lead && { description: spot.lead }),
    ...(images.length > 0 && { image: images }),
    ...(spot.published_at && { datePublished: spot.published_at }),
    ...(spot.updated_at && { dateModified: spot.updated_at }),
  };

  if (spot.address) {
    attraction.address = {
      "@type": "PostalAddress",
      addressLocality: spot.address,
    };
  }

  if (spot.latitude != null && spot.longitude != null) {
    attraction.geo = {
      "@type": "GeoCoordinates",
      latitude: spot.latitude,
      longitude: spot.longitude,
    };
  }

  if (spot.hours) {
    attraction.openingHours = spot.hours;
  }

  // 独自4項目の評価を集約
  const ratingValues = [
    spot.rating_beautiful,
    spot.rating_access,
    spot.rating_atmosphere,
    spot.rating_cost,
  ].filter((v): v is number => v != null);

  if (ratingValues.length > 0) {
    const avg = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;
    attraction.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: Math.round(avg * 10) / 10,
      bestRating: 5,
      worstRating: 1,
      ratingCount: ratingValues.length,
    };
  }

  // 口コミ
  if (spot.reviews.length > 0) {
    attraction.review = spot.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      name: r.title,
      reviewBody: r.content,
      datePublished: r.created_at,
    }));
  }

  const schemas = [attraction];

  // FAQPage
  if (spot.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: spot.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}

export default function SpotArticle({
  spot,
  labels,
  currentLocale,
  categorySlug,
  spotSlug,
  availableLocales,
  showReview = true,
  relatedSpots = [],
}: Props) {
  const al = labels.anchor;
  const fl = labels.footer;
  const spotName = spot.name || spot.title;
  const seoTitle = labels.seoH1(spotName);
  const imageAlt = labels.heroImageAlt(spotName);

  const canonicalUrl = currentLocale
    ? `${SITE_URL}/${currentLocale}/${categorySlug}/${spotSlug}`
    : `${SITE_URL}/${categorySlug}/${spotSlug}`;

  const jsonLdSchemas = buildJsonLd(spot, canonicalUrl);

  const anchorLinks = [
    { id: "report", label: al.report, icon: PenLine, show: !!spot.report },
    { id: "gallery", label: al.gallery, icon: Camera, show: spot.images.length > 0 },
    { id: "info", label: al.info, icon: Info, show: true },
    { id: "access", label: al.access, icon: Train, show: !!(spot.station || spot.parking || spot.map) },
    { id: "besttime", label: al.besttime, icon: Clock, show: true },
    ...(showReview ? [{ id: "review", label: al.review, icon: MessageCircle, show: true }] : []),
    { id: "faq", label: al.faq, icon: CircleHelp, show: spot.faqs.length > 0 },
  ].filter((link) => link.show);

  return (
    <div className="l-article-body">
      <DevEditLink spotId={spot.id} />
      <div className="l-article-container">
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <Breadcrumb
          locale={currentLocale}
          items={[
            {
              label: spot.category.name,
              href: currentLocale
                ? `/${currentLocale}/${spot.category.slug}`
                : `/${spot.category.slug}`,
            },
            { label: spotName },
          ]}
        />

        <LanguageSwitcher
          currentLocale={currentLocale}
          categorySlug={categorySlug}
          spotSlug={spotSlug}
          availableLocales={availableLocales}
          localeLabels={LOCALE_LABELS}
        />

        <article
          itemScope
          itemType="https://schema.org/TouristAttraction"
        >
          <SpotHero
            seoTitle={seoTitle}
            visualTitle={spot.name}
            featuredImage={spot.featured_image}
            imageAlt={imageAlt}
          />

          <SpotRating
            name={spot.name}
            categoryName={spot.category.name}
            lead={spot.lead}
            beautiful={spot.rating_beautiful}
            access={spot.rating_access}
            atmosphere={spot.rating_atmosphere}
            cost={spot.rating_cost}
            labels={labels.rating}
          />

          {anchorLinks.length > 1 && (
            <nav className="anchor-nav" aria-label={al.navAriaLabel}>
              {anchorLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.id} href={`#${link.id}`} className="anchor-btn">
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </nav>
          )}

          <SpotOverview spotName={spot.name} report={spot.report} labels={labels.overview} />

          <SpotGallery images={spot.images} spotName={spot.name} heading={labels.gallery.heading(spot.name)} />

          {spot.movie && (
            <section className="content-card card-padding" id="movie" aria-labelledby="movie-heading">
              <h2 id="movie-heading">
                <span className="heading-icon">
                  <Camera size={18} aria-hidden="true" />
                </span>
                {labels.movie.heading}
              </h2>
              <div
                className="video-container"
                dangerouslySetInnerHTML={{ __html: spot.movie }}
              />
            </section>
          )}

          <SpotInfo
            spotName={spot.name}
            address={spot.address}
            hours={spot.hours}
            holiday={spot.holiday}
            money={spot.money}
            height={spot.height}
            officialUrl={spot.official_url}
            officialLabel={spot.official_label}
            snsUrl={spot.sns_url}
            snsLabel={spot.sns_label}
            relationUrl={spot.relation_url}
            relationLabel={spot.relation_label}
            tags={spot.tags}
            labels={labels.info}
            asoview={spot.asoview}
            asoview02={spot.asoview_02}
            localeSlug={currentLocale}
          />

          <SpotAccess
            station={spot.station}
            parking={spot.parking}
            map={spot.map}
            labels={labels.access}
          />

          <SpotBestTime
            spotName={spot.name}
            latitude={spot.latitude}
            longitude={spot.longitude}
            labels={labels.bestTime}
          />

          {showReview && (
            <SpotReview
              spotName={spot.name}
              reviews={spot.reviews}
              labels={labels.review}
            />
          )}

          <SpotFaq faqs={spot.faqs} labels={labels.faq} />

          <footer className="article-footer-meta" itemProp="author" itemScope itemType="https://schema.org/Person">
            <span className="meta-author">
              <span className="meta-author-icon">
                <Camera size={14} aria-hidden="true" />
              </span>
              <strong itemProp="name">{fl.author}</strong>
            </span>
            <span className="meta-separator" aria-hidden="true">|</span>
            <span className="meta-desc">
              {fl.desc}
            </span>
            <span className="meta-separator" aria-hidden="true">|</span>
            <span className="meta-dates">
              <span className="meta-date">
                <span className="meta-date-label">{fl.updated}</span>
                <time dateTime={spot.updated_at}>
                  {new Date(spot.updated_at).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, "/")}
                </time>
              </span>
            </span>
          </footer>

          <SpotShare
            url={canonicalUrl}
            title={seoTitle}
            labels={labels.share}
          />

          <SpotRelated
            spots={relatedSpots}
            areaName={spot.category.name}
            labels={labels.related}
            localeSlug={currentLocale}
          />

          <SpotHotel hotel={spot.hotel} />

          <SpotEvent event={spot.event} />
        </article>
      </div>
    </div>
  );
}
