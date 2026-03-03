import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hvuzmyoszrrjqkyqwwqj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dXpteW9zenJyanFreXF3d3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMTM5OTksImV4cCI6MjA4Njg4OTk5OX0.8wxKsPoTPJpEotUAtF2jUsYvnEerakp4Jd5sE9PDRVM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
