import type { SpotListItem } from "../../types";
import { LOCALE_SLUG_MAP } from "../../types";
import {
  isSupabaseConfigured,
  getSupabaseClient,
  mapSpotToListing,
  LISTING_SELECT,
} from "./shared";

export type SearchSpotItem = SpotListItem & {
  matchedFields: string[];
};

type FieldLabels = {
  spotName: string;
  address: string;
  station: string;
  report: string;
  lead: string;
  tag: string;
  category: string;
};

const DEFAULT_FIELD_LABELS: FieldLabels = {
  spotName: "スポット名",
  address: "住所",
  station: "最寄り駅",
  report: "訪問レポート",
  lead: "紹介文",
  tag: "タグ",
  category: "エリア",
};

// 形態素解析でクエリをトークン分割
const STOP_WORDS = new Set([
  "が", "の", "な", "を", "に", "は", "で", "と", "も", "か",
  "て", "だ", "た", "する", "い", "ある", "する", "れる", "られる",
  "よう", "こと", "もの", "ため", "ところ", "さん", "くん",
  "the", "a", "an", "is", "are", "was", "were", "in", "on", "at",
  "to", "for", "of", "with", "and", "or", "not", "from", "by",
]);

function tokenizeQuery(query: string): string[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const TinySegmenter = require("tiny-segmenter");
  const segmenter = new TinySegmenter();
  const tokens: string[] = segmenter.segment(query.trim());
  return tokens
    .map((t: string) => t.trim().toLowerCase())
    .filter((t: string) => t.length > 0 && !STOP_WORDS.has(t));
}

