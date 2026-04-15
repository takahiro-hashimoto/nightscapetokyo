<?php
/**
 * 404エラーページテンプレート
 *
 * @package LUMINAR_NEO_GUIDE
 */

get_header();
?>

<main class="l-main" id="main" role="main">
    <div class="l-container">
        <div class="l-content u-text-center" style="padding: 4rem 0;">

            <h1 class="u-text-muted" style="font-size: 6rem; margin-bottom: 1rem;">404</h1>

            <h2>ページが見つかりません</h2>

            <p class="u-text-muted">お探しのページは移動または削除された可能性があります。</p>

            <div class="u-mt-3">
                <a href="<?php echo home_url('/'); ?>" class="m-btn m-btn--primary">トップページへ戻る</a>
            </div>

            <div class="u-mt-4">
                <p>または、検索してみてください：</p>
                <?php get_search_form(); ?>
            </div>

        </div>
    </div>
</main>

<?php get_footer(); ?>
