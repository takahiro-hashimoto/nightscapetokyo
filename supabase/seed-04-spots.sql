-- Post: Suicaのペンギン広場・バスタ新宿 (suica-penguin-plaza)
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
  'suica-penguin-plaza',
  'Suicaのペンギン広場・バスタ新宿',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  'Suicaのペンギン広場 バスタ新宿',
  '仕事終わりに立ち寄りたい新宿駅直結のお洒落な夜景スポット。ライトアップされたドコモタワーが見どころ。',
  '<p>2016年7月に高速バスターミナル「バスタ新宿」の完成に合わせてオープンしたsuicaペンギン広場。</p>
<p>JR新宿駅新南口の改札を出てすぐの場所にある好立地で、NTTドコモタワーや高島屋タイムズスクエアなどの眺望が広がります。</p>
<p>また眼下には新宿駅を往来する鉄道と動きのある景色を楽しむことも可能です。</p>
<p>段差を活かした広場内には様々な種類の植栽やウッドデッキがあしらわれており、夜になると程よい明るさのフットライトが点灯されます。</p>
<p>とても心地よい雰囲気の場所で仕事やデート終わりにくつろぐのに最適です。</p>',
  '東京都渋谷区千駄ケ谷 5-24',
  'http://shinjuku-busterminal.co.jp/',
  'バスタ新宿公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR山手線 「 新宿駅 」 新南口改札でてすぐ </li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.229727133452!2d139.7010347!3d35.6878979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd00f35fb67%3A0xf7ea00dacc8a314!2zU3VpY2Hjga7jg5rjg7Pjgq7jg7PluoPloLQ!5e0!3m2!1ja!2sjp!4v1688608475549!5m2!1ja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  4,
  4,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-1-1.jpg',
  true,
  '2024-06-01T22:23:03+09:00',
  '2024-06-01T22:23:03+09:00',
  '2024-08-11T15:53:15+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for suica-penguin-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-1-1.jpg', 'Suicaのペンギン広場の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-6.jpg', 'Suicaのペンギン広場の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-5.jpg', '優しい明るさのフットライトが特徴のSuicaのペンギン広場', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-11.jpg', 'Suicaのペンギン広場から眺めるトレインビュー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-9.jpg', 'Suicaのペンギン広場から眺めるNTTドコモタワー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-4.jpg', 'ライトアップされたNTTドコモタワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-7.jpg', 'Suicaのペンギン広場の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-1.jpg', 'Suicaのペンギン広場の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-3.jpg', 'Suicaのペンギン広場から眺めるトレインビュー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/pengin-park-10.jpg', 'Suicaのペンギン広場の雰囲気', 9);

-- FAQs for suica-penguin-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'どんな夜景が楽しめますか？', 'ライトアップされたNTTドコモタワーやトレインビューを楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'suica-penguin-plaza'), 'NTTドコモタワーのライトアップは何時まで実施されていますか？', 'NTTドコモタワーのライトアップは日没から24時まで実施されています。', 1);

-- Post: 東京ミッドタウン八重洲 展望台 八重洲テラス (tokyo-midtow-yaesu-terrace)
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
  'tokyo-midtow-yaesu-terrace',
  '東京ミッドタウン八重洲 展望台 八重洲テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '東京ミッドタウン八重洲 八重洲テラス',
  '東京駅八重洲口にできた夜景スポットの新名所。「光の帆」をデザインモチーフとした大屋根のグランルーフが見どころ。',
  '<p>2023年3月に開業した商業施設の東京ミッドタウン八重洲。</p>
<p>5階フロアにはカフェやイベントスペース、そして屋外にはガラス張りのテラス「八重洲テラス」があります。</p>
<p>緑豊かで自然を感じながら過ごすことが出来る素敵な空間でありながら、人も少なく比較的落ち着いて夜景を眺めることができる展望フロアです。</p>
<p>大きな窓の先には「光の帆」をデザインモチーフとした大屋根が特徴のグランルーフが視界いっぱいに広がります。</p>
<p>東京駅八重洲口のシンボルであるグランルーフの全容を眺めることが出来る貴重なスポットなので夜景ファンにとっても嬉しい場所です。</p>
<p>東京駅からは八重洲地下街経由で3分ほどでアクセスできる施設なので、ぜひ東京駅を利用した際にお立ち寄りください。</p>',
  '東京都中央区八重洲 2-2-1',
  'https://www.yaesu.tokyo-midtown.com/',
  '東京ミッドタウン八重洲公式サイト',
  'https://www.instagram.com/tokyomidtownyaesu/',
  '東京ミッドタウン八重洲Instgramアカウント',
  NULL,
  NULL,
  '9:00〜22:00',
  'なし',
  '無料',
  '<ul>
<li>JR「東京駅」/ 京メトロ丸の内線「東京駅」地下直結</li>
<li>東京メトロ銀座線「京橋駅」より徒歩3分</li>
<li>東京メトロ東西線、銀座線、都営浅草線「日本橋駅」より徒歩6分</li>
</ul>',
  '<ul>
<li>営業時間	24時間利用可能（休館日・駐車場設備メンテナンス時を除く）</li>
<li>料金体系	車 300円/30分、バイク 200円/30分</li>
</ul>',
  '<iframe title="東京ミッドタウン八重洲 展望台 八重洲テラスの地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9126347364536!2d139.76691826525885!3d35.679153130194805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0dfb40b7ed%3A0xecaac23581109dfc!2z5p2x5Lqs44Of44OD44OJ44K_44Km44Oz5YWr6YeN5rSy!5e0!3m2!1sja!2sjp!4v1689139002842!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/TUgmy67Rzqw?si=rcPiPRRavIG4nl-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.3,
  4,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesdu-mid.jpg',
  true,
  '2024-06-14T00:27:40+09:00',
  '2024-06-14T00:27:40+09:00',
  '2024-06-14T00:27:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));

-- Images for tokyo-midtow-yaesu-terrace
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesdu-mid.jpg', 'YAESU TERRACEからの眺望（夕暮れ時）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/a-9.jpg', 'YAESU TERRACEから眺める東京駅八重洲口の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-05.jpg', '八重洲口のグランルーフをアップで撮影した写真', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-06.jpg', '八重洲口のグランルーフをアップで撮影した写真', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-02.jpg', 'YAESU TERRACEから眺める東京駅八重洲口の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-03.jpg', 'YAESU TERRACEから眺める東京駅八重洲口の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-04.jpg', '八重洲口のグランルーフをアップで撮影した写真', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-01.jpg', 'YAESU TERRACEから眺める東京駅八重洲口の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-07.jpg', '柳通りを行き交う車や人々', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-10.jpg', 'YAESU TERRACEの雰囲気', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-09.jpg', '大きな窓が特徴のYAESU TERRACE', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/yaesu-mid-08.jpg', '緑豊かなYAESU TERRACE', 11);

-- FAQs for tokyo-midtow-yaesu-terrace
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), 'どんな夜景が楽しめますか？', '東京駅八重洲口のシンボルであるグランルーフを俯瞰して眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), '東京ミッドタウン八重洲 YAESU TERRACEを訪れるのにおすすめのタイミングはありますか？', '平日の夜がおすすめです。丸の内方面の高層ビル群の明かりが灯っており、光量の多い夜景が楽しめます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtow-yaesu-terrace'), '東京ミッドタウン八重洲の展望フロアは何階にありますか？', '八重洲テラスは5階にあります。', 2);

-- Post: 東急プラザ表参道 オモカド おもはらの森 (omohara-forest)
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
  'omohara-forest',
  '東急プラザ表参道 オモカド おもはらの森',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '東急プラザ表参道 オモカド おもはらの森',
  '東急プラザの6Fにある隠れ家的夜景スポット。併設されたスターバックスのコーヒーを片手にゆっくり夜景鑑賞が楽しめる。',
  '<p>表参道と明治通りが交差する神宮前交差点の前に建つ東急プラザ「オモカド」。</p>
<p>6階建の商業施設で6Fには緑豊かな屋上庭園「おもはらの森」があります。</p>
<p>庭園内にはソファーやベンチなどがあり、併設されているスターバックスのコーヒーなどを片手にゆっくり寛ぐことができるのが特徴です。</p>
<p>2ヶ所ある窓ガラスからは渋谷駅方面と神宮前の方面の夜景を楽しむ事も可能。</p>
<p>非常に雰囲気の良い空間なので、ぜひデートの帰りなどにお立ち寄りください。</p>',
  '東京都渋谷区神宮前 4-30-3 6F',
  'https://omohara.tokyu-plaza.com/',
  '東急プラザ表参道原宿公式サイト',
  NULL,
  NULL,
  'https://store.starbucks.co.jp/detail-1062/',
  'スターバックス 東急プラザ 表参道原宿店',
  '8:30 ～ 22:00',
  '不定休',
  '無料',
  '<ul>
<li>メトロ千代田線「明治神宮前駅」から徒歩4分</li>
<li>JR山手線「原宿駅」 から徒歩6分</li>
<li>メトロ銀座線ほか「表参道駅」 から徒歩9分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3384592264138!2d139.70336147578718!3d35.668667272591264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca47d0564fd%3A0x7da55c3328231caf!2z44GK44KC44Gv44KJ44Gu5qOu!5e0!3m2!1sja!2sjp!4v1698588685802!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.5,
  3.3,
  3.3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-2.jpg',
  true,
  '2024-05-05T23:20:19+09:00',
  '2024-05-05T23:20:19+09:00',
  '2024-05-05T23:47:57+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for omohara-forest
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-2.jpg', '東急プラザ原宿「ハラカド」と神宮前交差点', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/omohara-01.jpg', 'おもはらの森の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-3.jpg', 'おもはらの森から眺める神宮前交差点', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/omohara-02.jpg', '渋谷駅方面の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-1.jpg', '東急プラザ原宿「ハラカド」の外観', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/omohara-05.jpg', 'おもはらの森のイルミネーション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-4.jpg', '東急プラザ表参道 おもはらの森の雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-5.jpg', '東急プラザ表参道 おもはらの森の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/omohara.jpg', '東急プラザ表参道「オモカド」の外観', 8);

-- FAQs for omohara-forest
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omohara-forest'), 'どんな夜景が楽しめますか？', '渋谷駅方面や神宮方面の夜景を眺めることができます。', 0);

-- Post: 臨港パーク (seaside-park)
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
  'seaside-park',
  '臨港パーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '臨港パーク',
  '現代的な景観が楽しめる港の公園。豪華客船が停泊する様子や横浜駅方面の夜景が見どころ。初日の出スポットとしても人気。',
  '<p>パシフィコ横浜の屋外エリアにあるみなとみらい地区最大の緑地である臨港パーク。</p>
<p>広々とした芝生広場、潮入りの池、公園内を華やかに飾るオブジェなど、見所満載の憩いのスペースです。</p>
<p>園内からはライトアップされたぷかり桟橋や横浜ハンマーヘッドに停泊している豪華客船、ベイブリッジを眺めることもでき、夜景のレベルもなかなか。</p>
<p>落ち着いた雰囲気の中で夜散歩できる素敵なスペースなのでぜひ横浜デートの終わりなどに立ち寄ってみてください。</p>',
  '神奈川県横浜市西区みなとみらい一丁目',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=760',
  '臨港パーク【公式】横浜市観光情報サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「みなとみらい駅」より徒歩5分</li>
<li>みなとみらい線「新高島駅」より徒歩10分 </li>
<li>JR京浜東北・根岸線／横浜市営地下鉄ブルーライン「桜木町駅」より徒歩15分 </li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12998.96591714929!2d139.6368792!3d35.4611941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c44dd3dcdbd%3A0x29a979a1e4c8e71c!2z6Ieo5riv44OR44O844Kv!5e0!3m2!1sja!2sjp!4v1712073129019!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  2.8,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-5.jpg',
  true,
  '2024-06-16T10:15:34+09:00',
  '2024-06-16T10:15:34+09:00',
  '2024-06-16T10:15:35+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for seaside-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-5.jpg', '横浜駅方面のビル夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-4.jpg', '臨港パークの雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-8.jpg', 'ぷかり桟橋と豪華客船', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-3.jpg', 'ライトアップされるぷかり桟橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-6.jpg', '横浜ハンマーヘッドに停泊する豪華客船', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/rinko-park-2-1.jpg', 'パシフィコ横浜とぷかり桟橋', 5);

-- FAQs for seaside-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたぷかり桟橋ベイブリッジ、横浜ハンマーヘッドに停泊している豪華客船、横浜駅方面のビル夜景などを楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'seaside-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 新宿中央公園 (shinjyuku-central-park)
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
  'shinjyuku-central-park',
  '新宿中央公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '新宿中央公園',
  '一年を通じて様々なイベントが催される都市公園。春には咲き誇り夜桜と東京都庁の共演を眺めることができる。',
  '<p>都庁前駅からスグのところにある新宿中央公園。</p>
<p>園内は芝生が整備されており、スターバックスやむさしの森などが入居するSHUKNOVAという商業施設もあります。</p>
<p>公園の周辺は高層ビル群が立ち並んでおり、夜には芝生に寝っ転がりながら夜景鑑賞を楽しむことができます。</p>
<p>また新宿中央公園は春には桜が咲き誇りライトアップが実施されていたり、映画祭が実施されるなど一年を通して様々なイベントが催されるのも魅力。</p>
<p>ぜひ新宿エリアに訪れた際に立ち寄ってみてください。<p></p>',
  '東京都新宿区西新宿 2-11',
  'https://www.kanko-shinjuku.jp/spot/c006/article_358.html',
  '新宿中央公園 | 一般社団法人新宿観光振興協会',
  'https://shinjukuchuo-park.jp/',
  '新宿中央公園',
  'https://shuknova.com/',
  'SHUKNOVA -シュクノバ-',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR 新宿駅から徒歩10分</li>
<li>東京メトロ丸ノ内線 西新宿駅から徒歩5分</li>
<li>都営地下鉄大江戸線 都庁前駅から徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6481.037264193541!2d139.691397!3d35.688853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f32ca605ba2f%3A0xe4650320bae9e91f!2z5paw5a6_5Lit5aSu5YWs5ZyS!5e0!3m2!1sja!2sus!4v1712672180407!5m2!1sja!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.4,
  4.5,
  4.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-4.jpg',
  true,
  '2024-04-09T23:24:16+09:00',
  '2024-04-09T23:24:16+09:00',
  '2025-04-08T03:17:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for shinjyuku-central-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-3.jpg', 'ライトアップされる東京都庁と夜桜', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-5.jpg', '新宿中央公園の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-6.jpg', 'スターバックスなどが入居する商業施設のSHUKNOVA', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-7.jpg', '新宿中央公園の雰囲気', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-8.jpg', '新宿中央公園でくつろぐ人々', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-9.jpg', '新宿中央公園の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-10.jpg', '夜桜がライトアップされる光景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/02/shinjyuku-central-park-11.jpg', '新宿中央公園で花見をする人々', 7);

-- FAQs for shinjyuku-central-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京都庁をはじめとした高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), '新宿中央公園にはどんな施設がありますか?', 'スターバックスやむさしの森などの飲食店、ボルダリング施設などがあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shinjyuku-central-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 中野通り桜まつり (nakano-street)
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
  'nakano-street',
  '中野通り桜まつり',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '中野通り桜まつり',
  '中野駅北口から新井五差路交差点までの約1キロの桜並木がライトアップされる光景を堪能できる中野区屈指の夜桜スポット。',
  '<p>中野区屈指の桜の名所である中野通り。</p>
<p>中野駅から哲学堂公園までの約2キロの道路には320本の桜が植えられており、見事な桜のトンネルを眺めることができます。</p>
<p>中野駅北口から新井五差路交差点までの約1キロの桜並木がライトアップされるイベントも実施されており、見事な桜景を鑑賞できます。</p>
<p>なおこの夜景スポットの近くには桜のアーチの向こうに西武新宿線が横切る人気の撮影スポットがあります。</p>
<p>黄色い電車と桜の共演はとても絵になるのでぜひ併せて訪れてみてください。</p>',
  '東京都中野区新井 2-12周辺',
  'https://nakanodorisakuramatsuri.com/',
  '中野通り桜まつりライトアップ',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>西武鉄道「新井薬師前駅」より徒歩約8分</li>
<li>JR中野駅より徒歩12分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2688708575283!2d139.66983645!3d35.7196055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f29f934a933b%3A0xb62c2cf36155b572!2z44CSMTY1LTAwMjQg5p2x5Lqs6YO95Lit6YeO5Yy65p2-44GM5LiY77yS5LiB55uu77yV!5e0!3m2!1sja!2sjp!4v1712993235808!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.9,
  2.9,
  2.9,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-2.jpg',
  true,
  '2024-04-13T16:29:45+09:00',
  '2024-04-13T16:29:45+09:00',
  '2025-04-08T04:09:05+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for nakano-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-2.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-1.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-3.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-4.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-6.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-7.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/nakano-street-8.jpg', NULL, 6);

-- FAQs for nakano-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), 'どんな夜景が楽しめますか？見どころはどこですか？', '中野駅北口から新井五差路交差点までの約1キロの桜並木がライトアップされる光景を堪能できます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Event info for nakano-street
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'nakano-street'), '2025年3月15日', '2025年4月20日', '中野通り', '17:00 ~ 21:00');

-- Post: 亀戸天神社 (kameido-shrine)
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
  'kameido-shrine',
  '亀戸天神社',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '亀戸天神社',
  '毎年4月には藤が満開に咲き誇り、ライトアップが実施されます。東京スカイツリーとの共演がとても美しいです。',
  '<p>東京都江東区亀戸にある亀戸天神社。</p>
<p>菅原道真を祀り、受験生などを中心に学問の神として親しまれている神社です。</p>
<p>通年を通して参拝できる神社ですが、ぜひ訪れてほしいのは4月。</p>
<p>「亀戸天神藤まつり」が開催され、境内にある藤棚が満開に咲き誇る光景を楽しむことができるからです。</p>
<p>夜にはライトアップも実施され、東京スカイツリーとの共演も非常に美しいです。</p>',
  '東京都江東区亀戸 3-6-1',
  'http://kameidotenjin.or.jp/',
  '亀戸天神社 | 公式サイト',
  'https://www.instagram.com/kameidotenjinsha_official/',
  '亀戸天神 Instgramアカウント',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>錦糸町駅北口より徒歩15分</li>
<li>亀戸駅北口より徒歩15分</li>
<li></li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.957917664215!2d139.81814332578864!3d35.702653172580405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888d178fe84b1%3A0x432bb2b6c650d9ae!2z5LqA5oi45aSp56We56S-!5e0!3m2!1sja!2sjp!4v1713400746615!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.2,
  3.4,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-1.jpg',
  true,
  '2024-04-26T00:11:35+09:00',
  '2024-04-26T00:11:35+09:00',
  '2024-04-26T00:15:43+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for kameido-shrine
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-1.jpg', '満開の藤と東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-5.jpg', 'ライトアップされる亀戸天神社と東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-2.jpg', 'ライトアップされる藤棚', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-6.jpg', 'ライトアップされる亀戸天神社', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-3.jpg', 'ライトアップされる亀戸天神社の藤棚', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-4.jpg', '満開の藤と東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-8.jpg', '太鼓橋と藤棚の水鏡', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/kameido-shrine-7.jpg', 'ライトアップされる亀戸天神社と東京スカイツリー', 7);

-- FAQs for kameido-shrine
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京スカイツリーと荘厳な作りの神社の共演を眺めることができます。また4月には満開の藤が咲き誇る光景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kameido-shrine'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 小梅児童遊園 (koume-park)
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
  'koume-park',
  '小梅児童遊園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '小梅児童遊園',
  '無数のポールが飾られているのが特徴の児童公園。東京スカイツリーとの共演が美しい。',
  '<p>東京都墨田区の東武線の「とうきょうスカイツリー」駅の間近にある綺麗に整備された児童公園。</p>
<p>東京芸大と台東、墨田両区が連携して行った「GTS観光アートプロジェクト」の作品が飾られているのが特徴です。</p>
<p>無数のポールが立ち並ぶ中から空を見上げると、スカイツリーと揃うようにして空高く伸びる不思議な光景を楽しむことができます。</p>
<p>ポールは夜になると複数のカラーに点灯するので、スカイツリーのライトアップカラーと揃ったタイミングでシャッターを切るのがおすすめ。</p>',
  '東京都墨田区向島 1-33-3',
  'https://www.city.sumida.lg.jp/sisetu_info/kouen/kunai_park_annai/sumida_zidouteien/park21.html',
  '小梅児童遊園 | 墨田区公式ウェブサイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武スカイツリーライン「とうきょうスカイツリー」駅　徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.561143522104!2d139.8081445!3d35.7104686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0cead5cdb%3A0xf142b53f3de9c27a!2z5bCP5qKF5YWQ56ul6YGK5ZyS!5e0!3m2!1sja!2sjp!4v1714056155234!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.3,
  2.9,
  2.9,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-2.jpg',
  true,
  '2024-04-25T23:54:57+09:00',
  '2024-04-25T23:54:57+09:00',
  '2024-04-25T23:55:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for koume-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-2.jpg', '小梅児童遊園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-3.jpg', '小梅児童遊園の遊具', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-4.jpg', '小梅児童遊園のアート作品', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-1.jpg', '小梅児童遊園のアート作品と東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-5.jpg', '小梅児童遊園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/koume-park-6.jpg', '小梅児童遊園の夜景', 5);

-- FAQs for koume-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '無数のポールと東京スカイツリーの共演を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'koume-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 東急プラザ原宿 ハラカド 屋上庭園 (tokyu-harakado)
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
  'tokyu-harakado',
  '東急プラザ原宿 ハラカド 屋上庭園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '東急プラザ原宿「ハラカド」',
  '東京タワー、六本木ヒルズ、ドコモタワーといったランドマークを見渡すことができる緑豊かな屋上庭園。渋谷・原宿エリアの夜散歩におすすめ。',
  '<p>2024年4月に開業した東急プラザ原宿「ハラカド」。</p>
<p>銭湯やレストラン、フードマーケットなど75店舗が集結する6階建ての商業施設です。</p>
<p>そんな同施設の6F・7Fには無料で入場することができる緑豊かな屋外テラスがあります。</p>
<p>テラスからは真正面に東急プラザ表参道「オモハラ」、その背景に東京タワー、六本木ヒルズといったランドマークを見渡すことができます。</p>
<p>テーブルやベンチも多数用意されているので、同ビルで食事やショッピングを楽しんだ帰りに立ち寄ってみてはいかがでしょうか？</p>',
  '東京都渋谷区神宮前 6-31-21',
  'https://harakado.tokyu-plaza.com/',
  '東急プラザ原宿「ハラカド」',
  'https://www.instagram.com/harakado_/',
  '東急プラザ原宿「ハラカド」Instgramアカウント',
  NULL,
  NULL,
  '11:00～23:00',
  'なし',
  '無料',
  '<ul>
<li>メトロ千代田線「明治神宮前駅」 より徒歩約4分</li>
<li>JR山手線「原宿駅」 より徒歩約6分</li>
<li>メトロ銀座線ほか「表参道駅」より徒歩約9分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3494203032556!2d139.70233157578716!3d35.66839732259139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5b577af623%3A0x528431c13e13fbb6!2z5p2x5oCl44OX44Op44K26KGo5Y-C6YGT44CM44OP44Op44Kr44OJ44CN!5e0!3m2!1sja!2sjp!4v1714709075298!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.3,
  3.3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-4.jpg',
  true,
  '2024-05-05T23:38:42+09:00',
  '2024-05-05T23:38:42+09:00',
  '2024-05-28T00:05:24+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for tokyu-harakado
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-2.jpg', '東急プラザ原宿 ハラカド 屋上庭園から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-1.jpg', 'ハラカドから眺める神宮前交差点', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-4.jpg', '神宮前交差点と明治通り', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-6.jpg', '神宮前交差点と表参道', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-3.jpg', '東急プラザ原宿 ハラカド 屋上庭園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-5.jpg', '東急プラザ原宿 ハラカド 屋上庭園の階段', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-7.jpg', '東急プラザ原宿 ハラカド 屋上庭園に設置されたベンチ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/urahara-8.jpg', '東急プラザ原宿 ハラカド 屋上庭園の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'https://nightscape.tokyo/wp-content/uploads/2024/05/omohara-1.jpg', '東急プラザ原宿「ハラカド」の外観', 8);

-- FAQs for tokyu-harakado
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京タワー、六本木ヒルズ、ドコモタワーといったランドマークを見渡すことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-harakado'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 新宿高島屋タイムズスクエア 屋上庭園 ホワイトガーデン (white-gardern)
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
  'white-gardern',
  '新宿高島屋タイムズスクエア 屋上庭園 ホワイトガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '新宿高島屋タイムズスクエア 屋上庭園 ホワイトガーデン',
  '新宿タカシマヤの13F・12Fにある緑豊かな屋上庭園。大人な雰囲気の空間でデートの利用におすすめ。',
  '<p>新宿タカシマヤのレストランフロアがある13F・12Fにある緑豊かな屋上庭園。</p>
<p>広々とした庭園からは3方向の眺望が広がり、新宿御苑や東京スカイツリー、新宿の高層ビル群、ドコモタワーなどを眺めることができます。</p>
<p>特に東京都庁は毎日プロジェクションマッピングを実施しており、程よい距離感から楽しめる特等席です。</p>
<p>園内はベンチなども数多くあり、夜風を浴びながら談笑したりするのにぴったり。</p>
<p>また、クリスマスシーズンには、テラスがイルミネーションで飾られたエリアがあり、雰囲気も抜群です。</p>
<p>ぜひ仕事終わりや新宿エリアでのデートの帰りに立ち寄ってみてはいかがでしょうか？</p>',
  '東京都渋谷区千駄ケ谷 5-24',
  'https://www.restaurants-park.jp/',
  '新宿高島屋タイムズスクエア 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00 ~ 22:00',
  '悪天候時は利用不可',
  '無料',
  '<ul>
<li>JR新宿駅の新南改札から徒歩2分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12962.297275080648!2d139.7027138!3d35.6874822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3bd856d723%3A0xd21f298a0e8ffca5!2z44Ob44Ov44Kk44OI44Ks44O844OH44Oz!5e0!3m2!1sja!2sjp!4v1717635876900!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/fmQ3pSUyCS4?si=XPAay2Gg4wvKwZW7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.1,
  4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-5.jpg',
  true,
  '2024-06-06T10:21:08+09:00',
  '2024-06-06T10:21:08+09:00',
  '2024-06-12T00:58:31+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for white-gardern
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-5.jpg', 'プロジェクションマッピングが実施される東京都庁', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/white-gardern-1-scaled.jpg', '新宿エリアの高層ビル群の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-10.jpg', 'ホワイトガーデンからの眺望', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-2.jpg', 'ホワイトガーデンからの眺望', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-1.jpg', '東京スカイツリーと新宿御苑', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-7.jpg', 'ライトアップされるドコモタワー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-8.jpg', 'イルミネーションで美しく輝く庭園内の雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-6.jpg', 'イルミネーションで美しく輝く庭園内の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-4.jpg', '緑豊かな屋上庭園', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/takashimaya-white-gardern-3.jpg', '緑豊かな屋上庭園', 9);

-- FAQs for white-gardern
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), 'どんな夜景が楽しめますか？見どころはどこですか？', '都庁をはじめとした新宿エリアの高層ビル群やライトアップされたドコモタワーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), '新宿駅高島屋の最寄り駅・出口はどこですか？', 'JR新宿駅 JRミライナタワー改札（新南口）です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'white-gardern'), '新宿高島屋タイムズスクエア 屋上庭園 は何階にありますか？', '新宿高島屋タイムズスクエア 屋上庭園 は12Fと13Fにあります。', 2);

-- Post: 新宿野村ビル 展望ロビー (nomura-buiding)
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
  'nomura-buiding',
  '新宿野村ビル 展望ロビー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '新宿野村ビル 展望ロビー',
  '高さ200mからの景色を無料で眺めることができる穴場の夜景スポット。新宿アイランドビル、三井ビル、青梅街道などを眺めることが可能。',
  '<p>新宿野村ビルディング最上階にあるレストランフロアの一角に設えられた展望ロビー。</p>
<p>西の方角がひらけており、新宿アイランドビル、三井ビル、青梅街道などを眺めることができます。</p>
<p>見どころはそこまで多くないですが、高さ200mからの景色を無料で眺めることができるのは貴重です。</p>
<p>ぜひ眺望レストラン「SKY Restaurant」を利用した帰りなどに立ち寄ってみてはいかがでしょうか。</p>',
  '東京都新宿区西新宿 1-26',
  'https://snb-portal.com/nomura-shop/shop/',
  '新宿野村ビル公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00 ~ 23:00',
  'なし',
  '無料',
  '<ul>
<li>メトロ丸ノ内線「西新宿駅」 約4分</li>
<li>都営大江戸線「都庁前駅」 約5分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.352150056504!2d139.6953653!3d35.6929509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c3b6022d%3A0x78bfc477e9d0bfbc!2z44CSMTYwLTAwMjMg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yR5LiB55uu77yS77yW4oiS77ySIOaWsOWuv-mHjuadkeODk-ODqw!5e0!3m2!1sja!2sjp!4v1717638088438!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '約200m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3.1,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/shinjyuku-nomura-building-3.jpg',
  true,
  '2024-06-06T10:41:57+09:00',
  '2024-06-06T10:41:57+09:00',
  '2024-07-18T14:15:24+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for nomura-buiding
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/shinjyuku-nomura-building-3.jpg', '新宿野村ビル 展望ロビーから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/shinjyuku-nomura-building-2.jpg', '新宿野村ビル 展望ロビーの眺望', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/shinjyuku-nomura-building-4.jpg', '新宿野村ビル 展望ロビーの雰囲気（夜）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/shinjyuku-nomura-building-1.jpg', '新宿野村ビル 展望ロビーの雰囲気（昼）', 3);

-- FAQs for nomura-buiding
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), 'どんな夜景が楽しめますか？見どころはどこですか？', '西の方角がひらけており、新宿アイランドビル、三井ビル、青梅街道などを眺めることが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'nomura-buiding'), '新宿野村ビルの展望ロビーは何階にありますか？', '50Fにあります。高層階直結のエレベーターからアクセスが可能です。', 1);

-- Post: アクアシティお台場 屋上テラス (aquacity-odaiba)
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
  'aquacity-odaiba',
  'アクアシティお台場 屋上テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'アクアシティお台場 屋上テラス',
  'レインボーブリッジをはじめとした美しいベイビューを堪能できる穴場の無料夜景スポット。お台場エリア唯一の神社であるお台場神社も見どころ。',
  '<p>お台場海浜公園に隣接する大型複合ショッピングセンターのアクアシティお台場。</p>
<p>約60店が集まったショッピングゾーンや東京ラーメン国技館などがあるお台場を代表する観光スポットです。</p>
<p>同施設には7階屋上や6階テラスにレインボーブリッジを眺めることができる開放感あふれる夜景スポットがあります。</p>
<p>非常に美しく光景を眺めることができるのに関わらず、人も少なく落ち着いた雰囲気なのでデート利用におすすめです。</p>
<p>なお、屋上にはお台場・臨海エリアで唯一とも言えるお台場神社があります。</p>
<p>夜景を楽しみながらおみくじを引くこともできるのでぜひお立ち寄りください。</p>',
  '東京都港区台場 1-7-1',
  'https://www.aquacity.jp/',
  'アクアシティお台場公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00 ～ 21:00',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ　台場駅　徒歩1分</li>
