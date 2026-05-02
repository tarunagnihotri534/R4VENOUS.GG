import { createClient } from "@supabase/supabase-js";

// ⚠️ Server-only — DO NOT import this in any "use client" component.
// Only use in Server Actions, API route handlers, or server-side code.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
