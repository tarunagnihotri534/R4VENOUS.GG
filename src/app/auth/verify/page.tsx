import Link from "next/link";
import { MailCheck, ArrowRight } from "lucide-react";

export default function VerifyPage() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 min-h-[calc(100vh-4rem)]">
      <div className="relative z-10 w-full max-w-md text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative bg-[#0a0a0a] border border-white/10">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="p-10">

            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MailCheck className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-2xl font-black uppercase text-white mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
              Check Your Email
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              A verification link has been sent to your email address from{" "}
              <span className="text-white font-bold">R4VENEOUS ESPORTS</span>.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed mb-8">
              Click the link in the email to activate your account. The link expires in 24 hours.
              Check your spam folder if you don&apos;t see it.
            </p>

            <div className="space-y-3">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white py-3 font-black text-xs tracking-widest uppercase transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)" }}
              >
                Back to Login <ArrowRight size={14} />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center w-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 py-3 text-xs font-bold tracking-widest uppercase transition-all"
              >
                Return to Home
              </Link>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
