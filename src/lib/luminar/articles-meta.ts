/**
 * Luminar コンテンツ データ層
 *
 * 記事メタデータは静的データとしてこのファイルで管理する。
 * 新規記事の追加・更新日の変更はこのファイルの ARTICLES 配列を編集する。
 */

// ── 型定義 ────────────────────────────────────────────────────────────────────

export type FeaturedImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Term = {
  id: number
  name: string
  slug: string
}

export type NormalizedPost = {
  id: number
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  content: string
  featuredImage: FeaturedImage | null
  categories: Term[]
  tags: Term[]
}

export type NormalizedPostSummary = Omit<NormalizedPost, 'content'>

// WP 互換エクスポート（呼び出し元が import している場合のため残す）
export type WpPost = NormalizedPost
export type WpPostSummary = NormalizedPostSummary

// ── 静的記事データ ─────────────────────────────────────────────────────────────

const CAT_BUY: Term = { id: 1, name: '購入ガイド', slug: 'buy' }
const CAT_HOW: Term = { id: 2, name: '使い方', slug: 'how' }
const R2 = 'https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/luminar'

const ARTICLES: NormalizedPostSummary[] = [
  {
    id: 1,
    slug: 'sale-and-coupon-info',
    title: '【割引情報まとめ】Luminar Neoのクーポンコード・セール情報を解説！安く買う方法がわかる',
    description:
      '「Luminar Neoを一番安く買う方法は？」「今セールやってる？クーポンはある？」Luminar Neoは定価だと5万円以上する写真編集ソフトですが、実は購入タイミングとクーポンの使い方次第で、1万円台で手に入れることも可能です。',
    publishedAt: '2026-01-18T10:36:49',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/how-to-buy.jpg`,
      alt: 'Luminar Neoのセール時期はいつ？クーポンコードと安く買う方法について徹底解説【2026年最新】',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 2,
    slug: 'lightroom-compare',
    title: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
    description:
      '写真の現像ソフト選びで、LightroomとLuminar Neoのどちらにするか迷っていませんか？どちらも人気のRAW現像ソフトですが、料金体系も操作感も設計思想がまったく違います。',
    publishedAt: '2026-01-18T10:36:17',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/lightroom.jpg`,
      alt: 'Luminar NeoとLightroom徹底比較｜料金・機能・使いやすさの違いを結論から解説',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 3,
    slug: 'luminar-plan',
    title: 'Luminar Neoの後悔しない選び方｜サブスク廃止後の買い切り版ライセンスを賢く購入【2026年】',
    description:
      '突然ですが、Luminar Neoの料金体系、正直ちょっとわかりにくいですよね。買い切りって書いてあるのに、なんか追加料金がかかるの？アップグレードパス？エコシステムパス？何が違うの？',
    publishedAt: '2026-01-18T10:38:20',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/plan.jpg`,
      alt: 'Luminar Neoの後悔しない選び方｜サブスク廃止後の買い切り版ライセンスを賢く購入【2026年】',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 4,
    slug: 'merit-demerit',
    title: '【長期使用レビュー】Luminar Neoのメリット・デメリットを現役フォトグラファーが解説',
    description:
      '「Luminar Neo（ルミナーネオ）」って実際どうなの？Adobeから乗り換える価値はある？LightroomとPhotoshopのサブスクは年間3万円近く。1年以上使い込んで感じたリアルな良い点・イマイチな点を包み隠さずお伝えします。',
    publishedAt: '2026-01-18T10:37:52',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/review.jpg`,
      alt: 'Luminar Neoの良い点・イマイチな点を夜景フォトグラファーが徹底解説【長期使用レビュー】',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_HOW],
    tags: [],
  },
  {
    id: 5,
    slug: 'trial',
    title: 'Luminar Neo体験版のダウンロード方法・製品版との違いを紹介',
    description:
      '「気になるけど、いきなり買うのはちょっと…」写真編集ソフトを検討しているとき、こんな気持ちになったことはありませんか？特にLuminar Neoのように機能が豊富なソフトだと、自分のPCでちゃんと動くのか、本当に使いこなせるのか、不安になりますよね。',
    publishedAt: '2026-01-18T20:45:12',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/trial.jpg`,
      alt: 'Luminar Neo体験版のダウンロード方法・製品版との違いを紹介',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 6,
    slug: 'expand',
    title: 'Luminar Neoの拡張機能まとめ。できること・メリットと価格プランの選び方',
    description:
      'Luminar Neoを使い始めて、ふと気になったことはありませんか？「Proツール（拡張機能）って、結局のところ必要なの？」と。 僕自身、最初はLuminar…',
    publishedAt: '2026-01-19T09:32:32',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/expand.jpg`,
      alt: 'Luminar Neoの拡張機能まとめ。できること・メリットと価格プランの選び方',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 7,
    slug: 'faq',
    title: 'Luminar Neoの購入前によくある質問まとめ｜動作環境・対応カメラ・ライセンスの疑問を解決【FAQ】',
    description:
      '「Luminar Neoって自分に合うのかな？」「買ってから後悔しない？」——そんな不安を抱えている方、多いと思います。このページでは、購入前によく寄せられる疑問をSkylum公式のカスタマーサポートにも問い合わせた上でQ&A形式でまとめました。',
    publishedAt: '2026-01-19T10:28:58',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/faq.jpg`,
      alt: 'Luminar Neoの購入前によくある質問まとめ｜動作環境・対応カメラ・ライセンスの疑問を解決【FAQ】',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 8,
    slug: 'voice',
    title: 'Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態',
    description:
      '「Luminar Neoって実際どうなの？」「買って後悔しない？」という疑問を持っている方も多いはず。 ネットで評判を調べると、「AIがすごい！」という絶賛から…',
    publishedAt: '2026-01-22T23:14:58',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/luminar-neo-voice.jpg`,
      alt: 'Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
  {
    id: 9,
    slug: 'opening-failed',
    title: 'Luminar Neoが重い・落ちる原因と対処法｜症状別に今すぐ解決',
    description:
      'Luminar Neoを使っていて「動作が重い」「頻繁に落ちる」という症状に悩んでいませんか？ ネットで「再起動してください」「アップデートしてください」という対処法を見かけますが、正直それで解決するケースは少ないです。なぜなら、重い・落ちる原因は複数あり、原因によって対処法が全く異なるからです。',
    publishedAt: '2026-01-25T10:49:41',
    updatedAt: '2026-04-21T00:00:00',
    featuredImage: {
      src: `${R2}/failed.jpg`,
      alt: 'Luminar Neoが重い・落ちる原因と対処法｜症状別に今すぐ解決',
      width: 1920,
      height: 1080,
    },
    categories: [CAT_BUY],
    tags: [],
  },
]

