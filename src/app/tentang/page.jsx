import Link from "next/link";
import Graphic from "@/components/Graphic";
import { PageHero, Reveal, SectionHeading } from "@/components/ui";
import { company, stats, values } from "@/data/site";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal PT Labda Jagat Konstruksi — kontraktor umum berbasis di Bali dengan komitmen pada presisi, integritas, dan keselamatan.",
};

const mission = [
  "Menghadirkan konstruksi bermutu tinggi dengan ketepatan waktu dan biaya.",
  "Menerapkan standar keselamatan kerja (K3) di setiap proyek.",
  "Membangun hubungan jangka panjang berlandaskan kepercayaan dan transparansi.",
  "Mengembangkan tenaga lokal Bali yang profesional dan berdaya saing.",
];

export default function TentangPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Membangun dunia, satu mahakarya dalam satu waktu."
        intro={company.meaning}
      />

      {/* Kisah */}
      <section className="py-24 lg:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal y={36}>
              <div className="aspect-square overflow-hidden rounded-2xl border border-ink-700">
                <Graphic tone="slate" variant="tower" label="Jagat Commercial Tower" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Kisah Kami" title="Akar di Bali, visi tanpa batas." />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-bone-dim">
                <p>
                  {company.legalName} lahir dari keyakinan bahwa konstruksi yang
                  baik adalah perpaduan antara keahlian teknis, ketelitian, dan
                  rasa hormat pada lingkungan tempat ia berdiri.
                </p>
                <p>
                  Berbasis di Denpasar, Bali, kami menangani beragam proyek —
                  dari vila tepi pantai hingga gedung komersial dan infrastruktur
                  sipil — dengan pendekatan yang sama: presisi tanpa kompromi.
                </p>
                <p>
                  Di bawah arahan{" "}
                  <span className="text-bone">{company.founder}</span>, tim kami
                  terus tumbuh sebagai mitra konstruksi tepercaya dan anggota aktif{" "}
                  {company.association}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="border-y border-ink-700 bg-ink-soft py-24 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Visi"
              title="Menjadi kontraktor terdepan yang membangun warisan."
              intro="Mewujudkan karya konstruksi yang presisi, berkelanjutan, dan bernilai lintas generasi — dimulai dari Bali untuk Indonesia."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-amber" /> Misi
              </span>
            </Reveal>
            <ul className="mt-8 space-y-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700">
              {mission.map((m, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex items-start gap-4 bg-ink-soft p-6">
                    <span className="font-display text-sm font-bold text-amber">
                      0{i + 1}
                    </span>
                    <span className="text-base text-bone-dim">{m}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nilai */}
      <section className="py-24 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Nilai Inti"
            title="Prinsip yang kami pegang teguh."
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink-700 p-7 transition-colors duration-300 hover:border-amber/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber/40 font-display text-sm font-bold text-amber">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-bone">
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

      {/* Statistik */}
      <section className="border-t border-ink-700 bg-ink-soft py-20">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-center sm:text-left">
                <p className="font-display text-4xl font-bold text-amber lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-bone-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 text-center lg:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-bone sm:text-4xl">
              Ingin tahu bagaimana kami bekerja?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/layanan" className="btn-primary">
                Lihat Layanan
              </Link>
              <Link href="/kontak" className="btn-ghost">
                Hubungi Kami
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
