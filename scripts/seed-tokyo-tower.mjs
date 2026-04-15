/**
 * 東京タワーのタグページデータをDBに投入するシードスクリプト
 * Usage: node scripts/seed-tokyo-tower.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envFile = readFileSync(resolve(__dirname, "../.env.local"), "utf-8");
for (const line of envFile.split("\n")) {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function main() {
  // 1. tokyo-tower タグの ID を取得
  const { data: tag, error: tagErr } = await supabase
    .from("tags")
    .select("id, name")
    .eq("slug", "tokyo-tower")
    .single();
  if (tagErr || !tag) {
    console.error("tokyo-tower タグが見つかりません:", tagErr);
    process.exit(1);
  }
  console.log(`✅ タグ: ${tag.name} (${tag.id})`);

  // 2. tag_pages にレコードを作成
  const { data: existing } = await supabase
    .from("tag_pages")
    .select("id")
    .eq("tag_id", tag.id)
    .single();

  if (existing) {
    console.log(`⚠️ 既にタグページが存在します (${existing.id})。スキップします。`);
    process.exit(0);
  }

  const { data: tagPage, error: tpErr } = await supabase
    .from("tag_pages")
    .insert({
      tag_id: tag.id,
      title: "【保存版】東京タワーの写真撮影スポットおすすめ22選！インスタ映えする夜景スポットがわかる",
      breadcrumb: "東京タワーが見えるおすすめ夜景スポット",
      hero_image: "https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-view-02.jpg",
      updated_at_label: "2026.03.07",
      pr_notice: "本記事にはPRが含まれています",
      lead: `1958年12月23日竣工された東京を代表するランドマークである東京タワー。\n高さ333m、スカイツリーに次いで日本で2番目に高い電波塔です。\nそんな東京タワーにはフォトジェニックな写真を撮れる映えスポットがいくつもあります。\n今回はその中から定番から穴場までおすすめの写真撮影スポットを厳選して紹介します。\n東京タワーをどこから撮るのがいいのかお悩みの方は是非チェックしてみてください！`,
      map_heading: "東京タワーの映えスポットマップ",
      map_intro: "今回紹介した東京タワーの写真撮影スポットをGoogle Mapにまとめてみました。それぞれの撮影ポイントの位置関係を把握するのにご活用ください！",
      map_iframe_html: `<iframe src="https://www.google.com/maps/d/embed?mid=1234567890&ehbc=2E312F" width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
      published: true,
    })
    .select("id")
    .single();

  if (tpErr || !tagPage) {
    console.error("tag_pages 作成失敗:", tpErr);
    process.exit(1);
  }
  console.log(`✅ tag_pages 作成: ${tagPage.id}`);

  // 3. PRバナー
  const { data: banner, error: bannerErr } = await supabase
    .from("tag_page_pr_banners")
    .insert({
      tag_page_id: tagPage.id,
      heading: "【PR】ヘリコプター遊覧で一生の思い出に残る感動体験を。",
      image: "https://nightscape.tokyo/wp-content/uploads/2024/09/tokyo-tower-1-1024x1024.jpg",
      body: [
        "AIROS Skyviewでは、22~55分の多彩なヘリコプター遊覧コースをご用意しています。",
        "上空600mから眺める夜景は、まるで宝石を散りばめたような輝き。見渡す限りの光の大海原に、心奪われること間違いなしです。",
        "プロポーズや記念日など、特別な瞬間を一生忘れられない思い出にしませんか？",
      ],
    })
    .select("id")
    .single();

  if (bannerErr) {
    console.error("PRバナー作成失敗:", bannerErr);
  } else {
    console.log(`✅ PRバナー作成: ${banner.id}`);

    // PRバナーリンク
    const { error: linkErr } = await supabase
      .from("tag_page_pr_banner_links")
      .insert([
        {
          pr_banner_id: banner.id,
          label: "遊覧コースの詳細を見る",
          href: "https://airos-skyview.jp/cruising/?utm_source=nightscape&utm_medium=referral",
          sort_order: 0,
        },
        {
          pr_banner_id: banner.id,
          label: "体験記事を読む",
          href: "/article/airos-skyview",
          sort_order: 1,
        },
      ]);
    if (linkErr) console.error("PRバナーリンク失敗:", linkErr);
    else console.log(`✅ PRバナーリンク作成`);
  }

  // 4. セクション + スポット
  const sections = [
    {
      key: "hotel",
      heading: "東京タワーが綺麗に見えるホテル",
      intro: "東京タワービューが楽しめる夜景が綺麗なホテルを4つご紹介します。どの宿泊施設も客室からの眺めがとても美しいのでぜひチェックしてみてください。",
      spotSlugs: [
        "the-prince-park-tower-tokyo",
        "andaz-tokyo-toranomon-hills",
        "park-hotel-tokyo",
        "ginza-crestonhotel",
      ],
    },
    {
      key: "observatory",
      heading: "東京タワーが綺麗に見える展望台",
      intro: "次に東京タワービューが楽しめる都内の展望台を7個ご紹介します。東京ならではの豪華な夜景を堪能できる場所ばかりなので、ぜひチェックしてみてください。",
      spotSlugs: [
        "tokyo-city-view",
        "azabudai-hills",
        "shibuya-sky",
        "ebis-garden-place-sky-lounge",
        "hachitama-observatory",
        "telecom-center",
        "tokyo-sky-tree",
      ],
    },
    {
      key: "park",
      heading: "東京タワーが綺麗に見える広場・公園",
      intro: "次に東京タワービューを無料で楽しめるスポットを紹介していきます。意外な構図で東京タワーを眺めることができる穴場スポットもあるのでぜひチェックしてみてください。",
      spotSlugs: [
        "tokyo-tower-stairs",
        "zojyoji",
        "fudanotsuji",
        "minato-park-1",
        "shiba-park-04",
        "prince-park-tower-tokyo-ground",
        "tsukiji-bridge",
        "shinagawa-season-terrace",
        "rainbow-bridge-promenade",
        "roppongi-keyaki-street",
        "chidorigabuchi",
        "tokyo-tower-under",
      ],
    },
  ];

  // スポット説明文
  const descriptions = {
    "the-prince-park-tower-tokyo": `東京タワーのすぐそば、港区立芝公園内という好立地に立つザ・プリンス パークタワー東京。\n2005年に開業された地上33階建て、客室603室のホテルです。\nこのホテルのタワー側の客室からは何も遮るものなく、ライトアップされた東京タワーを眺めることができます。\n東京タワーの背後には虎ノ門方面の高層ビル群も立ち並び、これぞ東京という景色を楽しめます。\nタワーサイド以外の景観も素晴らしく、夜景好きにはたまらないホテルとなっています。`,
    "andaz-tokyo-toranomon-hills": `2014年6月に開業したハイアットブランドのホテル。\n虎ノ門ヒルズの47-52階に入居しており、客室からは東京都内の景色を一望することができます。\nイチオシは東京タワーやレインボーブリッジを眺めることが出来る南西方面の眺望。これでもかというぐらいに東京らしい景色を堪能することが可能です。`,
    "park-hotel-tokyo": `2003年開業の汐留メディアタワーに入居するパークホテル東京。\n全室が26階以上に位置し、都心の景色を一望することができるのがウリのホテルです。\n特に東京タワーや富士山、や虎ノ門の高層ビル群を眺めることができる西側の眺めは都内でも有数の美しさを誇ります。`,
    "ginza-crestonhotel": `聖路加レジデンスの32～38階に入居するクレストン銀座。\n1994年に開業した4つ星ホテルで、レストラン、プール、ジムなど設備も充実。\n全客室が高層階に位置しており、客室の大きな窓の先には美しいウォーターフロント夜景が広がります。\n一番の見どころは南西側に広がる東京タワービュー。天気が良い日には富士山とのコラボレーションを拝むことも可能です。\nまた、隅田川に架かる勝鬨橋や築地大橋が色鮮やかにライトアップされる様子も必見。\n見所がとても多いおすすめの宿泊施設です。`,
    "tokyo-city-view": `六本木ヒルズ52階にある展望台、東京シティビュー。\n海抜250メートルの高さからどこまでも広がる東京の夜景を一望できる、都内随一の人気を誇る展望台です。\n一押しは南東側の眺望。\nライトアップされた東京タワーや高層ビル群のまばゆい光が印象的な夜景を堪能することができます。\n都内には様々な展望台がありますが、東京シティービューは程よい距離感で東京タワーを眺めれられるベストな展望台といえます。`,
    "azabudai-hills": `2023年11月に開業した麻布台ヒルズ。\n複数の商業ビル群で構成されており、メイン棟の「森JPタワー」はあべのハルカスを抜き、日本一の高さ325mを誇っています。\nそんな森JPタワーの33Fには展望フロアのスカイロビーがあり東京の街並みを眺めることができます。\n見どころはなんといっても東南方向の東京タワーが目の前に見える眺望。\n遮るものなく東京タワーが全景を眺めることができるとても貴重なスポットです。\n開業当初は無料で一般公開されていましたが、2024年4月18日からはレストランやカフェを利用する方のみ入場可能という形になっているので、注意しましょう。`,
    "shibuya-sky": `2019年に開業された渋谷スクランブルスクエア。渋谷エリアで最も高い地上229mの高さを誇る商業施設です。\n47階と46階には展望施設の渋谷スカイがあり、都内を一望することができます。\n渋谷のスクランブル交差点や東京タワー、空気が澄んでいる日には富士山などを景色を眺めることができるのが魅力です。\nなお、47階フロアは三脚の利用が禁止されていますが、46階は制限がないためしっかり撮影を楽しみたい場合は46階を利用しましょう。`,
    "ebis-garden-place-sky-lounge": `サッポロビール工場跡地が再開発されて誕生した恵比寿ガーデンプレイス。\n38階、39階のレストラン街には2ヶ所の無料展望スペースが設けられており、東京の町並みを眺めることができます。\n見どころは東の方角が開けている展望スペース。東京タワーやレインボーブリッジなど、東京を代表するランドマークが見渡せます。\n非常に光量も多く、「この夜景を無料で楽しめるなんて…」と思わず声が出てしまうほど美しいです。`,
    "hachitama-observatory": `フジテレビ本社屋25階に設置されている展望台のはちたま。\n直径32メートル、頂上までの高さは約123メートルの大きな球体であるのが特徴で、臨海副都心270度のパノラマが楽しめます。\n特にレインボーブリッジと東京タワーのライトアップされた光景は非常に美しいです。\n営業時間が18時までと短いので、夜景を楽しみたい方は冬の時期に訪れましょう。`,
    "telecom-center": `テレコムセンター21階にある有料の展望ラウンジ。\n東京タワーとレインボーブリッジが重なり合う光景や賑やかな明かりを放つお台場エリアの夜景が見どころの展望台です。\n都内の有料の展望台は休日はどこも多くの人で賑わいますが、この展望ラウンジはいつ訪れても人が少なく落ち着いています。\nゆっくり写真撮影を楽しみたい方におすすめの展望台です。`,
    "tokyo-sky-tree": `東京を代表するランドマークのひとつ、東京スカイツリー。\n地上高634mを誇るタワーは2011年に「世界一高いタワー」としてギネス認定されています。\n東京の街並みをほぼ360度見渡せる展望台からは東京タワーも眺めることができます。\n東京タワーが大きく見えるわけではありませんが、港区の街並みに溶け込んでいる姿はとてもフォトジェニックです。`,
    "tokyo-tower-stairs": `東京タワーの南側に隣接する地下駐車場。\n地上に出る出口の階段を見上げると、目の前に東京タワーが現れます。\n世界的に人気なインスタ映えする撮影スポットになっており、記念写真を撮るために連日多くの行列ができています。\n場所がわかりづらい場合は「とうふ屋うかい」を目指してアクセスしてみるのがおすすめです。`,
    "zojyoji": `600年の歴史をもち、徳川家康公ゆかりの秘仏「黒本尊」を祀る「勝運」のお寺として親しまれている増上寺。\n夜になると朱色に輝く東京タワーの麓に本堂がそびえ立っている姿を眺めることができます。\n世代を超えた新旧の対比は一見の価値ありです。東京タワー周辺に訪れた際はぜひ立ち寄ってみてください。`,
    "fudanotsuji": `ドラマや映画のロケでもたびたび登場する東京タワーが見える夜景スポット。\n国道15号線（第一京浜）にかかる歩道橋の上から北側を眺めると都道301号の先に東京タワーが見えます。\n道路沿いにずらりと建ち並ぶビル群の先に東京タワーがそびえ立つ光景はとても迫力があります。`,
    "minato-park-1": `1873年に開演した日本で最も古い公園の1つとして知られている芝公園。\n視界を遮るものがほとんどなく、東京タワーの全景をスッキリと眺められる夜景スポットです。\n広々とした園内には複数のベンチが設置されており、人も少ないので夜景鑑賞に最適。`,
    "shiba-park-04": `ドラマのロケ地にも使われることが多い芝公園4号地。\n児童遊園と運動広場を結ぶプロムナードに立つと、東京タワーを正面から眺めることができます。\n東京タワーが綺麗に見れる場所はいくつかありますが、その中でも芝公園4号地のこの景色は高い独自性があります。\nプロムナードを照らす灯りも良いアクセントとなっており、とても美しい夜景です。`,
    "prince-park-tower-tokyo-ground": `東京タワーの公式サイトにも登場する東京タワーが見える定番スポット。\nザ・プリンス パークタワー東京の敷地内にあるヨーロッパ的な作りの庭園。\nホテルの宿泊客以外も自由に出入りできるスペースで、目の前を遮るものなく東京タワーを眺めることができます。\n東京タワー公式サイトの今日のライトアップに掲載されている写真はここから撮られたもの。`,
    "tsukiji-bridge": `築地エリアと勝どきエリアを結ぶ築地大橋。\n隅田川に架かる橋としては最も下流に位置しており、遮るものなく浜松町や芝浦エリアのビル群を眺めることができます。\nビルの間からはライトアップされた東京タワーも顔を覗かせており、程よい距離感から写真撮ることが可能です。`,
    "shinagawa-season-terrace": `2015年開業の高さ144mの超高層ビル、品川シーズンテラス。\n2階には都会のオアシスをコンセプトに作られた広々とした緑化広場があり、のんびりと寛ぐことができます。\n一番の見所は広場入口付近にある人工池。左右にはライトアップされた並木があり視線の先に東京タワーを眺めることが出来ます。\nカメラを人工池に近づけてリフレクション写真を撮るのがおすすめです。`,
    "rainbow-bridge-promenade": `東京を代表するランドマークのレインボーブリッジ。\n遊歩道が整備されおり、東京のウォーターフロントの景色を眺めながら歩いて渡ることができるようになっています。\nノースルートとサウスルートの2つの通路があり、前者からは美しい東京タワービューを眺めることができます。\n全長1.7キロメートルの遊歩道は徒歩20~30分で渡ることが可能。道の途中に複数の展望スペースがあるので、写真撮影を楽しみながら散歩してみてはいかがでしょうか？`,
    "roppongi-keyaki-street": `六本木ヒルズのすぐにある約400mの坂道である、けやき坂。\n坂の先に東京タワーを眺めることができる隠れたフォトスポットです。\n毎年クリスマスシーズンは雪の並木道をイメージしたイルミネーションイベントが実施されており、煌びやかなライトと東京タワーの共演を撮ることができます。\nぜひ冬の時期に写真撮影に訪れてみてはいかがでしょうか。`,
    "chidorigabuchi": `靖国通りから北の丸公園に沿って整備された、700メートルにも及ぶ遊歩道。\n通りにはソメイヨシノをはじめとする約260本もの桜の木が植えられており、春には鮮やかな桜景を楽しむことができます。\n夜にはライトアップイベントも実施されており、東京タワーと夜桜の共演を写真に収めることができます。`,
    "tokyo-tower-under": `昭和33年に建てられた日本初の本格的な夜景展望台がある東京タワー。\n展望台からの景色はもちろん素敵ですが、東京タワーを真下から見上げた景色も隠れたビュースポットです。\nライトアップされた骨組みが闇夜に浮かび上がる光景はなんとも幻想的でぜひ撮影に訪れてほしいところ。\nちなみに東京夜景ナビではスマホ壁紙を無料で配布していますが、東京タワーの真下から撮影した写真は人気が高いです。`,
  };

  // 全セクションのスポットslugを集めてDB上のIDを取得
  const allSlugs = sections.flatMap((s) => s.spotSlugs);
  const { data: spots, error: spotsErr } = await supabase
    .from("spots")
    .select("id, slug")
    .in("slug", allSlugs);

  if (spotsErr) {
    console.error("スポット取得失敗:", spotsErr);
    process.exit(1);
  }

  const slugToId = {};
  for (const s of spots ?? []) {
    slugToId[s.slug] = s.id;
  }
  console.log(`✅ スポットID取得: ${Object.keys(slugToId).length}/${allSlugs.length} 件マッチ`);

  // 見つからなかったスラッグを表示
  const missing = allSlugs.filter((s) => !slugToId[s]);
  if (missing.length > 0) {
    console.log(`⚠️ DB未登録スポット: ${missing.join(", ")}`);
  }

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const { data: sectionRow, error: secErr } = await supabase
      .from("tag_page_sections")
      .insert({
        tag_page_id: tagPage.id,
        key: sec.key,
        heading: sec.heading,
        intro: sec.intro,
        sort_order: i,
      })
      .select("id")
      .single();

    if (secErr) {
      console.error(`セクション「${sec.key}」作成失敗:`, secErr);
      continue;
    }
    console.log(`✅ セクション「${sec.heading}」作成`);

    // セクション内スポット
    const spotInserts = sec.spotSlugs
      .map((slug, j) => {
        const spotId = slugToId[slug];
        if (!spotId) return null;
        return {
          section_id: sectionRow.id,
          spot_id: spotId,
          description: descriptions[slug] || null,
          sort_order: j,
        };
      })
      .filter(Boolean);

    if (spotInserts.length > 0) {
      const { error: ssErr } = await supabase
        .from("tag_page_section_spots")
        .insert(spotInserts);
      if (ssErr) console.error(`  スポット紐付け失敗:`, ssErr);
      else console.log(`  ✅ スポット ${spotInserts.length} 件紐付け`);
    }
  }

  // 5. FAQ
  const faqs = [
    {
      question: "インスタなどのSNSで話題の「東京タワーに続く階段」が撮れる場所はどこですか？",
      answer: "東京タワーの南側に隣接する地下駐車場です。場所がよくわからない場合は「とうふ屋うかい」と検索するとアクセスしやすいです。",
    },
    {
      question: "東京タワーとレインボーブリッジを一緒に撮るならどこがおすすめですか？",
      answer: "球体展望室はちたまとテレコムセンター展望台がおすすめです。",
    },
    {
      question: "東京タワーのライトアップは何時まで実施されていますか？",
      answer: "東京タワーのライトアップは日没から24時まで実施されています。",
    },
    {
      question: "東京タワーのライトアップスケジュールはどこで確認できますか？",
      answer: "東京タワー公式サイトの本日のライトアップから確認可能です。",
    },
    {
      question: "東京タワーのベストスポットはどこですか？どこから見るのがおすすめ？",
      answer: "麻布台ヒルズの展望台がおすすめです。迫力のある東京タワーの全景を無料で楽しむことができるからです。",
    },
  ];

  const faqInserts = faqs.map((f, i) => ({
    tag_page_id: tagPage.id,
    question: f.question,
    answer: f.answer,
    sort_order: i,
  }));

  const { error: faqErr } = await supabase
    .from("tag_page_faqs")
    .insert(faqInserts);

  if (faqErr) console.error("FAQ作成失敗:", faqErr);
  else console.log(`✅ FAQ ${faqs.length} 件作成`);

  console.log("\n🎉 シード完了！管理画面 /admin/tag-pages で確認してください。");
}

main().catch(console.error);
