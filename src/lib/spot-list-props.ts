import type { SpotListItem } from "@/lib/types";

/*
 * AreaSpotList（"use client"）へ渡すスポット一覧 props の整形。
 *
 * クライアントコンポーネントの props は RSC ペイロード（self.__next_f.push）へ
 * そのままシリアライズされ、プリレンダー済み HTML に同梱される。SpotListItem を
 * 丸ごと渡すと、カードに表示しない4軸評価や、翻訳版では描画しない住所・駅名まで
 * 全件分が HTML に載るため、サーバー側でカード描画と並び替えに使う値だけに絞る。
 */

/** 4軸評価（microdata の ratingCount を数えるためだけに使う） */
type RatingAxes = Pick<
  SpotListItem,
  "rating_beautiful" | "rating_access" | "rating_atmosphere" | "rating_cost"
>;

/**
 * AreaSpotList が1件ごとに参照するフィールド。
 * - address / station_names は日本語版（localeSlug なし）でしか描画しないため省略可
 * - rating_count は4軸評価を事前集計した値。未整形の SpotListItem をそのまま渡す
 *   既存の呼び出し元（イベントページ等）との互換のため、4軸評価そのものも受け付ける
 */
export type SpotListCardItem = Pick<
  SpotListItem,
  "id" | "slug" | "name" | "featured_image" | "category" | "rating_avg" | "lead" | "closed" | "updated_at"
> &
  Partial<Pick<SpotListItem, "address" | "station_names">> &
  Partial<RatingAxes> & {
    rating_count?: number;
  };

/** microdata の ratingCount：値のある評価軸の数（1件もなければ 1）。AreaSpotList の従来ロジックと同一 */
export function countRatingAxes(spot: Partial<RatingAxes>): number {
  return (
    [spot.rating_beautiful, spot.rating_access, spot.rating_atmosphere, spot.rating_cost].filter(
      (v) => v != null
    ).length || 1
  );
}

/**
 * SpotListItem[] を AreaSpotList 用の最小限の props に変換する。
 * @param options.localized AreaSpotList に localeSlug を渡すページなら true（住所・駅名を省く）
 */
export function toSpotListCardItems(
  spots: SpotListItem[],
  options: { localized?: boolean } = {}
): SpotListCardItem[] {
  return spots.map((s) => {
    const item: SpotListCardItem = {
      id: s.id,
      slug: s.slug,
      name: s.name,
      featured_image: s.featured_image,
      // クエリによっては category に余分な列が付くため、描画に使う2項目だけ詰め直す
      category: { slug: s.category.slug, name: s.category.name },
      rating_avg: s.rating_avg,
      rating_count: countRatingAxes(s),
      lead: s.lead,
    };
    // RSC は undefined の値も "$undefined" として書き出すため、
    // 省略しても AreaSpotList の判定（closed ?? false / updated_at ?? id）が変わらないキーは代入しない
    if (s.closed) item.closed = true;
    if (s.updated_at != null) item.updated_at = s.updated_at;
    if (!options.localized) {
      // 住所（町名バッジ）と最寄駅は日本語版のカードだけが描画する
      if (s.address) item.address = s.address;
      if (s.station_names) item.station_names = s.station_names;
    }
    return item;
  });
}
