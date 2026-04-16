/**
 * WordPress の画像 URL を Cloudflare R2 URL に変換する。
 * https://nightscape.tokyo/wp-content/uploads/YYYY/MM/file.jpg
 * → https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/YYYY/MM/file.jpg
 */
const WP_ORIGIN = "https://nightscape.tokyo/wp-content/";
const R2_ORIGIN = "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/";

/**
 * WordPress が付与するサイズサフィックスを除去する。
 * 例: tsukuda-bridge-7-1024x683.jpg → tsukuda-bridge-7.jpg
 */
function removeWpSizeSuffix(url: string): string {
  return url.replace(/-\d+x\d+(\.[a-zA-Z]+)$/, "$1");
}

export function toR2Url(url: string): string {
  const r2 = url.startsWith(WP_ORIGIN) ? url.replace(WP_ORIGIN, R2_ORIGIN) : url;
  return removeWpSizeSuffix(r2);
}

/**
 * HTML 文字列内の WordPress 画像 URL をまとめて R2 URL に置換し、
 * サイズサフィックスも除去する。
 */
export function replaceWpImagesInHtml(html: string): string {
  return html
    .replaceAll(WP_ORIGIN, R2_ORIGIN)
    .replace(/(https?:\/\/[^\s"']+)-\d+x\d+(\.[a-zA-Z]+)/g, "$1$2");
}

/**
 * WordPress の YouTube embed ブロックをレスポンシブ iframe に変換する。
 *
 * 変換前（WP block editor 出力）:
 *   <figure class="wp-block-embed-youtube ...">
 *     <div class="wp-block-embed__wrapper">
 *       https://www.youtube.com/watch?v=VIDEO_ID
 *     </div>
 *     <figcaption>...</figcaption>   ← あれば保持
 *   </figure>
 *
 * 変換後:
 *   <figure class="video-embed">
 *     <div class="video-container">
 *       <iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
 *     </div>
 *     <figcaption>...</figcaption>
 *   </figure>
 */
export function embedYoutubeUrls(html: string): string {
  return html.replace(
    /<figure[^>]*wp-block-embed-youtube[^>]*>[\s\S]*?<div[^>]*wp-block-embed__wrapper[^>]*>\s*https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?(?:[^\s<]*&)*v=|youtu\.be\/)([A-Za-z0-9_-]{11})[^\s<]*\s*<\/div>([\s\S]*?)<\/figure>/gi,
    (_match, videoId: string, rest: string) => {
      const captionMatch = rest.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i);
      const caption = captionMatch ? `<figcaption>${captionMatch[1]}</figcaption>` : "";
      return `<figure class="video-embed"><div class="video-container"><iframe src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" title="YouTube video"></iframe></div>${caption}</figure>`;
    }
  );
}

/**
 * HTML 内の h3 セクションを処理する。
 * - セクション内の <img> alt を「ライトアップされた{h3テキスト}」に統一
 * - 設定に基づくスポットリンクをセクション末尾（次の h2/h3 の直前）に挿入
 *
 * @param html        処理対象の HTML 文字列（buildToc 適用済みを推奨）
 * @param h3SpotLinks h3テキスト → SpotLink[] のマップ
 */
export function injectH3SpotLinks(
  html: string,
  h3SpotLinks: Record<string, { name: string; href: string; image?: string }[]>
): string {
  if (Object.keys(h3SpotLinks).length === 0) return html;

  // h3 タグ + その後のセクションコンテンツ（次の h2/h3 または末尾まで）を一括処理
  return html.replace(
    /(<h3[^>]*>[\s\S]*?<\/h3>)([\s\S]*?)(?=<h[23][\s>]|$)/gi,
    (match, h3Tag: string, sectionContent: string) => {
      const text = h3Tag.replace(/<[^>]+>/g, "").trim();

      // このセクション内の img alt をすべて「ライトアップされた{h3テキスト}」に
      const updatedContent = sectionContent.replace(
        /<img\b[^>]*>/gi,
        (imgTag) => {
          const withoutAlt = imgTag.replace(/\s+alt="[^"]*"/gi, "");
          return withoutAlt.replace(/\s*\/?>$/, ` alt="ライトアップされた${text}">`);
        }
      );

      const spots = h3SpotLinks[text];
      if (!spots || spots.length === 0) {
        return h3Tag + updatedContent;
      }

      const linksHtml = spots
        .map((s) => {
          const thumbHtml = s.image
            ? `<div class="ref-thumb"><img src="${s.image}" alt="${s.name}" loading="lazy"></div>`
            : "";
          return (
            `<a href="${s.href}" class="ref-card">` +
            thumbHtml +
            `<div class="ref-body">` +
            `<span class="ref-title">${s.name}</span>` +
            `<span class="ref-site">夜景スポット</span>` +
            `</div>` +
            `</a>`
          );
        })
        .join("");

      return h3Tag + updatedContent + `<div class="article-spot-links">${linksHtml}</div>`;
    }
  );
}

/**
 * DB / CMS 由来の HTML を dangerouslySetInnerHTML に渡す前にサニタイズする。
 * - <script> タグを除去
 * - インラインイベントハンドラ (on*) を除去
 * - javascript: URI を除去
 * ※ <iframe> は Google Maps / YouTube 埋め込みで必要なため残す。
 */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\s+on\w+="[^"]*"/gi, "")
    .replace(/\s+on\w+='[^']*'/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s*class="wp-block-heading"/g, "")
    .replace(/<!--\s*\/?wp:[^>]*-->/g, "")
    .replace(/\s*class="wp-block-list"/g, "")
    .replace(/\s*class="[^"]*wp-block-group[^"]*"/g, "")
    .replace(/<!--\$-->/g, "")
    .replace(/\bl-bottom-medium\b\s*/g, "")
    .replace(/<span[^>]*data-icon="[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");
}
