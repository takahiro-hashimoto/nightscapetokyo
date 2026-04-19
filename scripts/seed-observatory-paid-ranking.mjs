/**
 * observatory タグページの「有料展望台ランキング」セクションをDBに投入するスクリプト
 *
 * 既存の paid セクションがあれば削除して再投入します。
 * tag_page 本体（title/lead/hero_image 等）が未作成の場合は新規作成します。
 *
 * Usage: node scripts/seed-observatory-paid-ranking.mjs
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

const PAGE_META = {
  title: "東京都内の展望台おすすめランキング！有料・無料別に人気施設を紹介",
  breadcrumb: "展望台おすすめランキング",
  hero_image:
    "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2023/01/kitte-marunouchi-observation.jpg",
  updated_at_label: "2025.12.29",
  pr_notice: "一部PRを含みます",
  lead: "東京都内には東京タワーやスカイツリーなどのランドマーク、光まばゆい高層ビル群を眺めることができる展望台が多数あります。\n東京観光に訪れたい方や都内のデート目的地として探したいという方も多いのではないでしょうか。\nそこで本記事では東京都内の展望台を定番から穴場まで行き尽くしている筆者がおすすめの展望台を有料と無料の施設に分けて厳選して紹介します。\n雰囲気もよく東京の夜景を満喫するのにふさわしい場所ばかりですので、是非チェックしてみて下さい！",
  published: true,
};

const PAID_SECTION = {
  key: "paid",
  heading: "東京都内の展望台おすすめランキング【有料編】",
  intro:
    "まずは有料の展望台から紹介します。入場料がかかりますが、その分設備や眺望のクオリティは抜群です。東京タワーやスカイツリーといった定番のランドマーク展望台から、麻布台ヒルズや渋谷スカイなど近年話題の新施設まで厳選しました。",
  spots: [
    {
      slug: "tokyo-tower-observatory",
      description: `昭和33年に建てられた日本初の本格的な夜景展望台の東京タワー展望台。
高さ150mのメインデッキと高さ250mのトップデッキがあり、360°東京の街並みを眺めることができます。
見どころの１つ目は南西側の景色。都道301号が国道1号に合流する様子がまるでタワーのような形を描いていることから、「もう一つの東京タワー」とも呼ばれSNSで話題となったビューポイント。
空気が澄んでいる日には富士山を眺めることもできてとても美しいです。
見どころ2つ目は虎ノ門方面の町並みを眺めることが出来る西側の景色。地上330mの日本一高い超高層ビルの麻布台ヒルズを始めとした迫力ある高層ビル群をダイナミックに眺めることができます。
東京タワー展望台はカフェやレストランも充実しており、夜景鑑賞後もゆっくり館内でくつろぐことが可能です。
また、東京タワー展望台周辺には東京タワーを美しく眺められるスポットが多くあります。
東京観光の素敵な思い出が作れる場所なので、ぜひ訪れてみて下さい！`,
    },
    {
      slug: "tokyo-sky-tree",
      description: `東京を代表するランドマークのひとつ、東京スカイツリー。
地上高634mを誇るタワーは2011年に「世界一高いタワー」としてギネス認定されています。
施設内には2つの展望フロアが設けられており、東京の街並みを一望することができます。
一番の見どころはビジネスの中心地である千代田区や港区方面の高層ビル群を眺めることができる南西の景色。平日の夜に訪れれば驚くほど光眩い景色を堪能することができます。高さ333mの東京タワーが夜景に花を添えているのも素敵です。
隅田川には日没を過ぎるとライトアップが実施される橋が12個あります。展望台からはそれらの美しい橋を眺めることも可能。特に中央区方面にはブルーに輝く永代橋や隅田川大橋は大きなみどころです。
東京スカイツリーは開業から10年以上が経ちますが、世界的に有名な観光スポットでもあることから非常に混雑する展望台です。スムーズに展望台に上がるには事前のチケット購入が必須です。`,
    },
    {
      slug: "shibuya-sky",
      description: `2019年に開業された渋谷スクランブルスクエア。渋谷エリアで最も高い地上229mの高さを誇る商業施設です。
同ビルの47階と46階には展望施設の渋谷スカイがあり都内を一望することができます。
見どころは2ヶ所。1つ目は富士山やセルリアンタワー、首都高を行き交う車などがあり迫力のある夜景を堪能できる西側の景色。絵に書いたような景色は一見の価値があります。
2つ目の見どころは眼下に渋谷駅周辺の町並みが広がる北側の景色。世界的にも有名な渋谷スクランブル交差点を俯瞰して眺めることが出来る数少ないエリアなので、ぜひ記念撮影をしてみてほしいです。
渋谷スカイは20分間隔で入場数を管理しており、特に夕暮れ時はWebの事前購入のみで空き枠が埋まってしまうことも多いため、日没前後に訪れたい場合は注意しましょう。`,
    },
    {
      slug: "tokyo-city-view",
      description: `六本木ヒルズ52階にある展望台、東京シティビュー。
海抜250メートルの高さからどこまでも広がる東京の夜景を一望できる、都内随一の人気を誇る展望台です。
見どころの1つ目は南東側の眺望。ライトアップされた東京タワーや高層ビル群のまばゆい光が印象的な夜景を堪能することができます。程よい距離感で東京タワーを眺められるベストな展望台といえます。
見どころの2つ目は西側の眺望。再開発が進み高層ビル群が林立する渋谷方面の街並みや富士山も眺めることができます。11月上旬に「ダイヤモンド富士」を観賞するイベントも実施されており、その時期には夕日と富士山が重なる光景を眺めることも可能です。
東京シティービューの同フロアには森美術館も併設されており、セットの入場チケットも発売されています。`,
    },
    {
      slug: "hachitama-observatory",
      description: `フジテレビ本社屋にある球体展望室はちたま。
館内にはベンチや双眼鏡などの設備があり、270°の臨海パノラマを楽しむことができます。
見どころの１つ目はお台場のランドマークであるレインボーブリッジの眺め。橋の後ろには東京タワーも並び、東京らしい景色が広がります。
また、球体展望室はちたまは冬の空気が澄んだ時期には西の方角に富士山を眺めることも可能。夕暮れ時の富士山と臨海パノラマの景色は非常に絵になります。
なお、球体展望室はちたまの営業終了時間は18:00までとなっており、ゆっくり夜景を楽しむことが出来るのは11月〜1月頃までとなるので冬の時期のお台場観光やデートで訪れましょう。`,
    },
    {
      slug: "sunshine-60",
      description: `サンシャイン60の最上階にある展望台「てんぼうパーク」。
2023年4月にリニューアルオープンした施設で360度東京の街並みを見渡すことが可能です。
見どころの一つ目は西側の景色。東京都内で利用者が三番目に多い池袋駅や天気が良い日には富士山を眺めることが可能です。
また、東京タワーや東京スカイツリーなどのランドマークもほどよい距離から眺めることができ、どの方角も東京らしい景色を楽しむことが可能です。
サンシャイン60は展望台以外にも水族館、プラネタリウム、博物館など様々な施設があり、1日デートするのにもうってつけ。池袋周辺で遊ぶ際の候補にぜひ加えてみてください。`,
    },
    {
      slug: "telecom-center",
      description: `テレコムセンター21階にある有料の展望ラウンジ。高さ99mの場所から東京湾やお台場方面の街並みを一望することができます。
一番の見どころはなんといってもレインボーブリッジと東京タワーが重なる光景が堪能できる南西側の景色。絵に描いたような計算された構図は非常に美しく、一見の価値があります。
テレコムセンター展望台は非常に高いレベルの夜景を堪能できる場所ですが、休日も人の数がまばらでとてもゆっくり夜景鑑賞を楽しむことができます。
お台場方面で遊んだ帰りにぜひ立ち寄ってみてはいかがでしょうか。`,
    },
    {
      slug: "azabudai-hills",
      description: `2023年11月に開業した麻布台ヒルズ。複数の商業ビル群で構成されており、メイン棟の「森JPタワー」はあべのハルカスを抜き、日本一の高さ325mを誇っています。
そんな森JPタワーの33Fには展望フロアのスカイロビーがあり、東京の街並みを眺めることができます。
見どころはなんといっても東南方向の東京タワーが目の前に見える眺望。これほど間近に遮るものがなく東京タワーの景色を楽しめる場所は麻布台ヒルズしかありません。
港区に建つ高層ビルなので、光量の多い迫力ある夜景を堪能できるのも魅力的。夕暮れ時の富士山と六本木ヒルズの共演は息を呑む美しさがあります。
開業当初は無料で一般公開されていましたが、2024年4月18日からはカフェ・レストランの利用者のみ入場可能となっています。`,
    },
    {
      slug: "shibuya-class",
      description: `渋谷のランドマークとして観光客にも大人気の渋谷スクランブル交差点。1回の青信号で3000人もの人々が行き来する光景はこの場所でしかみれません。
そんな渋谷スクランブル交差点のベストな撮影スポットがマグネットバイ渋谷109 屋上展望台です。
MAGNET by SHIBUYAの屋上に設置された展望台からは迫力のある眺めを堪能することができます。人と車が規則的に動く様子は見ているととても楽しいです。
また、渋谷109や渋谷フクラスといったランドマークも眺めることが可能です。
入場には併設しているカフェでドリンク購入が必須ですが、展望台への入場料＋飲み物で1,800円〜となっており良心的な価格設定。頭上の高い位置に設置されたカメラから撮影できる「クロッシングフォト」も人気のサービスです。`,
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
  console.log("=== observatory 有料ランキング シード ===\n");

  // 1. observatory タグを取得
  const tag = await getTagIdBySlug("observatory");
  if (!tag) {
    console.error("❌ 'observatory' タグが見つかりません");
    process.exit(1);
  }
  console.log(`✅ タグ: ${tag.name} (${tag.id})`);

  // 2. tag_pages を確認 / 作成
  const { data: existingPage } = await supabase
    .from("tag_pages")
    .select("id, title")
    .eq("tag_id", tag.id)
    .single();

  let pageId;

  if (existingPage) {
    pageId = existingPage.id;
    console.log(`✅ 既存タグページ: ${existingPage.title} (${pageId})`);
  } else {
    console.log("  タグページが未作成のため新規作成します...");
    const { data: newPage, error } = await supabase
      .from("tag_pages")
      .insert({ tag_id: tag.id, ...PAGE_META })
      .select("id")
      .single();
    if (error || !newPage) {
      console.error("❌ tag_page 作成失敗:", error);
      process.exit(1);
    }
    pageId = newPage.id;
    console.log(`✅ タグページ作成: ${pageId}`);
  }

  // 3. 既存の paid セクションを削除（cascade で section_spots も削除）
  const { data: existingSections } = await supabase
    .from("tag_page_sections")
    .select("id, key")
    .eq("tag_page_id", pageId)
    .eq("key", "paid");

  if (existingSections && existingSections.length > 0) {
    for (const sec of existingSections) {
      await supabase.from("tag_page_sections").delete().eq("id", sec.id);
    }
    console.log(`🗑️  既存 paid セクションを削除しました`);
  }

  // 4. 新しい paid セクションを作成
  // sort_order: 既存セクションの末尾より前に paid を挿入したいため 0 を指定
  const { data: section, error: secErr } = await supabase
    .from("tag_page_sections")
    .insert({
      tag_page_id: pageId,
      key: PAID_SECTION.key,
      heading: PAID_SECTION.heading,
      intro: PAID_SECTION.intro,
      sort_order: 0,
    })
    .select("id")
    .single();

  if (secErr || !section) {
    console.error("❌ セクション作成失敗:", secErr);
    process.exit(1);
  }
  console.log(`✅ セクション "${PAID_SECTION.heading}" 作成: ${section.id}`);

  // 5. セクション内スポットを追加
  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < PAID_SECTION.spots.length; i++) {
    const { slug, description } = PAID_SECTION.spots[i];
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
