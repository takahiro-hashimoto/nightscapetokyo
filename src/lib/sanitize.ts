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
 * ショートコードの属性文字列を key="value" 形式でパースする。
 * 例: `url="https://..." title="飯給駅" site="ekitan"` → { url, title, site }
 */
function parseShortcodeAttrs(attrStr: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const re = /(\w+)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(attrStr)) !== null) {
    attrs[m[1]] = m[2];
  }
  return attrs;
}

/**
 * ref-card の HTML を生成するヘルパー。
 * title あり → タイトル + サイト名
 * title なし → サイト名 + URL（小文字・省略表示）
 */
function refCardHtml(url: string, title: string, site: string, newTab = true, ogpImage?: string): string {
  const targetAttr = newTab ? ' target="_blank"' : "";
  const relAttr = newTab ? ' rel="noopener noreferrer"' : "";
  const bodyHtml = title
    ? `<span class="ref-title">${title}</span><span class="ref-site">${site}</span>`
    : `<span class="ref-title">${site}</span><span class="ref-url">${url}</span>`;
  const thumbHtml = ogpImage
    ? `<div class="ref-thumb"><img src="${ogpImage}" alt="${title || site}" loading="lazy"></div>`
    : "";
  return (
    `<div class="article-spot-links">` +
    `<a href="${url}" class="ref-card"${targetAttr}${relAttr}>` +
    thumbHtml +
    `<div class="ref-body">${bodyHtml}</div>` +
    `<span class="ref-external">↗</span>` +
    `</a>` +
    `</div>`
  );
}

import type { AmazonProduct } from "./amazon";
import { extractAsin } from "./amazon";
import type { OgpData } from "./ogp";

/**
 * Amazon 商品カードの HTML を生成するヘルパー。
 * API データがない場合は ref-card スタイルにフォールバック。
 */
function amazonCardHtml(
  url: string,
  titleFallback: string,
  product: AmazonProduct | undefined
): string {
  if (!product) {
    // API データなし → シンプルな ref-card にフォールバック
    return refCardHtml(url, titleFallback || url, "Amazon.co.jp");
  }

  const { title, imageUrl, price, detailUrl, fetchedAt } = product;
  const dateStr = fetchedAt.toLocaleDateString("ja-JP", {
    year: "numeric", month: "2-digit", day: "2-digit",
  });
  const timeStr = fetchedAt.toLocaleTimeString("ja-JP", {
    hour: "2-digit", minute: "2-digit",
  });

  const priceHtml = price
    ? `<div class="amazon-card-price-row">` +
      `<strong class="amazon-card-price">${price}</strong>` +
      `<span class="amazon-card-note">` +
      `(${dateStr} ${timeStr}時点 <a href="${detailUrl}" target="_blank" rel="noopener noreferrer">詳しくはこちら</a>)` +
      `</span>` +
      `</div>`
    : "";

  const thumbHtml = imageUrl
    ? `<div class="amazon-card-thumb"><img src="${imageUrl}" alt="${title}" loading="lazy"></div>`
    : "";

  return (
    `<div class="amazon-card">` +
    `<div class="amazon-card-content">` +
    `<p class="amazon-card-title">${title || titleFallback}</p>` +
    priceHtml +
    `<a href="${detailUrl}" class="amazon-card-btn" target="_blank" rel="noopener noreferrer">` +
    `Amazon.co.jpで購入する` +
    `</a>` +
    `</div>` +
    thumbHtml +
    `</div>`
  );
}

/**
 * 記事本文内のカスタムショートコードを HTML に変換する。
 *
 * ## 対応ショートコード
 *
 * ### relatedLink — 外部リンクを ref-card で表示
 * ```
 * [relatedLink url="https://ekitan.com/..." title="飯給駅　小湊鉄道" site="ekitan"]
 * ```
 * | 属性  | 必須 | 説明                                      |
 * |-------|------|-------------------------------------------|
 * | url   | ✓   | リンク先 URL                              |
 * | title |      | タイトル（省略時は URL を表示）           |
 * | site  |      | サイト名ラベル（省略時は hostname）       |
 *
 * ### amazonLink — Amazon 商品カードを表示
 * ```
 * [amazonLink url="https://www.amazon.co.jp/dp/ASIN/" title="商品名"]
 * ```
 * | 属性  | 必須 | 説明                                        |
 * |-------|------|---------------------------------------------|
 * | url   | ✓   | Amazon URL（ASIN を含む）または ASIN 直接   |
 * | title |      | API 取得失敗時のフォールバックタイトル      |
 *
 * ※ sanitizeHtml より先に呼ぶこと。
 * ※ amazonLink を使う場合は amazonProducts を渡すこと（page.tsx で prefetch）。
 */
