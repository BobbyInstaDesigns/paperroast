import React, { useState } from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { MOCK_LISTINGS, CATEGORIES } from "../data/mock";
import { MapPin, Calendar, ArrowLeft, Search } from "lucide-react";
import Stack from "../components/Stack";

interface CategoryPageProps {
  category: string;
  onNavigate: (page: string, id?: string) => void;
  userLocation: string;
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

export const CategoryPage = ({ category, onNavigate, userLocation }: CategoryPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "price">("date");

  const listings = MOCK_LISTINGS.filter(l => {
    const matchesCategory = l.category === category;
    const matchesLocation = userLocation === "All Locations" || l.location === userLocation;
    const matchesSearch =
      l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const sorted = [...listings].sort((a, b) => {
    if (sortBy === "date") return b.date.localeCompare(a.date);
    const priceVal = (p: string) => parseFloat(p.replace(/[^0-9.]/g, "")) || 0;
    return priceVal(a.price) - priceVal(b.price);
  });

  const otherCategories = CATEGORIES.filter(c => c !== category);

  return (
    <NewsContainer>
      {/* Category masthead */}
      <div className="mb-10">
        <button
          onClick={() => onNavigate("home")}
          className="mb-4 flex items-center gap-2 hover:underline font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground"
        >
          <ArrowLeft className="w-3 h-3" /> Front Page
        </button>

        <div className="border-b-4 border-double border-primary pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Section
              </p>
              <h1 className="font-serif-heading text-5xl md:text-6xl font-black tracking-tight leading-none">
                {category}
              </h1>
              <p className="font-serif-body italic text-muted-foreground mt-2 text-lg">
                {CATEGORY_TAGLINES[category] ?? "Browse all listings in this section"}
              </p>
            </div>
            <div className="text-right font-sans text-xs uppercase tracking-widest text-muted-foreground">
              <div className="font-bold text-3xl text-foreground">{sorted.length}</div>
              <div>{sorted.length === 1 ? "listing" : "listings"} {userLocation !== "All Locations" ? `in ${userLocation}` : "available"}</div>
            </div>
          </div>
        </div>

        {/* Search + Sort bar */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center bg-secondary/30 border border-border p-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={`Search ${category.toLowerCase()}…`}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background font-serif-body focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">Sort:</span>
            <button
              onClick={() => setSortBy("date")}
              className={`px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest border transition-colors ${sortBy === "date" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"}`}
            >
              Newest
            </button>
            <button
              onClick={() => setSortBy("price")}
              className={`px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest border transition-colors ${sortBy === "price" ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"}`}
            >
              Price
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Listings grid */}
        <div className="md:col-span-2">
          {sorted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sorted.map(listing => (
                <article
                  key={listing.id}
                  className="flex flex-col border border-border group cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-card"
                  onClick={e => {
                    if ((e.target as HTMLElement).closest("button")) return;
                    onNavigate("detail", listing.id);
                  }}
                >
                  <div className="w-full h-44 bg-muted flex-shrink-0 overflow-hidden relative border-b border-border">
                    {listing.images.length > 0 ? (
                      <div className="w-full h-full p-2">
                        <Stack
                          randomRotation
                          sendToBackOnClick
                          cards={listing.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={listing.title}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                              className="grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          ))}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow p-4 flex flex-col">
                    <div className="flex justify-between items-start w-full mb-1">
                      <h3 className="font-serif-heading text-lg font-bold group-hover:underline decoration-2 underline-offset-4 line-clamp-1 flex-1">
                        {listing.title}
                      </h3>
                      <span className="font-serif-heading font-bold text-lg shrink-0 ml-2">{listing.price}</span>
                    </div>
                    <p className="font-serif-body text-muted-foreground line-clamp-2 text-sm flex-grow mb-3">
                      {listing.description}
                    </p>
                    <div className="flex justify-between items-center text-xs font-sans text-muted-foreground pt-3 border-t border-border/50">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {listing.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {listing.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-border bg-secondary/20">
              <h3 className="font-serif-heading text-xl font-bold mb-2">Nothing Filed Under {category}</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? `No results for "${searchTerm}".` : `No listings in this section${userLocation !== "All Locations" ? ` for ${userLocation}` : ""}.`}
              </p>
              <button
                onClick={() => onNavigate("post-ad")}
                className="inline-flex items-center gap-2 bg-[#FFEA00] text-black px-6 py-2 font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90"
              >
                Be the First to Advertise
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8">
          <div className="border-t-4 border-double border-black pt-4">
            <h3 className="font-serif-heading text-lg font-bold mb-4 uppercase">Other Sections</h3>
            <ul className="space-y-1">
              {otherCategories.map(cat => {
                const count = MOCK_LISTINGS.filter(l => l.category === cat).length;
                return (
                  <li key={cat}>
                    <button
                      onClick={() => onNavigate("category", cat)}
                      className="flex items-center justify-between w-full hover:bg-secondary/50 px-2 py-2 transition-colors group"
                    >
                      <span className="font-serif-body group-hover:underline underline-offset-4">{cat}</span>
                      <span className="font-sans text-xs text-muted-foreground">{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-secondary/30 p-6 border border-border">
            <h3 className="font-serif-heading text-base font-bold mb-3 uppercase text-center border-b border-black pb-2">
              Place an Ad
            </h3>
            <p className="font-serif-body italic text-center text-sm mb-4 text-muted-foreground">
              "Reach thousands of daily readers in the {category} section."
            </p>
            <button
              onClick={() => onNavigate("post-ad")}
              className="w-full bg-[#FFEA00] text-black py-2 font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90 text-sm"
            >
              Submit Your Ad
            </button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
