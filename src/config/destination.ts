/**
 * World 2.0 Destination Configuration — Thessaloniki Cruise Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "thessaloniki",
  name: "Thessaloniki Cruise Excursions",
  destination: "Thessaloniki",
  descriptor: "Cruise Excursions",
  strapline: "The Crossroads of Ancient Macedonia",
  domain: "thessalonikicruiseexcursions.com",
  url: "https://thessalonikicruiseexcursions.com",
  description:
    "Independent cruise shore excursions and editorial port guidance for Thessaloniki — historic city walks, Ancient Macedonia and Northern Greece.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "TH",
  pagesProject: "thessaloniki-cruise-excursions",
  paymentsWorkerName: "thessaloniki-payments",
  d1DatabaseName: "thessaloniki-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@thessalonikicruiseexcursions.com",
    bookings: "bookings@thessalonikicruiseexcursions.com",
    privacy: "privacy@thessalonikicruiseexcursions.com",
  },
  legal: {
    tradingName: "Thessaloniki Cruise Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "thessaloniki",
    meetingPointLabel: "Thessaloniki Cruise Port",
    country: "Greece",
  },
  seo: {
    defaultKeywords: [
      "Thessaloniki cruise excursions",
      "Thessaloniki shore excursions",
      "Thessaloniki cruise port guide",
      "Vergina shore excursion",
      "Ancient Macedonia day trip",
      "White Tower Thessaloniki",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Editor's Choice",
    "Historic Cities",
    "Ancient Macedonia",
    "Food",
    "Walking",
    "Nature",
    "Beach",
    "Private",
    "Family Friendly",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
