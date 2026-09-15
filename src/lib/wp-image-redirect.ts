import { IMAGE_ORIGIN } from "./image-origin";

/**
 * WordPress 時代の画像 URL（/wp-content/uploads/年/月/ファイル）の転送先を返す。該当しなければ null。
 *
 * 旧 URL は外部サイトの画像リンクや画像検索に残っているが、移行後は 404 になっていた。
 * R2 へはパスをそのままコピーした（scripts/migrate-images-to-r2.mjs: uploads/<残り>）ので、
 * 同じパスの画像配信元へ向ける。WordPress が自動生成していたサイズ付きの派生ファイル
 * （例: foo-1024x683.jpg）は R2 に無いことがあるため、元画像（foo.jpg）へ向ける
 * （記事本文も lib/sanitize.ts で同じ変換をしている）。
 */
export function wpImageRedirectTarget(pathname: string): string | null {
  const m = pathname.match(/^\/wp-content\/uploads\/(.+)$/);
  if (!m) return null;
  const rest = m[1].replace(/-\d+x\d+(\.(?:jpe?g|png|gif|webp))$/i, "$1");
  return `${IMAGE_ORIGIN}/uploads/${rest}`;
}
