import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uaasskuwxnanokflofhf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYXNza3V3eG5hbm9rZmxvZmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODg2NjEsImV4cCI6MjA1NTg2NDY2MX0.A6_nOr4CRQtird5GPwjzi-wjXBQdyqiCN-sGoqYPZGY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
