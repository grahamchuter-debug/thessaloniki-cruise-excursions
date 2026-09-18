import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "white-tower",
    title: "White Tower",
    seoTitle: "White Tower Thessaloniki — Cruise Visitor Highlight",
    metaDescription:
      "White Tower Thessaloniki cruise guide — waterfront history, photography tips and how the landmark anchors an independent walking day.",
    attractionName: "White Tower",
    tagline: "The city’s signature silhouette on the Thermaic Gulf.",
    overview:
      "The White Tower is Thessaloniki’s most recognisable landmark and the natural meeting point for cruise visitors walking the waterfront.",
    body: [
      "Once part of the Ottoman fortifications, the tower now stands as museum and emblem beside the promenade.",
      "Exterior photographs from the waterfront are enough for many guests; interiors add context when timing allows.",
      "Use it as your orientation anchor on Walk It Yourself.",
    ],
    distanceFromPort: "Often within a realistic walk from cruise passenger access — typically about 15–30 minutes depending on berth",
    travelTime: "Walking from many berths",
    timeNeeded: "20–45 minutes including photographs",
    gettingThere: [
      {
        method: "Walk from terminal",
        detail: "Follow the waterfront promenade toward the tower.",
        time: "15–30 min",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Short hop if mobility or heat is a factor.",
        time: "5–10 min",
        cost: "Metered fare",
      },
    ],
    highlights: [
      "Iconic waterfront landmark",
      "Optional museum interior",
      "Navigation anchor for independent walks",
    ],
    tips: [
      "Soft morning light is kinder for photographs",
      "Combine with promenade walking rather than a single stop",
    ],
    faqs: [
      {
        question: "Do I need a ticket for the exterior?",
        answer: "No. Museum entry requires a ticket when open.",
      },
    ],
    relatedAttractionSlugs: ["waterfront-promenade", "aristotelous-square"],
    relatedExcursionSlug: "panoramic-thessaloniki-highlights",
  },
  {
    slug: "aristotelous-square",
    title: "Aristotelous Square",
    seoTitle: "Aristotelous Square Thessaloniki — Cruise Highlight",
    metaDescription:
      "Aristotelous Square Thessaloniki cruise guide — monumental axis, café culture and the heart of the historic centre for day visitors.",
    attractionName: "Aristotelous Square",
    tagline: "The monumental opening that stages Thessaloniki’s café life.",
    overview:
      "Aristotelous Square is the city’s ceremonial living room — a grand axis from the sea inland, lined with cafés and evening energy.",
    body: [
      "It is less about a single monument and more about urban theatre: locals, students and visitors sharing the same square.",
      "A coffee pause here is a legitimate cultural stop, not wasted time.",
    ],
    distanceFromPort: "Short walk inland from the White Tower waterfront",
    travelTime: "5–15 minutes from the White Tower",
    timeNeeded: "30–60 minutes with a café stop",
    gettingThere: [
      {
        method: "Walk",
        detail: "From the White Tower, follow the Aristotelous axis inland.",
        time: "5–15 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Monumental architecture",
      "Café culture",
      "Central orientation point",
    ],
    tips: [
      "Choose cafés where locals sit, not only the most aggressive tourist fronts",
    ],
    faqs: [
      {
        question: "Is it worth visiting without a tour?",
        answer: "Yes — it is one of the easiest independent highlights.",
      },
    ],
    relatedAttractionSlugs: ["white-tower", "arch-of-galerius"],
    relatedExcursionSlug: "thessaloniki-highlights-markets",
  },
  {
    slug: "arch-of-galerius",
    title: "Arch of Galerius",
    seoTitle: "Arch of Galerius Thessaloniki — Cruise Highlight",
    metaDescription:
      "Arch of Galerius (Kamara) Thessaloniki cruise guide — Roman monument still woven into everyday city life near the Rotunda.",
    attractionName: "Arch of Galerius",
    tagline: "A Roman triumphal arch still standing in everyday traffic.",
    overview:
      "The Arch of Galerius is one of Thessaloniki’s clearest Roman statements — monumental sculpture that never became an isolated museum piece.",
    body: [
      "Locals still call the area Kamara. Students, buses and visitors share the same junction.",
      "Pair it with the nearby Rotunda for a compact imperial complex walk.",
    ],
    distanceFromPort: "About 20–40 minutes’ walk from many waterfront approaches",
    travelTime: "Walk from Aristotelous / centre",
    timeNeeded: "15–30 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "Continue east from the centre toward Egnatia / Kamara.",
        time: "15–25 min from Aristotelous",
        cost: "Free",
      },
    ],
    highlights: [
      "Roman relief sculpture",
      "Living urban setting",
      "Link to the Rotunda",
    ],
    tips: [
      "Watch traffic when photographing",
      "Combine with Rotunda on the same loop",
    ],
    faqs: [
      {
        question: "Is there an entrance fee?",
        answer: "The arch exterior is part of the public streetscape.",
      },
    ],
    relatedAttractionSlugs: ["rotunda", "aristotelous-square"],
    relatedExcursionSlug: "panoramic-thessaloniki-highlights",
  },
  {
    slug: "rotunda",
    title: "Rotunda",
    seoTitle: "Rotunda of Galerius Thessaloniki — Cruise Highlight",
    metaDescription:
      "The Rotunda in Thessaloniki — imperial hall, church and mosque layers for cruise visitors exploring Galerius’s monuments.",
    attractionName: "Rotunda of Galerius",
    tagline: "A vast circular monument with Greek, Christian and Ottoman chapters.",
    overview:
      "The Rotunda is among Thessaloniki’s most atmospheric buildings — begun as an imperial hall, later church and mosque, still commanding the Galerius complex.",
    body: [
      "Even from outside, the scale is impressive. Interiors and mosaics reward visits when open and timing allows.",
      "It pairs naturally with the Arch of Galerius on a walking circuit.",
    ],
    distanceFromPort: "Beside the Arch of Galerius",
    travelTime: "A few minutes from the arch",
    timeNeeded: "20–40 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "From the Arch of Galerius, continue to the Rotunda enclosure.",
        time: "2–5 min",
        cost: "Free exterior; ticket if entering when open",
      },
    ],
    highlights: [
      "Circular monumental architecture",
      "Layered religious history",
      "Part of the Galerius complex",
    ],
    tips: [
      "Confirm opening hours for interiors",
      "Dress respectfully if entering during religious use",
    ],
    faqs: [
      {
        question: "Is the exterior enough?",
        answer: "Yes on a short call — the volume of the building reads clearly from outside.",
      },
    ],
    relatedAttractionSlugs: ["arch-of-galerius", "st-demetrios"],
    relatedExcursionSlug: "private-ancient-thessaloniki",
  },
  {
    slug: "st-demetrios",
    title: "Church of St Demetrios",
    seoTitle: "Church of Saint Demetrios Thessaloniki — Cruise Highlight",
    metaDescription:
      "Church of Saint Demetrios Thessaloniki cruise guide — the city’s patron basilica and a major Byzantine stop for cruise visitors.",
    attractionName: "Church of Saint Demetrios",
    tagline: "The spiritual heart of Thessaloniki.",
    overview:
      "The basilica of St Demetrios is Thessaloniki’s patron church — a major Byzantine pilgrimage site rebuilt after fire and still deeply local.",
    body: [
      "Dress modestly if entering. Crypt and interior details reward unhurried visitors.",
      "On a tight cruise day, choose either St Demetrios or Ano Poli rather than sprinting both.",
    ],
    distanceFromPort: "North of the commercial centre — plan 15–25 minutes from Aristotelous",
    travelTime: "Walk or short taxi",
    timeNeeded: "30–60 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "North from the centre toward the basilica.",
        time: "15–25 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Patron basilica of Thessaloniki",
      "Byzantine architecture",
      "Local pilgrimage atmosphere",
    ],
    tips: [
      "Shoulders and knees covered for entry",
      "Quiet respect during services",
    ],
    faqs: [
      {
        question: "Is photography allowed?",
        answer: "Rules vary — follow posted signs and staff guidance.",
      },
    ],
    relatedAttractionSlugs: ["ano-poli", "rotunda"],
    relatedExcursionSlug: "panoramic-thessaloniki-highlights",
  },
  {
    slug: "ano-poli",
    title: "Ano Poli",
    seoTitle: "Ano Poli Upper Town Thessaloniki — Cruise Highlight",
    metaDescription:
      "Ano Poli Upper Town Thessaloniki highlight — hillside lanes, Byzantine chapels and Thermaic Gulf viewpoints for cruise visitors.",
    attractionName: "Ano Poli",
    tagline: "Hillside Thessaloniki — timber houses, chapels and rooftop views.",
    overview:
      "Ano Poli is the city’s most atmospheric neighbourhood and the best panoramic reward for visitors with strong legs and spare time.",
    body: [
      "Expect hills and steps. The payoff is gulf light over tiled roofs and a quieter residential fabric.",
      "Skip without guilt on a short call.",
    ],
    distanceFromPort: "Uphill from the historic centre — allow extra time",
    travelTime: "30–50 minutes walking from lower centre, or short taxi ascent",
    timeNeeded: "45–90 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "Climb from the centre / St Demetrios area into the Upper Town lanes.",
        time: "30–50 min",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Useful for the ascent; walking down is often easier.",
        time: "10–15 min",
        cost: "Metered fare",
      },
    ],
    highlights: [
      "Rooftop and gulf viewpoints",
      "Byzantine chapels",
      "Castle wall fragments",
    ],
    tips: [
      "Carry water",
      "Best in softer light",
    ],
    faqs: [
      {
        question: "Is it essential?",
        answer: "No — essential for atmosphere if you have time; optional if food and the waterfront matter more.",
      },
    ],
    relatedAttractionSlugs: ["white-tower", "st-demetrios"],
    relatedExcursionSlug: "private-ancient-thessaloniki",
  },
  {
    slug: "waterfront-promenade",
    title: "Waterfront Promenade",
    seoTitle: "Thessaloniki Waterfront Promenade — Cruise Highlight",
    metaDescription:
      "Thessaloniki waterfront promenade cruise guide — the living Thermaic Gulf spine for passengers walking from the cruise port.",
    attractionName: "Waterfront promenade",
    tagline: "The city’s open living room on the Thermaic Gulf.",
    overview:
      "The waterfront promenade is where Thessaloniki breathes — joggers, students, families and sea light framing the White Tower.",
    body: [
      "It is the natural arrival corridor from many cruise berths.",
      "Walk it slowly; this is character, not merely transit.",
    ],
    distanceFromPort: "Often begins near cruise passenger access",
    travelTime: "Immediate for many berths",
    timeNeeded: "20–40 minutes as a corridor or linger",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow terminal signage toward the city waterfront.",
        time: "5–20 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Thermaic Gulf views",
      "White Tower approach",
      "Everyday local life",
    ],
    tips: [
      "Sun protection at midday",
      "Use as your return path to the ship",
    ],
    faqs: [
      {
        question: "Is it safe at night?",
        answer: "The central promenade is generally busy; use normal city awareness and keep to well-lit routes.",
      },
    ],
    relatedAttractionSlugs: ["white-tower", "aristotelous-square"],
    relatedExcursionSlug: "panoramic-thessaloniki-highlights",
  },
  {
    slug: "vergina",
    title: "Vergina & Aigai",
    seoTitle: "Vergina Royal Tombs from Thessaloniki — Day Trip Highlight",
    metaDescription:
      "Vergina Royal Tombs and Aigai from Thessaloniki — UNESCO Ancient Macedonia day trips for cruise passengers with solid hours ashore.",
    attractionName: "Vergina Royal Tombs",
    tagline: "Ancient Macedonia’s most compelling archaeological day from the cruise port.",
    overview:
      "Vergina’s Royal Tombs and the Aigai landscape are UNESCO-listed treasures of the Macedonian kingdom — best reached on a cruise-timed excursion.",
    body: [
      "This is the inland story Thessaloniki’s waterfront cannot tell alone.",
      "Independent visits are possible for experienced travellers; most cruise passengers gain more from organised transport and commentary.",
    ],
    distanceFromPort: "Roughly 45–60+ minutes by road each way depending on traffic",
    travelTime: "About 45–75 minutes each way",
    timeNeeded: "Half day or more including transfers",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Recommended for cruise timing — see Editor’s Choice Vergina Royal Tombs & Aigai.",
        time: "Approx. 5.5 hours total experience",
        cost: "Excursion fare (pricing pending verification)",
      },
      {
        method: "Private transfer",
        detail: "Flexible for small parties.",
        time: "Custom",
        cost: "Private rate",
      },
    ],
    highlights: [
      "UNESCO Royal Tombs",
      "Philip II associations",
      "Aigai archaeological context",
    ],
    tips: [
      "Do not combine with a full city checklist",
      "Protect a generous return buffer",
    ],
    faqs: [
      {
        question: "Is this the Editor's Choice?",
        answer: "Yes — Vergina Royal Tombs & Aigai is our Editor’s Choice from Thessaloniki.",
      },
    ],
    relatedAttractionSlugs: ["white-tower"],
    relatedExcursionSlug: "vergina-royal-tombs-aigai",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
