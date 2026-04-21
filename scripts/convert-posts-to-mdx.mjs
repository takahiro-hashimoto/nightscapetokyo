/**
 * convert-posts-to-mdx.mjs
 *
 * src/data/luminar/posts/*.json を
 * src/content/luminar/{slug}.mdx に変換する。
 *
 * 使い方:
 *   node scripts/convert-posts-to-mdx.mjs
 *
 * フロントマターにメタデータを格納し、
 * 本文（HTML）はそのまま MDX の body として保存する。
 * 今後は MDX ファイルを直接編集して記事を管理できる。
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IN_DIR  = join(__dirname, '../src/data/luminar/posts')
const OUT_DIR = join(__dirname, '../src/content/luminar')

mkdirSync(OUT_DIR, { recursive: true })

const files = readdirSync(IN_DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'))

for (const file of files) {
  const post = JSON.parse(readFileSync(join(IN_DIR, file), 'utf8'))

  // フロントマター文字列を生成（YAML）
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(post.title)}`,
    `slug: ${post.slug}`,
    `publishedAt: "${post.publishedAt}"`,
    `updatedAt: "${post.updatedAt}"`,
    `description: ${JSON.stringify(post.description)}`,
    post.featuredImage
      ? [
          `featuredImage:`,
          `  src: "${post.featuredImage.src}"`,
          `  alt: ${JSON.stringify(post.featuredImage.alt)}`,
          `  width: ${post.featuredImage.width}`,
          `  height: ${post.featuredImage.height}`,
        ].join('\n')
      : `featuredImage: null`,
    `categories:`,
    ...post.categories.map(c => `  - id: ${c.id}\n    name: ${JSON.stringify(c.name)}\n    slug: ${c.slug}`),
    `tags:`,
    ...(post.tags.length
      ? post.tags.map(t => `  - id: ${t.id}\n    name: ${JSON.stringify(t.name)}\n    slug: ${t.slug}`)
      : ['  []']),
    '---',
  ].join('\n')

  // MDX ファイルとして出力（HTML 本文をそのまま保存）
  const mdx = `${frontmatter}\n\n${post.content}\n`
  const outPath = join(OUT_DIR, `${post.slug}.mdx`)
  writeFileSync(outPath, mdx, 'utf8')
  console.log(`✅ ${post.slug}.mdx`)
}

console.log(`\n✨ ${files.length} 件を ${OUT_DIR} に出力しました`)
