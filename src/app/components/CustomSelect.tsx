import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | Option)[];
  heading?: string;
  placeholder?: string;
  className?: string;
  dropdownWidth?: string;
}

export const CustomSelect = ({
  value,
  onChange,
  options,
  heading,
  placeholder = "Select…",
  className = "",
  dropdownWidth = "w-64",
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const normalized: Option[] = options.map((o) =>
    typeof o === "string" ? { value: o, label: o } : o
  );
  const selected = normalized.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border-b-2 border-border bg-transparent py-2 px-0 font-serif-body text-sm focus:outline-none focus:border-primary hover:border-primary/60 transition-colors cursor-pointer group"
      >
        <span className={selected ? "text-foreground" : "text-muted-foreground/50"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ml-2 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className={`absolute top-full left-0 mt-1 bg-background border-2 border-primary p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] z-50 ${dropdownWidth}`}>
          {heading && (
            <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground mb-2 px-2 border-b border-border pb-2">
              {heading}
            </div>
          )}
          <div className="max-h-60 overflow-y-auto">
            {normalized.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full flex items-center justify-between text-left px-3 py-2 text-sm hover:bg-secondary transition-colors font-serif-body ${
                  opt.value === value ? "font-bold bg-secondary/50" : ""
                }`}
              >
                <span>{opt.label}</span>
                {opt.value === value && <Check className="w-3 h-3 shrink-0 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