// ── Public API ────────────────────────────────────────────────────────────────

export async function getAllPostSlugs(): Promise<string[]> {
  return ARTICLES.map((p) => p.slug)
}

export async function getAllPostsSummary(): Promise<NormalizedPostSummary[]> {
  return [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export async function getRelatedPosts(
  categoryIds: number[],
  excludeSlug: string,
  limit = 4,
): Promise<NormalizedPostSummary[]> {
  return ARTICLES.filter(
    (p) =>
      p.slug !== excludeSlug &&
      p.categories.some((c) => categoryIds.includes(c.id)),
  ).slice(0, limit)
}

export function getCategoryIds(post: NormalizedPostSummary): number[] {
  return post.categories.map((c) => c.id)
}

// ── Normalizers（互換レイヤー） ────────────────────────────────────────────────

export function normalizePost(post: NormalizedPost): NormalizedPost {
  return post
}

export function normalizePostSummary(post: NormalizedPostSummary) {
  return {
    ...post,
    category: post.categories[0]?.name,
  }
}

// ── URL ユーティリティ（他ファイルで import されているため残す） ───────────────

export function toR2Url(url: string): string {
  return url.replace(
    /https?:\/\/nightscape\.tokyo\/luminar\/wp-content\/uploads\/\d{4}\/\d{2}\//,
    `${R2}/`,
  )
}

export function replaceWpUploadsInHtml(html: string): string {
  return html.replace(
    /https?:\/\/nightscape\.tokyo\/luminar\/wp-content\/uploads\/\d{4}\/\d{2}\//g,
    `${R2}/`,
  )
}
