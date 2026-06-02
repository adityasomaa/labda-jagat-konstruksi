import Link from "next/link";
import Logo from "./Logo";
import { company, nav, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-700 bg-ink-soft">
      <div className="absolute inset-0 blueprint opacity-[0.15]" />
      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-dim">
              {company.intro}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-bone-muted">
              {company.association}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone-muted">
              Navigasi
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone-dim transition-colors hover:text-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone-muted">
              Layanan
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/layanan"
                    className="text-sm text-bone-dim transition-colors hover:text-amber"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone-muted">
              Kontak
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-bone-dim">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-amber">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-amber">
                  {company.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-bone-muted">{company.hours}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-ink-700 px-4 py-2 text-xs font-medium text-bone-dim transition-colors hover:border-amber hover:text-amber"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-bone-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
