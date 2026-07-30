/**
 * /moon/ と /simulator/ で「当日・東京の値」をサーバー側に出力するための補助。
 *
 * 両ページのツール本体は dynamic(..., { ssr: false }) のため、ページの検索意図
 * そのものである「時刻と方角」が HTML に一切存在しなかった。AI検索クローラーは
 * JS を実行しないので、既定地点の値だけでも静的に出しておく必要がある。
 *
 * 地点は地図の初期位置（DEFAULT_MAP_STATE）と一致させること。ズレると
 * 「HTML に書かれた値」と「開いたときに表示される値」が食い違う。
 */
import { DEFAULT_MAP_STATE } from "@/lib/map-persistence";

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/** 既定地点（東京都庁付近）。地図の初期位置と共有 */
export const TOKYO_POINT = {
  lat: DEFAULT_MAP_STATE.lat,
  lng: DEFAULT_MAP_STATE.lng,
  label: "東京都庁（新宿区）",
};

export type JstToday = {
  /** 計算に渡す Date（UTC実体。各calc側でJSTに寄せて扱う） */
  date: Date;
  /** 表示用ラベル 例: 2026年7月30日 */
  label: string;
  /** <time dateTime> 用 例: 2026-07-30 */
  iso: string;
};

/** 生成時点のJSTの「今日」を返す */
export function getJstToday(): JstToday {
  const now = new Date();
  const jst = new Date(now.getTime() + JST_OFFSET_MS);
  const y = jst.getUTCFullYear();
  const m = jst.getUTCMonth() + 1;
  const d = jst.getUTCDate();
  return {
    date: now,
    label: `${y}年${m}月${d}日`,
    iso: `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
  };
}

const COMPASS_16 = [
  "北", "北北東", "北東", "東北東",
  "東", "東南東", "南東", "南南東",
  "南", "南南西", "南西", "西南西",
  "西", "西北西", "北西", "北北西",
];

/** 方位角（度）→ 16方位の日本語名。AIにもユーザーにも読める形にする */
export function azimuthToCompass(azimuth: number): string {
  const normalized = ((azimuth % 360) + 360) % 360;
  return COMPASS_16[Math.round(normalized / 22.5) % 16];
}

/** 例: 「東北東（68°）」。値が無ければ null */
export function formatAzimuth(azimuth: number | null): string | null {
  if (azimuth == null || Number.isNaN(azimuth)) return null;
  return `${azimuthToCompass(azimuth)}（${Math.round(azimuth)}°）`;
}
