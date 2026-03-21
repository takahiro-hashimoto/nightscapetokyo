-- Post: 豊洲大橋 (toyosu-bridge)
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
  'toyosu-bridge',
  '豊洲大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲大橋',
  '豊洲と月島エリアにかかる550mの橋。徒歩で渡ることが可能で、端の中腹にある展望スペースからの眺望が美しい。',
  '<p>豊洲市場の開業に合わせて、2018年に一般開通された全長550mの豊洲大橋。</p>
<p>徒歩で渡ることができ、橋の中腹には小さな展望スペースが設けられています。</p>
<p>南西方面にはライトアップされたレインボーブリッジや港区エリアの眺望が広がります。</p>
<p>北東方面の晴海エリアのタワーマンション群やららぽーと豊洲などの眺望も非常に美しいです。</p>
<p>また、豊洲大橋は2020年からライトアップも実施されています。点灯時間は日没15分後から23時まで。</p>
<p>豊洲エリアは夜景鑑賞にうってつけの場所が多数点在しているので、夜の散歩にぜひ利用してみてください。</p>',
  '東京都江東区豊洲6丁目 ~ 中央区晴海4丁目',
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
<li>ゆりかもめ線「市場前駅」より徒歩9分</li>
<li>ゆりかもめ線「新豊洲駅」より徒歩13分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="豊洲大橋の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1458496384307!2d139.7788170757863!3d35.648778072597715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889855559a021%3A0xceb85feaccce2cd8!2z5p2x5LqsIOixiua0suWkp-apiw!5e0!3m2!1sja!2sjp!4v1702850832691!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.4,
  2.9,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-11.jpg',
  true,
  '2023-12-18T07:19:03+09:00',
  '2023-12-18T07:19:03+09:00',
  '2024-01-01T12:10:36+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for toyosu-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-11.jpg', '豊洲大橋から眺めるレインボーブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-5.jpg', '晴海エリアの摩天楼', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-7.jpg', '豊洲大橋の入り口', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-sakura-park-4.jpg', '緑色にライトアップ豊洲大橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-2.jpg', '美しく整備された晴海緑道公園', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-3.jpg', '晴海大橋とタワーマンション群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-9.jpg', '豊洲大橋の中腹にある展望スペース', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-8.jpg', '豊洲ぐるり公園方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-4.jpg', '豊洲大橋の上から眺める夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-6.jpg', '東雲運河方面のタワーマンション群', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-bridge-10.jpg', '豊洲大橋の夜景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-18.jpg', '緑色にライトアップされた豊洲大橋', 11);

-- FAQs for toyosu-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたレインボーブリッジや晴海エリアのタワーマンション群が見所です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), '豊洲大橋のライトアップは何時まで実施されていますか？', '豊洲大橋のライトアップは日没の15分後から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), '豊洲大橋は歩いて渡ることが可能ですか？', '徒歩で約7分ほどで渡ることが可能です。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), '豊洲大橋の長さは何メートルですか？', '豊洲大橋は約550メートルです。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-bridge'), 'レインボーブリッジのライトアップ何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没約30分後～24時までです。', 4);

-- Post: ソラマチダイニング (soramachi-dining)
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
  'soramachi-dining',
  'ソラマチダイニング',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'ソラマチダイニング',
  'ソラマチイーストヤードの7階レストラン街にある無料の展望スペース。東京スカイツリーの観光後に立ち寄るのがおすすめ。',
  '<p>ソラマチイーストヤードの7階レストラン街にあるソラマチダイニング。</p>
<p>休憩用のベンチがある空間で大きな窓ガラスの先には京成押上線を行き交う列車や東京スカイツリーの穴場撮影スポットとして有名な「<a href="/sumida/skytree-bicycle-parking/">スカイツリー自転車駐車場屋上広場</a>」眺めることができます。</p>
<p>夜景のレベルとしてはそこまで高くないですが、食事終わりなどにぜひ立ち寄ってみてはいかがでしょうか？</p>',
  '東京都墨田区押上1-1-２',
  'https://www.tokyo-solamachi.jp/enjoy/skytreeview/index.html',
  'Solamachi Dining SKYTREE VIEW｜東京ソラマチ',
  'https://www.tokyo-skytree.jp/',
  '東京スカイツリーオフィシャルサイト',
  'https://nightscape.tokyo/sumida/tokyo-sky-tree/',
  '東京スカイツリー 展望回廊&展望デッキ',
  '11：00～23：00',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線「とうきょうスカイツリー駅」 約3分</li>
<li>都営浅草線ほか「押上駅」 約3分</li>
</ul>',
  '<ul>
<li>東京スカイツリータウン駐車場</li>
<li>7:30~23:00※入庫は22:00まで</li>
<li>350円/30分</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6477509789097!2d139.81065021609032!3d35.71028493598376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed6f051a20b%3A0x4770fd27f44df481!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8IOOCpOODvOOCueODiOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1673361993807!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.6,
  3.3,
  3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-1.jpg',
  true,
  '2023-12-23T01:33:16+09:00',
  '2023-12-23T01:33:16+09:00',
  '2024-05-31T16:11:39+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for soramachi-dining
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-1.jpg', '東京ソラマチ イーストヤード ソラマチダイニングからの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-3.jpg', '京成押上線のトレインビュー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-2.jpg', 'スカイツリー自転車駐車場屋上広場をスカイツリーイーストタワーから眺めた様子', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-4.jpg', '東京ソラマチ イーストヤード ソラマチダイニングからの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/soramachi-town-5.jpg', '東京ソラマチ イーストヤード ソラマチダイニングの雰囲気', 4);

-- FAQs for soramachi-dining
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), 'どんな夜景が楽しめますか？見どころはどこですか？', '京成押上線を行き交う列車や東京スカイツリーの穴場撮影スポットとして有名なスカイツリー自転車駐車場屋上広場が見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'soramachi-dining'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 墨田区立隅田公園 (sumida-park)
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
  'sumida-park',
  '墨田区立隅田公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '墨田区立隅田公園',
  'ライトアップされた大迫力の東京スカイツリーが眺められる無料の夜景スポット。隅田川花火大会や桜の時期に訪れるのがおすすめ。',
  '<p>面積約8万平方メートルの広さを誇る隅田公園。</p>
<p>公園からは大迫力の<a href="https://nightscape.tokyo/sumida/tokyo-sky-tree/">東京スカイツリー</a>を見上げることができ、春には桜、夏には隅田川花火大会との共演を眺めることができます。</p>
<p>また園内にあるひょうたん池からはスカイツリーを交えた幻想的なリフレクション写真を撮ることが可能です。</p>
<p>東京ミズマチがすぐそばにあるので食事を楽しんだ後などに立ち寄ってみてください。</p>',
  '東京都墨田区向島 1-2',
  'https://visit-sumida.jp/spot/6133/',
  'すみだスポット-隅田公園 | 墨田区観光協会',
  NULL,
  NULL,
  'https://www.tokyo-mizumachi.jp/',
  '東京ミズマチ',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武スカイツリーライン / 都営浅草線 / 東京メトロ銀座線「浅草駅」より徒歩5分</li>
</ul>',
  '-',
  '<iframe title="墨田区立隅田公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5363552683657!2d139.8009061757891!3d35.713025522576956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f292758e42d%3A0x1bafa076fdf1a90b!2z5pel5pmC6KiIICjloqjnlLDljLrnq4vpmoXnlLDlhazlnJIp!5e0!3m2!1sja!2sjp!4v1703255511929!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-2.jpg',
  true,
  '2023-12-22T23:42:02+09:00',
  '2023-12-22T23:42:02+09:00',
  '2023-12-31T13:48:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for sumida-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-2.jpg', '墨田区立隅田公園から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-5.jpg', '墨田区立隅田公園の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-4.jpg', '東京スカイツリーの展望回廊を撮影した写真', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-9.jpg', '墨田区立隅田公園で実施されたイルミネーションイベントの様子', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-7.jpg', '墨田区立隅田公園で実施されたイルミネーションイベントの様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-3.jpg', '東京スカイツリーと東京ミズマチ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-6.jpg', '墨田区立隅田公園の夜景', 6);

-- FAQs for sumida-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '大迫力の東京スカイツリーを見上げることができます。遮るものがなく、とてもいい景色です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: すみだリバーウォーク (sumida-river-walk)
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
  'sumida-river-walk',
  'すみだリバーウォーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'すみだリバーウォーク',
  '浅草と東京スカイツリータウンを結ぶ全長約160メートルの遊歩道。橋の中腹から眺めるライトアップされた吾妻橋や駒形橋が見どころ。',
  '<p>浅草と東京スカイツリータウンを結ぶ歩道橋であるすみだリバーウォーク。</p>
<p>かつては鉄道関係者専用でしたが、2020年6月に一般開放されました。</p>
<p>全長約160メートルの遊歩道の上からはライトアップされた吾妻橋や駒形橋を眺めることができます。</p>
<p>程よい明るさのフットライトが点灯していい雰囲気なのでデート向けのスポットです。</p>
<p>浅草観光の帰りや東京ミズマチなどで食事を済ませた後に立ち寄ってみてはいかがでしょうか？</p>',
  '東京都墨田区向島1丁目',
  'https://www.gotokyo.org/jp/spot/1795/index.html',
  '東京ミズマチ® ／ すみだリバーウォーク／東京の観光公式サイトGO TOKYO',
  'https://www.tokyo-skytree.jp/',
  '東京スカイツリー オフィシャルサイト',
  'https://nightscape.tokyo/sumida/tokyo-sky-tree/',
  '東京スカイツリー 展望回廊&展望デッキ',
  '7:00〜22:00',
  'なし',
  '無料',
  '<ul>
<li>浅草駅東京メトロ銀座線5番出口から徒歩7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="すみだリバーウォークの位置を記した地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.303657484124!2d139.8009657!3d35.7120523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f696260d985%3A0x99eaa7c1dd6db240!2z44GZ44G_44Gg44Oq44OQ44O844Km44Kp44O844Kv!5e0!3m2!1sja!2sjp!4v1703257581461!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.1,
  3.4,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-5.jpg',
  true,
  '2023-12-23T00:13:02+09:00',
  '2023-12-23T00:13:02+09:00',
  '2024-05-28T22:19:53+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for sumida-river-walk
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-5.jpg', 'すみだリバーウォークから眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-1.jpg', 'すみだリバーウォークの雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-3.jpg', 'すみだリバーウォークから眺める墨田川テラス', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-6.jpg', 'すみだリバーウォークのすぐそばを通る東武伊勢崎の線路', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-2.jpg', 'ライトアップされる吾妻橋、駒形橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-7.jpg', 'ライトアップされる東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-river-walk-4.jpg', '隅田川にかかる吾妻橋と駒形橋', 6);

-- FAQs for sumida-river-walk
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされる東京スカイツリーや吾妻橋・駒形橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'すみだリバーウォークは自転車で渡れる？', '自転車での通行 ・自転車は手押しの場合のみOKとなっています', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-walk'), 'すみだリバーウォークが開放されているのは何時まで？', 'すみだリバーウォークは7:00〜22:00まで開放されています', 2);

-- Post: ベイブリーズガーデン (bay-breeze-garden)
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
  'bay-breeze-garden',
  'ベイブリーズガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'ベイブリーズガーデン',
  '港南大橋の袂にある眺めの良い穴場の無料夜景スポット。ライトアップされたレインボーブリッジや豊洲方面の夜景が見どころ。',
  '<p>港南大橋の付近にあるベイブリーズガーデン。</p>
<p>40階建て高層タワーマンション、ベイクレストタワーの敷地内にある広場で住人以外も自由に立ち入ることができます。</p>
<p>広場からはライトアップされたレインボーブリッジや豊洲方面の夜景を鑑賞することができます。</p>
<p>庭園は綺麗に整備されていて雰囲気も良く、ベンチに座って夜景鑑賞が可能。</p>
<p>最寄駅からは少し遠く、コインパーキングからも数分程度歩きますが、夜散歩に訪れる価値は十分にあります。</p>',
  '東京都港区港南 3-9',
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
<li>JR山手線 「 品川駅 」 約18分</li>
<li>東京モノレール 「 天王洲アイル駅 」 約15分</li>
<li>りんかい線天王洲アイル駅から徒歩18分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="ベイブリーズガーデンの位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.354599838947!2d139.7521622!3d35.631704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a477d1f60df%3A0x5d5a989df462a30f!2z44OZ44Kk44OW44Oq44O844K644Ks44O844OH44Oz!5e0!3m2!1sja!2sjp!4v1703349569085!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  2.3,
  4.5,
  4.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-1.jpg',
  true,
  '2023-12-24T01:42:36+09:00',
  '2023-12-24T01:42:36+09:00',
  '2024-09-21T20:31:04+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for bay-breeze-garden
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-1.jpg', 'ベイブリーズガーデンの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-2-2.jpg', 'レインボーブリッジのループ橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-2.jpg', 'ベイブリーズガーデンの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-3.jpg', 'ベイブリーズガーデンから眺めるレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-4-2.jpg', 'ベイブリーズガーデンから眺めるレインボーブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-4.jpg', 'ベイブリーズガーデンの雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-6.jpg', 'ライトアップされるレインボーブリッジ（通常ver）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breeze-1.jpg', 'ライトアップされるレインボーブリッジ（特別ver）', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breeze-2.jpg', 'ライトアップされるレインボーブリッジ（特別ver）', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-5.jpg', 'ベイブリーズガーデンから港南大橋を眺める', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-1-2.jpg', 'ベイブリーズガーデンとベイクレストタワーを対岸から撮影', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/bay-breez-3-2.jpg', '港南大橋からベイブリーズガーデンの全景を撮影', 11);

-- FAQs for bay-breeze-garden
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたレインボーブリッジや豊洲方面の夜景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'ベイブリーズガーデンに駐車場はありますか？', 'ベイブリーズガーデンには専用駐車場がありません。近隣のコインパーキングに車を止めてアクセスするようにしましょう。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bay-breeze-garden'), 'ベイブリーズガーデンはデート向けのスポットですか？', '非常に雰囲気が良く人も少ない穴場スポットなのででデート向けです。', 4);

-- Post: 品川埠頭 (shinagawa-wharf)
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
  'shinagawa-wharf',
  '品川埠頭',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '品川埠頭',
  '愛車をカッコよく撮りたい方におすすめの穴場夜景スポット。レインボーブリッジを間近で眺められるが魅力。',
  '<p>品川埠頭の北端にあるレインボーブリッジのビューポイント。</p>
<p>車内からレインボーブリッジを観賞することが可能で、週末にはカップルで訪れているのをちらほらと見かけます。</p>
<p>とても静かな場所なのでぜひデートで利用してみてはいかがでしょうか。</p>',
  '東京都港区港南 5-10-1',
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
<li>ゆりかもめ「芝浦ふ頭駅」 約13分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="品川埠頭の位置を記したマップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.6192386498165!2d139.75465388577732!3d35.63090881715541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb7b0a19351%3A0x7afdeed92d524db9!2z8J-TuOWGmeecn-aSruW9seWgtOaJgA!5e0!3m2!1sja!2sjp!4v1703350937400!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3,
  2.8,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-01.jpg',
  true,
  '2023-12-24T02:11:55+09:00',
  '2023-12-24T02:11:55+09:00',
  '2024-01-01T12:10:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for shinagawa-wharf
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-01.jpg', '品川埠頭の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-02.jpg', 'ライトアップされたレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-03.jpg', 'レインボーブリッジループ橋と港区方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-04.jpg', 'レインボーブリッジループ橋と港区方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-05.jpg', 'ライトアップされたレインボーブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shinagawa-futo-06.jpg', '品川埠頭の雰囲気', 5);

-- FAQs for shinagawa-wharf
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたレインボーブリッジや港区方面の夜景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinagawa-wharf'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 天王洲アイル第一水辺広場 (tennozu-isle-first-waterfront-plaza)
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
  'tennozu-isle-first-waterfront-plaza',
  '天王洲アイル第一水辺広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinagawa'),
  NULL,
  '天王洲アイル第一水辺広場',
  '京浜運河の先にタワーマンション群や品川埠頭を眺めることができる大人の夜景スポット。平日・休日問わず夜散歩におすすめ。',
  '<p>天王洲アイル シーフォートスクエアのすぐそばにある京浜運河沿いの広場である天王洲アイル第一水辺広場。</p>
<p>品川埠頭や港南エリアのランドマークタワーであるワールドシティタワーズなどを眺めることができる穴場の夜景スポットです。</p>
<p>程よい明るさのフットライトが点灯された遊歩道は雰囲気もよく夜散歩にもうってつけ。</p>
<p>天王洲アイル駅周辺は雰囲気のよい無料夜景スポットが点在しているので、気になった方はぜひ訪れてみてください。</p>',
  '東京都品川区東品川 2-3-12',
  'https://www.e-tennoz.com/enjoytennoz/healingspot.html',
  'TENNOZ ISLE | HEALING SPOT',
  'https://nightscape.tokyo/shinagawa/tennozu-isle-second-waterfront-plaza/',
  '天王洲アイル第二水辺広場',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京モノレール 「 天王洲アイル駅 」より徒歩約3分</li>
<li>りんかい線 「 天王洲アイル駅 」より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="天王洲アイル第一水辺広場（ボードウォーク）の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12972.576890749006!2d139.7517723!3d35.6241709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b915f994a1d%3A0x27387df70bfbd7a6!2z5aSp546L5rSy44Ki44Kk44Or56ys5LiA5rC06L665bqD5aC077yI44Oc44O844OJ44Km44Kp44O844Kv77yJ!5e0!3m2!1sja!2sjp!4v1703387770057!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.1,
  3,
  3.9,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-5.jpg',
  true,
  '2023-12-24T12:31:28+09:00',
  '2023-12-24T12:31:28+09:00',
  '2023-12-26T00:24:39+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tennozu-isle-first-waterfront-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-5.jpg', 'タワーマンションのワールドシティタワーズ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-1.jpg', '天王洲アイル第一水辺広場の遊歩道', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-3.jpg', '天王洲アイル第一水辺広場の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-4.jpg', '品川埠頭方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-6.jpg', '京浜運河の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennoz-isle-7.jpg', '天王洲アイル第一水辺広場の夜景', 5);

-- FAQs for tennozu-isle-first-waterfront-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), 'どんな夜景が楽しめますか？見どころはどこですか？', '京浜運河の先にタワーマンション群や品川埠頭を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-first-waterfront-plaza'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 港南緑水公園 (konan-ryokusui-park)
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
  'konan-ryokusui-park',
  '港南緑水公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '港南緑水公園',
  '高層マンションに囲まれた広々とした公園。運河沿いのデッキから品川埠頭を中心とした夜景が見渡せるのも魅力。',
  '<p>2012年に開園した京浜運河沿いにある公園。</p>
<p>広々とした園内にはドッグランや遊具などが充実しており、区民の憩いの場として親しまれています。</p>
<p>ワールドシティタワーズをはじめとした高層ビルに囲まれていることもあり、夜には迫力のある夜景を楽しむことができます。</p>
<p>また運河沿いのウッドデッキは程よい明るさのフットライトが点灯しており雰囲気も良いです。</p>
<p>夜散歩の目的地として訪れてみてはいかがでしょうか？</p>',
  '東京都港区港南 4-7-47',
  'https://shibaurachuopark.com/konan-ryokusui-park',
  '港南緑水公園 | 港区芝浦港南地区の公園サイト',
  NULL,
  NULL,
  'https://www.city.minato.tokyo.jp/shisetsu/koen/konan/13.html',
  '港区ホームページ／港南緑水公園',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京モノレール 「 天王洲アイル駅 」 約10分</li>
<li>JR山手線 「 品川駅 」 約13分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.853385735538!2d139.7513278!3d35.6286301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a40bf6cc8fb%3A0xd8397f9d7296476!2z5riv5Y2X57eR5rC05YWs5ZyS!5e0!3m2!1sja!2sjp!4v1703350091839!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.8,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-7.jpg',
  true,
  '2023-12-24T01:51:23+09:00',
  '2023-12-24T01:51:23+09:00',
  '2023-12-26T12:05:56+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for konan-ryokusui-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-7.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-1.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-2.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-4.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-minato-park-6.jpg', NULL, 5);

-- FAQs for konan-ryokusui-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '大迫力のタワーマンション群を見上げたり、運河沿いのデッキから品川埠頭を眺めることができるのが見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'konan-ryokusui-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 1);

-- Post: レインボーブリッジ 芝浦ループ橋 (shibaura-loop-bridge)
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
  'shibaura-loop-bridge',
  'レインボーブリッジ 芝浦ループ橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'レインボーブリッジ 芝浦ループ橋',
  '王冠のように輝くループ橋が眺められる穴場の無料夜景スポット。超広角レンズがないと全景を写真に収めることができないので、撮影目的で訪れる方は注意。',
  '<p>ゆりかもめ線芝浦ふ頭駅から徒歩約8分の場所にある芝浦の船乗り場周辺。</p>
<p>レインボーブリッジループ橋を目の前に眺めることができるポイントがあり、写真家の間で人気の夜景スポットになっています。</p>
<p>電灯の明かりが眩しく、巨大な王冠のような光景は一見の価値があります。</p>
<p>また朝日が南東方向から昇る冬の時期はレインボーブリッジ 芝浦ループ橋と日の出の共演を撮るのもおすすめです。</p>
<p>なお防波堤の向う側にある船着き場は私有地となっており立入禁止なのでご注意を。</p>',
  '東京都港区海岸 3丁目',
  'https://www.shutoko.jp/fun/lightup/rainbowbridge/',
  'レインボーブリッジ｜首都高を知る・楽しむ｜首都高ドライバーズサイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ 「芝浦ふ頭駅」 徒歩約9分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="海岸3丁目（レインボーブリッジ・芝浦ループ橋）の地図・場所" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6485.152149864037!2d139.754405!3d35.638176!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM4JzE3LjQiTiAxMznCsDQ1JzE1LjkiRQ!5e0!3m2!1sja!2sus!4v1678551502389!5m2!1sja!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.4,
  2,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-bridge-5.jpg',
  true,
  '2024-01-05T01:42:27+09:00',
  '2024-01-05T01:42:27+09:00',
  '2024-02-03T13:32:07+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for shibaura-loop-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-bridge-5.jpg', 'レインボーブリッジのループ橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-bridge-2.jpg', 'レインボーブリッジのループ橋とタワーマンション群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-loop.jpg', '特別ライトアップで輝くレインボーブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-bridge-1.jpg', 'ループ橋とタワーマンション', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibaura-bridge-6.jpg', 'ライトアップされるレインボーブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-1.jpg', '日の出前の芝浦ループ橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-2.jpg', '日の出前の芝浦ループ橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-3.jpg', '黄昏時の芝浦ループ橋', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-4.jpg', '夜明け前のレインボーブリッジ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-5.jpg', '夜明け前の芝浦ループ橋', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-13.jpg', 'ループ橋の中央に朝日が昇る様子', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-10.jpg', 'ループ橋の中央に朝日が昇る様子', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-12.jpg', '朝日とゆりかもめ線を走る電車', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/loop-14.jpg', '朝日とレインボーブリッジ', 13);

-- FAQs for shibaura-loop-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'どんな夜景が楽しめますか？', '防波堤の向こう側に大迫力のレインボーブリッジループ橋を眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'なぜレインボーブリッジはループする形状が採用されているの？', 'ゆりかもめの走行路とレインボーブリッジの約30mの高低差を解消するために採用されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'ループ橋の全景を収めるにはどんなレンズが必要がですか？', '14mm以下の超広角レンズ必要になります。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibaura-loop-bridge'), 'レインボーブリッジ 芝浦ループ橋の撮影場所はどこですか？', 'レインボーブリッジ 芝浦ループ橋は芝浦スタジオ周辺が撮影ポイントになります。', 3);

-- Post: 浅草EKIMISE 屋上広場 浅草ハレテラス (asakusa-ekimise)
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
  'asakusa-ekimise',
  '浅草EKIMISE 屋上広場 浅草ハレテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '浅草EKIMISE 浅草ハレテラス',
  '浅草EKIMISE 8Fにある東京スカイツリーの眺めが美しい屋上広場。季節ごとのイベントも実施している。開放時間が20:00までとやや早目なので注意。',
  '<p>東武伊勢崎線「浅草駅」直結の商業施設である浅草EKIMISE。</p>
<p>同ビルの屋上には屋上庭園の浅草ハレテラスがあり、東京スカイツリーやアサヒビール本社屋など墨田区方面の街並みを眺めることができます。</p>
<p>屋上庭園にはベンチなども設けられており、開放感抜群の空間でゆっくり夜景鑑賞が楽しめます。</p>
<p>開放がされている時間が20:00までとやや早目ですが、浅草を訪れた際にぜひ立ち寄ってみてください。</p>',
  '東京都台東区花川戸 1-4',
  'https://ekimise.jp/hareterrace',
  '浅草ハレテラス 公式サイト',
  'https://twitter.com/ekimise_a',
  '浅草駅ビル EKIMISE Twitterアカウント',
  NULL,
  NULL,
  '10:00 ~ 20:00',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線（東武スカイツリーライン） 「 浅草駅 」 直結</li>
<li>東京メトロ銀座線 「 浅草駅 」 約1分</li>
<li>都営浅草線 「 浅草駅 」 約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="浅草EKIMISE 浅草ハレテラスの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.311006468326!2d139.7983653!3d35.7120071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2c16ba9257%3A0x71ec10828364a0a6!2z5rWF6I2J44OP44Os44OG44Op44K5!5e0!3m2!1sja!2sjp!4v1703591784869!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.1,
  3.2,
  3.1,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-1.jpg',
  true,
  '2023-12-28T23:28:38+09:00',
  '2023-12-28T23:28:38+09:00',
  '2023-12-31T16:48:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for asakusa-ekimise
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-1.jpg', '浅草ハレテラスから眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-3.jpg', 'ライトアップされるすみだリバーウォーク', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-4.jpg', '浅草ハレテラスから眺める夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-5.jpg', 'アサヒビール本社屋と金のオブジェ「フラムドール」', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-2.jpg', '浅草EKIMISE 浅草ハレテラスの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-6.jpg', '浅草駅ビルの時計台と浅草東武ホテル', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-7.jpg', '浅草EKIMISE 浅草ハレテラスに設置されているベンチ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/asakusa-hare-terrace-8.jpg', 'レストラン街と浅草ハレテラスを繋ぐ階段', 7);

-- FAQs for asakusa-ekimise
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京スカイツリーやアサヒビール本社屋など墨田区方面の街並みを眺めることができます', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), '浅草EKIMISE 浅草ハレテラスは入場料がかかりますか？', '浅草EKIMISE 浅草ハレテラスは無料で入場することが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asakusa-ekimise'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 天王洲アイル第二水辺広場 (tennozu-isle-second-waterfront-plaza)
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
  'tennozu-isle-second-waterfront-plaza',
  '天王洲アイル第二水辺広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinagawa'),
  NULL,
  '天王洲アイル第二水辺広場',
  'ライトアップされた天王洲ふれあい橋や天王洲水門が美しい無料の夜景スポット。周辺の雰囲気もよく夜散歩におすすめ。',
  '<p>天王洲セントラルタワー付近にある天王洲アイル第二水辺広場。</p>
<p>綺麗に整備されたウッドデッキからはライトアップで輝く天王洲ふれあい橋や天王洲水門、港南地区のタワーマンション群などを眺めることができます。</p>
<p>周辺の街並みもヨーロッパのような雰囲気でデート向けです。</p>
<p>天王洲アイルアイル第二水辺広場周辺は他にも雰囲気の良い夜景が点在しているので、ぜひ夜散歩に利用してみてください。</p>',
  '品川区東品川 2-2-24',
  'https://www.e-tennoz.com/enjoytennoz/healingspot.html',
  'TENNOZ ISLE | HEALING SPOT',
  NULL,
  NULL,
  'https://nightscape.tokyo/shinagawa/tennozu-isle-first-waterfront-plaza/',
  '天王洲アイル第一水辺広場',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京モノレール 「 天王洲アイル駅 」より徒歩約3分</li>
<li>りんかい線 「 天王洲アイル駅 」より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="天王洲アイル第二水辺広場の位置を記したマップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12972.653906176574!2d139.748746!3d35.6236962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a6a77501a57%3A0x2002e70c3058e446!2z5aSp546L5rSy44Ki44Kk44Or56ys5LqM5rC06L665bqD5aC077yI44Oc44O844OJ44Km44Kp44O844Kv77yJ!5e0!3m2!1sja!2sjp!4v1703395830024!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.9,
  3.4,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-2.jpg',
  true,
  '2023-12-26T00:22:27+09:00',
  '2023-12-26T00:22:27+09:00',
  '2023-12-26T00:27:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tennozu-isle-second-waterfront-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-2.jpg', '天王洲運河に架かるふれあい橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-5.jpg', '天王洲アイル第二水辺広場の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-4.jpg', '天王洲アイル第二水辺広場周辺にあるカフェ・レストラン', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-1-2.jpg', '天王洲ふれあい橋を渡る様子', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-3.jpg', 'ライトアップされる天王洲ふれあい橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-1.jpg', 'ブルーにライトアップされる天王洲水門', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-second-waterfront-plaza-6.jpg', '港南エリアのタワーマンション群', 6);

