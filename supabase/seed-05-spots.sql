-- Post: クイーンズパーク (queen-park)
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
  'queen-park',
  'クイーンズパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'クイーンズパーク',
  '絵に描いたような美しい夜景を眺めることができる穴場スポット。SNSでも人気の場所で一見の価値あり。',
  '<p>クイーンズスクエア横浜の前にある綺麗に整備されたウッドテラスのクイーンズパーク。</p>
<p>大観覧車のコスモロック21や横浜北中ノットなどが織りなす迫力ある夜景を眺めることができる夜景スポットです。</p>
<p>クイーンズスクエア横浜3Ｆにあるテラスからクイーンズパークの四角形の池を真正面に眺めることができる場所はSNSでも人気のフォトスポット。</p>
<p>絵に描いたような眺望は一軒の価値があります。</p>
<p>雰囲気もとてもよく落ち着いてくつろげる場所なのでぜひデートの帰りなどに立ち寄ってみてください。</p>',
  '神奈川県横浜市西区みなとみらい2-3',
  'https://qsy-tqc.jp/',
  'クイーンズスクエア横浜公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東急東横線直通みなとみらい線「みなとみらい駅」徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6499.8745966565575!2d139.63436249999998!3d35.4563467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5c8877ad6d%3A0xa1b579fe621224e!2z44Kv44Kk44O844Oz44K644OR44O844Kv!5e0!3m2!1sja!2sjp!4v1728746769068!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.5,
  3.7,
  3.6,
  'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-1.jpg',
  true,
  '2024-10-13T00:28:45+09:00',
  '2024-10-13T00:28:45+09:00',
  '2024-10-13T00:36:34+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for queen-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-1.jpg', 'クイーンズスクエア横浜3Fから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-3.jpg', 'クイーンズパークの池を俯瞰して眺める', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-2.jpg', 'クイーンズスクエア横浜3Fの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-7.jpg', 'クイーンズパークの池に夜景が映る様子', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-6.jpg', 'クイーンズパークにあるベンチ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-5.jpg', 'クイーンズパークの池を俯瞰して眺める', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/yokohama-queen-park-8.jpg', 'クイーンズパークからクイーンズスクエア横浜を見上げる', 6);

-- FAQs for queen-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'コスモロック21や横浜北中ノットなどを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'queen-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。楽しみましょう。', 1);

-- Post: 八芳園 TOKYO RED GARDEN 2024 (tokyoredgarden2024)
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
  'tokyoredgarden2024',
  '八芳園 TOKYO RED GARDEN 2024',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '八芳園 TOKYO RED GARDEN 2024',
  '江戸時代から続く歴史ある日本庭園が赤一色にライトアップされて、秋の訪れを告げる毎年恒例のイベント',
  '<p>東京・白金台で江戸時代から約400年もの長い間、美しい四季折々の様相で人々を魅了してきた八芳園。</p>
<p>そんな八芳園では2018年より毎年秋にライトアップイベントのTOKYO RED GARDENが実施されています。</p>
<p>約170本のもみじをはじめとする木々が真紅に染め上がりる幻想的な光景は一見の価値があります。</p>
<p>入場料無料で散策できるので、ぜひイベント開催期間に足を運んでみてはいかがでしょうか？</p>',
  '東京都港区白金台 1-1-1',
  'https://happo-en.com/tokyoredgarden2024/',
  '八芳園 TOKYO RED GARDEN',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ南北線・都営三田線「白金台駅」2番出口より徒歩１分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12970.301264783087!2d139.7279589!3d35.6381947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0131752fdb%3A0x1329e959bd91ac40!2z5YWr6Iqz5ZyS!5e0!3m2!1sja!2sjp!4v1733152123601!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.5,
  3.1,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-8.jpg',
  true,
  '2024-12-03T00:16:24+09:00',
  '2024-12-03T00:16:24+09:00',
  '2024-12-03T00:16:25+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), (SELECT id FROM tags WHERE slug = 'autumn-leaves'));

-- Images for tokyoredgarden2024
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-8.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-7.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-6.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-3.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-4.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-1.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/red-garden-2.jpg', NULL, 7);

-- FAQs for tokyoredgarden2024
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), 'どんな夜景が楽しめますか？見どころはどこですか？', '園内にある約170本の紅葉が真っ赤にライトアップされる光景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), '八芳園 TOKYO RED GARDEN 2024の開催期間はいつまでですか？', '2024/11/23(土・祝) ～ 2024/12/15(日)までとなっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), '八芳園 TOKYO RED GARDEN 2024のライトアップは何時まで実施されていますか？', '日没から21:00までライトアップは実施されています。', 2);

-- Event info for tokyoredgarden2024
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'tokyoredgarden2024'), '20241123', '20241215', '八芳園', '日没 ~ 21:00');

-- Post: 大観覧車・コスモクロック21 (cosmoclock-21)
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
  'cosmoclock-21',
  '大観覧車・コスモクロック21',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '大観覧車・コスモクロック21',
  '1周約15分の空中散歩を楽むことができる観覧車。横浜ベイブリッジやみなとみらい21周辺の眺めがとても美しい。',
  '<p>横浜みなとみらいエリアのシンボルとも言えるコスモクロック21。</p>
<p>1989年横浜博覧会（YES''89）のパビリオンとして誕生した歴史ある観覧車です。</p>
<p>定員480名の規模を誇り、横浜ベイブリッジ、パシフィコ横浜、みなとみらい21周辺の街並みなどを眺めながら1周約15分の空中散歩を楽むことができます。</p>
<p>空気が澄んでいる時期は富士山も拝むことが可能です。</p>
<p>最高地点112.5mから眺める景色は一見の価値あり。</p>
<p>繁忙期や休日は1時間以上並ぶこともあるので、トワイライトタイムに合わせて観覧車に乗る場合は計画的に列に並びましょう。</p>',
  '神奈川県横浜市中区新港2丁目8番1号',
  'http://cosmoworld.jp/attraction/wonder/cosmoclock21/',
  'コスモワールド公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '11:00 ~ 20:00（平日）/ 11:00 ~ 22:00（休日）',
  '毎週木曜日',
  '1,000円（3歳以上）',
  '<ul>
<li>JR根岸線・市営地下鉄「桜木町駅」より徒歩約10分</li>
<li>みなとみらい線「みなとみらい駅」より徒歩約2分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.979999711507!2d139.6341534757777!3d35.45528957266098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5bda43b34b%3A0xf0b5759288fb1d92!2z44Kz44K544Oi44Kv44Ot44OD44KvMjE!5e0!3m2!1sja!2sjp!4v1733580393256!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.3,
  3.5,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-4.jpg',
  true,
  '2024-12-07T23:16:05+09:00',
  '2024-12-07T23:16:05+09:00',
  '2024-12-11T23:27:19+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for cosmoclock-21
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-4.jpg', '横浜北仲ノットとAPAホテル横浜ベイタワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-3.jpg', 'トワイライトタイムのみなとみらいの街並み', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-10.jpg', 'パシフィコ横浜の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-6.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-7.jpg', 'コスモワールドの遊具', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-8.jpg', '横浜ベイブリッジ周辺の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-12.jpg', '大観覧車・コスモロック21から眺める夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-2.jpg', '汽車道周辺の街並み', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-5.jpg', '日本丸メモリアルパークとコレットマーレ', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/cosmo-rock-21-9.jpg', NULL, 9);

-- FAQs for cosmoclock-21
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ベイブリッジ、パシフィコ横浜、みなとみらい21周辺の街並みなどをながめることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'cosmoclock-21'), 'コスモクロック21の所要時間は何分ですか？', 'コスモクロック21は一周15分で回ります。', 1);

-- Post: 北仲通北第二公園 (kitanaka-street-second)
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
  'kitanaka-street-second',
  '北仲通北第二公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '北仲通北第二公園',
  'ノートルダム横浜みなとみらい付近にある穴場の夜景スポット。ベンチに座りながらみなとみらいエリアの高層ビル群などを眺めることができる。',
  '<p>ノートルダム横浜みなとみらいのすぐそばにある美しく整備された公園。</p>
<p>汽車道の先にみなとみらいエリアの高層ビル群やコスモロック21などを眺めることができます。</p>
<p>園内には複数のベンチや噴水などもあり、雰囲気も悪くありません。</p>
<p>ゆっくり夜景鑑賞することができる穴場スポットなので、ぜひアクセスしてみてください。</p>',
  '神奈川県横浜市中区海岸通5丁目52番',
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
<li>みなとみらい線「馬車道駅」より徒歩約6分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.1076496188557!2d139.63352207577756!3d35.45212927266206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c58ec302879%3A0x71873d4d73305331!2z5YyX5Luy6YCa5YyX56ys5LqM5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1733589947298!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.1,
  3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-8.jpg',
  true,
  '2024-12-08T01:48:07+09:00',
  '2024-12-08T01:48:07+09:00',
  '2024-12-09T10:46:56+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for kitanaka-street-second
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-3.jpg', '北仲通北第二公園から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-2.jpg', '北仲通北第二公園にある噴水', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-5.jpg', '北仲通北第二公園の散歩道', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-6.jpg', 'みなとみらいエリアの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-8.jpg', '北仲通北第二公園の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-7.jpg', '北仲通北第二公園の噴水と横浜北仲ノット', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-2-2.jpg', 'みなとみらいの街並み', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/kitanaka-park-1-2.jpg', '北仲通北第二公園の雰囲気', 7);

-- FAQs for kitanaka-street-second
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), 'どんな夜景が楽しめますか？見どころはどこですか？', '横浜ランドマークタワーやコスモクロック21をはじめとしたみなとみらいの夜景を楽しむことが可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), '北仲通北第二公園の最寄駅はどこですか？', 'みなとみらい線「馬車道駅」が最寄駅になります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'kitanaka-street-second'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 横浜ベイブリッジスカイウォーク (yokohama-baybridge-sky-walk)
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
  'yokohama-baybridge-sky-walk',
  '横浜ベイブリッジスカイウォーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '横浜ベイブリッジスカイウォーク・スカイラウンジ',
  'コスモクロック21、横浜ランドマークタワー、赤レンガ倉庫などみなとみらいを代表する建物を一望することができる無料の夜景スポット',
  '<p>横浜市政100周年記念施設として1989年9月に開通した横浜レインボーブリッジスカイウォーク。</p>
<p>横浜ベイブリッジの下層部に大黒埠頭側から約320ｍに亘って設置された歩行者専用の展望施設です。</p>
<p>遊歩道の途中には一眼カメラのレンズを通すことができる穴が一定間隔であり、写真撮影を楽しむことができるようになっています。</p>
<p>また、遊歩道の先には新本牧ふ頭の役割や環境への取組みなどの映像上映や模型が展示されているスカイラウンジもあります。</p>
<p>本施設の見どころは西側に見えるみなとみらいエリアの街並み。<p>
<p>空気が澄んでいるときには横浜ランドマークタワーの隣に富士山の姿も見ることができます。<p>
<p>黄昏時のみなとみらいの街並みは息を呑む美しさがあります。</p>
<p>なお、本施設が開放されているのは休日の11:00〜18:00まで。夜景鑑賞できるのは冬季限定になる点をご注意ください。</p>

<h3>バスでのアクセスについて</h3>
<p>横浜ベイブリッジスカイウォーク周辺には駅がないため、自家用車かバス利用がアクセス手段となります。</p>
<p>横浜駅と鶴見駅から出ているバスの時刻表リンクを載せておくので、バス利用の方は発着の時間をご確認ください。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>往路</dt>
<dd>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00091228&course=0001601099&stopNo=1">横浜駅前（東口14番のりば）→ スカイウォーク前 時刻表</a></p>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090661&course=0001600156&stopNo=1">鶴見駅前（東口6番のりば）→ 大黒ふ頭 時刻表</a></p>
</dd>
<dt>復路</dt>
<dd>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090554&course=0001601099&stopNo=26">スカイウォーク前 → 横浜駅 時刻表</a></p>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090594&course=0001601402&stopNo=21">大黒ふ頭 → 鶴見駅 時刻表</a></p>
</dd>
</dl>
</div>',
  '神奈川県横浜市鶴⾒区⼤⿊ふ頭１番地',
  'https://www.city.yokohama.lg.jp/kanko-bunka/minato/taikan/kengaku/sw201905.html',
  '横浜ベイブリッジスカイウォーク | 横浜市',
  NULL,
  NULL,
  NULL,
  NULL,
  '11時〜18時',
  '月〜金（平日）',
  '無料',
  '-',
  '専用駐車場あり',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.863588255355!2d139.67354772577775!3d35.458171422660094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d86357ceedd%3A0x45c0191b47844820!2z5qiq5rWc44K544Kr44Kk44Km44Kp44O844KvIOOCueOCq-OCpOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1733622604390!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/rfuIJMGfrfY?si=bhx368l0gH1r-pls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  4.8,
  2.4,
  3,
  4,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-19.jpg',
  true,
  '2024-12-08T22:39:48+09:00',
  '2024-12-08T22:39:48+09:00',
  '2025-02-22T22:23:48+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for yokohama-baybridge-sky-walk
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-19.jpg', '横浜ベイブリッジスカイラウンジから眺めるみなとみらいの街並み', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-20.jpg', '富士山と虹色に輝くコスモクロック21', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-18.jpg', '大桟橋に寄港する豪華客船とザ・タワー横浜北仲', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-16.jpg', '横浜ランドマークタワー・コスモクロック21・クイーンズスクエア横浜の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-13.jpg', '特別ライトアップで紫色に染まるみなとみらいエリアの景色', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-15.jpg', 'ライトアップされる横浜マリンタワーと山下公園', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-17.jpg', '横浜駅周辺の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-22.jpg', '大黒埠頭周辺の街並み', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-21.jpg', '大黒埠頭周辺の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-1-1.jpg', '横浜ベイブリッジスカイラウンジから眺める夜景の全景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-12.jpg', '横浜ベイブリッジスカイラウンジから眺める夕景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-11.jpg', '黄昏時の空と富士山', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-9.jpg', '横浜ベイブリッジスカイラウンジの雰囲気', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-8.jpg', '横浜ベイブリッジスカイラウンジにある双眼鏡', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-6.jpg', '横浜ベイブリッジスカイウォークの雰囲気', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-7.jpg', '横浜ベイブリッジスカイウォークの網にあるレンズを通せる穴', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-4.jpg', '横浜ベイブリッジスカイウォークのエレベーター', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-5.jpg', '横浜ベイブリッジスカイウォークの入り口', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-1-2.jpg', '横浜ベイブリッジスカイウォークのすぐそばにあるバス停', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-24.jpg', '横浜ベイブリッジの橋の裏に位置するスカイラウンジ', 19);

-- FAQs for yokohama-baybridge-sky-walk
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'コスモクロック21、横浜ランドマークタワー、赤レンガ倉庫などみなとみらいを代表する建物を一望することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), '横浜スカイウォークは入場料無料ですか？', '横浜スカイウォークは無料で入場可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), '横浜スカイウォークの所要時間はどのくらいですか？', '吊橋は片道10分ほどで渡ることが可能です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), '横浜ベイブリッジスカイウォークが再開したのはいつ？', '横浜ベイブリッジスカイウォークは2019年に営業が再開されました。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'yokohama-baybridge-sky-walk'), '横浜ベイブリッジスカイウォークの開放日はいつ？', '横浜ベイブリッジスカイウォークの開放日は年末年始を除く土日祝日となっています。', 5);

-- Post: 大黒ふ頭西緑地 (daikoku-pier-west-green-area)
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
  'daikoku-pier-west-green-area',
  '大黒ふ頭西緑地',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  '大黒ふ頭西緑地',
  '対岸にみなとみらいエリアの街並みがずらっと広がる穴場の夜景スポット。ドライブデートの目的地におすすめ。',
  '<p>横浜の大黒ふ頭西側に位置する緑地帯の大黒ふ頭西緑地。</p>
<p>対岸にみなとみらいエリアの街並みがずらっと広がるのに加えて、空気の澄んだ日の夕刻には富士山のシルエットも眺めることができます。</p>
<p>絵に描いたような美しい構図の景色は一見の価値ありです。</p>
<p>また同施設は目の前に横浜ベイブリッジが架かっておりダイナミックな景色も楽しめます。</p>
<p>とてもレベルの高い夜景を楽しむことができる場所なので、ドライブデートの目的地としてぜひ利用してみてはいかがでしょうか？</p>
<p>なお冬の時期の休日に訪れるなら<a href="/yokohama-baybridge-sky-walk">横浜ベイブリッジスカイラウンジ</a>から夜景鑑賞するのもおすすめです。</p>

<h3>公共 通機関でのアクセスについて</h3>
<p>大黒ふ頭西緑地周辺には駅がないため、自家用車かバス利用がアクセス手段となります。</p>
<p>横浜駅と鶴見駅から出ているバスの時刻表リンクを載せておくので、バス利用の方は発着の時間をご確認ください。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>往路</dt>
<dd>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00091228&course=0001601099&stopNo=1">横浜駅前（東口14番のりば）→ スカイウォーク前 時刻表</a></p>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090661&course=0001600156&stopNo=1">鶴見駅前（東口6番のりば）→ 大黒ふ頭 時刻表</a></p>
</dd>
<dt>復路</dt>
<dd>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090554&course=0001601099&stopNo=26">スカイウォーク前 → 横浜駅 時刻表</a></p>
<p><a href="https://navi.hamabus.city.yokohama.lg.jp/koutuu/pc/diagram/BusDiagram?orvCode=00090594&course=0001601402&stopNo=21">大黒ふ頭 → 鶴見駅 時刻表</a></p>
</dd>
</dl>
</div>',
  '神奈川県横浜市鶴見区大黒ふ頭',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '-',
  '横浜スカイウォーク専用駐車場あり',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.8553615643796!2d139.67442947577783!3d35.45837507265998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d719cb7420b%3A0x3854922b63149855!2z5aSn6buS44G16aCt6KW_57eR5Zyw!5e0!3m2!1sja!2sjp!4v1733665516761!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.9,
  2.9,
  3.6,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-23.jpg',
  true,
  '2024-12-08T22:52:14+09:00',
  '2024-12-08T22:52:14+09:00',
  '2024-12-09T10:24:53+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), (SELECT id FROM tags WHERE slug = 'drive'));

-- Images for daikoku-pier-west-green-area
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-23.jpg', 'ライトアップされる横浜ベイブリッジを見上げる', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-27.jpg', 'みなとみらい21エリアの夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-30.jpg', '大桟橋に寄港する豪華客船', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-26.jpg', 'みなとみらい21エリアの夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-25.jpg', 'ライトアップされる横浜マリンタワー', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-28.jpg', '大黒ふ頭西緑地から眺める夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-29.jpg', '本牧埠頭周辺の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-3.jpg', '大黒ふ頭西緑地の雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/yokohama-baybridge-skywalk-2-2.jpg', '横浜ベイブリッジを見上げる', 8);

-- FAQs for daikoku-pier-west-green-area
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), 'どんな夜景が楽しめますか？見どころはどこですか？', '対岸にみなとみらいエリアの街並みを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'daikoku-pier-west-green-area'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 池袋西口公園 extremeイルミネーション2024 (ikebukuro-extreme-illumination)
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
  'ikebukuro-extreme-illumination',
  '池袋西口公園 extremeイルミネーション2024',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '池袋西口公園 extremeイルミネーション2024',
  '池袋西口公園で毎年行われている冬の風物詩。エメラルドグリーンに輝くイルミネーションがとても美しい。',
  '<p>2019年11月に池袋西口公園内に新たに誕生した「グローバルリング」がエメラルドグリーンに美しく輝く姿を堪能することができるイルミネーションイベント。</p>
<p>1日に4回大型ビジョンに映し出される3D映像の「飛び出すフクロウ」やフォトスポット「光の水族館」も大きな見どころです。</p>
<p>駅前でアクセスの良さも抜群ですのでデートの帰り道などに立ち寄ってみてはいかがでしょうか。</p>',
  '京都豊島区 西池袋1-8-26',
  'https://www.extreme-illumination.com/',
  '池袋西口公園 extremeイルミネーション公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li> JR池袋駅3番出口より徒歩1分.</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8402616767985!2d139.70635197578986!3d35.73014687257143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5c4d489531%3A0x25d752954313d248!2z6LGK5bO25Yy656uL5rGg6KKL6KW_5Y-j5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1733926582514!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  3.5,
  3.1,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-2.jpg',
  true,
  '2024-12-11T23:20:26+09:00',
  '2024-12-11T23:20:26+09:00',
  '2024-12-15T12:44:06+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for ikebukuro-extreme-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-2.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-6.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-8.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-1.jpg-23-13-25-059.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-7.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-5.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-3.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/ikebukuro-illumination-4.jpg', NULL, 7);

-- FAQs for ikebukuro-extreme-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), '池袋西口公園 extremeイルミネーション2024の開催期間はいつまで？', '2024/11/16(土)〜2025/02/28(金)となっています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), '池袋西口公園 extremeイルミネーション2024の点灯時間は何時まで？', '点灯時間は16:00～25:00となっています。', 1);

-- Event info for ikebukuro-extreme-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'ikebukuro-extreme-illumination'), '20241116', '20250228', '池袋西口公園', '16:00～25:00');

-- Post: ブルガリ東京 (bulgari-tokyo)
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
  'bulgari-tokyo',
  'ブルガリ東京',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  'ブルガリ東京',
  '40Fの高層階から東京駅周辺の街並みを眺めることができる夜景スポット。屋外デッキは宿泊客以外にもラウンジ利用することで入場可能。',
  '<p>東京ミッドタウン八重洲の40階～45階に入居するブルガリ東京。</p>
<p>客室、40階にある屋外テラス、45階にあるバーなどから東京駅周辺の夜景を眺めることができます。</p>
<p>東京駅や丸の内エリアの高層ビル群が織りなす夜景は非常に迫力があります。</p>
<p>東京駅周辺を高層階から眺めることができる貴重な夜景スポットなのでぜひ立ち寄ってみてください。</p>
<p>なお屋外デッキは宿泊者、もしくはラウンジやレストランを利用することで入場できます。</p>
<p>珈琲1,800円（消費税、サービス料込み）が最低価格となっていますが、ハイクラスな空間で美しい夜景を眺められることを考えればリーズナブルともいえるでしょう。</p>',
  '東京都中央区八重洲 2-2-1',
  'https://www.bulgarihotels.com/ja_JP/tokyo',
  'ブルガリ東京 公式サイト',
  NULL,
  NULL,
  'https://tabelog.com/tokyo/A1302/A130201/13284373/',
  'ブルガリ ラウンジ（食べログ）',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「東京駅」/ 京メトロ丸の内線「東京駅」地下直結</li>
<li>東京メトロ銀座線「京橋駅」より徒歩3分</li>
<li>東京メトロ東西線、銀座線、都営浅草線「日本橋駅」より徒歩6分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="東京ミッドタウン八重洲 展望台 八重洲テラスの地図・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9126347364536!2d139.76691826525885!3d35.679153130194805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0dfb40b7ed%3A0xecaac23581109dfc!2z5p2x5Lqs44Of44OD44OJ44K_44Km44Oz5YWr6YeN5rSy!5e0!3m2!1sja!2sjp!4v1689139002842!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  3.6,
  3.8,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-6.jpg',
  true,
  '2024-12-24T22:21:10+09:00',
  '2024-12-24T22:21:10+09:00',
  '2024-12-24T22:28:51+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), (SELECT id FROM tags WHERE slug = 'tokyo-station'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for bulgari-tokyo
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-6.jpg', 'ブルガリ東京から眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-2.jpg', '黄昏時の富士山', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-12.jpg', 'ライトアップされる東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-9.jpg', '丸の内エリアのビル群とトレインビュー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-3.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-7.jpg', '東京駅と丸の内の高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-4.jpg', '丸ビルと新宿方面の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-5.jpg', '富士山とライトアップされる国会議事堂', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-10.jpg', 'イルミネーションで輝く行幸通り周辺の街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-11.jpg', 'KITTE丸の内の屋上庭園', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-13.jpg', '東京駅丸の内駅前広場周辺の夜景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'https://nightscape.tokyo/wp-content/uploads/2024/12/bulgari-tokyo-1.jpg', 'ブルガリ東京40Fの屋外デッキ', 11);

-- FAQs for bulgari-tokyo
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京駅や丸の内エリアの高層ビル群を眺めることができます。', 0);

-- Hotel info for bulgari-tokyo
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'bulgari-tokyo'), '15:00', '12:00', NULL, '<a class="panelLink-rakuten" href="https://hb.afl.rakuten.co.jp/hgc/224a57f2.20b5fb66.224a57f3.e2ba24d0/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187298%2F187298.html&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベルで予約する</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YYPE+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fbulgari-tokyo.ja.html" rel="nofollow">Booking.comで予約する</a> <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=2NV04W+53YYPE+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450864&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad353276%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450864" height="1" width="0" border="0">じゃらんで予約する</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00003044%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休で予約する</a>');

-- Post: ナビオス横浜 (navios-yokohama)
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
  'navios-yokohama',
  'ナビオス横浜',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'ナビオス横浜',
  'みなとみらいの一等地に建つ夜景の美しさに定評のあるホテル。ランドマーク側、赤レンガ倉庫側どちらの眺望も非常に迫力がある。',
  '<p>桜木町駅から横浜赤レンガ倉庫に行く途中にある、凱旋門のような見た目が特徴のナビオス横浜。</p>
<p>1997年開業の10階建てホテルで、135ある客室からは横浜みなとみらいエリアの綺麗な景色を堪能することができます。</p>

<div class="definition l-bottom-large">
  <p class="definition-title">ナビオス横浜の眺望</p>
  <dl class="definition-body">
    <dt>北西側</dt>
    <dd>ランドマークタワーをはじめとした高層ビル群、コスモクロック21、ワールドポーターズ、馬車道など</dd>
    <dt>南東側</dt>
    <dd>横浜赤レンガ倉庫、横浜ベイブリッジ、大桟橋に停泊する豪華客船など</dd>
  </dl>
</div>

<p>みなとみらいエリアの中心に建っていることもあり、どちらの眺望も非常にレベルが高いです。</p>
<p>宿泊代もみなとみらいエリアの中ではお手頃な価格となっており、夜景鑑賞したい方にはとてもコスパの高いホテルといえます。</p>
<p>予約時にどちらの部屋を予約するか指定することも可能なので、みなとみらいに観光で訪れる方は是非宿泊してみてはいかがでしょうか？</p>',
  '神奈川県横浜市中区新港 2-1-1',
  'https://www.navios-yokohama.com/',
  'ナビオス横浜公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR京浜東北線、根岸線、東急東横線、市営地下鉄線「桜木町駅」より徒歩約10分</li>
