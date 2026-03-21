-- Post: 荒川河川敷 木根川橋野球場 (arakawa-river-side)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'arakawa-river-side',
  '荒川河川敷 木根川橋野球場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'katsushika'),
  NULL,
  '荒川河川敷 木根川橋野球場',
  '夕暮れ時に東京スカイツリーや鉄橋の美しいシルエットを眺めることができる雰囲気の無料スポット。ドライブデートなどで訪れるのがおすすめです。',
  '<p>京成押上線「四ツ木駅」から徒歩9分程の場所にある荒川河川敷（木根川橋野球場）付近。</p>
<p>日没から夜にかけて黄昏時のとても美しい景観を眺めることができるスポットです。</p>
<p>荒川越しに見える東京スカイツリーや木根川橋が見どころ。</p>
<p>週末でも人の数は少なく、落ち着いて夜景鑑賞をすることができます。</p>
<p>日が完全に沈むとかなり周りが暗く足元が見えないので、帰り道はスマホのライトを懐中電灯代わりにするなどして歩きましょう。</p>',
  '東京都葛飾区東四つ木3丁目',
  'https://www.spo-katsushika.esforta.jp/info_shisetsu_009_c.html',
  '荒川河川敷 四つ木橋・木根川橋 - 葛飾区体育施設',
  NULL,
  NULL,
  'https://www.tokyo-skytree.jp/enjoy/lighting/',
  '東京スカイツリー 本日のライティング',
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>京成押上線「四ツ木駅」から徒歩約9分</li>
</ul>',
  '<ul>
<li>木根川橋駐車場</li>
<li>土・日・祝のみ営業 / 1回500円</li>
<li>※営業時間が短いため、夜景目的で訪れるなら近隣駐車場の利用がおすすめ</li>
</ul>',
  '<iframe title="荒川河川敷 木根川橋野球場の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477.706235829134!2d139.829331476153!3d35.72983072073183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f40a2b1e007%3A0x647f5365a080f2a7!2z5pyo5qC55bed5qmL6YeO55CD5aC0!5e0!3m2!1sja!2sjp!4v1673220008319!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3,
  3,
  5,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-07.jpg',
  true,
  '2023-01-09T08:35:27+09:00',
  '2023-01-09T08:35:27+09:00',
  '2024-05-12T23:17:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for arakawa-river-side
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-07.jpg', 'ライトアップされた東京スカイツリーと木根川橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-01.jpg', '夕暮れ時の空とスカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-04.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-09.jpg', '幻想的なリフレクションが映る荒川河川敷', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-05.jpg', '夕暮れ時の空と木根川橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-08.jpg', 'ライトアップされる東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-03.jpg', '荒川河川敷（木根川橋野球場）の雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-02.jpg', '荒川河川敷（木根川橋野球場）の雰囲気', 7);

-- FAQs for arakawa-river-side
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), '最寄り駅はどこですか？', '京成押上線「四ツ木駅」になります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), 'どんな景色が楽しめますか？', '西の方角にライトアップされた東京スカイツリーを眺めることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arakawa-river-side'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: スカイツリー自転車駐車場屋上広場 (skytree-bicycle-parking)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'skytree-bicycle-parking',
  'スカイツリー自転車駐車場屋上広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'スカイツリー自転車駐車場屋上広場',
  '大迫力の東京スカイツリーを満喫できる無料の穴場夜景スポット',
  '<p>スカイツリータウンの東側のロータリー、地下鉄押上駅に隣接位置にある押上駅前自転車駐車場。</p>
<p>この場所の屋上スペースには無料開放されている展望広場があり、東京スカイツリーを間近で眺めることができます。</p>
<p>また、スカイツリーと反対側には京成押上線、東武スカイツリーラインのトレインビューが広がります。</p>
<p>非常に良い眺めを楽しめる場所ですが、展望広場があることはあまり知られておらず、週末でも訪れる人は少なめ。</p>
<p>ウッドデッキと適度なフットライトの演出で落ち着いた雰囲気があるので、デートコースにもおすすめです。</p>',
  '東京都墨田区押上1-8 押上駅前自転車駐車場',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.tokyo-skytree.jp/enjoy/lighting/',
  '東京スカイツリー 本日のライティング',
  '9:00 ~ 20:00',
  'なし',
  '無料',
  '<ul>
<li>都営浅草線「押上駅」から徒歩約3分</li>
<li>東武伊勢崎線「とうきょうスカイツリー駅」 徒歩約4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="スカイツリー自転車駐車場屋上広場の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6068749494543!2d139.81402290000003!3d35.7112906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f29d93c707f%3A0xdd67db13885fa1d1!2z44CSMTMxLTAwNDUg5p2x5Lqs6YO95aKo55Sw5Yy65oq85LiK77yR5LiB55uu77yYIOaKvOS4iumnheWJjeiHqui7oui7iumnkOi7iuWgtA!5e0!3m2!1sja!2sjp!4v1673219638771!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  4,
  4,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-parking-02.jpg-10-36-14-167.jpg',
  true,
  '2023-01-09T08:14:45+09:00',
  '2023-01-09T08:14:45+09:00',
  '2023-12-31T13:46:18+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for skytree-bicycle-parking
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-parking-02.jpg-10-36-14-167.jpg', 'スカイツリー自転車駐車場屋上広場の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-parking-02.jpg', 'スカイツリー自転車駐車場屋上広場の雰囲気スカイツリー自転車駐車場屋上広場の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-parking-01-1.jpg', 'スカイツリー自転車駐車場屋上広場の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-parking-04.jpg', 'スカイツリー自転車駐車場屋上広場の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-bicycle-parking-05-1.jpg', 'スカイツリー自転車駐車場屋上広場から撮影した夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-2.jpg', 'スカイツリー自転車駐車場屋上広場をスカイツリーイーストタワーから眺めた様子', 5);

-- FAQs for skytree-bicycle-parking
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), 'どんな景色を眺めることができますか？', '西の方角に東京スカイツリーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), '最寄り駅はどこですか？', '都営浅草線「押上駅」になります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'skytree-bicycle-parking'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 西十間橋 (nishi-jikken-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'nishi-jikken-bridge',
  '西十間橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  '<!-- wp:gallery {"linkTo":"none"} -->
<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><!-- wp:image {"id":51,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-04-1024x683.jpg" alt="" class="wp-image-51"/></figure>
<!-- /wp:image --></figure>
<!-- /wp:gallery -->',
  '西十間橋',
  '「逆さスカイツリー」を眺めることができる、SNSでも人気の有名夜景スポット',
  '<p>東京スカイツリーの幻想的な水鏡（逆さスカイツリー）が拝めるとして夜景ファンの間で人気のスポット。</p>
<p>風が穏やかで川の水面が揺れないときに訪れるのがおすすめです。</p>
<p>東京スカイツリー周辺で観光をした帰りなどにぜひ立ち寄ってみましょう。</p>
<p>ちなみにリフレクションを記念写真として撮るには、超広角レンズを搭載したスマホなどが必須です。</p>',
  '東京都墨田区業平 5-12-16',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.tokyo-skytree.jp/enjoy/lighting/',
  '東京スカイツリー 本日のライティング',
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>武伊勢崎線「押上」徒歩7分</li>
<li>都営浅草線「押上駅」徒歩7分</li>
<li>東京メトロ半蔵門線「押上駅」徒歩7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="西十間橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.708232382421!2d139.81389601525953!3d35.70879688018791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2a53d9bc8b%3A0x4990b7704b20ca5b!2z5p2x5Lqs6YO95aKo55Sw5Yy6IOilv-WNgemWk-apiw!5e0!3m2!1sja!2sjp!4v1673217398828!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  4,
  2,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-01.jpg',
  true,
  '2023-01-09T07:45:47+09:00',
  '2023-01-09T07:45:47+09:00',
  '2023-12-31T13:46:55+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for nishi-jikken-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-01.jpg', '西十間橋から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-02.jpg', 'リフレクションが美しい西十間橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-03.jpg', 'リフレクションが美しい西十間橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-04.jpg', '西十間橋から眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/west-jikken-bridge-05.jpg', '西十間橋の雰囲気', 4);

-- FAQs for nishi-jikken-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), '西十間橋からはどんな景色が見れますか？', '西の方角に「逆さスカイツリー」を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), '東京スカイツリーは何時までライトアップされていますか？', '日没から24時までライトアップされています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nishi-jikken-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 丸ビル 5階展望デッキ (marubiru-f5)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'marubiru-f5',
  '丸ビル 5階展望デッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '丸の内ビルディング 5階展望フロア',
  '全長335mの東京駅を俯瞰して眺めることができる無料夜景スポット。テラスの開放時間が20時までとやや早目なので訪れたい方は注意。',
  '<p>2002年に再建された36階建ての複合施設・丸の内ビルディング（丸ビル）。</p>
<p>5階にある展望スペースからは全長約335メートルの東京駅やKITTE丸の内などを眺めることができます。</p>
<p>小さな<a href="/article/observatory/">展望スペース</a>ではありますが、落ち着いた雰囲気で美しい景観を楽しめる夜景スポットです。</p>
<p>デートやショッピングの途中に気軽に立ち寄ってみるのもおすすめ。</p>
<p>三脚の利用は禁止となっているため注意しましょう。</p>
<p>ちなみに同ビルには35階に<a href="http://nightscape.tokyo/chiyoda/marubiru-f35/">霞が関方面の景観を楽しめる展望スペース</a>があったり、3Fの丸の内シェアラウンジからも美しい景色を楽しむことができます。</p>
<p>ぜひ東京駅周辺に来た際に立ち寄ってみてはいかがでしょうか？</p>',
  '東京都千代田区丸の内 2-4-1',
  'https://www.marunouchi.com/building/marubiru/',
  '丸ビルのフロアガイド | 店舗情報や営業日・営業時間、交通案内など | 丸の内ドットコム',
  'https://tsutaya.tsite.jp/store/lounge/detail/2046/',
  'TSUTAYA BOOKSTORE MARUNOUCHI',
  NULL,
  NULL,
  '11：00～20：00 <br>※テラスは、雨天時・強風時・その他ビルの都合により閉鎖する場合あり',
  'なし',
  '無料',
  '<ul>
<li>東京駅から約2分</li>
<li>二重橋前駅から約4分</li>
<li>大手町駅から約5分</li>
</ul>',
  '-',
  '<iframe title="丸ビル 5階展望デッキの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8454912204847!2d139.76315028299555!3d35.680806284228005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf9eb1415c5%3A0xc7c5c5e2bb998696!2z5Li444Gu5YaF44OT44OrMzXpmo7lsZXmnJvlj7A!5e0!3m2!1sja!2sjp!4v1673194184451!5m2!1sja!2sjp" width="100%o9" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/F1v0MWkxhY8?si=pv_2vVeDvwbrfmAa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.5,
  5,
  4,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-01.jpg',
  true,
  '2023-01-09T01:49:56+09:00',
  '2023-01-09T01:49:56+09:00',
  '2024-09-01T16:47:03+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for marubiru-f5
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-01.jpg', '丸の内ビルディング5階展望フロアから眺める東京駅', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-1-1.jpg', '赤煉瓦駅舎の南口', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-03.jpg', '丸の内ビルディング5階展望フロアの様子', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-3.jpg', '東京駅前広場を行き交う人々', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-02.jpg', '丸の内ビルディング5階展望フロアから眺める東京駅', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-04.jpg', '丸の内ビルディング5階展望フロアの雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-sunset-02.jpg', '夕日に染まる東京駅', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-building-f5-sunset-01.jpg', '夕日に染まる東京駅', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/maru-building-entrance.jpg', '丸ビル5階展望フロアのエントランス', 8);

-- FAQs for marubiru-f5
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), '夜景スポットの雰囲気はデート向けですか？', '雰囲気が良い場所なので、デートにもおすすめです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), '東京駅のライトアップは何時までやってる？', '日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f5'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 丸ビル 35階 展望台 (marubiru-f35)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'marubiru-f35',
  '丸ビル 35階 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '丸ビル 35階 展望台',
  'レストランフロアの一角にある落ち着いた雰囲気の無料夜景スポット。ライトアップされた国会議事堂と富士山の共演や霞ヶ関方面のビル夜景がみどころ。',
  '<p>2002年に再建された36階建ての複合施設・丸の内ビルディング。</p>
<p>高層階用の専用エレベーターで35階のレストラン街へ上がると、そこには大きな窓ガラスが印象的な無料の展望スペースがあります。レストランを利用しなくても気軽に立ち寄れるのが嬉しいポイントです。</p>
<p>ライトアップされた永田町の国会議事堂や皇居外苑、所狭しと立ち並ぶ霞ヶ関や虎ノ門方面の高層ビル群の灯り。</p>
<p>さらには空気が澄んでいれば富士山の姿も拝めるなど、見どころ満載の穴場夜景スポットです。</p>
<p>無料で入場できる夜景スポットとしては非常に高いレベルの景色を楽しむことができます。窓際には椅子も設置されているので、座ってゆっくりと夜景を眺めることもできます。</p>
<p>東京らしい景色が広がる素晴らしい場所なので、東京駅周辺に用事があった帰り道などに訪れてみてはいかがでしょうか。</p>
<p>ちなみに同ビルには5階にも<a href="/chiyoda/marubiru-f5/">東京駅を眺めることができる展望フロア</a>があるので、セットで訪れるのがおすすめです。</p>',
  '東京都千代田区丸の内2-4-1',
  'https://www.marunouchi.com/building/marubiru/',
  NULL,
  NULL,
  NULL,
  'https://www.marunouchi.com/building/marubiru/',
  '丸ビルのフロアマップ | 店舗情報や営業日・営業時間、交通案内など | 丸の内ドットコム',
  '平日・土曜日23時まで / 日祝日22時まで<br>※連休の場合は最終日のみ日祝日の営業時間となります',
  'なし',
  '無料',
  '<ul>
<li>東京駅から約2分</li>
<li>二重橋前駅から約4分</li>
<li>大手町駅から約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="丸ビルの展望スペースの位置を表したマップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8454912204847!2d139.76315028299555!3d35.680806284228005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf9eb1415c5%3A0xc7c5c5e2bb998696!2z5Li444Gu5YaF44OT44OrMzXpmo7lsZXmnJvlj7A!5e0!3m2!1sja!2sjp!4v1673194184451!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/U8xj7HCu-wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.5,
  4.8,
  3.5,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-03.jpg',
  true,
  '2023-01-12T19:04:11+09:00',
  '2023-01-12T19:04:11+09:00',
  '2026-01-27T09:00:17+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for marubiru-f35
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-03.jpg', '丸ビル35階展望フロアから撮影した霞が関方面の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-04.jpg', 'ライトアップされた国会議事堂と富士山', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-02.jpg', '霞が関方面の高層ビル群の景色', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-01.jpg', '丸ビル35階展望フロアから撮影した霞が関方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-detail-01.jpg', '丸ビル35階展望フロアから撮影した東京タワー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-detail-02.jpg', '丸ビル35階展望フロアから撮影したレインボーブリッジ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-05.jpg', '丸ビルから眺める丸の内のイルミネーション', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35s-floor-03.jpg', '丸ビル35階展望フロアの雰囲気（夜）', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-floor-02.jpg', '丸ビル35階展望フロアの雰囲気（昼）', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-builuding-35-floor-01.jpg', '丸ビル 35・36階専用エレベーター', 9);

-- FAQs for marubiru-f35
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), '丸ビルの展望スペースへの行き方・アクセス方法を教えてください。', '35・36階専用エレベーターからアクセスできます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), '丸ビル35階展望フロアからはどんな景色が楽しめますか？', '霞が関方面の高層ビル群や富士山、皇居などを眺めることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), '国会議事堂のライトアップは何時まで実施されていますか？', '日没〜20：00までライトアップは点灯しています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), '丸ビルの35F展望台は入場料金がかかりますか？', '丸ビルの35F展望台は無料で入場することが可能です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marubiru-f35'), '丸ビルの展望スペースの夜景鑑賞に最適な時期はいつですか？', '11月〜2月の間がおすすめです。空気が澄んで遠くまですっくり見渡せるのに加え、夕日がちょうど富士山の方向に落ちるので美しいマジックアワーを楽しめます。', 4);

-- Post: 若洲海浜公園 (wakasu-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'wakasu-park',
  '若洲海浜公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '若洲海浜公園',
  'ライトアップされた東京ゲートブリッジと富士山を眺められる穴場の無料夜景スポット。東京ゲートブリッジは夏季限定で遊歩道が開放される。',
  '<p>キャンプ場や多目的広場がある若洲海浜公園。</p>
<p>この場所からはライトアップされた大迫力の東京ゲートブリッジ（通称、恐竜橋）や富士山を眺めることができます。</p>
<p>園内はとても広くポイントによって異なる景色を楽しむことができます。</p>
<p>公園内にはベンチや東屋もあり、ゆったりと夜景を観賞できるので、デートにもおすすめです。</p>
<p>ちなみに期間限定ではありますが、夏季の金・土曜日は東京ゲートブリッジの歩道を歩くこともできます。</p>',
  '東京都江東区若洲 3-1-2',
  'https://www.tptc.co.jp/park/03_07',
  '若洲海浜公園 & 江東区立若洲公園 海上公園ナビ',
  'https://twitter.com/wakasupark?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  '若洲海浜公園 Twitterアカウント',
  'https://www.kouwan.metro.tokyo.lg.jp/kanko/gatebridge/gatebridgeQAx.html#lightup',
  '東京ゲートブリッジ Q&A',
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>JR京葉線、りんかい線 「新木場駅」下車後、都バスへ乗り換え</li>
<li><a href="https://www.navitime.co.jp/bus/diagram/timelist?departure=00017000&arrival=00018025&line=00004176">新木場駅前 ⇒ 若洲キャンプ場前 バス時刻表</a></li>
</ul>',
  '<ul>
<li>江東区立若洲公園駐車場(492台)</li>
<li>24時間・年中無休</li>
<li>普通車1回 500円、大型車 1回 2,000円</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8105.901369580582!2d139.82785341365823!3d35.61850744920699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601862e98734d09d%3A0x6321b0940deb4f99!2z6Iul5rSy5rW35rWc5YWs5ZySIOa1t-mHo-OCiuaWveiorQ!5e0!3m2!1sja!2sjp!4v1673221762370!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  3,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-01.jpg',
  true,
  '2023-01-09T08:58:11+09:00',
  '2023-01-09T08:58:11+09:00',
  '2024-09-06T17:21:18+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'gate-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for wakasu-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-01.jpg', '若洲海浜公園から撮影した夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-08.jpg', '東京ゲートブリッジと富士山の共演', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-03.jpg', '東京ゲートブリッジを撮影するカメラマンの姿', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-02.jpg', 'ライトアップされた東京ゲートブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-1-2.jpg', 'ライトアップされる恐竜橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-09.jpg', '夕暮れ時の若洲海浜公園', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-07.jpg', '若洲海浜公園から眺める富士山', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-04.jpg', '夕日が沈む直前の若洲海浜公園', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-05.jpg', '若洲海浜公園にある灯台', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakasu-park-1.jpg', 'ゲートブリッジを歩いて渡る際に利用する若洲昇降タワー', 9);

-- FAQs for wakasu-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), '公共交通機関でアクセスすることはできますか？', '電車とバスを乗り継いでアクセスすることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), '東京ゲートブリッジのライトアップは何時まで見られますか？', 'ライトアップの時間は日没～午前0：00までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wakasu-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: カレッタ汐留 展望台 SKY VIEW (caretta-shiodome-sky-view)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'caretta-shiodome-sky-view',
  'カレッタ汐留 展望台 SKY VIEW',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'カレッタ汐留・SKY VIEW',
  'カレッタ汐留46Fのレストラン街ある無料の展望台。ベイエリアの眺望が美しく、レインボーブリッジ、築地大橋、勝鬨橋などのランドマークや晴海エリアのビル夜景を眺めることができる。',
  '<p>2002年末にオープンしたカレッタ汐留。</p>
<p>46、47Fのレストランフロアには小さいながらも夜景鑑賞ができる<a href="/article/observatory/">無料の展望スペース</a>があり、ベイエリアの景色を見渡すことができます。</p>
<p>お台場方面はレインボーブリッジやフジテレビ、月島方面には高層ビル群や築地大橋、勝鬨橋などが見えます。</p>
<p>展望スペースはそこまで大きくありませんが、土日でも夜景を見に訪れる方は少ないので、落ち着いて景色を眺めることが可能。</p>
<p>デートで訪れるのにもおすすめの夜景スポットです。</p>',
  '東京都港区東新橋1-8-1',
  'https://www.caretta.jp/',
  'カレッタ汐留公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00 ~ 23:00',
  'なし',
  '無料',
  '<ul>
<li>地下鉄都営大江戸線「汐留駅」下車　徒歩1分</li>
<li>東京メトロ浅草線「新橋駅」下車　徒歩3分</li>
<li>東京メトロ銀座線「新橋駅」下車　徒歩5分</li>
<li>JR「新橋駅」下車　徒歩4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5093087300243!2d139.7603336152584!3d35.664459380198224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc2cb06ba63%3A0xaf05087c2b3738c3!2z44Kr44Os44OD44K_5rGQ55WZ!5e0!3m2!1sja!2sjp!4v1674888421365!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '251ｍ',
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.7,
  4,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-8.jpg',
  true,
  '2023-01-28T16:53:23+09:00',
  '2023-01-28T16:53:23+09:00',
  '2025-03-03T16:52:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for caretta-shiodome-sky-view
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-8.jpg', 'カレッタ汐留・SKY VIEWから見える夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/caretta-shiodome-01-1.jpg', '月島方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-9.jpg', 'ライトアップされる築地大橋と晴海の高層マンション', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-4.jpg', 'レインボーブリッジとメムズ東京、ウォーターズ竹芝', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-14.jpg', 'ライトアップされる勝どき橋と晴海の高層マンション', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-12.jpg', 'カレッタ汐留から眺める東京ベイエリアの夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-11.jpg', 'お台場のフジテレビ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-13.jpg', '聖路加ガーデンと月島方面のビル群', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-10.jpg', 'カレッタ汐留から眺める夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-3.jpg', '月島方面の夕景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-2.jpg', '月島方面の夕景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/carreta-shiodome-15.jpg', 'カレッタ汐留46・47階専用エレベーター', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/caretta-floor.jpg', 'カレッタ汐留展望フロアの雰囲気', 12);

-- FAQs for caretta-shiodome-sky-view
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'どんな夜景が楽しめますか？', '東京ベイエリアを一望することができます。ライトアップされたレインボーブリッジや勝鬨橋が見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), 'カレッタ汐留の展望台への行き方を教えて下さい。', 'B2Fにある直通シャトルエレベーターに乗ると46Fまで上がることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'caretta-shiodome-sky-view'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 勝鬨橋 (kachidoki-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'kachidoki-bridge',
  '勝鬨橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '勝鬨橋',
  '夜景・夕景・朝焼けと様々な景色を楽しめる穴場の夜景スポット',
  '<p>日露戦争の勝利が由来となって、1940年に建設された勝鬨橋。</p>
<p>日没を過ぎると橋のライトアップが開始され、23時まで美しい景観を見せてくれます。</p>
<p>遊歩道からの眺めも美しく、東西それぞれに東京らしさを感じる景色が広がります。</p>
<p>夜景だけでなく夏の時期は朝に勝鬨橋を訪れるのもおすすめ。</p>
<p>佃大橋が見える角度と朝日が昇る位置が重なるので、条件が合えば非常に美しい眺めを楽しむことができます。</p>',
  '東京都中央区築地6丁目',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  'https://www.kensetsu.metro.tokyo.lg.jp/jigyo/road/kanri/gaiyo/kachidoki/index.html',
  'かちどき橋の資料館 | 東京都建設局',
  '24時間開放',
  'なし',
  '無料',
  '<ul>
<li>大江戸線「勝どき駅」から徒歩約6分</li>
<li>日比谷線「築地駅」から徒歩0分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="勝鬨橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.389752556443!2d139.7579888959069!3d35.66228865199995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889adec8233e7%3A0x71641bee1c8641af!2z5Yud6ayo5qmL!5e0!3m2!1sja!2sjp!4v1673983444774!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/katidoki-bridge-04.jpg',
  true,
  '2023-01-18T04:34:58+09:00',
  '2023-01-18T04:34:58+09:00',
  '2024-07-29T15:48:08+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for kachidoki-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/katidoki-bridge-04.jpg', 'ライトアップされる勝鬨橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/katidoki-bridge-02.jpg', '勝鬨橋から眺める夜景（東側）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tsukiji-bridge-06.jpg', '勝鬨橋から眺める夜景（西側）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/katidoki-bridge-01.jpg', 'ライトアップされる勝鬨橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/katidoki-bridge-05.jpg', 'ライトアップされる佃大橋とスカイツリー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kachidoki-bridge-3.jpg', '勝鬨橋から眺める朝焼け（東側）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kachidoki-bridge-6.jpg', '勝鬨橋から眺める朝焼け（東側）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kachidoki-bridge-5.jpg', '勝鬨橋から眺める朝日（東側）', 7);

-- FAQs for kachidoki-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), 'どんな夜景が楽しめますか？', '東側は佃大橋を始め、月島のタワーマンション群、西側は築地大橋や東京タワーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), '勝鬨橋のライトアップは何時まで実施されていますか？', '23時まで点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 芝公園1号地 (minato-park-1)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'minato-park-1',
  '芝公園1号地',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '芝公園1号地',
  'ライトアップされた東京タワーをスッキリと眺める事が出来る無料夜景スポット。',
  '<p>1873年に開演した日本で最も古い公園の1つとして知られている芝公園。</p>
<p>視界を遮るものがほとんどなく、東京タワーの全景をスッキリと眺められる夜景スポットです。</p>
<p>広々とした園内には複数のベンチが設置されており、人も少ないので夜景鑑賞に最適。</p>
<p>芝公園の周辺には東京タワーを眺めることができる名所が複数あるので合わせて立ち寄ってみてはいかがでしょうか？</p>',
  '東京都港区芝公園 4-10-17',
  'https://www.tokyo-park.or.jp/park/format/index001.html',
  '芝公園｜公園へ行こう！',
  NULL,
  NULL,
  'https://www.tokyotower.co.jp/lightup/index.php',
  '東京タワー本日のライトアップ',
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>JR「浜松町駅」から徒歩約12分</li>
<li>三田線「芝公園駅」I05出口から徒歩2分</li>
<li>三田線「御成門駅」I06出口から徒歩2分</li>
<li>大江戸線「赤羽橋駅」E21出口から徒歩2分</li>
<li>浅草線「大門駅」E20出口から徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="芝公園1号地の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6483.57410288019!2d139.74372967614497!3d35.65761787079893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbedd7d8b69%3A0x58a924b663773b45!2z6Iqd5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1673227030641!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  4,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/shiba-park-02.jpg',
  true,
  '2023-01-09T10:17:41+09:00',
  '2023-01-09T10:17:41+09:00',
  '2024-02-10T16:05:39+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for minato-park-1
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shiba-park-01.jpg', '芝公園1号地から眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shiba-park-02.jpg', '芝公園1号地から眺める東京タワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-5.jpg', '芝公園1号地から眺める東京タワー（クリスマス特別ライトアップ）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shiba-park-03.jpg', '芝公園一号地の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-12.jpg', '高層ビルに東京タワーが映る様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-1-1.jpg', '芝公園一号地とザ・プリンス パークタワー東京', 5);

-- FAQs for minato-park-1
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), 'どんな夜景が楽しめますか？', 'ライトアップされた東京タワーを遮るものなく綺麗に眺める事が出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), '東京タワーのライトアップ時間は何時までですか？', '東京タワーのライトアップ時間は日没～24:00までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'minato-park-1'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 札の辻橋歩道橋 (fudanotsuji)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'fudanotsuji',
  '札の辻橋歩道橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '札の辻橋歩道橋',
  'テレビやドラマのロケ地にも使われる東京タワーが見える名所',
  '<p>ドラマや映画のロケでもたびたび登場する東京タワーが見える名所。</p>
<p>国道15号線（第一京浜）にかかる歩道橋の上から北側を眺めると都道301号の先に東京タワーが見えます。</p>
<p>道路沿いにずらりと建ち並ぶビル群の先に東京タワーがそびえ立つ光景はとても迫力があり、一見の価値ありです。</p>
<p>近隣を通りがかった際に訪れてみてはいかがでしょうか。</p>',
  '東京都港区三田3丁目周辺',
  'https://visit-minato-city.tokyo/ja-jp/places/903',
  '札の辻交差点 | 港区観光協会 | VISIT MINATO CITY - 東京都港区の観光情報公式サイト',
  NULL,
  NULL,
  'https://www.tokyotower.co.jp/lightup/index.php',
  '東京タワー本日のライトアップ',
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>JR「田町駅」から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="札の辻橋歩道橋の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.302877551513!2d139.7419227160896!3d35.644908739569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb188be7c25%3A0x5461a509aed708c7!2z5p2x5Lqs6YO95riv5Yy6IOacreOBrui-u-atqemBk-apiw!5e0!3m2!1sja!2sjp!4v1673357890979!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  2,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/fudanotsuj-01.jpg',
  true,
  '2023-01-10T22:39:04+09:00',
  '2023-01-10T22:39:04+09:00',
  '2023-12-26T12:22:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for fudanotsuji
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/fudanotsuj-01.jpg', '札の辻橋歩道橋から見える東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/fudanotsuj-02.jpg', '札の辻橋歩道橋から見える東京タワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/fudanotsuj-04.jpg', '札の辻橋歩道橋の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/fudanotsuj-03.jpg', '札の辻橋歩道橋の外観', 3);

