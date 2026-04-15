<?php
/**
 * LUMINAR NEO GUIDE - Theme Functions
 *
 * @package LUMINAR_NEO_GUIDE
 */

if (!defined('ABSPATH')) {
    exit;
}

// 設定ファイル読み込み
require_once get_template_directory() . '/config.php';
require_once get_template_directory() . '/inc/structured-data.php';
require_once get_template_directory() . '/inc/toc-generator.php';
require_once get_template_directory() . '/inc/head-tags.php';

/**
 * テーマセットアップ
 */
function lng_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 675, true);
    add_image_size('lng-card', 800, 450, true);
    add_image_size('lng-card-sm', 400, 225, true);
    add_image_size('lng-ogp', 1200, 630, true);

    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);

    add_theme_support('custom-logo');
    
    register_nav_menus([
        'primary' => 'ヘッダーメニュー',
        'footer'  => 'フッターメニュー',
    ]);
}
add_action('after_setup_theme', 'lng_theme_setup');

/**
 * メニューの登録
 */
function my_setup_theme() {
    register_nav_menus(array(
        'global-nav' => 'グローバルナビゲーション',
    ));
}
add_action('after_setup_theme', 'my_setup_theme');

/**
 * スタイル・スクリプト読み込み
 */
function lng_enqueue_assets() {
    wp_enqueue_style(
        'lng-google-fonts',
        'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'lng-fontawesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        [],
        '6.5.1'
    );

    wp_enqueue_style(
        'lng-style',
        get_stylesheet_uri(),
        ['lng-google-fonts', 'lng-fontawesome'],
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script(
        'lng-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        wp_get_theme()->get('Version'),
        true
    );

    wp_localize_script('lng-main', 'lngData', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'couponCode' => LNG_COUPON_CODE,
    ]);
}
add_action('wp_enqueue_scripts', 'lng_enqueue_assets');

/**
 * 抜粋の長さ
 */
function lng_excerpt_length($length) {
    return 80;
}
add_filter('excerpt_length', 'lng_excerpt_length');

/**
 * 抜粋の末尾
 */
function lng_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'lng_excerpt_more');

/**
 * アーカイブタイトルからプレフィックスを削除
 */
function lng_archive_title($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_author()) {
        $title = get_the_author();
    } elseif (is_year()) {
        $title = get_the_date('Y年');
    } elseif (is_month()) {
        $title = get_the_date('Y年n月');
    } elseif (is_day()) {
        $title = get_the_date('Y年n月j日');
    }
    return $title;
}
add_filter('get_the_archive_title', 'lng_archive_title');

/**
 * パンくずリスト出力
 */
function lng_breadcrumb() {
    if (is_front_page()) {
        return;
    }

    $items = [];
    $items[] = ['url' => home_url('/'), 'name' => 'Luminar Neo完全購入ガイド'];

    if (is_single()) {
        $categories = get_the_category();
        if (!empty($categories)) {
            $cat = $categories[0];
            $items[] = ['url' => get_category_link($cat->term_id), 'name' => $cat->name];
        }
        $items[] = ['url' => '', 'name' => get_the_title()];
    } elseif (is_page()) {
        $items[] = ['url' => '', 'name' => get_the_title()];
    } elseif (is_category()) {
        $items[] = ['url' => '', 'name' => single_cat_title('', false)];
    } elseif (is_tag()) {
        $items[] = ['url' => '', 'name' => single_tag_title('', false)];
    } elseif (is_search()) {
        $items[] = ['url' => '', 'name' => '「' . get_search_query() . '」の検索結果'];
    } elseif (is_404()) {
        $items[] = ['url' => '', 'name' => 'ページが見つかりません'];
    } elseif (is_archive()) {
        $items[] = ['url' => '', 'name' => get_the_archive_title()];
    }

    echo '<nav class="m-breadcrumb" aria-label="パンくずリスト">';
    echo '<ol itemscope itemtype="https://schema.org/BreadcrumbList">';

    $position = 1;
    $total = count($items);

    foreach ($items as $index => $item) {
        $is_last = ($index === $total - 1);

        echo '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">';

        if (!$is_last && !empty($item['url'])) {
            echo '<a itemprop="item" href="' . esc_url($item['url']) . '">';
            echo '<span itemprop="name">' . esc_html($item['name']) . '</span>';
            echo '</a>';
            echo '<span class="m-breadcrumb__separator" aria-hidden="true">/</span>';
        } else {
            echo '<span class="m-breadcrumb__current" itemprop="name">' . esc_html($item['name']) . '</span>';
        }

        echo '<meta itemprop="position" content="' . $position . '">';
        echo '</li>';

        $position++;
    }

    echo '</ol>';
    echo '</nav>';
}

