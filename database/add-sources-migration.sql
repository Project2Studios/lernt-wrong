-- Migration to add source fields to existing facts table
-- Run this if the source and source_url columns don't exist yet

-- Check if columns exist and add them if they don't
DO $$
BEGIN
    -- Add source column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'facts' AND column_name = 'source') THEN
        ALTER TABLE facts ADD COLUMN source TEXT;
    END IF;

    -- Add source_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                   WHERE table_name = 'facts' AND column_name = 'source_url') THEN
        ALTER TABLE facts ADD COLUMN source_url TEXT;
    END IF;
END $$;