<li>みなとみらい線「馬車道駅」より徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.0873523436762!2d139.63915369999998!3d35.4526318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c5838e6d4df%3A0xd547226c25c4340b!2z44OK44OT44Kq44K55qiq5rWc!5e0!3m2!1sja!2sjp!4v1737851092256!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/2FylbKAbpqE?si=HM4l-2dCghvhw-7h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.5,
  3,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2025/01/navios.jpg',
  true,
  '2025-01-26T18:59:48+09:00',
  '2025-01-26T18:59:48+09:00',
  '2025-03-03T20:40:10+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for navios-yokohama
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios.jpg', 'ナビオス横浜の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-10.jpg', 'アニヴェルセル横浜周辺の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-12.jpg', '汽車道と横浜ランドマークタワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-17.jpg', '日本丸メモリアルパーク周辺の街並み', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-14.jpg', '汽車道周辺の街並み', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-16.jpg', 'ノートルダム横浜みなとみらいとコレットマーレ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-18.jpg', 'コスモクロック21とみなとみらいの高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-19.jpg', 'アニヴェルセル横浜とYOKOHAMA AIR CABIN', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-27.jpg', 'ライトアップされる横浜ベイブリッジと赤レンガ倉庫', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-28.jpg', 'ライトアップされる横浜税関(クイーンの塔)', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-20.jpg', 'ワールドポーターズとコスモクロック21', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-east-1.jpg', '夜明け前の横浜港周辺の街並み①', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-east-2.jpg', '夜明け前の横浜港周辺の街並み②', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-6.jpg', 'ナビオス横浜の客室からの眺望', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-7.jpg', 'ワールドポーターズとコスモクロック21', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-2.jpg', 'ナビオス横浜の外観', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-3.jpg', 'ナビオス横浜のフロントの様子', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-5.jpg', 'ナビオス横浜の客室の雰囲気', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-8.jpg', '窓の先に広がるみなとみらいの景色', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-4.jpg', 'ナビオス横浜1Fに飾られているオブジェ', 19);

-- FAQs for navios-yokohama
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'みなとみらいの高層ビル群、コスモクロック21、赤レンガ倉庫などが織りなす豪華な夜景を眺めることができます。', 0);

-- Hotel info for navios-yokohama
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'navios-yokohama'), '14:00', '10:00', NULL, '<a class="panelLink-rakuten" href="https://hb.afl.rakuten.co.jp/hgc/224a57f2.20b5fb66.224a57f3.e2ba24d0/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14800%2F14800.html&link_type=text&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6InRleHQiLCJjb2wiOjF9" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fnavios-yokohama.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=891302052&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad344255%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=891302052" height="1" width="0" border="0">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00081178%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: ワールドポーターズ ルーフガーデン (world-porters)
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
  'world-porters',
  'ワールドポーターズ ルーフガーデン',
  'spot',
  (SELECT id FROM categories WHERE slug = 'yokohama'),
  NULL,
  'ワールドポーターズ ルーフガーデン',
  '静かな雰囲気の中でコスモクロック21やみなとみらいエリアの高層ビル群を眺めることができる無料の穴場夜景スポット。',
  '<p> 横浜みなとみらい21新港地区に位置するショッピングモールの「横浜ワールドポーターズ」。</p>
<p>同施設の屋上にはルーフガーデン（屋上庭園）があり、横浜ランドマークタワーやコスモクロック21などを眺めることができます。</p>
<p>以前はルーフトップの柵ギリギリまで近づくことができましたが、現在はルーフガーデンの半分がBBQ施設となっており、BBQ予約者以外は柵に近づくことができません。</p>
<p>それでも写真のような美しい景色を眺めることができるので、ワールドポーターズで食事やショッピングをした際は是非立ち寄ってみてはいかがでしょうか？</p>',
  '神奈川県横浜市中区新港 2-2-1',
  'https://www.yim.co.jp/shops/detail/171',
  'ワールドポーターズ グリーンテラス',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:30 ~22:00',
  'なし',
  '無料',
  '<ul>
<li>みなとみらい線「馬車道駅」 約7分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25994.547441066694!2d139.61230825645742!3d35.471664499925204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c59beaafaf9%3A0xd56ab19f19ba6e03!2z5qiq5rWc44Ov44O844Or44OJ44Od44O844K_44O844K6!5e0!3m2!1sja!2sjp!4v1737927500253!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-24.jpg',
  true,
  '2025-01-27T06:49:24+09:00',
  '2025-01-27T06:49:24+09:00',
  '2025-01-27T06:49:25+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for world-porters
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-24.jpg', 'ワールドポーターズ 屋上庭園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-25.jpg', 'コスモクロック21とパシフィコ横浜', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-23.jpg', 'ワールドポーターズ 屋上庭園のイルミネーション', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-26.jpg', 'ワールドポーターズ 屋上庭園の出店', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-21.jpg', 'ワールドポーターズの外観', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'https://nightscape.tokyo/wp-content/uploads/2025/01/navios-yokohama-image-20.jpg', 'ワールドポーターズとコスモクロック21', 5);

-- FAQs for world-porters
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'コスモクロック21やみなとみらいの高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'world-porters'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 渋谷スカイ（渋谷スクランブルスクエア 展望施設） (shibuya-sky)
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
  'shibuya-sky',
  '渋谷スカイ（渋谷スクランブルスクエア 展望施設）',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷スカイ',
  '上空229mの高さから都内を見渡せる展望施設渋谷スカイ。渋谷スクランブル交差点や東京タワー、富士山などが見どころ。開放感抜群の屋上展望空間も人気。',
  '<p>2019年に開業した渋谷スクランブルスクエア。渋谷エリアで最も高い地上229mの高さを誇る商業施設です。</p>

<p>そんな同施設の47階と46階には展望施設の渋谷スカイがあり、360度東京都内を一望することができます。屋上の「SKY STAGE」は遮るものがない開放的な空間で、風を感じながら絶景を楽しめるのが魅力です。</p>

<div class="definition l-bottom-large">
<p class="definition-title">SHIBUYA SKYの見所</p>
<dl class="definition-body">
<dt>北側</dt>
<dd>渋谷スクランブル交差点、代々木公園、宮下パーク、新宿エリアの高層ビル群など</dd>
<dt>南側</dt>
<dd>渋谷ストリームや代官山、中目黒方面の街並みなど</dd>
<dt>東側</dt>
<dd>ライトアップされた東京タワーや六本木ヒルズ、麻布台ヒルズなど港区の高層ビル群</dd>
<dt>西側</dt>
<dd>富士山、首都高速道路を行き交う車、東急セルリアンタワーなど</dd>
</dl>
</div>

<p>なお46階屋内展望回廊の「SKY GALLERY」はゆったりと座れるシートやカフェ・バーなどがあり、落ち着いて夜景鑑賞をするのに最適。お酒を片手に夜景を眺める贅沢な時間を過ごせます。</p>

<p>夕暮れ時はwebの事前購入のみで空き枠が埋まってしまうことも多いため、日没前後に訪れたい場合は事前購入をしておきましょう。特に週末や連休は混雑するので、早めの予約がおすすめです。</p>',
  '東京都渋谷区渋谷 2-24-12',
  'https://www.shibuya-scramble-square.com/sky/',
  '展望施設・渋谷スカイ公式サイト',
  'https://twitter.com/shibuya_sky',
  '渋谷スカイ公式Twitterアカウント',
  NULL,
  NULL,
  '10:00 - 22:30（最終入場 21:20）',
  '年中無休（悪天候時等は屋上展望空間はクローズ）
※設備点検などで臨時休館の場合有',
  '<div >
<dl>
<dt>大人（※12歳以上）</dt>
<dd>14:59までの入場 → 2,700円 <br> 15:00以降の入場 → 3,400円</dd>
<dt>小人（※12歳の小学生を含む）</dt>
<dd>当日窓口のみ 1,200円 ※6歳の未就学児は無料</dd>
</dl>
</div>',
  '<ul>
<li>渋谷駅から直結</li>
</ul>',
  '<ul>
<li>渋谷ヒカリエ（提携駐車場）</li>
<li>平日300円(税込)／30分</li>
<li>土・日・祝 400円(税込)／30分</li>
<li>最大料金：2,400円（税込）</li>
</ul>',
  '<iframe title="渋谷スカイのマップ・地図" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.748821054973!2d139.70163874999997!3d35.65855965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b583ab6d93b%3A0x3c41198edb975744!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yS5LiB55uu77yS77yU!5e0!3m2!1sja!2sjp!4v1673370087777!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '約230m',
  '<div class="l-bottom-medium"> <iframe title="渋谷スカイの夕景タイムラプス動画" width="560" height="315" src="https://www.youtube.com/embed/9uH2O4xIcc4?si=f2t6cOQ5qPAGOwVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> <div class="l-bottom-medium"><iframe title="渋谷スカイの夕景タイムラプス動画" width="560" height="315" src="https://www.youtube.com/embed/dHvZkbUv5Tw?si=XS38RRi1ux_WCewS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div><iframe width="560" height="315" src="https://www.youtube.com/embed/7ObfAzb-SBs?si=grgi0BdoOJ7z-ff8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>',
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F25343&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベル観光で入場券をお得に購入する</a>',
  NULL,
  null,
  null,
  4,
  5,
  5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2024/01/shibuya-sky.jpg',
  true,
  '2025-05-13T14:13:03+09:00',
  '2025-05-13T14:13:03+09:00',
  '2026-01-27T08:55:21+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), (SELECT id FROM tags WHERE slug = 'scramble-intersection'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for shibuya-sky
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2024/01/shibuya-sky.jpg', 'セルリアンタワーと首都高速道路', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-sky-1.jpg', '渋谷スカイから首都高速道路を眺める', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-5.jpg', '渋谷スクランブルスクエアから眺める富士山', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-intersection.jpg', '多くの人が行き交う渋谷スクランブル交差点', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-4-1.jpg', 'パークコート渋谷ザ・タワーと渋谷区役所', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-sky-2.jpg', '渋谷スクランブル交差点と宮下パーク', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-13.jpg', '山下公園（ヤマシタパーク）周辺の街並み', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sly-west.jpg', '新宿エリアの摩天楼と新宿御苑の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-10.jpg', 'ライトアップされるドコモタワーと新宿の街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-5-1.jpg', '国立代々木競技場・代々木公園周辺の夜景', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-9-1.jpg', 'ライトアップされる東京都庁、コクーンタワーなど新宿の摩天楼', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-12.jpg', '丸の内、霞ヶ関エリアの高層ビル群と東京スカイツリー', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/a-1-2.jpg', 'ライトアップされる東京スカイツリー', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-3-1.jpg', '国立競技場と新宿の街並み', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-8-1.jpg', '東京タワーと港区エリアの夜景', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-7-1.jpg', '東京タワーと麻布台ヒルズ', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-15.jpg', 'Googleが入居する渋谷ストリームを見下ろす', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ebis-station-1.jpg', 'JR恵比寿駅周辺の夜景', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-window.jpg', '夕暮れ時の渋谷スカイ46Fの雰囲気', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-9.jpg', '渋谷スカイ46階と47階をつなぐ屋外エスカレーター', 19);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-sky-3.jpg', '渋谷スカイ47階屋上展望台の雰囲気', 20);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-8.jpg', '渋谷スカイ47階「SKY STAGE」の雰囲気', 21);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-3.jpg', '渋谷スクランブルスクエアから眺める夕景', 22);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-2-1.jpg', '港区方面の高層ビル群と東京タワーの夕景', 23);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-1-2.jpg', '新宿エリアの摩天楼と新宿御苑の夕景', 24);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-1-1.jpg', '展望ロビー内にあるデジタルサイネージ', 25);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-2.jpg', '渋谷スクランブルスクエア展望台のお土産売り場', 26);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-4.jpg', '夕暮れ時の渋谷スカイの館内', 27);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-1.jpg', '渋谷スカイ46階「SKY GALLERY」の雰囲気', 28);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/shibuya-sky-outo.jpg', '渋谷スクランブルスクエアの外観', 29);

-- FAQs for shibuya-sky
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイは20分しか入れない？', '入場チケットは20分間隔で購入となりますが、滞在時間に制限はありません。心ゆくまでゆっくり夜景鑑賞を楽しみましょう！', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイの前売り券を買った場合払い戻し（キャンセル）は可能？', '手数料が発生しますが、チケットの払い戻し・キャンセルをすることができます。天候が悪く、別日に訪れたい時も安心です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイの入場時刻を過ぎらたどうなりますか？', '予約時間を15分以上過ぎてもご連絡がない場合、キャンセルとなります。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイの年間パスポートはいくらですか？', '年間5,400円で入場し放題になります。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイの滞在時間の目安はどれくらい？', '館内はとても広く、見どころが多いのに加え、レストランやお土産売り場も充実しているため1時間30分〜2時間ほどが目安になるかと思います。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sky'), '渋谷スカイの中には何がありますか？', '渋谷スカイの中には展望フロアの他に軽食を楽しめるパラダイス ラウンジ、お土産売り場のシブヤスカイ スーベニアショップがあります。', 5);

-- Post: 毛利庭園 桜のライトアップ 2025 (mouri-park)
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
  'mouri-park',
  '毛利庭園 桜のライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '毛利庭園 桜のライトアップ 2025',
  '六本木ヒルズと夜桜の共演を眺めることができる回遊式の日本庭園。毛利池にライトアップされた桜が反射する光景もとても幻想的。',
  '<p>六本木ヒルズ内にある回遊式日本庭園、毛利庭園は、ソメイヨシノ、マイヒメ、ヨウコウ、ヤマザクラなど、四季折々の桜が楽しめる場所。</p>
<p>3月中旬から4月中旬にかけて行われる夜桜ライトアップでは、幻想的な桜の景色が広がります。</p>
<p>桜越しに見える高さ238mの六本木ヒルズの近未来的なビル群とのコントラストが、都会的な美しさを一層引き立て、また、毛利池に反射するライトアップされた桜の姿はまるで絵画のように美しく、心を奪われます。</p>
<p>回遊エリアは広すぎず、落ち着いた雰囲気で都会らしい花見を楽しめる場所として、訪れる価値が十分にあります。
<p>自然と都市が融合した、特別な春のひとときをぜひ体験してみてください。</p>',
  '東京都港区六本木 6-10-1',
  'https://www.roppongihills.com/events/2025/04/0419.html',
  '六本木ヒルズ 春まつり 2025 | 六本木ヒルズ - Roppongi Hills',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ 日比谷線「六本木駅」1C出口 徒歩0分</li>
<li>都営地下鉄 大江戸線「六本木駅」3出口 徒歩4分</li>
</ul>',
  '<ul>
<li>六本木ヒルズ内に駐車場あり</li>
<li>利用時間：24時間</li>
<li>駐車料金：P・P1～P12駐車場　300円／30分（600円／時間）</li>
<li>1日料金：全日3,000円／24時間まで</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12966.709031767592!2d139.7304934!3d35.6603225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b77b4ec062b%3A0x23ecb9dbb6be3cc7!2z5q-b5Yip5bqt5ZyS!5e0!3m2!1sja!2sjp!4v1679145537318!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  5,
  4.3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/mouri-2.jpg',
  true,
  '2025-03-11T21:25:50+09:00',
  '2025-03-11T21:25:50+09:00',
  '2025-04-08T04:00:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for mouri-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/mouri-2.jpg', '毛利庭園から眺める夜桜と森タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mouri-park-02.jpg', '毛利池に反射する夜桜のライトアップ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mouri-park-04.jpg', '毛利庭園から眺める夜桜と森タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mouri-park-01.jpg', '毛利庭園と東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mouri-park-05.jpg', '毛利池に反射する夜桜のライトアップ', 4);

-- FAQs for mouri-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), '六本木ヒルズ 春まつり2025の開催期間はいつ？', '2025年3月22日(金) ～ 4月中旬までとなっています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), '夜桜のライトアップは何時まで実施されていますか？', '毛利庭園内のライトアップは17:30～23:00となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), 'どんな夜景が楽しめますか？', '六本木ヒルズと夜桜の共演など都会らしい桜景を楽しむことが出来ます。', 2);

-- Event info for mouri-park
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'mouri-park'), '2025年3月22日', '2025年4月中旬 ※ライトアップ期間は桜の開花状況により変動します。', '毛利庭園', '17:00 ~ 22:00');

-- Post: 東武橋 河津桜のライトアップ 2025 (tobu-bridge)
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
  'tobu-bridge',
  '東武橋 河津桜のライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '東武橋 河津桜のライトアップ 2025',
  '東京スカイツリーのすぐにある小さな橋。2月下旬から3月上旬に河津桜が咲き誇り、スカイツリーと共演を眺めることができる。',
  '<p>東京スカイツリーのお膝元、北十間川にかかる東武橋。</p>
<p>毎年2月下旬なら3月上旬にかけて早咲き桜である河津桜が開花すると多くの観光客で賑わう名所です。</p>
<p>橋の付近から空を見上げれば、東京スカイツリーを見上げると河津桜の共演を眺めることができます。</p>
<p>橋の所々に置かれた街灯もレトロな雰囲気を放ち、趣ある空間になっているのも素晴らしいです。</p>
<p>春にスカイツリータウンで観光した後にぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都墨田区向島 1-32-12',
  'https://www.city.sumida.lg.jp/bunka_kanko/skytree_seityouki/machinaka/tobubashi/index.html',
  '墨田区公式ウェブサイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東武伊勢崎線（東武スカイツリーライン）「とうきょうスカイツリー駅」 1番出口から徒歩約1分</li>
<li>都営浅草線「押上（スカイツリー前）駅」から徒歩約3分</li>
<li>東京メトロ半蔵門線「押上駅」から徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="東武橋の地図・マップ" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12958.72091093158!2d139.8085088!3d35.7094859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed12c589729%3A0x964d5315ce39b969!2z5p2x5q2m5qmL!5e0!3m2!1sja!2sjp!4v1677421677350!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.2,
  4,
  3,
  2.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-01.jpg',
  true,
  '2025-03-12T02:13:36+09:00',
  '2025-03-12T02:13:36+09:00',
  '2025-03-12T02:15:24+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for tobu-bridge
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-01.jpg', 'ライトアップされる東京スカイツリーと河津桜', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-04.jpg', 'ライトアップされる東京スカイツリーと河津桜', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-03.jpg', 'ライトアップされる東京スカイツリーと河津桜', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-06.jpg', '東京スカイツリーと河津桜', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-05.jpg', '東武橋の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/tobu-bridge-02.jpg', '東武橋の雰囲気', 5);

-- FAQs for tobu-bridge
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), 'どんな夜景が楽しめますか？', '橋の上からは大迫力の東京スカイツリーを眺めることが出来ます。また、春には河津桜が咲くのでスカイツリーの桜景を楽しむことも可能です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), '東武橋を訪れるおすすめの時期はいつですか？', '河津桜が開花する2月下旬から3月上旬がおすすめです。満開のタイミングはTwitterなどで確認しましょう。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tobu-bridge'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 六本木さくら通り 桜のライトアップ 2025 (roppongi-sakura-street)
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
  'roppongi-sakura-street',
  '六本木さくら通り 桜のライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '六本木さくら通り 桜のライトアップ 2025',
  '六本木ヒルズのすぐそばにある全長約400mの桜並木道。桜のトンネルの先に六本木ヒルズが見える都会らしい光景は一見の価値あり。',
  '<p>六本木ヒルズの開業とともに植えられた六本木さくら通りのソメイヨシノ。2003年から時を経て立派に成長し、春には道を覆うような見事な桜のトンネルが広がります。</p>
<p>特に夜のライトアップは幻想的で、淡い光に照らされた桜並木が六本木の洗練された街並みに溶け込み、昼間とは異なるロマンチックな雰囲気を演出。都会的な夜景と桜のコントラストが美しく、散策しながらゆっくりと花見を楽しめます。</p>
<p>桜が満開のときでも人混みは少なく、落ち着いて花見をすることができる穴場スポットですので、ぜひ訪れてみてください。</p>',
  '東京都港区六本木 6-12',
  'https://www.roppongihills.com/events/2025/04/0419.html',
  '桜のライトアップ 2025 | 六本木ヒルズ - Roppongi Hills',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ 日比谷線「六本木駅」1C出口 徒歩2分</li>
<li>都営地下鉄 大江戸線「六本木駅」3出口 徒歩6分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.751308254894!2d139.72756311525822!3d35.65849838019954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7663ffdc51%3A0x36ec08bade61b78!2z5YWt5pys5pyo44GV44GP44KJ5Z2C!5e0!3m2!1sja!2sjp!4v1679823981545!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  4,
  3.7,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-01.jpg',
  true,
  '2025-03-11T21:31:00+09:00',
  '2025-03-11T21:31:00+09:00',
  '2025-04-08T03:59:59+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for roppongi-sakura-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-01.jpg', '六本木ヒルズと夜桜のライトアップ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-02.jpg', '六本木さくら坂の夜桜ライトアップ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-11.jpg', '六本木ヒルズと夜桜のライトアップ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-05.jpg', '六本木さくら坂の夜桜ライトアップ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-04.jpg', '六本木ヒルズレジデンスと夜桜', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-03.jpg', '六本木さくら坂の夜桜ライトアップ', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-09.jpg', '六本木ヒルズと桜', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-08.jpg', '六本木さくら通りの桜のトンネル', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-07.jpg', '六本木ヒルズけやき坂テラスと桜', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/roppongi-sakura-street-06.jpg', '六本木ヒルズと桜', 9);

-- FAQs for roppongi-sakura-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), 'どんな夜景が楽しめますか？', '全長約400mの桜並木道がライトアップされている様子を堪能することが出来ます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), '六本木ヒルズ 春まつり2025の開催期間はいつ？', '2025年3月22日 ～ 4月中旬までを予定しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), '夜桜のライトアップは何時まで実施されていますか？', '17:00～22:00までの間でライトアップが’実施されます。', 2);

-- Event info for roppongi-sakura-street
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-sakura-street'), '2025年3月22日', '2025年4月中旬 ※ライトアップ期間は桜の開花状況により変動します。', '六本木さくら通り', '17:00～22:00');

-- Post: 中目黒桜まつり 2025 (meguro-river)
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
  'meguro-river',
  '中目黒桜まつり 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '中目黒桜まつり 2025',
  '桜の名所として知られる川沿いの散歩道。夜桜のライトアップは圧巻の美しさで連日多くの観光客で賑わいを見せる。夜桜のライトアップは日没から20時までと短めなので注意。',
  '<p>東京を代表する桜の名所として知られる目黒川。春になると、川沿い約4キロにわたって約800本もの桜が咲き誇り、水面に映るピンク色の花びらが一層の美しさを演出します。</p>
<p>特に夜のライトアップは圧巻。</p>
<p>淡い光に照らされた桜が川面に映り込み、まるで光のトンネルのような幻想的な光景が広がります。</p>
<p>夜風に揺れる桜のシルエットと、ピンクのぼんぼりの優しい光が織りなす風景は、日常を忘れさせるほどの美しさ。カメラ片手に歩きながら、お気に入りの一枚を撮影するのもおすすめです。</p>
<p>毎年多くの人が訪れるため、混雑は避けられませんが、その活気もまた都会ならではの風情。屋台やカフェも点在しており、桜を眺めながら食べ歩きを楽しむこともできます。</p>
<p>なお、ライトアップの時間は17:00~20:00までと短めなので、訪問時間には注意をしましょう。</p>',
  '東京都目黒区中目黒',
  'https://tokyo-meguro.net/megurogawanosakuranamiki/',
  '目黒川の桜並木 | 東京都目黒区',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線・東急東横線「中目黒駅」から徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12969.332543623883!2d139.6988444!3d35.6441631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b48ddc4d75b%3A0xf69e3ddcbf0379fc!2z5Lit55uu6buS6aeF!5e0!3m2!1sja!2sjp!4v1679527490913!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.9,
  4.5,
  5,
  2.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-06.jpg',
  true,
  '2025-03-02T22:01:47+09:00',
  '2025-03-02T22:01:47+09:00',
  '2025-04-08T03:52:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for meguro-river
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-06.jpg', '目黒川の両脇に美しく咲く桜', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-03.jpg', '夜桜のライトアップを楽しむ人々', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-04.jpg', '目黒川ライトアップイベントの様子', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-01.jpg', '中目黒桜まつりのぼんぼり', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-07.jpg', '中目黒駅と夜桜のライトアップ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-09.jpg', '夜桜のライトアップが美しい目黒川', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-02.jpg', '中目黒桜まつりのぼんぼり', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-05.jpg', '中目黒アトラスタワーと夜桜', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-08.jpg', '夜桜のライトアップが目黒川の水面に映る様子', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-rivers-day-03.jpg', '早朝の目黒川の様子', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-rivers-day-04.jpg', '中目黒アトラスタワーと桜', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-rivers-day-02.jpg', '早朝の目黒川の様子', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-1.jpg', '目黒川周辺に咲き乱れる満開の桜', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-2.jpg', '桜が咲き乱れる目黒川の遊歩道', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-3.jpg', '中目黒桜まつりのぼんぼり', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-4.jpg', '目黒川周辺に咲き乱れる満開の桜', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-5.jpg', '目黒川に架かる別所橋', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), 'https://nightscape.tokyo/wp-content/uploads/2024/03/nakameguro-6.jpg', '中目黒駅と目黒川の桜', 17);

-- FAQs for meguro-river
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), '2025年の「中目黒さくらまつり」の開催期間はいつまでですか？', '3月19日(水)～30日(日)です。ボンボリの点灯は3月20日(祝)～4月3日(木)の予定(東京地方開花日から2週間まで)。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), '目黒川の桜はどこからどこまで続いていますか？', '世田谷区池尻大橋駅付近の大橋から目黒区の太鼓橋付近まで続いています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), '目黒川沿いに咲いている桜の種類はなんですか？', '染井吉野(ソメイヨシノ)，枝垂桜(シダレザクラ)，八重桜(ヤエザクラ)などです。', 2);

-- Event info for meguro-river
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'meguro-river'), '2025年3月19日', '2025年3月30日', '目黒川', '17:00 ~ 20:00');

