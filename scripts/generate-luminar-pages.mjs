/**
 * generate-luminar-pages.mjs
 *
 * src/content/luminar/*.mdx を読み取り、
 * src/app/(luminar)/luminar/{slug}/page.tsx を各スラグごとに生成する。
 *
 * 使い方:
 *   node scripts/generate-luminar-pages.mjs
 *
 * 新記事の追加手順:
 *   1. src/content/luminar/{slug}.mdx を作成
 *   2. このスクリプトを再実行
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = join(__dirname, '../src/content/luminar')
const PAGES_DIR   = join(__dirname, '../src/app/(luminar)/luminar')
const DYNAMIC_DIR = join(PAGES_DIR, '[slug]')

// MDX ファイル一覧からスラグを取得
const slugs = readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.mdx'))
  .map(f => f.replace('.mdx', ''))

console.log(`📄 ${slugs.length} 件の MDX ファイルを検出\n`)

for (const slug of slugs) {
  const dir = join(PAGES_DIR, slug)
  mkdirSync(dir, { recursive: true })

  const content = `import type { Metadata } from 'next'
import { buildMetadata } from '@/components/luminar/LuminarArticlePageInner'
import LuminarArticlePageInner from '@/components/luminar/LuminarArticlePageInner'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(SLUG)
}

export const dynamic = 'force-static'

export default function Page() {
  return <LuminarArticlePageInner slug={SLUG} />
}
`
  writeFileSync(join(dir, 'page.tsx'), content, 'utf8')
  console.log(`✅ luminar/${slug}/page.tsx`)
}

// [slug] 動的ルートを削除（静的ページと競合するため）
if (existsSync(DYNAMIC_DIR)) {
  rmSync(DYNAMIC_DIR, { recursive: true, force: true })
  console.log(`\n🗑  [slug]/ 動的ルートを削除しました`)
}

console.log(`\n✨ 完了`)
