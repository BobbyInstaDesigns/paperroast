import React, { useState } from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { Mail, Lock, ArrowRight, User, UserPlus } from "lucide-react";

interface SignUpProps {
  onNavigate: (page: string) => void;
}

export const SignUp = ({ onNavigate }: SignUpProps) => {
  const [name, setName] = useState("");
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
            <h2 className="font-serif-heading font-black text-4xl uppercase tracking-tighter mb-2">New Subscription</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
            <p className="font-serif-body italic text-muted-foreground">
              "Join our community of buyers and sellers today."
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="block font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground">Full Name</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-secondary/30 border-b-2 border-primary/20 focus:border-primary outline-none py-3 pl-10 pr-4 font-serif-body transition-all placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

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
              <label className="block font-sans font-bold uppercase text-xs tracking-widest text-muted-foreground">Create Password</label>
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
              <p className="text-[10px] text-muted-foreground font-sans">Must be at least 8 characters long.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-4 font-serif-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Become a Subscriber <UserPlus className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-dashed border-primary/30 text-center relative z-10">
            <p className="font-serif-body text-sm text-muted-foreground mb-4">Already have a subscription?</p>
            <button
              onClick={() => onNavigate("signin")}
              className="inline-flex items-center gap-2 font-sans font-bold uppercase text-xs tracking-widest border-2 border-primary px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowRight className="w-3 h-3" /> Sign In
            </button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
