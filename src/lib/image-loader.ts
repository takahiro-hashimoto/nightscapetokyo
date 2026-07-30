/*
 * next/image カスタム loader（next.config.ts の images.loaderFile から参照）。
 *
 * R2 (pub-*.r2.dev) の画像は、アップロード時／バックフィルで事前生成した
 * `<元キー>.w<幅>.webp` を返し、Vercel の /_next/image を完全にバイパスする。
 * → Image Transformations と画像分の Fast Data Transfer 課金がゼロになる
 *   （R2 のエグレスは無料）。
 *
 * /public のローカル画像のうち、scripts/build-public-image-variants.mjs で
 * バリアントを生成済みのディレクトリ（LOCAL_VARIANT_DIRS）は R2 と同じ命名規則で
 * webp を返す。タグタイルは sizes="80px" の枠に 500x500 / 200-400KB の JPEG が
 * 素通しされていたため、ここだけで数MB削減できる。
 *
 * それ以外（未生成のローカル画像・外部ホスト）は src をそのまま返す
 * （＝最適化なしの素通し。ロゴ等の小物のみなので許容）。
 *
 * 注意: この loader を有効化する前に、R2 バケット全体へ
 * scripts/backfill-r2-image-variants.mjs でバリアントを生成しておくこと。
 * バリアントが無い画像は 404 になる。
 */
const R2_PREFIX = "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/";

/** バリアント生成済みのローカルディレクトリ（scripts/build-public-image-variants.mjs と一致させること） */
const LOCAL_VARIANT_DIRS = ["/images/tag/"];
/** 生成済みの幅。ここに無い幅を要求されたら 404 になるので素通しする */
const LOCAL_VARIANT_WIDTHS = new Set([180, 256, 384]);

export default function r2ImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const isVariantUrl = /\.w\d+\.webp$/i.test(src); // 既にバリアントURLならそのまま

  if (
    src.startsWith(R2_PREFIX) &&
    !/\.gif$/i.test(src) && // GIF はバリアント非生成（アニメ保持のため素通し）
    !isVariantUrl
  ) {
    return `${src}.w${width}.webp`;
  }

  if (
    !isVariantUrl &&
    LOCAL_VARIANT_WIDTHS.has(width) &&
    /\.(jpe?g|png)$/i.test(src) &&
    LOCAL_VARIANT_DIRS.some((dir) => src.startsWith(dir))
  ) {
    return `${src}.w${width}.webp`;
  }

  return src;
}