-- FAQs for tennozu-isle-second-waterfront-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた天王洲ふれあい橋や天王洲水門、タワーマンション群の明かりなどを楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-second-waterfront-plaza'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 天王洲アイル第三水辺広場 (tennozu-isle-third-waterfront-plaza)
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
  'tennozu-isle-third-waterfront-plaza',
  '天王洲アイル第三水辺広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinagawa'),
  NULL,
  '天王洲アイル第三水辺広場',
  '天王洲運河の先に光量の多い夜景を眺めふことができる無料の夜景スポット。異国情緒溢れるおしゃれな空間なので夜散歩におすすめ。',
  '<p><a href="https://www.tysons.jp/tyharbor/">T.Y.HARBOR</a><a href="https://cafe.warehouseofart.org/">what cafe</a>、<a href="https://www.terrada.co.jp/ja/service/event-space/bc/">寺田倉庫</a>などおしゃれな飲食店や商業施設が並ぶエリアに位置する天王洲アイル第三水辺広場。</p>
<p>天王洲運河の先に光量の多い夜景を眺めふことができる無料の夜景スポットです。</p>
<p>船の帆をイメージしたオブジェも印象的。</p>
<p>異国情緒溢れるおしゃれな雰囲気の空間なので、ぜひ天王洲周辺でデートをした際に利用してみてください。</p>',
  '品川区東品川 2-2-12',
  'https://www.e-tennoz.com/enjoytennoz/healingspot.html',
  'TENNOZ ISLE | HEALING SPOT',
  'https://nightscape.tokyo/shinagawa/tennozu-isle-first-waterfront-plaza/',
  '天王洲アイル第一水辺広場',
  'https://nightscape.tokyo/shinagawa/tennozu-isle-second-waterfront-plaza/',
  '天王洲アイル第二水辺広場',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京モノレール 「 天王洲アイル駅 」より徒歩約5分</li>
<li>りんかい線 「 天王洲アイル駅 」より徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="天王洲アイル第三水辺広場の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12972.154449363004!2d139.73811688564453!3d35.62677460440782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a6a20a28ed1%3A0x8eb95e8843ddbd87!2z5aSp546L5bee44Ki44Kk44Or56ys5LiJ5rC06L665bqD5aC077yI44Oc44O844OJ44Km44Kp44O844Kv77yJ!5e0!3m2!1sja!2sjp!4v1703396084087!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.9,
  3.4,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-2.jpg',
  true,
  '2023-12-26T00:33:36+09:00',
  '2023-12-26T00:33:36+09:00',
  '2024-05-31T16:05:48+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tennozu-isle-third-waterfront-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-2.jpg', '天王洲アイル第三水辺広場の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-4.jpg', '天王洲運河越しに見えるマンション群の灯り', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-5.jpg', '船の帆をモチーフにしたオブジェ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-3.jpg', '綺麗に整備されたウッドデッキ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tennozu-isle-third-waterfront-plaza-6.jpg', '天王洲アイル第三水辺広場の夜景', 4);

-- FAQs for tennozu-isle-third-waterfront-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), 'どんな夜景が楽しめますか？見どころはどこですか？', '天王洲運河の先に光量の多い夜景を眺めふことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tennozu-isle-third-waterfront-plaza'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 川崎市役所本庁舎 展望台 スカイデッキ (kawasaki-city-hall)
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
  'kawasaki-city-hall',
  '川崎市役所本庁舎 展望台 スカイデッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'other'),
  NULL,
  '川崎市役所本庁舎 スカイデッキ',
  '川崎市役所本庁舎にできた展望台。川崎駅を眼下に見下ろせるほか、東京・横浜方面の夜景も楽しめる見どころの多い夜景スポット。',
  '<p>2023年11月にオープンした川崎市役所本庁舎。</p>
<p>高さ112m25階建ての高層ビルでその最上階には無料で入場できる展望台・スカイデッキがあります。</p>
<p>東西南北それぞれの眺望を楽しむことが可能で、たくさんのビル群がひしめき合う川崎駅、東京・横浜方面の街並みなどを眺めることができます。</p>
<p>スカイデッキの照明は控えめで窓ガラスへの写り込みも少なくゆっくり夜景鑑賞をするのに最適な環境です。</p>
<p>有料でもおかしくないレベルの夜景を無料で楽しむことができるスポットなので、気になった方はぜひ立ち寄ってみてください。</p>',
  '神奈川県川崎市川崎区宮本町1番地',
  'https://www.city.kawasaki.jp/170/page/0000153797.html',
  '本庁舎展望フロア・展示スペース一般開放について',
  NULL,
  NULL,
  NULL,
  NULL,
  '9:00～21:00',
  'なし',
  '無料',
  '<ul>
<li>R川崎駅から約5分</li>
<li>京急川崎駅中央口から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="川崎市役所本庁舎の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.920704635799!2d139.70038517578095!3d35.53095717263617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860bd131036eb%3A0x805e9099ba00ec1d!2z44CSMjEwLTAwMDQg56We5aWI5bed55yM5bed5bSO5biC5bed5bSO5Yy65a6u5pys55S677yR!5e0!3m2!1sja!2sjp!4v1704120151139!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '約112m',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/IQ8_rBAZOM0?si=_ezTk2_3hQcsB2jT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.2,
  3.5,
  4,
  3.7,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city.jpg',
  true,
  '2024-01-02T00:16:37+09:00',
  '2024-01-02T00:16:37+09:00',
  '2024-05-31T09:42:14+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for kawasaki-city-hall
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city.jpg', '川崎市役所本庁舎 25F 展望台の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-5.jpg', '川崎駅と富士山', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-4.jpg', '武蔵小杉駅方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-3.jpg', '川崎駅方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-7.jpg', '京浜工場地帯方面の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-9.jpg', '多摩川方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-8.jpg', '横浜方面の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-11.jpg', '東京タワーのある港区方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-10.jpg', 'スカイツリーがある浅草・両国方面の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-6.jpg', '川崎市役所本庁舎 スカイデッキの雰囲気（夜）', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-2.jpg', '川崎市役所本庁舎 スカイデッキの雰囲気（昼）', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kawasaki-city-tower-1.jpg', '川崎市役所本庁舎の外観', 11);

-- FAQs for kawasaki-city-hall
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), 'どんな夜景が楽しめますか？見どころはどこですか？', '川崎駅を眼下に見下ろせるほか、東京・横浜方面の夜景も楽しむことが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), '川崎市役所本庁舎の25F展望台への行き方を教えてください。', '川崎市役所本庁舎に入ったら高層階専用のエレベーターに乗ってアクセスすることが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kawasaki-city-hall'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: ウォーターズ竹芝 水辺広場 (waters-takeshiba)
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
  'waters-takeshiba',
  'ウォーターズ竹芝 水辺広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'ウォーターズ竹芝 水辺広場',
  '勝鬨橋や月島エリアの高層ビル群を眺めることができる無料の夜景スポット。落ち着いた雰囲気で大人のデートにおすすめ。',
  '<p>2020年に完成した商業施設のウォーターズ竹芝。</p>
<p>シアター棟、タワー棟、パーキング棟の3つで構成された施設でガラス張りのデッキから夜景を楽しむことができます。</p>
<p>見どころは勝鬨橋や月島エリアの高層ビル群を眺めることができる東側の景色。光量も多く迫力のある夜景が何も遮ることなく視界に広がります。</p>
<p>またシアター棟の階段状のデッキには、無料利用できるカウンタースペースもあり、ゆっくり寛ぐのにも最適。</p>
<p>竹芝周辺で遊んだ帰りなどにぜひ立ち寄ってみてください。</p>',
  '東京都港区海岸 1-1-30',
  'https://waters-takeshiba.jp/',
  'ウォーターズ竹芝 公式サイト',
  'https://www.instagram.com/waters_takeshiba/',
  'ウォーターズ竹芝インスタグラムアカウント',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「浜松町」駅から徒歩8分</li>
<li>ゆりかもめ「竹芝」駅から徒歩3分</li>
</ul>',
  '-',
  '<iframe title="ウォーターズ竹芝の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8238772233317!2d139.75919897578657!3d35.65671067259518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7e9f9971d7%3A0x23ed101c22a14eb8!2zV0FURVJTIHRha2VzaGliYSB8IOOCpuOCqeODvOOCv-ODvOOCuuerueiKnQ!5e0!3m2!1sja!2sjp!4v1703516370843!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.1,
  3.7,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-1.jpg',
  true,
  '2023-12-26T00:07:49+09:00',
  '2023-12-26T00:07:49+09:00',
  '2023-12-26T12:05:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for waters-takeshiba
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-1.jpg', 'ウォーターズ竹芝タワー棟を眺める', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-2.jpg', '浜松町方面のビル夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-3.jpg', 'ライトアップされた勝鬨橋とタワーマンションの灯り', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-4.jpg', '月島エリアの高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-5.jpg', 'ウォーターズ竹芝イルミネーションイベントの様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-6.jpg', 'ゆるかもめ線の電車が通過する様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-8.jpg', 'ウォーターズ竹芝イルミネーションイベントの様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/waters-takeshiba-9.jpg', 'ウォーターズ竹芝シアター棟を眺める', 7);

-- FAQs for waters-takeshiba
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'waters-takeshiba'), 'どんな夜景が楽しめますか？見どころはどこですか？', '勝鬨橋や月島エリアの高層ビル群を眺めることができます', 0);

-- Post: 港南公園D面 (kounan-park)
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
  'kounan-park',
  '港南公園D面',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '港南公園D面',
  'ライトアップされた天王洲ふれあい橋や高層ビル群などを眺めることができる無料の夜景スポット。天王洲周辺のデート帰りに立ち寄るのがおすすめ。',
  '<p>Ａ面からD面まで4つの区画に分けられた広大な敷地面積を誇る港南公園。</p>
<p>天王洲運河沿いにあるD面の区画は天王洲アイル方面の景色を一望できる穴場の夜景スポットです。</p>
<p>ライトアップされた天王洲ふれあい橋や高層ビル群が織りなす夜景は一見の価値があります。</p>
<p>周辺には天王洲アイル第二水辺広場など夜景が綺麗な場所が複数あるので、夜散歩にぜひご利用ください。</p>',
  '東京都港区港南 4-5-1',
  'https://www.city.minato.tokyo.jp/shisetsu/koen/konan/12.html',
  '港区ホームページ／港南公園',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR 「 品川駅 」 より徒歩約8分</li>
<li>京急本線 「 北品川駅 」 より徒歩約15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="港南公園の位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.0522954269554!2d139.7441161257853!3d35.62643727260495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a422e2a62b5%3A0x55cc5fe22309d465!2z5riv5Y2X5YWs5ZyS77yk6Z2i!5e0!3m2!1sja!2sjp!4v1703518609640!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.9,
  3.3,
  3.6,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-5.jpg',
  true,
  '2023-12-26T00:43:55+09:00',
  '2023-12-26T00:43:55+09:00',
  '2023-12-27T20:48:47+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for kounan-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-5.jpg', '港南公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-7.jpg', 'パークホームズ品川 ザ レジデンスの夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-1.jpg', '天王洲運河越しに見えるT.Y.HARBOR', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-6.jpg', '港南公園のオブジェ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-3.jpg', 'パークホームズ品川 ザ レジデンスの夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-4.jpg', '天王洲運河越しに見えるビル夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-2.jpg', 'ライトアップされる天王洲ふれあい橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kounan-park-8.jpg', '港南公園の雰囲気', 7);

-- FAQs for kounan-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた天王洲ふれあい橋や高層ビル群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kounan-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 渋谷フクラス 屋上庭園 SHIBU NIWA (shibu-niwa)
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
  'shibu-niwa',
  '渋谷フクラス 屋上庭園 SHIBU NIWA',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷フクラス 展望台 SHIBU NIWA',
  '渋谷フクラス17Fにある屋上庭園。広々とした空間にはカフェ&バーが設置されている他、渋谷スクランブル交差点や首都高速道を眺めることができる。デートでの利用をおすすめしたい無料の夜景スポット。',
  '<p>2019年12月にリニューアルオープンされた商業施設の渋谷フクラス。</p>
<p>17階には無料で入場できる屋上スペースのSHIBU NIWA（シブニワ）があります。</p>
<p>南東や北の方角が開けており、渋谷スクランブル交差点や宮下パーク、渋谷ストリームなどを眺めることができるのが特徴です。</p>
<p>また同フロア内にはカフェ&バーの「<a href="https://tabelog.com/tokyo/A1303/A130301/13242244/">BAO by CE LA VI 東京</a>」もあり、開放感抜群の空間で軽食を楽しむことも可能です。</p>
<p>渋谷でデートをする際にぜひ立ち寄ってみてはいかがでしょうか。</p>
<p>※シブニワはイベント実施時に入場ができない場合があるので、事前に公式サイトでイベントの有無を確認しておくのがおすすめです。</p>',
  '東京都渋谷区道玄坂 1-2-3',
  'https://shibuya.tokyu-plaza.com/shibuniwa/',
  '屋上「SHIBU NIWA」｜東急プラザ渋谷 | 東急プラザ',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00～23:00（最終入場22：30）',
  'なし',
  '無料',
  '<ul>
<li>JR線「渋谷駅」西口より徒歩1分</li>
<li>東急・メトロ・京王井の頭線「渋谷駅」より徒歩3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="渋谷フクラス 屋上庭園 SHIBU NIWAの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.11337185698!2d139.7003453!3d35.6578324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbde1ae514b%3A0xff283220fcd44546!2z5bGL5LiK44OG44Op44K5IFNISUJVIE5JV0E!5e0!3m2!1sja!2sjp!4v1703676753725!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.5,
  3.7,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-1.jpg',
  true,
  '2023-12-27T20:45:44+09:00',
  '2023-12-27T20:45:44+09:00',
  '2025-03-03T17:04:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), (SELECT id FROM tags WHERE slug = 'scramble-intersection'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for shibu-niwa
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-1.jpg', '渋谷フクラス SHIBU NIWAの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-3.jpg', '首都高速道を行き交う車', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-2.jpg', '渋谷駅方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-4.jpg', '渋谷スクランブル交差点の眺め', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-5.jpg', 'ミヤシタパーク（宮下公園）の眺め', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-7.jpg', '渋谷フクラスシブニワの雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-6.jpg', '冬季限定でSHIBU NIWAに設置されたアイスリンク', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/shibuya-fukurasu-8.jpg', '渋谷フクラスシブニワの雰囲気', 7);

-- FAQs for shibu-niwa
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), 'どんな夜景が楽しめますか？見どころはどこですか？', '渋谷スクランブル交差点や宮下パーク、渋谷ストリームなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), '渋谷フクラス 屋上庭園 SHIBU NIWAはどのようにアクセスすることができますか？', '直通エレベーターに乗って17Fで降りるとすぐにアクセスが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibu-niwa'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 隅田川に架るライトアップが美しい個性豊かな12の橋を紹介 (sumida-river-bridge)
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
  'sumida-river-bridge',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  'spot',
  (SELECT id FROM categories WHERE slug = 'pickup'),
  '<!-- wp:paragraph -->
<p>荒川から東京湾にかけて東京のまちの中を蛇行するように流れている隅田川。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京の発展に大きな影響を与えてきた歴史のある河川です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな隅田川には大小30以上の橋が架かっており、夜になるとライトアップが実施され橋もあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事ではそんな<strong>隅田川に架るライトアップが美しい12の橋</strong>を紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">隅田川に架かる12のライトアップが美しい橋</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>それではさっそく、隅田川にかかるライトアップが美しい個性豊かな橋を12本を紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">白鬚橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":1385,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/shirahige-bridge-03-1024x683.jpg" alt="ライトアップされる白鬚橋" class="wp-image-1385"/><figcaption class="wp-element-caption">ライトアップされる白鬚橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>センターアーチが美しい全長168mの白鬚橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京オリンピック2020の開催を機にライトアップが開始され、新たな夜景スポットとなりました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ライトアップカラーは名前の通りホワイトカラー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の上からは遮るものなく東京スカイツリーの鑑賞することも可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="1382"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">吾妻橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":6969,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-1-2-1024x683.jpg" alt="朱色にライトアップされる吾妻橋" class="wp-image-6969"/><figcaption class="wp-element-caption">朱色にライトアップされる吾妻橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>浅草寺エリアと東京スカイツリーエリアを結ぶ長さ150mの上路式アーチ橋である「吾妻橋」。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>浅草の中でも長い歴史を持つ建造物で、平成の始めに浅草との調和を取るために朱色に塗り替えられました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ライトアップカラーは12の橋の中で唯一の朱色。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の上からは東京スカイツリーツリーやアサヒビール本社屋などを眺めることができる他、南側歩道からは駒形橋や厩橋も眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[get_spot_info post_id="6968"]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">駒形橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":6986,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-7-1024x683.jpg" alt="" class="wp-image-6986"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>関東大震災の復興事業として1927年（昭和2年）に竣工した駒形橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上路式アーチと中路式タイドアーチを組み合わせた150mの青いアーチ橋で台東区と墨田区を繋いでいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日没を過ぎると橋はブルーにライトアップされ、銅の青さがより一層に際立ちます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の中央にある欄干からは東京スカイツリーや吾妻橋を眺めを楽しむことができるのも魅力です。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="6980"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">厩橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7008,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-1-1024x683.jpg" alt="" class="wp-image-7008"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>台東区蔵前・駒形と墨田区本所を結ぶ厩橋（うまやばし）。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1929年に竣工した長さ151mの3径間下路式タイドアーチ橋です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>隅田川で唯一の３連アーチ橋となっており、優雅なシルエットを楽しむことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ライトアップカラーは白と朱。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夜の隅田川にかかる3連アーチ橋はとても上品な美しさがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="7007"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">蔵前橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":6995,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-1-1024x683.jpg" alt="" class="wp-image-6995"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京台東区蔵前1丁目と墨田区横網1丁目を結ぶ蔵前橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>3つのアーチが特徴で、橋上に連なる欄干は力士をモチーフとしたデザインがなされるなど遊び心があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夜になると橋は黄金色に輝き、非常に美しい景観を楽しむことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の裏からの眺めも幾何学的でとても美しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="6994"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">新大橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7990,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-1-1024x683.jpg" alt="" class="wp-image-7990"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>中央区日本橋浜町2丁目と江東区新大橋1丁目を結ぶ長さ170mの新大橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ケーブル本数が少ない斜張橋（ハープ型）でシンプルな見た目なのが特徴です。松尾芭蕉の句にも登場する歴史ある橋でもあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ライトアップカラーは黄色と緑。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の上からはライトアップされた清洲橋や新大橋マンションが織りなす迫力のある眺めを楽しめます。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="7900"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">清洲橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":4261,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/08/kiyosubashi-bridge-3-1024x683.jpg" alt="隅田川テラスから眺める清洲橋" class="wp-image-4261"/><figcaption class="wp-element-caption">隅田川テラスから眺める清洲橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>国指定重要文化財にも指定されている隅田川下流に架かる清洲橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>関東大震災後の帝都復興事業の一環として，昭和3年3月に竣工しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>重厚かつ雄大で男性的な印象の永代橋と対になるよう、繊細で女性的なデザインを意図しているのが特徴です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日没15分後から23時まではピンク色に輝くライトアップも点灯されており、美しい夜景を眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="4257"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">永代橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":4278,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-1-1024x683.jpg" alt="永代橋の外観" class="wp-image-4278"/><figcaption class="wp-element-caption">永代橋の外観</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>国指定重要文化財にも指定されている隅田川下流に架かる永代橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>関東大震災後の帝都復興事業の一環として、大正15年12月に竣工しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>曲線的なアーチが特徴の橋で、日没15分後から23時には涼し気なブルーカラーのライトアップも点灯します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の中腹からは月島方面にある大規模マンション群のリバーシティ21が一望でき、非常に迫力のある夜景を楽しむことが可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="4277"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">中央大橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7805,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-2-1024x683.jpg" alt="" class="wp-image-7805"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>中央区の新川2丁目と佃1丁目を結んでいる中央大橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>隅田川では二番目に新しい橋で、平成5年レインボーブリッジと同日に開通しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日本の「兜」を意識したデザインが特徴で、夜には主塔がホワイトカラーにライトアップされます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の上からは永代橋とスカイツリーを眺めたり、月島のタワーマンション群間近に眺めることも可能。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京らしい夜景を堪能できるので、近くを訪れたらぜひ橋を渡ってみてほしいです。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="7743"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">佃大橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7785,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-7-1024x683.jpg" alt="ライトアップされる佃大橋" class="wp-image-7785"/><figcaption class="wp-element-caption">ライトアップされる佃大橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京オリンピックが開催された昭和39年に架けられた佃橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>築地エリアと佃島や月島エリアを結んでいる全長は476mの大きな橋です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>橋の中腹からは聖路加ガーデンをはじめとした高層ビル群やライトアップされた勝鬨橋などを眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また日没を過ぎると佃橋は緑と黄色にライトアップされます。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="7748"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">勝鬨橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7793,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-bridge-1-1024x683.jpg" alt="" class="wp-image-7793"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>日露戦争の勝利が由来となって、1940年に建設された勝鬨橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日没を過ぎると橋がホワイトカラーにライトアップされます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>遊歩道からの眺めも美しく、東西それぞれに東京らしさを感じる景色が広がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夏の時期は朝に勝鬨橋を訪れるのもおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>佃大橋が見える角度と朝日が昇る位置が重なるので、条件が合えば非常に美しい眺めを楽しむことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_spot_info post_id="125"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">築地大橋</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":4632,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/10/tsukiji-heading-1-1024x683.jpg" alt="ライトアップされる築地大橋" class="wp-image-4632"/><figcaption class="wp-element-caption">ライトアップされる築地大橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>2018年に完成した近代的なフォルムの築地大橋。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>隅田川に架かる橋としては最も下流に位置しており、遮るものなく浜松町や芝浦エリアのビル群、東京タワーなどを眺めることができるので夜景のレベルも非常に高いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>歩道も余裕を持った幅で作られているので、橋を渡りながら東京の夜景を満喫したい方におすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[get_spot_info post_id="4627"]
<!-- /wp:shortcode -->

<!-- wp:heading -->
<h2 class="wp-block-heading">隅田川に架るライトアップが美しい橋を眺められるおすすめホテル</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>隅田川周辺にはライトアップされた橋を俯瞰して眺めることができる展望台がありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、いくつか隅田川ビューを楽しめる<a href="https://nightscape.tokyo/tag/hotel/">夜景が綺麗なホテル</a>があるので、紹介しておきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ウィングインターナショナルセレクト浅草駒形</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":3096,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-5-1-1024x683.jpg" alt="Illuminated Tokyo Sky Tree and the streets of Asakusa" class="wp-image-3096"/><figcaption class="wp-element-caption">ライトアップされる駒形橋、吾妻橋、スカイツリー</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>浅草寺から歩いてすぐの場所にある、ホテルウィングインターナショナルセレクト浅草駒形。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>12階には宿泊者限定の展望テラスが用意されており、南側には駒形橋・吾妻橋、北側には蔵前橋・厩橋を眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京スカイツリービューも夜景に華を添えており、非常に豪華な眺めを堪能できるのでぜひ宿泊してみて欲しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_hotel_info post_id="1475"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">アパホテル 両国駅タワー</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7966,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-17-1024x683.jpg" alt="ライトアップされる蔵前橋" class="wp-image-7966"/><figcaption class="wp-element-caption">ライトアップされる蔵前橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>両国国技館のすぐそばにある地上31階建のアパホテル両国駅タワー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>隅田川リバービューを楽しめる客室からはライトアップされた蔵前橋、厩橋などを眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>高層階の部屋でないとあまり眺望は楽しめないので、夜景を目当てに宿泊する際はご注意ください。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_hotel_info post_id="7893"]
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">銀座クレストン</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":4397,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/08/ginza-creston-4-1024x683.jpg" alt="ライトアップされる勝鬨橋と築地大橋" class="wp-image-4397"/><figcaption class="wp-element-caption">ライトアップされる勝鬨橋と築地大橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>聖路加レジデンスの32～38階に入居するクレストン銀座。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>全客室が高層階に位置しており、客室の大きな窓からは築地大橋や勝鬨橋を眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>月島エリアの高層ビル群が織りなす夜景も非常に美しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[get_hotel_info post_id="4369"]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">インターコンチネンタル東京ベイ</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":4434,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/08/interconti-tokyo-bay-7-1024x683.jpg" alt="ライトアップされる築地大橋・勝鬨橋" class="wp-image-4434"/><figcaption class="wp-element-caption">ライトアップされる築地大橋・勝鬨橋・佃橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>1995年に開業した24階建ての5つ星ホテルであるインターコンチネンタル東京ベイ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>北側に位置した客室からは築地大橋・勝鬨橋、佃橋をを眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ライトアップされた個性豊かな橋やその背後にそびえ立つ高層ビル群が織りなす夜景や非常に美しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
[get_hotel_info post_id="4388"]
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">隅田川に架かるライトアップが美しい橋一覧（地図・マップ）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":8735,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/08-1024x683.jpg" alt="" class="wp-image-8735"/><figcaption class="wp-element-caption">東京スカイツリーと隅田川に架かる橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>今回紹介した隅田川に架かるライトアップが美しい橋の場所をGoogle Mapにまとめました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それぞれの橋の位置を把握するのにぜひご活用ください！</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<iframe title="隅田川に架かるライトアップが美しい橋の一覧マップ" src="https://www.google.com/maps/d/u/0/embed?mid=1X34_bftsaokzFyGMhQ1h0gphH2D9wcA&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">隅田川に架るライトアップが美しい橋の周辺を夜散歩しよう</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":8762,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/image-2-1024x682.jpg" alt="" class="wp-image-8762"/><figcaption class="wp-element-caption">隅田川に架かるライトアップされた橋をヘリコプターから撮影</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>隅田川に架るライトアップが美しい12の橋を紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どの橋も個性豊かで眺めてよし、渡って夜景鑑賞をしてもよしな素敵なスポットです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ぜひ隅田川周辺に観光やデートで訪れた際は夜散歩に活用してみてください。</p>
<!-- /wp:paragraph -->',
  NULL,
  NULL,
  '<p></p>
<p><a href=""></a></p>',
  NULL,
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
<li>〇〇線「〇〇駅」から徒歩約3分</li>
<li></li>
<li></li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  null,
  null,
  null,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/08.jpg',
  true,
  '2024-01-01T19:32:15+09:00',
  '2024-01-01T19:32:15+09:00',
  '2025-03-11T17:02:25+09:00'
);

-- FAQs for sumida-river-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sumida-river-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 吾妻橋 (azuma-bridge)
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
  'azuma-bridge',
  '吾妻橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '吾妻橋',
  '浅草寺を彷彿とさせる朱色に輝く隅田川に架かる橋。東京スカイツリーやアサヒビール本社屋の眺めが美しい。',
  '<p>浅草寺エリアと東京スカイツリーエリアを結ぶ「吾妻橋」。</p>
<p>浅草の中でも長い歴史を持つ建造物で、平成の始めに浅草との調和を取るために朱色に塗り替えられました。</p>
<p>橋の上からは東京スカイツリーツリーやアサヒビール本社屋などを眺めることができる他、南側歩道からは駒形橋や厩橋も眺めることができます。</p>
<p>また夜になると吾妻橋自身もライトアップが開始しされ、朱い橋がより一層美しく輝きます。</p>
<p>吾妻橋周辺にはライトアップされた橋を始め夜散歩に適した夜景スポットが多数あります。</p>
<p>ぜひ浅草観光の帰りなどに立ち寄ってみてください。</p>',
  '東京都台東区雷門 2-1-16',
  'https://www.zenitaka.co.jp/topics/bridge/azuma.html',
  '吾妻橋｜橋ものがたり｜錢高組',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ銀座線 「 浅草駅 」 約6分</li>
<li>都営浅草線 「 本所吾妻橋駅 」 約8分</li>
<li>東武伊勢崎線（東武スカイツリーライン） 「 浅草駅 」 約4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="吾妻橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073.8139947946172!2d139.8004477341832!3d35.710254480747004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ff334dafb13%3A0xc4023fc6378d7bc8!2z5ZC-5aa75qmL!5e0!3m2!1sja!2sjp!4v1703774140463!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.2,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-1-2.jpg',
  true,
  '2023-12-28T23:42:02+09:00',
  '2023-12-28T23:42:02+09:00',
  '2024-07-29T15:43:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for azuma-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-1-2.jpg', '朱色にライトアップされる吾妻橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-2.jpg', '吾妻橋の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-5.jpg', '吾妻橋から眺めるすみだリバーウォーク', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-3.jpg', '朱色にライトアップされる吾妻橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azuma-bridge-4.jpg', '吾妻橋から眺める駒形橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-3.jpg', '隅田川に架かるライトアップされた吾妻橋', 5);

