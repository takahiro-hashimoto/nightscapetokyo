/**
 * observatory タグページの「無料展望台ランキング」セクションをDBに投入するスクリプト
 *
 * 既存の free セクションがあれば削除して再投入します。
 *
 * Usage: node scripts/seed-observatory-free-ranking.mjs
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

// ─── コンテンツ定義 ────────────────────────────────────────────

const FREE_SECTION = {
  key: "free",
  heading: "東京都内の展望台おすすめランキング【無料編】",
  intro:
    "次に東京都内の夜景を無料で楽しめる展望台を16ヶ所、ランキング形式で紹介します。\n「こんな綺麗な景色タダで楽しんでいいの！？」というような素敵な場所ばかりですので、是非チェックしてみて下さい！",
  spots: [
    {
      slug: "metropolitan-government-observatory",
      description: `東京都の中心である行政施設の都庁第一本庁舎。この施設の45階には入場料無料の展望フロアが2ヶ所（南展望室・北展望室）あります。展望室内にはレストランやお土産売り場もあり、連日多くの観光客の方が訪れています。
西側は三角帽子がトレードマークの新宿パークタワーや首都高速道路、地平線の先には富士山というとても美しい夜景を鑑賞することが出来ます。
東側は所狭しと林立する新宿の高層ビル群や乗降客数ギネス認定記録を持つ新宿駅周辺の街並み。さすが日本を代表するビジネス街！といえるような迫力のある夜景を楽しめます。
都庁周辺はオフィス街なので平日の夜の方が光量が多くおすすめです。また、都民広場では都庁をキャンバスにしたプロジェクションマッピングも毎日実施されているので、ぜひ併せて立ち寄ってください。`,
    },
    {
      slug: "kitte-garden",
      description: `日本郵便が初めて手がける商業施設として2013年に開業した「KITTE」。6階には約1,500平方メートルに及ぶ開放的な屋上庭園「KITTEガーデン」があり、東京駅舎や駅構内を発着する新幹線や電車を眺めることができます。
ライトアップされた赤レンガ駅舎や美しく整備された広場、周辺を取り囲むように建つ高層ビル群の共演は圧巻の一言です。また少し視線をずらせば東京駅構内を発着する新幹線や電車を眺めることも可能で、トレインビューがお好きな方にもおすすめです。
なお、KITTE 屋上庭園は23時まで開放されていますが、東京駅のライトアップが実施されているのは日没から21時頃まで。訪れてみたい方は夜景鑑賞を楽しんだ後に周辺のレストランで食事を楽しむのがおすすめです。`,
    },
    {
      slug: "towerhall-funabori",
      description: `イベント会場、会議室、映画館などを擁する大規模複合施設のタワーホール船堀。高さ115mの位置には回廊式の無料展望台があり、都内全域を一望することが可能です。
北西側には荒川越しの上野・浅草方面の街並みが広がり、この場所から眺める東京スカイツリーは都内随一の美しさを誇ります。西側には港区方面のライトアップされた東京タワーや都心の高層ビル群が連なり、天気の良い日には富士山も眺めることができます。
これだけ高いレベルの夜景が無料で鑑賞できるのは驚きの一言。都心からやや離れていることもあり混雑も少なく、デートの目的先にも最適です。なお三脚を使って撮影する場合は5階受付で許可証を取得する必要があります。`,
    },
    {
      slug: "civic-bunkyo",
      description: `文京区役所や文化ホールが入る公共施設である文京シビックセンター。同ビルの25階には無料で入場できる展望台があり、地上約105mから東京の街並みを一望することが可能です。
一番の見どころは西南の方角。新宿副都心方面のビル群と富士山が重なり合う光景はこの場所からしか眺めることができません。池袋方面も光量の多い迫力ある夜景が堪能できます。
窓ガラスが斜めに貼られているため室内の写り込みが少なく、非常にクリアな夜景が楽しめるのも特徴。人の数も比較的落ち着いているのでデートにもおすすめです。`,
    },
    {
      slug: "marubiru-f35",
      description: `東京駅から歩いてすぐの場所にある36階建ての複合施設・丸の内ビルディング。レストラン街がある最上階には開放的な展望スペースが設けられています。
窓の向こうにはライトアップされた国会議事堂や霞が関方面の高層ビル群、そして富士山を眺めることができます。視界がひらけているのが一方向だけではありますが、この光量の多さや絵に書いたような美しい街並みのバランスは一見の価値があります。
同ビルの5階には東京駅を俯瞰して眺めることができる展望スペースもあるので、合わせて立ち寄ってみて下さい。`,
    },
    {
      slug: "ebis-garden-place-sky-lounge",
      description: `東京都渋谷区および目黒区に跨る複合施設の恵比寿ガーデンプレイス。38階にあるレストランフロアには2つの展望スペースがあります。
一番の見どころは東京タワーを程よい距離感で眺められる南側の景色。周辺のビル灯りも美しく、うっとりするような夜景が楽しめます。少し目線をずらせば東京スカイツリーやレインボーブリッジも眺めることが可能です。
もう一つの展望スペースでは渋谷や新宿の高層ビル群、空気が澄んでいる日には富士山を眺めることができます。2つの展望スペースで異なる方角の夜景を楽しめるのがこのスポットの魅力です。`,
    },
    {
      slug: "carrot-tower-observation",
      description: `東急田園都市線三軒茶屋駅周辺にある世田谷区のランドマークタワー、キャロットタワー。同ビルの26Fには無料で入場できる展望ロビーがあります。
見どころは西側の景色。周辺に大きな建物がなくスッキリと富士山を眺めることができ、都内の展望台の中でも随一のレベルを誇ります。少し視線をずらすと首都高速道路の両脇に高層ビル群が立ち並ぶ珍しい光景や、タワーマンション群が特徴的な武蔵小杉駅周辺の街並みも鑑賞できます。
26Fにはカフェや夜景と共に本格コース料理が楽しめる「オークラレストランスカイキャロット」もあるので、デートで利用するのにもおすすめです。`,
    },
    {
      slug: "haneda-airport",
      description: `東京の玄関として1日に500便が集まる羽田空港。同空港には3つの展望デッキがあり、航空機が離着陸する様子を眺めることができます。
3つの展望デッキの中でイチオシなのが第一ターミナル 展望デッキ。空気が澄んでいる日には富士山と羽田空港第三ターミナルの共演を楽しむことができ、滑走路の進入灯の明かりも相まって非常に幻想的な光景が広がります。
開放時間は6:30〜22:00まで。夕暮れ時の前後に羽田空港を利用される際はぜひお立ち寄りください。`,
    },
    {
      slug: "caretta-shiodome-sky-view",
      description: `カレッタ汐留の46階・47階レストラン街にある展望ラウンジ「SKY VIEW」。小さな展望スペースではありますが、窓の向こうにはベイエリアの美しい景色が広がります。
1つ目の見どころはお台場や竹芝の街並みが広がる南側の景色。お台場を代表するランドマークのレインボーブリッジや高さ119mの「メムズ東京」があり、絵に書いたような美しい眺めを楽しめます。
2つ目は隅田川に架かる築地大橋や勝鬨橋、晴海方面のタワーマンションを眺めることができる東側の景色。勝鬨橋のライトアップは日没から23時まで実施されています。人の数も少なく落ち着いて夜景を楽しめる穴場の展望台です。`,
    },
    {
      slug: "tokyu-kabukicho-tower",
      description: `2023年4月14日に開業した東急歌舞伎町タワー。ホテル・映画館・劇場・ライブホールなどのエンタメ施設からなる大型商業施設で、高さ225mの超高層ビルの17階部分には無料の展望フロアや開放感のある屋外テラスがあります。
見どころは南西側にある新宿の高層ビル群の眺め。トワイライトタイムには茜色の空を背景に眩いビル灯りが広がります。窓の写り込みがやや激しいのが難点ですが、とても迫力のある夜景です。
新宿エリアで遊んだ帰りなどにぜひ立ち寄ってみてはいかがでしょうか。`,
    },
    {
      slug: "asakusa-cultural-tourism-center",
      description: `浅草寺・雷門の向かい側に建つ和モダンテイストの美しい浅草文化観光センター。観光案内施設として機能する同ビルの8階には無料の展望テラスがあります。
見どころは浅草寺の全景を眺めることができる北側の景色。雷門から本堂へとスラっと伸びる仲見世通りやライトアップされた五重塔・本堂の眺めは一見の価値があります。雷門の裏側を見下ろせる珍しい視点もこのスポットならではの魅力です。
展望フロアは22:00まで開放されており、浅草観光の帰り道などにぜひ立ち寄ってみてください。`,
    },
    {
      slug: "kitatopia",
      description: `北とぴあ17階にある無料の展望台。3方向に窓があり、トレインビューや東京スカイツリーを眺めることができます。
特に王子駅側の線路は新幹線をはじめ複数の電車が行き交うのでお子さん連れの方にもおすすめ。東京スカイツリーも望めます。
同フロア内にはカフェレストランのVIEW&KITCHEN QUAD17も併設されており（営業は17:00まで）、食事と合わせて楽しむことが可能です。三脚の使用は禁止されているのでご注意ください。`,
    },
    {
      slug: "nerima-ward-office",
      description: `練馬区役所本庁舎の20Fにある展望ロビー。高さ80mから眺める街並みは光量も多く、入場料無料とは思えない光景を楽しめます。
3方面に展望窓があり、中でも一押しなのは富士山が見える西側の景色。夕日が沈んだ後のトワイライトタイムの光景は息を呑む美しさがあります。
同フロアにはレストランもあり食事をしながら夜景を楽しむことも可能。練馬駅からのアクセスも抜群です。`,
    },
    {
      slug: "newoman-takanawa",
      description: `2025年9月に誕生した「ニュウマン高輪」。JR「高輪ゲートウェイ」駅と直結する便利な立地にある大型複合施設で、28階にはLUFTBAUMという緑豊かな回遊式テラスが2ヶ所あります。
注目は湾岸エリアの眺望が広がる北東の景色。ライトアップされたレインボーブリッジや芝浦エリアの高層ビル群が織りなす夜景は一見の価値があります。眼下に見えるトレインビューも見どころです。
吹き抜けの天井で開放感も抜群。0時まで立入可能なので、施設で食事をした後などにぜひ立ち寄ってみてください。`,
    },
    {
      slug: "tokyo-skytree-east-tower",
      description: `東京スカイツリーに隣接する商業施設の東京ソラマチ。30階・31階のレストラン街には2つの無料展望スペースがあります。
おすすめは南西方向を眺めることができる展望スペース。大きな窓の向こうには大迫力のスカイツリーがそびえたちます。東京スカイツリーを眺めることができる名所は数多くありますが、これほど至近距離で眺めることができる展望スペースは唯一無二といえるでしょう。
無料の展望台とはいえ高さ150mを超える位置からの景観はとても迫力があります。東京スカイツリー展望台や東京ソラマチへ観光で訪れた際にぜひ立ち寄ってみてください。`,
    },
    {
      slug: "ilink-town",
      description: `JR市川駅南口直結の高層マンションに設けられているアイリンク展望施設。45Fの屋内と屋外に展望デッキがあり、地上150mの高さから美しい眺望を無料で楽しむことができます。
いちばんの見どころはなんといっても東京スカイツリーと富士山の共演を眺めることができる西側の景色。茜色の空を背景に日本を代表するランドマークが共演する絶景は一見の価値があります。
普段は三脚の使用が禁止されていますが、毎月第3金曜日・土曜日の「ライトダウンイベント」開催時のみ三脚を使っての夜景撮影が楽しめます。撮影目的の方はこのタイミングを見計らって訪れるのがおすすめです。`,
    },
  ],
};

// ─── ヘルパー ────────────────────────────────────────────────

async function getTagIdBySlug(slug) {
  const { data } = await supabase
    .from("tags")
    .select("id, name")
    .eq("slug", slug)
    .single();
  return data;
}

async function getSpotIdBySlug(slug) {
  const { data } = await supabase
    .from("spots")
    .select("id, title")
    .eq("slug", slug)
    .single();
  return data;
}

// ─── メイン ──────────────────────────────────────────────────

async function main() {
  console.log("=== observatory 無料ランキング シード ===\n");

  // 1. observatory タグを取得
  const tag = await getTagIdBySlug("observatory");
  if (!tag) {
    console.error("❌ 'observatory' タグが見つかりません");
    process.exit(1);
  }
  console.log(`✅ タグ: ${tag.name} (${tag.id})`);

  // 2. tag_page を取得（存在前提）
  const { data: page } = await supabase
    .from("tag_pages")
    .select("id, title")
    .eq("tag_id", tag.id)
    .single();

  if (!page) {
    console.error("❌ observatory タグページが見つかりません。先に有料ランキングスクリプトを実行してください。");
    process.exit(1);
  }
  console.log(`✅ タグページ: ${page.title} (${page.id})`);

  // 3. 既存の free セクションを削除（cascade で section_spots も削除）
  const { data: existingSections } = await supabase
    .from("tag_page_sections")
    .select("id, key")
    .eq("tag_page_id", page.id)
    .eq("key", "free");

  if (existingSections && existingSections.length > 0) {
    for (const sec of existingSections) {
      await supabase.from("tag_page_sections").delete().eq("id", sec.id);
    }
    console.log(`🗑️  既存 free セクションを削除しました`);
  }

  // 4. 新しい free セクションを作成（paid の後ろ = sort_order: 1）
  const { data: section, error: secErr } = await supabase
    .from("tag_page_sections")
    .insert({
      tag_page_id: page.id,
      key: FREE_SECTION.key,
      heading: FREE_SECTION.heading,
      intro: FREE_SECTION.intro,
      sort_order: 1,
    })
    .select("id")
    .single();

  if (secErr || !section) {
    console.error("❌ セクション作成失敗:", secErr);
    process.exit(1);
  }
  console.log(`✅ セクション "${FREE_SECTION.heading}" 作成: ${section.id}`);

  // 5. セクション内スポットを追加
  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < FREE_SECTION.spots.length; i++) {
    const { slug, description } = FREE_SECTION.spots[i];
    const spot = await getSpotIdBySlug(slug);

    if (!spot) {
      console.warn(`  ⚠️  スポット "${slug}" がDBに見つかりません → スキップ`);
      skipCount++;
      continue;
    }

    const { error: spotErr } = await supabase
      .from("tag_page_section_spots")
      .insert({
        section_id: section.id,
        spot_id: spot.id,
        description: description.trim(),
        sort_order: i,
      });

    if (spotErr) {
      console.error(`  ❌ スポット "${slug}" の追加失敗:`, spotErr);
    } else {
      console.log(`  ✅ 第${i + 1}位: ${spot.title ?? slug}`);
      successCount++;
    }
  }

  console.log(`\n=== 完了 ===`);
  console.log(`登録: ${successCount} 件 / スキップ: ${skipCount} 件`);
  if (skipCount > 0) {
    console.log(
      "⚠️  スキップされたスポットは slug を確認して手動で追加してください。"
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
