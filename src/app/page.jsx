import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Marquee from "@/components/Marquee";
import Graphic from "@/components/Graphic";
import { Reveal, SectionHeading, Eyebrow } from "@/components/ui";
import { company, services, projects, processSteps, values } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />

      {/* Intro / Tentang singkat */}
      <section className="relative py-24 lg:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Keahlian lokal Bali, standar konstruksi kelas dunia."
              intro={company.meaning}
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-dim">
                Sejak awal berdiri, {company.legalName} berkomitmen menghadirkan
                konstruksi yang presisi, aman, dan tepat waktu — mulai dari hunian
                premium hingga gedung komersial dan infrastruktur sipil.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-ink-700 px-4 py-2 text-xs text-bone-dim">
                  {company.association}
                </span>
                <span className="rounded-full border border-ink-700 px-4 py-2 text-xs text-bone-dim">
                  Berbadan Hukum
                </span>
              </div>
              <Link
                href="/tentang"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber link-underline"
              >
                Pelajari kisah kami <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal y={36}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700">
                <Graphic tone="amber" variant="villa" label="Sanur Beachfront Villa" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="border-t border-ink-700 bg-ink-soft py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Layanan"
            title="Solusi konstruksi terintegrasi dari hulu ke hilir."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <div className="group h-full bg-ink-soft p-8 transition-colors duration-300 hover:bg-ink-800 lg:p-10">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-semibold text-amber">
                      {s.no}
                    </span>
                    <span className="text-bone-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber">
                      →
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                    {s.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link href="/layanan" className="btn-ghost">
                Semua Layanan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nilai / Values */}
      <section className="py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Mengapa Labda Jagat"
            title="Empat prinsip yang menopang setiap proyek."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full border-t border-ink-700 pt-6">
                  <h3 className="font-display text-xl font-bold text-bone">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proyek unggulan */}
      <section className="border-t border-ink-700 bg-ink-soft py-24 lg:py-32">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Portofolio" title="Proyek pilihan kami." />
            <Reveal>
              <Link href="/proyek" className="btn-ghost">
                Semua Proyek
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink-700">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                      <Graphic
                        tone={p.tone}
                        variant={i === 0 ? "tower" : i === 1 ? "skyline" : "villa"}
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-bone">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-bone-muted">
                        {p.category} · {p.location}
                      </p>
                    </div>
                    <span className="text-sm text-bone-muted">{p.year}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section className="py-24 lg:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Proses yang transparan dan terukur."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.05}>
                <div className="h-full bg-ink p-8">
                  <span className="font-display text-4xl font-bold text-ink-600">
                    {step.no}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 blueprint opacity-30" />
      <div className="absolute left-1/2 top-0 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-amber/10 blur-[140px]" />
      <div className="shell relative py-24 text-center lg:py-32">
        <Reveal>
          <Eyebrow>Mari Bekerja Sama</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-bone sm:text-5xl">
            Punya rencana proyek? Mari wujudkan bersama.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-bone-dim sm:text-lg">
            Konsultasikan kebutuhan konstruksi Anda dengan tim kami — gratis dan
            tanpa kewajiban.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/kontak" className="btn-primary">
              Hubungi Kami
            </Link>
            <Link href="/layanan" className="btn-ghost">
              Lihat Layanan
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