-- FAQs for fudanotsuji
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), 'どんな景色を楽しむことができますか？', '北側を眺めると都道301号の先に東京タワーが見えます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), '東京タワーのライトアップ時間は何時までですか？', 'ライトアップ時間は日没～24:00までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fudanotsuji'), '札の辻の読み方を教えてください', 'ふだのつじと読みます。', 2);

-- Post: プリンスパークタワー東京 空中庭園 (prince-park-tower-tokyo-ground)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'prince-park-tower-tokyo-ground',
  'プリンスパークタワー東京 空中庭園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'プリンスパークタワー東京 空中庭園',
  '芝生に寝転んで東京タワーを眺めることができる無料の夜景スポット',
  '<p><a href="/minato/the-prince-park-tower-tokyo/">ザ・プリンス パークタワー東京</a>の敷地内にあるヨーロッパ的な作りの庭園。</p>
<p>ホテルの宿泊客以外も自由に出入りできるスペースで、目の前を遮るものなく東京タワーを眺めることができます。</p>
<p>東京タワー公式サイトの今日のライトアップに掲載されている写真はここから撮られたもの。</p>
<p>敷地内の芝生は綺麗に整備されており寝転ぶこともできますし、落ち着いた雰囲気なのでデートに使うのもおすすめです。</p>',
  '東京都港区芝公園4-8-1',
  'https://www.princehotels.co.jp/parktower/',
  'ザ・プリンス パークタワー東京',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>地下鉄大江戸線「赤羽橋駅」から徒歩2分</li>
<li>地下鉄三田線「芝公園駅」から徒歩3分</li>
<li>JR線「浜松町駅」から徒歩12分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="プリンスパークタワー東京 空中庭園の場所・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.882476785596!2d139.7448472160899!3d35.65526703900109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ec44a3cbf4f5%3A0xeb0678d2239813f6!2z44K244O744OX44Oq44Oz44K5IOODkeODvOOCr-OCv-ODr-ODvOadseS6rA!5e0!3m2!1sja!2sjp!4v1673360006060!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  4,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/prince-hotel-park-02.jpg',
  true,
  '2023-01-10T23:19:11+09:00',
  '2023-01-10T23:19:11+09:00',
  '2024-02-16T21:53:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for prince-park-tower-tokyo-ground
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/prince-hotel-park-02.jpg', 'プリンスパークタワー東京から眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-tokyo-park-03.jpg', 'プリンスパークタワー東京の外観', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-tokyo-park-01.jpg', 'プリンスパークタワー東京から眺める東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-tokyo-park-05.jpg', 'プリンスパークタワー東京から眺める東京タワー（朝）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-tower-2.jpg', '東京タワーと桜', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-1.jpg', 'プリンスパークタワー東京から眺める東京タワー（朝）', 5);

-- FAQs for prince-park-tower-tokyo-ground
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), 'どんな景色を楽しむことができますか？', '北西の方角に東京タワーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'prince-park-tower-tokyo-ground'), '東京タワーのライトアップ時間は何時までですか？', 'ライトアップ時間は日没～24:00までです。', 1);

-- Post: 新丸ビル7階 丸の内ハウス (new-marunouchi-building)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'new-marunouchi-building',
  '新丸ビル7階 丸の内ハウス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '新丸ビル7階 丸の内ハウス',
  '東京駅に来たらぜひ立ち寄ってほしい。全長335メートルの東京駅丸の内駅舎の全体像を一望できる特等席。',
  '<p>2007年に竣工した高さ198mを誇る新丸ビル。</p>
<p>7階の丸の内ハウス（レストランフロア）には<a href="/article/observatory/">無料の展望スペース</a>があり、東京駅舎の全体像を堪能することができます。</p>
<p>全長335メートルの東京駅舎は迫力がすごく、見ごたえがあります。</p>
<p>緑と調和した落ち着きのある空間のテラスなので、デートなどでゆっくり夜景を眺めたいときにおすすめのスポットです。</p>
<p>展望スペースは比較的遅くまで解放されていますが、東京駅のライトアップは21時までなので、訪れる時間には注意しましょう。</p>',
  '東京都千代田区丸の内 1-5-1',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/tokyo-station-view-spot/',
  '東京駅が綺麗に見える夜景スポットを8つを紹介！フォトジェニックな赤レンガ駅舎を撮影しよう',
  'https://www.marunouchi.com/building/shinmaru/',
  '新丸ビルのフロアガイド | 店舗情報や営業日・営業時間、交通案内など | 丸の内ドットコム',
  '<ul><li>平日・土曜 11:00～23:00</li><li>日曜・祝日 11:00～22:00</li></ul>',
  '1月1日及び法定点検日',
  '無料',
  '<ul>
<li> JR「東京駅丸の内中央口」から徒歩約1分</li>
<li>千代田線線「二重橋前駅」から徒歩約2分</li>
<li>千代田線線「二重橋前駅」から徒歩約2分</li>
<li>東西線「大手町駅」から徒歩約4分</li>
<li>半蔵門線「大手町駅」から徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="新丸ビル7階 丸の内ハウスの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.732214252029!2d139.75759171945813!3d35.680298702931566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf9b11e03ab%3A0x94bd79343edb8416!2z5paw5Li444Gu5YaF44OT44Or44OH44Kj44Oz44Kw!5e0!3m2!1sja!2sjp!4v1673237563193!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  5,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/new-maru-building-03.jpg',
  true,
  '2023-01-11T01:00:00+09:00',
  '2023-01-11T01:00:00+09:00',
  '2023-12-31T16:32:18+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for new-marunouchi-building
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/new-maru-building-03.jpg', '新丸ビル展望フロアから眺める東京駅の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/maru-bill-1.jpg', '新丸ビル展望フロアから眺めるKITTE丸の内', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/new-maru-building-02.jpg', '新丸ビル展望フロアから眺める東京駅の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/new-maru-building-01.jpg', '新丸ビル展望フロアから眺める東京駅の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/maru-bill-2.jpg', '丸の内ハウスの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-house-3.jpg', '新丸ビル展望フロアから眺める夕暮れ時の東京駅', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/marunouchi-house-2.jpg', '新丸ビル展望フロアから眺める夕暮れ時の東京駅', 6);

-- FAQs for new-marunouchi-building
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), '新丸ビルの展望台は何階にある？', '7階のレストランフロアの外にあります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), '東京駅のライトアップは何時までやってる？', '日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-marunouchi-building'), '三脚を使っての夜景撮影は可能ですか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: KITTE丸の内 屋上庭園 KITTEガーデン (kitte-garden)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'kitte-garden',
  'KITTE丸の内 屋上庭園 KITTEガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  'KITTEガーデン 屋上庭園',
  '大迫力の東京駅と丸の内のビル群が眺められる無料の展望スペース。雰囲気も非常によくデートでの利用もおすすめ。なお東京駅ライトアップは21時までなので訪問時間には注意。',
  '<p>日本郵便が初めて手がけた商業施設として2013年に開業した「丸の内KITTE」。</p>
<p>6階には約1,500平方メートルに及ぶ開放的な屋上庭園「KITTEガーデン」があり、東京駅舎や駅構内を発着する新幹線や電車を眺めることができます。私が訪れた日は夕暮れ時で、次々と入線してくる新幹線を眺めているだけで時間を忘れてしまいました。</p>
<p>ライトアップされた東京駅や整備された東京駅丸の内駅前広場、丸の内ビル群の窓明かりは非常に美しく、ぜひ東京駅に訪れたら足を運んでほしい夜景スポットです。特に日没直後のマジックアワーの時間帯は、空のグラデーションと駅舎の照明が相まって格別の美しさでした。</p>
<p>屋上庭園は芝生が綺麗に手入れされており、控えめなフットライトが点灯していて雰囲気も良い感じ。カップルや家族連れも多く、皆さん思い思いに夜景を楽しんでいました。デート利用におすすめの無料展望台です。</p>
<p>施設自体は23:00まで開放されていますが、東京駅のライトアップは21時までとなっているので少し早めに訪れるのがおすすめです。</p>',
  '東京都千代田区丸の内2-7-2',
  'https://marunouchi.jp-kitte.jp/shop/floor/floor-6f.jsp',
  'フロアガイド/6F（レストラン KITTEガーデン）',
  'http://yakei-isan.jp/spot/detail.php?id=75',
  '屋上庭園「KITTEガーデン」｜ 日本夜景遺産',
  NULL,
  NULL,
  '11:00～23:00（日・祝 11:00～22:00）<br> ※天候により閉鎖する場合があります',
  'なし',
  '無料',
  '<ul>
<li>JR東京駅丸の内南口から徒歩約1分</li>
<li>JR京葉線「東京駅」から徒歩約3分</li>
<li>JR「有楽町駅」から徒歩約6分</li>
<li>千代田線「二重橋前駅」から徒歩約2分</li>
<li>三田線「大手町駅」から徒歩約4分</li>
</ul>',
  '<ul>
<li>丸の内パークイン</li>
<li>利用時間	6:00～23:00</li>
<li>0～3.5時間まで 30分ごとに￥400</li>
<li>3.5～6時間まで ￥2,800（固定）</li>
<li>6～9.5時間まで ￥2,800　＋30分ごとに￥400</li>
<li>9.5～24時間まで ￥5,600（固定）</li>
</ul>',
  '<iframe title="KITTE丸の内 屋上庭園 KITTEガーデンの位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8845231141536!2d139.7625401152588!3d35.67984528019466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfa366cbd39%3A0x42f1079b3e4b097d!2z44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaF77yS5LiB55uu77yX4oiS77yS!5e0!3m2!1sja!2sjp!4v1673239826789!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  5,
  5,
  5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-marunouchi-observation.jpg',
  true,
  '2023-01-10T22:42:00+09:00',
  '2023-01-10T22:42:00+09:00',
  '2026-01-27T08:52:01+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for kitte-garden
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-marunouchi-observation.jpg', 'KITTE屋上庭園から眺めるライトアップされた東京駅', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-garden-observatory-1.jpg', 'KITTE屋上庭園の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-garden-observatory-3.jpg', 'KITTE屋上庭園から眺める東京駅の電車・新幹線', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-garden-observatory-4.jpg', 'KITTE屋上庭園から眺めるライトアップされた東京駅', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-garden-observatory-2.jpg', 'KITTE屋上庭園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-garden-buildings.jpg', 'KITTE屋上庭園から眺める大手町の高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-rooftop-1.jpg', 'KITTEガーデンからの景色（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-rooftop-2.jpg', 'KITTE屋上庭園の雰囲気（昼）', 7);

-- FAQs for kitte-garden
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'KITTEガーデン 屋上庭園からはどんな景色（夜景）が楽しめますか？', 'ライトアップされた東京タワーや丸の内の高層ビル群を眺めることができます。また新幹線が行き来するトレインビューも眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), '東京駅のライトアップは何時までやってますか？', 'ライトアップ時間は日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'KITTEガーデン 屋上庭園はどれくらい混雑しますか？', '混雑するケースは少ないのでいつ立ち寄っても比較的落ち着いて夜景鑑賞ができます。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'KITTEガーデン 屋上庭園へ入るのに料金は発生しますか？', 'KITTEガーデン 屋上庭園は無料で入場することが可能です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), 'KITTEガーデン 屋上庭園を訪れるならいつがおすすめですか？', '平日の夜がおすすめです。光量の多い迫力のあるビル夜景を眺めることができます。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitte-garden'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 5);

-- Post: 芝公園4号地 (shiba-park-04)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shiba-park-04',
  '芝公園4号地',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '芝公園4号地',
  '「東京タワーへ続く道」が有名な夜景スポット。絵に書いたような美しい構図のインスタ映えする写真を撮ることが可能。',
  '<p>ドラマのロケ地にも使われることが多い芝公園4号地。</p>
<p>児童遊園と運動広場を結ぶプロムナードに立つと、東京タワーを正面から眺めることができます。</p>
<p>東京タワーが綺麗に見れる場所はいくつかありますが、その中でも芝公園4号地のこの景色は高い独自性があります。</p>
<p>プロムナードを照らす灯りも良いアクセントとなっており、とても美しい夜景です。</p>
<p>記念撮影をしている方を多く見かけますが、全体的に落ち着いた雰囲気の公園ですので、デートの帰り道などに立ち寄ってみてはいかがでしょうか。</p>',
  '東京都港区芝公園 3-2',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.tokyotower.co.jp/lightup/index.php',
  '東京タワー本日のライトアップ',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営三田線「御成門駅徒歩・A6出口」から徒歩約1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="芝公園4号地の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.662162711975!2d139.74852751609004!3d35.66069433870359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbfc445f2a3%3A0x364a33a53ec6e575!2z6Iqd5YWs5ZySIDTlj7flnLA!5e0!3m2!1sja!2sjp!4v1673358681461!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  4,
  3,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-04-02.jpg-22-57-38-891.jpg',
  true,
  '2023-01-10T22:58:48+09:00',
  '2023-01-10T22:58:48+09:00',
  '2024-03-20T11:46:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for shiba-park-04
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-04-02.jpg-22-57-38-891.jpg', '芝公園4号地から眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park.jpg', '東京タワー65周年の特別ライトアップ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-1.jpg', '芝公園4号地から眺める東京タワー（特別ライトアップ）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-2.jpg', '芝公園4号地から眺めるビル夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-04-03.jpg', '芝公園4号地の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-1.jpg', '東京タワー展望台から眺める芝公園4号地', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-4.jpg', '東京タワー展望台から眺める芝公園4号地', 6);

-- FAQs for shiba-park-04
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), 'どんな景色を楽しむことができますか？', '児童遊園と運動広場を結ぶプロムナードの先に東京タワーを正面から眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), '東京タワーのライトアップ時間は何時までですか？', 'ライトアップ時間は日没～24:00までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shiba-park-04'), '芝公園4号地が登場するドラマ作品にはどんなものがありますか？', '「東京ラブストーリー2020」などが挙げられます。', 3);

-- Post: 東京ミッドタウン日比谷 展望台 パークビューガーデン (tokyo-midtown-hibiya)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyo-midtown-hibiya',
  '東京ミッドタウン日比谷 展望台 パークビューガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '東京ミッドタウン日比谷・パークビューガーデン',
  '仕事やデートの帰り道に立ち寄りたい穴場の展望台。都会的で雰囲気も抜群',
  '<p>2018年3月に開業した東京ミッドタウン日比谷 。</p>
<p>6階までが商業施設となっており、映画館やレストランなど様々な施設が並びます。</p>
<p>6階には<a href="/article/observatory/">無料の展望台</a>があり、日比谷公園や皇居外苑を一望することが可能。</p>
<p>見所は南側の霞ヶ関方面の景色と北側の大手町や竹橋のオフィスビル群の景色。</p>
<p>北側の景色はガラス面に近づくこともできるので、夜景撮影にもうってつけです。</p>
<p>平日の夜に訪れれば、光量の多い夜景を楽しむことができるでしょう。</p>
<p>ミッドタウンの独特なビルの形状や芝生のバランスが美しく、おしゃれな雰囲気の展望台ですので、デートにも最適です。</p>',
  '東京都千代田区有楽町 1-1-2',
  'https://www.hibiya.tokyo-midtown.com/jp/',
  '東京ミッドタウン日比谷公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '9:00～23:00',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ千代田線・日比谷線・都営地下鉄三田線「日比谷駅」直結</li>
<li>JR山手線・京浜東北線「有楽町駅」から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.134487336339!2d139.75702951525844!3d35.67369038019605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bee26a9847b%3A0x52df98f8fd725a63!2z44CSMTAwLTAwMDYg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65pyJ5qW955S677yR5LiB55uu77yRIOadseS6rOODn-ODg-ODieOCv-OCpuODs-aXpeavlOiwtw!5e0!3m2!1sja!2sjp!4v1673446331967!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2,
  4,
  3.5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiya-midtown-landscape-1.jpg',
  true,
  '2023-01-11T23:12:50+09:00',
  '2023-01-11T23:12:50+09:00',
  '2023-12-09T00:33:30+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tokyo-midtown-hibiya
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiya-midtown-landscape-1.jpg', '東京ミッドタウン日比谷からの景色（北側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiya-mid-1.jpg', '日比谷通りを行き交う車の光跡', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiya-mid-2.jpg', '東京ミッドタウン日比谷からの景色（東側）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-4.jpg', '東京ミッドタウン日比谷展望台の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-2.jpg', '霞が関方面の高層ビル群の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-3.jpg', 'イルミネーションが美しい東京ミッドタウン日比谷の展望台', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiya-mid.jpg', '東京ミッドタウン日比谷展望台の雰囲気', 6);

-- FAQs for tokyo-midtown-hibiya
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), 'どんな景色を楽しむことができますか？', '南の方角に霞ヶ関方面の景色、北の方角に大手町や竹橋のオフィスビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), '展望スペースは何階にありますか？', 'パークビューガーデンは6階にあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-hibiya'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 東京駅丸の内駅前広場 (tokyo-station-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyo-station-park',
  '東京駅丸の内駅前広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '東京駅丸の内駅前広場',
  'ライトアップされた東京駅を真正面に眺めることができる広場。綺麗に整備されており行幸通り方面の眺めも非常に美しい。',
  '<p>2014年から3年の整備期間を経て、2017年12月に全面オープンした東京駅丸の内駅前広場。</p>
<p>ライトアップされた東京駅舎を間近で見ることができるのが特徴で、いつ訪れてもスマホやカメラで記念撮影してる人を見かける人気の夜景スポットです。</p>
<p>広場内にはベンチもあり、ゆっくり東京の玄関の景観を堪能することも可能。</p>
<p>ぜひ観光や仕事帰りなどに立ち寄ってみてください。</p>
<p>なお、東京駅丸の内駅前広場では毎年クリスマスから年末にかけて「東京ミチテラス」というイルミネーションイベントも開催されます。</p>
<p>いつもとは違う東京駅の姿を眺めるのもおすすめです。</p>',
  '東京都千代田区丸の内 1丁目',
  'http://www.tokyostationcity.com/',
  '東京駅が街になる Tokyo Station City',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京駅直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="東京駅丸の内駅前広場の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.2816854074267!2d139.76431562797768!3d35.68174303779144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf979712903%3A0x710fa891148d8b9a!2z5p2x5Lqs6aeF5Li444Gu5YaF6aeF5YmN5bqD5aC0!5e0!3m2!1sja!2sjp!4v1673446798215!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  5,
  4,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-3.jpg',
  true,
  '2023-01-18T03:57:13+09:00',
  '2023-01-18T03:57:13+09:00',
  '2023-12-31T16:31:17+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for tokyo-station-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-3.jpg', 'ライトアップされた東京駅', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-1.jpg', '丸ビルと新丸ビル', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-2.jpg', '東京駅丸の内南口駅舎とKITTE丸の内', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-rain-reflection.jpeg', '雨上がりに眺めることができる東京駅のリフレクション', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-01.jpg', '夕暮れ時の東京駅丸の内駅舎の様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-02.jpg', 'ライトアップ開始直後の東京駅丸の内駅舎', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-park-04.jpg', 'ライトアップ開始直後の東京駅丸の内駅舎', 6);

-- FAQs for tokyo-station-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), '丸の内駅前広場の最寄りの出口はどこ？', '丸の内中央口になります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), '東京駅のライトアップは何時までやってる？', '日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-station-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 晴海埠頭旅客ターミナル (harumi-futo)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'harumi-futo',
  '晴海埠頭旅客ターミナル',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '晴海埠頭旅客ターミナル',
  'SNSで話題になった美しいモニュメント「風媒銀乱」がある穴場の夜景スポット。レインボーブリッジや東京タワーなどのランドマークも綺麗に見ることができます。',
  '<p>【2022年2月20日をもって閉館となりました】</p>
<p>東京の海の玄関として、国内外の豪華客船が寄港する晴海埠頭国際旅客ターミナル。</p>
<p>1991年に東京港開港50周年を記念して開業された施設で、6階には展望台があります。</p>
<p>東京タワーやレインボーブリッジなど東京の名所を一望できる眺めは息を呑むような美しさがあります。</p>
<p>また、終日開放されている屋外デッキにあるモニュメントの「風媒銀乱」もみどころ。</p>
<p>風が穏やかで水面が揺れない日にみせる幻想的なリフレクションは一見の価値ありです。</p>
<p>デッキの雰囲気も非常に優れており、デートで訪れるのにもおすすめ。</p>
<p>公共交通機関だとバスに乗るしかなく少しアクセスが悪いので、ぜひ自家用車で訪れてみてください。</p>',
  '東京都中央区晴海 5-7-1',
  'https://www.tptc.co.jp/terminal',
  '東京港客船ターミナル｜東京港客船ターミナル',
  NULL,
  NULL,
  NULL,
  NULL,
  '展望室 平日17時まで、土日祝 20時まで / 屋外デッキ 終日開放',
  'なし',
  '無料',
  '<ul>
<li>都05系統</li>
<li>東京駅丸の内南口・有楽町駅前・銀座四丁目・勝どき駅前から「晴海埠頭」行きバス乗車</li>
<li>都03系統</li>
<li>四谷駅前・半蔵門「晴海埠頭」行きバス乗車</li>
<li>錦13甲系統</li>
<li>錦糸町駅前から「晴海埠頭」行きバス乗車</li>
</ul>',
  '<ul>
<li>有料 （ 70台 ）</li>
<li>料金：2時間まで：400円 2時間を越える場合：30分毎に100円を加算</li>
<li>営業時間:7:30～23:00</li>
</ul>',
  '<iframe title="晴海埠頭・晴海客船ターミナルの位置を記した地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6484.373707701134!2d139.76982542614377!3d35.64776772080812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a2a4771c86f%3A0x8c4b29e853093cf9!2z5pm05rW344G16aCt5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1673447611687!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  2,
  5,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-6.jpg',
  true,
  '2023-01-11T23:35:22+09:00',
  '2023-01-11T23:35:22+09:00',
  '2024-06-17T01:42:26+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for harumi-futo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-1.jpg', '風媒銀乱のリフレクション', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-2.jpg', '夕暮れ時の晴海埠頭', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-4.jpg', '晴海埠頭のモニュメント「風媒銀乱」', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-5.jpg', '晴海埠頭旅客ターミナルから眺める東京湾', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-7.jpg', '晴海埠頭屋外デッキの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-6.jpg', '風媒銀乱のリフレクション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-8.jpg', '晴海埠頭から眺めるレインボーブリッジ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-sunset.jpg', '夕暮れ時の晴海埠頭', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-2-1.jpg', '夕暮れ時の晴海埠頭', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-4-1.jpg', '晴海埠頭から眺める東京タワー', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-entire.jpg', '晴海埠頭旅客ターミナルの外観', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/harumi-futo-1-1.jpg', '晴海埠頭旅客ターミナルの外観', 11);

-- FAQs for harumi-futo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'どんな景色を楽しむことができますか？', '東京タワーやレインボーブリッジなど東京の名所を一望することができます。また「風媒銀乱」というモニュメントも見どころの一つ。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), 'レインボーブリッジのライトアップは何時までですか？', '日没から24時まで点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-futo'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 北とぴあ展望ロビー (kitatopia)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'kitatopia',
  '北とぴあ展望ロビー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'kita'),
  NULL,
  '北とぴあ展望ロビー',
  'トレインビューが魅力の鉄道ファンにも人気の無料の夜景スポット',
  '<p>きたトピア17階にある<a href="/article/observatory/">無料の展望台</a>。</p>
<p>3方向に窓があり、トレインビューや東京スカイツリーを眺めることができます。</p>
<p>特に王子駅側の線路は新幹線をはじめ複数の電車が行き交うのでお子さん連れの方におすすめです。</p>
<p>光量が際立って多い夜景を楽しめるわけではありませんが、わかりやすい見どころのある素晴らしい展望台だと思います。</p>
<p>ちなみに同フロア内にはカフェレストランのVIEW＆KITCHEN QUAD17も併設されており、西側の景色を堪能させてできます。</p>
<p>営業時間が17：00までなので夜景を楽しむことはできませんが、合わせて立ち寄ってみてください。</p>',
  '東京都北区王子 1-11−1',
  'https://www.hokutopia.jp/hall-guide/other/viewing_lobby',
  '北とぴあ公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '8:30 ~ 22:00',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ南北線 王子 ５番出口 直結</li>
<li>京浜東北線 王子 北口 徒歩 2分</li>
<li>都電荒川線 王子駅前 徒歩 5分</li>
</ul>',
  '<ul>
<li>施設内に地下駐車場あり</li>
<li>入庫時間：午前8時15分～午後10時</li>
<li>大型車両：600円／30分</li>
<li>その他：150円／30分</li>
</ul>',
  '<iframe title="北とぴあ展望ロビーの地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.819948950942!2d139.73422251526083!3d35.755229980177155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018927c8526f577%3A0x27dcc2de86d63f9d!2z5YyX44Go44G044GC!5e0!3m2!1sja!2sjp!4v1675597633091!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '80m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  2.8,
  2.8,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-03.jpg',
  true,
  '2023-02-05T21:01:55+09:00',
  '2023-02-05T21:01:55+09:00',
  '2024-06-13T14:46:48+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for kitatopia
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-03.jpg', '北とぴあから眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-05.jpg', '都営荒川線を走る電車', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-04.jpg', '北とぴあから眺める夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-06.jpg', '北とぴあから眺めるトレインビュー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-02.jpg', '北とぴあから眺める夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-night-01.jpg', '北とぴあから眺める新宿方面のビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-sunset-02.jpg', '北とぴあから眺める新宿方面のビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-sunset-01.jpg', '都営荒川線を走る電車', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-sunset-03.jpg', '北とぴあから眺めるトレインビュー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-sunset-04.jpg', '北とぴあから眺める東京スカイツリー', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-cafe.jpg', '北とぴあ展望台にあるカフェ・レストラン', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-window-1.jpg', '北とぴあ展望台の雰囲気', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/kita-topia-window-02.jpg', '北とぴあ展望台の雰囲気', 12);

-- FAQs for kitatopia
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), 'どんな夜景が楽しめますか？', '東京スカイツリーや東京タワーなどのランドマーク、トレインビューを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), '展望スペースへはどのようにアクセスできますか？', '高層階専用エレベーターからアクセスすることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitatopia'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 汐入公園 (shioiri-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shioiri-park',
  '汐入公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'arakawa'),
  NULL,
  '汐入公園',
  '東京スカイツリーと隅田川の景観を堪能できる夜景スポット',
  '<p>隅田川沿いに南北に広がる汐入公園。</p>
<p>綺麗に整備された広大な園内は、数々のドラマロケ地としても利用されています。</p>
<p>見どころは南側の東京スカイスカイツリーや白鬚橋の共演。</p>
<p>日没を過ぎてライトアップが開始されると息を呑むような美しい光景をながめることができます。</p>
<p>首都高速の道路照明や行き交う車が夜景の美しさに華を添えます。</p>
<p>園内には24時間営業の有料駐車場も設置されているので、ドライブデートで立ち寄るがおすすめです。</p>',
  '東京都荒川区南千住 8丁目',
  'https://www.tokyo-park.or.jp/park/format/index017.html',
  '汐入公園公式サイト',
  'https://twitter.com/ParksShioiri',
  '都立汐入公園Twitterアカウント',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>つくばエクスプレス「南千住」下車 徒歩12分</li>
<li>JR常磐線「南千住」下車 徒歩12分</li>
<li>東京メトロ日比谷線「南千住」下車 徒歩12分</li>
</ul>',
  '<ul>
