/**
 * 画像（R2 バケット nightscape-images）の配信元。
 *
 * 2026-09 に r2.dev から独自ドメインへ移した。r2.dev は Cloudflare 公式に
 * 「開発用・レート制限あり・本番非推奨」とされ、CDN キャッシュも効かないため。
 * 旧 URL（LEGACY_R2_ORIGIN）は検索エンジンや外部リンクのために当面公開したままにし、
 * コード側では見つけしだい IMAGE_ORIGIN に寄せる（toImageOrigin）。
 */
export const IMAGE_ORIGIN = "https://img.nightscape.tokyo";
export const LEGACY_R2_ORIGIN = "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev";

/** 旧 r2.dev の URL を新しい配信元に置き換える（それ以外はそのまま返す） */
export function toImageOrigin(url: string): string {
  return url.startsWith(`${LEGACY_R2_ORIGIN}/`) ? IMAGE_ORIGIN + url.slice(LEGACY_R2_ORIGIN.length) : url;
}
