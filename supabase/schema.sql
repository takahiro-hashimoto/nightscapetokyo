-- nightscape.tokyo Supabase Schema
-- ACFフィールドグループをベースに正規化

-- カテゴリ（地域区分: 渋谷区、港区、etc）
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- タグ
CREATE TABLE tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- メインテーブル: スポット（ACF「概要」+「評価」統合）
CREATE TABLE spots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  type text NOT NULL DEFAULT 'spot' CHECK (type IN ('spot', 'hotel', 'event')),
  category_id uuid REFERENCES categories(id),
  content text,
  -- 概要
  name text,
  lead text,
  report text,
  address text,
  official_url text,
  official_label text,
  sns_url text,
  sns_label text,
  relation_url text,
  relation_label text,
  hours text DEFAULT '終日開放',
  holiday text DEFAULT 'なし',
  money text DEFAULT '無料',
  station text,
  parking text,
  map text,
  height text,
  movie text,
  asoview text,
  asoview_02 text,
  -- 位置情報
  latitude decimal(9,6),
  longitude decimal(9,6),
  -- 評価
  rating_beautiful decimal(2,1) DEFAULT 3.5,
  rating_access decimal(2,1),
  rating_atmosphere decimal(2,1),
  rating_cost decimal(2,1),
  -- メタ
  featured_image text,
  published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- スポットとタグの多対多
CREATE TABLE spot_tags (
  spot_id uuid REFERENCES spots(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (spot_id, tag_id)
);

-- 画像ギャラリー（ACF galleryフィールド）
CREATE TABLE spot_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  url text NOT NULL,
  alt text,
  sort_order int NOT NULL DEFAULT 0
);

-- FAQ（ACF FAQ_1〜6を正規化）
CREATE TABLE spot_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  sort_order int NOT NULL DEFAULT 0
);

-- ホテル情報（ACF「ホテル」グループ）
CREATE TABLE spot_hotels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  checkin text,
  checkout text,
  amenity text,
  affiliate_1 text,
  affiliate_2 text,
  affiliate_3 text,
  affiliate_4 text
);

-- 口コミ・レビュー
CREATE TABLE spot_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  name text NOT NULL,
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- イベント情報（ACF「イベント」グループ）
CREATE TABLE spot_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  start_date text,
  end_date text,
  place text,
  event_hour text
);

-- インデックス
CREATE INDEX idx_spots_category ON spots(category_id);
CREATE INDEX idx_spots_slug ON spots(slug);
CREATE INDEX idx_spots_published ON spots(published);
CREATE INDEX idx_spots_type ON spots(type);
CREATE INDEX idx_spot_images_spot ON spot_images(spot_id);
CREATE INDEX idx_spot_faqs_spot ON spot_faqs(spot_id);
CREATE INDEX idx_spot_tags_spot ON spot_tags(spot_id);
CREATE INDEX idx_spot_reviews_spot ON spot_reviews(spot_id);

-- RLS（Row Level Security）
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE spots ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE spot_events ENABLE ROW LEVEL SECURITY;

-- 読み取り専用ポリシー（anon/authenticated）
CREATE POLICY "Public read" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read" ON tags FOR SELECT USING (true);
CREATE POLICY "Public read" ON spots FOR SELECT USING (published = true);
CREATE POLICY "Public read" ON spot_tags FOR SELECT USING (true);
CREATE POLICY "Public read" ON spot_images FOR SELECT USING (true);
CREATE POLICY "Public read" ON spot_faqs FOR SELECT USING (true);
CREATE POLICY "Public read" ON spot_hotels FOR SELECT USING (true);
CREATE POLICY "Public read" ON spot_reviews FOR SELECT USING (true);
CREATE POLICY "Public read" ON spot_events FOR SELECT USING (true);

-- updated_at 自動更新トリガー
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER spots_updated_at
  BEFORE UPDATE ON spots
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
