/**
 * 撮影依頼ページ（/photography/）の多言語表示文言。
 *
 * 第1フェーズは ja / en を作り込み。ko / tw / cn は en にフォールバック（第2フェーズで追加）。
 * 文言はコンポーネントにハードコードせず本辞書に集約（要件 §5「将来的な追加を前提とした構成」）。
 *
 * 数値（金額・PV・フォロワー数等）は src/data/photography.ts 側に集約しています。
 */

export type PhotographyServiceCard = {
  title: string;
  desc: string;
};

/** 実績1件（見出し＋説明段落）。画像・参照リンクは about-content の ACHIEVEMENTS_BASE と同順で対応 */
export type PhotographyClientItem = {
  title: string;
  /** 説明文（段落配列）。about とは別に、発注者向けトーンで統一した書き下ろし */
  desc: string[];
};

export type PhotographyPriceRow = {
  /** src/data/photography.ts の PHOTOGRAPHY_PRICING のキー */
  key: "halfDay" | "fullDay" | "timelapse" | "stock" | "packagePlan";
  item: string; // 項目名
  unit?: string; // 単位・補足（例: "1カット", "1点"）
};

export type PhotographyFlowStep = {
  /** PHOTOGRAPHY_FLOW_DAYS のキー */
  key: "inquiry" | "hearing" | "estimate" | "shooting" | "retouch" | "delivery";
  title: string;
  desc: string;
};

export type PhotographyReason = {
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
};

export type PhotographyFaq = { q: string; a: string };

export type PhotographyLabels = {
  meta: { title: string; description: string };
  hero: {
    h1: string;
    /** 導入文（挨拶・対象読者・紹介内容）を段落配列で */
    lead: string[];
    achievements: string;
    cta: string;
    /** CTAボタン直下のマイクロコピー（心理的ハードルを下げる） */
    ctaNote: string;
  };
  clients: {
    heading: string;
    lead: string;
    /** ACHIEVEMENTS_BASE と同順・同数 */
    items: PhotographyClientItem[];
  };
  services: { heading: string; lead: string; cards: PhotographyServiceCard[] };
  pricing: {
    heading: string;
    lead: string;
    colItem: string;
    colPrice: string;
    rows: PhotographyPriceRow[];
    tbd: string; // 金額未確定時の表示
    notes: string[];
    minBudgetLabel: string;
    cta: string;
  };
  flow: { heading: string; lead: string; daysLabel: string; steps: PhotographyFlowStep[] };
  equipment: {
    heading: string;
    lead: string;
    /** 機材まとめ記事への案内文（リンク前・リンクテキスト・リンク後） */
    articlePrefix: string;
    articleText: string;
    articleSuffix: string;
  };
  reasons: { heading: string; items: PhotographyReason[] };
  pkg: {
    heading: string;
    lead: string;
    flowDiagram: string[];
    reachHeading: string;
    pvLabel: string;
    followersLabel: string;
    multilingualHeading: string;
    multilingualBody: string;
    cta: string;
  };
  gallery: {
    heading: string;
    lead: string;
    tabs: { room: string; facility: string; timelapse: string; event: string };
    locationLabel: string;
    gearLabel: string;
    emptyNote: string;
  };
  faq: { heading: string; items: PhotographyFaq[] };
  form: {
    heading: string;
    lead: string;
    frameTitle: string;
    fallbackNote: string;
    fallbackCta: string;
  };
};

