-- 画像alt翻訳カラム追加
ALTER TABLE spot_translations ADD COLUMN image_alts jsonb;
-- image_alts format: [{ "sort_order": 0, "alt": "translated alt" }, ...]
