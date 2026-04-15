<?php
/**
 * 記事ページテンプレート
 * 目次をテンプレートで直接出力
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<?php lng_breadcrumb(); ?>

<main class="l-main" id="main" role="main">
    <div class="l-container">
        <div class="l-content">

            <?php while (have_posts()) : the_post(); ?>
            <article class="h-entry" itemscope itemtype="https://schema.org/Article">
                <meta itemprop="mainEntityOfPage" content="<?php the_permalink(); ?>">

                <header class="m-article-header">

                    <h1 class="m-article-header__title p-name" itemprop="headline"><?php the_title(); ?></h1>

                    <div class="m-article-header__meta">
                        <div class="m-article-header__dates">
                            <span class="m-article-header__date">
                                <i class="fa-regular fa-clock" aria-hidden="true"></i>
                                <time class="dt-published" datetime="<?php echo get_the_date('c'); ?>" itemprop="datePublished"><?php echo get_the_date(); ?></time>
                            </span>
                            <span class="m-article-header__separator" aria-hidden="true">|</span>
                            <span class="m-article-header__date">
                                <i class="fa-solid fa-rotate" aria-hidden="true"></i>
                                <time class="dt-updated" datetime="<?php echo get_the_modified_date('c'); ?>" itemprop="dateModified"><?php echo get_the_modified_date(); ?></time>
                            </span>
                        </div>
                        <span class="m-meta-pr">広告</span>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                <figure class="m-featured-image" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
                    <?php 
                    $thumb_id = get_post_thumbnail_id();
                    $thumb_meta = wp_get_attachment_metadata($thumb_id);
                    ?>
                    <?php the_post_thumbnail('full', ['itemprop' => 'url']); ?>
                    <meta itemprop="width" content="<?php echo esc_attr($thumb_meta['width'] ?? 1200); ?>">
                    <meta itemprop="height" content="<?php echo esc_attr($thumb_meta['height'] ?? 675); ?>">
                </figure>
                <?php endif; ?>

                <div class="entry-content e-content" itemprop="articleBody">
                    <?php 
                    // 目次とコンテンツを一体で出力（H2直前に目次挿入）
                    lng_the_content_with_toc();
                    ?>
                </div>

                <?php 
                $tags = get_the_tags();
                if (!empty($tags)) : 
                ?>
                <footer class="m-article-footer">
                    <div class="m-article-tags" role="list" aria-label="タグ">
                        <?php foreach ($tags as $tag) : ?>
                        <a href="<?php echo get_tag_link($tag->term_id); ?>" class="m-article-tag" rel="tag" role="listitem">
                            <span aria-hidden="true">#</span><?php echo esc_html($tag->name); ?>
                        </a>
                        <?php endforeach; ?>
                    </div>
                </footer>
                <?php endif; ?>

                <?php get_template_part('template-parts/cta-sale'); ?>

                <?php get_template_part('template-parts/author-box'); ?>

            </article>
            <?php endwhile; ?>

            <?php get_template_part('template-parts/related-posts'); ?>

        </div>
    </div>
</main>

<?php get_footer(); ?>