export type SpotCardData = {
  id: string;
  slug: string;
  name: string;
  featured_image: string;
  category: { slug: string; name: string };
  rating_avg: number;
  rating_beautiful: number | null;
  rating_access: number | null;
  rating_atmosphere: number | null;
  rating_cost: number | null;
  lead: string;
};

export type AreaData = {
  slug: string;
  name: string;
  image: string;
  spot_count: number;
};

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const dummyTopSpots: SpotCardData[] = [
  {
    id: "1",
    slug: "shibuya-sky",
    name: "渋谷スカイ",
    featured_image:
      "https://picsum.photos/seed/shibuya/600/400",
    category: { slug: "shibuya", name: "渋谷区" },
    rating_avg: 4.3,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "地上229mから都内を360度見渡せる展望施設。開放的な屋上空間が人気。",
  },
  {
    id: "2",
    slug: "tokyo-tower",
    name: "東京タワー",
    featured_image:
      "https://picsum.photos/seed/tower/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.5,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "東京のシンボルから眺める都心の夜景。季節ごとのライトアップも見どころ。",
  },
  {
    id: "3",
    slug: "roppongi-hills",
    name: "六本木ヒルズ展望台",
    featured_image:
      "https://picsum.photos/seed/roppongi/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.0,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "海抜250mの屋上スカイデッキから東京タワーやスカイツリーを一望。",
  },
  {
    id: "4",
    slug: "odaiba-seaside-park",
    name: "お台場海浜公園",
    featured_image:
      "https://picsum.photos/seed/odaiba/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 3.8,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "レインボーブリッジと都心のビル群が織りなす美しいウォーターフロント夜景。",
  },
  {
    id: "5",
    slug: "skytree",
    name: "東京スカイツリー",
    featured_image:
      "https://picsum.photos/seed/skytree/600/400",
    category: { slug: "sumida", name: "墨田区" },
    rating_avg: 4.5,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "地上450mの天望回廊から関東平野を一望。日本一高いタワーからの大パノラマ。",
  },
  {
    id: "6",
    slug: "rainbow-bridge",
    name: "レインボーブリッジ",
    featured_image:
      "https://picsum.photos/seed/rainbow/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.0,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "遊歩道から東京湾の夜景を間近に楽しめる。お台場側・芝浦側の両方に見どころ。",
  },
];

export const dummyHotelSpots: SpotCardData[] = [
  {
    id: "h1",
    slug: "prince-park-tower",
    name: "ザ・プリンス パークタワー東京",
    featured_image:
      "https://picsum.photos/seed/prince/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.5,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "東京タワーの目の前に佇む高層ホテル。客室から間近に東京タワーを望む。",
  },
  {
    id: "h2",
    slug: "conrad-tokyo",
    name: "コンラッド東京",
    featured_image:
      "https://picsum.photos/seed/conrad/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.3,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "浜離宮恩賜庭園を見下ろすラグジュアリーホテル。東京湾のパノラマ夜景。",
  },
  {
    id: "h3",
    slug: "mesm-tokyo",
    name: "メズム東京",
    featured_image:
      "https://picsum.photos/seed/mesm/600/400",
    category: { slug: "minato", name: "港区" },
    rating_avg: 4.2,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "竹芝に誕生したウォーターフロントホテル。全室バルコニー付きで夜景を独占。",
  },
  {
    id: "h4",
    slug: "mitsui-garden-toyosu",
    name: "三井ガーデンホテル豊洲",
    featured_image:
      "https://picsum.photos/seed/mitsui/600/400",
    category: { slug: "koto", name: "江東区" },
    rating_avg: 3.9,
    rating_beautiful: null, rating_access: null, rating_atmosphere: null, rating_cost: null,
    lead: "豊洲市場の目の前。レインボーブリッジと都心の夜景を客室から楽しめる。",
  },
];

export const dummyAreas: AreaData[] = [
  {
    slug: "minato",
    name: "港区",
    image: "https://picsum.photos/seed/minato/400/300",
    spot_count: 45,
  },
  {
    slug: "shibuya",
    name: "渋谷区",
    image: "https://picsum.photos/seed/shibuyacity/400/300",
    spot_count: 28,
  },
  {
    slug: "shinjuku",
    name: "新宿区",
    image: "https://picsum.photos/seed/shinjuku/400/300",
    spot_count: 22,
  },
  {
    slug: "chuo",
    name: "中央区",
    image: "https://picsum.photos/seed/chuo/400/300",
    spot_count: 18,
  },
  {
    slug: "sumida",
    name: "墨田区",
    image: "https://picsum.photos/seed/sumida/400/300",
    spot_count: 12,
  },
  {
    slug: "koto",
    name: "江東区",
    image: "https://picsum.photos/seed/koto/400/300",
    spot_count: 15,
  },
];

export const dummyHomeFaqs: HomeFaqItem[] = [
  {
    question: "本日の日没時間と夜景鑑賞におすすめの時間帯は何時ですか？",
    answer: "__SUNSET_DYNAMIC__",
  },
  {
    question: "東京都内の夜景が綺麗な告白スポットを教えてください。",
    answer:
      "和田倉噴水公園、KITTE屋上庭園、豊洲ぐるり公園、若洲海浜公園などがおすすめです。とても美しい夜景を見ることができるのに関わらず、人も少なく落ち着いた雰囲気で会話ができるからです。",
  },
  {
    question: "東京都内のインスタ映えする夜景スポットはどこですか？",
    answer:
      "SHIBUYA SKY、東京都庁南展望室・北展望室、タワーホール船堀展望台、東京タワー展望台などがおすすめです。",
  },
  {
    question: "東京のランドマークにはどんな建物がありますか？",
    answer:
      "東京タワー、東京スカイツリー、レインボーブリッジ、東京ゲートブリッジ、東京駅などが有名なランドマークです。",
  },
  {
    question: "東京の夜景鑑賞におすすめのタイミングはいつですか？",
    answer:
      "展望台などを訪れる際は空気が澄んでいる冬が夜景鑑賞におすすめです。また、ビル夜景を眺める際は平日のほうが光量の多い夜景を楽しめます。",
  },
  {
    question: "夜景を綺麗に撮れるおすすめの機材を教えて欲しい！",
    answer:
      "「初心者におすすめの撮影機材」や「一眼カメラ・レンズの選び方」などの記事をご覧ください。",
  },
  {
    question: "夜景を綺麗に撮るカメラの設定を教えて欲しい！",
    answer:
      "「一眼カメラで綺麗な夜景写真を撮る方法」や「一眼カメラの設定」などの記事をご覧ください。",
  },
  {
    question: "夕日が沈む方向を事前に調べるにはどうしたらいいですか？",
    answer:
      "__SIMULATOR_LINK__",
  },
];
