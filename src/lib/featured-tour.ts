/**
 * Featured-tour helpers — Editor's Choice flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("vergina-royal-tombs-aigai");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "vergina-royal-tombs-aigai",
      path: "/shore-excursions/vergina-royal-tombs-aigai",
      bookingPath: "/enquire",
      cardName: "Vergina Royal Tombs & Aigai",
      fullName: "Vergina Royal Tombs & Aigai",
    };
