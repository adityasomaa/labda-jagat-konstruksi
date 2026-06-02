import Link from "next/link";
import { company, stats } from "@/data/site";

// Server component — entrance memakai animasi CSS (.reveal). Konten
// ter-render penuh di HTML, terlihat seketika tanpa menunggu hydration.
export default function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 blueprint opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink" />

      <div className="shell relative w-full pb-16 pt-12">
        <div className="reveal eyebrow">
          <span className="h-px w-7 bg-amber" />
          Kontraktor Umum · Denpasar, Bali
        </div>

        <h1 className="reveal mt-7 max-w-5xl font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-[88px]" style={{ animationDelay: "0.08s" }}>
          Membangun Presisi, Mewujudkan{" "}
          <span className="text-amber">Mahakarya</span>
        </h1>

        <p className="reveal mt-7 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg" style={{ animationDelay: "0.18s" }}>
          {company.intro}
        </p>

        <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.26s" }}>
          <Link href="/proyek" className="btn-primary">
            Lihat Proyek Kami
            <span aria-hidden>→</span>
          </Link>
          <Link href="/kontak" className="btn-ghost">
            Konsultasi Gratis
          </Link>
        </div>

        <dl className="reveal mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-700 pt-8 sm:grid-cols-4" style={{ animationDelay: "0.34s" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-bone sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-bone-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-bone-muted">
        Gulir
      </div>
    </section>
  );
}