/**
 * ページネーション出力
 */
function lng_pagination() {
    global $wp_query;

    if ($wp_query->max_num_pages <= 1) {
        return;
    }

    $paged = get_query_var('paged') ? get_query_var('paged') : 1;
    $max = $wp_query->max_num_pages;

    echo '<nav class="m-pagination" aria-label="ページネーション">';

    echo paginate_links([
        'base'      => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
        'format'    => '?paged=%#%',
        'current'   => $paged,
        'total'     => $max,
        'prev_text' => '&laquo;',
        'next_text' => '&raquo;',
        'mid_size'  => 2,
    ]);

    echo '</nav>';
}

/**
 * 投稿の推定読了時間
 */
function lng_get_reading_time($post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID();
    }
    $content = get_post_field('post_content', $post_id);
    $word_count = mb_strlen(strip_tags($content));
    return max(1, ceil($word_count / 500));
}


// セキュリティ: WordPressバージョン非表示
remove_action('wp_head', 'wp_generator');

// パフォーマンス: 絵文字スクリプト削除
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Luminar Neo シミュレーター ショートコード v2（6問構成）
function luminar_simulator_shortcode() {
    $css_url = get_template_directory_uri() . '/assets/css/luminar-simulator.css';
    $js_url  = get_template_directory_uri() . '/assets/js/luminar-simulator.js';

    wp_enqueue_script('luminar-sim-js', $js_url, array(), date('YmdHis'), true);
    
    ob_start();
    ?>
    
    <div id="ln-sim-host" 
         data-css="<?php echo esc_url($css_url); ?>" 
         style="width: 100%; display: block; min-height: 400px; background-color: #efefef; border-radius: 1.5rem; transition: background-color 0.5s ease;">
    </div>

    <template id="ln-sim-template">
        <style>
            .ln-loader-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 640px;
                width: 100%;
                color: #64748b;
                font-family: sans-serif;
                transition: opacity 0.5s ease;
            }
            .ln-spinner {
                width: 50px;
                height: 50px;
                border: 4px solid #cbd5e1;
                border-top-color: #38bdf8;
                border-radius: 50%;
                animation: ln-spin 1s linear infinite;
                margin-bottom: 15px;
            }
            @keyframes ln-spin { to { transform: rotate(360deg); } }
            .ln-sim {
                opacity: 0;
                transition: opacity 0.8s ease;
            }
        </style>

        <div class="ln-loader-container" id="lnLoader">
            <div class="ln-spinner"></div>
            <div style="font-size:0.9rem; font-weight:bold;">シミュレーター読み込み中...</div>
        </div>

        <div class="ln-sim" id="lnSim" style="display:none;">
            <div class="ln-sim-header">
                <div class="ln-sim-title">Luminar Neo <span class="u-sp-block">料金シミュレーター</span></div>
                <div class="ln-sim-subtitle">7つの質問で最適プランと将来コストを算出</div>
            </div>

            <div class="ln-sim-progress">
                <div class="ln-sim-progress-step active" data-step="1"></div>
                <div class="ln-sim-progress-step" data-step="2"></div>
                <div class="ln-sim-progress-step" data-step="3"></div>
                <div class="ln-sim-progress-step" data-step="4"></div>
                <div class="ln-sim-progress-step" data-step="5"></div>
                <div class="ln-sim-progress-step" data-step="6"></div>
                <div class="ln-sim-progress-step" data-step="7"></div>
            </div>

            <!-- Q1: 編集内容 -->
            <div class="ln-sim-question active" data-q="1">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q1 / 7</span>
                    <p class="ln-sim-q-text">どんな写真編集をしたい？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="basic">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">基本的な補正がメイン<small>明るさ・色調整、空の置き換え、電線除去など</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="pro">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">Proツールも使いたい<small>高精度ノイズ除去、HDR合成、パノラマ合成など</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="genai">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">生成AI機能も使いたい<small>不要物の削除、背景の生成・置き換え、画像の拡張など</small></span>
                    </div>
                </div>
            </div>

            <!-- Q2: デバイス -->
            <div class="ln-sim-question" data-q="2">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q2 / 7</span>
                    <p class="ln-sim-q-text">スマホ・タブレットでも編集したい？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="pc">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">PCだけで十分<small>自宅のデスクトップやノートPCで編集</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="multi">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">スマホ・タブレットでも編集したい<small>外出先でも手軽に編集、デバイス間で同期</small></span>
                    </div>
                </div>
            </div>

            <!-- Q3: モバイル継続（Q2=multi時のみ表示） -->
            <div class="ln-sim-question" data-q="3">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q3 / 7</span>
                    <p class="ln-sim-q-text">2年目以降もモバイル連携を続けたい？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="pc-only">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">2年目以降はPCだけでいい<small>モバイル連携は1年間お試しできればOK</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="mobile-continue">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">ずっとモバイル連携したい<small>継続的にスマホ・タブレットでも編集</small></span>
                    </div>
                </div>
            </div>

            <!-- Q4: 頻度 -->
            <div class="ln-sim-question" data-q="4">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q4 / 7</span>
                    <p class="ln-sim-q-text">どれくらいの頻度で編集する？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="low">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">月に数回<small>趣味程度でゆるく楽しみたい</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="mid">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">週1〜2回<small>しっかり取り組みたい</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="high">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">ほぼ毎日<small>仕事や本格的な作品づくり</small></span>
                    </div>
                </div>
            </div>

            <!-- Q5: 講座・プリセット -->
            <div class="ln-sim-question" data-q="5">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q5 / 7</span>
                    <p class="ln-sim-q-text">動画講座やプリセット素材は必要？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="no">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">なくていい<small>自分で調べながら学べる</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="yes">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">あると嬉しい<small>効率よく上達したい・プリセットで時短したい</small></span>
                    </div>
                </div>
            </div>

            <!-- Q6: 利用年数 -->
            <div class="ln-sim-question" data-q="6">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q6 / 7</span>
                    <p class="ln-sim-q-text">何年くらい使う予定？</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="1">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">まずは1年使ってみたい</span>
                    </div>
                    <div class="ln-sim-option" data-value="3">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">3年くらいは使いたい</span>
                    </div>
                    <div class="ln-sim-option" data-value="5">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">5年以上、長く使いたい</span>
                    </div>
                </div>
            </div>

            <!-- Q7: Proツール継続（Q1=pro時、かつyears>1のみ関係） -->
            <div class="ln-sim-question" data-q="7">
                <div class="ln-sim-q-text-wrapper">
                    <span class="ln-sim-q-badge">Q7 / 7</span>
                    <p class="ln-sim-q-text">Proツールの使い方について教えてください</p>
                    <p class="ln-sim-q-note">※Proツールは買い切りプランには含まれていません。<br>パス（年額約¥7,400〜）の購入が必要ですが、<strong>一度購入すれば永続的に使えます</strong>。</p>
                </div>
                <div class="ln-sim-options">
                    <div class="ln-sim-option" data-value="once">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">Proツールだけ永続で使えればOK<small>パスは1年だけ購入してProツールを永続解放</small></span>
                    </div>
                    <div class="ln-sim-option" data-value="continue">
                        <span class="ln-sim-option-icon"></span>
                        <span class="ln-sim-option-text">生成AIや最新機能も継続したい<small>毎年パスを更新して全機能を使い続ける</small></span>
                    </div>
                </div>
            </div>

            <div class="ln-sim-result" id="lnSimResult"></div>
        </div>
    </template>
    <?php
    return ob_get_clean();
}
add_shortcode('luminar_simulator', 'luminar_simulator_shortcode');