-- FAQs for azuma-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリーや隅田川に架かる個性豊かな橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), '吾妻橋のライトアップは何時まで実施されていますか？', '吾妻橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azuma-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 駒形橋 (komagata-bridge)
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
  'komagata-bridge',
  '駒形橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '駒形橋',
  '東京オリンピック2020をきっかけにライトアップが始まった隅田川に架かる橋。東京スカイツリーとの共演が見どころ。',
  '<p>関東大震災の復興事業として1927年（昭和2年）に竣工した駒形橋。</p>
<p>上路式アーチと中路式タイドアーチを組み合わせた鋼橋で台東区と墨田区を繋いでいます。</p>
<p>日没を過ぎると橋はブルーにライトアップされ、橋の建築美がより一層に際立ちます。</p>
<p>橋の中央にある欄干からは東京スカイツリーや吾妻橋を眺めを楽しむことができるのも魅力です。</p>
<p>駒形橋周辺にはライトアップされた橋を始め夜散歩に適した夜景スポットが多数あります。</p>
<p>ぜひ浅草観光の帰りなどに立ち寄ってみてください。</p>',
  '東京都墨田区東駒形１丁目',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営地下鉄浅草線「浅草」駅　A2a出口すぐ</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="駒形橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.917887665806!2d139.7973088!3d35.7082743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2a98360d05%3A0x3580f5853ec888a4!2z6aeS5b2i5qmL!5e0!3m2!1sja!2sjp!4v1703775210335!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.1,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-7.jpg',
  true,
  '2023-12-28T23:58:54+09:00',
  '2023-12-28T23:58:54+09:00',
  '2024-07-29T15:43:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for komagata-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-7.jpg', '青く輝く駒形橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-5.jpg', '駒形橋から眺める厩橋の三連アーチ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-4.jpg', '駒形橋の歩行者専用通路', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-2.jpg', '駒形橋から眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-1.jpg', '駒形橋から眺める吾妻橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-5.jpg', 'ウィングインターナショナルセレクト浅草駒形から眺める駒形橋と東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-8.jpg', '駒形橋とアサヒビール本社屋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-9.jpg', '駒形橋と東京スカイツリー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/komagata-bridge-6.jpg', '青く輝く駒形橋', 8);

-- FAQs for komagata-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリーや隅田川に架かる美しい橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), '駒形橋のライトアップは何時まで実施されていますか？', '駒形橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), '駒形橋のライトアップはいつ始まりましたか？', '東京オリンピック2020の時期にからライトアップが実施されるようになりました。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komagata-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 蔵前橋 (kuramae-bridge)
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
  'kuramae-bridge',
  '蔵前橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '蔵前橋',
  '黄金に輝く姿が美しい隅田川に架かるアーチ状の橋。東京スカイツリービューが見どころ。',
  '<p>東京台東区蔵前1丁目と墨田区横網1丁目を結ぶ蔵前橋。</p>
<p>3つのアーチが特徴で、橋上に連なる欄干には力士のモチーフがデザインされています。</p>
<p>夜になると橋は黄金色に輝き、非常に美しい景観を楽しむことができます。</p>
<p>橋の上からは東京スカイツリーやライトアップされた厩橋を眺めることも可能で見どころが多いです。</p>
<p>厩橋周辺にはライトアップされた橋を始め夜散歩に適した夜景スポットが多数あります。</p>
<p>ぜひ浅草観光の帰りなどに立ち寄ってみてください。</p>',
  '東京都台東区蔵前 2-1',
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
<li>都営浅草線 「 蔵前駅 」から徒歩約6分</li>
<li>都営大江戸線 「 蔵前駅 」から徒歩約7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="蔵前橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1620.0570749064118!2d139.8055801289276!3d35.69880848835164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188fb1a02bd81b%3A0x2c7964355392dc25!2z6JS15YmN5qmL!5e0!3m2!1sja!2sjp!4v1703777561590!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.8,
  3.4,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-1.jpg',
  true,
  '2023-12-29T00:40:30+09:00',
  '2023-12-29T00:40:30+09:00',
  '2024-07-29T15:45:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for kuramae-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-1.jpg', '黄金に輝く蔵前橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-2.jpg', '骨組みが美しい蔵前橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-3.jpg', 'ライトアップされる蔵前橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-4.jpg', '蔵前橋の歩行者専用通路', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-5.jpg', '蔵前橋から眺める三連アーチの厩橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-6.jpg', '力士のモチーフになっている柵（欄干）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/kuramae-bridge-7.jpg', '蔵前橋から眺める東京スカイツリー', 6);

-- FAQs for kuramae-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリーや三連アーチの厩橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), '蔵前橋のライトアップは何時まで実施されていますか？', '蔵前橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kuramae-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 厩橋 (umaya-bridge)
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
  'umaya-bridge',
  '厩橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '厩橋',
  '隅田川で唯一の３連アーチ橋。夜になると白色のライトアップで隅田川の夜景に華を添えます。東京スカイツリーや駒形橋、蔵前橋を眺めることができるのも見どころ。',
  '<p>台東区蔵前・駒形と墨田区本所を結ぶ厩橋（うまやばし）。</p>
<p>1929年に竣工した長さ151mの3径間下路式タイドアーチ橋です。</p>
<p>隅田川で唯一の3連アーチ橋となっており、優雅なシルエットを楽しむことができます。</p>
<p>ライトアップカラーは白と朱。夜の隅田川にかかる3連アーチ橋はとても上品な美しさがあります。</p>
<p>橋の上からも東京スカイツリーや駒形橋、蔵前橋を眺めることができ、見どころがとても多いです。</p>
<p>厩橋周辺にはライトアップされた橋を始め夜散歩に適した夜景スポットが多数あります。</p>
<p>ぜひ浅草観光の帰りなどに立ち寄ってみてください。</p>',
  '東京都台東区蔵前２丁目１５ 春日通り',
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
<li>都営大江戸線 「 蔵前駅 」より徒歩約2分</li>
<li>都営浅草線 「 蔵前駅 」より徒歩約2分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="厩橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.882183378184!2d139.79211882578883!3d35.7045167725797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188faeb64b33f3%3A0xfca5b31bd2904b85!2z5Y6p5qmL!5e0!3m2!1sja!2sjp!4v1703793065535!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.9,
  3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-1.jpg',
  true,
  '2023-12-29T05:17:39+09:00',
  '2023-12-29T05:17:39+09:00',
  '2024-07-29T15:44:36+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for umaya-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-1.jpg', '美しくライトアップされた三連アーチの厩橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-4.jpg', '厩橋から眺める東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-6.jpg', '厩橋から眺めるアサヒビール本社と金のモニュメント', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-5.jpg', '厩橋から眺める駒形橋・吾妻橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-2.jpg', '美しくライトアップされる厩橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/umaya-bridge-3.jpg', '厩橋の歩行者専用通路', 5);

-- FAQs for umaya-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリーや駒形橋、蔵前橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), '厩橋のライトアップは何時まで実施されていますか？', '日没15分後から23時までライトアップは実施されていますか？', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'umaya-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: イケ・サンパーク (ikesun-park)
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
  'ikesun-park',
  'イケ・サンパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'toshima'),
  NULL,
  'イケ・サンパーク',
  '豊島区最大級の広さを誇る区民の憩いの場。サンシャイン60やアウルタワーなどの高層ビル群があり夜景も美しい。',
  '<p>2020年夏にオープンしたイケ・サンパーク。</p>
<p>区内最大級の広場で区民の憩いの場となっています。</p>
<p>昼間は家族連れなどで賑わっていますが、夜になると人の数も落ち着いた雰囲気に。</p>
<p>周辺にはサンシャイン60やアウルタワーなどの高層ビル群があり綺麗な夜景が楽しめます。</p>
<p>また広場内には22:00まで営業しているレストランカフェの「EAT GOOD PLACE」もあります。</p>
<p>池袋エリアの夜散歩にぜひ訪れてみてはいかがでしょうか。</p>',
  '東京都豊島区東池袋 4-42',
  'https://ikesunpark.jp/',
  'IKE・SUNPARK 公式サイト',
  'https://www.epietriz.com/restaurants/eat-good-place',
  'EAT GOOD PLACE - IKE・SUN PARK',
  'https://www.instagram.com/ikesunpark/',
  'IKE・SUNPARK インスタグラムアカウント',
  '5時00分～22時00分',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ有楽町線「東池袋駅」から徒歩6分</li>
<li>JR「大塚駅」南口から徒歩10分</li>
<li>JR「池袋駅」東口から徒歩15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="IKE・SUNPARK／イケ・サンパークの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12955.771907937078!2d139.7223732!3d35.7276209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d9ab3832a43%3A0xf2a1fdd604d3ee34!2zSUtF4oCiU1VOUEFSSw!5e0!3m2!1sja!2sjp!4v1703831827163!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.2,
  3.5,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-5.jpg',
  true,
  '2023-12-29T21:43:02+09:00',
  '2023-12-29T21:43:02+09:00',
  '2024-01-02T15:18:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for ikesun-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-5.jpg', 'イケ・サンパークの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-6.jpg', '園内にあるカフェレストラン', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-8.jpg', 'イケ・サンパークの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-7.jpg', 'ライトアップされる東京国際大学', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-4.jpg', '家族連れで賑わう園内', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-2.jpg', '夕暮れ時のイケ・サンパーク', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ike-sun-park-3.jpg', 'イケ・サンパークの雰囲気（昼）', 6);

-- FAQs for ikesun-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'サンシャイン60やアウルタワーなどの高層ビル群を眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikesun-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 豊島区立南池袋公園 (south-ikebukuro-park)
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
  'south-ikebukuro-park',
  '豊島区立南池袋公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'toshima'),
  NULL,
  '豊島区立南池袋公園',
  '美しく整備された芝生エリアが特徴の公園。豊島区役所やアウルタワーなどの高層ビル群を眺めることができ光量の多い夜景が楽しめる。',
  '<p>2016年4月にリニューアルオープンした南池袋公園。</p>
<p>美しく整備された芝生エリアやカフェレストランの「<a href="https://racines-park.com/">RACINES FARM TO PARK</a>」が特徴的のお洒落な雰囲気の公園です。</p>
<p>昼間は家族連れなどで賑わっていますが、夜になると人の数も落ち着いた雰囲気に。</p>
<p>周辺には豊島区役所やアウルタワーなどの高層ビル群があり、綺麗な夜景が楽しめます。</p>
<p>開放感抜群の気持ち良い空間なので、池袋エリアの夜散歩で利用するのにうってつけです。</p>
<p>なお、無料で立ち入り可能な公園ではありますが開放時間は22時までとなっている点にはご注意ください。</p>',
  '東京都豊島区南池袋 2-21-1',
  'https://www.city.toshima.lg.jp/340/shisetsu/koen/026.html',
  '南池袋公園｜豊島区公式ホームページ',
  NULL,
  NULL,
  NULL,
  NULL,
  '8時00分～22時00分',
  'なし',
  '無料',
  '<ul>
<li>池袋駅東口 徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="豊島区立南池袋公園の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12955.771907937078!2d139.7223732!3d35.7276209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d68f6cfe057%3A0xddd17dcd7ecaf745!2z6LGK5bO25Yy656uL5Y2X5rGg6KKL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1703831946161!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-6.jpg',
  true,
  '2023-12-29T21:39:08+09:00',
  '2023-12-29T21:39:08+09:00',
  '2023-12-30T01:00:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for south-ikebukuro-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-6.jpg', '豊島区立南池袋公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-4.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-8.jpg', '豊島区役所と園内にあるカフェレストラン', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-5.jpg', '園内にあるカフェレストラン', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-2-2.jpg', '南池袋公園から眺める豊島区役所', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-1.jpg', '豊島区立南池袋公園の景色（昼）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-2.jpg', '豊島区立南池袋公園の景色（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/south-ikebukuro-park-3.jpg', '豊島区立南池袋公園の景色（昼）', 7);

-- FAQs for south-ikebukuro-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '豊島区役所やアウルタワーなどの高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'south-ikebukuro-park'), '豊島区立南池袋公園へ池袋駅からアクセスする場合の最寄り出口はどこ？', '池袋駅東口 徒歩5分が最寄り出口になります。', 1);

-- Post: ダイヤゲート池袋 ダイヤデッキ (diagram-deck)
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
  'diagram-deck',
  'ダイヤゲート池袋 ダイヤデッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'toshima'),
  NULL,
  'ダイヤゲート池袋 ダイヤデッキ',
  '西武線やJR山手線を行き交う電車を見下ろすことができる無料の夜景スポット。トレインビューが好きな方におすすめ。',
  '<p>2019年4月に開業したダイヤゲート池袋。</p>
<p>日本で初めての線路をまたぐ形で建造された超高層ビルで2Fにはダイヤデッキという展望スペースがあります。</p>
<p>西武線やJR山手線の線路を真正面から見下ろすことができ、トレインビューを楽しめる珍しいスポットです。</p>
<p>光量の多い夜景が楽しめるわけではありませんが落ち着いた雰囲気の中ベンチに座ってくつろぐのにうってつけです。</p>
<p>池袋エリアで遊んだ帰りなどに立ち寄ってみてはいかがでしょうか？</p>',
  '東京都豊島区南池袋 1-16-15',
  'https://www.seiburealsol.jp/ikebukuro/',
  'ダイヤゲート池袋 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>西武池袋線  池袋駅・西武南口から徒歩1分</li>
<li>ＪＲ線 池袋駅・東口から徒歩5分</li>
<li>東京メトロ 池袋駅・東口から徒歩5分</li>
<li>東武東上線 池袋駅・東口から徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="ダイヤゲート池袋 ダイヤデッキの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9766503119567!2d139.70770967606046!3d35.72679277257264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d429728c241%3A0xa151e3e6040307aa!2z44OA44Kk44Ok44Ky44O844OI5rGg6KKL!5e0!3m2!1sja!2sjp!4v1703833006591!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.6,
  3.3,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-6.jpg',
  true,
  '2023-12-29T21:31:34+09:00',
  '2023-12-29T21:31:34+09:00',
  '2024-05-28T21:44:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for diagram-deck
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-6.jpg', 'ダイヤデッキから眺めるJR線のトレインビュー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-4.jpg', 'ダイヤデッキから眺める西武線のトレインビュー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-2.jpg', 'ダイヤゲート池袋 ダイヤデッキの雰囲気（北側）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-1.jpg', 'ダイヤゲート池袋 ダイヤデッキの雰囲気（南側）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/diagram-deck-ikebukuro-3.jpg', 'ダイヤデッキに設置されたベンチ', 4);

-- FAQs for diagram-deck
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), 'どんな夜景が楽しめますか？見どころはどこですか？', '西武線やJR山手線の線路を真正面から見下ろすことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'diagram-deck'), '三脚を使用して撮影をすることは可能ですか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: アパホテル横浜ベイタワー (yokohama-bay-tower)
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
  'yokohama-bay-tower',
  'アパホテル横浜ベイタワー',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'アパホテル横浜ベイタワー',
  '絵に描いたようなみなとみらいエリアの美しい夜景を堪能できる35階建て高層ホテル。ランドマークタワー側と横浜ベイブリッジ側が特におすすめ。アパホテルグループならではの良心的な価格設定も魅力。',
  '<p>35階建て、日本最大級の客室数を誇る大型ホテルのベイタワー。</p>
<p>みなとみらいエリアの観光に最適な好立地に建っており、客室からは下記いずれかの眺望を楽しむことができます。</p>

<div class="box l-bottom-large">
<ul>
<li>みなとみらい側</li>
<li>ランドマークタワー側</li>
<li>横浜ベイブリッジ側</li>
<li>シティ側</li>
</ul>
</div>

<p>夜景好きの方におすすめしたいのはみなとみらい側の眺望。</p>
<p>横浜ランドマークタワーをはじめとした高層ビル群、大観覧車のコスモロック21、ライトアップされた日本丸メモリアルパーク、富士山などを一望でき、迫力のある夜景を堪能できます。</p>
<p>平日であれば2万円を切る価格で宿泊することが可能でありながら、この眺望が楽しめるというのはかなりコストパフォーマンスが高いといえます。</p>
<p>みなとみらい周辺で一泊する際はぜひ、ご利用してみてはいかがでしょうか。</p>',
  '神奈川県横浜市中区海岸通 5-25-3',
  'https://www.apahotel.com/resort/yokohama/',
  'アパホテル横浜ベイタワー 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「馬車道駅」4番（万国橋口）から徒歩3分</li>
<li>JR「桜木町駅」南改札経由東口から徒歩9分</li>
</ul>',
  '<ul>
<li>有り（2,200円／泊）</li>
</ul>',
  '<iframe title="アパホテル横浜ベイタワーの位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3250.116546438775!2d139.637333!3d35.451909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d8ba3be7493%3A0xcf56d365f3523754!2z44Ki44OR44Ob44OG44Or77yG44Oq44K-44O844OI44CI5qiq5rWc44OZ44Kk44K_44Ov44O844CJ!5e0!3m2!1sja!2sjp!4v1704202136576!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<div class="l-bottom-medium"> <iframe width="560" height="315" src="https://www.youtube.com/embed/V8P6m1JEfMs?si=W2Qo4s5ENNvflGgN" title="アパホテル横浜ベイタワーの客室から撮影したタイムラプス動画" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <div class="l-bottom-medium"> <iframe width="560" height="315" src="https://www.youtube.com/embed/V3WcPobFOTU?si=_X4c-bVboasOBdTh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div> <div class="l-bottom-medium"><iframe width="560" height="315" src="https://www.youtube.com/embed/sDyWR9cLNSk?si=kGQMbeUKJRtlduGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>',
  NULL,
  NULL,
  null,
  null,
  4.4,
  3.5,
  3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-5.jpg',
  true,
  '2024-01-02T22:51:02+09:00',
  '2024-01-02T22:51:02+09:00',
  '2025-02-23T11:20:21+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for yokohama-bay-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-5.jpg', 'アパホテル横浜ベイタワーから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-6.jpg', 'ライトアップされる大観覧車・コスモロック21', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-4.jpg', '日本で三番目に高い高層ビルの横浜ランドマークタワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-8.jpg', 'ライトアップされる日本丸メモリアルパークとドックヤードガーデン', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-1-2.jpg', '富士山と商業ビルのコレットマーレ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-10.jpg', 'ビル灯りが眩しいクイーンズタワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-2-1.jpg', 'ベイブリッジ側の眺望', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-1-3.jpg', 'ベイブリッジ側の眺望', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-9.jpg', 'みなとみらいエリアの夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-3.jpg', '夜明け前のベイブリッジ側の眺望', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-5.jpg', '夜明け前のベイブリッジ側の眺望', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-2-2.jpg', '夜明け前のベイブリッジ', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/time-2.jpg', '大桟橋に寄稿する豪華客船と赤煉瓦倉庫', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-2.jpg', 'みなとみらいエリアの眺望', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohamaa-1.jpg', '大観覧車・コスモロック21とよこはまコスモワールド', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-1.jpg', 'アパホテル横浜ベイタワーの客室', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-3.jpg', 'アパホテル横浜ベイタワーのフロントの雰囲気', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-1.jpg', 'アパホテル横浜ベイタワーの外観', 17);

-- FAQs for yokohama-bay-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ランドマークタワーをはじめとした高層ビル群、大観覧車のコスモロック21、ライトアップされた日本丸メモリアルパーク、富士山などを一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), 'アパホテル横浜ベイタワーの客室数は？', 'アパホテル横浜ベイタワーの客室数は2,311です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), '宿泊の予約をする際にどの方角の客室に泊まるか指定することは可能ですか？', '可能です。各予約サイトで眺望を選べるプランが用意されています。', 2);

-- Hotel info for yokohama-bay-tower
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-bay-tower'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171996%2F171996.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fapahoteru-rizoto-heng-bang-beitawa.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad302874%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=890067993&vc_url=https%3A%2F%2Fwww.ikyu.com%2Fbiz%2F00081740%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=890067993" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 横浜港 大さん橋 国際客船ターミナル (osanbashi)
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
  'osanbashi',
  '横浜港 大さん橋 国際客船ターミナル',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '大桟橋 国際客船ターミナル',
  '大型客船の停泊する横浜港の客船ターミナル。屋外デッキからは横浜ランドマークタワー、赤レンガ倉庫、コスモロック21、マリンタワーなどの名所をずらっと見渡すことができます。',
  '<p>2002年に開業した大さん橋国際客船ターミナル。</p>
<p>横浜の「海の玄関口」として貿易・交通をリードする役割を担う施設です。</p>
<p>そんな大さん橋国際客船ターミナル屋上は24時間無料で立ち入ることができる広々とした空間になっています。</p>
<p>綺麗に整備されたウッドデッキと芝地が広がる心地よいスペースです。</p>
<p>眺望も美しくウッドデッキからはランドマークタワー、コスモクロック（観覧車）、赤レンガ倉庫、氷川丸、マリンタワー、ベイブリッジといった横浜の観光名所が一望することができます。</p>
<p>非常に贅沢な夜景を堪能することができる素敵な場所なので、ぜひみなとみらいエリアで観光・デートする際にお立ち寄りください。</p>',
  '神奈川県横浜市１−４ 中区海岸通１丁目',
  'https://osanbashi.jp/',
  '大さん橋 国際客船ターミナル公式サイト',
  'https://www.instagram.com/osanbashi_terminal/',
  '大さん橋 国際客船ターミナル Instgramアカウント',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=179',
  '大さん橋国際客船ターミナル｜横浜市観光情報サイト',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「日本大通り駅」下車　徒歩7分（3番または4番出口）</li>
<li>横浜市営地下鉄「関内駅」下車　徒歩15分（1番出口）</li>
<li>JR「関内駅」下車　徒歩15分（南口）</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="横浜港 大さん橋国際客船ターミナルの位置・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4303.302474577364!2d139.64758299797123!3d35.450048736516564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cfbfa5d4eb5%3A0x9a23934f9b85766b!2z5qiq5rWc5riv5aSn44GV44KT5qmL5Zu96Zqb5a6i6Ii544K_44O844Of44OK44Or!5e0!3m2!1sja!2sjp!4v1704178456837!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  3.2,
  4,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0010.jpg',
  true,
  '2024-01-02T16:18:34+09:00',
  '2024-01-02T16:18:34+09:00',
  '2024-12-08T11:10:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for osanbashi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0010.jpg', '横浜港 大さん橋 国際客船ターミナルの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0012.jpg', '横浜ランドマークタワー、赤レンガ倉庫、コスモロック21などみなとみらいの街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0006.jpg', 'ライトアップされる横浜ベイブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0004.jpg', 'ライトアップされる横浜マリンタワーと氷川丸', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0014.jpg', '大さん橋ふ頭ビル前桟橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0011.jpg', '宝石のようなみなとみらいの夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0015.jpg', 'ウッドデッキからみなとみらいの街並みを眺める観光客', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0007.jpg', '夕暮れ時の大さん橋 国際客船ターミナル', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0005.jpg', '夕暮れ時の横浜港 大さん橋 国際客船ターミナル', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-marine-tower-24.jpg', '大桟橋に寄港する豪華客船', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-5-1.jpg', '赤レンガ倉庫と大桟橋に寄港する豪華客船', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0000.jpg', '大さん橋 国際客船ターミナル屋上にあるウッドデッキの広場（クジラの背中）', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-1-1.jpg', '大桟橋に寄港する豪華客船', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0003.jpg', '横浜港 大さん橋 国際客船ターミナル館内の雰囲気', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-osanbashi0001.jpg', '横浜港 大さん橋 国際客船ターミナル館内の雰囲気', 14);

-- FAQs for osanbashi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ランドマークタワー、赤レンガ倉庫、コスモロック21、マリンタワーなどのみなとみらい周辺の観光名所を見渡すことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'osanbashi'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 横浜ランドマークタワー 展望台 スカイガーデン (yokohama-landmark-tower)
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
  'yokohama-landmark-tower',
  '横浜ランドマークタワー 展望台 スカイガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜ランドマークタワー スカイガーデン',
  '地上高273mから横浜周辺の街並みを眺めることができる大人気の展望台。宝石のようなみなとみらいの街並みや富士山ビューがみどころ。',
  '<p>日本で3番目に高い高層ビルである横浜ランドマークタワー。</p>
<p>同ビルの69階には展望フロアのスカイガーデンがあり、ベイエリアの街並みを360度眺めることができます。</p>
<p>見どころは以下の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>東側</dt>
<dd>大観覧の車コスモロック21、大桟橋、ベイブリッジなどみなとみらいの街並み</dd>
<dt>西側</dt>
<dd>富士山と横浜の街並み</dd>
<dt>北側</dt>
<dd>横浜駅方面の高層ビル群</dd>
</dl>
</div>

<p>これだけの美しい夜景鑑賞スポットでありながら、都内の有料展望台に比べると入場料が安いのも嬉しいポイント。</p>
<p>みなとみらいで夜景を眺めるなら真っ先におすすめしたいスポットです。<p>',
  '神奈川県横浜市西区みなとみらい 2-2-1',
  'https://www.yokohama-landmark.jp/skygarden/',
  '横浜ランドマークタワー スカイガーデン 公式サイト',
  'https://www.instagram.com/yokohama_landmarktower/',
  '横浜ランドマークタワー展望台 Instgramアカウント',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=183',
  '横浜ランドマークタワー  スカイガーデン｜横浜市観光情報サイト',
  '21：00（最終入場は20：30）',
  'なし',
  '<ul>
<li>大人(18～64歳)：1000円</li>
<li>65歳以上・高校生：800円</li>
<li>小・中学生：500円</li>
<li>幼児（４歳以上）：200円</li>
</ul>',
  '<ul>
<li>みなとみらい線「みなとみらい駅」より徒歩約5分</li>
<li>JR根岸線ほか「桜木町駅」より徒歩約7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="横浜ランドマークタワーの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4281.167807276035!2d139.6276229827026!3d35.45766871200307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5d7366a111%3A0x3661ef0a3534c8c7!2z5qiq5rWc44Op44Oz44OJ44Oe44O844Kv44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1704174251821!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '273m',
  '<div class="l-bottom-large"><iframe width="560" height="315" src="https://www.youtube.com/embed/RJ-NkzzS8jM?si=e7xMDf0T0W0kEYeG" title="横浜ランドマークタワー 展望台 スカイガーデンから撮影した夕景タイムラプス（富士山側）" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div><div class="l-bottom-large"><iframe width="560" height="315" src="https://www.youtube.com/embed/W-iIkjWeDL4?si=CYnL3NE1oSnfPtew" title="横浜ランドマークタワー 展望台 スカイガーデンから撮影した夕景タイムラプス（みなとみらい側）" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="l-bottom-large"><iframe width="560" height="315" src="https://www.youtube.com/embed/5c6H4nFogXU?si=qOq7sbOQxHiUivRQ" title="横浜ランドマークタワー 展望台 スカイガーデンから撮影した夕景タイムラプス（横浜駅側）" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>',
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F31122&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベル観光で入場チケットをお得に購入</a>',
  NULL,
  null,
  null,
  4.8,
  3.5,
  3.9,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-1.jpg',
  true,
  '2024-01-02T15:05:27+09:00',
  '2024-01-02T15:05:27+09:00',
  '2024-12-08T12:10:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for yokohama-landmark-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-1.jpg', 'ブルーアワーのみなとみらいの街並み', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/landmak-tower-flower-1.jpg', '横浜港に打ち上がる花火を眺める', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-10.jpg', '大観覧車コスモロック21', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-11.jpg', 'みなとみらいの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-1-2.jpg', '富士山と横浜方面の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-7.jpg', '富士山と横浜方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-8.jpg', '横浜駅方面の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-9.jpg', '横浜駅方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-12.jpg', 'タワーマンションのザ・タワー横浜北仲と桜木町駅周辺の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-1-1.jpg', '横浜ランドマークタワー スカイガーデンの雰囲気', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-4.jpg', '横浜ランドマークタワー スカイガーデンの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-2.jpg', '横浜ランドマークタワー スカイガーデンのお土産売り場', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohamaa-landmark-tower-1.jpg', '横浜ランドマークタワー スカイガーデン入り口', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-landmark-1.jpg', '横浜ランドマークタワーの外観', 13);

-- FAQs for yokohama-landmark-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ベイエリアの街並みを360度眺めることができます。東側のみなとみらいの街並みや西側の富士山ビューが特におすすめです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), '横浜ランドマークタワー スカイガーデンは地上何メートルの高さにありますか？', '横浜ランドマークタワー スカイガーデンは地上高273m、地上69階に位置する展望台です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-landmark-tower'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。※混雑時には利用制限される場合あり', 2);

