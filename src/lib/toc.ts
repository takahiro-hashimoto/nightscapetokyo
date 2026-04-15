export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

/**
 * HTML文字列からh2/h3を抽出してid属性を付与し、TOCアイテムを返す。
 */
export function buildToc(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  let counter = 0;

  const processed = html.replace(
    /<(h[23])([^>]*?)>([\s\S]*?)<\/h[23]>/gi,
    (_match, tag: string, attrs: string, inner: string) => {
      const level = parseInt(tag[1], 10) as 2 | 3;
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const id = `sec-${++counter}`;
      toc.push({ id, text, level });
      return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    }
  );

  return { html: processed, toc };
}
