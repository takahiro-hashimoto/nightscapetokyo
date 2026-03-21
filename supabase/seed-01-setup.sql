-- ==========================================================
-- nightscape.tokyo Seed Data
-- Generated from WordPress XML export
-- Date: 2026-03-06
-- Posts: 243, Categories: 25, Tags: 18
-- ==========================================================

-- Clean existing data (order matters for FK constraints)
TRUNCATE spot_events, spot_hotels, spot_reviews, spot_faqs, spot_images, spot_tags, spots, tags, categories CASCADE;

-- ─── Categories ─────────────────────────────────────────────
INSERT INTO categories (id, name, slug) VALUES
  (gen_random_uuid(), '葛飾区', 'katsushika'),
  (gen_random_uuid(), '墨田区', 'sumida'),
  (gen_random_uuid(), '千代田区', 'chiyoda'),
  (gen_random_uuid(), '江東区', 'koto'),
  (gen_random_uuid(), '港区', 'minato'),
  (gen_random_uuid(), '中央区', 'chuo'),
  (gen_random_uuid(), '北区', 'kita'),
  (gen_random_uuid(), '荒川区', 'arakawa'),
  (gen_random_uuid(), '台東区', 'taito'),
  (gen_random_uuid(), '江戸川区', 'edogawa'),
  (gen_random_uuid(), '渋谷区', 'shibuya'),
  (gen_random_uuid(), '新宿区', 'shinjuku'),
  (gen_random_uuid(), '中野区', 'nakano'),
  (gen_random_uuid(), '目黒区', 'meguro'),
  (gen_random_uuid(), '世田谷区', 'setagaya'),
  (gen_random_uuid(), '練馬区', 'nerima'),
  (gen_random_uuid(), '品川区', 'shinagawa'),
  (gen_random_uuid(), 'その他エリア', 'other'),
  (gen_random_uuid(), '特集記事', 'pickup'),
  (gen_random_uuid(), '豊島区', 'toshima'),
  (gen_random_uuid(), '横浜', 'yokohama'),
  (gen_random_uuid(), '撮影機材・ノウハウ', 'article'),
  (gen_random_uuid(), 'イベント', 'event'),
  (gen_random_uuid(), '文京区', 'bunkyo'),
  (gen_random_uuid(), '大田区', 'ota');

-- ─── Tags ───────────────────────────────────────────────────
INSERT INTO tags (id, name, slug) VALUES
  (gen_random_uuid(), 'ウォーターフロント', 'waterfront'),
  (gen_random_uuid(), '無料スポット', 'free'),
  (gen_random_uuid(), 'デート向け', 'date'),
  (gen_random_uuid(), 'ドライブ向け', 'drive'),
  (gen_random_uuid(), '東京スカイツリーが見える', 'tokyo-sky-tree'),
  (gen_random_uuid(), '展望台', 'observatory'),
  (gen_random_uuid(), '東京駅が見える', 'tokyo-station'),
  (gen_random_uuid(), '富士山が見える', 'mt-fuji'),
  (gen_random_uuid(), 'レインボーブリッジが見える', 'rainbow-bridge'),
  (gen_random_uuid(), '東京タワーが見える', 'tokyo-tower'),
  (gen_random_uuid(), '公園・広場', 'park'),
  (gen_random_uuid(), '東京ゲートブリッジが見える', 'gate-bridge'),
  (gen_random_uuid(), '東京の夜景が綺麗なホテル', 'hotel'),
  (gen_random_uuid(), '渋谷スクランブル交差点が見える', 'scramble-intersection'),
  (gen_random_uuid(), '夜桜のライトアップ', 'cherry-blossoms'),
  (gen_random_uuid(), '紅葉のライトアップ', 'autumn-leaves'),
  (gen_random_uuid(), 'イルミネーション', 'illumination'),
  (gen_random_uuid(), '夜景が綺麗なレストラン', 'restaurant');

-- ─── Spots ──────────────────────────────────────────────────

