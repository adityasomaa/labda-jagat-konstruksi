import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { PageHero, Reveal } from "@/components/ui";

export const metadata = {
  title: "Proyek",
  description:
    "Portofolio proyek PT Labda Jagat Konstruksi — hunian premium, gedung komersial, hospitality, dan infrastruktur sipil di Bali.",
};

export default function ProyekPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Karya yang berbicara lewat detail."
        intro="Sebagian proyek yang telah kami tangani di seluruh Bali — dari vila tepi pantai hingga gedung komersial dan infrastruktur."
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <ProjectsGrid />
        </div>
      </section>

      <section className="border-t border-ink-700 bg-ink-soft py-24 text-center lg:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex justify-center">
              <span className="eyebrow">
                <span className="h-px w-6 bg-amber" /> Proyek Berikutnya
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-bone sm:text-4xl">
              Jadikan proyek Anda karya berikutnya.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/kontak" className="btn-primary">
                Mulai Diskusi
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
