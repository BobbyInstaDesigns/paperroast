import React, { useState, useRef } from "react";
import { NewsContainer } from "../components/ui/newspaper";
import { Upload, MapPin, Calendar, Image as ImageIcon, X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { CATEGORIES, LOCATIONS, LOCATION_CURRENCY } from "../data/mock";
import { CustomSelect } from "../components/CustomSelect";

interface PostAdProps {
  onNavigate: (page: string) => void;
}

export const PostAd = ({ onNavigate }: PostAdProps) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Antiques",
    price: "",
    description: "",
    location: "All Locations",
  });
  const [images, setImages] = useState<string[]>([]);
  const [previewIndex, setPreviewIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currencySymbol = LOCATION_CURRENCY[formData.location]?.symbol ?? "$";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "location") {
      // Strip old currency prefix from price when location changes
      const newSymbol = LOCATION_CURRENCY[value]?.symbol ?? "$";
      setFormData(prev => {
        const stripped = prev.price.replace(/^[^0-9]*/, "");
        return { ...prev, location: value, price: stripped ? `${newSymbol}${stripped}` : "" };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map(f => URL.createObjectURL(f));
    setImages(prev => {
      const updated = [...prev, ...urls];
      setPreviewIndex(updated.length - 1);
      return updated;
    });
    e.target.value = "";
  };

  const removeImage = (i: number) => {
    setImages(prev => {
      const updated = prev.filter((_, idx) => idx !== i);
      setPreviewIndex(Math.min(previewIndex, updated.length - 1));
      return updated;
    });
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <NewsContainer>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h2 className="font-serif-heading text-4xl font-bold mb-2 uppercase">Place Classified Ad</h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
          <p className="font-serif-body italic text-muted-foreground">"Reach thousands of readers daily"</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="border-4 border-double border-primary p-6 md:p-8 bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-serif-heading text-xl font-bold mb-6 uppercase border-b-2 border-black pb-2">Listing Details</h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">Ad Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border-b-2 border-border bg-transparent py-2 font-serif-heading text-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                  placeholder="e.g. Vintage Typewriter"
                />
              </div>

              {/* Step 2: Category — what kind of item? */}
              <div className="space-y-2">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">Category</label>
                <CustomSelect
                  value={formData.category}
                  onChange={(val) => setFormData(prev => ({ ...prev, category: val }))}
                  options={CATEGORIES}
                  heading="Select Category"
                  dropdownWidth="w-full"
                />
              </div>

              {/* Step 3: Location — sets the currency for price */}
              <div className="space-y-2">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">Location</label>
                <CustomSelect
                  value={formData.location}
                  onChange={(val) => {
                    const newSymbol = LOCATION_CURRENCY[val]?.symbol ?? "$";
                    setFormData(prev => {
                      const stripped = prev.price.replace(/^[^0-9]*/, "");
                      return { ...prev, location: val, price: stripped ? `${newSymbol}${stripped}` : "" };
                    });
                  }}
                  options={LOCATIONS}
                  heading="Select Region"
                  dropdownWidth="w-full"
                />
              </div>

              {/* Step 4: Price — currency auto-set from location above */}
              <div className="space-y-2">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">
                  Price
                </label>
                <div className="flex items-center border-b-2 border-border focus-within:border-primary transition-colors">
                  <span className="font-serif-body font-bold text-muted-foreground pr-2 shrink-0">{currencySymbol}</span>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="flex-1 bg-transparent py-2 font-serif-body focus:outline-none placeholder:text-muted-foreground/30"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border-2 border-border bg-secondary/10 p-4 font-serif-body focus:outline-none focus:border-primary min-h-[150px] placeholder:text-muted-foreground/30"
                  placeholder="Describe your item in detail..."
                ></textarea>
              </div>

              {/* Multi-photo upload */}
              <div className="space-y-3">
                <label className="block font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">
                  Photographs {images.length > 0 && <span className="text-primary">({images.length})</span>}
                </label>

                {/* Thumbnail strip */}
                {images.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {images.map((src, i) => (
                      <div key={i} className="relative w-20 h-20 border-2 border-border group cursor-pointer" onClick={() => setPreviewIndex(i)}>
                        <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                        {previewIndex === i && <div className="absolute inset-0 border-2 border-primary pointer-events-none" />}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    {/* Add more button */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-20 h-20 border-2 border-dashed border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                )}

                {images.length === 0 && (
                  <label className="border-2 border-dashed border-border p-8 text-center cursor-pointer hover:bg-secondary/20 transition-colors group block">
                    <Upload className="mx-auto w-8 h-8 text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                      Upload Photographs
                    </span>
                    <p className="text-xs text-muted-foreground/60 mt-1">Select one or more images</p>
                    <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />
                  </label>
                )}

                <input ref={images.length > 0 ? fileInputRef : undefined} type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => onNavigate('home')} className="flex-1 py-3 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-secondary transition-colors">
                  Cancel
                </button>
                <button type="button" className="flex-1 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:opacity-90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Submit Ad
                </button>
              </div>
            </form>
          </div>

          {/* Preview */}
          <div className="sticky top-8">
            <h3 className="font-serif-heading text-xl font-bold mb-6 uppercase border-b-2 border-black pb-2">Live Preview</h3>

            <div className="bg-[#f4f1ea] border border-border p-6 shadow-lg relative">
              <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-sans font-bold uppercase tracking-widest">
                Proof
              </div>

              <article className="flex flex-col gap-4">
                {/* Carousel preview */}
                <div className="w-full h-48 bg-neutral-200 border border-border relative overflow-hidden">
                  {images.length > 0 ? (
                    <>
                      <img
                        src={images[previewIndex]}
                        alt={`Preview ${previewIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => setPreviewIndex(i => (i - 1 + images.length) % images.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreviewIndex(i => (i + 1) % images.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setPreviewIndex(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === previewIndex ? "bg-white" : "bg-white/50"}`}
                              />
                            ))}
                          </div>
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-sans px-1.5 py-0.5">
                            {previewIndex + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-center text-muted-foreground">
                      <div>
                        <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-20" />
                        <span className="text-xs font-sans font-bold uppercase tracking-widest opacity-40">No Image</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-grow space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-serif-heading text-2xl font-bold leading-tight">
                        {formData.title || "Ad Title"}
                      </h3>
                      <span className="text-xs font-sans font-bold uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5 rounded-sm w-fit">
                        {formData.category}
                      </span>
                    </div>
                    <span className="font-serif-heading font-bold text-xl shrink-0 ml-4">
                      {formData.price ? `${currencySymbol}${formData.price}` : `${currencySymbol}0.00`}
                    </span>
                  </div>

                  <p className="font-serif-body text-muted-foreground min-h-[3rem] whitespace-pre-wrap">
                    {formData.description || "Your ad description will appear here..."}
                  </p>

                  <div className="flex gap-4 text-xs font-sans text-muted-foreground border-t border-border pt-3 mt-2">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {formData.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {currentDate}</span>
                  </div>
                </div>
              </article>
            </div>

            <p className="text-center mt-4 font-serif-body italic text-sm text-muted-foreground">
              * This is how your advertisement will appear in the daily edition.
            </p>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};