-- Post: タイムラプス用計算機の使い方と撮影間隔、撮影枚数、フレームレートの解説 (timelapse-calculator)
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
  'timelapse-calculator',
  'タイムラプス用計算機の使い方と撮影間隔、撮影枚数、フレームレートの解説',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>タイムラプスの動画作成にあたり、微速度撮影を行う際には同じ場所に留まって何百枚もの写真を撮影する必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>計画的に行動しないと、必要以上に撮影に時間がかかってしまったり、実際に動画にした際にあっという間に再生がおわる映像になってしまったりといった失敗をおかしてしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>こういった失敗をさけるために、<strong>事前に下記2つの計算を行っておくのがおすすめ</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>動画再生時間＝撮影枚数÷フレームレート</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>撮影所要時間＝撮影枚数×インターバル</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>今回は上記の計算を簡単に行ってくれる<strong>タイムラプス用計算機</strong>を作成したので、その使い方と重要ワード（撮影間隔、撮影枚数、フレームレート）の解説を行いたいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">タイムラプス用計算機の使い方</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回作成したタイムラプス用計算機は下記になります。バーなどを動かすと、動画の再生時間や撮影所要時間をリアルタイムで更新してくれます。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div id="app" class="mb20">
    <div class="calculator">
      <div class="calculator-header">
        <p class="calculator-header-title">タイムラプス用計算機</p>
      </div>
      <div class="calculator-body">
        <dl class="calculator-list">
          <dt>撮影間隔<span class="text-note">（最大値は60秒）</span></dt>
          <dd>
            <input class="calculator-list-range" id="js-calculator-interval" type="range" min="1" max="60" step="1">
            <span class="calculator-list-value"><input class="calculator-list-input" id="interval-input" type="text">秒</span>
          </dd>
        </dl>
        <dl class="calculator-list">
          <dt>撮影枚数<span class="text-note">（最大値は999枚）</span></dt>
          <dd>
            <input class="calculator-list-range" id="js-photo-sheets" type="range" min="1" max="999" step="1">
            <span class="calculator-list-value"><input class="calculator-list-input" id="photo-sheets-input" type="text">枚</span>
          </dd>
        </dl>
        <dl class="calculator-list">
          <dt>フレームレート</dt>
          <dd>
            <input class="calculator-list-radio" type="radio" name="radio02" value=24 id="radio-24"><label for="radio-24">24fps</label>
            <input class="calculator-list-radio" type="radio" name="radio02" value=30 id="radio-30"><label for="radio-30">30fps</label>
            <input class="calculator-list-radio" type="radio" name="radio02" value=60 id="radio-60"><label for="radio-60">60fps</label>
          </dd>
        </dl>
        <div class="calculator-footer">
	      <div class="calculator-result">
	        <dl class="calculator-result-list">
	          <dt>撮影時間</dt>
	          <dd id="shooting-time-result"></dd>
	        </dl>
	        <dl class="calculator-result-list">
	          <dt>動画再生時間</dt>
	          <dd id="video-time-result"></dd>
	        </dl>
	      </div>
	    </div>
      </div>
    </div>
  </div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">タイムラプス計算式に出てくる重要単語について</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>タイムラプス用計算式で登場する3つのキーワード（<strong>撮影枚数、フレームレート、インターバル</strong>）の概要をまとめていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">撮影枚数</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>タイムラプス用の写真を何枚撮るかということを意味しています。枚数が多いほど、動画にした際の再生時間が長くなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただし、一度に撮影できる枚数はカメラの種類や電池容量の多さによって異なります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>私がメイン機として使っているα7Ⅲの場合は710枚、α7Ⅱは500枚程度です。<strong>撮影枚数はカメラの上限枚数を超えないように設定</strong>していきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラごとの撮影限界枚数は各メーカーのサイトから確認することができるので、事前に調べておきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">撮影間隔（インターバル）</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>何秒間隔でシャッターを切るのかを決める撮影インターバル。タイムラプス動画用の写真を撮る際に一番の肝になる部分です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記の図のように、あらかじめ撮影したインターバルの時間内に、シャッタースピードが収まるように調整していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影インターバルを何秒に設定するかは、撮影シーンによって柔軟に変更する必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">フレームレート（fps）</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>フレームレート（fps）は動画を1秒再生するごとに使用するフレーム数（コマ数）を表した単位で、下記のような使い方をします。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>60fps（1秒に60枚の写真が流れる）</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>30fps（1秒に30枚の写真が流れる）</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>パラパラ漫画と同じような原理で、一秒ごとに再生する静止画の数が多いほど滑らかな動画を作成することができるのが特徴。一般的には30fpsほどに設定されている場合が多いので、<strong>計算する際は決め打ちで30fps</strong>と定めてしまっても良いでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>タイムラプス計算機の使い方と計算する際に重要なキーワード（<strong>撮影間隔、撮影枚数、フレームレート</strong>）の説明をおこないました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>実際に撮影を行う際は、今回紹介した計算機を使って効率よく微速度撮影を行ってみてください！</p>
<!-- /wp:paragraph -->',
  NULL,
  NULL,
  '<p></p>
<p><a href=""></a></p>',
  NULL,
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
<li>〇〇線「〇〇駅」から徒歩約3分</li>
<li></li>
<li></li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  null,
  null,
  null,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/timelapse.jpg',
  true,
  '2024-01-01T02:32:36+09:00',
  '2024-01-01T02:32:36+09:00',
  '2025-09-27T08:21:59+09:00'
);

-- FAQs for timelapse-calculator
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'timelapse-calculator'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: アルカキット錦糸町 屋上展望フロア (arcakit)
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
  'arcakit',
  'アルカキット錦糸町 屋上展望フロア',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'アルカキット錦糸町 屋上展望フロア',
  'アルカキット錦糸町の11F屋上フロアにある無料の展望スペース。遮るものなく東京スカイツリーを眺めることができる穴場スポット。開放時間が18:00と早目なので注意。',
  '<p>錦糸町駅北口にある商業施設のアルカキット錦糸町。</p>
<p>11階屋上には無料でできる展望スペースがあり、墨田区周辺の街並みを眺めることができます。</p>
<p>イチオシは東京スカイツリーが程よい距離感で眺められる北側の景色。</p>
<p>遮るものなく世界一高い塔を眺められる貴重なスポットです。</p>
<p>駅からのアクセス性もよく素敵な展望フロアではありますが、18:00には閉まってしまうため冬季限定の夜景スポットになります。</p>',
  '東京都墨田区錦糸 2-2-1',
  'https://mitsui-shopping-park.com/arcakit/',
  'アルカキット錦糸町 オフィシャルサイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00～18:00（レストランフロアは11:00～22:30）',
  'なし',
  '無料',
  '<ul>
<li>JR総武線「錦糸町駅」北口よりすぐ</li>
<li>東京メトロ半蔵門線「錦糸町駅」3番出口から徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="アルカキット錦糸町 屋上展望フロアの位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.17142307969!2d139.81005517578848!3d35.697398972581965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889284ce319bd%3A0xdca3d5df429ece53!2z44Ki44Or44Kr44Kt44OD44OI6Yym57O455S6!5e0!3m2!1sja!2sjp!4v1703170549981!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.5,
  3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-8.jpg',
  true,
  '2024-01-08T22:18:47+09:00',
  '2024-01-08T22:18:47+09:00',
  '2024-01-08T22:19:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for arcakit
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-8.jpg', 'アルカキット錦糸町 屋上展望フロアの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-9.jpg', 'アルカキット錦糸町 屋上展望フロアの雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-5.jpg', 'アルカキット錦糸町 屋上展望フロアから眺める東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-6.jpg', 'アルカキット錦糸町 屋上展望フロアから眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-7.jpg', 'スカイツリーイーストタワーを眺める', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-1.jpg', 'アルカキット錦糸町 屋上展望フロアから眺める高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-2.jpg', 'アルカキット錦糸町 屋上展望フロアから眺める高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-3.jpg', 'JR錦糸町のトレインビュー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/arcakit-4.jpg', '錦糸町マルイ周辺の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/skytree-arcakit-1.jpg', 'アルカキット錦糸町 屋上展望フロアの雰囲気', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/skytree-arcakit-2.jpg', 'アルカキット錦糸町 屋上展望フロアから眺める東京スカイツリー', 10);

-- FAQs for arcakit
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'どんな夜景が楽しめますか？見どころはどこですか？', '遮るものなくすっきりとスカイツリービューを楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), 'アルカキット錦糸町 屋上展望フロアは何時まで開放されていますか？', 'アルカキット錦糸町 屋上展望フロアは18:00まで開放されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'arcakit'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: ニューオータニイン横浜プレミアム (new-otani-inn-yokohama-premium)
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
  'new-otani-inn-yokohama-premium',
  'ニューオータニイン横浜プレミアム',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'ニューオータニイン横浜プレミアム',
  'ベイビューからの眺めが大人気の宿泊施設。みなとみらいの主要な観光スポットへのアクセスも抜群のおすすめホテル。',
  '<p>複合商業施設「Colette・Mare（コレットマーレ）」に入居する宿泊施設であるニューオータニイン横浜プレミアム。</p>
<p>トリップアドバイザーの「<a href="https://www.tripadvisor.jp/pages/NightviewHotels_2012.html">夜景のきれいなホテルランキング</a>」で全国4位を獲得しており、眺望の美しさに定評があります。</p>
<p>客室からの眺めは下記の2つ。</p>

<dl>
<dt>ベイビュー</dt>
<dd>みなとみらいの街並みが見どころ</dd>
<dt>シティビュー</dt>
<dd>富士山と横浜の光量の多い夜景が見どころ</dd>
</dl>

<p>特にベイビューからの眺めはとても豪華でライトアップされた日本丸メモリアルパーク、大観覧車のコスモロック21、ベイブリッジなどみなとみらいのランドマークを一望できます。</p>
<p>みなとみらい周辺の主要な駅からのアクセスもしやすく観光の拠点にもってこいの宿泊施設なので、ぜひ一度ステイしてみてはいかがでしょうか。</p>',
  '神奈川県横浜市中区桜木町 1-1-7',
  'https://www.newotani-innyokohama.jp/',
  'ニューオータニイン横浜プレミアム｜ホテル公式HP',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京浜東北線・根岸線「桜木町駅」から徒歩1分</li>
<li>横浜市営地下鉄「桜木町駅」から徒歩5分</li>
<li>横浜高速鉄道みなとみらい線「みなとみらい駅」から徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="ニューオータニイン横浜プレミアムの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.430513278405!2d139.6307588!3d35.4521298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5dfdd7c86f%3A0x93bccb7df6357b2f!2z44OL44Ol44O844Kq44O844K_44OL44Kk44Oz5qiq5rWc44OX44Os44Of44Ki44Og!5e0!3m2!1sja!2sjp!4v1704454523926!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/o0-YbdEPhGU?si=7NiLaSM57Kcbvcki" title="ニューオータニイン横浜プレミアムから撮影した夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.7,
  3.2,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-7-1.jpg',
  true,
  '2024-01-05T21:03:36+09:00',
  '2024-01-05T21:03:36+09:00',
  '2024-06-14T00:25:33+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for new-otani-inn-yokohama-premium
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-7-1.jpg', '日本丸メモリアルパークとみなとみらいの街並み', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-9-1.jpg', '横浜ベイブリッジ、赤レンガ倉庫、高層ビル群のザ・タワー横浜北仲', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-3.jpg', '大観覧車のコスモロック21とパシフィコ横浜', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-5.jpg', '桜木町駅方面の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-6.jpg', 'パシフィコ横浜とよこはまコスモワールド', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-8.jpg', '虹色に輝く大観覧車のコスモロック21', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-2.jpg', 'ニューオータニイン横浜プレミアムの客室の雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ohtani-1.jpg', 'ニューオータニイン横浜プレミアムが入居するコレットマーレの外観', 7);

-- FAQs for new-otani-inn-yokohama-premium
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'どんな夜景が楽しめますか？見どころはどこですか？', '日本丸メモリアルパーク、大観覧車のコスモロック21、ベイブリッジなどみなとみらいのランドマークを一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), 'ニューオータニイン横浜プレミアムの客室数は？', 'ニューオータニイン横浜プレミアムの客室数は240部屋です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), '日本丸メモリアルパークのライトアップは何時まで実施されていますか？', '日没から22時までがライトアップ時間となっています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), '大観覧車コスモロック21のライトアップ時間は何時までですか？', '日没から24時まで実施されています。', 3);

-- Hotel info for new-otani-inn-yokohama-premium
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'new-otani-inn-yokohama-premium'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104678%2F104678.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fnew-otani-inn-yokohama.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad362198%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=890067993&vc_url=https%3A%2F%2Fwww.ikyu.com%2Fbiz%2F00080570%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=890067993" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 日本丸メモリアルパーク (nippon-maru-memorial-park)
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
  'nippon-maru-memorial-park',
  '日本丸メモリアルパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '日本丸メモリアルパーク',
  '国の重要文化財である帆船日本丸が展示されている広場。風が穏やかな日に見えるリフレクションはなんとも幻想的。',
  '<p>みなとみらい地区で最初に整備された公園である日本丸メモリアルパーク。</p>
<p>園内には国の重要文化財である帆船日本丸が展示されているほか、横浜みなと博物館も併設されています。</p>
<p>日没を過ぎると帆船日本丸のライトアップが22時まで実施されており、美しい景観を楽しむことができます。</p>
<p>風が穏やかな日には展示ドックの池に綺麗なリフレクションが映り、幻想的な写真を収めることも可能です。</p>
<p>桜木町駅やみなとみらい駅からアクセスしやすい場所にあるので、ぜひデートの帰り道などに立ち寄ってみてください。</p>',
  '神奈川県横浜市西区みなとみらい 2-1-1',
  'https://www.nippon-maru.or.jp/access/',
  '帆船日本丸・横浜みなと博物館｜横浜みなとみらい',
  'https://www.waterfront.or.jp/portmuseum/museum/view/83',
  '横浜みなと博物館・帆船日本丸',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR根岸線・市営地下鉄ブルーライン「桜木町駅」より徒歩5分</li>
<li>みなとみらい線「みなとみらい駅」より徒歩5分</li>
<li>みなとみらい線「馬車道駅」より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="日本丸メモリアルパークの位置・地図" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.187683272974!2d139.6326329!3d35.4536328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5c28b05aa5%3A0xb20f1a4f559aa060!2z5pel5pys5Li444Oh44Oi44Oq44Ki44Or44OR44O844Kv!5e0!3m2!1sja!2sjp!4v1704456829259!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.3,
  3.1,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/hosenmaru.jpg',
  true,
  '2024-01-05T21:24:20+09:00',
  '2024-01-05T21:24:20+09:00',
  '2024-12-07T23:20:27+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for nippon-maru-memorial-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/memorial-park-2.jpg', '日本丸メモリアルパークの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hosenmaru.jpg', 'ライトアップされる船日本丸とコスモロック21', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/memorial-park-4.jpg', 'リフレクションが美しい日本丸メモリアルパーク', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/memorial-park-3.jpg', '船日本丸と横浜ランドマークタワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/memorial-park-1.jpg', '日本丸メモリアルパークの外観', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/memorial-park.jpg', 'ライトアップされる帆船日本丸', 5);

-- FAQs for nippon-maru-memorial-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた帆船日本丸を眺めることができます。風が穏やかな日には綺麗なリフレクションが見えるのも見所です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), '日本丸メモリアルパークのライトアップは何時まで実施されていますか？', '日没から22時までがライトアップ時間となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), '大観覧車コスモロック21のライトアップ時間は何時までですか？', '日没から24時まで実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nippon-maru-memorial-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 【保存版】一眼カメラでタイムラプス動画を作る方法を5ステップで解説 (create-timelapse)
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
  'create-timelapse',
  '【保存版】一眼カメラでタイムラプス動画を作る方法を5ステップで解説',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>iPhoneやAidrroidスマホで手軽に撮ることができるようになり、身近な撮影技法となったタイムラプス。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>独特の映像美に惹かれて一眼カメラでより本格的なタイムラプス映像を作ってみたいと考える方も多いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、一眼カメラでタイムラプス映像を作ろうと思う<span class="swl-marker mark_orange">と動画を作るまでの手順や注意点が多く、全体象を把握しづらいのがネック</span>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで本記事では一眼カメラを用いた本格的なタイムラプス動画の作り方を5ステップで解説します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>具体的な作例や設定手順も豊富に載せているので、ぜひチェックしてみてください！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">タイムラプスとは</h2>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=4aywjDgkVFI","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=4aywjDgkVFI
</div><figcaption class="wp-element-caption"><a href="https://nightscape.tokyo/time-lapse/">タイムラプス動画</a>の作例</figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>タイムラプスは一定の間隔で撮影された写真をつなぎ合わせて作られた<strong>コマ送り動画</strong>です。（パラパラ漫画のようなイメージ)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>時間操作と呼ばれる映像技法</strong>のひとつで、単に撮影した動画を早送りするだけでは表現できない面白い映像を作ることができるのが特徴です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">一眼カメラでタイムラプス動画を作成する手順</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>一眼レフカメラを用いてタイムラプス映像を作成する方法を紹介していきます。主なステップは下記の5つです。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"className":"is-style-num_circle"} -->
<ol class="wp-block-list is-style-num_circle"><!-- wp:list-item -->
<li>微速度撮影に必要な機材を準備</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>タイムラプス用にカメラの設定を変更</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>インターバル撮影実施</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>写真のレタッチ＆現像</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>タイムラプス動画の編集</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">①微速度撮影に必要な機材を準備</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>綺麗なタイムラプス映像を作るためには撮影シーン合わせて必要なアイテムを揃える必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮りたい映像別に必要なものを準備しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition">
<p class="definition-title">微速度撮影に必要な機材リスト</p>
<dl class="definition-body">
<dt><a href="https://amzn.to/3RPp6l7" rel="nofollow noopener" target="_blank">三脚</a></dt>
<dd>カメラを固定した状態で数百枚の写真を撮り続ける必要があるので三脚は必須。頑丈で風が吹いても揺れないものを選ぶのが重要。</dd>
<dt><a href="https://www.amazon.co.jp/dp/B014CPWEMU?tag=takahiro1202-22&linkCode=osi&th=1&psc=1" rel="nofollow noopener" target="_blank">タイマーレリーズ</a></dt>
<dd>お手持ちのカメラにインターバル撮影機能がない場合に、インターバル撮影を実施するのに使用</dd>
<dt><a href="https://www.amazon.co.jp/dp/B000PJ5902?tag=takahiro1202-22&linkCode=osi&th=1&psc=1" rel="nofollow noopener" target="_blank">NDフィルター</a></dt>
<dd>日中にシャッタースピードを落として、被写体を撮りたいときに利用</dd>
<dt><a href="https://smartparty.jp/review-ninja-lev-plate">映り込み防止機材（忍者レフ、レンズスカートなど）</a></dt>
<dd>展望台などで撮影をする際に、窓ガラスに室内の灯りが映り込むのを防ぐために利用</dd>
<dt><a href="https://www.amazon.co.jp/dp/B071NHNSMK?tag=takahiro1202-22&linkCode=osi&th=1&psc=1" rel="nofollow noopener" target="_blank">バッテリーグリップ</a></dt>
<dd>一日かけて微速度撮影するときなどにバッテリー切れを防ぐために利用</dd>
<dt><a href="https://www.amazon.co.jp/dp/B076RBB979?tag=takahiro1202-22&linkCode=osi&th=1&psc=1" rel="nofollow noopener" target="_blank">夜露防止ヒーター（レンズヒーター）</a></dt>
<dd>山間部など夜に気温が急激に下がる場所で星景タイムラプスを撮る場合などにレンズが曇ってしまうことを防ぐために使用</dd>
<dt><a href="https://smartparty.jp/review-syrp-genie-mini">ジーニー（モーションコントローラー）</a></dt>
<dd>タイムラプスにパンニングを加えるために必要な機材。より迫力のあるタイムラプス映像を作りたい上級者向けの機材</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">②カメラの設定をタイムラプス撮影用に変更</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>インターバル撮影に必要な機材を揃えたら、次にカメラの設定をチェックしていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>押さえていくと良い項目は下記の通りです。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition">
<dl class="definition-body">
<dt>ＷＢ（ホワイトバランス）はオート以外を指定</dt>
<dd>ホワイトバランスをオートにしておくと、撮影の途中にカメラが勝手に設定してしまい、動画にばらつきがでてしまう可能性が出てきます。インターバル撮影したデータをRAWではなくJpegで保存する場合は必ずWBをオート以外に設定しましょう。</dd>

<dt>手ぶれ補正はオフにする</dt>
<dd>三脚を扱った撮影ではカメラやレンズの手振れ補正をオンになっているとブレが発生する可能性があります。タイムラプスでは数百枚の写真を同じ場所から撮るので、手振れ補正をオフにして無駄なミスショットを増やさないようにしましょう。</dd>

<dt>ノイズリダクションをオフにする</dt>
<dd>暗い場所でインターバル撮影を行う場合、ノイズリダクションがオンになっていると、すぐに次のシャッターを切ることができなくなります。そうすると予め設定していたインターバル通りにシャッターが切れず、綺麗な映像に仕上がらなくなるので、この機能はオフにしておきましょう。</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">③インターバル撮影を実施</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>カメラの設定をタイムラプス用に変更したら、最終的にどれくらいのタイムラプス動画を作りたいのかイメージを持った上で下記3点を決めていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>撮影インターバル</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>撮影枚数</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>シャッタースピード</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://nightscape.tokyo/article/timelapse-calculator/">タイムラプス計算機</a>を用いると映像にした場合の再生時間などがわかるのでぜひご活用くだい。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div id="app" class="mb20">
    <div class="calculator">
      <div class="calculator-header">
        <p class="calculator-header-title">タイムラプス用計算機</p>
      </div>
      <div class="calculator-body">
        <dl class="calculator-list">
          <dt>撮影インターバル<span class="text-note">（最大値は60秒）</span></dt>
          <dd>
            <input class="calculator-list-range" id="js-calculator-interval" type="range" min="1" max="60" step="1">
            <span class="calculator-list-value"><input class="calculator-list-input" id="interval-input" type="text">秒</span>
          </dd>
        </dl>
        <dl class="calculator-list">
          <dt>撮影枚数<span class="text-note">（最大値は999枚）</span></dt>
          <dd>
            <input class="calculator-list-range" id="js-photo-sheets" type="range" min="1" max="999" step="1">
            <span class="calculator-list-value"><input class="calculator-list-input" id="photo-sheets-input" type="text">枚</span>
          </dd>
        </dl>
        <dl class="calculator-list">
          <dt>フレームレート</dt>
          <dd>
            <input class="calculator-list-radio" type="radio" name="radio02" value=24 id="radio-24"><label for="radio-24">24fps</label>
            <input class="calculator-list-radio" type="radio" name="radio02" value=30 id="radio-30"><label for="radio-30">30fps</label>
            <input class="calculator-list-radio" type="radio" name="radio02" value=60 id="radio-60"><label for="radio-60">60fps</label>
          </dd>
        </dl>
        <div class="calculator-footer">
	      <div class="calculator-result">
	        <dl class="calculator-result-list">
	          <dt>撮影時間</dt>
	          <dd id="shooting-time-result"></dd>
	        </dl>
	        <dl class="calculator-result-list">
	          <dt>動画再生時間</dt>
	          <dd id="video-time-result"></dd>
	        </dl>
	      </div>
	    </div>
      </div>
    </div>
  </div>
<!-- /wp:html -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">昼間の撮影方法・設定例</h4>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=qUdm7TjzMfg","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=qUdm7TjzMfg
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>こちらは昼間に雲の流れを撮影したタイムラプス動画</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>10秒ほどの映像に仕上げるために下記のような設定で撮影を行いました。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><tbody><tr><th>動画再生時間</th><td>3秒</td></tr><tr><th>撮影時間</th><td>12分</td></tr><tr><th>撮影枚数</th><td>240枚</td></tr><tr><th>フレームレート</th><td>24fps</td></tr><tr><th>撮影インターバル</th><td>3秒</td></tr><tr><th>シャッタースピード</th><td>1/1250</td></tr><tr><th>iso値</th><td>800</td></tr><tr><th>F値</th><td>5.6</td></tr><tr><th>撮影モード</th><td>マニュアル</td></tr></tbody></table><figcaption class="wp-element-caption">昼間にタイムラプスを撮る際の設定例</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">夕景〜夜景の撮影方法・設定例</h4>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=U8xj7HCu-wc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=U8xj7HCu-wc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>夕景〜夜景のタイムラプス動画。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日が沈む20分前から沈むから空が暗くなりきるまでのだいたい1時間20分ほどかかるので、撮影時間を60分に設定することと、最終的に15秒程度の尺の動画することを軸に各種数値を設定。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夕景から夜景など露出が大きく変化していく時間帯に微速度撮影を行う際は、シャッタースピードが変化していくことに気を配らなければいけません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>空が真っ暗になったときも時にもインターバル時間よりもシャッタースピードが上回らないように余裕をもってISO値、F値を設定しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><tbody><tr><th>動画再生時間</th><td>4秒</td></tr><tr><th>撮影時間</th><td>3.2分</td></tr><tr><th>撮影枚数</th><td>96枚</td></tr><tr><th>フレームレート</th><td>24fps</td></tr><tr><th>撮影インターバル</th><td>2秒</td></tr><tr><th>シャッタースピード</th><td>1/1250</td></tr><tr><th>iso値</th><td>800</td></tr><tr><th>F値</th><td>5.6</td></tr><tr><th>撮影モード</th><td>マニュアル</td></tr></tbody></table><figcaption class="wp-element-caption">夕景タイムラプスを撮る際の設定例</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">夜景の撮影方法・設定例</h4>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://www.youtube.com/watch?v=lRNSE-MbUVE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=lRNSE-MbUVE
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>交差点を行き交う車の軌跡をとらえた夜景タイムラプス動画。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影間隔を空けすぎると観覧車がすごく早く回っているように見えてしまうため、インターバルを1秒に設定することと、画の再生時間は7秒程度と短尺にすることを軸に各種数値を計算しました。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><tbody><tr><th>動画再生時間</th><td>10秒</td></tr><tr><th>撮影時間</th><td>12分</td></tr><tr><th>撮影枚数</th><td>240</td></tr><tr><th>フレームレート</th><td>24fps</td></tr><tr><th>撮影インターバル</th><td>3秒</td></tr><tr><th>シャッタースピード</th><td>2秒</td></tr><tr><th>iso値</th><td>250</td></tr><tr><th>F値</th><td>8.0</td></tr><tr><th>撮影モード</th><td>マニュアルモード</td></tr></tbody></table><figcaption class="wp-element-caption">夜景タイムラプスを撮る際の設定例</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">④写真のレタッチ＆現像</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>現地での撮影が終わったら、写真をレタッチを行っていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影した1枚目の写真でレタッチを行い、その設定をその他の写真すべてに同期させるのがポイントです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レタッチを終えたら、ファイル名が連番になるように指定して撮影したが画像を一気に書きだしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レタッチを行うソフトをまだお持ちでない方は月額1,078 円で利用できる<a href="https://amzn.to/3tHBjQM">Adobe Lightroom</a>を導入するのがおすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="create-movie">⑤タイムラプス動画の編集</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>jpegに画像を書き出したら、画像を一つの映像にまとめる作業を行います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>大量の写真を1つのタイムラプス映像に仕上げることができるソフトを4つ紹介します。ご自身のパソコン環境に合わせて必要なソフトを採用してください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://www.panolapse360.com/jp/">Panalaps </a></h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":7709,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/panalapse.jpg" alt="" class="wp-image-7709"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66.66%"} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph -->
<p>タイムラプス動画専用のフリーソフト。疑似的に<strong>パンニングやズーム</strong>を設定することができたり、フリッカー（ちらつき）を抑えることができるのが特徴。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><br>ただし無料のトライアル版は1280pxまでしか対応していないので、youtubeなどで使用する場合にはPro版（1万円程度）を購入する必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>他の映像と繋ぎ合わせたりBGMを加えるには他の動画編集ソフトが必要。</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://apps.apple.com/jp/app/gluemotion-unlimited/id1396851118?mt=12">GlueMotion</a></h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":7714,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/gruemotion.jpg" alt="" class="wp-image-7714"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66.66%"} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph -->
<p>Mac専用のタイムラプス動画専用ソフト。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>フリッカー（ちらつき）を抑える機能が優秀でソフトの動作もかなりライトで使いやすい。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4,000円買い切りのソフトでコスパも高く僕自身普段から愛用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>他の映像と繋ぎ合わせたりBGMを加えるには他の動画編集ソフトが必要。</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://www.adobe.com/jp/products/premiere.html">Adobe premiere pro</a></h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":7715,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/adobe-pre.jpg" alt="" class="wp-image-7715"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66.66%"} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph -->
<p>Adobeが提供する本格的な動画編集ソフト。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>現像したJpeg画像をタイムラプス映像として読み込むのに加えて、BGMの追加やその他映像との繋ぎ合わせも一元的に行える。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>クラウド版は月額2,728&nbsp;円とやや割高なのがネック。</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><a href="https://www.apple.com/jp/final-cut-pro/">Final Cut Pro</a></h4>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} -->
<div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:image {"id":7712,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/final-cut-pro.jpg" alt="" class="wp-image-7712"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"66.66%"} -->
<div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:paragraph -->
<p>Appleが提供する本格的な動画編集ソフト。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>現像したJpeg画像をタイムラプス映像として読み込むのに加えて、BGMの追加やその他映像との繋ぎ合わせも一元的に行える。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>買い切り型で価格は4.5万円。やや初期費用が嵩むのはデメリットですが、さまざまな映像編集に挑戦したい方におすすめ。</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading -->
<h2 class="wp-block-heading">タイムラプス動画の作り方・撮影方法まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>タイムラプス動画作成の手順をまとめました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>設定すべき項目や、注意しなければいけない点がたくさんあり、ちょっと複雑に感じたかもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ実際に<strong>今回紹介した工程で動画を作成してみれば、やり方を把握することができる</strong>と思いますので、ぜひタイムラプス動画の作成に挑戦してみてください！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/time-lapse/"},"icon":"externalLink"} /-->',
  NULL,
  NULL,
  '<p></p>
<p><a href=""></a></p>',
  NULL,
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
<li>〇〇線「〇〇駅」から徒歩約3分</li>
<li></li>
<li></li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  null,
  null,
  null,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/timelapse-1.jpg',
  true,
  '2024-01-07T01:19:58+09:00',
  '2024-01-07T01:19:58+09:00',
  '2025-09-27T08:21:50+09:00'
);

