import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { businessIdentity } from "@/lib/legal/business-identity";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Thessaloniki Cruise Excursions",
  description:
    "About Thessaloniki Cruise Excursions — an independent Thessaloniki cruise planning resource for passengers arriving at the Port of Thessaloniki.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Thessaloniki Cruise Excursions", description: "About Thessaloniki Cruise Excursions.", path })]} />
      <PageHero title="About Thessaloniki Cruise Excursions" subtitle="An independent planning resource built for cruise passengers — your gateway to Thessaloniki from the Port of Thessaloniki." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Thessaloniki. Whether you have one day ashore or want to understand the historic centre, Ano Poli and Northern Greece before you sail, our goal is to help you choose the best version of Thessaloniki — not just browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Thessaloniki cruise day: historic city or Ancient Macedonia, whether independent exploring suits your hours, when a guided excursion beats improvising inland, and how to build a realistic return-to-ship buffer.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic tourism. We highlight honest editorial comparisons, Editor&apos;s Collection recommendations for different traveller types, and future concepts such as The Wow Collection and Signature Macedonian Discovery. Ship schedules and transfer times are indicative — always confirm all-aboard times with your cruise line.
            </p>
            <p>
              Questions? Email us at{" "}
              <a href={businessIdentity.primaryEmailHref} className="text-coastal-700 hover:underline">
                {businessIdentity.primaryEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
