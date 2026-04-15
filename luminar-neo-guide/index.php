<?php
/**
 * メインテンプレート（トップページ）
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<main>

    <?php if (is_front_page() && !is_paged()) : ?>
    <!-- ヒーローセクション -->
    <section class="hero-section">
        <div class="hero-section__bg-pattern"></div>
        <div class="hero-section__bg-blur hero-section__bg-blur--1"></div>
        <div class="hero-section__bg-blur hero-section__bg-blur--2"></div>

        <div class="l-content hero-section__inner">
            <div class="hero-section__content">

                <p class="hero-section__desc">ルミナーネオ完全購入ガイド！<br class="sp-only">特徴・料金・安く買う方法を解説【2026年版】</p>

                <p class="hero-section__title">
                    <span>Luminar Neo</span><br class="sp-only">
                    <span class="hero-section__title-gradient">完全購入ガイド</span>
                </p>

                <div class="hero-section__tags">
                    <span class="hero-section__tag">
                        <i class="fa-solid fa-bolt" style="color:#facc15;"></i> AI搭載
                    </span>
                    <span class="hero-section__tag">
                        <i class="fa-solid fa-yen-sign" style="color:#34d399;"></i> 買い切りあり
                    </span>
                    <span class="hero-section__tag">
                        <i class="fa-brands fa-apple"></i><i class="fa-brands fa-windows"></i> 両対応
                    </span>
                </div>
            </div>

            <div class="l-content comparison-container l-bottom-small">
                <img src="http://nightscape.tokyo/luminar/wp-content/uploads/2026/01/main-before.jpg" alt="Before" class="image-before"><br>
                <img src="http://nightscape.tokyo/luminar/wp-content/uploads/2026/01/main-after.jpg" alt="After" class="image-after">
                <div class="slider-handle">
                    <div class="slider-button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
                        </svg>
                    </div>
                </div>
                <p>
                    <span class="label label-before">Before</span><br>
                    <span class="label label-after">After</span>
                </p>
            </div>
            <p class="hero-section__desc l-center">Luminar NeoのRAW現像+ジェネ変換（AIツール）の作例</p>
        </div>
    </section>

    <!-- 導入セクション -->
    <div class="l-content l-section">
        <div class="m-point-box" style="margin: 0 !important;">
            <div class="m-point-box__bg">!</div>
            <div class="m-point-box__header">
                <span class="m-point-box__label">Point</span>
                <span class="m-point-box__title">購入前に整理しておきたい判断軸</span>
            </div>
            <ul class="m-point-box__list">
                <li>料金体系：買い切り＋任意のパス（年額）という構造</li>
                <li>向き・不向き：AI編集で時短したい人に◎、写真管理重視の人には△</li>
                <li>Lightroomとの違い：コスト面ではLuminar Neoが有利、管理機能ではLightroomが優位</li>
                <li>購入タイミング：セール時期（ブラックフライデー等）で30〜50%オフになることも</li>
                <li>まずは体験版：7日間無料で試せる。30日間の返金保証もあり</li>
            </ul>
        </div>
    </div>

    <!-- H2-1: Luminar Neoとは？ -->
    <div class="l-content l-section">
        <section class="feature-section" id="about-luminar">
            <div class="feature-section__header">
                <h2 class="feature-section__title">Luminar Neoとは？<br class="sp-only">できること・特徴</h2>
            </div>

            <figure class="m-figure l-bottom-large">
                <img src="http://nightscape.tokyo/luminar/wp-content/uploads/2026/01/about-luminar-neo.jpg" alt="ルミナーネオのアプリ画面">
                <figcaption class="m-figcaption">
                    <div style="display:flex; align-items:center; margin-bottom:0.25rem;">
                        <span class="m-fig-badge">図1</span>
                        <span style="font-weight:700; font-size:0.875rem;">ルミナーネオのアプリ画面</span>
                    </div>
                    <p style="font-size:0.75rem; color:var(--c-slate-500);">ルミナーネオのアプリ画面でRAWデータを現像する様子</p>
                </figcaption>
            </figure>

            <div class="entry-content">
                <p>Luminar Neoは、ウクライナのSkylum社が開発する<strong>AI搭載の写真編集ソフト</strong>です。RAW現像から高度なレタッチまで、AIの力を借りて効率的に行えるのが特徴です。</p>
                <p>Windows・Mac両対応で、1ライセンスで2台のPCにインストール可能。LightroomやPhotoshopのプラグインとしても動作するので、今のワークフローを変えずに導入することもできます。</p>
            </div>

            <h3>Luminar Neoの主な特徴</h3>

            <div class="m-def-list">
                <div class="m-def-item">
                    <dt class="m-def-dt">AIによる自動編集</dt>
                    <dd class="m-def-dd">露出・コントラスト・カラーをAIが分析し、ワンクリックで補正。被写体や空の自動認識により、面倒なマスク作成も不要です。</dd>
                </div>
                <div class="m-def-item">
                    <dt class="m-def-dt">生成AI機能</dt>
                    <dd class="m-def-dd">GenErase（不要物削除）、GenSwap（オブジェクト置換）、GenExpand（画像拡張）など、Adobeの生成塗りつぶしに近い機能を搭載しています。</dd>
                </div>
                <div class="m-def-item">
                    <dt class="m-def-dt">柔軟なライセンス</dt>
                    <dd class="m-def-dd">買い切り版なら基本機能が永続利用可能。サブスク疲れしている方にも選ばれています。必要に応じて拡張機能を追加していく形式です。</dd>
                </div>
            </div>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/merit-demerit/" class="m-btn m-btn--primary">Luminar Neoのメリット・デメリット</a>
            </div>
        </section>
    </div>

    <!-- H2-2: 料金・プランの考え方（最重要セクション） -->
    <div class="l-content l-section">
        <section class="feature-section" id="pricing">
            <div class="feature-section__header">
                <h2 class="feature-section__title">Luminar Neoの料金プランを<br class="sp-only">どう考えるべきか</h2>
            </div>

            <figure class="m-figure l-bottom-large">
                <img src="http://nightscape.tokyo/luminar/wp-content/uploads/2026/01/plan-image.jpg" alt="ルミナーネオの料金体系">
                <figcaption class="m-figcaption">
                    <div style="display:flex; align-items:center; margin-bottom:0.25rem;">
                        <span class="m-fig-badge">図2</span>
                        <span style="font-weight:700; font-size:0.875rem;">ルミナーネオの料金体系</span>
                    </div>
                    <p style="font-size:0.75rem; color:var(--c-slate-500);">ルミナーネオは買い切り＋任意のパスの料金体系を採用</p>
                </figcaption>
            </figure>

            <div class="entry-content">
                <p>Luminar Neoの料金体系は「<strong>買い切り＋任意のパス（年額オプション）</strong>」という構造になっています。</p>
                <p>買い切りには3つのグレード（デスクトップ/クロスデバイス/Max）があり、「パスを1年だけ購入してProツールを永続取得する」方法がコスパ最強と言われています。ただ、正解は使用頻度や予算によって変わるので、自分に合ったプランを見つけることが大切です。</p>
            </div>

            <h3>買い切り版でできること・できないこと</h3>

            <div class="m-def-list">
                <div class="m-def-item">
                    <dt class="m-def-dt">買い切りライセンス</dt>
                    <dd class="m-def-dd">基本機能（RAW現像、Sky AI、補正AIなど）が永続的に使えます。デスクトップ版 約¥18,000、クロスデバイス版 約¥24,000、Max版 約¥27,000の3グレード展開。</dd>
                </div>
                <div class="m-def-item">
                    <dt class="m-def-dt">パス（年額オプション）</dt>
                    <dd class="m-def-dd">Proツール全8種（ノイズ除去、超解像、HDR合成など）を永続取得できます。さらに生成AIと最新アップデートも利用可能。Upgrade Pass 年額約¥7,400、Ecosystem Pass 年額約¥10,400。</dd>
                </div>
            </div>

            <h3>AI機能は更新しないとどうなる？</h3>

            <div class="entry-content">
                <p>パス加入中のみ利用可能です。翌年更新しないと使えなくなりますが、Proツールは手元に残ります。生成AIが不要なら更新しないという選択もアリです。</p>
            </div>

            <h3>パスは1年だけでも問題ない？</h3>

            <div class="entry-content">
                <p>「結局どれを選べばいいの？」という方のために、簡単なシミュレーターを用意しました。</p>
                <p>使い方や予算の考え方を入力すると、あなたに合いそうなプランの方向性がわかります。</p>
            </div>

            <?php echo do_shortcode('[luminar_simulator]'); ?>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/luminar-plan/" class="m-btn m-btn--primary">Luminar Neoの料金プランを詳しく解説</a>
            </div>
        </section>
    </div>

    <!-- H2-3: 向いている人・向かない人 -->
    <div class="l-content l-section">
        <section class="feature-section" id="target">
            <div class="feature-section__header">
                <h2 class="feature-section__title">Luminar Neoは<br class="sp-only">どんな人に向いている？</h2>
            </div>

            <div class="entry-content">
                <p>Luminar Neoは万能なソフトではありません。正直なところ、合う人と合わない人がはっきり分かれます。</p>
                <p>「合う・合わない」は機能面だけでなく、<strong>写真編集に何を求めるか</strong>という価値観の違いでもあります。たとえば「夜景のノイズを手軽に消したい」「旅行写真の空をもっと青くしたい」といった明確な目的がある人には、特におすすめできるソフトです。</p>
            </div>

            <h3>向いている人・向いていない人の特徴</h3>

            <div class="l-grid-2">
                <div class="m-pc-box m-pc-box--pros">
                    <div class="m-pc-head"><i class="fa-solid fa-circle-check"></i> 向いている人</div>
                    <div class="m-pc-body">
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 失敗写真をAIの力で救いたい</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 編集時間を大幅に短縮したい</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 撮影スキルを後処理で補いたい</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> サブスク疲れで買い切りを探している</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 1つのソフトで完結させたい</div>
                    </div>
                </div>
                <div class="m-pc-box m-pc-box--cons">
                    <div class="m-pc-head"><i class="fa-solid fa-circle-xmark"></i> 向いていない人</div>
                    <div class="m-pc-body">
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 基本補正しかしない</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 撮って出しを好む</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 写真管理機能を重視する</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 今のソフトで十分満足している</div>
                        <div class="m-pc-item"><span class="m-pc-dot"></span> 最新カメラへの即時対応が必須</div>
                    </div>
                </div>
            </div>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/merit-demerit/" class="m-btn m-btn--primary">Luminar Neoの長期使用レビュー</a>
            </div>
        </section>
    </div>

    <!-- H2-4: Lightroomとの判断軸 -->
    <div class="l-content l-section">
        <section class="feature-section" id="vs-lightroom">
            <div class="feature-section__header">
                <h2 class="feature-section__title">Lightroomと<br class="sp-only">迷ったときの判断軸</h2>
            </div>

            <div class="entry-content">
                <p>「Luminar NeoとLightroom、結局どっちがいいの？」という質問をよくいただきます。結論から言うと、<strong>比較する軸によって答えが変わります</strong>。</p>
            </div>

            <h3>何年使うとどちらが得か？</h3>

            <div class="entry-content">
                <p>たとえば3年間のコストで比較すると、Luminar Neo（買い切り＋パス1年）は約¥25,000、Lightroomフォトプランは約¥42,000。コスト面ではLuminar Neoが有利です。</p>
                <p>ただし、両方を併用している方も実は多くいます。LightroomからLuminar Neoをプラグインとして呼び出す使い方も可能なので、「どちらか一方」と決めつけなくてもOKです。</p>
            </div>

            <h3>Luminar NeoとLightroomの思想の違い</h3>

            <div class="m-compare">
                <div class="m-compare__head">
                    <div class="m-compare__th m-compare__th--1">Luminar Neoの思想</div>
                    <div class="m-compare__th m-compare__th--2">Lightroomの思想</div>
                </div>
                <div class="m-compare__body">
                    <div class="m-compare__col m-compare__col--1">
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-sky-400)"></span> AIで編集を効率化</div>
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-sky-400)"></span> 買い切りで永続利用</div>
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-sky-400)"></span> 1枚の仕上げに集中</div>
                    </div>
                    <div class="m-compare__col m-compare__col--2">
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-indigo-400)"></span> 写真管理と現像の統合</div>
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-indigo-400)"></span> サブスクで常に最新</div>
                        <div class="m-compare__item"><span class="m-compare__dot" style="background:var(--c-indigo-400)"></span> 大量の写真を効率管理</div>
                    </div>
                </div>
            </div>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/lightroom-compare/" class="m-btn m-btn--primary">Luminar NeoとLightroomを徹底比較</a>
            </div>
        </section>
    </div>

    <!-- H2-5: 安く買う方法 -->
    <div class="l-content l-section">
        <section class="feature-section" id="discount">
            <div class="feature-section__header">
                <h2 class="feature-section__title">ルミナーネオを<br class="sp-only">安く買う方法はある？</h2>
            </div>

            <figure class="m-figure l-bottom-large">
                <img src="http://nightscape.tokyo/luminar/wp-content/uploads/2026/01/luminar-neo-sale.jpg" alt="ルミナーネオを安く買う方法">
                <figcaption class="m-figcaption">
                    <div style="display:flex; align-items:center; margin-bottom:0.25rem;">
                        <span class="m-fig-badge">図3</span>
                        <span style="font-weight:700; font-size:0.875rem;">ルミナーネオを安く買う3つのコツ</span>
                    </div>
                    <p style="font-size:0.75rem; color:var(--c-slate-500);">ルミナーネオをお手頃に買うために知っておきたいこと</p>
                </figcaption>
            </figure>

            <div class="entry-content">
                <p>Luminar Neoは定期的にセールを実施しており、タイミングが合えば<strong>最大40〜50%オフ</strong>で購入できることもあります。</p>
                <p>特にブラックフライデーやサマーセールは狙い目。急ぎでなければセール時期まで待つのが賢い選択です。また、まずは7日間の無料体験版で試してから購入を検討するのが確実ですよ。</p>
            </div>

            <h3>セール・クーポン・返金保証について</h3>

            <div class="m-def-list">
                <div class="m-def-item">
                    <dt class="m-def-dt">主なセール時期</dt>
                    <dd class="m-def-dd">ブラックフライデー（11月）、サマーセール（7〜8月）、アニバーサリーセール、年末年始など。割引率は30〜50%程度になることが多いです。</dd>
                </div>
                <div class="m-def-item">
                    <dt class="m-def-dt">クーポンコード</dt>
                    <dd class="m-def-dd">当サイト限定の割引コードを用意しています。セールと併用できる場合もあるので、詳細は下記記事をチェックしてみてください。</dd>
                </div>
                <div class="m-def-item">
                    <dt class="m-def-dt">返金保証</dt>
                    <dd class="m-def-dd">購入から30日間は返金保証があります。体験版で基本を試し、購入後にProツールを使ってみて合わなければ返金、という流れも可能です。</dd>
                </div>
            </div>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/sale-and-coupon-info/" class="m-btn m-btn--primary">Luminar Neoのセール・クーポン情報</a>
            </div>
        </section>
    </div>

    <!-- H2-6: 購入前の疑問・注意点 -->
    <div class="l-content l-section">
        <section class="feature-section" id="faq">
            <div class="feature-section__header">
                <h2 class="feature-section__title">ルミナーネオの購入前に<br class="sp-only">よくある疑問</h2>
            </div>

            <div class="entry-content">
                <p>購入を検討する際によくある疑問をまとめました。実は体験版で確認できることも多いので、気になる方はまず試してみるのがおすすめです。</p>
            </div>

            <div class="card">
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>無料体験版はありますか？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>
                        <div>はい、7日間の無料体験版があります。詳細は「<a href="https://nightscape.tokyo/luminar/trial/">Luminar Neo体験版のダウンロード方法・製品版との違い</a>」で詳しく解説しています。</div>
                    </div>
                </div>
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>拡張機能（Proツール）は必須ですか？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>
                        <div>必須ではありません。基本機能だけでも十分な編集が可能です。ただし、ノイズ除去や超解像といった高度な処理を使いたい場合はProツールが必要になります。詳細は「<a href="https://nightscape.tokyo/luminar/expand/">拡張機能でできることまとめ</a>」で解説しています。</div>
                    </div>
                </div>
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>ルミナーネオの評判が知りたいです。</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>
                        <div>「<a href="https://nightscape.tokyo/luminar/voice/">Luminar Neoの評判はどう？良い口コミ・悪い口コミを整理して見えた実態</a>」で解説しています。</div>
                    </div>
                </div>
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>返金保証はありますか？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>はい、購入から30日間は返金保証があります。安心して試せますね。</div>
                </div>
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>WindowsとMac、両方で使えますか？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>1ライセンスで2台のPCにインストール可能です。Windows・Mac混在でも問題ありません。</div>
                </div>
                <div class="m-faq-item">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>動作が重いと聞きましたが？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>
                    <div>AI処理を多用するため、ある程度のPCスペックは必要です。推奨は16GB以上のRAMとSSD。心配な方は体験版で自分の環境で試してみてください。対処法は<a href="https://nightscape.tokyo/luminar/opening-failed/">Luminar Neoが重い・落ちる原因と対処法｜症状別に今すぐ解決</a>で詳しく紹介しています。</div></div>
                </div>
                <div class="m-faq-item m-faq-item-last">
                    <div class="m-faq-q"><div class="m-faq-icon m-faq-icon--q">Q</div>アップデートは無料ですか？</div>
                    <div class="m-faq-a"><div class="m-faq-icon m-faq-icon--a">A</div>マイナーアップデート（バグ修正など）は無料です。メジャーアップデート（新機能追加）はパス加入者のみ。パス未加入でも購入時のバージョンは永続利用できます。</div>
                </div>
            </div>

            <div class="u-text-center l-bottom-xlarge" style="margin-top: 2.5rem;">
                <a href="https://nightscape.tokyo/luminar/faq/" class="m-btn m-btn--primary">よくある質問をもっと見る</a>
            </div>
        </section>
    </div>

    <!-- H2-7: 記事一覧（自動取得） -->
    <div class="l-content l-section">
        <section id="articles">
            <h2 class="m-section-title">目的別に詳しく知りたい人はこちら</h2>

            <?php
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => 10,
                'orderby' => 'date',
                'order' => 'DESC',
            );
            $query = new WP_Query($args);
            ?>

            <?php if ($query->have_posts()) : ?>
            <div class="l-grid-3">
                <?php while ($query->have_posts()) : $query->the_post(); ?>
                <article class="m-post-card">
                    <a href="<?php the_permalink(); ?>">
                        <div class="m-post-card__thumb">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('lng-card', ['alt' => get_the_title()]); ?>
                            <?php else : ?>
                                <div style="width:100%;height:100%;background:var(--c-bg-sub);"></div>
                            <?php endif; ?>
                        </div>
                        <div class="m-post-card__content">
                            <p class="m-post-card__title"><?php the_title(); ?></p>
                            <span class="m-post-card__meta">
                                <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                            </span>
                        </div>
                    </a>
                </article>
                <?php endwhile; ?>
            </div>
            <?php wp_reset_postdata(); ?>
            <?php else : ?>
            <p class="u-text-center u-text-muted">記事が見つかりませんでした。</p>
            <?php endif; ?>
        </section>

        <?php get_template_part('template-parts/cta-sale'); ?>

        <?php get_template_part('template-parts/author-box'); ?>
    </div>

    <?php else : ?>

    <!-- アーカイブページ用 -->
    <div class="l-content l-section">
        <?php lng_breadcrumb(); ?>
        <header class="m-article-header u-mb-4">
            <h1 class="m-article-header__title"><?php echo is_search() ? '「' . get_search_query() . '」の検索結果' : get_the_archive_title(); ?></h1>
            <?php if (is_category() || is_tag()) : ?>
                <?php the_archive_description('<p class="u-text-muted">', '</p>'); ?>
            <?php endif; ?>
        </header>

        <?php if (have_posts()) : ?>
        <div class="l-grid-3">
            <?php while (have_posts()) : the_post(); ?>
            <article class="m-post-card">
                <a href="<?php the_permalink(); ?>">
                    <div class="m-post-card__thumb">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail('lng-card', ['alt' => get_the_title()]); ?>
                        <?php else : ?>
                            <div style="width:100%;height:100%;background:var(--c-bg-sub);"></div>
                        <?php endif; ?>
                    </div>
                    <div class="m-post-card__content">
                        <h3 class="m-post-card__title"><?php the_title(); ?></h3>
                        <span class="m-post-card__meta">
                            <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                        </span>
                    </div>
                </a>
            </article>
            <?php endwhile; ?>
        </div>

        <?php lng_pagination(); ?>

        <?php else : ?>
        <p class="u-text-center u-text-muted">記事が見つかりませんでした。</p>
        <?php endif; ?>
    </div>

    <?php endif; ?>

</main>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Luminar Neo 料金シミュレーター",
  "description": "6つの質問に答えるだけで、あなたに最適なLuminar Neoのプランと将来のコストがわかる無料診断ツール",
  "url": "https://nightscape.tokyo/luminar/",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  },
  "featureList": [
    "最適なライセンスプランの診断",
    "1年・3年・5年の長期コスト算出",
    "アップグレードパス・エコシステムパスの比較",
    "月額換算でのコスト表示"
  ],
  "creator": {
    "@type": "Organization",
    "name": "Luminar Neo Guide",
    "url": "https://nightscape.tokyo/luminar/"
  }
}
</script>

<?php if (is_front_page()) : ?>
<script>
(function() {
    var slider = document.getElementById('hero-slider');
    var before = document.getElementById('hero-before');
    var handle = document.getElementById('hero-handle');

    if (!slider || !before || !handle) return;

    function moveSlider(x) {
        var rect = slider.getBoundingClientRect();
        var pos = ((x - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos));
        before.style.width = pos + '%';
        handle.style.left = pos + '%';
    }

    slider.addEventListener('mousemove', function(e) { if (e.buttons === 1) moveSlider(e.clientX); });
    slider.addEventListener('mousedown', function(e) { moveSlider(e.clientX); });
    slider.addEventListener('touchmove', function(e) { e.preventDefault(); moveSlider(e.touches[0].clientX); }, { passive: false });
    slider.addEventListener('touchstart', function(e) { moveSlider(e.touches[0].clientX); });
})();
</script>
<?php endif; ?>

<?php get_footer(); ?>