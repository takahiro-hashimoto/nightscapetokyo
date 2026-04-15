<?php
/**
 * 検索結果ページテンプレート
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<main class="l-main" id="main" role="main">
    <div class="l-container">

        <?php lng_breadcrumb(); ?>

        <header class="m-article-header u-mb-4">
            <h1 class="m-article-header__title">「<?php echo esc_html(get_search_query()); ?>」の検索結果</h1>
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
                        <?php
                        $categories = get_the_category();
                        if (!empty($categories)) :
                        ?>
                        <span class="m-post-card__cat"><?php echo esc_html($categories[0]->name); ?></span>
                        <?php endif; ?>
                        <h2 class="m-post-card__title"><?php the_title(); ?></h2>
                        <p class="u-text-muted" style="font-size:0.75rem;margin:0;"><?php echo wp_trim_words(get_the_excerpt(), 40, '...'); ?></p>
                    </div>
                </a>
            </article>
            <?php endwhile; ?>
        </div>

        <?php lng_pagination(); ?>

        <?php else : ?>
        <div class="u-text-center" style="padding: 3rem 0;">
            <p class="u-text-muted">検索結果が見つかりませんでした。</p>
            <p>別のキーワードで検索してみてください。</p>
            <?php get_search_form(); ?>
        </div>
        <?php endif; ?>

    </div>
</main>

<?php get_footer(); ?>
