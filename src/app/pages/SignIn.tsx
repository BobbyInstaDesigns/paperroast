import React, { useState } from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { Mail, Lock, ArrowRight, User } from "lucide-react";

interface SignInProps {
  onNavigate: (page: string) => void;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const SignIn = ({ onNavigate }: SignInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("dashboard");
  };

  return (
    <NewsContainer className="max-w-md mx-auto py-12">
      <div className="border-4 border-double border-primary p-1 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="border border-primary p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-primary/20 -translate-x-8 -translate-y-8 rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-primary/20 translate-x-8 translate-y-8 rotate-45"></div>

          <div className="text-center mb-8 relative z-10">
            <h2 className="font-serif-heading font-black text-4xl uppercase tracking-tighter mb-2">Subscriber Login</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
            <p className="font-serif-body italic text-muted-foreground">
              "Access your account and manage your classifieds."
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6 relative z-10">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border-2 border-border bg-background hover:bg-secondary/40 py-3 px-4 font-sans font-bold uppercase text-xs tracking-widest transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <GoogleIcon /> Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border-2 border-[#1877F2]/40 bg-[#1877F2]/5 hover:bg-[#1877F2]/10 py-3 px-4 font-sans font-bold uppercase text-xs tracking-widest transition-colors shadow-[2px_2px_0px_0px_rgba(24,119,242,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] text-[#1877F2]"
            >
              <FacebookIcon /> Continue with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="flex-1 h-px border-t border-dashed border-primary/30" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">or sign in with email</span>
            <div className="flex-1 h-px border-t border-dashed border-primary/30" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="block font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary/30 border-b-2 border-primary/20 focus:border-primary outline-none py-3 pl-10 pr-4 font-serif-body transition-all placeholder:text-muted-foreground/50"
                  placeholder="citizen@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground">Password</label>
                <button type="button" className="text-xs font-serif-body italic hover:underline text-muted-foreground">Forgot Code?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary/30 border-b-2 border-primary/20 focus:border-primary outline-none py-3 pl-10 pr-4 font-serif-body transition-all placeholder:text-muted-foreground/50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-4 font-serif-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Access Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-dashed border-primary/30 text-center relative z-10">
            <p className="font-serif-body text-sm text-muted-foreground mb-4">Not yet a subscriber?</p>
            <button
              onClick={() => onNavigate("signup")}
              className="inline-flex items-center gap-2 font-sans font-bold uppercase text-xs tracking-widest border-2 border-primary px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <User className="w-3 h-3" /> Register Today
            </button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
