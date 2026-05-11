export const LOCATIONS = [
  "All Locations",
  // United States
  "Brooklyn, NY", "New York, NY", "Los Angeles, CA", "Chicago, IL",
  "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX",
  "San Diego, CA", "Dallas, TX", "San Francisco, CA", "Seattle, WA",
  "Denver, CO", "Boston, MA", "Nashville, TN", "Portland, OR",
  "Detroit, MI", "Savannah, GA", "Austin, TX", "Miami, FL",
  // United Kingdom
  "London, UK", "Manchester, UK", "Birmingham, UK", "Edinburgh, UK",
  // Europe
  "Florence, Italy", "Rome, Italy", "Milan, Italy",
  "Paris, France", "Lyon, France",
  "Berlin, Germany", "Munich, Germany",
  "Madrid, Spain", "Barcelona, Spain",
  "Amsterdam, Netherlands",
  "Zurich, Switzerland",
  "Stockholm, Sweden",
  "Copenhagen, Denmark",
  "Lisbon, Portugal",
  // Asia
  "Tokyo, Japan", "Osaka, Japan",
  "Mumbai, India", "Delhi, India", "Bangalore, India",
  "Singapore",
  "Bangkok, Thailand",
  "Dubai, UAE",
  "Hong Kong",
  "Seoul, South Korea",
  "Shanghai, China", "Beijing, China",
  // Oceania
  "Sydney, Australia", "Melbourne, Australia",
  "Auckland, New Zealand",
  // Americas
  "Toronto, Canada", "Vancouver, Canada",
  "Mexico City, Mexico",
  "São Paulo, Brazil", "Rio de Janeiro, Brazil",
  "Buenos Aires, Argentina",
];

export const LOCATION_CURRENCY: Record<string, { symbol: string; code: string }> = {
  "All Locations":        { symbol: "$",   code: "USD" },
  // US
  "Brooklyn, NY":         { symbol: "$",   code: "USD" },
  "New York, NY":         { symbol: "$",   code: "USD" },
  "Los Angeles, CA":      { symbol: "$",   code: "USD" },
  "Chicago, IL":          { symbol: "$",   code: "USD" },
  "Houston, TX":          { symbol: "$",   code: "USD" },
  "Phoenix, AZ":          { symbol: "$",   code: "USD" },
  "Philadelphia, PA":     { symbol: "$",   code: "USD" },
  "San Antonio, TX":      { symbol: "$",   code: "USD" },
  "San Diego, CA":        { symbol: "$",   code: "USD" },
  "Dallas, TX":           { symbol: "$",   code: "USD" },
  "San Francisco, CA":    { symbol: "$",   code: "USD" },
  "Seattle, WA":          { symbol: "$",   code: "USD" },
  "Denver, CO":           { symbol: "$",   code: "USD" },
  "Boston, MA":           { symbol: "$",   code: "USD" },
  "Nashville, TN":        { symbol: "$",   code: "USD" },
  "Portland, OR":         { symbol: "$",   code: "USD" },
  "Detroit, MI":          { symbol: "$",   code: "USD" },
  "Savannah, GA":         { symbol: "$",   code: "USD" },
  "Austin, TX":           { symbol: "$",   code: "USD" },
  "Miami, FL":            { symbol: "$",   code: "USD" },
  // UK
  "London, UK":           { symbol: "£",   code: "GBP" },
  "Manchester, UK":       { symbol: "£",   code: "GBP" },
  "Birmingham, UK":       { symbol: "£",   code: "GBP" },
  "Edinburgh, UK":        { symbol: "£",   code: "GBP" },
  // Europe
  "Florence, Italy":      { symbol: "€",   code: "EUR" },
  "Rome, Italy":          { symbol: "€",   code: "EUR" },
  "Milan, Italy":         { symbol: "€",   code: "EUR" },
  "Paris, France":        { symbol: "€",   code: "EUR" },
  "Lyon, France":         { symbol: "€",   code: "EUR" },
  "Berlin, Germany":      { symbol: "€",   code: "EUR" },
  "Munich, Germany":      { symbol: "€",   code: "EUR" },
  "Madrid, Spain":        { symbol: "€",   code: "EUR" },
  "Barcelona, Spain":     { symbol: "€",   code: "EUR" },
  "Amsterdam, Netherlands": { symbol: "€", code: "EUR" },
  "Zurich, Switzerland":  { symbol: "CHF", code: "CHF" },
  "Stockholm, Sweden":    { symbol: "kr",  code: "SEK" },
  "Copenhagen, Denmark":  { symbol: "kr",  code: "DKK" },
  "Lisbon, Portugal":     { symbol: "€",   code: "EUR" },
  // Asia
  "Tokyo, Japan":         { symbol: "¥",   code: "JPY" },
  "Osaka, Japan":         { symbol: "¥",   code: "JPY" },
  "Mumbai, India":        { symbol: "₹",   code: "INR" },
  "Delhi, India":         { symbol: "₹",   code: "INR" },
  "Bangalore, India":     { symbol: "₹",   code: "INR" },
  "Singapore":            { symbol: "S$",  code: "SGD" },
  "Bangkok, Thailand":    { symbol: "฿",   code: "THB" },
  "Dubai, UAE":           { symbol: "AED", code: "AED" },
  "Hong Kong":            { symbol: "HK$", code: "HKD" },
  "Seoul, South Korea":   { symbol: "₩",   code: "KRW" },
  "Shanghai, China":      { symbol: "¥",   code: "CNY" },
  "Beijing, China":       { symbol: "¥",   code: "CNY" },
  // Oceania
  "Sydney, Australia":    { symbol: "A$",  code: "AUD" },
  "Melbourne, Australia": { symbol: "A$",  code: "AUD" },
  "Auckland, New Zealand":{ symbol: "NZ$", code: "NZD" },
  // Americas
  "Toronto, Canada":      { symbol: "CA$", code: "CAD" },
  "Vancouver, Canada":    { symbol: "CA$", code: "CAD" },
  "Mexico City, Mexico":  { symbol: "MX$", code: "MXN" },
  "São Paulo, Brazil":    { symbol: "R$",  code: "BRL" },
  "Rio de Janeiro, Brazil":{ symbol: "R$", code: "BRL" },
  "Buenos Aires, Argentina": { symbol: "$", code: "ARS" },
};

