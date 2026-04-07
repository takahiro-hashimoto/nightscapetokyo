import Breadcrumb from "@/components/layout/Breadcrumb";
import AreaSpotList from "@/components/area/AreaSpotList";
import AreaMapLoader from "@/components/map/AreaMapLoader";
import SetHtmlLang from "@/components/layout/SetHtmlLang";
import LanguageSwitcher from "@/components/spot/LanguageSwitcher";
import type { SpotListItem } from "@/lib/types";
import { SITE_URL, LOCALE_LABELS } from "@/lib/types";
import type { AreaPageLabels } from "@/lib/i18n-labels";
import type { MapSpotItem } from "@/lib/supabase/queries";

type Props = {
  localeSlug: string;
  categorySlug: string;
  areaName: string;
  spots: SpotListItem[];
  areaLabels: AreaPageLabels;
  availableLocales: string[];
  mapSpots?: MapSpotItem[];
};

/** FAQ自動生成 */
function generateAreaFaq(
  al: AreaPageLabels,
  areaName: string,
  spots: SpotListItem[]
): { question: string; answer: string }[] {
  if (spots.length === 0) return [];

  const faqs: { question: string; answer: string }[] = [];
  const sorted = [...spots].sort((a, b) => b.rating_avg - a.rating_avg);
  const topSpot = sorted[0];

  const q1 = al.faqSpotCount(areaName, spots.length);
  faqs.push({ question: q1.q, answer: q1.a });

  const q2 = al.faqTopSpot(
    areaName,
    topSpot.name,
    topSpot.rating_avg.toFixed(1),
    topSpot.lead || ""
  );
  faqs.push({ question: q2.q, answer: q2.a });

  if (sorted.length >= 3) {
    const top3 = sorted.slice(0, 3);
    const list = top3
      .map((s, i) => `${i + 1}. ${s.name} (${s.rating_avg.toFixed(1)})`)
      .join(", ");
    const q3 = al.faqTop3(areaName, list);
    faqs.push({ question: q3.q, answer: q3.a });
  }

  const q4 = al.faqDate(areaName, topSpot.name);
  faqs.push({ question: q4.q, answer: q4.a });

  // 無料スポットFAQ
  // lead に "free" / "無料" / "免费" / "免費" / "무료" が含まれるスポット名を抽出
  const freeKeywords = ["無料", "free", "免費", "免费", "무료"];
  const freeSpots = spots.filter((s) =>
    freeKeywords.some((kw) => (s.lead || "").toLowerCase().includes(kw))
  );
  const freeNames = freeSpots.length > 0
    ? freeSpots.slice(0, 5).map((s) => s.name).join(", ")
    : "";
  const q5 = al.faqFree(areaName, freeNames);
  faqs.push({ question: q5.q, answer: q5.a });

  // ベストタイムFAQ
  const q6 = al.faqBestTime(areaName);
  faqs.push({ question: q6.q, answer: q6.a });

  return faqs;
}

export default function TranslatedAreaContent({
  localeSlug,
  categorySlug,
  areaName,
  spots,
  areaLabels: al,
  availableLocales,
  mapSpots = [],
}: Props) {
  const faqs = generateAreaFaq(al, areaName, spots);

  const itemListJsonLd = spots.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [...spots]
      .sort((a, b) => b.rating_avg - a.rating_avg)
      .map((spot, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${localeSlug}/${categorySlug}/${spot.slug}`,
        name: spot.name,
        ...(spot.featured_image && { image: spot.featured_image }),
      })),
  } : null;

  const faqJsonLd = faqs.length > 0 ? {
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
  } : null;

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <SetHtmlLang locale={localeSlug} />
        <LanguageSwitcher
          currentLocale={localeSlug}
          categorySlug={categorySlug}
          availableLocales={availableLocales}
          localeLabels={LOCALE_LABELS}
        />
        <Breadcrumb items={[{ label: al.title(areaName) }]} locale={localeSlug} />

        <header className="content-card card-padding">
          <h1 className="area-page-heading">{al.title(areaName)}</h1>
          <p className="area-page-lead">{al.lead(areaName)}</p>
        </header>

        {spots.length === 0 ? (
          <p className="area-page-empty">
            No night view spots with translations available in this area yet.
          </p>
        ) : (
          <section aria-label={al.title(areaName)}>
            <AreaSpotList
              spots={spots}
              localeSlug={localeSlug}
              labels={{
                countText: al.count(spots.length),
                sortLabel: al.sortLabel,
                sortRating: al.sortRating,
                sortUpdated: al.sortUpdated,
              }}
              imageAltPattern={al.imageAlt("{name}")}
            />
          </section>
        )}

        {mapSpots.length > 0 && (
          <section className="content-card card-padding" id="map" aria-labelledby="map-heading">
            <h2 className="area-section-heading" id="map-heading">{al.mapHeading(areaName)}</h2>
            <AreaMapLoader
              spots={mapSpots}
              areaName={areaName}
              localeSlug={localeSlug}
              countLabel={al.mapCount(areaName, mapSpots.length)}
              nameOverrides={Object.fromEntries(spots.map((s) => [s.slug, s.name]))}
            />
          </section>
        )}

        {faqs.length > 0 && (
          <section className="content-card card-padding area-faq" aria-label="FAQ">
            <h2 className="area-section-heading">{al.faqHeading(areaName)}</h2>
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

        {itemListJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
          />
        )}

        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
      </div>
    </div>
  );
}