<li>りんかい線　東京テレポート駅　徒歩6分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.98499252286!2d139.773568!3d35.627819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f63b45c9df%3A0x789362fc3e608973!2z44Ki44Kv44Ki44K344OG44KjIOOBiuWPsOWgtA!5e0!3m2!1sja!2sjp!4v1718117516085!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3,
  3.2,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-14.jpg',
  true,
  '2024-06-11T23:56:18+09:00',
  '2024-06-11T23:56:18+09:00',
  '2024-06-11T23:56:58+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for aquacity-odaiba
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-14.jpg', 'アクアシティお台場の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-11.jpg', 'アクアシティお台場から眺めるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-7-2.jpg', 'ライトアップされるレインボーブリッジと東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-9-2.jpg', '芝浦方面のビル夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-7.jpg', 'アクアシティお台場屋上にあるお台場神社', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-8.jpg', 'アクアシティお台場屋上の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-9.jpg', 'アクアシティお台場屋上にあるおみくじ売り場', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/aquacity-odaiba-15.jpg', 'アクアシティお台場 6Fテラスの雰囲気', 7);

-- FAQs for aquacity-odaiba
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたレインボーブリッジや東京タワーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジは日没から24:00までライトアップが実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), 'お台場神社はどこにありますか？', 'アクアシティお台場の屋上にあります。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aquacity-odaiba'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 五反田ふれあい水辺広場 (gotanda-fureai-waterfront-plaza)
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
  'gotanda-fureai-waterfront-plaza',
  '五反田ふれあい水辺広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinagawa'),
  NULL,
  '五反田ふれあい水辺広場',
  'JR五反田駅から歩いて3分ほどの場所に位置する小さな水辺広場。タワーマンション群が織りなす迫力のあるビル夜景が楽しめる無料スポット。',
  '<p>JR五反田駅から歩いて3分ほどの場所に位置する小さな水辺広場。</p>
<p>美しく整備された広場には腰掛けることができるスペースが多くとられており、目黒川を眺めながらゆっくり会話ができるようになっています。</p>
<p>広場の周辺にはプラウドタワー東五反田やルサンク大崎シティタワーといった高層ビル群が林立しており、夜景の見応えも十分。</p>
<p>また、同施設は春には夜桜のライトアップイベント、冬にはイルミネーションイベントも実施されており、一年を通じて様々な景観を楽しませてくれるのも魅力です。</p>
<p>ぜひ品川エリアで遊んだ帰りなどに立ち寄ってみてください。</p>',
  '東京都品川区東五反田 2-9-11',
  'https://www.city.shinagawa.tokyo.jp/PC/shinagawaphotonews/shinagawaphotonews-2010/hpg000011751.html',
  '区立五反田ふれあい水辺広場｜品川区',
  'https://nightscape.tokyo/event/gotanda-winter-illumination/',
  '目黒川みんなのイルミネーション',
  'https://nightscape.tokyo/event/gotanda-sakura-lightup/',
  '目黒川さくらのライトアップ',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR線「五反田駅」から徒歩約3分</li>
<li>JR線「大崎駅」から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.1414369959975!2d139.7240854152572!3d35.624239580207544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188afa09ad964f%3A0xcb334b7dcbd37dc9!2z5LqU5Y-N55Sw44G144KM44GC44GE5rC06L665bqD5aC0!5e0!3m2!1sja!2sjp!4v1680013140980!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.2,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-1.jpg',
  true,
  '2024-06-12T00:55:18+09:00',
  '2024-06-12T00:55:18+09:00',
  '2024-06-12T00:55:18+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for gotanda-fureai-waterfront-plaza
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-1.jpg', '五反田ふれあい水辺広場とルサンク大崎シティタワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-2.jpg', '五反田ふれあい水辺広場とプラウドタワー東五反田', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-3.jpg', '五反田ふれあい水辺広場の雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-4.jpg', '五反田ふれあい水辺広場の付近にある山本橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-5.jpg', '五反田ふれあい水辺広場の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/fureai-6.jpg', '山本橋から眺めるビル夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-6.jpg', '五反田ふれあい水辺広場で実施されるイルミネーションイベントの様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-5.jpg', '五反田ふれあい水辺広場で実施される夜桜ライトアップイベントの様子', 7);

-- FAQs for gotanda-fureai-waterfront-plaza
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ルサンク大崎シティタワーやプラウドタワー東五反田などの高層ビル群が織りなすビル夜景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), '五反田ふれあい水辺広場ではどんなイベントが実施されていますか？', '春には夜桜のライトアップイベント、冬にはイルミネーションイベントが実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-fureai-waterfront-plaza'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 越中島公園 (etchujima-park)
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
  'etchujima-park',
  '越中島公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '越中島公園',
  'ライトアップされた橋や屋形船を眺められる綺麗にリバーサイドパーク。潮風を感じながら夜散歩を楽しめるおすすめのデートスポット。',
  '<p>晴海運河沿いにある越中島公園。</p>
<p>綺麗に整備された園内からはタワーマンション群が織りなすビル夜景や隅田川に掛かる中央大橋や永代橋のライトアップを眺めることができます。</p>
<p>同施設の周辺には『東京水辺ライン』の越中島発着所があり、都会的な夜景に、隅田川を屋形船が行き交う、情緒ある風景も楽しめます。</p>
<p>ウォーターフロントの心地よい潮風を感じながら夜散歩できる素敵なスポットなので、ぜひデートや撮影で訪れてみてください。</p>',
  '江東区越中島1地先',
  'https://koto-kanko.jp/tourism/detail_spot.php?sid=S00044',
  '観光情報 | 江東おでかけ情報局',
  NULL,
  NULL,
  'https://nightscape.tokyo/article/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京葉線「越中島駅」4番出口徒歩4分</li>
<li>都営大江戸線・東京メトロ東西線「門前仲町駅」4番出口徒歩10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.340579219052!2d139.7897371!3d35.6687489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018896d9567f3a5%3A0xcadf73cf6e8a0f42!2z6LaK5Lit5bO25YWs5ZyS!5e0!3m2!1sja!2sjp!4v1718372517778!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/6sEwv9Yh_tg?si=yQAj0wBBZxfs61IB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.9,
  3,
  3.4,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-6.jpg',
  true,
  '2024-06-14T23:30:36+09:00',
  '2024-06-14T23:30:36+09:00',
  '2024-06-14T23:41:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for etchujima-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-6.jpg', '越中島公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-5.jpg', 'ブルーに輝く永代橋', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-7.jpg', 'ライトアップされる中央大橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-9.jpg', 'リバーシティ21が織りなすビル夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-10.jpg', '中央区立石川島公園周辺の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-8.jpg', '越中島公園から眺めるリバーシティ21', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-4.jpg', '越中島公園の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-3.jpg', '越中島公園の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-1.jpg', '夕暮れ時のリバーシティ21の雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/etchujima-park-2.jpg', '夕日に染まる中央大橋', 9);

-- FAQs for etchujima-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた中央大橋、永代橋、タワーマンションのビル夜景などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), '永代橋や中央大橋のライトアップは何時まで実施されていますか？', '永代橋や中央大橋のライトアップは日没から23時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'etchujima-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 晴海ふ頭公園 (harumi-park)
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
  'harumi-park',
  '晴海ふ頭公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '晴海ふ頭公園',
  'レインボーブリッジや東京タワーを眺めることができる緑豊かなウォーターフロントの公園。近くにパーキングもあるのでドライブデートで訪れるのがおすすめ。',
  '<p>東京2020オリンピック・パラリンピックの選手村跡地にできた緑豊かな公園。</p>
<p>船形の大型遊具、カフェ、噴水池、モニュメントなどがあり、日中は多くの家族連れで賑わいを見せる市民の憩いの場です。</p>
<p>そんな公園も夕方を過ぎると人の数も落ち着き、ゆっくり夜景鑑賞できる大人なデートスポットに。</p>
<p>ライトアップされたレインボーブリッジや東京タワー、港区方面のビル夜景は迫力満点です。</p>
<p>また晴海エリアのタワーマンション群の夜景も光量が多く一見の価値があります。</p>
<p>潮風を感じながらゆっくり夜散歩できる素敵な場所なのでドライブの途中などに立ち寄ってみてはいかがでしょうか。</p>',
  '東京都中央区晴海五丁目',
  'https://www.tptc.co.jp/park/02_01',
  '晴海ふ頭公園｜海上公園なび',
  NULL,
  NULL,
  'https://www.o-garden.tokyo/',
  'オーガーデン（園内にあるカフェ）',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>都営大江戸線「勝どき」下車　徒歩25分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.699302696152!2d139.7712851!3d35.6480641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a2a4771c86f%3A0x8c4b29e853093cf9!2z5pm05rW344G16aCt5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1718551981389!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3,
  3.8,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-14.jpg',
  true,
  '2024-06-17T00:36:30+09:00',
  '2024-06-17T00:36:30+09:00',
  '2024-09-21T20:32:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for harumi-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-14.jpg', '晴海のタワーマンション群とブルーにライトアップされる噴水池', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-12.jpg', 'ライトアップされるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-11.jpg', '晴海埠頭に停泊する船', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-7.jpg', '公園内にあるモニュメント', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-8.jpg', '対岸に見える竹橋埠頭', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-9.jpg', '港区方面のビル夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-6.jpg', 'ライトアップされる東京タワー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-10.jpg', '夜の晴海埠頭公園の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-13.jpg', '公園内にあるカフェ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-3.jpg', '夕日に染まる晴海埠頭公園', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-4.jpg', '晴海のタワーマンション群', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-5.jpg', '公園内にあるモニュメント', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-2.jpg', '公園内にあるカフェ', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/06/HAREUMI-FUTO-PARK-1.jpg', '園内にある船型の大型遊具', 13);

-- FAQs for harumi-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされたレインボーブリッジや東京タワー、港区方面のビル夜景などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没から24時まで実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'harumi-park'), '東京タワーのライトアップは日没から24時まで実施されています。', '東京タワーのライトアップは日没から24時まで実施されています。', 2);

-- Post: 三脚の活用シーンと正しい使い方を解説！カメラの表現を広げて写真撮影を楽しもう (tripod-setting)
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
  'tripod-setting',
  '三脚の活用シーンと正しい使い方を解説！カメラの表現を広げて写真撮影を楽しもう',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>カメラを固定するために使用する撮影機材である三脚。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とてもシンプルな役割の撮影機材ですが、これがあると表現できる写真の幅が広がったり、面白い動画を作ることも可能になります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事ではそんな三脚の活用シーンを解説した上で、正しい使い方を紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事を読めば三脚に関する知識がぐっと深まると思うのでぜひ最後までお付き合いください！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">三脚の活用シーン・使い道</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>冒頭でも紹介した通り、三脚を使うと表現できる写真の幅が広がります。ここでは過去に撮影した作例を交えて具体的な活用シーンを7つ紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">①高画質な夜景を撮影する</h3>
<!-- /wp:heading -->

<!-- wp:image {"lightbox":{"enabled":false},"id":6234,"sizeSlug":"large","linkDestination":"custom"} -->
<figure class="wp-block-image size-large"><a href="https://nightscape.tokyo/sumida/tokyo-sky-tree/"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-1-1024x683.jpg" alt="東京スカイツリー 展望回廊&amp;展望デッキの夜景" class="wp-image-6234"/></a><figcaption class="wp-element-caption">東京スカイツリー 展望回廊&amp;展望デッキから撮影した夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://nightscape.tokyo/tag/observatory/">展望台</a>などでカメラを手持ちの状態で夜景を撮る場合、手ブレを回避することを最優先に考えて下記のようにカメラを設定せざるを得ません。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>F値を開放に近づける</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ISO値を上げる</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>シャッタースピードは1/50程度にする</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>このような設定で撮影した写真はどうしてもノイズが多く乗ってしまうし、写真全体にピントが合わない場合も出てきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで登場するのが三脚。三脚でカメラを固定すれば、下記のような設定で手ブレを気にすることなく夜景をクリアに撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>F値を8.0程度まで絞れる</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ISO値を上げないで済む</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>シャッタースピードは何秒でも構わない</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">②車の光跡を撮影できる</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":2132,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-01-1024x683.jpg" alt="六本木ヒルズと夜桜のライトアップ" class="wp-image-2132"/><figcaption class="wp-element-caption">長時間露光で車の光跡をとらえた夜景写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を使うとシャッタースピードを自由に調整できるようになるため、長時間露光での写真撮影が可能になります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>長時間露光での写真撮影を楽しめる身近な例として紹介するのは道路周辺での夜景写真撮影。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラの前を車が通り過ぎる前後10秒ほどの時間を切り取れば、肉眼では見ることができないダイナミックな光跡を撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">③噴水や川など水の流れを美しく表現する</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":85,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/wakura-park-2-1024x683.jpg" alt="和田倉噴水公園の夜景" class="wp-image-85"/><figcaption class="wp-element-caption">和田倉噴水公園の夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>噴水や川・滝など水が流れている場所は長時間露光と相性が良いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>5~10秒ほどの長時間露光を行えば、水の軌道が白い糸状になって写し出されるため、幻想的な一枚を撮影することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記は東京都内にある和田蔵噴水公園で撮影した夜景写真。2基の噴水塔から水が流れる様子を5秒ほど長時間露光で捉えています。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">④花火を撮影する</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":1948,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/rainbow-bridge-park-1024x683.jpg" alt="お台場海浜公園に打ち上がる花火" class="wp-image-1948"/><figcaption class="wp-element-caption">お台場海浜公園に打ち上がる花火</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>夏の風物詩である花火も三脚が活躍するシーンの一つ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ケーブルレリーズを用意して適切な設定を行った上で下記のような撮影を行うと鮮やかな花火を撮影することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>花火が打ち上がると同時にシャッターボタンを押す</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>花火が上空で消えるのを確認したらシャッターボタンから指を離す</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>なお、花火会場での三脚利用は禁止されている場合もあります。しっかりマナーを守った上で花火の撮影にチャレンジしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑤星の軌跡を撮影する</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":8523,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/10/startrail-1024x683.jpg" alt="東京タワーの星景写真" class="wp-image-8523"/><figcaption class="wp-element-caption">三脚を用いて撮影した星景写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を用いてカメラを固定した状態で夜空を撮影すると、星が少しずつ移動している様子を捉えることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これを1~2時間ほど連続して撮り続けて、撮影した写真を合成すると上記のような写真を作ることもできます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影にかかる時間が長いですし、空に雲がかからないタイミングを見計う必要があるので撮影ややや面倒ですが、写真に仕上がった時の感動は大きいです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑥HDR撮影で見たままの景色を切り取る</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":2005,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/zojoji-temple-1024x683.jpg" alt="増上寺と東京タワー" class="wp-image-2005"/><figcaption class="wp-element-caption">HDR合成して作成した夜景写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラは明るい場所と暗い場所の差が激しい場所が苦手です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>写真を撮っていると部分的に白飛び or 黒つぶれして、見たままの景色を撮影できないと悩むことも多いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな時には下記3枚の写真を別々にとってPhotoShopなどでHDR合成を行うのがおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>一番明るい部分に合わせた写真</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>一番暗い部分に合わせた写真</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>中間の明るさの写真</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>HDR合成を行うためには複数の写真を同じ場所から取る必要があるため、三脚の活用が必須になります。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑦タイムラプス動画を撮影する</h3>
<!-- /wp:heading -->

<!-- wp:embed {"url":"https://youtu.be/i3iA-bLEvDA?si=aUM2CSlhXaIBxA8Y","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/i3iA-bLEvDA?si=aUM2CSlhXaIBxA8Y
</div><figcaption class="wp-element-caption">三脚を使って撮影したタイムラプス映像</figcaption></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>三脚があると写真撮影の表現が広がるだけでなく、タイムラプス映像も作ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記は夕方から夜にかけて徐々に変化していく街並みをとらえた映像集。撮影にかかる所要時間が長く手間がかかる撮影技法ですが、とてもドラマチックな映像を作成することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/time-lapse/"},"icon":"externalLink"} /-->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/create-timelapse/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">三脚の正しい使い方・カメラの設定</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>三脚を用いて写真撮影を行うためにはいくつか注意点があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>三脚の正しい使い方・カメラの撮り方を知らないと、貴重なシャッターチャンスでイメージしていた写真が撮れなかったり、機材を倒してしまうリスクがあるのでチェックしておきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">①しっかり脚を広げる</h3>
<!-- /wp:heading -->

<!-- wp:columns {"isStackedOnMobile":false} -->
<div class="wp-block-columns is-not-stacked-on-mobile"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10314,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-7-683x1024.jpg" alt="" class="wp-image-10314"/><figcaption class="wp-element-caption">&#x26aa;︎しっかり脚を広げた状態の三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10316,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-8-1-683x1024.jpg" alt="" class="wp-image-10316"/><figcaption class="wp-element-caption">×中途半端に脚を広げた状態の三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p>三脚は中途半端に開いた状態で設置すると不安定になります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>不安定な状態で撮影をしていると風で三脚が倒れてしまうことがあるので、開脚ストッパーで止まるところまでしっかり開きましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>またカメラを設置する場所はコンクリートやアスファルトなどの硬い地面がベストです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">②脚1本が正面くるように設置</h3>
<!-- /wp:heading -->

<!-- wp:columns {"isStackedOnMobile":false} -->
<div class="wp-block-columns is-not-stacked-on-mobile"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10317,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-6-683x1024.jpg" alt="" class="wp-image-10317"/><figcaption class="wp-element-caption">&#x26aa;︎脚1本が正面に来た状態の三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10318,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-5-683x1024.jpg" alt="" class="wp-image-10318"/><figcaption class="wp-element-caption">×脚2本が正面に来た状態の三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p>三脚の脚は被写体側に1本、手前に2本来るのが基本です。被写体側に2本、手前に1本の状態だと、三脚の脚を蹴ってしまったり、被写体側にカメラが倒れてしまう可能性が出てくるためです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>三脚にはロゴが描かれている脚が一本あるので、それが被写体側に向くようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">③脚は太い方から使う</h3>
<!-- /wp:heading -->

<!-- wp:columns {"isStackedOnMobile":false} -->
<div class="wp-block-columns is-not-stacked-on-mobile"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10320,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-2-1-683x1024.jpg" alt="" class="wp-image-10320"/><figcaption class="wp-element-caption">&#x26aa;︎太い脚から優先して使用している三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10321,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-1-683x1024.jpg" alt="" class="wp-image-10321"/><figcaption class="wp-element-caption">×細い脚から優先して使用している三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p>三脚の脚は下段になるにつれて細くなるように作られています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>細い脚は強い風が吹いたり振動が加わった時にブレやすいので、安定しやすい太い脚から優先して使いましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">④センターポールを使うのは最終手段</h3>
<!-- /wp:heading -->

<!-- wp:columns {"isStackedOnMobile":false} -->
<div class="wp-block-columns is-not-stacked-on-mobile"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10322,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-3-683x1024.jpg" alt="" class="wp-image-10322"/><figcaption class="wp-element-caption">&#x26aa;︎センターポールを使用せず高さ調整した三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":10323,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-4-683x1024.jpg" alt="" class="wp-image-10323"/><figcaption class="wp-element-caption">×センターポールを使用して高さ調整した三脚</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p>センターポール（エレベーター）を使うと三脚が不安定になりやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そのため、脚を最大限に伸ばしても高さが足りないときに以外は、センターポールを使うのは避けましょう。センターポールは非常用と覚えておいてください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑤マニュアルフォーカスに変更＆手ぶれ補正をオフに</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10324,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-9-1024x683.jpg" alt="" class="wp-image-10324"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を利用する場合はマニュアルフォーカスに変更し、手動でピントを合わせるのが基本です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、レンズに手ぶれ補正がついている場合はOFFに切り替えましょう。手ぶれ補正をONにしたままだと、手ブレ補正が誤作動を起こして写真がぶれる可能性を減らすことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑥シャッターはレリーズを用いて切る</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10313,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/sony-rmt-p1bt-1024x683.jpg" alt="" class="wp-image-10313"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚に固定したカメラのシャッターボタンを直接押すと、その瞬間に微妙にカメラが揺れて手ぶれする可能性が出てきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そのような事態を避けるために、三脚利用時はレリーズを使用してシャッターを切るのが基本です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>もしもレリーズがない場合は、カメラのセルフタイマー機能を使ってシャッターボタンに直接触れないでシャッターを切るようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑦ミラーアップに設定を変更（一眼レフカメラのみ）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10325,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-10-1024x683.jpg" alt="" class="wp-image-10325"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一眼レフには、「ミラー」という部品があります。この部品はシャッターを押す度に、パカパカと動きます。このミラーの動きでカメラが微妙に動いてしまい、写真がブレることを「ミラーショック」と呼びます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ミラーショックを避けるために、三脚を利用する際は「ミラーアップ」に設定を変更しましょう。ミラーアップにすればシャッターを押すたびにミラーがパカパカと動かなくなり、写真がぶれなくなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>※ミラーレス一眼カメラの場合は「ミラーショック」は起こらないので、設定変更の必要はありません。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">初心者におすすめの三脚</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>これから初めて三脚を購入する場合、まずはトラベル三脚を購入するのがおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>トラベル三脚はコンパクトに折りたたむことができ、どこへでも気軽に持ち運ぶことができるからです。ここではそんなトラベル三脚の中からおすすめのアイテムを2つ紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">K&amp;F Concept トラベル三脚（D254C1+BH-28L）</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>トラベル三脚は脚の素材に下記いずれかを採用しているのが一般的。 </p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>アルミニウム</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>カーボン</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>カーボンは軽量で持ち運びがしやすく、それでいて耐候性、耐食性、耐傷性に優れています。高価なのがネックですが、最初の三脚はカーボン製を選ぶのがベターです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなカーボン製三脚の中でまずおすすめしたいのが「<a href="https://www.amazon.co.jp/gp/search?ie=UTF8&amp;keywords=D254C1%2BBH-28L">K&amp;F Concept トラベル三脚（D254C1+BH-28L）</a>」。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>K&amp;F Conceptは高品質な撮影機材を安価に提供してくれているメーカーで高価で手が出しづらいカーボン製三脚をなんと一万円台で購入することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>最大10kgの機材まで乗せることができるので一眼カメラ+望遠レンズのような組み合わせでも問題ありません。また、全高も158cmと高いので様々な撮影シーンで使用することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210304\u0022]","post_id":"10304"} -->
<p>[itemlink post_id="10304"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Manfrotto befree GT XPRO カーボンT三脚キット（MKBFRC4GTXP-BH）</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>カーボン製のトラベル三脚として2つ目におすすめしたいのは、<a href="https://www.amazon.co.jp/dp/B07SW5Z3FD?tag=nightscape-tokyo-22&amp;linkCode=osi&amp;th=1&amp;psc=1">Manfrotto befree GT XPRO カーボンT三脚キット（MKBFRC4GTXP-BH）</a>というアイテム。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>「丈夫な三脚は重い」という常識を覆し、1.76kg・縮長43cmのコンパクトに抑えつつ、約12kgまでの機材積載を可能にしました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記で紹介した三脚の上位互換と呼べるクオリティのアイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>マンフロットは三脚の代表的なメーカーで製品のデザイン自体も非常にかっこいいので機能面もプロダクトデザインも妥協したくないという方におすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210310\u0022]","post_id":"10310"} -->
<p>[itemlink post_id="10310"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">三脚の活用シーン&amp;正しい使い方まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>三脚を用いてカメラを固定すると綺麗な夜景写真が撮れるようになるだけでなく、肉眼では捉えることができない幻想的な光景を写真におさめることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回紹介した正しい使い方を押さえた上でぜひ三脚を活用して様々な写真撮影を楽しんでください！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それでは今日はこの辺で。</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/tripod-setting-11.jpg',
  true,
  '2024-07-22T09:37:49+09:00',
  '2024-07-22T09:37:49+09:00',
  '2025-09-27T08:21:30+09:00'
);

-- FAQs for tripod-setting
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tripod-setting'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 撮影が捗るおすすめカメラホルダー！Peak Design キャプチャー V3レビュー (review-peak-design-camera-clip)
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
  'review-peak-design-camera-clip',
  '撮影が捗るおすすめカメラホルダー！Peak Design キャプチャー V3レビュー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>普段街撮りをする際はネックストラップよりもハンドストラップを使うのが基本スタイル。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>常にカメラを手に持った状態だとシャッターチャンスを見落としづらいからです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただこのスタイル、ふと両手を空けたくなったときにカメラの置き場所に困ってしまうのがネックでした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで今回購入したのが<a href="https://www.amazon.co.jp/dp/B07818LB9D?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">ピークデザイン キャプチャーV3</a>というカメラホルスターです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>スナップ写真の撮影を快適に行うことができるようになる神アイテムだったので紹介したいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210964\u0022]","post_id":"10964"} -->
<p>[itemlink post_id="10964"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">ピークデザイン キャプチャーV3の外観</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回購入したキャプチャー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>便利で使いやすいカメラアクセサリーを数多く手掛けているPeakDesignから発売されているカメラホルスターです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10976,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-package-1024x683.jpg" alt="" class="wp-image-10976"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>早速パッケージを開封すると、付属品がズラリ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10975,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-item-list-1024x683.jpg" alt="" class="wp-image-10975"/></figure>
<!-- /wp:image -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>ピークデザインキャプチャーV3の付属品一覧</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>キャプチャーV3本体</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>プレート</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>マイクロファイバーポーチ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>六角レンチ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ロングクランピングボルト × 2</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>こちらがピークデザインのキャプチャーV3本体。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ブラックとシルバーのカラーバリエーションの中から今回は前者を選択しました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10974,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-v3-image-02-1024x683.jpg" alt="撮影が捗るおすすめカメラホルダー！Peak Design キャプチャー V3レビュー" class="wp-image-10974"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>大きさは4cm × 8.3cmとなっておりとてもコンパクトなサイズ感です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10977,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-size-1024x683.jpg" alt="" class="wp-image-10977"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>こちらはキャプチャーV3とカメラを固定するためのプレート。アルカスイス雲台の三脚にそのまま乗せることができることができるアイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10978,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-plate-01-1024x683.jpg" alt="" class="wp-image-10978"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラバッグのショルダーハーネスはクッション性が強く、厚みがあるとキャプチャーV3が取り付けられない場合が出てきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなときのために付属品にはロングクランピングボルトもついています。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">ピークデザイン キャプチャーV3のメリット</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからは実際にピークデザイン キャプチャーV3を使用してみて感じたメリットを3つ紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">①一瞬でカメラを固定できる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ハンドストラップ派の僕は今まで両手を開けようと思ったら一度カメラバッグにカメラをしまったり、一時的に立てかけられる場所を探さないといけませんでした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな状況もこのアイテムを導入すれば一変。いつでもすっとカメラを固定して両手を空けられるようになりました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このおかげで撮影の合間にちょっとコンビニへ買い物しに行ったり、機材を取り出したりするのが劇的に楽になりました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10973,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-use-01-1024x683.jpg" alt="" class="wp-image-10973"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">②重たい機材を首からかけ続けた時の疲労感を軽減できる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>長時間の間、首からネックストラップ付きのカメラをぶら下げ続けていると首が痛くなってしまったり、何かの拍子にカメラを傷つけてしまう可能性があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>特に重たい機材をつけている時やズームレンズをつけている時は要注意。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、ネックストラップとキャプチャーV3を併用することで、カメラをショルダーに固定できるようになれば上記のような問題を回避できます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>キャプチャーV3は一眼カメラを持つすべての人に有用なアイテムなのではないかと個人的には考えています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10972,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-use-02-1024x683.jpg" alt="" class="wp-image-10972"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">③ベルトにも装着できる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>キャプチャーV3はカメラバッグのショルダーハーネス以外にもベルトに装着することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この使い形ができればカメラバッグを背負っていない状態でもカメラが固定できるので、より幅広いシーンでカメラを持ち歩くことが可能に。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>キャプチャー自体の大きさがコンパクトなのでベルトに固定したまま歩いても、キャプチャー本体が食い込むようなこともなく使いやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10971,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-use-03-1024x683.jpg" alt="" class="wp-image-10971"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ちなみにピークデザインではキャプチャーを腰に装着するときの安定性を高めるアイテムも販売されているので、気になった方は下記アイテムもチェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210965\u0022]","post_id":"10965"} -->
<p>[itemlink post_id="10965"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-5">ピークデザイン キャプチャーV3のデメリット</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>最後にピークデザイン キャプチャーV3を使用してみて感じたデメリットを1つ紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">サードパーティー製プレートだと固定できない</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10969,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-plate-02-1024x683.jpg" alt="" class="wp-image-10969"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>普段三脚はマンフロット befreeアドバンスカーボンT三脚を利用しており、メイン機にはマンフロットRC2とアルカスイスの両互換性があるサードパーティー製プレートを使っています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ピークデザインのキャプチャーはアルカスイスなので問題なく使えると思ったのですが、残念ながらサードパーティ製のプレートではしっかり固定することができませんでした…。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>純正のプレートはアルカスイス互換なのに加えてロックできる特殊な構造をしているようです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記のアイテムはキャプチャーでの固定もマンフロットのRC2規格どちらにも対応しているので、同じような点に躓いた方は別途購入を検討するのがおすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210966\u0022]","post_id":"10966"} -->
<p>[itemlink post_id="10966"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-8">ピークデザイン キャプチャーV3 レビューまとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10968,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-v3-image-01-1024x683.jpg" alt="" class="wp-image-10968"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>手軽にカメラを固定することができるピークデザインのキャプチャーV3をご紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とてもシンプルなアイテムですが、ハンドストラップ派の方もネックストラップ派の方も色々な恩恵を受けることができる魅力的なアイテムで、購入してよかったです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ちょっと値段が張るのがネックではありますが、ワンランク上の撮影環境を手に入れたいという方は導入を検討してみてはいかがでしょうか？</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210964\u0022]","post_id":"10964"} -->
<p>[itemlink post_id="10964"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/08/peakdesign-capture-v3-image-02.jpg',
  true,
  '2024-06-11T18:49:00+09:00',
  '2024-06-11T18:49:00+09:00',
  '2025-09-27T08:21:42+09:00'
);

-- FAQs for review-peak-design-camera-clip
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'review-peak-design-camera-clip'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 東京都庁 南展望室・北展望室 (metropolitan-government-observatory)
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
  'metropolitan-government-observatory',
  '東京都庁 南展望室・北展望室',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '東京都庁 南展望室・北展望室',
  '地上202ｍの高さから東京の街を一望できるの無料展望台。南展望室・北展望室の2つがあり、営業時間や定休日に違いがある。落ち着いて夜景を眺めるなら南展望室がおすすめ。',
  '<p>東京都庁の47階、地上202ｍの高さから東京の街を一望できる都内屈指の無料の展望台。</p>
<p>南と北それぞれに別々の展望フロアが設けられており、営業時間や定休日、フロア内の施設が異なります。</p>

<p>景観に関しては大きな差はなく、下記のような景色がみどころとなっています。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>新宿エリアの高層ビル群</dd>
<dt>南側</dt>
<dd>代々木公園や渋谷方面の街並み</dd>
<dt>東側</dt>
<dd>新宿駅やライトアップされるドコモタワーなど</dd>
<dt>西側</dt>
<dd>三角屋根の新宿パークタワー、東京オペラシティ、富士山など</dd>
</dl>
</div>

