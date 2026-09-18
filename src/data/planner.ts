import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Thessaloniki explorer",
    description: "A low-risk city day using walking, cafés and your own return buffer.",
  },
  {
    id: "city",
    label: "First-time city visitor",
    description: "A guided historic Thessaloniki introduction without a long inland transfer.",
  },
  {
    id: "macedonia",
    label: "Ancient Macedonia traveller",
    description: "A cruise-timed day to Vergina, Pella or Dion when hours ashore allow.",
  },
  {
    id: "food",
    label: "Food & local life traveller",
    description: "Markets, tastings and Thessaloniki’s café culture near the ship.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "historic-city", label: "Historic Thessaloniki" },
  { id: "ancient-macedonia", label: "Ancient Macedonia / Vergina" },
  { id: "food", label: "Food & markets" },
  { id: "ano-poli", label: "Ano Poli & viewpoints" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "wine", label: "Wine country" },
];

type PlanKey = "independent" | "city" | "macedonia" | "food";

export const THESSALONIKI_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Walk It Yourself — Historic Thessaloniki",
    summary:
      "The most flexible choice: walk from the cruise port along the waterfront to the White Tower, Aristotelous Square, Galerius monuments and café streets.",
    minimumHours: 4,
    links: [
      {
        label: "Cruise Port Guide",
        href: "/guides/cruise-port-guide",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full self-guided historic Thessaloniki plan.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port along the promenade to the White Tower." },
      { time: "Late morning", text: "Aristotelous Square, Arch of Galerius and Rotunda." },
      { time: "Afternoon", text: "Food stop, optional Ano Poli — then return with a buffer." },
    ],
  },
  city: {
    headline: "Historic Thessaloniki introduction",
    summary:
      "A guided city highlights day with landmark orientation — ideal when you want stories without inland road time.",
    minimumHours: 4,
    links: [
      {
        label: "Panoramic Thessaloniki Highlights",
        href: "/shore-excursions/panoramic-thessaloniki-highlights",
        why: "Best guided city orientation for first-time cruise visitors.",
      },
      {
        label: "Private Ancient Thessaloniki",
        href: "/shore-excursions/private-ancient-thessaloniki",
        why: "Private pacing across landmarks and viewpoints.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the passenger area." },
      { time: "Guided highlights", text: "White Tower, historic centre and landmark context." },
      { time: "Free time", text: "Cafés or markets before returning to the ship." },
    ],
  },
  macedonia: {
    headline: "Ancient Macedonia day",
    summary:
      "Vergina Royal Tombs & Aigai — our Editor’s Choice — or Pella when Alexander’s birthplace is the priority.",
    minimumHours: 7,
    links: [
      {
        label: "Vergina Royal Tombs & Aigai",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
        why: "Editor’s Choice UNESCO flagship from Thessaloniki.",
      },
      {
        label: "Ancient Pella & Museum",
        href: "/shore-excursions/ancient-pella",
        why: "Alexander’s birthplace, mosaics and museum depth.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave Thessaloniki with cruise-aware transport." },
      { time: "Experience", text: "Royal Tombs / archaeological sites with commentary." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
  food: {
    headline: "Food & local life",
    summary:
      "Markets, tastings and Thessaloniki’s café culture — the everyday city that visitors remember longest.",
    minimumHours: 4,
    links: [
      {
        label: "Thessaloniki Highlights & Markets",
        href: "/shore-excursions/thessaloniki-highlights-markets",
        why: "Landmarks plus Modiano, Kapani and tastings.",
      },
      {
        label: "Food Guide",
        href: "/guides/food-guide",
        why: "Independent tasting ideas near the port.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Waterfront orientation and landmark stops." },
      { time: "Midday", text: "Markets and tastings — bougatsa, koulouri, local bites." },
      { time: "Afternoon", text: "Café pause, then return with a buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (interests.includes("food") && !interests.includes("ancient-macedonia")) return "food";
  if (
    interests.includes("ancient-macedonia") ||
    interests.includes("wine")
  ) {
    return hours >= 7 ? "macedonia" : "city";
  }
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    hours < 5
  ) {
    if (input.travelStyle === "guided" && hours >= 4 && !interests.includes("independent")) {
      return "city";
    }
    return "independent";
  }
  if (interests.includes("historic-city") || interests.includes("ano-poli") || interests.includes("photography")) {
    return input.travelStyle === "guided" ? "city" : "independent";
  }
  return hours >= 7 && input.travelStyle === "guided" ? "macedonia" : "independent";
}

/** Compatibility alias used by CruisePlanner */
export const SAVONA_DAY_PLANS = THESSALONIKI_DAY_PLANS;

export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateThessalonikiPlan(input);
}

export function generateThessalonikiPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = THESSALONIKI_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Thessaloniki concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer the historic city on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Thessaloniki Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Thessaloniki Ship Schedule",
        href: "/ship-schedules/thessaloniki",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Thessaloniki options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Thessaloniki terminal 60–90 minutes before all-aboard; Ancient Macedonia days require additional road traffic contingency.",
      },
    ],
  };
}
