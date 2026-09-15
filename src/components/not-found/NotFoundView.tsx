import { category } from "next/root-params";
import Link from "@/components/common/AppLink";
import SpotsGrid from "@/components/common/SpotsGrid";
import AreaSearch from "@/components/home/AreaSearch";
import {
  getTopSpots,
  getTopSpotsTranslated,
  getAreas,
  getAreasTranslated,
} from "@/lib/supabase/queries";
import { getComponentLabels } from "@/lib/i18n-labels";
import { ALL_LOCALE_SLUGS, SITE_NAMES } from "@/lib/types";
import NotFoundTitle from "./NotFoundTitle";

type Props = {
  /**
   * 省略時は next/root-params の [category] から判定する（not-found.tsx は params を受け取れないため）。
   * global-not-found のようにルートの外で描くときは null（日本語）を明示する。
   */
  locale?: string | null;
};

/**
 * 404 ページの本体。行き止まりにせず、人気スポットとエリア一覧から探し直せるようにする。
 * ヘッダー・フッターは置き場所（各レイアウト / global-not-found）側が持つ。
 */
export default async function NotFoundView({ locale: localeProp }: Props) {
  const locale = localeProp !== undefined ? localeProp : await resolveLocale();
  const labels = getComponentLabels(locale ?? "ja");
  const l = labels.notFound;
  const localeSlug = locale ?? undefined;

  const [spots, areas] = await Promise.all([
    (locale ? getTopSpotsTranslated(locale, 6) : getTopSpots(6)).catch(() => []),
    (locale ? getAreasTranslated(locale) : getAreas()).catch(() => []),
  ]);

  const siteName = locale ? SITE_NAMES[locale] ?? SITE_NAMES.en : "東京夜景ナビ";

  return (
    <>
      <NotFoundTitle title={`${l.title} | ${siteName}`} />
      <section className="not-found-hero" aria-labelledby="not-found-title">
        <p className="not-found-code">404</p>
        <h1 id="not-found-title" className="not-found-title">{l.title}</h1>
        <p className="not-found-desc">{l.desc}</p>
        <Link href={locale ? `/${locale}/` : "/"} className="home-more-link">
          {l.button}
        </Link>
      </section>

      {spots.length > 0 && (
        <section className="home-section">
          <div className="home-container">
            <h2 className="home-section-heading">{l.popularHeading}</h2>
            <SpotsGrid spots={spots} localeSlug={localeSlug} closedBadge={labels.closedBadge} />
          </div>
        </section>
      )}

      <AreaSearch areas={areas} labels={labels.homePage.areaSearch} localeSlug={localeSlug} />
    </>
  );
}

/** (site)/[category]・(i18n)/[category] では [category] がロケールかエリア slug。(ja) 配下には無い */
async function resolveLocale(): Promise<string | null> {
  const c = await category();
  return c && ALL_LOCALE_SLUGS.includes(c) ? c : null;
}

/** not-found.tsx の generateMetadata 用。title はレイアウトのテンプレートで「| サイト名」が付く */
export async function notFoundTitle(): Promise<string> {
  return getComponentLabels((await resolveLocale()) ?? "ja").notFound.title;
}
