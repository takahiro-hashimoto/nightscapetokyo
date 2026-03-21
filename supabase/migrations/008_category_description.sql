-- Add description column to categories for area intro text
ALTER TABLE categories ADD COLUMN IF NOT EXISTS description TEXT;