<li>敷地内に2つの駐車場あり</li>
<li>24時間営業</li>
<li>1時間まで300円、以後20分毎に100円</li>
<li>入庫後12時間最大料金　1200円</li>
</ul>',
  '<iframe title="汐入公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.5666631230943!2d139.80901454798985!3d35.73678461101422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188fc05e799f6d%3A0x10976b1f50f5766!2z5bGV5pyb5bqD5aC0!5e0!3m2!1sja!2sjp!4v1675002523365!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-07.jpg-22-09-37-452.jpg',
  true,
  '2023-01-29T23:36:51+09:00',
  '2023-01-29T23:36:51+09:00',
  '2024-07-28T23:03:03+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for shioiri-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-07.jpg-22-09-37-452.jpg', '汐入公園から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-04.jpg', '水神橋と首都高', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-06.jpg', 'ライトアップされた白鬚橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-08.jpg', '黄昏時の東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-05.jpg', '汐入公園の雰囲気（夜）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-03.jpg', '汐入公園の雰囲気（夕暮れ時）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-02.jpg', '夕日に染まる東京スカイツリー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-01.jpg', '汐入公園の雰囲気（夕暮れ時）', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-01-1.jpg', '汐入公園周辺から撮影した隅田川花火大会の様子', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shioiri-park-02-1.jpg', '汐入公園周辺から撮影した隅田川花火大会の様子', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumida-fire-flower-01.jpg', '白鬚橋と花火（隅田川花火大会）', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumida-fire-flower-02.jpg', '汐入公園周辺から撮影した隅田川花火大会の様子', 11);

-- FAQs for shioiri-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), 'どんな夜景が楽しめますか？', 'ライトアップされた東京スカイツリーや白鬚橋を眺めることができます', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), '白鬚橋のライトアップは何時まで実施されていますか？', '白鬚橋のライトアップ日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shioiri-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 白鬚橋 (shirahige-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shirahige-bridge',
  '白鬚橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '白鬚橋',
  '日没から23時まで白くライトアップされる168mのスタイリッシュな橋',
  '<p>センターアーチが美しい全長168mの白鬚橋。</p>
<p>東京オリンピック2020の開催を機にライトアップが開始され、新たな夜景スポットとなりました。</p>
<p>名前の通りの白いライトアップは日没から23時まで実施されています。</p>
<p>橋の上からは遮るものなく東京スカイツリーの鑑賞が可能。</p>
<p>瑞光橋や汐入公園などの夜景スポットとも近いので、近隣を訪れた際にぜひ訪れてみてはいかがでしょうか。</p>',
  '東京都墨田区堤通２丁目 台東区橋場２丁目',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線東向島駅から徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9277211803033!2d139.80755091526007!3d35.727996080183374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ee3965904fd%3A0x63b0cf6c0e3b667e!2z55m96aya5qmL!5e0!3m2!1sja!2sjp!4v1675433632344!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  2.5,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-02.jpg',
  true,
  '2023-02-03T23:12:12+09:00',
  '2023-02-03T23:12:12+09:00',
  '2024-07-29T15:42:46+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for shirahige-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-02.jpg', 'ライトアップされる白鬚橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-04.jpg', '白鬚橋から眺める東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-03.jpg', 'ライトアップされる白鬚橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-05.jpg', '白鬚橋から眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-01.jpg', '薄暮の白鬚橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumida-fire-flower-01.jpg', '白鬚橋と花火（隅田川花火大会）', 5);

-- FAQs for shirahige-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), 'どんな夜景が楽しめますか？', '橋の上からはライトアップされた東京スカイツリーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), '白鬚橋のライトアップは何時まで実施されていますか？', '白鬚橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shirahige-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 桜橋 (sakurabashi-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'sakurabashi-bridge',
  '桜橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '桜橋',
  '東京スカイツリーの眺めが美しい、X字型の形状が特徴の橋',
  '<p>アルファベットのXのような形状が特徴の桜橋。</p>
<p>墨田区と台東区を結ぶ隅田川唯一の歩行者専用橋で夜にはライトアップも実施されます。</p>
<p>橋の上からは何も遮るものなく綺麗に東京スカイツリーを拝むことが可能。</p>
<p>また、春には両岸に桜が咲き乱れ、多くの人がこの橋を渡ります。</p>
<p>電車でのアクセスはイマイチですが、近隣には駐車場も充実しているので、ぜひ春の季節にドライブデートで訪れてみてはいかがでしょうか。</p>',
  '東京都墨田区向島 5-1-1',
  'https://visit-sumida.jp/spot/6181/',
  '墨田区観光協会',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線「浅草駅」から徒歩18分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="桜橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103779.92019135487!2d139.62819981239755!3d35.624706314501665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188fc81e1609fd%3A0xec65e2ef15373bcd!2z5qGc5qmL!5e0!3m2!1sja!2sjp!4v1675077986746!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  2,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-04.jpg',
  true,
  '2023-01-30T20:36:47+09:00',
  '2023-01-30T20:36:47+09:00',
  '2023-12-31T13:49:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for sakurabashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-04.jpg', '桜橋の上から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-05.jpg', 'ライトアップされる桜橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-02.jpg', 'ライトアップされる桜橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-06.jpg', 'アルファベットのXのような形状が特徴の桜橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-01.jpg', '桜橋の上から眺める東京スカイツリー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sakura-bridge-03.jpg', '桜橋の上から眺める東京スカイツリー', 5);

-- FAQs for sakurabashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), 'どんな夜景が楽しめますか？', '橋の上からはライトアップされた東京スカイツリーを眺めることができます。また春には橋の両岸に満開の桜が咲きます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), '桜橋のライトアップは何時まで実施されていますか？', '日没から23時までライトアップされています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakurabashi-bridge'), '東京スカイツリーは何時までライトアップされていますか？', '日没から24時まで点灯しています。', 2);

-- Post: 浅草文化観光センター 展望テラス (asakusa-cultural-tourism-center)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'asakusa-cultural-tourism-center',
  '浅草文化観光センター 展望テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '浅草文化観光センター 展望テラス',
  '浅草寺の全景やライトアップされた東京スカイツリーが眺められる無料の展望台。日本らしい眺望が広がるので訪日外国人にも人気のスポット。',
  '<p>浅草寺・雷門の向かい側に建つ和モダンテイストの美しい浅草文化観光センター。</p>
<p>観光パンフレット、公衆無線LAN、外貨両替所も備え、浅草を訪れる観光客をサポートしてくれる同ビルの8階には<a href="/article/observatory/">無料の展望台</a>があります。</p>
<p>高さこそそこまでありませんが、雷門から本堂へとスラっと伸びる仲見世通りやライトアップされた東京スカイツリーの眺めは一見の価値があり。</p>
<p>浅草文化観光センターの営業時間は20:00までとなっていますが、展望フロアは22:00まで開放されているので、浅草観光の帰り道などにぜひ立ち寄ってみてはいかがでしょうか？</p>',
  '東京都台東区雷門 2-18-9',
  'https://www.city.taito.lg.jp/bunka_kanko/kankoinfo/info/oyakudachi/kankocenter/a-tic-gaiyo.html',
  '浅草文化観光センター 施設概要 台東区ホームページ',
  NULL,
  NULL,
  NULL,
  NULL,
  '9:00～22:00',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線（東武スカイツリーライン）浅草駅から徒歩5分</li>
<li>東京メトロ銀座線「浅草駅」出口2から徒歩1分</li>
<li>都営浅草線「浅草駅」A4出口から徒歩2分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="浅草文化観光センター 展望テラスの位置を記した地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12957.808460448021!2d139.7965461!3d35.7150979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7740294b7ef17d49!2z5rWF6I2J5paH5YyW6Kaz5YWJ44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1675764445755!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.8,
  3.8,
  2.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusabunka-terrace-01.jpg',
  true,
  '2023-02-07T20:50:52+09:00',
  '2023-02-07T20:50:52+09:00',
  '2024-10-14T01:02:47+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for asakusa-cultural-tourism-center
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusabunka-terrace-01.jpg', '浅草寺の雷門と仲見世通り', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/vv-2.jpg', '浅草寺の雷門', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusabunka-terrace-02.jpg', 'ライトアップされた東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusabunka-terrace-03.jpg', 'ライトアップされる浅草寺の本堂と五重塔', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/asakusabunka-terrace-06.jpg', '浅草文化観光センター 展望テラスからの景色', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/asakusa-culture-and-tourism-center-out.jpg', '浅草文化観光センターの外観', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/asakusabunka-terrace-05.jpg', '浅草文化観光センター 展望テラスの雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/asakusa-cultural-tourism-center-day.jpg', '浅草寺と五重塔', 7);

-- FAQs for asakusa-cultural-tourism-center
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), 'どんな夜景が楽しめますか？', '雷門から本堂へとスラっと伸びる仲見世通りやライトアップされた東京スカイツリーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), '浅草文化観光センターを設計したのは誰ですか？', '浅草文化観光センターは隈研吾氏によって設計されました。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-cultural-tourism-center'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 東京スカイツリー 天望回廊&amp;展望デッキ (tokyo-sky-tree)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyo-sky-tree',
  '東京スカイツリー 天望回廊&amp;展望デッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '東京スカイツリー展望台',
  '世界一の高さを誇るタワーから眺める光の大海原は圧巻の一言。平日、休日問わず混雑するためスムーズに展望台に上がるのに前売り券購入が必須。',
  '<p>東京を代表するランドマークのひとつ、東京スカイツリー。</p>

<p>地上高634mを誇るタワーは2011年に「世界一高いタワー」としてギネス認定されています。</p>

<p>施設内には2つの<a href="/article/observatory/">展望台</a>が設けられており、東京の街並みを一望することができ、連日多くの観光客で賑わいを見せています。</p>

<ul>
<li>展望回廊（高さ450m）</li>
<li>展望デッキ（高さ350m）</li>
</ul>

<h3>どんな景色が見られるの？</h3>

<p>東京スカイツリー展望台からの景色で見どころになるのは大きく2つ。</p>

<p>一つ目は隅田川や浅草方面を眺められる北側の景色。隅田川の美しい曲線の上に架かるライトアップされた橋や周辺の街並みは光量も多く迫力があります。夜になると川面に灯りが反射して、昼間とはまた違った表情を見せてくれます。</p>

<p>二つ目は東京タワーや高層ビル群を眺めることができる西側の景色。都会らしい景観を楽しめますし、空気が澄んでいる日には富士山も眺めることができます。冬場は特に空気が澄んでいるので、富士山を狙うなら寒い時期がおすすめです。</p>

<h3>東京スカイツリー展望台には何時に登るのがおすすめ？</h3>

<p>東京スカイツリーは開業10年以上経った今でも土日のピーク時には展望デッキにあがるのに30分以上の待ち時間が発生することが頻繁にあります。</p>

<p>高さ450mの展望回廊まで上がる場合はさらに追加の待ち時間が発生するので、余裕を持って訪問するのがおすすめです。日時指定の事前予約を利用すれば、待ち時間を短縮できるので活用してみてください。</p>

<p>リアルタイムに混雑状況を確認したい場合はX（旧Twitter）などSNSをチェックしましょう。</p>',
  '東京都墨田区押上 1-1-2',
  'https://www.tokyo-skytree.jp/',
  '東京スカイツリー公式サイト',
  'https://twitter.com/skytreeofficial',
  '東京スカイツリー 公式Twitter',
  'https://nightscape.tokyo/pickup/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '10:00 ~ 21:00（最終入場 20:00）',
  'なし',
  '<ul>
<li>土日 天望回廊1,100円 / 天望デッキ2,300円 / セット券3,400円</li>
<li>平日 天望回廊1,000円 / 天望デッキ2,100円 / セット券3,100円</li>
</ul>',
  '<ul>
<li>都営地下鉄「押上」駅から徒歩1分</li>
<li>東武線「とうきょうスカイツリー」駅から徒歩6分</li>
</ul>',
  '<ul>
<li>東京スカイツリータウン駐車場</li>
<li>7:30~23:00※入庫は22:00まで</li>
<li>350円/30分</li>
</ul>',
  '<iframe title="東京スカイツリーの位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656784611318!2d139.80851171525973!3d35.71006268018753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1676206215041!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '展望回廊 450m、展望デッキ 350m',
  NULL,
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F22057&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天観光トラベルで東京スカイツリーの入場券を賢く購入</a>',
  NULL,
  null,
  null,
  5,
  4.5,
  3.8,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-view-1.jpg',
  true,
  '2023-02-13T07:55:21+09:00',
  '2023-02-13T07:55:21+09:00',
  '2026-01-27T08:56:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for tokyo-sky-tree
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-02.jpg', '東京スカイツリー 展望回廊&展望デッキの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-11.jpg', '隅田川にかかる蔵前橋、厩橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-2.jpg', '中央区方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-03.jpg', 'スカイツリーから眺める富士山', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-shinjyuku.jpg', '新宿の摩天楼（都庁、コクーンタワーなど）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-01.jpg', 'スカイツリーから眺める富士山と東京タワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/skytree-brdige-1.jpg', 'ライトアップされる永代橋と清洲橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-12.jpg', '浅草寺と浅草花やしき', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-14.jpg', 'ライトアップされた東京タワー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-17.jpg', '神田・秋葉原周辺の高層ビル群', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-18.jpg', 'ライトアップされる国会議事堂と霞ヶ関方面の街並み', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-20.jpg', 'ライトアップされる桜橋', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-deck-6.jpg', '北千住・綾瀬方面、隅田川・荒川の夜景', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-21.jpg', '隅田川周辺の夜景', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-22.jpg', '東武鉄道・曳舟駅周辺の夜景', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-23.jpg', 'JR錦糸町駅周辺の夜景', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-15.jpg', '港区方面の摩天楼', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-deck-10.jpg', '東京スカイツリー展望デッキの雰囲気', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-deck-2.jpg', '展望デッキにあるお土産売り場', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-deck-1.jpg', '東京スカイツリーからの景色', 19);

-- FAQs for tokyo-sky-tree
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '東京スカイツリー 天望回廊&展望デッキからはどんな夜景が楽しめますか？', '東京タワーや高層ビル群が林立する光景が楽しめる西側や隅田川に架かる橋を複数眺められる北側などが見所です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '東京スカイツリーの混雑状況をリアルタイムで確認する手段はありますか？', '公式サイト等でリアルタイムの混雑状況はアナウンスされていないのでTwitterなどのSNSを確認するのがおすすめです。土日のピークの時間（12時～18時）は30分程の待ち時間が発生することが多いようです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '東京スカイツリーの入場料を安くする方法はありますか？', '事前予約をおこなうと入場チケットをお得に購入することができます。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '東京スカイツリー展望台の滞在時間・所要時間はどれくらい？', '1時間~2時間ほどが目安になります。ただし、土日祝は混雑するので+30分ほどの時間を見ておくと良いと思います。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '東京スカイツリーの展望デッキと天望回廊の違いは何？', '東京スカイツリーの展望デッキと天望回廊はそれぞれ高さが異なります。展望回廊の高さは450m、展望デッキの高さは350mとなっています。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-sky-tree'), '天望回廊だけのチケットの購入は可能ですか？', '展望回廊だけのチケット購入はできません。', 5);

-- Post: 豊洲公園 (toyosu-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'toyosu-park',
  '豊洲公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲公園',
  '都会らしい夜景が広がる美しく整備された公園',
  '<p>晴海橋公園やららぽーと豊洲に隣接する海沿いに面した公園。</p>
<p>綺麗に芝生が整理され、遊具が充実していることから日中は多くの家族連れで賑わいをみせます。</p>
<p>夜になると一気に人の数は減り、落ち着いて夜景鑑賞できるスポットに様変わり。</p>
<p>湾岸エリアのダイナミックな夜景は一見の価値があります。</p>
<p>ららぽーと豊洲のショッピング帰りなどに立ち寄ってみてはいかがでしょうか。</p>',
  '東京都江東区豊洲２丁目３−６',
  'https://toyosugururi.jp/',
  '豊洲ぐるりパーク',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>メトロ有楽町線「豊洲駅」徒歩約3分</li>
<li>ゆりかもめ「豊洲駅」から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12968.343659330121!2d139.7796713348014!3d35.650254833222675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889a25b20b2ed%3A0xb999ddfc9ddc9103!2z6LGK5rSy5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1680404399776!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.1,
  3.4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-05.jpg',
  true,
  '2023-02-02T12:11:00+09:00',
  '2023-02-02T12:11:00+09:00',
  '2023-12-14T19:17:46+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for toyosu-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-05.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-06.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-07.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-08.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-04.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-03.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-01.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/toyosu-park-02.jpg', NULL, 7);

-- FAQs for toyosu-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'どんな夜景が楽しめますか？', '海沿いに晴海エリアのタワーマンションを眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), 'デート向けの夜景スポットですか？', '公園内は落ち着いた明るさのライトが点灯しており、ゆっくり夜景を眺めることができるので、デートにオススメです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 増上寺 (zojyoji)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'zojyoji',
  '増上寺',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '増上寺',
  '新旧の対比が美しい東京タワーが見える無料の夜景スポット。',
  '<p>新旧の対比が美しい東京タワーが見える無料の夜景スポット</p>
<p>600年の歴史をもち、徳川家康公ゆかりの秘仏「黒本尊」を祀る「勝運」のお寺として親しまれている増上寺。</p>
<p>夜になると朱色に輝く東京タワーの麓に本堂がそびえ立っている姿を眺めることができます。</p>
<p>世代を超えた新旧の対比は一見の価値ありです。東京タワー周辺に訪れた際はぜひ立ち寄ってみてください。</p>',
  '東京都港区芝公園4-7-35',
  'https://www.zojoji.or.jp/',
  '増上寺公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営地下鉄三田線「御成門駅」から徒歩3分</li>
<li>都営地下鉄三田線「芝公園」から徒歩3分</li>
<li>都営地下鉄浅草線・大江戸線「大門駅から徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="増上寺の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.785240243351!2d139.74611301609008!3d35.657662488869896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbe91676c0b%3A0x88a4a86ddb1dbd24!2z5aKX5LiK5a-6!5e0!3m2!1sja!2sjp!4v1674661667987!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  4,
  2,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/zojoji-temple-02.jpg',
  true,
  '2023-03-18T10:39:28+09:00',
  '2023-03-18T10:39:28+09:00',
  '2024-02-10T16:06:15+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for zojyoji
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/zojoji-temple-02.jpg', '増上寺と東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/zojoji-temple.jpg', '増上寺と東京タワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-4.jpg', 'クリスマス特別ライトアップで輝く東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/zojo-temple-01.jpg', '増上寺の石柵と東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/zojo-temple-02.jpg', '安国殿と東京タワー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-3.jpg', 'クリスマス特別ライトアップで輝く東京タワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-tower-1.jpg', '増上寺と東京タワー（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-1-1.jpg', '芝公園一号地とザ・プリンス パークタワー東京', 7);

-- FAQs for zojyoji
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), 'どんな夜景が楽しめますか？', '増上寺と東京タワーの共演を眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), '増上寺の入園料はいくらですか？', '参詣は無料だが、大殿本堂の地下にある宝物展示室の入館料は有料です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zojyoji'), '増上寺は夜でも入ることができますか？（何時まで入れる？）', '境内へはいつでも入ることが可能です。ただし本堂の参拝は午前6時から午後5時半まで、安国殿の参拝は午前9時から午後5時までとなっています。', 2);

-- Post: 東京国際フォーラム ガラス棟 (tokyo-international-forum)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyo-international-forum',
  '東京国際フォーラム ガラス棟',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '東京国際フォーラム ガラス棟',
  '宇宙船のような館内が美しい無料夜景スポット。7階に展望ラウンジがありトレインビューも楽しめる。',
  '<p>有楽町駅前に聳え立つ、ユニークな形状が特徴の東京国際フォーラム。</p>
<p>全長207m、高さ60mの館内は天井まで吹き抜けており、スロープが最上階まで続いています。宇宙船のような館内はとてもフォトジェジックでSNS映え間違いなし。</p>
<p>ポートレート写真撮影のロケ地にも頻繁に使われており、訪れるとカメラを持った方やモデルを多数見かけます。</p>
<p>ガラス棟の最上階である７階の最北端にはラウンジがあり、全面ガラス貼りの窓際まで近寄ってみると、東京駅周辺の街並みを眺めること可能。</p>
<p>遅くまで営業しており、無料で立ち入ることができるのも嬉しいポイントです。</p>',
  '東京都千代田区丸の内 3-5-1',
  'https://www.t-i-forum.co.jp/',
  '東京国際フォーラム公式サイト',
  'https://twitter.com/T_I_Forum_PR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  '東京国際フォーラムTwitterアカウント',
  NULL,
  NULL,
  '7：00 ~ 23：30',
  '年中無休',
  '無料',
  '<ul>
<li>JR山手線「有楽町駅」より徒歩1分</li>
<li>JR山手線「東京駅」より徒歩5分 </li>
<li>丸ノ内線「銀座駅」より徒歩5分</li>
</ul>',
  '<ul>
<li>7：00～23：30 年中無休</li>
<li>普通乗用車：200円/30分</li>
<li>オートバイ：100円/60分</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.042089483433!2d139.7637532!3d35.6767429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfabc68fde1%3A0xc4ca6a002ded263d!2z5p2x5Lqs5Zu96Zqb44OV44Kp44O844Op44Og!5e0!3m2!1sja!2sjp!4v1689037465899!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3.5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-3.jpg',
  true,
  '2023-07-11T10:27:21+09:00',
  '2023-07-11T10:27:21+09:00',
  '2024-03-12T17:21:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for tokyo-international-forum
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-3.jpg', '先進的なデザインの東京国際フォーラム', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-2.jpg', '1Fから7Fまで吹き抜けの東京国際フォーラム', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-01.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-02.jpg', '東京国際フォーラムの展望ラウンジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-03.jpg', '展望ラウンジから眺める東京駅周辺の町並み', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-International-forum-1.jpg', '東京国際フォーラムの外観', 5);

-- FAQs for tokyo-international-forum
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), 'どんな夜景が楽しめますか？', '東京駅周辺の街並みやトレインビューを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), '東京国際フォーラムの展望フロアは何階にありますか？', '最上階である7階の最北端にあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-international-forum'), '東京国際フォーラムガラスの設計を手掛けたのは誰ですか？', 'アメリカの建築家ラファエル・ヴィニオリ氏によって設計されました。', 2);

-- Post: 丸の内KITTE 4F 旧東京中央郵便局長室 (former-tokyo-central-post-office)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'former-tokyo-central-post-office',
  '丸の内KITTE 4F 旧東京中央郵便局長室',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '旧東京中央郵便局長室',
  '東京駅を間近に眺められる隠れた夜景スポット。クラシカルな雰囲気も相まって明治時代にタイムスリップしたような感覚を味わえます。',
  '<p>丸の内KITTEの4階にある旧東京中央郵便局長室。</p>
<p>1930年代の旧東京郵便局長室の内装が再現された場所で無料で観覧することができます。</p>
<p>机の背後にある大きな窓の先には東京駅を一望できる景色が広がっています。</p>
<p>クラシカルな雰囲気も相まって明治時代にタイムスリップしたような感覚を味わえる素敵な夜景スポットです。</p>
<p>同施設の6階には屋上展望台があるので、ぜひ合わせてお立ち寄りください。</p>',
  '東京都千代田区丸の内 2-7-2',
  'https://marunouchi.jp-kitte.jp/shop/floor/floor-6f.jsp',
  'フロアガイド/6F（レストラン KITTEガーデン）',
  'https://www.instagram.com/kittemarunouchi/',
  'KITTE丸の内公式インスタグラムアカウント',
  'https://nightscape.tokyo/article/tokyo-station-view-spot/',
  '東京駅が綺麗に見える夜景スポットを8つを紹介！フォトジェニックな赤レンガ駅舎を撮影しよう',
  '11:00-21:00 / 11:00-20:00（日祝）',
  'なし',
  '無料',
  '<ul>
<li>JR東京駅丸の内南口から徒歩約1分</li>
<li>JR京葉線「東京駅」から徒歩約3分</li>
<li>JR「有楽町駅」から徒歩約6分</li>
<li>千代田線「二重橋前駅」から徒歩約2分</li>
<li>三田線「大手町駅」から徒歩約4分</li>
</ul>',
  '<ul>
<li>丸の内パークイン</li>
<li>利用時間	6:00～23:00</li>
<li>0～3.5時間まで 30分ごとに￥400</li>
<li>3.5～6時間まで ￥2,800（固定）</li>
<li>6～9.5時間まで ￥2,800　＋30分ごとに￥400</li>
<li>9.5～24時間まで ￥5,600（固定）</li>
</ul>',
  '<iframe title="丸の内KITTE 4F 旧東京中央郵便局長室の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8845231141536!2d139.7625401152588!3d35.67984528019466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfa366cbd39%3A0x42f1079b3e4b097d!2z44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaF77yS5LiB55uu77yX4oiS77yS!5e0!3m2!1sja!2sjp!4v1673239826789!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  4,
  2.5,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-office-01.jpg',
  true,
  '2023-07-04T23:44:00+09:00',
  '2023-07-04T23:44:00+09:00',
  '2023-12-31T16:30:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for former-tokyo-central-post-office
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-office-01.jpg', '旧東京中央郵便局長室から眺める東京駅', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/kitte-office-02.jpg', '旧東京中央郵便局長室から眺める東京駅', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kitte-1.jpg', '旧東京中央郵便局長室の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kitte-4.jpg', '旧東京中央郵便局長室から眺める夕暮れ時の東京駅', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kitte-2.jpg', '旧東京中央郵便局長室の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kitte-3.jpg', '旧東京中央郵便局長室から眺める夕暮れ時の東京駅', 5);

-- FAQs for former-tokyo-central-post-office
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), 'どんな夜景が楽しめますか？', 'ライトアップされた東京駅や光まばゆい高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), '東京駅のライトアップは何時までやってますか？', 'ライトアップ時間は日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'former-tokyo-central-post-office'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: タワーホール船堀 展望台 (towerhall-funabori)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'towerhall-funabori',
  'タワーホール船堀 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'edogawa'),
  NULL,
  'タワーホール船堀 展望台',
  '東京を代表する東京スカイツリーの眺めが美しい無料の展望台。空気が澄んでいる日には富士山も眺められる。人の数も少なく落ち着いて夜景鑑賞するのにうってつけ。',
  '<p>江戸川区のランドマークとして親しまれているタワーホール船堀。</p>
<p>イベント会場、会議室、映画館などを擁する大規模複合施設で東京タワー、東京スカイツリーと並んで「都内三大タワー」の一つに数えられることもあります。</p>
<p>高さ115mの位置には回廊式の<a href="/article/observatory/">無料展望台</a>があり、都内全域を一望することが可能。無料でこれほどの景色が楽しめる展望台は都内でも貴重な存在です。</p>
<p>見どころは東京スカイツリーや東京タワー、富士山などを眺めることができる西側の景色。都会ならではの迫力のある景色が広がります。</p>
<p>東京スカイツリーの眺めは都内随一の美しさと言っても過言ではありません。遮るものがなく、スカイツリーの全景がくっきりと見えるのが魅力です。</p>
<p>なお三脚を使って撮影する場合は、直通エレベーターに乗る前に5階にある受付へ行き、許可証を受けとる必要があります。許可証の発行は無料なので、忘れずに立ち寄りましょう。</p>
<p>撮影目的で訪れる方は注意しましょう。</p>',
  '東京都江戸川区船堀 4-1-1',
  'https://www.towerhall.jp/facility/#tower',
  'タワーホール船堀 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '展望エレベーター運行時間：9：00 ~ 21：30',
  '年末年始',
  '無料',
  '<ul>
<li>都営新宿線「船堀駅」から徒歩約1分</li>
</ul>',
  '<ul>
<li>地下1・2階あわせて161台（有料）</li>
<li>最初の1時間が200円/以後1時間毎に100円</li>
</ul>',
  '<iframe title="タワーホール船堀 展望台の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.80370858!2d139.864865!3d35.6843654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601887d20080b3ef%3A0x2c4c3daa10048a19!2z44K_44Ov44O844Ob44O844Or6Ii55aCA!5e0!3m2!1sja!2sjp!4v1677420230491!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '103m',
  '<div class="l-bottom-medium"> <iframe width="560" height="315" src="https://www.youtube.com/embed/XOsxjlf9M2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/xNjInPWnkns?si=gpDftoPnbQH5yyvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>',
  NULL,
  NULL,
  null,
  null,
  4.6,
  2.8,
  3.8,
  4.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-mt-fuji-01.jpg',
  true,
  '2023-02-26T23:07:21+09:00',
  '2023-02-26T23:07:21+09:00',
  '2026-01-27T09:01:45+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for towerhall-funabori
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-mt-fuji-01.jpg', 'タワーホール船堀から眺める富士山と東京都内の景色', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-skytree.jpg', '東京スカイツリーと黄昏時の空', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/unabori-buildings-02.jpg', '東京タワーと都内の高層ビル群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tower-hall-funabori-sunset.jpg', 'タワーホール船掘から眺める夕焼け', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-skytree-detail.jpg', '東京スカイツリーと黄昏時の空', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-mt-fuji-02.jpg', '富士山とレインボーブリッジ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-arakawa-river.jpg', '荒川に架かる小松川橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/unabori-buildings-disney-land.jpg', 'タワーホール船堀から見える東京ディズニーランド', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-kasai-park.jpg', 'タワーホール船堀から眺める葛西臨海公園の観覧車', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-nightview.jpg', 'タワーホール船堀から千葉方面の望む', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-observation.jpg', 'タワーホール船堀の展望室の雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-observation-1.jpg', 'タワーホール船堀の展望室専用エレベーター', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/towerha-ll-funabori-entire.jpg', 'タワーホール船堀の外観', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tower-holl-funabori-3.jpg', 'タワーホール船堀からの景色', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tower-holl-funabori-2.jpg', 'タワーホール船堀からの景色', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tower-holl-funabori-1.jpg', 'タワーホール船堀からの景色', 15);

