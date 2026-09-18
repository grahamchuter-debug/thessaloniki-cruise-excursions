import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "The Crossroads of Ancient Macedonia.";

export const homepageSubheading =
  "Thessaloniki offers two equally rewarding cruise days: explore one of Greece’s most fascinating historic cities on foot, or use the port as a gateway to Northern Greece’s extraordinary archaeological and natural treasures. Neither is the “correct” choice — only the one that matches your hours ashore.";

export const homepageDestinationLine =
  "White Tower · Aristotelous · Vergina · Ano Poli · Thermaic Gulf";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Thessaloniki for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a historic city walk, Ancient Macedonia, markets and food, or a longer Northern Greece day — always with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Thessaloniki",
    shortLabel: "First visit",
    description:
      "Compare walking the historic centre independently, a guided city introduction, or the Editor’s Choice day to Vergina before you choose.",
    href: "/compare/first-time-thessaloniki-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Thessaloniki’s waterfront and historic core are genuinely rewarding on foot — many guests explore the city without an organised tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Thessaloniki plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across historic Thessaloniki, Vergina, Pella, markets, wine country and Northern Greece — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on walking from the cruise port, the White Tower, Ano Poli, food culture and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Thessaloniki will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "The Crossroads of Ancient Macedonia.",
  body: [
    "For more than 2,300 years Thessaloniki has absorbed Greek, Roman, Byzantine and Ottoman layers without becoming a museum piece. The White Tower anchors a famous waterfront; behind it, Roman arches, luminous churches and the hillside lanes of Ano Poli still feel lived-in. This is the cultural capital of Northern Greece — more Balkan in energy than Athens, famously serious about food, and quietly one of the Mediterranean’s most underrated cruise ports.",
    "We write like an independent travel editor: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Sometimes the finest day is a free walk along the promenade. Sometimes it is Vergina and the Royal Tombs. Both can be right.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The city itself is excellent on foot",
    body: "If your cruise visit is primarily to experience Thessaloniki — the waterfront, White Tower, Aristotelous Square, Galerius monuments and café culture — walking independently is an excellent choice.",
  },
  {
    title: "Ancient Macedonia rewards a guided day",
    body: "If you wish to discover Vergina’s Royal Tombs, Pella, Dion or other UNESCO-depth sites beyond the city, a guided excursion offers much greater value than improvising transport and tickets on a single call.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more bougatsa or photograph.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Thessaloniki without an excursion?",
      answer:
        "Yes. Thessaloniki’s historic core and waterfront are well suited to independent exploration for most cruise passengers. An organised excursion becomes especially useful for Ancient Macedonia sites beyond the city, limited mobility, or when you want guided historical narrative.",
    },
    {
      question: "How far is the historic centre from the cruise port?",
      answer:
        "Many ships berth with realistic walking access toward the promenade and White Tower area — often around 15–30 minutes depending on berth, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want Vergina, Pella, Dion, wine country or structured city narrative. Skip a tour when you prefer flexible wandering, café culture and self-paced photography in the historic centre.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Vergina Royal Tombs & Aigai — the strongest flagship regional experience from Thessaloniki, centred on the UNESCO Royal Tombs of Philip II and Ancient Macedonia.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "custom",
    title: "Editor's Choice",
    eyebrow: "Vergina & Ancient Macedonia",
    description:
      "Our strongest recommendation beyond the city — the UNESCO Royal Tombs at Vergina and the landscape of ancient Aigai.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    cta: "View Editor's Choice",
    imageKey: "vergina",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Historic Thessaloniki at your own pace — waterfront, White Tower, Galerius monuments, Ano Poli and café culture.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "Approximately 4–7 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "ancient-macedonia",
    type: "history",
    title: "Ancient Macedonia",
    description:
      "Royal Tombs, Pella and the archaeological heartland that made Thessaloniki a gateway — not only a waterfront city.",
    href: "/shore-excursions/vergina-royal-tombs-aigai",
    cta: "Explore Ancient Macedonia",
    imageKey: "historic",
  },
  {
    slug: "food-local-life",
    type: "food-wine",
    title: "Food & Local Life",
    description:
      "Markets, cafés and traditional tavernas — Thessaloniki’s everyday culture at its most delicious.",
    href: "/guides/food-guide",
    cta: "Taste Thessaloniki",
    imageKey: "food",
  },
  {
    slug: "beyond-the-city",
    type: "nature",
    title: "Beyond the City",
    description:
      "Vergina, Pella and Northern Greece — with honest timing notes for longer dreams like Meteora.",
    href: "/compare/city-or-ancient-macedonia",
    cta: "See beyond the city",
    imageKey: "nature",
  },
];

