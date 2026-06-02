import ContactForm from "@/components/ContactForm";
import { PageHero, Reveal } from "@/components/ui";
import { company } from "@/data/site";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi PT Labda Jagat Konstruksi di Denpasar, Bali. Konsultasi gratis untuk kebutuhan konstruksi Anda.",
};

const details = [
  { label: "Alamat", value: company.address },
  { label: "Telepon", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { label: "Email", value: company.email, href: `mailto:${company.email}` },
  { label: "WhatsApp", value: company.whatsapp },
  { label: "Jam Operasional", value: company.hours },
];

export default function KontakPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Mari bicarakan proyek Anda."
        intro="Tim kami siap membantu — dari pertanyaan awal hingga penawaran lengkap. Konsultasi gratis tanpa kewajiban."
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-bone">
                Informasi Kontak
              </h2>
            </Reveal>
            <dl className="mt-8 space-y-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.05}>
                  <div className="bg-ink-soft p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-bone-muted">
                      {d.label}
                    </dt>
                    <dd className="mt-1.5 text-base text-bone">
                      {d.href ? (
                        <a href={d.href} className="transition-colors hover:text-amber">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            {/* Peta placeholder grafis */}
            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-700">
                <div className="relative aspect-[16/10] blueprint bg-ink-soft">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber bg-ink/60 text-amber">
                      ◎
                    </div>
                    <p className="mt-3 text-sm font-medium text-bone">Denpasar, Bali</p>
                    <p className="mt-1 text-xs text-bone-muted">
                      Peta interaktif menyusul
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal y={20}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