<p>日没の前後一時間ほどは展望室専用のエレベーターに行列ができることも多いので、トワイライトタイムに訪れたい方は余裕を持って訪問しましょう。</p>
<p>なお<a href="https://nightscape.tokyo/shinjyuku/tokyo-metropolitan-government-office-tomin-hiroba/">都民広場</a>からは都庁をキャンバスにしたプロジェクションマッピングも毎日実施されているので、併せて立ち寄ってみるのがおすすめです。</p>',
  '東京都新宿区西新宿 2-8-1',
  'https://www.yokoso.metro.tokyo.lg.jp/tenbou/index.html',
  '展望室のご利用案内 | 東京都庁公式サイト',
  'https://twitter.com/tocho_tenbou',
  '都庁展望台公式Twitterアカウント',
  NULL,
  NULL,
  '<ul> <li>北展望台 9:30 ~ 17:30</li> <li>南展望台 9:30 ~ 23:00</li></ul>',
  '<ul><li>北展望台 第2・第4月曜日</li> <li>南展望台 第1・第3火曜日</li></ul>',
  '無料',
  '<ul>
<li>JR「新宿駅」西口から徒歩約10分</li>
<li>大江戸線「都庁前駅」A4出口から直通</li>
</ul>',
  '<ul>
<li>首都高速新宿ランプから300m</li>
<li>都庁第一本庁舎駐車場（237台／有料）</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.500087868784!2d139.69002786525905!3d35.689309480192385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4b71a37a1%3A0xf1665c37f38661e8!2z5p2x5Lqs6YO95bqB!5e0!3m2!1sja!2sjp!4v1673213170816!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '約202m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  5,
  5,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-01.jpg',
  true,
  '2024-07-31T19:39:40+09:00',
  '2024-07-31T19:39:40+09:00',
  '2025-03-02T02:19:08+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for metropolitan-government-observatory
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-01.jpg', '東京都庁展望室から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-04.jpg', '夕暮れ時の富士山', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-06.jpg', '三角屋根がトレードマークの新宿パークタワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-03.jpg', '高さ222mの東京オペラシティと富士山', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-07.jpg', '渋谷方面の高層ビル群と代々木公園', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-05.jpg', '所狭しと高層ビルが建ち並ぶ光景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-08.jpg', 'ライトアップされるドコモタワー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-observatory-station.jpg', '新宿駅方面の景色', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-09.jpg', '東京都庁 南展望室から眺める夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-02.jpg', '東京都庁 南展望室の雰囲気', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/metropolitan-government-2.jpg', '夕暮れ時の新宿の町並み', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/tokyo-metropolitan-government-office-tomin-hiroba-03.jpg', '光量が多く美しい東京都庁', 11);

-- FAQs for metropolitan-government-observatory
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '東京都庁 南展望室・北展望室にはどんな違いがありますか？', '営業時間や定休日、フロア内にあるお店に違いがあります。落ち着いて夜景を眺めるなら南展望室がおすすめです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '東京都庁 南展望室・北展望室はどこから入れますか？', '展望室へは、第一本庁舎1階にある「展望室専用エレベータ」を利用することでアクセスできます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '東京都庁展望室の入場料金はいくらですか？', '南展望室、北展望室ともに無料で入場することができます。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '草間彌生さんがデザインした「おもいでピアノ」が設置されているのは南と北の展望室どちらですか？', 'おもいでピアノは南展望室に設置されています。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '都庁展望室からはどんな景色が楽しめますか？見どころはどこですか？', '東京の中心に広がる明治神宮の緑や、スカイツリーに東京タワー、天気の良いには富士山まで見ることが出来ます。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'metropolitan-government-observatory'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 5);

-- Post: ザ・プリンス パークタワー東京 (the-prince-park-tower-tokyo)
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
  'the-prince-park-tower-tokyo',
  'ザ・プリンス パークタワー東京',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'ザ・プリンス パークタワー東京',
  '東京タワーが目の前に見える贅沢な眺望が魅力の5つ星ホテル。東京タワー側の部屋を確約できるプランもある。',
  '<p>東京タワーのすぐそば、港区立芝公園内という好立地に立つザ・プリンス パークタワー東京。</p>
<p>2005年に開業された地上33階建て、客室603室のホテルで都内の景色を一望することができます。</p>

<div class="definition l-bottom-large">
<p class="definition-title">ザ・プリンス パークタワー東京の眺望</p>
<dl class="definition-body">
<dt>北西側</dt>
<dd>東京タワー、虎ノ門方面のビル群</dd>
<dt>南西側</dt>
<dd>赤羽橋交差点、富士山、港区方面の高層ビル群</dd>
<dt>南東側</dt>
<dd>レンボーブリッジ、湾岸エリアの街並み</dd>
<dt>北東側</dt>
<dd>東京スカイツリー、千代田区方面の街並み</dd>
</dl>
</div>

<p>注目は北西側に広がる東京タワービュー。虎ノ門方面の高層ビル群も立ち並んでおり、これぞ東京という景色を楽しめます。</p>
<p>ホテル内にはレストラン・バーやボウリング場などもあり、設備も充実。</p>
<p>贅沢に東京の夜を味わいたいという方はぜひ宿泊してみてはいかがでしょうか。</p>
<p>なお、ザ・プリンス パークタワー東京の敷地内にある<a href="https://nightscape.tokyo/minato/prince-park-tower-tokyo-ground/">空中庭園</a>は宿泊客以外でも立ち入ることが可能で、こちらからも素敵な夜景を楽しめます。</p>',
  '東京都港区芝公園 4-8-1',
  'https://www.princehotels.co.jp/parktower/',
  'ザ・プリンス パークタワー東京公式サイト',
  'https://www.instagram.com/princeparktowertokyo/',
  'ザ・プリンス パークタワー東京公式インスタグラムアカウント',
  NULL,
  NULL,
  '終日営業',
  NULL,
  NULL,
  '<ul>
<li>JR線「浜松町駅」から徒歩12分</li>
<li>浅草線・大江戸線「大門駅」A6出口から徒歩9分</li>
<li>大江戸線「赤羽橋駅」赤羽橋口から徒歩2分</li>
<li>三田線「芝公園駅」A4出口から徒歩3分</li>
</ul>',
  '-',
  '<iframe title="ザ・プリンス パークタワー東京の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.857178609421!2d139.74513986543994!3d35.65589028020028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ec44a3cbf4f5%3A0xeb0678d2239813f6!2z44K244O744OX44Oq44Oz44K5IOODkeODvOOCr-OCv-ODr-ODvOadseS6rA!5e0!3m2!1sja!2sjp!4v1674382576202!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/tB6eDwPvZVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  5,
  5,
  5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-room-02.jpg',
  true,
  '2024-08-01T18:30:20+09:00',
  '2024-08-01T18:30:20+09:00',
  '2025-02-23T21:27:24+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for the-prince-park-tower-tokyo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-room-02.jpg', 'ザ・プリンス パークタワー東京のコーナールームの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-view-02.jpg', '黄昏時の東京タワー（北西側）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-view-03.jpg', '高層ビルのまばゆい灯り（東側）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-03.jpg', '都道301号と国道1号が混じり合う景色（南西側）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/prince-hotel-62.jpg', '虎ノ門方面の高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/prince-hotel-63.jpg', 'ライトアップされた東京スカイツリー', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-05.jpg', '夕暮れ時の六本木ヒルズ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/restaurant-view-3.jpg', 'ザ・プリンス パークタワー東京から眺める富士山', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-04.jpg', 'ザ・プリンス パークタワー東京のコーナールームの雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/startrail.jpg', '東京タワーの星景写真', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-01-1.jpg', '客室から眺める増上寺', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-06.jpg', '虎ノ門の高層ビル群', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-01.jpg', 'ザ・プリンス パークタワー東京の客室からの眺め', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-room-01.jpg', 'ザ・プリンス パークタワー東京のコーナールームの雰囲気', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/bar-12.jpg', '33F スカイラウンジ ステラガーデンの雰囲気', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/bar-7.jpg', '東京タワーを一望できるスカイラウンジ ステラガーデン', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/restaurant-7.jpg', '33F レストラン ブリーズヴェールの雰囲気', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/restaurant-4.jpg', '33F レストラン ブリーズヴェールの雰囲気', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-02.jpg', 'ザ・プリンス パークタワー東京の館内の様子', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-front.jpg', 'ザ・プリンス パークタワー東京の外観', 19);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shiba-park-1-1.jpg', '芝公園一号地とザ・プリンス パークタワー東京', 20);

-- FAQs for the-prince-park-tower-tokyo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'ザ・プリンス パークタワー東京の客室からはどんな眺望が楽しめますか？', '東京タワーや都内の高層ビル群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'ザ・プリンス　パークタワー東京には、レストランや食事処はありますか？', 'ザ・プリンス　パークタワー東京にはレストランが施設内に複数あります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), 'ザ・プリンス　パークタワー東京は何つ星のホテルですか？', 'ザ・プリンス　パークタワー東京は4つ星を獲得しているホテルです。', 2);

-- Hotel info for the-prince-park-tower-tokyo
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'the-prince-park-tower-tokyo'), '15:00', '12:00', 'シャンプー、コンディショナー、ボディソープ、石鹸、歯ブラシ、ひげそり、ヘアブラシ、シャワーキャップ、綿棒、コットン', '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67930%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで予約する</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fthe-prince-park-tower-tokyo.ja.html" rel="nofollow">Booking.comで予約する</a> <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad380035%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらんnetで予約する</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00000946%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで予約する</a>');

-- Post: 恵比寿ガーデンプレイス 展望台 Top of Yebis (ebis-garden-place-sky-lounge)
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
  'ebis-garden-place-sky-lounge',
  '恵比寿ガーデンプレイス 展望台 Top of Yebis',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '恵比寿ガーデンプレイス 展望台 SKY LOUNGE',
  '東京タワーやレインボーブリッジなどランドマークを一望できる無料展望台。レストランフロアでの食事後に訪れるのがおすすめ。',
  '<p>サッポロビール工場跡地が再開発されて誕生した恵比寿ガーデンプレイス。</p>
<p>38階、39階のレストラン街には2ヶ所の無料展望スペースのSKY LOUNGEが設けられており、東京の町並みを眺めることができます。</p>
<p>展望台からの眺望の特徴は下記の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>東側</dt>
<dd>東京タワーやレインボーブリッジがある港区方面の街並み</dd>
<dt>西側</dt>
<dd>富士山や目黒区方面の街並み</dd>
<dt>北側</dt>
<dd>渋谷や新宿方面の高層ビル群</dd>
</dl>
</div>

<p>特に注目すべきは東側の眺望。遮るものなく東京を代表するランドマークや光量の多い港区の夜景を眺めることができます。</p>
<p>「この夜景を無料で楽しめるなんて…。」と思わず声が出てしまうほど美しいです。</p>
<p>フロア内の照明は控えめな明るさで、落ち着いた雰囲気ですので夜景鑑賞がしやすいのも好印象。</p>
<p>恵比寿ガーデンプレイスで食事やショッピングをした帰りにぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都渋谷区恵比寿 4-20',
  'https://gardenplace.jp/special/top_of_yebisu/',
  '恵比寿ガーデンプレイス | TOP OF YEBIS',
  'https://www.instagram.com/yebisu_garden_place/?hl=ja',
  '恵比寿ガーデンプレイス公式インスタグラム',
  'https://nightscape.tokyo/shibuya/ebis-garden-place-sky-lounge-illumination',
  '恵比寿ガーデンプレイス イルミネーション',
  '11:00～23:30',
  '年1回法定点検日',
  '無料',
  '<ul>
<li>JR山手線「恵比寿駅」から徒歩5分</li>
<li>東京メトロ日比谷線「恵比寿駅」から徒歩7分</li>
</ul>',
  '<ul>
<li>恵比寿ガーデンプレイスの有料駐車場あり</li>
<li>営業時間 7:00～24:00</li>
<li>利用料金 15分毎 160円</li>
</ul>',
  '<iframe title="恵比寿ガーデンプレイス 展望台 Top of Yebisの位置を記したマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.4010865933787!2d139.71097326525768!3d35.642488580203356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b15d77d1725%3A0xb5bcd9d507694b0e!2z5oG15q-U5a-_44Ks44O844OH44Oz44OX44Os44Kk44K544K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1673366059205!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '167m',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/I2AcCRn0F0w?si=Fz3C1-Z5-v4HgsM6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  5,
  4,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-tokyo-tower-01.jpg',
  true,
  '2024-08-07T14:30:54+09:00',
  '2024-08-07T14:30:54+09:00',
  '2025-02-07T17:42:57+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for ebis-garden-place-sky-lounge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-tokyo-tower-01.jpg', '恵比寿ガーデンプレイス・スカイラウンジから眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-tokyo-tower-02.jpg', 'スカイラウンジから眺める六本木方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ebis-garden-place-6.jpg', '六本木ヒルズと六本木ヒルズレジデンスの夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-tokyo-shinjyuku.jpg', 'スカイラウンジから眺める新宿方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ebis-garden-place-7.jpg', '麻布台ヒルズと虎ノ門方面の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ebis-garden-place-4.jpg', '首都高速道路と恵比寿周辺の街並み', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-3.jpg', 'ライトアップされる東京タワーと港区の街並み', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-2.jpg', 'ライトアップされる東京スカイツリー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-rainbow-bridge.jpg', 'スカイラウンジから眺めるレインボーブリッジ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-4.jpg', '目黒区方面の夜景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-shibuya-1.jpg', 'スカイラウンジから眺める渋谷方面の夜景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-fuji.jpg', 'スカイラウンジから眺める富士山', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-sunset.jpg', 'スカイラウンジから眺める夕景', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-02.jpg', '新宿方面の街並み', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-03.jpg', '夕日に染まる東京タワー', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-04.jpg', '港区方面の街並み', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-observation.jpg', '恵比寿ガーデンプレイス・スカイラウンジの雰囲気', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ebis-garden-place-2.jpg', '恵比寿ガーデンプレイス・エレベータ付近の展望エリア', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ebis-garden-place-3.jpg', '恵比寿ガーデンプレイス レストラン街の雰囲気', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-garden-place-entire.jpg', '恵比寿ガーデンプレイスの外観', 19);

-- FAQs for ebis-garden-place-sky-lounge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), '恵比寿ガーデンプレイスの夜景が見える展望スペースは何階ですか？', '38階・39階に無料の展望スペースがあります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), '恵比寿ガーデンプレイスからはどんな夜景が眺められますか？', '渋谷や新宿方面の高層ビル群の夜景や東京タワーや東京スカイツリー、レインボーブリッジといったランドマークを眺めることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge'), '三脚を使っての写真撮影は可能ですか？', '2025年より三脚を用いた撮影は禁止となりました。', 2);

-- Post: 隅田川大橋 (symida-river-bridge)
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
  'symida-river-bridge',
  '隅田川大橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  '隅田川大橋',
  '青く輝く永代橋と月島の高層マンション群が美しい夜景スポット。多くの遊覧船が行き来するので美しい露光写真が撮れる場所としてフォトグラファーにも人気。',
  '<p>首都高速9号深川線の高架と一体化して建設された長さ約400mの隅田川大橋。</p>
<p>首都高9号深川線の真下を歩いて渡ることができるようになっており、南側、北側の夜景を楽しむことができます。</p>

<div class="definition l-bottom-large">
<p class="definition-title">隅田川大橋の眺望</p>
<dl class="definition-body">
<dt>南側</dt>
<dd>ブルーにライトアップされる永代橋と月島の高層マンション群</dd>
<dt>北側</dt>
<dd>ライトアップされた東京スカイツリーや清洲橋</dd>
</dl>
</div>

<p>歩行者道はかなり広めに作られているので、ゆったり夜景鑑賞するのに最適ですし、隅田川大橋周辺には複数の魅力的な橋があります。</p>
<p>散歩がてら夜景スポット巡りをするのも良いかもしれません。</p>
<p>ちなみに永代橋や清洲橋がライトアップされるのは日没の15分後から23時まで。比較的夜遅くまでライトアップを楽しめるのも嬉しいポイントです。</p>',
  '東京都中央区日本橋箱崎町',
  'https://nightscape.tokyo/pickup/sumida-river-bridge/',
  '隅田川に架かる橋のライトアップ',
  NULL,
  NULL,
  NULL,
  NULL,
  '24時間',
  'なし',
  '無料',
  '<ul>
<li>メトロ半蔵門線「水天宮前駅」約7分</li>
<li>メトロ日比谷線ほか「茅場町駅」から徒歩約11分</li>
<li>メトロ東西線ほか「門前仲町駅」 から徒歩約11分</li>
</ul>',
  '<ul>
<li>無し（近隣の有料駐車場を利用）</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12963.693237767813!2d139.7891619!3d35.6788903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdc41a87fd748f1c!2z6ZqF55Sw5bed5aSn5qmL!5e0!3m2!1sja!2sjp!4v1673223549800!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.2,
  3,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-3.jpg',
  true,
  '2024-08-01T18:36:45+09:00',
  '2024-08-01T18:36:45+09:00',
  '2025-03-03T14:15:46+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for symida-river-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-3.jpg', '隅田川大橋の夜景（南側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/smida-river-bridge-2.jpg', '隅田川大橋の夜景（北側）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-8.jpg', '隅田川大橋から眺めるライトアップされた清洲橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-5.jpg', '隅田川テラスの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-6.jpg', '隅田川テラスと永代橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-10.jpg', '隅田川大橋の歩行者用の道', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/sumidabashi-bridge-7.jpg', 'ブルーに輝く永代橋', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/08/eidaibashi-bridge-2.jpg', '隅田川大橋の雰囲気', 7);

-- FAQs for symida-river-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), 'どんな夜景が見れますか？', '南側はブルーにライトアップされる永代橋と月島の高層マンション群、北側はライトアップされた東京スカイツリーや清洲橋を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), '永代橋のライトアップは何時までですか？', '日没の15分後から23時までが永代橋のライトアップ時間です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), '東京スカイツリーのライトアップは何時まで実施されていますか？', 'ライトアップの時間は日没〜24時までとなっています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), '隅田川に架かる橋はいくつありますか？', '隅田川に架かる橋は15ヶ所にあります。築地大橋・勝鬨橋・佃大橋・中央大橋・永代橋・隅田川大橋・新大橋・清洲橋・両国橋・蔵前橋・厩橋・駒形橋・吾妻橋・言問橋・桜橋が該当します。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'symida-river-bridge'), '隅田川大橋は徒歩や自転車で渡ることは可能ですか？', '歩行者専用通路が用意されているので徒歩や自転車で渡ることが可能です。', 4);

-- Post: 東京タワー 展望台 メインデッキ&トップデッキ (tokyo-tower-observatory)
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
  'tokyo-tower-observatory',
  '東京タワー 展望台 メインデッキ&トップデッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '東京タワー 展望台 メインデッキ&トップデッキ',
  '150m、250mの高さから都内を一望できる展望台。SNSでも話題の「もう一つの東京タワー」や虎ノ門方面の高層ビル群が見どころ。',
  '<p>昭和33年に建てられた日本初の本格的な夜景展望台。開業から60年以上経った今でも、東京を代表するランドマークとして愛され続けています。</p>

<p>2018年にリニューアルオープンがなされ、大展望台から「メインデッキ」に名称変更。日本人だけではなく、多くの訪日外国人で賑わいを見せています。私が訪れた週末の夜も、様々な言語が飛び交う国際色豊かな雰囲気でした。</p>

<p>360度、東京の街並みを堪能することができるのが特徴で、各方角下記のような見所があります。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>麻布台ヒルズをはじめとした虎ノ門の高層ビル群が織りなすビル夜景を楽しめる</dd>
<dt>南側</dt>
<dd>都道301号が国道1号に合流してタワーのような形を描くことから「もう一つの東京タワー」とSNS上で話題になった景観が楽しめる</dd>
<dt>東側</dt>
<dd>ライトアップされたレインボーブリッジや増上寺、芝公園などを眺めることができる</dd>
<dt>西側</dt>
<dd>富士山や六本木ヒルズをはじめとした高層ビル群を眺めることができる</dd>
</dl>
</div>

<p>ちなみに東京タワーにはメインデッキとは別に250mの高さから東京の街並みを見下ろせるトップデッキもあります。事前予約制で人数が限られているため、メインデッキに比べてゆったりと過ごせるのがポイントです。</p>

<p>落ち着いて夜景鑑賞がしたい、圧倒的な高さからの景観を楽しみたいという方はこちらもおすすめです。</p>',
  '東京都港区芝公園 4-2-8',
  'https://www.tokyotower.co.jp/observatory/',
  '東京タワー展望台公式サイト',
  'https://twitter.com/tokyotower_333',
  '東京タワー展望台 Twitterアカウント',
  'https://nightscape.tokyo/tag/tokyo-tower/',
  '【保存版】東京タワーの写真撮影スポットまとめ',
  '9:00~22:30 (最終入場 22:00）',
  'なし',
  '<ul>
<li>大人1,200円</li>
<li>高校生1,000円</li>
<li>小中学生700円</li>
<li>未就学児（4歳〜）500円</li>
</ul>',
  '<ul>
<li>大江戸線 赤羽橋駅・赤羽橋口から徒歩5分</li>
<li>日比谷線 神谷町駅・1番出口から徒歩7分</li>
<li>三田線 御成門駅・A1から徒歩6分</li>
<li>三田線 芝公園駅・A4から徒歩10分</li>
</ul>',
  '<ul>
<li>東京タワーに隣接する地上駐車場と地下駐車場 あり</li>
<li>最初の1時間 / 600円。以降30分毎に300円追加</li>
<li>駐車場営業時間 / 9:00～23:00（最終入場22:30）</li>
</ul>',
  '<iframe title="東京タワー展望台の位置を記した地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12966.991898658345!2d139.7454329!3d35.6585805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1673205470334!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  'メインデッキ 150m、トップデッキ 250m',
  NULL,
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F22028&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天観光トラベルで東京タワーの入場券を賢く購入</a>',
  NULL,
  35.658581,
  139.745433,
  5,
  4.5,
  4.9,
  3.1,
  'https://nightscape.tokyo/wp-content/uploads/2024/07/TOKYOTOWER-1.jpg',
  true,
  '2024-07-31T00:59:26+09:00',
  '2024-07-31T00:59:26+09:00',
  '2026-01-27T08:54:35+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for tokyo-tower-observatory
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-1.jpg', '東京タワー 展望台 メインデッキ&トップデッキから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-02-1.jpg', '富士山と麻布周辺の街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-16.jpg', 'もう一つの東京タワー（赤羽橋交差点）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-17.jpg', '三田・田町駅周辺の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-8.jpg', '六本木ヒルズと外苑東通りの夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-1-1.jpg', '麻布台ヒルズと虎ノ門の高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-9.jpg', '東京タワーから眺める麻布台ヒルズ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-20.jpg', '芝給水所公園と虎ノ門方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-13.jpg', '虎ノ門方面の高層ビル群とプリンスホテル', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-12.jpg', '晴海エリアのタワーマンション群', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-toweraa-1.jpg', '隅田川にかかる築地大橋', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-15.jpg', '増上寺と芝公園', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-14.jpg', 'レインボーブリッジとお台場の街並み', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-towera-1.jpg', 'ライトアップされるレインボーブリッジ', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-19.jpg', '芝公園 19号地(もみじ谷エリア)の夜景', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyo-tower-2.jpg', '東京タワー 展望台 メインデッキから眺める夕日', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-1.jpg', '東京タワー 展望台メインデッキの雰囲気', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tower-1.jpg', '東京タワーメインデッキ内にある神社・タワー大神宮', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tower-2.jpg', 'メインデッキ1階にあるガラスの床（スカイウォークウィンドウ）', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-observatory-07.jpg', '東京タワー展望台のエントランス', 19);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-23.jpg', '真下から見上げる東京タワー', 20);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tower-3.jpg', '増上寺と芝公園', 21);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tower.jpg', '麻布台ヒルズをはじめとした虎ノ門方面の摩天楼', 22);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tower-fujisan.jpg', '富士山と麻布方面の都市風景', 23);

-- FAQs for tokyo-tower-observatory
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '東京タワー展望台の入場料を安くする方法はありますか？', 'アソビューで事前予約をすると入場料を割り引くことが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '東京タワーの展望台の高さは何メートルですか？', 'メインデッキは150m、トップデッキは250mとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '東京タワーの透明な床（スカイウォークウィンドウ）はどこにありますか？', 'メインデッキ1階に4箇所設置されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '東京タワー展望台を観光する場合の所要時間（滞在時間）はどれくらいですか？', 'ゆっくり夜景を楽しみ、お土産コーナーなどをみて回る場合は1時間ほど、フロア内で食事などをする場合は2時間ほどが目安です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '三脚の使用は禁止されていますか？', 'メインデッキでは三脚の使用は禁止されていません。マナーを守って撮影を楽しみましょう。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-tower-observatory'), '東京タワーメインデッキ&トップデッキからはどんな景色を眺めることができますか？', '虎ノ門方面や晴海エリアの高層ビル群、富士山やレインボーブリッジなどのランドマークなどを眺めることができます。', 5);

-- Post: 文京シビックセンター 展望台 (civic-bunkyo)
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
  'civic-bunkyo',
  '文京シビックセンター 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'bunkyo'),
  NULL,
  '文京シビックセンター 展望台',
  '新宿副都心方面の摩天楼と富士山の共演が美しい無料の展望台。人の数も落ち着いており、館内の照明も暗めなのでゆっくり夜景鑑賞するのに最適。',
  '<p>文京区役所や文化ホールが入る公共施設である、文京シビックセンター。</p>
<p>同ビルの25階には無料で入場できる展望ラウンジがあります。</p>
<p>展望ラウンジの高さは、地上約105メートルとなっており、東京の街並みを一望することが可能です。各方角の見所は下記の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>サンシャインシティをはじめとした池袋方面の街並み</dd>
<dt>南側</dt>
<dd>東京ドームシティ、千代田区方面の高層ビル群</dd>
<dt>東側</dt>
<dd>ライトアップされた東京スカイツリー、上野・浅草方面の街並み</dd>
<dt>西側</dt>
<dd>富士山、新宿方面の高層ビル群</dd>
</dl>
</div>
<p>注目は西側の眺め。新宿副都心方面のビル群の富士山が重なり合う光景がとても美しいです。毎年2月2日頃と11月9日頃ごろにダイアモンド富士を眺めることもできます。</p>
<p>展望ラウンジの窓ガラスは斜めになっており、室内の映り込みが少なく夜景鑑賞にも最適。</p>
<p>東京ドーム周辺の観光に訪れた際にぜひ立ち寄ってみてはいかがでしょうか？</p>',
  '東京都文京区春日 1-16-21',
  'https://www.city.bunkyo.lg.jp/bunka/kanko/osusume/lounge.html',
  '文京シビックセンター展望ラウンジ 公式サイト',
  NULL,
  NULL,
  'https://b-kanko.jp/spot/241',
  'シビック文京 | 文京区観光協会',
  '9:00～20:30',
  '年末年始(12月29日～翌年1月3日）',
  '無料',
  '<ul>
<li>東京メトロ丸ノ内線・南北線「後楽園」駅より徒歩1分</li>
<li>都営三田線・大江戸線「春日」駅より徒歩1分</li>
<li>JR総武線「水道橋」駅より徒歩9分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="文京シビックセンター 展望台の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25915.662844147402!2d139.7320516469967!3d35.71495668457075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c3800dda68f%3A0xb155f68356a336d0!2z5paH5Lqs44K344OT44OD44Kv44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1701593573915!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '約105m',
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.5,
  3.5,
  4.1,
  4.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/civic.jpg',
  true,
  '2024-08-01T16:10:31+09:00',
  '2024-08-01T16:10:31+09:00',
  '2025-03-02T18:22:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for civic-bunkyo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/civic.jpg', '新宿副都心方面の摩天楼と富士山の共演', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-3.jpg', '文京シビックセンター展望ラウンジから眺める夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-2.jpg', 'サンシャイン60などが建ち並ぶ池袋方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-13.jpg', '文京シビックセンター展望ラウンジから眺める東京スカイツリー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-5.jpg', '文京シビックセンター展望ラウンジから眺め', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-11.jpg', 'サンシャイン60などが建ち並ぶ池袋方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-6.jpg', '凸版印刷のビルと首都高速道路', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-12.jpg', '文京シビックセンター展望ラウンジから眺める銀杏並木道', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-2.jpg', '夕暮れ時の新宿方面の街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-1.jpg', '文京区立礫川公園から眺める文京シビックセンター', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-bunkyo-1.jpg', '文京シビックセンター展望ラウンジの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-1-1.jpg', '文京シビックセンターから見る池袋方面の景色', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-2-1.jpg', '文京シビックセンターから見る浅草方面の景色', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/civic-3.jpg', '文京シビックセンター展望ラウンジの雰囲気', 13);

-- FAQs for civic-bunkyo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), 'どんな夜景が楽しめますか？見どころはどこですか？', '新宿副都心方面の摩天楼と富士山の共演や登場スカイツリーなどを眺めることができます', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), '文京シビックセンター展望ラウンジからダイアモンド富士を眺められるのはいつですか？', '毎年2月2日頃と11月9日頃ごろにダイアモンド富士を眺めることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), '文京シビックセンター展望ラウンジの入場料はいくらですか？', '文京シビックセンター展望ラウンジは無料で入場することが可能です。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), '文京シビックセンター展望ラウンジは閉鎖されていませんか？', '文京シビックセンター議場特定天井の改修工事のため閉鎖されていましたが、  令和5年5月17日（水曜日）に営業を再開しました。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'civic-bunkyo'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 4);

-- Post: テレコムセンター 展望台 ViewTokyo (telecom-center)
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
  'telecom-center',
  'テレコムセンター 展望台 ViewTokyo',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  'テレコムセンター 展望台 ViewTokyo',
  '東京タワーとレインボーブリッジの共演が美しい穴場の展望台。休日でも人の数は少なく落ち着いて夜景鑑賞できるのでデート利用におすすめ。',
  '<p>ゆりかもめ線「テレコムセンター」駅直結の商業ビルであるテレコムセンター。</p>
<p>同ビルの21Fには日本夜景遺産にも登録されている展望ラウンジがあり、99mの高さから下記のような眺めを堪能することができます。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北西側</dt>
<dd>ライトアップされた東京タワーやレインボーブリッジ、港区方面街並みなど</dd>
<dt>北東側</dt>
<dd>ゆりかもめ線を行き交う電車、湾岸エリアの街並み、東京スカイツリーなど</dd>
<dt>東側</dt>
<dd>東京ビッグサイト、有明埠頭など</dd>
<dt>南側</dt>
<dd>ライトアップされる東京ゲートブリッジ、東京湾など</dd>
</dl>
</div>
<p>北西側の東京タワーとレインボーブリッジが重なり合う光景はまるで絵に書いたような美しさがあります。</p>
<p>都内の有料展望台は休日はどこも多くの人で賑わいますが、この展望ラウンジはいつ訪れても人が少なく落ち着いています。</p>
<p>広々とした館内は暗めのフットライトのみで雰囲気もよく、デートで訪れるのに最適な穴場の夜景スポットです。</p>',
  '東京都江東区青海 2-5-10',
  'https://viewtokyo.com/',
  'テレコムセンター展望室ラウンジ公式サイト',
  'https://twitter.com/ViewTOKYOcom',
  'テレコムセンター展望室ラウンジ Twitterアカウント',
  NULL,
  NULL,
  '<ul><li>平日 15:00～20:00</li><li>休日 11:00 ~ 20:00</li></ul>',
  '12月29日～1月3日',
  '<ul>
