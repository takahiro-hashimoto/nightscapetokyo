<?php
/**
 * 検索フォーム
 *
 * @package LUMINAR_NEO_GUIDE
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
    <label>
        <span class="screen-reader-text">検索:</span>
        <input type="search" class="search-field" placeholder="キーワードを入力..." value="<?php echo get_search_query(); ?>" name="s" style="padding: 0.75rem 1rem; border: 1px solid var(--c-border); border-radius: var(--radius-md); font-size: 0.875rem; width: 100%; max-width: 300px;">
    </label>
    <button type="submit" class="m-btn m-btn--primary m-btn--sm" style="margin-left: 0.5rem;">検索</button>
</form>