-- FAQs for create-timelapse
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'create-timelapse'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 黎明大橋 (reimei-bridge)
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
  'reimei-bridge',
  '黎明大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '黎明大橋',
  '中央区の朝潮運河にかかる88メートルの橋。橋の上からは晴海エリアのタワーマンション群やベイエリアの景色を眺めることができる',
  '<p>東京都中央区にある朝潮運河にかかる黎明大橋。</p>
<p>橋長88.2メートルの橋の上からはドゥトゥールウェストタワー、ベイサイドタワー春海などを望むことができます。</p>
<p>複数のタワーマンション群が林立する光景はとても迫力があります。</p>
<p>また橋の西側を渡るとレインボーブリッジを眺めることもできます。</p>
<p>見どころの多い夜景スポットなので、勝ちどきエリアの夜散歩にぜひご利用ください。</p>',
  '東京都中央区晴海 5丁目',
  'https://ja.wikipedia.org/wiki/%E9%BB%8E%E6%98%8E%E6%A9%8B',
  '黎明橋 | wikipedia',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>勝どき駅A3出口から徒歩約8分</li>
<li>月島駅10出口から徒歩約16分</li>
<li>市場前駅北出口から徒歩約18分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="黎明大橋の位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.908139802395!2d139.7760028!3d35.6546348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897f6d16c481%3A0xda2e2533592fef11!2z5p2x5LqsIOm7juaYjuWkp-apiw!5e0!3m2!1sja!2sjp!4v1704520363785!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.1,
  2.9,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-1-2.jpg',
  true,
  '2024-01-07T01:06:17+09:00',
  '2024-01-07T01:06:17+09:00',
  '2024-01-07T01:07:14+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for reimei-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-1-2.jpg', '黎明大橋の雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-2.jpg', '黎明大橋から眺める晴海エリアの摩天楼', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-1.jpg', '黎明大橋から眺める朝潮小橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-3.jpg', '黎明大橋から眺める晴海エリアの摩天楼', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-4.jpg', 'れいめい橋公園通りの夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-7.jpg', '黎明大橋を行き交う車', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-5.jpg', '朝潮運河親水公園の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-6.jpg', 'パークタワー勝どき周辺の夜景', 7);

-- FAQs for reimei-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされるレインボーブリッジや晴海エリアの摩天楼を見上げることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 豊海運動公園 (toyomi-sports-park)
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
  'toyomi-sports-park',
  '豊海運動公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '中央区立豊海運動公園',
  '綺麗に整備された広大な敷地の公園。遮るものなくレインボーブリッジを眺めることができるのが見どころ。',
  '<p>複合遊具やデイキャンプ場、多目的広場、テニス場などの様々な施設がある豊海運動公園。</p>
<p>日中は多くの家族連れなとで賑やかな雰囲気ですが、日が沈むと落ち着いた雰囲気に。</p>
<p>海沿いのテラスからはライトアップされたレインボーブリッジや朝潮運河沿いのタワーマンション群のビル灯りを眺めることができます。</p>
<p>園内はキレに整備されており、運河沿いにはベンチなどもあってゆっくり夜景を眺めるのにうってつけです。</p>
<p>開放感抜群で夜景のレベルも高いのでぜひデートなどで立ち寄ってみてはいかがでしょうか。</p>',
  '東京都中央区豊海町 3-19',
  'https://www.city.chuo.lg.jp/a0037/machizukuri/kouenryokka/kouen/tamokutekihiroba/toyomi.html',
  '中央区ホームページ／豊海運動公園',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営地下鉄大江戸線「勝どき駅」から徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="豊海運動公園の地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0839009394904!2d139.77238499119665!3d35.6551704589302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bd571e442d3%3A0x6397cacbd8bad6f9!2z5Lit5aSu5Yy656uL6LGK5rW36YGL5YuV5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1704409086053!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  2.9,
  3.6,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-5.jpg',
  true,
  '2024-01-07T00:30:38+09:00',
  '2024-01-07T00:30:38+09:00',
  '2024-09-24T02:58:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for toyomi-sports-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-5.jpg', '晴海レジデンス・晴海テラスを眺める', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-1.jpg', '豊海運動公園・多目的広場周辺の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-2.jpg', '豊海運動公園・多目的広場周辺の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-8.jpg', '晴海エリアの高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-3.jpg', '豊海運動公園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-4.jpg', '運河沿いに設置されたベンチ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-6.jpg', 'ライトアップされるレインボーブリッジ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/harumi-sport-park-7.jpg', '朝潮子橋周辺の夜景', 7);

-- FAQs for toyomi-sports-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '遮るものなくレインボーブリッジを眺めることができるのが見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没30分後から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyomi-sports-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 勝どき見晴らし公園 (kachidoki-view-park)
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
  'kachidoki-view-park',
  '勝どき見晴らし公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '立勝どき見晴らし公園',
  'ライトアップされた東京タワー、築地大橋、汐留の高層ビル群の眺めが美しい運河沿いの公園。',
  '<p>新月島運河沿いにある勝ちどき見晴らし公園。</p>
<p>以前は「勝どき五丁目緑地」と呼ばれていましたが新しく防波堤が整備されるなどし、生まれ変わった公園です。</p>
<p>海沿いの遊歩道からの眺めが美しく、ベイビューを楽しむことができます。</p>
<p>見どころは下記の2つ。</p>

<dl>
<dt>北東側</dt>
<dd>ライトアップされた築地大橋を眺めることが可能</dd>
<dt>北西側</dt>
<dd>東京湾越しに浜離宮庭園や東京タワー、港区方面の高層ビル群の一望することが可能</dd>
</dl>
<p>とても贅沢な夜景を眺めることができる穴場の公園なので、ぜひデートなどで立ち寄ってみてはいかがでしょうか。</p>',
  '東京都中央区勝どき 5-7-1',
  'https://www.city.chuo.lg.jp/a0037/shisetsu/genre/sports/sports00135.html',
  '中央区ホームページ／勝どき見晴らし公園',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「勝どき駅」より徒歩10分</li>
<li>JR「竹芝駅」より徒歩14分</li>
<li>都営大江戸線「築地市場駅」より徒歩15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="勝どき見晴らし公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10825.875949944344!2d139.76386828010413!3d35.665123077553325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bd6f93143e1%3A0x7db4ddf504c31ba!2z5Lit5aSu5Yy656uL5Yud44Gp44GN6KaL5pm044KJ44GX5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1704408750896!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.2,
  3.1,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-7.jpg',
  true,
  '2024-01-07T00:45:05+09:00',
  '2024-01-07T00:45:05+09:00',
  '2024-01-07T00:46:40+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for kachidoki-view-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-7.jpg', '勝どき見晴らし公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-9.jpg', 'ウォーターズ竹芝と竹芝埠頭', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-8.jpg', '汐留方面のビル夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-6.jpg', 'ライトアップされる東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-10.jpg', '勝どき見晴らし公園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-5.jpg', '黄色にライトアップされる築地大橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-2.jpg', '浜離宮庭園と汐留の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/kachidoki-1.jpg', '隅田川に架かる築地大橋', 7);

-- FAQs for kachidoki-view-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京タワー、築地大橋、汐留の高層ビル群などの眺めが見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), '東京タワーのライトアップは何時まで実施されていますか？', '東京タワーのライトアップは日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kachidoki-view-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 黎明橋公園 (reimei-bridge-park)
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
  'reimei-bridge-park',
  '黎明橋公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '黎明橋公園',
  'タワーマンション群に囲まれた都会の公園。夜に訪れると迫力のある夜景が楽しめる。',
  '<p>晴海トリトンの道路向いにある黎明橋公園。</p>
<p>入り口付近にある噴水がトレードマークで、そこを抜けると広々とした公園に着きます。</p>
<p>街灯が少なく夜に訪れるとやや暗い雰囲気ですが、シティ晴海やドゥトゥールイーストタワーなどのタワーマンション群に囲まれていることもあり、光量の多い夜景を楽しめます。</p>
<p>勝どき駅周辺で遊んだ帰りなどにぜひお立ち寄りください。</p>',
  '東京都中央区晴海 3-1-6',
  'https://www.city.chuo.lg.jp/a0037/machizukuri/kouenryokka/kouen/catchball/reimeibashi.html',
  '中央区ホームページ／黎明橋公園',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき駅」より徒歩7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="黎明橋公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.841526717241!2d139.77714177604088!3d35.65627587259543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188978f46b2107%3A0xfac4a539f2fe5056!2z5Lit5aSu5Yy656uL6buO5piO5qmL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1704409003031!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.2,
  2.7,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-park-1.jpg',
  true,
  '2024-01-07T00:36:08+09:00',
  '2024-01-07T00:36:08+09:00',
  '2024-01-07T00:37:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for reimei-bridge-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-park-1.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-park-2.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-park-3.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-park-4.jpg', NULL, 3);

-- FAQs for reimei-bridge-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'シティ晴海やドゥトゥールイーストタワーなどのタワーマンション群が織りなす夜景を楽しめます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'reimei-bridge-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 中央大橋 (chuo-bridge)
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
  'chuo-bridge',
  '中央大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '中央大橋',
  '「兜」を意識したデザインが特徴の橋。永代橋とスカイツリーの眺めがみどころ。',
  '<p>中央区の新川2丁目と佃1丁目を結んでいる中央大橋。</p>
<p>隅田川では二番目に新しい橋で、平成5年レインボーブリッジと同日に開通しました。</p>
<p>日本の「兜」を意識したデザインが特徴で、夜には主塔がホワイトカラーにライトアップされます。</p>
<p>橋の上からは永代橋とスカイツリーを眺めたり、月島のタワーマンション群間近に眺めることも可能。</p>
<p>東京らしい夜景を堪能できるので、近くを訪れたらぜひ橋を渡ってみてほしいです。</p>',
  '東京都中央区新川2丁目',
  'https://ja.wikipedia.org/wiki/%E4%B8%AD%E5%A4%AE%E5%A4%A7%E6%A9%8B',
  '中央大橋 - Wikipedia',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京葉線・東京メトロ日比谷線「八丁堀駅」より徒歩8分</li>
<li>東京メトロ「月島駅」より徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="中央大橋の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.1455083227181!2d139.78164260469325!3d35.67015542124141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018893fff7c0719%3A0x13a6d32e08af3c63!2z5Lit5aSu5aSn5qmL!5e0!3m2!1sja!2sjp!4v1704409276865!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  3,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-1.jpg',
  true,
  '2024-01-07T00:11:16+09:00',
  '2024-01-07T00:11:16+09:00',
  '2024-07-29T15:47:01+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for chuo-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-1.jpg', 'ライトアップされる中央大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-5.jpg', '月島エリアのタワーマンションと佃大橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/paris-park-1.jpg', '中央大橋から眺める永代橋と東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-3.jpg', '銀座方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-4.jpg', '緑色に輝く佃大橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/chuo-bridge-6.jpg', 'ライトアップされる中央大橋', 5);

-- FAQs for chuo-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされる永代橋や佃大橋、東京スカイツリーなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), '中央大橋のライトアップは何時まで実施されていますか？', '中央大橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), '東京スカイツリーのライトアップは何時まで実施されていますか？', '東京スカイツリーのライトアップは日没から24時まで実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chuo-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 佃大橋 (tsukuda-bridge)
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
  'tsukuda-bridge',
  '佃大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '佃大橋',
  '聖路加ガーデンをはじめとした高層ビル群を眺めることができる橋。緑と黄色に輝くライトアップも見どころ。',
  '<p>東京オリンピックが開催された昭和39年に架けられた佃橋。</p>
<p>築地エリアと佃島や月島エリアを結んでいる全長は476mの大きな橋です。</p>
<p>橋の中腹からは聖路加ガーデンをはじめとした高層ビル群やライトアップされた勝鬨橋などを眺めることができます。</p>
<p>また日没を過ぎると佃橋は緑と黄色にライトアップされます。</p>
<p>見てよし歩いて渡ってよしの素敵な夜景スポットなのでぜひ夜散歩で立ち寄ってみてください。</p>',
  '東京都中央区月島 1-3-9',
  'https://ja.wikipedia.org/wiki/%E4%BD%83%E5%A4%A7%E6%A9%8B',
  '佃大橋 - Wikipedia',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線 「 月島駅 」 より徒歩約3分</li>
<li>東京メトロ有楽町線 「 月島駅 」より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="佃橋の位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.207000437646!2d139.78063988099393!3d35.66749799262101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889fa40b4ee35%3A0xe5e4a974bc53049c!2z5L2D5aSn5qmL!5e0!3m2!1sja!2sjp!4v1704409291021!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.2,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-7.jpg',
  true,
  '2024-01-06T23:54:07+09:00',
  '2024-01-06T23:54:07+09:00',
  '2024-07-29T15:47:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tsukuda-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-1.jpg', 'ライトアップされる佃大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-5.jpg', '月島エリアの高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-3.jpg', '佃大橋から眺める隅田川テラス', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-4.jpg', '聖路加ガーデンと勝鬨橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-2-1.jpg', 'ライトアップされる勝鬨橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-6.jpg', 'ライトアップされる中央大橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukuda-bridge-7.jpg', 'ライトアップされる佃大橋', 6);

-- FAQs for tsukuda-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '聖路加ガーデンをはじめとした高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), '佃大橋のライトアップは何時まで実施されていますか？', '佃大橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukuda-bridge'), '佃大橋のライトアップカラーは何色ですか？', '佃大橋は緑と黄色にライトアップされます。', 2);

-- Post: 朝潮運河親水公園 (asashio-canal-water-park)
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
  'asashio-canal-water-park',
  '朝潮運河親水公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '朝潮運河親水公園',
  '朝潮運河沿いに整備された遊歩道。月島エリアの高層ビル群が織りなす夜景が見どころ。',
  '<p>平成21年12月にオープンした中央区晴海地区にある朝潮運河親水公園。</p>
<p>運河沿いに綺麗に整備された遊歩道が続いており、月島エリアのタワーマンション群を眺めることができます。</p>
<p>眺望スペースの前にはベンチがあり、ゆっくりと夜景鑑賞ができるのも嬉しいポイント。</p>
<p>落ち着いた雰囲気でゆっくり夜散歩できるのでデートでの利用もおすすめです。</p>',
  '東京都中央区晴海 3-6',
  'https://www.city.chuo.lg.jp/a0037/shisetsu/genre/sports/sports00098.html',
  '中央区ホームページ／朝潮運河親水公園',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき駅」より徒歩6分</li>
<li>都営大江戸線「月島駅」より徒歩20分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="朝潮運河親水公園の位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.331476803264!2d139.78318673487354!3d35.66052639137218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018898eb80afdf5%3A0x5f852f8fd028be20!2z5pyd5r2u6YGL5rKz6Kaq5rC05YWs5ZySKOaZtOa1t-S4gOS4geebrik!5e0!3m2!1sja!2sjp!4v1704522054548!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.9,
  3.6,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-1.jpg',
  true,
  '2024-01-07T00:01:51+09:00',
  '2024-01-07T00:01:51+09:00',
  '2024-09-24T02:59:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for asashio-canal-water-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-1.jpg', '朝潮運河親水公園から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-2.jpg', '朝潮大橋を眺める', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-3.jpg', '朝潮運河親水公園の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-4.jpg', '朝潮運河親水公園から眺める夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-5.jpg', '朝潮運河親水公園から眺める夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-park-6.jpg', '晴海エリアの高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-water-parka-1.jpg', '朝潮運河親水公園の外観', 6);

-- FAQs for asashio-canal-water-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '月島エリアの高層ビル群が織りなす夜景が見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-canal-water-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 朝潮大橋 (asashi-bridge)
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
  'asashi-bridge',
  '朝潮大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '朝潮大橋',
  '朝潮運河の両脇に高層ビル群が建ち並ぶ光景を堪能できる夜景スポット。光量も多く、エリア随一の美しさを誇る。',
  '<p>晴海運河の支流、朝潮運河に架る朝潮大橋。</p>
<p>歩行者専用の道路が整備されており、全長240mの橋を5分ほどかけて渡ることができます。</p>
<p>橋の中腹には展望スペースがあり、晴海や月島エリアのタワーマンション群、朝潮親水公園などを眺めることが可能。</p>
<p>とても絵になる構図の写真が撮れますし、運河にビル灯りが反射してより一層に光量の多さが際立つのも素晴らしいです。</p>
<p>気軽に渡ることができ、高いレベルの夜景を堪能出来ら素晴らしい場所なのでぜひ夜散歩で立ち寄って見てください。</p>',
  '東京都中央区月島 2-3',
  'https://ja.wikipedia.org/wiki/%E6%9C%9D%E6%BD%AE%E5%A4%A7%E6%A9%8B',
  '朝潮大橋',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき駅」より徒歩6分</li>
<li>都営大江戸線「月島駅」より徒歩20分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="朝潮大橋の位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.331476803264!2d139.78318673487354!3d35.66052639137218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889714a9a6853%3A0xc33b4897ce6b1d16!2z5pyd5r2u5aSn5qmL!5e0!3m2!1sja!2sjp!4v1704522134592!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.2,
  3,
  3.1,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-7.jpg',
  true,
  '2024-01-07T00:22:49+09:00',
  '2024-01-07T00:22:49+09:00',
  '2024-01-08T01:57:29+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for asashi-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-7.jpg', '朝潮大橋から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-6.jpg', '晴海エリアの高層ビル群と朝潮運河親水公園', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-2.jpg', '豊洲方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-4.jpg', '豊洲方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-5.jpg', '朝潮大橋から眺める東京スカイツリー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-8.jpg', '月島エリアの高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-10.jpg', '朝潮橋を眺める', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asao-bridge-1.jpg', '朝潮大橋の雰囲気', 7);

-- FAQs for asashi-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '晴海や月島エリアのタワーマンション群、朝潮親水公園などが見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashi-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 両国橋 (ryougoku-bridge)
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
  'ryougoku-bridge',
  '両国橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '両国橋',
  '東京スカイツリービューやジャンクション夜景を堪能できる穴場夜景スポット。',
  '<p>両国国技館やJR両国駅から歩いてすぐの場所にある両国橋。</p>
<p>全長約170mの橋の上からは北側に東京スカイツリー、南側に迫力のあるジャンクション夜景を眺めることができます。</p>
<p>西側に見える緑色に見える柳橋も見どころです。</p>
<p>残念ながら両国橋自体はライトアップが実施されていませんが、橋の上からの眺望はとても魅力的なので、ぜひ隅田川周辺の夜散歩にお立ち寄りください。</p>',
  '東京都墨田区両国 1丁目11',
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
<li>JR総武線「両国駅」より徒歩約10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.29733875853!2d139.78641197578844!3d35.694299972583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018894ca95bc6f5%3A0x2a4698c22c69d472!2z5p2x5Lqs6YO95p2x5LqsIOS4oeWbveapiw!5e0!3m2!1sja!2sjp!4v1704700775653!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.9,
  2.9,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-4.jpg',
  true,
  '2024-01-08T22:30:17+09:00',
  '2024-01-08T22:30:17+09:00',
  '2024-01-09T00:49:19+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for ryougoku-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-4.jpg', '東京スカイツリーとアーチ型の隅田川橋梁', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-5.jpg', '両国橋から眺めるジャンクション夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-2.jpg', 'ライトアップされる柳橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-3.jpg', '両国橋から眺める首都高速道路', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ryougoku-bridge-1.jpg', '両国橋の雰囲気', 4);

-- FAQs for ryougoku-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリーや迫力のあるジャンクション夜景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ryougoku-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: アパホテル 両国駅タワー (apa-hotel-ryogokueki-tower)
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
  'apa-hotel-ryogokueki-tower',
  'アパホテル 両国駅タワー',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'アパホテル 両国駅タワー',
  '隅田川に架かる蔵前橋、厩橋、東京スカイツリーなど浅草らしい景色眺めるコスパ抜群ホテル。31Fスカイプールからの眺望もおすすめ。',
  '<p>JR両国駅、江戸東京博物館、両国国技館のすぐそばにあるアパホテル 両国駅タワー。</p>
<p>地上31階の高層タワーで隅田川方面の客室からは隅田川に架かる蔵前橋、厩橋、東京スカイツリーなど浅草らしい景色が広がります。</p>
<p>夜になると隅田川に架かる橋は個性豊かな色にライトアップされるので美しい夜景を満喫できるのが魅力です。</p>
<p>※今回取材で宿泊した部屋は22階の部屋でしたが、隅田川の全景を眺めるにはやや高さが不足していたので、夜景を満喫する場合は高層階を予約しましょう。</p>
<p>また、31階にあるスカイプールからは両国国技館や千代田区方面の高層ビル群を眺めも楽しめます。</p>
<p>スカイプールでの遊泳は有料かつ7月上旬～　9月上旬までの期間限定ですが、テラスは無料で見学が可能となっています。</p>
<p>両国駅周辺の観光スポットにアクセスしやすく、宿泊代もリーズナブルなので、気になった方はぜひ宿泊してみてはいかがでしょうか。</p>',
  '東京都墨田区横網 1-10-10',
  'https://www.apahotel.com/resort/ryogokueki/',
  'アパホテル＆リゾート 両国駅タワー | 公式サイト',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR総武線「両国駅」西口より徒歩3分</li>
<li>都営大江戸線「両国駅」より徒歩4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="アパホテル 両国駅タワーの位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12960.695098365377!2d139.7944016!3d35.6973411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ecab4fe2565%3A0xc4854d8decdf0516!2z44Ki44OR44Ob44OG44Or77yG44Oq44K-44O844OIIOS4oeWbvemnheOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1704620432422!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/-8DrtxLHjiE?si=l6oW9uB4mSUOMMY5" title="アパホテル 両国駅タワーの客室から撮影した夕景タイムラプス" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.5,
  2.9,
  3.1,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/apa.jpg',
  true,
  '2024-01-08T22:10:44+09:00',
  '2024-01-08T22:10:44+09:00',
  '2024-07-29T15:49:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for apa-hotel-ryogokueki-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa.jpg', 'アパホテル 両国駅タワーの客室から眺める夜景（北側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-17.jpg', 'ライトアップされる蔵前橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-2.jpg', 'ライトアップされる東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-18.jpg', '墨田区の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-14.jpg', 'アパホテル 両国駅タワーの客室から眺める夜景（南側）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-15.jpg', 'ライトアップされる清洲橋と月島の高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-1-1.jpg', '両国国技館とJR両国駅の駅舎', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-9.jpg', '新宿方面の高層ビル群', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-7.jpg', 'アパホテル 両国駅タワーの客室の眺望', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-6.jpg', 'アパホテル 両国駅タワーの客室から眺める東京スカイツリー', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-5.jpg', '横網町公園を眺める', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-3.jpg', 'アパホテル 両国駅タワーの客室（シングルルーム）', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-2.jpg', 'アパホテル 両国駅タワー31Fスカイププール', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/apa-ryougoku-tower-1.jpg', 'アパホテル 両国駅タワーの外観', 13);

-- FAQs for apa-hotel-ryogokueki-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), 'どんな夜景が楽しめますか？見どころはどこですか？', '隅田川に架かる蔵前橋、厩橋、東京スカイツリーなど浅草らしい夜景を楽しめます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), '31階のネスカフェプールは無料で入場できますか？', '遊泳する場合は有料ですが、テラスからの景色を見学するのは無料です。', 1);

-- Hotel info for apa-hotel-ryogokueki-tower
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'apa-hotel-ryogokueki-tower'), '10:00', '15:00（最終チェックイン 29時）', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176595%2F176595.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fapa-hotel-and-resort-ryogoku-eki-tower.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad346050%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2Fbiz%2F00081850%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 新大橋 (shin-ohashi)
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
  'shin-ohashi',
  '新大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '新大橋',
  'ハープのような形が特徴の美しい橋。橋の上からはライトアップされた清洲橋や両国ジャンクションなどを眺めることができる。',
  '<p>中央区日本橋浜町2丁目と江東区新大橋1丁目を結ぶ長さ170mの新大橋。</p>
<p>ケーブル本数が少ない斜張橋（ハープ型）でシンプルな見た目なのが特徴です。松尾芭蕉の句にも登場する歴史ある橋でもあります。</p>
<p>ライトアップカラーは黄色と緑。</p>
<p>橋の上からはライトアップされた清洲橋や新大橋マンションが織りなす迫力のある夜景を楽しめます。</p>
<p>橋の中腹にはベンチもあるので、ゆっくり夜景鑑賞を楽しんでみてはいかがでしょうか？</p>',
  '東京都中央区日本橋浜町2丁目',
  'https://ja.wikipedia.org/wiki/%E6%96%B0%E5%A4%A7%E6%A9%8B',
  '新大橋 | wikipedia',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li> 都営新宿線 「 森下駅 」 より徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="新大橋の位置・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.538856713335!2d139.7935863!3d35.68835515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188963b6729c9f%3A0x2b11571ce6c866bc!2z5paw5aSn5qmL!5e0!3m2!1sja!2sjp!4v1704596870655!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.8,
  3.3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-1.jpg',
  true,
  '2024-01-08T22:46:22+09:00',
  '2024-01-08T22:46:22+09:00',
  '2024-07-29T15:45:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for shin-ohashi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-1.jpg', 'ライトアップされる新大橋', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-3.jpg', '新大橋周辺から眺めるジャンクション夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-4.jpg', 'ハープのような形が特徴の新大橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-5.jpg', '光量が多い新大橋マンション', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-7.jpg', '清洲橋と墨田川テラス', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-6.jpg', '新大橋から眺める両国ジャンクション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-8.jpg', 'ライトアップされる清洲橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shin-ohashi-2.jpg', '新大橋と首都高速道路', 7);

-- FAQs for shin-ohashi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた清洲橋や新大橋マンションが織りなす迫力のある夜景', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shin-ohashi'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 朝潮小橋 (asashio-kobashi)
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
  'asashio-kobashi',
  '朝潮小橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '朝潮小橋',
  '高層ビル群が林立する晴海エリアにある人道橋。光量の多いビル灯りやレインボーブリッジを眺めることができる。',
  '<p>1998年に完成した人道橋の朝潮小橋。</p>
<p>110mの橋の中腹にはビュースポットが設けられており、西側には豊海公園やライトアップされたレインボーブリッジ 、東側には朝潮運河の両脇に大迫力のタワーマンション群を眺めることができます。</p>
<p>また、朝潮小橋のすぐそばにはTHE TOKYO TOWERSの付帯施設であるシーサイドアネックというスポーツジムと綺麗に整備されたテラスがあります。</p>
<p>程よい明るさのフットライトで点灯されたベンチが複数あり、ライトアップされたレインボーブリッジを眺めることができる穴場スポットです。</p>
<p>デートでの利用にもおすすめの場所なので、気になった方はぜひお立ち寄りください。</p>',
  '東京都中央区勝どき 6-3',
  'https://www.djq.jp/bridge_liblary/river_asashio/tokyo_bridge_asashio010_asashiokobashi.php',
  '東京の橋：朝潮小橋',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき駅」 より徒歩約9分</li>
