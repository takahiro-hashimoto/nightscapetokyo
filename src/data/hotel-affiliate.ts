/**
 * Hotel affiliate links for localized pages.
 *
 * EN  → Booking.com via A8.net (a8mat=2NV04W+53YZH6+327I+HUD03)
 * KO/TW/CN → Agoda city page via A8.net (a8mat=4B3KUQ+4KBOII+4X1W+BW0YB)
 */

// ── Agoda (city-level — no area ID needed, never 404s) ────────────────────────

const AGODA_A8_MAT = "4B3KUQ+4KBOII+4X1W+BW0YB";

const AGODA_CITY_URL: Record<"tw" | "cn", string> = {
  tw: "https://www.agoda.com/zh-tw/city/tokyo-jp.html",
  cn: "https://www.agoda.com/zh-cn/city/tokyo-jp.html",
};

const AGODA_CITY_URL_YOKOHAMA: Record<"tw" | "cn", string> = {
  tw: "https://www.agoda.com/zh-tw/city/yokohama-jp.html",
  cn: "https://www.agoda.com/zh-cn/city/yokohama-jp.html",
};

function wrapAgodaA8(agodaUrl: string): string {
  return `https://px.a8.net/svt/ejp?a8mat=${AGODA_A8_MAT}&a8ejpredirect=${encodeURIComponent(agodaUrl)}`;
}

export function getAgodaAffiliateLink(
  wardSlug: string,
  locale: "tw" | "cn"
): string {
  const base = wardSlug === "yokohama"
    ? AGODA_CITY_URL_YOKOHAMA[locale]
    : AGODA_CITY_URL[locale];
  return wrapAgodaA8(base);
}

// ── Booking.com (EN only) ────────────────────────────────────────────────────

const BOOKING_A8_MAT = "2NV04W+53YZH6+327I+HUD03";
const BOOKING_A8_ASID = "a15060662290";
const BOOKING_A8_PROGRAM = "s00000014283002";

const BOOKING_DISTRICT_SLUGS = new Set([
  "shibuya", "shinjuku", "minato", "chuo", "sumida", "koto", "taito",
  "kita", "edogawa", "adachi", "arakawa", "itabashi", "nerima",
  "setagaya", "meguro", "shinagawa", "ota", "suginami", "nakano",
  "toshima", "bunkyo", "chiyoda",
]);

const BOOKING_SEARCH_TEXT: Record<string, string> = {
  minato:    "Minato Ward, Tokyo",
  shibuya:   "Shibuya Ward, Tokyo",
  shinjuku:  "Shinjuku Ward, Tokyo",
  chuo:      "Chuo Ward, Tokyo",
  sumida:    "Sumida Ward, Tokyo",
  koto:      "Koto Ward, Tokyo",
  taito:     "Taito Ward, Tokyo",
  kita:      "Kita Ward, Tokyo",
  edogawa:   "Edogawa Ward, Tokyo",
  adachi:    "Adachi Ward, Tokyo",
  arakawa:   "Arakawa Ward, Tokyo",
  itabashi:  "Itabashi Ward, Tokyo",
  nerima:    "Nerima Ward, Tokyo",
  setagaya:  "Setagaya Ward, Tokyo",
  meguro:    "Meguro Ward, Tokyo",
  shinagawa: "Shinagawa Ward, Tokyo",
  ota:       "Ota Ward, Tokyo",
  suginami:  "Suginami Ward, Tokyo",
  nakano:    "Nakano Ward, Tokyo",
  toshima:   "Toshima Ward, Tokyo",
  bunkyo:    "Bunkyo Ward, Tokyo",
  chiyoda:   "Chiyoda Ward, Tokyo",
  yokohama:  "Yokohama, Japan",
};

function buildBookingUrl(wardSlug: string, locale: "en" | "ko"): string {
  const lang = locale === "ko" ? "ko" : "en-us";
  const currency = locale === "ko" ? "KRW" : "USD";
  if (BOOKING_DISTRICT_SLUGS.has(wardSlug)) {
    return `https://www.booking.com/district/jp/tokyo/${wardSlug}.html?selected_currency=${currency}&lang=${lang}&soz=1&lang_changed=1`;
  }
  const ss = encodeURIComponent(BOOKING_SEARCH_TEXT[wardSlug] ?? "Tokyo, Japan");
  return `https://www.booking.com/searchresults.html?ss=${ss}&lang=${lang}&selected_currency=${currency}&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure`;
}

function wrapBookingA8(bookingUrl: string): string {
  const doubleEncoded = encodeURIComponent(encodeURIComponent(bookingUrl));
  return (
    `https://px.a8.net/svt/ejp?a8mat=${BOOKING_A8_MAT}&asid=${BOOKING_A8_ASID}` +
    `&a8ejpredirect=https%3A%2F%2Fow.a8.net%2F${BOOKING_A8_PROGRAM}%2Fredirect_v2.php` +
    `%3Ftype%3Ddeeplink%26url%3D${doubleEncoded}`
  );
}

export function getBookingAffiliateLink(wardSlug: string, locale: "en" | "ko" = "en"): string {
  return wrapBookingA8(buildBookingUrl(wardSlug, locale));
}

// ── Unified entry point ──────────────────────────────────────────────────────

export type HotelAffiliateLang = "en" | "ko" | "tw" | "cn";

export function getHotelAffiliateLink(
  wardSlug: string,
  lang: HotelAffiliateLang
): string {
  if (lang === "en") return getBookingAffiliateLink(wardSlug, "en");
  if (lang === "ko") return getBookingAffiliateLink(wardSlug, "ko");
  return getAgodaAffiliateLink(wardSlug, lang);
}
