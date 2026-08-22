
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Correct API URL for project ID: dfrqmwytnseckrcjrwca
const SUPABASE_URL = 'https://dfrqmwytnseckrcjrwca.supabase.co';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcnFtd3l0bnNlY2tyY2pyd2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwNTk3OTcsImV4cCI6MjEwMjYzNTc5N30.uVaBe7ze07SZbWtD7ygtLboyQD8n_3v_jlMae_N7Rnw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);