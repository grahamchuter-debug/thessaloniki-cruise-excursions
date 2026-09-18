import type { FAQ } from "./types";

/** Route path retained for World 2.0 shared components / static route. */
export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureThessalonikiExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Macedonian Discovery",
  seoTitle: "Signature Macedonian Discovery — Future Private Thessaloniki Day",
  metaDescription:
    "Preview a future small-group Thessaloniki shore experience — maximum eight guests, historic city and Ancient Macedonia highlights. Not currently bookable.",
  tagline:
    "A future small-group journey through Thessaloniki and Ancient Macedonia — designed around your ship, not a generic day tour.",
  overview:
    "Signature Macedonian Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Thessaloniki through carefully paced historic highlights, with optional Vergina depth, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🏛",
      title: "Crossroads of Macedonia",
      description: "Historic Thessaloniki layers and optional Ancient Macedonia depth at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for waterfront light and Upper Town viewpoints rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Thessaloniki lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Thessaloniki return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Macedonian Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Thessaloniki shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended flagship (Vergina Royal Tombs & Aigai). Signature is a future small-group concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureThessalonikiExperience.title,
    description:
      "A future maximum-eight-guest Thessaloniki day. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
  };
}

/** Compatibility alias for shared World 2.0 components */
export const signatureRivieraExperience = signatureThessalonikiExperience;
