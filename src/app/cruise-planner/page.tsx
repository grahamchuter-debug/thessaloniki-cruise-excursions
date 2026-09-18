import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Thessaloniki cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Thessaloniki recommendations.";

export const metadata = buildMetadata({
  title: "Thessaloniki Cruise Planner — Thessaloniki Port Day Itinerary",
  description,
  path,
  keywords: ["Thessaloniki cruise planner", "Thessaloniki cruise day plan", "Thessaloniki port day itinerary", "Ano Poli from Thessaloniki planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Thessaloniki Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Thessaloniki Cruise Planner", description, path })]} />
      <PageHero
        title="Thessaloniki Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the historic centre, Ano Poli, Thessaloniki historic centre and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