export async function searchSpots(query: string, fieldLabels?: FieldLabels, localeSlug?: string): Promise<SearchSpotItem[]> {
  if (!isSupabaseConfigured || !query.trim()) return [];

  const labels = { ...DEFAULT_FIELD_LABELS, ...fieldLabels };
  const supabase = await getSupabaseClient();
  const searchSelect = `${LISTING_SELECT}, address, station, report`;

  const tokens = tokenizeQuery(query);
  const sanitizeForPostgrest = (kw: string) => kw.replace(/[,()'"\\]/g, "");
  const allKeywords = [query.trim(), ...tokens.filter((t) => t !== query.trim().toLowerCase())]
    .map(sanitizeForPostgrest)
    .filter(Boolean);

  const spotMap = new Map<string, { spot: any; matchedFields: Set<string>; matchedTokens: Set<string>; titleMatchTokens: Set<string> }>();

  const textOr = allKeywords
    .flatMap((kw) => [
      `title.ilike.%${kw}%`,
      `name.ilike.%${kw}%`,
      `address.ilike.%${kw}%`,
      `station.ilike.%${kw}%`,
      `report.ilike.%${kw}%`,
      `lead.ilike.%${kw}%`,
    ])
    .join(",");
  const tagOr = allKeywords.map((kw) => `name.ilike.%${kw}%`).join(",");
  const catOr = allKeywords.map((kw) => `name.ilike.%${kw}%`).join(",");

  const dbLocale = localeSlug ? LOCALE_SLUG_MAP[localeSlug] : null;
  const transOr = dbLocale
    ? allKeywords.flatMap((kw) => [`name.ilike.%${kw}%`, `lead.ilike.%${kw}%`]).join(",")
    : null;

  const [textHitsResult, matchedTagsResult, matchedCatsResult, transHitsResult] = await Promise.all([
    (supabase.from("spots").select(searchSelect).eq("published", true).or(textOr)) as any,
    (supabase.from("tags").select("id, name").or(tagOr)) as any,
    (supabase.from("categories").select("id, name").or(catOr)) as any,
    transOr
      ? (supabase.from("spot_translations").select("spot_id, name, lead, category_name").eq("locale", dbLocale!).or(transOr)) as any
      : Promise.resolve({ data: [] as any[] }),
  ]);

  const allTextHits: any[] = textHitsResult.data ?? [];
  const matchedTags: any[] = matchedTagsResult.data ?? [];
  const matchedCats: any[] = matchedCatsResult.data ?? [];
  const transHits: any[] = transHitsResult.data ?? [];

  const transMap = new Map<string, any>();
  for (const t of transHits) transMap.set(t.spot_id, t);

  const tagIds: string[] = matchedTags.map((t: { id: string }) => t.id);
  const catIds: string[] = matchedCats.map((c: { id: string }) => c.id);

  const [tagRelationsResult, catSpotsResult] = await Promise.all([
    tagIds.length > 0
      ? (supabase.from("spot_tags").select("spot_id, tag_id").in("tag_id", tagIds)) as any
      : Promise.resolve({ data: [] as any[] }),
    catIds.length > 0
      ? (supabase.from("spots").select("id, category_id").eq("published", true).in("category_id", catIds)) as any
      : Promise.resolve({ data: [] as any[] }),
  ]);

  const tagRelations: any[] = tagRelationsResult.data ?? [];
  const catSpots: any[] = catSpotsResult.data ?? [];

  const tagSpotIds = tagRelations.map((r: { spot_id: string }) => r.spot_id);
  const categorySpotIds = catSpots.map((s: { id: string }) => s.id);

  const textHitIds = new Set(allTextHits.map((s: { id: string }) => s.id));
  const transHitSpotIds = transHits.map((t: { spot_id: string }) => t.spot_id);
  const extraIds = [...new Set([...tagSpotIds, ...categorySpotIds, ...transHitSpotIds])].filter(
    (id) => !textHitIds.has(id)
  );

  let extraSpots: any[] = [];
  if (extraIds.length > 0) {
    const { data } = (await supabase
      .from("spots")
      .select(searchSelect)
      .eq("published", true)
      .in("id", extraIds)) as any;
    extraSpots = data ?? [];
  }

  const tagMatchByKw = new Map<string, Set<string>>();
  const catMatchByKw = new Map<string, Set<string>>();
  const transMatchByKw = new Map<string, Set<string>>();
  for (const keyword of allKeywords) {
    const kw = keyword.toLowerCase();
    const matchingTagIds = new Set(
      matchedTags
        .filter((t: { name: string }) => t.name.toLowerCase().includes(kw))
        .map((t: { id: string }) => t.id)
    );
    tagMatchByKw.set(
      kw,
      new Set(
        tagRelations
          .filter((r: { tag_id: string }) => matchingTagIds.has(r.tag_id))
          .map((r: { spot_id: string }) => r.spot_id)
      )
    );
    const matchingCatIds = new Set(
      matchedCats
        .filter((c: { name: string }) => c.name.toLowerCase().includes(kw))
        .map((c: { id: string }) => c.id)
    );
    catMatchByKw.set(
      kw,
      new Set(
        catSpots
          .filter((s: { category_id: string }) => matchingCatIds.has(s.category_id))
          .map((s: { id: string }) => s.id)
      )
    );
    transMatchByKw.set(
      kw,
      new Set(
        transHits
          .filter((t: { name: string; lead: string }) =>
            (t.name || "").toLowerCase().includes(kw) || (t.lead || "").toLowerCase().includes(kw)
          )
          .map((t: { spot_id: string }) => t.spot_id)
      )
    );
  }

  const allSpots = [...allTextHits, ...extraSpots];

  for (const keyword of allKeywords) {
    const kw = keyword.toLowerCase();
    const tagSpotIdSet = tagMatchByKw.get(kw) ?? new Set<string>();
    const categorySpotIdSet = catMatchByKw.get(kw) ?? new Set<string>();
    const transSpotIdSet = transMatchByKw.get(kw) ?? new Set<string>();

    for (const s of allSpots) {
      let entry = spotMap.get(s.id);
      if (!entry) {
        entry = { spot: s, matchedFields: new Set(), matchedTokens: new Set(), titleMatchTokens: new Set() };
        spotMap.set(s.id, entry);
      }

      let hit = false;
      const titleMatch = (s.title || "").toLowerCase().includes(kw) || (s.name || "").toLowerCase().includes(kw);
      if (titleMatch) { entry.matchedFields.add(labels.spotName); entry.titleMatchTokens.add(kw); hit = true; }
      if ((s.address || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.address); hit = true; }
      if ((s.station || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.station); hit = true; }
      if ((s.report || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.report); hit = true; }
      if ((s.lead || "").toLowerCase().includes(kw)) { entry.matchedFields.add(labels.lead); hit = true; }
      if (tagSpotIdSet.has(s.id)) { entry.matchedFields.add(labels.tag); hit = true; }
      if (categorySpotIdSet.has(s.id)) { entry.matchedFields.add(labels.category); hit = true; }
      if (transSpotIdSet.has(s.id)) { entry.matchedFields.add(labels.spotName); entry.titleMatchTokens.add(kw); hit = true; }
      if (hit) entry.matchedTokens.add(kw);
    }
  }

  const minTokens = tokens.length >= 2 ? 2 : 1;

  const results: SearchSpotItem[] = [];
  for (const { spot, matchedFields, matchedTokens } of spotMap.values()) {
    if (matchedTokens.size >= minTokens) {
      results.push({ ...mapSpotToListing(spot), matchedFields: [...matchedFields] });
    }
  }

  const sorted = results.sort((a, b) => {
    const ta = spotMap.get(a.id)!.titleMatchTokens.size;
    const tb = spotMap.get(b.id)!.titleMatchTokens.size;
    if (tb !== ta) return tb - ta;
    const sa = spotMap.get(a.id)!.matchedTokens.size;
    const sb = spotMap.get(b.id)!.matchedTokens.size;
    if (sb !== sa) return sb - sa;
    return b.rating_avg - a.rating_avg;
  });

  if (dbLocale && sorted.length > 0) {
    const missingIds = sorted.map((s) => s.id).filter((id) => !transMap.has(id));
    if (missingIds.length > 0) {
      const { data: extra } = (await supabase
        .from("spot_translations")
        .select("spot_id, name, lead, category_name")
        .eq("locale", dbLocale)
        .in("spot_id", missingIds)) as any;
      for (const t of extra ?? []) transMap.set(t.spot_id, t);
    }

    if (transMap.size > 0) {
      return sorted.map((s) => {
        const t = transMap.get(s.id);
        if (!t) return s;
        return {
          ...s,
          name: t.name || s.name,
          lead: t.lead || s.lead,
          category: t.category_name
            ? { ...s.category, name: t.category_name }
            : s.category,
        };
      });
    }
  }

  return sorted;
}
