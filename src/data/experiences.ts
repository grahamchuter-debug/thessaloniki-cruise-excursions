import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "cruise-port-guide",
    title: "Cruise Port Guide",
    seoTitle: "Thessaloniki Cruise Port Guide | Walking, Timing & Getting Around",
    metaDescription:
      "Practical Thessaloniki cruise port guide — berths, walking to the White Tower, taxis, timing buffers and when to book an excursion beyond the city.",
    tagline: "Arrive on the Thermaic Gulf — then decide whether the city or Ancient Macedonia owns your day.",
    overview:
      "Thessaloniki’s cruise calls typically place you close to one of Greece’s most rewarding waterfront cities. This guide covers terminal orientation, walking toward the historic centre, transport basics and the honest choice between an independent city day and a guided journey inland.",
    body: [
      "Follow terminal signage toward the waterfront promenade and city rather than wandering working port areas. Many berths offer a realistic walk toward the White Tower; exact times vary by ship position and pace.",
      "Taxis and local buses are available for guests who prefer not to walk, or who are heading to Ano Poli with limited mobility.",
      "Use the port as a gateway only when hours ashore support road time to Vergina, Pella or further Northern Greece — and always plan from all-aboard, not published departure.",
      "For a full self-guided city circuit, continue to Walk It Yourself.",
    ],
    highlights: [
      "Waterfront-oriented cruise berths",
      "Walkable access to key landmarks for many ships",
      "Clear choice: city walk vs Ancient Macedonia",
      "60–90 minute return buffer recommended",
    ],
    tips: [
      "Confirm all-aboard before leaving the terminal",
      "Carry water and sun protection on the open promenade",
      "Do not cut the return fine — traffic and café stops expand",
    ],
    faqs: [
      {
        question: "Is Thessaloniki walkable from the cruise ship?",
        answer:
          "Often yes for the waterfront and central landmarks. Treat walking times as estimates and allow extra if mobility is limited or berths are further out.",
      },
      {
        question: "Should I take a taxi?",
        answer:
          "Useful for Ano Poli, hot days, limited mobility, or when returning with shopping. For the White Tower and Aristotelous Square, many guests walk.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "The full historic Thessaloniki walking guide.",
        href: "/guides/explore-independently",
      },
      {
        category: "editors-choice",
        title: "Vergina Royal Tombs & Aigai",
        description: "When the port should open onto Ancient Macedonia.",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-thessaloniki", "cruise-tips"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Thessaloniki Historic Walking Guide",
    metaDescription:
      "Walk It Yourself: a cruise-friendly self-guided Thessaloniki route covering the port, promenade, White Tower, Aristotelous, Galerius and return timing.",
    tagline:
      "Historic Thessaloniki is close enough — and rich enough — to explore on foot from many cruise berths.",
    overview:
      "If your cruise visit is primarily to experience Thessaloniki itself, walking independently is an excellent choice. This Walk It Yourself guide sequences the waterfront, landmark monuments, Upper Town lanes and café culture around a disciplined return to the ship.",
    body: [
      "Exit toward the waterfront promenade and let the Thermaic Gulf set your orientation — the White Tower is the city’s most useful landmark.",
      "Work inland through Aristotelous Square to the Arch of Galerius and Rotunda, then north toward St Demetrios and the Roman Forum.",
      "Ano Poli rewards strong legs and spare time; skip it without guilt on a short call.",
      "Ancient Macedonia sites such as Vergina are a different day — brilliant, but better as a guided excursion than a DIY scramble.",
    ],
    highlights: [
      "Self-guided historic centre route",
      "No transfer required for core sights",
      "Café and food pauses built in",
      "Honest return-to-ship buffer",
    ],
    tips: [
      "Confirm all-aboard before you leave the terminal — then plan backwards",
      "Wear shoes for pavements, marble and Ano Poli steps",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Thessaloniki safe to explore independently?",
        answer:
          "The central waterfront and historic districts are generally straightforward for cruise visitors using normal city awareness. Crowds thicken around the White Tower when several ships are in.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "When you want Vergina, Pella, Dion, wine country, thermal springs or simply prefer guided narrative. Editor’s Choice Vergina Royal Tombs & Aigai is the natural next step when the city alone is not enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Vergina Royal Tombs & Aigai",
        description:
          "When a self-guided city loop is not quite enough — Ancient Macedonia with cruise-timed logistics.",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
      },
    ],
    relatedSlugs: ["cruise-port-guide", "one-day-in-thessaloniki", "best-viewpoints", "food-guide"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore",
        "First-time visitors who enjoy walking at their own pace",
        "Food lovers and photographers",
        "Guests who already know they want the city, not Vergina",
      ],
      duration: "3–5 hours",
      distance: "Approximately 4–7 km",
      difficulty: "Easy to moderate — Ano Poli adds hills and steps",
      bestFor: [
        "Independent explorers",
        "Families comfortable with city walking",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise port to the waterfront",
          description:
            "Exit the passenger area and follow signage toward the city waterfront. The Thermaic Gulf promenade is your orientation spine — sea on one side, the modern city opening inland.",
          durationMinutes: 20,
          tip: "Confirm your all-aboard time before you leave the terminal — then plan backwards.",
        },
        {
          number: 2,
          title: "Waterfront promenade",
          description:
            "Walk Leoforos Nikis and the seaside promenade. This is Thessaloniki’s living room: joggers, students, families and the Aegean breeze that makes the city feel open rather than enclosed.",
          durationMinutes: 25,
          tip: "Keep the White Tower as your visual target so you never feel lost.",
        },
        {
          number: 3,
          title: "White Tower",
          description:
            "The White Tower is Thessaloniki’s postcard and a useful meeting landmark. Photograph the exterior; interior visits are optional if queues or timing argue against them.",
          durationMinutes: 25,
          tip: "Morning light is kinder on the waterfront; midday can feel busiest when several ships are in.",
        },
        {
          number: 4,
          title: "Aristotelous Square",
          description:
            "Turn inland along Aristotelous toward the monumental square that opens the city like a stage set. Pause for coffee if the day already feels rushed — Thessaloniki’s café culture is part of the point.",
          durationMinutes: 30,
        },
        {
          number: 5,
          title: "Arch of Galerius (Kamara)",
          description:
            "Continue toward the Arch of Galerius — a Roman triumphal fragment that still anchors everyday traffic and student life. It is one of the clearest reminders that Thessaloniki is not a reconstructed old town.",
          durationMinutes: 20,
        },
        {
          number: 6,
          title: "Rotunda",
          description:
            "A short walk links the arch to the Rotunda of Galerius, later a church and mosque, now one of the city’s most atmospheric circular monuments. Exterior appreciation is enough on a tight call.",
          durationMinutes: 20,
        },
        {
          number: 7,
          title: "Church of St Demetrios",
          description:
            "North of the centre, the basilica of St Demetrios is Thessaloniki’s spiritual heart — a major Byzantine pilgrimage church rebuilt after fire, still deeply local. Dress modestly if entering.",
          durationMinutes: 30,
          tip: "If time is short, choose either St Demetrios or Ano Poli — not both at a sprint.",
        },
        {
          number: 8,
          title: "Roman Forum",
          description:
            "The Roman Forum (Ancient Agora) offers an open archaeological pause in the urban fabric — columns, foundations and a sense of the Roman administrative city beneath modern streets.",
          durationMinutes: 20,
        },
        {
          number: 9,
          title: "Ano Poli (Upper Town)",
          description:
            "If legs and timing allow, climb into Ano Poli for timber houses, Byzantine chapels, castle walls and the best rooftop views over the gulf. This is the Thessaloniki that feels farthest from Athens.",
          durationMinutes: 45,
          tip: "Skip Ano Poli without guilt on a short call — return another life, or by taxi on a longer one.",
        },
        {
          number: 10,
          title: "Traditional cafés and local food",
          description:
            "Descend toward a bakery for bougatsa, a koulouri stall, or a neighbourhood café before tracing your way back to the waterfront and ship. Eating well is not a sideshow here — it is central to the city’s character.",
          durationMinutes: 35,
        },
        {
          number: 11,
          title: "Return to ship",
          description:
            "Retrace toward the promenade and terminal with your buffer intact. Tired legs move slower than morning optimism predicts.",
          durationMinutes: 25,
        },
      ],
      dontMiss: [
        {
          category: "Best viewpoints",
          title: "Ano Poli rooftop outlooks",
          description:
            "The classic sweep over tiled roofs to the Thermaic Gulf — worth the climb when time allows.",
        },
        {
          category: "Best viewpoints",
          title: "White Tower waterfront",
          description:
            "The city’s signature silhouette with sea light — step back for the wider frame.",
        },
        {
          category: "Architecture",
          title: "Arch of Galerius",
          description:
            "Roman monumental sculpture still standing in everyday traffic — Thessaloniki’s layered honesty.",
        },
        {
          category: "Architecture",
          title: "Rotunda of Galerius",
          description:
            "A vast circular monument that has been imperial hall, church and mosque — exterior alone is striking.",
        },
        {
          category: "Churches",
          title: "Church of St Demetrios",
          description:
            "The city’s patron basilica — enter if dress code and timing allow.",
        },
        {
          category: "Markets & museums",
          title: "Modiano and Kapani markets",
          description:
            "Even a short market wander explains Thessaloniki’s food reputation better than any brochure.",
        },
        {
          category: "Photo spots",
          title: "Aristotelous axis",
          description:
            "The monumental opening from sea to square photographs cleanly in softer light.",
        },
        {
          category: "Hidden streets",
          title: "Ano Poli lanes",
          description:
            "Timber houses and quiet chapels above the commercial centre — the city’s most atmospheric neighbourhood.",
        },
      ],
      coffeeStops: [
        {
          name: "Aristotelous café pause",
          description:
            "Choose a café on or just off Aristotelous Square where locals are actually sitting — espresso culture is serious here. Avoid the most aggressive waterfront tourist menus if you can.",
          specialty: "Coffee and people-watching",
          nearStop: "Aristotelous Square",
        },
        {
          name: "Bougatsa bakery stop",
          description:
            "Thessaloniki’s famous custard or cheese pastry is a legitimate cultural stop, not a gimmick. Look for busy local bakeries rather than purely souvenir fronts.",
          specialty: "Bougatsa and koulouri",
          nearStop: "Centre / near markets",
        },
        {
          name: "Ano Poli courtyard café",
          description:
            "If you climb the Upper Town, reward yourself with a quiet courtyard coffee before descending — the pause is part of the route’s pleasure.",
          specialty: "Shade and gulf views",
          nearStop: "Ano Poli",
        },
      ],
      localTips: [
        {
          label: "This is not Athens",
          detail:
            "Thessaloniki feels more everyday, more Balkan, more food-obsessed and less staged. Let that difference be the point.",
        },
        {
          label: "Markets over malls",
          detail:
            "A ten-minute wander through Modiano or Kapani teaches more about local life than another exterior church photograph.",
        },
        {
          label: "Protect the buffer",
          detail:
            "Café culture expands time. Set an alarm for your turn-back moment and honour it.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted. A little cash still helps for koulouri stalls and smaller bakeries.",
        },
        {
          label: "Water & heat",
          detail:
            "Bring a bottle from the ship. The open promenade offers little shade at midday.",
        },
        {
          label: "Accessibility",
          detail:
            "The waterfront and Aristotelous area are relatively flat. Ano Poli involves hills and steps — skip it if mobility is limited.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning feels calmer on the waterfront. Midday brings ship crowds around the White Tower. Soft late light suits Ano Poli if all-aboard allows.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave Ano Poli or your furthest café stop early enough for the walk back plus your personal buffer — do not cut it fine from the Upper Town.",
        walkingTime:
          "Budget 20–40 minutes from the historic centre / White Tower area back to the passenger terminal, depending on pace, crowds and exact berth.",
        taxiAlternative:
          "Taxis are available around Aristotelous and major avenues if legs tire or weather turns — ask clearly for the cruise passenger terminal.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If you climbed Ano Poli, allow extra descent time. Comfortable shoes matter more than any packing tip.",
      },
      exploreFurther: {
        excursionSlug: "vergina-royal-tombs-aigai",
        title: "Want Ancient Macedonia instead?",
        body: "If the city walk leaves you hungry for Philip II and the Royal Tombs, our Editor’s Choice day to Vergina & Aigai is the strongest guided alternative. It is never required; it is simply the day we recommend when Thessaloniki alone is not quite enough.",
        href: "/shore-excursions/vergina-royal-tombs-aigai",
        ctaLabel: "Read about Editor’s Choice",
      },
    },
  },
  {
    slug: "one-day-in-thessaloniki",
    title: "One Day in Thessaloniki",
    seoTitle: "One Day in Thessaloniki on a Cruise | How to Spend Your Port Call",
    metaDescription:
      "How to spend one cruise day in Thessaloniki — historic city walk, food, Ano Poli, or Ancient Macedonia day trips with honest timing advice.",
    tagline: "One port call, two great stories — choose the city or the Macedonian hinterland.",
    overview:
      "A single day in Thessaloniki can feel complete without rushing — if you pick a primary story. This guide helps you choose between a historic city day and an Ancient Macedonia excursion.",
    body: [
      "Morning: waterfront and White Tower orientation, whether walking independently or joining a short highlights tour.",
      "Midday: Aristotelous, Galerius monuments and a proper food stop — markets or bougatsa.",
      "Afternoon: Ano Poli viewpoints if staying in the city, or be already inland at Vergina/Pella if that is your chosen day.",
      "Never try to “do everything”. Thessaloniki rewards depth over a exhausted checklist.",
    ],
    highlights: [
      "Two clear day archetypes",
      "Food built into the plan",
      "Viewpoints only if timing allows",
      "Return buffer non-negotiable",
    ],
    tips: [
      "Decide city vs Macedonia the night before",
      "Wear shoes for marble and hills",
      "Keep one flexible hour, not five rigid stops",
    ],
    faqs: [
      {
        question: "Can I do Vergina and the city in one day?",
        answer:
          "Usually not comfortably. Choose one primary experience and protect your ship buffer.",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-port-guide", "cruise-tips"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "white-tower",
    title: "White Tower Guide",
    seoTitle: "White Tower Thessaloniki Guide for Cruise Visitors",
    metaDescription:
      "Cruise visitor guide to Thessaloniki’s White Tower — history, waterfront setting, interior tips and how it anchors an independent walking day.",
    tagline: "The city’s signature silhouette — and the easiest landmark to navigate by.",
    overview:
      "The White Tower stands on the Thermaic Gulf waterfront as Thessaloniki’s most recognisable monument. For cruise passengers it is both a photograph and a practical orientation point.",
    body: [
      "Once part of the Ottoman fortifications, the tower is now the city’s emblem and museum space. Exterior photographs from the promenade are enough for many guests.",
      "Interior visits add museum context and elevated views when queues and timing allow.",
      "Use the tower as your turn-back reference when walking independently.",
    ],
    highlights: [
      "Waterfront landmark",
      "Optional museum interior",
      "Navigation anchor for Walk It Yourself",
      "Strong photography light morning and late afternoon",
    ],
    tips: [
      "Check opening hours if entering",
      "Combine with promenade walking rather than a single stop",
    ],
    faqs: [
      {
        question: "Do I need a ticket?",
        answer:
          "Exterior viewing is free. Museum entry requires a ticket when open — confirm on the day.",
      },
    ],
    relatedSlugs: ["explore-independently", "best-viewpoints", "cruise-port-guide"],
    imageKey: "white-tower",
    hubPath: "/guides",
  },
  {
    slug: "ano-poli",
    title: "Ano Poli Guide",
    seoTitle: "Ano Poli Upper Town Thessaloniki Guide for Cruise Visitors",
    metaDescription:
      "Ano Poli guide for cruise passengers — Upper Town lanes, Byzantine chapels, castle walls and gulf viewpoints with honest timing advice.",
    tagline: "The hillside Thessaloniki that feels farthest from the cruise brochure.",
    overview:
      "Ano Poli (Upper Town) is Thessaloniki’s most atmospheric neighbourhood — timber houses, quiet chapels, castle fragments and rooftop views over the Thermaic Gulf.",
    body: [
      "Reaching Ano Poli means hills and steps. It is rewarding, not mandatory, on a cruise day.",
      "Allow at least 45–75 minutes round trip from the lower centre if you want more than a single viewpoint photograph.",
      "Taxis can help on the ascent if mobility is limited; walking down is often easier.",
    ],
    highlights: [
      "Rooftop and gulf viewpoints",
      "Byzantine chapels and residential lanes",
      "Castle wall fragments",
      "Best light in softer morning or late afternoon",
    ],
    tips: [
      "Skip on short calls without guilt",
      "Carry water — shade is uneven",
      "Pair with a courtyard café pause",
    ],
    faqs: [
      {
        question: "Is Ano Poli worth it on a cruise day?",
        answer:
          "Yes if you have time and enjoy walking. No if you would rather linger over food and the waterfront — both are authentic Thessaloniki.",
      },
    ],
    relatedSlugs: ["best-viewpoints", "explore-independently", "one-day-in-thessaloniki"],
    imageKey: "ano-poli",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Food Guide",
    seoTitle: "Thessaloniki Food Guide for Cruise Visitors | Markets, Bougatsa & Tavernas",
    metaDescription:
      "What to eat in Thessaloniki on a cruise day — bougatsa, koulouri, Modiano and Kapani markets, tavernas and café culture near the port.",
    tagline: "One of Greece’s great food cities — take that claim seriously.",
    overview:
      "Thessaloniki’s reputation for food is not tourism folklore. Markets, bakeries and neighbourhood tavernas are central to how the city understands itself.",
    body: [
      "Start with bougatsa — custard or cheese pastry — and a sesame koulouri from a street stall.",
      "Modiano and Kapani markets show everyday shopping culture; even a short wander helps.",
      "For a sit-down meal, choose a busy local taverna over a purely waterfront souvenir menu when time allows.",
      "Wine lovers can look inland to Northern Greek estates on a guided tasting day.",
    ],
    highlights: [
      "Bougatsa and koulouri",
      "Modiano and Kapani markets",
      "Café culture on and off Aristotelous",
      "Optional winery day beyond the city",
    ],
    tips: [
      "Come hungry and leave dessert time",
      "Cash can still help in smaller spots",
      "Advise allergies early on tasting tours",
    ],
    faqs: [
      {
        question: "Is Thessaloniki better for food than Athens?",
        answer:
          "Many Greeks quietly say yes for everyday eating. On a cruise day you will not settle the debate — but you can eat extremely well.",
      },
    ],
    recommendations: [
      {
        category: "best-food",
        title: "Thessaloniki Highlights & Markets",
        description: "Guided landmarks with Modiano, Kapani and tastings.",
        href: "/shore-excursions/thessaloniki-highlights-markets",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-thessaloniki", "cruise-tips"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Thessaloniki for Cruise Visitors",
    metaDescription:
      "Best Thessaloniki viewpoints for cruise passengers — White Tower waterfront, Ano Poli rooftops and Thermaic Gulf panoramas.",
    tagline: "Sea light below, tiled roofs above — Thessaloniki photographs in layers.",
    overview:
      "Thessaloniki’s best views are not a single terrace. They are a sequence: waterfront openness, monumental axes and hillside panoramas from Ano Poli.",
    body: [
      "White Tower and promenade: the classic gulf-facing frame.",
      "Aristotelous axis: architecture opening to the sea.",
      "Ano Poli: the rooftop sweep that explains the city’s hillside geography.",
      "Do not chase every viewpoint — protect ship time.",
    ],
    highlights: [
      "White Tower waterfront",
      "Aristotelous Square axis",
      "Ano Poli rooftop outlooks",
      "Soft morning and late light preferred",
    ],
    tips: [
      "Heat haze softens midday gulf shots",
      "Ano Poli needs spare time and water",
    ],
    faqs: [
      {
        question: "Where is the single best view?",
        answer:
          "Ano Poli for panorama; White Tower waterfront for the iconic postcard. Different jobs.",
      },
    ],
    relatedSlugs: ["ano-poli", "white-tower", "explore-independently"],
    imageKey: "viewpoints",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Cruise Tips",
    seoTitle: "Thessaloniki Cruise Tips | Timing, Walking, Money & Return to Ship",
    metaDescription:
      "Practical Thessaloniki cruise tips — all-aboard buffers, walking vs tours, heat, money, food stops and Ancient Macedonia timing.",
    tagline: "Small decisions that keep a Thessaloniki port call calm.",
    overview:
      "These cruise tips focus on timing, footwear, heat, payments and the city-versus-Macedonia decision that shapes everything else.",
    body: [
      "Work from all-aboard, then subtract a 60–90 minute buffer.",
      "Choose one primary story: historic city or Ancient Macedonia.",
      "Carry water on the promenade; summer heat is real.",
      "Cards are widely accepted; small cash still helps for street food.",
    ],
    highlights: [
      "All-aboard discipline",
      "One primary itinerary",
      "Footwear for marble and hills",
      "Food stops planned, not improvised at the last minute",
    ],
    tips: [
      "Screenshot meeting points and offline maps",
      "Agree a ship-side rendezvous if splitting up",
    ],
    faqs: [
      {
        question: "What is the biggest mistake?",
        answer:
          "Trying to combine Vergina and a full city checklist, then cutting the return buffer.",
      },
    ],
    relatedSlugs: ["cruise-faq", "cruise-port-guide", "explore-independently"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "FAQ",
    seoTitle: "Thessaloniki Cruise Excursions FAQ",
    metaDescription:
      "Frequently asked questions about Thessaloniki cruise excursions — walking independently, Vergina, food, timing and Editor's Choice.",
    tagline: "Straight answers for a port that rewards clear decisions.",
    overview:
      "Common questions from cruise passengers planning Thessaloniki — from independent walking to Ancient Macedonia day trips.",
    body: [
      "Most visitors want to know whether they need a tour. The honest answer depends on whether the city or Ancient Macedonia is the priority.",
      "Food, heat and hills matter more here than many Mediterranean brochure ports admit.",
      "Editor’s Choice remains Vergina Royal Tombs & Aigai for the strongest regional day.",
    ],
    highlights: [
      "Tour vs independent clarified",
      "Timing and buffers",
      "Food and walking practicalities",
      "Editor’s Choice identified",
    ],
    tips: [
      "Read Walk It Yourself before booking a city tour by default",
      "Read Vergina pages before assuming the city is enough",
    ],
    faqs: [
      {
        question: "What are Thessaloniki’s must-see sights in one day?",
        answer:
          "For the city: White Tower, waterfront, Aristotelous Square, Galerius monuments and — if time — St Demetrios or Ano Poli. For beyond: Vergina.",
      },
      {
        question: "Is Thessaloniki good for history lovers?",
        answer:
          "Yes. Layers span ancient Greek, Roman, Byzantine and Ottoman eras in the city, with major archaeological sites inland.",
      },
      {
        question: "What local foods should I try?",
        answer:
          "Bougatsa, koulouri, market bites and a proper taverna meal if hours allow. Market-focused experiences are an easy tasting format.",
      },
      {
        question: "What is Editor's Choice?",
        answer:
          "Vergina Royal Tombs & Aigai — UNESCO Royal Tombs and Ancient Macedonia’s clearest flagship day from the cruise port.",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "one-day-in-thessaloniki"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((p) => p.slug);
}
