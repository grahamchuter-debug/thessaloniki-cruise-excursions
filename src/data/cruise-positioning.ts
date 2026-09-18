/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Thessaloniki take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "history",
    title: "History",
    body: "Roman arches, Byzantine churches and 2,300 years layered into a living Greek city.",
    href: "/shore-excursions/panoramic-thessaloniki-highlights",
    icon: "route",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided historic Thessaloniki route — often the finest city day from this port.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "ancient-macedonia",
    title: "Ancient Macedonia",
    body: "Vergina, Pella and the royal world beyond the waterfront.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    icon: "sunrise",
  },
  {
    id: "food",
    title: "Food",
    body: "Markets, bougatsa, tavernas and the café culture Thessaloniki is famous for.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "photography",
    title: "Photography",
    body: "White Tower light, Galerius monuments and Ano Poli rooftops above the gulf.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "families",
    title: "Families",
    body: "Promenade walks and manageable city circuits when travelling with children.",
    href: "/shore-excursions/panoramic-thessaloniki-highlights",
    icon: "family",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Vergina Royal Tombs & Aigai — our favourite Ancient Macedonia day.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    icon: "luxury",
  },
];
