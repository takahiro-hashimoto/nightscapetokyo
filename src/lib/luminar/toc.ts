/**
 * TOC Generator for Luminar pages.
 *
 * Parses H2/H3 from HTML content, assigns id="heading-N",
 * and returns both a structured toc array and contentWithIds.
 */

export type TocItem = {
  id: string
  level: number
  text: string
}

export type TocResult = {
  toc: TocItem[]
  contentWithIds: string
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '')
}

export function generateToc(content: string): TocResult {
  const headingRegex = /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi

  // First pass: collect headings
  const headings: Array<{ level: string; inner: string }> = []
  let match: RegExpExecArray | null
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({ level: match[1], inner: match[3] })
  }

  if (headings.length < 2) {
    return { toc: [], contentWithIds: content }
  }

  // Build toc array
  const toc: TocItem[] = headings.map((h, i) => ({
    id: `heading-${i + 1}`,
    level: parseInt(h.level),
    text: stripTags(h.inner).trim(),
  }))

  // Second pass: inject id attributes
  let count = 0
  const contentWithIds = content.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (fullMatch, level, attrs, inner) => {
      count++
      const id = `heading-${count}`
      if (/id=["'][^"']+["']/i.test(attrs)) return fullMatch
      const attrsPart = attrs.trim() ? ` id="${id}" ${attrs.trim()}` : ` id="${id}"`
      return `<h${level}${attrsPart}>${inner}</h${level}>`
    },
  )

  return { toc, contentWithIds }
}
