import React from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { MOCK_LISTINGS, CATEGORIES } from "../data/mock";
import { ArrowRight } from "lucide-react";

interface AllCategoriesProps {
  onNavigate: (page: string, id?: string) => void;
}

const CATEGORY_TAGLINES: Record<string, string> = {
  Antiques:   "Relics, curios & objects of enduring distinction",
  Automotive: "Motorcars, velocipedes & mechanical conveyances",
  Employment: "Situations vacant & professional engagements",
  Housing:    "Domiciles, lodgings & dwellings of all persuasions",
  Services:   "Skilled hands & professional practitioners for hire",
  "For Sale": "General merchandise, goods & sundry wares",
  Community:  "Notices, announcements & civic correspondence",
};

const CATEGORY_IMAGES: Record<string, string> = {
  Antiques:   "https://images.unsplash.com/photo-1520263118674-c92f735555c1?w=600&q=80",
  Automotive: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80",
  Employment: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
  Housing:    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  Services:   "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=600&q=80",
  "For Sale": "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&q=80",
  Community:  "https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=600&q=80",
};

export const AllCategories = ({ onNavigate }: AllCategoriesProps) => {
  const totalListings = MOCK_LISTINGS.length;

  return (
    <NewsContainer>
      {/* Header */}
      <div className="border-b-4 border-double border-primary pb-6 mb-10">
        <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Index</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif-heading text-5xl md:text-6xl font-black tracking-tight leading-none">
              All Categories
            </h1>
            <p className="font-serif-body italic text-muted-foreground mt-2 text-lg">
              Every section of the daily classifieds, at a glance
            </p>
          </div>
          <div className="text-right font-sans text-xs uppercase tracking-widest text-muted-foreground">
            <div className="font-bold text-3xl text-foreground">{totalListings}</div>
            <div>total listings</div>
          </div>
        </div>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {CATEGORIES.map((cat) => {
          const count = MOCK_LISTINGS.filter(l => l.category === cat).length;
          const recent = MOCK_LISTINGS
            .filter(l => l.category === cat)
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 3);

          return (
            <button
              key={cat}
              onClick={() => onNavigate("category", cat)}
              className="group text-left border border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-card overflow-hidden"
            >
              {/* Cover image */}
              <div className="w-full h-40 overflow-hidden border-b border-border relative">
                <img
                  src={CATEGORY_IMAGES[cat]}
                  alt={cat}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/50 px-2 py-0.5">
                    {count} {count === 1 ? "listing" : "listings"}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h2 className="font-serif-heading text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                    {cat}
                  </h2>
                  <ArrowRight className="w-5 h-5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="font-serif-body italic text-muted-foreground text-sm mb-4">
                  {CATEGORY_TAGLINES[cat]}
                </p>

                {/* Recent listings preview */}
                {recent.length > 0 && (
                  <ul className="space-y-1 border-t border-border/50 pt-3">
                    {recent.map(l => (
                      <li key={l.id} className="flex justify-between items-baseline gap-2 text-xs font-sans">
                        <span className="text-foreground/70 truncate">{l.title}</span>
                        <span className="text-muted-foreground shrink-0">{l.price}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif-body italic text-muted-foreground">
          "Can't find what you're looking for? Place your own advertisement."
        </p>
        <button
          onClick={() => onNavigate("post-ad")}
          className="bg-[#FFEA00] text-black px-8 py-3 font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Place an Ad
        </button>
      </div>
    </NewsContainer>
  );
};