-- Post: 2025 しぶやさくらまつり (shibuya-sakura-street)
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
  'shibuya-sakura-street',
  '2025 しぶやさくらまつり',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '2025 しぶやさくらまつり',
  '渋谷駅近くにある隠れた桜の名所。曲がりくねった坂道の両脇に咲く桜のトンネルはまるで映画のワンシーンのような絶景。',
  '<p>渋谷駅西口から「渋谷駅西口歩道橋デッキ」を渡るとたどり着く、渋谷桜丘のさくら坂。</p>
<p>約150mの坂道沿いに並ぶソメイヨシノが春になると満開になり、まるで桜のトンネルのような美しい風景が広がります。</p>
<p>毎年3月中旬から4月中旬には夜桜のライトアップも実施。柔らかな光に包まれた桜並木が坂道に沿って続き、幻想的な雰囲気を演出します。</p><p>曲がりくねった坂と桜のコントラストは、まるで映画のワンシーンのような美しさです。</p>
<p>渋谷の賑やかさから少し離れて、落ち着いた夜桜を楽しめるスポット。渋谷を訪れた際には、ぜひ立ち寄ってみてください。</p>',
  '東京都渋谷区桜丘町 16-12',
  'https://www.shibuya-sakura-stage.com/eventtopics/detail/?cd=000160',
  'しぶやさくらまつり2025',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR線・渋谷駅西口から徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3241.8017799278296!2d139.6999168160898!3d35.65725503889234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC36aeF44CB5p2x5Lqs6YO95riL6LC35Yy6!3m2!1d35.6580339!2d139.7016358!4m5!1s0x60188be28d48f949%3A0x4cc5a3e056ff99ae!2z44CSMTUwLTAwMzEg5p2x5Lqs6YO95riL6LC35Yy65qGc5LiY55S677yR77yW!3m2!1d35.6564675!2d139.7008164!5e0!3m2!1sja!2sjp!4v1679895664822!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  4.1,
  3.6,
  2.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-4.jpg',
  true,
  '2025-03-11T21:47:41+09:00',
  '2025-03-11T21:47:41+09:00',
  '2025-04-08T04:05:42+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for shibuya-sakura-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-4.jpg', 'さくら通りの夜桜ライトアップ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-1.jpg', '歩道橋の上から眺めるさくら通り', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-2.jpg', 'さくら通りを行き交うタクシー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-6.jpg', '桜まつりの提灯', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-3.jpg', 'さくら祭りののぼり旗', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-2-1.jpg', '桜まつりの提灯', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-4-1.jpg', '渋谷桜丘のさくら坂を見上げた様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-5.jpg', '桜まつりの提灯', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/shibuya-sakura-street-1-1.jpg', '渋谷桜丘のさくら坂の入り口', 8);

-- FAQs for shibuya-sakura-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), '第33回しぶやさくらまつりの開催期間はいつまでですか？', '2025年3月24日（月）～4月6日（日）まで開催されています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), '第33回しぶやさくらまつりの夜桜ライトアップは何時まで実施されていますか？', '17:00~23:00までライトアップされています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'さくら坂のライトアップ期間はいつまで？', '2025年3月28日 ~ 4月4日までライトアップは実施されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), 'どんな夜景を眺めることが出来ますか？', '曲がりくねった坂道の上に桜のトンネルが広がる様子を眺めることが出来ます。', 3);

-- Event info for shibuya-sakura-street
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-sakura-street'), '2025年3月24日', '2025年4月6日', '渋谷インフォスタワー前広場、渋谷サクラステージ（開会式）等', '17:00 ~ 23:00');

-- Post: 千鳥ヶ淵緑道 千代田のさくらまつり 2025 (chidorigabuchi)
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
  'chidorigabuchi',
  '千鳥ヶ淵緑道 千代田のさくらまつり 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '千鳥ヶ淵緑道 千代田のさくらまつり 2025',
  '靖国通りから北の丸公園に沿って整備された、700メートルにも及ぶ遊歩道。水辺を埋め尽くすほどの大迫力の桜景が眺められる東京を代表する桜スポット。',
  '<p>靖国通りから北の丸公園沿いに続く千鳥ヶ淵緑道は、約700メートルの遊歩道にソメイヨシノを中心とした約260本の桜が咲き誇る、都内屈指の花見スポットです。昼は青空に映える桜を、夜はライトアップされた幻想的な光景を楽しめます。</p>

<p>特に夜桜ライトアップは圧巻。柔らかなピンク色の光に包まれた桜並木が、お濠の水面に映り込む光景は息をのむ美しさ。歩道を進むごとに表情を変える桜のトンネルをゆっくり散策すれば、まるで別世界に迷い込んだような気分に。</p>

<p>緑道の中間には千鳥ヶ淵ボート場があり、水上からライトアップされた桜を見上げる体験も格別です。また、東京タワーと夜桜の共演が楽しめる人気の撮影スポットでは、混雑時に交通整理が行われるため、ゆっくり撮影したい方は早めの訪問がおすすめ。</p>

<p>都心にいながら、静かに桜を楽しめる千鳥ヶ淵緑道。特別な春のひとときを、ぜひ体験してみてください。</p>',
  '東京都千代田区九段南2丁目～3番町2',
  'https://visit-chiyoda.tokyo/sakura/spot/light.php',
  '夜桜ライトアップ｜千代田のさくらまつり｜東京都千代田区の観光情報公式サイト / Visit Chiyoda',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ九段下駅・都営地下鉄九段下から徒歩5分</li>
<li>東京メトロ半蔵門駅から徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4020638996712!2d139.74435956525912!3d35.691722330191894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188df3e6f6096b%3A0xf4d125dd6c78a8ec!2z5Y2D5Luj55Sw5Yy656uLIOWNg-mzpeODtua3tee3kemBkw!5e0!3m2!1sja!2sjp!4v1679877611134!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.3,
  3.8,
  4.2,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-3.jpg',
  true,
  '2025-03-02T22:04:26+09:00',
  '2025-03-02T22:04:26+09:00',
  '2025-04-08T03:54:29+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for chidorigabuchi
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-3.jpg', 'お堀の両脇に咲く桜がライトアップされる様子', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-5.jpg', 'ボートに乗って夜桜のライトアップを楽しむ人々', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-6.jpg', '夜桜のライトアップ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-7.jpg', '夜桜のライトアップ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-9.jpg', '千鳥ヶ淵緑道 千代田のさくらまつりの様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-12.jpg', 'お堀の水面に桜のライトアップが反射する様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-1-1.jpg', '千鳥ヶ淵ボート場付近から撮影した光景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-2.jpg', '千鳥ヶ淵緑道 千代田のさくらまつりの様子', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-3-1.jpg', 'ボートに乗って夜桜のライトアップを楽しむ人々', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/chidorigabuchi-4-1.jpg', '千鳥ヶ淵緑道 千代田のさくらまつりの様子', 9);

-- FAQs for chidorigabuchi
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), '2025年の千鳥ヶ淵夜桜ライトアップはいつまで実施されていますか？', '2025年3月28日（金）～4月8日（火） まで実施されています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), '夜桜のライトアップは何時まで実施されていますが？', '日没（18時頃）〜21時まで点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), '千鳥ヶ淵ボートの利用料金はいくらですか？', '料金は通常期30分500円、60分1,000円です。観桜期は30分800円、60分1,600円で利用できます。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'ボート場の営業時間は何時までですか？', '通常17時までですが、観桜期は20時30分まで営業しています。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), '東京タワーと夜桜のライトアップが眺められる場所はどこにありますか？', '九段坂公園の敷地内、公衆トイレ横を目指すとわかりやすいです。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), 'どんな夜景を楽しむことができますか？', '700メートルにも及ぶ桜並木がピンク色に染められる大迫力の桜景眺めることが出来ます。', 5);

-- Event info for chidorigabuchi
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'chidorigabuchi'), '2025年3月28日', '2025年4月8日', '千鳥ヶ淵緑道', '日没〜21時まで');

-- Post: 江戸桜通りの桜 (SAKURA FES NIHONBASHI 2025) (edo-sakura-street)
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
  'edo-sakura-street',
  '江戸桜通りの桜 (SAKURA FES NIHONBASHI 2025)',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '江戸桜通りの桜 (SAKURA FES NIHONBASHI 2025)',
  '歴史的建造物が建ち並ぶ情緒ある通りがピンク色に染まる',
  '<p>日本銀行本店や三越日本橋本店など、重要文化財が立ち並ぶ江戸桜通り。</p>
<p>この通りは、春になると両脇に植えられたソメイヨシノが満開を迎え、桜の名所として訪れる人々を魅了します。</p>
<p>ライトアップされた桜がピンク色に染まる光景は、歴史的な石造りの建物とのコントラストが美しく、まるで時が止まったような幻想的な雰囲気を楽しめます。</p>
<p>満開の桜を落ち着いた環境で堪能できるため、人混みが少なく静かな花見にぴったり。</p>
<p>仕事帰りやデートにも最適なこの場所で、歴史と桜が織りなす美しい風景をぜひ楽しんでください。</p>',
  '東京都中央区日本橋本町1-5、本石町1-3',
  'https://nihonbashi-sakurafes.art/',
  'SAKURA FES NIHONBASHI いつもの春。あたらしい春。 | 桜フェス日本橋',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>【電車】東京メトロ三越前駅・JR新日本橋駅直結</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.6221156879747!2d139.77181131525893!3d35.68630558019319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzEwLjciTiAxMznCsDQ2JzI2LjQiRQ!5e0!3m2!1sja!2sjp!4v1679961905534!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3,
  3.5,
  3.2,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-9.jpg',
  true,
  '2025-03-11T21:55:29+09:00',
  '2025-03-11T21:55:29+09:00',
  '2025-04-08T04:01:25+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for edo-sakura-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-3.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-1.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-9.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-2.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-11.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-4.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-6.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/edo-sakura-street-10.jpg', NULL, 7);

-- FAQs for edo-sakura-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'SAKURA FES NIHONBASHI 2023の開催期間はいつまでですか？', '2025年3月19日(水)～4月6日(日)です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'SAKURA FES NIHONBASHI 2023の夜桜ライトアップは何時まで点灯していますか？', '17:00～23:00の間に点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), 'どんな夜景を楽しむことが出来ますか？', '石造りの歴史的建造物が建ち並ぶ情緒ある通りで、ソメイヨシノ約80本が花開く光景を眺めることが出来ます。', 2);

-- Event info for edo-sakura-street
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'edo-sakura-street'), '2025年3月19日', '2025年4月6日', '江戸桜通り、中央通り沿いの各施設', '17:00 ~ 23:00');

-- Post: 渋谷ヒカリエ 11F スカイロビー (shibuya-hikarie)
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
  'shibuya-hikarie',
  '渋谷ヒカリエ 11F スカイロビー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'shibuya'),
  NULL,
  '渋谷ヒカリエ 11F スカイロビー',
  '渋谷ヒカリエ11Fにある無料の展望スペース。渋谷スクランブル交差点を行き交う人や車が見どころで、訪日外国人に人気のスポットとなっている。',
  '<p>2012年にオープンした地上34階・地下4階の高層複合施設「渋谷ヒカリエ」。</p>
<p>11Fにエスカレーター付近には無料の展望スペースであるスカイロビーがあります。</p>
<p>大きな窓の先には渋谷の街並みが広がり、にぎやかな街並みを堪能することが可能です。</p>
<p>観光名所としても有名なスクランブル交差点や渋谷のランドマークである109などが並ぶ西側の景色は光量も多く、夜景の迫力も程よいです。</p>
<p>スカイロビーの開放時間は7:00~24:00までとなっており、夜遅くに立ち寄ることも可能。</p>
<p>渋谷でショッピングや食事を楽しんだあとにぜひ立ち寄ってみてはいかがでしょうか？</p>',
  '東京都渋谷区渋谷 2-21-1',
  'https://www.hikarie.jp/',
  '渋谷ヒカリエ公式サイト',
  'https://www.instagram.com/shibuya_hikarie/',
  '渋谷ヒカリエ 公式インスタグラムアカウント',
  NULL,
  NULL,
  '7:00〜24:00',
  'なし',
  '無料',
  '<ul>
<li>JR線・京王井の頭線「渋谷駅」と2階連絡通路で直結</li>
<li>東京メトロ銀座線「渋谷駅」と1階で直結</li>
<li>東急東横線・田園都市線・東京メトロ半蔵門線・副都心線「渋谷駅」B5出口と直結</li>
</ul>',
  '<dl>
<dt>営業時間</dt>
<dd>6:50〜24:00（最終入庫23:30まで）</dd>
<dt>ご利用料金</dt>
<dd>全日400円/30分</dd>
<dt>最大料金</dt>
<dd>最大料金3,200円 ※平日のみ</dd>
</dl>',
  '<iframe title="渋谷ヒカリエ 展望台 スカイロビーの位置" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7267193676307!2d139.703742!3d35.6591041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b585748f601%3A0xcec1f5e0040b8b55!2z44CSMTUwLTAwMDIg5p2x5Lqs6YO95riL6LC35Yy65riL6LC377yS5LiB55uu77yS77yR4oiS77yRIOODkuOCq-ODquOCqA!5e0!3m2!1sja!2sjp!4v1687011008910!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Bz4mpMwznY4?si=rBB3_vyIA6B5WEMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.1,
  3.9,
  3.3,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie.jpg',
  true,
  '2025-06-04T07:28:53+09:00',
  '2025-06-04T07:28:53+09:00',
  '2025-06-04T07:30:29+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), (SELECT id FROM tags WHERE slug = 'scramble-intersection'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for shibuya-hikarie
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-6.jpg', '渋谷ヒカリエ 展望台 スカイロビーから眺める渋谷の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-7.jpg', '渋谷109とスクランブル交差点', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-5.jpg', '山手線を行き交う電車', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-10.jpg', 'ヒカリエ・スカイロビーから眺める渋谷の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-1.jpg', 'ヒカリエ 11F スカイロビー内の雰囲気', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikaries-1.jpg', '夕暮れ時の渋谷の街並み', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie-2.jpg', 'ヒカリエ・スカイロビー内に展示されている渋谷の街並みのジオラマ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'https://nightscape.tokyo/wp-content/uploads/2023/06/shibuya-hikarie.jpg', '渋谷109とスクランブル交差点', 7);

-- FAQs for shibuya-hikarie
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), 'どんな夜景が楽しめますか？', '観光名所としても有名なスクランブル交差点や渋谷のランドマークである109などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), '渋谷ヒカリエ スカイロビーは何階にありますか？', '渋谷ヒカリエ スカイロビーは11階にあります。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), '渋谷ヒカリエ・スカイロビーは何時まで開放されていますか？', '7:00〜24:00まで開放されています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'shibuya-hikarie'), '渋谷ヒカリエ 11F スカイロビーは入場料金がかかりますか？', '渋谷ヒカリエ 11F スカイロビーは無料で入場可能です。', 3);

-- Post: サンシャイン60 展望台 てんぼうパーク (sunshine-60)
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
  'sunshine-60',
  'サンシャイン60 展望台 てんぼうパーク',
  'spot',
  (SELECT id FROM categories WHERE slug = 'toshima'),
  NULL,
  'サンシャイン60 展望台 てんぼうパーク',
  '海抜251mの高さから360度都会の景色を堪能できる展望台。寝そべることができる芝生広場や飲食スペースなどの施設も充実。',
  '<p>2023年4月にリニューアルオープンしたサンシャイン60の最上階にある展望台「てんぼうパーク」。</p>
<p>海抜251mの高さから360度の東京都内の街並みを見渡すことができる豊島区屈指の展望台です。</p>
<p>各方角の見どころは下記の通り。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>西北側</dt>
<dd>池袋駅周辺の街並み、富士山、秩父連山など</dd>
<dt>南西側</dt>
<dd>豊島区役所、新宿の高層ビル群など</dd>
<dt>東側</dt>
<dd>東京タワーやレインボーブリッジをはじめとした港区方面の街並み</dd>
<dt>北東側</dt>
<dd>埼玉方面の街並み</dd>
</dl>
</div>

<p>館内には寝そべることができる芝生広場やカフェスペースなどがあり、リラックスして東京の街並みを堪能することができます。</p>
<p>また、リニューアル前は入場料金が2,000円となっていましたが、900円に改定。</p>
<p>都内の有料展望台としてはとても良心的な価格設定となっており、利用しやすくなったのは嬉しいポイント。</p>
<p>サンシャイン60で買い物をしたついでにぜひ立ち寄ってみてほしいスポットです。</p>',
  '東京都豊島区東池袋 3-1-1',
  'https://sunshinecity.jp/observatory/',
  'サンシャイン60公式サイト',
  'https://twitter.com/tenboupark/',
  '公式Twitterアカウント',
  'https://www.instagram.com/tenboupark/',
  '公式インスタグラムアカウント',
  '11:00 〜 21:00',
  'なし',
  '<dl>
<dt>大人（高校生以上）</dt>
<dd>700円（平日）/ 900円（土日祝）/ 1,200円（繁忙期）</dd>
<dt>小学生・中学生</dt>
<dd>500円（平日）/ 600円（土日祝）/ 800円（繁忙期）</dd>
</dl>',
  '<ul>
<li>池袋駅（JR・東京メトロ・西武線・東武線）35番出口より徒歩約8分</li>
<li>東池袋駅（東京メトロ有楽町線）6・7番出口より地下通路で徒歩約3分</li>
</ul>',
  '<dl>
<dt>営業時間</dt>
<dd>24時間(年中無休)</dd>
<dt>料金</dt>
<dd>30分ごとに300円（入庫～4時間）/ 2400円（4～8時間）</dd>
</dl>',
  '<iframe title="サンシャイン60 展望台 てんぼうパークの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12955.482661764638!2d139.7181562!3d35.7293992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6f393e6fa5%3A0x2d61fabefab2f99f!2z44K144Oz44K344Oj44Kk44OzNjDjg5Pjg6s!5e0!3m2!1sja!2sjp!4v1688307101726!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '251m',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/-iWVNXHiCLk?si=Lk-E9FlKgmQPE4PD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<a href="https://hb.afl.rakuten.co.jp/hgc/3e898cb7.f78693c6.3e898cb8.e25ccdd5/?pc=https%3A%2F%2Fexperiences.travel.rakuten.co.jp%2Fexperiences%2F36350&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天観光トラベルで入場券をお得に購入</a>',
  NULL,
  null,
  null,
  3.9,
  3.2,
  4,
  4.1,
  'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-8.jpg',
  true,
  '2025-02-09T21:34:37+09:00',
  '2025-02-09T21:34:37+09:00',
  '2025-02-09T21:34:37+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for sunshine-60
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-8.jpg', '富士山と池袋駅の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-15.jpg', 'スカイツリーと浅草方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-11.jpg', '夕暮れ時の富士山', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-9.jpg', '池袋駅方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-10.jpg', '首都高速道路を行き交う車', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-13.jpg', 'サンシャイン60の眼下に広がる街並み', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-14.jpg', '東京タワーと港区方面の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-12.jpg', '新宿方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-2.jpg', '港区方面の景色', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-6.jpg', '港区方面の景色', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60-7.jpg', '池袋駅周辺の景色', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2024/08/ikebukuro-sunshine-60.jpg', 'スカイツリー方面の景色', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'https://nightscape.tokyo/wp-content/uploads/2023/07/sun-shine-city-1.jpg', 'てんぼうパークの館内の雰囲気', 12);

-- FAQs for sunshine-60
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'どんな夜景が楽しめますか？', '池袋駅の全景や富士山、東京タワーやスカイツリーなどのランドマークを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'サンシャインシティ60の前売り券はどこで購入することができますか？', 'アソビューやローソンで購入することが可能です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'サンシャイン60 展望台の高さは何メートルですか？', '海抜251mの高さになります。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'サンシャイン60 てんぼうパークの所要時間はどれくらい ？', '個人差がありますが、約30分～1時間程度です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'sunshine-60'), 'サンシャイン60展望台はいつリニューアルオープンしましたか？', '2023年4月18日にリニューアルオープンしました。', 4);

-- Post: 麻布台ヒルズ 展望台 スカイロビー (azabudai-hills)
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
  'azabudai-hills',
  '麻布台ヒルズ 展望台 スカイロビー',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  '麻布台ヒルズ 森JPタワー   展望台',
  '東京タワービューが目の前に広がる話題の絶景スポット。展望台へは地下一階の33F直通エレベーターでアクセすることが可能。オープン当初は無料で入場できたが、現在はカフェやレストランの利用が必須。',
  '<p>2023年11月に開業した麻布台ヒルズ。</p>
<p>複数の商業ビル群で構成されており、メイン棟の「森JPタワー」はあべのハルカスを抜き、日本一の高さ325mを誇っています。</p>
<p>そんな森JPタワーの33Fには展望フロアのスカイロビーがあり、東京の街並みを眺めることができます。</p>

<div class="definition l-bottom-large">
<p class="definition-title">麻布台ヒルズの眺望の見所</p>
<dl class="definition-body">
<dt>南東側</dt>
<dd>東京タワーやレインボーブリッジ、浜松町方面のビル夜景など</dd>
<dt>南側</dt>
<dd>首都高速道路を行き交う車や麻布方面の都市風景など</dd>
<dt>南西側</dt>
<dd>富士山や六本木ヒルズなど</dd>
</dl>
</div>

<p>各方面ともにとても迫力のある夜景が堪能できますが、遮るものがなく至近距離で<a href="https://nightscape.tokyo/tag/tokyo-tower/">東京タワービュー</a>を味わえるのが同施設一番の特徴です。</p>
<p>なお同施設は2024年4月17日までは無料公開されていましたが、現在は下記のレストラン・カフェを利用する場合のみ入場可能となっています。</p>

<div class="box l-bottom-large">
<ul>
<li>ヒルズハウス（Hills House）</li>
<li>ダイニング サーティースリー（Dining 33）</li>
<li>Sky Room Cafe & Bar</li>
</ul>
</div>

<p>一番お手頃なのはSky Room Cafe & Barを利用した場合。</p>
<p><b>最低1,100円（チャージ 500円 ＋ワンドリンク 600円）</b>で入場できるので、あればぜひ麻布台ヒルズ周辺で食事をする際などに立ち寄ってみてはいかがでしょうか？</p>',
  '東京都港区麻布台 1-3-1',
  'https://www.azabudai-hills.com/index.html',
  '麻布台ヒルズ公式サイト',
  'https://www.instagram.com/azabudaihillsofficial/',
  '麻布台ヒルズ インスタグラムアカウント',
  'https://www.azabudai-hills.com/shop_list/2007.html',
  'Hills Hous Sky Room Cafe&Bar',
  '平日：10時～21時、休日：9時～21時',
  'なし',
  'レストラン / カフェの利用が必須',
  '<ul>
<li>東京メトロ南北線『六本木一丁目駅』2番出口 徒歩4分</li>
<li>東京メトロ日比谷線『神谷町駅』5番出口 直結</li>
<li>東京メトロ日比谷線『六本木駅』3番出口 徒歩10分</li>
<li>都営大江戸線『六本木駅』5番出口 徒歩10分</li>
<li>都営大江戸線『麻布十番駅』6番出口 徒歩10分</li>
<li>東京メトロ南北線『麻布十番駅』3番出口 徒歩11分</li>
<li>都営三田線『御成門駅』A6出口 徒歩11分</li>
</ul>',
  '<ul>
<li>営業時間 0:00～24:00</li>
<li>料金 ￥200 / 15分</li>
</ul>',
  '<iframe title="麻布台ヒルズ（森JPタワー）展望台の位置・場所" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.564021303295!2d139.7215615871582!3d35.661215500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bdecb913b5d%3A0xf582651d930e5526!2z6bq75biD5Y-w44OS44Or44K6IOajru-8qu-8sOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1701507701994!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.6,
  3.6,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/tower-1.jpg',
  true,
  '2025-03-04T13:11:12+09:00',
  '2025-03-04T13:11:12+09:00',
  '2025-03-04T13:16:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for azabudai-hills
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tower-1.jpg', '麻布台ヒルズの展望台から眺める東京タワー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tower-3.jpg', 'ライトアップされるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tower-2.jpg', '東京タワーメインデッキ展望台を望遠レンズで撮影', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tower-4.jpg', 'ライトアップされる築地大橋と湾岸エリアのタワーマンション群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-6.jpg', '夕暮れ時の富士山と六本木ヒルズ', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-2.jpg', 'ライトアップされるレインボーブリッジと汐留エリアの高層ビル群', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-7.jpg', '麻布台ヒルズからの夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-5.jpg', '赤羽橋交差点の周辺の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-8.jpg', '首都高速道路を行き交う車', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-1-1.jpg', '麻布台ヒルズ 展望台から眺める東京タワー', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-1.jpg', '麻布台ヒルズス 33F スカイロビーの雰囲気', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-1-2.jpg', '麻布台ヒルズ 33Fと34Fを繋ぐ大階段', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-2-1.jpg', '麻布台ヒルズ34Fにあるカフェ&バー', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-10.jpg', '麻布台ヒルズ 森JPタワーの外観', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-3-1.jpg', '麻布台ヒルズのクリスマスマーケットの様子', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-4-1.jpg', '麻布台ヒルズの庭園', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-hills-elevator.jpg', '地下一階にある33F展望台直通エレベーターの入り口', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-1.jpg', '麻布台ヒルズ周辺の街並み', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudai-1-1.jpg', '麻布台ヒルズ周辺の街並み', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/azabudaias-1.jpg', '麻布台ヒルズ 森JPタワーのオブジェ', 19);

-- FAQs for azabudai-hills
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), 'どんな夜景が楽しめますか？見どころはどこですか？', '東京タワーやレインボーブリッジといったランドマーク、港区方面の街並みを堪能することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), '麻布台ヒルズ 展望台は無料で入場することができますか？', '2024年4月18日（木）からは、「麻布台ヒルズ 森JPタワー」のオフィステナント入居者「ヒルズハウス」「ダイニング サーティースリー」「ヒルズ ハウス スカイ ルーム カフェ ＆ バー」の利用者、「ダイニング33 パティスリー ア・ラ・メゾン」の購入者のみが入場可能となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), '麻布台ヒルズのスカイロビー（展望台）への行き方は？', '地下一階にある33F直通のエレベーターでアクセスすることが可能です。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), '東京タワーのライトアップは何時まで実施されていますか？', '東京タワーのライトアップは日没から24時まで実施されています。特別ライトアップ等のスケジュールは公式サイトから確認可能です。', 3);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), '日比谷線神谷町駅から展望台（森JPタワー）までの行き方を教えてください。', '日比谷線神谷町駅には麻布台ヒルズガーデンプラザに直結した連絡通路があります。  連絡通路 → ガーデンプラザ → 中央広場 → 森JPタワーの順に進みましょう。', 4);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'azabudai-hills'), '麻布台ヒルズ 展望台 スカイロビーの入場料はいくらですか？', '麻布台ヒルズ 展望台 スカイロビーへ入場するにはSky Room Cafe & Barを利用する場合が最安値です。最低1,100円（チャージ 500円 ＋ワンドリンク 600円）で利用ができます', 5);

