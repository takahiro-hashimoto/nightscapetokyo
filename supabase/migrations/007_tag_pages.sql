-- タグページ管理テーブル群

-- コアテーブル: 1タグ1ページ
CREATE TABLE tag_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_id uuid NOT NULL REFERENCES tags(id) ON DELETE CASCADE UNIQUE,
  title text NOT NULL,
  breadcrumb text NOT NULL,
  hero_image text,
  updated_at_label text,
  pr_notice text,
  lead text NOT NULL,
  map_heading text,
  map_intro text,
  map_iframe_html text,
  faq_heading text,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_tag_pages_tag ON tag_pages(tag_id);

ALTER TABLE tag_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_pages" ON tag_pages FOR SELECT USING (true);

CREATE TRIGGER tag_pages_updated_at
  BEFORE UPDATE ON tag_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- PRバナー (1対1)
CREATE TABLE tag_page_pr_banners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_page_id uuid NOT NULL REFERENCES tag_pages(id) ON DELETE CASCADE UNIQUE,
  heading text NOT NULL,
  image text,
  body text[] NOT NULL DEFAULT '{}'
);

ALTER TABLE tag_page_pr_banners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_pr_banners" ON tag_page_pr_banners FOR SELECT USING (true);

-- PRバナーリンク
CREATE TABLE tag_page_pr_banner_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pr_banner_id uuid NOT NULL REFERENCES tag_page_pr_banners(id) ON DELETE CASCADE,
  label text NOT NULL,
  href text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0
);

ALTER TABLE tag_page_pr_banner_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_pr_banner_links" ON tag_page_pr_banner_links FOR SELECT USING (true);

-- セクション
CREATE TABLE tag_page_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_page_id uuid NOT NULL REFERENCES tag_pages(id) ON DELETE CASCADE,
  key text NOT NULL,
  heading text NOT NULL,
  intro text,
  sort_order integer NOT NULL DEFAULT 0
);

CREATE INDEX idx_tag_page_sections_page ON tag_page_sections(tag_page_id);

ALTER TABLE tag_page_sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_sections" ON tag_page_sections FOR SELECT USING (true);

-- セクション内スポット
CREATE TABLE tag_page_section_spots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid NOT NULL REFERENCES tag_page_sections(id) ON DELETE CASCADE,
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  description text,
  sort_order integer NOT NULL DEFAULT 0
);

CREATE INDEX idx_tag_page_section_spots_section ON tag_page_section_spots(section_id);

ALTER TABLE tag_page_section_spots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_section_spots" ON tag_page_section_spots FOR SELECT USING (true);

-- FAQ
CREATE TABLE tag_page_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_page_id uuid NOT NULL REFERENCES tag_pages(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0
);

CREATE INDEX idx_tag_page_faqs_page ON tag_page_faqs(tag_page_id);

ALTER TABLE tag_page_faqs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_faqs" ON tag_page_faqs FOR SELECT USING (true);

-- 多言語翻訳
CREATE TABLE tag_page_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_page_id uuid NOT NULL REFERENCES tag_pages(id) ON DELETE CASCADE,
  locale text NOT NULL CHECK (locale IN ('en', 'ko', 'zh-Hant', 'zh-Hans')),
  title text,
  breadcrumb text,
  pr_notice text,
  lead text,
  faq_heading text,
  map_heading text,
  map_intro text,
  pr_banner jsonb,
  sections jsonb,
  descriptions jsonb,
  faqs jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(tag_page_id, locale)
);

CREATE INDEX idx_tag_page_translations_page ON tag_page_translations(tag_page_id);

ALTER TABLE tag_page_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read tag_page_translations" ON tag_page_translations FOR SELECT USING (true);

CREATE TRIGGER tag_page_translations_updated_at
  BEFORE UPDATE ON tag_page_translations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
