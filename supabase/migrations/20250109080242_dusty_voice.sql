/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `source` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for authenticated users to read all data
    - Add policy for unauthenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'coming_soon_page',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow unauthenticated users to insert into waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);