-- Post: 目黒川さくらのライトアップ2025 (gotanda-sakura-lightup)
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
  'gotanda-sakura-lightup',
  '目黒川さくらのライトアップ2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '目黒川さくらのライトアップ2025',
  '大崎・五反田エリアの目黒川流域に咲く桜並木が美しくライトアップされる期間限定イベント。桜の開花時期に合わせ「目黒川みんなの屋台村」も開催されるので、軽食を楽しみながら夜桜を満喫できる。',
  '<p>大崎・五反田エリアの目黒川流域に咲き誇る桜並木が、毎年春にライトアップされる期間限定のイベント。</p>
<p>高層ビル群の明かりと夜桜のライトアップの共演は、まるで都会の中に広がる幻想的な世界のようで、一見の価値があります。五反田ふれあい水辺広場では、屋台が立ち並び、活気ある雰囲気が広がります。</p>
<p>さらに、キッチンカーで軽食を楽しみながら、夜桜を眺めることができるので、食事と一緒に春の訪れを満喫できます。</p>
<p>都会の中心で静かな夜桜を堪能できるこのイベント、ぜひ春のひとときを目黒川のライトアップで楽しんでみてください。</p>',
  '東京都品川区東五反田 2-9-11',
  'https://shinagawa-kanko.or.jp/event/sakura-lightup2025/',
  'さくらのライトアップ2025・目黒川みんなの屋台村 | 品川観光協会',
  NULL,
  NULL,
  NULL,
  NULL,
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
  3.3,
  3.3,
  3.2,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-4.jpg',
  true,
  '2025-03-11T21:42:45+09:00',
  '2025-03-11T21:42:45+09:00',
  '2025-04-08T03:56:26+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for gotanda-sakura-lightup
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-4.jpg', '区立五反田ふれあい水辺広場の夜桜ライトアップ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-3.jpg', '区立五反田ふれあい水辺広場の夜桜', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-2.jpg', '夜桜と高層ビル', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-1.jpg', '横断歩道の先に見える夜桜', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-5.jpg', '五反田ふれあい水辺広場で実施される夜桜ライトアップイベントの様子', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-6.jpg', '五反田ふれあい水辺広場で実施される夜桜ライトアップイベントの様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-7.jpg', '目黒川沿いに咲き誇る桜', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-8.jpg', '桜が咲き誇る区立五反田ふれあい水辺広場', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-10.jpg', '桜が咲き誇る区立五反田ふれあい水辺広場', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-meguro-river-9.jpg', '目黒川と山本橋', 9);

-- FAQs for gotanda-sakura-lightup
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), 'どんな夜景が楽しめますか？', '目黒川の両脇に咲き誇る桜が美しくライトアップされる様子を堪能することができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), '「さくらのライトアップ2023」いつまで開催されていますか？', '2025年3月19日から4月13日まで開催されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), '「さくらのライトアップ2025」の点灯時間は何時までですか？', 'ライトアップは17：00～21：00まで実施されています。', 2);

-- Event info for gotanda-sakura-lightup
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-sakura-lightup'), '2025年3月19日', '2025年4月13日', '区立五反田ふれあい水辺広場および目黒川沿道', '17：00～21：00');

-- Post: 音無親水公園 夜桜のライトアップ 2025 (otonashigawa-park)
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
  'otonashigawa-park',
  '音無親水公園 夜桜のライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '音無親水公園 春のライトアップ 2025',
  '王子駅から歩いてすぐの場所にあるとは思えない風情のある公園。夜桜のライトアップがとても美しい。',
  '<p>日本の都市公園100選にも選ばれた音無親水公園は、王子駅から徒歩すぐとは思えない風情あふれるスポット。</p>
<p>流路に枝垂れる桜やもみじ、水車、アーチ橋などが情緒を演出し、四季折々の美しい景観を楽しめます。</p>
<p>春のライトアップでは、桜が柔らかな光に包まれ、水面に映る光景が幻想的な雰囲気を生み出します。静かで落ち着いた空間の中、ゆっくりと夜桜を堪能できるのが魅力。</p>
<p>また、近くには桜の名所飛鳥山公園もあるので、併せて訪れるのもおすすめ。風情ある水辺の夜桜を、ぜひ体験してみてください。</p>',
  '東京都北区王子本町 1-1',
  'https://www.city.kita.tokyo.jp/jutaku/koen/koenichiran/a-o/otonashishinsui.html',
  '音無親水公園｜東京都北区',
  'http://www.kanko.city.kita.tokyo.jp/spot/98-2/',
  '音無親水公園 | 東京都北区観光ホームページ',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR王子駅（北口）から徒歩で1分</li>
<li>南北線王子駅（3番出口）から徒歩で1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12951.656926272623!2d139.7362219!3d35.7529128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018927c13e119d1%3A0xeef949148b8fa8e0!2z5YyX5Yy656uL6Z-z54Sh6Kaq5rC05YWs5ZyS!5e0!3m2!1sja!2sjp!4v1712503421486!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.4,
  3.5,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-12.jpg',
  true,
  '2025-03-02T21:59:35+09:00',
  '2025-03-02T21:59:35+09:00',
  '2025-04-08T04:06:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for otonashigawa-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-12.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-13.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-11.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-8.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-10.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-9.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-7.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-6.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-5.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-4.jpg', NULL, 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-3.jpg', NULL, 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'https://nightscape.tokyo/wp-content/uploads/2024/04/otonashi-park-2.jpg', NULL, 11);

-- FAQs for otonashigawa-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), 'どんな夜景が楽しめますか？見どころはどこですか？', '毎年春の時期に夜桜がライトアップされ、幻想的な光景を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Event info for otonashigawa-park
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'otonashigawa-park'), '2025年3月15日', '2025年4月6日', '音無親水公園', '日没 ～22：00');

-- Post: 10万枚の写真を撮ってきた僕がおすすめの一眼カメラ・レンズの選び方を紹介する【初心者向け】 (camera-select)
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
  'camera-select',
  '10万枚の写真を撮ってきた僕がおすすめの一眼カメラ・レンズの選び方を紹介する【初心者向け】',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>社会人になって旅行へ頻繁にいくようになってからカメラが趣味の一つになりました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ファインダー越しに映る綺麗な世界に感動した結果、徐々にカメラにのめり込んでいった感じ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今では東京夜景ナビというサイトを運営していて、200以上の夜景スポットを巡ったり、カメラマンとしてのクライアントワークもこなしています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回はそんな僕が次の2つについて解説していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"className":"is-style-check_list"} -->
<ol class="wp-block-list is-style-check_list"><!-- wp:list-item -->
<li>分かりやすいカメラとレンズの選び方</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>予算別おすすめカメラとレンズの組み合わせ</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>現在<strong>「おすすめ カメラ」</strong>と検索しても、細かい性能差を比較した記事ばかり出てきてしまい、「<span class="swl-marker mark_orange">結局どのカメラが良いのか分からない…。</span>」とお悩みの方も多いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>なので、本記事では初心者の方でも理解しやすいように専門用語を避け、具体的な作例も交えつつ、カメラやレンズ選びの要点をお伝えしていきます！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/article/camera-beginner-item/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">カメラとレンズの選び方&nbsp;</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずはカメラやレンズを選ぶ時に意識しておくべき点を7つに分けてお伝えしていきます。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">①カメラを趣味にするなら、いきなり良い機材を揃えよう</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10107,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/06/camera-select-02-1024x683.jpg" alt="" class="wp-image-10107"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>初めてカメラやレンズを購入するとき「まずは入門機を購入したほうがいいかなぁ?」と考える方も多いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>でもせっかくカメラを趣味にするなら最初から良いものを買ってしまうのをおすすめします。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>スペックの高い機材を揃えたほう<span class="swl-marker mark_yellow">が美しいボケ感のある写真やノイズの少ない綺麗な写真を楽しめる</span>からです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>上級カメラであっても操作性はほとんど同じなので、<strong>使いこなすのが難しいなんてことはありません。</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今のレベルなんて気にせず、スマホでは撮れない写真を存分に味わえる機材を揃えましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">②良いボディより良いレンズを選ぼう</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10104,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/06/camera-select-04-1024x683.jpg" alt="" class="wp-image-10104"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>良いカメラ（ボディ本体）を選ぶより、良いレンズを選んだほうが手っ取り早くいい写真が撮れます。</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボディーに10万円、レンズに2万円を費やすより、5万円のボディーに5万円の良いレンズを合わせたほうが良い写真が撮れるんです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、ボディーは買い替えれば古いものは使わなくなりますが、レンズは一度購入すると長く付き合っていくことが多いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そのため、<span class="swl-marker mark_yellow">中途半端に良いボディーを買うより、良いレンズを買うことをおすすめ</span>します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">③まずはF値が小さい単焦点レンズを選ぼう</h3>
<!-- /wp:heading -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2023/03/meguro-river-01.jpg" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>F値とは、絞りがどれだけ開いているか（＝光をどれだけよく取り込むか）を表す値です。レンズにはそれぞれF値が決まっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>このF値を小さく設定できるレンズほど、<span class="swl-marker mark_yellow">ボケ味の強い「一眼レフらしい写真」を撮ることが可能</span>できます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>基本的にF値の小さいレンズは値段が高くなりやすいのがネックですが、ズームレンズではなく単焦点レンズであれば比較的安価に購入可能です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まずはF値の低い単焦点レンズを１本選んでみましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">④ボディーはSony・Canon・Nikonのミラーレス機ががおすすめ</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10105,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/06/camera-select-03-1024x683.jpg" alt="" class="wp-image-10105"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一眼カメラには一眼レフカメラとミラーレス一眼の2種類があり、一般的に下記のような違いがあります。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false,"swlScrollable":"sp","swlTableWidth":"800px"} -->
<figure class="wp-block-table"><table><tbody><tr><th></th><th>一眼レフカメラ</th><th>ミラーレス一眼カメラ</th></tr><tr><td></td><td></td><td></td></tr><tr><td>仕組み</td><td>レンズから入った光を鏡で反射させてファインダーに映す</td><td>鏡がなく、レンズから入った光が直接センサーに届き、画面に映る</td></tr><tr><td>ファインダーの見え方</td><td>実際の景色がそのまま見えるため</td><td>ファインダーを覗くと電子画面が見える</td></tr><tr><td>サイズ・重量</td><td>やや重い</td><td>軽量・コンパクト</td></tr><tr><td>バッテリー持ち</td><td>長い</td><td>短い</td></tr><tr><td>フォーカス性能</td><td>動くものにピントを合わせやすい</td><td>動いているものにピントを合わせるの苦手</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>おすすめしたいのはミラーレス一眼カメラ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>かつて一眼レフカメラの開発に注力していたNikonやCanonといった大手メーカーも現在はミラーレス一眼の開発にシフトしており、<strong><span class="swl-marker mark_yellow">バッテリー持ちやフォーカス速度が格段に改善されている</span></strong>からです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それに軽量・コンパクトで気軽に持ち運べるポイントも高い。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>まずはボディやレンズの選択肢が豊富かつ、ユーザーも多いSony・Canon・Nikonのカメラを検討すると良いでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑥イメージセンサーサイズは予算と相談して決めよう</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":12292,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/camera-full-size-1024x683.jpg" alt="" class="wp-image-12292"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ボディ選びの際にはイメージセンサーサイズによって価格が大きく異なることも知っておきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>イメージセンサーは一眼カメラの心臓部とも呼べるパーツでセンサーサイズが大きいほどクオリティの高い写真や動画が撮りやすくなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sony・Canon・Nikonのミラーレス機の場合、イメージセンサーの選択肢は下記2種類になります。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false,"swlScrollable":"sp","swlTableWidth":"800px"} -->
<figure class="wp-block-table"><table><tbody><tr><th></th><th>フルサイズ</th><th>APS-C</th></tr><tr><td>センサーサイズ</td><td>大きい</td><td>フルサイズより小さい</td></tr><tr><td>画質</td><td>暗所でもきれいに撮影できる</td><td>暗所での撮影ではノイズが乗りやすい</td></tr><tr><td>ボケの表現</td><td>背景を美しくぼかせる</td><td>フルサイズよりボケにくい</td></tr><tr><td>サイズ・重量</td><td>APS-Cより大きい</td><td>コンパクト</td></tr><tr><td>価格</td><td>高価</td><td>安価</td></tr><tr><td>適した用途</td><td>プロの撮影、風景・ポートレート・夜景撮影など</td><td>日常のスナップ撮影、旅行、趣味の撮影など</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>センサーサイズはAPS-Cであっても十分に一眼カメラらしい写真を撮ることは可能。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただし、用途によってはフルサイズ機を購入した方が後悔が少ない場合もあるでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">⑦ボディー単体で買ってレンズは別買いがおすすめ</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10421,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/sony-camera-1024x683.jpg" alt="" class="wp-image-10421"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラは<strong>ボディーとレンズがセットになって売られているもの</strong>と、<strong>ボディーだけで売られているもの</strong>があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボディーとセットで付いてくるレンズは微妙なものが多く、せっかく一眼カメラならではの写真を撮ることができない可能性があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そのため<span class="swl-marker mark_yellow">ボディーは単体で売られているものを購入し、レンズは自分で選ぶ</span>ことをおすすめします。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">おすすめのカメラとレンズの組み合わせを予算別に紹介</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":11953,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-2-1-1024x683.jpg" alt="東京タワーと港区方面の夜景" class="wp-image-11953"/><figcaption class="wp-element-caption">東京タワーと港区方面の夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>それではここからは3パターンの予算別におすすめのカメラとレンズの組み合わせを紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>10年近く愛用し続けていてそれなりに知識のあるSonyのカメラ・レンズから選んでいるので、CanonやNikonの機材が気になる方はご容赦ください。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">【予算10万円】旅行などでスマホよりオシャレな写真をサクッと撮りたい</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>【<strong>SONY α6400 + SEL35F18</strong>】</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボケ味のある本格的な写真を予算10万円で撮りたいのであれば、中古に手を出すほかありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>おすすめは<a href="https://amzn.to/3XCFxou">α6400</a>を中古で購入し、単焦点レンズを新品で買う構成。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>α6400はAPS-Cイメージセンサー搭載で軽量・コンパクトさが魅力のボディです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズは30mm単焦点レンズの<a href="https://amzn.to/3F7OaRB" rel="nofollow">SEL35F18</a>がおすすめ。<strong><span class="swl-marker mark_yellow">F1.8の明るさで一眼カメラらしいボケ感の美しい写真</span></strong>を撮ることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>焦点距離も 30mm（フルサイズ換算で52mm）となっていて、初心者の方に扱いやすいでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また、α6400は手ぶれ補正がないのが弱点ですが、こちらのレンズはレンズ内手ぶれ補正機能を搭載しているため、弱点を補完してくれるのも魅力。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212179\u0022]","post_id":"12179"} -->
<p>[itemlink post_id="12179"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212183\u0022]","post_id":"12183"} -->
<p>[itemlink post_id="12183"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">【予算15万円】2本目のレンズとして広角レンズを買い足す</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>【<strong>SONY α6400 + SEL35F18 + SEL11F18</strong>】</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本格的に写真を趣味にしていきたいなら、さきほどの組み合わせに5~6万円程の広角レンズを足してみましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>東京タワーなどの大きな被写体を綺麗に収めたり、目の前に広がる雄大な自然を切り取ったりと写真の幅がぐっと広がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>α6400とに組み合わせるのにおすすめの超広角レンズは<a href="https://web.archive.org/web/20170923000346/http://www.amazon.co.jp/gp/product/B004CS2VMQ/ref=as_li_ss_tl?ie=UTF8&amp;camp=247&amp;creative=7399&amp;creativeASIN=B004CS2VMQ&amp;linkCode=as2&amp;tag=shumpei1234-22">SEL11F18&nbsp;</a>。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>181gと非常に軽いレンズで持ち運びがしやすく、解像感にも定評がある超広角レンズです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212182\u0022]","post_id":"12182"} -->
<p>[itemlink post_id="12182"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">【予算20万円】夜景や本格的なポートレート写真にもチャレンジしたい</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>【<strong>α7Ⅲ + Sonnar T* FE 55mm F1.8ZA</strong>】</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>もしフルサイズのミラーレス機が欲しいなら、ボディを中古で購入、単焦点レンズを新品で買うのが良いでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ボディとしておすすめしたいのは<a href="https://amzn.to/4iANfrg">α7III</a>。フルサイズ機に革命を起こしたと言われる名機で、下記のような特徴があります。</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>フルサイズ機なのに軽量コンパクト</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>世界初 光学式5軸手ブレ補正機能</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>バッテリー持ちが最新機種並みに良い</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>動画4K対応（30pまで）</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>新品価格は22万円ほどですが、状態の良い中古品が16万円ほどで購入でいるので、なるべく初期費用を抑えてフルサイズ機を買いたいなら、α7III一択なんじゃないかと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズは単焦点レンズの<a href="https://amzn.to/41ORU3g">FE 50mm F1.8</a>がおすすめ。3.5万円ほどで購入することができる安価なレンズですが、うっとりするようなボケ感のある写真が撮れます。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212184\u0022]","post_id":"12184"} -->
<p>[itemlink post_id="12184"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212180\u0022]","post_id":"12180"} -->
<p>[itemlink post_id="12180"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">【予算25万円】2本目のレンズとして広角レンズを買い足す</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>【<strong>α7Ⅲ + Sony FE 50mm F1.8 + SAMYANG AF 14mm F2.8</strong>】</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>予算25万まで出せるなら上記の組み合わせに単焦点の超広角レンズを追加するのがいいでしょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ソニーのフルサイズ機で使える超広角レンズとなると10万円前後の価格帯が多くなるのでちょっとお財布には厳しい。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこでおすすめしたいのが<a href="https://amzn.to/4bAanUC">SAMYANG AF 14mm F2.8</a>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>メーカー名はややマイナーかもしれませんが、写りもよいですし何より5~6万円で購入できる価格が魅力です。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002212189\u0022]","post_id":"12189"} -->
<p>[itemlink post_id="12189"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading">【初心者向け】一眼カメラを&amp;レンズの選び方 まとめ</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>本記事ではカメラ選びのポイントを7つに分けて解説した上で、予算別におすすめのボディとレンズの組み合わせを4つ紹介してきました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラとレンズの組み合わせは無限大なので、他にも色々な考え方があると思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、なるべく価格を抑えながら一眼カメラならではの写真を楽しむには今回紹介した構成は参考になるはず。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事が一眼カメラデビューのきっかけとなれば嬉しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"linkData":{"title":"一眼カメラと一緒に買い揃えたい周辺機器・アクセサリーまとめ【初心者向け】","id":10590,"url":"https://nightscape.tokyo/article/camera-beginner-item/","kind":"post-type","type":"post"},"icon":"link"} /-->

<!-- wp:loos/post-link {"linkData":{"title":"一眼カメラの設定（F値 / シャッタースピード / ISO値）を初心者向けに解説してみる。","id":10493,"url":"https://nightscape.tokyo/article/how-to-camera-setting/","kind":"post-type","type":"post"},"icon":"link"} /-->',
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/sony-sel40f25g-side-01.jpg',
  true,
  '2025-03-09T22:19:48+09:00',
  '2025-03-09T22:19:48+09:00',
  '2025-09-27T08:18:59+09:00'
);

-- FAQs for camera-select
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'camera-select'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 一眼カメラと一緒に買い揃えたい周辺機器・アクセサリーまとめ【初心者向け】 (camera-beginner-item)
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
  'camera-beginner-item',
  '一眼カメラと一緒に買い揃えたい周辺機器・アクセサリーまとめ【初心者向け】',
  'spot',
  (SELECT id FROM categories WHERE slug = 'article'),
  '<!-- wp:paragraph -->
<p>一眼カメラを購入すると、一緒に揃えるべき周辺機器が複数出てきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>しかし、カメラを買って間もない頃ってまだ知識も少ないので下記のような疑問を感じますよね。</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"is-style-bg_stripe"} -->
<div class="wp-block-group is-style-bg_stripe"><!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>最低限購入すべき周辺機器ってどんなものがあるの？</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>どんな順番でアクセサリーを買い足していくのがベスト？</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:paragraph -->
<p>そこで本記事では夜景フォトグラファーとしての仕事もこなす僕が、初めてカメラを買ったら一緒に購入すべき「必需品の周辺機器」と「あると便利なカメラアクセサリー」をまとめて紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この記事を読めばきっと、快適なカメラライフのスタートにお役立てできると思うのでぜひチェックしてみて下さい！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/blog-parts {"partsID":"12452"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-0">一眼カメラと一緒に買い揃えたい必需品</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>まずは、一眼カメラと一緒に買い揃えておきたい「必需品」を6つご紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これがないと写真を撮り始められない！というぐらい大事なものばかりなのでチェックしていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-1">SDカード（記録媒体）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10611,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/msut-item-sd-card-1024x683.jpg" alt="" class="wp-image-10611"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>スマホと違って一眼カメラにはメモリが内蔵されていないので、SDカードを挿入しないと写真を保存することができません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記のポイントを確認してニーズに合うSDカードを購入しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition l-bottom-medium">
<p class="definition-title">SDカードを選ぶときのポイント</p>
<dl class="definition-body">
<dt>容量</dt>
<dd>容量の少ないSDカードは、頻繁にデータを整理する手間が発生するので余裕を持った容量の製品を選ぶのがおすすめ。<span class="keiko_yellow">写真撮影メインなら「<b>32GB</b>」以上、動画撮りたいなら「<b>64GB</b>」以上を目安</span>にするといいでしょう。</dd>
<dt>転送速度</dt>
<dd>転送速度が遅いSDカードを選ぶと連写撮影が途切れたり、動画の場合だとコマ落ちしてカクカクした映像になってしまうので注意が必要。<span class="keiko_yellow">転送スピードが「<b>CLASS10</b>」の製品を選ぶのがベター</span>です。</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>上記の項目を満たしており、コスパに優れたSDカードがほしいならおすすめは「<a href="https://www.amazon.co.jp/dp/B0B21CWKWT?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">SanDiskExtreme SDカード</a>」。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>SanDiskは世界シェアトップのフラッシュメモリーメーカーで、コスパに優れたSDカードを数多く展開しています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>容量ごとのラインナップが豊富なので同シリーズの中から好みの容量を選択すれば間違いないです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210592\u0022]","post_id":"10592"} -->
<p>[itemlink post_id="10592"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-2">液晶画面保護フィルム</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10620,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/7c-monito-angle-1-1024x683.jpg" alt="" class="wp-image-10620"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラの背面液晶画面に傷がついてしまうと、精神的なショックも大きいですし、売却する際にも減額対象にもなります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラと一緒に買い揃えて、すぐに背面液晶を保護できる状態にしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>液晶画面保護フィルムの素材は大きく分けて2つで、それぞれに良い点・悪い点があるので自分に合うタイプを選びましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition l-bottom-medium">
<p class="definition-title">保護フィルムのタイプ</p>
<dl class="definition-body">
<dt>PET素材</dt>
<dd>種類が多くリーズナブル。ある程度の傷が防げればOKという方におすすめ。</dd>
<dt>ガラス素材</dt>
<dd>硬度が高く、傷を守るのに最適。PET素材に比べると値段が高い。</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>保護フィルムも様々なメーカーから発売されていますが、コスパの良いものを選ぶなら下記がおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210593\u0022]","post_id":"10593"} -->
<p>[itemlink post_id="10593"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-3">レンズプロテクター（レンズ保護フィルター）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10613,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/msut-item-lens-filter-1024x683.jpg" alt="" class="wp-image-10613"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レンズは傷をつけてしまうと、写真にもそれが写り込んでしまうので、修理が必須になります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズの修理費用はそこそこ値段も張るので、レンズを買ったら必ずレンズプロテクターも揃えましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>レンズプロテクターを購入する際は下記の2点をチェックしておくのが大事なポイント。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition l-bottom-medium">
<dl class="definition-body">
<dt>透過率</dt>
<dd>透過率の数値が高いものほど、ゴーストやフレアといった画質劣化がおこりにくいです。</dd>
<dt>口径（レンズ）</dt>
<dd>レンズの口径は製品によって異なります。レンズ口径を確認した上で同サイズのレンズプロテクターを購入しましょう。</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>数あるレンズプロテクターの中でもおすすめなのは「<a href="https://www.amazon.co.jp/dp/B002ZFJOSM?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" target="_blank" rel="noreferrer noopener">ケンコー・トキナー PRO1D</a>」というアイテム。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>透過率が0.5%と非常に優秀な数値でフィルター口径のラインナップも豊富。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>価格も一枚2,000円台で購入可能とコストパフォーマンスに優れたレンズプロテクターです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210594\u0022]","post_id":"10594"} -->
<p>[itemlink post_id="10594"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-4">ブロアー</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10612,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/must-item-blower-1024x683.jpg" alt="" class="wp-image-10612"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一眼カメラはレンズ交換する際にイメージセンサーにホコリがゴミが着きやすいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ホコリが付いたまま写真をすると撮影したデータにもそれが写ってしまうので入念にケアしてあげる必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで活躍するのがブロワー。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これがあれば、イメージセンサーについてほこりやゴミを簡単に吹き飛ばせるので、快適に写真撮影を楽しむことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこそこの大きさがありしっかりとした風量が出るブロワーを購入しましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210596\u0022]","post_id":"10596"} -->
<p>[itemlink post_id="10596"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-5">レンズペン</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10614,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/msut-item-lens-pen-1024x683.jpg" alt="" class="wp-image-10614"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レンズはとても繊細で指紋やほこりが付着した状態で撮影をすると、写真にも汚れが写りこんでしまいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただレンズに付いた指紋は地味に頑固で、布で拭いても綺麗に取れないのが難点です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そこで活躍するのが<a href="https://www.amazon.co.jp/dp/B00TTD5HDE?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">レンズペン</a>です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>キャップを外してレンズをこするだけで頑固な指紋も綺麗に汚れを落とすことができて便利なので、一本持っておくことををおすすめします。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210598\u0022]","post_id":"10598"} -->
<p>[itemlink post_id="10598"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-6">ドライボックス＆防湿剤</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10616,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/hakuba-drybox-detail-01-1024x683.jpg" alt="" class="wp-image-10616"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レンズやカメラは湿気にとても弱く、湿度の高い場所に保管しているとカビが発生する可能性があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんなカビの発生を防ぎ、機材を正しく保管するのに使うのがドライボックスと防湿剤。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>100均に売っているプラスチックのボックスを用いて自作しても良いですが、専用のボックスを購入するとすぐに必要な環境が揃います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今後も機材が増えていくことを想定して大きめのボックスを購入しておくと良いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ドライボックスの定番「ハクバ」や「ナカバヤシ」といったメーカーのアイテムがおすすめです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210599\u0022]","post_id":"10599"} -->
<p>[itemlink post_id="10599"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-7">あると便利なカメラアクセサリー</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>一眼カメラと一緒に買い揃えたい必需品の次は買い揃えていきたいアイテムを紹介していきます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>優先度が高い順に紹介していくので、後半は「こんな便利なアクセサリーもあるんだ！」というような感じで楽しんでもらえればと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-8">カメラバッグ</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10615,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/camera-bag-access-1024x683.jpg" alt="" class="wp-image-10615"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラと交換レンズを複数持って出かけるときに必要になるカメラバッグ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>カメラバッグは非常に種類が豊富なので購入するアイテムを決めるのは大変かもしれませんが、下記のようなポイントを意識して欲しい商品を定めていきましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="i-9">①リュック or ショルダータイプ</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>カメラバッグはリュックタイプとショルダータイプのどちらかに分けられます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>それぞれ下記のようなメリット・デメリットがあるので、使用イメージに合わせて購入するタイプを選びましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":false} -->
<figure class="wp-block-table"><table><thead><tr><th></th><th>リュック</th><th>ショルダー</th></tr></thead><tbody><tr><th>肩や腰への負担</th><td>◯</td><td>△</td></tr><tr><th>重い機材の持ち運びやすさ</th><td>◯</td><td>△</td></tr><tr><th>機材の取り出しやすさ</th><td>△</td><td>◯</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="i-10">②容量</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>カメラバッグには収納可能なカメラとレンズの本数が明記されています。現在所有している機材の数よりもやや余裕を持ったバッグを選ぶのがおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>また容量に加え、ポケットの数や形状もチェックしておくと収納している機材の取り出しやすさという観点で失敗が少ないです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210602\u0022]","post_id":"10602"} -->
<p>[itemlink post_id="10602"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210603\u0022]","post_id":"10603"} -->
<p>[itemlink post_id="10603"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:paragraph -->
<p>所有しているカメラの本数が少ない場合や、普段遣いしているリュックをカメラバッグとして使いたい場合は下記のようなアクセサリーも便利です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>導入費用もぐっと収まるのでこちらも合わせてチェックしてみて下さい。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210604\u0022]","post_id":"10604"} -->
<p>[itemlink post_id="10604"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210605\u0022]","post_id":"10605"} -->
<p>[itemlink post_id="10605"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">三脚</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10617,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/compare-mt190cxpro3-befree-02-1024x683.jpg" alt="" class="wp-image-10617"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>三脚があると手ブレを気にせず撮影することができるようになり、表現の幅がぐっと広がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>「<strong>きれいな夜景写真や花火を撮ってみたい</strong>」と思うようになったらぜひ購入を検討してみましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>最初に導入する三脚は「トラベル三脚」と呼ばれる製品の中から選ぶのがおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>コンパクトに折り畳めるので持ち運ぶのが億劫になりづらく、積極的に外に持って出かけやすいからです。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210606\u0022]","post_id":"10606"} -->
<p>[itemlink post_id="10606"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-12">ネックストラップ</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10618,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/peak-design-leash-image-01-1-1024x682.jpg" alt="" class="wp-image-10618"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ストラップはカメラ購入時に付属品としてついてくることが多いので、最初に購入する必要はありません。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ただ、カメラストラップは様々なメーカーから魅力的なアイテムが多数販売されているので、気になる製品が見つかったら買ってみるといいと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>僕が現在愛用しているのはピークデザイン リーシュというネックストラップ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>アンカーリンクスという独自機構のおかげで簡単にネックストラップを着脱できるのがとても便利だからです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ネックストラップで購入するものに迷ったらとりあえずこれを買っておけば間違いありません。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210607\u0022]","post_id":"10607"} -->
<p>[itemlink post_id="10607"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="i-13">Lightroom（RAW現像ソフト）</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":10619,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/review-macbook-14inch-2021-use-lightroom-1024x683.jpg" alt="" class="wp-image-10619"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>カメラの醍醐味は撮影したデータの色味や明るさを好みに編集できるところにもあります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>撮って出しの写真で記録を残すのも良いですが、カメラに慣れてきたらぜひRAW現像にもチャレンジしてみましょう！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>フィルム風な写真に現像したりすると、ぐっと写真のクオリティが上がりますし、写真を撮る楽しみがさらに増すこと間違いなしです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>おすすめのソフトは「<a href="https://www.amazon.co.jp/dp/B08KJD9QZ3?tag=takahiro1202-22&amp;linkCode=osi&amp;th=1&amp;psc=1" rel="noreferrer noopener" target="_blank">Adobe Lightroom</a>」。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>有料のソフトではありますが、わかりやすいUIで簡単に現像を楽しみことができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>非常にシェアが高く、わからないことがあってもたいていネットから解決策を探すことができるのも良い点です。</p>
<!-- /wp:paragraph -->

<!-- wp:rinkerg/gutenberg-rinker {"content_text":"[itemlink post_id=\u002210608\u0022]","post_id":"10608"} -->
<p>[itemlink post_id="10608"]</p>
<!-- /wp:rinkerg/gutenberg-rinker -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="i-18">【初心者向け】一眼カメラと一緒に買い揃えるべき周辺機器・アクセサリーまとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":10375,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2024/07/my-favorite-camera-item-list-1024x682.jpg" alt="" class="wp-image-10375"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一眼レフカメラやミラーレス一眼カメラと一緒に買い揃えたい必需品の周辺機器と、徐々に買い揃えていきたい周辺機器を紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>本記事を参考に必要な撮影機材を揃えて、素敵なカメラライフをお過ごし下さい！</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2024/07/my-favorite-camera-items.jpg',
  true,
  '2025-09-27T08:42:35+09:00',
  '2025-09-27T08:42:35+09:00',
  '2025-09-27T08:42:35+09:00'
);

-- FAQs for camera-beginner-item
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'camera-beginner-item'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: 東京ミッドタウン 夜桜ライトアップ 2025 (midtown-blossom)
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
  'midtown-blossom',
  '東京ミッドタウン 夜桜ライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '東京ミッドタウン MIDTOWN BLOSSOM 2025',
  '全長200mにも及ぶ桜並木が美しく輝く夜桜のライトアップイベント。都会の春の散策を楽しむことができる。',
  '<p>東京ミッドタウンのミッドタウン・ガーデンでは、約100本の桜が咲き誇り、春の訪れを彩ります。全長200mに及ぶ桜並木が、夜にはピンク色にライトアップされ、都会の洗練された景観と融合した幻想的な光景が広がります。</p>

<p>イベント期間中は、ザ・リッツ・カールトン東京監修の特別メニューが楽しめるのも魅力のひとつ。</p>
<p>サントリージャパニーズクラフトジン「ROKU」を使ったオリジナルカクテルや、春らしいスイーツ、温かいフードが揃い、ラグジュアリーな雰囲気の中でお花見が楽しめます。</p>

<p>夜桜とともに特別なひとときを過ごせる都会ならではのお花見スポット。ぜひ足を運んで、贅沢な春の夜を堪能してみてください。</p>',
  '東京都港区赤坂 9-7-1',
  'https://www.tokyo-midtown.com/jp/',
  '東京ミッドタウン 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「六本木駅」8番出口より直結</li>
<li>東京メトロ千代田線「乃木坂駅」3番出口より徒歩約3分</li>
<li>東京メトロ南北線「六本木一丁目駅」1番出口より徒歩約10分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51877.84239663709!2d139.6599259582812!3d35.64337418517727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b78922e6353%3A0xeb3e39dbe18da4d6!2z5p2x5Lqs44Of44OD44OJ44K_44Km44Oz!5e0!3m2!1sja!2sjp!4v1733240797804!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.5,
  3.6,
  3.7,
  'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-01.jpg',
  true,
  '2025-02-13T06:46:31+09:00',
  '2025-02-13T06:46:31+09:00',
  '2025-04-08T04:02:15+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), (SELECT id FROM tags WHERE slug = 'cherry-blossoms'));

-- Images for midtown-blossom
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-01.jpg', '東京ミッドタウンと夜桜のライトアップ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-02.jpg', 'さくら通りを行き交う車', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-03.jpg', '東京ミッドタウンと夜桜のライトアップ', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-04.jpg', 'ライトアップされるさくら通り', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-05.jpg', 'さくら通りの歩道橋を行き交う人々', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/tokyo-mid-town-06.jpg', '夜桜と高層ビル', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mid-town-cherry-1.jpg', 'ライトアップされる桜並木を過ぎ去る車', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/mid-town-cherry-2.jpg', 'ライトアップされる桜を眺める人々', 7);

-- FAQs for midtown-blossom
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), 'どんな夜景が楽しめますか？見どころはどこですか？', '全長200mにも及ぶ桜並木が美しく輝く光景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), '「東京ミッドタウン MIDTOWN BLOSSOM 2025」の開催期間はいつまで？', '2025年3月14日～ 2025年4月13日が開催期間となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), '「東京ミッドタウン MIDTOWN BLOSSOM 2025」のライトアップ点灯時間は？', '「東京ミッドタウン MIDTOWN BLOSSOM 2025」のライトアップ点灯時間は17:00～23:00となっています。', 2);

