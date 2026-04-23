import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getAreas, getAreasTranslated } from "./categories";
import { getPurposeTags } from "./tags";
import { getTotalSpotCount } from "./spots";

/** Header と Footer が共有するナビゲーションデータをまとめて取得 */
export const getSiteChromeData = cache(
  unstable_cache(
    async (locale: string | null) => {
      const [areas, tags, spotCount] = await Promise.all([
        locale ? getAreasTranslated(locale) : getAreas(),
        getPurposeTags(),
        getTotalSpotCount(),
      ]);
      return { areas, tags, spotCount };
    },
    ["site-chrome"],
    { revalidate: 3600, tags: ["areas", "tags", "spots"] }
  )
);
