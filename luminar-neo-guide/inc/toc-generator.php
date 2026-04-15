<?php
/**
 * LUMINAR NEO GUIDE - TOC Generator
 * シンプル版
 *
 * @package LUMINAR_NEO_GUIDE
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * 目次を表示（テンプレートから呼び出し）
 */
function lng_the_toc() {
    global $post;
    
    if (!$post || !is_singular('post')) {
        return;
    }
    
    // 無効化チェック
    $disable = get_post_meta($post->ID, 'lng_disable_toc', true);
    if ($disable === '1' || $disable === 'yes' || $disable === 'true') {
        return;
    }
    
    // コンテンツを取得
    $content = $post->post_content;
    
    // ブロックを処理
    if (function_exists('do_blocks')) {
        $content = do_blocks($content);
    }
    
    // H2/H3を検索
    $pattern = '/<h([23])([^>]*)>(.*?)<\/h\1>/isu';
    preg_match_all($pattern, $content, $matches, PREG_SET_ORDER);
    
    // 2つ未満なら目次なし
    if (count($matches) < 2) {
        return;
    }
    
    // 目次を生成
    echo '<nav class="m-toc" aria-label="目次">' . "\n";
    echo '<div class="m-toc__title"><i class="fa-solid fa-list" aria-hidden="true"></i> タップできる目次</div>' . "\n";
    echo '<ul class="m-toc__list">' . "\n";
    
    $count = 0;
    foreach ($matches as $match) {
        $count++;
        $level = $match[1];
        $text = trim(strip_tags($match[3]));
        $id = 'heading-' . $count;
        $class = ($level === '3') ? 'toc-h3' : 'toc-h2';
        
        echo '<li class="' . $class . '">';
        echo '<a href="#' . esc_attr($id) . '">' . esc_html($text) . '</a>';
        echo '</li>' . "\n";
    }
    
    echo '</ul>' . "\n";
    echo '</nav>' . "\n";
}

/**
 * ID付きコンテンツを出力（目次を最初のH2直前に挿入）
 */
function lng_the_content_with_toc() {
    global $post;
    
    if (!$post || !is_singular('post')) {
        the_content();
        return;
    }
    
    // コンテンツを取得
    $content = $post->post_content;
    
    // ブロックを処理
    if (function_exists('do_blocks')) {
        $content = do_blocks($content);
    }
    
    // ショートコードを処理
    $content = do_shortcode($content);
    
    // wpautopを適用
    $content = wpautop($content);
    
    // H2/H3を検索して目次を生成
    $pattern = '/<h([23])([^>]*)>(.*?)<\/h\1>/isu';
    preg_match_all($pattern, $content, $matches, PREG_SET_ORDER);
    
    // 目次HTMLを生成（2つ以上の見出しがある場合のみ）
    $toc_html = '';
    $disable = get_post_meta($post->ID, 'lng_disable_toc', true);
    $toc_disabled = ($disable === '1' || $disable === 'yes' || $disable === 'true');
    
    if (count($matches) >= 2 && !$toc_disabled) {
        $toc_html .= '<nav class="m-toc" aria-label="目次">' . "\n";
        $toc_html .= '<div class="m-toc__title"><i class="fa-solid fa-list" aria-hidden="true"></i> タップできる目次</div>' . "\n";
        $toc_html .= '<ul class="m-toc__list">' . "\n";
        
        $count = 0;
        foreach ($matches as $match) {
            $count++;
            $level = $match[1];
            $text = trim(strip_tags($match[3]));
            $id = 'heading-' . $count;
            $class = ($level === '3') ? 'toc-h3' : 'toc-h2';
            
            $toc_html .= '<li class="' . $class . '">';
            $toc_html .= '<a href="#' . esc_attr($id) . '">' . esc_html($text) . '</a>';
            $toc_html .= '</li>' . "\n";
        }
        
        $toc_html .= '</ul>' . "\n";
        $toc_html .= '</nav>' . "\n";
    }
    
    // H2/H3にIDを付与
    $count = 0;
    $content = preg_replace_callback(
        '/<h([23])([^>]*)>(.*?)<\/h\1>/isu',
        function($match) use (&$count) {
            $count++;
            $level = $match[1];
            $attributes = $match[2];
            $inner = $match[3];
            $id = 'heading-' . $count;
            
            // 既にIDがあるかチェック
            if (preg_match('/id=["\'][^"\']+["\']/i', $attributes)) {
                return $match[0];
            }
            
            if (empty(trim($attributes))) {
                return '<h' . $level . ' id="' . $id . '">' . $inner . '</h' . $level . '>';
            } else {
                return '<h' . $level . ' id="' . $id . '"' . $attributes . '>' . $inner . '</h' . $level . '>';
            }
        },
        $content
    );
    
    // 目次を最初のH2の直前に挿入
    if (!empty($toc_html)) {
        // 最初のH2を探す
        $first_h2_pos = stripos($content, '<h2');
        
        if ($first_h2_pos !== false) {
            $content = substr($content, 0, $first_h2_pos) . $toc_html . substr($content, $first_h2_pos);
        } else {
            // H2がない場合は先頭に
            $content = $toc_html . $content;
        }
    }
    
    echo $content;
}

/**
 * ショートコード: 目次
 */
function lng_toc_shortcode($atts) {
    ob_start();
    lng_the_toc();
    return ob_get_clean();
}
add_shortcode('lng_toc', 'lng_toc_shortcode');