-- Event info for midtown-blossom
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'midtown-blossom'), '2025年3月14日', '2025年4月13日', 'ミッドタウン・ガーデン さくら通り沿い、ガーデンテラス前', '17:00～23:00');

-- Post: 冬限定イベント！レストランルーク ウィズ スカイラウンジ「SKY TERRACE」を体験してきた (restaurant-luke)
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
  'restaurant-luke',
  '冬限定イベント！レストランルーク ウィズ スカイラウンジ「SKY TERRACE」を体験してきた',
  'spot',
  (SELECT id FROM categories WHERE slug = 'pickup'),
  '<!-- wp:paragraph -->
<p>聖路加セントルークスタワー47Fにあるレストランルーク ウィズ スカイラウンジ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>地上221mの高さに位置し、大迫力の夜景を眺めながら食事やパーティーを楽しむことができる人気のレストランです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな自慢の夜景をリーズナブルな価格で体験できる「<a href="https://booking.ebica.jp/webrsv/plan/e014007601/3642/422837" target="_blank" rel="noreferrer noopener nofollow">SKY TERRACE</a>」が<span class="swl-marker mark_yellow">2025年1月6日～3月31日の期間限定</span>で開催されています！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>現地を訪れて屋外テラスから眺めることができる絶景を堪能してきたので、その様子をご紹介します。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">SKY TERRACEのイベント概要</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":11936,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-3-1024x683.jpg" alt="" class="wp-image-11936"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>「SKY TERRACE」はレストランルーク ウィズ スカイラウンジにて期間限定で実施されているイベント。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>1500円のドリンク券購入のみで入場することができるので、気軽に煌めく夜景を堪能することができます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>「<strong>夏はビアガーデンなどで賑わいを見せる屋外テラスも冬になると閑散としがち。でも、空気が澄んでいる冬こそ屋外テラスからの美しい夜景を楽しんでほしい。</strong>」</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな経緯から生まれた企画だそう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>なお、本イベントは当日ふらっと立ち寄ることも可能ですが、店内が混雑していると入店が難しい場合も。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>気になった方は下記リンクより事前予約を済ませたうえで、レストランを訪れましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span style="--the-icon-svg: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTkuNCAzOC4zIDMyLjcgMjVjLjYtLjYuNi0xLjUgMC0yLjFMMTkuNCA5LjZjLS45LS45LTIuNi0uMy0yLjYgMS4xdjI2LjVjMCAxLjQgMS42IDIuMSAyLjYgMS4xeiI+PC9wYXRoPjwvc3ZnPg==)" data-icon="LsCaretRight" data-id="0" aria-hidden="true" class="swl-inline-icon"> </span><a href="https://booking.ebica.jp/webrsv/plan/e014007601/3642/422837" target="_blank" rel="noreferrer noopener nofollow">SKY TERRACEを予約する</a></p>
<!-- /wp:paragraph -->

<!-- wp:table {"className":"sp_block_","swlBodyThColor":{"text":"black","slug":"swl-gray"}} -->
<figure class="wp-block-table sp_block_"><table><tbody><tr><th>イベント名</th><td>SKY TERRACE</td></tr><tr><th>場所</th><td>レストランルーク ウィズ スカイラウンジ（東京都中央区明石町8-1 聖路加ガーデン47階）</td></tr><tr><th>開催期間</th><td>2025年1月6日～3月31日 </td></tr><tr><th>開催時間</th><td>12:00～15:00 / 17:00～21:30</td></tr><tr><th>料金</th><td>大人1,500円(税、サービス料込)</td></tr></tbody></table><figcaption class="wp-element-caption">SKY TERRACEのイベント概要</figcaption></figure>
<!-- /wp:table -->

<!-- wp:heading -->
<h2 class="wp-block-heading">「SKY TERRACE」を体験してきた</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ここからは実際に「SKY TERRACE」を体験してきた様子をご紹介。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>今回イベントの体験に訪れたのは2月下旬の平日。最寄駅地下鉄日比谷線「築地駅」から7分ほど歩いて、聖路加タワーへ向かいます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>聖路加タワーについたら、エレベーターを乗り継いでレストランのある47Fへ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11962,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-11-1-1024x683.jpg" alt="" class="wp-image-11962"/><figcaption class="wp-element-caption">レストランルーク ウィズ スカイラウンジの46F→ 47Fの専用エレベーター前</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>予約している旨を伝えてドリンク引換券を受け取ったらお店の中へ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>大きな窓ガラスが特徴的なオシャレな雰囲気の店内がとても印象的でした。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11935,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-2-1024x683.jpg" alt="" class="wp-image-11935"/><figcaption class="wp-element-caption">レストランルーク ウィズ スカイラウンジの店内</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">開放感抜群の屋外テラス</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>入店したらさっそく屋外テラスへ移動！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>こんなに高い場所からガラス窓など遮るものなく東京の街並みを眺められるのは新鮮です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11938,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-5-1024x683.jpg" alt="" class="wp-image-11938"/><figcaption class="wp-element-caption">レストランルーク ウィズ スカイラウンジの屋外テラス</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>屋外テラスは2つあって、それぞれ下記のような見所があります。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>南西方面</dt>
<dd>東京タワー、富士山、隅田川に架かる個性豊かな橋、晴海エリアのタワーマンション群、丸の内方面の高層ビル群</dd>
<dt>北東方面</dt>
<dd>東京スカイツリー、隅田川に架かる個性豊かな橋、月島エリアの高層ビル群</dd>
</dl>
</div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">東京タワーや富士山が拝める南西方面の眺望</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>日没から30分ほどすると夜景が最も綺麗に見える<a href="https://nightscape.tokyo/pickup/twilight/">マジックアワー</a>の時間帯に。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>南西方面の眺望が見える屋外テラスに立つと視線の先には大迫力の光景が広がります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>地上221mの高さを誇るテラスからの眺望は格別です…！</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11953,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-2-1-1024x683.jpg" alt="" class="wp-image-11953"/><figcaption class="wp-element-caption">屋外テラスからの眺望（南西方面）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京タワーと富士山の共演。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>日本を代表するランドマークをこのような形で綺麗に眺めることができる場所は都内でもとても少ないです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11950,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-17-1024x683.jpg" alt="" class="wp-image-11950"/><figcaption class="wp-element-caption">富士山と東京タワー</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>北西側を見てみると新宿エリアの高層ビル群の姿も。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>個性的な色にライトアップされる都庁やドコモタワーが特徴的です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11951,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-18-1024x683.jpg" alt="" class="wp-image-11951"/><figcaption class="wp-element-caption">新宿方面の高層ビル群</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>隅田川には夜になると個性豊かなカラーにライトアップされる橋が12本あります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>この場所からはホワイトカラーの勝鬨橋とパープルカラーの築地大橋を眺めることができます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11948,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-15-1024x683.jpg" alt="" class="wp-image-11948"/><figcaption class="wp-element-caption">隅田川に架かる勝鬨橋と築地大橋</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>東京駅・丸の内方面の景色。平日に訪れたこともあってビル灯りがとても眩しいです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>約390m超高層ビル、トーチタワーの建設なども進んでいて今後さらに夜景の迫力が増していくのが楽しみです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11955,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-4-1-1024x683.jpg" alt="" class="wp-image-11955"/><figcaption class="wp-element-caption">東京駅・丸の内方面のビル夜景</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">東京スカイツリーが見える北東方面の眺望</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>南西側のテラスからの景色を堪能したあとは東京スカイツリーが見える北東方面のテラスへ移動。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>視線の先にはライトアップされたスカイツリーが見えて、こちらも非常に良い眺めです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11961,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-10-1-1024x683.jpg" alt="" class="wp-image-11961"/><figcaption class="wp-element-caption">屋外テラスからの眺望（北東方面）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>日替わりでライトアップカラーが変わる東京スカイツリー。　この日は個人的に一番好みの「粋」と呼ばれるブルーカラーに点灯していました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11960,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-9-1-1024x683.jpg" alt="" class="wp-image-11960"/><figcaption class="wp-element-caption">青く輝く東京スカイツリー</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>眼下には隅田川にかかる橋たち。手前から中央大橋、永代橋、清洲橋となっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ひとつひとつの橋が全く異なる形状をしているのがよくわかります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11959,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-8-1-1024x683.jpg" alt="" class="wp-image-11959"/><figcaption class="wp-element-caption">隅田川に架かる橋（中央大橋、永代橋、清洲橋）</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>最後は月島エリアの夜景。所狭しと高層ビル群が林立する光景はとても迫力がありました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>心ゆくまで屋外テラスからの夜景を堪能し、施設を後にしました。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":11956,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-5-1-1024x683.jpg" alt="" class="wp-image-11956"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">「SKY TERRACE」体験記 まとめ</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":11947,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-14-1024x683.jpg" alt="" class="wp-image-11947"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>レストランルーク ウィズ スカイラウンジにて期間限定で開催されている「SKY TERRACE」を体験してきた様子をご紹介しました！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>これまで数多くの東京都内の夜景スポットを訪れてきましたが、このテラスからの夜景は間違いなくトップレベル。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>都内の有名な展望台は入場料2,000円を超える場所が多いですが、<span class="swl-marker mark_yellow">1500円でこの景色を堪能できるのはかなりコストパフォーマンスが良い</span>と思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>都市風景を撮るのが好きな方や銀座・築地エリアでデート予定の方はぜひ立ち寄ってみてはいかがでしょうか。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><span style="--the-icon-svg: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgd2lkdGg9IjFlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTkuNCAzOC4zIDMyLjcgMjVjLjYtLjYuNi0xLjUgMC0yLjFMMTkuNCA5LjZjLS45LS45LTIuNi0uMy0yLjYgMS4xdjI2LjVjMCAxLjQgMS42IDIuMSAyLjYgMS4xeiI+PC9wYXRoPjwvc3ZnPg==)" data-icon="LsCaretRight" data-id="0" aria-hidden="true" class="swl-inline-icon"> </span><a href="https://booking.ebica.jp/webrsv/plan/e014007601/3642/422837" target="_blank" rel="noreferrer noopener nofollow">SKY TERRACEを予約する</a></p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<script type="application/ld+json">
 {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "SKY TERRACE",
  "startDate": "2025-01-06",
  "endDate": "2025-03-31",
  "location": {
    "@type": "Place",
    "name": "レストランルーク ウィズ スカイラウンジ",
    "address": {
      "@type": "PostalAddress",
      "name": "東京都中央区明石町8-1 聖路加ガーデン47階"
    }
  },
  "image": "https://nightscape.tokyo/wp-content/uploads/2025/02/youtube-timelapse-heading-picturess.jpg",
  "description": "聖路加セントルークスタワーの最上階にあるレストランルーク ウィズ スカイラウンジ。地上221mの高さに位置し、大迫力の夜景を眺めながら食事やパーティーを楽しむことができる人気のレストランです。そんな自慢の夜景をリーズナブルな価格で体験できる「SKY TERRACE」が2025年1月6日～3月31日の期間限定で開催されています！"
  }
  </script>
<!-- /wp:html -->',
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
  'https://nightscape.tokyo/wp-content/uploads/2025/03/RESTAURANT-LUKE-with-SKY-LOUNGE.jpg',
  true,
  '2025-03-03T12:05:24+09:00',
  '2025-03-03T12:05:24+09:00',
  '2025-03-03T14:06:42+09:00'
);

-- FAQs for restaurant-luke
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'restaurant-luke'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: レストランルーク ウィズ スカイラウンジ (luke-restaurant)
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
  'luke-restaurant',
  'レストランルーク ウィズ スカイラウンジ',
  'spot',
  (SELECT id FROM categories WHERE slug = 'chuo'),
  NULL,
  'レストランルーク ウィズ スカイラウンジ',
  '地上221mの高さに位置に位置する人気のレストラン。東京タワーやスカイツリーといった東京のランドマークや隅田川に架かる個性豊かな橋を見渡すことができる。都内の人気展望台並みに豪華な夜景は一見の価値あり。',
  '<p>聖路加セントルークスタワー47Fにあるレストラン ルーク ウィズ スカイラウンジ。</p>
<p>地上221mの高さに位置し、美しい夜景を眺めながら食事やパーティーを楽しむことができる人気のレストランです。</p>
<p>本施設の特筆すべき点は屋外テラスが2箇所あって、開放感抜群の空間で夜景を楽しむことができるという点。</p>

<div class="definition l-bottom-large">
<p class="definition-title">レストラン ルーク ウィズ スカイラウンジの眺望</p>
<dl class="definition-body">
<dt>南西方面</dt>
<dd>東京タワー、富士山、隅田川に架かる個性豊かな橋、晴海エリアのタワーマンション群、丸の内方面の高層ビル群</dd>
<dt>北東方面</dt>
<dd>東京スカイツリー、隅田川に架かる個性豊かな橋、月島エリアの高層ビル群</dd>
</dl>
</div>

<p>これまで数多くの東京都内の夜景スポットを訪れていますが、この場所の眺めは都内の人気展望台に匹敵するレベルです。</p>
<p>店内の雰囲気もとてもよいので、ぜひデートなどで利用してみてはいかがでしょうか。</p>',
  '東京都中央区明石町8-1 聖路加ガーデン47階',
  'https://www.restaurant-luke.com/restaurant/',
  'レストラン ルーク ウィズ スカイラウンジ 公式サイト',
  'https://www.instagram.com/restaurant_luke_with_skylounge/',
  '公式インスタグラムアカウント',
  'https://nightscape.tokyo/pickup/restaurant-luke/',
  '冬限定イベント！レストランルーク ウィズ スカイラウンジ「SKY TERRACE」を体験してきた',
  '11:30 ~ 22:00',
  'なし',
  '-',
  '<ul>
<li>東京メトロ日比谷線「築地」駅より徒歩約7分</li>
<li>東京メトロ有楽町線「新富町」駅より徒歩約8分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe title="銀座クレストンの地図・場所" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.712601824951!2d139.778424!3d35.6664583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889641283e455%3A0xd09201bc22f454e1!2z6YqA5bqn44Kv44Os44K544OI44Oz!5e0!3m2!1sja!2sjp!4v1693039225057!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.9,
  3.3,
  3.3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-6-1.jpg',
  true,
  '2025-02-26T21:05:53+09:00',
  '2025-02-26T21:05:53+09:00',
  '2025-03-03T12:10:36+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'restaurant'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for luke-restaurant
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-6-1.jpg', 'レストラン ルーク ウィズ スカイラウンジから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-12.jpg', '築地大橋と汐留の高層ビル群', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-17.jpg', '富士山と東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-10-1.jpg', '東京スカイツリーと隅田川に架かる橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/a.jpg', '東京タワーと港区の高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke.jpg', '勝鬨橋と築地大橋', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-14.jpg', '黄昏時の空と東京の街並み', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-4-1.jpg', '東京駅・丸の内方面の夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-7-1.jpg', '月島エリアの夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-8-1.jpg', '隅田川に架かる中央大橋、永代橋、清洲橋', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-18.jpg', '新宿エリアの夜景', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-9-1.jpg', 'ブルーにライトアップされる東京スカイツリー', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-4.jpg', '夕暮れ時の港区方面の街並み', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-8.jpg', '夕暮れ時の東京駅・丸の内エリアの街並み', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-7.jpg', '夕暮れ時の月島エリアの街並み', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-6.jpg', '夕暮れ時の東京スカイツリー', 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-9.jpg', '夕暮れ時の隅田川', 16);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-2.jpg', 'レストラン ルーク ウィズ スカイラウンジ店内の雰囲気', 17);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-5.jpg', 'レストラン ルーク ウィズ スカイラウンジの屋外テラス', 18);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-3.jpg', 'レストラン ルーク ウィズ スカイラウンジの屋外テラス', 19);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'https://nightscape.tokyo/wp-content/uploads/2025/02/restaurant-luke-10.jpg', '夕暮れ時の富士山と東京タワー', 20);

-- FAQs for luke-restaurant
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'どんな夜景が楽しめますか？見どころはどこですか？', '隅田川に架かる個性豊かな橋や東京タワーやスカイツリーといった東京のランドマークを見渡すことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'luke-restaurant'), 'レストラン ルーク ウィズ スカイラウンジの営業時間は何時までですか？', 'レストラン ルーク ウィズ スカイラウンジは22:00まで営業しています。', 1);

-- Post: ホテルグランドアーク半蔵門 (grandarc)
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
  'grandarc',
  'ホテルグランドアーク半蔵門',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'chiyoda'),
  NULL,
  'ホテルグランドアーク半蔵門',
  '皇居半蔵門前、国立劇場に隣接する場所に位置している地上17階立ての宿泊施設。緑豊かな皇居、国会議事堂、東京タワーなどを眺めることができる抜群の眺望は一見の価値あり。',
  '<p>帝国ホテルグループが運営するホテルグランドアーク半蔵門。</p>
