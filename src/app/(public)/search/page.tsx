import type { Metadata } from "next";
import { Search } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SearchResults from "@/components/search/SearchResults";
import { searchSpots } from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const l = getComponentLabels("ja").searchPage;
  const title = q ? l.heading(q) : l.headingDefault;
  return { title, robots: { index: false } };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const l = getComponentLabels("ja").searchPage;

  const spots = query
    ? await searchSpots(query, {
        spotName: l.fieldSpotName,
        address: l.fieldAddress,
        station: l.fieldStation,
        report: l.fieldReport,
        lead: l.fieldLead,
        tag: l.fieldTag,
        category: l.fieldCategory,
      }).catch(() => [])
    : [];

  const fieldCounts: Record<string, number> = {};
  for (const spot of spots) {
    for (const f of spot.matchedFields) {
      fieldCounts[f] = (fieldCounts[f] || 0) + 1;
    }
  }
  const matchedFieldNames = Object.keys(fieldCounts);

  return (
    <article className="home-section" style={{ paddingTop: 0 }}>
      <div className="home-container">
        <Breadcrumb items={[{ label: l.breadcrumb }]} />

        <h1
          className="home-section-heading"
          style={{ marginTop: 24, justifyContent: "flex-start" }}
        >
          <span className="heading-icon">
            <Search size={20} />
          </span>
          {query ? l.heading(query) : l.headingDefault}
        </h1>

        {query && spots.length > 0 && (
          <p className="home-section-desc" style={{ textAlign: "left" }}>
            {l.found(matchedFieldNames.join("・"), query, spots.length)}
          </p>
        )}

        {query && spots.length === 0 && (
          <p className="home-section-desc" style={{ textAlign: "left" }}>
            {l.notFound(query)}
          </p>
        )}

        {spots.length > 0 && (
          <SearchResults
            spots={spots}
            sortRatingLabel={l.sortRating}
            sortNameLabel={l.sortName}
            matchHitTemplate={l.matchHit("{fields}")}
            resultCountTemplate={l.resultCountTemplate}
          />
        )}
      </div>
    </article>
  );
}
