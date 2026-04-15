<?php
/**
 * 著者情報ボックス（セマンティックHTML強化版）
 *
 * @package LUMINAR_NEO_GUIDE
 */
?>
<aside class="m-author" aria-labelledby="author-name" itemscope itemtype="https://schema.org/Person" itemprop="author">
    <div class="m-author__container">
        <div class="m-author__aside">
            <div class="m-author__img" aria-hidden="true"><?php echo esc_html(LNG_AUTHOR_INITIAL); ?></div>
            <span class="m-author__job" itemprop="jobTitle"><?php echo esc_html(LNG_AUTHOR_ROLE); ?></span>
        </div>

        <div class="m-author__body">
            <header class="m-author__header">
                <h3 class="m-author__name" id="author-name" itemprop="name"><?php echo esc_html(LNG_AUTHOR_NAME); ?></h3>
                <div class="m-author__label">この記事を書いた人</div>
            </header>
            
            <p class="m-author__bio" itemprop="description"><?php echo esc_html(LNG_AUTHOR_BIO); ?></p>
            
            <nav class="m-author__social" aria-label="著者のSNS">
                <a href="<?php echo esc_url(LNG_AUTHOR_HOMEPAGE1); ?>" target="_blank" rel="noopener noreferrer me" itemprop="sameAs">
                    <i class="fa-solid fa-globe" aria-hidden="true"></i>
                    <span>東京夜景ナビ</span>
                </a>
                <a href="<?php echo esc_url(LNG_AUTHOR_HOMEPAGE2); ?>" target="_blank" rel="noopener noreferrer me" itemprop="sameAs">
                    <i class="fa-solid fa-globe" aria-hidden="true"></i>
                    <span>デジスタ</span>
                </a>
                <a href="<?php echo esc_url(LNG_AUTHOR_TWITTER); ?>" target="_blank" rel="noopener noreferrer me" itemprop="sameAs">
                    <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
                    <span>Twitter</span>
                </a>
                <a href="<?php echo esc_url(LNG_AUTHOR_YOUTUBE); ?>" target="_blank" rel="noopener noreferrer me" itemprop="sameAs">
                    <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                    <span>Youtube</span>
                </a>
            </nav>
            <meta itemprop="url" content="<?php echo home_url('/about/'); ?>">
        </div>
    </div>
</aside>