<p>17階建ての館内には、全204室の客室があり、セミダブルを中心に、ツイン、デラックスツイン、和室、スイートなど多彩なタイプが用意されています。 </p>
<p>皇居半蔵門前、国立劇場に隣接する場所に位置していることもあり、皇居側の客室からは、豊かな緑や国会議事堂、東京タワーなどの景色を一望できます。</p>
<p>絵に描いたような景色を眺めることができ、夜景のレベルはかなり高いと感じます。</p>
<p>千代田区に位置するホテルでありながら、他の宿泊施設に比べるとリーズナブルな価格設定も魅力。</p>
<p>気になった方はぜひ宿泊してみてはいかがでしょうか。</p>',
  '東京都千代田区隼町１−１',
  'https://www.grandarc.com/',
  'ホテルグランドアーク半蔵門公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ半蔵門線「半蔵門駅」6番出口より徒歩3分</li>
<li>東京メトロ有楽町線「麹町」1番出口より徒歩7分</li>
<li>JR「四ツ谷駅より」徒歩15分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7567580338027!2d139.7434002!3d35.6829909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7094aa832b%3A0x88d659312216d3a3!2z44Ob44OG44Or44Kw44Op44Oz44OJ44Ki44O844Kv5Y2K6JS16ZaA!5e0!3m2!1sja!2sjp!4v1741277634412!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/neCr-EG44A8?si=uNlii1G_zJ0sRPWC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.3,
  3.3,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-14.jpg',
  true,
  '2025-03-07T20:48:49+09:00',
  '2025-03-07T20:48:49+09:00',
  '2025-05-02T07:13:07+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for grandarc
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-14.jpg', 'ホテルグランドアーク半蔵門の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-16.jpg', 'ライトアップされる国会議事堂と東京タワー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-11.jpg', 'たくさんの車両が行き交う光景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-13.jpg', 'ホテルグランドアーク半蔵門の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-15.jpg', 'たくさんの車両が行き交う光景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-10.jpg', '東京ミッドタウン日比谷周辺の夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-12.jpg', 'ホテルグランドアーク半蔵門の夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-9.jpg', 'ライトアップ開始間近の国会議事堂', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/arcgrand-1.jpg', 'ホテルグランドアーク半蔵門の眺望', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-7.jpg', '皇居・桜田門周辺の街並み', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-8.jpg', '国会議事堂と港区方面の高層ビル群', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-2.jpg', 'ホテルグランドアーク半蔵門の客室', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-3.jpg', 'ホテルグランドアーク半蔵門の客室から眺める景色', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc-4.jpg', 'ホテルグランドアーク半蔵門の客室にある眺望を説明した資料', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/arcgrand-2.jpg', 'ホテルグランドアーク半蔵門の館内', 14);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/arcgrand.jpg', NULL, 15);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'https://nightscape.tokyo/wp-content/uploads/2025/03/grandarc.jpg', 'ホテルグランドアーク半蔵門の外観', 16);

-- FAQs for grandarc
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), 'どんな夜景が楽しめますか？見どころはどこですか？', '豊かな緑や国会議事堂、東京タワーなどの景色を一望できるのが見どころです。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), '国会議事堂のライトアップは何時まで実施されていますか？', '詳細 国会議事堂のライトアップは日没から午後8時まで実施されています。', 1);

-- Hotel info for grandarc
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'grandarc'), '14:00', '10:00', NULL, '<a class="panelLink-rakuten" href="https://hb.afl.rakuten.co.jp/hgc/224a57f2.20b5fb66.224a57f3.e2ba24d0/?pc=https%3A%2F%2Fhotel.travel.rakuten.co.jp%2Fhotelinfo%2Fplan%2F11039&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUKPU&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Fgrand-arc-hanzomon.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3731104&pid=891439497&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad352532%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3731104&pid=891439497" height="1" width="0" border="0">じゃらんnetで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00001550%2F" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889450862" height="1" width="0" border="0">一休.comで空室を見る</a>');

-- Post: 小湊鉄道・飯給駅で絶景の夜桜ライトアップとリフレクションを撮ってきた話。 (itabu-station-cherry-blossoms)
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
  'itabu-station-cherry-blossoms',
  '小湊鉄道・飯給駅で絶景の夜桜ライトアップとリフレクションを撮ってきた話。',
  'spot',
  (SELECT id FROM categories WHERE slug = 'pickup'),
  '<!-- wp:paragraph -->
<p>毎年春になると、カメラ片手に桜の名所を出かけるのが恒例のイベントです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そんな僕が2~3年ほど前から気になっていた桜スポットがあります。小湊鉄道の飯給駅という場所です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夜になると線路沿いの桜がライトアップされ、水田にリフレクションが映る見事な光景を拝めるということを知り、いつかは撮りにいってみたいなーと思っていたんです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>夜桜のライトアップ×リフレクション×電車の組み合わせを楽しめる場所は多分ここだけ！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>そして今回、念願かなって桜の時期に飯給駅を訪れることができました。生で見る飯給駅の夜桜のリフレクションは最高に綺麗でした…！</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ということで、本記事では飯給駅に撮影してきた様子を記事にしました。飯給駅へ写真を撮りにいく前に知っておきたい事前情報も紹介するので、ぜひチェックしていってください！</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://nightscape.tokyo/tag/cherry-blossoms/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">小湊鉄道・飯給駅とは</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":12261,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-sign-board-1024x683.jpg" alt="" class="wp-image-12261"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>飯給駅は、千葉県市原市飯給にある小湊鉄道線の無人駅です。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>飯給（いたぶ）という地名は、この地の人々が天皇一行に食事を捧げたことが由来となっているそう。</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">小湊鉄道・飯給駅への行き方・アクセス方法</h3>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">電車の場合</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>飯給駅へ電車でアクセスするためには、以下のように電車を乗り継ぎます。</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>JR総武線で五井駅へ移動</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>小湊鉄道の上総中野行に乗り換え、飯給駅で下車</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>東京駅からアクセスした場合、<span class="swl-marker mark_yellow">移動時間2時間、運賃は片道2,050円</span>になります。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d314062.59522279375!2d139.9183464328508!3d35.25128674023778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x60229ea575f35c9f%3A0x4376352388ecf44f!2z5LqU5LqV6aeF44CB5Y2D6JGJ55yMIOW4guWOn-W4guS6lOS6lQ!3m2!1d35.5133059!2d140.08964179999998!4m5!1s0x6022a57f8bb7d38b%3A0xebfb07211bcaa8af!2z44CSMjkwLTA1NDMg5Y2D6JGJ55yM5biC5Y6f5biC6aOv57Wm6aOv57Wm6aeF!3m2!1d35.3204287!2d140.1423321!5e0!3m2!1sja!2sjp!4v1741712984366!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<!-- /wp:html -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">車の場合</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>飯給駅の目の前にある駐車場は停められる台数も少なく、春のシーズンは埋まっている可能性がとても高いです。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>駅前の駐車場が埋まっている場合は、飯給駅から900mほどの場所にある真高寺駐車場を利用するようにしましょう。</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13021.322876302786!2d140.11746819524853!3d35.322608105792746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022a5846b5324e9%3A0xfdad42786dcb78e8!2z5pu55rSe5a6XIOacgOWLneWxsSDnnJ_pq5jlr7o!5e0!3m2!1sja!2sjp!4v1741712912072!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">小湊鉄道・飯給駅の時刻表</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>小湊鉄道は上り・下りそれぞれ1時間に一本程度の頻度で列車が運行されています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>下記は2025年3月1日の18時以降の時刻表（平日）。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>千葉県房総半島の4月上旬の日没は18時前後なので、日没過ぎに飯給駅に電車が止まるのは5回です。</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table><thead><tr><th></th><th>五位方面</th><th>上総中野方面</th></tr></thead><tbody><tr><th>18</th><td>38</td><td>49</td></tr><tr><th>19</th><td>37</td><td>48</td></tr><tr><th>21</th><td>01</td><td>–</td></tr></tbody></table><figcaption class="wp-element-caption">小湊鉄道・飯給駅の時刻表</figcaption></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>撮影に訪れる際は必ず時刻表をチェックしましょう▼</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://ekitan.com/timetable/railway/line-station/244-13/d1"},"icon":"externalLink"} /-->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">桜の開花状況・水田の状態を確認する方法</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>飯給駅の夜桜ライトアップを綺麗に撮るには桜の開花状況や水田に水が張られているかどうかをチェックする必要があります。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>リアルタイムの状況をチェックする場合は飯給駅のボランティアをしている方のブログを見るのがおすすめ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>春のシーズンはかなり頻度高めに情報を発信されています。</p>
<!-- /wp:paragraph -->

<!-- wp:loos/post-link {"isNewTab":true,"rel":"noopener noreferrer","linkData":{"url":"https://itabueki.livedoor.blog/"},"icon":"externalLink"} /-->

<!-- wp:heading -->
<h2 class="wp-block-heading">小湊鉄道・飯給駅で夜桜のライトアップを撮ってきた</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>今回飯給駅を訪れたのは4月上旬の平日。東京駅から五井駅へ移動し、その後小湊鐵道に乗り換えて飯給駅を目指します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>五位駅から飯給駅までの乗車賃は片道1,060円。小湊鐵道には1日乗車フリー切符があるのですが、こちらを購入すると1,840円なので少しお得です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12257,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-ticket-1024x683.jpg" alt="" class="wp-image-12257"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>飯給駅までの乗車区間は14駅。車窓を眺めながらプチ旅行気分を満喫します。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>小湊鐵道線沿いには桜や菜の花が咲いている場所が複数あり、眺めが素晴らしかった。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12259,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-window-1-1024x683.jpg" alt="" class="wp-image-12259"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>五井駅出発から約50分、飯給駅に到着。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>のどかでこじんまりとした駅ですが、周辺には満開の桜や菜の花が咲いており、素晴らしい眺めです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12260,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-inner-1024x683.jpg" alt="" class="wp-image-12260"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>下車したら早速、本日のお目当てである水田へ移動。平日の昼13時過ぎにかかわらずおおくのフォトグラファーの方々がいました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>早速場所を確保したらあとは日没まで待機です。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12262,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-way-1024x683.jpg" alt="" class="wp-image-12262"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">飯給駅周辺は撮影ポイントが充実</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>飯給駅周辺は広い菜の花畑があり色んなアングルから写真を撮ることができるようになっています。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>電車が来るたびに撮影場所を変えて写真撮影を楽しみます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>踏切周辺から撮影した写真▼</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12263,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-train-03-1024x683.jpg" alt="" class="wp-image-12263"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>菜の花畑から撮影した写真▼</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12264,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-train-01-1024x683.jpg" alt="" class="wp-image-12264"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>高台から撮影した写真▼</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12265,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-train-02-1024x683.jpg" alt="" class="wp-image-12265"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>駅のすぐ近くに<a href="https://tabelog.com/chiba/A1206/A120601/12040804/">うさぎカフェ</a>という珈琲店もあるのでそこで休憩するのも良いと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12277,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-cafe-1024x683.jpg" alt="" class="wp-image-12277"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">飯給駅のリフレクションを撮る</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>飯給駅を通過する列車を複数の角度から撮影した後は水田に映るリフレクションの撮影を楽しみます。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12268,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-reflaction-01-1024x683.jpg" alt="" class="wp-image-12268"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>ライトアップが行われるのは線路中央の2本の桜の木のみなので、桜のトンネルを通過する列車をとれるのは日中のみです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12266,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-reflaction-03-1024x683.jpg" alt="" class="wp-image-12266"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>高台からカメラマンを交えた構図も面白かったです。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12267,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-reflaction-02-1024x683.jpg" alt="" class="wp-image-12267"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">飯給駅の夜桜ライトアップを撮る</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>日没を過ぎるといよいよ桜のライトアップが開始。水田のリフレクションがとても幻想的です。電車が通過する瞬間が楽しみ！</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">1本目&amp;2本目は正面から撮影</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>人が多いと２両編成でやってくる列車もこの日は一両のみ。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>一両の場合、2本のライトアップされた桜の間に列車が停車してくれないので、ちょうど良い位置を通過するタイミングでシャッターを切ります。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12269,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-light-up-aa-1-1024x683.jpg" alt="" class="wp-image-12269"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>一本目の列車が通過タイミングまだだいぶ空が明るい状態でしたが、2本目はだいぶ空も暗くなって綺麗な夜桜ライトアップを撮ることに成功。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12270,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-light-up-aa-3-1024x683.jpg" alt="" class="wp-image-12270"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">3本目&amp;4本目は左側から撮影</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>19時台に突入すると辺りは真っ暗になり、人の数もだいぶ落ち着いてきます。撮影場所を水田の左側へ移動し、列車を待ちます。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>3本目の列車が夜桜ライトアップを通過。空が真っ暗になった時の方がより幻想的な景色に見えて個人的には好み。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12271,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-light-up-3-1024x683.jpg" alt="" class="wp-image-12271"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>4本目は少し位置を変えて撮影にトライ。</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":12272,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-lightup-05-1024x683.jpg" alt="" class="wp-image-12272"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>この日予定していた4本の列車が通過した後は機材を片付けて撤収。五井駅方面の最終電車に乗り、東京へ戻りました。</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">湊鉄道・飯給駅を訪れてみた感想</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>小湊鐵道の飯給駅に訪れた様子を紹介しました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>満開の桜のライトアップと水田のリフレクションはため息が出るくらい綺麗な光景でした。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>桜の開花状況、天候、田んぼに水がひかれているかなどさまざまな条件が揃わないと綺麗な写真は撮れませんが、この日はかなりラッキーだったと思います。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>唯一残念だったのはライトアップ開始以降の列車が全て一両だったこと。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>人が多いと2両編成で稼働しているらしいのですが、僕が訪れた時は全て一両で、ちょっと構図が寂しいなという感じがしました。</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>またいつかリベンジしたいなと思います。気になった方はぜひ桜の時期に訪れてみてください！</p>
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
  'https://nightscape.tokyo/wp-content/uploads/2025/03/itabu-station-light-up-3.jpg',
  true,
  '2025-03-12T02:01:56+09:00',
  '2025-03-12T02:01:56+09:00',
  '2025-03-12T02:10:07+09:00'
);

-- FAQs for itabu-station-cherry-blossoms
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'itabu-station-cherry-blossoms'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。/ 三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 0);

-- Post: スカイツリーイーストタワー 展望フロア (tokyo-skytree-east-tower)
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
  'tokyo-skytree-east-tower',
  'スカイツリーイーストタワー 展望フロア',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  'スカイツリーイーストタワー 展望フロア',
  '東京スカイツリーを超至近距離で眺めることができる無料夜景スポット。港区方面や新宿区方面の摩天楼も見どころ。',
  '<p>東京スカイツリーに隣接する商業施設の東京ソラマチ。</p>
<p>30階・31階のレストラン街には二つの<a href="/article/observatory/">無料展望スペース</a>があります。</p>
<p>一つ目は南西側の眺望を眺めることができる展望スペース。</p>
<p>大きな窓の向こうには大迫力のスカイツリーがそびえたちます。</p>
<p>東京スカイツリーを眺めることができる名所は数多くありますが、至近距離で眺めることができる展望スペースは唯一無二。</p>
<p>スカイツリーの背後には港区や新宿区方面の高層ビル群が見えて光量も非常に多いです。</p>
<p>2つ目は北東方面の景色を眺められる展望スペース。</p>
<p>南西側ほどの迫力はないですが曳舟駅周辺のトレインビューや緩やかなカーブを描く隅田川周辺の街明かりはとても美しいです。</p>
<p>東京スカイツリー展望台、すみだ水族館、東京ソラマチなどへ観光へ訪れた際はぜひ立ち寄ってみてください。</p>',
  '東京都墨田区押上1-1-２',
  'https://www.tokyo-solamachi.jp/',
  '東京ソラマチ',
  'https://www.instagram.com/tokyo_solamachi/',
  'インスタグラム公式アカウント',
  NULL,
  NULL,
  '11：00～23：00',
  '不定休',
  '無料',
  '<ul>
<li>都営地下鉄「押上」駅から徒歩1分</li>
<li>東武線「とうきょうスカイツリー」駅から徒歩6分</li>
</ul>',
  '<ul>
<li>東京スカイツリータウン駐車場</li>
<li>7:30~23:00※入庫は22:00まで</li>
<li>350円/30分</li>
</ul>',
  '<iframe title="スカイツリーイーストタワーの地図・マップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6477509789097!2d139.81065021609032!3d35.71028493598376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed6f051a20b%3A0x4770fd27f44df481!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8IOOCpOODvOOCueODiOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1673361993807!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  3.5,
  3,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-2.jpg',
  true,
  '2025-12-29T01:01:50+09:00',
  '2025-12-29T01:01:50+09:00',
  '2025-12-29T01:02:32+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for tokyo-skytree-east-tower
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-2.jpg', 'スカイツリーイーストタワー展望フロアの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa.jpg', '特別ライトアップで虹色に輝くスカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-5.jpg', '富士山と港区方面のビル群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-9.jpg', '東京スカイツリーと富士山', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-6.jpg', 'ライトアップされる永代橋など中央区方面の夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-4.jpg', '東京タワーと港区方面の街並み', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-5.jpg', '新宿の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-02.jpg', 'スカイツリーイーストタワーから眺める東京スカイツリー', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytee-east-1.jpg', 'スカイツリーイーストタワーから眺める東京スカイツリー', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytee-east-2.jpg', 'スカイツリーイーストタワーから眺める富士山', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-1.jpg', '隅田川にかかるライトアップされる桜橋', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-2.jpg', '隅田川周辺の夜景', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-3.jpg', '曳舟駅周辺の夜景', 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-05.jpg', 'スカイツリーイーストタワー展望フロアの雰囲気（南西側）', 13);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/skytree-east-tower-7.jpg', 'スカイツリーイーストタワー展望フロアの雰囲気（北東側）', 14);

-- FAQs for tokyo-skytree-east-tower
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), '展望フロアは何階にありますか？', '展望フロアは30階です。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), '東京スカイツリーは何時までライトアップされていますか？', '東京スカイツリーの点灯時間は日没~24時までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-skytree-east-tower'), '三脚を使って夜景を撮ることはできますか？', '三脚を使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Post: 六本木けやき坂通りイルミネーション 2025 (roppongi-keyaki-street)
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
  'roppongi-keyaki-street',
  '六本木けやき坂通りイルミネーション 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '六本木けやき坂通り イルミネーション',
  '約400mのけやき坂が雪の並木道をイメージしたスノーブルーのLEDで輝く、冬の風物詩。',
  '<p>六本木ヒルズのすぐそばけやき坂でクリスマスシーズンに行われているイルミネーション。</p>
<p>2013年に六本木ヒルズの開業10周年を記念して初めて実施されて以降、冬の風物詩として毎年催されているイベントです。</p>
<p>約400メートルのけやき坂が雪の並木道をイメージした青と白のＬＥＤとロウソクをイメージした暖色系のLEDで色鮮やかに輝きます。</p>
<p>けやき坂の先には東京タワーもあり、東京の冬を象徴する景色を眺めることができます。</p>
<p>点灯時間は日没から23時までとなっているので、六本木周辺でのデートの帰りなどにぜひお立ち寄りください。</p>',
  '東京都港区六本木 6-12',
  'https://www.roppongihills.com/sp/christmashills/102/',
  'けやき坂イルミネーション',
  NULL,
  NULL,
  'http://nightscape.tokyo/minato/tokyo-city-view/',
  '東京シティビュー/スカイデッキ',
  '日没から23時まで',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ 日比谷線 「六本木駅」1出口から徒歩約0分（コンコースにて直結）</li>
<li> 都営地下鉄 大江戸線「六本木駅」3出口から徒歩約4分</li>
<li>都営地下鉄 大江戸線「麻布十番駅」7出口から徒歩約4分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.72226285748!2d139.72780631525822!3d35.659213880199445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7643bb7f03%3A0x958e5638adbfbff1!2z44CSMTA2LTAwMzIg5p2x5Lqs6YO95riv5Yy65YWt5pys5pyo77yW5LiB55uuIOWFreacrOacqOOBkeOChOOBjeWdgumAmuOCig!5e0!3m2!1sja!2sjp!4v1673312606355!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  5,
  5,
  2,
  'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-01.jpg',
  true,
  '2025-11-19T15:02:29+09:00',
  '2025-11-19T15:02:29+09:00',
  '2025-11-19T15:02:30+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for roppongi-keyaki-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-01.jpg', '六本木けやき坂通りのイルミネーション', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-02.jpg', '六本木けやき坂通りのイルミネーションと六本木ヒルズ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-04.jpg', 'イルミネーションの光で輝くティファニーの看板', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-05.jpg', '六本木けやき坂通りのイルミネーションと東京タワー', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/ropponngi-keyaki-street-03.jpg', '六本木けやき坂通りのイルミネーションを行き交う人々', 4);

-- FAQs for roppongi-keyaki-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'どんな夜景が楽しめますか？', '雪の並木道をイメージした青と白のLEDとロウソクをイメージした暖色系のLEDで色鮮やかに輝くけやき坂を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), 'イルミネーションは何時まで点灯していますか？', '日没から23時まで点灯しています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 2);

-- Event info for roppongi-keyaki-street
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'roppongi-keyaki-street'), '20251104', '20251225', '六本木けやき坂通り', '17:00 ~ 23:00');

-- Post: 丸の内イルミネーション 2025 (marunouchi-illumination)
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
  'marunouchi-illumination',
  '丸の内イルミネーション 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '丸の内イルミネーション',
  '20年以上の歴史を誇る、東京・丸の内エリアの街を彩る冬の風物詩。',
  '<p>約1.2kmにおよぶ丸の内仲通りがシャンパンゴールドに輝く丸の内イルミネーション。</p>
<p>初めてイベントが開催されたのは1999年で20年以上続く冬の風物詩です。</p>
<p>けやき並木と石畳が異国情緒を醸し出すメインストリートが約120万球のLEDで点灯する様子は圧巻の一言。</p>
<p>毎年11月下旬頃より約100日間にわたって開催されており、長い期間美しい光景を眺められるので、東京駅周辺を訪れた際にぜひ足をお運びください。</p>',
  '東京都千代田区丸の内 1 ~ 3丁目周辺',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.marunouchi.com/pickup/event/7982/',
  '丸の内イルミネーション2025｜煌めく冬の丸の内で、特別なひとときを｜イベント｜Today''sピックアップ｜Marunouchi.com',
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京駅から約2分</li>
<li>二重橋前駅から約4分</li>
<li>大手町駅から約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.896442848837!2d139.7626877!3d35.6795518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188befc52db3a3%3A0xdb80b577e819eb2a!2z5p2x5Lqs6YO95Y2D5Luj55Sw5Yy6IOS4uOOBruWGheS7sumAmuOCig!5e0!3m2!1sja!2sjp!4v1699694290681!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.2,
  5,
  5,
  2.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/02/marunouchi-illumination-01.jpg',
  true,
  '2025-11-19T14:27:35+09:00',
  '2025-11-19T14:27:35+09:00',
  '2025-11-19T14:29:56+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for marunouchi-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/marunouchi-illumination-01.jpg', 'シャンパンゴールドに輝く丸の内仲通り', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/marunouchi-illumination-02.jpg', '丸の内仲通りに停車する車', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-9.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-8.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/marunouchi-illumination-04.jpg', '丸の内仲通りに停車する車', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-7.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/02/marunouchi-illumination-03.jpg', '丸の内仲通りのモニュメント', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-2.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-5.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/marunouchi-illumination-1.jpg', NULL, 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/marunouchi-illumination-2.jpg', NULL, 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/marunouchi-illumination-6.jpg', NULL, 11);

-- FAQs for marunouchi-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), '2025年の丸の内イルミネーション開催期間はいつまで？', '2025年の丸の内イルミネーションは2025.11.13(木)〜2026.02.15(日)の期間で開催されます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), '丸の内イルミネーションのライトアップ時間は何時までですか？', '丸の内イルミネーションのライトアップ点灯時間は日没から24時までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), 'どんな夜景が楽しめますか？', '約1.2kmにおよぶ丸の内仲通りがシャンパンゴールドに輝く光景を楽しめます。', 2);

-- Event info for marunouchi-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'marunouchi-illumination'), '20251113', '20260215', '丸の内仲通り、大手町仲通り、有楽町駅前の東京交通会館など', '16：00～24：00');

-- Post: 目黒川みんなのイルミネーション2025 (gotanda-winter-illumination)
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
  'gotanda-winter-illumination',
  '目黒川みんなのイルミネーション2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '目黒川みんなのイルミネーション2025',
  '目黒川の両脇にある桜並木が約38万のLEDライトでピンク色に染まる冬季限定のイベント。',
  '<p>毎年12月上旬から1月上旬にかけて区立五反田ふれあい水辺広場周辺で実施されているイルミネーションイベント。</p>
<p>目黒川の両脇にある桜並木が約39万のLEDライトでピンク色に染まる様子はまるで春の到来を見ているようでとても美しいです。</p>
<p>ライトアップは桜並木の木の葉が散った後のほうが美しく見えるので、12月下旬以降に訪れるのがおすすめ。</p>',
  '東京都品川区東五反田 2-9-11',
  'https://www.minna-no-illumi.com/',
  '目黒川みんなのイルミネーション 2025 | しながわ観光協会',
  NULL,
  NULL,
  NULL,
  NULL,
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
  3.3,
  3.3,
  3.2,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-1-1.jpg',
  true,
  '2025-11-19T14:37:26+09:00',
  '2025-11-19T14:37:26+09:00',
  '2025-11-19T14:37:26+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for gotanda-winter-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-1-1.jpg', '目黒川の木々がピンク色にライトアップされる様子', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/gotanda-illumination-3.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-3.jpg', '目黒川みんなのイルミネーションの様子', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-6.jpg', '五反田ふれあい水辺広場で実施されるイルミネーションイベントの様子', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/03/gotanda-7.jpg', 'イルミネーションイベントが実施される区立五反田ふれあい水辺広場', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/gotanda-illumination-4.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/gotanda-illumination-2.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/gotanda-illumination-1.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-1.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-2.jpg', NULL, 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-4.jpg', NULL, 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-5.jpg', NULL, 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-7.jpg', NULL, 12);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/gotanda-illumination-8.jpg', NULL, 13);

