import React, { useState } from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { MOCK_LISTINGS, CATEGORIES } from "../data/mock";
import { MapPin, Search as SearchIcon } from "lucide-react";
import { CustomSelect } from "../components/CustomSelect";

interface SearchProps {
  onNavigate: (page: string, id?: string) => void;
  userLocation: string;
}

export const Search = ({ onNavigate, userLocation }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredListings = MOCK_LISTINGS.filter(listing => {
    const matchesLocation = userLocation === "All Locations" || listing.location === userLocation;
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || listing.category === selectedCategory;
    return matchesLocation && matchesSearch && matchesCategory;
  });

  return (
    <NewsContainer>
      <div className="mb-8">
        <h2 className="font-serif-heading text-4xl font-bold uppercase tracking-tight mb-6">Classified Archive</h2>

        <div className="bg-secondary/30 p-6 border border-border flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-grow w-full">
            <label className="block text-xs font-sans font-bold uppercase tracking-widest mb-2">Keywords</label>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full pl-10 pr-4 py-2 border border-input bg-background font-serif-body focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:w-64">
            <label className="block text-xs font-sans font-bold uppercase tracking-widest mb-2">Category</label>
            <CustomSelect
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={["All", ...CATEGORIES]}
              heading="Select Category"
              dropdownWidth="w-full"
            />
          </div>

          <div className="w-full md:w-auto pb-2">
            <div className="text-xs font-sans text-muted-foreground">
              {filteredListings.length} results in {userLocation}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="border border-border p-4 hover:shadow-md transition-shadow cursor-pointer bg-background"
              onClick={() => onNavigate('detail', listing.id)}
            >
              <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden border border-border">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-secondary px-2 py-1">{listing.category}</span>
                <span className="font-serif-heading font-bold">{listing.price}</span>
              </div>
              <h3 className="font-serif-heading text-xl font-bold mb-2 line-clamp-1">{listing.title}</h3>
              <p className="font-serif-body text-sm text-muted-foreground line-clamp-2 mb-3">{listing.description}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" /> {listing.location}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 border-2 border-dashed border-border">
            <p className="text-muted-foreground font-serif-body italic text-lg">"Silence is golden, but an empty page is tragic."</p>
            <p className="mt-2 font-sans text-sm uppercase tracking-wider">No results found.</p>
          </div>
        )}
      </div>
    </NewsContainer>
  );
};
