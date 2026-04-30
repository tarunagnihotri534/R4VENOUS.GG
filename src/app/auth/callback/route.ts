import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const type = searchParams.get("type");
  const next = searchParams.get("next") ?? "/";

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Password recovery redirect
      if (type === "recovery") {
        return NextResponse.redirect(new URL("/auth/reset-password", request.url));
      }
      // Email confirmation or OAuth success
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  // Error fallback
  return NextResponse.redirect(
    new URL(`/login?error=auth_callback_failed`, request.url)
  );
}
