/*
 * R2 直配信用の画像バリアント定義。
 *
 * next.config.ts の deviceSizes / imageSizes と完全一致させること。
 * next/image のカスタム loader はこの幅の集合からしか width を要求しないため、
 * アップロード時・バックフィル時にこの8サイズの webp を R2 に置いておけば、
 * Vercel の画像最適化 (/_next/image) を通さず R2 から直接配信できる。
 */
export const VARIANT_WIDTHS = [180, 256, 384, 640, 828, 960, 1280, 1920] as const;

export const VARIANT_QUALITY = 75;

/** 元キー + 幅 → バリアントのオブジェクトキー */
export function variantKey(key: string, width: number): string {
  return `${key}.w${width}.webp`;
}