const ja: PhotographyLabels = {
  meta: {
    // タイトルは layout の template（%s | 東京夜景ナビ）で末尾にサイト名が付くため、ここでは付けない
    title: "東京の夜景撮影・ホテル・建築写真の撮影依頼",
    description:
      "東京の夜景・眺望を専門に撮影するカメラマンへの撮影依頼ページ。ホテルの客室・施設、不動産の眺望、タイムラプスや映像素材まで対応します。東京タワー公式サイトやNHK・テレビ朝日などの実績、料金の目安を掲載しています。",
  },
  hero: {
    h1: "東京の夜景撮影・ホテル・建築写真の撮影依頼",
    lead: [
      "東京の夜景・眺望を専門に撮影しているフォトグラファーのタカヒロです。",
      "夜景サイトを運営する傍ら、夜景専門のカメラマンとして、ホテルや不動産、テレビ番組向けの撮影・映像提供を行っています。実際に226箇所の夜景スポットを撮影してきた経験をもとに、眺望を活かした写真・映像を制作しています。",
      "このページでは、これまでの実績や対応できる撮影内容、料金の目安をご紹介します。",
    ],
    achievements: "東京タワー公式サイト タイムラプス撮影 / NHK・BS-TBS・テレビ朝日 映像提供 / 出光美術館賞 受賞",
    cta: "撮影を相談する",
    ctaNote: "ご相談・お見積りは無料です。通常24時間以内にご返信いたします。",
  },
  clients: {
    heading: "活動実績",
    lead: "これまでに担当した代表的な撮影案件や写真素材の提供実績を簡単にご紹介します。",
    // /about/ の活動実績と同順（ACHIEVEMENTS_BASE 準拠）。文体は発注者向けに統一した書き下ろし
    items: [
      {
        title: "株式会社TOKYO TOWER様 PC版トップページのタイムラプス映像を撮影",
        desc: [
          "株式会社TOKYO TOWERからのご依頼で、公式サイトのトップページに使用されるタイムラプス映像を撮影しました。",
          "PC版のトップページにて現在も公開されています。",
        ],
      },
      {
        title: "ザ・プリンス パークタワー東京様の客室・レストランのプロモーション用写真を撮影",
        desc: [
          "客室から望む夜景、レストランフロアの内観、夕暮れから夜への移ろいを収めたタイムラプス映像を撮影しました。",
          "これらの写真・映像は公式サイトのほか、楽天トラベルやじゃらんなど大手旅行予約サイトの掲載素材として使用されています。公式サイトには撮影クレジットも掲載いただいています。",
        ],
      },
      {
        title: "ザ・プリンス パークタワー東京様 リニューアルプロジェクト用写真撮影",
        desc: [
          "20周年記念リニューアルにあたり、「THE TOKYO FUSION」をテーマとした33・32階フロアの室内撮影を担当しました。",
          "伝統とモダンが融合するデザインコンセプトに合わせ、上質な空気感と光のニュアンスを重視して撮影しています。",
        ],
      },
      {
        title: "名古屋プリンスホテルスカイタワー様の客室からの眺望を撮影",
        desc: [
          "客室から望む夜景写真とタイムラプス映像を撮影しました。",
          "公式サイトをはじめ、楽天トラベルやじゃらんなど旅行予約サイトの素材として使用されています。",
        ],
      },
      {
        title: "動画コンテスト「港、動く 15秒の物語」の審査員を担当",
        desc: [
          "港区のナイトスポットの魅力を発信する動画コンテスト「港、動く 15秒の物語」で審査員を務めました。",
          "2025年2月28日に行われた表彰式にも参加しています。",
        ],
      },
      {
        title: "日本電設工業株式会社 Webサイトのメインビジュアルを納品",
        desc: [
          "コーポレートサイトのメインビジュアルとして、当方が撮影したタイムラプス映像が採用されました。",
          "丸ビルから望む霞ヶ関の街並みや、ライトアップされた東京駅など複数の素材が使用されています。",
        ],
      },
      {
        title: "ヘリコプター遊覧サービスのAIROS Skyview PR記事を作成",
        desc: [
          "ヘリコプター遊覧サービス「AIROS Skyview」を運営するAirX様からのご依頼で、搭乗体験をもとにしたPR記事を制作しました。",
        ],
      },
      {
        title: "レストランルークの期間限定イベント「SKY TERRACE」の取材記事を担当",
        desc: [
          "レストランルーク ウィズ スカイラウンジで期間限定開催（2025年1月6日〜3月31日）されたイベント「SKY TERRACE」の取材・記事執筆を担当しました。",
        ],
      },
      {
        title: "第8回東京大回廊写真コンテスト 出光美術館賞を受賞",
        desc: [
          "第8回東京大回廊写真コンテストにて、応募総数911点の中から「出光美術館賞」を受賞しました。",
        ],
      },
      {
        title: "BS-TBS「カンニング竹山の昼酒は人生の味。」にタイムラプス映像を提供",
        desc: [
          "2025年4月21日放送のBS-TBS「カンニング竹山の昼酒は人生の味。」冒頭映像に、ウィングインターナショナルセレクト浅草駒形から撮影したタイムラプス映像を提供しました。",
        ],
      },
      {
        title: "NHK総合「〜天才ピアニスト 10年の空白を越えて〜」にタイムラプス映像を提供",
        desc: [
          "2024年1月1日放送のNHK総合「スタニスラフ・ブーニン 〜天才ピアニスト 10年の空白を越えて〜」にて、マグネットバイ渋谷109 屋上展望台から撮影したタイムラプス映像が使用されました。",
        ],
      },
      {
        title: "テレビ朝日「ザワつく!金曜日」に写真素材を提供",
        desc: [
          "2024年11月29日放送の「ザワつく!金曜日」に、六本木けやき坂通りとさくら坂の写真を提供しました。",
        ],
      },
      {
        title: "朝日新聞のコラムにインタビュー記事が掲載",
        desc: [
          "晴海埠頭のオブジェ「風媒銀乱」を撮影した際のインタビューが、朝日新聞のコラムに掲載されました。",
        ],
      },
    ],
  },
  services: {
    heading: "対応できる撮影",
    lead: "夜景と眺望を軸に、下記のような撮影に対応しています。東京都内・近郊への出張撮影が基本で、事前のロケハン（下見）にも対応します。",
    cards: [
      {
        title: "施設・館内",
        desc: "エントランスやレストラン、共用部など、施設の見せたい部分を夜景とあわせて撮影します。公式サイトやパンフレットに使用する写真として制作します。",
      },
      {
        title: "客室・眺望",
        desc: "客室やレストランからの眺めを、日没から夜にかけて最も美しく見える時間帯に撮影します。公式サイトや宿泊予約サイトの掲載写真に適しています。",
      },
      {
        title: "眺望・竣工",
        desc: "タワーマンションの眺望や竣工写真を撮影します。「この立地なら東京タワーとレインボーブリッジを一枚に収められる」といった構図の判断ができます。販売資料やモデルルームの素材として制作します。",
      },
      {
        title: "タイムラプス・映像素材",
        desc: "日没からブルーアワーへと移り変わる空や、行き交う車のライトをタイムラプス・映像で記録します。テレビ番組やCM、デジタルサイネージ向けの映像素材を制作します。",
      },
      {
        title: "イベント・ライトアップ",
        desc: "季節のライトアップやイベントを、その日の光の状態を見ながら撮影します。広報やSNS運用向けの写真・映像として制作します。",
      },
      {
        title: "ストック素材",
        desc: "これまでに226箇所で撮影してきた夜景・眺望のストック素材をライセンス提供します。新規撮影より短納期・低予算で、番組や記事、広告の素材としてご利用いただけます。",
      },
    ],
  },
  pricing: {
    heading: "写真・動画撮影の目安",
    lead: "撮影内容によって変動しますが、目安として掲載しています。",
    colItem: "撮影内容",
    colPrice: "料金の目安",
    rows: [
      { key: "halfDay", item: "半日撮影", unit: "4時間程度・レタッチ済み15〜30枚程度" },
      { key: "fullDay", item: "1日撮影", unit: "8時間程度・レタッチ済み30〜50枚程度" },
      { key: "timelapse", item: "タイムラプス撮影", unit: "1カット・完成尺20〜25秒程度" },
      { key: "stock", item: "ストック素材ライセンス", unit: "1点" },
      { key: "packagePlan", item: "撮影＋記事掲載パッケージ", unit: "" },
    ],
    tbd: "要お見積り",
    notes: [
      "※ 表示価格はすべて税別です。",
      "※ 撮影時間や納品枚数によって変動します。詳しくはお見積りいたします。",
      "※ 交通費や撮影許可の申請費は別途申し受けます。",
      "※ ストック素材は使用媒体・期間により変動します。Web掲載は1万円〜、放送・広告でのご利用は別途お見積りいたします。",
      "※ 撮影＋記事掲載パッケージは、撮影に加えて東京夜景ナビでの記事掲載・SNSでのご紹介までを含むプランです。",
    ],
    minBudgetLabel: "最低ご予算の目安",
    cta: "料金について相談する",
  },
  flow: {
    heading: "依頼から納品まで",
    lead: "ご依頼から納品まで、おおむね下記の流れで進行いたします。",
    daysLabel: "目安",
    steps: [
      { key: "inquiry", title: "問い合わせ", desc: "フォームより撮影内容をお送りください。" },
      { key: "hearing", title: "内容とロケーションの確認", desc: "用途・撮影場所・仕上がりのイメージを確認いたします。必要に応じてロケハンも行います。" },
      { key: "estimate", title: "見積もりと日程調整", desc: "内容に応じてお見積もりと撮影日をご提示いたします。" },
      { key: "shooting", title: "撮影", desc: "日没時刻・天候・月齢を見極め、条件の良い時間帯に撮影いたします。" },
      { key: "retouch", title: "セレクトとレタッチ", desc: "撮影データを厳選し、夜景に合わせて丁寧に仕上げます。" },
      { key: "delivery", title: "納品", desc: "データにて納品いたします。記事掲載やSNS展開まで一括で承ることも可能です。" },
    ],
  },
  equipment: {
    heading: "撮影機材について",
    lead: "夜景写真の撮影には下記のようなアイテムを使用しています。",
    articlePrefix: "これらの機材の詳細は「",
    articleText: "夜景フォトグラファーの愛用する撮影機材まとめ",
    articleSuffix: "」で詳しく解説しているので、気になった方はぜひチェックしてみてください。",
  },
  reasons: {
    heading: "夜景・眺望撮影で選ばれる理由",
    items: [
      {
        title: "226箇所を実際に撮っている",
        body: "どこから何がどの時間帯に見えるか、頭に入っています。不動産なら「この立地は東京タワーとレインボーブリッジが一枚に入る」とその場で答えられます。ロケハンが速くて外しません。",
        linkLabel: "掲載中の夜景スポット一覧",
        linkHref: "/",
      },
      {
        title: "夜景・眺望が専門",
        body: "ブルーアワーの見極め、長時間露光、光害の処理。日中の撮影とは別の技術です。",
      },
      {
        title: "撮影後の展開まで請ける",
        body: "データを渡して終わりにもできますし、東京夜景ナビへの記事掲載とSNS展開までまとめて請けることもできます。",
      },
    ],
  },
  pkg: {
    heading: "撮影から掲載までのパッケージ",
    lead: "撮影してお渡しするだけでなく、月間PVを持つメディアと多言語SNSを活用し、撮影素材の露出までを一貫して設計いたします。インバウンド需要を見込むホテル・施設の皆さまに適したプランです。",
    flowDiagram: ["撮影", "素材納品", "東京夜景ナビ掲載", "SNS展開"],
    reachHeading: "届く範囲",
    pvLabel: "東京夜景ナビ 月間PV",
    followersLabel: "SNS フォロワー",
    multilingualHeading: "5言語対応",
    multilingualBody: "日本語・英語・韓国語・繁体字・簡体字に対応し、海外の旅行者や宿泊検討層にも訴求いたします。",
    cta: "パッケージを相談する",
  },
  gallery: {
    heading: "作例",
    lead: "撮影地と機材を添えて載せています。",
    tabs: { room: "客室・眺望", facility: "施設・館内", timelapse: "タイムラプス", event: "イベント・ライトアップ" },
    locationLabel: "撮影地",
    gearLabel: "機材",
    emptyNote: "作例は許諾が取れたものから載せています。用途に近いものは個別に出せます。",
  },
  faq: {
    heading: "よくある質問",
    items: [
      {
        q: "ホテルの客室や眺望の撮影はできますか？",
        a: "可能です。ザ・プリンス パークタワー東京や名古屋プリンスホテル スカイタワーなど、ホテルの客室・レストラン・眺望の撮影実績があります。撮影した写真は公式サイトや旅行予約サイトの掲載素材として使用されています。日没から夜にかけて、眺望が最も美しく見える時間帯に撮影します。",
      },
      {
        q: "東京の夜景撮影の料金はいくらですか？",
        a: "目安として、半日撮影（4時間程度）8万円〜、1日撮影（8時間程度）15万円〜です。タイムラプス撮影は1カット5万円〜、ストック素材のライセンス提供は1点1万円〜。撮影内容・納品枚数に応じてお見積りいたします。",
      },
      {
        q: "タイムラプス映像の撮影・制作も依頼できますか？",
        a: "可能です。東京タワー公式サイトのトップページ映像をはじめ、NHK・BS-TBS・テレビ朝日の番組で使用されたタイムラプス映像を撮影・提供してきました。テレビ番組やCM、デジタルサイネージ向けの映像素材を制作します。",
      },
      {
        q: "撮影許可はどちらが取りますか？",
        a: "撮影場所によって異なります。施設・展望台・公共スペースでの許可交渉や申請は数多く手がけてまいりました。当方で代行することも、貴社の申請をお手伝いすることも可能です。申請にかかる実費は別途申し受けます。",
      },
      {
        q: "雨や悪天候のときは？",
        a: "夜景は天候に左右されるため、予備日を設けておくことをおすすめしております。荒天が見込まれる場合は、事前に日程を調整いたします。",
      },
      {
        q: "納品データの権利や使える範囲は？",
        a: "ご用途に合わせて、買い切り・期間限定・媒体限定などをご提案いたします。二次利用の可否も含め、ご契約前に明確にいたします。",
      },
      {
        q: "東京以外でも撮れますか？",
        a: "対応可能です。東京近郊を中心としておりますが、遠方への出張撮影も承りますのでご相談ください。交通費・宿泊費は別途申し受けます。",
      },
      {
        q: "急ぎでも頼めますか？",
        a: "空き状況によっては短納期でも対応いたします。既存のストック素材で対応できる場合は、さらに早くご提供いたします。",
      },
      {
        q: "撮影日はどう決めますか？",
        a: "夜景は日没時刻・天候・月齢によって仕上がりが大きく変わります。狙いに合わせて、条件の良い日をご提案いたします。",
      },
      {
        q: "使っている機材は？",
        a: "フルサイズのミラーレスを中心に使用しております。夜景・長時間露光・タイムラプスに合わせて機材を構成いたします。",
      },
      {
        q: "個人でも頼めますか？",
        a: "法人・個人いずれのご依頼も承っております。ご用途とご予算に合わせてご提案いたします。",
      },
    ],
  },
  form: {
    heading: "撮影のご相談・お問い合わせ",
    lead: "撮影のご相談・お見積りのご依頼は、下記のフォームよりお送りください。内容を確認のうえ、通常24時間以内にご返信いたします。",
    frameTitle: "撮影依頼フォーム",
    fallbackNote: "撮影依頼専用フォームは準備中です。お急ぎの場合は、下記のお問い合わせページよりご連絡ください。",
    fallbackCta: "お問い合わせページへ",
  },
};

