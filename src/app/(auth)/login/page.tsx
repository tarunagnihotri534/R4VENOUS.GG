"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import {
  Mail, ArrowRight, Shield, CheckCircle,
  KeyRound, RotateCcw, LogIn, UserPlus
} from "lucide-react";

type Step = "email" | "otp";
type Mode = "login" | "register";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [step, setStep] = useState<Step>("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [otp, setOtp] = useState("");

  // ── STEP 1: Send OTP to email ──
  const sendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);
    setInfo(null);

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        shouldCreateUser: true,
        data: mode === "register" ? { full_name: displayName, display_name: displayName } : undefined,
      },
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setStep("otp");
      setInfo(`A 6-digit code was sent to ${email}. Check your inbox (and spam folder).`);
    }
  };

  // ── STEP 2: Verify OTP ──
  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) return;
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: otp.trim(),
      type: "email",
    });

    setLoading(false);
    if (error) {
      setError("Invalid or expired code. Please try again.");
    } else {
      // Redirect to home on success
      window.location.href = "/";
    }
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setStep("email");
    setError(null);
    setInfo(null);
    setOtp("");
  };

  return (
    <div className="flex-1 flex items-center justify-center relative min-h-[calc(100vh-4rem)] px-4 py-12 bg-black">
      {/* Ambient glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 justify-center mb-8 group">
          <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-shadow">
            <div className="w-4 h-4 bg-black -rotate-45" />
          </div>
          <div className="text-left">
            <span className="text-lg font-black uppercase tracking-tight text-white block leading-none" style={{ fontFamily: "var(--font-montserrat)" }}>R4VENEOUS</span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-primary uppercase">ESPORTS</span>
          </div>
        </Link>

        {/* Auth Card */}
        <div className="bg-[#060606] border border-white/10 shadow-[0_25px_80px_rgba(168,85,247,0.08)]">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="p-8">

            {/* Mode tabs */}
            <div className="flex border border-white/10 mb-8">
              <button
                onClick={() => switchMode("login")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-black tracking-widest uppercase transition-all ${
                  mode === "login"
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <LogIn size={12} /> Sign In
              </button>
              <button
                onClick={() => switchMode("register")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-black tracking-widest uppercase transition-all ${
                  mode === "register"
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                }`}
              >
                <UserPlus size={12} /> Register
              </button>
            </div>

            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-2xl font-black uppercase text-white mb-1 leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                {step === "email"
                  ? mode === "login" ? "Welcome Back" : "Join The Roster"
                  : "Enter Your Code"}
              </h1>
              <p className="text-gray-500 text-xs leading-relaxed">
                {step === "email"
                  ? "No passwords needed — we'll send a one-time code to your email."
                  : "We've sent a 6-digit verification code to your inbox."}
              </p>
            </div>

            {/* Info banner */}
            {info && (
              <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/30 mb-5">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-xs leading-relaxed">{info}</p>
              </div>
            )}

            {/* Error banner */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs mb-5 leading-relaxed">
                {error}
              </div>
            )}

            {/* ── STEP 1: Email form ── */}
            {step === "email" && (
              <form onSubmit={sendOtp} className="space-y-5">
                {mode === "register" && (
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      required
                      placeholder="Your gamer tag"
                      className="w-full bg-white/5 border border-white/10 text-white text-sm py-3 px-4 placeholder-gray-600 focus:outline-none focus:border-primary/70 focus:bg-primary/5 transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 text-white text-sm py-3 pl-10 pr-4 placeholder-gray-600 focus:outline-none focus:border-primary/70 focus:bg-primary/5 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 font-black text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] disabled:opacity-50 disabled:pointer-events-none"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)" }}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Mail size={14} />
                      {mode === "login" ? "Send Login Code" : "Send Verification Code"}
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>

                {/* What to expect */}
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2">
                  <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase">What happens next</p>
                  {["We send a 6-digit OTP to your email", "Enter the code on the next screen", "You're instantly logged in — no password needed"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-primary/20 text-primary text-[9px] font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-[11px] text-gray-500">{s}</span>
                    </div>
                  ))}
                </div>
              </form>
            )}

            {/* ── STEP 2: OTP form ── */}
            {step === "otp" && (
              <form onSubmit={verifyOtp} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                    6-Digit Code
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      required
                      placeholder="123456"
                      maxLength={6}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      className="w-full bg-white/5 border border-white/10 text-white text-2xl font-black py-4 pl-10 pr-4 tracking-[0.5em] placeholder-gray-700 focus:outline-none focus:border-primary/70 focus:bg-primary/5 transition-all text-center"
                    />
                  </div>
                  <p className="text-[10px] text-gray-600 mt-1.5 text-center">
                    Sent to <span className="text-gray-400">{email}</span>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.length < 6}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 font-black text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] disabled:opacity-50 disabled:pointer-events-none"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)" }}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Shield size={14} /> Verify & Sign In <ArrowRight size={14} /></>
                  )}
                </button>

                {/* Resend */}
                <div className="flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => { setStep("email"); setError(null); setInfo(null); setOtp(""); }}
                    className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors font-bold tracking-widest uppercase text-[10px]"
                  >
                    <RotateCcw size={11} /> Change Email
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      setError(null);
                      setLoading(true);
                      await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: true } });
                      setLoading(false);
                      setInfo("A new code has been sent to your email.");
                    }}
                    className="flex items-center gap-1.5 text-primary hover:text-white transition-colors font-bold tracking-widest uppercase text-[10px]"
                  >
                    <Mail size={11} /> Resend Code
                  </button>
                </div>
              </form>
            )}

            {/* Trust row */}
            <div className="flex items-center justify-center gap-4 mt-7 pt-5 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-gray-700">
                <Shield size={10} />
                <span className="text-[9px] font-bold tracking-widest uppercase">End-to-End Secure</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5 text-gray-700">
                <Mail size={10} />
                <span className="text-[9px] font-bold tracking-widest uppercase">No Password Required</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <span className="text-[9px] font-bold tracking-widest text-gray-700 uppercase">Free via Supabase</span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-5">
          {mode === "login" ? (
            <>New here?{" "}
              <button onClick={() => switchMode("register")} className="text-primary hover:text-white font-bold transition-colors">Create an account</button>
            </>
          ) : (
            <>Already a member?{" "}
              <button onClick={() => switchMode("login")} className="text-primary hover:text-white font-bold transition-colors">Sign in</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