export const experienceCards: ExperienceCard[] = [
  ...featuredExperienceCards,
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "White Tower light, Galerius arches and Ano Poli rooftops above the gulf.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Promenade walks, square pauses and manageable city circuits with children.",
    href: "/shore-excursions/panoramic-thessaloniki-highlights",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing for city landmarks or Vergina when your party wants the day shaped around you.",
    href: "/shore-excursions/private-ancient-thessaloniki",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Thessaloniki Cruise Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Thessaloniki?",
  subtitle:
    "Stay in one of Greece’s most underrated historic cities, step into Ancient Macedonia, or take our Editor’s Choice adventure — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-historic-thessaloniki",
      emoji: "🚶",
      title: "Explore Historic Thessaloniki",
      tagline:
        "Walk the waterfront, White Tower, Aristotelous Square and Byzantine landmarks — independently or with a guided city introduction.",
      highlights: [
        "Best when the city itself is your priority",
        "White Tower and Thermaic Gulf promenade",
        "Galerius monuments and St Demetrios",
        "Café culture and market flavours",
        "Walk It Yourself or a short highlights tour",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-ancient-macedonia",
      emoji: "🏛",
      title: "Discover Ancient Macedonia",
      tagline:
        "Use Thessaloniki as a gateway to Vergina, Pella and the archaeological treasures of Northern Greece.",
      highlights: [
        "Royal Tombs and Macedonian capitals",
        "Stronger value with organised transport",
        "UNESCO-depth days beyond the waterfront",
        "Honest road-time trade-offs",
        "Ideal for history-first travellers",
      ],
      cta: "Explore Ancient Macedonia",
      href: "/shore-excursions/vergina-royal-tombs-aigai",
      imageKey: "historic",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⭐",
      title: "Editor's Choice Adventure",
      tagline:
        "Vergina Royal Tombs & Aigai — our strongest flagship regional experience from the cruise port.",
      highlights: [
        "UNESCO Royal Tombs of Philip II",
        "Aigai archaeological context",
        "Cruise-timed logistics",
        "The day we would choose for Ancient Macedonia",
        "Enquire while EUR pricing is verified",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/vergina-royal-tombs-aigai",
      imageKey: "vergina",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Thessaloniki?",
  subtitle:
    "The honest answer depends on what you came for. If your cruise visit is primarily to experience Thessaloniki itself, walking independently is an excellent choice. If you wish to discover Ancient Macedonia or UNESCO World Heritage sites beyond the city, a guided excursion offers much greater value. Neither option is the “correct” one.",
  independent: {
    title: "You can explore Thessaloniki independently — and many passengers should",
    body: "The waterfront and historic centre reward a flexible, lower-cost day for most guests:",
    items: [
      "White Tower and the Thermaic Gulf promenade",
      "Aristotelous Square and café culture",
      "Arch of Galerius, Rotunda and St Demetrios",
      "Ano Poli lanes when legs and time allow",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and transport matter when you leave the walkable core — or want depth you cannot improvise:",
    items: [
      {
        label: "Vergina & Aigai",
        detail: "UNESCO Royal Tombs and Ancient Macedonia’s clearest flagship day",
      },
      {
        label: "Ancient Pella",
        detail: "Alexander’s birthplace, mosaics and museum context",
      },
      {
        label: "Dion & Olympus wine",
        detail: "Sacred ruins and tasting under Mount Olympus",
      },
      {
        label: "Longer Northern Greece",
        detail: "Edessa, thermal springs or Meteora — only with a generous call",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/cruise-port-guide", label: "Cruise Port Guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Thessaloniki experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