<li>大人500円</li>
<li>子供300円</li>
</ul>',
  '<ul>
<li>ゆりかもめ線「テレコムセンター駅」直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="テレコムセンター展望台の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12973.66537500136!2d139.7804881!3d35.6174613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018620776c64699%3A0xd5e5d377189a0ef9!2z44OG44Os44Kz44Og44K744Oz44K_44O8IOWxleacm-WupA!5e0!3m2!1sja!2sjp!4v1678557490991!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '99ｍ',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/VVPF0Wu996w?si=I2FBnX6ffJ3alF-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.2,
  2.8,
  5,
  5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center0thumb-1.jpg',
  true,
  '2024-07-31T19:46:40+09:00',
  '2024-07-31T19:46:40+09:00',
  '2024-09-06T17:20:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'gate-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for telecom-center
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center0thumb-1.jpg', '東京タワーとレインボーブリッジが重なり合う光景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center-4.jpg', '港区方面のビル夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-6.jpg', 'お台場方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-7.jpg', 'ゆりかもめ線を行き交う電車', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center-9.jpg', 'ライトアップされる東京ゲートブリッジ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-8.jpg', '新木場方面の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/telecom-center-05.jpg', 'レインボーブリッジのブルーライトアップ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-4.jpg', '東京タワーとレインボーブリッジが重なり合う光景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center-1.jpg', 'テレコムセンター展望室からの眺め', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center-2.jpg', '東京湾と東京ゲートブリッジ', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-2.jpg', 'テレコムセンター展望室ラウンジの様子', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/telecom-center-3.jpg', 'テレコムセンター展望室ラウンジの様子', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-10.jpg', 'テレコムセンター展望室ラウンジの券売機', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/telecom-center-9.jpg', 'テレコムセンターの外観', 13);

-- FAQs for telecom-center
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'どんな夜景が楽しめますか？', 'ライトアップされるレインボーブリッジや東京タワー、お台場方面の夜景を楽しむことが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), 'テレコムセンター展望室ラウンジへはどのようにアクセスすることができますか？', 'テレコムセンタービルに展望室専用エレベーターからアクセスすることが出来ます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'telecom-center'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 六本木ヒルズ 展望台 東京シティビュー&スカイデッキ (tokyo-city-view)
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
  'tokyo-city-view',
  '六本木ヒルズ 展望台 東京シティビュー&スカイデッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '六本木ヒルズ 展望台 東京シティビュー&スカイデッキ',
  '海抜250mの高さから東京の街並みを見渡せる、都内随一の夜景スポット。屋上展望施設のスカイデッキも魅力。',
  '<p>六本木ヒルズ52階にある展望台、東京シティビュー。</p>
<p>海抜250メートルの高さからどこまでも広がる東京の夜景を一望できる、都内随一の人気を誇る展望台です。</p>
<p>各方角の見どころは下記の通り。</p>
<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>新宿エリアの高層ビル群、新宿御苑、国立美術館、千代田区周辺のビル夜景など</dd>
<dt>東側</dt>
<dd>東京タワー、レインボーブリッジ、東京ゲートブリッジ、港区方面の街並みなど</dd>
<dt>西側</dt>
<dd>富士山、渋谷エリアの高層ビル群、首都高速道路を行き交う車など</dd>
</dl>
</div>

<p>54階に屋上展望施設の東京スカイデッキもあり、解放感を味わいながら都心の夜景を味わうのもおすすめです。</p>

<p>なお同フロア内では展示会が行われているのに加え、森美術館も併設されています。</p>
<p>夜景と共に時期ごとのイベントごとも楽しめるので、気になるイベントや展示がある時に訪れてみてはいかがでしょうか。</p>',
  '東京都港区六本木 6-10-1',
  'https://tcv.roppongihills.com/jp/index.html',
  '東京シティビュー公式サイト',
  'https://twitter.com/tokyo_cityview',
  '東京シティビュー公式Twitterアカウント',
  'https://www.instagram.com/tokyocityview/',
  '東京シティビュー公式インスタグラムアカウント',
  '<ul> <li>東京シティビュー 10:00～22:00</li> <li>スカイデッキ 11:00～20:00</li> </ul>',
  'なし',
  '<ul>
<li>一般 2,200円</li>
<li>学生（高校・大学生）1,400円</li>
<li>子供（4歳～中学生）900円</li>
<li>シニア（65歳以上）1,900円</li>
</ul>',
  '<ul>
<li>日比谷線「六本木駅」1C出口から徒歩3分</li>
<li>大江戸線「六本木駅」3出口から徒歩6分</li>
<li>大江戸線「麻布十番駅」7出口から徒歩9分</li>
<li>千代田線「乃木坂駅」5出口から徒歩10分</li>
</ul>',
  '<ul>
<li>六本木ヒルズ内に駐車場あり</li>
<li>利用時間：24時間</li>
<li>駐車料金：P・P1～P12駐車場　300円／30分（600円／時間）</li>
<li>1日料金：全日3,000円／24時間まで</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.676305655217!2d139.72785926522113!3d35.66034595764503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b828453ffff%3A0xb8603beeb9b150d8!2z5YWt5pys5pyo44OS44Or44K6IOajruOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1673793277969!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '250メートル',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/n0j3lWFRt2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F21992&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天観光トラベルで入場券をお得に購入する</a>',
  NULL,
  null,
  null,
  5,
  5,
  4,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-01.jpg',
  true,
  '2024-07-31T19:52:49+09:00',
  '2024-07-31T19:52:49+09:00',
  '2024-09-06T17:20:08+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'gate-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for tokyo-city-view
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-01.jpg', '渋谷の高層ビル群のと富士山の夜景（西側）', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-02.jpg', 'ライトアップされた東京タワーと東京湾の夜景（南東）', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-06.jpg', '霞が関・虎ノ門方面の高層ビル群の夜景（東）', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-03.jpg', '東京ゲートブリッジと東京湾の夜景（南側）', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-04.jpg', '新宿御苑と新宿の高層ビル群の夜景（北）', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-05.jpg', '新宿の高層ビル群の夜景（北）', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-1.jpg', 'ライトアップされるレインボーブリッジ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-2.jpg', 'ライトアップされる東京ゲートブリッジ', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-07-1.jpg', '東京シティビュー館内の様子', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/roppongi-hills-day-01.jpg', '六本木ヒルズの外観', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/roppongi-hills-day-02.jpg', '東京タワーと東京湾の景色', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/roppongi-hills-day-03.jpg', '新宿の高層ビル群の景色', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-4.jpg', '霞が関・虎ノ門方面の高層ビル群の景色', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-5.jpg', '国立新美術館と乃木坂周辺の景色', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-6.jpg', '六本木ヒルズ 展望台 スカイデッキ（屋上）の雰囲気', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-city-view-7.jpg', 'お台場方面の街並み', 15);

-- FAQs for tokyo-city-view
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), 'どんな夜景が楽しめますか？', '東京タワーやレインボーブリッジといったランドマークや渋谷や新宿の高層ビル群などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), '東京シティビューの滞在時間に制限はありますか？', '時間制限はありません。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), '東京シティビューの入場料を割引するにはどうしたらいいですか？', '公式サイトの事前チケットを購入することで200円の割引を受けることが可能です。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), '東京シティビューの年間パスポートはいくらですか？どんなメリットがありますか？', '6,600円（税込）で購入することができます。同伴者1名様は優待料金で入館が可能になったり、ミュージアムショップのお会計が10％OFFになるメリットがあります。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), '東京タワーのライトアップは何時まで？', '日没から24時まで点灯しています。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-city-view'), '東京シティビューは三脚を使って夜景を撮ることができますか？', 'スカイデッキでは三脚の使用は禁止されています。シティビューでは混雑時やイベント開催時には禁止となる場合があります。', 5);

-- Post: トワイライトタイム（マジックアワー）の意味を解説！夜景が最も綺麗に見える魔法の30分を楽しもう。 (twilight)
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
  'twilight',
  'トワイライトタイム（マジックアワー）の意味を解説！夜景が最も綺麗に見える魔法の30分を楽しもう。',
  'spot',
  (SELECT id FROM categories WHERE slug = 'pickup'),
  '<!-- wp:paragraph -->
<p>綺麗な夜景を眺めることができる魔法の時間であるトワイライトタイム。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>普段、夜景写真を撮り歩いているフォトグラファーにとってこの時間はとても特別な時間です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事ではそんなトワイライトタイムに関するよくある疑問を解説していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">トワイライトタイム（マジックアワー）とは</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>トワイライトタイム（マジックアワー）は、日没の20分後〜50分後頃までの薄暮の時間帯を指します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ロイヤルブルーの空や街明かりが徐々に浮かび上がる光景は思わずため息が出るような美しさがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記は<a href="https://nightscape.tokyo/chiyoda/marubiru-f35/">丸ビル35階</a>からトワイライトタイムと完全に空が暗くなった時に撮影した写真。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>完全に空が暗くなったときの景色は富士山が見えなくなってしまったりお堀の水の色が空と同化してしまい、奥行き感が失われてしまっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それに対してマジックアワーは、空と街並みが同化しておらず、とても美しい景色に見えるのがわかります。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":1852,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/twilight-sample-01-1024x576.jpg" alt="" class="wp-image-1852"/><figcaption class="wp-element-caption">トワイライトタイムの夜景</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":1853,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/twilight-sample-02-1024x576.jpg" alt="" class="wp-image-1853"/><figcaption class="wp-element-caption">日が沈みきった後の夜景</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:paragraph -->
<p>タイムラプス映像を見ると、トワイライトタイムの夜景の美しさをより感じていただけるかと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://youtu.be/U8xj7HCu-wc","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/U8xj7HCu-wc
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>どうですか？めちゃくちゃキレイですよね…！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>せっかく夜景スポットを訪れるなら、ぜひこのトワイライトタイム（マジックアワー）のタイミングを逃さずに、美しい景色を眺めてほしいです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">トワイライトタイムが綺麗に見える条件</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>マジックアワーの綺麗な空は天気が良ければいつでも見れるわけではありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>冬の空気が澄んでいる時期や雨上がりや台風が去り、大気のチリが洗い流されている時が綺麗なマジックアワーを眺めることができる条件です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記は夏の台風一過のあとに荒川の河川敷で撮影したマジックアワーの写真。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>台風によって大気のチリが流されたことで、夏の時期には珍しく綺麗なマジックアワーの景色を捉えることができました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":30,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/arakawa-yotugibashi-07-1024x683.jpg" alt="ライトアップされた東京スカイツリーと木根川橋" class="wp-image-30"/><figcaption class="wp-element-caption">ライトアップされた東京スカイツリーと木根川橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">日の出・日の入りの方角を調べる方法</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>マジックアワーを眺めるためには朝日が昇る方角や夕陽が沈む方角をしっかり確認しておくのも大事です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://nightscape.tokyo/simulator/">日の出・日の入り方角シミュレーター</a>を使うと簡単にそれらが実現するので、気になった方はぜひチェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8416,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/07/map-1024x546.jpg" alt="" class="wp-image-8416"/><figcaption class="wp-element-caption">日の出・日の入り方角シミュレーター</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">トワイライトタイム（マジックアワー）に関するよくある質問</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<dl class="faq">
  <dt>マジックアワーとはどんな時間を指しますか？</dt>
  <dd>マジックアワーは日没の20分後〜50分後頃までの薄暮の時間帯を指します。</dd>
  
  <dt>マジックアワーが訪れるのが一番遅い日はいつですか？</dt>
  <dd>夏至（6/22）が一番マジックアワーが遅い日です。</dd>
  
  <dt>マジックアワーが訪れるのが一番早い日はいつですか？</dt>
  <dd>冬至（12/22）が一番マジックアワーが早い日です。</dd>
  
  <dt>マジックアワーとブルーアワー（ブルーモーメント）の違いを教えてください</dt>
  <dd>マジックアワーが終わってからの15分間ほどをブルーアワー（ブルーモーメント）といいます。</dd>
  
  <dt>綺麗なマジックアワーを眺めることができる条件は？</dt>
  <dd>雨上がりや台風が去り、大気のチリが洗い流されている時に綺麗なマジックアワーを期待できます。</dd>

  <dt>マジックアワーの別の言い方を教えてください。</dt>
  <dd>夕映え、暮相、彼は誰時、夕まぐれ、薄明、黄昏、夕闇といった表現の仕方もあります。</dd>
</dl>

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FAQPage",
  "description": "マジックアワーに関するよくある質問",
  "mainEntity":
  [
    {
      "@type": "Question",
      "name": "マジックアワーとはどんな時間を指しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "マジックアワーは日没後から約30分間の薄暮の時間帯を指します。"
      }
    },
    {
      "@type": "Question",
      "name": "マジックアワーが訪れるのが一番遅い日はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "夏至（6/22）が一番マジックアワーが遅い日です。"
      }
    },
    {
      "@type": "Question",
      "name": "マジックアワーが訪れるのが一番早い日はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "冬至（12/22）が一番マジックアワーが早い日です。"
      }
    },
    {
      "@type": "Question",
      "name": "マジックアワーとブルーモーメントの違いを教えてください",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "マジックアワーが終わってからの15分間ほどをブルーモーメントといいます。"
      }
    },
    {
      "@type": "Question",
      "name": "綺麗なマジックアワーを眺めることができる条件は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "雨上がりや台風が去り、大気のチリが洗い流されている時に綺麗なマジックアワーを期待できます。"
      }
    },{
      "@type": "Question",
      "name": "マジックアワーの別の言い方を教えてください",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "夕映え、暮相、彼は誰時、夕まぐれ、薄明、黄昏、夕闇といった表現の仕方もあります。"
      }
    }
  ]
}
</script>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">トワイライトタイム（マジックアワー）に夜景鑑賞してみよう</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":6234,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/tokyo-skytree-1-1024x683.jpg" alt="東京スカイツリー 展望回廊&amp;展望デッキの夜景" class="wp-image-6234"/><figcaption class="wp-element-caption">東京スカイツリーから撮影したマジックアワーの景色</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>トワイライトタイムの説明と東京都の月別のトワイライトタイムの目安をご紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>あっという間に過ぎ去ってしまう一瞬の光景は何度眺めても飽きない美しさがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夜景スポットを訪れる際は、ぜひトワイライトタイムに合わせて行動してみて下さい。</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-13.jpg',
  true,
  '2024-07-29T10:23:33+09:00',
  '2024-07-29T10:23:33+09:00',
  '2024-07-30T18:26:16+09:00'
);

-- FAQs for twilight
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'twilight'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 一眼カメラで綺麗な夜景写真を撮影する方法まとめ！設定・撮影テクニック解説 (how-to-night-photo)
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
  'how-to-night-photo',
  '一眼カメラで綺麗な夜景写真を撮影する方法まとめ！設定・撮影テクニック解説',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>一眼レフカメラやミラーレスを使い始めたばかりの方の中には「<strong>夜景って撮るのが難しい・・・。</strong>」と苦手意識を持っている方も多いのではないでしょうか。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>確かに日中に比べると、ある程度カメラの設定を理解していないと綺麗な写真が撮れないので、難易度が上がるのは事実です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、夜景を撮るために抑えるべきポイントは意外とシンプル。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮り方のコツを覚えてしまえば、目の前に広がる美しい景色を綺麗に切り取ることができるようになります!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで今回は初心者の方向けに<strong>綺麗な夜景を撮るためのカメラの設定やテクニック</strong>をシェアしていきたいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="cta" style="background-color:#fff;"><div class="cta-logo-container"><img class="cta-logo" src="https://nightscape.tokyo/wp-content/uploads/2023/12/goopass-thumb-1.jpg" alt="GOOPASSのサムネイル"></div><div>
    <div class="l-bottom-medium cta-text">
      <p class="l-bottom-medium text-xlarge"><b>【PR】カメラ機材のレンタルならGOOPASS</b></p>
      <p class="l-bottom-small">カメラ関連の機材は高価なので気軽に購入するのが難しいです。そこでおすすめなのが日本最大級のカメラ・レンズのレンタルサービスの「GOOPASS」。</p>
      <p class="l-bottom-small">購入前に使用感を確かめたい方や大事な撮影前にスポットで機材が必要な方はチェックしてみて下さい。</p>
    </div>
    <div class="cta-btn-container">
      <a class="cta-btn l-bottom-medium" href="https://act.gro-fru.net/ad5bd9cGM8364M65/cl/?bId=64eVaa66" rel="sponsored noopener" target="_blank">GOOPASS公式サイトを見る</a>
    </div>
  </div>
</div>
<!-- /wp:html -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">三脚撮影と手持ち撮影のそれぞれのメリット・デメリット</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>夜景を撮影する際には下記の2つの種類があります。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>三脚を利用で撮影する</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>手持ちで撮影する</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>どちらの方法で撮影するかで、カメラの設定が全く違ってくるので、具体的な説明の前に両者の撮影方法のメリット・デメリットをみていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false,"className":"is-thead-centered"} -->
<figure class="wp-block-table is-thead-centered"><table><thead><tr><th></th><th>三脚で撮影</th><th>手持ちで撮影</th></tr></thead><tbody><tr><td>機動性</td><td>△</td><td>◯</td></tr><tr><td>画質</td><td>◯</td><td>△</td></tr><tr><td>表現</td><td>◯</td><td>△</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>手持ち撮影は持ち運ぶ機材も少なく、<strong>すばやく構図を整えてシャッターを切ることができるので、機動力に優れています</strong>。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、手持ちでブレない写真を撮るためには、iso感度をあげ、さらにF値を開放気味にしてシャッターを切らなければならないのでどうしても画質が低くなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>表現できる幅も狭まるので、使用が禁止されている場合以外は<strong>積極的に三脚を使っていくのがおすすめ</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">三脚を使う場合の夜景写真の撮り方・設定方法</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":6493,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/use-tripod-1024x683.jpg" alt="" class="wp-image-6493"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を使う場合のカメラの設定目安は下記の通り。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><tbody><tr><th>撮影モード</th><td>絞り優先orマニュアル</td></tr><tr><th>Ｆ値（絞り）</th><td>8〜11程度</td></tr><tr><th>iso感度</th><td>100〜800程度</td></tr><tr><th>シャッタースピード</th><td>1～30秒</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>三脚が使える場合はシャッタースピードが遅くなることによる手ブレを気にする必要がほとんどないため、<strong>iso感度はなるべく低感度（100〜800）にし、広範囲にピントが合うようにF値は8〜11程度</strong>に絞って、高画質な写真の撮影を狙います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>風が強くて長時間露光の撮影が厳しい場合は、iso感度とF値を調整してシャッタースピードをあげていき、ブレが発生しない程度のシャッタースピードで夜景を撮っていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">三脚使用時の注意事項</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">リモートレリーズを使う</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>三脚にカメラを固定しても、直接カメラに触れてシャッターボタンを押すと、そのタイミングでカメラが少し動いてしまい被写体ブレにつながります。シャッターはリモートレリーズを使用して<strong>ブレのリスクを回避</strong>しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レリーズがない場合はシャッターボタンを押してから数秒後にシャッターが切れる<strong>セルフタイマーモード</strong>に変更して撮影を行いましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">手ぶれ補正をオフにする</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>三脚使用時に手ぶれ補正をオンにしていると、誤作動が生じて逆に写真がブレてしまうことがあります。なので、手ぶれ補正はオフにしておきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/tripod-setting/","kind":"post-type"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">手持ち撮影の場合の夜景の撮り方・設定方法</h2>
<!-- /wp:heading -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="https://smartparty.jp/wp-content/uploads/2018/06/snap-shot-night-view.jpg" alt="手持ちで夜景を撮影している様子を撮影した写真"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>手持ちで夜景を撮る場合のカメラの設定は下記の通り。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><tbody><tr><th>撮影モード</th><td>絞り優先orマニュアル</td></tr><tr><th>Ｆ値</th><td>F2.8 〜 F8程度</td></tr><tr><th>iso感度</th><td>800〜3200</td></tr><tr><th>シャッタースピード</th><td>1/焦点距離秒</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>手持ち撮影を行う場合は、一番優先しなければいけないのはシャッタースピードになります。シャッタースピードが遅くなると手ブレのリスクが高くなっていくからです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>シャッタースピードが<strong>1/焦点距離秒になるようにF値、iso値を設定していきます。</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1/焦点距離秒は、ぶれないシャッタースピードの目安値で考え方は下記のようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>手ブレしないシャッタースピードの目安</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>20mmの焦点距離の場合は1/20秒以上</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>50mmの焦点距離の場合は1/50秒以上</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>またカメラの機種にもよりますが、iso値は上げれば上げあるほどノイズが目立ってくるので、3200ぐらいを限度にすると良いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">手持ち撮影で高画質な夜景写真を撮るコツ</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">なるべくカメラがぶれない環境を作る</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>下記のような方法で三脚を使わなくてもブレない環境を作りましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>手すりや柵などを探し、カメラを置いて撮影する</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>脇を締めて壁に持たれ、撮影中に体が動かないようにする</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">高速シャッターで複数枚写真を撮る</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>なるべく高い画質で撮れるようiso感度を上げすぎず、F値も開放し過ぎないで、<strong>手ブレしないのギリギリのシャッタースピードに調整</strong>。そして、上記のようになるべく手ブレしない環境を作って、高速シャッターで複数枚の写真を撮ります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>高速でシャッターきると、徐々に態勢が落ち着き、手ブレが起きていない写真が撮れます。撮影後に写真を拡大再生して、手ブレがおきていない写真をピックアップしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/how-to-camera-setting/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">綺麗な夜景を撮るためのコツ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからは夜景写真のクオリティに差をつける5つのコツ紹介したいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どれも知っていれば簡単に取り入れることができる内容なので、ぜひチェックしてみて下さい。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">トワイライトタイムを狙う</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>夜景写真が一番きれいに撮影できるタイミングは、日没後約20分〜40分の間に訪れる<a href="https://nightscape.tokyo/article/twilight/">トワイライトタイム</a>の時間です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>特に太陽が沈む西の方角は茜色の空が広がり、とてもドラマチックな景色が広がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日が沈む前に撮影スポットに到着して、トライライトタイムのシャッターチャンスを逃さないようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":1852,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/twilight-sample-01-1024x576.jpg" alt="" class="wp-image-1852"/><figcaption class="wp-element-caption">トワイライトタイムの夜景</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":1853,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/twilight-sample-02-1024x576.jpg" alt="" class="wp-image-1853"/><figcaption class="wp-element-caption">日が沈みきった後の夜景</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ビル夜景は平日が狙い目</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ビジネス街のビル夜景を展望台などから撮る場合、休日だとビルの明かりが少なく迫力が半減してしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>普段会社勤めをしていると調整が難しいかもしれませんが、<strong>ビル夜景は平日に撮影に訪れるのがおすすめ</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記は<a href="https://nightscape.tokyo/chiyoda/kitte-garden/">KITTE丸の内 屋上庭園</a>からの眺めを平日と休日で比較した写真。どれくらい光量に差があるかを参考にしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":3081,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/06/kitte-marunouchi-observation-1024x683.jpg" alt="Illuminated Tokyo Station viewed from the KITTE rooftop garden" class="wp-image-3081"/><figcaption class="wp-element-caption">平日に訪れたKITTE丸の内 屋上庭園</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":6168,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/kitte-garden-holiday-1-3-1024x683.jpg" alt="" class="wp-image-6168"/><figcaption class="wp-element-caption">休日に訪れたKITTE丸の内 屋上庭園</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">展望台では映り込み防止機材を使う</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>展望台から夜景を撮影する場合は、室内の明りが窓ガラスに写り込んでしまいクリアな写真が撮りづらい場合も。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなときは暗幕（<a href="https://amzn.to/3GRQ9XP">忍者レフ</a>や<a href="https://amzn.to/48aQyAL">レンズスカート</a>）を用意しておくと、映り込みを気にせず快適に撮影を楽しむことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>展望台では三脚や暗幕の使用が禁止されている場合もありますが、使用可能であれば積極的に使用しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":6180,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-3-1024x683.jpg" alt="" class="wp-image-6180"/><figcaption class="wp-element-caption">暗幕を使用した場合の写真</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":6179,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-2-1024x683.jpg" alt="" class="wp-image-6179"/><figcaption class="wp-element-caption">暗幕を使用しなかった場合の写真</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/ninja-lev-plate/"},"icon":"externalLink"} /-->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">絞りを調整して光芒を撮る</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>F値を絞ると広範囲にピントが合うだけでなく、くっきりとした形の光芒を撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>F値を調整し、好みの大きさの光芒を撮影して写真の中のアクセントを作りましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記はF11とf2.8のF値で光芒の写りを比較した下写真。どのような違いがあるのかの参考にしてください。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":6292,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-2-1024x683.jpg" alt="墨田区立隅田公園から眺める東京スカイツリー" class="wp-image-6292"/><figcaption class="wp-element-caption">F11で撮影した写真</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":6291,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/smuda-park-1-1024x683.jpg" alt="" class="wp-image-6291"/><figcaption class="wp-element-caption">F2.8で撮影した写真</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">車の光跡はシャッタースピーを調整して複数撮る</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>夜景撮影では車のライトの光跡などを撮る場合も多いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>こういった写真を撮る場合は、何枚かシャッタースピードを変えて写真を撮ってみるのが大事です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ほどよいボリュームの光跡が捉えられるシャッタースピードを探って、綺麗な光跡が撮れている写真を撮りましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-05.jpg" alt=""/><figcaption class="wp-element-caption">車の光跡を撮影した写真①</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:image {"id":5957,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/lavista-tokyobay-18-1024x683.jpg" alt="緑色にライトアップされた豊洲大橋" class="wp-image-5957"/><figcaption class="wp-element-caption">車の光跡を撮影した写真②</figcaption></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:heading -->
<h2 class="wp-block-heading">綺麗な夜景の撮り方 まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>綺麗に夜景を撮影するための一眼レフカメラの設定やコツ・テクニックを紹介してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回紹介したことを参考にきれいな夜景の撮影にぜひ挑戦してみてください！</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2023/07/marunouchi-metropolitan-01.jpg',
  true,
  '2024-07-30T17:58:00+09:00',
  '2024-07-30T17:58:00+09:00',
  '2025-09-27T08:20:11+09:00'
);

-- FAQs for how-to-night-photo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'how-to-night-photo'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 夜景フォトグラファーが愛用する撮影機材・買ってよかったカメラグッズをまとめて紹介 (my-photographic-equipment)
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
  'my-photographic-equipment',
  '夜景フォトグラファーが愛用する撮影機材・買ってよかったカメラグッズをまとめて紹介',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>2年ほど前から東京の夜景スポットを紹介する情報サイトを運営しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>最初は細々としたアクセスしかなかった当ブログも、今では<span class="swl-marker mark_yellow">月間2~30万PVを超えるメディアに成長し、カメラマンとしてのお仕事を頂く機会</span>にも恵まれるようになりました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>こんな日々の活動は数多くの撮影機材によって支えられています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これまで数多くの機材の購入と売却を繰り返す中で、自分の撮影スタイルにピッタリ合う機材が揃ってきたので、本記事にてそれらを紹介してみようと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影機材選びの参考になれば幸いです！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sony α7Ⅳ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10421,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/sony-camera-1024x683.jpg" alt="" class="wp-image-10421"/><figcaption class="wp-element-caption">Sony α7Ⅳ</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>現在メイン機として愛用しているα7Ⅳ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>α7II、α7IIIと代々α7シリーズを愛用してきていますが、本製品は先代モデルから下記のような進化をしているのが特徴。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>有効約3300万画素にアップ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>表現が可能になるクリエイティブルック搭載</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>オートフォーカス性能が進化</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>手ぶれ補正 アクティブモード搭載</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>動画・静止画の切り替えボタン搭載</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>写真も動画もこれ一台で完結できる！そんな素晴らしいスペックの機材。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>画素数が高いのでデータ容量圧迫しやすいのが難点ですが、後述するサブカメラと併用しながら長く愛用していきたいと思っています。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210358\u0022]","post_id":"10358"} -->
