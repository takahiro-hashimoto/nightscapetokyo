<?php
/**
 * 関連記事
 *
 * @package LUMINAR_NEO_GUIDE
 */

$categories = get_the_category();
if (empty($categories)) {
    return;
}

$args = [
    'category__in'   => [$categories[0]->term_id],
    'post__not_in'   => [get_the_ID()],
    'posts_per_page' => 4,
    'orderby'        => 'rand',
];

$related_query = new WP_Query($args);

if (!$related_query->have_posts()) {
    wp_reset_postdata();
    return;
}
?>
<aside class="m-related-posts" aria-labelledby="related-title">
    <h2 class="m-related-posts__title" id="related-title">関連記事</h2>

    <div class="l-grid-2">
        <?php while ($related_query->have_posts()) : $related_query->the_post(); ?>
        <article class="m-post-card">
            <a href="<?php the_permalink(); ?>">
                <div class="m-post-card__thumb">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('lng-card-sm', ['alt' => get_the_title()]); ?>
                    <?php else : ?>
                        <div style="width:100%;height:100%;background:var(--c-bg-sub);"></div>
                    <?php endif; ?>
                </div>
                <div class="m-post-card__content">
                    <?php
                    $post_categories = get_the_category();
                    if (!empty($post_categories)) :
                    ?>
                    <span class="m-post-card__cat"><?php echo esc_html($post_categories[0]->name); ?></span>
                    <?php endif; ?>
                    <h3 class="m-post-card__title"><?php the_title(); ?></h3>
                </div>
            </a>
        </article>
        <?php endwhile; ?>
    </div>
</aside>
<?php
wp_reset_postdata();
