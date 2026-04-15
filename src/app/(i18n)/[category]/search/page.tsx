import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SearchResults from "@/components/search/SearchResults";
import { searchSpots } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";
import { ALL_LOCALE_SLUGS } from "@/lib/types";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category: localeSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) return {};
  const { q } = await searchParams;
  const l = getComponentLabels(localeSlug).searchPage;
  const title = q ? l.heading(q) : l.headingDefault;
  return { title, robots: { index: false } };
}

export default async function I18nSearchPage({ params, searchParams }: Props) {
  const { category: localeSlug } = await params;
  if (!ALL_LOCALE_SLUGS.includes(localeSlug)) notFound();

  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const l = getComponentLabels(localeSlug).searchPage;

  const spots = query
    ? await searchSpots(query, {
        spotName: l.fieldSpotName,
        address: l.fieldAddress,
        station: l.fieldStation,
        report: l.fieldReport,
        lead: l.fieldLead,
        tag: l.fieldTag,
        category: l.fieldCategory,
      }, localeSlug).catch(() => [])
    : [];

  const fieldCounts: Record<string, number> = {};
  for (const spot of spots) {
    for (const f of spot.matchedFields) {
      fieldCounts[f] = (fieldCounts[f] || 0) + 1;
    }
  }
  const matchedFieldNames = Object.keys(fieldCounts);

  return (
    <div className="l-article-body">
      <div className="l-article-container">
        <Breadcrumb items={[{ label: l.breadcrumb }]} locale={localeSlug} />

        <header className="content-card card-padding">
          <h1 className="area-page-heading">
            {query ? l.heading(query) : l.headingDefault}
          </h1>
          {query && spots.length > 0 && (
            <p className="area-page-lead">
              {l.found(matchedFieldNames.join("・"), query, spots.length)}
            </p>
          )}
          {query && spots.length === 0 && (
            <p className="area-page-lead">
              {l.notFound(query)}
            </p>
          )}
        </header>

        {spots.length > 0 && (
          <SearchResults
            spots={spots}
            localeSlug={localeSlug}
            sortRelevanceLabel={l.sortRelevance}
            sortRatingLabel={l.sortRating}
            sortNameLabel={l.sortName}
            matchHitTemplate={l.matchHit("{fields}")}
            resultCountTemplate={l.resultCountTemplate}
          />
        )}
      </div>
    </div>
  );
}
