/**
 * TOC Generator — port of luminar-neo-guide/inc/toc-generator.php
 *
 * Parses H2/H3 from HTML content, assigns id="heading-N",
 * builds a <nav class="m-toc"> block, and inserts it before the first <h2>.
 */

type TocResult = {
  tocHtml: string
  contentWithIds: string
}

/** Strip HTML tags from a string (used for TOC link labels) */
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

  // Need at least 2 headings to show TOC
  if (headings.length < 2) {
    return { tocHtml: '', contentWithIds: content }
  }

  // Build TOC HTML
  let tocHtml =
    '<nav class="m-toc" aria-label="目次">\n' +
    '<div class="m-toc__title"><i class="fa-solid fa-list" aria-hidden="true"></i> タップできる目次</div>\n' +
    '<ul class="m-toc__list">\n'

  headings.forEach((h, i) => {
    const id = `heading-${i + 1}`
    const text = stripTags(h.inner).trim()
    const cls = h.level === '3' ? 'toc-h3' : 'toc-h2'
    tocHtml += `<li class="${cls}"><a href="#${id}">${text}</a></li>\n`
  })

  tocHtml += '</ul>\n</nav>\n'

  // Second pass: inject id attributes into the headings in content
  let count = 0
  const contentWithIds = content.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (fullMatch, level, attrs, inner) => {
      count++
      const id = `heading-${count}`
      // Skip if the heading already has an id
      if (/id=["'][^"']+["']/i.test(attrs)) return fullMatch
      const attrsPart = attrs.trim() ? ` id="${id}" ${attrs.trim()}` : ` id="${id}"`
      return `<h${level}${attrsPart}>${inner}</h${level}>`
    },
  )

  // Insert TOC before the first <h2>
  const firstH2Index = contentWithIds.search(/<h2[\s>]/i)
  if (firstH2Index !== -1) {
    return {
      tocHtml,
      contentWithIds:
        contentWithIds.slice(0, firstH2Index) +
        tocHtml +
        contentWithIds.slice(firstH2Index),
    }
  }

  // No <h2> found — prepend
  return { tocHtml, contentWithIds: tocHtml + contentWithIds }
}
