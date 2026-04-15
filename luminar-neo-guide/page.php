<?php
/**
 * 固定ページテンプレート
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<main class="l-main" id="main" role="main">
    <div class="l-container">
        <div class="l-content">

            <?php lng_breadcrumb(); ?>

            <?php while (have_posts()) : the_post(); ?>
            <article>

                <header class="m-article-header">
                    <h1 class="m-article-header__title"><?php the_title(); ?></h1>
                </header>

                <div class="entry-content">
                    <?php the_content(); ?>
                </div>

            </article>
            <?php endwhile; ?>

        </div>
    </div>
</main>

<?php get_footer(); ?>
