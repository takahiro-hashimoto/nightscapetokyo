<?php
/**
 * LUMINAR NEO GUIDE - Head Tags
 *
 * @package LUMINAR_NEO_GUIDE
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * head タグ内にメタ情報を出力
 */
function lng_head_meta_tags() {

    // テーマカラー
    echo '<meta name="theme-color" content="#0ea5e9">' . "\n";

    // フォーマット検出無効化
    echo '<meta name="format-detection" content="telephone=no">' . "\n";

    // OGP
    lng_output_ogp();

    // Twitter Card
    lng_output_twitter_card();

    // canonical
    lng_output_canonical();

    // description
    lng_output_description();
}
add_action('wp_head', 'lng_head_meta_tags', 1);

/**
 * OGP出力
 */
function lng_output_ogp() {
    echo '<meta property="og:locale" content="ja_JP">' . "\n";
    echo '<meta property="og:site_name" content="' . esc_attr(LNG_SITE_NAME) . '">' . "\n";

    if (is_front_page()) {
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:title" content="' . esc_attr(get_bloginfo('name')) . '">' . "\n";
        echo '<meta property="og:description" content="' . esc_attr(LNG_SITE_DESCRIPTION) . '">' . "\n";
        echo '<meta property="og:url" content="' . esc_url(home_url('/')) . '">' . "\n";
    } elseif (is_singular()) {
        echo '<meta property="og:type" content="article">' . "\n";
        echo '<meta property="og:title" content="' . esc_attr(get_the_title()) . '">' . "\n";

        $excerpt = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 100, '...');
        echo '<meta property="og:description" content="' . esc_attr(wp_strip_all_tags($excerpt)) . '">' . "\n";
        echo '<meta property="og:url" content="' . esc_url(get_permalink()) . '">' . "\n";
        echo '<meta property="article:published_time" content="' . esc_attr(get_the_date('c')) . '">' . "\n";
        echo '<meta property="article:modified_time" content="' . esc_attr(get_the_modified_date('c')) . '">' . "\n";
    } else {
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:title" content="' . esc_attr(wp_get_document_title()) . '">' . "\n";
    }

    // OGP画像
    $ogp_image = lng_get_ogp_image();
    if ($ogp_image) {
        echo '<meta property="og:image" content="' . esc_url($ogp_image) . '">' . "\n";
        echo '<meta property="og:image:width" content="1200">' . "\n";
        echo '<meta property="og:image:height" content="630">' . "\n";
    }
}

/**
 * Twitter Card出力
 */
function lng_output_twitter_card() {
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";

    if (is_singular()) {
        echo '<meta name="twitter:title" content="' . esc_attr(get_the_title()) . '">' . "\n";
        $excerpt = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 100, '...');
        echo '<meta name="twitter:description" content="' . esc_attr(wp_strip_all_tags($excerpt)) . '">' . "\n";
    } else {
        echo '<meta name="twitter:title" content="' . esc_attr(wp_get_document_title()) . '">' . "\n";
    }

    $ogp_image = lng_get_ogp_image();
    if ($ogp_image) {
        echo '<meta name="twitter:image" content="' . esc_url($ogp_image) . '">' . "\n";
    }
}

/**
 * canonical出力
 */
function lng_output_canonical() {
    $url = '';

    if (is_front_page()) {
        $url = home_url('/');
    } elseif (is_singular()) {
        $url = get_permalink();
    } elseif (is_category() || is_tag() || is_tax()) {
        $url = get_term_link(get_queried_object());
    }

    if (!empty($url) && !is_wp_error($url)) {
        echo '<link rel="canonical" href="' . esc_url($url) . '">' . "\n";
    }
}

/**
 * description出力
 */
function lng_output_description() {
    $description = '';

    if (is_front_page()) {
        $description = LNG_SITE_DESCRIPTION;
    } elseif (is_singular()) {
        $description = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 120, '...');
    } elseif (is_category() || is_tag()) {
        $term = get_queried_object();
        $description = !empty($term->description) ? $term->description : $term->name . 'に関する記事一覧';
    }

    if (!empty($description)) {
        $description = wp_strip_all_tags($description);
        $description = preg_replace('/\s+/', ' ', $description);
        $description = mb_substr($description, 0, 160);
        echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
    }
}

/**
 * OGP画像取得
 */
function lng_get_ogp_image() {
    if (is_singular() && has_post_thumbnail()) {
        $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'lng-ogp');
        if ($image) {
            return $image[0];
        }
    }
    return get_template_directory_uri() . '/assets/images/ogp-default.jpg';
}

/**
 * GA4出力
 */
function lng_output_ga4() {
    if (empty(LNG_GA4_ID)) {
        return;
    }

    if (current_user_can('manage_options')) {
        return;
    }
    ?>
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr(LNG_GA4_ID); ?>"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '<?php echo esc_js(LNG_GA4_ID); ?>');
</script>
<?php
}
add_action('wp_head', 'lng_output_ga4', 5);

/**
 * Search Console出力
 */
function lng_output_search_console() {
    if (empty(LNG_SEARCH_CONSOLE_ID)) {
        return;
    }
    echo '<meta name="google-site-verification" content="' . esc_attr(LNG_SEARCH_CONSOLE_ID) . '">' . "\n";
}
add_action('wp_head', 'lng_output_search_console', 2);

/**
 * プリコネクト
 */
function lng_preconnect_hints() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
    echo '<link rel="preconnect" href="https://cdnjs.cloudflare.com">' . "\n";
}
add_action('wp_head', 'lng_preconnect_hints', 0);
