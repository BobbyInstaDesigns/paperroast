import React, { useState, useEffect } from "react";
import { NewsContainer } from "./ui/newspaper";
import { Search, Menu, User, PlusCircle, X, Clock, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";
import { ClickSpark } from "./ClickSpark";
import { VintageGlobe } from "./VintageGlobe";
import { CATEGORIES } from "../data/mock";

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string, id?: string) => void;
  currentPage: string;
  userLocation?: string;
  setUserLocation?: (loc: string) => void;
}

const LOCATIONS = [
  "All Locations", "Brooklyn, NY", "Savannah, GA", "Detroit, MI",
  "Portland, OR", "Los Angeles, CA", "New York, NY", "Nashville, TN",
  "London, UK", "Florence, Italy",
];


const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="flex items-center gap-1 font-mono">
      <Clock className="w-3 h-3" />
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </span>
  );
};

export const Layout = ({ children, onNavigate, currentPage, userLocation = "All Locations", setUserLocation }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const { theme } = useTheme();
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const NavItem = ({ page, label, icon: Icon }: { page: string; label: string; icon?: React.ElementType }) => (
    <button
      onClick={() => { onNavigate(page); setIsMobileMenuOpen(false); }}
      className={`flex items-center gap-2 px-4 py-2 font-serif-heading font-bold uppercase tracking-wider hover:bg-black/5 transition-colors ${currentPage === page ? "border-b-2 border-primary" : ""}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col font-serif-body text-foreground">
      <ClickSpark sparkColor={theme === "dark" ? "#FFEA00" : "#000000"} burstRadius={40} sparkCount={10} duration={400} />

      {/* Top Bar */}
      <div className="border-b border-border bg-background py-1">
        <div className="w-full px-4 md:px-8 grid grid-cols-3 items-center text-xs md:text-sm font-sans uppercase tracking-widest text-muted-foreground">
          <div className="flex justify-start"><span>Vol. CXII, No. 42</span></div>
          <div className="flex justify-center"><span>Price: $1</span></div>
          <div className="flex justify-end gap-4 items-center">
            <span>{today}</span>
            <RealTimeClock />
          </div>
        </div>
      </div>

      {/* Masthead */}
      <header className="py-4 md:py-6 bg-background border-b-4 border-double border-primary relative">
        <div className="w-full px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Location Globe */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start order-2 md:order-1 relative z-50">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}>
                <div className="relative w-8 h-8 flex-shrink-0">
                  <VintageGlobe className="w-full h-full" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground mb-1">Current Edition</div>
                  <div className="font-serif-heading font-bold text-lg leading-none border-b border-dashed border-primary hover:border-solid transition-all">
                    {userLocation}
                  </div>
                </div>
              </div>

              {isLocationMenuOpen && setUserLocation && (
                <div className="absolute top-20 left-0 bg-background border-2 border-primary p-2 shadow-lg z-50 w-64">
                  <div className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground mb-2 px-2">Select Region</div>
                  <div className="max-h-60 overflow-y-auto">
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-secondary transition-colors font-serif-body ${userLocation === loc ? "font-bold bg-secondary/50" : ""}`}
                        onClick={() => { setUserLocation(loc); setIsLocationMenuOpen(false); }}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Center: Logo */}
            <div className="w-full md:w-2/4 text-center order-1 md:order-2">
              <h1
                className="font-serif-heading text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter cursor-pointer leading-none"
                onClick={() => onNavigate("home")}
              >
                PaperRoast
              </h1>
              <p className="font-serif-body italic text-lg md:text-xl mt-3 text-muted-foreground font-normal text-[16px]">
                "The finest selection of goods & services since 2024"
              </p>
            </div>

            {/* Right: Actions */}
            <div className="w-full md:w-1/4 flex flex-row items-center justify-center md:justify-end gap-3 order-3">
              <ThemeToggle />
              <button
                onClick={() => onNavigate("signin")}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 h-[44px] font-serif-heading font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <User className="w-4 h-4" /> Sign In
              </button>
              <button
                onClick={() => onNavigate("post-ad")}
                className="hidden md:flex items-center justify-center gap-2 bg-[#FFEA00] text-black px-6 h-[44px] font-serif-heading font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] whitespace-nowrap"
              >
                <PlusCircle className="w-4 h-4" /> Place Ad
              </button>
            </div>
          </div>
        </div>

        <button className="absolute right-4 top-4 md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Navigation Bar */}
      <nav className="border-y border-border py-2 sticky top-0 bg-background z-40 shadow-sm">
        <div className="hidden md:flex w-full items-center px-4 xl:px-8 gap-0">
          <div className="flex items-center border-r border-border pr-4 mr-4 shrink-0">
            <NavItem page="home" label="Front Page" />
          </div>

          <div className="flex flex-1 min-w-0 items-center justify-between overflow-hidden font-serif-heading font-bold tracking-widest">
            {CATEGORIES.slice(0, 10).map((cat, i, arr) => (
              <React.Fragment key={cat}>
                <button
                  onClick={() => onNavigate("category", cat)}
                  className="hover:underline decoration-2 underline-offset-4 decoration-primary text-[14px] whitespace-nowrap px-2 shrink-0"
                >
                  {cat}
                </button>
                {i < arr.length - 1 && <span className="text-primary/30 text-[8px] shrink-0">♦</span>}
              </React.Fragment>
            ))}
            <span className="text-primary/30 text-[8px] shrink-0 ml-1">♦</span>
            <button
              onClick={() => onNavigate("all-categories")}
              className="flex items-center gap-0.5 hover:underline decoration-2 underline-offset-4 decoration-primary text-[14px] font-serif-heading font-bold tracking-widest whitespace-nowrap px-2 shrink-0"
            >
              All <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background mt-4">
            <div className="flex flex-col p-6 gap-4 font-serif-heading font-bold uppercase tracking-widest">
              <NavItem page="home" label="Front Page" />
              <NavItem page="search" label="Browse All" icon={Search} />
              <div className="h-px bg-primary/20 my-2"></div>
              <NavItem page="post-ad" label="Place Ad" icon={PlusCircle} />
              <NavItem page="signin" label="Sign In" icon={User} />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-8 md:py-12">{children}</main>

      {/* Footer */}
      <footer className="border-t-4 border-double border-primary bg-secondary/30 pt-12 pb-8 mt-auto">
        <div className="w-full px-4 md:px-8">
          {/* Community Notice + Browse by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-border pb-8 mb-8">
            <div className="bg-background/50 p-6 border border-border md:col-span-1">
              <h3 className="font-serif-heading text-base font-bold mb-3 uppercase text-center border-b border-primary pb-2">Community Notice</h3>
              <p className="font-serif-body italic text-center text-sm text-muted-foreground">
                "PaperRoast is committed to fostering a safe and reliable marketplace for all citizens."
              </p>
              <div className="text-center mt-3">
                <span className="font-sans font-bold text-xs uppercase tracking-widest">Est. 2024</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-serif-heading text-base font-bold mb-3 uppercase">Browse by Category</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Antiques", "Automotive", "Housing", "Employment", "Services", "For Sale", "Community"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onNavigate("category", cat)}
                    className="flex items-center justify-between border border-border hover:bg-secondary/50 px-3 py-2 transition-colors group text-left"
                  >
                    <span className="font-serif-body text-sm group-hover:underline underline-offset-4">{cat}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-border pb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif-heading font-bold text-2xl mb-4">PaperRoast</h3>
              <p className="text-muted-foreground max-w-sm">
                Dedicated to connecting buyers and sellers with the trustworthiness of yesterday and the speed of today.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-4">Sections</h4>
              <ul className="space-y-2 text-sm">
                {["For Sale", "Housing", "Jobs", "Services"].map(s => (
                  <li key={s}><button onClick={() => onNavigate("search")} className="hover:underline">{s}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-4">Help & Info</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Submission Guidelines", "Safety Notices", "Contact the Editor"].map(s => (
                  <li key={s}><button className="hover:underline">{s}</button></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-xs font-sans text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PaperRoast Company. All rights reserved. Printed in the Cloud.
          </div>
        </div>
      </footer>
    </div>
  );
};
