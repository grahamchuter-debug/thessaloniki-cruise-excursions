import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Thessaloniki Tour or Independent Walk — Which Is Better?",
    metaDescription:
      "Honest comparison for Thessaloniki cruise passengers: walk the historic city independently or book a guided shore excursion to Ancient Macedonia.",
    kind: "versus",
    optionA: "Independent walk",
    optionB: "Guided excursion",
    summary:
      "If your cruise visit is primarily to experience Thessaloniki itself, walking independently is an excellent choice. If you wish to discover Ancient Macedonia or UNESCO sites beyond the city, a guided excursion offers much greater value.",
    verdict:
      "Neither option is “correct”. Choose independence for the waterfront, White Tower, Galerius monuments and café culture. Choose a tour for Vergina, Pella, Dion or when you want structured narrative without navigation stress.",
    overview: [
      "The historic centre and promenade are realistic for most cruise walkers.",
      "Vergina and other inland sites need organised transport on a single call.",
      "Food and café culture reward flexible, unhurried pacing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Historic city & food", optionB: "Ancient Macedonia & logistics" },
      { category: "Cost", optionA: "Low — walking and cafés", optionB: "Higher — transport and guiding" },
      { category: "Stress", optionA: "You own the clock", optionB: "Operator owns the clock" },
      { category: "Reach", optionA: "Walkable core", optionB: "Vergina, Pella, Dion, wine country" },
      { category: "Return risk", optionA: "Self-managed buffer", optionB: "Cruise-timed buffer" },
    ],
    faqs: [
      {
        question: "Can first-timers walk alone?",
        answer:
          "Yes. Use Walk It Yourself for a sequenced route and keep a generous return buffer.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When Ancient Macedonia is the priority, mobility is limited, or you prefer commentary over navigation.",
      },
    ],
    relatedSlugs: ["city-or-ancient-macedonia", "first-time-thessaloniki-day", "best-shore-excursions"],
    imageKey: "compare",
  },
  {
    slug: "city-or-ancient-macedonia",
    title: "City or Ancient Macedonia?",
    seoTitle: "Thessaloniki City vs Ancient Macedonia Day Trip",
    metaDescription:
      "Compare a Thessaloniki city day with Ancient Macedonia excursions to Vergina and Pella — timing, rewards and cruise-day trade-offs.",
    kind: "versus",
    optionA: "Historic Thessaloniki",
    optionB: "Ancient Macedonia",
    summary:
      "Thessaloniki offers two very different cruise experiences: a cultured historic city on the Thermaic Gulf, or a gateway day to royal tombs and Macedonian capitals inland.",
    verdict:
      "Stay in the city for atmosphere, food and Byzantine-Roman layers. Go inland for UNESCO-depth archaeology. Do not pretend you can fully do both on one ordinary call.",
    overview: [
      "City days stay close to the ship and reward walking.",
      "Vergina typically needs a solid half-day-plus with road time both ways.",
      "Meteora is a longer dream — only for unusually generous calls.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "White Tower, cafés, churches", optionB: "Royal Tombs & Macedonian capitals" },
      { category: "Transfer", optionA: "Walk / short taxi", optionB: "45–75+ minutes each way" },
      { category: "Independence", optionA: "Excellent", optionB: "Guided usually better" },
      { category: "Food culture", optionA: "Central to the day", optionB: "Secondary to archaeology" },
      { category: "Best call length", optionA: "Half day or more", optionB: "Longer half day / full day" },
    ],
    faqs: [
      {
        question: "Which should first-timers choose?",
        answer:
          "If you love cities and food, walk Thessaloniki. If royal archaeology is the dream, choose Vergina. Both are worthy first visits.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-thessaloniki-day", "best-shore-excursions"],
    imageKey: "vergina",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Thessaloniki Shore Excursions for Cruise Passengers",
    metaDescription:
      "Editorially selected best Thessaloniki shore excursions — Vergina, city highlights, markets, Pella and private options for cruise timing.",
    kind: "guide",
    summary:
      "Our shortlist balances the historic city, Ancient Macedonia and food culture — with Editor’s Choice reserved for Vergina Royal Tombs & Aigai.",
    verdict:
      "Start with Editor’s Choice if inland history is the goal; otherwise city highlights, markets or Walk It Yourself may be the finer day.",
    overview: [
      "Vergina is the flagship regional day.",
      "City highlights and markets serve Thessaloniki itself.",
      "Private formats help mixed-pace parties.",
    ],
    guideItems: [
      {
        name: "Vergina Royal Tombs & Aigai",
        slug: "vergina-royal-tombs-aigai",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
        reason: "Editor’s Choice — UNESCO Royal Tombs and Ancient Macedonia’s clearest flagship.",
        topExcursion: "Vergina Royal Tombs & Aigai",
        returnConfidence: "Strong with cruise-timed transport",
        walkingDifficulty: "Moderate — museum and site walking",
      },
      {
        name: "Panoramic Thessaloniki Highlights",
        slug: "panoramic-thessaloniki-highlights",
        href: "/shore-excursions/panoramic-thessaloniki-highlights",
        reason: "Best guided city orientation without a long transfer.",
        topExcursion: "Panoramic Thessaloniki Highlights",
        returnConfidence: "High — stays near the ship hinterland",
        walkingDifficulty: "Moderate city walking",
      },
      {
        name: "Thessaloniki Highlights & Markets",
        slug: "thessaloniki-highlights-markets",
        href: "/shore-excursions/thessaloniki-highlights-markets",
        reason: "Landmarks plus Modiano, Kapani and tastings.",
        topExcursion: "Thessaloniki Highlights & Markets",
        returnConfidence: "High",
        walkingDifficulty: "Moderate continuous walking",
      },
      {
        name: "Ancient Pella & Museum",
        slug: "ancient-pella",
        href: "/shore-excursions/ancient-pella",
        reason: "Alexander’s birthplace when mosaics and civic ruins call louder than royal tombs.",
        topExcursion: "Ancient Pella & Museum",
        returnConfidence: "Good with organised timing",
        walkingDifficulty: "Moderate on archaeological ground",
      },
    ],
    faqs: [
      {
        question: "What if I only want the city?",
        answer:
          "Walk It Yourself or Panoramic Thessaloniki Highlights. You do not need Vergina to have an excellent day.",
      },
    ],
    relatedSlugs: ["first-time-thessaloniki-day", "tour-or-independent", "city-or-ancient-macedonia"],
    imageKey: "historic",
  },
  {
    slug: "first-time-thessaloniki-day",
    title: "First-Time Thessaloniki Day",
    seoTitle: "First Time in Thessaloniki on a Cruise — Best Day Ashore",
    metaDescription:
      "First-time Thessaloniki cruise day plan — Walk It Yourself, city highlights or Editor’s Choice Vergina with honest trade-offs.",
    kind: "guide",
    summary:
      "First-timers should pick one story: historic Thessaloniki on foot, a short guided city introduction, or the Editor’s Choice journey to Vergina.",
    verdict:
      "If you want the city’s character, Walk It Yourself. If you want Ancient Macedonia’s flagship, book Vergina. Both are first-class introductions.",
    overview: [
      "Do not attempt city checklist plus Vergina.",
      "Food stops are part of understanding Thessaloniki.",
      "Protect 60–90 minutes before all-aboard.",
    ],
    guideItems: [
      {
        name: "Walk It Yourself",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "Best free introduction to the historic city.",
        topExcursion: "Self-guided",
        returnConfidence: "Self-managed — keep the buffer",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Panoramic Thessaloniki Highlights",
        slug: "panoramic-thessaloniki-highlights",
        href: "/shore-excursions/panoramic-thessaloniki-highlights",
        reason: "Guided orientation when you want stories without inland road time.",
        topExcursion: "Panoramic Thessaloniki Highlights",
        returnConfidence: "High",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Vergina Royal Tombs & Aigai",
        slug: "vergina-royal-tombs-aigai",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
        reason: "Editor’s Choice when Ancient Macedonia is the dream.",
        topExcursion: "Vergina Royal Tombs & Aigai",
        returnConfidence: "Strong with cruise-timed logistics",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Is Thessaloniki different from Athens?",
        answer:
          "Yes — more everyday, more food-focused, more Balkan in energy, and the cultural capital of Northern Greece rather than a classical checklist city.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "city-or-ancient-macedonia", "best-shore-excursions"],
    imageKey: "white-tower",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
