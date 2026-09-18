import Link from "next/link";

const LINKS = [
  { href: "/cruise-port-guide", label: "Thessaloniki Cruise Port Guide" },
  { href: "/cruise-planner", label: "Thessaloniki Cruise Planner" },
  { href: "/ship-schedules/thessaloniki", label: "Ship Schedules" },
  { href: "/compare", label: "Compare Thessaloniki" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
