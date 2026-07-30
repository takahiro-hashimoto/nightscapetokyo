/**
 * JSON-LD を <script type="application/ld+json"> に安全に埋め込むためのシリアライザ。
 *
 * JSON.stringify は `<` をエスケープしないため、DB 由来の文字列に閉じ script タグが
 * 含まれると script 要素がそこで終了する（構造化データの破損 + 格納型XSS）。
 * スポットの hours / faq.answer / レビュー本文などは表示側では sanitizeHtml を
 * 通しているが、JSON-LD 側は素通しなので必ずこのヘルパーを経由させること。
 *
 * U+2028 / U+2029 は JSON では合法だが JavaScript の行終端子として解釈されるため
 * 併せてエスケープする。正規表現側もリテラル文字ではなく \u 表記で書くこと
 * （リテラルで書くとこのファイル自身がソース上で改行され構文エラーになる）。
 */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
