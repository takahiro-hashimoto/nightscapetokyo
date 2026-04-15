<?php
/**
 * LUMINAR NEO GUIDE - Structured Data
 *
 * @package LUMINAR_NEO_GUIDE
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * 構造化データを出力
 */
function lng_output_structured_data() {
    $schema = [];

    // 全ページ共通: Organization
    $schema[] = lng_get_organization_schema();

    if (is_front_page()) {
        $schema[] = lng_get_website_schema();
    }

    if (is_singular('post')) {
        $schema[] = lng_get_article_schema();
        $schema[] = lng_get_person_schema(); // 著者情報
    }

    if (!is_front_page()) {
        $breadcrumb_schema = lng_get_breadcrumb_schema();
        if ($breadcrumb_schema) {
            $schema[] = $breadcrumb_schema;
        }
    }

    if (!empty($schema)) {
        echo '<script type="application/ld+json">' . "\n";
        echo wp_json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        echo "\n" . '</script>' . "\n";
    }
}
add_action('wp_head', 'lng_output_structured_data', 10);

/**
 * Organizationスキーマ（E-E-A-T強化）
 */
function lng_get_organization_schema() {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        '@id' => home_url('/#organization'),
        'name' => LNG_SITE_NAME,
        'url' => home_url('/'),
        'logo' => [
            '@type' => 'ImageObject',
            '@id' => home_url('/#logo'),
            'url' => get_template_directory_uri() . '/assets/images/logo.png',
            'contentUrl' => get_template_directory_uri() . '/assets/images/logo.png',
            'caption' => LNG_SITE_NAME,
        ],
        'image' => get_template_directory_uri() . '/assets/images/ogp-default.jpg',
        'description' => LNG_SITE_DESCRIPTION,
        'foundingDate' => '2024',
        'sameAs' => array_filter([
            defined('LNG_AUTHOR_TWITTER') ? LNG_AUTHOR_TWITTER : '',
            defined('LNG_AUTHOR_INSTAGRAM') ? LNG_AUTHOR_INSTAGRAM : '',
        ]),
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'contactType' => 'customer support',
            'url' => home_url('/contact/'),
            'availableLanguage' => 'Japanese',
        ],
    ];
}

/**
 * Personスキーマ（著者 E-E-A-T強化）
 */
function lng_get_person_schema() {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'Person',
        '@id' => home_url('/#author'),
        'name' => LNG_AUTHOR_NAME,
        'jobTitle' => LNG_AUTHOR_ROLE,
        'description' => LNG_AUTHOR_BIO,
        'url' => home_url('/about/'),
        'sameAs' => array_filter([
            defined('LNG_AUTHOR_TWITTER') ? LNG_AUTHOR_TWITTER : '',
            defined('LNG_AUTHOR_INSTAGRAM') ? LNG_AUTHOR_INSTAGRAM : '',
        ]),
        'worksFor' => [
            '@type' => 'Organization',
            '@id' => home_url('/#organization'),
        ],
        'knowsAbout' => [
            'Luminar Neo',
            '写真編集',
            'RAW現像',
            'AI画像処理',
            '写真撮影',
        ],
    ];
}

/**
 * WebSiteスキーマ
 */
function lng_get_website_schema() {
    return [
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        '@id' => home_url('/#website'),
        'url' => home_url('/'),
        'name' => LNG_SITE_NAME,
        'description' => LNG_SITE_DESCRIPTION,
        'publisher' => [
            '@id' => home_url('/#organization'),
        ],
        'potentialAction' => [
            [
                '@type' => 'SearchAction',
                'target' => [
                    '@type' => 'EntryPoint',
                    'urlTemplate' => home_url('/?s={search_term_string}'),
                ],
                'query-input' => 'required name=search_term_string',
            ],
        ],
        'inLanguage' => 'ja-JP',
    ];
}

/**
 * Articleスキーマ
 */
function lng_get_article_schema() {
    global $post;

    if (!$post) {
        return null;
    }

    $image_url = '';
    $image_width = 1200;
    $image_height = 675;

    if (has_post_thumbnail()) {
        $image = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
        if ($image) {
            $image_url = $image[0];
            $image_width = $image[1];
            $image_height = $image[2];
        }
    }

    $description = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 160, '...');
    $description = wp_strip_all_tags($description);

    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Article',
        '@id' => get_permalink() . '#article',
        'isPartOf' => [
            '@id' => home_url('/#website'),
        ],
        'mainEntityOfPage' => [
            '@type' => 'WebPage',
            '@id' => get_permalink(),
        ],
        'headline' => get_the_title(),
        'description' => $description,
        'datePublished' => get_the_date('c'),
        'dateModified' => get_the_modified_date('c'),
        'author' => [
            '@id' => home_url('/#author'),
        ],
        'publisher' => [
            '@id' => home_url('/#organization'),
        ],
        'inLanguage' => 'ja-JP',
        'wordCount' => str_word_count(strip_tags($post->post_content)),
    ];

    if ($image_url) {
        $schema['image'] = [
            '@type' => 'ImageObject',
            'url' => $image_url,
            'width' => $image_width,
            'height' => $image_height,
        ];
        $schema['thumbnailUrl'] = $image_url;
    }

    $categories = get_the_category();
    if (!empty($categories)) {
        $schema['articleSection'] = $categories[0]->name;
        $schema['about'] = [
            '@type' => 'Thing',
            'name' => $categories[0]->name,
        ];
    }

    $tags = get_the_tags();
    if (!empty($tags)) {
        $schema['keywords'] = implode(', ', wp_list_pluck($tags, 'name'));
    }

    return $schema;
}

/**
 * BreadcrumbListスキーマ
 */
function lng_get_breadcrumb_schema() {
    $items = [];
    $position = 1;

    $items[] = [
        '@type' => 'ListItem',
        'position' => $position++,
        'name' => 'ホーム',
        'item' => home_url('/'),
    ];

    if (is_single()) {
        $categories = get_the_category();
        if (!empty($categories)) {
            $cat = $categories[0];
            $items[] = [
                '@type' => 'ListItem',
                'position' => $position++,
                'name' => $cat->name,
                'item' => get_category_link($cat->term_id),
            ];
        }
        $items[] = [
            '@type' => 'ListItem',
            'position' => $position++,
            'name' => get_the_title(),
            'item' => get_permalink(),
        ];
    } elseif (is_page()) {
        $items[] = [
            '@type' => 'ListItem',
            'position' => $position++,
            'name' => get_the_title(),
            'item' => get_permalink(),
        ];
    } elseif (is_category()) {
        $items[] = [
            '@type' => 'ListItem',
            'position' => $position++,
            'name' => single_cat_title('', false),
            'item' => get_category_link(get_queried_object_id()),
        ];
    } elseif (is_tag()) {
        $items[] = [
            '@type' => 'ListItem',
            'position' => $position++,
            'name' => single_tag_title('', false),
            'item' => get_tag_link(get_queried_object_id()),
        ];
    }

    if (count($items) <= 1) {
        return null;
    }

    return [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => $items,
    ];
}