<p>[itemlink post_id="10358"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Sony α7C</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10386,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/peak-design-leash-image-01-1024x682.jpg" alt="" class="wp-image-10386"/><figcaption class="wp-element-caption">Sony α7C</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>フルサイズのイメージセンサーを搭載していながら、ぐっとコンパクトなボディを実現しているのが魅力のα7C。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>筐体上部がシルバーでクラシカルな雰囲気なのがカッコよくてお気に入り。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>操作ボタン周りはα7Ⅳの方が優秀なのでメイン機としては使っていませんが、主にタイムラプスを撮影する際に使用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>高頻度でタイムラプス撮影を行なってきており、シャッター耐久回数をいつ超えるのか若干心配ですが、ダメになるまで使い続けたい機材です。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210357\u0022]","post_id":"10357"} -->
<p>[itemlink post_id="10357"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/create-timelapse/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">TAMRON 28-75mm F/2.8 Di III RXD (Model A036)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10388,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tamron-lens-A036-1024x683.jpg" alt="" class="wp-image-10388"/><figcaption class="wp-element-caption">TAMRON 28-75mm F/2.8 Di III RXD</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>常用レンズとして愛用しているのTAMRON 28-75mm F/2.8 Di III RXD。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>圧倒的なコスパの高さで発売直後から売り切れ続出となった標準ズームレンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記のような特徴を持っていて、撮影に対応できるシーンが幅広いのがお気に入りのポイント。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>TAMRON 28-75mm F/2.8 Di III RXDの特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>550gの軽量なボディ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F2.8通しで撮影が可能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>最短撮影19cmなので物撮りにも使いやすい</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">TAMRON 28-75mm F/2.8 Di III RXDの作例</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":5059,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-1-1024x683.jpg" alt="新宿の高層ビル群の夜景" class="wp-image-5059"/><figcaption class="wp-element-caption">新宿の高層ビル群の夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":9547,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-station-3-1024x683.jpg" alt="東京駅前広場を行き交う人々" class="wp-image-9547"/><figcaption class="wp-element-caption">東京駅前広場を行き交う人々</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":5938,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/harumi-rinkai-park-10-1024x683.jpg" alt="晴海臨海公園・水辺のテラスの夜景" class="wp-image-5938"/><figcaption class="wp-element-caption">晴海臨海公園・水辺のテラスの夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210365\u0022]","post_id":"10365"} -->
<p>[itemlink post_id="10365"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TAMRON 17-28mm F/2.8 Di III RXD (Model A046)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10387,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tamron-lens-a046-1024x683.jpg" alt="" class="wp-image-10387"/><figcaption class="wp-element-caption">TAMRON 17-28mm F/2.8 Di III RXD</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>タムロンの大三元レンズとして2019年に発売された広角ズームレンズのTAMRON 17-28mm F/2.8 Di III RXD。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京都内の高層ビル群が広がる景色やリフレクションを切り取るのに大活躍のレンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>インナーズームレンズ採用しており、忍者レフなどの機材をつけた状態でもピント調整がしやすかったり、ジンバルに乗せやすいといったメリットもお気に入り。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>TAMRON 17-28mm F/2.8 Di III RXDの特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>420gの軽量なボディ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F2.8通しで撮影が可能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>インナーズームレンズ採用だからジンバルに取り付けるのにも最適</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>最短撮影19cmでかなり寄れる</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">TAMRON 17-28mm F/2.8 Di III RXDの作例</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7380,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/apa-yokohama-5-1024x683.jpg" alt="アパホテル横浜ベイタワーから眺める夜景" class="wp-image-7380"/><figcaption class="wp-element-caption">アパホテル横浜ベイタワーから眺める夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":6936,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-tower-under-1-1024x683.jpg" alt="東京タワーを真下から撮影した写真" class="wp-image-6936"/><figcaption class="wp-element-caption">東京タワーを真下から撮影した写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":3080,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/06/wakura-park-2-1024x683.jpg" alt="Night view of Wadakura Fountain Park" class="wp-image-3080"/><figcaption class="wp-element-caption">和田倉噴水公園から撮影した夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210364\u0022]","post_id":"10364"} -->
<p>[itemlink post_id="10364"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">TAMRON 70-180mm F/2.8 Di III VXD (Model A056)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10385,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/tamron-lens-A056-1024x683.jpg" alt="" class="wp-image-10385"/><figcaption class="wp-element-caption">TAMRON 70-180mm F/2.8 Di III VXD</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>タムロンの大三元レンズの望遠ズームレンズとして2020年に満を持して発売されたTAMRON 70-180mm F/2.8 Di III VXD 。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>望遠ズームレンズは重量が重いため、積極的に外に持ち出す気持ちになれませんでした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、本製品はF2.8通し望遠ズームでクラス最軽量の810gを実現していることもあり、割と気軽に持ち出せるように。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>オートフォーカス性能の速さととろけるようなボケ味がお気に入りです。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>TAMRON 70-180mm F/2.8 Di III VXDの特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>810gの軽量なボディ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F2.8通しで撮影が可能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>最短撮影距離0.85ｍの高い近接性能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>タムロン史上最高レベルの高速・高精度オートフォーカス性能</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">TAMRON 70-180mm F/2.8 Di III VXDの作例</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":7529,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/main-pc-4-1024x576.jpg" alt="東京スカイツリー展望台から撮影した夜景" class="wp-image-7529"/><figcaption class="wp-element-caption">東京スカイツリー展望台から撮影した夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":8647,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/02/maihama-promenade-18-1024x683.jpg" alt="舞浜海岸遊歩道から眺める夕景" class="wp-image-8647"/><figcaption class="wp-element-caption">舞浜海岸遊歩道から眺める夕景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":8859,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/tower-2-1024x683.jpg" alt="東京タワーメインデッキ展望台を望遠レンズで撮影" class="wp-image-8859"/><figcaption class="wp-element-caption">東京タワーメインデッキ展望台をアップで撮影した写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210363\u0022]","post_id":"10363"} -->
<p>[itemlink post_id="10363"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">フォクトレンダー ULTRA WIDE-HELIAR 12mm F5.6 Aspherical III</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10361,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/voigtlander-12mm-1024x683.jpg" alt="" class="wp-image-10361"/><figcaption class="wp-element-caption">ULTRA WIDE-HELIAR 12mm F5.6 Aspherical III</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>焦点距離12mmの圧倒的な広角写真を撮ることができるフォクトレンダーの単焦点レンズ、ULTRA WIDE-HELIAR 12mm F5.6 Aspherical III。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>高層ビル群が連なる大迫力の光景を切り取ったり、ホテルの客室から額縁構図の写真を撮ったりするときに活躍する単焦点レンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>デメリットも多く万能なレンズではありませんが、このレンズがなかったら撮れなかった写真が数多くあるので、今後も手放せません。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>ULTRA WIDE-HELIAR 12mm F5.6 Aspherical IIIの特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>350gの軽量なボディ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>フォーカスはMFのみ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F値はF5.6〜F22となっており暗い</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ULTRA WIDE-HELIAR 12mm F5.6 Aspherical IIIの作例</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":3270,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/01/prince-hotel-room-02-1-1024x683.jpg" alt="Atmosphere of the Corner Room at Prince Park Tower Tokyo" class="wp-image-3270"/><figcaption class="wp-element-caption">プリンスタワー東京の客室から撮影した夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10144,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/07/yaesdu-mid-1024x683.jpg" alt="YAESU TERRACEからの眺望（夕暮れ時）" class="wp-image-10144"/><figcaption class="wp-element-caption">YAESU TERRACEから撮影した東京駅</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":3889,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/07/aomi-highway-shintoshin-intersection-06-1024x683.jpg" alt="新都心歩道橋から眺める新宿オフィス街の夜景" class="wp-image-3889"/><figcaption class="wp-element-caption">新都心歩道橋から撮影した新宿オフィス街の夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210359\u0022]","post_id":"10359"} -->
<p>[itemlink post_id="10359"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SONY Sonnar T* FE 55mm F1.8 ZA</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10399,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/zeiss-55mm-f1.8-1-1024x683.jpg" alt="" class="wp-image-10399"/><figcaption class="wp-element-caption">SONY Sonnar T* FE 55mm F1.8 ZA</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京都内の夜景スポットは三脚を立てるのがNGの場所がたくさんあります。このようなシーンでは活躍しているのが単焦点レンズのSONY Sonnar T* FE 55mm F1.8 ZAです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>F1.8の明るさがあり手持ちで夜景を撮る場合でもISO値を上げずに済むので重宝しますし、中心に円を描くように滲む独特なボケ味がお気に入りです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>惜しいなーと思う点は最短撮影距離が0.5mとなっており、接写には向かないという点ぐらい。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>SONY Sonnar T* FE 55mm F1.8 ZAの特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>抜群の描写力</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>早いAF性能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>軽量コンパクトな筐体</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>最短撮影距離0.5mなのであまり寄れない</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">SONY Sonnar T* FE 55mm F1.8 ZA</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":2091,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-01-1024x683.jpg" alt="" class="wp-image-2091"/><figcaption class="wp-element-caption">目黒川桜まつりで撮影したぼんぼり</figcaption></figure>
<!-- /wp:image -->

<!-- wp:image {"id":5011,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-4-1024x683.jpg" alt="" class="wp-image-5011"/><figcaption class="wp-element-caption">青の洞窟 SHIBUYAで撮影したイルミネーション</figcaption></figure>
<!-- /wp:image -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210367\u0022]","post_id":"10367"} -->
<p>[itemlink post_id="10367"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">PGYTECH ROLLER CAMERA BACKPACK</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":11548,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/pgy-bag-2-1024x683.jpg" alt="" class="wp-image-11548"/><figcaption class="wp-element-caption">Roller Camera Backpack 30Lを使用する様子</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>複数の機材を持ち運ぶだけでなく、撮影効率にも大きな影響を与えるカメラバッグ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>過去に10個以上のリュックを試してきていますが、クライアントワークなどでたくさんの機材を持ち運ぶ時はRoller Camera Backpack 30Lを愛用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>本製品の特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>2Way仕様（リュック/キャリー）で使用できる</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>30Lの大容量でたくさんの撮影機材の持ち運びに最適</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>機内持ち込み可能なギリギリサイズで作られている</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>付属のアクセサリーオーガナイザーが便利</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>一度に多くの機材を持ち運ぶことがで着るのに加えて2Way仕様（リュック or キャリー）なのがとても便利。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>様々なシーンで使える便利なバッグなので長く使用していくつもりです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002211583\u0022]","post_id":"11583"} -->
<p>[itemlink post_id="11583"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"style":"text","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://digital-style.jp/pgytech-roller-camera-backpack"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Incase DSLR Pro Pack Nylon</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10429,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/my-camera-bag-02-1024x683.jpg" alt="" class="wp-image-10429"/><figcaption class="wp-element-caption">Incase DSLR Pro Pack Nylon</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>日帰りの撮影などで持ち運ぶ撮影機材が少ない場合はIncase DSLR Pro Pack Nylonを愛用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>かれこれ5年以上愛用している信頼おけるカメラリュックです。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>本製品の特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>トラベル三脚がすっぽりおさまる</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>カメラ2機、レンズ4本ほどを収納できる程よい容量</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>小分けのポケットが複数あり、予備バッテリーやSDカードケースなどを収納しやすい</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ミニマルなデザインでどんな服装にも合う</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>都内の夜景スポットを電車移動することが多いため、一度に持ち運ぶ荷物はそう多くありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>厳選した機材をコンパクトに持ち運ぶのに大変重宝するカメラバッグなので、今後もしばらくお世話になりそうです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210383\u0022]","post_id":"10383"} -->
<p>[itemlink post_id="10383"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">befreeアドバンスカーボンT三脚キット（トラベル三脚）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10410,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/my-tripod-01-1024x683.jpg" alt="" class="wp-image-10410"/><figcaption class="wp-element-caption">befreeアドバンスカーボンT三脚キット</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>夜景撮影を行う上で欠かせないアイテムといえば三脚。数ある機材の中でも最も重くて場所も取るので、なるべく身軽に動くためにトラベル三脚を使うのが基本スタイル。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>いくつかのトラベル三脚を乗り換えた中で現在はマンフロットのbefreeアドバンスカーボンT三脚キットを使っています。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>本製品の特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>カーボン製で軽量</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>トラベル三脚の中でトップクラスの全伸高</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>対荷重10kgでフルサイズ機+望遠レンズも乗せられる</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>トラベル三脚は全伸高や対荷重が低いアイテムが多いですが、この三脚はこれらのスペックが高く抜群に使いやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>後継機も出てきていますが、なんの不満もないためしばらく愛用し続けることになりそう。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210372\u0022]","post_id":"10372"} -->
<p>[itemlink post_id="10372"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/tripod-setting/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Leofoto MT-03+LH-25（卓上三脚）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10404,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/leofoto-mt-03-02-1024x683.jpg" alt="" class="wp-image-10404"/><figcaption class="wp-element-caption">Leofoto MT-03+LH-25（卓上三脚）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>展望台などから夜景を撮る場合や水溜りに映るリフレクションを撮る時は卓上三脚があると便利。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで上記で紹介したトラベル三脚とはLeofoto MT-03+LH-25も持ち歩いています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記の写真のように脚を柔軟に折りたたむことができるため、設置面の高さが均等じゃない場所でも安定しやすいのが本製品の最大の特徴。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この機能に今まで何度も助けられてきました。信頼が厚いミニ三脚なので今後も末永く愛用するつもりです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210371\u0022]","post_id":"10371"} -->
<p>[itemlink post_id="10371"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SONY RMT-P1BT（ワイヤレスリモートコマンダー）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10415,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/sony-rmt-p1bt-1-1024x683.jpg" alt="" class="wp-image-10415"/><figcaption class="wp-element-caption">SONY RMT-P1BT</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を使って撮影する場合に必須のアイテムといえばレリーズ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>サードバーティー製の有線レリーズであれば、2,000円で購入することができるのですが、僕はSONY純正のワイヤレスリモートコマンダーを使用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>本製品の特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>レンズ交換する際にケーブルが邪魔にならない</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>撮影を開始する際にケーブルを接続する一手間が省ける</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>三脚にカメラを載せたまま移動するのが楽</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>集合写真を撮る時などに遠隔操作ができる</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>一度ワイヤレスレリーズの便利さを体験すると、もう有線には戻れないです。「壊れたり、無くしたりしても何度でも買い直したい！」それぐらいお気に入りのアイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210370\u0022]","post_id":"10370"} -->
<p>[itemlink post_id="10370"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">忍者レフ（暗幕）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10380,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ninnjya-lef-1024x683.jpg" alt="" class="wp-image-10380"/><figcaption class="wp-element-caption">展望台で忍者レフを使用する様子</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>展望台から夜景を撮る場合、何も対策をとらないとほとんどの場合で映り込みが発生してしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ガラス越しの夜景を綺麗にとるために使っているのが忍者レフ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このアイテムがあれば16mm程度の広角レンズでもレンズの写り込みを防げて、クリアな夜景を撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>唯一の欠点は展望台で忍者レフを使うとても目立つということ。一般のお客さんに邪魔にならないようマナーを守って利用するようにしています。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210369\u0022]","post_id":"10369"} -->
<p>[itemlink post_id="10369"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/ninja-lev-plate/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">ピークデザイン クラッチ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10408,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/peakdesign-cluch-setting-after-01-1024x683.jpg" alt="" class="wp-image-10408"/><figcaption class="wp-element-caption">ピークデザイン クラッチ</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を立てて撮影する機会が多いとネックストラップは敬遠しがち。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、何もつけずにカメラを持っているとふとしたタイミングで落としてしまわないか心配になることがありました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで愛用しているのがピークデザイン クラッチ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>取り付けやが簡単でホールド感も抜群。文句なしの使いやすさを誇るハンドストラップです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210378\u0022]","post_id":"10378"} -->
<p>[itemlink post_id="10378"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SmallRig 回転式マウントプレートキット</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10424,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-image-1024x683.jpg" alt="" class="wp-image-10424"/><figcaption class="wp-element-caption">SmallRig 回転式マウントプレートキット</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚を使って写真を撮っていると横と縦構図の切り替えが割と面倒だったりします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とくに自由雲台を使っている場合はカメラの水平・垂直を自分で正確に合わせる必要があり、貴重なシャッターチャンスを逃してしまう恐れがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで愛用しているのがSmallRig 回転式マウントプレートキットというアイテム。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>利用イメージは以下の動画をチェックしてもらえれば一目瞭然。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="l-bottom-large">
<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="ja" dir="ltr">SmallRig 回転式マウントプレートキットを導入したんですが、これめちゃくちゃ便利…！<br><br>横も縦もシームレスに移行できて撮影が捗ります&#x263a;&#xfe0f;<br><br>風景写真を撮りに出かける時の必携アイテムになりそう。<br><br>詳細はこちら▼<a href="https://t.co/RLykH0V19H">https://t.co/RLykH0V19H</a> <a href="https://t.co/DkaTjWSYzk">pic.twitter.com/DkaTjWSYzk</a></p>&mdash; タカヒロ / デジスタ（ガジェットブログ） (@takahiro_mono) <a href="https://twitter.com/takahiro_mono/status/1650004776091021314?ref_src=twsrc%5Etfw">April 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>プレートを取り付けるとカメラの重量が増すため常用しているアイテムではありませんが、ここぞという時の撮影に持ち出すようにしています。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210425\u0022]","post_id":"10425"} -->
<p>[itemlink post_id="10425"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"style":"slim","isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/smallrig-plate/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">Ulanzi VL-81（小型照明）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10419,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/vl-81-led-light-mount-1024x683.jpg" alt="Ulanzi VL-81（小型照明）" class="wp-image-10419"/><figcaption class="wp-element-caption">Ulanzi VL-81（小型照明）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>屋外で夜景撮影をしていると気がついたら周りが真っ暗になって機材の片付けがしづらいことも。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな時に便利なのが小型照明のVL-81です。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>本製品の特徴</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>USB-C充電できる小型照明</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>色温度の調整も柔軟にできる</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>ポートレート写真を撮る時の補助照明などが本来の使い方ではありますが、夜景フォトグラファーの方なら持っておいて損なしのアイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210418\u0022]","post_id":"10418"} -->
<p>[itemlink post_id="10418"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">ヘーネル ProCube2（デュアルバッテリーチャージャー）</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10428,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/procube2-1024x683.jpg" alt="ヘーネル ProCube2（デュアルバッテリーチャージャー）" class="wp-image-10428"/><figcaption class="wp-element-caption">ヘーネル ProCube2（デュアルバッテリーチャージャー）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>α7Ⅳαや7Cなど複数のカメラを持っているとバッテリーの充電も効率よく行う必要が出てきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで愛用しているのがNP-FZ100バッテリーを2つまとめて充電できるProCube2というバッテリーチャージャー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>USB-Cケーブルで充電可能ですし、充電のステータスも見やすいので、使い勝手が良くプロダクトデザインも好みです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210373\u0022]","post_id":"10373"} -->
<p>[itemlink post_id="10373"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-23">夜景フォトグラファーの撮影機材・アクセサリーまとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10375,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/my-favorite-camera-item-list-1024x682.jpg" alt="夜景フォトグラファーの撮影機材・アクセサリー一覧" class="wp-image-10375"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>夜景フォトグラファーの僕が愛用している撮影機材をまとめて紹介してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どれもこだわり抜いて選んだアイテムたちなので、とても愛着がありますし、使い勝手も素晴らしいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>気になったアイテムがあればぜひ購入して、撮影環境のアップデートを図ってみてもらえればと思います。</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/my-favorite-camera-item-list.jpg',
  true,
  '2024-07-26T13:31:46+09:00',
  '2024-07-26T13:31:46+09:00',
  '2025-09-27T08:21:11+09:00'
);

-- FAQs for my-photographic-equipment
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'my-photographic-equipment'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 展望台で夜景撮影が捗る便利な撮影機材！忍者レフの魅力を語る。 (ninja-lev-plate)
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
  'ninja-lev-plate',
  '展望台で夜景撮影が捗る便利な撮影機材！忍者レフの魅力を語る。',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>展望台から窓ガラス越しに夜景を撮影する際や、水族館で水槽の中を撮影する際に困ることといえば、<strong>窓の映り込み</strong>。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>窓にレンズをぴったりくっつけたり、上着をカメラに被せたりしても映り込みを完全に防止するのは難しかったりします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなシーンで便利なのが忍者レフと呼ばれる撮影機材。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とても簡単に映り込みを防ぐことができて、撮影が快適になる便利なアイテムなので本記事にて紹介したいと思います！</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210490\u0022]","post_id":"10490"} -->
<p>[itemlink post_id="10490"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">忍者レフとは</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10483,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ninjya-ref-sample-1024x683.jpg" alt="" class="wp-image-10483"/><figcaption class="wp-element-caption">忍者レフを使って展望台から写真を撮る様子</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>忍者レフは、よしみカメラから発売されている撮影補助アイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>黒と白の2つの面があり、ガラス越しの写りこみを防ぎを防いだり、ポートレート撮影時のレフ板として使用することができる便利な撮影補助アイテムです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>同メーカーからは複数の忍者レフ、忍者レフミニ、忍者レフ787など複数の製品が登場しており、利用シーンに応じて写り込みを防止することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210490\u0022]","post_id":"10490"} -->
<p>[itemlink post_id="10490"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">忍者レフの特徴</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからは忍者レフの特徴を3つに分けて詳しく解説していきます！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">簡単に写り込みを防ぐことができる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>展望台などでガラス越しの景色を撮影しようとすると下記のように写真に部屋の明かりなどが映り込んでしまいクリアな写真を撮ることができない可能性があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上着を被せたり、窓にピッタリとレンズをくっつけるとある程度の写り込みは防止できますが、試行錯誤しているうちにシャッターチャンスを逃してしまうのはもったいないです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":6179,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-2-1024x683.jpg" alt="" class="wp-image-6179"/><figcaption class="wp-element-caption">部屋の灯りが映り込んでしまった写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>このようなシーンで活躍してくれるのが忍者レフ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズに忍者レフを装着した状態でシャッターを切ると下記のようにクリアな写真を撮ることができるようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>展望台だけでなく、水族館で水槽の中を撮影したり飛行機の窓の外の景色を撮るときなどでも活用することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":6180,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-3-1024x683.jpg" alt="" class="wp-image-6180"/><figcaption class="wp-element-caption">写り込みが一切ない綺麗な夜景写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">持ち運びも簡単</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>忍者レフは直径70cmほどのレフ板なのですが、未使用はコンパクトに折りたたんで携帯することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>折りたたんだ状態だと22cmほどの大きさなのでカメラバッグに常に収納しておいても全く邪魔になりません。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10485,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ninja-lev-plate-02.jpg" alt="" class="wp-image-10485"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>忍者レフの折り畳み方は下記の通り。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レフ板を捻りながら折りたたむだけなので使用した後にすぐに片付けることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://youtu.be/nVOT5WZIw_Y?si=BQfiEm9_R8TN-mlJ","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/nVOT5WZIw_Y?si=BQfiEm9_R8TN-mlJ
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">ポートレートのレフ板としても使用できる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>忍者レフは黒と白のふたつの面が用意されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>白い面をレフ板として活用すれば、光の陰影を自然に調整することができるため、ポートレートや物撮りが捗ります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>直径70cmの大きさがあるので使いやすさも申し分がありません。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10428,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/procube2-1024x683.jpg" alt="" class="wp-image-10428"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">忍者レフとミニ忍者レフの違い比較</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>上記でも紹介した通り、よしみカメラから発売されている忍者レフには、「<strong>忍者レフ</strong>」と「<strong>忍者レフミニ</strong>」の2種類のラインナップがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>両者の違いは下記の通り。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>利用シーンにもよりますが、初めて映り込み防止の補助アイテムを購入するのであれば、<strong>通常サイズの方が汎用的に使えておすすめです。</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><thead><tr><th></th><th>忍者レフ</th><th>忍者レフミニ</th></tr></thead><tbody><tr><td>収納時の大きさ</td><td>22cm</td><td>12cm</td></tr><tr><td>利用時の大きさ</td><td>50cm</td><td>35cm</td></tr><tr><td>利用シーン</td><td>展望台や水族館などスペースが広く、大きい窓の映り込みを防ぐ場合に最適</td><td>飛行機の機内など忍者レフを広げづらく、小さい窓の映り込みを防ぐ場合に最適</td></tr><tr><td>リンク</td><td><a href="https://amzn.to/3A0qUm1">Amazonで価格を見る</a></td><td><a href="https://amzn.to/3zYESop">Amazonで価格を見る</a></td></tr></tbody></table><figcaption class="wp-element-caption">忍者レフとミニ忍者レフのスペック比較</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">忍者レフとレンズスカートの違い比較</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10486,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/review-g1x-mark-iii-shoot-1024x683.jpg" alt="" class="wp-image-10486"/><figcaption class="wp-element-caption">レンズスカートを使用する様子</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>忍者レフと同じように映り込みを防止する機材に「レンズスカート」と呼ばれるアイテムもあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どちらを購入するか悩む方も多いので、それぞれのメリットデメリットをまとめます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どちらも使用してみたことがありますが、個人的には<strong>忍者レフのほうが扱いやすくておすすめ</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><thead><tr><th></th><th>忍者レフ</th><th>レンズスカート</th></tr></thead><tbody><tr><th>映り込み防止の精度</th><td>正面なら問題なく防げる<br>レンズを斜めに向けると隙間から光が入り映り込みが発生する 超広角レンズを使ってもケラれない</td><td>正面ならかなりの精度で防げる<br>レンズを斜めに向けるとケラれる（画角にレンズスカートが入ってくる）</td></tr><tr><th>調整のしやすさ</th><td>忍者レフ装着後もフォーカスリングやズームリングを触れて調整しやすい。<br>窓から離れていても映り込みを防げる</td><td>レンズスカート装着後はズームリング・フォーカスリングを触れることができない<br>窓から離れていると使用できない</td></tr><tr><th>対応カメラ</th><td>一眼レフカメラ・ミラーレス一眼レフのみ</td><td>一眼レフカメラ・ミラーレス一眼レフ、コンデジ</td></tr><tr><th>リンク</th><td><a href="https://amzn.to/3A0qUm1">Amazonで価格を見る</a></td><td><a href="https://amzn.to/3Wr2oCg">Amazonで価格を見る</a></td></tr></tbody></table><figcaption class="wp-element-caption">忍者レフとレンズスカートの違い比較</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">忍者レフを自作する方法</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>忍者レフは意外と価格が高くいので、少し購入するのをためらうという方は、<strong>自作してしまうのも一つの手段</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>忍者レフの作り方を紹介した動画</strong>も載せておくので参考にしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:embed {"url":"https://youtu.be/hA6luUDe1Q8","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/hA6luUDe1Q8
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading -->
<h2 class="wp-block-heading">展望台で夜景撮影には忍者レフを活用しよう</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>本記事では夜景フォトフラファーの筆者が愛用している撮影機材の一つである忍者レフの魅力を解説してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本製品があると展望台や水族館などで写り込みのないクリアな写真を簡単に撮ることができるようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>またコンパクトに収納できるので持ち運びできる点や、数ある写り込み防止機材の中でも手軽に扱いやすい点もお気に入りです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>映り込みを防ぐためにのが面倒くさくてガラス越しの夜景は億劫に感じていた方はぜひ本アイテムの導入を検討してみてはいかがでしょうか？</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210490\u0022]","post_id":"10490"} -->
<p>[itemlink post_id="10490"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/ninnjya-lef.jpg',
  true,
  '2024-07-29T18:49:43+09:00',
  '2024-07-29T18:49:43+09:00',
  '2025-09-27T08:21:23+09:00'
);

-- FAQs for ninja-lev-plate
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ninja-lev-plate'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 一眼カメラの設定（F値 / シャッタースピード / ISO値）を初心者向けに解説してみる。 (how-to-camera-setting)
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
  'how-to-camera-setting',
  '一眼カメラの設定（F値 / シャッタースピード / ISO値）を初心者向けに解説してみる。',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>一眼レフカメラや、ミラーレス一眼カメラを購入して、最初に乗り越えなければいけない壁といえば、<strong>F値、シャッタースピード、ISO値の使い方を覚えること</strong>ですよね。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上記3点の使い方を覚えるにはコツがあります。それは3つの役割を1つずつ理解するのではなく、「<strong>3つの要素を操作する目的</strong>」をまず理解すること。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事を読めば<strong>カメラの設定</strong>が理解でき、背景がボケた写真や美しい夜景写真をばっちり撮ることができるようになります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>カメラの設定にイマイチ自信を持てない方</strong>はぜひチェックしてみてください！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">F値、シャッタースピード、ISO値を操作する目的</h2>
<!-- /wp:heading -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="https://digital-style.jp/wp-content/uploads/2019/02/why-setting.jpg" alt="カメラを設定している様子"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>F値、シャッタースピード、ISO値を操作する目的大きく分けて主に２つです。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>撮影に必要な光を取り込むため</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>写真の表現を変えるため</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>これだけ言われてもよく意味がわからないですね。ひとつずつ詳しく説明していきましょう！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-1">①撮影に必要な光を取り込む</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>下記は3つの要素の役割を簡単にまとめたもの。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>F値</dt>
<dd>レンズにある光の通り穴の開き具合を数値化したもの。通り穴が開いているほど光を多く取り込める</dd>
<dt>シャッタースピード</dt>
<dd>シャッターが開いている時間を数値化したもの。シャッターが開いている時間が長いほど光を多く取り込める</dd>
<dt>ISO値</dt>
<dd>光を感じる部品（イメージセンサー）iso値が高いほど、多くの光を取り込める</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>注目すべきポイントは、<strong>3つの要素はすべて、光を取り込む量を操作するために使っている</strong>ということ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラは適切な量の光をレンズから取り込み、シャッターを切ることで、目の前の景色を写真に収めることができます。（適切な量の光をレンズから取り込み、程よい明るさで写真を撮ることを「<strong>適正露出</strong>」という）</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影に必要な光をカメラに取り込み、適正露出の写真を撮影する、これが1つ目のF値、シャッタースピード、ISO値を操作する目的です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"u-mb-ctrl u-mb-5"} -->
<p class="u-mb-ctrl u-mb-5">上記で説明したことをイラストにするとこんな感じ▼</p>
<!-- /wp:paragraph -->