-- FAQs for towerhall-funabori
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'どんな夜景が楽しめますか？', '荒川越しに東京都内の高層ビル群や東京タワー、東京スカイツリーなどを眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), 'タワーホール船堀展望台へはどのようにアクセスすることが出来ますか？', '7階にある展望室の直通エレベーターでアクセスすることが出来ます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'towerhall-funabori'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。ただし、事前に5Fの総合受付に行き、申請書を記入する必要があります。', 2);

-- Post: 芝浦南ふ頭公園運動広場・かいがんぱ～く (shibaura-futo-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shibaura-futo-park',
  '芝浦南ふ頭公園運動広場・かいがんぱ～く',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '芝浦南ふ頭公園運動広場・かいがんぱ～く',
  'レインボーブリッジを真下から眺められる穴場スポット。車の中から夜景を眺めるのもおすすめです。',
  '<p>2008年にレインボーブリッジの橋脚下に作られた芝浦南ふ頭公園運動広場・かいがんぱ～く。</p>
<p>ライトアップされたレインボーブリッジを真下から眺めることができる珍しい夜景スポットです。</p>
<p>雰囲気も良く、デートコースとして利用するのにもおすすめです。</p>',
  '東京都港区海岸 3-33-20',
  'https://www.city.minato.tokyo.jp/shisetsu/sport/sport/03.html',
  '芝浦南ふ頭公園運動広場・かいがんぱ～く | 港区ホームページ',
  NULL,
  NULL,
  NULL,
  NULL,
  '8:00～21:00',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線「芝浦ふ頭駅」から徒歩約5分</li>
</ul>',
  '<ul>
<li>レインボーブリッジ駐車場</li>
<li>1時間毎¥300</li>
<li>東京都港区海岸3丁目33-19</li>
</ul>',
  '<iframe title="芝浦南ふ頭公園運動広場・かいがんぱ～くの地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.615890645137!2d139.75770686525755!3d35.63719468020449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a3a89b6a3c3%3A0x76f2e63d90619c3c!2z6Iqd5rWm5Y2X44G16aCt5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1678555810622!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.5,
  3,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-5.jpg',
  true,
  '2023-03-12T02:38:56+09:00',
  '2023-03-12T02:38:56+09:00',
  '2024-09-21T20:31:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for shibaura-futo-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-5.jpg', '芝浦南ふ頭公園運動広場・かいがんぱ～くの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/kaigan-park-2.jpg', 'レインボーカラーに輝くレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-1.jpg', '芝浦南ふ頭公園運動広場・かいがんぱ～くの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-3.jpg', '真下から眺めるレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-4.jpg', '晴海エリアのタワーマンション群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-futo-2.jpg', '真下から眺めるレインボーブリッジ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/kaigan-park-1.jpg', 'レインボーカラーに輝くレインボーブリッジ', 6);

-- FAQs for shibaura-futo-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'どんな夜景が楽しめますか？', 'レインボーブリッジをましたから眺めることができます。また対岸に晴海エリアのタワーマンション群やお台場の眺望も広がります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), 'レインボーブリッジのライトアップは何時まで点灯していますか？', 'レインボーブリッジは日没から24時までライトアップされています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-futo-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 日比谷濠 (hibiyabori)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'hibiyabori',
  '日比谷濠',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '日比谷濠',
  '東京を代表するリフレクションが美しい夜景スポット',
  '<p>祝田橋から馬場先門までの間にある濠で、皇居の外側を囲むようにして造られているの日比谷濠（ひびやぼり）。</p>
<p>風が穏やかな日には丸の内や日比谷の街並みのリフレクション（水鏡）を眺めることができ、多くの観光客の方が写真撮影を楽しむ姿が見られます。</p>
<p>夜に実施されている塀のライトアップも見ものです。</p>
<p>東京駅周辺を訪れた際にぜひお立ち寄りください。</p>',
  '東京都千代田区皇居外苑１',
  'https://ja.wikipedia.org/wiki/%E6%97%A5%E6%AF%94%E8%B0%B7%E6%BF%A0',
  '日比谷濠 | wikipedia',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線、東京メトロ千代田線、都営三田線「日比谷駅」Ｂ２出口から徒歩3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="日比谷濠の位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.15257001718!2d139.7593279!3d35.6760628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bac7edca7eb%3A0xbf1d55276a7a21a3!2z5pel5q-U6LC35r-g!5e0!3m2!1sja!2sjp!4v1688520523123!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.5,
  3.6,
  2.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-4.jpg',
  true,
  '2023-07-05T10:42:03+09:00',
  '2023-07-05T10:42:03+09:00',
  '2024-01-09T01:12:01+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for hibiyabori
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-4.jpg', '日比谷濠から撮影したリフレクション写真', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-1.jpg', '日比谷濠から撮影したリフレクション写真', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-3.jpg', '日比谷濠から撮影した大手町方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-2.jpg', '日比谷濠の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiyabori-5.jpg', '日比谷濠の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiyabori-1.jpg', '日比谷濠から撮影したリフレクション（昼）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hibiyabori-2.jpg', '日比谷濠から撮影したリフレクション（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hibiyabori-image-1.jpg', '日比谷濠から眺める東京ミッドタウン日比谷', 7);

-- FAQs for hibiyabori
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), 'どんな夜景が楽しめますか？', 'お堀に高層ビル群のリフレクションが映る光景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), '日比谷濠の読み方を教えてください', '「ひびやぼり」と読みます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiyabori'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 浅草寺 (sensoji)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'sensoji',
  '浅草寺',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '浅草寺',
  '夜の散歩が楽しい浅草を代表する観光スポット。仲見世通りのシャッターに描かれた浅草絵巻も見どころ。ライトアップは23時頃までと遅くまで実施されている。',
  '<p>誕生から1400年以上の歴史を持つ浅草を代表する観光スポットの浅草寺。</p>
<p>国際都市・浅草のイメージアップのために2003年から毎日ライトアップが実施されており幻想的な光景を楽しむことができます。</p>
<p>仲見世通りの店舗は18：30〜19：00頃に閉まるため、比較的落ち着いて夜景鑑賞ができるのも良い点。</p>
<p>仲見世通りのシャッターに描かれた「浅草絵巻」も見どころです。</p>
<p>東京スカイツリーや浅草へ観光に訪れた際は、ぜひ夜に境内を散歩してみてはいかがでしょうか？</p>',
  '東京都台東区浅草2-3-1',
  'https://www.senso-ji.jp/',
  '聖観音宗 浅草寺 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武スカイツリーライン：浅草駅より徒歩5分</li>
<li>東京メトロ銀座線：浅草駅より徒歩5分</li>
<li>つくばエクスプレス：浅草駅より徒歩5分</li>
<li>都営地下鉄浅草線：浅草駅A4出口より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.613959585798!2d139.79185948885498!3d35.7111163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6db068cd1%3A0xd9a856805c8012bd!2z5rWF6I2J5a-6IOmiqOmbt-elnumWgA!5e0!3m2!1sja!2sjp!4v1688718074978!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  4,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-2.jpg',
  true,
  '2023-07-07T17:23:11+09:00',
  '2023-07-07T17:23:11+09:00',
  '2025-03-03T20:15:27+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for sensoji
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-2.jpg', 'ライトアップされた宝蔵門と五重塔', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-1.jpg', 'ライトアップされた雷門・風雷神門', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-2.jpg', 'ライトアップされた五重塔', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-1.jpg', '仲見世通りのシャッターに描かれた「浅草絵巻」', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-temple-03.jpg', 'ライトアップされた雷門・風雷神門', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-3.jpg', 'ライトアップされた観音堂（本堂）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-sky-tree.jpg', '観音堂（本堂）と東京スカイツリー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-3.jpg', 'ライトアップされた雷門・風雷神門', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-5.jpg', 'ライトアップされた五重塔', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusabunka-terrace-01.jpg', '浅草寺の雷門と仲見世通り', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-1.jpg', 'ウィングインターナショナルセレクト浅草駒形から見える浅草寺', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-sakura-01.jpg', '仲見世通りと満開の桜', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-temple-04.jpg', '浅草寺の「小舟町」の大提灯', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-sakura-02.jpg', '宝蔵門と満開の桜', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sensoji-temple-01.jpg', '多くの観光客で賑わう仲見世通り', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/asakusa-sakura-03.jpg', '浅草寺と満開の桜', 15);

-- FAQs for sensoji
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), 'どんな夜景が楽しめますか？', '雷門、五重塔、宝蔵門、観音堂などのライトアップを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), '浅草寺のライトアップは何時まで実施されていますか？', '浅草寺のライトアップが行われるのは、日没後から23時ごろまでです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), '東京スカイツリーのライトアップは何時まで実施されていますか？', '日没から24時頃までライトアップは実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sensoji'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 駒形橋東詰交差点 (komagatabashi-bridge-intersection)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'komagatabashi-bridge-intersection',
  '駒形橋東詰交差点',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '駒形橋東詰交差点',
  '街に溶け込む東京スカイツリーを眺められる穴場夜景スポット',
  '<p>隅田川にかかる駒形橋（こまがたばし）の東側にある駒形橋東詰交差点。</p>
<p>約2kmほど先にある<a href="https://nightscape.tokyo/sumida/tokyo-sky-tree/">東京スカイツリー</a>を一望することができる隠れた夜景スポットです。</p>
<p>スカイツリーが街に溶け込んでいる様子が美しく、交差点を行き交う車の光跡を捉えると迫力のある夜景写真が撮影できます。</p>
<p>なおこの夜景スポットにはいつ行っても綺麗に整備されている花壇（フラワーコーナー）があり、季節の花を楽しめるのも魅力です。</p>',
  '東京都墨田区東駒形 1丁目',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.tokyo-skytree.jp/',
  '東京スカイツリー公式サイト',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営浅草線「本所吾妻橋駅」から徒歩約4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="駒形橋東詰交差点の地図・場所" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d258.9473356808724!2d139.7998262493862!3d35.70646100492268!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1688785902253!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  2.6,
  2.6,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/komagatabashi-bridge-intersection-04.jpg',
  true,
  '2023-07-08T12:21:48+09:00',
  '2023-07-08T12:21:48+09:00',
  '2023-12-31T13:48:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for komagatabashi-bridge-intersection
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/komagatabashi-bridge-intersection-04.jpg', '駒形橋東詰交差点から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/komagatabashi-bridge-intersection-01.jpg', '東京スカイツリーの麓と歩道橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/komagatabashi-bridge-intersection-02.jpg', '駒形橋東詰交差点から眺める東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/komagatabashi-bridge-intersection-03.jpg', '東京スカイツリーの先端', 3);

-- FAQs for komagatabashi-bridge-intersection
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), 'どんな夜景が楽しめますか？', 'スラっと伸びる道路に先にそびえ立つライトアップされた東京スカイツリーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), '東京スカイツリーは何時までライトアップされていますか？', '東京スカイツリーの点灯時間は日没~24時までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagatabashi-bridge-intersection'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 三井ガーデンホテル豊洲プレミア (mitsuitoyosu-premier)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'mitsuitoyosu-premier',
  '三井ガーデンホテル豊洲プレミア',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '三井ガーデンホテル豊洲プレミア',
  'ウォーターフロントの美しい夜景を堪能できるコスパ抜群ホテル。富士山とレインボーブリッジの共演は圧巻の一言。36階には展望室があるため、宿泊客であれば誰でもレインボーブリッジ側の眺望を楽しめる。',
  '<p>豊洲駅直結、豊洲ベイサイドクロスの33階〜36階に入居する三井ガーデンホテル豊洲プレミア。</p>
<p>東京湾方面の景観が非常に美しく、黄昏時には富士山やレインボーブリッジ、晴海エリアのタワーマンション群などを共演を堪能することが出来ます。</p>
<p>客室の眺望は4方向に分かれているので東京湾方面の部屋に宿泊することが出来ない可能性もありますが、36階には展望室があるので、誰でも東京湾方面を眺めることが可能です。</p>
<p>豊洲市場直送の食材を味わえるレストランや宿泊者限定の大浴場もあり、非常にリラックスできるホテルなので豊洲周辺で宿泊したい方は是非チェックしてみて下さい。</p>',
  '東京都江東区豊洲 2-2-1',
  'https://www.gardenhotels.co.jp/toyosu-premier/',
  '三井ガーデンホテル豊洲プレミア 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '公式サイトを参照',
  '<ul>
<li>東京メトロ有楽町線「豊洲駅」直結</li>
<li>ゆりかもめ線「豊洲駅」直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="三井ガーデンホテル豊洲プレミアの地図・場所" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25930.94022842242!2d139.76150979596125!3d35.66795134774827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF44CB44CSMTAwLTAwMDUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65Li444Gu5YaF77yR5LiB55uu!3m2!1d35.6812362!2d139.7671248!4m5!1s0x6018894ebbf47da7%3A0xc4f4a893879caa6e!2z5LiJ5LqV44Ks44O844OH44Oz44Ob44OG44Or6LGK5rSy44OZ44Kk44K144Kk44OJ44Kv44Ot44K544CB44CSMTM1LTAwNjEg5p2x5Lqs6YO95rGf5p2x5Yy66LGK5rSy77yS5LiB55uu77yS4oiS77yR!3m2!1d35.6548671!2d139.79469!5e0!3m2!1sja!2sjp!4v1605414622195!5m2!1sja!2sjp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/3oH3IoLshNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.5,
  4,
  4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-5.jpg',
  true,
  '2023-03-11T08:47:35+09:00',
  '2023-03-11T08:47:35+09:00',
  '2025-03-08T23:01:57+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for mitsuitoyosu-premier
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-5.jpg', '三井ガーデンホテル豊洲プレミアの客室からの眺望', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosua-1.jpg', '晴海エリアのタワーマンション群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-3.jpg', '夕暮れ時の富士山', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-2.jpg', 'ライトアップされるレインボーブリッジと富士山', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-4.jpg', '富士山と晴海エリアのタワーマンション群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-6.jpg', '有明方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-8.jpg', '36階にあるレストランフロアの雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-1.jpg', '三井ガーデンホテル豊洲プレミアの客室', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosu-9.jpg', '36階のフロントに併設された展望室', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mitsui-garden-toyosua-3.jpg', '三井ガーデンホテル豊洲プレミアの客室からの眺望', 9);

-- FAQs for mitsuitoyosu-premier
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), 'どんな夜景が楽しめますか？', 'ライトアップされるレインボーブリッジ、東京湾を行き交う船、光量の多いタワーマンション群の明かりなどを眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), '三井ガーデンホテル豊洲プレミアのチェックイン・チェックアウト時間は何時ですか？', 'チェックイン 15：00、チェックアウト 11：00となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), '東京湾方面の景色は誰でも眺めることが出来ますか？', '36階の展望室や大浴場から眺めることが可能です。', 2);

-- Hotel info for mitsuitoyosu-premier
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'mitsuitoyosu-premier'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178674%2F178674.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fmitsui-garden-toyosu-bayside-cross-tokyo.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad304890%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00002756%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: 台場公園・第三台場史蹟公園 (daisandaiba)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'daisandaiba',
  '台場公園・第三台場史蹟公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '台場公園・第三台場史蹟公園',
  'レインボーブリッジを間近に眺められる穴場の無料夜景スポット。特別ライトアップが実施される12月に訪れるのがおすすめ。',
  '<p>江戸時代末期、ペリーの黒船来航に備えて築かれた砲台の跡地で、国の史跡にも認定されている台場公園。</p>
<p>ライトアップされたレインボーブリッジを間近に眺めることができる、カメラマンに人気の公園です。</p>
<p>デックス東京ビーチやアクアシティお台場などが見える南側も賑やかな明かりの夜景が美しく見どころが複数あります。</p>
<p>街灯が少なく夜になると周りがとても暗くなるため、夜景鑑賞や撮影目的で訪れる際は懐中電灯の持参がおすすめ。</p>',
  '東京都港区台場 1-10',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.tptc.co.jp/park/01_01/history',
  'お台場海浜公園 & 台場公園 | 海上公園ナビ',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線 「お台場海浜公園駅」から徒歩約15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="台場公園・第三台場史蹟公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.759598611347!2d139.76985341525747!3d35.633652580205336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a201baee00b%3A0x99e81aff061636cb!2z44CSMTM1LTAwOTEg5p2x5Lqs6YO95riv5Yy65Y-w5aC077yR5LiB55uu77yR77yQ!5e0!3m2!1sja!2sjp!4v1677765338322!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  2.5,
  2.5,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park-1.jpg',
  true,
  '2023-03-05T17:06:18+09:00',
  '2023-03-05T17:06:18+09:00',
  '2024-01-01T12:08:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for daisandaiba
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park-1.jpg', '台場公園第三台場から眺めるレインボーブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park-2.jpg', '台場公園第三台場から眺めるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3rd-8.jpg', 'デックス東京ビーチとアクアシティお台場', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3rd-4.jpg', '台場公園第三台場から眺めるレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3rd-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3rd-7.jpg', '港区方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3rd-2.jpg', '台場公園の雰囲気', 6);

-- FAQs for daisandaiba
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'どんな夜景が楽しめますか？', '大迫力のレインボーブリッジや東京タワーを眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', '日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daisandaiba'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 大丸東京店 12F 展望フロア (daimaru-tokyo)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'daimaru-tokyo',
  '大丸東京店 12F 展望フロア',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '大丸東京店 12F 展望フロア',
  'レストラン街の一角にある穴場夜景スポット。東京駅を真上から見下ろせる眺めが見どころ。',
  '<p>東京駅と直結した商業施設の大丸 東京店。</p>
<p>12階にあるレストランフロアの一角に休憩所が設けられており、ガラス越しに東京駅・丸ノ内方面の夜景を観賞できます。</p>
<p>真上から東京駅を見下ろすことができる眺望はとても珍しく、丸の内方面の高層ビル群の美しさも素晴らしいです。</p>
<p>展望エリアは明るく、窓ガラスに明かりが反射するので夜景が見にくいのが残念なところですが、ショッピングや食事の帰りにちょっと立ち寄ってみるのがおすすめ。</p>',
  '東京都千代田区丸の内1-9-1',
  'https://www.daimaru.co.jp/tokyo/floor/12f.html',
  '大丸東京店 フロアガイド',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00～22:00',
  'なし',
  '無料',
  '<ul>
<li>JR山手線 「東京駅」八重洲北口 徒歩約1分</li>
<li>東京メトロ丸ノ内線「東京駅」徒歩約5分</li>
</ul>',
  '<ul>
<li>東京駅八重洲パーキング 西駐車場・東駐車場</li>
<li>丸の内パークイン</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.815000753823!2d139.76445543566587!3d35.68155697421908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfeba8313b7%3A0xed9bfc268f8f7718!2z5aSn5Li4IOadseS6rOW6lw!5e0!3m2!1sja!2sjp!4v1678488179216!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  4,
  1.5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-4.jpg',
  true,
  '2023-03-11T07:58:00+09:00',
  '2023-03-11T07:58:00+09:00',
  '2023-12-26T12:14:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for daimaru-tokyo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-4.jpg', '東京駅と大手町の高層ビル群', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-1.jpg', '東京駅と大手町の高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-2.jpg', '東京駅と行幸通り', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-3.jpg', '東京駅と大手町の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/daimaru-5.jpg', '大丸東京店 12F 展望フロアの雰囲気', 4);

-- FAQs for daimaru-tokyo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'どんな夜景が楽しめますか？', '東京駅や行幸通り、丸の内方面の高層ビル群を眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), '大丸 東京店の展望フロアはどこにありますか？', '12階レストランフロア・免税カウンターのすぐそばにあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daimaru-tokyo'), 'いつ訪れるのがおすすめですか？', '平日がおすすめです。丸の内方面の高層ビル群の明かりが眩しく、迫力のある夜景を楽しむことが出来ます。', 2);

-- Post: レインボーブリッジ遊歩道（プロムナード） (rainbow-bridge-promenade)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'rainbow-bridge-promenade',
  'レインボーブリッジ遊歩道（プロムナード）',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'レインボーブリッジ遊歩道（プロムナード）',
  'レインボーブリッジを歩いて渡ることができる穴場スポット。全長1.7キロメートルの遊歩道は徒歩20~30分で渡ることが可能です。',
  '<p>東京を代表するランドマークのレインボーブリッジ。</p>
<p>遊歩道が整備されおり、東京のウォーターフロントの景色を眺めながら歩いて渡ることができるようになっています。</p>
<p>2ルートが用意されており、それぞれ下記のような見どころがあります。</p>
<dl>
<dt>ノースルート</dt>
<dd>東京タワー、スカイツリー、晴海エリアのタワーマンション群</dd>
<dt>サウスルート</dt>
<dd>レインボーブリッジのループ橋、デックス東京ビーチやアクアシティお台場、フジテレビ</dd>
</dl>
<p>全長1.7キロメートルの遊歩道は徒歩20~30分で渡ることが可能。道の途中に複数の展望スペースがあるので、景観を楽しみながら散歩してみてはいかがでしょうか？</p>',
  '東京都港区海岸 3-33-19',
  'https://visit-minato-city.tokyo/ja-jp/places/701',
  'レインボープロムナード | 港区観光協会',
  NULL,
  NULL,
  NULL,
  NULL,
  '<ul><li>4月1日～10月31日　午前9時から午後9時まで(最終入場は閉館の30分前) </li><li>11月1日～3月31日　午前10時から午後6時(最終入場は閉館の30分前)　 </li></ul>',
  '毎月第三月曜日 ※祝日にあたる時はその翌日',
  '無料',
  '<ul>
<li>ゆりかもめ線「芝浦ふ頭駅」から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="レインボーブリッジ遊歩道（プロムナード）の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12970.355211941456!2d139.7591054!3d35.6378623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018898e13cf3059%3A0x137ff10ff7670de8!2z44Os44Kk44Oz44Oc44O844OW44Oq44OD44K46YGK5q2p6YGT!5e0!3m2!1sja!2sjp!4v1678553725051!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.2,
  2.5,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-night-01.jpg',
  true,
  '2023-03-12T02:13:57+09:00',
  '2023-03-12T02:13:57+09:00',
  '2024-01-01T12:05:53+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for rainbow-bridge-promenade
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-night-01.jpg', 'ライトアップされるレインボーブリッジ（ノースルート）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-night-02.jpg', 'ライトアップされる東京タワー（ノースルート）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-night-03.jpg', 'ライトアップされるレインボーブリッジ（ノースルート）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-4.jpg', 'レインボーブリッジ遊歩道の中腹にある撮影ポイント（サウスルート）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-3.jpg', 'レインボーブリッジのループ橋（サウスルート）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-promenade-2.jpg', 'レインボーブリッジ遊歩道（サウスルート）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-roon-1.jpg', 'レインボーブリッジ遊歩道（ノースルート）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-roon-2.jpg', 'レインボーブリッジ遊歩道（ノースルート）', 7);

-- FAQs for rainbow-bridge-promenade
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道のサウスルートはどんな景色を眺めることが出来ますか？', 'ライトアップされたレインボーブリッジや東京タワー、東京スカイツリー、迫力のある高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道のサウスルートはどんな景色を眺めることが出来ますか？', 'レインボーブリッジのループ橋やデックス東京ビーチやアクアシティお台場などを眺めることが出来ます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道を渡るならサウスルートとノースルート、どちらがおすすめ？', 'ノースルートがおすすめです。東京らしい迫力のある夜景を眺めることができるからです。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道は歩いて渡る場合の所要時間はどれくらい？', '芝浦側出入口から台場側出入口まで1.7キロメートルとなっており、徒歩で20～30分程度で渡り切ることが出来ます。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道を渡るのにお金はかかりますか？', 'レインボーブリッジ遊歩道は無料で渡ることが出来ます。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'rainbow-bridge-promenade'), 'レインボーブリッジ遊歩道は自転車で渡ることは可能ですか？', 'レインボーブリッジ遊歩道は徒歩のみで渡ることが可能です。', 5);

-- Post: 行幸通り (gyoko-street)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'gyoko-street',
  '行幸通り',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '行幸通り',
  '東京駅を真正面から眺めることができる無料の夜景スポット。四季折々の表情が楽しめるのも魅力。',
  '<p>東京駅丸の内中央口から皇居前内堀通りを結ぶ長さ190mの行幸通り（ぎょうこうどおり）。</p>
<p>名前は天皇が行幸（外出）するために利用した道路から由来しているそう。</p>
<p>美しく整備された道の先にはライトアップされた東京駅、そして両脇には千代田区を象徴する高層ビルを眺めることができます。</p>
<p>ウェデイングフォトの撮影スポットとしても人気で平日・休日問わず、新郎新婦がドレスやタキシードを着て写真撮影する光景もよく見かけます。</p>
<p>年を通して様々な景観が楽しめるのも大きな魅力で、春から夏にかけては新緑が眩しく、秋にはイチョウが黄色に色づきます。冬に実施されるイルミネーションイベント「東京ミチテラス」も見もの。</p>
<p>東京駅を訪れた際はぜひ立ち寄ってみてください。</p>',
  '東京都千代田区丸の内 2-2',
  'https://visit-chiyoda.tokyo/app/spot/detail/304',
  '行幸通り | 千代田区観光協会',
  NULL,
  NULL,
  'https://www.tokyo-michiterasu.jp/',
  '東京ミチテラス',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>各線「東京駅」丸の内中央口より徒歩1分</li>
<li>東京メトロ千代田線「二重橋前駅」より徒歩3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="行幸通りの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.007788242356!2d139.76375227257867!3d35.682169973923166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf9c5a6edbb%3A0xb3c113e0abd4fa34!2z6KGM5bm46YCa44KK!5e0!3m2!1sja!2sjp!4v1688516589757!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  5,
  5,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-04.jpg',
  true,
  '2023-07-05T09:28:44+09:00',
  '2023-07-05T09:28:44+09:00',
  '2023-12-31T16:31:45+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for gyoko-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-05.jpg', '行幸通りから眺めるライトアップされた東京駅', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-01.jpg', '道路越しに見えるライトアップされた東京駅', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-04.jpg', '行幸通りから眺めるライトアップされた東京駅', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-03.jpg', 'ライトアップされた東京駅とKITTE丸の内', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/gyoko-street-02.jpg', '東京駅と光まばゆい高層ビル群の灯り', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gyoko-street-7.jpg', '行幸通りから眺める丸の内ビルディング', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gyoko-street-1.jpg', '行幸通りから眺める夕日', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gyoko-street-6.jpg', '行幸通りに植えられたイチョウの木', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gyoko-street-5.jpg', '夕暮れ時の東京駅', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gyoko-street-4.jpg', '夕暮れ時の東京駅', 9);

-- FAQs for gyoko-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), '行幸通りの読み方を教えてください。', '「ぎょうこうどおり」と読みます。天皇が行幸（外出）するために利用した道路から由来しています。正式名称は「東京都道404号皇居前東京停車場線」です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), '東京駅のライトアップは何時までやってますか？', 'ライトアップ時間は日没から21時までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gyoko-street'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 品川シーズンテラス (shinagawa-season-terrace)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shinagawa-season-terrace',
  '品川シーズンテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '品川シーズンテラス',
  'ドラマのロケ地にも登場する東京タワーが見える無料夜景スポット。雰囲気がとてもよくデートの利用におすすめ。',
  '<p>2015年開業の高さ144mの超高層ビル、品川シーズンテラス。</p>
<p>2階には都会のオアシスをコンセプトに作られた広々とした緑化広場があり、のんびりと寛ぐことができます。</p>
<p>一番の見所は広場入口付近にある人工池。左右にはライトアップされた並木があり視線の先に東京タワーを眺めることが出来ます。</p>
<p>この景観はドラマのロケ地にも使用されており、見かけたことがある方も多いはず。</p>
<p>その他エリアも程よい明るさのフットライトが点灯しており、非常に雰囲気が良いのでデートにおすすめです。</p>',
  '東京都港区港南 1-2-70',
  'https://sr.shinagawa-st.jp/',
  '品川シーズンテラス公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '7:00～23:00',
  'なし',
  '無料',
  '<ul>
<li>JR品川駅 港南口より徒歩6分</li>
<li>京浜急行電鉄品川駅 高輪口より徒歩9分</li>
</ul>',
  '<ul>