<li>ゆりかもめ「竹芝駅」 より徒歩約15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="朝潮小橋の位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.766457402!2d139.7746166!3d35.6538101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897f962a1615%3A0x44228ce467f60fca!2z5pyd5r2u5bCP5qmL!5e0!3m2!1sja!2sjp!4v1705068231690!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.1,
  3.7,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-12.jpg',
  true,
  '2024-01-13T00:03:12+09:00',
  '2024-01-13T00:03:12+09:00',
  '2024-08-01T11:12:19+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for asashio-kobashi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-12.jpg', '朝潮運河の両脇に建つ晴海エリアのタワーマンション群', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/reimei-bridge-1.jpg', '黎明大橋から眺める朝潮小橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-2.jpg', 'シーサイドアネックス周辺にある広場', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-5.jpg', '朝潮小橋とドゥトゥールイーストタワー・ウェストタワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-7.jpg', 'レインボーブリッジと豊海公園', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-8.jpg', '白く輝く朝潮小橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-4.jpg', 'シーサイドアネックス周辺にある広場', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-9.jpg', '芝浦方面のビル夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-10.jpg', '朝潮小橋の雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/asashio-kohashi-11.jpg', 'パークタワー勝どきを見上げる', 9);

-- FAQs for asashio-kobashi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), 'どんな夜景が楽しめますか？見どころはどこですか？', '光量の多い晴海エリアのビル夜景やライトアップされたレインボーブリッジを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asashio-kobashi'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 渚橋 (nagisa-bridge)
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
  'nagisa-bridge',
  '渚橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '渚橋',
  '大迫力の芝浦アイランドの高層ビル群と東京モノレールの列車を眺めることができる穴場の夜景スポット。ブルーに輝く橋のライトアップも注目。',
  '<p>緩やかなカーブを描き、芝浦3丁目と4丁目を結ぶ渚橋（なぎさばし）。</p>
<p>橋の上からは芝浦アイランドの高層ビルや東京モノレールの列車を眺めることが可能です。</p>
<p>地上高170mを超えるビル夜景は非常に迫力があります。</p>
<p>渚橋の中腹にはゆっくり眺望を楽しめるビュースポットがあり、品川方面の街明かりが水面に反射する光景も見どころ。</p>
<p>なお渚橋は日没から23時までライトアップが実施されています。</p>
<p>綺麗に整備された運河沿いの遊歩道からライトアップされた橋を眺めるのもおすすめです。</p>',
  '東京都港区芝浦 12',
  'https://www.city.minato.tokyo.jp/dourokyouryou/kankyo-machi/doro/kyouryou/29-nagisabashi.html',
  '港区ホームページ | 渚橋（なぎさばし）',
  'https://visit-minato-city.tokyo/ja-jp/places/1135',
  '渚橋 | 港区観光協会',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR山手線 「 田町駅 」より徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="渚橋の位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12969.76037332633!2d139.7507186!3d35.6415273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b6fab20ae59%3A0x2e3003f3dbb073fa!2z5ria5qmL!5e0!3m2!1sja!2sjp!4v1705068392548!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  3,
  3.3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-3.jpg',
  true,
  '2024-01-12T23:43:19+09:00',
  '2024-01-12T23:43:19+09:00',
  '2024-01-12T23:45:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for nagisa-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-3.jpg', '遊歩道から渚橋と芝浦アイランドのビル群を眺める', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-4.jpg', 'ブルーにライトアップされる渚橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-8.jpg', 'ビル群の明かりが水面に美しく反射する光景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-1.jpg', '渚橋の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-7.jpg', '芝浦アイランドのタワーマンションと東京モノレールの列車', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-10.jpg', '芝浦運河と高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-2.jpg', '芝浦運河と高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-5.jpg', '渚橋周辺の遊歩道に設けられたベンチ', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-6.jpg', 'ブルーにライトアップされる渚橋', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/nagisa-bridge-9.jpg', '渚橋の上から芝浦アイランドのビル群を眺める', 9);

-- FAQs for nagisa-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '大迫力の芝浦アイランドの高層ビル群と東京モノレールの列車を眺めることができます。ブルーに輝く橋のライトアップも注目です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), '渚橋のライトアップは何時まで実施されていますか？', '渚橋のライトアップは日没から23時まで実施しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nagisa-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 築地本願寺 (tsukiji-temple)
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
  'tsukiji-temple',
  '築地本願寺',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '築地本願寺',
  '異国情緒と日本らしさを兼ね備えた建築様式が魅力の寺院。毎日21時まで実施されているライトアップは一見の価値あり。',
  '<p>国内外の観光客で賑わう築地市場のすぐ近くに立つ築地本願寺。</p>
<p>創建400年を越える由緒ある寺院で、本堂などは国の<a href="https://kunishitei.bunka.go.jp/bsys/maindetails/102/00004773">重要文化財</a>に指定されいます。 </p>
<p>インドと浄土真宗の建築様式を併せ持っており、ユニークな外観を眺めることができます。</p>
<p>毎日日没から21時までライトアップも実施されており、荘厳な眺めを満喫できるので気になった方はぜひお立ち寄りください。</p>',
  '東京都中央区築地 3-15-1',
  'https://tsukijihongwanji.jp/',
  '築地本願寺 公式サイト',
  'https://www.instagram.com/tsukijihongwanji_official/',
  '築地本願寺 Instgramアカウント',
  'https://www.gotokyo.org/jp/spot/12/index.html',
  '築地本願寺／東京の観光公式サイトGO TOKYO',
  '本堂参拝時間は6:00〜16:00（境内閉門は21時）',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ 日比谷線「築地駅」 出口 1 より徒歩約1分</li>
<li>東京メトロ 有楽町線「新富町駅」 出口 4 より徒歩約5分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.708070634371!2d139.7722836!3d35.6664862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bdf42f23f8f%3A0x5079895cf0ec2793!2z56-J5Zyw5pys6aGY5a-6!5e0!3m2!1sja!2sjp!4v1705068627341!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3.3,
  3.5,
  3.6,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-2.jpg',
  true,
  '2024-01-13T00:38:43+09:00',
  '2024-01-13T00:38:43+09:00',
  '2024-01-13T00:38:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tsukiji-temple
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-2.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-4.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-3.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-1.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tsukiji-temple-5.jpg', NULL, 4);

-- FAQs for tsukiji-temple
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'インドと浄土真宗の建築様式を併せ持った異国情緒あふれる建物がライトアップされる光景を楽しめます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), '築地本願寺のライトアップは何時まで実施されていますか？', '築地本願寺のライトアップは毎日日没から21時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tsukiji-temple'), '築地本願寺の参拝時間は何時までですか？', '築地本願寺の参拝時間は6:00〜16:00となっています。', 2);

-- Post: 明石町河岸公園 (akashi-park)
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
  'akashi-park',
  '明石町河岸公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '明石町河岸公園',
  '聖路加ガーデンのすぐそばにある綺麗に整備された公園。月島エリアのタワーマンション群が綺麗に並ぶ光景がとても美しい。',
  '<p>夜景が綺麗なホテルとして有名な<a href="/chuo/ginza-crestonhotel/">クレストン銀座</a>が入居する聖路加ガーデンのすぐそばにある明石町河岸公園。</p>
<p>隅田川にかかる佃橋や勝鬨橋がライトアップされる光景を眺めたり、月島エリアの高層ビル群を眺めることができる穴場の夜景スポットです。</p>
<p>周辺には月島や晴海エリアの高層ビル群を眺められる夜景スポットがありますが、この場所は随一の美しさを誇ります。</p>
<p>遊歩道も綺麗に整備されており、良い雰囲気。夜散歩などでぜひ訪れてみてください。</p>',
  '東京都中央区明石町 8-1',
  'https://www.city.chuo.lg.jp/a0037/shisetsu/genre/sports/sports00019.html',
  '中央区ホームページ／明石町河岸公園',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「築地」駅より徒歩約7分</li>
<li>東京メトロ有楽町線「新富町」駅より徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.620840556212!2d139.7792844!3d35.6670233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889cb728d47e5%3A0xd9dfc5fa371b8837!2z5piO55-z55S65rKz5bK45YWs5ZyS!5e0!3m2!1sja!2sjp!4v1705069882137!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.9,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-8.jpg',
  true,
  '2024-01-13T00:26:23+09:00',
  '2024-01-13T00:26:23+09:00',
  '2024-09-24T03:00:25+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for akashi-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-8.jpg', '月島エリアのタワーマンション群', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-11.jpg', '対岸に見える高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-7.jpg', '聖路加ガーデンを見上げる', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-10.jpg', '明石町河岸公園からの夜景（勝鬨橋方面）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-5.jpg', '明石町河岸公園からの夜景（佃橋方面）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-9.jpg', '明石町河岸公園の雰囲気（夜）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-1.jpg', '明石町河岸公園の雰囲気（昼）', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-4.jpg', '佃橋から眺める聖路加ガーデンと明石町河岸公園', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-3.jpg', '明石町河岸公園の雰囲気（昼）', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/akashi-park-2.jpg', '明石町河岸公園からの眺望', 9);

-- FAQs for akashi-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '月島エリアのタワーマンション群が綺麗に並ぶ光景やライトアップされる佃橋を眺めることができる。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), '佃橋のライトアップは何時まで実施されていますか？', '佃橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'akashi-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: アイ・リンクタウン 展望台 (ilink-town)
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
  'ilink-town',
  'アイ・リンクタウン 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'other'),
  NULL,
  'アイ・リンクタウン 展望台',
  '地上150mの高さから東京スカイツリーと富士山の共演を眺めることができる無料の展望施設。空気が澄む冬の時期に訪れるのがおすすめ。三脚の使用は禁止となっているので撮影目的で訪れる場合は注意が必要。',
  '<p>JR市川駅南口直結の高層マンションに設けられているアイリンク展望施設。</p>
<p>45Fの屋内と屋外に展望デッキがあり、地上150mの高さから美しい眺望を楽しむことができます。</p>
<p>見どころはなんといっても東京スカイツリーと富士山の共演を眺めることができる西側の景色。</p>
<p>黄昏時に訪れると息を呑むような絶景を堪能することができます。</p>

<h3>おすすめの訪問&撮影時期</h3>
<p>アイリンクタウンと富士山は100km以上離れているので、空気の澄んでいる状態でないとその姿を眺めることはできません。</p>
<p>美しい夜景を眺める場合は冬の時期に訪問しましょう。</p>
<p>また、毎年11月6日、2月5頃にはダイヤモンド富士を眺めることができるので、この時期に合わせて訪れるのもおすすめ。</p>

<h3>三脚の利用は禁止</h3>
<p>アイリンクタウン展望施設は三脚の使用が禁止されています。</p>
<p>ただし毎月第3金曜日・土曜日の月に2日間は「ライトダウンイベント」を行っており三脚を使っての夜景撮影が楽しめます。</p>',
  '千葉県市川市市川南1-10-1 ザ タワーズ ウエスト45階',
  'https://www.city.ichikawa.lg.jp/eco04/1111000055.html',
  'アイ・リンクタウン展望施設 | 市川市公式Webサイト',
  'https://maruchiba.jp/spot/detail_10055.html',
  'アイ・リンクタウン展望施設｜千葉県公式観光サイト',
  NULL,
  NULL,
  '9:00～22:00（展望デッキは21:00まで）',
  '<ul>
<li>毎月第1月曜日（祝日に当たる時は直後の平日）</li>
<li>年末年始（12/29～1/3）</li>
</ul>',
  '無料',
  '<ul>
<li>JR「市川駅」南口より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="アイ・リンクタウン展望施設の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.868446291052!2d139.90328727604378!3d35.72945377257176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188691f11fd69f%3A0x81e57a0031ec7c66!2z44Ki44Kk44O744Oq44Oz44Kv44K_44Km44Oz5bGV5pyb5pa96Kit!5e0!3m2!1sja!2sjp!4v1705227279531!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '150m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  5,
  2.8,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-11.jpg',
  true,
  '2024-01-14T19:29:02+09:00',
  '2024-01-14T19:29:02+09:00',
  '2025-03-02T13:13:12+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for ilink-town
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-11.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-7.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-8.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-13.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-10.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-5.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-6.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-12.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-4.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-3.jpg', NULL, 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-2.jpg', NULL, 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/ilink-town-1.jpg', NULL, 11);

-- FAQs for ilink-town
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京スカイツリーと富士山の共演を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), '東京スカイツリーのライトアップは何時まで実施されていますが？', '東京スカイツリーのライトアップは日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'アイ・リンクタウン展望施設の高さは何メートルですか？', 'アイ・リンクタウン展望施設の地上高150mの位置にあります。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), 'アイ・リンクタウン展望施設からダイヤモンド富士が見れるタイミングはいつですか？', '毎年2月5日、11月6日頃にダイヤモンド富士を眺めることができます。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ilink-town'), '三脚を使って夜景を撮ることはできますか？', '毎月第3金曜日・土曜日の月に2日間のみ三脚を使っての撮影が許可されています。', 4);

-- Post: 和田倉噴水公園 (wadakura-park)
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
  'wadakura-park',
  '和田倉噴水公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  '<!-- wp:site-reviews/form /-->',
  '和田倉噴水公園',
  '3基の噴水が特徴の穴場夜景スポット。丸の内方面の高層ビル群の夜景も美しく、落ち着いた雰囲気なのでデートにもおすすめ。噴水とライトアップの時間は日没～20時まで（夏季は21時まで）。',
  '<p>皇居外苑地区の一角にあり、平成7年、皇太子殿下のご成婚を機に完成した公園が和田倉噴水公園。</p>

<p>公園内には美しい噴水、無料休憩室、スターバックス（皇居外苑 和田倉噴水公園店）などがあります。東京駅から徒歩約10分とアクセスも良く、仕事帰りにふらっと立ち寄れるのも魅力です。</p>

<p>夜になると高さ6ｍに吹き上げる大噴水と中噴水2基のライトアップが開始。噴水が照明に照らされて色とりどりに輝く様子は、思わず見入ってしまう美しさです。</p>

<p>大手町の高層ビル群の灯りも眩しく、とても美しい夜景を楽しむことができます。都会のど真ん中にいながら、水の音に癒される贅沢なひとときを過ごせました。</p>

<p>風が穏やかな日には公園内の池に見事な水鏡（リフレクション）ができるのも見どころ。ビル群の明かりが水面に映り込み、幻想的な光景が広がります。</p>

<p>落ち着いた雰囲気の場所なので、デートにも非常におすすめの夜景スポットです。ベンチも点在しているので、ゆっくり座って夜景を眺めることができます。</p>

<p>なお噴水とライトアップの時間は日没～20時まで（夏季は21時まで）となっています。強風の場合は噴水が上がらない場合があるので注意しましょう。</p>',
  '東京都千代田区皇居外苑3-1',
  'https://www.env.go.jp/garden/kokyogaien/1_intro/his_07.html',
  '和田倉噴水公園｜皇居外苑｜国民公園｜環境省',
  'https://store.starbucks.co.jp/detail-4088/',
  'スターバックス（皇居外苑 和田倉噴水公園店）',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ二重橋前から徒歩5分</li>
<li>東京メトロ大手町から徒歩5分</li>
</ul>',
  '-',
  '<iframe  allow="picture-in-picture" title="和田倉噴水公園の地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7423409887238!2d139.75868491598655!3d35.68334583746205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf7c1c38457%3A0x20a556bade3c9665!2z5ZKM55Sw5YCJ5Zm05rC05YWs5ZyS!5e0!3m2!1sja!2sjp!4v1673202238143!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe allow="picture-in-picture" width="560" height="315" src="https://www.youtube.com/embed/IWG_hLYSrsM?si=1mucLWTQ98HSTMTh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.8,
  5,
  4.8,
  4.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-2.jpg',
  true,
  '2024-03-15T00:05:16+09:00',
  '2024-03-15T00:05:16+09:00',
  '2026-01-27T08:53:43+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for wadakura-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-2.jpg', '和田倉噴水公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-7.jpg', '和田倉噴水公園の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-5.jpg', '和田倉噴水公園の噴水', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-8.jpg', 'スターバックスのリフレクション', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-1.jpg', '和田倉噴水公園の噴水とパレスホテル東京', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-4.jpg', '和田倉噴水公園のリフレクション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-6.jpg', '和田倉噴水公園のリフレクション', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-2.jpg', '夕暮れ時の和田倉噴水公園', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-1.jpg', '和田倉噴水公園のリフレクション', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-4.jpg', '和田倉噴水公園の夜景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-park.jpg', '夕暮れ時の和田倉噴水公園', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-1-1.jpg', '夕暮れ時の和田倉噴水公園', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-park-reflaction.jpg', '和田倉噴水公園のリフレクション', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-3.jpg', '和田倉噴水公園の噴水とパレスホテル東京', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-5.jpg', '和田倉噴水公園内にあるスターバックス', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-park-day-01.jpg', '和田倉噴水公園の雰囲気', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-park-day-02.jpg', '新緑が美しい和田倉噴水公園', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/wadakura-park-day-03.jpg', '大手町方面の街並み', 17);

-- FAQs for wadakura-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), '噴水のライトアップの時間は何時までですか？', '日没～20時まで（夏季は21時まで）となっています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), '噴水が上がる時間は何時までですか？', '10時から20時（夏季は21時まで）までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), '噴水は1時間に何回上がりますか？', '平日は1時間に1～2回程度、夏期の土日祝日は1時間に4回程度稼働します。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), '東京駅から和田倉噴水公園まではどれくらいの距離がありますか？また歩いてどれくらいかかりますか？', '東京駅丸の内南口から和田倉噴水公園までは約1200メートルの距離があり、歩いて15分ほどかかります。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wadakura-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 4);

-- Post: クイーンズスクエア横浜 4F テラス (queen-square)
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
  'queen-square',
  'クイーンズスクエア横浜 4F テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'クイーンズスクエア 4F テラス',
  '煌びやかな「よこはまコスモワールド」を程よい高さから俯瞰して眺めることができる特等席。雰囲気もよくデート利用におすすめ。',
  '<p>横浜みなとみらい駅直結の大型複合施設であるクイーンズスクエア横浜。</p>
<p>4Fには屋外デッキがあり、よこはまコスモワールドや汽車道・北仲通方向の夜景を眺めることが可能です。</p>
<p>高層階ではないものの目の前の視界が開けていてとても夜景のレベルもなかなかのもの。</p>
<p>いつ訪れても人は少なく落ち着いて夜景鑑賞できる空間なので、みなとみらい周辺の夜デートなどでぜひご利用ください。</p>',
  '神奈川県横浜市西区みなとみらい2-3',
  'https://qsy-tqc.jp/',
  'クイーンズスクエア横浜公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00〜22:00',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「みなとみらい駅」より直結</li>
<li>JR線「桜木町駅」より徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12999.672863770655!2d139.634363!3d35.4568191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5c9021f44d%3A0x2880bf9d469a3558!2z44Kv44Kk44O844Oz44K644K544Kv44Ko44Ki5qiq5rWc!5e0!3m2!1sja!2sjp!4v1709644353195!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.4,
  3.4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/tokyu-square-1-1.jpg',
  true,
  '2024-03-05T22:16:44+09:00',
  '2024-03-05T22:16:44+09:00',
  '2024-03-05T22:23:18+09:00'
);

-- Images for queen-square
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/tokyu-square-1-1.jpg', 'よこはまコスモワールドの遊具が動く様子', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyu-square-2.jpg', '横浜ハンマーヘッドに停泊する豪華客船', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyu-square-3.jpg', 'クイーンズスクエア屋外テラスの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyu-square-4.jpg', 'レインボーに輝くコスモロック21（大観覧車）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyu-square-5.jpg', '高さ212mの高層タワーマンション・横浜北仲ノット', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/tokyu-square-1.jpg', 'クイーンズスクエア ウッドデッキの雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/tokyu-square-2.jpg', 'コスモロック21とパシフィコ横浜', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/tokyu-square-3.jpg', 'クイーンズスクエアから眺める汽車道・北仲通方向の夜景', 7);

-- FAQs for queen-square
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'よこはまコスモワールドや汽車道・北仲通方向の夜景ゆっくり鑑賞することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-square'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 日比谷公園 (hibiya-park)
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
  'hibiya-park',
  '日比谷公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  '日比谷公園',
  '東京ドーム4個分の敷地面積を誇る広大な敷地の公園。28分間刻みでライトアップカラーや噴水のパターンが刻々と変化する大噴水がみどころ。',
  '<p>東京ドーム4個分の敷地面積を誇る日比谷公園。</p>
<p>広大な敷地の中央には直径30mの巨大な池に囲まれた大噴水があり、夜になるとライトアップが実施されます。</p>
<p>ライトアップのカラーや噴水のパターンは28分間刻みでどんどん変化していき、24のバリエーションを眺めることが可能なのが見どころ。</p>
<p>また日比谷公園は霞ヶ関や丸の内のビル群に囲まれていることもあり、ベンチから眺めるビル夜景も非常に美しいです。</p>
<p>非常に良い雰囲気の夜景スポットなので日比谷、有楽町周辺でデートした帰りなどに立ち寄ってみてはいかがでしょうか。</p>',
  '東京都千代田区日比谷公園 1-2',
  'https://www.tokyo-park.or.jp/park/format/index037.html',
  '日比谷公園｜公園へ行こう！',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「日比谷駅」より徒歩2分</li>
<li>東京メトロ丸の内線・日比谷線・千代田線「霞ヶ関駅」より徒歩3分</li>
<li>JR京浜東北線・山手線「有楽町駅」より徒歩8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="日比谷公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.9069994832693!2d139.75522670730203!3d35.67361556951579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf20f0a8781%3A0xa6155be4df77cfc8!2z5pel5q-U6LC35YWs5ZySIOWZtOawtOW6g-WgtA!5e0!3m2!1sja!2sjp!4v1704408924078!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.5,
  3.7,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-2.jpg',
  true,
  '2024-02-10T13:21:58+09:00',
  '2024-02-10T13:21:58+09:00',
  '2024-02-10T13:23:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for hibiya-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-2.jpg', '日比谷公園の大噴水と東京ミッドタウン日比谷', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-1.jpg', 'ライトアップされる大噴水', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-3.jpg', 'ライトアップされる大噴水', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-4.jpg', 'ライトアップされる日比谷公会堂', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-5.jpg', 'ライトアップされる日比谷公会堂', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-6.jpg', '日比谷公園内から眺める東京ミッドタウン日比谷', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-7.jpg', '日比谷公園内のベンチと霞ヶ関の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/hibiya-park-8.jpg', '日比谷公園内のベンチと丸の内の高層ビル群', 7);

-- FAQs for hibiya-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされる大噴水や日比谷公会堂が見どころです。また園内から眺める丸の内や霞ヶ関方面のビル夜景も美しいです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), '日比谷公園の噴水のライトアップは何時から何時までですか？', '日比谷公園の大噴水の稼働時間は8：00から21：00までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), '日比谷公会堂のライトアップは何時から何時までですか？', '日比谷公会堂のライトアップは日没から22時まで実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 東京タワー 地下駐車場 階段 (tokyo-tower-stairs)
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
  'tokyo-tower-stairs',
  '東京タワー 地下駐車場 階段',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '東京タワー 地下駐車場 階段',
  'インスタグラムなどのSNSで大人気のフォトジェニックな撮影スポット。階段の先に東京タワーがそびえ立つ光景を写真に収めることができる。',
  '<p>東京タワーの南側に隣接する地下駐車場（東京タワーパーキングセンター）。</p>
<p>地上に出る階段の先に東京タワーが見えてフォトジェニックな写真を撮ることが可能です。</p>
<p>インスタグラムで爆発的に人気を集めている撮影スポットであり、写真を撮るために多くの方が列を作って並んでいるのを見かけます。</p>
<p>駐車場を利用した方の歩行の妨げになるため、三脚の利用は禁止となっています。</p>
<p>なお場所がわかりづらい場合は「とうふ屋うかい」を目指してアクセスしてみるのがおすすめです。</p>',
  '東京都港区芝公園 4-5',
  'https://times-info.net/P13-tokyo/C103/park-detail-BUK0033837/',
  '東京タワー地下駐車場｜タイムズ駐車場検索',
  NULL,
  NULL,
  'https://www.ukai.co.jp/shiba/',
  'とうふ屋うかい',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>大江戸線 赤羽橋駅・赤羽橋口から徒歩5分</li>
<li>日比谷線 神谷町駅・1番出口から徒歩7分</li>
<li>三田線 御成門駅・A1から徒歩6分</li>
<li>三田線 芝公園駅・A4から徒歩10分</li>
</ul>',
  '-',
  '<iframe title="東京タワー 地下駐車場 階段の場所・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.2171583130336!2d139.74503418985637!3d35.657488085700926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b2d1c47147f%3A0xd4aa077b348b7925!2s%22Secret%22%20Tokyo%20Tower%20Spot!5e0!3m2!1sja!2sjp!4v1706319008966!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  3.5,
  2.8,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-7.jpg',
  true,
  '2024-01-27T10:33:19+09:00',
  '2024-01-27T10:33:19+09:00',
  '2024-01-29T12:49:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for tokyo-tower-stairs
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-7.jpg', '東京タワー 地下駐車場の階段から撮影した夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-8.jpg', '東京タワー 地下駐車場の出入り口の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-9.jpg', '東京タワー 地下駐車場の階段付近にある「とうふ屋うかい」', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-3.jpg', '東京タワー 地下駐車場の階段から見上げる東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-5.jpg', '東京タワー 地下駐車場の階段付近にある「とうふ屋うかい」', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-4.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-6.jpg', '東京タワーパーキングセンターの出入り口の雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-stair-1.jpg', '東京タワー 地下駐車場の出入り口の雰囲気', 7);

-- FAQs for tokyo-tower-stairs
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), 'どんな夜景が楽しめますか？見どころはどこですか？', '階段の先に東京タワーがそびえ立つ迫力のある夜景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), '東京タワーのライトアップは何時までですか？', '東京タワーのライトアップ日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-stairs'), '東京タワー 地下駐車場 階段はどこにありますか？', '東京タワー 地下駐車場 階段は懐石料理店の「とうふ屋うかい」や「いきいき広場」を目的地のすぐ近くにあります。', 3);

-- Post: 舞浜海岸遊歩道 (maihama-promenade)
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
  'maihama-promenade',
  '舞浜海岸遊歩道',
  'spot',
  (SELECT id FROM categories WHERE slug = 'other'),
  NULL,
  '舞浜海岸遊歩道',
  '東京ゲートブリッジと富士山が重なり合う絶景を眺めることができる無料の夜景スポット。毎年2月中旬と10月中旬にはダイヤモンド富士を眺めることができ多くのフォトグラファーが集まる場所となっている。',
  '<p>東京ディズニーシーの裏側の海沿いにある舞浜海岸遊歩道。</p>
<p>綺麗に整備された遊歩道からは西の方角に東京ゲートブリッジや富士山を眺めることができます。</p>
<p>日本を代表する山と独特な形状の橋が一直線に重なる光景はとても絵になります。</p>
<p>ベストな撮影ポイントはプロメテウス火山が正対して見える場所近辺。</p>
<p>海風が強いためしっかり防寒した上で撮影や夕景鑑賞に訪れてみてください。</p>
<p>なお、舞浜海岸遊歩道からダイヤモンド富士を拝むことができるのは毎年2月中旬と10月中旬の2回。</p>
<p>「<a href="https://nicomap.net/simulator/">日の出・日の入り方角シミュレーター</a>」などのツールを活用し、ベストな日付をチェックして撮影に出かけましょう。</p>',
  '千葉県浦安市舞浜',
  'https://www.city.urayasu.lg.jp/todokede/machi/1034984/1022992.html',
  '浦安海岸舞浜地区の一部区間開放について｜浦安市公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京葉線・武蔵野線「舞浜駅南口」より徒歩約15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="舞浜海岸遊歩道の位置・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12972.569232962433!2d139.8796295!3d35.6242181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187dc3b123a185%3A0xae0f3683b1843218!2z6Iie5rWc5rW35bK46YGK5q2p6YGT!5e0!3m2!1sja!2sjp!4v1707739268928!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  2.9,
  2.9,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-18.jpg',
  true,
  '2024-02-12T21:01:33+09:00',
  '2024-02-12T21:01:33+09:00',
  '2025-03-02T13:10:17+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'gate-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for maihama-promenade
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-18.jpg', '舞浜海岸遊歩道から眺める夕景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-14.jpg', '黄昏時の舞浜海岸遊歩道の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-15.jpg', '黄昏時の舞浜海岸遊歩道の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-19.jpg', 'ライトアップされる東京ディズニーシーのアトラクション', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-11.jpg', '富士山のすぐそばに夕日が沈む様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-8.jpg', '舞浜海岸遊歩道の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-7.jpg', '東京ディズニーシーのアトラクション', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-4.jpg', '舞浜海岸遊歩道のウッドデッキとベンチ', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-3.jpg', '葛西臨海公園と東京スカイツリー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-2.jpg', 'JR舞浜駅周辺の雰囲気', 9);

-- FAQs for maihama-promenade
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされる東京ゲートブリッジと富士山の共演を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), '舞浜海岸遊歩道からダイヤモンド富士を眺めることができる時期はいつですか？', '毎年2月中旬と10月中旬にダイヤモンド富士を眺めることが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), '東京ゲートブリッジと富士山を重ねて眺めることができる場所はどこですか？', 'プロメテウス火山が正対して見える場所近辺がベストな撮影スポットです。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'maihama-promenade'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 旧中川河川敷・ふれあい橋 (fureai-bridge)
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
  'fureai-bridge',
  '旧中川河川敷・ふれあい橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'edogawa'),
  NULL,
  '旧中川河川敷・ふれあい橋',
  '東京スカイツリーとふれあい橋の共演が美しい夜景スポット。春には河津桜が咲き誇り、見事な桜景も楽しめる。',
  '<p>江戸川区平井と江東区亀戸を結ぶ長さ56mのふれあい橋</p>