export function convertShortcodes(
  html: string,
  amazonProducts?: Map<string, AmazonProduct>,
  ogpData?: Map<string, OgpData>
): string {
  // [relatedLink ...] → ref-card
  let result = html.replace(
    /\[relatedLink\s+([\s\S]*?)\s*\]/g,
    (_match, attrStr: string) => {
      const { url = "", title = "", site = "" } = parseShortcodeAttrs(attrStr);
      if (!url) return "";
      let siteLabel = site;
      if (!siteLabel) {
        try { siteLabel = new URL(url).hostname; } catch { siteLabel = url; }
      }
      const ogpImage = ogpData?.get(url)?.imageUrl;
      return refCardHtml(url, title, siteLabel, true, ogpImage);
    }
  );

  // [amazonLink ...] → amazon-card
  result = result.replace(
    /\[amazonLink\s+([\s\S]*?)\s*\]/g,
    (_match, attrStr: string) => {
      const { url = "", title = "" } = parseShortcodeAttrs(attrStr);
      if (!url) return "";
      const asin = extractAsin(url);
      const product = asin ? amazonProducts?.get(asin) : undefined;
      return amazonCardHtml(url, title, product);
    }
  );

  return result;
}

/**
 * WordPress の wp:loos/post-link ブロックコメントを ref-card HTML に変換する。
 *
 * 変換前（WP block editor 出力）:
 *   <!-- wp:loos/post-link {"isNewTab":true,"rel":"...","linkData":{"url":"https://...","title":"..."},"icon":"externalLink"} /-->
 *
 * 変換後:
 *   <div class="article-spot-links">
 *     <a href="https://..." class="ref-card" target="_blank" rel="...">
 *       <div class="ref-body">
 *         <span class="ref-title">ページタイトル or URL</span>
 *         <span class="ref-site">hostname</span>
 *       </div>
 *     </a>
 *   </div>
 *
 * ※ sanitizeHtml より先に呼ぶこと（sanitizeHtml が wp: コメントを削除するため）
 */
export function convertPostLinks(html: string, ogpData?: Map<string, OgpData>): string {
  return html.replace(
    /<!--\s*wp:loos\/post-link\s+([\s\S]*?)\s*\/-->/g,
    (_match, jsonStr: string) => {
      try {
        const data = JSON.parse(jsonStr) as {
          isNewTab?: boolean;
          rel?: string;
          linkData?: { url?: string; title?: string; text?: string };
          icon?: string;
        };
        const url = data.linkData?.url ?? "";
        if (!url) return "";

        const title = data.linkData?.title ?? data.linkData?.text ?? "";
        const hostname = new URL(url).hostname;
        const displayTitle = title || url;
        const targetAttr = data.isNewTab ? ' target="_blank"' : "";
        const relAttr = data.rel ? ` rel="${data.rel}"` : "";
        const ogpImage = ogpData?.get(url)?.imageUrl;
        const thumbHtml = ogpImage
          ? `<div class="ref-thumb"><img src="${ogpImage}" alt="${displayTitle}" loading="lazy"></div>`
          : "";

        return (
          `<div class="article-spot-links">` +
          `<a href="${url}" class="ref-card"${targetAttr}${relAttr}>` +
          thumbHtml +
          `<div class="ref-body">` +
          `<span class="ref-title">${displayTitle}</span>` +
          `<span class="ref-site">${hostname}</span>` +
          `</div>` +
          `<span class="ref-external">↗</span>` +
          `</a>` +
          `</div>`
        );
      } catch {
        return "";
      }
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