-- FAQs for gotanda-winter-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), 'どんな夜景が楽しめますか？', '目黒川の桜並木がピンク色のライトアップで美しく輝く様子を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), '目黒川みんなのイルミネーション2025はいつまで開催されますか？', '2025年12月5日 (金) ～ 2026年1月31日 (土) まで実施されます', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), '目黒川みんなのイルミネーション2025は何時まで実施されていますか？', 'イルミネーションは17時～22時30分まで点灯しています。', 2);

-- Event info for gotanda-winter-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'gotanda-winter-illumination'), '20251205', '20260131', '区立五反田ふれあい水辺広場および目黒川沿道', '17:00 ~ 22:30');

-- Post: 大田黒公園紅葉ライトアップ2025 (otaguro-park)
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
  'otaguro-park',
  '大田黒公園紅葉ライトアップ2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '大田黒公園',
  '紅葉のライトアップが有名な回遊式日本庭園。風が穏やかな日の見事な水鏡と紅葉の共演は一見の価値あり。',
  '<p>音楽評論家の大田黒元雄氏の屋敷跡地を杉並区が整備し、昭和56年10月1日に開園した回遊式日本庭園。</p>
<p>四季折々の景観が見事で、春はサトザクラや初夏にはアジサイ、そして秋にはイチョウ並木やケヤキ、アカマツが紅く色づく光景を楽しむことができます。</p>
<p>紅葉シーズンにはライトアップイベントも実施されており、昼間とは全く雰囲気の異なる紅葉を拝めるのも特徴です。</p>
<p>都内でも有数の紅葉スポットですのでぜひ、イベント開催期間に足を運んでみてはいかがでしょうか？</p>',
  '東京都杉並区荻窪 3-33-12',
  'https://ogikubo3gardens.jp/news/7ofpo6c0li/',
  '杉並区立大田黒公園',
  NULL,
  NULL,
  'https://www.facebook.com/ootaguro',
  '大田黒公園Facebookアカウント',
  '<p>午前9時から午後7時（入園4時半）</p><p>夜間ライトアップ期間は平日 9:00～20:00 / 金土日 9:00～21:00</p>',
  '年末年始（12/29から元旦）',
  '無料（ライトアップ時間は大人300円 / 小中学生100円）',
  '<ul>
<li>JR・東京メトロ　丸の内線「荻窪駅」南口より徒歩約10分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12960.126576220637!2d139.6248333!3d35.7008389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f20986bb00f3%3A0x302bdecedaa82ef0!2z5p2J5Lim5Yy656uL5aSn55Sw6buS5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1701091559701!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.5,
  2.9,
  4,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-3.jpg',
  true,
  '2025-11-19T14:18:19+09:00',
  '2025-11-19T14:18:19+09:00',
  '2025-11-19T14:18:19+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), (SELECT id FROM tags WHERE slug = 'autumn-leaves'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for otaguro-park
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-3.jpg', '大田黒公園の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-8.jpg', 'ライトアップされる紅葉', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-6.jpg', 'あずま屋から眺める紅葉', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-4.jpg', '茶屋の縁側に展示される和傘', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-2.jpg', '紅葉のライトアップがくっきり映る水鏡', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-1.jpg', '大田黒公園のイチョウ並木道', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), 'https://nightscape.tokyo/wp-content/uploads/2023/11/otakuro-park-5.jpg', '紅葉のライトアップがくっきり映る水鏡', 6);

-- FAQs for otaguro-park
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), '2025年の紅葉ライトアップイベントの開催期間はいつまでですか？', '11/28（金）～12/7（日）に開催しています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), '大田黒公園の最寄駅はどこですか？', '大田黒公園の最寄駅はJR・東京メトロ　丸の内線「荻窪駅」です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されています。マナーを守って撮影を楽しみましょう。', 2);

-- Event info for otaguro-park
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'otaguro-park'), '20251128', '20251207', '大田黒公園', '17：00 ~ 21：00');

-- Post: 青の洞窟 SHIBUYA 2025 (aonodokutsu)
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
  'aonodokutsu',
  '青の洞窟 SHIBUYA 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '青の洞窟 SHIBUYA 2025',
  '渋谷公園通りから代々木公園ケヤキ並木までの約800メートルが青いイルミネーションで彩られる冬の風物詩',
  '<p>毎年12月からクリスマスにかけて実施されているイルミネーションイベント「青の洞窟　ＳＨＩＢＵＹＡ」。</p>
<p>渋谷公園通りから代々木公園ケヤキ並木までの約800メートルが50万球のLEDライトで彩られます。</p>
<p>通りの両サイドから伸びる木々がイルミネーションでかがやき、それが道に反射する光景はまさに洞窟。</p>
<p>渋谷にいることを忘れてしまいそうな、美しい青の世界を堪能できます。</p>
<p>イルミネーションは17：00〜22：00までと比較的遅くまで点灯しています。</p>
<p>渋谷公園通りなどで食事をした後にぜひ立ち寄ってみてはいかがでしょうか。</p>',
  '東京都渋谷区神南 1-5-11',
  'https://shibuya-aonodokutsu.jp/',
  '青の洞窟 SHIBUYA 公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '15:00～22:00',
  '-',
  '無料',
  '<ul>
<li>JR原宿駅、東京メトロ明治神宮前駅より徒歩10分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12966.183116838196!2d139.68899630790153!3d35.66356108445182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188caef924aaaf%3A0xe0ce7ff6027ccc74!2z5Luj44CF5pyo5YWs5ZySIOOCseODpOOCreS4puacqA!5e0!3m2!1sja!2sjp!4v1701600364697!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.5,
  3.5,
  4.5,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-3.jpg',
  true,
  '2025-11-19T14:33:36+09:00',
  '2025-11-19T14:33:36+09:00',
  '2025-11-20T15:12:28+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for aonodokutsu
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-3.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-1.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-2.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-5.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-4.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-7.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/aono-dokutsu-6.jpg', NULL, 6);

-- FAQs for aonodokutsu
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), '青の洞窟 SHIBUYA 2024はどこの場所で開催されていますか？', '青の洞窟 SHIBUYA 2024は代々木公園ケヤキ並木周辺で開催されています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), '2025年の「青の洞窟 SHIBUYA」の開催期間は？', '開催期間は2025年12月4日（木）から12月25日（木）までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), '2025年の「青の洞窟 SHIBUYA」の開催時間は？', '開催時間は17:00~22:00までとなっています。', 2);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), 'どんな夜景が楽しめますか？', '渋谷公園通りから代々木公園ケヤキ並木までの約800メートルが50万球のLEDライトで彩られる光景を楽しめます。', 3);

-- Event info for aonodokutsu
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'aonodokutsu'), '20251204', '20251225', '代々木公園ケヤキ並木', '15：00 ~ 22：00');

-- Post: 恵比寿ガーデンプレイス イルミネーション 2025 (ebis-garden-place-sky-lounge-illumination)
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
  'ebis-garden-place-sky-lounge-illumination',
  '恵比寿ガーデンプレイス イルミネーション 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '恵比寿ガーデンプレイス イルミネーション 2025',
  '世界最大級のバカラシャンデリアや300個以上のオーナメントがあしらわれたクリスマスツリーが展示される冬の風物詩。',
  '<p>毎年12月からクリスマスにかけて実施されているイルミネーションイベント。</p>
<p>シャンパンゴールドを基調とした約10万球の光で、恵比寿ガーデンプレイス全体をライトアップされます。</p>
<p>また、世界最大級のバカラシャンデリアや300個以上のオーナメントがあしらわれた約10mのクリスマスツリーが展示されるのも特徴。</p>
<p>恵比寿ガーデンプレイスはレストランフロアに展望台もあるので、ぜひそちらもお立ち寄りください。</p>',
  '東京都渋谷区恵比寿 4-20',
  'https://gardenplace.jp/',
  '恵比寿ガーデンプレイス公式サイト',
  NULL,
  NULL,
  'https://nightscape.tokyo/shibuya/ebis-garden-place-sky-lounge/',
  '恵比寿ガーデンプレイス 展望台 スカイラウンジの夜景',
  '終日開放',
  'なし',
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
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.4010865933787!2d139.71097326525768!3d35.642488580203356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b15d77d1725%3A0xb5bcd9d507694b0e!2z5oG15q-U5a-_44Ks44O844OH44Oz44OX44Os44Kk44K544K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1673366059205!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  4,
  4,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-4.jpg',
  true,
  '2025-11-19T14:46:09+09:00',
  '2025-11-19T14:46:09+09:00',
  '2025-11-19T14:46:11+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for ebis-garden-place-sky-lounge-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-4.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-3-1.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-garden-place-illumination-1.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-garden-place-illumination-2.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-garden-place-illumination-3.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-2.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/ebis-1.jpg', NULL, 6);

-- FAQs for ebis-garden-place-sky-lounge-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), 'どんな夜景が楽しめますか？', '恵比寿ガーデンプレイス全体がシャンパンゴールドに輝く様子や世界最大級のバカラシャンデリアを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), '恵比寿ガーデンプレイスのイルミネーションの開催期間はいつまでですか？', '2025年11月8日(土)～2026年3月1日(日)までです。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), '恵比寿ガーデンプレイスのイルミネーションは何時まで点灯していますか？', '16:00～23:00までイルミネーションは点灯しています。', 2);

-- Event info for ebis-garden-place-sky-lounge-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'ebis-garden-place-sky-lounge-illumination'), '20251108', '20260301', '恵比寿ガーデンプレイス', '16:00～23:00');

-- Post: ヒビヤ マジックタイム イルミネーション 2025 (hibiya-illumination)
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
  'hibiya-illumination',
  'ヒビヤ マジックタイム イルミネーション 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  'ヒビヤ マジックタイム イルミネーション 2025',
  '日比谷の街が幻想的な光景に包まれるイルミネーションイベント。開催期間も長く仕事やデートの帰り道に立ち寄るのがおすすめ。',
  '<p>東京ミッドタウン日比谷や日比谷仲通りで実施されているイルミネーションイベントの「HIBIYA Magic Time Illumination」。</p>
<p>時間によって変化するイルミネーションやクリスマスツリーが展示されており、とても華やかな光景が広がります。</p>
<p>フォトジェニックな写真が撮れますし、イルミネーションの点灯時間も23：00までと遅めなので日比谷周辺でのデートの帰り道などにぜひお立ち寄りください。</p>',
  '東京都千代田区有楽町 1-1-2',
  'https://www.hibiya.tokyo-midtown.com/jp/event/7174/',
  'HIBIYA Magic Time Illumination 2025',
  NULL,
  NULL,
  'https://nightscape.tokyo/chiyoda/tokyo-midtown-hibiya',
  '東京ミッドタウン日比谷 展望台 パークビューガーデン',
  '終日開放',
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
  3.8,
  3.5,
  3.8,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-1.jpg',
  true,
  '2025-11-19T15:30:38+09:00',
  '2025-11-19T15:30:38+09:00',
  '2025-11-19T15:30:39+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for hibiya-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-1.jpg', '鮮やかに輝く東京ミッドタウン日比谷の階段', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-6.jpg', '東京ミッドタウン日比谷周辺がイルミネーションで輝く様子', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-4.jpg', 'ヒビヤ マジックタイム イルミネーションの雰囲気', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-2.jpg', 'ヒビヤ マジックタイム イルミネーションのロゴ', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-3.jpg', '青く染まる日比谷仲通り', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-10.jpg', 'ヒビヤ マジックタイム イルミネーションの雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-3.jpg', 'イルミネーションが美しい東京ミッドタウン日比谷の展望台', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-2.jpg', '霞が関方面の高層ビル群の夜景', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/01/tokyo-hibiya-midtown-observatory-4.jpg', '東京ミッドタウン日比谷展望台の雰囲気', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/hibiya-illumination-9.jpg', 'イルミネーションが美しい東京ミッドタウン日比谷 パークビューガーデン', 10);

-- FAQs for hibiya-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'どんな夜景が楽しめますか？', '東京ミッドタウン日比谷や日比谷仲通りがイルミネーションで輝く光景を堪能できます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'ヒビヤ マジックタイム イルミネーション 2025の開催期間はいつまでですか？', 'ヒビヤ マジックタイム イルミネーション 2025の開催期間は2025/11/13(木)～2026/2/28(土).です。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), 'ヒビヤ マジックタイム イルミネーション 2025の点灯時間は何時までですか？', 'ヒビヤ マジックタイム イルミネーション 2025の点灯時間は16:00~23:00です。', 2);

-- Event info for hibiya-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'hibiya-illumination'), '20251113', '20260228', '日比谷仲通り／東京ミッドタウン日比谷（日比谷ステップ広場・6Fパークビューガーデン）', '16:00～23:00');

-- Post: 表参道 フェンディ イルミネーション 2025 (omotesando-illumination)
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
  'omotesando-illumination',
  '表参道 フェンディ イルミネーション 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '表参道 フェンディ イルミネーション 2025',
  '表参道のケヤキ並木が90万球のLEDライトでシャンパンゴールドに輝く冬の風物詩。',
  '<p>神宮橋交差点から表参道交差点までの約1kmの道がシャンパンゴールドに輝く年末の恒例イベント。</p>
<p>154本のケヤキ並木が90万球のLEDライトによって点灯する様子は圧巻の一言です。</p>
<p>歩いているだけでも美しいですが、歩道橋の上から表参道を眺めるとよりその美しさを楽しむことができます。</p>
<p>表参道や原宿街歩きの締めくくりとして、足を運んではいかがでしょうか。</p>',
  '東京都渋谷区神宮前 4丁目12',
  'https://omotesando.or.jp/illumi/',
  '表参道 フェンディ イルミネーション 2024 - 原宿表参道オフィシャルサイト',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '無料',
  '<ul>
<li>原宿駅／東口（ＪＲ東日本）徒歩3分</li>
<li>明治神宮前駅／2番口（東京地下鉄（メトロ））徒歩4分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1920.7479426020004!2d139.70145074136659!3d35.669565963076565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d790520ee7b%3A0xd57777e3f55e17d1!2z56We5a6u5qmL!5e0!3m2!1sja!2sjp!4v1702174112382!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4.1,
  4,
  4,
  3,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-1.jpg',
  true,
  '2025-11-19T15:04:14+09:00',
  '2025-11-19T15:04:14+09:00',
  '2025-11-19T15:04:14+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for omotesando-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-1.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-8.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-10.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-9.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-3.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-2.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-6.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/omotesando-illumination-4.jpg', NULL, 8);

-- FAQs for omotesando-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), 'どんな夜景が楽しめますか？', '表参道の左右154本の欅がシャンパンゴールドの光に包まれる様子を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), '表参道 フェンディ イルミネーション 2025の開催期間はいつまでですか？', '2025年12月1日（月）～12月28日（日）まで開催されています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), '表参道 フェンディ イルミネーション 2025のイルミネーションは何時まで点灯していますか？', '表参道 フェンディ イルミネーション 2025のイルミネーションは日没 〜 22:00まで点灯しています。', 2);

-- Event info for omotesando-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'omotesando-illumination'), '20251201', '20251228', '神宮橋交差点 ~ 表参道交差点', '日没 〜 22:00まで');

-- Post: 明治神宮外苑いちょう並木ライトアップ 2025 (meiji-shrine-outer-garden)
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
  'meiji-shrine-outer-garden',
  '明治神宮外苑いちょう並木ライトアップ 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '明治神宮外苑いちょう並木ライトアップ 2025',
  '青山通り口から外苑中央広場円周道路に至る約300mのいちょう並木が黄金色に輝く秋の風物詩。',
  '<p>明治天皇と昭憲皇太后のご遺徳を永く後世に伝えるために大正15年に明治神宮に奉献された明治神宮外苑。</p>
<p>青山通り口から外苑中央広場円周道路に至る約300mのいちょう並木は11月中旬ごろから12月にかけて黄金色に染まります。</p>
<p>いちょう並木が見頃となる時期にはライトアップイベントも実施されており、多くの方で賑わいます。</p>
<p>なおライトアップ時間は16:30〜19:30までとなっており、終了時間が早いのにはご注意を。</p>',
  '東京都港区北青山2丁目付近',
  'https://www.metro.tokyo.lg.jp/information/press/2025/11/2025110714',
  '神宮外苑イチョウ並木をライトアップ｜東京都',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>JR「信濃町駅」より徒歩約10分</li>
<li>地下鉄「青山一丁目駅」より徒歩約5分</li>
<li>地下鉄「外苑前駅」より徒歩約5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.69602772471!2d139.7205745!3d35.6727172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c9afc587cfd%3A0xdfa0dacae2e42000!2z5piO5rK756We5a6u5aSW6IuRIOOBhOOBoeOCh-OBhuS4puacqA!5e0!3m2!1sja!2sjp!4v1732363981608!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.5,
  3.2,
  3.2,
  'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-1.jpg',
  true,
  '2025-11-19T14:02:27+09:00',
  '2025-11-19T14:02:27+09:00',
  '2025-11-23T12:09:50+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), (SELECT id FROM tags WHERE slug = 'autumn-leaves'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for meiji-shrine-outer-garden
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-1.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-2.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-3.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-4.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-5.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-6.jpg', NULL, 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-7.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-8.jpg', NULL, 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-9.jpg', NULL, 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/jingu-gaien-10.jpg', NULL, 9);

-- FAQs for meiji-shrine-outer-garden
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), '2024年の神宮外苑イチョウ並木のライトアップはいつまで開催されていますか？', '2025年11月22日（土）～11月30日（日）まで開催されています。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), '神宮外苑イチョウ並木のライトアップは何時まで実施されていますか？', '16時30分から19時30分頃までとなっています。', 1);

-- Event info for meiji-shrine-outer-garden
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'meiji-shrine-outer-garden'), '2025年11月22日', '2025年11月30日', '明治神宮外苑 いちょう並木', '16:30 ~ 19:30');

-- Post: 国営昭和記念公園 秋の夜散歩 2025 (showakinen-koen)
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
  'showakinen-koen',
  '国営昭和記念公園 秋の夜散歩 2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '国営昭和記念公園 秋の夜散歩 2025',
  '昭和記念公園の財産を生かし、公園らしい夜の魅力を伝えたいと2020年から始まったライトアップイベント。300ｍに渡るイチョウ並木が黄金に輝く様子や紅葉で真っ赤に染まる日本庭園を鑑賞できる。',
  '<p>昭和記念公園の財産を生かし、公園らしい夜の魅力を伝えたいと2020年から始まったライトアップイベント。</p>
<p>広々とした園内には下記の2つの見所が用意されています。</p>

<div class="definition l-bottom-large">
<dl class="definition-body">
<dt>かたらいのイチョウ並木</dt>
<dd>300ｍに渡るイチョウ並木が黄金に輝く様子を楽しむことができる</dd>
<dt>日本庭園</dt>
<dd>ライトアップされたおよそ300本のモミジや雪吊りを施された松などを観賞可能。和傘のライトアップもあり、幻想的な光景が広がる</dd>
</dl>
</div>

<p>イベント開催中、園内は様々な出店もあってとても賑やかな雰囲気。自然を感じながら秋の訪れを楽しむことができます。</p>
<p>国営昭和記念公園のX公式アカウントでは銀杏並木の見頃の時期など細かく発信しているので、ぜひ見ごろの時期に訪れてみてください。</p>',
  '東京都立川市緑町３１７３',
  'https://www.showakinen-koen.jp/autumn-night-walk/',
  '国営昭和記念公園公式ホームページ',
  'https://x.com/showakinenpark/',
  '国営昭和記念公園 X公式アカウント',
  NULL,
  NULL,
  '終日開放',
  'なし',
  '<ul>
<li>入園料：大人 450円、65歳以上 210円、中学生以下 無料</li>
<li>日本庭園ライトアップ観賞券：曜日によって異なる</li>
<li>入園料と日本庭園ライトアップ観賞券のセット券あり</li>
<ul>',
  '<ul>
<li>JR「西立川」駅より徒歩約2分</li>
<li>JR「立川」駅より徒歩約18分</li>
<li>多摩都市モノレール「立川北」駅より徒歩約16分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5867183244045!2d139.393631!3d35.711786499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e1ace14bd40b%3A0xd7da4db683b53513!2z5Zu95Za25pit5ZKM6KiY5b-15YWs5ZyS!5e0!3m2!1sja!2sjp!4v1732983328080!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  4,
  2.9,
  3.9,
  3.6,
  'https://nightscape.tokyo/wp-content/uploads/2025/11/tachikawa-ginkgo-lightup-01.jpg',
  true,
  '2025-11-23T23:03:51+09:00',
  '2025-11-23T23:03:51+09:00',
  '2025-11-23T23:04:20+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), (SELECT id FROM tags WHERE slug = 'autumn-leaves'));

-- Images for showakinen-koen
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/tachikawa-ginkgo-lightup-01.jpg', '黄葉スポット「カナール」の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/tachikawa-ginkgo-lightup-03.jpg', '黄葉スポット「カナール」の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/tachikawa-ginkgo-lightup-02.jpg', '黄葉スポット「カナール」の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-3.jpg', '園内にある池泉回遊式庭園と紅葉', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-4.jpg', '雪吊りを施された松がライトアップされる光景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-1-1.jpg', '水面にライトアップされる紅葉が映る様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-2-1.jpg', '水面にライトアップされる紅葉が映る様子', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-5.jpg', 'ライトアップされる和傘', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-6.jpg', 'ライトアップされる和傘', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-7.jpg', 'ライトアップされるかたらいのイチョウ並木', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'https://nightscape.tokyo/wp-content/uploads/2024/11/showakinen-koen-8.jpg', 'ライトアップされる銀杏', 10);

-- FAQs for showakinen-koen
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), 'どんな夜景が楽しめますか？見どころはどこですか？', '黄金に輝く「かたらいのイチョウ並木」や真っ赤な紅葉が水面に映る「日本庭園」などを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), '2025年の国営昭和記念公園「秋の夜散歩 」開催期間はいつまでですか？', '2025年の国営昭和記念公園「秋の夜散歩 」開催期間は10月30日～11月30日となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), '2025年の国営昭和記念公園「秋の夜散歩 」の開催時間は？', '2024年の国営昭和記念公園「秋の夜散歩 」の開催時間は 16:30～21:00となっています。', 2);

-- Event info for showakinen-koen
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'showakinen-koen'), '20241031', '20241201', '国営昭和記念公園 秋の夜散歩 2024', '16:30~21:00');

-- Post: 東京ミッドタウン「光の散歩道」2025 (tokyo-midtown-winter-illumination)
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
  'tokyo-midtown-winter-illumination',
  '東京ミッドタウン「光の散歩道」2025',
  'event',
  (SELECT id FROM categories WHERE slug = 'event'),
  NULL,
  '東京ミッドタウン「光の散歩道」2025',
  'ミッドタウン・ガーデン内の樹々が約32万球の上品なゴールドの電飾で彩られる毎年恒例のイルミネーションイベント。',
  '<p>ミッドタウン・ガーデン内の樹々が約32万球の上品なゴールドの電飾で彩られるイルミネーションイベント。</p>
<p>下記のように複数のおすすめ眺望ポイントがあり、とても美しい光景を楽しむことができます。</p>

<ul>
<li>ガーデンテラスとミッドタウン・ガーデンを繋ぐアーチ状の橋</li>
<li>コートヤードと芝生広場を結ぶ橋</li>
<li>噴水のエリア</li>
</ul>

<p>特におすすめしたいのは乃木坂駅方面へ向かう道の途中にある噴水エリア。ゴールドの光が水に反射する光景はとても幻想的です。</p>
<p>ラグジュアリーで少し大人な雰囲気のイルミネーションを楽しめるのでぜひ、周辺を訪れたら立ち寄ってみてはいかがでしょうか。</p>',
  '東京都港区赤坂 9-7-1',
  'https://www.tokyo-midtown.com/jp/event/7657/',
  '光の散歩道 | イベント | 東京ミッドタウン',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東京メトロ日比谷線「六本木駅」8番出口より直結</li>
<li>東京メトロ千代田線「乃木坂駅」3番出口より徒歩約3分</li>
<li>東京メトロ南北線「六本木一丁目駅」1番出口より徒歩約10分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51877.84239663709!2d139.6599259582812!3d35.64337418517727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b78922e6353%3A0xeb3e39dbe18da4d6!2z5p2x5Lqs44Of44OD44OJ44K_44Km44Oz!5e0!3m2!1sja!2sjp!4v1733240797804!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.5,
  3.8,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-2.jpg',
  true,
  '2025-11-19T13:58:47+09:00',
  '2025-11-19T13:58:47+09:00',
  '2025-11-19T14:00:54+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), (SELECT id FROM tags WHERE slug = 'illumination'));

-- Images for tokyo-midtown-winter-illumination
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-2.jpg', NULL, 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-7.jpg', NULL, 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-6.jpg', NULL, 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-5.jpg', NULL, 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-4.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-1.jpg', '東京ミッドタウンで実施されているイルミネーション', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-8.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'https://nightscape.tokyo/wp-content/uploads/2023/12/tokyo-midtown-illumination-3.jpg', NULL, 7);

-- FAQs for tokyo-midtown-winter-illumination
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ミッドタウン・ガーデン内の樹々が約32万球の上品なゴールドの電飾で彩られる光景を楽しむことができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), '東京ミッドタウン 六本木「光の散歩道」2025の開催期間はいつまで？', '2025/11/13(木)〜2026/2/23(月)が開催期間となっています。', 1);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), '東京ミッドタウン 六本木「光の散歩道」2025のライトアップ点灯時間は？', '東京ミッドタウン 六本木「光の散歩道」2025のライトアップ点灯時間は17:00～23:00となっています。', 2);

-- Event info for tokyo-midtown-winter-illumination
INSERT INTO spot_events (spot_id, start_date, end_date, place, event_hour) VALUES ((SELECT id FROM spots WHERE slug = 'tokyo-midtown-winter-illumination'), '20251113', '20260223', '東京ミッドタウン', '17:00～23:00');

-- Post: ニュウマン高輪 LUFTBAUM（28F展望スペース） (newoman-takanawa)
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
  'newoman-takanawa',
  'ニュウマン高輪 LUFTBAUM（28F展望スペース）',
  'spot',
  (SELECT id FROM categories WHERE slug = 'minato'),
  NULL,
  'ニュウマン高輪  LUFTBAUM（28階展望スペース）',
  '高輪ゲートウェイ駅直結の大型商業施設。28階にあるLUFTBAUM（展望スペース）からはレインボーブリッジをはじめとした湾岸エリアの眺望や渋谷・新宿方面の高層ビル群を眺めることができる。',
  '<p>2025年9月に誕生した「ニュウマン高輪」。</p>
