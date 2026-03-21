-- Add label columns for translated link labels
ALTER TABLE spot_translations ADD COLUMN official_label text;
ALTER TABLE spot_translations ADD COLUMN sns_label text;
ALTER TABLE spot_translations ADD COLUMN relation_label text;
