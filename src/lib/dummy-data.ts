import type { SpotWithRelations } from "./types";

export const dummySpot: SpotWithRelations = {
  id: "dummy-001",
  slug: "shibuya-sky",
  title: "渋谷スカイの行き方・営業時間・夜景見どころガイド",
  type: "spot",
  category_id: "cat-001",
  content: null,
  name: "渋谷スカイ",
  lead: "上空229mの高さから都内を見渡せる展望施設渋谷スカイ。渋谷スクランブル交差点や東京タワー、富士山などが見どころ。開放感抜群の屋上展望空間も人気。",
  report:
    '<p>2019年に開業した渋谷スクランブルスクエア。渋谷エリアで最も高い地上229mの高さを誇る商業施設です。</p><p>そんな同施設の47階と46階には展望施設の渋谷スカイがあり、360度東京都内を一望することができます。屋上の「SKY STAGE」は遮るものがない開放的な空間で、風を感じながら絶景を楽しめるのが魅力です。</p><p>なお46階屋内展望回廊の「SKY GALLERY」はゆったりと座れるシートやカフェ・バーなどがあり、落ち着いて夜景鑑賞をするのに最適。お酒を片手に夜景を眺める贅沢な時間を過ごせます。</p><p>夕暮れ時はwebの事前購入のみで空き枠が埋まってしまうことも多いため、日没前後に訪れたい場合は事前購入をしておきましょう。</p>',
  address: "東京都渋谷区渋谷 2-24-12",
  official_url: "https://www.shibuya-scramble-square.com/sky/",
  official_label: "展望施設・渋谷スカイ公式サイト",
  sns_url: "https://twitter.com/shibuya_sky",
  sns_label: "渋谷スカイ公式Twitterアカウント",
  relation_url: null,
  relation_label: null,
  hours: "10:00 - 22:30（最終入場 21:20）",
  holiday: "年中無休（悪天候時等は屋上展望空間はクローズ）",
  money:
    "大人（18歳以上）2,700円〜3,400円 / 小人 1,200円",
  station: "<ul><li>渋谷駅から直結</li></ul>",
  parking:
    "<ul><li>渋谷ヒカリエ（提携駐車場）</li><li>平日300円(税込)／30分</li><li>土・日・祝 400円(税込)／30分</li><li>最大料金：2,400円（税込）</li></ul>",
  map: '<iframe title="渋谷スカイのマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.748821054973!2d139.70163874999997!3d35.65855965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b583ab6d93b%3A0x3c41198edb975744!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yS5LiB55uu77yS77yU!5e0!3m2!1sja!2sjp!4v1673370087777!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  height: "約230m",
  movie: null,
  asoview:
    '<a href="#">渋谷スカイの前売りチケットを購入する（asoview!）</a>',
  asoview_02: null,
  latitude: 35.6586,
  longitude: 139.7016,
  rating_beautiful: 4.0,
  rating_access: 5.0,
  rating_atmosphere: 5.0,
  rating_cost: 3.0,
  featured_image:
    "https://placehold.co/1200x800/1a1a2e/ffffff?text=SHIBUYA+SKY",
  published: true,
  published_at: "2024-01-15T00:00:00Z",
  created_at: "2024-01-15T00:00:00Z",
  updated_at: "2024-01-15T00:00:00Z",
  category: {
    id: "cat-001",
    name: "渋谷区",
    slug: "shibuya",
    created_at: "2024-01-01T00:00:00Z",
  },
  tags: [
    { id: "tag-001", name: "展望台", slug: "observatory", image_url: "https://placehold.co/120x120/1a1a3e/ffffff?text=Observatory" },
    { id: "tag-002", name: "デート向け", slug: "date", image_url: "https://placehold.co/120x120/2a1a3e/ffffff?text=Date" },
    { id: "tag-003", name: "東京タワーが見える", slug: "tokyo-tower", image_url: "https://placehold.co/120x120/3e1a1a/ffffff?text=Tower" },
    { id: "tag-004", name: "富士山が見える", slug: "mt-fuji", image_url: "https://placehold.co/120x120/3e2a1a/ffffff?text=Fuji" },
    { id: "tag-005", name: "渋谷交差点が見える", slug: "scramble-intersection", image_url: "https://placehold.co/120x120/1a3e2a/ffffff?text=Shibuya" },
  ],
  images: [
    {
      id: "img-001",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/0a0a2e/ffffff?text=Night+View+1",
      alt: "セルリアンタワーと首都高速道路",
      sort_order: 0,
    },
    {
      id: "img-002",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/1a1a3e/ffffff?text=Night+View+2",
      alt: "渋谷スカイから首都高速道路を眺める",
      sort_order: 1,
    },
    {
      id: "img-003",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/2a2a4e/ffffff?text=Night+View+3",
      alt: "渋谷スクランブルスクエアから眺める富士山",
      sort_order: 2,
    },
    {
      id: "img-004",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/1a2a3e/ffffff?text=Night+View+4",
      alt: "渋谷スクランブル交差点",
      sort_order: 3,
    },
    {
      id: "img-005",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/3a1a2e/ffffff?text=Night+View+5",
      alt: "東京タワーと港区エリアの夜景",
      sort_order: 4,
    },
    {
      id: "img-006",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/2e2a1a/ffffff?text=Night+View+6",
      alt: "新宿エリアの摩天楼と新宿御苑の夜景",
      sort_order: 5,
    },
    {
      id: "img-007",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/1a2e2a/ffffff?text=Night+View+7",
      alt: "渋谷スカイ47階屋上展望台の雰囲気",
      sort_order: 6,
    },
    {
      id: "img-008",
      spot_id: "dummy-001",
      url: "https://placehold.co/600x400/2a1a2e/ffffff?text=Night+View+8",
      alt: "夕暮れ時の渋谷スカイ46Fの雰囲気",
      sort_order: 7,
    },
  ],
  faqs: [
    {
      id: "faq-001",
      spot_id: "dummy-001",
      question: "渋谷スカイは20分しか入れない？",
      answer:
        "入場チケットは20分間隔で購入となりますが、滞在時間に制限はありません。心ゆくまでゆっくり夜景鑑賞を楽しみましょう！",
      sort_order: 0,
    },
    {
      id: "faq-002",
      spot_id: "dummy-001",
      question:
        "渋谷スカイの前売り券を買った場合払い戻し（キャンセル）は可能？",
      answer:
        "手数料が発生しますが、チケットの払い戻し・キャンセルをすることができます。天候が悪く、別日に訪れたい時も安心です。",
      sort_order: 1,
    },
    {
      id: "faq-003",
      spot_id: "dummy-001",
      question: "渋谷スカイの入場時刻を過ぎたらどうなりますか？",
      answer:
        "予約時間を15分以上過ぎてもご連絡がない場合、キャンセルとなります。",
      sort_order: 2,
    },
    {
      id: "faq-004",
      spot_id: "dummy-001",
      question: "渋谷スカイの年間パスポートはいくらですか？",
      answer: "年間5,400円で入場し放題になります。",
      sort_order: 3,
    },
    {
      id: "faq-005",
      spot_id: "dummy-001",
      question: "渋谷スカイの滞在時間の目安はどれくらい？",
      answer:
        "館内はとても広く、見どころが多いのに加え、レストランやお土産売り場も充実しているため1時間30分〜2時間ほどが目安になるかと思います。",
      sort_order: 4,
    },
  ],
  reviews: [
    {
      id: "review-001",
      spot_id: "dummy-001",
      name: "夜景好きさん",
      rating: 5,
      title: "東京で一番おすすめの展望台！",
      content:
        "屋上のSKY STAGEは本当に開放感があり、360度の夜景が楽しめます。特に夕暮れ時から夜にかけてのグラデーションが最高でした。",
      created_at: "2025-12-10T00:00:00Z",
    },
    {
      id: "review-002",
      spot_id: "dummy-001",
      name: "カメラマンK",
      rating: 4,
      title: "撮影好きにもおすすめ",
      content:
        "三脚は使えませんが、手持ちでも十分綺麗に撮れます。ガラスの反射が少ないのもポイント高いです。平日の方が空いていておすすめ。",
      created_at: "2025-11-20T00:00:00Z",
    },
  ],
  hotel: {
    id: "hotel-001",
    spot_id: "dummy-001",
    checkin: "15:00",
    checkout: "11:00",
    amenity: "Wi-Fi・バスアメニティ・タオル完備",
    affiliate_1:
      '<a href="#">渋谷エクセルホテル東急 - 楽天トラベル</a>',
    affiliate_2:
      '<a href="#">セルリアンタワー東急ホテル - じゃらん</a>',
    affiliate_3: null,
    affiliate_4: null,
  },
  event: null,
};
