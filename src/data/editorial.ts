import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Thessaloniki cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "White Tower, Galerius monuments and Byzantine Thessaloniki." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Thessaloniki day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Beyond the City", shortLabel: "Beyond", description: "Vergina, Pella and Northern Greece when hours ashore allow." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Waterfront light, Ano Poli rooftops and gulf panoramas." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Thessaloniki small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Promenade walks and manageable city circuits with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "White Tower, arches and Upper Town viewpoints." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Markets, cafés and Northern Greek tasting culture." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Ano Poli lanes and local stops beyond the busiest waterfront." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Waterfront and White Tower highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Vergina Royal Tombs & Aigai — the strongest Ancient Macedonia day from Thessaloniki.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Panoramic Thessaloniki Highlights for orientation without a long regional transfer.",
    href: "/shore-excursions/panoramic-thessaloniki-highlights",
    cta: "Discover Thessaloniki",
  },
  {
    id: "historic",
    emoji: "🏛",
    label: "Best Ancient Macedonia",
    description: "Vergina and Aigai — Royal Tombs and the first capital of Macedon.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    cta: "Explore Vergina",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Thessaloniki Highlights & Markets — Modiano, Kapani and local tastings.",
    href: "/shore-excursions/thessaloniki-highlights-markets",
    cta: "Taste Thessaloniki",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description: "Pella, Dion, Edessa or wine country when your port call supports the road time.",
    href: "/compare/city-or-ancient-macedonia",
    cta: "Compare city vs Macedonia",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Ano Poli viewpoints and White Tower light along the Thermaic Gulf.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "City highlights keep walking manageable and leave room for ice cream on the promenade.",
    href: "/shore-excursions/panoramic-thessaloniki-highlights",
    cta: "See city highlights",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Historic Thessaloniki on foot — waterfront, monuments, Ano Poli and cafés with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Macedonian Discovery",
    description: "A future maximum-eight-guest Thessaloniki day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
