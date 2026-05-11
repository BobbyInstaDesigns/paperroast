import React, { useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ListingDetail } from "./pages/ListingDetail";
import { PostAd } from "./pages/PostAd";
import { Search } from "./pages/Search";
import { CategoryPage } from "./pages/CategoryPage";
import { AllCategories } from "./pages/AllCategories";
import { Dashboard } from "./pages/Dashboard";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentDetailId, setCurrentDetailId] = useState<string | undefined>(undefined);
  const [currentCategory, setCurrentCategory] = useState<string>("Antiques");
  const [userLocation, setUserLocation] = useState<string>("All Locations");

  const navigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (page === "category" && id) setCurrentCategory(id);
    else if (page === "detail" && id) setCurrentDetailId(id);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home onNavigate={navigate} userLocation={userLocation} />;
      case "search": return <Search onNavigate={navigate} userLocation={userLocation} />;
      case "all-categories": return <AllCategories onNavigate={navigate} />;
      case "category": return <CategoryPage category={currentCategory} onNavigate={navigate} userLocation={userLocation} />;
      case "detail": return <ListingDetail id={currentDetailId || "1"} onNavigate={navigate} />;
      case "post-ad": return <PostAd onNavigate={navigate} />;
      case "dashboard": return <Dashboard onNavigate={navigate} />;
      case "signin": return <SignIn onNavigate={navigate} />;
      case "signup": return <SignUp onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} userLocation={userLocation} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="newspaper-theme">
      <Layout onNavigate={navigate} currentPage={currentPage} userLocation={userLocation} setUserLocation={setUserLocation}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}
