export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "White Tower on the Thessaloniki waterfront — gateway to Ancient Macedonia",
  ),
  ogDefault: img(
    "og-default",
    "Aristotelous Square in Thessaloniki — Thessaloniki Cruise Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Thessaloniki Cruise Excursions",
  },
  port: img("cruise-port", "Thessaloniki and the Thermaic Gulf — cruise port gateway"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Arch of Galerius and historic Thessaloniki"),
  coast: img("coastal", "Thessaloniki waterfront promenade on the Thermaic Gulf"),
  coastal: img("coastal", "Thessaloniki waterfront promenade on the Thermaic Gulf"),
  walking: img("walking", "Café life around Aristotelous Square in Thessaloniki"),
  food: img("food-and-wine", "Modiano Market and Thessaloniki food culture"),
  "food-and-wine": img("food-and-wine", "Modiano Market and Thessaloniki food culture"),
  private: img("private", "Private Ancient Macedonia shore excursion from Thessaloniki"),
  photography: img("photography", "Historic Thessaloniki landmarks for photography"),
  wine: img("food-and-wine", "Northern Greece wine and tasting culture"),
  compare: img("compare", "Comparing Thessaloniki cruise excursion options"),
  port: img("cruise-port", "Thessaloniki cruise port and Thermaic Gulf setting"),
  highlights: img("white-tower", "White Tower and Thessaloniki highlights for cruise visitors"),
  city: img("historic", "Historic centre of Thessaloniki from the cruise port"),
  nature: img("nature", "Northern Greece landscapes beyond Thessaloniki"),
  family: img("family", "Family-friendly day ashore in Thessaloniki"),
  "hero-home": img("hero", "White Tower Thessaloniki — Crossroads of Ancient Macedonia"),
  "white-tower": img("white-tower", "The White Tower on Thessaloniki’s waterfront"),
  aristotelous: img("aristotelous", "Aristotelous Square in Thessaloniki"),
  galerius: img("galerius", "Arch of Galerius in Thessaloniki"),
  rotunda: img("rotunda", "The Rotunda of Galerius in Thessaloniki"),
  "ano-poli": img("ano-poli", "Ano Poli Upper Town above Thessaloniki"),
  vergina: img("vergina", "Vergina Royal Tombs and Ancient Macedonia"),
  "st-demetrios": img("st-demetrios", "Church of Saint Demetrios in Thessaloniki"),
  meteora: img("meteora", "Meteora monasteries — Northern Greece day trip"),
  pella: img("pella", "Ancient Pella mosaics near Thessaloniki"),
  viewpoints: img("viewpoints", "Viewpoints over Thessaloniki and the Thermaic Gulf"),
  waterfront: img("waterfront", "Thessaloniki waterfront promenade"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "vergina-royal-tombs-aigai": "vergina",
  "panoramic-thessaloniki-highlights": "white-tower",
  "thessaloniki-highlights-markets": "food",
  "ancient-pella": "pella",
  "dion-wine-olympus": "nature",
  "potamos-beach-escape": "coastal",
  "private-ancient-thessaloniki": "historic",
  "private-edessa-waterfalls": "nature",
  "private-gerovasileiou-winery": "wine",
  "private-vergina-royal-tombs": "vergina",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("white-tower");

const highlightImageKeys: Record<string, string> = {
  "white-tower": "white-tower",
  "aristotelous-square": "aristotelous",
  "arch-of-galerius": "galerius",
  rotunda: "rotunda",
  "ano-poli": "ano-poli",
  "st-demetrios": "st-demetrios",
  "waterfront-promenade": "waterfront",
  vergina: "vergina",
  "best-viewpoints": "viewpoints",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "city-or-ancient-macedonia": "vergina",
  "best-shore-excursions": "historic",
  "first-time-thessaloniki-day": "white-tower",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
  "white-tower": "white-tower",
  "ano-poli": "ano-poli",
  viewpoints: "viewpoints",
  waterfront: "waterfront",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