<!-- wp:image {"className":"is-style-border u-mb-ctrl u-mb-20"} -->
<figure class="wp-block-image is-style-border u-mb-ctrl u-mb-20"><img src="https://digital-style.jp/wp-content/uploads/2019/01/exposure-image.png" alt="適正露出のイメージを説明したイラスト"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"className":"u-mb-ctrl u-mb-5"} -->
<p class="u-mb-ctrl u-mb-5">3つの要素をバランスよく設定し、適正な量の光を取り込むことができれば、下記のように適正な明るさの写真を撮影することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10498,"sizeSlug":"large","linkDestination":"none","className":"is-style-border u-mb-ctrl u-mb-25"} -->
<figure class="wp-block-image size-large is-style-border u-mb-ctrl u-mb-25"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-normal-1024x777.jpg" alt="" class="wp-image-10498"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"className":"u-mb-ctrl u-mb-5"} -->
<p class="u-mb-ctrl u-mb-5">3つの要素のバランスが悪く、適正な量の光を取り込むことができないと、撮影した写真は暗くなってしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10497,"sizeSlug":"large","linkDestination":"none","className":"is-style-border u-mb-ctrl u-mb-25"} -->
<figure class="wp-block-image size-large is-style-border u-mb-ctrl u-mb-25"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-low-1024x777.jpg" alt="" class="wp-image-10497"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph {"className":"u-mb-ctrl u-mb-5"} -->
<p class="u-mb-ctrl u-mb-5">必要以上の光を取り込んでしまうと、撮影した写真は明るくなり過ぎてしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10496,"sizeSlug":"large","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-large is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-heigh-1024x777.jpg" alt="" class="wp-image-10496"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">②写真の表現を変える</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>程よい光を取り込むためになぜ３つも役割を分ける必要あるのか疑問に持った方がいるかもしれません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>役割が分かれているのは、3つの要素は光を取り込む量を調整するだけでなく、<strong>写真の表現を変えるためにも用いられるから</strong>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記はシャッタースピードを10秒に設定して撮影した写真。車のランプの灯りを光跡として捉えるために時間をかけてシャッターを切るように設定しています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":2132,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-01-1024x683.jpg" alt="六本木ヒルズと夜桜のライトアップ" class="wp-image-2132"/><figcaption class="wp-element-caption">シャッタースピードを10秒に設定して撮影した写真</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>下記は駅舎を通過する電車を綺麗に切り取るためにシャッターを1/200秒に設定して撮影した写真です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>一瞬でシャッターを切っても十分に光を取り込むことができるようにF値とISO値でより多くの光を取り込めるように調整しています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":8352,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/01/itabu-sakura-10-1024x683.jpg" alt="" class="wp-image-8352"/></figure>
<!-- /wp:image -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>ここまでのおさらい</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>F値、シャッタースピード、ISO値はそれぞれ光を取り込む量を調整する役割を持っている</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>程よい明るさで写真を撮ることを「適正露出」という</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>適正露出の写真が撮るのが、F値、シャッタースピード、ISO値を操作する目的</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F値、シャッタースピード、ISO値は写真の表現を変えるために調整する</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-3">F値・シャッタースピード・ISO値の役割</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>なんとなくF値、シャッタースピード、ISO値を操作する目的を理解することができたでしょうか？<br>ここからは改めて3つの要素の具体的な役割を解説していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">F値（絞り）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10500,"sizeSlug":"full","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-full is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/about-f.png" alt="" class="wp-image-10500"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>F値とは、レンズの光が通る穴の開き具合を数値化したもの。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>光の通る穴が大きければ、光を取り込める量は多くなります、逆に光の通る穴が小さければ、光を取り込める量は少なくなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、F値は小さくなるほど、写真のピントが合う範囲が狭くなり、背景がボケた写真が撮影できます。F値を大きくすると、ピントが写真全体に合ったパンフォーカスの写真を撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-5">シャッタースピード</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10501,"sizeSlug":"full","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-full is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/about-shutter-speed.png" alt="" class="wp-image-10501"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラ内部には光を感じ取る部品（イメージセンサー）が入っていて、その部品に光が当たる時間によって光を取り込める量が変化します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>シャッタースピードを遅くすると、イメージセンサーに長く光が当たるので、取り込む光の量が増えます。逆にシャッタースピードが速くなると取り込める光の量は少なくなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、シャッタースピードが速いいと、動く被写体の姿をピタッと撮影することができますが、シャッタースピードが遅いと被写体がブレるように映ります。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">ISO値（ISO感度）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10502,"sizeSlug":"full","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-full is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/about-iso.png" alt="" class="wp-image-10502"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ISO感度はデジタルカメラが光をとらえる能力を表す値です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>F値とシャッタースピードだけでは十分な量の光を取り込めない場合に、ISO値をあげて足らない分の光を補います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただし、ISO値は数字をあげるほど画質が悪くなってしまうので、なるべく低めに設定しておくのがよいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ISO値は少し使いどころがイメージしにくいと思うので、この後の章で詳しく説明します！</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-7">シーン別カメラの設定例</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>F値、シャッタースピード、ISO値を操作する目的と、3つの要素の具体的な役割がわかったら、いくつかの写真を元に、どのようにカメラを設定していくのか一緒に考えていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ここまできたら、料理のレシピのように撮影シーンによって3つの要素をどのように調整するか覚えていくだけです！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-8">背景をぼかした写真を撮る場合</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10504,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-sample-01-1024x777.jpg" alt="" class="wp-image-10504"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>まずは日中に背景がボケた写真をとる場合。背景をぼかすにはF値を下げればよいのでF2.8と設定。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>F値を下げると光を取り込む量が多くなるので、シャッタースピードを早く、ISO値を低めに設定にして、光を取り込む量を抑えます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このように設定することで、適正露出の写真を撮影することができました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-9">動く被写体を撮る場合</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10506,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-sample-02-1024x777.jpg" alt="" class="wp-image-10506"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>お次は走る列車を撮影した写真。動く被写体は、シャッタースピードを遅くするとぶれてしまう可能性があるので、シャッタースピードは止まって見えるギリギリの数値を見極め、1/200程度に設定。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、全体的にピントが合った写真を撮りたかったので、F値はF8.0に設定して撮影しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>新幹線のようにもっと速く動く被写体を撮る場合は、シャッタースピードをさらに上げることで、被写体ぶれを防いで写真を撮影します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>シャッタースピードをあげると光を取り込める量が少なくなるので、その分F値を低めに設定して光を取り込む量をカバーします。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-10">手持で夜景を撮る場合</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10507,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-setting-sample-03-1024x777.jpg" alt="" class="wp-image-10507"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>最後は手持ちで夜景を撮影するケース。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まずはF値は低めにして、なるべく多く光を取り込みます。シャッタースピードも同様の考えで、手ブレが起きるリスクがないぎりぎりの数値まで遅く設定し、光を多く取り込みます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、夜はF値とシャッタースピードだけでは十分な光が取り込むのが難しい・・・ここで登場するのがiso値です！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ISO値を1000程度まで上げることで、適正露出に必要な光を取り込むことができ、綺麗な写真を撮ることができました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このようにISO値は、F値とシャッタースピードだけでは適正露出に必要な光を取り込めない場合の最終手段に使います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-11">上手な撮影モードの使い方</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここまで記事を読み進めていただくと、撮影状況によっていちいち設定を考えるのはちょっと大変そうだなーと感じた方もいると思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ですが、実際にはF値、シャッタースピード、ISO値をいつも自分で操作して写真を撮影するということは少ないです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラの「<strong>M、S、A、P</strong>」と書かれているダイヤルを回すと、撮影モードを変更することができることできます。これをうまく使うとカメラの設定は最小限に撮影を楽しむことができるようなります！</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="https://digital-style.jp/wp-content/uploads/2019/02/camera-dial.jpg" alt="カメラの撮影ダイヤルを撮影した写真"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-12">プログラムオートモード</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>オートモードは今回紹介した3つの要素全てをカメラに任せて撮るモード。スマホと同じような感覚で写真が撮れるイメージです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とりあえず、シャッターを切って写真を撮ることを楽しみたい方におすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10509,"sizeSlug":"large","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-large is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/auto-setting-1024x275.png" alt="" class="wp-image-10509"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-13">絞り優先モード</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>絞り優先モードは、F値のみ自分で操作し、シャッタースピード、ISO値はカメラに任せる撮影モードです。ぼけ味のある写真を撮りたい場合や、写真全体にピントとがあった風景写真を撮りたい場合におすすめの撮影モードです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10510,"sizeSlug":"large","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-large is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/a-setting-1024x275.png" alt="" class="wp-image-10510"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-14">シャッタースピード優先モード</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>シャッタースピード優先モードは、シャッタースピードのみ自分で操作し、F値、ISO値はカメラに任せる撮影モードです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>早く動く被写体を撮るときなどにオススメの撮影モードです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10508,"sizeSlug":"large","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-large is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ss-setting-1024x275.png" alt="" class="wp-image-10508"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">マニュアルモード</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>シャッタースピード、F値、ISO値全てを自分で調整するマニュアルモード。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>細かく調整をしながら自分のイメージした写真を撮りたい方におすすめのモードです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10511,"sizeSlug":"large","linkDestination":"none","className":"is-style-border"} -->
<figure class="wp-block-image size-large is-style-border"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/manual-setting-1024x275.png" alt="" class="wp-image-10511"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-15">【初心者向け】一眼カメラの設定方法まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>F値、シャッタースピード、ISO値を自分の頭で考えて設定できるようになるために必要な知識を解説してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>なんとなく3つの要素の関係性やそれぞれの役割を理解できたら、あとはどんな時にどの数値をいじればいいのか考えて、どんどん写真を撮ってみてください！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>慣れてくれば何もみないで料理を作れるように、「こういう撮影シーンではこういう風に設定変えるといいな」と自然に手を動かせるようになってきます。</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/sony-sel40f25g-image.jpg',
  true,
  '2024-07-29T21:15:45+09:00',
  '2024-07-29T21:15:45+09:00',
  '2025-09-27T08:20:58+09:00'
);

-- FAQs for how-to-camera-setting
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'how-to-camera-setting'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 軽量で味のある写真が撮れる単焦点レンズ。TTArtisan AF 27mm f/2.8 Eマウント レビュー (ttartisan-af-27-review)
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
  'ttartisan-af-27-review',
  '軽量で味のある写真が撮れる単焦点レンズ。TTArtisan AF 27mm f/2.8 Eマウント レビュー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p><a href="https://nightscape.tokyo">東京夜景</a>に関するサイト運営のためにこれまで何本もレンズを購入してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>新しいレンズを買ってファインダーを覗くときのドキドキする感覚は今でも新鮮です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなレンズ沼に片足を突っ込んでいる僕に<a href="https://www.amazon.co.jp/dp/B0C5MBNX96?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">TTArtisan AF 27mm f/2.8 Eマウント(APS-C)&nbsp;</a>というレンズを紹介してほしいとの依頼が。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>安価な価格帯のわりにスペックもよく、これからカメラを始める方のいい選択肢になると思ったので実際に試してみました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ということで、本記事ではTTArtisan AF 27mm f/2.8 Eマウントを使用してみた感想を紹介していきます！</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210526\u0022]","post_id":"10526"} -->
<p>[itemlink post_id="10526"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">TTArtisan AF 27mm f/2.8の外観</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回提供頂いたTTArtisan AF 27mm f/2.8 Eマウント。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>中国・深センに本拠を構える光学メーカーの銘匠光学が展開する交換レンズブランド「TTArtisan」から発売されたAPS−C用のEマウントレンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10527,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-package-1024x683.jpg" alt="" class="wp-image-10527"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>パッケージを開封する付属品（レンズ本体、USB−Cケーブル、説明書）がズラリ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10528,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-item-list-1024x683.jpg" alt="" class="wp-image-10528"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>こちらがレンズ本体。2種類のカラーバリエーション（ブラック、チタンブラック）の中から前者を選びました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>鏡筒は金属製で質感が良く安っぽさがありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>フィルター系は39mm。APS~C用の単焦点レンズということもあってとてもコンパクトです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10529,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-lens-1024x683.jpg" alt="" class="wp-image-10529"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レンズキャップにはUSB-Cポート。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このポートにケーブルを挿してファーウェアのアップデートを実施することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10531,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-port-1-1024x683.jpg" alt="" class="wp-image-10531"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">TTArtisan AF 27mm f/2.8の特徴</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>TTArtisan AF 27mm f/2.8の外観を紹介した後は、早速本製品を使用してみてわかった特徴を3つに分けて紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">軽量・コンパクト</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10532,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-attach-1024x683.jpg" alt="" class="wp-image-10532"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>TTArtisan AF 27mm f/2.8のサイズは61×31mm（最大径×長さ）ととてもコンパクトです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>コンパクトさがウリのα7Cに装着するとこんな感じ。重さはレンズ＋ボディで約500g弱ほどとなっており、びっくりするぐらい軽い。ミニマムな佇まいも好印象です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>旅行の時などに重たいレンズを付けていると足取りが重くなってしまいますが、この軽さならフットワーク軽く、色々な場所に持ち歩けそう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">最短撮影距離は0.33m</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10533,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-05-1024x683.jpg" alt="" class="wp-image-10533"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>TTArtisan AF 27mm f/2.8の最短撮影距離は0.33m。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>手持ちのレンズは下記のような最短焦点距離なので、まずまず寄れるレンズと言った印象です。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>TAMRON 28-75mm F/2.8 Di III:0.18m</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>SONY FE 40mm F2.5G（（SEL40F25G））: 0.25m</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>SONY Sonnar T* FE 55mm F1.8 ZA:0.55m</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>もう一歩寄れるとさらに迫力のある写真が撮れるのに…！というシーンも有りましたが、基本的には最短焦点距離で困ることは少ないと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">AF性能はそこそこ速い</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10534,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-image-02-1024x683.jpg" alt="" class="wp-image-10534"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>スナップ写真を撮る上ではAF性能の精度や早さはとても重要な要素。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>TTArtisanはMFのレンズを数多く手掛けておりAFに対応している製品は少ないようですが、そこそこ精度は高いと思いました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>純正レンズに比べるとやや遅く感じますが、ピタッとフォーカスが当たる感じは信頼がおけます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただし、フォーカスしたときにやや音がするので動画撮影には不向きに感じました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-5">フレアが発生しやすい</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10535,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-flare-02-1024x683.jpg" alt="" class="wp-image-10535"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>TTArtisan AF 27mm f/2.8の逆行耐性は低めで、光や半逆光の環境下で写真を撮るとフレアが出やすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日が沈む前の時間に何枚か写真を撮りましたが、この特性はわりと顕著だと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、フレアはポートレートなど味のある写真を撮る場合には有利に働く場合も多いので、必ずしもデメリットではありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>オールドレンスのような写真を撮りたい方におすすめできるレンズだと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-6">TTArtisan AF 27mm f/2.8の作例</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>最後にTTArtisan AF 27mm f/2.8 + α7Cの組み合わせでフォトウォークした際の写真を作例として紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボケ感や逆光耐性、画角のイメージなど参考にしていただければ幸いです！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-7">中目黒駅周辺</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10539,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-01-1024x683.jpg" alt="" class="wp-image-10539"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10542,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-04-1-1024x683.jpg" alt="" class="wp-image-10542"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10536,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-02-1024x683.jpg" alt="" class="wp-image-10536"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10538,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-03-1024x683.jpg" alt="" class="wp-image-10538"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10540,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-nakameguro-06-1024x683.jpg" alt="" class="wp-image-10540"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-8">渋谷駅周辺</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10549,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-shibuya-01-1024x683.jpg" alt="" class="wp-image-10549"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10548,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-shibuya-02-1024x683.jpg" alt="" class="wp-image-10548"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10544,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-shibuya-03-1024x683.jpg" alt="" class="wp-image-10544"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10546,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-shibuya-number-1024x683.jpg" alt="" class="wp-image-10546"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10547,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-shibuya-06-1024x683.jpg" alt="" class="wp-image-10547"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10545,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-sample-shibuya-05-683x1024.jpg" alt="" class="wp-image-10545"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-9">TTArtisan AF 27mm f/2.8 レビューまとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10543,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-image-01-1024x683.jpg" alt="" class="wp-image-10543"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>TTArtisan AF 27mm f/2.8を使用した感想を作例を交えて紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記のような特徴があって、APS−C機の入門用レンズとしてちょうどよいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>軽量コンパクトで扱いやすい</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>AF性能もそこそこ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>最短撮影距離は0.33m</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>F2.8の明るさ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>価格は2万円台</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>ソニーＥマウント、ニコンＺマウント、富士フイルムＸマウントと３つのマウントに対応しているので、気になった方は是非チェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210526\u0022]","post_id":"10526"} -->
<p>[itemlink post_id="10526"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/ttartisan-af-27-image-02.jpg',
  true,
  '2024-07-30T13:23:00+09:00',
  '2024-07-30T13:23:00+09:00',
  '2025-09-27T08:20:37+09:00'
);

-- FAQs for ttartisan-af-27-review
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ttartisan-af-27-review'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 縦構図写真の撮影が快適になる神アイテム！SmallRig 回転式マウントプレートキット レビュー (smallrig-plate)
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
  'smallrig-plate',
  '縦構図写真の撮影が快適になる神アイテム！SmallRig 回転式マウントプレートキット レビュー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p id="1e4bf74a-86f2-4ec9-b2d7-3f995b9873e0">ブログやSNSで情報発信をしていることもあり、日々様々な写真を撮影しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="d380320c-c299-401b-baf7-3c443f97af1e">構図にしっかりこだわって写真を撮るときは三脚を立てることも多いのですが、こんな悩みを以前から抱えていました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="c242b7b3-bda9-415d-bdb9-a49e83204990"><strong>縦構図の写真を撮る時の調整が面倒くさい…！</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="3c227ac5-b8f0-4e96-8d9c-4ed28e2c1afb">そんな僕の悩みをスッキリ解消してくれるアイテムが発売されました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="ffaca6a3-b282-4858-aec6-10cfcda972af">それが今回紹介するSmallRig 回転式マウントプレートキット（SR4148）というアイテム。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="d42b9a88-b8cf-4f0b-9c9e-b76d0c4464ba">三脚を立てて写真を撮るすべての方におすすめしたい！と自信を持って言える素晴らしいアイテムだったので本記事にて紹介したいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210425\u0022]","post_id":"10425"} -->
<p>[itemlink post_id="10425"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">SmallRig 回転式マウントプレートキットの外観</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回購入したα7シリーズ用の回転式マウントプレートキット。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>様々なカメラアクセサリーを手掛けるSmallRigから2023年3月に発売された新品です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10554,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-package-1024x683.jpg" alt="" class="wp-image-10554"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>さっそくパッケージを開封すると付属品がずらり。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10555,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-item-list-02-1024x683.jpg" alt="" class="wp-image-10555"/></figure>
<!-- /wp:image -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>付属品</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>ベースプレート</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>レンズリングマントプレート</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>L字クランプ</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>説明書</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>初回のセットアップはとても簡単で、まずは回転アダプタとプレートを2つのネジで固定。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10556,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-attach-01-1024x683.jpg" alt="" class="wp-image-10556"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>あとはカメラ本体にプレートを固定して、交換レンズを装着するだけ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>とてもシンプルなステップで仕様する準備が整います。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10557,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-attach-02-1024x683.jpg" alt="" class="wp-image-10557"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ちなみにアルミニウム合金とステンレススチールでできたベースプレートととプレートのレンズリングマントプレートの総量は185gとなっており、まぁまぁの重さを感じます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10558,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-image-1-1024x683.jpg" alt="" class="wp-image-10558"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">SmallRig 回転式マウントプレートキットの特徴</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>それではここからは実際にSmallRig 回転式マウントプレートキットを使用して感じた、本製品の特徴を5つ紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">水平・垂直モードを素早く切り替えられる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはなんと言っても縦構図写真の撮りやすさが格段にアップするのがとにかく嬉しい。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>縦方向も横方向もスイスイーっと移行できるのがとても気持ち良いですし、これまでのように雲台の角度を微調整する手間が省けるのがとても快適です。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="l-bottom-large">
<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="ja" dir="ltr">SmallRig 回転式マウントプレートキットを導入したんですが、これめちゃくちゃ便利…！<br><br>横も縦もシームレスに移行できて撮影が捗ります&#x263a;&#xfe0f;<br><br>風景写真を撮りに出かける時の必携アイテムになりそう。<br><br>詳細はこちら▼<a href="https://t.co/RLykH0V19H">https://t.co/RLykH0V19H</a> <a href="https://t.co/DkaTjWSYzk">pic.twitter.com/DkaTjWSYzk</a></p>&mdash; タカヒロ / デジスタ（ガジェットブログ） (@takahiro_mono) <a href="https://twitter.com/takahiro_mono/status/1650004776091021314?ref_src=twsrc%5Etfw">April 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>マウントを回転させるときの固さも程よく、縦置き状態にした時に安定感があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>一回使ってみてこれは風景写真を撮りに出かけたりするときには必携のアクセサリーだと感じました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10559,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-use-1024x683.jpg" alt="" class="wp-image-10559"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>こちらはsmallRig 回転式マウントプレートキットを使って撮影した縦構図の作例。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>色味以外は一切補正をかけていませんが、ぴったり水平・垂直がとれているのがわかります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10560,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-sony-roll-plate-sample-683x1024.jpg" alt="" class="wp-image-10560"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">レンズ交換できる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SmallRig 回転式マウントプレートキットはカメラを取り付けた状態でもレンズ交換が可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>リング横に付いているPUSHhボタンを押すとカメラ本体のレンズ取り外しボタンが押される仕組み。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>パンケーキレンズのようなコンパクトなレンズだと取り外しがしづらく感じると思いますが、それ以外であれば問題なく取り外しができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>購入前にはレンズ交換できるのかちょっとわからなかったので、交換できることを知って一安心。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10561,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-button-1024x683.jpg" alt="" class="wp-image-10561"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">着脱用のドライバーが付いている</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SmallRig 回転式マウントプレートキットはプレート底面に取り外し時に使うドライバーが収納できる形になっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラのクイックリリースプレートってしっかり固定するときに財布からコインを取り出す必要があって煩わしさを感じることも多いので地味に嬉しいポイント。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10562,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-driver-1024x683.jpg" alt="" class="wp-image-10562"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-5">アルカタイプ/マンフロットRC2三脚に対応</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SmallRig 回転式マウントプレートキットは下記2種類の雲台に載せることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>アルカスイス雲台</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>マンフロットRC2雲台</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>僕はマンフロットRC2の三脚とアルカスイス雲台の三脚を愛用しているので、シームレスにマウントできるのはとても便利だなと思いました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10563,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-mount-1024x683.jpg" alt="" class="wp-image-10563"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">バッテリー交換の方法は注意</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>最初に本製品を装着してカメラを色々いじっていたときに「あれ？ベースプレートつけるとバッテリーキャップと干渉して開けられないぞ？？」となりました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ですが、落ち着いて製品を見てみるとベースプレートとバッテリーキャップが当たる部分にはヒンジがあって、写真のように動かすことができるようになっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これによってバッテリーキャップとの干渉を防ぐ構造になっています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10564,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-battery-01-1024x683.jpg" alt="" class="wp-image-10564"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>もっとシンプルにバッテリーキャップが開閉できるといいなとは思ったのですが、これは複数のα7シリーズで併用できるようにするためには仕方ない処置だったのだと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>バッテリー交換時に一手間増えるのはやや残念ですが、ベースプレートを付けたままでもキャップが開閉できて一安心。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10565,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-battery-02-1024x683.jpg" alt="" class="wp-image-10565"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-7">SmallRig 回転式マウントプレートキット レビューまとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>α7Ⅳの撮影を快適に行うために購入したSmallRig 回転式マウントプレートキットを紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>滑らかにカメラが回転して横と縦構図の写真をスムーズに撮れるようになって大満足です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>風景写真やインスタグラム用に縦構図写真を撮る際にヘビーユーズしていきたいなと思います！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それでは今日はこの辺で。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-double is-thead-centered"} -->
<figure class="wp-block-table is-style-double is-thead-centered"><table class="has-fixed-layout"><thead><tr><th><span style="--the-cell-bg: #70c0a2" data-icon-size="l" data-icon-type="bg" data-text-color="white" aria-hidden="true" class="swl-cell-bg">&nbsp;</span>メリット</th><th><span style="--the-cell-bg: #f69f78" data-text-color="white" aria-hidden="true" class="swl-cell-bg">&nbsp;</span>デメリット</th></tr></thead><tbody><tr><td><span style="--the-cell-bg: #fbfbfb" data-icon-size="l" data-icon-type="bg" data-text-color="black" aria-hidden="true" class="swl-cell-bg">&nbsp;</span>縦置きの撮影がとても楽になる<br>プレートをつけたままレンズ交換可能<br>アルカスイス/マンフロットRC2の雲台に対応<br>マウント着脱用のドライバーが収納できる</td><td><span style="--the-cell-bg: #fffbfa" data-icon-size="l" data-icon-type="bg" data-text-color="black" aria-hidden="true" class="swl-cell-bg">&nbsp;</span>バッテリー交換時の作業が一手間増える（α7Ⅳ）</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210425\u0022]","post_id":"10425"} -->
<p>[itemlink post_id="10425"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/smallrig-SR4148-heading.jpg',
  true,
  '2024-07-30T13:46:52+09:00',
  '2024-07-30T13:46:52+09:00',
  '2025-09-27T08:20:46+09:00'
);

-- FAQs for smallrig-plate
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'smallrig-plate'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: thinkTANKphoto エアポートローラーダービー レビュー！見た目もお洒落な4輪キャリー付きカメラバッグ (airport-roller-derby-review)
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
  'airport-roller-derby-review',
  'thinkTANKphoto エアポートローラーダービー レビュー！見た目もお洒落な4輪キャリー付きカメラバッグ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>普段、撮影機材を持ち運ぶ際は<a href="https://www.amazon.co.jp/inCase-%E3%82%A4%E3%83%B3%E3%82%B1%E3%83%BC%E3%82%B9-Incase-CL58068-%E3%80%90%E4%B8%A6%E8%A1%8C%E8%BC%B8%E5%85%A5%E5%93%81%E3%80%91/dp/B008HFIWGO?psc=1&amp;SubscriptionId=AKIAJYV4LPMUZWNAMOIQ&amp;tag=takahiro1202-22&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B008HFIWGO" rel="noreferrer noopener" target="_blank">Incase DSLR Pro Pack</a>というリュックタイプのカメラバッグを愛用しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>スタイリッシュで大容量の機材を持ち運べるのがとてもお気に入りです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、リュックタイプのカメラバッグを背負って長時間移動する日が続くと肩や腰の痛みに悩まされるのが大きな悩みでした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで最近購入したのが<a href="https://www.amazon.co.jp/dp/B00K8ZKVHO?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">thinkTANKphoto エアポートローラーダービー</a>といカメラバッグ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>4輪キャスター付きで重たい機材が入ったバッグも楽々運べるし、見た目もカッコよいので日々の撮影でとても重宝しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事ではそんな僕のカメラライフを劇的に快適なものにしてくれたエアポートローラーダービーについて紹介したいと思います！</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210572\u0022]","post_id":"10572"} -->
<p>[itemlink post_id="10572"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">thinkTANKphoto エアポートローラーダービーの外観</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回新たに購入した撮影機材のエアポートローラーダービー。カメラアクセサリーを数多く手掛けるthinkTANKphotoの四輪キャリー付きカメラバッグです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10584,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-front-1024x682.jpg" alt="" class="wp-image-10584"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>サイズはH55.9 × W35.6 × D22.9cmとなっており、普段3~4泊ぐらいの旅行で使っている60Lのスーツケースとほぼ同じサイズ感です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10583,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-side-1024x682.jpg" alt="" class="wp-image-10583"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ローラーのサイズは直径5cm。回転が非常に滑らかで、すいすいバッグを動かすことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10582,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-detail-1024x682.jpg" alt="" class="wp-image-10582"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>スーツケースの持ち手がさっと伸ばせるのはもちろんのこと、カバンの上部と右側に肉厚な持ち手があるので、階段を上がる際などに両手で機材を持ち上げやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10586,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-handle-1024x682.jpg" alt="" class="wp-image-10586"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">エアポートローラーダービーの収納ポケットについて</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>エアポートローラーダービーの収納ポケットは大きく3つあります。さっそく普段使用しているアイテムをしまいながら、収納能力をチェックしていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">大容量の機材が入るメインコンポーネント</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10581,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-main-pocket-1024x682.jpg" alt="" class="wp-image-10581"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>1つ目は撮影機材を収納できるメインコンポーネント。仕切りは好きな形にレイアウトを変更することができる仕様です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>底が深くズームレンズなども縦に収納できるため、思った以上にたくさんの機材をしまうことができました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10580,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-use-01-1024x682.jpg" alt="" class="wp-image-10580"/></figure>
<!-- /wp:image -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>収納できる機材の目安</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>カメラ2台</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ズームレンズ3本</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>単焦点レンズ3本</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>三脚</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>卓上三脚</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>持ち歩く荷物の数を絞れば、旅行用のスーツケースを兼ねることもできそうですし、大容量なのはやはり便利です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">ファスナー付きポケット</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10578,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-pocket-02-1024x682.jpg" alt="" class="wp-image-10578"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラバッグの蓋の裏にはメッシュポケットが2つ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SDカードケースやレンズフィルター、忍者レフなどの薄い形状の撮影機材を収納しておくのにうってつけです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">フロントポケット</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10579,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-front-pocket-1024x682.jpg" alt="" class="wp-image-10579"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>バッグの外側には縦に深いフロントポケット。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>細かなポケットが複数あるので、予備バッテリーやレンズペンなどの細々したアイテムを分けて収納することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>15インチサイズのノートパソコンも収納できるので、撮影に必要な機材＋αまでしっかり持ち運ぶことが可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-5">thinkTANKphoto エアポートローラーダービーのメリット</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからはthinkTANKphoto エアポートローラーダービーのメリットを4つ紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">キャスターが4つあるから移動しやすい</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10585,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-2-1024x682.jpg" alt="" class="wp-image-10585"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>キャスター付きカメラバッグには下記の2種があります。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>2輪</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>4輪</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>ストレスなく重い機材を持ち運ぶことを考えたら四輪の方がいいなと思い、エアポートローラーダービーを買いましたが、この決断をして本当に良かったです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>体の横にスーツケースがあるとコンパクトに移動できるし、手首の負担も少なくて長時間移動しても疲れを全く感じません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2輪のアイテムの方が価格や安いんですが、予算が許すなら4輪のアイテムを買った方がいいかなと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-7">見た目がシンプル</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10575,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-4-1024x682.jpg" alt="" class="wp-image-10575"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>キャスター付きのカメラバッグを購入するにあたり、様々なアイテムチェックしました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで思ったのがキャリー付きカメラバッグって見た目が野暮ったい製品が多いということ。みるからにカメラバッグ見たいなデザインは苦手です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、エアポートローラーダービーは割と見た目がシンプルで、かっこいいなぁと思いました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>どんな服装にも合うシンプルなデザインが好みの方にとてもおすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-8">蓋が横に開く</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10577,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-open-1024x682.jpg" alt="" class="wp-image-10577"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>キャスター付きカメラバッグは蓋の構造が2種類あります。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>蓋が縦に開く</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>蓋が横に開く</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>エアポートローラーダービーは横に開く構造を採用してるのですが、実際に使ってみるとこれも便利です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>機材を取り出すときに蓋が横に開くと省スペースで機材を取り出せるからです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>蓋の裏側にある収納ポケットから予備バッテリーを取り出して交換したりする作業もサクッと行えるのも横向きの方が手を動かす範囲が小さくて済みます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-9">飛行機の機内持ち込みが可能</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10576,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-3-1024x682.jpg" alt="" class="wp-image-10576"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>エアポートローラーダービーは名前の通り、国内線100席以上の航空機に機内持ち込み可能なサイズで設計されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮影機材は繊細なアイテムなので肌身離さず移動したいですし、荷物を待つ時間が節約できるのでこの点もとても良い。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これがあれば大容量の機材をもって飛行機に乗る時も安心です。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-10">thinkTANKphoto エアポートローラーダービーのデメリット</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>次にthinkTANKphoto エアポートローラーダービーのデメリットに感じた部分を2点紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-11">機材の取り回しはやや億劫になる</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>キャスター付きカメラバッグ全般に言えることですが、リュックタイプのカメラに比べると機材の取り出しやすさが下がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>メインカメラにサクッとアクセスできるポケットがないですし、バッグ自体も大きいので蓋を頻繁に開閉するのが億劫になってしまうためです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>シーンにもよりますが、エアポートローラーダービーで必要な機材をごそっと持って移動し、頻繁に取り出すアイテムは<a href="https://digital-style.jp/pgytech-onemo-sling-11l-review">PGYTECH OneMo Sling 11L</a>のようなコンパクトなカメラバッグに入れ替えて撮影するのがいいと思いました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-12">ノートパソコンをフロントポケットに入れる運用はややイマイチ</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>上記に近いですが、フロントポケットにノートパソコンなど重たい機材を入れると、機材を取り出しやすさがより下がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>機材の取り出しやすさを第一優先にするならフロントポケットになるべくものは入れない運用が良さそうです。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-13">キャスターカバーのセット購入もおすすめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>通常のキャリーケースは利用機会が年に数回なので、使った後にキャスターをさっと洗ってクローゼットに収納していたのですが、エアポートローラーダービーは週一ぐらいの頻度で使用します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>毎回洗う運用もイマイチですし、そこそこ高額なアイテムだったので大事に使いたい。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ということで、Amazondでキャスターカバーも別途購入しました。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:paragraph -->
<p><strong>キャスターカバーの魅力</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>移動時の騒音が軽減される</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>タイヤが傷つくのを防止できる</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>家から帰ったらカバーを外してさっと水洗いできる</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>これがあるとないのではだいぶ使用感に差が出るので、これも買って大正解でした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1,000円ぐらいでてにはいるので、これからキャリー型のカメラバッグを買う方におすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210573\u0022]","post_id":"10573"} -->
<p>[itemlink post_id="10573"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-15">thinkTANKphoto エアポートローラーダービー レビューまとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>重い機材を体の負担少なく持ち運ぶために購入したthinkTANKphoto エアポートローラーダービーをご紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>全体的な設計についても大満足ですし、見た目も程よくシンプルで使い勝手が良いのがお気に入りです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>大量の機材を身軽に持ち運びたい方はぜひチェックしてみてください。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210572\u0022]","post_id":"10572"} -->
<p>[itemlink post_id="10572"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/airport-roller-derby-4.jpg',
  true,
  '2024-07-30T14:05:39+09:00',
  '2024-07-30T14:05:39+09:00',
  '2025-09-27T08:20:23+09:00'
);

-- FAQs for airport-roller-derby-review
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'airport-roller-derby-review'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 最強のお出かけ用単焦点レンズ！FE 40mm F2.5G レビュー (sony-sel40f25g-review)
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
  'sony-sel40f25g-review',
  '最強のお出かけ用単焦点レンズ！FE 40mm F2.5G レビュー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p id="e8a769ed-9cb8-4b54-94db-043b23639a55">普段から写真を撮るときはスマホではなく一眼カメラ派。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="d965df3e-2118-4ed3-a299-ac6b036683a2">これまではα7C+ Sonnar T* FE 55mm F1.8 ZAを愛用していたのですが、もう少しコンパクトなレンズが欲しいということで<a href="https://amzn.to/3gH4OMj" target="_blank" rel="noreferrer noopener">FE 40mm F2.5G（SEL40F25G）</a>を購入しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="471f94f1-cbf9-491a-a6f4-4b9cfad4bf68">単焦点レンズとしてはかなりミニマルなサイズ感で、気軽にスナップ写真を撮るのに便利と思ったのが購入の決め手です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p id="9d47359b-b4f6-4f4d-9338-0a266a9448bb">ということで、本記事では FE 40mm F2.5Gを使用して良かった点、イマイチだった点を紹介していきます！</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210713\u0022]","post_id":"10713"} -->
