<?php
// ▼ タイムゾーンと期間の設定
date_default_timezone_set('Asia/Tokyo');
$now = date("Y-m-d H:i:s");
$start_date = "2026-04-08 00:00:00"; // セール開始日時
$end_date   = "2026-04-13 23:59:59"; // セール終了日時

// ▼ セール名の設定
$sale_name = "スプリングセール"; // ここに「スプリングセール」などを入力

// ▼ フラグ設定
// セール期間内かどうかの判定
$is_sale = (strtotime($now) >= strtotime($start_date) && strtotime($now) <= strtotime($end_date));
// クーポンを表示するかどうかのフラグ（クーポンが切れたらここを false にする）
$has_coupon = true; 
?>

<?php if ($is_sale) : ?>
    <section class="m-cta-sale" aria-labelledby="cta-title">
        <div class="m-cta-sale__bg m-cta-sale__bg--1" aria-hidden="true"></div>
        <div class="m-cta-sale__bg m-cta-sale__bg--2" aria-hidden="true"></div>

        <div class="m-cta-sale__content">
            <p class="m-cta-sale__title" id="cta-title"><i class="fa fa-bolt"></i> Luminar Neoの<br class="sp-only"><?php echo $sale_name; ?>実施中！</p>

            <div class="m-cta-sale__desc">
                <p>ただいまLuminar Neoの<?php echo $sale_name; ?>開催中！お得に買い切り版を購入できるチャンスです。</p>
                <?php if ($has_coupon) : ?>
                    <p>さらにセールと併用できる当サイト経由で使える限定クーポンを用意。30日間の全額返金保証付きもあるので、安心してお試しいただけます。</p>
                <?php else : ?>
                    <p>30日間の全額返金保証も用意されているので、安心してお試しいただけます。まずは公式サイトで最新のセール価格をチェックしてみてください。</p>
                <?php endif; ?>
            </div>

            <?php if ($has_coupon) : ?>
                <div class="m-cta-coupon-area">
                    <button class="m-cta-coupon-btn" onclick="lngCopyCoupon(this)">
                        <span class="m-cta-coupon__label">10%OFF COUPON</span>
                        <div class="m-cta-coupon__code">
                            <span><?php lng_coupon_code(); ?></span>
                            <i class="fa-regular fa-copy m-cta-coupon__icon" aria-hidden="true"></i>
                        </div>
                        <p class="m-cta-coupon__hint">クリックしてコピー</p>
                    </button>
                    <p class="m-cta-msg" aria-live="polite" style="display: none;"></p>
                </div>
            <?php endif; ?>

            <div class="m-cta-actions">
                <p><a href="<?php lng_affiliate_link(); ?>" class="m-btn m-btn--primary m-btn--shiny" target="_blank" rel="noopener sponsored">
                    <span>公式サイトでセール情報をチェック <i class="fa-solid fa-chevron-right"></i></span>
                </a>
                </p>
                <p class="text-xxsmall"><a href="<?php echo home_url('/sale/'); ?>" class="m-btn m-btn--glass">
                    Luminar Neoのセール情報詳細 <i class="fa-solid fa-chevron-right"></i>
                </a>
                </p>
            </div>
        </div>
    </section>

<?php else : ?>
    <section class="m-cta-sale" aria-labelledby="cta-title">
        <div class="m-cta-sale__bg m-cta-sale__bg--1" aria-hidden="true"></div>
        <div class="m-cta-sale__bg m-cta-sale__bg--2" aria-hidden="true"></div>

        <div class="m-cta-sale__content">
            <p class="m-cta-sale__title" id="cta-title"><i class="fa fa-bolt"></i> Luminar Neoを<br class="sp-only">お得に購入する</p>

            <div class="m-cta-sale__desc">
                <?php if ($has_coupon) : ?>
                    <p>当サイト経由で使える限定クーポンを用意しました。Luminar Neoをお得に購入するのにご活用ください。30日間の全額返金保証付きもあるので、安心してお試しいただけます。</p>
                <?php else : ?>
                    <p>Luminar Neoは、プロ級の編集が直感的に行えるAIフォトエディターです。30日間の全額返金保証も用意されているので、安心してお試しいただけます。</p>
                <?php endif; ?>
            </div>

            <?php if ($has_coupon) : ?>
                <div class="m-cta-coupon-area">
                    <button class="m-cta-coupon-btn" onclick="lngCopyCoupon(this)">
                        <span class="m-cta-coupon__label">10%OFF COUPON</span>
                        <div class="m-cta-coupon__code">
                            <span><?php lng_coupon_code(); ?></span>
                            <i class="fa-regular fa-copy m-cta-coupon__icon" aria-hidden="true"></i>
                        </div>
                        <p class="m-cta-coupon__hint">クリックしてコピー</p>
                    </button>
                    <p class="m-cta-msg" aria-live="polite" style="display: none;"></p>
                </div>
            <?php endif; ?>

            <div class="m-cta-actions">
                <p><a href="<?php lng_affiliate_link(); ?>" class="m-btn m-btn--primary m-btn--shiny" target="_blank" rel="noopener sponsored">
                    <span>公式サイトを見る <i class="fa-solid fa-chevron-right"></i></span>
                </a>
                </p>
                <p class="text-xxsmall"><a href="<?php echo home_url('/sale/'); ?>" class="m-btn m-btn--glass">
                    Luminar Neoを安く買う方法 <i class="fa-solid fa-chevron-right"></i>
                </a>
                </p>
            </div>
        </div>
    </section>

<?php endif; ?>