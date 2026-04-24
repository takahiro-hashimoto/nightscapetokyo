import {
  PenLine,
  Camera,
  Info,
  CircleHelp,
  Train,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { sanitizeHtml } from "@/lib/sanitize";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SpotHero from "@/components/spot/SpotHero";
import SpotOverview from "@/components/spot/SpotOverview";
import SpotGallery from "@/components/spot/SpotGallery";
import SpotRating from "@/components/spot/SpotRating";
import SpotInfo from "@/components/spot/SpotInfo";
import SpotAccess from "@/components/spot/SpotAccess";
import SpotFaq from "@/components/spot/SpotFaq";
import SpotBestTime from "@/components/spot/SpotBestTime";
import RecommendCta from "@/components/common/RecommendCta";

import SpotRelated from "@/components/spot/SpotRelated";
import SpotShare from "@/components/spot/SpotShare";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import DevEditLink from "@/components/layout/DevEditLink";
import type { SpotWithRelations, SpotListItem } from "@/lib/types";
import { SITE_URL, LOCALE_LABELS, LOCALE_SLUG_MAP } from "@/lib/types";
import type { ComponentLabels } from "@/lib/i18n-labels";
import { buildSpotJsonLd } from "@/lib/spot-json-ld";
import AdSenseUnit from "@/components/ads/AdSenseUnit";
import { ADS } from "@/lib/ads";

type Props = {
  spot: SpotWithRelations;
  labels: ComponentLabels;
  currentLocale: string | null;
  categorySlug: string;
  spotSlug: string;
  availableLocales: string[];
  isRecommended?: boolean;
  relatedSpots?: SpotListItem[];
};

export default function SpotArticle({
  spot,
  labels,
  currentLocale,
  categorySlug,
  spotSlug,
  availableLocales,
  isRecommended = false,
  relatedSpots = [],
}: Props) {
  const al = labels.anchor;
  const fl = labels.footer;
  const spotName = spot.name || spot.title;
  const seoTitle = labels.seoH1(spotName);
  const imageAlt = labels.heroImageAlt(spotName);

  const canonicalUrl = currentLocale
    ? `${SITE_URL}/${currentLocale}/${categorySlug}/${spotSlug}/`
    : `${SITE_URL}/${categorySlug}/${spotSlug}/`;

  const bcp47Locale = currentLocale ? (LOCALE_SLUG_MAP[currentLocale] ?? currentLocale) : "ja";
  const jsonLdSchemas = buildSpotJsonLd(spot, canonicalUrl, bcp47Locale, categorySlug);

  const anchorLinks = [
    { id: "report", label: al.report, icon: PenLine, show: !!spot.report },
    { id: "gallery", label: al.gallery, icon: Camera, show: spot.images.length > 0 },
    { id: "info", label: al.info, icon: Info, show: true },
    { id: "access", label: al.access, icon: Train, show: !!(spot.station || spot.parking || spot.map) },
    { id: "besttime", label: al.besttime, icon: Clock, show: true },

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
                ? `/${currentLocale}/${spot.category.slug}/`
                : `/${spot.category.slug}/`,
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
            closed={spot.closed}
            isRecommended={isRecommended}
            closedBadge={labels.closedBadge}
          />

          <div className="article-meta" itemProp="author" itemScope itemType="https://schema.org/Person">
            <div className="meta-left">
              <span className="meta-date">
                <span className="meta-date-label">{fl.updated}：</span>
                <time dateTime={spot.updated_at}>
                  {new Date(spot.updated_at).toLocaleDateString(
                currentLocale === "en" ? "en-US"
                : currentLocale === "ko" ? "ko-KR"
                : currentLocale === "tw" ? "zh-TW"
                : currentLocale === "cn" ? "zh-CN"
                : "ja-JP",
                { year: "numeric", month: "2-digit", day: "2-digit" }
              )}
                </time>
              </span>
              <span className="meta-author">
                <span className="meta-date-label">{fl.authorLabel}：</span>
                <Link href={currentLocale ? `/${currentLocale}/about/` : "/about/"} itemProp="url"><span itemProp="name">{fl.author}</span></Link>
              </span>
            </div>
            {!currentLocale && (
              <div className="meta-right">
                <span className="meta-desc">
                  <Camera size={13} aria-hidden="true" />
                  {fl.desc}
                </span>
              </div>
            )}
          </div>

          <SpotRating
            name={spot.name}
            categoryName={spot.category.name}
            lead={spot.lead}
            beautiful={spot.rating_beautiful}
            access={spot.rating_access}
            atmosphere={spot.rating_atmosphere}
            cost={spot.rating_cost}
            closed={spot.closed}
            labels={labels.rating}
          />

          {anchorLinks.length > 1 && (
            <nav className="anchor-nav" aria-label={al.navAriaLabel}>
              <ul>
                {anchorLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a href={`#${link.id}`} className="anchor-btn">
                        <Icon size={16} aria-hidden="true" />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
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
                {labels.movie.heading(spotName)}
              </h2>
              <div
                className="video-container"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(spot.movie) }}
              />
              <div className="movie-timelapse-link">
                <Link href={currentLocale ? `/${currentLocale}/time-lapse/` : "/time-lapse/"}>
                  {labels.movie.timeLapseLink}
                </Link>
              </div>
            </section>
          )}

          <SpotInfo
            spotName={spot.name}
            address={spot.address && currentLocale ? `${spot.address}, Japan` : spot.address}
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
            categorySlug={categorySlug}
            categoryName={spot.category.name}
            hotel={spot.hotel}
            event={spot.event}
          />

          <SpotAccess
            station={spot.station}
            parking={spot.parking}
            map={spot.map}
            spotName={spotName}
            labels={labels.access}
          />

          <SpotBestTime
            spotName={spot.name}
            latitude={spot.latitude}
            longitude={spot.longitude}
            labels={labels.bestTime}
          />


<SpotFaq faqs={spot.faqs} labels={labels.faq} />

          <RecommendCta locale={currentLocale} />

          <SpotShare
            url={canonicalUrl}
            title={seoTitle}
            labels={labels.share}
            locale={currentLocale ?? "ja"}
          />
        </article>

        {/* 関連スポット一覧の直前：Multiplex 広告 */}
        <AdSenseUnit {...ADS.SPOT_MULTI} className="my-6" />

        <aside aria-label={labels.related.asideLabel}>
          <SpotRelated
            spots={relatedSpots}
            areaName={spot.category.name}
            areaSlug={spot.category.slug}
            labels={labels.related}
            localeSlug={currentLocale}
          />

        </aside>

      </div>
    </div>
  );
}