<p>[itemlink post_id="10713"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">SONY FE 40mm F2.5Gの外観</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回購入したFE 40mm F2.5G（SEL40F25G）。2021年4月にSONYから発売された単焦点レンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>同時期に鏡筒デザインをほぼ同じくする「FE 24mm F2.8 G」と「FE 50mm F2.5 G」も発売されており、三兄弟レンズなんて呼ばれてるそう。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10715,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-package-1024x683.jpg" alt="" class="wp-image-10715"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>パッケージを開封すると付属品（レンズ本体、説明書、製品保証書）がずらり。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10716,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-item-list-1024x683.jpg" alt="" class="wp-image-10716"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>こちらがFE 40mm F2.5G（SEL40F25G）の本体。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>筐体にはGレンズらしく、MF/AFのマニュアルボタンやフォーカスホールドボタンなどが搭載されています。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10724,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-button-1024x683.jpg" alt="" class="wp-image-10724"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>フィルター径は49mm。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>普段使用しているレンズ群は67mmのものばかりなのでとてもコンパクトに感じます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10723,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-size-1024x683.jpg" alt="" class="wp-image-10723"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レンズフィルターは本体とレンズフードどちらにでもつけられる仕様。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズフード側にNDフィルターをつければ、素早く明るさを調整できるようになって便利ですね。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10722,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-protector-1024x683.jpg" alt="" class="wp-image-10722"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-1">SONY FE 40mm F2.5Gの特徴</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>それではここからは実際にSONY FE 40mm F2.5Gを一週間ほど使用してみて感じた、本製品の特徴を紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">コンパクトなサイズ感</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>FE 40mm F2.5GはフルサイズEマウントのサイズは68 × 45mm（最大径×長さ）、重さも173gととてもコンパクトです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10721,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-weight-1024x683.jpg" alt="" class="wp-image-10721"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>コンパクトさがウリのα7Cに装着するとこんな感じ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>重さはレンズ＋ボディで約600gほどとなっており、フルサイズ機をのカメラを持っているとは思えない軽さです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このミニマムな佇まいなんとも可愛い。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10720,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-attach-1024x683.jpg" alt="" class="wp-image-10720"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ちなみにα7CとFE 40mm F2.5Gを普段使いしているカメラバッグに安全に持ち運ぶために<a href="https://www.amazon.co.jp/dp/B0946TCKKW?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">HAKUBAのカメラ用ラッピングクロス</a>も購入。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この組み合わせがあれば、普段使いしているカバンにもさりげなくカメラを収納して外出することが可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10719,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-bag-1024x683.jpg" alt="" class="wp-image-10719"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「カメラを気軽に外に持ち出したい！でもコンデジでは物足りない…。」そんな僕のニーズにしっかり応えてくれるレンズだなと思いました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">充実の外部ボタン</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SONY FE 40mm F2.5Gは下記のように外部ボタンが豊富に搭載されています。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>AF/MF切り替えボタン</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>フォーカスホールドボタン</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>絞りリング</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>カメラの設定画面側を見ないでも直感的に各種設定ができるのはやっぱり便利。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>特にいいなと思うのはAF/MFの切り替えスイッチ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>物撮りの時は前ボケを意識した構図でよく写真を撮るのですが、意図したところにフォーカスが当たらないことがたまにあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな時にAF/MFの切り替えがさっと行えると撮影効率が上がります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10718,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-image-1024x683.jpg" alt="" class="wp-image-10718"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">寄れるレンズ</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>FE 40mm F2.5Gの最短撮影距離は25cmとなっており、かなり寄ることができるレンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>テーブルフォトなどを撮る時にぐいっと寄れると、余分な情報を画角から外して、主役が引き立ついい写真が撮りやすい。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>常用レンズとして非常に扱いやすいレンズだなと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":10717,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-side-01-1024x683.jpg" alt="" class="wp-image-10717"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-5">SONY FE 40mm F2.5Gの作例</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからはSONY FE 40mm F2.5GとSony α7Cを持って鎌倉に観光へ出かけた際に撮影した写真を紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボケ感や逆光耐性、画角のイメージなど参考にしていただければ幸いです！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">鶴岡八幡宮</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10730,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-temple-01-1024x683.jpg" alt="" class="wp-image-10730"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10728,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-temple-05-1024x683.jpg" alt="" class="wp-image-10728"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10725,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-temple-03-1024x683.jpg" alt="" class="wp-image-10725"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10726,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-temple-02-1024x683.jpg" alt="" class="wp-image-10726"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10727,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-temple-04-1024x683.jpg" alt="" class="wp-image-10727"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-7">街撮りスナップ写真</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10735,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-01-1024x683.jpg" alt="" class="wp-image-10735"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10737,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-02-1024x683.jpg" alt="" class="wp-image-10737"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10733,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-03-1024x683.jpg" alt="" class="wp-image-10733"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10732,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-04-1024x683.jpg" alt="" class="wp-image-10732"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10734,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-05-1024x683.jpg" alt="" class="wp-image-10734"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10736,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-town-06-1024x683.jpg" alt="" class="wp-image-10736"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-8">由比ヶ浜周辺</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10743,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-sea-01-1024x683.jpg" alt="" class="wp-image-10743"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10742,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-sea-02-1024x683.jpg" alt="" class="wp-image-10742"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10738,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-sea-04-1024x683.jpg" alt="" class="wp-image-10738"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10739,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-sea-06-1024x683.jpg" alt="" class="wp-image-10739"/></figure>
<!-- /wp:image -->

<!-- wp:image {"id":10740,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/sony-sel40f25g-kamakura-sea-08-1024x683.jpg" alt="" class="wp-image-10740"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-9">Eマウントの35~40mmの単焦点レンズを比較</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>下記は今回のお出かけ用のレンズ購入にあたり候補に上げた、Eマウントの35~40mmの単焦点レンズのスペック比較表。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>FE 40mm F2.5Gは値段が一番高いですが、スペックのバランスがとても優秀。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>長く愛用する一本を選ぶならケチらずにスペックを優先すべき！という結論でE 40mm F2.5G（SEL40F25G）を選びました。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false,"swlScrollable":"sp","swlTableWidth":"800px"} -->
<figure class="wp-block-table"><table><thead><tr><th>レンズ</th><th>FE 40mm F2.5G<br>（SEL40F25G）</th><th>FE 35mm F1.8<br>（SEL35F18F）</th><th>FE 35mm F2.8ZA<br>（SEL35F28Z）</th></tr></thead><tbody><tr><th>実売価格</th><td>約7万円</td><td>約6.5万円</td><td>約6万円</td></tr><tr><th>重さ</th><td>173g</td><td>280g</td><td>120g</td></tr><tr><th>大きさ<br>（幅 × 長さ）</th><td>68 × 45mm</td><td>65.6 × 73mm</td><td>61.5 × 36.5mm</td></tr><tr><th>開放F値</th><td>F2.5</td><td>F1.8</td><td>F2.8</td></tr><tr><th>解像度<br>コントラスト</th><td>画面端まで<br>高い</td><td>画面端は<br>やや低い</td><td>中央・画面端<br>共に低め</td></tr><tr><th>最短撮影距離</th><td>0.25m</td><td>0.22m</td><td>0.35m</td></tr><tr><th>最大撮像倍率</th><td>0.2倍</td><td>0.24倍</td><td>0.12倍</td></tr><tr><th>絞りリング</th><td>対応</td><td>非対応</td><td>非対応</td></tr><tr><th>フォーカス<br>ホールドボタン</th><td>対応</td><td>対応</td><td>非対応</td></tr><tr><th>フォーカス<br>切り替えスイッチ</th><td>対応</td><td>対応</td><td>非対応</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-10">Gシリーズ三兄弟レンズの比較表</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>こちらは今回紹介したE 40mm F2.5G（SEL40F25G）と同時期に発売された焦点距離違いのレンズ2本野スペック比較表。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>焦点距離やF値以外はどれもほぼ同じサイズ感でとてもコンパクトです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ジンバル撮影などをする方はこちらのレンズを複数本持っておくと、ジンバルの設定はそのままに異なる画角の映像を取りやすそうです。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false,"swlScrollable":"sp","swlTableWidth":"800px"} -->
<figure class="wp-block-table"><table><thead><tr><th>製品名</th><th>FE 24mm F2.8 G SEL24F28G</th><th>FE 40mm F2.5 G SEL40F25G</th><th>FE 50mm F2.5 G SEL50F25G</th></tr></thead><tbody><tr><th>構成</th><td>7群8枚</td><td>9群9枚</td><td>9群9枚</td></tr><tr><th>フォーカス</th><td>AF/MF</td><td>AF/MF</td><td>AF/MF</td></tr><tr><th>絞り羽根枚数</th><td>7 枚</td><td>7 枚</td><td>7 枚</td></tr><tr><th>焦点距離</th><td>24 mm</td><td>40 mm</td><td>50 mm</td></tr><tr><th>F値</th><td>2.8</td><td>2.5</td><td>2.5</td></tr><tr><th>最短撮影距離</th><td>0.24m(AF時)/0.18m(MF時)</td><td>0.28m(AF時)/0.25m(MF時)</td><td>0.35m(AF時)/0.31m(MF時)</td></tr><tr><th>最大撮影倍率</th><td>0.13倍(AF時)/0.19倍(MF時)</td><td>0.2倍(AF時)/0.23倍(MF時)</td><td>0.18倍(AF時)/0.21倍(MF時)</td></tr><tr><th>画角</th><td>84 度</td><td>57 度</td><td>47 度</td></tr><tr><th>フィルター径</th><td>49 mm</td><td>49 mm</td><td>49 mm</td></tr><tr><th>最大径x長さ</th><td>68×45 mm</td><td>68×45 mm</td><td>68×45 mm</td></tr><tr><th>重量</th><td>162 g</td><td>173 g</td><td>174 g</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-12">SONY FE 40mm F2.5G レビューまとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10744,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/08/camera-lens-1-1024x683.jpg" alt="" class="wp-image-10744"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>お出かけ用のレンズとして購入したSONY FE 40mm F2.5Gを紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記のようなメリットのあるレンズでとても満足の行く買い物ができたと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>やはり軽さは正義ですね。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今後はα7CとFE 40mm F2.5Gの組み合わせをバッグに入れてスナップ撮影を楽しみたいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それでは今日はこのへんで。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210713\u0022]","post_id":"10713"} -->
<p>[itemlink post_id="10713"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/08/camera-lens-1.jpg',
  true,
  '2024-07-30T18:20:00+09:00',
  '2024-07-30T18:20:00+09:00',
  '2025-09-27T08:19:09+09:00'
);

-- FAQs for sony-sel40f25g-review
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sony-sel40f25g-review'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: The Gate Hotel 雷門 by HULIC (the-gate-hotel-kaminarimon-gate-by-hulic)
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
  'the-gate-hotel-kaminarimon-gate-by-hulic',
  'The Gate Hotel 雷門 by HULIC',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  'The Gate Hotel 雷門 by HULIC',
  'ライトアップされた東京スカイツリーや浅草寺を一望できる屋上展望フロアが魅力の良コスパホテル。',
  '<p>2012年に浅草寺の直ぐそばエリアに開業した地上14階建てのホテル。</p>
<p>13階にあるフロントやレストランからは東京スカイツリーと浅草の街並みを眺めることができます。</p>
<p>また同ホテルの14階には宿泊者様専用屋上テラスもあり、開放感を味わいながら非日常なひと時を味わうことが可能です。</p>
<p>宿泊費用も良心的な価格帯のホテルなので、浅草観光に訪れた際はぜひ宿泊してみてはいかがでしょうか?</p>',
  '東京都台東区雷門2-16-11',
  'https://www.gate-hotel.jp/asakusa-kaminarimon/rb/index.html',
  'The Gate Hotel 雷門 by HULIC公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>	銀座線「浅草駅」・出口２から徒歩で約2分</li>
<li>都営浅草線「浅草駅」出口A４から徒歩で約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.4,
  3.5,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-5.jpg',
  true,
  '2024-08-02T18:43:36+09:00',
  '2024-08-02T18:43:36+09:00',
  '2024-08-02T18:50:17+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for the-gate-hotel-kaminarimon-gate-by-hulic
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-5.jpg', 'The Gate Hotel 雷門 by HULICから眺める朝焼け', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-1.jpg', 'The Gate Hotel 雷門 by HULICから眺める浅草寺', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-2.jpg', 'The Gate Hotel 雷門 by HULICから眺める夜景Night view from The Gate Hotel Raminarimon by HULIC', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-4.jpg', 'The Gate Hotel 雷門 by HULIC13階にある展望スペース', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/the-gate-hotel-3.jpg', 'The Gate Hotel 雷門 by HULICの客室の雰囲気', 4);

-- FAQs for the-gate-hotel-kaminarimon-gate-by-hulic
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), 'どんな夜景が楽しめますか？', 'ライトアップされた東京スカイツリーや浅草寺を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), '東京スカイツリーのライトアップは何時まで点灯していますか？', '日没から24時までライトアップは実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), '東京スカイツリーまでどの位の距離ですか？', '徒歩で約20～30分の距離に位置しています。', 2);

-- Hotel info for the-gate-hotel-kaminarimon-gate-by-hulic
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'the-gate-hotel-kaminarimon-gate-by-hulic'), '14:00', '11:00', NULL, '<a class="panelLink-rakuten" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889455127&vc_url=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137085%2F137085.html" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空席をチェック</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fthe-gate-asakusa-kaminarimon-by-hulic.ja.html" rel="nofollow">Booking.comで空室をチェック</a> <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad396493%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらん.netで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00001822%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: THE KANZASHI TOKYO ASAKUSA（ザ カンザシ 東京 浅草） (the-kanzashi-tokyo-asakusa)
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
  'the-kanzashi-tokyo-asakusa',
  'THE KANZASHI TOKYO ASAKUSA（ザ カンザシ 東京 浅草）',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'taito'),
  NULL,
  'THE KANZASHI TOKYO ASAKUSA（ザ カンザシ 東京 浅草）',
  '屋上にルーフトップテラスがあり、東京スカイツリーやライトアップされた浅草寺や花やしきを眺めることができる。宿泊費用もリーズナブルで浅草観光の拠点におすすめ。',
  '<p>浅草田甫 草津亭という150余年続いた老舗料亭の跡地にできたTHE KANZASHI TOKYO ASAKUSA。</p>
<p>日本最古の遊園「浅草花やしき」のすぐそばにある13階建の宿泊施設でルーフトップテラスから東京スカイツリーや浅草寺、浅草花やしきを眺めることが可能です。</p>
<p>ライトアップされた東京スカイツリーと浅草寺五重塔の共演はなんとも趣深いものがあります。</p>
<p>毎年7月に行われている隅田川花火大会では「ROOF TOP TERRACE PARTY」というイベントも実施されています。</p>
<p>眺望のレベルも高く、宿泊費もリーズナブルに抑えることができるため、ぜひ浅草周辺で観光する際に予約してみてはいかがでしょうか？</p>',
  '東京都台東区浅草２丁目２７−１０',
  'https://kanzashi-tokyoasakusa.com/',
  'THE KANZASHI TOKYO ASAKUSA',
  'https://www.instagram.com/thekanzashitokyoasakusa/',
  'Instgram公式アカウント',
  'https://www.hanayashiki.net/',
  '浅草花やしき',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>つくばエクスプレス「浅草駅」A出口 より徒歩7分</li>
<li>東京メトロ銀座線「浅草駅」A4出口 より徒歩10分</li>
<li>都営地下鉄浅草線「浅草駅」A4出口 より徒歩12分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7924.042393150097!2d139.79444473663733!3d35.71484365079529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2512997ec7%3A0xef9da88a550f1e8a!2sTHE%20KANZASHI%20TOKYO%20ASAKUSA!5e0!3m2!1sja!2sjp!4v1722762577274!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  3,
  3.2,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-9.jpg',
  true,
  '2024-08-04T22:50:45+09:00',
  '2024-08-04T22:50:45+09:00',
  '2024-08-05T02:20:44+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for the-kanzashi-tokyo-asakusa
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-9.jpg', 'THE KANZASHI TOKYO ASAKUSAから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-13.jpg', 'ライトアップされる浅草寺', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-17.jpg', 'ライトアップされる東京スカイツリー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-15.jpg', '浅草寺の本堂と宝蔵門', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-16.jpg', '馬車道通りを行き交う車', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-11.jpg', 'ライトアップされる浅草寺と花やしき', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-12.jpg', '28階建ての浅草ビューホテル', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-10.jpg', 'ザ カンザシ 東京 浅草の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-8.jpg', 'ライトアップされる浅草寺', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-7.jpg', 'ライトアップされる花やしき', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-5.jpg', 'THE KANZASHI TOKYO ASAKUSA ルーフトップテラスの雰囲気①', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-4.jpg', 'THE KANZASHI TOKYO ASAKUSA ルーフトップテラスの雰囲気②', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-3.jpg', 'THE KANZASHI TOKYO ASAKUSAの眺望', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-2.jpg', 'THE KANZASHI TOKYO ASAKUSAの眺望', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-6.jpg', 'THE KANZASHI TOKYO ASAKUSAの客室の雰囲気', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kanzashi-asakusa-hotel-1.jpg', 'THE KANZASHI TOKYO ASAKUSAの外観', 15);

-- FAQs for the-kanzashi-tokyo-asakusa
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'どんな夜景が楽しめますか？見どころはどこですか？', '広々としたバルコニーから東京スカイツリーや浅草寺、花屋敷などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), '13Fバルコニーの開放時間は何時までですか？', '6：30～23：00', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'THE KANZASHI TOKYO ASAKUSAはいつ開業したホテルですか？', 'THE KANZASHI TOKYO ASAKUSAは20214月に開業しました。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), 'THE KANZASHI TOKYO ASAKUSAのアメニティグッズを教えてください。', 'シャンプー・コンディショナー・ボディソープ・ハンドソープ・歯ブラシ・ヘアブラシ・コットン・綿棒・カミソリ・ボディスポンジ・バスタオル・フェイスタオル・ナイトウェア・コーヒー・紅茶・日本茶', 3);

-- Hotel info for the-kanzashi-tokyo-asakusa
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'the-kanzashi-tokyo-asakusa'), '15:00', '11:00', NULL, '<a class="panelLink-rakuten" href="https://hb.afl.rakuten.co.jp/hgc/224a57f2.20b5fb66.224a57f3.e2ba24d0/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182336%2F182336.html&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUD03&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fthe-kanzashi-tokyo-asakusa.ja.html" rel="nofollow">Booking.comで空室をチェック</a>', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=890761003&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad372875%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=890761003" height="1" width="0" border="0">じゃらんで空室をチェック</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00082227%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室をチェック</a>');

-- Post: 枕橋 (makura-bridge)
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
  'makura-bridge',
  '枕橋',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '枕橋',
  '東京スカイツリーを背景に東武伊勢崎線の車両が通過する様子を捉えることができる人気の撮影スポット',
  '<p>墨田区役所のすぐそばにある枕橋。</p>
<p>北十間川と隅田川の合流する手前に架かる小さな橋で、東側に東京スカイツリーを眺めることができます。</p>
<p>橋の近くには東武伊勢崎線の車両が頻繁に通過するので、電車が通過するタイミングをうまく捉えるとダイナミックな写真を撮影することが可能です。</p>
<p>また南側にはライトアップされる源森川水門があったり、複数の飲食店が連なる東京ミズマチなどもあり、見どころが多い場所となっています。</p>
<p>東京スカイツリー周辺にはさまざまな写真スポットが点在しているので、ぜひ近くを立ち寄った際に訪れてみてください。</p>',
  '東京都墨田区19',
  'https://www.tokyo-mizumachi.jp/',
  '東京ミズマチ公式サイト',
  'https://nightscape.tokyo/pickup/sumida-river-bridge/',
  '隅田川に架るライトアップが美しい個性豊かな12の橋を紹介',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>本所吾妻橋駅A3より徒歩4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.431792046476!2d139.802174!3d35.7112642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec517bc3e69%3A0xdfe58b5910a315b9!2z5p6V5qmL!5e0!3m2!1sja!2sjp!4v1722781407267!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.4,
  3.2,
  3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-3.jpg',
  true,
  '2024-08-04T23:28:20+09:00',
  '2024-08-04T23:28:20+09:00',
  '2024-08-19T01:07:21+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for makura-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-3.jpg', '枕橋から眺める東京スカイツリー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-5.jpg', '枕橋の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-1.jpg', '東京ミズマチの様子', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-7.jpg', 'ライトアップされる源森川水門', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/makura-bridge-6.jpg', 'ライトアップされる源森川水門', 4);

-- FAQs for makura-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東側に東京スカイツリー、南側に源森川水門を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), '東京スカイツリーのライトアップは何時まで実施されていますか？', '東京スカイツリーは日没から24時までライトアップは実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'makura-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 羽田空港第一ターミナル 展望デッキ (haneda-airport)
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
  'haneda-airport',
  '羽田空港第一ターミナル 展望デッキ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'ota'),
  NULL,
  '羽田空港第一ターミナル 展望デッキ',
  '羽田空港を利用する前後に訪れたい無料の展望デッキ。富士山と第三旅客ターミナルが重なる光景がとても美しい。',
  '<p>東京の玄関として1日に500便が集合する羽田空港。</p>
<p>日本で最大の面積を誇る同空港には3つの展望デッキがあります。</p>
<p>どの展望デッキも開放感抜群で多くの航空機が離着陸する様子を眺めることができます。</p>
<p>3つの展望デッキの中で夜景鑑賞に特におすすめしたいのが第一旅客ターミナル屋上にある展望デッキ。</p>
<p>空気が澄んでいる日には第三ターミナルと富士山が重なり夕方から夜にかけてとても美しい光景を眺めることができます。</p>
<p>滑走路の進入灯が夜景に華を添えているのも素晴らしいです。</p>
<p>羽田空港内は商業施設も充実しているので旅行ではなく通常のデート先に選ぶのも良いかもしれません。</p>
<p>なお、冬場に屋外デッキで夜景を眺めるのにやや抵抗がある方は同ビル5Fにある「<a href="https://store.starbucks.co.jp/detail-1612/">羽田空港第1ターミナル THE HANEDA HOUSE</a>」の窓から夜景を眺めるのがおすすめです。</p>',
  '東京都大田区羽田空港 3-3-2',
  'https://tokyo-haneda.com/service/facilities/observation_deck.html',
  '展望デッキ | サービス一覧 | サービス案内 | 羽田空港旅客ターミナル',
  NULL,
  NULL,
  NULL,
  NULL,
  '<ul><li>第1・第2ターミナル：6:30～22:00</li><li>第3ターミナル：24時間</li></ul>',
  'なし ※天候や保安上の理由により閉鎖する場合あり',
  '無料',
  '<ul>
<li>京急空港線「羽田空港駅」 約2分</li>
<li>東京モノレール「羽田空港第１ビル駅」 約2分</li>
</ul>',
  '-',
  '<iframe title="羽田空港第一ターミナル 展望デッキの位置を記したマップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25969.698471991007!2d139.75855730667735!3d35.54845844831101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601863f79e33ff63%3A0xcbaed55f759021f7!2z576955Sw56m65riv56ys5LiA44K_44O844Of44OK44OrIOWxleacm-ODh-ODg-OCrQ!5e0!3m2!1sja!2sjp!4v1703342982665!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/qD1neeRqG8c?si=77Vc6X6JYQ5nnBfm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><script type="application/ld+json"> {"jsonLd":{"@context":"http://schema.org","@type":"VideoObject","name":"【タイムラプス】羽田空港第1ターミナル 展望デッキからの夜景","description":"羽田空港第1ターミナル 展望デッキから撮影したタイムラプスです。富士山と羽田空港第3ターミナルが重なる光景や航空機を滑走路路を飛び立つ光景をお楽しみください。撮影スポット情報はこちら▼https://nightscape.tokyo/ota/haneda-airport/撮影機材リスト▼https://amzn.to/3DaiZ7e","thumbnailUrl":"https://i.ytimg.com/vi/qD1neeRqG8c/default.jpg","uploadDate":"2024-12-14T11:34:29Z","duration":"PT27S","contentUrl":"https://www.youtube.com/watch?v=qD1neeRqG8c","interactionCount":"22"}} </script>',
  NULL,
  NULL,
  null,
  null,
  4.8,
  2.8,
  3.8,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-19.jpg',
  true,
  '2024-12-14T20:36:00+09:00',
  '2024-12-14T20:36:00+09:00',
  '2024-12-15T12:18:48+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for haneda-airport
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-19.jpg', '羽田空港第一ターミナル 展望デッキの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-15.jpg', '富士山と旅客機', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-11.jpg', '夕暮れ時の羽田空港ガリバーズデッキ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-13.jpg', '羽田空港第一ターミナル 展望デッキの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-6-1.jpg', '富士山と羽田空港第三ターミナル', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-14.jpg', '川崎の工業地帯の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-17.jpg', '羽田空港第三ターミナル', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-9.jpg', '夕日と滑走路を走る旅客機', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-8.jpg', '羽田空港の先に夕陽が沈む様子', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-5.jpg', '望遠レンズで撮影した羽田空港第三ターミナル', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-1-1.jpg', '夕暮れ時の富士山', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-2-1.jpg', '望遠レンズで撮影した富士山', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-6.jpg', '羽田空港の新管制塔', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-7.jpg', '夕陽が差し込む展望デッキ', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-1.jpg', '羽田空港 第2ターミナル方面の景色', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-2.jpg', '羽田空港の新管制塔と滑走路', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-4.jpg', '旅客機が並ぶ様子', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/haneda-airport-3.jpg', '羽田空港第一ターミナル 展望デッキの雰囲気', 17);

-- FAQs for haneda-airport
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), 'どんな夜景が楽しめますか？見どころはどこですか？', '富士山と第三旅客ターミナルが重なる光景や川崎の工場夜景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'haneda-airport'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: キャロットタワー 展望台 スカイキャロット (carrot-tower-observation)
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
  'carrot-tower-observation',
  'キャロットタワー 展望台 スカイキャロット',
  'spot',
  (SELECT id FROM categories WHERE slug = 'setagaya'),
  NULL,
  'スカイキャロット展望ロビー',
  '都心の景観と美しい富士山を眺めることができる無料の展望台',
  '<p>世田谷区のランドマークであるキャロットタワー。</p>
<p>同ビルの26階には無料展望台の「スカイキャロット展望ロビー」があり下記のような景色を楽しむことができます。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>都心方面</dt>
<dd>東京タワーやスカイツリーなどのランドマーク、新宿や渋谷の高層ビル群</dd>
<dt>神奈川方面</dt>
<dd>丹沢山地や富士山をバックにした世田谷の街並み、世田谷通りや首都高渋谷線を行き交う車両、横浜方面の高層ビル群</dd>
</dl>
</div>

<p>空気が澄む冬には夕暮れ時に富士山のシルエットを眺めることができ、とても美しい夜景を楽しむことが可能です。</p>
<p>有料でもおかしくないほど美しい景色を楽しめる場所にも関わらず、人の数は比較的落ち着いているので、ゆっくり夜景鑑賞をしたい方におすすめです。</p>
<p>なお、都心方面の景観はオークラレストランが貸切営業の場合、見学ができないため事前に「<a href="https://okura-sky-carrot.com/calendar/">営業日カレンダー</a>」をチェックしてから訪問しましょう。</p>',
  '東京都世田谷区太子堂 4-1-1',
  'https://www.city.setagaya.lg.jp/mokuji/kusei/012/002/d00004091.html',
  'スカイキャロット展望ロビー(キャロットタワー26階) | 世田谷区ホームページ',
  NULL,
  NULL,
  'https://okura-sky-carrot.com/',
  'オークラレストランスカイキャロット',
  '<dl><dt>展望フロア</dt><dd>9時30分～23時まで</dd><dt>レストラン・カフェ</dt><dd>10時～22時まで（ラストオーダー21時）</dd></dl>',
  '<ul>
<li>毎月第2水曜日</li>
<li>年末年始</li>
</ul>',
  '無料',
  '<ul>
<li>田園都市線「三軒茶屋駅」下車3分</li>
<li>世田谷線「三軒茶屋駅」下車すぐ</li>
</ul>',
  '<ul>
<li>施設内駐車場あり</li>
<li>全日 07:00～01:00 30分 350円 最大料金2,700円</li>
<li>全日 01:00～07:00 夜間一泊1,000円</li>
</ul>',
  '<iframe title="キャロットタワー 展望台 スカイキャロットの位置を記した地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.3469135743244!2d139.66709651525773!3d35.64382358020307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f49f3f856827%3A0x481ce35d7149013f!2z44K544Kr44Kk44Kt44Oj44Ot44OD44OI5bGV5pyb44Ot44OT44O8!5e0!3m2!1sja!2sjp!4v1674550558172!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '124m',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/nFONDe9KzdU?si=EwtcmP0eLj6CQGvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><script type="application/ld+json"> {"jsonLd":{"@context":"http://schema.org","@type":"VideoObject","name":"キャロットタワー 展望台から撮影した夜景【タイムラプス】","description":"キャロットタワー 展望台から撮影したタイムラプスです。富士山と徐々に賑やかになる街あかりをお楽しみください！撮影スポット情報はこちら▼https://nightscape.tokyo/setagaya/carrot-tower-observation/撮影機材リスト▼https://amzn.to/3DaiZ7e","thumbnailUrl":"https://i.ytimg.com/vi/nFONDe9KzdU/default.jpg","uploadDate":"2024-12-15T09:48:38Z","duration":"PT22S","contentUrl":"https://www.youtube.com/watch?v=nFONDe9KzdU","interactionCount":"4"}} </script>',
  NULL,
  NULL,
  null,
  null,
  4.1,
  3.8,
  3.8,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/1-1.jpg',
  true,
  '2024-12-15T19:06:53+09:00',
  '2024-12-15T19:06:53+09:00',
  '2024-12-15T19:14:37+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for carrot-tower-observation
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/1-1.jpg', 'キャロットタワー展望台から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-8.jpg', 'キャロットタワー展望台から眺める富士山と世田谷区の街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-5.jpg', '首都高速道路を行き交う車両', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/1-3.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/1-2.jpg', '駒留通りの夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/1-1.jpg', '首都高速道路の両脇にビル群が立ち並ぶ光景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-11.jpg', '武蔵小杉駅周辺の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-6.jpg', '首都高速道路の両脇にビル群が立ち並ぶ光景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-9.jpg', '二子玉川ライズ周辺の街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-7.jpg', 'キャロットタワー展望台から眺める夜景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-10.jpg', '新宿方面の摩天楼', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/1-1-1.jpg', '富士山の近くに夕陽が沈む光景', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-02.jpg', 'キャロットタワー スカイキャロット展望ロビーの雰囲気', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-01.jpg', 'キャロットタワー スカイキャロット展望ロビーに併設されたカフェ', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/carrot-tower-1.jpg', '26階展望フロア直通の専用エレベーター', 14);

