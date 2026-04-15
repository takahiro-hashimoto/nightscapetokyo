/**
 * LUMINAR NEO GUIDE - Main JavaScript
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initCouponCopy();
        initSmoothScroll();
        initExternalLinks();
    });

    /**
     * クーポンコードコピー
     */

    function initCouponCopy() {
        // ボタン要素(this)を受け取る形に変更
        window.lngCopyCoupon = function(triggerBtn) {
            if (!triggerBtn) return;

            // 1. コード要素を探す
            // triggerBtn（ボタン）の中にある、特定のクラスを持つ要素を探します
            // m-cta-coupon__code内のspan (セールCTA用) または m-cta-mini__code (ミニCTA用)
            var codeEl = triggerBtn.querySelector('.m-cta-coupon__code span') || triggerBtn.querySelector('.m-cta-mini__code');
            
            // 2. メッセージ表示エリアを探す
            // ボタンの親要素(wrapper)内にある .m-cta-msg を探します
            var wrapper = triggerBtn.closest('.m-cta-coupon-area') || triggerBtn.closest('.m-cta-mini__coupon-area');
            var msgEl = wrapper ? wrapper.querySelector('.m-cta-msg') : null;

            if (!codeEl) return;

            var code = codeEl.textContent.trim(); // 余計な空白を除去

            // クリップボードAPIを使用したコピー処理
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).then(function() {
                    showCopySuccess(msgEl, triggerBtn);
                }).catch(function() {
                    fallbackCopy(code, msgEl, triggerBtn);
                });
            } else {
                fallbackCopy(code, msgEl, triggerBtn);
            }
        };

        // コピー成功時の表示処理
        function showCopySuccess(msgEl, btnEl) {
            if (msgEl) {
                msgEl.textContent = 'コピーしました！';
                msgEl.style.display = 'block';
                msgEl.style.color = '#10b981'; // 成功色（緑など）
                
                // 3秒後にメッセージを消す
                setTimeout(function() {
                    msgEl.style.display = 'none';
                }, 3000);
            }
            
            // オプション: ボタン内のアイコンをチェックマークに変えるなどの演出も可能
            // resetIcon(btnEl); 
        }

        // クリップボードAPIが使えない場合のフォールバック処理
        function fallbackCopy(text, msgEl, btnEl) {
            try {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                
                // 画面外に配置せず、見えないように配置（iOS対策）
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                var successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (successful) {
                    showCopySuccess(msgEl, btnEl);
                } else {
                    if(msgEl) {
                        msgEl.textContent = 'コピーに失敗しました';
                        msgEl.style.display = 'block';
                        msgEl.style.color = '#ef4444';
                    }
                }
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
        }
    }

    // 初期化実行（DOM読み込み後などに実行してください）
    // document.addEventListener('DOMContentLoaded', initCouponCopy);
    // またはそのまま実行
    initCouponCopy();

    function fallbackCopy(text, msgEl) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            showCopySuccess(msgEl);
        } catch (err) {
            console.error('Copy failed:', err);
        }

        document.body.removeChild(textarea);
    }

    function showCopySuccess(msgEl) {
        if (!msgEl) return;

        msgEl.textContent = '✓ コピーしました！';
        msgEl.setAttribute('aria-live', 'polite');

        setTimeout(function() {
            msgEl.textContent = '';
        }, 2500);
    }

    /**
     * スムーススクロール
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var href = this.getAttribute('href');

                if (href === '#') return;

                var target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    var headerHeight = document.querySelector('.l-header');
                    var offset = headerHeight ? headerHeight.offsetHeight + 20 : 20;
                    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    target.setAttribute('tabindex', '-1');
                    target.focus({ preventScroll: true });
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('js-hamburger');
        const nav = document.getElementById('js-nav');
        const overlay = document.getElementById('js-overlay');

        if (!hamburger || !nav || !overlay) return;

        // メニュー開閉の関数
        function toggleMenu() {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            
            // 背景スクロールの禁止/解除
            document.body.style.overflow = !expanded ? 'hidden' : '';
        }

        // ボタンクリックイベント
        hamburger.addEventListener('click', toggleMenu);

        // オーバーレイ（背景）をクリックで閉じる
        overlay.addEventListener('click', toggleMenu);

        // エスケープキーでも閉じれるように（アクセシビリティ向上）
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('is-active')) {
                toggleMenu();
            }
        });
    });

    /**
     * 外部リンク処理
     */
    function initExternalLinks() {
        var currentHost = window.location.hostname;

        document.querySelectorAll('a[href^="http"]').forEach(function(link) {
            var href = link.getAttribute('href');

            try {
                var url = new URL(href);

                if (url.hostname !== currentHost) {
                    if (!link.hasAttribute('target')) {
                        link.setAttribute('target', '_blank');
                    }

                    var rel = link.getAttribute('rel') || '';
                    if (!rel.includes('noopener')) {
                        link.setAttribute('rel', (rel + ' noopener').trim());
                    }
                }
            } catch (e) {
                // Invalid URL
            }
        });
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        var ps = document.querySelectorAll('p');
        ps.forEach(function(p) {
            // 中身が空、または&nbsp;だけのpタグを削除
            if (p.innerHTML.trim() === '' || p.innerHTML === '&nbsp;') {
                p.style.display = 'none';
            }
        });
    });

    class ImageComparisonSlider {
        constructor(container) {
            this.container = container;
            this.handle = container.querySelector('.slider-handle');
            this.beforeImage = container.querySelector('.image-before');
            this.isDragging = false;
            
            this.init();
        }
        
        init() {
            // マウスイベント
            this.container.addEventListener('mousedown', (e) => this.startDrag(e));
            this.container.addEventListener('mousemove', (e) => this.drag(e));
            this.container.addEventListener('mouseleave', () => this.stopDrag());
            document.addEventListener('mouseup', () => this.stopDrag());
            
            // タッチイベント
            this.container.addEventListener('touchstart', (e) => this.startDrag(e));
            this.container.addEventListener('touchmove', (e) => this.drag(e));
            this.container.addEventListener('touchend', () => this.stopDrag());
            
            // クリック位置への移動
            this.container.addEventListener('click', (e) => this.updatePosition(e));
        }
        
        startDrag(e) {
            e.preventDefault();
            this.isDragging = true;
        }
        
        stopDrag() {
            this.isDragging = false;
        }
        
        drag(e) {
            if (!this.isDragging) return;
            this.updatePosition(e);
        }
        
        updatePosition(e) {
            const rect = this.container.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            
            let x = clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            
            const percentage = (x / rect.width) * 100;
            
            this.handle.style.left = `${percentage}%`;
            this.beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
    }

    // すべてのスライダーを初期化
    document.addEventListener('DOMContentLoaded', () => {
        const containers = document.querySelectorAll('.comparison-container');
        containers.forEach(container => {
            new ImageComparisonSlider(container);
        });
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        // ページ内のすべてのタブボタンを取得
        const tabButtons = document.querySelectorAll('.m-tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. クリックされたボタンが属する「親のタブコンテナ」を特定する
                // これにより、他のタブセットに影響を与えないようにスコープを限定する
                const tabContainer = button.closest('.m-tabs');
                
                // 安全策：親コンテナが見つからない場合は処理を中断
                if (!tabContainer) return;

                const targetTab = button.getAttribute('data-tab');

                // 2. 同じコンテナ内にあるボタンだけを対象に処理
                tabContainer.querySelectorAll('.m-tab-btn').forEach(btn => {
                    btn.classList.remove('is-active');
                });

                // 3. 同じコンテナ内にあるコンテンツだけを対象に処理
                tabContainer.querySelectorAll('.m-tab-content').forEach(content => {
                    content.classList.remove('is-active');
                });

                // 4. クリックされたボタンに is-active を付与
                button.classList.add('is-active');

                // 5. 同じコンテナ内の対応するコンテンツに is-active を付与
                const targetContent = tabContainer.querySelector(`.m-tab-content[data-content="${targetTab}"]`);
                if (targetContent) {
                    targetContent.classList.add('is-active');
                }
            });
        });
    });
    

})();
