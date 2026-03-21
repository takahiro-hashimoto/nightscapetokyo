-- 多言語翻訳テーブル
CREATE TABLE spot_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  spot_id uuid NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
  locale text NOT NULL CHECK (locale IN ('en', 'ko', 'zh-Hant', 'zh-Hans')),
  title text,
  name text,
  lead text,
  report text,
  content text,
  address text,
  station text,
  parking text,
  hours text,
  holiday text,
  money text,
  height text,
  faqs jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(spot_id, locale)
);

CREATE INDEX idx_spot_translations_spot ON spot_translations(spot_id);

ALTER TABLE spot_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON spot_translations FOR SELECT USING (true);

-- updated_at 自動更新
CREATE TRIGGER spot_translations_updated_at
  BEFORE UPDATE ON spot_translations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
