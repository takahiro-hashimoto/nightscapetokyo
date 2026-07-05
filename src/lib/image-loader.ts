/*
 * next/image カスタム loader（next.config.ts の images.loaderFile から参照）。
 *
 * R2 (pub-*.r2.dev) の画像は、アップロード時／バックフィルで事前生成した
 * `<元キー>.w<幅>.webp` を返し、Vercel の /_next/image を完全にバイパスする。
 * → Image Transformations と画像分の Fast Data Transfer 課金がゼロになる
 *   （R2 のエグレスは無料）。
 *
 * それ以外（/public のローカル画像・外部ホスト）は src をそのまま返す
 * （＝最適化なしの素通し。ロゴ等の小物のみなので許容）。
 *
 * 注意: この loader を有効化する前に、R2 バケット全体へ
 * scripts/backfill-r2-image-variants.mjs でバリアントを生成しておくこと。
 * バリアントが無い画像は 404 になる。
 */
const R2_PREFIX = "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/";

export default function r2ImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (
    src.startsWith(R2_PREFIX) &&
    !/\.gif$/i.test(src) && // GIF はバリアント非生成（アニメ保持のため素通し）
    !/\.w\d+\.webp$/i.test(src) // 既にバリアントURLならそのまま
  ) {
    return `${src}.w${width}.webp`;
  }
  return src;
}
