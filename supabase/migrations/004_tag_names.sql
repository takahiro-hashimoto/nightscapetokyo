-- Add tag_names column for translated tag names
ALTER TABLE spot_translations ADD COLUMN tag_names jsonb;
