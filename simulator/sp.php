<div class="container">
    <div id="js-tool-header">
        <div class="header">
            <h1 class="header-title">日の出・日の入り方角ナビ</h1>
            <div class="btn-wrap">
              <p class="header-btn" id="js-modal-target"><i class="fas fa-search" aria-hidden="true"></i></p>
            </div>            
        </div>
        <div class="hour">
            <h2 class="hour-title">日の出時刻</h2>
            <p id="js-sunriseTime" class="hour-time"></p>
            <h2 class="hour-title">日の入り時刻</h2>
            <p id="js-sunsetTime" class="hour-time"></p>
        </div>
    </div>
    <div id="map" class="map"></div>
    <div id="js-footer" class="footer">
        <div class="footer-body">
          <p id="js-modal-button" class="footer-body-button">スポット検索（マーカーの位置変更）<i class="fas fa-search" aria-hidden="true"></i></p>
            <div class="footer-calender">
                <div class="datepicker-container">
                    <button class="datepicker-btn" id="prevDay"><i class="fas fa-angle-left"></i> 前日</button>
                    <div><input type="text" readonly=”readonly” id="datepicker"><div class="datepicker-buttons"></div></div>
                    <button class="datepicker-btn" id="nextDay">翌日 <i class="fas fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="modal" class="modal">

    <div class="modal-container">

        <div class="locationInput-warpper l-bottom-xlarge">
            <h2 class="modal-title l-bottom-medium">気になるスポットを検索</h2>
            <div class="locationInput l-bottom-large">
                <label for="locationInput"></label>
                <input type="text" id="locationInput" class="searchBox" placeholder="施設名・住所・郵便番号などを入力">
                <button class="searchBox-button" onclick="getCoordinates()">移動</button>
            </div>

            <ul class="modal-list l-bottom-large">
              <li>任意の場所の日の出と日の入りの時刻や方角をチェックできるツールです</li>
              <li>スポット検索は住所、郵便番号、施設名に対応しています</li>
              <li>時差など考慮していないので日本国内向けのツールとしてお使い下さい</li>
              <li>マーカーと方位線はタップして自由に動かすことができます</li>
            </ul>


            
        </div>

        <h2 class="modal-title l-bottom-medium">日の出・日の入りの豆知識</h2>

        <div class="definition l-bottom-xlarge">
          <dl class="definition-body">
            <dt>夏至（6/21）</dt>
            <dd>1年でもっとも日が出ている時間が長い日。北東から朝日が昇り、北西に夕日が沈んでいく。</dd>
            <dt>冬至（12/22）</dt>
            <dd>1年でもっとも日が出ている時間が短い日。南東から朝日が昇り、南西に夕日が沈んでいく。</dd>
            <dt>春分（3/20）・秋分（9/22）</dt>
            <dd>昼と夜の時間がほぼ同じになる日。真東から朝日が上り、真西に夕日が沈んでいく。</dd>
            <dt>日の出・日の入り時刻の地域差</dt>
            <dd>同じ日でも東に行くほど日の出・日の入りが早くなります。（経度で1度東に進むごとに、4分ずつ日の出・日の入りが早くなる）</dd>
          </dl>
        </div>

        <div class="faq-section l-bottom-large">
          <h2 class="modal-title l-bottom-medium">よくある質問</h2>
          <div class="faq-box">

            <div class="faq-item">
              <div class="faq-label q">Q</div>
              <div class="faq-content">
                <p class="faq-question">現在地で日の出・日の入り時刻を見るには？</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-label a">A</div>
              <div class="faq-content">
                <p class="faq-answer">位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での方角と時刻が表示されます。</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-label q">Q</div>
              <div class="faq-content">
                <p class="faq-question">海外の国の日没・日の出時刻も調べることはできますか？</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-label a">A</div>
              <div class="faq-content">
                <p class="faq-answer">方角計算自体は可能ですが、時差やサマータイムには対応していないため、正確な時刻は日本国内での利用を推奨しています。</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-label q">Q</div>
              <div class="faq-content">
                <p class="faq-question">マーカーの動かし方・操作方法がわかりません</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-label a">A</div>
              <div class="faq-content">
                <p class="faq-answer">マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、日の出・日の入りの情報が更新されます。</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-label q">Q</div>
              <div class="faq-content">
                <p class="faq-question">地図上に表示されている方位線の意味は何？</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-label a">A</div>
              <div class="faq-content">
                <p class="faq-answer">朝日が昇る方角（日の出）と夕日が沈む方角（日の入り）を示しています。季節によって角度が変わります。</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-label q">Q</div>
              <div class="faq-content">
                <p class="faq-question">なぜマーカーの場所によって表示される時刻が違うの？</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-label a">A</div>
              <div class="faq-content">
                <p class="faq-answer">日本は東西に長いため、東に行くほど日の出・日の入りが早くなります。経度1度で約4分の差が出るため、同じ日でも地域差が生まれます。</p>
              </div>
            </div>
          </div>
        </div>


        <h2 class="modal-title l-bottom-medium">おすすめの情報サイト</h2>

        <div class="definition l-bottom-xlarge">
          <dl class="definition-body">

            <dt><a href="https://eco.mtk.nao.ac.jp/koyomi/" target="_blank" rel="noopener noreferrer">国立天文台 暦計算室</a></dt>
            <dd>日の出・日の入り、薄明時刻、月の出入りなどを高精度に計算。地点と日付を指定して秒単位の時刻を取得可能。</dd>

            <dt><a href="https://www.jma.go.jp/" target="_blank" rel="noopener noreferrer">気象庁</a></dt>
            <dd>天気予報・注意報と併せて地域ごとの天文情報を提供。雲量や視程と組み合わせて撮影可否の判断に有用です。</dd>
            
            <dt><a href="https://vldb.gsi.go.jp/sokuchi/surveycalc/" target="_blank" rel="noopener noreferrer">国土地理院（測地成果閲覧サービス）</a></dt>
            <dd>緯度・経度・標高に基づく計算に対応。地形の影響を考慮した太陽出没時刻の把握に適する。</dd>

            <dt><a href="https://www1.kaiho.mlit.go.jp/KAN1/" target="_blank" rel="noopener noreferrer">海上保安庁 海洋情報部（潮汐・天文）</a></dt>
            <dd>潮汐表や航海用天文暦に基づく出没時刻を提供。港湾・沿岸エリアの観測点データが充実。</dd>

            <dt><a href="https://www.mlit.go.jp/kowan/" target="_blank" rel="noopener noreferrer">国土交通省 港湾局（港湾カレンダー）</a></dt>
            <dd>主要港湾の公式情報。港湾ごとのページで潮汐や関連カレンダーを参照可能。</dd>

            <dt><a href="https://www.data.jma.go.jp/ovd/astronomy/calendar/" target="_blank" rel="noopener noreferrer">気象庁 天文現象カレンダー</a></dt>
            <dd>年間の主な天文現象を一覧化。主要地点の日の出・日の入り確認やイベント日程の把握に便利。</dd>

            <dt><a href="https://supercweather.com/" target="_blank" rel="noopener noreferrer">SCW（天気予報 / 観測情報）</a></dt>
            <dd>スーパーコンピュータによる高解像度予報。雲量・降水・風向などを時間単位で詳細確認可能。</dd>

            <dt><a href="https://tenki.jp/" target="_blank" rel="noopener noreferrer">日本気象協会 tenki.jp</a></dt>
            <dd>NTT-ME運営の気象情報サイト。注意報・警報や花粉情報も含む総合天気情報を提供。</dd>

            <dt><a href="https://www.umitenki.jp/" target="_blank" rel="noopener noreferrer">海天気.jp</a></dt>
            <dd>海上や沿岸部の天気・風向・風速・波浪・潮汐に特化。海沿い撮影のコンディション確認に有効。</dd>

            <dt><a href="https://tenkura.n-kishou.co.jp/" target="_blank" rel="noopener noreferrer">てんきとくらす</a></dt>
            <dd>山・高原・キャンプ場などアウトドア向けの天気予報を提供。登山や高地からの朝夕景撮影に最適。</dd>

            <dt><a href="https://live-fuji.jp/" target="_blank" rel="noopener noreferrer">富士山ライブカメラ</a></dt>
            <dd>複数地点からのリアルタイム映像で富士山周辺の天候を確認可能。雲の動きや視程チェックに便利。</dd>

          </dl>
        </div>

        <div class="share_area l-bottom-large">
            <p class="share_title">\気に入ったらシェア/</p>
            <ul class="sns-share-links">
                <li>
                    <a href="https://twitter.com/intent/tweet?text=日の出・日の入りの方角方位線シミュレーター&url=https://nightscape.tokyo/simulator" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://nightscape.tokyo/simulator" target="_blank" rel="noopener noreferrer">
                      <i class="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="http://b.hatena.ne.jp/add?url=https://nightscape.tokyo/simulator" target="_blank" rel="noopener noreferrer">
                       <i class="fa fa-hatena"></i>
                    </a>
                </li>
                <li>
                    <a href="http://line.me/R/msg/text/?https://nightscape.tokyo/simulator" target="_blank" rel="nofollow"><i class="fab fa-line"></i></a>
                </li>
            </ul>
        </div>
    </div>

    <p class="modal-footer">
        <a class="modal-footer-link" href="/">東京夜景ナビ（サイトトップ）<i class="fas fa-angle-right"></i></a>
    </p>