<li>最初の1時間600円、以降 300円 / 30分</li>
<li>最大料金	全日 2,400円</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.227069906907!2d139.743003!3d35.6324899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a4698d00001%3A0xaa170662be1ee67e!2z5ZOB5bed44K344O844K644Oz44OG44Op44K5!5e0!3m2!1sja!2sjp!4v1679229761155!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.4,
  4.2,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-5.jpg',
  true,
  '2023-03-19T21:55:34+09:00',
  '2023-03-19T21:55:34+09:00',
  '2024-07-29T14:49:31+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for shinagawa-season-terrace
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-5.jpg', '品川シーズンテラスから眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-4.jpg', 'ライトアップが美しい品川シーズンテラス', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-3.jpg', '品川シーズンテラスから眺める高層ビル群の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-2.jpg', 'ライトアップが美しい品川シーズンテラス', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-6.jpg', '品川シーズンテラスから眺める高層ビル群の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-1.jpg', '品川シーズンテラスの入口付近の様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-2-1.jpg', '品川シーズンテラスの雰囲気（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shinagawa-season-terrace-1-1.jpg', '品川シーズンテラスの雰囲気（昼）', 7);

-- FAQs for shinagawa-season-terrace
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), 'どんな夜景が楽しめますか？', '東京タワーや芝浦方面の高層ビル群を眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), '品川シーズンテラスが登場する主なドラマはなんですか？', '「東京タラレバ娘」や「逃げるは恥だが役に立つ」のロケ地に使用されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-season-terrace'), '東京タワーは何時までライトアップされていますか？', '東京タワーは日没から24時までライトアップされています。', 2);

-- Post: 春海橋公園 (harumibashi-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'harumibashi-park',
  '春海橋公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '春海橋公園',
  '晴海エリアのタワーマンション群を一望できる穴場の夜景スポット',
  '<p>ららぽーと豊洲やガスの科学館などの施設に隣接する春海橋公園。</p>
<p>美しく整備された公園からは大迫力の晴海エリアのタワーマンション群や晴海大橋を眺めることが出来ます。</p>
<p>日中は多くの家族連れで賑わう公園ですが、日が沈むと一気に人の数は減り、静かな場所に。</p>
<p>適度なライティングの落ち着いた雰囲気なので、ららぽーとので遊んだ後のデートコースに最適です。</p>',
  '東京都江東区豊洲２丁目３',
  'https://www.tptc.co.jp/park/02_02',
  '春海橋公園 | 海上公園ナビ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>メトロ有楽町線「豊洲駅」徒歩約3分</li>
<li>ゆりかもめ「豊洲駅」から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.955131423724!2d139.789900215258!3d35.65347708020083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018899892d75fd1%3A0x3232c8e5bd8ff505!2z5pil5rW35qmL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1680354734673!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3,
  3.6,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-03.jpg',
  true,
  '2023-03-02T01:10:00+09:00',
  '2023-03-02T01:10:00+09:00',
  '2025-03-08T09:54:24+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for harumibashi-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-03.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/toyosu-bridge-11.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-02.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-01.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/toyosu-bridge-10.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/toyosu-bridge-12.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-07.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-10.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-06.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-09.jpg', NULL, 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-05.jpg', NULL, 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/harumibashi-park-04.jpg', NULL, 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/toyosu-bay-.jpg', '春海橋公園から眺める景色（昼）', 12);

-- FAQs for harumibashi-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), 'どんな夜景が楽しめますか？', '大迫力の晴海エリアのタワーマンション群や晴海大橋、レインボーブリッジなどを眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), '夜景スポットの雰囲気はデート向けですか？', '雰囲気が良い場所なので、デートにもおすすめです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumibashi-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: アーバンドック ららぽーと豊洲 (urban-doc-toyosu)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'urban-doc-toyosu',
  'アーバンドック ららぽーと豊洲',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  'アーバンドック ららぽーと豊洲',
  '高さ26mのクレーンがシンボルとなっている落ち着いた雰囲気の夜景スポット',
  '<p>豊洲にある大型商業施設であるアーバンドック ららぽーと豊洲。</p>
<p>かつて石川島播磨重工業の造船所があった場所で、中庭には名残として高さ26mクレーンが残っています。</p>
<p>夜にはクレーンが様々な色にライトアップが実施されるのに加え、晴海エリアのタワーマンションやレインボーブリッジなどのシンボルもあり、美しい夜景を眺めることが可能。</p>
<p>落ち着いた雰囲気で夜景を眺めることができるのでショッピングの帰りなどにぜひ立ち寄ってみてください。</p>',
  '東京都江東区豊洲２丁目４−９',
  'https://mitsui-shopping-park.com/lalaport/toyosu/',
  'アーバンドックららぽーと豊洲 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '中庭は終日立ち寄ることが可能（レストランは23:00まで）',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ豊洲駅2番出口直結</li>
<li>ゆりかもめ豊洲駅北口直結 </li>
</ul>',
  '<ul>
<li>駐車サービスあり</li>
<li>最初の60分無料、以降300円/30分</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6483.716896645686!2d139.792566!3d35.655859!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzIxLjEiTiAxMznCsDQ3JzMzLjIiRQ!5e0!3m2!1sja!2sus!4v1680356981771!5m2!1sja!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.5,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/04/raraport-toyosu-1-2.jpg',
  true,
  '2023-04-01T22:53:11+09:00',
  '2023-04-01T22:53:11+09:00',
  '2023-12-14T19:17:09+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for urban-doc-toyosu
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/raraport-toyosu-1-2.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-07.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-05.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-06.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-08.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-01.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-02.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-04.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'https://nightscape.tokyo/wp-content/uploads/2023/04/urbandoc-03.jpg', NULL, 8);

-- FAQs for urban-doc-toyosu
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'どんな夜景が楽しめますか？', '7色にライトアップされる高さ26mのクレーンや晴海エリアのタワーマンション群を眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), 'アーバンドック ららぽーと豊洲のクレーンは何時までライトアップされていますか？', '23時まで点灯されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'urban-doc-toyosu'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: マグネットバイ渋谷109 屋上展望台 CROSSING VIEW (shibuya-class)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shibuya-class',
  'マグネットバイ渋谷109 屋上展望台 CROSSING VIEW',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  'マグネットバイ渋谷109 屋上展望台 CROSSING VIEW',
  '1日最大50万人が通行する世界最大の交差点である渋谷スクランブル交差点や渋谷109を一望できる屋上展望台。スクランブル交差点を背景に自撮りができるクロッシングフォトも魅力。入場料はワンドリンク制でリーズナブル。',
  '<p>2018年にオープンしたMAGNET by SHIBUYA109。</p>
<p>スクランブル交差点の目の前にあるファッションビル「109MEN''S」を改築してできた商業施設です。</p>
<p>同ビルの屋上には天空をテーマにした展望台の「CROSSING VIEW」があります。</p>
<p>渋谷スクランブル交差点、そして視線の先には渋谷マークシティや渋谷109、渋谷フクラスなどを渋谷のランドマークを一望できます。</p>
<p>見どころはなんといってもスクランブル交差点。一回の青信号で3000人もの人々が行き来する光景はとても迫力があります。</p>
<p>入場には併設しているカフェでドリンク購入が必須ですが、展望台への入場料＋飲み物で600円〜となっており良心的な価格設定なのも嬉しいポイント。</p>
<p>また、カフェ利用客は頭上の高い位置に設置されたカメラから、スクランブル交差点を背景に自撮りができる「クロッシングフォト」も利用できるので一風変わった記念写真を撮るのも良いでしょう。</p>',
  '東京都渋谷区神南1-23-10',
  'https://www.shibuyaclass.com/',
  'スクカフェ by SHIBUYA CLASS 公式サイト',
  'https://magnetbyshibuya109.jp/shop/shibuya-mag8/',
  'CROSSING VIEW & ROOFTOP LOUNGE MAG8 | MAGNET by SHIBUYA109公式サイト',
  NULL,
  NULL,
  '10:00～22:00（）',
  '天候により不定休',
  '1,800円(1ドリンク付)',
  '<ul>
<li>渋谷駅「A12出口」より徒歩1分</li>
<li>渋谷駅「井の頭線西口」より徒歩3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="マグネットバイ渋谷109 屋上展望台の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6964800342034!2d139.700863!3d35.659848999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca80288771f%3A0xa89b6ab801fb3f17!2z44CSMTUwLTAwNDEg5p2x5Lqs6YO95riL6LC35Yy656We5Y2X77yR5LiB55uu77yS77yT4oiS77yS77yT4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1688650814928!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Bz4mpMwznY4?si=rBB3_vyIA6B5WEMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.5,
  3.6,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scrabble-1.jpg',
  true,
  '2023-07-06T22:56:02+09:00',
  '2023-07-06T22:56:02+09:00',
  '2025-08-25T15:45:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), (SELECT id FROM tags WHERE slug = 'scramble-intersection'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for shibuya-class
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scrabble-1.jpg', 'マグネット渋谷109 屋上展望台の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-01.jpg', 'マグネットバイ渋谷109 屋上展望台から眺めるSHIBUYA109', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-05.jpg', '渋谷マークシティと渋谷フクラスの夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-04.jpg', '渋谷マークシティの連絡通路', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-07.jpg', '夕暮れ時の渋谷の街並み', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-02.jpg', 'マグネットバイ渋谷109 屋上展望台の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-class-06.jpg', 'マグネットバイ渋谷109 屋上展望台の雰囲気から眺めるスクランブル交差点', 6);

-- FAQs for shibuya-class
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'マグネットバイ渋谷109 屋上展望台からはどんな夜景が楽しめますか？', '観光客に人気の渋谷スクランブル交差点や渋谷109などのランドマークを一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'マグネットバイ渋谷109 屋上展望台は入場料がかかりますか？', '入場料のかわりにドリンクを購入する必要があります。（600円〜）', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-class'), 'マグネットバイ渋谷109 展望台はどこにありますか？', 'MAGNET by SHIBUYA109の屋上にあります。エレベーターで7階まで上がりましょう。', 2);

-- Post: 渋谷スクランブルスクエア12F 展望フロア (shibuya-scramble-square-12f)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shibuya-scramble-square-12f',
  '渋谷スクランブルスクエア12F 展望フロア',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷スクランブルスクエア12F 展望フロア',
  '渋谷の街並みを2方向楽しめる穴場の無料夜景スポット。渋谷スクランブル交差点の眺めが見どころ。',
  '<p>2019年11月に開業した渋谷スクランブルスクエア。</p>
<p>同ビルの12階レストランフロアには東と南西に開けた展望スペースがあります。</p>
<p>南西側は渋谷フクラスや首都高速道路。東側は渋谷スクランブル交差点を眺めることができます。</p>
<p>渋谷スクランブルスクエアの46階・47階には<a href="https://nightscape.tokyo/shibuya/shibuya-sky/">SHIBUYA SKY</a>がありますが、それとは異なる迫力のある夜景鑑賞が可能です。</p>
<p>レストラン街での食事を済ませた後にぜひ、お立ち寄りください。</p>',
  '東京都渋谷区渋谷 2-24-12',
  'https://www.shibuya-scramble-square.com/',
  '渋谷スクランブルスクエア公式サイト',
  'https://www.instagram.com/shibuya_scramble_square/?hl=ja',
  '渋谷スクランブルスクエア公式インスタグラムアカウント',
  NULL,
  NULL,
  '11:00 - 23:00',
  'なし',
  '無料',
  '<ul>
<li>渋谷駅から直結</li>
</ul>',
  '<ul>
<li>渋谷ヒカリエ（提携駐車場）</li>
<li>平日300円(税込)／30分</li>
<li>土・日・祝 400円(税込)／30分</li>
<li>最大料金：2,400円（税込）</li>
</ul>',
  '<iframe  title="渋谷スクランブルスクエア12F 展望フロアの位置を記したマップ・地図"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.748821054973!2d139.70163874999997!3d35.65855965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b583ab6d93b%3A0x3c41198edb975744!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yS5LiB55uu77yS77yU!5e0!3m2!1sja!2sjp!4v1673370087777!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  4,
  3.5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-01.jpg',
  true,
  '2023-07-07T01:42:32+09:00',
  '2023-07-07T01:42:32+09:00',
  '2024-09-06T17:32:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), (SELECT id FROM tags WHERE slug = 'scramble-intersection'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for shibuya-scramble-square-12f
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-01.jpg', '渋谷スクランブルスクエア12Fからの夜景（東側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-02.jpg', '渋谷スクランブルスクエア12Fからの夜景（南西側）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-03.jpg', '渋谷スクランブルスクエア12Fから眺める夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-04.jpg', '渋谷スクランブルスクエア12Fから眺める夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/shibuya-scramble-square-05.jpg', '渋谷スクランブルスクエア12F 展望フロアの雰囲気', 4);

-- FAQs for shibuya-scramble-square-12f
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), 'どんな夜景が楽しめますか？', '首都高速道路を行き交う車や渋谷の象徴とも言える渋谷スクランブル交差点を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), '渋谷スクランブルスクエア12F 展望フロアは無料で立ち寄ることができますか？', 'はい、無料で夜景鑑賞することが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-scramble-square-12f'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 桜田門 (sakuradamon-gate)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'sakuradamon-gate',
  '桜田門',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '桜田門',
  '丸の内オフィス街の高層ビル群が一望できる穴場夜景スポット。お堀に映るリフレクションの美しさも魅力。',
  '<p>江戸城（現在の皇居）の内堀に作られた重要文化財にも指定されている桜田門。</p>
<p>この場所周辺からは丸の内オフィス街の高層ビル群を遮るものなく一望することができます。</p>
<p>内堀にビル群の明かりが反射する光景も美しく、風が穏やかな日には幻想的な光景が広がります。</p>
<p>霞ヶ関方面から眺めるライトアップされた桜田門も美しいので、皇居周りの散歩をしながらぜひ夜景を堪能ください。</p>',
  '東京都千代田区皇居外苑 1-1',
  'https://sankan.kunaicho.go.jp/guide/koukyo.html',
  '宮内庁参観案内：施設情報：皇居',
  NULL,
  NULL,
  'https://visit-chiyoda.tokyo/app/spot/detail/17',
  'スポット（桜田門（外桜田門））|【公式】東京都千代田区の観光情報公式サイト / Visit Chiyoda',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ有楽町線「桜田門駅」3番出口より徒歩1分 </li>
<li>東京メトロ丸ノ内線・日比谷線・千代田線「霞ヶ関駅」A2出口より徒歩3分</li>
</ul>',
  '<dl>
<dt>第一・第二駐車場</dt>
<dd>8:30～22:00(18:30最終入庫) / 普通車 1時間まで400円、以後1時間毎400円、当日最大料金2,000円</dd>
<dt>第三駐車場(一般行事による休業あり)</dt>
<dd>8:30～17:00(隣接施設イベント開催時延長あり)</dd>
</dl>',
  '<iframe title="桜田門の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.961759386988!2d139.7503388652586!3d35.677943580195084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbe135743b3%3A0xee3b158505f63c95!2z5qGc55Sw6ZaA!5e0!3m2!1sja!2sjp!4v1688998215486!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3,
  3.6,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-6.jpg',
  true,
  '2023-07-10T23:47:39+09:00',
  '2023-07-10T23:47:39+09:00',
  '2024-01-14T04:25:40+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for sakuradamon-gate
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-6.jpg', '桜田門から眺める高層ビル群の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-2.jpg', '皇居の内堀に綺麗に反射する摩天楼', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-8.jpg', '桜田門と丸の内の高層ビル群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-3.jpg', '丸の内オフィス街の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-7.jpg', 'ライトアップされた桜田門', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-5.jpg', 'ライトアップされた桜田門', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-3-2.jpg', '桜田門と丸の内の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sakuradamon-gate-4-1.jpg', '皇居の内堀に綺麗に反射する摩天楼', 7);

-- FAQs for sakuradamon-gate
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), 'どんな夜景が楽しめますか？', '丸の内方面の光まばゆいオフィス街を一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), '皇居外苑石垣ライトアップは何時から実施されますか？', '日没から21時までライトアップが実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sakuradamon-gate'), '桜田門からの夜景を楽しむにはいつ訪れるのがおすすめですか？', '平日の夜がおすすめです。オフィス街の明かりが眩しく光量の多い夜景が楽しめるからです。', 2);

-- Post: 東急プラザ銀座 屋上庭園 キリコテラス (tokyuplaza-ginza)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyuplaza-ginza',
  '東急プラザ銀座 屋上庭園 キリコテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '東急プラザ銀座 屋上庭園 キリコテラス',
  '銀座の真ん中にある緑あふれる都会のオアシス。数寄屋橋交差点と不二家の看板の景色が見どころ。',
  '<p>2016年に開業した東急プラザ銀座。</p>
<p>屋上には緑豊かで開放感のある「グリーンサイド」とラグジュアリーなプールが美しい「ウォーターサイド」の2つで構成された「キリコテラス」があります。</p>
<p>屋上庭園の高さは地上56mほど。数寄屋橋交差点や日比谷駅やプランタン銀座方面の景観を楽しむことができます。</p>
<p>リラックスして休憩ができる素敵なオープンスペースなので、銀座でショッピングをした帰りなどにぜひお立ち寄りください。</p>',
  '東京都中央区銀座 5-2-1',
  'https://ginza.tokyu-plaza.com/',
  '東急プラザ銀座 | 東急プラザ',
  'https://www.instagram.com/tokyuplazaginzaofficial/?hl=ja',
  '東急プラザ銀座 Instgramアカウント',
  NULL,
  NULL,
  '11:00 ~ 21:00',
  '1/1と年1回の不定期休',
  '無料',
  '<ul>
<li>メトロ日比谷線ほか「日比谷駅」 約5分</li>
<li>メトロ銀座線ほか「銀座駅」 約3分</li>
<li>JR東海道本線ほか「有楽町駅」 約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.783984576497!2d139.7624406!3d35.6721757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b79ddb1d7eb%3A0x3f9963b2cf8e19a6!2z5p2x5oCl44OX44Op44K2IOmKgOW6p-OCreODquOCs-ODhuODqeOCuQ!5e0!3m2!1sja!2sjp!4v1702480100565!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '56m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.1,
  3.5,
  3.3,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-5.jpg',
  true,
  '2023-07-20T17:39:06+09:00',
  '2023-07-20T17:39:06+09:00',
  '2023-12-26T11:58:55+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tokyuplaza-ginza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-5.jpg', 'キリコテラスから眺める数寄屋橋交差点', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-3.jpg', 'キリコテラスから眺める夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-1.jpg', '東急プラザ銀座 キリコテラスの雰囲気（昼）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-4.jpg', '東急プラザ銀座 キリコテラスの雰囲気（夜）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/kiriko-terrace-2.jpg', '東急プラザ銀座 キリコテラスの入り口', 4);

-- FAQs for tokyuplaza-ginza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), 'どんな夜景が楽しめますか？', '数寄屋橋交差点や日比谷駅やプランタン銀座方面の景観を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), '東急プラザ銀座 キリコテラスは何階にありますか？', '東急プラザ銀座11F（屋上）にあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyuplaza-ginza'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 富士見橋 (fujimibashi-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'fujimibashi-bridge',
  '富士見橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '富士見橋',
  'レインボーブリッジの景観が美しい無料の夜景スポット。秋から冬にかけて訪問すると美しいトワイライトタイムを過ごせる。',
  '<p>東雲運河をまたぎ有明と豊洲市場を結ぶ富士見橋。</p>
<p>全長213mの橋の上からは西側にライトアップされたレインボーブリッジや港区方面の高層ビル群、東側に有明方面のタワーマンション群を眺めることができます。</p>
<p>秋から冬にかけてはレインボーブリッジの後ろに夕陽が沈み、美しいトワイライトタイムを過ごせるので</p>
<p>とても雰囲気が良くデートコースにおすすめの豊洲ぐるり公園が近くにあるのでぜひ合わせてお立ち寄りください。</p>',
  '東京都江東区豊洲6丁目',
  'https://ja.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E8%A6%8B%E6%A9%8B_(%E6%9D%B1%E4%BA%AC%E9%83%BD)',
  '富士見橋 (東京都) | wikipedia',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線 「 市場前駅 」 約13分</li>
<li>ゆりかもめ線 「 お台場海浜公園駅 」 約18分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="富士見橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5507402579415!2d139.7800871!3d35.6388004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018898c47b7c707%3A0xe9ac22ac36b28cb4!2z5p2x5LqsIOWvjOWjq-imi-apiw!5e0!3m2!1sja!2sjp!4v1690125499857!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.5,
  3,
  3.1,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-14.jpg',
  true,
  '2023-07-23T02:13:22+09:00',
  '2023-07-23T02:13:22+09:00',
  '2025-01-18T20:18:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for fujimibashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-15.jpg', '富士見橋から眺める豊洲ぐるり公園', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/fujimi-bridge-1.jpg', 'レインボーカラーに輝くレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hujimibashi-bridge-3.jpg', '富士見橋を行き交う車両', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-11.jpg', '富士見橋から眺めるライトアップされたレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hujimibashi-bridge-1.jpg', 'ライトアップされた富士見橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hujimibashi-bridge-7.jpg', 'ライトアップされた富士見橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/hujimibashi-bridge-6.jpg', '富士見橋から眺める有明方面の夜景', 6);

-- FAQs for fujimibashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'どんな夜景が楽しめますか？', 'レインボーブリッジや港区方面の高層ビル群、東側に有明方面のタワーマンション群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), '富士見橋が開通したのはいつですか？', '富士見橋は2014年3月に開通しました。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fujimibashi-bridge'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', '日没から24時までライトアップされています。', 2);

-- Post: アンダーズ東京 虎ノ門ヒルズ (andaz-tokyo-toranomon-hills)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'andaz-tokyo-toranomon-hills',
  'アンダーズ東京 虎ノ門ヒルズ',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'アンダーズ東京 虎ノ門ヒルズ',
  '東京タワー方面の夜景が美しい5つ星のラグジュアリーホテル。館内にはルーフトップバーやレストラン、プールなどの施設も充実しており、非日常なひと時を味わうことが可能。',
  '<p>2014年6月に開業したハイアットブランドのホテル。</p>
<p>虎ノ門ヒルズの47-52階に入居しており、客室からは東京都内の景色を一望することができます。</p>
<p>イチオシは東京タワーやレインボーブリッジを眺めることが出来る南西方面の眺望。これでもかというぐらいに東京らしい景色を堪能することが可能です。</p>
<p>またアンダーズ東京がある虎ノ門ヒルズは愛宕グリーンヒルズをはじめとした高層ビルも多数あり、光量の多さもピカイチ。</p>
<p>館内にはルーフトップバーやレストラン、プールなどの施設も充実しており、非日常なひと時を味わうことができる素敵なホテルでした。</p>',
  '東京都港区虎ノ門 1-23-4',
  'https://www.hyatt.com/andaz/ja-JP/tyoaz-andaz-tokyo-toranomon-hills',
  'アンダーズ東京公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>日比谷線「虎ノ門ヒルズ駅」より徒歩約3分</li>
<li>銀座線「虎ノ門駅」地下鉄歩行者通路経由で 徒歩約5分</li>
<li>千代田線・丸の内線「霞ヶ関駅」A12番出口より徒歩 約8分</li>
<li>三田線「内幸町駅」A3番出口より徒歩約8分</li>
</ul>',
  '<dl>
<dt>営業時間</dt>
<dd>車：24時間 / オートバイ：7:00〜23:00</dd>
<dt>駐車料金</dt>
<dd>15分間200円 / 宿泊の場合、1泊につき 3,000円</dd>
</dl>
<p>虎ノ門ヒルズの自走式駐車場を利用することが可能</p>',
  '<iframe title="アンダーズ東京 虎ノ門ヒルズの地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.40806124388!2d139.74701381525847!3d35.66695308019774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b93a18a3a03%3A0x53be098c7d98c19b!2z6JmO44OO6ZaA44OS44Or44K6IOajruOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1674659119724!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Is9PkofQNJ0?si=G76oLgNMI0sDcee8" title="アンダーズ東京 虎ノ門ヒルズから撮影した東京タワー方面の夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  5,
  5,
  5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-06.jpg',
  true,
  '2023-07-22T18:27:18+09:00',
  '2023-07-22T18:27:18+09:00',
  '2025-03-07T01:16:06+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for andaz-tokyo-toranomon-hills
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-06.jpg', '東京タワーと愛宕グリーンヒルズの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/andaz-tokyo-11.jpg', 'ダイヤモンドヴェールのライトアップで輝く東京タワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-07.jpg', '虎ノ門方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/andaz-tokyo-13.jpg', 'オレンジ色に輝く東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-08.jpg', 'ライトアップされるレインボーブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/andaz-tokyo-8.jpg', 'アンダーズ東京の客室から眺める東京タワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-04.jpg', '夕暮れ時の虎ノ門方面の景色', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-05.jpg', '夕暮れ時のお台場方面の景色', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-03.jpg', '夕暮れ時の東京タワー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/underz-tokyo-01.jpg', 'アンダーズ東京の客室の雰囲気', 9);

-- FAQs for andaz-tokyo-toranomon-hills
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), 'どんな夜景が楽しめますか？', '東京タワーやレインボーブリッジといったランドマーク、愛宕グリーンヒルズなどの高層ビル群が織りなす光量の多い夜景眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), '宿泊の予約時に東京タワー側の部屋指定することはできますか？', '東京タワー側の部屋を指定することは可能です。', 1);

-- Hotel info for andaz-tokyo-toranomon-hills
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'andaz-tokyo-toranomon-hills'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181166%2F181166.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fandaz-tokyo.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad362288%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00002011%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: パークホテル東京 (park-hotel-tokyo)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'park-hotel-tokyo',
  'パークホテル東京',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'パークホテル東京',
  '東京タワーと富士山の共演を眺めることができる都内随一の景観が魅力のホテル。常時400点以上の芸術作品が展示されるなどアートにも力を入れています。',
  '<p>2003年開業の汐留メディアタワーに入居するパークホテル東京。</p>
<p>全室が26階以上に位置し、都心の景色を一望することができるのがウリのホテルです。</p>
<p>特に東京タワーや富士山、や虎ノ門の高層ビル群を眺めることができる西側の眺めは都内でも有数の美しさを誇ります。</p>
<p>また同ホテルは25階のフロントロビーの他、全客室フロアの回廊等に常時400点以上のアート作品を展示しており、まるで美術館のように芸術作品を楽しむことも可能です。</p>
<p>東京の夜景やアート作品などをまとめて楽しみたい方はぜひ宿泊してみて下さい！</p>',
  '東京都港区東新橋 1-71 汐留メディアタワー',
  'https://parkhoteltokyo.com/ja/',
  'パークホテル東京公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '<ul>
<li>JR、東京メトロ・都営地下鉄「新橋駅」より徒歩約7分</li>
<li>都営地下鉄大江戸線、ゆりかもめ線「汐留」駅より徒歩1分</li>
</ul>',
  '-',
  '<iframe title="パークホテル東京の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12966.265416487273!2d139.7594515!3d35.6630543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bc250f3b1a9%3A0x292e5bc02d390d7!2z44OR44O844Kv44Ob44OG44OrIOadseS6rA!5e0!3m2!1sja!2sjp!4v1693039793992!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/NYnO7imixQc?si=q9T1Q3DT4wSv4cqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.4,
  4.1,
  3.5,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/park-hotel-tokyo-view.jpg',
  true,
  '2023-08-28T23:43:54+09:00',
  '2023-08-28T23:43:54+09:00',
  '2025-03-04T13:20:36+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for park-hotel-tokyo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-5.jpg', 'パークホテル東京の客室からの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-6.jpg', '虎ノ門方面の高層ビル群が織りなす夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-2.jpg', '黄昏時の東京タワーと港区方面の町並み', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-4.jpg', '一際背が高い虎ノ門ヒルズ森タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-3.jpg', '東京タワーと富士山', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-9.jpg', 'たくさんの車が行き交う環二通り', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-7.jpg', 'パークホテル東京の客室からの夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-10.jpg', '早朝の東京タワーと富士山の景色', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-1.jpg', 'パークホテル東京の客室', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/park-hotel-8.jpg', '幾何学的な模様が美しいパークホテル東京の吹き抜け', 9);

-- FAQs for park-hotel-tokyo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'どんな夜景が楽しめますか？', '東京タワーや富士山、虎ノ門方面の高層ビル群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), 'ホテルのフロントは何階にありますか？', 'パークホテル東京のフロントは25Fにあります。', 1);