-- FAQs for carrot-tower-observation
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'どんな夜景が楽しめますか？', '東京タワーやスカイツリー、レインボーブリッジなどのランドマーク、空気の澄んでいる日には富士山を眺めることが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'キャロットタワーの展望台の高さは？', 'キャロットタワーの展望台の高さは地上124mとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'carrot-tower-observation'), 'スカイキャロット展望ロビーへはどのようにアクセスできますか？', 'キャロットタワー2階にある展望フロア直通のエレベーターからアクセスが出来ます。', 2);

-- Post: フジテレビ 展望台 球体展望室 はちたま (hachitama-observatory)
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
  'hachitama-observatory',
  'フジテレビ 展望台 球体展望室 はちたま',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'フジテレビ球体展望室 はちたま',
  'レインボーブリッジの眺めが美しい、お台場を代表する展望台。閉館時間が早いので夜景鑑賞ができるのは冬限定なので注意。',
  '<p>フジテレビ本社屋25階に設置されている展望台のはちたま。</p>
<p>直径32メートル、頂上までの高さは約123メートルの大きな球体であるのが特徴で、臨海副都心270度のパノラマが楽しめます。</p>
<p>各方角の見どころは下記の通り。</p>
<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>豊洲、有明エリアのタワーマンション群</dd>
<dt>北西側</dt>
<dd>ライトアップされたレインボーブリッジや東京タワー、港区方面の高層ビル群</dd>
<dt>西側</dt>
<dd>お台場や天王洲方面の街並み、富士山</dd>
<dt>西側</dt>
<dd>富士山や六本木ヒルズをはじめとした高層ビル群を眺めることができる</dd>
</dl>
</div>

<p>一番の見どころはなんと言ってもレインボーブリッジと東京タワーの共演。東京を代表するランドマークを贅沢に眺めることができる光景は一見の価値があります。</p>
<p>フロア内は休日でも人が多すぎず、落ち着いた雰囲気なのでデート利用にもおすすめ。</p>
<p>ただし営業時間が18時までと短いので、夜景を楽しみたい方は冬の時期に訪れましょう。</p>',
  '東京都港区台場 2-4-8',
  'https://www.fujitv.com/ja/visit_fujitv/',
  'Come Experience FUJI TV〜お台場フジテレビへ行こう！〜',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00～18:00',
  'なし',
  '<ul>
<li>一般 700円</li>
<li>小中学生 450円</li>
</ul>',
  '<ul>
<li>ゆりかもめ線「お台場駅」から徒歩約3分</li>
<li>りんかい線「東京テレポート駅」から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="フジテレビ 展望台 球体展望室 はちたまの位置を記した地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12972.107267193422!2d139.7746611!3d35.6270654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaec80ccb211532fd!2z44OV44K444OG44Os44OT55CD5L2T5bGV5pyb5Y-wIOOBr-OBoeOBn-OBvg!5e0!3m2!1sja!2sjp!4v1673757803092!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '100メートル',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/5168Yjt8axc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  5,
  3.8,
  3.9,
  3.7,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-rainbow.jpg',
  true,
  '2024-08-10T19:46:31+09:00',
  '2024-08-10T19:46:31+09:00',
  '2024-08-10T19:46:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for hachitama-observatory
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-rainbow.jpg', 'レインボーカラーに点灯されるレインボーブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-04.jpg', 'レインボーブリッジとお台場の街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-2.jpg', 'レインボーカラーに点灯されるレインボーブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-03.jpg', '富士山とお台場の街並み', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-sunset.jpg', 'ヒルトン東京お台場と富士山', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-05.jpg', '夕暮れ時のお台場の景色', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-1.jpg', 'レインボーブリッジと東京タワー', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-02.jpg', '球体展望室はちたまに設置されている望遠鏡', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-1-1.jpg', 'フジテレビ球体展望室はちたまの雰囲気', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/hachitama-01.jpg', 'フジテレビ球体展望室はちたまの雰囲気', 9);

-- FAQs for hachitama-observatory
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), '球体展望室「はちたま」にはどんな設備がありますか？', '番組キャラクターグッズを販売するギフトショップや自動販売機、双眼鏡などがあります。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), '球体展望室「はちたま」からはどんな景色が楽しめますか？', 'レインボーブリッジや東京タワーなどのランドマーク、富士山などを眺めることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), '球体展望室「はちたま」から夜景を楽しむにはいつ訪れるのがおすすめですか？', '球体展望室「はちたま」の営業時間は18:00までなので夜景鑑賞をしたい場合は日が沈むのが早い冬の時期時訪れましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hachitama-observatory'), '三脚を使って夜景を撮ることはできますか？', '以前は使用可能でしたが、現在では三脚を使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 3);

-- Post: 豊洲ぐるり公園 (toyosu-gururi-park)
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
  'toyosu-gururi-park',
  '豊洲ぐるり公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲ぐるり公園',
  '潮風にあたりながらレインボーブリッジや東京タワーなどのランドマークを一望できる無料夜景スポット。公園付近に大型の駐車場もあり、ドライブデートの目的にもおすすめ。',
  '<p>2018年4月1日に開園した「豊洲ぐるり公園」。</p>
<p>豊洲ふ頭をぐるりと囲むように、全長4.5キロの園路が整備された広大な面積の公園です。</p>
<p>園内にはバーベキュー場や結婚式場などがあり、日中は多くの人で賑わいます。</p>
<p>夜になると人の数も落ち着き、程よい明るさのフットライトライトや街灯の点灯が開始。</p>
<p>レインボーブリッジや東京タワー、スカイツリーなどの東京を代表するランドマークがアクセントとなる素晴らしい夜景を眺めることができます。</p>
<p>雰囲気も非常によく、潮風を感じながら夜景を眺められる素敵なスポットなので、ぜひデートなどで訪れてみてください。</p>',
  '東京都江東区豊洲 6-1',
  'https://toyosugururi.jp/',
  '豊洲ぐるり公園公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線 「 市場前駅 」 約12分</li>
<li>ゆりかもめ線 「 お台場海浜公園駅 」 約19分</li>
<li></li>
</ul>',
  '<dl>
<dt>利用時間</dt>
<dd>24時間</dd>
<dt>駐車可能台数</dt>
<dd>38台（普通自動車 36台 / 身障者用 2台）</dd>
<dt>利用料金</dt>
<dd>400円 / 時</dd>
</dl>',
  '<iframe title="豊洲ぐるり公園の地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12969.882459260232!2d139.7596684098244!3d35.64077511432527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018898e917adfe1%3A0xe4b98a0b06ffca79!2z6LGK5rSy44GQ44KL44KK5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1690125741630!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.7,
  2.9,
  4.5,
  4.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-13.jpg',
  true,
  '2025-01-18T20:13:00+09:00',
  '2025-01-18T20:13:00+09:00',
  '2025-03-02T01:46:28+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'drive'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for toyosu-gururi-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-13.jpg', '豊洲ぐるり公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-12.jpg', 'ライトアップされるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-5-1.jpg', '東京タワーと港区周辺の街並み', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-11.jpg', '富士見橋から眺めるライトアップされたレインボーブリッジ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-6.jpg', 'レインボーブリッジと富士山', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-10.jpg', '黄昏時の豊洲ぐるり公園の雰囲気①', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-9.jpg', '黄昏時の豊洲ぐるり公園の雰囲気②', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-7.jpg', '黄昏時の豊洲ぐるり公園の雰囲気③', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-4-1.jpg', '豊洲ぐるり公園の遊歩道の先に見えるレインボーブリッジ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-2-1.jpg', '晴海エリアのタワーマンション群', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-3-1.jpg', '東京スカイツリーとライトアップされる晴海大橋', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-17.jpg', '晴海エリアの夜景', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-18.jpg', '晴海エリアの夜景', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/raraport-toyosu-3.jpg', '夕暮れ時の豊洲ぐるり公園の雰囲気', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/raraport-toyosu-4.jpg', NULL, 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-1.jpg', NULL, 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-3.jpg', '豊洲ぐるり公園の雰囲気', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/toyosu-gururi-park-2.jpg', '豊洲ぐるり公園から眺めるお台場方面の景色', 17);

-- FAQs for toyosu-gururi-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'どんな夜景が楽しめますか？', 'レインボーブリッジや東京タワー、スカイツリーなどの東京を代表するランドマークがアクセントとなる夜景を堪能できます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), 'レインボーブリッジのライトアップは何時まで実施されていますか？', 'レインボーブリッジは日没から24時までライトアップされています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-gururi-park'), '東京タワーのライトアップは何時まで実施されていますか？', '東京タワーは日没から24時までライトアップされています。', 3);

-- Post: 東急歌舞伎町タワー 展望台 (tokyu-kabukicho-tower)
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
  'tokyu-kabukicho-tower',
  '東急歌舞伎町タワー 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shinjuku'),
  NULL,
  '東急歌舞伎町タワー 展望台',
  '2023年に誕生した高さ225mの新宿のランドマークタワー。17Fには展望フロアと屋外テラスからは大迫力の摩天楼を眺めることが可能。',
  '<p>2023年4月14日に開業した高さ225mの超高層ビルである東急歌舞伎町タワー。</p>
<p>ホテル、映画館、劇場、ライブハウスなどのエンターテイメント施設が集まる大型の商業施設です。</p>
<p>同ビルの17階部分には無料で入場できる展望フロアと屋外テラスがあり、多くの観光客が訪れる人気スポットになっています。</p>
<p>西側と南側の2方向に開けており、各眺望の見どころは下記のようになっています。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>西側</dt>
<dd>コクーンタワー、損保ジャパン本社ビルなどによって形成される大迫力の摩天楼</dd>
<dt>南側</dt>
<dd>新宿駅方面の街並みやトレインビュー</dd>
</dl>
</div>

<p>西側の摩天楼は「新宿プリンスホテル」の高層階に宿泊しないと眺めることができませんでしたが、気軽に眺められるようになったのは夜景ファンにとって嬉しいポイント。</p>
<p>また、同フロアにはDiningBarの「JAM17」も併設されています。ぜひ食事等を楽しみながら新宿の街並みを堪能してみてください。</p>',
  '東京都新宿区歌舞伎町 1-29-1',
  'https://www.tokyu-kabukicho-tower.jp/',
  '東急歌舞伎町タワー公式サイト',
  'https://twitter.com/TKT2023official',
  '東急歌舞伎町タワーTwitterアカウント',
  'https://www.hotelgroove.jp/jam17/',
  '【公式】JAM17｜HOTEL GROOVE SHINJUKU直営ダイニング＆バー',
  '店舗によって営業時間が異なるため詳しくは公式サイトを御覧ください',
  '年末年始を除き年中無休',
  '無料',
  '<ul>
<li>西武新宿線「西武新宿駅」から徒歩1分</li>
<li>都営大江戸線「新宿西口駅」から徒歩6分</li>
<li>JR各線・⼩⽥急線・京王線・丸ノ内線「新宿駅」から徒歩7分</li>
<li>東京メトロ 丸ノ内線/副都⼼線 ・都営新宿線「新宿三丁⽬駅」から徒歩8分</li>
</ul>',
  '<ul>
<li>営業時間：24時間</li>
<li>ご利用料金：300円/30分</li>
<li>普通車・ミドルルーフ車　入庫後12時間 1,500円（最大料金）</li>
<li>ハイルーフ車　入庫後12時間 1,800円（最大料金）</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2383709561086!2d139.70058939999998!3d35.695751300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfd822aaa3f%3A0xd47e0ccc16555ea9!2z5p2x5oCl5q2M6Iie5LyO55S644K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1685801219186!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/FQSgDD_uIZ8?si=YXpXyOEUIwSevTSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.7,
  4,
  3.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-1.jpg',
  true,
  '2024-08-07T14:49:13+09:00',
  '2024-08-07T14:49:13+09:00',
  '2024-08-07T14:49:14+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tokyu-kabukicho-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-1.jpg', '新宿の高層ビル群の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-6.jpg', 'ビル灯が眩しい新宿の高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-4.jpg', 'JR新宿駅と新宿プリンスホテル', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabuki-tower-7.jpg', '新宿の町並みと西武新宿線の路線', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-7.jpg', '茜色の空と高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-5.jpg', 'ビル灯が眩しい新宿の高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabuki-tower-2.jpg', '夕暮れ時の新宿の町並み', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-3.jpg', 'JR新宿駅方面の街並み', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabuki-tower-1.jpg', '夕暮れ時の新宿の町並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabukicho-tower-sunset.jpg', 'ビル灯が眩しい新宿の高層ビル群', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabuki-tower-3.jpg', '東急歌舞伎町タワー展望フロアの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-2.jpg', '東急歌舞伎町タワーの屋外テラス', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/kabuki-tower-4.jpg', '東急歌舞伎町タワー展望フロアの雰囲気', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/tokyu-tower-1-1.jpg', '東急歌舞伎町タワー エンターテインメント＆レストラン', 13);

-- FAQs for tokyu-kabukicho-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), '東急歌舞伎町タワー展望台ではどんな夜景が楽しめますか？', '新宿の高層ビル群やJR新宿方面の街並みを一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), '東急歌舞伎町タワー展望台は何時まで営業していますか？', '24時間立ち入ることは可能ですが、同フロアにあるダイニング・バー「JAM17」の営業時間（25時まで）を目安に訪問するのが良いでしょう。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), 'デート向けの夜景スポットですか？', '落ち着いた雰囲気の展望フロアでゆっくり夜景を眺めることができるので、デートにオススメです。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), '東急歌舞伎町タワーには何がありますか？どんな施設がありますか？', '109シネマズプレミアム新宿、歌舞伎横丁（レストラン街）、namco TOKYO（ゲームセンター）、ラグジュアリーホテルなどがあります。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyu-kabukicho-tower'), '東急歌舞伎町タワーは何の跡地ですか？', '東急歌舞伎町タワーは東京・歌舞伎町にあった映画館、新宿ミラノ座の跡地にできた地上48階建て地下5階の高層複合施設です。', 4);

-- Post: 有明スポーツセンター 展望回廊 (ariake-sports-center)
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
  'ariake-sports-center',
  '有明スポーツセンター 展望回廊',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '有明スポーツセンター 展望回廊',
  'お台場エリアの夜景をゆっくり鑑賞することができる穴場スポット。レインボーブリッジや首都高速道路などの景色が特におすすめ。',
  '<p>1996年に開業した有明スポーツセンター。</p>
<p>体育館がある7階フロアには展望回廊があり、ベイエリアの眺望ををゆっくりと眺めることができます。各方角の見どころは下記の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>西側</dt>
<dd>レインボーブリッジ、首都高速道路、お台場エリアの街並みなど</dd>
<dt>北側</dt>
<dd>東京スカイツリー、豊洲方面の高層ビル群など</dd>
</dl>
</div>

<p>一番の見どころはレインボーブリッジや首都高速道路を西側の景色。黄昏時に訪れると息を飲むような美しい景色を味わうことができます。</p>
<p>休日は人の数もまばらで落ち着いて夜景鑑賞ができる穴場スポットなので、気になった方はぜひ訪れてみてください。</p>
<p>なお窓ガラスにはフィルムが貼ってある影響で、夜景撮影を行うとややぼやけた写真になるのが注意点。</p>',
  '東京都江東区有明 2-3-5',
  'https://www.koto-hsc.or.jp/sports_center4/',
  '有明スポーツセンター',
  NULL,
  NULL,
  NULL,
  NULL,
  '8時30分～22時00分',
  '毎月第2・4月曜日が休館日',
  '無料',
  '<ul>
<li>ゆりかもめせん線「お台場海浜公園駅」から徒歩約10分</li>
<li>東京臨海高速鉄道りんかい線「国際展示場」から徒歩駅15分</li>
</ul>',
  '<ul>
<li>駐車場有り</li>
<li>40分100円 / 20分100円（時間帯最大料金1,800円）</li>
</ul>',
  '<iframe title="有明スポーツセンター 展望回廊の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12971.125972425689!2d139.7837179!3d35.6331129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889ee08eb34db%3A0x13ae517b1682676f!2z5pyJ5piO44K544Od44O844OE44K744Oz44K_44O877yIQeajn--8iQ!5e0!3m2!1sja!2sjp!4v1698584200417!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Tu10UUvUIOY?si=BTTbyTpRii0O5Q2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.8,
  2.7,
  3.6,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-06.jpg',
  true,
  '2024-08-08T11:05:13+09:00',
  '2024-08-08T11:05:13+09:00',
  '2025-08-03T12:58:16+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for ariake-sports-center
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-06.jpg', '有明スポーツセンターから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-088.jpg', '東京スカイツリーと豊洲方面のタワーマンション群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-04.jpg', 'ライトアップされたレインボーブリッジ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-03.jpg', '豊洲ぐるり公園方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-05.jpg', 'お台場エリアのタワーマンション群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-07.jpg', 'お台場エリアのタワーマンション群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-09.jpg', '有明スポーツセンターの外観', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-01.jpg', '夕暮れ時のレインボーブリッジ', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-02.jpg', '夕暮れ時のお台場エリアの街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'https://nightscape.tokyo/wp-content/uploads/2023/10/ariake-center-1.jpg', '有明スポーツセンター展望回廊の雰囲気', 9);

-- FAQs for ariake-sports-center
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'どんな夜景が楽しめますか？', '豊洲、お台場方面の景色をゆっくりと眺めることができます。北西側のレインボーブリッジの眺めが特に美しいです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), 'レインボーブリッジのライトアップ時間は何時から何時までですか？', '日没から24時までレインボーブリッジのライトアップは実施されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), '有明スポーツセンターの展望回廊は無料で入場できますか？', '有明スポーツセンターは無料で入場することができます。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-sports-center'), '有明スポーツセンターの定休日はいつですか？', '有明スポーツセンターは毎月第2・4月曜日が定休日です。', 3);

-- Post: 豊洲市場 屋上緑化広場 (toyosu-market)
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
  'toyosu-market',
  '豊洲市場 屋上緑化広場',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '豊洲市場 屋上緑化広場',
  '湾岸エリアの街並みを一望できる穴場の無料夜景スポット。広々とした緑化広場はリラックして夜景鑑賞をするのに最適。',
  '<p>首都圏の生鮮食品流通を担う中央卸売市場である豊洲市場。市場内は様々な見学施設もあり人気の観光スポットになっています。</p>
<p>そんな豊洲市場は屋上（6階）に広々とした緑化広場があり、湾岸エリアの街並みを一望することも可能。</p>
<p>タワーマンションが所狭しと立ち並ぶ晴海エリアの夜景は非常に迫力があります。</p>
<p>また、ライトアップされたレインボーブリッジの眺めも美しいです。</p>
<p>敷地が広大な分歩く距離も長いですが、この景色は一軒の価値ありです。</p>
<p>夜23時まで開放されているので、ぜひ豊洲エリアでデートした帰りなどにお立ち寄りください。</p>',
  '東京都江東区豊洲 6-5',
  'https://www.toyosu-market.or.jp/tour-area/',
  '見学エリア案内 | ザ・豊洲市場【公式】',
  NULL,
  NULL,
  NULL,
  NULL,
  '05:00 ~ 23:00',
  'なし',
  '無料',
  '<ul>
<li> 新交通ゆりかもめ「市場前」駅から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1621.161187022964!2d139.7849842!3d35.6444283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f8cfbb8f5b%3A0xd6bfad0e525033dc!2z6LGK5rSy5biC5aC0!5e0!3m2!1sja!2sjp!4v1702697507089!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  2.9,
  4,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu.jpg',
  true,
  '2024-10-21T09:48:58+09:00',
  '2024-10-21T09:48:58+09:00',
  '2024-10-21T09:49:42+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for toyosu-market
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu.jpg', '豊洲ぐるり公園とレインボーブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-4-1.jpg', '豊洲市場 屋上緑化広場から眺める夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-5.jpg', '豊洲市場 屋上緑化広場から豊洲ぐるり公園を見下ろす', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-6.jpg', '晴海エリアのタワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-7.jpg', 'ライトアップされる豊洲大橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-3-1.jpg', '程よい明るさのフットライトで雰囲気の良い緑化広場', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-8.jpg', 'ライトアップされるレインボーブリッジ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-2-1.jpg', '屋上緑化広場へつながる階段', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-1-1.jpg', '5階から緑化広場へ向かう道', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aaa-3.jpg', 'ライトアップされるレインボーブリッジ', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aaa-1.jpg', '夕暮れ時の豊洲ぐるり公園', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aaa-2.jpg', '晴海エリアの高層ビル群', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-3.jpg', '湾岸エリアの街並み', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-2.jpg', '屋上緑化広場に併設されたベンチ', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-4.jpg', '5階から緑化広場へ向かう道', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/toyosu-rooftpo-1.jpg', '緑豊かな豊洲市場の屋上広場', 15);

-- FAQs for toyosu-market
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'レインボーブリッジや湾岸エリアの高層ビル群が織りなす迫力のある夜景を堪能することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), '豊洲市場 屋上緑化広場はどのようにアクセスすることができますか？', '5階までエレベーターで上がり、そこから歩いて屋上緑化広場へアクセスすることができます。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'toyosu-market'), 'レインボーブリッジのライトアップ何時まで実施されていますか？', 'レインボーブリッジのライトアップは日没約30分後～24時までです。', 3);

-- Post: 横浜マリンタワー展望台 (marine-tower)
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
  'marine-tower',
  '横浜マリンタワー展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜マリンタワー展望台',
  '地上高94mから360度のパノラマビューを堪能できる展望台。みなとみらい方面の夜景や富士山ビューが見どころ。',
  '<p>2022年9月1日にリニューアルオープンした横浜マリンタワー。</p>
<p>緑豊かな自然を感じられる広場やレストラン、横浜にゆかりのあるアート作品を楽しむことができるギャラリー、展望台など様々な楽しみ方ができるスポットです。</p>
<p>地上高約94mには2階立ての展望台があり360度のパノラマビューを楽しむことが可能。各方角の見どころは下記のようになっています。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北側</dt>
<dd>麻布ヒルズをはじめとした虎ノ門の高層ビル群が織りなすビル夜景を楽しめる</dd>
<dt>北西側</dt>
<dd>みなとみらい方面の高層ビル群や大観覧車コスモロック21、山下公園など</dd>
<dt>北東側</dt>
<dd>ライトアップされた横浜ベイブリッジ</dd>
<dt>東側</dt>
<dd>首都高速道路湾岸線を行き交う車</dd>
</dl>
</div>

<p>なお、横浜マリンタワーは日中と夜間で入れ替え制になっており、デイチケットは10：00〜18：00、ナイトチケットは18：00〜22：00となっています。</p>
<p>夜景鑑賞をする場合は18:00以降に入場する必要があるのは注意しましょう。</p>',
  '神奈川県横浜市中区山下町 14-1',
  'https://marinetower.yokohama/',
  '横浜マリンタワー公式サイト',
  'https://www.instagram.com/yokohamamarinetower/',
  '横浜マリンタワー インスタグラムアカウント',
  'https://www.welcome.city.yokohama.jp/spot/details.php?bbid=761',
  '横浜マリンタワー｜横浜市観光情報サイト',
  '10:00～22:00',
  'なし',
  '<ul>
<li>一般（高校生以上）：昼 1,000円  / 夜 1,200円</li>
<li>小中学生：昼 500円 / 夜 700円</li>
</ul>',
  '<ul>
<li>JR京浜東北・根岸線「石川町」より徒歩15分</li>
<li>みなとみらい線「元町・中華街駅」より徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="横浜マリンタワー展望台の地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13001.753803795174!2d139.6509414!3d35.4439383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d1d855564ff%3A0xfc0c379cab5dc5f7!2z5qiq5rWc44Oe44Oq44Oz44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1704176509808!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '94m',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/2Y4jZjhmAQk?si=k6XNzJt2qj4CETdH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F33961&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベル観光で入場チケットをお得に購入</a>',
  NULL,
  null,
  null,
  3.8,
  3.2,
  3.3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-3.jpg',
  true,
  '2025-01-11T20:17:38+09:00',
  '2025-01-11T20:17:38+09:00',
  '2025-01-11T20:21:51+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for marine-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-3.jpg', '横浜マリンタワーから眺める夜景①', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-towera-1.jpg', '横浜マリンタワーから眺める夜景②', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-7.jpg', 'みなとみらい方面の高層ビル群と富士山', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-11.jpg', 'みなとみらい方面の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-4.jpg', '富士山と首都高速道路', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-5-1.jpg', '赤レンガ倉庫と大桟橋に寄港する豪華客船', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-6.jpg', '黄昏時の空と富士山', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-9.jpg', '首都高速道路を行き交う車両', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-2.jpg', '首都高速道路湾岸線を行き交う車', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-5.jpg', 'よ山下公園付近に展示される日本郵船氷川丸', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-3.jpg', 'ブルーにライトアップされる横浜ベイブリッジ', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-6-1.jpg', '山下埠頭から花火が上がる様子', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-21.jpg', '山下埠頭から花火が上がる様子', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-8.jpg', '横浜マリンタワー展望台の雰囲気', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/yokohama-marine-tower-1.jpg', '横浜マリンタワーのエントランス', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yamashita-park-6.jpg', '山下公園から眺める横浜マリンタワー', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-2.jpg', '南西側に夕日が沈む様子', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokoama-marine-tower-1.jpg', '夕暮れ時の横浜ベイブリッジ', 17);

-- FAQs for marine-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), 'どんな夜景が楽しめますか？見どころはどこですか？', '地上高94mから360度のパノラマビューを堪能できる展望台でみなとみらい方面の夜景や富士山ビューが見どころとなっています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), '横浜マリンタワー展望台の高さは何メートルですか？', '横浜マリンタワー展望台は地上高94mに位置しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), '横浜マリンタワー展望台の最寄駅・出口はどこですか？', 'みなとみらい線「元町・中華街駅」4番出口が最寄駅・出口です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), '横浜マリンタワー展望台のデイチケットの入場可能時間はいつまで？', '10:00~18:00となっています（最終入場時刻は17:30）', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marine-tower'), '横浜マリンタワー展望台のナイトチケットの入場可能時間はいつまで？', '18：00〜22：00（最終入場時刻は21:30）', 5);

-- Post: 経堂コルティ 屋上庭園 (kyodo-corty)
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
  'kyodo-corty',
  '経堂コルティ 屋上庭園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'setagaya'),
  NULL,
  '経堂コルティ 屋上庭園',
  '空気が澄んだ日には富士山を眺めることができる緑豊かな屋上庭園。',
  '<p>経堂駅のすぐそばにあるショッピングモールの経堂コルティ。</p>
<p>4Fには複数のベンチやテーブルが設けられている屋上庭園があり、ゆっくり談笑を楽しむことができます。</p>
<p>低層界のため見晴らしはイマイチですが、西側には小田急の電車や富士山を眺めることが可能。空気が澄んだ日の夕景は一見の価値があります。</p>
<p>また、東側にはガラスの窓越しに渋谷駅方面の高層ビル群や東京タワーが織りなす夜景も美しいです。</p>
<p>経堂駅周辺で遊んだ帰りにぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都世田谷区経堂 2-1-33',
  'https://www.odakyu-sc.com/kyodo-corty/',
  '経堂コルティ公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>小田急線「経堂駅」下車すぐ</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0409949342297!2d139.6356064!3d35.6513616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f39606774787%3A0x9165424c6e819db9!2z57WM5aCC44Kz44Or44OG44Kj!5e0!3m2!1sja!2sjp!4v1723961323509!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.3,
  3,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-6-1.jpg',
  true,
  '2025-01-07T18:13:48+09:00',
  '2025-01-07T18:13:48+09:00',
  '2025-01-07T20:41:59+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for kyodo-corty
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-3-1.jpg', '線路の先に富士山が見える光景①', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-1-1.jpg', '線路の先に富士山が見える光景②', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-6-1.jpg', '渋谷の高層ビル群と東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-7.jpg', '経堂駅周辺の夜景①', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-2.jpg', '経堂駅周辺の夜景②', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-2-1.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-5.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-6.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-3.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/kyodo-1.jpg', NULL, 9);

-- FAQs for kyodo-corty
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), 'どんな夜景が楽しめますか？見どころはどこですか？', '小田急線を行き交う電車や富士山を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kyodo-corty'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 横浜北仲ノット 展望台 (yokohama-kitanaka)
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
  'yokohama-kitanaka',
  '横浜北仲ノット 展望台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜北仲ノット 展望台',
  '横浜みなとみらいの街並みを一望できる無料の展望台。無料開放時間は21時まででデート利用にもおすすめ。',
  '<p>横浜市新庁舎の向かいにそびえる高さ212mのタワーマンションである横浜北仲タワー。</p>
<p>同ビルの46階には無料で入場することができる展望フロアがあり、360度横浜の街並みを一望することができます。</p>
<p>各方角の見どころは下記の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>北西側</dt>
<dd>横浜ランドマークタワー、東急スクエアなどの高層ビル群、コスモロック21など</dd>
<dt>南東側</dt>
<dd>山下公園、横浜マリンタワー、横浜ベイブリッジ</dd>
<dt>東側</dt>
<dd>大桟橋、横浜ハンマーヘッド、ワールドポーターズ</dd>
</dl>
</div>

<p>一般開放されているのは21：00までとなっており、食事をした後などにも立ち寄りやすいのがポイント。<p>
<p>なお三脚や暗幕などの機材は使用不可なので、夜景撮影で訪れる場合は注意しましょう。<p>
<p>ゆっくり夜景撮影をする場合は同じような眺望を眺めることができる「<a href="https://nightscape.tokyo/yokohama/yokohama-bay-tower/">アパホテル横浜ベイタワー</a>」に宿泊するのがおすすめです。</p>',
  '神奈川県横浜市中区北仲通５丁目５７−３',
  'https://kitanaka-brickandwhite.yokohama/',
  'KITANAKA BRICK&WHITE | 北仲ブリック&ホワイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '9:00～21:00',
  'なし',
  '無料',
  '<ul>
<li>横浜みなとみらい線「馬車道」駅2A出口より徒歩1分</li>
<li>JR桜木町駅東口より徒歩8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.598550282235!2d139.6357589!3d35.4510897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d5208524eb3%3A0x39bbc4b3a5a326b3!2z5qiq5rWc5YyX5Luy44OO44OD44OI!5e0!3m2!1sja!2sjp!4v1728713290373!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.4,
  3.4,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-1.jpg',
  true,
  '2024-10-12T15:20:05+09:00',
  '2024-10-12T15:20:05+09:00',
  '2024-10-19T21:31:07+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for yokohama-kitanaka
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-1.jpg', '横浜北仲ノット展望台から眺めるみなとみらいの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-3.jpg', '山下公園と横浜マリンタワー周辺の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-4.jpg', '横浜ベイブリッジと大桟橋', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-5.jpg', 'サークルウォーク（歩道橋）周辺の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-1-1.jpg', 'ワールドポーターズと汽車道周辺の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/10/yokohama-kitanaka-2.jpg', '横浜ハンマーヘッドに停泊する豪華客船', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/tokyu-square-5.jpg', '高さ212mの高層タワーマンション・横浜北仲ノット', 6);

-- FAQs for yokohama-kitanaka
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'みなとみらい方面の高層ビル群や横浜マリンタワーやベイブリッジなどのランドマークを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), '横浜北仲ノットの展望台は何階にありますか？', '横浜北仲ノットの展望台は46Fに位置します。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-kitanaka'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