</div>

<script type="text/javascript">
    document.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'INPUT') {
    e.target.style.fontSize = '16px';
  }
});
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "現在地で日の出・日の入り時刻を見るには？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "位置情報の取得を許可することで、現在地にマーカーが移動し、その地点での方角と時刻が表示されます。"
      }
    },
    {
      "@type": "Question",
      "name": "海外でも使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "方角計算自体は可能ですが、時差やサマータイムには対応していないため、正確な時刻は日本国内での利用を推奨しています。"
      }
    },
    {
      "@type": "Question",
      "name": "マーカーの動かし方がわかりません",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "マーカーは地図上をタップするか、ドラッグ操作で自由に移動できます。任意の地点に合わせて、日の出・日の入りの情報が更新されます。"
      }
    },
    {
      "@type": "Question",
      "name": "地図上の方位線の意味は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "赤い線は朝日が昇る方角（日の出）、オレンジの線は夕日が沈む方角（日の入り）を示しています。季節によって角度が変わります。"
      }
    },
    {
      "@type": "Question",
      "name": "なぜ場所によって時刻が違うの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "日本は東西に長いため、東に行くほど日の出・日の入りが早くなります。経度1度で約4分の差が出るため、同じ日でも地域差が生まれます。"
      }
    }
  ]
}
</script>

<script type="text/javascript">
  
  const modalButton = document.getElementById('js-modal-button');
  const modalTarget = document.getElementById('js-modal-target');
  
    modalButton.addEventListener('click', function () {
      modalTarget.click();
    });
  

</script>