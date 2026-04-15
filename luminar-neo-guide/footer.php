<?php
/**
 * フッターテンプレート（セマンティックHTML強化版）
 *
 * @package LUMINAR_NEO_GUIDE
 */
?>

<footer class="l-footer" role="contentinfo" itemscope itemtype="https://schema.org/WPFooter">
    <div class="l-container">
        <div class="l-footer__inner">
            <div class="l-footer__brand" itemscope itemtype="https://schema.org/Organization">
                <a href="<?php echo home_url('/'); ?>" class="m-logo" itemprop="url">
                    <span itemprop="name">LUMINAR NEO <span class="m-logo__accent">GUIDE</span></span>
                </a>
                <p class="l-footer__tagline" itemprop="description">Luminar Neo専門の情報サイト</p>
                <meta itemprop="logo" content="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png">
            </div>
            <nav class="l-footer__nav"
                 aria-label="フッターメニュー"
                 itemscope
                 itemtype="https://schema.org/SiteNavigationElement">

                <?php
                wp_nav_menu([
                    'theme_location' => 'footer',
                    'container'      => false,
                    'menu_class'     => 'l-footer__menu',
                    'depth'          => 1,
                    'fallback_cb'    => false,
                    'link_before'    => '<span itemprop="name">',
                    'link_after'     => '</span>',
                ]);
                ?>

            </nav>
        </div>
        <div class="l-footer__copyright">
            <small>&copy; <time datetime="<?php echo date('Y'); ?>"><?php echo date('Y'); ?></time> <?php echo esc_html(LNG_SITE_NAME); ?>.</small>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
