import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Thessaloniki Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to the White Tower, food, transport toward Vergina and Ancient Macedonia, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Thessaloniki cruise passenger area",
      quay: "Cruise berths along the Thermaic Gulf waterfront corridor",
      usedBy: "Most cruise ships calling at Thessaloniki on Aegean and Eastern Mediterranean itineraries",
      cityAccess:
        "Often a realistic walk toward the promenade and White Tower depending on berth and pace; taxis available at peak turnaround",
    },
    {
      name: "Alternative berth positions",
      quay: "Occasional alternative positions within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Thessaloniki",
      paragraphs: [
        "Cruise ships calling at Thessaloniki typically berth along the city’s Thermaic Gulf waterfront, with passenger access oriented toward the promenade and centre.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk toward the White Tower.",
        "Thessaloniki is an excellent base for a city day on foot. Vergina, Pella and longer Northern Greece days are separate journeys requiring road time.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the passenger area, follow signs toward the city waterfront rather than wandering the working port.",
        "Allow roughly 15–30 minutes to reach the White Tower area in normal conditions, longer from more distant berths.",
        "If mobility, weather or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Thessaloniki city highlights",
      paragraphs: [
        "White Tower and the promenade anchor most first visits — allow time to absorb the gulf setting.",
        "Aristotelous Square, the Arch of Galerius, Rotunda and St Demetrios reward a human pace.",
        "Ano Poli delivers rooftop panoramas when legs and timing allow.",
      ],
    },
    {
      heading: "Beyond the city — Ancient Macedonia",
      paragraphs: [
        "Vergina’s Royal Tombs and Aigai are the strongest inland flagship from this port.",
        "Pella, Dion and wine country offer alternative Macedonian narratives.",
        "Meteora is a longer journey — only realistic on unusually generous calls.",
      ],
    },
    {
      heading: "Food near the port",
      paragraphs: [
        "Thessaloniki is one of Greece’s great food cities — bougatsa, koulouri, markets and tavernas are part of the destination.",
        "Modiano and Kapani markets sit inland from the waterfront and repay even a short visit.",
      ],
    },
    {
      heading: "Return to ship",
      paragraphs: [
        "Plan from all-aboard, not published departure. Aim to be back at the terminal 60–90 minutes early.",
        "Regional days need the larger end of that buffer. The ship will not wait.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Thessaloniki from the cruise port?",
      answer:
        "Often yes for the waterfront and central landmarks. Exact times depend on berth assignment — follow signage and keep a buffer.",
    },
    {
      question: "Do I need a shore excursion?",
      answer:
        "Not for the historic city if you enjoy walking. Yes for Ancient Macedonia sites beyond comfortable independent reach on a cruise clock.",
    },
    {
      question: "What is the best first stop?",
      answer:
        "The waterfront promenade and White Tower — then decide whether to continue into the centre or keep the day for an inland excursion.",
    },
  ] satisfies FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