<p>JR「高輪ゲートウェイ」駅と直結する便利な立地にあり、買い物や食事と合わせて楽しめる注目の大型複合施設です。</p>
<p>同施設の28階にはLUFTBAUMという緑豊かな回遊式のテラスが2ヶ所あり、都会の街並みを楽しむことができます。</p>

<div class="definition l-bottom-large">
<p class="definition-title">ニュウマン高輪の見所</p>
<dl class="definition-body">
<dt>東側</dt>
<dd>レインボーブリッジ、品川駅のトレインビュー、お台場方面のビル夜景、スカイツリー</dd>
<dt>北西側</dt>
<dd>渋谷方面のビル群、新宿方面のビル群</dd>
</dl>
</div>

<p>注目はレインボーブリッジをはじめとした湾岸エリアの眺望が広がる北東の景色。</p>
<p>レインボーブリッジを眺められる展望台はいくつも訪れていますが、この場所からの景色はとても綺麗だと感じました。</p>
<p>花火が上がっているタイミングなどにも是非訪れてみたいところです。</p>
<p>また眼下に広がる品川駅方面のトレインビューもなかなかの迫力。</p>
<p>展望スペースは吹き抜けの天井で開放感抜群ですし、緑に溢れていてとても良い雰囲気。デートでの利用もおすすめです。</p>',
  '東京都港区高輪 2-21-1',
  'https://www.newoman.jp/takanawa/',
  'ニュウマン高輪 │ NEWoMan',
  NULL,
  NULL,
  NULL,
  NULL,
  '8：00～24：00',
  'なし',
  '無料',
  '<ul>
<li>JR「高輪ゲートウェイ駅」改札より徒歩1分</li>
<li>都営浅草線、京急本線「泉岳寺駅」A2出口より徒歩3分</li>
</ul>',
  '-',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.6601423916745!2d139.74002059999998!3d35.636103999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b007d8eedfb%3A0x1da733ac28f7b737!2zTkVXb01hbumrmOi8qg!5e0!3m2!1sja!2sjp!4v1758971313598!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  3.5,
  3.8,
  3.1,
  'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-6.jpg',
  true,
  '2025-11-15T03:15:42+09:00',
  '2025-11-15T03:15:42+09:00',
  '2025-11-25T09:04:01+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), (SELECT id FROM tags WHERE slug = 'observatory'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for newoman-takanawa
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-6.jpg', '湾岸エリアの都市夜景と品川駅のトレインビュー', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-5.jpg', 'ライトアップされるレインボーブリッジ', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-7.jpg', '東京スカイツリーと芝浦方面の高層ビル群', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-2.jpg', '芝浦方面の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa.jpg', 'フジテレビなどが立ち並ぶお台場エリアの夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/09/newoman-5.jpg', 'ニュウマン高輪・LUFTBAUMから眺める夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-8.jpg', '渋谷方面の高層ビル群', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-11.jpg', '新宿と六本木エリアのビル夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/newoman-takanawa-9.jpg', '新宿エリアの摩天楼', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/09/newoman.jpg', '緑豊かな展望エリアのLUFTBAUM', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/09/newoman-4.jpg-20-17-07-049.jpg', 'LUFTBAUMにある展望スペース', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'https://nightscape.tokyo/wp-content/uploads/2025/09/newoman-2.jpg', '28F「LUFTBAUM」」のエレベーター周辺の雰囲気', 11);

-- FAQs for newoman-takanawa
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'どんな夜景が楽しめますか？見どころはどこですか？', '新宿や渋谷方面の高層ビル群を眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'newoman-takanawa'), 'ニュウマン高輪 LUFTBAUM（28階展望スペース）へはどのように行くことができますか？', '2Fにある直通エレベーターからアクセスすることが可能です。', 1);

-- Post: 駒沢パーククォーター 屋上テラス (komazawa-parkquarter)
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
  'komazawa-parkquarter',
  '駒沢パーククォーター 屋上テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'setagaya'),
  NULL,
  '駒沢パーククォーター',
  '駒澤大学から徒歩1分の好立地にできた商業施設。屋上テラスからは東京タワーをはじめとした港区方面の夜景が美しい。',
  '<p>2025年11月11日、東急田園都市線・駒沢大学駅から徒歩1分の好立地に開業した駒沢パーククォーター。</p>
<p>都市と自然が調和するサステナブルな空間は、地上4階から地下1階までのフロアで構成され、個性豊かな17の店舗がラインナップしています。</p>
<p>同施設の屋上にはテラスがあり、夜には夜景を楽しむことが可能です。</p>
<p>南東側にはライトアップされた東京タワーをはじめとした港区の高層ビル群、南西側には武蔵小杉のタワーマンション群などが見えるのが印象的でした。</p>
<p>渋谷エリアのビル群も見えることを期待していきましたが、手前に大きなマンションがあってそれは叶いませんでした。</p>
<p>特段光量が多い夜景を楽しむことはできませんが、雰囲気がとても良く同ビルで食事をした後などに立ち寄るのがおすすめです。</p>',
  '〒154-0011 東京都世田谷区上馬3丁目18−7',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://comorevi.com/parkquarter/',
  '駒沢パーククォーター | 今日の駒沢（駒沢こもれびプロジェクト）',
  '7:00～23:00',
  'なし',
  '無料',
  '<ul>
<li>東急田園都市線「駒沢大学駅」より徒歩1分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.7856920050917!2d139.6613395!3d35.6330094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f50048db16fb%3A0xc4319ce02a9e8eb5!2z6aeS5rKi44OR44O844Kv44Kv44Kp44O844K_44O8!5e0!3m2!1sja!2sjp!4v1763435343435!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.4,
  3.5,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-7.jpg',
  true,
  '2025-11-18T20:50:10+09:00',
  '2025-11-18T20:50:10+09:00',
  '2025-11-18T20:50:11+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), (SELECT id FROM tags WHERE slug = 'tokyo-tower'));

-- Images for komazawa-parkquarter
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-7.jpg', '駒沢パーククォーターの雰囲気', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-5.jpg', '駒沢パーククォーターから見える夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-4.jpg', '駒沢パーククォーターから見える東京タワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-3.jpg', '武蔵小杉方面の夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-2.jpg', NULL, 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-6.jpg', '駒沢パーククォーターの雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-8.jpg', NULL, 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'https://nightscape.tokyo/wp-content/uploads/2025/11/komazawa-parkquarter-1.jpg', '駒沢パーククォーターの外観', 7);

-- FAQs for komazawa-parkquarter
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'komazawa-parkquarter'), 'どんな夜景が楽しめますか？見どころはどこですか？', '南東側にはライトアップされた東京タワーをはじめとした港区の高層ビル群、南西側には武蔵小杉のタワーマンション群などを眺めることができます。', 0);

-- Post: 東京ベイ有明ワシントンホテル (washington-hotels-ariake)
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
  'washington-hotels-ariake',
  '東京ベイ有明ワシントンホテル',
  'hotel',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '東京ベイ有明ワシントンホテル',
  '活気のある有明エリアの街並みを堪能できるコスパ抜群ホテル。晴海方面のビル夜景やゆりかもめ線を行き交う車両が見所。',
  '<p>21階建て・830の客室からなる東京ベイ有明ワシントンホテル。</p>
<p>東京ディズニーランドのグッドネイバーホテルで宿泊客専用のシャトルバスが運行するほか、東京ビッグサイトが近くにありイベント時に重宝する宿泊施設です。</p>
<p>そんな同施設は立地の良さだけでなく客室からの眺望もとても魅力的。</p>
<p>目の前には国際展示行駅があり、その奥には晴海エリアの高層ビル群がずらりと立ち並ぶ光景は圧巻の一言。</p>
<p>さらにゆりかもめ線の電車が行き交う様子やお台場方面の景色、首都高速湾岸線を行き交う車も見逃せません。</p>
<p>宿泊費用も都内では比較的お手頃な価格なので、ディズニー観光や東京ビッグサイトのイベントに参加する時などに宿泊してみてはいかがでしょうか？</p>',
  '東京都江東区有明3丁目7番11号',
  'https://washington-hotels.jp/ariake/',
  '東京ベイ有明ワシントン公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>りんかい線「国際展示場駅」より 徒歩約3分</li>
<li>新交通ゆりかもめ「東京ビッグサイト駅」・「有明駅」より 徒歩約3分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.8014976195955!2d139.7933536!3d35.63261979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889e803cdfbcf%3A0xfd40158a04fa4eee!2z5p2x5Lqs44OZ44Kk5pyJ5piO44Ov44K344Oz44OI44Oz44Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1765196754861!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/SegmyTVWyDo?si=gpoH-RdAV2o8hp_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  NULL,
  NULL,
  null,
  null,
  3.8,
  3.5,
  3.5,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2025/12/A-22.jpg',
  true,
  '2025-12-09T17:42:13+09:00',
  '2025-12-09T17:42:13+09:00',
  '2025-12-13T12:45:35+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), (SELECT id FROM tags WHERE slug = 'hotel'));

-- Images for washington-hotels-ariake
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-11.jpg', '東京ベイ有明ワシントンホテルの客室から見る夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-8.jpg', 'お台場方面の夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-7.jpg', '有明テニスの森とブリリア有明スカイタワー', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-9.jpg', '東雲方面のビル夜景', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-10.jpg', '首都高速湾岸線を行き交う車両', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-23.jpg', '東京ベイ有明ワシントンホテルの客室から見る夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-25.jpg', '晴海方面のビル夜景', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-24.jpg', '東京ベイ有明ワシントンホテルの客室から見る夜景', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-4.jpg', '夕暮れ時の有明の街並み', 8);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-3.jpg', '夕暮れ時の有明の街並み', 9);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-5.jpg', '国際展示場駅と有明コロシアム', 10);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-2.jpg', '東京ベイ有明ワシントンホテルの客室', 11);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A.jpg', '東京ベイ有明ワシントンホテルの外観', 12);

-- FAQs for washington-hotels-ariake
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), 'どんな夜景が楽しめますか？見どころはどこですか？', '晴海方面のビル夜景やゆりかもめ線を行き交う車両が見所です。', 0);

-- Hotel info for washington-hotels-ariake
INSERT INTO spot_hotels (spot_id, checkin, checkout, amenity, affiliate_1, affiliate_2, affiliate_3, affiliate_4) VALUES ((SELECT id FROM spots WHERE slug = 'washington-hotels-ariake'), '14:00', '11:00', NULL, '<a class="panelLink-rakuten" href="https://hb.afl.rakuten.co.jp/hgc/224a57f2.20b5fb66.224a57f3.e2ba24d0/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1177%2F&link_type=hybrid_url&ut=eyJwYWdlIjoidXJsIiwidHlwZSI6Imh5YnJpZF91cmwiLCJjb2wiOjF9" rel="nofollow"><img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3676517&pid=889455127" height="1" width="0" border="0">楽天トラベルで空室を見る</a>', '<a class="panelLink-booking" href="https://px.a8.net/svt/ejp?a8mat=2NV04W+53YZH6+327I+HUD03&asid=a15060662290&a8ejpredirect=https%3A%2F%2Fow.a8.net%2Fs00000014283002%2Fredirect_v2.php%3Ftype%3Ddeeplink%26url%3Dhttps%253A%252F%252Fwww.booking.com%252Fhotel%252Fjp%252Ftokyo-bay-ariake-washingtonhotel.ja.html" rel="nofollow">Booking.comで空室を見る</a> <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=2NV04W+53YZH6+327I+HUKPU" alt="">', '<a class="panelLink-jaran" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3731104&pid=891439497&vc_url=https%3A%2F%2Fwww.jalan.net%2Fyad343292%2F" rel="nofollow">じゃらん.netで空室を見る</a>', '<a class="panelLink-ikkyu" href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3676517&pid=889450862&vc_url=https%3A%2F%2Fwww.ikyu.com%2F00080290%2F" rel="nofollow">一休.comで空室を見る</a>');

-- Post: 有明北緑道公園 (ariake-street)
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
  'ariake-street',
  '有明北緑道公園',
  'spot',
  (SELECT id FROM categories WHERE slug = 'koto'),
  NULL,
  '有明北緑道公園',
  'ライトアップされた緑道の奥に、レインボーブリッジや東京タワー、高層ビル群の絶景が広がる隠れた名所',
  '<p>有明西運河沿いにあるL字型の穴場夜景スポット。</p>
<p>広々とした公園内からはライトアップされたレインボーブリッジを眺めることができます。</p>
<p>さらに対岸には港区エリアの高層ビル群がずらりと立ち並んでおり、こちらも非常に美しい景色となっています。</p>
<p>注意したいのは専用駐車場がないほか、最寄駅からもやや距離がある点。</p>
<p>近くにある豊洲ぐるり公園の有料駐車場を利用し、そこから散歩を楽しみながら徒歩10分でアクセスするのがおすすめです。</p>
<p>なお公園入口は有明スポーツセンター横の階段や、ユニクロ物流基地・木村屋総本店の間の歩道など、やや分かりにくいのでGoogleMapなどで目的地検索をして移動するのをおすすめします。</p>',
  '東京都江東区有明１丁目６',
  'https://www.tptc.co.jp/park/02_06',
  '有明北緑道公園｜海上公園なび',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>ゆりかもめ線「市場前駅」徒歩15分</li>
<li>りんかい線「国際展示場」徒歩20分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12970.363699977468!2d139.7605940871582!3d35.637810000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018898ceebe1269%3A0x4cade65e4c0f22b9!2z5pyJ5piO5YyX57eR6YGT5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1765198484511!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.3,
  2.6,
  3.9,
  3.5,
  'https://nightscape.tokyo/wp-content/uploads/2025/12/A-16.jpg',
  true,
  '2025-12-09T16:46:27+09:00',
  '2025-12-09T16:46:27+09:00',
  '2025-12-09T16:49:22+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), (SELECT id FROM tags WHERE slug = 'park'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), (SELECT id FROM tags WHERE slug = 'date'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), (SELECT id FROM tags WHERE slug = 'rainbow-bridge'));

-- Images for ariake-street
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-16.jpg', 'ライトアップされたレインボーブリッジ', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-15.jpg', 'レインボーブリッジを見上げる', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-14.jpg', 'お台場方面の夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-18.jpg', '対岸に見える港区方面の高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-17.jpg', '対岸に見える港区方面の高層ビル群', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-19.jpg', '有明北緑道公園の雰囲気', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-20.jpg', '有明北緑道公園に設置されたベンチ', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/A-21.jpg', '有明北緑道公園のベンチとレインボーブリッジ', 7);

-- FAQs for ariake-street
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'レインボーブリッジや東京タワーを眺めることができます。', 0);
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'ariake-street'), '三脚を使って夜景を撮ることはできますか？', '三脚使っての撮影は禁止されていません。マナーを守って撮影を楽しみましょう。', 1);

-- Post: 展望ラウンジ アサヒスカイルーム (asahi-skyroom)
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
  'asahi-skyroom',
  '展望ラウンジ アサヒスカイルーム',
  'spot',
  (SELECT id FROM categories WHERE slug = 'sumida'),
  NULL,
  '展望ラウンジ アサヒスカイルーム',
  'ライトアップされた東京スカイツリー、浅草寺、隅田川に架かる橋など、浅草エリアのランドマークを一望できる穴場の展望ラウンジ。',
  '<p>浅草・吾妻橋にある、金のオブジェでおなじみのアサヒビール本社。そのビル最上階（22F）にあるのが、展望ラウンジ「アサヒスカイルーム」です。社員が行き交うフロアに一般利用できるラウンジがあり、初見だと少し意外性のある立地ですが、その分“知る人ぞ知る”感があります。</p>
<p>地上約100mのラウンジからは、隅田川を挟んでスカイツリー、浅草寺、川にかかる橋まで一望できます。特に夜は、ライトアップされたスカイツリーと川沿いの景色がきれいで、落ち着いた室内と相まって静かに景色を楽しめる空間でした。</p>
<p>ドリンクはアサヒスーパードライをはじめ、ドライプレミアム豊穣や黒ビール、ワイン、カクテル、ソフトドリンクまで一通り揃っています。軽食も充実しており、「景色メイン＋一杯」という使い方にちょうどいい内容。ワンドリンクでこの眺望を楽しめる点は、正直かなりコスパがいいと感じました。</p>
<p>混雑状況は時間帯で差があります。18時頃に訪れた際は訪日外国人も多く、20組ほどの待ちが発生していましたが、21時前後に再訪したところ待ち時間ゼロで入場できました。夕景〜夜景狙いなら、少し時間をずらすのが現実的です。</p>
<p>がっつり食事というより、「浅草エリアでのデートや散策の締めに、静かに一杯」という用途がハマる場所。観光地ど真ん中にありながら、騒がしさから一段離れた空間なので、景色を楽しみたい人には素直におすすめできます。</p>',
  '東京都墨田区吾妻橋１丁目２３−１ アサヒグループ本社ビル ２２ 階',
  'https://tabelog.com/tokyo/A1311/A131102/13022744/',
  '展望ラウンジ アサヒスカイルーム',
  NULL,
  NULL,
  NULL,
  NULL,
  '10:00 - 22:00',
  '年末年始・施設点検日（１月最終日曜日）・隅田川花火大会・他不定休日有',
  '1ドリンク制',
  '<ul>
<li>東京メトロ銀座線「浅草」より徒歩約3分</li>
<li>都営浅草線「浅草」・「本所吾妻橋」より徒歩5分</li>
</ul>',
  '無し（近隣の有料駐車場を利用）',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6650509980263!2d139.8003443!3d35.7098593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec5976452d9%3A0x7a430a5671dfb862!2z5bGV5pyb44Op44Km44Oz44K4IOOCouOCteODkuOCueOCq-OCpOODq-ODvOODoA!5e0!3m2!1sja!2sjp!4v1766936612455!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.5,
  4,
  3.8,
  'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-11.jpg',
  true,
  '2025-12-29T00:48:21+09:00',
  '2025-12-29T00:48:21+09:00',
  '2025-12-29T14:47:53+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), (SELECT id FROM tags WHERE slug = 'restaurant'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), (SELECT id FROM tags WHERE slug = 'tokyo-sky-tree'));

-- Images for asahi-skyroom
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-11.jpg', '展望ラウンジ アサヒスカイルームから眺める夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-14.jpg', 'ライトアップされた東京スカイツリー', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-10.jpg', 'ライトアップされた浅草寺', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-13.jpg', '隅田川にかかるライトアップされた橋', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusaa.jpg', 'ライトアップされた駒形橋', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/asakusa-15.jpg', '新宿方面のビル夜景', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/skyroom-entrance.jpg', '展望ラウンジ アサヒスカイルームの入り口', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/skyroom-inner.jpg', '展望ラウンジ アサヒスカイルームの雰囲気', 7);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'https://nightscape.tokyo/wp-content/uploads/2025/12/skyroom-up.jpg', 'エレベーターがある21Fから展望ラウンジへ上がるエスカレーター', 8);

-- FAQs for asahi-skyroom
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'asahi-skyroom'), 'どんな夜景が楽しめますか？見どころはどこですか？', 'ライトアップされた東京スカイツリー、浅草寺、隅田川に架かる橋など、浅草エリアのランドマークを一望することができます。', 0);

-- Post: 自由が丘 デュ アオーネ 屋上テラス (jiyugaoka-de-aone)
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
  'jiyugaoka-de-aone',
  '自由が丘 デュ アオーネ 屋上テラス',
  'spot',
  (SELECT id FROM categories WHERE slug = 'meguro'),
  NULL,
  '自由が丘 デュ アオーネ 屋上テラス',
  '自由が丘で遊んだ帰りに立ち寄りたい穴場の無料夜景スポット。',
  '<p></p>
2023年10月、自由が丘のピーコック跡地に新たなランドマークとして誕生したJIYUGAOKA de aone（自由が丘 デュ アオーネ）。
<p>館内には3階のガーデンテラスや屋上の「Harappa」など、自然を感じながら憩える開放的なスポットが充実しています。</p>
<p>夜を迎えれば、周囲に遮るものがない屋上からは自由が丘の柔らかな街灯りが広がり、心地よい開放感に包まれます。</p>
<p>特に南側にそびえる武蔵小杉のタワーマンション群の煌めきは眩しく、低層な街並みとの美しいコントラストを楽しむことができます。</p>
<p>空気が澄んだ日の夕暮れには西に富士山のシルエットが浮かび、トワイライトから夜景へと移ろう贅沢な時間は一番の見どころ。</p>
<p>ヒノキのウッドデッキや緑に囲まれた上質な空間は、デートや散策の合間に立ち寄る夜景スポットとして非常におすすめです。</p>',
  '東京都目黒区自由が丘 2-15-4',
  'https://jiyugaoka-de-aone.aeonmall.com/',
  '自由が丘 デュ アオーネ公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '22時まで',
  'なし',
  '無料',
  '<ul>
<li>東急東横線・大井町線「自由が丘」駅 正面口 徒歩2分</li>
</ul>',
  '<ul>
<li>駐車台数：49台</li>
<li>営業時間：7:00-23:30（23:30-翌7:00まで出入庫できません）</li>
<li>料金：500円/30分 ※最大料金はありません</li>
</ul>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.8066918138948!2d139.66661399999998!3d35.6078347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5160ee57361%3A0xa5daa90e37870550!2sJIYUGAOKA%20de%20aone!5e0!3m2!1sja!2sjp!4v1768126206598!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  2.8,
  3.2,
  3.2,
  3.4,
  'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-5.jpg',
  true,
  '2026-01-11T19:13:21+09:00',
  '2026-01-11T19:13:21+09:00',
  '2026-01-11T19:13:41+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for jiyugaoka-de-aone
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-5.jpg', '自由が丘 デュ アオーネの夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-7.jpg', '自由が丘 デュ アオーネの夜景', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-6.jpg', '自由が丘 デュ アオーネの夜景', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-8.jpg', '夕暮れ時の自由が丘 デュ アオーネ 屋上テラス', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-4.jpg', '夕暮れ時の自由が丘 デュ アオーネ 屋上テラス', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-3.jpg', 'ヒノキのウッドデッキが印象的なテラス', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka-2.jpg', '自由が丘 デュ アオーネ屋上テラスの雰囲気', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/jiyugaoka.jpg', '自由が丘 デュ アオーネの外観', 7);

-- FAQs for jiyugaoka-de-aone
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'jiyugaoka-de-aone'), 'どんな夜景が楽しめますか？見どころはどこですか？', '自由が丘の柔らかな街灯りをたのしむことができます。', 0);

-- Post: 多摩川浅間神社 見晴台 (tamagawa-asama-shirine)
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
  'tamagawa-asama-shirine',
  '多摩川浅間神社 見晴台',
  'spot',
  (SELECT id FROM categories WHERE slug = 'ota'),
  NULL,
  '多摩川浅間神社 見晴台',
  '多摩川越しに見える武蔵小杉方面のビル夜景や富士山が見所の穴場夜景スポット。神社へ参拝した帰りに立ち寄るのがおすすめ。',
  '<p>東急東横線「多摩川駅」から徒歩3分という絶好のロケーションにある多摩川浅間神社。</p>
<p>境内には、本殿のすぐそばに開放感あふれる見晴台（展望台）が設けられており、多摩川を眼下に180度のパノラマ夜景を堪能することができます。</p>
<p>見所は対岸の武蔵小杉方面にそびえ立つ高層ビル群。夜位なると明かりが灯り、オレンジ色にライトアップされた丸子橋との美しいコントラストを楽しむことができます。</p>
<p>また、空気の澄んだ晴れの日には富士山の姿も拝むことが可能。黄昏時に景色がとても美しいです。
<p>街灯が多く設置されており夜間でも明るく、治安も良いため、カップルからファミリーまで幅広い層におすすめできる落ち着いた雰囲気の場所です。</p>',
  '東京都大田区田園調布1-55-12',
  'https://www.sengenjinja.info/',
  '多摩川浅間神社公式サイト',
  NULL,
  NULL,
  NULL,
  NULL,
  '終日開放',
  'なし',
  '無料',
  '<ul>
<li>東急東横線・多摩川線・目黒線・南北線・三田線「多摩川駅」より徒歩2分</li>
</ul>',
  '駐車場スペースあり：約２０台',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.6296275776645!2d139.6687154!3d35.58753240000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f56a28feaf27%3A0xe848c5bb0a0c20a9!2z5aSa5pGp5bed5rWF6ZaT56We56S-!5e0!3m2!1sja!2sjp!4v1768125164167!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  NULL,
  NULL,
  NULL,
  NULL,
  null,
  null,
  3.6,
  3.2,
  3,
  3.3,
  'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-6.jpg',
  true,
  '2026-01-11T23:11:14+09:00',
  '2026-01-11T23:11:14+09:00',
  '2026-01-14T08:30:38+09:00'
);

INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), (SELECT id FROM tags WHERE slug = 'waterfront'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), (SELECT id FROM tags WHERE slug = 'mt-fuji'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), (SELECT id FROM tags WHERE slug = 'free'));
INSERT INTO spot_tags (spot_id, tag_id) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), (SELECT id FROM tags WHERE slug = 'date'));

-- Images for tamagawa-asama-shirine
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-6.jpg', '多摩川浅間神社 見晴台の夜景', 0);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-3.jpg', '多摩川浅間神社 見晴台の雰囲気', 1);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-5.jpg', '丸子橋を行き交う車両', 2);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-8.jpg', '丸子橋と高層ビル群', 3);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-4.jpg', '武蔵小杉方面のビル夜景', 4);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-7.jpg', '東横線の車両が行き交う様子', 5);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama-2.jpg', '多摩川浅間神社の見晴台から夕景を眺める人々', 6);
INSERT INTO spot_images (spot_id, url, alt, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'https://nightscape.tokyo/wp-content/uploads/2026/01/asama.jpg', '多摩川浅間神社の本殿', 7);

-- FAQs for tamagawa-asama-shirine
INSERT INTO spot_faqs (spot_id, question, answer, sort_order) VALUES ((SELECT id FROM spots WHERE slug = 'tamagawa-asama-shirine'), 'どんな夜景が楽しめますか？見どころはどこですか？', '多摩川越しに広がる武蔵小杉駅方面の高層ビル群や富士山が見所です。', 0);
