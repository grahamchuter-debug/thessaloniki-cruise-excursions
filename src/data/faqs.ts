import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Thessaloniki without an excursion?",
    answer:
      "Yes. Thessaloniki’s historic core and waterfront are well suited to independent exploration. Many visitors walk to the White Tower, Aristotelous Square and Galerius monuments without an organised tour.",
  },
  {
    question: "How far is the historic centre from the cruise port?",
    answer:
      "Often around 15–30 minutes on foot toward the White Tower area, depending on berth, pace and route.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Ancient Macedonia (Vergina, Pella, Dion), structured narrative, mobility support, or wine country. Skip when you prefer self-paced wandering and café culture in the city.",
  },
  {
    question: "How much walking is involved in Thessaloniki?",
    answer:
      "The waterfront and Aristotelous area are relatively flat. Ano Poli adds hills and steps. Museum days at Vergina involve moderate walking on site floors.",
  },
  {
    question: "Is Thessaloniki suitable for limited mobility?",
    answer:
      "Central waterfront areas are more manageable than Ano Poli. Ask about private or panoramic formats and consider a taxi from the terminal.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Longer Ancient Macedonia days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Vergina Royal Tombs & Aigai — the strongest UNESCO-depth Ancient Macedonia day from Thessaloniki.",
  },
  {
    question: "What currency is used?",
    answer:
      "Greece uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