-- Hotel info for park-hotel-tokyo
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'park-hotel-tokyo'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18239%2F18239.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空席を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fpark-tokyo.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad345712%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000665%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: 新都心歩道橋 (shintoshin-pedestrian-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'shintoshin-pedestrian-bridge',
  '新都心歩道橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '新都心歩道橋',
  '新宿らしさが詰まった夜景を堪能できる歩道橋。映画「君の名は」にも登場する聖地。',
  '<p>新宿駅の近くにある青海街道 新都心交差点の歩道橋。</p>
<p>橋の上からは損保ジャパンビルを始めとした新宿の高層ビル群を眺めることができます。高層ビル群が林立する様子は一見の価値ありです。</p>
<p>反対側には山手線の電車が行き交う様子や新宿歌舞伎町方面の街並みを眺めることでき、見どころが詰まっています。</p>
<p>またこの場所は映画「君の名は」の終盤にも登場する場所でファンの間では聖地としても人気です。</p>',
  '東京都新宿区西新宿 7-12',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>丸ノ内線「西新宿駅」から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3410219536645!2d139.6970972!3d35.693224799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd6650b797d%3A0x31a78b1c83315a82!2z44CSMTYwLTAwMjMg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yX5LiB55uu77yR77ySIOaWsOmDveW_g-atqemBk-api-S4iw!5e0!3m2!1sja!2sjp!4v1689923088376!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.3,
  2.9,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-01.jpg',
  true,
  '2023-07-21T16:10:38+09:00',
  '2023-07-21T16:10:38+09:00',
  '2023-07-27T01:10:51+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for shintoshin-pedestrian-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-01.jpg', '新都心歩道橋から眺める新宿オフィス街の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-02.jpg', '新都心歩道橋から眺める歌舞伎町の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-03.jpg', '新都心歩道橋の外観', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-04.jpg', '新都心歩道橋から眺める歌舞伎町の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-05.jpg', '青海街道を行き交う車両', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-06.jpg', '新都心歩道橋から眺める新宿オフィス街の夜景', 5);

-- FAQs for shintoshin-pedestrian-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shintoshin-pedestrian-bridge'), 'どんな夜景が楽しめますか？', '新宿オフィス街の高層ビル群が林立している様子や新宿歌舞伎町方面の街並みを眺めることができます。', 0);

-- Post: 中ノ橋 (nakanohashi-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'nakanohashi-bridge',
  '中ノ橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'nakano'),
  NULL,
  '中ノ橋',
  '東京都庁がおもしろ構図で眺められる穴場の夜景スポット。主にフォトグラファーにおすすめ。',
  '<p>中野坂上駅から約徒歩10分、神田川にかかる中ノ橋。</p>
<p>こじんまりとした小さな橋ですが、東の方角に目をやると神田川の先に都庁を眺めることができ、穴場の夜景スポットとなっています。</p>
<p>静かな住宅街と都会的なビルの対比がとても面白く、都庁が特別ライトアップを実施しているときには道ゆく人が写真を撮る姿も見かけます。</p>
<p>中ノ橋周辺は春には桜が美しく咲く場所でもあるので、春ごろに夜桜を眺めながら都庁を眺めるのもいいかもしれません。</p>',
  '東京都中野区本町 2-7',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ丸の内線「中野坂上駅」から徒歩約9分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="中ノ橋の位置を記したマップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103804.36184638849!2d139.6194449821495!3d35.60587096915447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2da28b399ad%3A0x8efee873f7be33ab!2z5Lit44OO5qmL!5e0!3m2!1sja!2sjp!4v1690549791134!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.4,
  2.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-4.jpg',
  true,
  '2023-07-28T22:17:07+09:00',
  '2023-07-28T22:17:07+09:00',
  '2024-09-21T20:29:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for nakanohashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-4.jpg', '中ノ橋から眺める夜景（東側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-1.jpg', '中ノ橋から眺める夜景（西側）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-3.jpg', '中ノ橋の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-6.jpg', '緑豊かな中ノ橋周辺の街並み', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-2.jpg', '中ノ橋の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/nakanohashi-bridge-5.jpg', '中ノ橋から眺めるライトアップされた都庁', 5);

-- FAQs for nakanohashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), 'どんな夜景が楽しめますか？', '神田川の先に都庁がそびえ立つ様子を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakanohashi-bridge'), '都庁の特別ライトアップはいつ実施されますか？', '都庁のホームページから特別ライトアップの実施スケジュールを確認することができます。', 1);

-- Post: 渋谷パルコ 屋上 ルーフトップパーク (parco-rooftop-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'parco-rooftop-park',
  '渋谷パルコ 屋上 ルーフトップパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷パルコ 10階屋上 ルーフトップパーク',
  '渋谷パルコ屋上にある穴場の無料夜景スポット。渋谷周辺の街並みを一望できる立地の良さや開放感のある空間が魅力。',
  '<p>渋谷パルコの10階にある屋上広場のROOFTOPPARK。</p>
<p>渋谷全体を一望できる立地にあり、東側は渋谷駅前の高層ビル群、西側は富士山を眺めるができます。</p>
<p>夜になると広場内は程よい明るさのフットライトが点灯しとてもいい雰囲気です。芝生や観葉植物も豊かなので、渋谷で遊んだ帰りにゆっくり寛ぐのに最適でしょう。</p>
<p>またルーフトップパークにはカフェ&バーの<a href="https://shibuya.parco.jp/shop/detail/?cd=025948">ComMunE</a>もあり、飲食を楽しむことも可能。</p>
<p>近隣の宮下パークなどに比べると認知度が低いのか人の数もそこまで多くないのでデート利用にもおすすめです。</p>',
  '東京都渋谷区宇田川町 15-1',
  'https://shibuya.parco.jp/',
  '渋谷パルコ公式サイト',
  'https://www.instagram.com/parco_shibuya_official/',
  '渋谷パルコ Instgramアカウント',
  'https://commune.tokyo/',
  'ComMunE（カフェ&バー）の公式サイト',
  '11:00 ~ 23:00',
  'なし',
  '無料',
  '<ul>
<li>JR渋谷駅から徒歩約7分（A6C が最寄り出口）</li>
</ul>',
  '<p>渋谷パルコ館内駐車場<p>
<dl>
<dr>営業時間</dt>
<dd>7:00－24:00</dd>
<dt>料金（税込）</dt>
<dd>一般車　平日320円/30分　土日祝400円/30分<br>バイク　平日110円/30分　土日祝140円/30分</dd>
</dl>',
  '<iframe title="渋谷パルコの地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.607192958371!2d139.6962017760826!3d35.66204837259348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8e2fe2173%3A0x1adbb1909538391b!2z5riL6LC3UEFSQ08!5e0!3m2!1sja!2sjp!4v1690555299374!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.2,
  3.6,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-01.jpg',
  true,
  '2023-07-29T00:13:09+09:00',
  '2023-07-29T00:13:09+09:00',
  '2023-12-26T11:51:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for parco-rooftop-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-01.jpg', 'ROOFTOP PARKの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-03.jpg', 'ROOFTOP PARKの雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-05.jpg', 'お洒落な間接照明が印象的なROOFTOP PARK', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-02.jpg', 'ROOFTOP PARKの雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-04.jpg', 'ROOFTOP PARKから眺める渋谷駅方面の高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/parco-rooftop-park-06.jpg', 'ROOFTOP PARK内にあるカフェ', 5);

-- FAQs for parco-rooftop-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), 'どんな夜景が楽しめますか？', '東側は渋谷駅前の高層ビル群、西側は富士山を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), '渋谷パルコに一番近い渋谷駅の出口は何？', '渋谷駅「A6C」出口が最寄りになります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), '渋谷パルコのループトップは何時まで営業していますか？', '23:00まで営業しています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'parco-rooftop-park'), '渋谷パルコのループトップへの行き方を教えてください。', '屋外にあるエスカレーターを上るか、エレベーターで屋上へ上がることでアクセスが可能です。', 3);

-- Post: 京王プラザホテル (keio-plaza)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'keio-plaza',
  '京王プラザホテル',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '京王プラザホテル',
  '大迫力の東京都庁を眺めることが出来る地上170mの超高層ホテル。都庁の特別ライトアップや世界最大のプロジェクションマッピングも見どころ。',
  '<p>1971年に日本初の地上170mの超高層ホテルとしてオープンした京王プラザホテル。とても歴史の長いホテルでクラシカルな雰囲気を味わえるホテルです。</p>
<p>客室からはパリのノートルダム大聖堂をモチーフに作られた東京都庁を一望できる景色が広がります。</p>
<p>都庁では2024年2月25日(日)から世界最大のプロジェクションマッピングを実施しており、夜には大迫力の映像を特等席で眺めることができます。</p>
<p>立地もよく、ホテル内のレストランも充実しているので、新宿エリアで宿泊する際はぜひ利用してみてください。</p>',
  '東京都新宿区西新宿2-2-1',
  'https://www.keioplaza.co.jp/',
  '京王プラザホテル公式サイト',
  NULL,
  NULL,
  'https://www.koho.metro.tokyo.lg.jp/diary/oshirase/light-up.html',
  '都庁舎ライトアップ新着一覧',
  NULL,
  NULL,
  NULL,
  '<ul>
<li>新宿駅西口（JR・私鉄・地下鉄）から徒歩5分</li>
<li>都営大江戸線「都庁前駅」B1出口からすぐ</li>
</ul>',
  '<dl>
<dt>営業時間</dt>
<dd>24時間営業</dd>
<dt>一般	</dt>
<dd>30分まで400円、以降30分毎に400円、入庫から2時間を越えると2,000円（入庫から24時間の上限は2,000円）</dd>
<dt>自動二輪車</dt>
<dd>30分まで200円、以降30分毎に200円、入庫から2時間を越えると2,000円（入庫から24時間の上限は2,000円）</dd>
</dl>',
  '<iframe title="京王プラザの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.461701231979!2d139.6920629152591!3d35.690254380192215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4741c62e1%3A0x51d797d25c62db8d!2z5Lqs546L44OX44Op44K244Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1689845316008!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/PuckWPdAdbY?si=e3QeVdvQiHFNh7Ud" title="京王プラザの客室から撮影した夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4,
  4,
  3.8,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-plaza.jpg',
  true,
  '2023-07-20T18:48:54+09:00',
  '2023-07-20T18:48:54+09:00',
  '2024-06-14T00:23:21+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for keio-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-plaza.jpg', '京王プラザホテルの客室から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-04.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-06.jpg', 'ブルーにライトアップされる東京都庁', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-09.jpg', '都庁第二本庁舎のビル夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-03.jpg', '多くの車が行き交う中央通り', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-10.jpg', '夕暮れ時の東京都庁の様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-07.jpg', '京王プラザホテルの客室からの眺望', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-02.jpg', '京王プラザホテルの玄関口', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/keio-praza-01.jpg', '京王プラザホテルの客室（スタンダードダブルルーム）', 8);

-- FAQs for keio-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), 'どんな夜景が楽しめますか？', '荘厳な造りの東京都庁や新宿の街並みを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), '都庁のライトアップカラーを事前に確認する方法はありますか？', '東京都庁の公式ホームページに掲載されるライトアップイベントの予定から確認可能です。', 1);

-- Hotel info for keio-plaza
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'keio-plaza'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F930%2F930.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fkeio-plaza-tokyo.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad332943%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000187%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 浅草ビューホテル (asakusa-view-hotel)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'asakusa-view-hotel',
  '浅草ビューホテル',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '浅草ビューホテル',
  '東京スカイツリーの眺めが美しい、浅草を代表する歴史あるホテル。宿泊客限定の展望室があるので誰でもスカイツリー方面の夜景が楽しめるのも魅力。',
  '<p>1985年9月に開業した地上28階地下3階建ての浅草ビューホテル。</p>
<p>スカイツリー側の客室には各部屋に小さな展望スペースが設けられており、ライトアップされた東京スカイツリーや浅草寺、浅草花やしきなどを眺めることができます。</p>
<p>スカイツリーと浅草寺五重塔の共演はなんとも趣深いものがあります。</p>
<p>またスカイツリーの景色は東側に位置しているので、早起きすれば朝日を眺めることも可能。</p>
<p>朝日が昇る前の茜色の空もとても美しいのでぜひトワイライトタイムの景色を堪能して欲しいです。</p>
<p>ちなみに浅草ビューホテルには20階に宿泊客限定の展望室があり、スカイツリーと反対側の部屋を取った方もスカイツリービューを楽しむことができます。</p>
<p>東京スカイツリーフレンドシップホテルに登録されており、スカイツリー入場券の購入など、優待が受けられるので、浅草周辺を観光する際はぜひ宿泊してみてはいかがでしょうか？</p>',
  '東京都台東区西浅草 3-17-1',
  'https://www.viewhotels.co.jp/asakusa/',
  '浅草ビューホテル 公式サイト',
  NULL,
  NULL,
  'https://trip-sommelier.com/10170.html',
  '浅草ビューホテルのアメニティは要注意！レストランで個室があるのは１店だけ！',
  NULL,
  NULL,
  NULL,
  '<ul>
<li>つくばエキスプレス「浅草駅」直結</li>
<li>東京メトロ銀座線「田原町駅」徒歩７分</li>
<li>東京メトロ銀座線「浅草駅」徒歩10分</li>
</ul>',
  '<ul>
<li>台数180台の駐車場あり</li>
<li>宿泊の場合、1泊につき￥2,000</li>
</ul>',
  '<iframe title="浅草ビューホテルの位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.437233057355!2d139.78710709678953!3d35.715464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9569ba6cab%3A0xcc19c71c2fe2d5a0!2z5rWF6I2J44OT44Ol44O844Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1689843702831!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<div class="l-bottom-medium"><iframe width="560" height="315" src="https://www.youtube.com/embed/b1vgjxL22k8?si=cnZjlsD-POuxnZqu" title="浅草ビューホテルの客室から撮影した東京スカイツリー側の夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> <div><iframe width="560" height="315" src="https://www.youtube.com/embed/eAwY4MySsv8?si=fIylPsw8pNU8n_-N" title="浅草ビューホテルの客室から撮影した東京スカイツリー側の日の出タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>',
  NULL,
  NULL,
  null,
  null,
  4,
  2.8,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-8.jpg',
  true,
  '2023-07-20T19:37:29+09:00',
  '2023-07-20T19:37:29+09:00',
  '2024-07-22T15:23:06+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for asakusa-view-hotel
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-8.jpg', '浅草ビューホテルの客室から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-viewa-2.jpg', 'ライトアップされた浅草寺の本堂と五重塔', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-6.jpg', 'ライトアップされた浅草寺・五重塔', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-7.jpg', 'ライトアップされる東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-11.jpg', '浅草ビューホテルから眺める日の出前の景色', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-viewa-3.jpg', '金のオブジェが特徴的なアサヒビール本社', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-13.jpg', '浅草ビューホテルから眺める朝日', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-3.jpg', '浅草ビューホテルの客室', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-4.jpg', '客室にある小さな展望スペース', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-5.jpg', '20階にある宿泊客専用の展望フロア', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-12.jpg', '20階展望フロアから眺める朝焼け', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/asakusa-view-2.jpg', '浅草ビューホテルの外観', 11);

-- FAQs for asakusa-view-hotel
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), 'どんな夜景が楽しめますか？', 'ライトアップされた東京スカイツリーや浅草寺、花やしきなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), '浅草ビューホテルの宿泊客専用の展望フロアは何階にありますか？', '展望フロアは20階にあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), '浅草ビューホテルの宿泊客専用の展望フロアは何時まで入場できますか？', '営業時間はなく宿泊中はいつでも入場が可能です。', 2);

-- Hotel info for asakusa-view-hotel
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-view-hotel'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F570%2F570.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fasakusa-view-tokyo.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad316401%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000147%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 辰巳桜橋&amp;東雲水辺公園 (tatsumisakura-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tatsumisakura-bridge',
  '辰巳桜橋&amp;東雲水辺公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '辰巳桜橋&東雲水辺公園',
  '高層ビル群の迫力が素晴らしい無料の夜景スポット。ドラマのロケ地にも使われる景色は一見の価値あり。',
  '<p>東京都江東区の東雲（しののめ）と辰巳（たつみ）を隔てる辰巳運河に架る歩行者専用橋。</p>
<p>橋長273mの美しい斜張橋で、有楽町線辰巳駅の1番出口を出るとすぐの場所にあります。</p>
<p>橋の後ろにはタワーマンション群の東雲キャナルコートが立ち並び、非常に光量の多い夜景を楽しむこと可能です。</p>
<p>橋を渡り切るとベンチが複数設けられている区立公園の東雲水辺公園もあるので、落ち着いて夜景鑑賞をするのにうってつけです。</p>
<p>周辺に大きな商業施設などがなくかややアクセスはしづらいですが、ドライブデートなどにぜひ立ち寄ってみてください。</p>',
  '東京都江東区東雲1丁目〜辰巳1丁目',
  'https://www.city.koto.lg.jp/470208/machizukuri/dorohashi/hashiichiran/kudokyo/14927.html',
  '辰巳桜橋｜江東区',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>メトロ有楽町線「辰巳駅」 約4分</li>
<li>りんかい線「東雲駅」 約10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.242961374977!2d139.80495761525776!3d35.6463851802025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889c9c140439f%3A0x1aff082ffae746ff!2z6L6w5bez5qGc5qmL!5e0!3m2!1sja!2sjp!4v1690131671070!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.5,
  3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-1.jpg',
  true,
  '2023-07-24T02:02:47+09:00',
  '2023-07-24T02:02:47+09:00',
  '2024-05-31T16:34:43+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for tatsumisakura-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-1.jpg', '辰巳桜橋から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-4.jpg', '超広角レンズで撮影した高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-7.jpg', '東雲水辺公園から眺める辰巳桜橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-3.jpg', '斜張橋が架けられた辰巳桜橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-2.jpg', '東雲水辺公園から眺める高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-8.jpg', '東雲水辺公園から眺める高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-6.jpg', '東雲水辺公園から眺める辰巳桜橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tatsumi-sakura-bashi-5.jpg', '辰巳桜橋から眺める高層ビル群', 7);

-- FAQs for tatsumisakura-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), 'どんな夜景が楽しめますか？', 'タワーマンションが複数建ち並び、光量の多い夜景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), '辰巳桜橋がロケ地に使われたドラマのタイトルは？', 'おっさんずラブ、3千円の使い方、階段下のゴッホなど多数のドラマロケ地に使われています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tatsumisakura-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: ミヤシタパーク・宮下公園 (miyashita-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'miyashita-park',
  'ミヤシタパーク・宮下公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  'ミヤシタパーク・宮下公園',
  '宮下公園のリニューアルによって新たな渋谷の観光名所に生まれ変わったスポット。屋上の緑化公園はゆっくり寛ぐのにおすすめのデートスポット。',
  '<p>2020年に旧「宮下公園」の再開発で整備された、公園と商業施設が一体となったMIYASHITA PARK。</p>
<p>地上5階建てビルの屋上には広々とした緑化公園があり、ゆっくり寛ぐことが出来るようになっています。</p>
<p>高さはそこまでないので、渋谷の街並みを見渡すことはできませんが、渋谷スクランブルスクエアなどの高層ビル群が目の前にある光景は一見の価値アリです。</p>
<p>なお、ミヤシタパーク屋上の特徴的なアーチにはツタが絡まっており、今後数年をかけて緑化を進めていくそう。</p>
<p>どんどん都会のオアシスとして景観が洗練されていくのが楽しみです。</p>
<p>近隣には昔ながらの雰囲気が楽しい「<a href="https://shibuya-yokocho.com/">渋谷横丁</a>」もあるので、渋谷周辺にデートや観光で訪れた際はぜひ立ち寄ってみて下さい。</p>',
  '東京都渋谷区神宮前 6-20-10',
  'https://www.miyashita-park.tokyo/',
  'MIYASHITA PARK公式サイト',
  'https://www.instagram.com/miyashitapark_/',
  'MIYASHITA PARK Instgramアカウント',
  NULL,
  NULL,
  '8:00 ~ 23:00',
  'なし',
  '無料',
  '<ul>
<li>渋谷駅から徒歩約3分</li>
<li>明治神宮前（原宿）駅から徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.597737418991!2d139.69975321525828!3d35.66228128019875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188de622941551%3A0x5400fedc2467d9be!2sMIYASHITA%20PARK!5e0!3m2!1sja!2sjp!4v1690790942108!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.5,
  3.3,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-4.jpg',
  true,
  '2023-07-31T21:40:56+09:00',
  '2023-07-31T21:40:56+09:00',
  '2023-12-26T11:52:06+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for miyashita-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-4.jpg', 'ミヤシタパークの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-1.jpg', '広々とした緑化公園のミヤシタパーク', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-3.jpg', 'ミヤシタパーク内にあるスターバックス', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-2.jpg', 'ミヤシタパーク内にあるオブジェ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-5.jpg', 'ミヤシタパークの外観', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-illumination-2.jpg', 'ミヤシタパークのイルミネーションイベントの様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-illumination-3.jpg', 'ミヤシタパークのイルミネーションイベントの様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/miyashita-park-illumination-4.jpg', 'ミヤシタパークのイルミネーションイベントの様子', 7);

-- FAQs for miyashita-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), 'どんな夜景が楽しめますか？', '渋谷スクランブルスクエアを始めとした渋谷駅周辺の高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'miyashita-park'), '宮下パークの屋上広場は何時まで開放されていますか？', '8:00 ~ 23:00まで開放されています。', 1);

-- Post: ウィズ原宿 (with-harajyuku)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'with-harajyuku',
  'ウィズ原宿',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  'ウィズ原宿',
  '木の温もりが感じられる空間デザインが魅力の無料夜景スポット。原宿周辺のショッピングや食事終わりの立ち寄るのがおすすめ。',
  '<p>2020年6月にオープンしたウィズ原宿（WITH HARAJUKU）。</p>
<p>木の温もりが感じられる空間デザインが特徴の商業施設で3階エリアには無料開放されている屋外デッキが東と西の2箇所にあります。
</p>
<p>東側は緑豊かな代々木公園や原宿駅、西側からはライトアップされたドコモタワーを眺めることができます。</p>
<p>高さはないので夜景を満喫するにはやや物足りない感じがありますが、ショッピングや食事を楽しんだ後のひと時をゆっくり寛ぐのに最適な場所です。</p>
<p>とても雰囲気の良い空間なので原宿周辺の観光に訪れた際にぜひ訪れてみてください。</p>',
  '東京都渋谷区神宮前 1-14-30',
  'https://withharajuku.jp/',
  'ウィズ原宿公式サイト',
  'https://www.instagram.com/withharajuku/',
  'ウィズ原宿Instgramアカウント',
  NULL,
  NULL,
  '7:30 ~ 23:30',
  'なし',
  '無料',
  '<ul>
<li>JR 原宿駅から徒歩1分</li>
<li>副都心線 明治神宮前駅から徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.26114260676!2d139.7010370152585!3d35.67057138019684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dad59f8ea69%3A0x3ae4212fa62b0f84!2sWITH%20HARAJUKU!5e0!3m2!1sja!2sjp!4v1690807916399!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.3,
  3.4,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-05.jpg',
  true,
  '2023-07-31T21:59:06+09:00',
  '2023-07-31T21:59:06+09:00',
  '2023-07-31T21:59:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for with-harajyuku
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-05.jpg', 'ウィズ原宿のウッドデッキの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-02.jpg', '木のぬくもりが感じられる空間デザイン', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-01.jpg', 'ウィズ原宿から眺める代々木公園と原宿駅', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-06.jpg', '程よいフットランプとイルミネーションで雰囲気の良い無料デッキ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-03.jpg', 'ウィズ原宿のウッドデッキの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/wiz-harajyuku-07.jpg', 'ウィズ原宿の外観', 5);

-- FAQs for with-harajyuku
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'どんな夜景が楽しめますか？', '東側に代々木公園や原宿駅、西側にライトアップされたドコモタワーなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'ウィズ原宿にはどんなショップがありますか？', 'IKEAやユニクロの店舗があります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'with-harajyuku'), 'ウィズ原宿の設計を手掛けたのは誰ですか？', 'ウィズ原宿は伊東豊雄氏によって設計されました。', 2);

-- Post: 清洲橋 (kiyosubashi-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'kiyosubashi-bridge',
  '清洲橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '清洲橋',
  '国指定重要文化財にも指定されている全長186.2ｍの鋼製三径間補剛吊橋。ピンク色に輝く美しいライトアップが見どころ。',
  '<p>国指定重要文化財にも指定されている隅田川下流に架かる清洲橋。</p>
<p>関東大震災後の帝都復興事業の一環として，昭和3年3月に竣工しました。</p>
<p>重厚かつ雄大で男性的な印象の<a href="nightscape.tokyo/chuo/eidaibashi-bridge/
">永代橋</a>と対になるよう、繊細で女性的なデザインを意図しているのが特徴です。</p>
<p>日没15分後から23時まではピンク色に輝くライトアップも点灯されており、美しい夜景を眺めることができます。</p>
<p>周辺には美しく整備された隅田川テラスやライトアップされた橋が複数掛かっているので、ぜひ夜の散歩に活用してみてはいかがでしょうか？</p>',
  '東京都中央区日本橋中洲',
  'https://www.city.koto.lg.jp/103020/bunkasports/bunka/bunkazaisiseki/kenzobutsu/17342.html',
  '清洲橋 | 江東区',
  'https://www.city.chuo.lg.jp/a0052/bunkakankou/rekishi/kunibunkazai/030821.html',
  '清洲橋 | 中央区',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ半蔵門線「水天宮前駅」4番出口から徒歩7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="清洲橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7825516162834!2d139.78941577605855!3d35.6823558725869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188935db92e2b9%3A0x28a2afd0bb30f6f!2z5riF5rSy5qmL!5e0!3m2!1sja!2sjp!4v1691895339209!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.8,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-3.jpg',
  true,
  '2023-08-13T12:15:02+09:00',
  '2023-08-13T12:15:02+09:00',
  '2024-07-29T15:46:03+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for kiyosubashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-3.jpg', '隅田川テラスから眺める清洲橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-4.jpg', '清洲橋から眺めるライトアップされた萬年橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-8.jpg', '清洲橋から眺める東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-1.jpg', '清洲橋の外観', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-1-2.jpg', 'ピンク色に輝くライトアップされる清洲橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-5.jpg', '清洲橋から眺める東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-6.jpg', '清洲橋から眺める新大橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-7.jpg', '清洲橋の歩行者専用道路', 7);

-- FAQs for kiyosubashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), 'どんな夜景が楽しめますか？', '橋の上からはライトアップされた東京スカイツリーや萬年橋などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), '清洲橋のライトアップは何時まで実施されていますか？', '日没の15分後から23時まで清洲橋のライトアップが実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), '清洲橋が国指定重要文化財に指定されたのはいつですか？', '清洲橋は平成19年6月18日に国指定重要文化財にしていされました。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), '清洲橋のモデルになっている橋は何ですか？', 'ドイツのケルンにあるライン川の吊り橋がデザインのモデルになっています。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), '清洲橋のライトアップの色は何色ですか？', '清洲橋のライトアップのピンク色です。繊細で女性的なデザインを意図した配色になっています。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kiyosubashi-bridge'), '隅田川に架かる橋はいくつありますか？', '隅田川に架かる橋は15ヶ所にあります。築地大橋・勝鬨橋・佃大橋・中央大橋・永代橋・隅田川大橋・新大橋・清洲橋・両国橋・蔵前橋・厩橋・駒形橋・吾妻橋・言問橋・桜橋が該当します。', 5);

-- Post: 萬年橋 (mannen-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'mannen-bridge',
  '萬年橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '萬年橋',
  '葛飾北斎や歌川広重の浮世絵にも描かれた歴史ある橋。白に輝くライトアップが見どころ',
  '<p>小名木川にかかる橋で第一橋梁である萬年橋（まんねんばし）。</p>
<p>葛飾北斎や歌川広重の浮世絵にも描かれた歴史ある橋で、夜になるとライトアップが実施されており、白く輝く姿を眺めることができます。</p>
<p>橋の周辺には清洲橋や墨田テラスなど雰囲気よい夜景スポットが点在しています。</p>
<p>夜の散歩にぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都江東区清澄 2-14-9',
  'https://www.city.koto.lg.jp/470208/machizukuri/dorohashi/hashiichiran/kudokyo/14863.html',
  '萬年橋 | 江東区',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ半蔵門線「清澄白河駅」から徒歩7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="萬年橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.951319055674!2d139.7946541!3d35.6834569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018893f35922f9f%3A0x657403e9eb5bb093!2z6JCs5bm05qmL!5e0!3m2!1sja!2sjp!4v1692338792868!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  2.7,
  2.5,
  2.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/08/mannnennbashi-bridge-4.jpg',
  true,
  '2023-08-18T15:16:22+09:00',
  '2023-08-18T15:16:22+09:00',
  '2024-01-04T14:42:53+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for mannen-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/mannnennbashi-bridge-4.jpg', '萬年橋の外観', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/mannnennbashi-bridge-1.jpg', '萬年橋の歩行者専用道路', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/mannnennbashi-bridge-2.jpg', '萬年橋から眺めるライトアップされた清洲橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/mannnennbashi-bridge-3.jpg', 'ライトアップで白く輝く萬年橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-4.jpg', '清洲橋から眺めるライトアップされた萬年橋', 4);

-- FAQs for mannen-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), 'どんな夜景が楽しめますか？', 'アーチ状の橋が白くライトアップされている光景を楽しむことができます。また、橋の中腹からは清洲橋や墨田テラスを眺めることも可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mannen-bridge'), '萬年橋の長さは何メートルですか？', '萬年橋の橋長56mです。', 1);

