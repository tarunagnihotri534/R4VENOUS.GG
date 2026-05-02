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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // ── Auth Handlers ──
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setLoading(true);
    setError(null);
    setInfo(null);

    if (mode === "register") {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: { full_name: displayName, display_name: displayName },
        },
      });

      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setStep("otp");
        setInfo(`A 6-digit verification code was sent to ${email}.`);
      }
    } else {
      // Login mode
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        window.location.href = "/";
      }
    }
  };

  // ── STEP 2: Verify OTP (Registration Only) ──
  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) return;
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: otp.trim(),
      type: "signup",
    });

    setLoading(false);
    if (error) {
      setError("Invalid or expired code. Please try again.");
    } else {
      await supabase.auth.signOut(); // Make sure user is logged out so they can log in
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        switchMode("login");
      }, 3000);
    }
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setStep("email");
    setError(null);
    setInfo(null);
    setOtp("");
    setPassword("");
    setConfirmPassword("");
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
                  : "Verify Your Account"}
              </h1>
              <p className="text-gray-500 text-xs leading-relaxed">
                {step === "email"
                  ? mode === "login" ? "Enter your credentials to access your account." : "Create a new account to join the community."
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
              <form onSubmit={handleAuth} className="space-y-5">
                {mode === "register" && (
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                      Your Name
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
                    {mode === "login" ? "Email Address" : "Your Email"}
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

                <div>
                  <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className={`w-full bg-white/5 border ${mode === 'register' && password.length > 0 && password.length < 8 ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary/70'} text-white text-sm py-3 pl-10 pr-4 placeholder-gray-600 focus:outline-none focus:bg-primary/5 transition-all`}
                    />
                  </div>
                  {mode === "register" && password.length > 0 && password.length < 8 && (
                    <p className="text-red-400 text-[10px] mt-1.5 font-bold tracking-wider">Password must be at least 8 characters.</p>
                  )}
                </div>

                {mode === "register" && (
                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 text-white text-sm py-3 pl-10 pr-4 placeholder-gray-600 focus:outline-none focus:border-primary/70 focus:bg-primary/5 transition-all"
                      />
                    </div>
                  </div>
                )}

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
                      {mode === "login" ? <LogIn size={14} /> : <UserPlus size={14} />}
                      {mode === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase">Or Continue With</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <button
                  type="button"
                  onClick={async () => {
                    setLoading(true);
                    await supabase.auth.signInWithOAuth({
                      provider: "google",
                      options: {
                        redirectTo: `${window.location.origin}/`,
                      },
                    });
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black py-3.5 font-black text-[11px] tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </button>
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

        {/* Success Popup */}
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${showSuccessPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-[#0a0a0a] border border-primary/30 p-10 flex flex-col items-center justify-center rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3)] transform transition-transform duration-500 max-w-sm w-full mx-4" style={{ transform: showSuccessPopup ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)" }}>
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-white mb-2 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>Registered Successfully</h2>
            <p className="text-gray-400 text-xs text-center font-bold tracking-widest uppercase">Redirecting to login...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
