import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function safeNext(raw: string | null): string {
  if (!raw) return "/";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

const Login = () => {
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.href = next;
    });
  }, [next]);

  const returnUrl = `${window.location.origin}${next}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
        setBusy(false);
        return;
      }
      window.location.href = next;
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: returnUrl },
      });
      setBusy(false);
      setMessage(error ? error.message : "Check your email to confirm your account, then sign in.");
    }
  }

  async function google() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: returnUrl },
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-navy-gradient px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
        <h1 className="font-display text-2xl font-bold text-white mb-2">
          {mode === "signin" ? "Sign in" : "Create an account"}
        </h1>
        <p className="text-white/60 text-sm mb-6">Access Triumph Agency agent integrations.</p>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80">Email</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white/80">Password</Label>
            <Input id="password" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" disabled={busy} className="w-full">
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
          </Button>
        </form>

        <Button variant="outline" onClick={google} className="w-full mt-3">
          Continue with Google
        </Button>

        {message && <p className="mt-4 text-sm text-white/80">{message}</p>}

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 text-sm text-accent underline"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
};

export default Login;