<p>綺麗なアーチが特徴の橋で、北東岸からはライトアップされた橋と東京スカイツリーの競演も楽します。</p>
<p>ふれあい橋のライトアップカラーはブルーなので、東京スカイツリーが粋（ブルー）の時に合わせて訪れるのがおすすめ。</p>
<p>また、ふれあい橋周辺は2月上旬頃から咲き始める河津桜、ソメイヨシノなどが開花する桜の名所としても有名。</p>
<p>様々な景観を楽しめるスポットなので、ぜひアクセスしてみてください。</p>',
  '東京都江戸川区平井 7-34',
  'https://www.city.koto.lg.jp/470208/machizukuri/dorohashi/hashiichiran/kudokyo/14843.html',
  'ふれあい橋｜江東区',
  'https://www.city.edogawa.tokyo.jp/e004/kuseijoho/kohokocho/promotion/midokoro/fureaibashi.html',
  '旧中川河川敷とふれあい橋 | 江戸川区ホームページ',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR総武線「平井駅」南口より徒歩約15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="ふれあい橋の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15757.166068134584!2d139.8236194228453!3d35.70919601331161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888bc5d26931d%3A0x2952c1b9fd719711!2z44G144KM44GC44GE5qmL!5e0!3m2!1sja!2sjp!4v1707829053294!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.8,
  3.5,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-2.jpg',
  true,
  '2024-02-18T22:28:19+09:00',
  '2024-02-18T22:28:19+09:00',
  '2024-02-18T22:31:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for fureai-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-2.jpg', 'ライトアップされたふれあい橋と東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-3-1.jpg', 'ライトアップされたふれあい橋と東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-5.jpg', 'ふれあい橋のリフレクション', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-6.jpg', 'ふれあい橋から眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-4.jpg', '旧中川周辺の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/fureai-bridge-1.jpg', 'ふれあい橋の雰囲気', 5);

-- FAQs for fureai-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京スカイツリーとふれあい橋の共演を楽しむことができます。また春には河津桜が咲き誇り、見事な桜景も楽むことも可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'fureai-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 【体験記】AIROS Skyviewのヘリコプター遊覧で東京夜景を堪能してきた話。 (airos-skyview)
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
  'airos-skyview',
  '【体験記】AIROS Skyviewのヘリコプター遊覧で東京夜景を堪能してきた話。',
  'spot',
  (SELECT id FROM categories WHERE slug = 'pickup'),
  '<!-- wp:paragraph -->
<p>東京タワーやスカイツリーなどのランドマークや光まばゆい高層ビル群の明かりが魅力の東京夜景。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>都内にはそんな美しい景色を眺められる展望台が多数ありますが、<span class="swl-marker mark_yellow">もうワンランク上の楽しみ方をするならヘリコプター遊覧がおすすめ</span>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回、AIROS Skyviewの「<a href="https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noreferrer noopener nofollow">25分の東京ナイトヘリクルージング</a><a href="https://skyview.airos.jp/tokyo/night/411?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noreferrer noopener"> </a>」を体験してきたので、その様子を紹介します！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>非日常を味わえるデートコースをお探しの方や東京夜景を上空から撮影してみたいフォトグラファーの方はぜひチェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/button {"hrefUrl":"https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape\u0026utm_medium=banner\u0026utm_campaign=article","isNewTab":true,"color":"blue","className":"is-style-btn_normal"} -->
<div class="swell-block-button blue_ is-style-btn_normal"><a href="https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noopener noreferrer" class="swell-block-button__link"><span>AIROS Skyviewのヘリコプター遊覧を詳しく見る</span></a></div>
<!-- /wp:loos/button -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ヘリコプター遊覧 AIROS Skyview とは</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":8818,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/AIROS-1024x542.jpg" alt="" class="wp-image-8818"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>AIROS Skyviewは全国15拠点以上でヘリコプタークルージングを行っているサービスです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京都内、富士山、京都など全国各地の観光名所や絶景ポイントを空から楽しむことができます。 </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京夜景を楽しめる遊覧コースは最短22分 ~ 最長55分まで様々な種類があり、下記のようなシーンでの利用が特に人気となっています。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>プロポーズ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>記念日、誕生日</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>空撮</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noreferrer noopener nofollow">東京夜景を楽しめるヘリコプター遊覧のコース&amp;料金一覧</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">AIROS Skyview ヘリコプター遊覧を体験してきた！</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからは実際にAIROS Skyviewの「<a href="https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noreferrer noopener nofollow">25分の東京ナイトヘリクルージング</a><a href="https://skyview.airos.jp/tokyo/night/411"> </a>」を体験してきた様子をご紹介。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回、ヘリコプター遊覧を体験したのは2月中旬の休日。自宅から千葉県の船橋飛行場へ向かいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>船橋飛行場へ公共交通機関で行く場合の最寄駅はJR船橋駅。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>船橋駅南口にはタクシー乗り場があって常時タクシーが待機しているので、すぐに移動することが可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8727,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/01-1024x683.jpg" alt="" class="wp-image-8727"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>タクシーで移動すること約15分、船橋飛行場に到着。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>飛行場には搭乗させていただく4名乗りヘリコプターがスタンバイ済みでした。間近で見るヘリコプターかっこいい…！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ヘリコプターとしては一番小さいクラスの機体だそうですが、なんと車と同じサイズのエンジンで空を飛べるんだとか。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8728,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/02-1024x683.jpg" alt="" class="wp-image-8728"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">フライト開始&amp;千葉上空の街並みを楽しむ</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回のフライト開始時刻は17:30。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>手続きを済ませ、予定していた時刻が来たら<strong>25分のヘリコプター遊覧開始</strong>です！</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8729,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/03-1024x683.jpg" alt="" class="wp-image-8729"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>アトラクションのような浮遊感を味わいながら離陸すると、あっという間にヘリコプターは上空へ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>見送ってくださったスタッフの方達がどんどん小さくなっていき、東京のある西の方角へ進んでいきます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8730,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/04-1024x683.jpg" alt="" class="wp-image-8730"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>フライトを開始してまず見えてくるのは千葉と東京の県境にある江戸川。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まるで鳥のように空から見渡す景色は自然の雄大さを感じさせてくれます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8734,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/07-1024x683.jpg" alt="" class="wp-image-8734"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>江戸川を越えると今度はすぐに江戸川区と墨田区の区境に流れる荒川が見えてきた。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8733,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/07-1-1024x683.jpg" alt="" class="wp-image-8733"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>小松川橋・新小松川橋や清砂大橋など荒川に架かる大きな橋もしっかり眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8732,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/06-1024x683.jpg" alt="" class="wp-image-8732"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">大迫力の東京スカイツリー周辺の景色</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>フライト開始から約5分、大きな見どころの一つである東京スカイツリーがいよいよ目の前に…！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上空から眺める高さ世界一の電波塔は圧倒的な存在感を放っていました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8735,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/08-1024x683.jpg" alt="" class="wp-image-8735"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>隅田川には日没を過ぎると<a href="https://nightscape.tokyo/article/sumida-river-bridge/">ライトアップが実施されている橋が12本</a>あります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上空からはそんな個性豊かな橋の姿も眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8737,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/10-1024x683.jpg" alt="" class="wp-image-8737"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>スカイツリーを過ぎるとヘリコプターは隅田川の下流へ進んでいきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>眼下にはとても光量の多い江東区と中央区の夜景。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8738,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/11-1024x683.jpg" alt="" class="wp-image-8738"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">高層ビル群が林立するウォーターフロントの景色</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>浅草エリアを通過した後は見どころの2つ目である湾岸エリアへ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>所狭しと高層ビル群が立ち並ぶ光景は圧巻の一言です。ライトアップされた東京ゲートブリッジの姿もしっかり確認できます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8739,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/12-1024x683.jpg" alt="" class="wp-image-8739"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>高層ビル群が等間隔に立ち並ぶ様子が印象的な東雲エリア周辺。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8740,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/13-1024x683.jpg" alt="" class="wp-image-8740"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>手前に見えるのは豊洲市場や千客万来、豊洲ぐるり公園。その奥の方にはお台場の街並み。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8741,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/14-1024x683.jpg" alt="" class="wp-image-8741"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">東京タワー、東京駅など都心エリアの景色</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>湾岸エリアを通過したあとは見どころ3つ目の都心エリアへ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まず視界に入ってくるのは東京タワーがある港区周辺の夜景。黄昏時の空のグラデーションが夜景に華を添えてくれています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8743,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/15-1024x683.jpg" alt="" class="wp-image-8743"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ヘリコプター遊覧を体験した日が休日だったので、高層ビル群の明かりは少なめでしたが、それでも東京ならではの素晴らしい景観を楽しめました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8742,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/15-1-1024x683.jpg" alt="" class="wp-image-8742"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京タワー周辺を通過するとすぐに東京駅周辺の夜景が見えてきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>綺麗に整備された東京駅丸の内駅前広場、行幸通りの先に見える皇居、丸の内エリアの高層ビル群。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とても見応えのある夜景です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8744,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/16-1024x683.jpg" alt="" class="wp-image-8744"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ヘリコプターは復路へ</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>都心エリアを過ぎるとヘリコプターは船橋飛行場へ帰るために復路へ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8747,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/19-1024x683.jpg" alt="" class="wp-image-8747"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>再び東京スカイツリー周辺。往路とは別角度から東京スカイツリービューを味わいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>都内の有名エリアをぐるっと回ってきましたが、やっぱりスカイツリーが一番迫力があると感じました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8749,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/21-1024x683.jpg" alt="" class="wp-image-8749"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>江戸川周辺の街並み。復路では空も暗くなってとても美しい夜景を楽しむことができました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>光の大海原という言葉がぴったりあいます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8750,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/22-1024x683.jpg" alt="" class="wp-image-8750"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>最後は船橋市上空から眺める首都高速道路。夜の高速道路はオレンジ色の照明がとても綺麗ですね。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>大興奮のヘリコプター遊覧の時間はあっという間に過ぎて17：55頃に船橋飛行場へ到着。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>またいつかヘリコプターからの夜景を味わいたいな…としみじみ思いながら飛行場を後にしました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8751,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/23-1024x683.jpg" alt="" class="wp-image-8751"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ヘリコプター遊覧で東京の夜景を楽しむコツ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":8748,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/20-1024x683.jpg" alt="" class="wp-image-8748"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>AIROS Skyviewの「<a href="https://skyview.airos.jp/tokyo/night/411/?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="noreferrer noopener nofollow">25分の東京ナイトヘリクルージング</a><a href="https://skyview.airos.jp/tokyo/night/411">」</a>を体験してみて感じたヘリコプターからの夜景鑑賞を楽しむコツを3つ紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">25分以上の遊覧コースを選ぶ</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AIROS Skyviewの東京遊覧は最短22分のフライトコースから用意されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このコースは残念ながら今回紹介した湾岸エリアや都心エリアの街並みを見る前に飛行場に戻ってしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>せっかくヘリコプターに搭乗するなら湾岸エリアや都心エリアの眺めも堪能した方が満足度が高いと思うので、25分以上のコースを選びましょう！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">トワイライトタイムを狙う</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>綺麗な夜景を楽しむなら空が真っ暗なタイミングではなく、<span class="swl-marker mark_yellow">日没から20~30分後に訪れるマジックアワーの時間に合わせてヘリコプター遊覧を予約するのがおすすめ</span>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記の記事では<strong>時期別にトワイライトタイムの目安</strong>をまとめているのでぜひチェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/twilight/","kind":"post-type"},"icon":"externalLink"} /-->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">夜景写真を綺麗に撮る場合はカメラのシャッタースピードに注意</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ヘリコプターは約時速200kmで進んでいくのでシャッタースピードが遅いと写真がぶれてしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>一眼カメラなどで写真を撮る場合は<span class="swl-marker mark_yellow">シャッタースピードを1/320秒ほどに保って撮影</span>するようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また夜景を撮る際にシャッタースピードを1/320秒を維持しようとすると明るいレンズを使ってもISO値を1万近くまで上げざるを得ません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ノイズは撮影後にLightroomなどの現像ソフトを使って除去するようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ヘリコプター遊覧 AIROS Skyview を体験した感想</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>AIROS Skyviewのヘリコプター遊覧で東京夜景を堪能してきた様子をご紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これまで都内の展望台はほぼ全て回っていますが、上空から眺める夜景は別格の迫力がありました…！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span class="swl-marker mark_yellow">非日常な時間を味わうことができる素晴らしいサービス</span>だと感じたので、ぜひ本記事をお読みの皆さんにも体験してほしいです。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/button {"hrefUrl":"https://skyview.airos.jp/tokyo/night/411?utm_source=tokyonightscape\u0026utm_medium=banner\u0026utm_campaign=article","isNewTab":true,"color":"blue","className":"is-style-btn_normal"} -->
<div class="swell-block-button blue_ is-style-btn_normal"><a href="https://skyview.airos.jp/tokyo/night/411?utm_source=tokyonightscape&amp;utm_medium=banner&amp;utm_campaign=article" target="_blank" rel="nofollow noopener noreferrer" class="swell-block-button__link"><span>AIROS Skyviewのヘリコプター遊覧を詳しく見る</span></a></div>
<!-- /wp:loos/button -->',
  NULL,
  NULL,
  '<p></p>
<p><a href=""></a></p>',
  NULL,
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
<li>〇〇線「〇〇駅」から徒歩約3分</li>
<li></li>
<li></li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  null,
  null,
  null,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/21.jpg',
  true,
  '2024-02-26T22:16:52+09:00',
  '2024-02-26T22:16:52+09:00',
  '2025-03-01T10:24:35+09:00'
);

-- FAQs for airos-skyview
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'airos-skyview'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 渋谷リバーストリート (river-street)
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
  'river-street',
  '渋谷リバーストリート',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷リバーストリート',
  '渋谷川沿いに伸びる全長600mの遊歩道。渋谷ストリームで食事をしたあとの夜散歩におすすめ。',
  '<p>渋谷ストリームの開業と同時にオープンした渋谷リバーストリート。</p>
<p>渋谷駅から恵比寿代官山へ向かって流れる渋谷川沿いの遊歩道で夜になると色鮮やかなライトアップが実施される光景を楽しめます。</p>
<p>毎年2月中旬から下旬にかけて川沿いに河津桜が咲くのも見ものです。</p>
<p>渋谷ストリーム内の飲食店で食事をした後の夜散歩に利用してみてはいかがでしょうか？</p>',
  '東京都渋谷区渋谷 3-18',
  'https://stream-hall.jp/square/riverstreet/',
  '渋谷リバーストリート公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東急東横線・田園都市線、東京メトロ半蔵門線・副都心線「渋谷駅」C2出口直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8710652524474!2d139.70311267578663!3d35.65554817259555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b09b47cfb5d%3A0xe216e0addbb353ec!2z5riL6LC344Oq44OQ44O844K544OI44Oq44O844OI!5e0!3m2!1sja!2sjp!4v1708779771194!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.5,
  3.2,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-1.jpg',
  true,
  '2024-02-24T22:23:16+09:00',
  '2024-02-24T22:23:16+09:00',
  '2024-02-24T22:25:45+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for river-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-1.jpg', '渋谷リバーストリートの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-2.jpg', '渋谷リバーストリートに咲く河津桜', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-3.jpg', 'ライトアップされる渋谷川', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-4.jpg', '渋谷リバーストリート沿いにある飲食店', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-5.jpg', '渋谷リバーストリートを俯瞰して眺める', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-6.jpg', 'ライトアップされる渋谷川', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-7.jpg', 'Bird''s eye view of Shibuya River Street', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shibuya-river-stream-8.jpg', '渋谷ストリームの大階段', 7);

-- FAQs for river-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), 'どんな夜景が楽しめますか？見どころはどこですか？', '渋谷川がライトアップされる様子を眺めることができます。2月中旬から下旬にかけて咲く河津桜もみどころ。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'river-street'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 横浜ハンマーヘッド (yokohama-hammerhead)
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
  'yokohama-hammerhead',
  '横浜ハンマーヘッド',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜ハンマーヘッド',
  '雰囲気の良い屋外テラスからみなとみらい方面の街並みを一望できる夜景スポット。ハンマーヘッドクレーンのライトアップも見どころ。',
  '<p>2019年に開業した横浜ハンマーヘッド。</p>
<p>新港ふ頭客船ターミナルを中核に1-2階にカフェ、レストラ、3-5階に宿泊施設を構える大型の商業施設です。</p>
<p>2階には屋外テラスがあり、横浜みなとみらい方面の夜景を眺めること可能。</p>
<p>背が低いので見晴らしはそこまで良くないですが、みなとみらいを象徴する建物がずらりと並ぶ光景はとても美しいです。</p>
<p>同施設には月に数回豪華客船が停泊するので、タイミングを合わせて訪れるのも良いでしょう。</p>
<p>また、併設されているハンマーヘッドパークでは夜になるとシンボルマークのハンマーヘッドクレーンのライトアップが実施されます。</p>
<p>海をゆっくり眺められるデッキもあるので、ぜひ合わせてお立ち寄りください。</p>',
  '神奈川県横浜市中区新港2-14-1',
  'https://www.hammerhead.co.jp/',
  '横浜ハンマーヘッド公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00 ~ 22:00',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「馬車道駅」から徒歩約10分</li>
<li>みなとみらい線「みなとみらい駅」から徒歩約12分</li>
<li>JR線「桜木町駅」から徒歩約15分</li>
</ul>',
  '<dl>
<dt>ご利用時間</dt>
<dd>24時間</dd>
<dt>駐車料金</dt>
<dd>平日：30分280円 / 休日：30分330円</dd>
</dl>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12999.79199499202!2d139.64181!3d35.4560818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5731c00001%3A0x4ec46cc16e559328!2z5qiq5rWc44OP44Oz44Oe44O844OY44OD44OJ!5e0!3m2!1sja!2sjp!4v1709479387359!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.3,
  3.5,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-8.jpg',
  true,
  '2024-03-04T00:33:27+09:00',
  '2024-03-04T00:33:27+09:00',
  '2024-10-12T15:31:00+09:00'
);

-- Images for yokohama-hammerhead
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-8.jpg', '横浜ハンマーヘッドから眺めるみなとみらい方面の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-10.jpg', '横浜ハンマーヘッドの屋外テラスと豪華客船', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-1.jpg', '横浜ハンマーヘッドから眺めるみなとみらい方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-9.jpg', '屋外テラスから眺める女神橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-11.jpg', '独特な形状のパシフィコ横浜', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-3.jpg', '横浜ハンマーヘッドに停泊する豪華客船', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-2.jpg', 'ライトアップされるぷかり桟橋と高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-6.jpg', 'ハンマーヘッドパークのベンチ', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-7.jpg', 'ハンマーヘッドパークの雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-4.jpg', 'ライトアップされるハンマーヘッドクレーン', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-5.jpg', 'ハンマーヘッドパークの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-hammer-head-12.jpg', '横浜ハンマーヘッドと豪華客船', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-2.jpg', '横浜ハンマーヘッドに停泊する豪華客船', 12);

-- FAQs for yokohama-hammerhead
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'みなとみらい方面の街並みを楽しむことができます。また、ライトアップされるハンマーヘッドクレーンも見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-hammerhead'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 女神橋 (megami-bridge)
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
  'megami-bridge',
  '女神橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '女神橋',
  'みなとみらいのランドマークを複数眺めることができる全長75の橋。夜散歩におすすめの無料スポット',
  '<p>臨港パークと新港パーク繋ぐ歩行者デッキの女神橋。</p>
<p>全長75mの橋の中腹からは下記のように様々な眺めを楽しむことができます。</p>
<ul>
<li>ライトアップされたかぷり桟橋や臨港パーク</li>
<li>みなとみらいの高層ビル群やコスモロック21</li>
<li>横浜ハンマーヘッドに停泊する豪華客船</li>
</ul>

<p>道幅も6mと広々しており、ゆっくり夜景を眺めながら夜散歩できる素敵な夜景スポットなので、ぜひお立ち寄りください。</p>',
  '神奈川県横浜市西区みなとみらい 1-1',
  'https://ja.wikipedia.org/wiki/%E5%A5%B3%E7%A5%9E%E6%A9%8B',
  '女神橋 | wikipedia',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線 「 みなとみらい駅 」 約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.9898939853741!2d139.63797896162762!3d35.45668771209667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d6981403ecf%3A0x847b8a7079c2291f!2z5aWz56We5qmL!5e0!3m2!1sja!2sjp!4v1709480150594!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  3.2,
  3.3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-5.jpg',
  true,
  '2024-03-22T13:42:47+09:00',
  '2024-03-22T13:42:47+09:00',
  '2024-05-29T07:25:21+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for megami-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-5.jpg', 'コスモロック21とみなとみらいの高層ビル群', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-1.jpg', '橋の上から眺めるパシフィコ横浜', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-2.jpg', 'ライトアップされたぷかり桟橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-4.jpg', '女神橋の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-3.jpg', '女神橋から眺める横浜ハンマーヘッドに停泊する豪華客船', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-6.jpg', 'みなとみらいの高層ビル群の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-7.jpg', '女神橋から眺める夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/megami-bridge-8.jpg', 'ライトアップされるぷかり桟橋', 7);

-- FAQs for megami-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'megami-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたかぷり桟橋や臨港パーク、みなとみらいの高層ビル群などを眺めることができます。', 0);

-- Post: 山下公園 (yamashita-park)
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
  'yamashita-park',
  '山下公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '山下公園',
  '潮風を感じながら横浜港周辺の夜景を鑑賞することができる広大な敷地面積を誇る公園',
  '<p>1930年(昭和5年)3月に開園した歴史ある公園である山下公園。</p>
<p>広大な敷地面積を誇る公園で園内には海を見渡せるベンチ、噴水、様々な記念碑などがあります。</p>
<p>眺望も素晴らしく、みなとみらいの街並み、横浜マリンタワー、横浜ベイブリッジ、重要文化財に指定されている氷川丸などの夜景を楽しめます。</p>
<p>横浜港の夜の情緒を豊かに感じさせることができる夜景スポットなので夜散歩に訪れるのがおすすめです。</p>',
  '神奈川県横浜市中区山下町279',
  'https://wharfhouse-yokohama.zetton.co.jp/',
  'wharfhouse（山下公園内のレストラン）',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=190',
  '山下公園【公式】横浜市観光情報サイト',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「元町・中華街」駅から徒歩3分</li>
<li>JR線「関内」駅から徒歩20分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13001.458652992136!2d139.6497793!3d35.4457655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185ce2b1bb57b7%3A0xe3ba49f16272376c!2z5bGx5LiL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1709769630968!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-5.jpg',
  true,
  '2024-03-07T09:07:26+09:00',
  '2024-03-07T09:07:26+09:00',
  '2024-03-07T09:16:06+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for yamashita-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-5.jpg', '山下公園から眺めるみなとみらいの街並み', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-1.jpg', '山下公園内にあるレストラン', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-2.jpg', '山下公園から眺める横浜ベイブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-3.jpg', '山下公園の噴水がライトアップされる様子', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-4.jpg', 'ライトアップされる氷川丸', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-6.jpg', '山下公園から眺める横浜マリンタワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yamashita-park-1.jpg', '山下公園内の噴水と横浜マリンタワー', 6);

-- FAQs for yamashita-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'みなとみらいの街並み、横浜マリンタワー、横浜ベイブリッジ、重要文化財に指定されている氷川丸などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yamashita-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 象の鼻パーク (zounohana-park)
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
  'zounohana-park',
  '象の鼻パーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '象の鼻パーク',
  '時間によって様々なカラーに変化するスクリーンパネルが設置されている落ち着いた雰囲気の公園。',
  '<p>開港150周年を記念してオープンした開放感抜群の公園。</p>
<p>「象の鼻」の名称は、時代と共に少しずつ形を変えてきた堤防の形状が、象の鼻に似ていたことに由来しているそう。</p>
<p>昼は多くの観光客で賑わう園内も夜になると一気に落ち着いた雰囲気に様変わり。</p>
<p>園内を囲むように設置されているスクリーンパネルも点灯し、美しい夜景を楽しむことができます。</p>
<p>赤レンガパークや大桟橋に停泊している豪華客船などと組み合わせて写真を撮るのもおすすめです。</p>
<p>ぜひみなとみらい周辺の夜散歩で訪れてみてください。</p>',
  '神奈川県横浜市中区海岸通１丁目',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=734',
  '象の鼻パーク【公式】横浜市観光情報サイト',
  'https://zounohana.com/',
  '象の鼻テラス ZOU-NO-HANA TERRACE',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「日本大通り駅」出口1より徒歩約 3 分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.754967379178!2d139.6429375!3d35.4501215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf91074d5cd%3A0x5ff55d4cacdb78c9!2z6LGh44Gu6by744OR44O844Kv!5e0!3m2!1sja!2sjp!4v1709643258668!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3.2,
  3.3,
  3.1,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-3.jpg',
  true,
  '2024-03-05T22:00:28+09:00',
  '2024-03-05T22:00:28+09:00',
  '2024-10-13T00:14:07+09:00'
);

-- Images for zounohana-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-3.jpg', '象の鼻パークにあるスクリーンパネル', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-marine-tower-23.jpg', '大桟橋に寄港する豪華客船を眺める', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-1.jpg', '象の鼻パーク内にある高台', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-2.jpg', '象の鼻パークから眺める赤レンガ倉庫', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-4.jpg', '象の鼻パークから眺める大桟橋とベイブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-7.jpg', '横浜税関 （クイーンの塔）とスクリーンパネル', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-park-8.jpg', '象の鼻パークから眺める赤レンガ倉庫', 6);

-- FAQs for zounohana-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '時間と共に変化する色鮮やかなスクリーンパネルやみなとみらいの街並みをゆっくり鑑賞することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), '象の鼻パークのスクリーンはどのようなカラーで点灯しますか？', '日没から20:00までは電球色、20:00～22:00までは薄紫色、22:00～夜明けまでは青色にライトアップされます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'zounohana-park'), '象の鼻パークの名前の由来は？', '周辺の堤防の形状が象の鼻に似ていたことに由来しています。', 2);

-- Post: 万国橋 (bankoku-bridge)
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
  'bankoku-bridge',
  '万国橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '万国橋',
  '横浜みなとみらいのランドマークを一望できる無料の夜景スポット',
  '<p>昭和15年に建設されたみなとみらいの新港地区と関内の海岸通地区を結ぶコンクリートアーチ橋。</p>
<p>全長36mほどの小さな橋ですが、橋の上からは横浜ランドマークタワーやコスモクロック21、ロープウェイYOKOHAMA AIR CABINなどみなとみらい地区を代表する建物を一望する事が出来ます。</p>
<p>絵に描いたような美しい構図の景色を眺めることができるので、いつ訪れてもスマホや一眼カメラで写真撮影する人を見かける人気スポットとなっています。</p>
<p>とてもアクセシスやすい場所にあり無料で夜景を鑑賞できるので、ぜひみなとみらいエリアに観光で訪れた際はお立ち寄りください。</p>',
  '神奈川県横浜市中区新港 2-1',
  'https://www.pref.kanagawa.jp/docs/bd2/hashi100sen/14-bankoku.html',
  '万国橋(横浜市中区) - 神奈川県ホームページ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「馬車道駅」より徒歩約4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.444262068331!2d139.6390498!3d35.4520447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d6afb65fceb%3A0xb8646e0c0b67bbc9!2z5LiH5Zu95qmL!5e0!3m2!1sja!2sjp!4v1711889032719!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3.3,
  2.8,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-3.jpg',
  true,
  '2024-03-31T22:29:06+09:00',
  '2024-03-31T22:29:06+09:00',
  '2024-03-31T22:32:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for bankoku-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-3.jpg', '万国橋から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-1.jpg', '万国橋の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-2.jpg', '横浜ランドマークタワーとコレットマーレ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-4.jpg', 'コスモロック21とクイーンズスクエア横浜', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-5.jpg', 'アニヴェルセルみなとみらい横浜周辺の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/bankoku-bridge-6.jpg', '万国橋から眺める夜景', 5);

-- FAQs for bankoku-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ランドマークタワーやコスモクロック21、ロープウェイYOKOHAMA AIR CABINなどみなとみらい地区を代表する建物を一望する事が出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bankoku-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 汽車道 (kisya-michi)
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
  'kisya-michi',
  '汽車道',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '汽車道',
  '桜木町とワールドポーターズや赤レンガエリアの間を結ぶ、約500メートルを結ぶ遊歩道。みなとみらい方面の街並みが美しい夜景スポット。',
  '<p>桜木町とワールドポーターズや赤レンガエリアの間を結ぶ、約500メートルを結ぶ遊歩道。</p>
