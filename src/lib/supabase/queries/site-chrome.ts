import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getAreas, getAreasTranslated } from "./categories";
import { getPurposeTags } from "./tags";
import { getTotalSpotCount } from "./spots";
import { TAG_NAME } from "@/lib/constants";
import type { SiteLocale } from "@/lib/types";
import { CACHE_TAGS } from "@/lib/cache-tags";

/** Header と Footer が共有するナビゲーションデータをまとめて取得 */
export const getSiteChromeData = cache(
  unstable_cache(
    async (locale: string | null) => {
      const [areas, rawTags, spotCount] = await Promise.all([
        locale ? getAreasTranslated(locale) : getAreas(),
        getPurposeTags(),
        getTotalSpotCount(),
      ]);

      // 非日本語ページでは TAG_NAME に翻訳のあるタグのみ残し、名前を翻訳済みにする。
      // Header.tsx 側でも同じ TAG_NAME で再変換されるが冪等なので問題ない。
      const tags =
        locale && locale !== "ja"
          ? rawTags
              .filter((t) => TAG_NAME[t.slug] != null)
              .map((t) => ({
                ...t,
                name: TAG_NAME[t.slug]![locale as SiteLocale] ?? t.name,
              }))
          : rawTags;

      return { areas, tags, spotCount };
    },
    ["site-chrome"],
    // spots は載せない。ここは全ページの共通ヘッダー/フッターなので、
    // spots を含めるとスポット1件の増減でサイト全体が無効化される。
    // 参照しているスポット由来の値は総件数だけなので spot-count で足りる。
    { revalidate: false, tags: ["areas", "tags", CACHE_TAGS.spotCount] }
  )
);
