<div class="tool-container">

    <div class="tool-left">

        <div class="tool-header">
            <p class="tool-header-title">日の出・日の入り方角ナビ</p>
        </div>

        <div class="tool-left-body">
            <h1 class="tool-lead l-bottom-medium">日の出・日の入りの方角や時刻をマップ上で確認できるwebアプリ</h1>
            <div class="l-bottom-medium locationInput-container">
                <label for="locationInput"></label>
                <input type="text" id="locationInput" class="searchBox" placeholder="施設名・住所・郵便番号などを入力">
                <button class="searchBox-button" onclick="getCoordinates()">移動</button>
            </div>

            <div id="datepicker" class="l-bottom-medium"></div>

            <div class="hour l-bottom-large">
                <table class="hour-table" summary="夕日が沈む時間とマジックアワーの時間帯の目安">
                    <thead>
                        <tr>
                            <th><h2><span class="hour-table-header">日の出時刻</span></h2></th>
                            <th><h2><span class="hour-table-header">日の入り時刻</span></h2></th>
                        </tr>
                    </thead>
                    <tbody class="hour-table-body">
                        <tr>
                            <td id="js-sunriseTime"></td>
                            <td id="js-sunsetTime"></td>
                        </tr>
                    </tbody>
                </table>
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
                  <li><a href="http://line.me/R/msg/text/?https://nightscape.tokyo/simulator" target="_blank" rel="nofollow"><i class="fab fa-line"></i></a></li>
                </ul>
            </div>
            <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1569785771112521"
             crossorigin="anonymous"></script>
                <!-- 日の出・日の入りマップ -->
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:300px"
                     data-ad-client="ca-pub-1569785771112521"
                     data-ad-slot="8832822260"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
    </div>

    <div class="tool-right">
        <div id="map" style="height: 100%; width: 100%;"></div>
    </div>

    <ul class="tool-menu">
        <li><a href="https://nightscape.tokyo/">サイトTOP</a></li>
        <li><a href="#inline_1" class="modal-btn btn">使い方</a></li>
        <li><a href="#inline_2" class="modal-btn btn">豆知識</a></li>
        <li><a href="#inline_3" class="modal-btn btn">お役立ちリンク</a></li>
    </ul>

    <div class="modal" id="inline_1">
        <h2 class="modal-title"><i class="fas fa-map-marker-alt"></i> 日の出・日の入りナビの使い方</h2>
        <ul class="howto">
            <li>夕日と朝日の時刻や方角をチェックできるシミュレーションツールです。</li>
            <li>スポット検索は住所、郵便番号、施設名に対応しています。 </li>
            <li>時差など考慮していないので日本国内向けのツールとしてお使いください。</li>
            <li>マーカーと方位線はクリックやドラック&ドロップによって自由に動かすことができます。</li>
        </ul>
    </div>
    
    <div class="modal" id="inline_2">
        
        <h2 class="modal-title"><i class="fas fa-map-marker-alt"></i> 日の出・日の入りに関する豆知識</h2>

        <dl class="definition">
            <dt>夏至（6月21日）</dt>
            <dd>1年でもっとも日が出ている時間が長い日。北東から朝日が昇り、北西に夕日が沈んでいく。</dd>
            <dt>冬至（12月22日）</dt>
            <dd>1年でもっとも日が出ている時間が短い日。南東から朝日が昇り、南西に夕日が沈んでいく。</dd>
            <dt>春分（3月20日）/ 秋分（9月22日）</dt>
            <dd>昼と夜の時間がほぼ同じになる日。真東から朝日が上り、真西に夕日が沈んでいく。</dd>
            <dt>日の出・日の入り時刻の地域差</dt>
            <dd>同じ日でも東に行くほど日の出・日の入りが早くなります。（経度で1度東に進むごとに、4分ずつ日の出・日の入りが早くなる）</dd>
        </dl>
    </div>

        <div class="modal" id="inline_3">
        
        <h2 class="modal-title"><i class="fas fa-map-marker-alt"></i> お役立ちリンク集</h2>
        <p class="l-bottom-medium">気象状況を把握するのに便利なwebサイトをご紹介します。</p>

        <div class="definition">
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

    </div>

</div>