-- Post: 永代橋 (eitaibashi-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'eitaibashi-bridge',
  '永代橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '永代橋',
  '隅田川に架かる美しい曲線が特徴的な橋。ブルーに輝くライトアップや月島方面の高層ビル群が織りなす夜景が見どころ。',
  '<p>国指定重要文化財にも指定されている隅田川下流に架かる永代橋。</p>
<p>関東大震災後の帝都復興事業の一環として、大正15年12月に竣工しました。</p>
<p>曲線的なアーチが特徴の橋で、日没15分後から23時には涼し気なブルーカラーのライトアップも点灯します。</p>
<p>橋の中腹からは月島方面にある大規模マンション群のリバーシティ21が一望でき、非常に迫力のある夜景を楽しむことが可能です。</p>
<p>永代橋の周辺にある隅田川大橋や中央大橋では東京スカイツリーや月島方面の高層ビル群と永代橋の共演を眺めることもできるのでぜひ夜の散歩で訪れてみて下さい。</p>',
  '東京都中央区新川 1丁目',
  'https://www.city.chuo.lg.jp/a0052/bunkakankou/rekishi/kunibunkazai/030921.html',
  '永代橋 | 中央区',
  'https://www.city.koto.lg.jp/103020/bunkasports/bunka/bunkazaisiseki/kenzobutsu/17343.html',
  '永代橋 | 江東区',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「茅場町駅」3番出口から徒歩で10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="永代橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.016438641515!2d139.78388097605844!3d35.67659722258878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f962dbe0d1%3A0x70c4bcbbd829ad88!2z5rC45Luj5qmL!5e0!3m2!1sja!2sjp!4v1691912344616!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3,
  3.3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-1.jpg',
  true,
  '2023-08-13T17:11:04+09:00',
  '2023-08-13T17:11:04+09:00',
  '2024-07-29T15:46:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for eitaibashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-1.jpg', '永代橋の外観', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-5.jpg', '永代橋から眺める大規模マンション群のリバーシティ21', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-4.jpg', '月島方面の高層ビル群と中央大橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-8.jpg', '永代橋の歩行者専用道路', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-6.jpg', '墨田テラスの風景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-7.jpg', '墨田テラスと月島方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/sumidabashi-bridge-3.webp', '隅田川大橋から眺める永代橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-1.jpg', '中央大橋から眺める永代橋と東京スカイツリー', 7);

-- FAQs for eitaibashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), 'どんな夜景が楽しめますか？', '橋の中腹から月島方面の高層ビル群を眺めることができます。複数のビル群が立ち並ぶ光景は一見の価値があります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), '永代橋は何メートルの橋ですか？', '橋長184.7メートル・幅員25.6メートルの橋です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), '永代橋のライトアップは何時まで実施されていますか？', '永代橋は日没15分後〜23:00までライトアップが実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), '永代橋のライトアップが開始されたのはいつですか？', '東京2020パラリンピック開幕1年前の2019年8月25日からライトアップが開始されています。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'eitaibashi-bridge'), '隅田川に架かる橋はいくつありますか？', '隅田川に架かる橋は15ヶ所にあります。築地大橋・勝鬨橋・佃大橋・中央大橋・永代橋・隅田川大橋・新大橋・清洲橋・両国橋・蔵前橋・厩橋・駒形橋・吾妻橋・言問橋・桜橋が該当します。', 4);

-- Post: パリ広場（石川島公園） (ishikawajima-paris-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'ishikawajima-paris-park',
  'パリ広場（石川島公園）',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '石川島公園（パリ広場）',
  'ライトアップされた永代橋と東京スカイツリーの共演を眺めることができる雰囲気の良い無料夜景スポット。',
  '<p>隅田川・朝潮運河沿いにある区立公園である石川島公園。</p>
<p>園内からはライトアップされた永代橋や中央大橋、東京スカイツリーなどを眺めることができます。</p>
<p>超高級マンション「大川端リバーシティ21」の裏手に位置しており、巨大な高層ビルを見上げることができるのも特徴です。</p>
<p>また、公園内の北端にある御影石を敷き詰めた円形の広場はパリ広場と呼ばれています。</p>
<p>隅田川とフランスのセーヌ川が友好河川提携を結んだことを記念して平成11年に広場が造られたことに由来するそう。</p>
<p>非常に雰囲気がよく、美しい夜景をゆっくり楽しむことができる穴場の無料夜景スポットなので、ぜひ立ち寄ってみて下さい。</p>',
  '東京都中央区佃 2-1-5',
  'https://www.city.chuo.lg.jp/a0030/shisetsu/genre/sonota/sonota00106.html',
  '石川島公園（パリ広場）| 中央区ホームページ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ有楽町線、都営大江戸線「月島駅」6番出口から徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="パリ広場（石川島公園）の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.90379245287!2d139.7861871!3d35.6714381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889bdcc44a0d3%3A0xf1aed1ffaaf11432!2z44OR44Oq5bqD5aC0!5e0!3m2!1sja!2sjp!4v1691927519633!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  2.7,
  3.8,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-3.jpg',
  true,
  '2023-08-14T16:04:37+09:00',
  '2023-08-14T16:04:37+09:00',
  '2023-12-31T13:49:55+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for ishikawajima-paris-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-3.jpg', '石川島公園から眺める永代橋と東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-2.jpg', '石川島公園の外観', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-4.jpg', '石川島公園から眺める中央大橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-5.jpg', '石川島公園の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-6.jpg', '石川島公園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-7.jpg', '大規模マンション群のリバーシティ21を眺める', 5);

-- FAQs for ishikawajima-paris-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), 'どんな夜景が楽しめますか？', '園内からはライトアップされた永代橋や中央大橋、隅田川を行き交う屋形船、東京スカイツリーなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), '永代橋のライトアップは何時まで実施されていますか？', '永代橋のライトアップは日没15分後から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), '東京スカイツリーのライトアップは何時まで実施されていますか？', '東京スカイツリーのライトアップは日没から24時まで実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ishikawajima-paris-park'), '石川島公園（パリ広場）からは隅田川の花火大会を眺めることができますか？', '隅田川の花火大会の打ち上げ会場からはやや距離がありますが、花火鑑賞することができます。', 3);

-- Post: 銀座クレストン (ginza-crestonhotel)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'ginza-crestonhotel',
  '銀座クレストン',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '銀座クレストン',
  '都内でも有数のリバーフロント夜景を眺めることができる歴史あるホテル。ホテル周辺にある墨田テラスの散策もおすすめ。',
  '<p>「聖路加レジデンス」の32～38階に入居するクレストン銀座。</p>
<p>1994年6月に「東京新阪急ホテル築地」の名称で開業し、2013年2月に現名称へ改称しました。 </p>
<p>全客室が高層階に位置しており、客室の大きな窓の先には美しいウォーターフロント夜景が広がります。</p>
<p>隅田川に架かる橋はそれぞれが個性豊かか色にライトアップされており、鮮やかに輝く勝鬨橋や築地大橋が見どころです。</p>
<p>また、港区方面を見渡すと東京タワーや高層ビル郡が林立する眺めも堪能できます。</p>
<p>中央区周辺で綺麗な夜景を満喫できるホテルをお探しの方はぜひクレストン銀座に宿泊してみてはいかがでしょうか？</p>',
  '東京都中央区明石町8 聖路加ガーデン',
  'https://www.crestonhotel.jp/ginza/',
  'クレストン銀座公式サイト',
  'https://nightscape.tokyo/chuo/luke-restaurant/',
  'レストランルーク ウィズ スカイラウンジ',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  '無料',
  '<ul>
<li>東京メトロ日比谷線「築地」駅より徒歩約7分</li>
<li>東京メトロ有楽町線「新富町」駅より徒歩約8分</li>
</ul>',
  '<ul>
<li>駐車場：約50台</li>
<li>料金：1泊3,500円</li>
</ul>',
  '<iframe title="銀座クレストンの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.712601824951!2d139.778424!3d35.6664583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889641283e455%3A0xd09201bc22f454e1!2z6YqA5bqn44Kv44Os44K544OI44Oz!5e0!3m2!1sja!2sjp!4v1693039225057!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/ivynO3-5p3c?si=Zy5faTDC7CU54_1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4,
  3,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke.jpg',
  true,
  '2023-08-27T23:31:31+09:00',
  '2023-08-27T23:31:31+09:00',
  '2025-03-04T13:04:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for ginza-crestonhotel
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke.jpg', '勝鬨橋と築地大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-5.jpg', '銀座クレストンから眺める港区方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-7.jpg', '銀座クレストンから眺めるウォーターフロントの夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-3.jpg', '晴海エリアの高層タワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-11.jpg', '東京タワーと港区方面の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-6.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-1.jpg', '銀座クレストンが入居する聖路加ガーデン', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-10.jpg', '銀座クレストン周辺にある墨田テラスからの景色', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/CRESTON.jpg', '夕暮れ時の隅田川の景色', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-2.jpg', '夕暮れ時の隅田川の景色', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-9.jpg', '銀座クレストンの客室', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-8.jpg', '銀座クレストンの入り口', 11);

-- FAQs for ginza-crestonhotel
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), 'どんな夜景が楽しめますか？', 'ライトアップされた勝鬨橋と築地大橋、東京タワーなどを眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), '勝鬨橋と築地大橋のライトアップは何時まで実施されていますか？', '日没〜23時までライトアップされています。', 1);

-- Hotel info for ginza-crestonhotel
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-crestonhotel'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4913%2F4913.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空席を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fginza-creston.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad360095%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000449%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: インターコンチネンタル東京ベイ (interconti-tokyo-bay)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'interconti-tokyo-bay',
  'インターコンチネンタル東京ベイ',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'インターコンチネンタル東京ベイ',
  '都内随一のリバービューを眺めることができる5つ星ホテル。ライトアップされる築地大橋・勝鬨橋や東京スカイツリーが見どころ。',
  '<p>1995年に開業した24階建ての5つ星ホテルであるインターコンチネンタル東京ベイ。</p>
<p>北の方角が見渡せるリバービューの客室からは隅田川に架かる築地大橋、勝鬨橋、佃大橋やライトアップされた東京スカイツリーなどを眺めることができます。</p>
<p>遮るものが何もなく隅田川の景色を堪能できる数少ない宿泊施設です。</p>
<p>また、南の方角が見渡せるベイビューの客室からは壮大な景観のレインボーブリッジを眺めることが可能。</p>
<p>どちらも素敵な景色だと思いますが、個人的にはレインボーブリッジを眺められる場所はたくさんあるので、リバービューの部屋に宿泊するのがおすすめです。</p>',
  '東京都港区海岸 1-16-2',
  'https://www.interconti-tokyo.com/',
  'インターコンチネンタル東京ベイ公式サイト',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  NULL,
  '<ul>
<li>新交通ゆりかもめ「竹芝駅」直結</li>
<li>JR・モノレール「浜松町駅」より徒歩8分</li>
<li>都営大江戸線・浅草線「大門駅」より徒歩10分</li>
</ul>',
  '<ul>
<li>収容台数:172台</li>
<li>宿泊の場合:1泊 ¥3,000</li>
<li>一般利用の場合:1時間 ¥660 / 2時間 ¥1,320</li>
</ul>',
  '<iframe title="インターコンチネンタル東京ベイの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.897008394082!2d139.7623749!3d35.653006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601863f77045b7c5%3A0x57394ad4ab41db77!2sInterContinental%20Tokyo%20Bay%2C%20an%20IHG%20Hotel!5e0!3m2!1sja!2sjp!4v1693040219805!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/BMHQJxE7_Rg?si=tlY-VPwFmfxIF7Od" title="インターコンチネンタル東京ベイから撮影した夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.7,
  3.5,
  4,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-9.jpg',
  true,
  '2023-08-29T23:39:47+09:00',
  '2023-08-29T23:39:47+09:00',
  '2024-07-29T15:49:56+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for interconti-tokyo-bay
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-9.jpg', '隅田川にかかる橋（一番手前から築地大橋、勝鬨橋、佃大橋）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-10.jpg', 'インターコンチネンタル東京ベイから眺める晴海エリアの夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-6.jpg', '隅田川を行き交う遊覧船の光跡', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-7.jpg', 'ライトアップされる築地大橋・勝鬨橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-11.jpg', '窓明かりが眩しい高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-12.jpg', 'ライトアップされる東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-5.jpg', '晴海方面のタワーマンション群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-3.jpg', '隅田川を行き交う遊覧船', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-4.jpg', '隅田川にかかる築地大橋・勝鬨橋', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-2.jpg', 'インターコンチネンタル東京ベイの客室', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-1.jpg', 'インターコンチネンタル東京ベイのエントランス', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-13.jpg', 'インターコンチネンタル東京ベイのフロント', 11);

-- FAQs for interconti-tokyo-bay
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), 'どんな夜景が楽しめますか？', '隅田川にかかる築地大橋・勝鬨橋・佃橋や東京スカイツリー、レインボーブリッジなどのランドマークを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), '築地大橋や勝鬨橋のライトアップは何時まで実施されていますか？', '築地大橋や勝鬨橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), '東京スカイツリーのライトアップは何時まで実施されていますか？', '東京スカイツリーのライトアップは日没から24時まで実施されています。', 2);

-- Hotel info for interconti-tokyo-bay
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'interconti-tokyo-bay'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1799%2F1799.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空席をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fintercontinental-tokyo-bay.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25E3%2581%2598%25E3%2582%2583%25E3%2582%2589%25E3%2582%2593%2B%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25BC%25E3%2582%25B3%25E3%2583%25B3%25E3%2583%2581%25E3%2583%258D%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25AB%25E6%259D%25B1%25E4%25BA%25AC%25E3%2583%2599%25E3%2582%25A4%26hotel_occupancy%3D2%26sxsrf%3DAB5stBgktIayHAqKh6-mbANm78u4SdrjeA%253A1689828337386%26ei%3D8bu4ZI6UF4X0-QahvLG4CA%26ved%3D0ahUKEwjO0J-OvZyAAxUFet4KHSFeDIcQ4dUDCBA%26uact%3D5%26oq%3D%25E3%2581%2598%25E3%2582%2583%25E3%2582%2589%25E3%2582%2593%2B%25E3%2582%25A4%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25BC%25E3%2582%25B3%25E3%2583%25B3%25E3%2583%2581%25E3%2583%258D%25E3%2583%25B3%25E3%2582%25BF%25E3%2583%25AB%25E6%259D%25B1%25E4%25BA%25AC%25E3%2583%2599%25E3%2582%25A4%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiOuOBmOOCg-OCieOCkyDjgqTjg7Pjgr_jg7zjgrPjg7Pjg4Hjg43jg7Pjgr_jg6vmnbHkuqzjg5njgqQyBRAAGIAESPQBUABYAHAAeAGQAQCYAYUBoAGFAaoBAzAuMbgBA8gBAPgBAvgBAeIDBBgAIEGIBgE%26sclient%3Dgws-wiz-serp" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000079%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 目黒天空庭園・オーパス夢ひろば (meguro-tenku-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'meguro-tenku-park',
  '目黒天空庭園・オーパス夢ひろば',
  'spot',
  (SELECT id FROM categories WHERE slug = 'meguro'),
  NULL,
  '目黒天空庭園・オーパス夢ひろば',
  '大橋ジャンクションの屋上にある全長400mのドーナツ型の公園。目黒区内にある数少ない夜景スポット。',
  '<p>首都高速と山手トンネルを結ぶ大橋ジャンクションの屋上にある全長400mのドーナツ型の公園。</p>
<p>桜や松など、1,000本以上の木々が庭園を美しく彩っており、都会の喧騒を離れてゆっくり寛ぐことができるように設計されている空間です。</p>
<p>9Fにある展望デッキからは目黒の街並み、東京タワー・六本木ヒルズ、富士山などを眺めることが可能。</p>
<p>また、夜になると園内は程よい明るさのフットライトが照らされて、とても良い雰囲気なのでデートでの利用もおすすめです。</p>',
  '東京都目黒区大橋1-9-4',
  'https://www.city.meguro.tokyo.jp/douro/shisetsu/sports/tenku.html',
  '目黒天空庭園・オーパス夢ひろば | 目黒区公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '7:00~21:00',
  'なし',
  '無料',
  '<ul>
<li>東急田園都市線池尻大橋駅から徒歩で3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0530260326964!2d139.6849832757864!3d35.6510651725969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4abbe170ab3%3A0x49b378992a0735fb!2z55uu6buS5aSp56m65bqt5ZyS!5e0!3m2!1sja!2sjp!4v1697864781349!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.5,
  3.3,
  3.5,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-6.jpg',
  true,
  '2023-10-22T20:51:52+09:00',
  '2023-10-22T20:51:52+09:00',
  '2023-12-11T20:33:23+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for meguro-tenku-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-6.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-7.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-5.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-4.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-3.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-2.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/meguro-tenku-park-1.jpg', NULL, 6);

-- FAQs for meguro-tenku-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), 'どんな夜景が楽しめますか？', '柵が高い夜景を見渡すのには向きませんが東京タワーや富士山を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-tenku-park'), '目黒天空庭園・オーパス夢ひろばの営業時間は何時までですか？', '目黒天空庭園・オーパス夢ひろばの営業時間は7:00~21:00までです。', 1);

-- Post: 二子玉川公園 (futagotamagawa-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'futagotamagawa-park',
  '二子玉川公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'setagaya'),
  NULL,
  '二子玉川公園',
  '高台から富士山や川崎方面の夜景を眺めることができるデートにおすすめの無料夜景スポット',
  '<p>二子玉川周辺の再開発・緑化事業に伴い平成25年4月にオープンした公園。</p>
<p>東西に長く広がる園内には夜景観賞に最適なスポットが複数点在しており、対岸の川崎方面の夜景をゆったりと観賞できます。林立する武蔵小杉駅周辺のマンション群はなかなかの迫力。</p>
<p>また空気の澄んだ日の夕方には富士山のシルエットを拝むことも可能です。</p>
<p>二子玉川駅からライズショッピングセンターを抜けた先にあり、アクセスしやすいのでぜひショッピングの帰りなどに立ち寄ってみてはいかがでしょうか。</p>
<p>園内にはスターバックスコーヒーがあり、店内やテラス席でゆっくりコーヒーを楽しむことができるので時間を潰すのにも最適です。</p>',
  '東京都世田谷区上野毛 1-16-1',
  'https://www.city.setagaya.lg.jp/mokuji/kusei/012/015/001/010/d00124898.html',
  '二子玉川公園 | 世田谷区ホームページ',
  NULL,
  NULL,
  'https://store.starbucks.co.jp/detail-1138/',
  'スターバックス二子玉川公園店',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東急田園都市線「二子玉川駅」 約8分</li>
<li>東急大井町線 「 大井町駅 」 約8分</li>
</ul>',
  '<ul>
<li>有料駐車場有り（23台まで）</li>
<li>【8:30～24:00】最初の60分間まで60分300円 以降20分ごとに100円</li>
<li>【0:00～8:30】60分ごとに100円</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4194.344620090411!2d139.62988095629711!3d35.60786252337912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f44730876229%3A0x26752e3be83f90df!2z5LqM5a2Q546J5bed5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1697953736185!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3.4,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-4.jpg',
  true,
  '2023-10-22T20:29:24+09:00',
  '2023-10-22T20:29:24+09:00',
  '2023-12-14T19:10:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for futagotamagawa-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-4.jpg', '二子玉川公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-3.jpg', '夕暮れ時の多摩川河川敷', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-6.jpg', 'スターバックス二子玉川公園店', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-7.jpg', '二子玉川公園のベンチ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-8.jpg', '武蔵小杉駅周辺のタワーマンション群の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-5.jpg', '二子玉川公園の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-2.jpg', '二子玉川公園の全景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/futakotamagawa-1.jpg', '武蔵小杉駅周辺のタワーマンション群', 7);

-- FAQs for futagotamagawa-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'どんな夜景が楽しめますか？', '川崎方面の夜景を眺めることができます。たくさんのタワーマンション群が林立する武蔵小杉駅周辺が見所です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'futagotamagawa-park'), 'スターバックス二子玉川公園店は何時まで営業していますか？', 'スターバックス二子玉川公園店の営業時間は07:00～21:00となっています。', 1);

-- Post: 築地大橋 (tsukiji-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tsukiji-bridge',
  '築地大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '築地大橋',
  '近未来的な造形が美しい隅田川にかかる橋。東京タワーを眺めることができる穴場スポット。',
  '<p>築地と勝どきを結ぶ築地大橋。</p>
<p>2018年に完成した近代的なフォルムの橋で、日没から23時まで毎日ライトアップが実施されています。</p>
<p>隅田川に架かる橋としては最も下流に位置しており、遮るものなく浜松町や芝浦エリアのビル群、東京タワーなどを眺めることができるので夜景のレベルも非常に高いです。</p>
<p>歩道も余裕を持った幅で作られているので、橋を渡りながら東京の夜景を満喫したい方におすすめ。</p>',
  '東京都中央区築地5丁目',
  'https://ja.wikipedia.org/wiki/%E7%AF%89%E5%9C%B0%E5%A4%A7%E6%A9%8B',
  '築地大橋 | wikipedia',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線 「 勝どき駅 」 から徒歩約10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="築地大橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12966.86756535962!2d139.7707272!3d35.6593462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b958e1487fb%3A0x7f53f1bc0ed06bdd!2z56-J5Zyw5aSn5qmL!5e0!3m2!1sja!2sjp!4v1698426759846!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3,
  3.4,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-heading-1.jpg',
  true,
  '2023-10-28T02:53:41+09:00',
  '2023-10-28T02:53:41+09:00',
  '2024-07-29T15:48:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for tsukiji-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-heading-1.jpg', 'ライトアップされる築地大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-0-1.jpg', '築地大橋の歩道', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tsukiji-bridge-03.jpg', '築地大橋から眺める浜松町方面のビル夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tsukiji-bridge-02.jpg', '築地大橋の歩道', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-1.jpg', '東京タワーと港区の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-2.jpg', '竹芝方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-3.jpg', '竹芝埠頭を眺める', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-4.jpg', '築地大橋から眺める夕景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-5.jpg', '中央区立勝どき見晴らし公園を眺める', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-bridge-7.jpg', '黄色にライトアップされる築地大橋', 9);

-- FAQs for tsukiji-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), 'どんな夜景が楽しめますか？', '浜松町や芝浦エリアのビル群、東京タワー、勝どきのタワーマンション群、勝鬨橋のライトアップなどを見渡すことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), '築地大橋のライトアップは何時まで実施されていますか？', '築地大橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-bridge'), '築地大橋が開通したのはいつですか？', '築地大橋は2018年に開通した橋です。', 2);

-- Post: ホテルメトロポリタン丸の内 (hotel-metropolitan-marunouchi)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'hotel-metropolitan-marunouchi',
  'ホテルメトロポリタン丸の内',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  'ホテルメトロポリタン丸の内',
  '東京駅を見下ろせる圧巻のトレインビューと都会らしいビル夜景が楽しめる高層ホテル。平日のほうが光量の多い夜景が楽しめる。',
  '<p>東京駅の日本橋口からすぐの場所にあるサピアタワー27階～34階に入居するホテルメトロポリタン丸の内。</p>
<p>ウリはなんといっても東京駅を見下ろすことが出来る眺望。夜にはまるでSFの世界にいるような迫力のある都市夜景を堪能することができます。</p>
<p>新幹線、在来線が数十本も走る圧巻のトレインビューも魅力で窓の先の景色はずっと見ていても飽きが来ません。</p>
<p>東京駅からすぐの場所にあり立地も素晴らしいですし、館内の施設も充実しているのでぜひ東京を訪れた際に宿泊してみてはいかがでしょうか？</p>',
  '東京都千代田区丸の内 1-7-12',
  'https://marunouchi.metropolitan.jp/',
  'ホテルメトロポリタン丸の内 公式サイト',
  'https://visit-chiyoda.tokyo/app/spot/detail/568',
  'ホテルメトロポリタン丸の内 | VISIT CHIYODA',
  'https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%94%E3%82%A2%E3%82%BF%E3%83%AF%E3%83%BC',
  'サピアタワー - Wikipedia',
  NULL,
  NULL,
  NULL,
  '<ul>
<li> JR東京駅日本橋口直結、日本橋口より徒歩1分、八重洲北口改札より徒歩約2分</li>
<li> 東京メトロ東西線大手町駅B7出口より徒歩約1分</li>
</ul>',
  '<ul>
<li>サピアタワー地下2階、地下3階に駐車場あり</li>
<li> 宿泊の場合、1 泊 1 台 2,000円</li>
<li> 出入庫 24 時間可能</li>
</ul>',
  '<iframe title="ホテルメトロポリタン丸の内の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.908977848072!2d139.7684826!3d35.6837175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfec5da0093%3A0xd073e28f3d97b597!2z44Ob44OG44Or44Oh44OI44Ot44Od44Oq44K_44Oz5Li444Gu5YaF!5e0!3m2!1sja!2sjp!4v1677761407052!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe title="ホテルメトロポリタン丸の内の客室から撮影した夕景タイムラプス映像" width="560" height="315" src="https://www.youtube.com/embed/tTj5HVN1a1Q?si=Q_Gq2U408NlOVBfY"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.4,
  5,
  5,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-01.jpg',
  true,
  '2023-10-28T07:10:00+09:00',
  '2023-10-28T07:10:00+09:00',
  '2025-03-04T13:21:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for hotel-metropolitan-marunouchi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-01.jpg', 'ホテルメトロポリタン丸の内から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-02.jpg', 'KITTE丸の内、新丸ビルなど丸の内方面の高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-03.jpg', 'ホテルメトロポリタン丸の内から眺めるビル夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-04.jpg', 'ライトアップされる東京駅と東京駅丸の内駅前広場', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-05.jpg', '夕暮れ時の東京駅の様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-06.jpg', '霞が関方面に夕日が沈む様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-07.jpg', '日が沈む直前の東京駅の様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-08.jpg', 'ホテルメトロポリタン丸の内の客室（ステーションサイド クイーン）の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-10.jpg', '大きな窓の先に広がるトレインビュー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/marunouchi-metropolitan-09.jpg', 'ホテルメトロポリタン丸の内の館内の様子', 9);

-- FAQs for hotel-metropolitan-marunouchi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'どんな夜景が楽しめますか？', '客室からは東京駅のトレインビューや都会らしい高層ビル群の夜景を堪能することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'ホテルメトロポリタン丸の内はいつ開業したホテルですか？', '2007年5月に開業したホテルです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'ホテルメトロポリタン丸の内はサピアタワーの何階部分にありますか？', 'サピアタワーの27階～34階です。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), 'ホテルメトロポリタン丸の内の周辺にコンビニはありますか？', 'サピアタワー1Fにコンビニがあります。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), '館内にはどんな施設がありますか？', 'レストラン（1施設）、ミーティングルーム、ビジネスセンター、 フィットネスルーム（宿泊者限定）、コインランドリー （宿泊者専用）があります。', 4);

-- Hotel info for hotel-metropolitan-marunouchi
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'hotel-metropolitan-marunouchi'), '15:00', '12:00', 'ナイトウェア（セパレートパジャマ）、バスタオル、フェイスタオル、ハンドタオル、ハンドソープ、歯ブラシ、ヘアブラシ、コットン、綿棒、シャンプー、コンディショナー、ボディソープ、ボディウォッシュタオル、かみそり、ヘアバンド、シャワーキャップ、スキンケアセット（クレンジング・洗顔料・オールインワンゲル）', '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56634%2F56634.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fmetropolitan-marunouchi.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad303873%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00001278%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: 銀座シックス屋上庭園 GINZA SIXガーデン (ginza-six-garden)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'ginza-six-garden',
  '銀座シックス屋上庭園 GINZA SIXガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '銀座シックス屋上庭園・GINZA SIXガーデン',
  '銀座和光本館や東京タワーなどを見下ろすことができる屋上庭園。23:00まで入場可能な大人の夜景スポット。',
  '<p>2017年4月に開業したラグジュアリーな大型商業施設である銀座シックス。</p>
<p>同ビルの13階屋上フロアには約1,200坪の広さを誇る回廊式庭園があり、誰でも無料で立ち入ることが可能です。</p>
<p>憩いの広場を中心に芝生ゾーン、水盤ゾーン、森林ゾーン、回遊ゾーンがあり、緑豊かで自然を感じられる庭園は非常に雰囲気もよくデートにピッタリ。</p>
<p>高さはそこまでないため迫力にはやや欠けますが銀座和光本館や東京タワーなどの眺めは一見の価値があります。</p>
<p>営業時間も23:00までとなっているので銀座でデートした帰り道などにぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都中央区銀座6-10-1',
  'https://ginza6.tokyo',
  '銀座シックス公式サイト',
  'https://www.instagram.com/ginzasix_official/',
  '銀座シックスInstgramアカウント',
  NULL,
  NULL,
  '7:00～23:00',
  '不定休',
  '無料',
  '<ul>
