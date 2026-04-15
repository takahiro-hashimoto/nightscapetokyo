<?php
/**
 * アーカイブページテンプレート
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<main class="l-main" id="main" role="main">
    <div class="l-container">

        <?php lng_breadcrumb(); ?>

        <header class="m-article-header u-mb-4">
            <h1 class="m-article-header__title"><?php echo get_the_archive_title(); ?></h1>
            <?php the_archive_description('<p class="u-text-muted">', '</p>'); ?>
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
                        <?php endif; ?>
                        <h2 class="m-post-card__title"><?php the_title(); ?></h2>
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
</main>

<?php get_footer(); ?>
