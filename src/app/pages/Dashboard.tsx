import React from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { User, Settings, Package, Heart } from "lucide-react";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  return (
    <NewsContainer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <div className="border-4 border-double border-primary p-4 mb-6 text-center">
            <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 overflow-hidden border-2 border-border">
              <User className="w-full h-full p-4 text-muted-foreground" />
            </div>
            <h3 className="font-serif-heading font-bold text-xl">John Doe</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Member since 2024</p>
          </div>

          <nav className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-4 py-3 bg-secondary/50 font-serif-heading font-bold uppercase tracking-wider text-sm border-l-4 border-primary">
              <Package className="w-4 h-4" /> My Listings
            </button>
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/30 font-serif-heading font-bold uppercase tracking-wider text-sm border-l-4 border-transparent transition-colors">
              <Heart className="w-4 h-4" /> Favorites
            </button>
            <button className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/30 font-serif-heading font-bold uppercase tracking-wider text-sm border-l-4 border-transparent transition-colors">
              <Settings className="w-4 h-4" /> Settings
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <h2 className="font-serif-heading text-3xl font-bold mb-6 border-b-2 border-black pb-2">Active Listings</h2>

          <div className="bg-secondary/20 border border-border p-12 text-center">
            <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="font-serif-heading text-xl font-bold mb-2">No Active Listings</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">You haven't placed any advertisements in the ledger yet.</p>
            <button
              onClick={() => onNavigate('post-ad')}
              className="bg-primary text-primary-foreground px-6 py-3 font-serif-heading font-bold uppercase tracking-wider hover:opacity-90"
            >
              Place Your First Ad
            </button>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
