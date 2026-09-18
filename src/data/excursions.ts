import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships calling at Thessaloniki typically berth along the city’s Thermaic Gulf waterfront, with passenger access oriented toward the promenade and centre. The White Tower, Aristotelous Square and much of the historic core sit within a realistic walk for many guests — exact times depend on berth assignment, pace and crowds. For Ancient Macedonia days (Vergina, Pella, Dion), plan roughly 45–75 minutes each way by road depending on traffic and destination. Meteora is a much longer journey and only suits an unusually long, unhurried call. Confirm your ship’s all-aboard time — not merely the published departure — and aim to be back at the terminal 60–90 minutes early. Longer regional days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Thessaloniki cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "vergina-royal-tombs-aigai",
    title: "Vergina Royal Tombs & Aigai",
    seoTitle: "Vergina Royal Tombs & Aigai | Editor's Choice from Thessaloniki",
    metaDescription:
      "Editor's Choice shore excursion from Thessaloniki to Vergina and Aigai — UNESCO Royal Tombs of Philip II and Ancient Macedonia for cruise passengers.",
    category: "Editor's Choice",
    tagline:
      "The Royal Tombs of Philip II and the ancient capital of Macedon — Northern Greece’s most compelling archaeological day from the cruise port.",
    duration: "Approximately 5 hours 30 minutes",
    pace: "Moderate",
    bestFor:
      "Cruise passengers who want Ancient Macedonia’s flagship UNESCO sites rather than a city-only day in Thessaloniki",
    overview:
      "Vergina Royal Tombs & Aigai is our Editor’s Choice from Thessaloniki: a cruise-timed journey to the UNESCO-listed royal burial complex at Vergina and the archaeological landscape of Aigai, the first capital of the Macedonian kingdom. It is the clearest way to understand why this port is also a gateway — not only a waterfront city.",
    body: [
      "We chose this excursion because Vergina delivers something Thessaloniki’s streets cannot: the tangible world of Philip II and the Macedonian royal court, preserved in one of Greece’s most important archaeological museums.",
      "From the cruise port you travel inland to Aigai and the Royal Tombs. Expert commentary, included entrance arrangements and organised transport remove the timing stress that independent travellers face on a first visit.",
      "This is not the only good day from Thessaloniki — walking the city independently remains an excellent choice if your priority is the White Tower, café culture and Byzantine churches. Choose Vergina when Ancient Macedonia is the story you came for.",
      "Expect museum time, moderate walking and a road buffer on both sides. Exact sequencing flexes with traffic, group pace and your ship’s all-aboard.",
    ],
    highlights: [
      "UNESCO Royal Tombs at Vergina",
      "Aigai archaeological highlights",
      "Expert commentary on Ancient Macedonia",
      "Cruise-timed transport from Thessaloniki",
      "Entrance fees typically arranged as stated on your voucher",
    ],
    itinerary: [
      {
        title: "Meet at Thessaloniki cruise port",
        detail:
          "Join your guide near the passenger area and confirm the day’s timing against your all-aboard.",
      },
      {
        title: "Transfer to Vergina / Aigai",
        detail:
          "Scenic inland drive toward the ancient Macedonian capital and royal burial landscape.",
      },
      {
        title: "Royal Tombs museum visit",
        detail:
          "Explore the underground museum of the Royal Tombs with commentary on Philip II and Macedonian royalty.",
      },
      {
        title: "Aigai archaeological context",
        detail:
          "Continue with key Aigai highlights as timing allows before the return journey.",
      },
      {
        title: "Return to Thessaloniki",
        detail:
          "Drive back to the cruise port with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Thessaloniki",
      "Air-conditioned transport",
      "English-speaking guide commentary",
      "Vergina / Aigai orientation as described on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes for museum floors and outdoor archaeological areas",
      "Bring a light layer — museum interiors can feel cool",
      "If you prefer the city itself, Walk It Yourself may be the better day",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the strongest regional flagship from Thessaloniki: UNESCO Royal Tombs, clear Macedonian narrative, and cruise-timed logistics that independent first-timers rarely match on a single call.",
      },
      {
        question: "Can I visit Vergina independently instead?",
        answer:
          "Experienced travellers can, but transport, tickets and timing compress quickly on a cruise day. Organised excursions usually offer greater value when Ancient Macedonia is your primary goal.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking inside the museum complex and around outdoor highlights. Guests with limited mobility should ask about step-heavy sections in advance.",
      },
    ],
    relatedExcursionSlugs: [
      "ancient-pella",
      "private-vergina-royal-tombs",
      "panoramic-thessaloniki-highlights",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — museum floors and outdoor archaeological areas",
    cruiseSuitability: "Best with roughly 7+ usable hours ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Thessaloniki’s greatest beyond-the-city reward is Ancient Macedonia — and Vergina is where that story becomes unforgettable.",
      whyRecommended:
        "The Royal Tombs of Philip II and the Aigai landscape give cruise passengers a UNESCO-depth day that city walking alone cannot provide. Organised transport and commentary protect both understanding and the return to ship.",
      whoItSuits:
        "History lovers, first-time Northern Greece visitors, and guests who want the port to open onto Macedonian civilisation rather than only the waterfront.",
      whatMakesItSpecial:
        "You stand inside one of Greece’s most significant archaeological discoveries — gold, ivory and royal burial architecture that reshaped how we read Alexander’s world.",
      cruiseFit:
        "Road time is substantial but manageable on a solid call. It is far more realistic than Meteora for most Thessaloniki port days.",
      theExperience:
        "You leave knowing why Thessaloniki is the crossroads of Ancient Macedonia — not only Greece’s second city with a famous tower.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "panoramic-thessaloniki-highlights",
    title: "Panoramic Thessaloniki Highlights",
    seoTitle: "Panoramic Thessaloniki Highlights Shore Excursion",
    metaDescription:
      "Cruise-friendly Thessaloniki highlights — White Tower, Aristotelous Square, St Demetrios and waterfront context with a planned return to ship.",
    category: "Historic Cities",
    tagline:
      "Greece’s second city in overview — sea light, landmark churches and the waterfront frame that defines Thessaloniki.",
    duration: "Approximately 3 hours",
    pace: "Moderate",
    bestFor:
      "First-time visitors who want orientation across key city landmarks without a long regional transfer",
    overview:
      "Panoramic Thessaloniki Highlights introduces the city’s signature places — the White Tower, Aristotelous Square, major churches and sea-facing viewpoints — paced for a cruise call rather than a multi-day city break.",
    body: [
      "Thessaloniki rewards a structured first look. A guided highlights circuit helps you place Roman arches, Byzantine churches and the modern waterfront in one coherent afternoon.",
      "It suits guests who want narrative and efficient routing, then free time for a café or promenade walk.",
      "If you prefer complete independence and already enjoy navigating cities, our Walk It Yourself guide covers a self-paced historic loop honestly.",
    ],
    highlights: [
      "White Tower and waterfront context",
      "Aristotelous Square orientation",
      "Key historic and religious landmarks",
      "Cruise-timed city routing",
      "Short enough to leave café time afterwards",
    ],
    itinerary: [
      {
        title: "Meet near the cruise port",
        detail: "Join your guide and confirm timing against your all-aboard.",
      },
      {
        title: "Waterfront and White Tower",
        detail: "Frame the Thermaic Gulf setting and Thessaloniki’s most recognisable landmark.",
      },
      {
        title: "Historic centre highlights",
        detail: "Continue toward Aristotelous Square and major churches as pacing allows.",
      },
      {
        title: "Return toward the ship",
        detail: "Finish with a buffer before all-aboard, or continue independently if time remains.",
      },
    ],
    included: [
      "Port meeting in Thessaloniki",
      "English-speaking guide commentary",
      "City highlights orientation",
      "Return planning around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for pavements and occasional uneven historic surfaces",
      "Bring sun protection for the open waterfront",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this better than walking alone?",
        answer:
          "Choose the tour when you want orientation and stories. Choose Walk It Yourself when you prefer flexible café stops and a self-paced route.",
      },
      {
        question: "How long do I need in port?",
        answer:
          "A solid half day works well. Shorter calls still work if you protect a return buffer.",
      },
    ],
    relatedExcursionSlugs: [
      "thessaloniki-highlights-markets",
      "private-ancient-thessaloniki",
      "vergina-royal-tombs-aigai",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — city pavements and some historic surfaces",
    cruiseSuitability: "Ideal for a half day or more",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "thessaloniki-highlights-markets",
    title: "Thessaloniki Highlights & Markets",
    seoTitle: "Thessaloniki Highlights with Modiano & Kapani Markets",
    metaDescription:
      "Walking shore excursion in Thessaloniki — seafront landmarks, Modiano and Kapani markets, and local tasting culture for cruise passengers.",
    category: "Food",
    tagline:
      "Landmarks and local flavour — markets, sweets and the everyday Thessaloniki that visitors remember longest.",
    duration: "Approximately 3 hours 30 minutes",
    pace: "Moderate",
    bestFor:
      "Food-curious travellers who want historic landmarks and market culture in one walkable circuit",
    overview:
      "This walking experience pairs Thessaloniki’s iconic sights with two of its most characterful markets — Modiano and Kapani — and tastings that introduce the city’s serious food culture without leaving the centre.",
    body: [
      "Thessaloniki is one of Greece’s great eating cities. Markets, bougatsa bakeries and neighbourhood tavernas matter as much as monuments.",
      "Expect seafront and historic stops, then immersion in market lanes where locals still shop. Tastings typically include beloved local sweets and savoury bites.",
      "Guests who want maximum unstructured wandering can follow our Food Guide independently; this tour adds structure and tasting logistics.",
    ],
    highlights: [
      "Seafront and landmark orientation",
      "Modiano and Kapani market visits",
      "Local tasting experiences",
      "Walkable historic-centre routing",
      "Cruise-friendly duration",
    ],
    itinerary: [
      {
        title: "Meet and waterfront start",
        detail: "Begin near the cruise hinterland and move into the historic centre.",
      },
      {
        title: "Landmark stops",
        detail: "Visit key churches and Roman-era highlights as timing allows.",
      },
      {
        title: "Markets and tastings",
        detail: "Explore Modiano and Kapani with guided tastings of local specialities.",
      },
      {
        title: "Return buffer",
        detail: "Allow time to walk or ride back toward the ship with composure.",
      },
    ],
    included: [
      "Guided walking orientation",
      "Market visits",
      "Tastings as stated on your voucher",
      "Cruise-timed pacing",
    ],
    notIncluded: [
      "Additional food and drinks",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Come hungry — tastings are part of the point",
      "Wear shoes suitable for market floors and city walking",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Are dietary requirements accommodated?",
        answer:
          "Often partially — advise restrictions when booking and treat tastings as flexible rather than a fixed tasting menu.",
      },
      {
        question: "Is this suitable for children?",
        answer:
          "Yes for families comfortable with walking and market crowds. Younger children may prefer a shorter city overview.",
      },
    ],
    relatedExcursionSlugs: [
      "panoramic-thessaloniki-highlights",
      "private-ancient-thessaloniki",
      "private-gerovasileiou-winery",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — continuous city walking",
    cruiseSuitability: "Best with a half day or more",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "ancient-pella",
    title: "Ancient Pella & Museum",
    seoTitle: "Ancient Pella Archaeological Site Shore Excursion from Thessaloniki",
    metaDescription:
      "Visit Ancient Pella — birthplace of Alexander the Great — with guided ruins, mosaics and museum time on a cruise day from Thessaloniki.",
    category: "Ancient Macedonia",
    tagline:
      "Alexander’s birthplace — mosaics, ruins and museum depth in the Macedonian heartland.",
    duration: "Approximately 4 hours 30 minutes",
    pace: "Moderate",
    bestFor:
      "Guests who want Ancient Macedonia with a focus on Alexander’s early world rather than the Vergina royal tombs",
    overview:
      "Ancient Pella was the flourishing capital where Alexander the Great was born. This shore excursion combines archaeological ruins, celebrated mosaics and museum context with free time to absorb the site.",
    body: [
      "Pella complements Vergina rather than duplicating it. Where Vergina centres royal burial architecture, Pella opens the civic and artistic life of Macedonian power.",
      "A guided visit helps you read mosaics and foundations that can look abstract without commentary.",
      "Choose this when your interest is Alexander’s origins; choose Vergina for the Royal Tombs narrative; choose city walking when you want Thessaloniki itself.",
    ],
    highlights: [
      "Ancient Pella archaeological site",
      "Guided museum visit",
      "Celebrated Macedonian mosaics",
      "Free time on site",
      "Cruise-timed return to Thessaloniki",
    ],
    itinerary: [
      {
        title: "Depart Thessaloniki",
        detail: "Meet at the cruise port and transfer toward Pella.",
      },
      {
        title: "Site and museum",
        detail: "Explore ruins and museum collections with expert commentary.",
      },
      {
        title: "Free time",
        detail: "Absorb the site atmosphere before reassembling for the return.",
      },
      {
        title: "Return to ship",
        detail: "Drive back with a buffer before all-aboard.",
      },
    ],
    included: [
      "Transport from Thessaloniki cruise port",
      "Guide commentary",
      "Site and museum orientation as stated on voucher",
      "Return planning",
    ],
    notIncluded: [
      "Entrance fees unless stated",
      "Lunch and purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Sun protection for open archaeological areas",
      "Comfortable walking shoes",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Pella or Vergina?",
        answer:
          "Vergina for Royal Tombs and UNESCO burial architecture; Pella for Alexander’s birthplace, mosaics and civic ruins. Both are excellent — neither is mandatory.",
      },
    ],
    relatedExcursionSlugs: [
      "vergina-royal-tombs-aigai",
      "dion-wine-olympus",
      "private-vergina-royal-tombs",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — uneven archaeological ground",
    cruiseSuitability: "Best with 6+ hours ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "dion-wine-olympus",
    title: "Dion Ruins & Olympus Wine",
    seoTitle: "Dion Ruins and Wine Tasting near Mount Olympus from Thessaloniki",
    metaDescription:
      "Combine ancient Dion ruins with a boutique wine tasting beneath Mount Olympus on a cruise-timed shore excursion from Thessaloniki port.",
    category: "Ancient Macedonia",
    tagline:
      "Sacred Dion and Northern Greek wine — history and landscape under Mount Olympus.",
    duration: "Approximately 5 hours 30 minutes",
    pace: "Moderate",
    bestFor:
      "Travellers who want archaeology and a tasting experience beyond the city",
    overview:
      "This small-group day pairs the ruins of Dion — a sacred city tied to Macedonian kings — with a wine tasting at a boutique winery framed by Mount Olympus views.",
    body: [
      "Dion sits in the Olympus foothills where mythology, Macedonian power and landscape meet. A guided visit brings the sanctuary and ruins into focus.",
      "The tasting stop adds a contemporary Northern Greek flavour — not a rushed souvenir pour, but a pause that suits a cultured cruise day.",
      "Road time is real; protect your buffer and choose this only when hours ashore support a fuller regional circuit.",
    ],
    highlights: [
      "Ancient Dion ruins",
      "Mount Olympus regional scenery",
      "Boutique winery tasting",
      "Small-group pacing",
      "Cruise-timed logistics",
    ],
    itinerary: [
      {
        title: "Depart Thessaloniki",
        detail: "Travel toward the Mount Olympus region.",
      },
      {
        title: "Dion archaeological visit",
        detail: "Explore the ruins with commentary.",
      },
      {
        title: "Wine tasting",
        detail: "Visit a boutique winery for a curated tasting with local context.",
      },
      {
        title: "Return",
        detail: "Drive back to Thessaloniki cruise port with a buffer.",
      },
    ],
    included: [
      "Transport and guide",
      "Dion orientation",
      "Wine tasting as stated on voucher",
      "Return planning",
    ],
    notIncluded: [
      "Additional drinks and lunch unless stated",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Moderate activity — ruins plus tasting venue walking",
      "Designate a non-tasting adult if travelling with young children",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this suitable for non-drinkers?",
        answer:
          "Yes — the archaeological half stands alone. Ask whether a non-alcoholic alternative is available at the winery.",
      },
    ],
    relatedExcursionSlugs: [
      "ancient-pella",
      "vergina-royal-tombs-aigai",
      "private-gerovasileiou-winery",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate",
    cruiseSuitability: "Best with a long half day or more",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "potamos-beach-escape",
    title: "Potamos Beach Escape",
    seoTitle: "Potamos Beach Escape with Mount Olympus Views from Thessaloniki",
    metaDescription:
      "Beach day shore excursion from Thessaloniki to Potamos — Aegean swimming, sunbeds and Mount Olympus views for cruise passengers.",
    category: "Beach",
    tagline:
      "Trade the city for sand and Aegean water — with Mount Olympus on the horizon.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor:
      "Cruise passengers who want an easy beach day rather than museums or city walking",
    overview:
      "Potamos Beach Escape leaves Thessaloniki for a calmer coastal stretch with golden sand, clear water and distant Mount Olympus views — a genuine change of pace from historic streets.",
    body: [
      "Not every Thessaloniki call needs to be archaeological. If your cruise already covers Athens or island beaches sparsely, a Northern Greek beach day can feel restorative.",
      "Expect sunbeds, umbrellas and optional activities on site. Bring swimwear and protect your return buffer.",
      "History lovers should choose Vergina or the city walk instead — this is deliberately a beach-first day.",
    ],
    highlights: [
      "Potamos Beach swimming and lounging",
      "Mount Olympus views",
      "Easy activity level",
      "Coach transfer from Thessaloniki",
      "Cruise-timed return",
    ],
    itinerary: [
      {
        title: "Transfer from cruise port",
        detail: "Travel by coach to Potamos Beach.",
      },
      {
        title: "Beach free time",
        detail: "Swim, rest and enjoy coastal views; optional activities available locally.",
      },
      {
        title: "Return to Thessaloniki",
        detail: "Reassemble for the coach return with a ship buffer.",
      },
    ],
    included: [
      "Round-trip coach transfer",
      "Beach day timing around the cruise call",
    ],
    notIncluded: [
      "Sunbed / umbrella fees unless stated",
      "Food and drinks",
      "Optional water activities",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Pack swimwear, towel and sunscreen",
      "Keep valuables minimal on the beach",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is the water good for swimming?",
        answer:
          "Conditions vary by season and day. Treat it as a proper beach escape, not a landmark tour.",
      },
    ],
    relatedExcursionSlugs: [
      "panoramic-thessaloniki-highlights",
      "private-edessa-waterfalls",
      "dion-wine-olympus",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy — beach and short transfers",
    cruiseSuitability: "Best with 6+ hours ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-ancient-thessaloniki",
    title: "Private Ancient Thessaloniki",
    seoTitle: "Private Ancient Thessaloniki Acropolis, Museums & Landmarks",
    metaDescription:
      "Private Thessaloniki shore excursion — Acropolis views, museums and landmark walking shaped around your party’s pace and cruise timing.",
    category: "Private",
    tagline:
      "A private, layered reading of Thessaloniki — from Kassander’s founding to Roman and Byzantine landmarks.",
    duration: "Approximately 4 hours",
    pace: "Moderate",
    bestFor:
      "Families and small parties who want flexible pacing across city landmarks and viewpoints",
    overview:
      "This private drive-and-walk experience explores Thessaloniki’s Acropolis outlooks, major museums and landmark churches — shaped around your group rather than a fixed coach circuit.",
    body: [
      "Private pacing shines when mobility, photography or family timing differ from a standard group. You still cover the White Tower, St Demetrios and key Byzantine and Roman layers when hours allow.",
      "Acropolis viewpoints help you understand the city’s defensive and spiritual upper fabric above the modern grid.",
      "If you want complete independence without a guide, Walk It Yourself remains an excellent alternative.",
    ],
    highlights: [
      "Private vehicle and flexible pacing",
      "Acropolis panoramic context",
      "Landmark churches and museums as timing allows",
      "White Tower and centre highlights",
      "Shaped around your all-aboard",
    ],
    itinerary: [
      {
        title: "Private meet at port",
        detail: "Meet your driver-guide and confirm priorities for the hours ashore.",
      },
      {
        title: "Landmarks and viewpoints",
        detail: "Combine driving segments with walking stops at key historic sites.",
      },
      {
        title: "Museum or church depth",
        detail: "Add museum or interior visits according to interest and timing.",
      },
      {
        title: "Return",
        detail: "Return to the cruise port with a protected buffer.",
      },
    ],
    included: [
      "Private transport",
      "Driver-guide commentary",
      "Custom pacing for your party",
      "Return planning",
    ],
    notIncluded: [
      "Entrance fees",
      "Lunch",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share mobility needs when booking",
      "Prioritise two or three must-sees rather than everything",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How is pricing structured?",
        answer:
          "Private experiences are typically priced per party or per person with a minimum — confirm details when booking opens. Catalogue pricing remains unverified during coming-soon status.",
      },
    ],
    relatedExcursionSlugs: [
      "panoramic-thessaloniki-highlights",
      "thessaloniki-highlights-markets",
      "private-vergina-royal-tombs",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — mixed driving and walking",
    cruiseSuitability: "Flexible — works on half-day or fuller calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-edessa-waterfalls",
    title: "Private Edessa & Thermal Springs",
    seoTitle: "Private Edessa Waterfalls and Pella Thermal Springs from Thessaloniki",
    metaDescription:
      "Private nature day from Thessaloniki — Loutra Pozar thermal springs and Edessa’s Great Waterfall for cruise passengers with long hours ashore.",
    category: "Nature",
    tagline:
      "Thermal waters and a dramatic waterfall — Northern Greece’s softer nature day.",
    duration: "Approximately 7 hours",
    pace: "Moderate",
    bestFor:
      "Guests with a long port call who want nature and relaxation beyond archaeology",
    overview:
      "This private minibus day combines mineral-rich thermal pools at Loutra Pozar with the Great Waterfall at Edessa — a restorative Northern Greek landscape circuit when your ship hours allow.",
    body: [
      "Edessa and the thermal springs sit well beyond a casual city stroll. Organised private transport is the practical way to enjoy both without gambling the return.",
      "Expect changing facilities, waterfall viewpoints and local produce shops. Bring swimwear for the thermal stop.",
      "This is a long day — only book it when usable hours ashore are generous.",
    ],
    highlights: [
      "Loutra Pozar thermal springs",
      "Edessa Great Waterfall",
      "Private minibus pacing",
      "Nature-first Northern Greece",
      "Cruise return planning",
    ],
    itinerary: [
      {
        title: "Depart Thessaloniki",
        detail: "Private transfer toward the thermal springs region.",
      },
      {
        title: "Thermal springs",
        detail: "Time in mineral pools and surrounding nature.",
      },
      {
        title: "Edessa waterfall",
        detail: "Visit the Great Waterfall and town atmosphere.",
      },
      {
        title: "Return",
        detail: "Drive back with a substantial ship buffer.",
      },
    ],
    included: [
      "Private minibus",
      "Driver-guide",
      "Itinerary shaped around cruise timing",
    ],
    notIncluded: [
      "Thermal entrance / pool fees unless stated",
      "Meals",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Pack swimwear and a change of clothes",
      "Confirm waterfall path conditions if mobility is limited",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How long does this need?",
        answer:
          "Plan for a long call — roughly seven hours of excursion time plus buffers. Short calls should stay in the city or choose Vergina instead.",
      },
    ],
    relatedExcursionSlugs: [
      "potamos-beach-escape",
      "dion-wine-olympus",
      "vergina-royal-tombs-aigai",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — paths around waterfall and springs",
    cruiseSuitability: "Only with a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-gerovasileiou-winery",
    title: "Private Gerovasileiou Winery",
    seoTitle: "Private Gerovasileiou Winery Experience from Thessaloniki",
    metaDescription:
      "Private Northern Greece winery shore excursion — vineyards, wine museum and premium tasting near Thessaloniki for cruise passengers.",
    category: "Food",
    tagline:
      "Vineyards, a wine museum and a curated tasting — Northern Greece’s wine country at private pace.",
    duration: "Approximately 4 hours",
    pace: "Relaxed",
    bestFor:
      "Wine lovers who want a refined tasting day without a long archaeological circuit",
    overview:
      "This private winery experience visits the renowned Gerovasileiou estate for vineyard atmosphere, museum context and a premium tasting paired with local delicacies.",
    body: [
      "Northern Greece’s wine culture is under-celebrated on cruise itineraries. A private visit keeps the day unhurried and focused.",
      "Expect landscape, cellar-museum storytelling and seated tasting rather than a city walking circuit.",
      "Pair this with an independent morning walk if your call is long enough — or keep the day purely about wine.",
    ],
    highlights: [
      "Private vineyard visit",
      "Wine museum",
      "Premium tasting with local pairings",
      "Easy activity level",
      "Cruise-timed return",
    ],
    itinerary: [
      {
        title: "Private transfer",
        detail: "Travel from Thessaloniki cruise port to the winery.",
      },
      {
        title: "Estate and museum",
        detail: "Tour vineyards and wine museum exhibits.",
      },
      {
        title: "Tasting",
        detail: "Enjoy a curated tasting with local delicacies.",
      },
      {
        title: "Return to port",
        detail: "Drive back with a buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport",
      "Winery visit and tasting as stated on voucher",
      "Return planning",
    ],
    notIncluded: [
      "Additional bottles and purchases",
      "Extra meals unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Easy walking — suitable for guests avoiding heavy archaeology days",
      "Advise preferences when booking if you want particular varietals discussed",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Can children attend?",
        answer:
          "Usually yes for the visit, with tasting reserved for adults. Confirm estate rules when booking.",
      },
    ],
    relatedExcursionSlugs: [
      "dion-wine-olympus",
      "thessaloniki-highlights-markets",
      "private-ancient-thessaloniki",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy",
    cruiseSuitability: "Works on a solid half day",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-vergina-royal-tombs",
    title: "Private Vergina Royal Tombs",
    seoTitle: "Private Vergina Royal Tombs Walking Exploration from Thessaloniki",
    metaDescription:
      "Private shore excursion to Vergina’s Royal Tombs from Thessaloniki — Philip II’s burial site and Macedonian royal artifacts at your party’s pace.",
    category: "Private",
    tagline:
      "A private approach to Vergina — Royal Tombs, artifacts and Ancient Macedonia without group constraints.",
    duration: "Approximately 4 hours 30 minutes",
    pace: "Moderate",
    bestFor:
      "Small parties who want the Vergina story with private timing and fewer companions",
    overview:
      "Travel privately from Thessaloniki to Vergina to explore the Royal Tombs — including the burial associated with Philip II — and exhibitions of extraordinary Macedonian artifacts.",
    body: [
      "Private format suits photographers, multi-generational families and guests who prefer to linger in the museum without coach-group rotation.",
      "The exhibition’s gold wreaths, ivory portraits and burial architecture reward unhurried attention.",
      "Our shared Editor’s Choice Vergina & Aigai day remains the strongest standard flagship; choose private when your party wants the day shaped entirely around you.",
    ],
    highlights: [
      "Private transfer to Vergina",
      "Royal Tombs museum exploration",
      "Artifact exhibitions",
      "Flexible pacing",
      "Cruise return buffer",
    ],
    itinerary: [
      {
        title: "Private departure",
        detail: "Leave Thessaloniki cruise port for Vergina.",
      },
      {
        title: "Royal Tombs visit",
        detail: "Explore the museum and burial complex with time to linger.",
      },
      {
        title: "Return",
        detail: "Drive back to the ship with composure.",
      },
    ],
    included: [
      "Private vehicle",
      "Driver-guide support",
      "Vergina orientation",
      "Return planning",
    ],
    notIncluded: [
      "Entrance fees unless stated",
      "Lunch",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Ideal when you want Vergina without a large group",
      "Still protect a generous road-and-museum buffer",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How does this differ from the Editor's Choice day?",
        answer:
          "Editorial strength is similar; format differs. Editor’s Choice is the flagship shared experience. Private suits parties who want exclusive pacing.",
      },
    ],
    relatedExcursionSlugs: [
      "vergina-royal-tombs-aigai",
      "ancient-pella",
      "private-ancient-thessaloniki",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — museum and site walking",
    cruiseSuitability: "Best with 6+ hours ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}