const en: PhotographyLabels = {
  meta: {
    title: "Night View & Scenic Photography Requests | Tokyo Night View Guide",
    description:
      "Night-view and scenic photography in Tokyo — hotel rooms, facilities, real-estate views, timelapse and footage. Credits include the official Tokyo Tower site, NHK and TV Asahi. Pricing guide and how it works.",
  },
  hero: {
    h1: "I shoot Tokyo's night views and cityscapes — that's all I do",
    lead: [
      "I'm Takahiro, a photographer specializing in Tokyo's night views and cityscapes.",
      "Alongside running a night-view site, I shoot and supply footage for hotels, real estate and TV programs. Drawing on 226 night-view spots I've photographed in person, I make photos and footage that make the most of the view.",
      "This page covers my past work, what I can shoot, and a pricing guide.",
    ],
    achievements: "Official Tokyo Tower site / NHK, BS-TBS, TV Asahi / Idemoto Museum Award",
    cta: "Start a conversation",
    ctaNote: "Consultations and quotes are free. I usually reply within 24 hours.",
  },
  clients: {
    heading: "Selected work",
    lead: "Mostly facilities, broadcasters and scenic-view jobs.",
    items: [
      { title: "Tokyo Tower — official website", desc: ["Timelapse running on the PC top page."] },
      {
        title: "The Prince Park Tower Tokyo",
        desc: [
          "Guest-room night views, the restaurant floor, and a dusk-to-night timelapse. Used on the official site and on Rakuten Travel and Jalan.",
        ],
      },
      {
        title: "The Prince Park Tower Tokyo — 20th anniversary renovation",
        desc: ["Interiors of the 33rd and 32nd 'THE TOKYO FUSION' floors."],
      },
      {
        title: "Nagoya Prince Hotel Sky Tower",
        desc: ["Guest-room night views and timelapse, on the official site and travel booking sites."],
      },
      { title: "'Minato Ugoku — 15-second stories' video contest", desc: ["Served as a judge."] },
      {
        title: "Nihon Densetsu Kogyo — corporate site",
        desc: [
          "Timelapse as the main visual: Kasumigaseki from the Marunouchi Building, the lit-up Tokyo Station, and more.",
        ],
      },
      { title: "AIROS Skyview", desc: ["Coverage of the helicopter sightseeing service."] },
      { title: "Restaurant LUKE with SKY LOUNGE", desc: ["Coverage of the limited-time 'SKY TERRACE' event."] },
      {
        title: "8th Tokyo Grand Corridor Photo Contest — Idemoto Museum Award",
        desc: ["Chosen from 911 entries."],
      },
      {
        title: "BS-TBS 'Kanningu Takeyama no Hiruzake'",
        desc: ["Provided the opening timelapse, shot from Asakusa / Komagata."],
      },
      {
        title: "NHK 'Stanislav Bunin — Beyond a 10-Year Silence'",
        desc: ["Provided a timelapse shot from the Shibuya 109 rooftop."],
      },
      { title: "TV Asahi 'Zawatsuku! Friday'", desc: ["Provided photos of Roppongi Keyakizaka and Sakurazaka."] },
      {
        title: "Asahi Shimbun column",
        desc: ["Interviewed about shooting the Harumi pier sculpture 'Fubai Ginran'."],
      },
    ],
  },
  services: {
    heading: "What I shoot",
    lead: "Night and scenic views are the core.",
    cards: [
      {
        title: "Facilities & interiors",
        desc: "Entrances, restaurants, common areas — shot together with the night view.",
      },
      {
        title: "Rooms & views",
        desc: "Views from guest rooms and restaurants, caught at the best time between dusk and night. For websites and booking sites.",
      },
      {
        title: "Views & completions",
        desc: "Tower-condo views and completion shots. I can tell you when Tokyo Tower and the Rainbow Bridge fit a single frame. For sales materials and model rooms.",
      },
      {
        title: "Timelapse & footage",
        desc: "The sky shifting into blue hour, the streak of moving traffic. Footage for TV, commercials and signage.",
      },
      {
        title: "Events & illuminations",
        desc: "Seasonal illuminations and events, shot to the light on the day.",
      },
      {
        title: "Stock",
        desc: "A library from 226 locations. Faster and cheaper than a new shoot. For programs, editorial and ads.",
      },
    ],
  },
  pricing: {
    heading: "Pricing guide",
    lead: "It depends on the job, but here's a guide.",
    colItem: "Scope",
    colPrice: "Guide",
    rows: [
      { key: "halfDay", item: "Half day", unit: "~4 hours" },
      { key: "fullDay", item: "Full day", unit: "~8 hours" },
      { key: "timelapse", item: "Timelapse", unit: "per cut" },
      { key: "stock", item: "Stock license", unit: "per item" },
      { key: "packagePlan", item: "Shoot + article package", unit: "" },
    ],
    tbd: "Quote",
    notes: ["※ Varies with hours and the number of shots.", "※ Travel and permit fees are separate."],
    minBudgetLabel: "Minimum budget",
    cta: "Ask about pricing",
  },
  flow: {
    heading: "From request to delivery",
    lead: "It usually goes like this.",
    daysLabel: "Guide",
    steps: [
      { key: "inquiry", title: "Inquiry", desc: "Send the details through the form." },
      { key: "hearing", title: "Scope & location", desc: "We pin down the use, place and look." },
      { key: "estimate", title: "Quote & dates", desc: "You get a quote and shoot dates to match." },
      { key: "shooting", title: "Shoot", desc: "Shot at the right time, reading the sunset, weather and moon." },
      { key: "retouch", title: "Select & retouch", desc: "I pick the frames and finish them for night." },
      { key: "delivery", title: "Delivery", desc: "Delivered as data — or extended to publication and social." },
    ],
  },
  equipment: {
    heading: "Camera gear",
    lead: "These are the main items I use for night photography.",
    articlePrefix: "The full rundown is in \"",
    articleText: "My night-photography gear",
    articleSuffix: "\" if you'd like the details.",
  },
  reasons: {
    heading: "What sets this apart",
    items: [
      {
        title: "226 spots shot in person",
        body: "I know where things are and when they look best. For real estate I can say on the spot whether Tokyo Tower and the Rainbow Bridge fit one frame. Scouting is fast and doesn't miss.",
        linkLabel: "See the night-view spots",
        linkHref: "/en/",
      },
      {
        title: "Night and scenic only",
        body: "Reading the blue hour, long exposures, light-pollution work. A different craft from daytime shooting.",
      },
      {
        title: "I can take it past the shoot",
        body: "Hand over the data and stop there, or extend to a feature on Tokyo Night View Guide and a social rollout.",
      },
    ],
  },
  pkg: {
    heading: "Shoot through to publication",
    lead: "Not just shoot and hand over — I can design the exposure too, through a media outlet with real monthly traffic and multilingual social. Useful for hotels and facilities after inbound guests.",
    flowDiagram: ["Shoot", "Delivery", "Feature on the site", "Social"],
    reachHeading: "Reach",
    pvLabel: "Monthly page views",
    followersLabel: "Social followers",
    multilingualHeading: "Five languages",
    multilingualBody: "Japanese, English, Korean, Traditional and Simplified Chinese. It reaches overseas travelers and guests too.",
    cta: "Ask about the package",
  },
  gallery: {
    heading: "Samples",
    lead: "Shown with location and gear.",
    tabs: { room: "Rooms & views", facility: "Facilities", timelapse: "Timelapse", event: "Events" },
    locationLabel: "Location",
    gearLabel: "Gear",
    emptyNote: "Samples go up as permissions come in. I can share ones close to your use on request.",
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        q: "Who gets the shooting permits?",
        a: "It depends on the place. I've negotiated and filed permits at facilities, observation decks and public spaces many times. I can handle it or support your application. Actual permit fees are separate.",
      },
      {
        q: "What about rain or bad weather?",
        a: "Night shoots ride on the weather, so I'd keep a backup date. If it looks rough, we move the schedule ahead of time.",
      },
      {
        q: "Rights and usage of the data?",
        a: "I propose terms to fit the use — buyout, time-limited, media-limited. Usage, including secondary use, is settled before we start.",
      },
      {
        q: "Can you shoot outside Tokyo?",
        a: "Yes. Mostly in and around Tokyo, but ask about further out. Travel and lodging are separate.",
      },
      {
        q: "Can you handle rush jobs?",
        a: "If the calendar's open, short turnarounds work. If existing stock fits, even faster.",
      },
      {
        q: "How is the shoot date set?",
        a: "Sunset, weather and the moon change the result a lot. I propose the day with the best conditions for what you want.",
      },
      {
        q: "What gear do you use?",
        a: "Mainly full-frame mirrorless, set up for night, long exposure and timelapse.",
      },
      {
        q: "Do you take individual clients?",
        a: "Companies or individuals, either is fine. I tailor it to the use and budget.",
      },
    ],
  },
  form: {
    heading: "Get in touch",
    lead: "Use this form for questions or a quote. I'll read it and reply.",
    frameTitle: "Photography inquiry form",
    fallbackNote: "The dedicated form is being set up. If it's urgent, reach me through the contact page below.",
    fallbackCta: "Go to the contact page",
  },
};

export const PHOTOGRAPHY_LABELS: Record<string, PhotographyLabels> = {
  ja,
  en,
  // 第2フェーズ: ko / tw / cn を追加。未定義ロケールは en にフォールバック。
};

export function getPhotographyLabels(locale: string): PhotographyLabels {
  return PHOTOGRAPHY_LABELS[locale] ?? PHOTOGRAPHY_LABELS.en;
}
