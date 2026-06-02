"use client";

const items = [
  "General Contractor",
  "Design & Build",
  "Construction Management",
  "Pre-Construction",
  "Bali",
  "GAPENSI",
  "Presisi",
  "Mahakarya",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-ink-700 bg-ink-soft py-5">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="font-display text-lg font-semibold uppercase tracking-wide text-bone-dim">
              {item}
            </span>
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
