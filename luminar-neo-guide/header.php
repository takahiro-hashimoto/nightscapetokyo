<?php
/**
 * ヘッダーテンプレート（PC：カスタムメニュー / SP：中央ロゴ・ハンバーガーメニュー）
 *
 * @package LUMINAR_NEO_GUIDE
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="l-header" role="banner" itemscope itemtype="https://schema.org/WPHeader">
    <div class="l-header__inner">
        
        <div class="l-header__logo">
            <a href="<?php echo home_url('/'); ?>" class="m-logo" rel="home" itemprop="url">
                <span itemprop="name">LUMINAR NEO <span class="m-logo__accent">ガイド</span></span>
            </a>
        </div>

        <button class="m-hamburger" id="js-hamburger" aria-controls="js-nav" aria-expanded="false" aria-label="メニューを開く">
            <span class="m-hamburger__line"></span>
        </button>

        <nav class="m-nav" id="js-nav" role="navigation" aria-label="メインメニュー" itemscope itemtype="https://schema.org/SiteNavigationElement">

            <div class="m-nav__inner">

                <div class="about-box u-sp-only">
                    <div class="about-box__icon">
                        <i class="fa-solid fa-camera"></i>
                        <span class="about-box__icon-check"><i class="fa-solid fa-check"></i></span>
                    </div>
                    <div class="about-box__content">
                        <div class="about-box__header">
                            <p class="about-box__title">このページについて</p>
                        </div>
                        <div class="about-box__text entry-content">
                            <p>Luminar Neo利用歴2年の現役フォトグラファーが運営するルミナーネオの購入ガイドページです。ちょっと複雑な料金体系から安く買う方法まで網羅的に紹介しています。</p>
                            <p><a href="/luminar/">Luminar Neo完全購入ガイド</a></p>
                        </div>
                    </div>
                </div>

                 <div class="u-pc-only">
                <?php
                if (has_nav_menu('global-nav')) :
                    wp_nav_menu(array(
                        'theme_location' => 'global-nav',
                        'container'      => false,
                        'menu_class'     => 'm-nav__list',
                        'fallback_cb'    => false,
                        'depth'          => 1,
                    ));
                endif;
                ?>
                </div>
                
                <div class="m-nav__button u-pc-only">
                    <a href="<?php lng_affiliate_link(); ?>" class="m-btn m-btn--primary m-btn--sm" target="_blank" rel="noopener sponsored">
                        公式サイト <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                </div>

                <div class="m-nav__cta u-sp-only">
                    <?php get_template_part('template-parts/cta-sale'); ?>
                </div>
            </div>
        </nav>

        <div class="m-overlay" id="js-overlay"></div>

    </div>
</header>