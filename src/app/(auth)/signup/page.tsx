import { redirect } from "next/navigation";

// Redirect /signup → /login (our unified auth page handles both tabs)
export default function SignupRedirect() {
  redirect("/login");
}
