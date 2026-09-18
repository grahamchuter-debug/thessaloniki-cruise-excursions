import thessalonikiSchedule from "./imported-schedules/thessaloniki.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Thessaloniki cruise ship schedules?",
    answer:
      "Confirmed calls publish here once verified. Times, berths and even calls can change, so confirm with your cruise line before booking.",
  },
  {
    question: "Where do cruise ships berth in Thessaloniki?",
    answer:
      "Ships typically use passenger access along the Thermaic Gulf waterfront corridor. Walking time into the centre varies by berth; always follow terminal signage on the day.",
  },
  {
    question: "Is a Thessaloniki call long enough for Vergina?",
    answer:
      "A solid half day or fuller call can support a cruise-timed Vergina excursion. Shorter calls are better suited to walking the historic city.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow 60–90 minutes buffer when returning from Vergina, Pella or Dion",
  "Keep a lighter Plan B (Walk It Yourself) if your call is shortened",
  "Do not attempt Vergina and a full city checklist on one ordinary call",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "thessaloniki",
    name: "Thessaloniki",
    country: "Greece",
    seoTitle: "Thessaloniki Cruise Ship Schedule — Aegean Port Calls",
    metaDescription:
      "Thessaloniki cruise ship schedule framework for planning historic city walks, Vergina and Ancient Macedonia shore days. Confirmed calls publish when verified.",
    intro:
      "Thessaloniki is the crossroads of Ancient Macedonia — a cultured waterfront city and a gateway to Northern Greece when your hours ashore allow.",
    description:
      "Historic centre beside the Thermaic Gulf, with access to Vergina, Pella and wider Northern Greece beyond the city.",
    scheduleOverview:
      "Verified published calls for this planning window. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  thessaloniki: thessalonikiSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