/**
 * Luminar Neo Mini CTA Shortcode (Unique Version)
 * Usage: [mini_cta]
 */
function shortcode_mini_cta($atts) {
    // ---------------------------------------------------------
    // ▼ フラグ管理（ここで一括切り替え）
    // ---------------------------------------------------------
    date_default_timezone_set('Asia/Tokyo');
    $now = strtotime(date("Y-m-d H:i:s"));

    // 1. セール期間の設定
    $start_date = strtotime("2026-04-08 00:00:00");
    $end_date   = strtotime("2026-04-13 23:59:59");
    $is_sale    = ($now >= $start_date && $now <= $end_date);

    // 2. クーポンの有無（手動切り替え）
    $has_coupon = true; 

    // ---------------------------------------------------------
    // ▼ デフォルト値の設定
    // ---------------------------------------------------------
    $default_link = defined('LNG_AFFILIATE_URL') ? LNG_AFFILIATE_URL : '#';
    $default_code = defined('LNG_COUPON_CODE') ? LNG_COUPON_CODE : 'nightscape10';

    $atts = shortcode_atts(array(
        'link' => $default_link,
        'code' => $default_code,
    ), $atts);

    ob_start();

    // ---------------------------------------------------------
    // ▼ 分岐開始：カードごと完全に出力を分ける
    // ---------------------------------------------------------
    
    if ($is_sale) : ?>
        <div class="m-cta-mini m-cta-mini--sale">
            <div class="m-cta-mini__header">
                <span class="m-cta-mini__title"><i class="fa fa-bolt"></i> Luminar Neo セール実施中！</span>
            </div>
            <div class="m-cta-mini__inner">
                <div class="m-cta-mini__action-area">
                    <p class="m-cta-mini__micro">期間限定の特別価格で購入可能です</p>
                    <a href="<?php echo esc_url($atts['link']); ?>" class="m-btn m-btn--primary m-btn--wide m-btn--shiny" target="_blank" rel="noopener noreferrer sponsored">
                        公式サイトでセール価格を見る <i class="fa-solid fa-chevron-right m-btn-icon-right"></i>
                    </a>
                </div>
            </div>
        </div>

    <?php elseif ($has_coupon) : ?>
        <div class="m-cta-mini">
            <div class="m-cta-mini__header">
                <span class="m-cta-mini__title">Luminar Neo を一番お得に購入する</span>
            </div>
            <div class="m-cta-mini__inner">
                <div class="m-cta-mini__coupon-area">
                    <button class="m-cta-mini__coupon-btn" onclick="lngCopyCoupon(this)" type="button">
                        <div class="m-cta-mini__coupon-head">
                            <span class="m-cta-mini__coupon-label">10%OFF COUPON</span>
                        </div>
                        <div class="m-cta-mini__coupon-body">
                            <span class="m-cta-mini__code"><?php echo esc_html($atts['code']); ?></span>
                            <i class="fa-regular fa-copy m-cta-mini__icon"></i>
                        </div>
                        <p class="m-cta-mini__hint">クリックしてコピー</p>
                    </button>
                    <p class="m-cta-msg" style="display: none;"></p>
                </div>
                <div class="m-cta-mini__divider" aria-hidden="true"></div>
                <div class="m-cta-mini__action-area">
                    <p class="m-cta-mini__micro">
                        <i class="fa-solid fa-check" style="color:var(--c-emerald-500)"></i> 7日間無料体験 / <i class="fa-solid fa-shield-halved" style="color:var(--c-emerald-500)"></i> 30日返金保証
                    </p>
                    <a href="<?php echo esc_url($atts['link']); ?>" class="m-btn m-btn--primary m-btn--wide" target="_blank" rel="noopener noreferrer sponsored">公式サイトで価格をチェック <i class="fa-solid fa-chevron-right m-btn-icon-right"></i>
                    </a>
                    <p class="m-cta-mini__micro">
                        <a href="/luminar/">Luminar Neo 完全購入ガイド</a>
                    </p>
                </div>
            </div>
        </div>

    <?php else : ?>
        <div class="m-cta-mini m-cta-mini--no-coupon">
            <div class="m-cta-mini__inner">
                <div class="m-cta-mini__action-area">
                    <p class="m-cta-mini__micro">
                        <i class="fa-solid fa-check" style="color:var(--c-emerald-500)"></i> 7日間無料体験 / <i class="fa-solid fa-shield-halved" style="color:var(--c-emerald-500)"></i> 30日返金保証
                    </p>
                    <a href="<?php echo esc_url($atts['link']); ?>" class="m-btn m-btn--primary m-btn--wide" target="_blank" rel="noopener noreferrer sponsored">Luminar Neo をチェックする <i class="fa-solid fa-chevron-right m-btn-icon-right"></i>
                    </a>
                    <p class="m-cta-mini__micro">
                        <a href="/luminar/">Luminar Neo 完全購入ガイド</a>
                    </p>
                </div>
            </div>
        </div>

    <?php endif;

    return ob_get_clean();
}
add_shortcode('mini_cta', 'shortcode_mini_cta');

