import React from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { MOCK_LISTINGS } from "../data/mock";
import { ArrowLeft, MapPin, Calendar, User, Phone, Mail } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

interface ListingDetailProps {
  id: string;
  onNavigate: (page: string) => void;
}

export const ListingDetail = ({ id, onNavigate }: ListingDetailProps) => {
  const listing = MOCK_LISTINGS.find(l => l.id === id);

  if (!listing) return (
    <NewsContainer>
      <div className="py-12 text-center">
        <h2 className="font-serif-heading text-2xl mb-4">Listing Not Found</h2>
        <button onClick={() => onNavigate('home')} className="underline">Return to Front Page</button>
      </div>
    </NewsContainer>
  );

  return (
    <NewsContainer>
      <button onClick={() => onNavigate('home')} className="mb-4 flex items-center gap-2 hover:underline font-serif-heading uppercase font-bold text-sm tracking-widest">
        <ArrowLeft className="w-4 h-4" /> Back to Front Page
      </button>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 border-4 border-double border-primary p-6 md:p-8 bg-background relative">
        <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 font-sans font-bold text-xs uppercase tracking-widest z-10">
          {listing.category}
        </div>

        <div className="bg-muted aspect-video md:aspect-square relative overflow-hidden border-2 border-border mt-4 md:mt-0 group/carousel">
          {listing.images && listing.images.length > 0 ? (
            <Carousel className="w-full h-full">
              <CarouselContent className="ml-0">
                {listing.images.map((img, index) => (
                  <CarouselItem key={index} className="pl-0">
                    <img src={img} alt={`${listing.title} - View ${index + 1}`} className="w-full h-full object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {listing.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 bg-background/80 hover:bg-background border-primary text-primary opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                  <CarouselNext className="right-2 bg-background/80 hover:bg-background border-primary text-primary opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                </>
              )}
            </Carousel>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/20">
              <span className="font-sans text-sm text-muted-foreground uppercase tracking-widest">No Images</span>
            </div>
          )}
        </div>

        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start border-b-2 border-border pb-4 mb-6">
            <h1 className="font-serif-heading text-3xl md:text-4xl font-bold leading-tight">{listing.title}</h1>
          </div>

          <div className="font-serif-heading text-3xl font-bold mb-6 text-primary">{listing.price}</div>

          <div className="font-serif-body text-lg leading-relaxed mb-8 text-muted-foreground flex-grow">
            {listing.description}
          </div>

          <div className="space-y-4 bg-secondary/30 p-6 border border-border mt-auto">
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs border-b border-border pb-2 mb-2">Seller Information</h3>
            <div className="flex items-center gap-2 text-sm"><User className="w-4 h-4" /> Anonymous Seller</div>
            <div className="flex items-center gap-2 text-sm"><MapPin className="w-4 h-4" /> {listing.location}</div>
            <div className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4" /> Posted: {listing.date}</div>

            <div className="pt-4 flex flex-col md:flex-row gap-2">
              <button className="flex-1 bg-[#FFEA00] text-black py-3 font-bold uppercase tracking-wider hover:bg-[#FFEA00]/90 flex justify-center gap-2 transition-opacity">
                <Phone className="w-4 h-4" /> Call
              </button>
              <button className="flex-1 border-2 border-primary text-primary py-3 font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors flex justify-center gap-2">
                <Mail className="w-4 h-4" /> Message
              </button>
            </div>
          </div>
        </div>
      </article>
    </NewsContainer>
  );
};
