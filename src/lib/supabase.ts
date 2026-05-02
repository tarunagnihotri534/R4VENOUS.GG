import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// ✅ Safe to use in Client Components and Server Components
// We use a fallback empty string to prevent build crashes, 
// though the client will require actual values to function in runtime.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

