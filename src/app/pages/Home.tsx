import React from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { MOCK_LISTINGS, LOCATIONS } from "../data/mock";
import { MapPin, Calendar, Sparkles, Search } from "lucide-react";
import Stack from "../components/Stack";
import { CustomSelect } from "../components/CustomSelect";

interface HomeProps {
  onNavigate: (page: string, id?: string) => void;
  userLocation: string;
}

export const Home = ({ onNavigate, userLocation }: HomeProps) => {
  const filteredListings = userLocation === "All Locations"
    ? MOCK_LISTINGS
    : MOCK_LISTINGS.filter(l => l.location === userLocation);

  return (
    <NewsContainer>
      {/* AI Search Hero */}
      <div className="relative mb-16 py-12 px-6 border-2 border-dashed border-primary/60 bg-[#FFF9C4] dark:bg-[#2B2818] -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-none w-full transform transition-transform hover:rotate-0">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-4 text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground/60">
          Cut along dotted line
        </div>

        <div className="w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-primary/20 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary">AI-Powered PaperRoast</span>
          </div>

          <h2 className="font-serif-heading text-5xl md:text-7xl font-black tracking-tight leading-none">
            What are you looking for?
          </h2>

          <div className="relative w-full mx-auto">
            <div className="flex items-center w-full bg-background border-2 border-primary shadow-[8px_8px_0px_0px_var(--color-primary)] focus-within:translate-x-[4px] focus-within:translate-y-[4px] focus-within:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all">
              <input
                type="text"
                placeholder="e.g. '1950s typewriter'"
                className="flex-grow p-6 bg-transparent focus:outline-none font-serif-body text-2xl placeholder:text-muted-foreground placeholder:italic text-primary/60 font-normal min-w-0"
                onKeyDown={(e) => e.key === 'Enter' && onNavigate('search')}
              />
              <div className="h-12 w-px bg-primary/20 mx-2"></div>
              <div className="relative w-[240px] flex-shrink-0 flex items-center gap-2 px-3">
                <MapPin className="w-5 h-5 text-primary/40 shrink-0" />
                <CustomSelect
                  value={userLocation}
                  onChange={() => {}}
                  options={LOCATIONS}
                  heading="Select Region"
                  dropdownWidth="w-64"
                  className="flex-1"
                />
              </div>
              <div className="w-36 flex-shrink-0"></div>
            </div>
            <button
              onClick={() => onNavigate('search')}
              className="absolute right-3 top-3 bottom-3 px-8 bg-[#FFEA00] text-black font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90 transition-opacity flex items-center gap-2 text-lg"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-sans text-muted-foreground uppercase tracking-widest">
            <span>Popular:</span>
            <button onClick={() => onNavigate('search')} className="hover:text-primary hover:underline underline-offset-4">Typewriters</button>
            <button onClick={() => onNavigate('search')} className="hover:text-primary hover:underline underline-offset-4">Vinyl Records</button>
            <button onClick={() => onNavigate('search')} className="hover:text-primary hover:underline underline-offset-4">Classic Cars</button>
          </div>
        </div>
      </div>

      {/* Latest Dispatches Header */}
      <div className="border-b-2 border-black pb-2 mb-6 flex justify-between items-end">
        <h2 className="font-serif-heading text-3xl font-bold uppercase tracking-tight">
          {userLocation === "All Locations" ? "Latest Dispatches" : `Local News: ${userLocation}`}
        </h2>
        <button
          onClick={() => onNavigate('search')}
          className="font-sans text-xs font-bold uppercase tracking-widest hover:underline"
        >
          View All &rarr;
        </button>
      </div>

      {/* 4-Column Listings Grid */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredListings.map((listing) => (
            <article
              key={listing.id}
              className="flex flex-col border border-border group cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-card h-full"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('button')) return;
                onNavigate('detail', listing.id);
              }}
            >
              <div className="w-full h-48 bg-muted flex-shrink-0 overflow-hidden relative border-b border-border">
                {listing.images && listing.images.length > 0 ? (
                  <div className="w-full h-full p-2">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={true}
                      cards={listing.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${listing.title} - Image ${index + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-start w-full">
                      <h3 className="font-serif-heading text-lg font-bold group-hover:underline decoration-2 underline-offset-4 line-clamp-1">{listing.title}</h3>
                      <span className="font-serif-heading font-bold text-lg shrink-0 ml-2">{listing.price}</span>
                    </div>
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground w-fit border border-border px-2 py-0.5 rounded-sm">{listing.category}</span>
                  </div>
                </div>
                <p className="font-serif-body text-muted-foreground line-clamp-3 mb-4 text-sm flex-grow">{listing.description}</p>
                <div className="flex justify-between items-center text-xs font-sans text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {listing.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {listing.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-border bg-secondary/20 mb-12">
          <h3 className="font-serif-heading text-xl font-bold mb-2">No Reports from this Region</h3>
          <p className="text-muted-foreground mb-6">There are currently no classifieds listed in {userLocation}. Be the first to break the silence.</p>
          <button
            onClick={() => onNavigate('post-ad')}
            className="inline-flex items-center gap-2 bg-[#FFEA00] text-black px-6 py-2 font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90"
          >
            Place Ad in {userLocation}
          </button>
        </div>
      )}

    </NewsContainer>
  );
};