export const CATEGORIES = [
  "Antiques",
  "Automotive",
  "Employment",
  "Housing",
  "Services",
  "For Sale",
  "Community",
  "Electronics",
  "Furniture",
  "Jewelry",
  "Collectibles",
  "Sporting",
];

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  category: string;
  date: string;
  images: string[];
}

export const MOCK_LISTINGS: Listing[] = [
  // Antiques
  {
    id: "1",
    title: "Vintage Typewriter — 1940s Royal",
    description: "Excellent condition. Fully functional. A beautiful piece of history for your desk. All keys respond crisply and the ribbon was recently replaced.",
    price: "$250",
    location: "Brooklyn, NY",
    category: "Antiques",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1520263118674-c92f735555c1?w=800&q=80",
      "https://images.unsplash.com/photo-1519404047982-9247c4b2c7d5?w=800&q=80",
      "https://images.unsplash.com/photo-1606995433878-102aaae7c3d2?w=800&q=80"
    ]
  },
  {
    id: "5",
    title: "Antique Oak Desk",
    description: "Solid oak desk, early 20th century. Minor scratches consistent with age. Three deep drawers, original brass hardware. A centerpiece for any study.",
    price: "$400",
    location: "London, UK",
    category: "Antiques",
    date: "2024-03-12",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1672948657444-6bd7fbb29538?w=800&q=80",
      "https://images.unsplash.com/photo-1761639454383-9855886d854e?w=800&q=80"
    ]
  },
  {
    id: "7",
    title: "Victorian Chaise Longue",
    description: "Upholstered in deep burgundy velvet, this late 1800s chaise longue is in remarkable condition. Carved walnut legs. Some fading to fabric — adds character.",
    price: "$1,200",
    location: "Savannah, GA",
    category: "Antiques",
    date: "2024-03-10",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
    ]
  },
  {
    id: "8",
    title: "Set of 6 Sterling Silver Candlesticks",
    description: "Hallmarked Birmingham, 1887. Each stands 9 inches tall. Light tarnish easily polished. Perfect centrepiece for a formal dining room.",
    price: "$680",
    location: "London, UK",
    category: "Antiques",
    date: "2024-03-09",
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80"
    ]
  },
  {
    id: "9",
    title: "Art Deco Vanity Mirror",
    description: "Stunning 1930s tri-fold vanity mirror with bevelled glass and chrome frame. Original swivel mechanism works perfectly. Minor age spotting to mirror.",
    price: "$320",
    location: "New York, NY",
    category: "Antiques",
    date: "2024-03-08",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80",
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&q=80"
    ]
  },
  {
    id: "10",
    title: "Brass Compass & Navigation Set",
    description: "Maritime navigator's set, circa 1910. Includes compass, parallel ruler, dividers, and protractor in original mahogany case. Fully functional.",
    price: "$490",
    location: "Florence, Italy",
    category: "Antiques",
    date: "2024-03-07",
    images: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80",
      "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80"
    ]
  },

  // Automotive
  {
    id: "2",
    title: "1965 Mustang Convertible",
    description: "Cherry red. Needs some work but runs. Original engine. A true classic that turns heads on every street. Log book and clear title included.",
    price: "$18,500",
    location: "Detroit, MI",
    category: "Automotive",
    date: "2024-03-14",
    images: [
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
      "https://images.unsplash.com/photo-1698663198707-d5d3ff6e963d?w=800&q=80",
      "https://images.unsplash.com/photo-1560024121-1cedc00627b9?w=800&q=80"
    ]
  },
  {
    id: "11",
    title: "1972 VW Beetle — Fully Restored",
    description: "Midnight blue repaint over the original colour. New upholstery, rebuilt engine, fresh tyres. Passes emissions. The perfect daily driver with soul.",
    price: "$12,000",
    location: "Portland, OR",
    category: "Automotive",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1596637703008-5a78bc4fa0e8?w=800&q=80"
    ]
  },
  {
    id: "12",
    title: "1984 Honda CB750 Motorcycle",
    description: "Low mileage (32k original). Runs strong, new chain and sprockets. Some chrome pitting. Matching numbers. Sought-after classic Japanese iron.",
    price: "$4,800",
    location: "Nashville, TN",
    category: "Automotive",
    date: "2024-03-11",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
    ]
  },
  {
    id: "13",
    title: "Vintage Bicycle — 1960s Raleigh",
    description: "Three-speed Sturmey Archer hub, original chrome fenders in great shape. New tyres and tubes fitted last month. Ready to ride around the city.",
    price: "$380",
    location: "Brooklyn, NY",
    category: "Automotive",
    date: "2024-03-10",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80"
    ]
  },

  // Housing
  {
    id: "3",
    title: "Downtown Loft Apartment",
    description: "Spacious 2 bedroom loft with exposed brick and high ceilings. Available immediately. Walking distance to shops, parks, and public transit.",
    price: "$2,200/mo",
    location: "Portland, OR",
    category: "Housing",
    date: "2024-03-16",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1625577816360-32388b70471c?w=800&q=80",
      "https://images.unsplash.com/photo-1723639909450-066d498e4d4c?w=800&q=80"
    ]
  },
  {
    id: "14",
    title: "Victorian Terrace — 3 Bed",
    description: "Period features throughout: original fireplaces, cornicing, sash windows. Recently updated kitchen and bathrooms. Private walled garden. Available June.",
    price: "$3,400/mo",
    location: "London, UK",
    category: "Housing",
    date: "2024-03-14",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    ]
  },
  {
    id: "15",
    title: "Artist's Studio with Garden",
    description: "Light-flooded ground-floor studio, north-facing skylight. Adjacent 400 sq ft garden. Ideal for painters, sculptors, or photographers. Month-to-month lease.",
    price: "$1,100/mo",
    location: "Savannah, GA",
    category: "Housing",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"
    ]
  },
  {
    id: "16",
    title: "Beachside Cottage — Short Let",
    description: "Charming 1-bed cottage 200m from the water. Fully furnished, fast wifi, outdoor shower. Perfect for remote workers seeking a quiet season escape.",
    price: "$95/night",
    location: "Los Angeles, CA",
    category: "Housing",
    date: "2024-03-12",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
    ]
  },

  // Employment
  {
    id: "4",
    title: "Carpenter Needed",
    description: "Looking for an experienced carpenter for custom cabinetry work. Competitive pay. Projects include built-in wardrobes and a kitchen refit. Starting immediately.",
    price: "Negotiable",
    location: "Savannah, GA",
    category: "Employment",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      "https://images.unsplash.com/photo-1546531537-3884727f20d4?w=800&q=80",
      "https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?w=800&q=80"
    ]
  },
  {
    id: "17",
    title: "Darkroom Technician Wanted",
    description: "Independent photography studio seeks experienced darkroom technician for black-and-white film processing. Part-time, flexible hours. Portfolio required.",
    price: "$28/hr",
    location: "Brooklyn, NY",
    category: "Employment",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
    ]
  },
  {
    id: "18",
    title: "Bookshop Assistant — Part Time",
    description: "Beloved independent bookshop seeks a well-read assistant for weekends. Duties include shelving, customer recommendations, and event support. Bibliophiles preferred.",
    price: "$18/hr",
    location: "Portland, OR",
    category: "Employment",
    date: "2024-03-12",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
    ]
  },
  {
    id: "19",
    title: "Jazz Pianist — Regular Engagement",
    description: "Upscale supper club seeks accomplished jazz pianist for Friday and Saturday evenings, 8pm–midnight. Repertoire of standards essential. Auditions by appointment.",
    price: "$250/night",
    location: "Nashville, TN",
    category: "Employment",
    date: "2024-03-11",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80"
    ]
  },

  // Services
  {
    id: "6",
    title: "Gardening Services",
    description: "Professional landscaping and garden maintenance. Spring cleanup specials. Hedge trimming, lawn care, planting, and seasonal borders. Free quotes.",
    price: "From $50",
    location: "Florence, Italy",
    category: "Services",
    date: "2024-03-16",
    images: [
      "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800&q=80",
      "https://images.unsplash.com/photo-1758414335609-fe94a3b089c0?w=800&q=80",
      "https://images.unsplash.com/photo-1627919758927-4a05094878ed?w=800&q=80"
    ]
  },
  {
    id: "20",
    title: "Watch & Clock Repair",
    description: "Third-generation horologist offering full service and restoration. Mechanical, quartz, and antique clocks. Estimates provided before any work commences.",
    price: "From $40",
    location: "London, UK",
    category: "Services",
    date: "2024-03-14",
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
    ]
  },
  {
    id: "21",
    title: "Portrait Photography Sessions",
    description: "Film and digital portrait sessions in my natural-light studio or on location. Specialising in editorial, family, and business headshots. Packages from $150.",
    price: "From $150",
    location: "New York, NY",
    category: "Services",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
    ]
  },
  {
    id: "22",
    title: "Typewriter Repair & Servicing",
    description: "Specialised repair of manual and electric typewriters. Full cleaning, de-rusting, platen replacement, and ribbon fitting. Turnaround 1–2 weeks. Mail-in accepted.",
    price: "From $60",
    location: "Detroit, MI",
    category: "Services",
    date: "2024-03-11",
    images: [
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80"
    ]
  },

  // For Sale
  {
    id: "23",
    title: "Collection of Vinyl Records — 200+",
    description: "Curated collection spanning jazz, soul, and classical. Mostly VG+ condition. Full list available on request. Selling as a lot or individual sleeves.",
    price: "$800 lot / $5+ each",
    location: "Brooklyn, NY",
    category: "For Sale",
    date: "2024-03-16",
    images: [
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80",
      "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80"
    ]
  },
  {
    id: "24",
    title: "Leica M3 Film Camera",
    description: "1958 Leica M3 double-stroke with 50mm Summicron f/2 lens. Shutter speeds accurate, rangefinder bright and clear. Recently CLA'd. A photographer's camera.",
    price: "$2,200",
    location: "Los Angeles, CA",
    category: "For Sale",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
    ]
  },
  {
    id: "25",
    title: "Hand-Bound Book Collection",
    description: "Twelve volumes of hand-bound first editions, assorted authors. Leather covers, gilt lettering. Kept in humidity-controlled storage. Perfect for a home library.",
    price: "$350",
    location: "Florence, Italy",
    category: "For Sale",
    date: "2024-03-14",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
    ]
  },
  {
    id: "26",
    title: "Restored Singer Sewing Machine",
    description: "1952 Singer 201K, fully serviced and stitching beautifully. Comes with original cabinet, accessories tin, and manual. A workhorse that will outlive us all.",
    price: "$460",
    location: "Nashville, TN",
    category: "For Sale",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80"
    ]
  },

  // Community
  {
    id: "27",
    title: "Free Weekly Sketch Group",
    description: "Open figure drawing sessions every Tuesday, 7–9pm. All skill levels welcome. Life model provided. Bring your own materials. Donations to cover the model appreciated.",
    price: "Free",
    location: "Portland, OR",
    category: "Community",
    date: "2024-03-16",
    images: [
      "https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=800&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
    ]
  },
  {
    id: "28",
    title: "Neighbourhood Tool Library",
    description: "Borrow hand tools, power tools, and garden equipment free of charge. Membership open to all residents. Return in good condition. Volunteers always needed.",
    price: "Free",
    location: "Brooklyn, NY",
    category: "Community",
    date: "2024-03-15",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&q=80"
    ]
  },
  {
    id: "29",
    title: "Lost: Tortoiseshell Cat — Marmalade",
    description: "Missing since Thursday evening near Prospect Park. Marmalade is 4 years old, neutered male, wearing a green collar with a bell. Greatly loved. Reward offered.",
    price: "Reward",
    location: "Brooklyn, NY",
    category: "Community",
    date: "2024-03-14",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&q=80"
    ]
  },
  {
    id: "30",
    title: "Swap Shop — Clothing Exchange",
    description: "Bring up to 10 items of clean, wearable clothing and take the same number home. First Saturday of every month, 10am–2pm at the community hall. No money changes hands.",
    price: "Free",
    location: "Savannah, GA",
    category: "Community",
    date: "2024-03-13",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
    ]
  }
];
