import Link from "next/link";
import Graphic from "@/components/Graphic";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";
import { services, processSteps } from "@/data/site";

export const metadata = {
  title: "Layanan",
  description:
    "Layanan PT Labda Jagat Konstruksi: general contractor, design & build, construction management, dan pre-construction consulting.",
};

const variants = ["skyline", "villa", "tower", "skyline"];
const tonesByIndex = ["amber", "green", "slate", "amber"];

export default function LayananPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Konstruksi terintegrasi, dari ide hingga serah terima."
        intro="Empat layanan inti yang dirancang untuk menemani setiap fase proyek Anda — dengan kendali mutu, biaya, dan waktu di setiap langkah."
      />

      <section className="py-20 lg:py-28">
        <div className="shell space-y-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <article className="grid items-center gap-8 bg-ink p-7 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="lg:col-span-1">
                  <span className="font-display text-2xl font-bold text-amber">
                    {s.no}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="font-display text-2xl font-bold text-bone lg:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-bone-dim">
                    {s.summary}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-bone-dim">
                        <span className="text-amber">▪</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-6">
                  <div className="aspect-[16/9] overflow-hidden rounded-xl border border-ink-700">
                    <Graphic tone={tonesByIndex[i]} variant={variants[i]} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Proses */}
      <section className="border-t border-ink-700 bg-ink-soft py-24 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Empat langkah menuju proyek yang sukses."
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.05}>
                <div className="h-full bg-ink-soft p-8">
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

      <section className="py-24 text-center lg:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-bone sm:text-4xl">
              Siap memulai proyek Anda?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/kontak" className="btn-primary">
                Minta Penawaran
              </Link>
              <Link href="/proyek" className="btn-ghost">
                Lihat Proyek
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
