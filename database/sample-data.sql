-- Full dataset has been migrated from outdatedFacts.ts
-- This file is kept for reference and future updates
-- Run `npm run db:migrate` to populate the database with all 171 facts
--
-- The database now contains facts across 53 categories including:
-- Nutrition (21), Technology (16), Medicine (14), Psychology (13),
-- Physics (8), Biology (8), Neuroscience (6), History (6), and many more
--
-- Migration completed: All facts from src/data/outdatedFacts.ts have been successfully
-- transferred to the facts table with proper field mapping and deduplication

-- Refresh the materialized view to include initial empty counts
REFRESH MATERIALIZED VIEW vote_counts;