// 画像比較スライダー ショートコード
function image_comparison_slider_shortcode($atts) {
    $atts = shortcode_atts(array(
        'before'       => '',
        'after'        => '',
        'before_label' => '', // これをalt属性として使います
        'after_label'  => '', // これをalt属性として使います
    ), $atts, 'image_compare');

    // 画像URLが空の場合は何も出力しない
    if (empty($atts['before']) || empty($atts['after'])) {
        return '';
    }

    ob_start();
    ?>
    <div class="comparison-container">
        <img src="<?php echo esc_url($atts['before']); ?>" alt="<?php echo esc_attr($atts['before_label']); ?>" class="image-before">
        <img src="<?php echo esc_url($atts['after']); ?>" alt="<?php echo esc_attr($atts['after_label']); ?>" class="image-after">
        
        <div class="slider-handle">
            <div class="slider-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 8l4 4-4 4M6 8l-4 4 4 4"></path>
                </svg>
            </div>
        </div>
        <span class="label label-before">Before</span>
        <span class="label label-after">After</span>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('image_compare', 'image_comparison_slider_shortcode');

add_action('after_setup_theme', function () {

    add_theme_support('menus');

    register_nav_menus([
        'primary'    => 'ヘッダーメニュー',
        'global-nav' => 'グローバルナビゲーション',
        'footer'     => 'フッターメニュー',
    ]);

});

add_filter('pre_get_document_title', function ($title) {

    // フロントページ（固定ページ or 投稿一覧）
    if (is_front_page()) {
        return 'Luminar Neo 完全購入ガイド｜料金プラン・ライセンスの仕組みなど丁寧に解説【2026年最新】';
    }

    return $title;
});

function luminar_neo_sale_shortcode($atts) {
    // ショートコードの引数設定
    $args = shortcode_atts(array(
        'start'  => '2026-04-08 00:00',
        'end'    => '2026-04-13 21:00',
        'name'   => 'スプリングセール',
        'banner' => '', // バナー画像のURL用変数を追加
    ), $atts);

    // 現在時刻と開始・終了時刻を比較
    $now = current_time('timestamp');
    $start_time = strtotime($args['start']);
    $end_time = strtotime($args['end']);

    // セール期間外の表示
    if ($now < $start_time || $now > $end_time) {
        return '<p class="m-no-sale">現在、Luminar Neoのセールは開催されておりません。次のセール時期は<a href="#timing">セール予想月</a>で解説しています。</p><p>すぐに欲しい場合は下記のクーポンコードを使用すると10%OFFで購入が可能です。<p>';
    }

    // セール期間内の表示（変数をHTMLに埋め込み）
    $sale_name = esc_html($args['name']);
    $period = date('n月j日', $start_time) . '〜' . date('n月j日', $end_time);
    
    // バナー画像がある場合のみimgタグを生成
    $banner_html = '';
    if (!empty($args['banner'])) {
        $banner_url = esc_url($args['banner']);
        $banner_html = '<p class="m-sale-banner"><img src="' . $banner_url . '" alt="' . $sale_name . '" style="max-width:100%; height:auto;"></p>';
    }

    $html = <<<HTML

<h2>【最新】現在開催中のLuminar Neoセール情報</h2>
{$banner_html}
<p>現在、Luminar Neoでは「{$sale_name}」が開催中（期間：{$period}）。永久ライセンスが大幅に割引されており、今が購入のチャンスです。</p>
<p>確認できるセール価格は以下のとおり</p>

<div class="m-table-wrap l-bottom-large">
    <table class="m-table">
        <thead>
            <tr>
                <th>プラン</th>
                <th>定価</th>
                <th>セール価格</th>
                <th>割引率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>永久ライセンス デスクトップ版</td>
                <td>$417（約53,000円）</td>
                <td><strong>$119（約15,000円）</strong></td>
                <td><span class="m-badge m-badge--red m-badge--round">71%OFF</span></td>
            </tr>
            <tr>
                <td>クロスデバイス永続ライセンス</td>
                <td>$477（約61,000円）</td>
                <td><strong>$159（約20,000円）</strong></td>
                <td><span class="m-badge m-badge--red m-badge--round">67%OFF</span></td>
            </tr>
            <tr>
                <td>永久Maxライセンス</td>
                <td>$546（約70,000円）</td>
                <td><strong>$179（約23,000円）</strong></td>
                <td><span class="m-badge m-badge--red m-badge--round">67%OFF</span></td>
            </tr>
        </tbody>
    </table>
</div>

<div class="m-point-box">
    <div class="m-point-box__bg">!</div>
    <div class="m-point-box__header">
        <span class="m-point-box__label">Point</span>
        <span class="m-point-box__title">今回のセールの注目ポイント</span>
    </div>
    <ul class="m-point-box__list">
        <li><i class="fa-solid fa-check" style="color:var(--c-sky-600)"></i> 買い切り版（永続ライセンス）が大幅割引</li>
        <li><i class="fa-solid fa-check" style="color:var(--c-sky-600)"></i> クリエイティブギフト＋全デジタルアセットが40％OFF</li>
        <li><i class="fa-solid fa-check" style="color:var(--c-sky-600)"></i> <span class="m-mark-yellow">クーポンコード「nightscape10」併用で10%OFF</span></li>
    </ul>
</div>
HTML;

    return $html;
}
add_shortcode('luminar_sale', 'luminar_neo_sale_shortcode');