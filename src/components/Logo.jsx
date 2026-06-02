import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Labda Jagat Konstruksi — Beranda">
      <svg width="34" height="34" viewBox="0 0 56 56" fill="none" className="shrink-0">
        <path d="M28 4 L50 16 V40 L28 52 L6 40 V16 Z" stroke="#E0A338" strokeWidth="1.6" />
        <path
          d="M18 38 V22 L28 16 L38 22 V38"
          stroke="#F4F2ED"
          strokeWidth="2.2"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-amber"
        />
        <path d="M28 16 V38" stroke="#E0A338" strokeWidth="2.2" />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-[15px] font-bold tracking-[0.08em] text-bone">
            LABDA JAGAT
          </span>
          <span className="block text-[9px] font-semibold uppercase tracking-[0.42em] text-bone-muted">
            Konstruksi
          </span>
        </span>
      )}
    </Link>
  );
}
