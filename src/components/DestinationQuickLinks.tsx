import Link from "next/link";

const THESSALONIKI_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Thessaloniki cruise passengers — when to walk the city alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Best Thessaloniki shore excursions",
    description:
      "Our curated launch collection — Editor’s Choice Vergina first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Cruise Port Guide",
    description:
      "How far the White Tower really is, and how to reach the historic centre on foot.",
    href: "/guides/cruise-port-guide",
  },
  {
    title: "Walk It Yourself",
    description:
      "When a flexible foot day is the better choice — and when Ancient Macedonia earns a guided day.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Thessaloniki",
    description:
      "A practical first-call plan: historic city, food culture, or Ancient Macedonia beyond.",
    href: "/compare/first-time-thessaloniki-day",
  },
  {
    title: "Thessaloniki cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/thessaloniki",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Thessaloniki planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in the historic city or discover Ancient Macedonia beyond.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {THESSALONIKI_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Thessaloniki planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