<li>東京メトロ 銀座線・丸ノ内線・日比谷線「銀座駅」A3出口徒歩2分</li>
<li>東京メトロ 日比谷線、都営地下鉄 浅草線「東銀座駅」A1出口徒歩3分</li>
<li>東京メトロ 有楽町線 「銀座一丁目駅」9番出口徒歩8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.297007571371!2d139.76184956525836!3d35.66968813019691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bef472c0001%3A0xcfcb0363f18109fc!2sGINZA%20SIX!5e0!3m2!1sja!2sjp!4v1689138715236!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3.6,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-5.jpg',
  true,
  '2023-12-09T00:18:38+09:00',
  '2023-12-09T00:18:38+09:00',
  '2023-12-26T11:58:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for ginza-six-garden
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-5.jpg', 'GINZA SIXから眺める銀座和光本館', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-2.jpg', '銀座シックスの雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-1.jpg', 'GINZA SIXから眺めるユニクロ銀座店', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-3.jpg', '雰囲気のよい屋上庭園', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-8.jpg', 'GINZA SIXから眺める銀座の街並み', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-4.jpg', 'GINZA SIXで実施されているクリスマスイルミネーション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-7.jpg', 'GINZA SIXから眺める東京スカイツリー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/ginza-six-9.jpg', 'GINZA SIXから眺める東京タワー', 7);

-- FAQs for ginza-six-garden
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), 'どんな夜景が楽しめますか？', '銀座和光本館や東京タワー、東京スカイツリーなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ginza-six-garden'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 夢の大橋 (dream-bridge)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'dream-bridge',
  '夢の大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '夢の大橋',
  'ベイエリアの眺めを堪能できる360mの歩行者専用橋。お台場エリアでのデート後に立ち寄るのがおすすめ。',
  '<p>青海と有明を結ぶ歩行者専用橋である夢の大橋。</p>
<p>全長360m、最大幅約60メートルからはシーリアお台場やタワーズお台場などのタワーマンションや首都高を行き交う車両などを眺めることができます。</p>
<p>光量が非常に多く夜景のレベルも高いです。また、橋を照らす街灯は「祭のにぎわい」をコンセプトに造られており、個性的な形をしているのが特徴。</p>
<p>お台場エリアでのデートの帰り道などにぜひ立ち寄ってみてください。</p>',
  '東京都江東区有明3-1-10',
  'https://www.yurikamome.co.jp/sightseeing/facility/000676.html',
  '夢の大橋 | ゆりかもめ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ「お台場海浜公園駅」から徒歩8分</li>
<li>りんかい線「青海駅」 から徒歩8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.844672433974!2d139.7843945!3d35.6286838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889921d634c5b%3A0xd6727c5ce353f295!2z5aSi44Gu5aSn5qmL!5e0!3m2!1sja!2sjp!4v1698586364518!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.2,
  3.5,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-02.jpg',
  true,
  '2023-10-29T22:39:31+09:00',
  '2023-10-29T22:39:31+09:00',
  '2023-12-14T19:15:43+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for dream-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-02.jpg', '夢の大橋から眺める有明JCT', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-03.jpg', '夢の大橋の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-04.jpg', '夢の大橋から眺めるお台場方面の景色', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-06.jpg', '東京ベイコート倶楽部と夢の大橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-05.jpg', '豊洲方面のタワーマンション群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/dream-bridge-07.jpg', '夢の大橋から眺めるシンボルプロムナード公園', 5);

-- FAQs for dream-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'dream-bridge'), 'どんな夜景が楽しめますか？', '有明JCTやお台場エリアの夜景を眺めることができます。', 0);

-- Post: 練馬区役所本庁舎 展望ロビー (nerima-ward-office)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'nerima-ward-office',
  '練馬区役所本庁舎 展望ロビー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'nerima'),
  NULL,
  '練馬区役所展望ロビー',
  '高さ80mから都心の摩天楼や富士山を一望できる練馬区屈指の夜景スポット。展望ロビー内で食事も楽しめる。',
  '<p>練馬区役所本庁舎の20Fにある<a href="https://nightscape.tokyo/article/observatory">展望ロビー</a>。</p>
<p>3方面に展望窓があり、都心の高層ビル群や富士山などを眺めることができます。</p>
<p>高さ80mから眺める街並みは光量も多く、入場料無料とは思えない光景を楽しめます。</p>
<p>同フロアにはレストランもあり、食事をしながら夜景を楽しむことも可能。</p>
<p>平日、休日問わず落ち着いて夜景鑑賞できる穴場スポットなので、気になった方はぜひお立ち寄りください。</p>',
  '東京都練馬区豊玉北 6-12-1',
  'https://www.city.nerima.tokyo.jp/shisetsu/ku/ku/tenbo.html',
  '展望ロビー・展望レストラン | 練馬区役所公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '午前9時～午後9時30分(12月28日は午後8時まで)',
  '毎月第4日曜日、12月29日 ~ 1月3日',
  '無料',
  '<ul>
<li>西武池袋線、西武有楽町線、都営大江戸線「練馬駅」からそれぞれ徒歩5分</li>
</ul>',
  '<ul>
<li>施設内に駐車場有り（30分 100円/以降15分毎100円）</li>
<li>平日：8時15分～午後10時</li>
<li>土日祝：8時45分～午後10時</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12954.421909775068!2d139.6518145!3d35.7359201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ed0a23147eff%3A0xd58c2da1864a50b!2z57e06aas5Yy65b255omAIOacrOW6geiIjg!5e0!3m2!1sja!2sjp!4v1699010625333!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '80m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.8,
  3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-7.jpg',
  true,
  '2023-11-03T20:33:39+09:00',
  '2023-11-03T20:33:39+09:00',
  '2024-02-04T12:39:49+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for nerima-ward-office
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-7.jpg', '練馬区役所展望ロビーから眺める富士山', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-6.jpg', '練馬区役所展望ロビーから眺める夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-5.jpg', '夕暮れ時の富士山の眺め', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-12.jpg', 'たくさんの車が行き交う目白通り', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-9.jpg', '練馬駅周辺の街並み', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-4.jpg', '練馬区役所展望ロビーから眺める夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-11.jpg', '練馬区役所展望ロビーから眺める高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-10.jpg', '練馬区役所展望ロビーから眺める東京スカイツリー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-3.jpg', '展望ロビー内にあるレストラン', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/nerima-ward-office-1.jpg', '練馬区役所展望ロビーの雰囲気', 9);

-- FAQs for nerima-ward-office
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), 'どんな夜景が楽しめますか？', '都心の高層ビル群や富士山などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nerima-ward-office'), '練馬区役所からダイアモンド富士が眺められる時期はいつ？', '1月と11月の21日にダイアモンド富士を眺めることができます。', 1);

-- Post: 竹芝客船ターミナル 竹芝埠頭公園 (akeshiba-passenger-ship-terminal)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'akeshiba-passenger-ship-terminal',
  '竹芝客船ターミナル 竹芝埠頭公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '竹芝客船ターミナル（竹芝埠頭公園）',
  '伊豆諸島・小笠原諸島などの島々を結ぶ玄関口。東京湾の美しい眺めを堪能できる穴場夜景スポット。',
  '<p>伊豆諸島・小笠原諸島などの島々へ渡る定期航路が結ばれる竹芝客船ターミナル。</p>
<p>海沿いに約500ｍに渡る開放的なデッキがあり、東京スカイツリー、レインボーブリッジ、晴海方面の高層ビル群などを眺めることができます。</p>
<p>フロア内は夜になると程よい明るさのフットライトが点灯し、雰囲気もよいです。</p>
<p>都会の喧騒から離れてゆっくり夜景を楽しめる場所なので、デートコースにもおすすめです。</p>',
  '東京都港区海岸 1-12-2',
  'https://visit-minato-city.tokyo/ja-jp/places/494',
  '竹芝客船ターミナル | 港区観光協会 |',
  NULL,
  NULL,
  'http://www.tptc.co.jp/terminal/guide/takeshiba',
  '竹芝客船ターミナル｜東京港客船ターミナル',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ「竹芝駅」から徒歩約1分</li>
<li>JR「浜松町駅」から徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.692421629128!2d139.7627119!3d35.6542661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bd1d42c2829%3A0x1123967c23b252f9!2z56u56Iqd5a6i6Ii544K_44O844Of44OK44Or!5e0!3m2!1sja!2sjp!4v1700315485002!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3,
  3.5,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-4.jpg',
  true,
  '2023-11-18T23:06:23+09:00',
  '2023-11-18T23:06:23+09:00',
  '2024-09-24T03:07:09+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for akeshiba-passenger-ship-terminal
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-4.jpg', '竹芝客船ターミナルの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-5.jpg', 'ライトアップされる築地大橋と月島方面のタワーマンション群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-6.jpg', 'ライトアップされるレインボーブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-12.jpg', '竹芝客船ターミナルから眺める晴海エリアのタワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-15.jpg', 'フットライトが点灯良い雰囲気の遊歩道', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-7.jpg', 'レインボーブリッジとフジテレビ本社屋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-11.jpg', '竹芝客船ターミナルの雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-1.jpg', '竹芝埠頭公園にある船の帆をイメージしたモニュメント', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-10.jpg', '竹芝客船ターミナルの雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takebashi-port-3.jpg', 'ライトアップされる竹芝ふ頭連絡橋', 9);

-- FAQs for akeshiba-passenger-ship-terminal
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), 'どんな夜景が楽しめますか？', '東京スカイツリー、レインボーブリッジ、晴海方面の高層ビル群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akeshiba-passenger-ship-terminal'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 東京ポートシティ竹芝 スキップテラス (tokyo-port-city-takeshiba)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'tokyo-port-city-takeshiba',
  '東京ポートシティ竹芝 スキップテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '東京ポートシティ竹芝 スキップテラス',
  '竹芝客船ターミナル方面の夜景が美しい展望スペース。寝そべりながら夜景鑑賞できるベンチが設けられている大人の空間。',
  '<p>2022年に開業した地上40階のオフィスタワーである、東京ポートシティ竹芝。</p>
<p>ソフトバンクグループの本社屋があることでも有名なビルです。</p>
<p>2〜6階の低層階にはスキップテラスというパブリックスペースあり、ウォーターズ竹芝や竹芝客船ターミナル方面や、首都高速道路の浜崎橋ジャンクションの夜景が見ることができます。</p>
<p>緑豊かで雰囲気も良く、寝そべることもできるベンチなどの設備も充実しているのでゆっくり夜景鑑賞をするのにうってつけです。</p>
<p>休日は人の数もとても落ち着いているので、デートコースに立ち寄ってみてはいかがでしょうか？</p>',
  '東京都港区海岸 1-7-1',
  'https://tokyo-portcity-takeshiba.jp/',
  '東京ポートシティ竹芝 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '7:00-23:00',
  'なし',
  '無料',
  '<ul>
<li>JR山手線・京浜東北線・東京モノレール「浜松町駅」徒歩4分</li>
<li>ゆりかもめ線「竹芝駅」徒歩2分</li>
<li>都営地下鉄浅草線・大江戸線「大門駅」徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.538470052357!2d139.7606699!3d35.6552143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7e9c0d08a7%3A0xe97d025b25f3950f!2z5p2x5Lqs44Od44O844OI44K344OG44Kj56u56Iqd44Kq44OV44Kj44K544K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1700324678294!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3,
  3.4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-6.jpg',
  true,
  '2023-11-19T07:38:23+09:00',
  '2023-11-19T07:38:23+09:00',
  '2023-11-23T09:57:28+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tokyo-port-city-takeshiba
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-6.jpg', '東京ポートシティ竹芝スキップテラスの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-1.jpg', '竹芝客船ターミナル方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-5.jpg', '東京ポートシティ竹芝スキップテラスに設置されたベンチ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-2.jpg', '竹芝客船ターミナル方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-4.jpg', '東京ポートシティ竹芝スキップテラスの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/takabashi-tower-3.jpg', 'ゆりかもめ線「竹芝駅」周辺の夜景', 5);

-- FAQs for tokyo-port-city-takeshiba
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-port-city-takeshiba'), 'どんな夜景が楽しめますか？', 'ウォーターズ竹芝や竹芝客船ターミナル方面や、首都高速道路の浜崎橋ジャンクションの夜景が見ることができます。', 0);

-- Post: 葛西臨海公園 (kasai-rinkai-koen)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'kasai-rinkai-koen',
  '葛西臨海公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'edogawa'),
  NULL,
  '葛西臨海公園',
  'インスタ映えするフォトジェニックなスポットが点在する無料の夜景スポット。水族館、鳥類園などもあり1日デートにおすすめ。',
  '<p>1989年に開園した葛西臨海公園。</p>
<p>東京ドーム17個分に相当する広大な園内には展望レストハウスや水族館、鳥類園、観覧車、バーベキュー広場などの施設があります。</p>
<p>展望レストハウス クリスタルビューはアルミサッシとガラスをメインに軽やかで透明感溢れる建物でSNS映えするスポットとしても有名。</p>
<p>2階の展望フロアからは房総半島方面の景色を一望することができます。</p>
<p>また、本施設は東京湾に面しており、夜になるとライトアップされた東京タワーや東京ゲートブリッジなどのランドマークを見渡すことも可能。</p>
<p>1日を通して様々な楽しみ方ができる場所なので、休日のデートなどでぜひ訪れてみてはいかがでしょうか？</p>',
  '東京都江戸川区臨海町 6-1',
  'https://www.tokyo-park.or.jp/park/format/index026.html',
  '葛西臨海公園｜公園へ行こう！',
  'https://www.city.edogawa.tokyo.jp/e066/kuseijoho/gaiyo/shisetsuguide/bunya/koendobutsuen/kasai.html',
  '葛西臨海公園 | 江戸川区ホームページ',
  'https://www.tokyo-zoo.net/zoo/kasai/',
  '葛西臨海公園水族館',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京葉線「葛西臨海公園」より徒歩1分</li>
</ul>',
  '<ul>
<li>24時間営業</li>
<li>普通車 1時間まで200円（以後30分毎に100円）</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12969.68613244389!2d139.8603206!3d35.6419847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d518db27a07%3A0x16a09c88d4b35113!2z6JGb6KW_6Ieo5rW35YWs5ZyS!5e0!3m2!1sja!2sjp!4v1702472701179!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.8,
  3.6,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-10.jpg',
  true,
  '2023-12-13T22:07:28+09:00',
  '2023-12-13T22:07:28+09:00',
  '2024-09-21T20:33:56+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'gate-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for kasai-rinkai-koen
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-10.jpg', '夕暮れ時の展望レストハウスクリスタルビュー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-8.jpg', '高さ117mの大観覧車がライトアップされる様子', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-9.jpg', '夕暮れ時の展望レストハウスクリスタルビュー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-2-2.jpg', 'ライトアップされる東京ゲートブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-1-2.jpg', '黄昏時の空と東京湾', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-14.jpg', '葛西臨海公園から眺める東京ディズニーランド', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-7.jpg', 'ダイヤと花の大観覧車', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-3.jpg', '葛西臨海公園の展望広場', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-2.jpg', '夕日を浴びる展望レストハウスクリスタルビュー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-4.jpg', '葛西臨海公園の展望広場', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-5.jpg', '夕日を浴びる展望レストハウスクリスタルビュー', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kasai-rinkai-park-1.jpg', 'フォトジェニックな展望レストハウスクリスタルビュー', 11);

-- FAQs for kasai-rinkai-koen
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京タワーや東京ゲートブリッジを眺めることができます。また夕暮れ時の展望レストハウス・クリスタルビューの景観も非常に美しいです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), '展望レストハウスクリスタルビューの営業時間は何時までですか？', '展望レストハウスクリスタルビューは9：00 ～ 17：00まで営業しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kasai-rinkai-koen'), '「ダイヤと花の大観覧車」の営業時間は何時までですか？', '平日は10：00 ～ 19：00、土日祝は10：00 ～ 20：00まで営業しています。', 2);

-- Post: ラビスタ東京ベイ (la_tokyobay)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'la_tokyobay',
  'ラビスタ東京ベイ',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  'ラビスタ東京ベイ（共立リゾート）',
  '晴海エリアの高層ビル群の眺めを独り占めできるホテル。ベイエリアを見渡せる天然温泉サウナや海産物を豊富に取り揃えバイキングも大人気。',
  '<p>2022年4月15日に開業したラビスタ東京ベイ。14階建のホテルからは湾岸エリアの都会的な景色を堪能することができます。</p>
<p>1番の見どころは北西側のベイビュー。</p>
<p>豊洲大橋の先にずらっと晴海エリアの高層タワーマンション群が並ぶ夜景は圧巻の一言です。</p>
<p>また南西側の豊洲ぐるり公園やレインボーブリッジなの眺めもなかなかの迫力。</p>
<p>また同ホテルは天然温泉やサウナ、スポーツジムなどの施設も充実しています。</p>
<p>海産物を豊富に取り揃えたバイキングなども人気で1日を通して様々な楽しみ方ができるホテルです。</p>
<p>豊洲アリアでも随一の人気を誇る宿泊施設なので気になった方はぜひ泊まってみてください。</p>',
  '東京都江東区豊洲 6-4-40',
  'https://www.hotespa.net/hotels/la_tokyobay/',
  '【公式】ラビスタ東京ベイ｜ホテル - 共立リゾート',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>新交通ゆりかもめ「市場前」駅 直結</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.928808750918!2d139.7840088!3d35.6466503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889284cb62b09%3A0x373d48d832ff842!2z44Op44OT44K544K_5p2x5Lqs44OZ44Kk!5e0!3m2!1sja!2sjp!4v1702697714155!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/c-Ei_gJJAhs?si=1XC3ez5U_SMzGij9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4,
  4,
  4.2,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-13.jpg',
  true,
  '2023-12-17T22:37:16+09:00',
  '2023-12-17T22:37:16+09:00',
  '2024-06-14T00:22:45+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for la_tokyobay
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-13.jpg', 'ラビスタ東京ベイから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ravista-1.jpg', '豊洲大橋と晴海エリアの摩天楼', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-16.jpg', '晴海エリアのタワーマンション群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-1-1.jpg', '富士山と港区エリアのビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-1-2-1.jpg', '豊洲 千客万来を見下ろす', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-17.jpg', 'レインボーブリッジと富士山', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-15.jpg', '晴海大橋方面の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-12.jpg', 'レインボーブリッジと豊洲ぐるり公園', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-11.jpg', 'お台場方面の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-5.jpg', '富士山の付近に夕陽が沈む様子', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-6.jpg', 'ラビスタ東京ベイから眺める景色', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-7.jpg', '晴海エリアのタワーマンション群', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-sakura-park.jpg', '晴海大橋と新豊洲さくら広場', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-4.jpg', '晴海大橋方面の街並み', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-1.jpg', 'ラビスタ東京ベイの外観', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-2.jpg', 'ラビスタ東京ベイの客室の雰囲気', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-3.jpg', 'ラビスタ東京ベイのエレベーター付近にある展望スペース', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-front.jpg', 'ラビスタ東京ベイのロビーラウンジ', 17);

-- FAQs for la_tokyobay
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'どんな夜景が楽しめますか？見どころはどこですか？', '豊洲大橋の先にずらっと晴海エリアの高層タワーマンション群が並ぶ景色やライトアップされたレインボーブリッジを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'ラビスタ東京ベイのチェックイン、チェックアウト時刻は何時ですか？', 'チェックインは15時、チェックアウトは11:00までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), 'レインボーブリッジのライトアップ何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没約30分後～24時までです。', 2);

-- Hotel info for la_tokyobay
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'la_tokyobay'), '15:00', '11:00', NULL, '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Frabisutadong-jing-bei.ja.html" rel="nofollow">Booking.comで空室状況を見る</a> <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183390%2F183390.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室状況をチェック</a>', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad307416%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室状況をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00002992%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室状況をチェック</a>');

-- Post: 豊洲六丁目第二公園 (toyosu-6-2-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'toyosu-6-2-park',
  '豊洲六丁目第二公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲六丁目第二公園',
  '美しく整備された遊歩道から東雲運河沿いのビル夜景が楽しめる穴場スポット。',
  '<p>新豊洲エリアの運河沿いある豊洲六丁目第二公園。</p>
<p>遊歩道が整備されており、その途中には複数の展望デッキスペースがあります。</p>
<p>東雲運河越しに見える昭和大学江東豊洲病院、東雲の高層マンション群などは光量も多く夜景鑑賞にうってつけです。</p>
<p>間接照明の雰囲気もよく、程よい距離を歩くことができるので、デートでの利用もおすすめ。</p>',
  '東京都江東区豊洲 6-2-1',
  'https://iko-yo.net/facilities/142402',
  '豊洲六丁目第二公園 | 子供とお出かけ情報「いこーよ」',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ 新豊洲駅より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.309799636329!2d139.7927032!3d35.6504634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188997f9fcf2f3%3A0xfb207ae11b3af39a!2z6LGK5rSy5YWt5LiB55uu56ys5LqM5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1702735741124!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.2,
  3.4,
  4.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-2.jpg',
  true,
  '2023-12-18T21:20:47+09:00',
  '2023-12-18T21:20:47+09:00',
  '2024-06-16T10:27:45+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for toyosu-6-2-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-5.jpg', '豊洲六丁目第二公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-8.jpg', '雰囲気の良い間接照明が点灯する遊歩道', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-9.jpg', '東雲運河越しに見える東雲の高層マンション群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-4.jpg', 'ゆりかもめ線のレールと晴海エリアのタワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-1.jpg', '遊歩道の展望スペースから眺める夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-2-park-6.jpg', '豊洲六丁目第二公園の夜景', 5);

-- FAQs for toyosu-6-2-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東雲運河越し昭和大学江東豊洲病院、高層マンション群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-2-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 新豊洲さくら広場 (toyosu-sakura-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'toyosu-sakura-park',
  '新豊洲さくら広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '新豊洲さくら広場',
  '湾岸エリアの夜景が美しい無料の夜景スポット。豊洲の夜散歩コースにおすすめ。',
  '<p>ゆりかもめ線「新豊洲駅」と「市場前駅」の間にある新豊洲さくら広場。</p>
<p>広大な敷地内にはサイタブリアフードラボ、新豊洲Brilliaランニングスタジアム、My Villageなどさまざまな商業施設が並びます。</p>
<p>広場からは晴海方面の高層マンション群や晴海大橋、豊洲大橋などを眺めることができます。</p>
<p>光量が多く綺麗な景色を堪能できるので、豊洲周辺を訪れた際にぜひ立ち寄ってみてください。</p>',
  '東京都江東区豊洲 6-4',
  'https://sportxart.jp/spot/sakura/',
  '新豊洲さくら広場 | エリア情報 | SPORT×ART 新豊洲',
  NULL,
  NULL,
  'https://tabelog.com/tokyo/A1313/A131307/13239617/',
  '屋外レストラン サイタブリア ベイパーク グリル バー',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線　市場前駅から徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="新豊洲さくら広場の位置・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.624416885834!2d139.7863833!3d35.6485254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188990803e1c13%3A0x5a9c2d5f2d833760!2z5paw6LGK5rSy44GV44GP44KJ5bqD5aC0!5e0!3m2!1sja!2sjp!4v1704450595545!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  2.9,
  3.7,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-2.jpg',
  true,
  '2023-12-18T08:20:52+09:00',
  '2023-12-18T08:20:52+09:00',
  '2024-09-21T20:32:17+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for toyosu-sakura-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-2.jpg', '新豊洲さくら広場から眺める晴海大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-5.jpg', 'CITABRIA BAYPARK Grill & Bar', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-3.jpg', '美しく整備された遊歩道', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-4.jpg', '緑色にライトアップ豊洲大橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-1.jpg', '晴海方面の高層ビル群', 4);

-- FAQs for toyosu-sakura-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '晴海方面の高層マンション群や晴海大橋、豊洲大橋などが見所です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-sakura-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 晴海臨海公園 水辺のテラス (harumi-rinkai-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'harumi-rinkai-park',
  '晴海臨海公園 水辺のテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '晴海臨海公園 水辺のテラス',
  '大迫力の高層ビルを見上げることができる無料の夜景スポット。ららぽーと豊洲などで遊んだ帰りに足を伸ばしてみるのがおすすめ。',
  '<p>超高層マンションが建ち並ぶ晴海地区の一角にある晴海臨海公園。</p>
<p>運河に面した全長600mの遊歩道は水辺テラスと呼ばれており、ゆっくり夜景鑑賞をしながら散歩をすることができます。</p>
<p>対岸にはららぽーと豊洲、東雲の高層マンション群、レンボーブリッジなどの景色が広がります。</p>
<p>雰囲気も非常によく、デートコースとして利用するのにおすすめの公園です。</p>',
  '東京都中央区晴海 2-4-27',
  'https://chuo-tokyo.net/harumirinkaikoemmizubenoterasu/',
  '晴海臨海公園 水辺のテラス - 東京都中央区',
  NULL,
  NULL,
  'https://www.chuoku-machikadotenjikan.jp/feature/special08_osusume03.html',
  '晴海臨海公園 水辺のテラス | 月島エリア特集',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき駅」 約12分</li>
<li>メトロ有楽町線「豊洲駅」 約12分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.6487970596163!2d139.78292805365112!3d35.65355804315442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018899cf9640963%3A0x595df0bd9bdaa77a!2z5pm05rW36Ieo5rW35YWs5ZySIOawtOi-uuOBruODhuODqeOCuQ!5e0!3m2!1sja!2sjp!4v1702794131564!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.3,
  2.9,
  4,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-10.jpg',
  true,
  '2023-12-18T00:46:21+09:00',
  '2023-12-18T00:46:21+09:00',
  '2024-09-24T02:59:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for harumi-rinkai-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-10.jpg', '晴海臨海公園・水辺のテラスの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-13.jpg', 'ライトアップされるららぽーと豊洲のアーバンドック', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-5.jpg', '晴海臨海公園・水辺の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-4.jpg', 'ライトアップされるレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-12.jpg', '豊洲エリアの高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-8.jpg', '晴海エリアの高層ビル群を見上げる', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-1.jpg', '豊洲エリアの高層ビル群', 6);

-- FAQs for harumi-rinkai-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '対岸にららぽーと豊洲、東雲の高層マンション群、レンボーブリッジなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-rinkai-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 豊洲六丁目公園 (toyosu-6-park)
INSERT INTO spots (
  slug, title, type, category_id, content,
  name, lead, report, address,
  official_url, official_label, sns_url, sns_label,
  relation_url, relation_label,
  hours, holiday, money, station, parking, map, height, movie,
  asoview, asoview_02,
  latitude, longitude,
  rating_beautiful, rating_access, rating_atmosphere, rating_cost,
  featured_image, published, published_at, created_at, updated_at
) VALUES (
  'toyosu-6-park',
  '豊洲六丁目公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲六丁目公園',
  '豊洲・東雲エリアの高層マンションが見渡せる雰囲気の良い公園',
  '<p>円形の芝生広場が特徴の豊洲六丁目公園。</p>
<p>敷地面積が16,000平方メートルと広く、とても開放感があります。</p>
<p>広場の目の前には44階建のスカイタワー&ガーデンを見上げることができ、さらに東雲運河沿いのタワーマンション群の眺望も美しいです。</p>
<p>また、東雲運河沿いは遊歩道やベンチが設置されているのでゆっくり夜景鑑賞することができます。</p>
<p>雰囲気が良いため、散歩やデートを楽しむのにおすすめです。</p>',
  '東京都江東区豊洲 6-2-35',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ 「 新豊洲駅 」 約5分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6484.437757805021!2d139.7905732!3d35.6469786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889966e6fd717%3A0x261467211458550e!2z6LGK5rSy5YWt5LiB55uu5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1702796018324!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  2.9,
  3.2,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-4.jpg',
  true,
  '2023-12-18T06:59:01+09:00',
  '2023-12-18T06:59:01+09:00',
  '2023-12-19T15:14:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for toyosu-6-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-4.jpg', '豊洲六丁目公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-6.jpg', '円形が特徴の豊洲六丁目公園', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-7.jpg', 'テプコ豊洲と豊洲6丁目公園', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-5.jpg', '東雲運河沿いのタワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-3.jpg', 'スカイタワー&ガーデンを見上げる', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-8.jpg', '美しく整備された遊歩道とベンチ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-2.jpg', '豊洲六丁目公園の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-6-park-1.jpg', '円形が特徴の豊洲六丁目公園', 7);

-- FAQs for toyosu-6-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '広場の目に前にある44階建のスカイタワー&ガーデンや東雲運河沿いのタワーマンション群の眺望が美しいです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-6-park'), 'Can I use a tripod to take night shots?', 'Using a tripod is not prohibited. Enjoy shooting with good manners.', 1);