<p>鉄道廃線跡を利用して1997年に開通したプロムナードで鉄道開業当時に築造された石積みやアメリカ製鉄橋など歴史的建造物も残されています。</p>
<p>そんな遊歩道から北側にみなとみらい方面の街並み、南側にヨコハマエアキャビン（ロープウェイ）などを眺めることができます。</p>
<p>見どころが非常に多い夜景スポットなので、歩きながら良い構図を探すのが楽しい夜景スポットです。</p>',
  '神奈川県横浜市中区新港 2-9',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=738',
  '汽車道【公式】横浜市観光情報サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR線「桜木町駅」より徒歩3分</li>
<li>みなとみらい線「みなとみらい駅」より徒歩5分</li>
<li>みなとみらい線「馬車道駅」より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.31090890537!2d139.6345294!3d35.4528701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5eb7db77df%3A0x6da7e56d5c481ce1!2z5rG96LuK6YGT!5e0!3m2!1sja!2sjp!4v1709702659256!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.1,
  3.4,
  3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/kishamichi.jpg',
  true,
  '2024-03-06T14:29:14+09:00',
  '2024-03-06T14:29:14+09:00',
  '2024-12-07T23:24:18+09:00'
);

-- Images for kisya-michi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kishamichi.jpg', '汽車道とコスモロック21', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-5.jpg', '汽車道から眺める横浜ランドマークタワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-6.jpg', '汽車道の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-4.jpg', '汽車道から眺めるみなとみらいの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-3.jpg', '汽車道から眺める北仲ノット（ザ・タワー横浜北仲）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-2.jpg', '汽車道の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/kisya-michi-1.jpg', '汽車道から眺めるみなとみらいの夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kisya-michi-2.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kisya-michi-1.jpg', '汽車道と横浜みなとみらいの高層ビル群', 8);

-- FAQs for kisya-michi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), 'どんな夜景が楽しめますか？見どころはどこですか？', '北側にみなとみらい方面の街並み、南側にヨコハマエアキャビン（ロープウェイ）などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kisya-michi'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 赤レンガパーク (red-brick-park)
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
  'red-brick-park',
  '赤レンガパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '赤レンガパーク',
  '夜になるとオレンジのライトアップが実施され、幻想的な雰囲気を楽しむことができるみなとみらい屈指の観光名所。',
  '<p>明治末期から大正初期に建設されたレンガ造りの歴史的建造物。</p>
<p>現在は一号館は多目的スペースやホールとして、2号館は31店舗入居する商業施設として運営されています。</p>
<p>夜になると倉庫はオレンジのライトアップがされ、幻想的な雰囲気を醸し出します。</p>
<p>1号線館と2号線館の間を抜けた海沿いのスペースから横浜港の涼しげな海夜景も楽しむことが可能なのも魅力です。</p>
<p>ぜひみなとみらいの夜散歩やデートに活用してみてください。</p>',
  '神奈川県横浜市中区新港 1丁目',
  'https://www.yokohama-akarenga.jp/',
  '横浜赤レンガ倉庫公式サイト',
  'https://twitter.com/yokohamaredbric?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
  '赤レンガ倉庫 Twitterアカウント',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「桜木町駅」より汽車道経由で徒歩約15分</li>
<li>JR「関内駅」より徒歩約15分</li>
<li>みなとみらい線「馬車道駅」または「日本大通り駅」より徒歩約6分</li>
<li>みなとみらい線「みなとみらい駅」より徒歩約12分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.247091014386!2d139.6440139!3d35.4532651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c563bd0682f%3A0x54bb4ea9607510ea!2z6LWk44Os44Oz44Ks44OR44O844Kv!5e0!3m2!1sja!2sjp!4v1710900119123!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.3,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-3.jpg',
  true,
  '2024-03-20T11:29:08+09:00',
  '2024-03-20T11:29:08+09:00',
  '2024-03-20T11:30:01+09:00'
);

-- Images for red-brick-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-1.jpg', 'ライトアップされる赤レンガ倉庫1号館', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-2.jpg', '赤レンガパークから眺める赤レンガ倉庫', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-3.jpg', 'ライトアップされる赤レンガ倉庫2号館', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-4.jpg', '赤レンガ倉庫1号館と2号館', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-5.jpg', '赤レンガ倉庫とレインボーに輝くコスモロック21', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/akarenga-8.jpg', '象の鼻パークから眺める赤レンガ倉庫', 5);

-- FAQs for red-brick-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた赤レンガ倉庫を間近に眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), '赤レンガ倉庫の一号館と二号館の違いは何ですか？', '1号館は多目的スペースやホールとして、2号館は31店舗入居する商業施設として運営されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'red-brick-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 港の見える丘公園 (port-view-hill-park)
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
  'port-view-hill-park',
  '港の見える丘公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '港の見える丘公園',
  '横浜エリアを代表する定番観光スポット。異国情緒あふれる園内からは横浜ベイブリッジやみなとみらい方面の街並みをゆっくり眺めることができる。',
  '<p>横浜港を見下ろす小高い丘にある公園。</p>
<p>横浜観光には欠かせない定番スポットとして有名で東側には横浜ベイブリッジ、北側には横浜ランドークタワーやみなとみらいの街並みを眺めることができます。</p>
<p>横浜開港時に外国人居留地だった場所だった歴史もあり、園内には異国情緒あふれる建物が多く残っており、雰囲気も抜群です。</p>
<p>複数のベンチがあり、ゆっくり夜景鑑賞ができるのでぜひ、立ち寄ってみてはいかがでしょうか？</p>',
  '神奈川県横浜市中区山手町１１４',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=182',
  '港の見える丘公園【公式】横浜市観光情報サイト',
  NULL,
  NULL,
  'https://www.porthill-yokohama.jp/restaurant/',
  '山手ローズテラス',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京浜東北・根岸線「石川町駅」より徒歩20分</li>
<li>みなとみらい線「元町・中華街駅」より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.579122908264!2d139.65212332577707!3d35.44045462266601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d1f3b10d3bd%3A0xd907b3c13fadb46c!2z5riv44Gu6KaL44GI44KL5LiY5YWs5ZySIOWxleacm-WPsA!5e0!3m2!1sja!2sjp!4v1710004934961!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  2.8,
  3.5,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill10.jpg',
  true,
  '2024-03-10T02:28:26+09:00',
  '2024-03-10T02:28:26+09:00',
  '2024-03-12T20:51:44+09:00'
);

-- Images for port-view-hill-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill10.jpg', 'ブルーニライトアップされる横浜ベイブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill06.jpg', 'みなとみらい方面の街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill03.jpg', 'ライトアップされる横浜ベイブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill07.jpg', 'ライトアップされる横浜ランドマークタワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill05.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill12.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill08.jpg', '横浜駅周辺の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill09.jpg', '港の見える丘公園の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill02.jpg', 'たくさんのベンチが並ぶ港の見える丘公園', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-port-hill01.jpg', '港の見える丘公園周辺にあるレストラン（山手ローズテラス）', 9);

-- FAQs for port-view-hill-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東側には横浜ベイブリッジ、北側には横浜ランドークタワーやみなとみらいの街並みを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), '横浜ベイブリッジが青くライトアップされるタイミングはいつですか？', '日没後の毎時20分から30分までの10分間と毎時50分から正時までの10分間です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'port-view-hill-park'), '横浜ベイブリッジのライトアップは何時まで実施されていますか？', '日没約30分後～24時までライトアップは実施されています。', 2);

-- Post: 横浜市役所 3F 市民ラウンジ (yokohama-city-hall)
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
  'yokohama-city-hall',
  '横浜市役所 3F 市民ラウンジ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜市役所 3F 市民ラウンジ',
  '横浜ランドマークタワー、日本丸メモリアルパークなどみなとみらいの街並みを一望できる無料の夜景スポット。',
  '<p>2020年6月末に新築移転した横浜市役所。</p>
<p>地上32階、高さ約155mの高層ビルの3階にはフロアには市民ラウンジと呼ばれるスペースがあり、大きな窓からみなとみらい方面の街並みが広がります。</p>
<p>遮るものなくずらりと横浜ランドマークタワーや日本丸メモリアルパーク、コスモロック21などを眺めることができる貴重なスポットです。</p>
<p>館内は照明が明るく、窓ガラスの写り込みが激しいですが、訪れる価値は十分にあると思います。</p>
<p>土日・平日問わず利用できますが、閉館時間が20時までとなっているので、気になった方は時間に注意して訪問してみてください。</p>',
  '神奈川県横浜市中区本町６丁目５０−１０',
  'https://www.city.yokohama.lg.jp/city-info/yokohamashi/shichosha/teisou.html',
  '市役所の賑わいスポットをご紹介！　横浜市',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00~20:00',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「馬車道」駅　直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.6905883481!2d139.6339288!3d35.45052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d2a43961425%3A0xcd039c74d826b025!2z5qiq5rWc5biC5b255omAIOW4guawkeODqeOCpuODs-OCuA!5e0!3m2!1sja!2sjp!4v1710003681141!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  3.4,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge03.jpg',
  true,
  '2024-03-10T02:11:51+09:00',
  '2024-03-10T02:11:51+09:00',
  '2024-03-10T02:11:53+09:00'
);

-- Images for yokohama-city-hall
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge03.jpg', '横浜市役所 3F 市民ラウンジから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge08.jpg', 'コレットマーレと桜木町駅周辺の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge04.jpg', '日本丸メモリアルパークと桜木町駅周辺の街並み', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge05.jpg', 'ライトアップされる日本丸メモリアルパーク', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge09.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge07.jpg', 'よこはまコスモワールド周辺の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge00.jpg', 'パシフィコ横浜とコスモロック21', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge02.jpg', '横浜市役所 3F 市民ラウンジの雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge10.jpg', '横浜市役所2Fにあるウッドテラス', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-city-rounge11.jpg', '横浜市役所の外観とみなとみらいの街並み', 9);

-- FAQs for yokohama-city-hall
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ランドマークタワー、日本丸メモリアルパークなどみなとみらいの街並みを一望ですることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), '横浜市役所 3F 市民ラウンジは無料で入場することができますか？', '無料で入場することができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-city-hall'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: クロスゲート屋上庭園 (cross-gate)
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
  'cross-gate',
  'クロスゲート屋上庭園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'クロスゲート屋上庭園',
  '桜木町駅から歩いてすぐの穴場夜景スポット。落ち着いた雰囲気でゆっくり喋りたい方におすすめ。',
  '<p>桜木町駅から歩いてすぐの場所にある商業ビルのクロスゲート桜木町。</p>
<p>3階のレストラン街には無料で入場できるオープンテラスがあり、みなとみらいの高層ビル群や大観覧車のコスモロック21などを眺めることができます。</p>
<p>柵の高さがあるので見晴らしの良さはもうひとつですが、人の数も少なくベンチに座ってゆっくり夜景鑑賞できる穴場スポットです。</p>
<p>開放時間も0時までとなっているので、みなとみらい周辺のデート帰りなどにぜひ立ち寄って見てください。</p>',
  '神奈川県横浜市中区桜木町 1-101-1',
  'https://www.crossgate.net/index.php',
  'クロスゲート公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00 ~ 00:00',
  'なし',
  '無料',
  '<ul>
<li>JR線「桜木町駅」より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.596159246368!2d139.6325957!3d35.4511045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d55ce18c175%3A0x4c07efa1110ceecd!2z44Kv44Ot44K544Ky44O844OI5bGL5LiK5bqt5ZyS!5e0!3m2!1sja!2sjp!4v1711258174485!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.7,
  3.3,
  3.4,
  3.7,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate03.jpg',
  true,
  '2024-03-24T14:35:56+09:00',
  '2024-03-24T14:35:56+09:00',
  '2024-03-24T14:35:59+09:00'
);

-- Images for cross-gate
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate03.jpg', 'クロスゲート屋上庭園から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate00.jpg', 'クロスゲート屋上庭園の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate02.jpg', '横浜市役所周辺の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate04.jpg', '横浜ランドマークタワーとコレットマーレ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-cross-gate01-1.jpg', '桜木町駅周辺の夜景', 4);

-- FAQs for cross-gate
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'みなとみらいの高層ビル群や桜木町駅周辺の夜景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), 'クロスゲート屋上庭園は何時まで開放されていますか？', '10:00 ~ 0:00まで開放されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cross-gate'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 上野恩賜公園 (ueno-park)
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
  'ueno-park',
  '上野恩賜公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '上野恩賜公園',
  '1876年に開演した歴史ある公園。毎年夜桜のライトアップが実施されており、その光景は日本三大夜桜と評されている。',
  '<p>1876年（明治9年）に日本初の公園として開園した歴史がある上野公園。</p>
<p>博物館や美術館、動物園、芸術大学など多くの文化施設から形成されている特徴があり、デートコースとしても人気です。</p>
<p>日中は多くの人で賑わいますが、夜になると人の数も落ちつき、夜散歩ににうってつけのスポットになります。</p>
<p>また同施設は桜の名所でもあり毎年夜桜のライトアップも実施されています。</p>
<p>弘前公園（青森県弘前市）、高田公園（新潟県上越市）に並び、日本三大夜桜と評される桜景はとても美しいです。</p>
<p>ぜひ一度足を運んでみてはいかがでしょうか？</p>',
  '東京都台東区上野公園・池之端三丁目',
  'https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/index_top.html',
  '上野恩賜公園 Ueno Park 公式ホームページ',
  'https://www.gotokyo.org/jp/spot/482/index.html',
  '上野恩賜公園／東京の観光公式サイトGO TOKYO',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「上野駅」より徒歩2分</li>
<li>東京メトロ銀座線・日比谷線「上野駅」より徒歩2分</li>
<li>京成本線「京成上野駅」より徒歩1分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12957.776110827655!2d139.768506799433!3d35.7152968513599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9d69aa599f%3A0xe99307b20e4a98f5!2z44CSMTEwLTAwMDcg5p2x5Lqs6YO95Y-w5p2x5Yy65LiK6YeO5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1712460932724!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  4,
  3,
  2.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-20.jpg',
  true,
  '2024-04-08T00:47:14+09:00',
  '2024-04-08T00:47:14+09:00',
  '2024-04-11T15:08:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for ueno-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-20.jpg', '不忍池から眺める夜桜', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-15.jpg', 'ライトアップされる不忍池辯天堂', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-19.jpg', 'ライトアップされる夜桜', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-17.jpg', '不忍池と高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-21.jpg', '不忍池の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-16.jpg', 'リフレクションが美しい不忍池', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-23.jpg', '上野公園の夜桜', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-12.jpg', 'ライトアップされる清水観音堂', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-14.jpg', 'ライトアップされる清水観音堂', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-13.jpg', '上野公園に飾られるぼんぼり', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-22.jpg', '上野公園の入り口にある枝垂れ桜', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-1.jpg', '上野公園にあるグリーンパーク', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-3.jpg', '五重塔と桜', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-5.jpg', '桜を楽しむ観光客', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-6.jpg', '清水観音堂と桜', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-8.jpg', '上野公園に飾られるぼんぼり', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-9.jpg', '桜を楽しむ観光客', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-10.jpg', '上野公園に咲く桜', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-park-11.jpg', '西郷隆盛の銅像', 18);

-- FAQs for ueno-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '夜桜のライトアップや不忍池周辺の夜景が見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 上野の森 さくらテラス (ueno-sakura-terrace)
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
  'ueno-sakura-terrace',
  '上野の森 さくらテラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  '上野の森 さくらテラス',
  '迫力のあるトレインビューを眺めることができる無料の夜景スポット。上野公園の散歩帰りに立ち寄るのがおすすめ。',
  '<p>上野駅西口にある上野の森さくらテラス。</p>
<p>1Fから3Fまでは飲食店が入居し、様々なジャンルの料理が楽しめる商業施設です。</p>
<p>4F屋上フロアには展望デッキがあり、上野駅を往来する鉄道や東京スカイツリーなどを眺めることができます。</p>
<p>上野駅は多くの路線が乗り合う駅でトレインビューの迫力はなかなかのもの。？</p></p>
<p>夜景の迫力こそ今一つではありますが、上野周辺で遊んだ帰りにふらっと立ち寄るのにうってつけのスポットです。</p>',
  '東京都台東区上野公園 1-54',
  'https://www.ueno-sakura.jp/',
  '上野の森 サクラテラス',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR上野駅 不忍口すぐ</li>
<li>京成上野駅 正面出口 徒歩約1分</li>
<li>東京メトロ上野口 7番出口 徒歩約1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6479.144705071318!2d139.77195087703092!3d35.71213992827344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9e76c00001%3A0xb0af7dad81f82978!2z5LiK6YeO44Gu5qOu44GV44GP44KJ44OG44Op44K5!5e0!3m2!1sja!2sus!4v1712461144443!5m2!1sja!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.6,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-8.jpg',
  true,
  '2024-04-08T00:30:50+09:00',
  '2024-04-08T00:30:50+09:00',
  '2024-04-08T00:56:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), (SELECT id FROM tags WHERE slug = 'free'));

-- Images for ueno-sakura-terrace
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-8.jpg', '上野の森 さくらテラスの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-10.jpg', '上野の森 さくらテラスから眺める東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-9.jpg', '上野の森 さくらテラスから眺めるアメヤ横丁', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-7.jpg', '上野の森 さくらテラスから眺めるトレインビュー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-6.jpg', '上野の森 さくらテラスの雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-11.jpg', '上野の森 さくらテラスの外観', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-2.jpg', '上野の森 さくらテラスから眺めるトレインビュー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-3.jpg', '上野の森 さくらテラスから眺めるトレインビュー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-5.jpg', '上野の森 さくらテラスから眺めるアメヤ横丁', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/ueno-sakura-terrace-1.jpg', '上野の森 さくらテラスの雰囲気', 9);

-- FAQs for ueno-sakura-terrace
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), 'どんな夜景が楽しめますか？見どころはどこですか？', '上野駅を往来する鉄道や東京スカイツリーなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ueno-sakura-terrace'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: ウィングインターナショナルセレクト浅草駒形 (wing-international-select-asakusa-komagata)
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
  'wing-international-select-asakusa-komagata',
  'ウィングインターナショナルセレクト浅草駒形',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  'ウィングインターナショナルセレクト浅草駒形',
  '東京スカイツリーを一望できる屋上テラスが魅力の良コスパホテル。ライトアップされた浅草寺の夜景も一見の価値あり。',
  '<p>浅草寺から歩いてすぐの場所にある、ホテルウィングインターナショナルセレクト浅草駒形</p>
<p>このホテルの12階には宿泊者限定の展望テラスが用意されており、東京スカイツリーや隅田川に架かる吾妻橋、駒形橋などを一望することができます。</p>
<p>またテラスと同じフロアの非常階段付近からは浅草寺を面白いアングルから眺めることも可能。</p>
<p>こんな角度から浅草寺を眺められるのはここだけでしょう。</p>
<p>展望テラスは広さはそこまでありませんが、ベンチも複数あり、フットライトも程よい明るさで良い雰囲気。</p>
<p>宿泊代も比較的安いので、一人旅からカップルでの宿泊先など様々な方におすすめできます。</p>',
  '東京都台東区駒形 2-7-5',
  'https://www.hotelwing.co.jp/select/asakusa/',
  'ホテルウィングインターナショナルセレクト浅草駒形 公式サイト',
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '<ul>
<li>都営浅草線 浅草駅A2Bエレベーター出口から徒歩0分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="ホテルウィングインターナショナルセレクト浅草駒形の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7563438439115!2d139.79340116525947!3d35.70761313018811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec635a7d1d1%3A0x572008dfb074776d!2z44Ob44OG44Or44Km44Kj44Oz44Kw44Kk44Oz44K_44O844OK44K344On44OK44Or44K744Os44Kv44OI5rWF6I2J6aeS5b2i!5e0!3m2!1sja!2sjp!4v1675258702134!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/pVRrDU77ZWo?si=A0x9PZG7rxxpEtvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4,
  4,
  5,
  5,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-5.jpg',
  true,
  '2024-06-12T23:15:01+09:00',
  '2024-06-12T23:15:01+09:00',
  '2024-06-14T00:22:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for wing-international-select-asakusa-komagata
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-5.jpg', 'ウィングインターナショナルセレクト浅草駒形から眺める駒形橋と東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-3.jpg', '隅田川に架かるライトアップされた吾妻橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-3-1.jpg', 'ライトアップされる駒形橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-1.jpg', '隅田川に架かるライトアップされた吾妻橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-4.jpg', '隅田川に架かるライトアップされる蔵前橋・厩橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-1.jpg', 'ウィングインターナショナルセレクト浅草駒形から見える浅草寺', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-6.jpg', 'ウィングインターナショナルセレクト浅草駒形の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-inter-national-asakusa-2.jpg', 'ウィングインターナショナルセレクト浅草駒形展望テラスの雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-4-1.jpg', '隅田川に架かる吾妻橋', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-3.jpg', '隅田川に架かる蔵前橋・厩橋', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-2.jpg', 'ウィングインターナショナルセレクト浅草駒形から眺める駒形橋と東京スカイツリー', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/wing-international-asakusa-1-1.jpg', 'ウィングインターナショナルセレクト浅草駒形展望テラスの雰囲気', 11);

-- FAQs for wing-international-select-asakusa-komagata
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), 'どんな夜景が楽しめますか？', '東京スカイツリーや隅田川にかかるライトアップされた吾妻橋、駒形橋などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), '東京スカイツリーは何時までライトアップされていますか？', '東京スカイツリーの点灯時間は日没~24時までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), '展望テラスの開放時間を教えてください', '午前6時～午後11時までとなっています。※一部時期によって開放時間が異なる場合があるようです', 2);

-- Hotel info for wing-international-select-asakusa-komagata
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'wing-international-select-asakusa-komagata'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158597%2F158597.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空席をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fwing-international-select-asakusa-komagata.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad357688%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2Fbiz%2F00081255%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: お台場海浜公園 (odaiba-seaside-park)
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
  'odaiba-seaside-park',
  'お台場海浜公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'お台場海浜公園',
  'レインボーブリッジの様々な表情が楽しめる人気観光スポット。毎年冬に行われる「お台場レインボー花火」や「イルミネーションイベント」の際に訪れるのが特におすすめ。',
  '<p>デックス東京ビーチやアクアシティお台場などの商業施設から直結した広大な敷地の公園。</p>
<p>ライトアップされたレインボーブリッジを間近に眺めることができるお台場で最もメジャーな夜景スポットです。</p>
<p>敷地内には様々なモニュメントがあり、レインボーブリッジと合わせた構図の写真を撮ることが出来ます。</p>
<p>毎年12月の土曜日には毎週打ち上がる「お台場レインボー花火」も見ものです。</p>
<p>お台場での観光やデートの帰りにぜひゆっくり夜景鑑賞を楽しんで下さい。</p>',
  '東京都港区台場 1-4',
  'https://www.tptc.co.jp/park/01_02',
  'お台場海浜公園 & 台場公園 | 海上公園ナビ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日解放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線「お台場海浜公園駅」から徒歩約3分</li>
</ul>',
  '<ul>
<li>お台場海浜公園中央駐車場 / 最初の1時間400円、以後30分毎に200円</li>
<li>お台場海浜公園北口駐車場 / 最初の1時間400円、以後30分毎に200円</li>
</ul>',
  '<iframe title="お台場海浜公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.623185244138!2d139.7756912!3d35.6300488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a1deb0ac2d7%3A0x7dd3beb4c8363729!2z44GK5Y-w5aC05rW35rWc5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1678724088403!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/qbBQIT5t_mE?si=EQhLjT2LUKg5dkXF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.8,
  3.8,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park.jpg',
  true,
  '2024-06-12T00:05:40+09:00',
  '2024-06-12T00:05:40+09:00',
  '2024-09-24T03:06:47+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for odaiba-seaside-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park.jpg', 'お台場海浜公園に打ち上がる花火', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/hofgw-1.jpg', '黄昏時のレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aaa-1.jpg', '夕焼けの空が美しいベイビュー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-3-2.jpg', '夕焼けの空と芝浦の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-4.jpg', 'ウエストプロムナードから眺めるレインボーブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-1.jpg', 'お台場海浜公園のイルミネーション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-3.jpg', 'レインボーブリッジと自由の女神像', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/odaiba-2.jpg', 'お台場海浜公園のイルミネーション', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/odaiba-park-01.jpg', 'ブルーライトアップのレインボーブリッジ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/odaiba-park-02.jpg', '東京オリンピック2020のモニュメントとレインボーブリッジ', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-2.jpg', 'お台場海浜公園展望デッキの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-2-2.jpg', '夕日で赤く染まるお台場海浜公園', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-1-2.jpg', 'お台場海浜公園の展望デッキ', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-1.jpg', '夜のお台場海浜公園の雰囲気', 13);

-- FAQs for odaiba-seaside-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'どんな夜景が楽しめますか？', 'レインボーブリッジや東京ワーなど東京を代表するランドマークをじっくり眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), 'レインボーブリッジのライトアップは何時まで点灯していますか？', 'レインボーブリッジのライトアップは日没から24時まで点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'odaiba-seaside-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 東京都庁都民広場 (tokyo-metropolitan-government-office-tomin-hiroba)
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
  'tokyo-metropolitan-government-office-tomin-hiroba',
  '東京都庁都民広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '東京都庁都民広場',
  'パリのノートルダム大聖堂をモチーフにした都庁の建築美を心置きなく楽しめる夜景スポット。世界最大のプロジェクションマッピングも見どころ。',
  '<p>東京都庁舎の足元に位置する広々とした面積の広場。</p>
<p>パリのノートルダム大聖堂をモチーフにした都庁を真正面から見上げることができ、荘厳な光景を楽しむことができます。</p>
<p>アーチの形も美しく、スマホの超広角レンズを建物に向けて見ると迫力のある写真が撮れます。</p>

<h3>都庁のプロジェクションマッピング投影について</h3>
<p>2024年2月より都庁第一本庁舎（東側壁面）をキャンパスにした光と音で多彩なアートを表現するプロジェクションマッピングの上映が開始されました。</p>
<p>投影される内容は下記のように土日と平日で異なります。</p>
<dl>
<dt>土日・祝日</dt>
<dd>色彩や細かな表現を活用したストーリー性のあるコンテンツを上映</dd>
<dt>平日</dt>
<dd>都庁の造形美を活かしつつ、視認性の高いコンテンツを上映</dd>
</dl>

<p>とても迫力のある映像を楽しむことができるので、事前に投影時間を確認してぜひ訪れてみてください！</p>',
  '東京都新宿区西新宿 2-8-1',
  'https://www.koho.metro.tokyo.lg.jp/diary/oshirase/light-up.html',
  '都庁舎ライトアップ スケジュール',
  'https://www.kanko-shinjuku.jp/event/c081/article_3861.html',
  '東京の夜を彩る新たな観光スポット誕生「TOKYO Night & Light 」 | 一般社団法人新宿観光振興協会',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「新宿駅」西口から徒歩約10分</li>
<li>都営地下鉄大江戸線「都庁前駅」A4出口から直通</li>
</ul>',
  '<ul>
<li>首都高速新宿ランプから300m</li>
<li>都庁第一本庁舎駐車場（237台／有料）</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.944854805783!2d139.6928234!3d35.689651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4b71a37a1%3A0xeb26b01652be2cf1!2z5p2x5Lqs6YO95bqB6YO95rCR5bqD5aC0!5e0!3m2!1sja!2sjp!4v1688608224872!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-03.jpg',
  true,
  '2024-04-09T11:20:16+09:00',
  '2024-04-09T11:20:16+09:00',
  '2024-05-06T13:41:04+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tokyo-metropolitan-government-office-tomin-hiroba
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-03.jpg', '光量が多く美しい東京都庁', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-2.jpg', '東京都庁に投影されるプロジェクションマッピング', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-1.jpg', '東京都庁に投影されるプロジェクションマッピング', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-07.jpg', '青と黄色にライトアップされる都庁', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-02.jpg', 'ブルーにライトアップされる東京都庁', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-04.jpg', '東京都庁都民広場の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-01.jpg', '超広角レンズで撮影した東京都庁', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-08.jpg', '青と黄色にライトアップされる都庁', 7);

-- FAQs for tokyo-metropolitan-government-office-tomin-hiroba
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'どんな夜景が楽しめますか？', 'パリのノートルダム大聖堂をモチーフにした都庁を目の前に眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), '東京都庁の特別ライトアップはいつ実施されますか？', '都庁の公式サイトからライトアップイベントのスケジュールをご確認ください。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'TOKYO Night & Light（プロジェクションマッピング）は何時まで実施されていますか?', '日没から21時頃まで実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-metropolitan-government-office-tomin-hiroba'), 'TOKYO Night & Light（プロジェクションマッピング）の上映時間は何分ですか？', '一回の上映時間は10分ほどです。', 3);

