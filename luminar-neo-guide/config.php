<?php
/**
 * LUMINAR NEO GUIDE - サイト設定
 *
 * @package LUMINAR_NEO_GUIDE
 */

if (!defined('ABSPATH')) {
    exit;
}

// サイト基本設定
define('LNG_SITE_NAME', 'LUMINAR NEO GUIDE');
define('LNG_SITE_DESCRIPTION', 'Luminar Neoの使い方・買い切りとサブスクの違い・最新セール情報まで徹底解説');

// アフィリエイトリンク
define('LNG_AFFILIATE_URL', 'https://skylum.evyy.net/552xL3');
define('LNG_AFFILIATE_URL_PRICING', 'https://skylum.evyy.net/mO9BEa');
define('LNG_AFFILIATE_URL_TRIAL', 'https://sskylum.evyy.net/qz5MQb');
define('LNG_AFFILIATE_URL_UPGRADE', 'https://skylum.evyy.net/o4mEAm');

// クーポンコード
define('LNG_COUPON_CODE', 'nightscape10');
define('LNG_COUPON_DISCOUNT', '10%');

// トラッキング設定
define('LNG_GA4_ID', 'G-PKPXQK1N9Q'); // 例: G-XXXXXXXXXX
define('LNG_SEARCH_CONSOLE_ID', ''); // 例: xxxxxxxxxxxxxx

// 著者情報（固定）
define('LNG_AUTHOR_NAME', 'タカヒロ');
define('LNG_AUTHOR_ROLE', 'フォトグラファー');
define('LNG_AUTHOR_BIO', '夜景写真を専門とするフォトグラファー。東京夜景ナビでは都内の夜景スポットを200以上取材。ホテルやレストランなどの撮影も請け負っています。10年以上の撮影経験を活かし、Luminar Neoの賢い購入方法や効率的なレタッチ術を発信中。');
define('LNG_AUTHOR_INITIAL', 'T');
define('LNG_AUTHOR_TWITTER', 'https://x.com/takahiro__1202');
define('LNG_AUTHOR_HOMEPAGE1', 'https://nightscape.tokyo/');
define('LNG_AUTHOR_HOMEPAGE2', 'https://digital-style.jp/');
define('LNG_AUTHOR_YOUTUBE', 'https://www.youtube.com/@nightscape-tokyo');

// ヘルパー関数
function lng_get_config($key, $default = '') {
    $constant_name = 'LNG_' . strtoupper($key);
    return defined($constant_name) ? constant($constant_name) : $default;
}

function lng_affiliate_link($type = 'default', $echo = true) {
    $links = [
        'default' => LNG_AFFILIATE_URL,
        'pricing' => LNG_AFFILIATE_URL_PRICING,
    ];
    $url = isset($links[$type]) ? $links[$type] : $links['default'];
    if ($echo) {
        echo esc_url($url);
    }
    return $url;
}

function lng_coupon_code($echo = true) {
    if ($echo) {
        echo esc_html(LNG_COUPON_CODE);
    }
    return LNG_COUPON_CODE;
}
