"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav } from "@/data/site";

// Client component ringan: hanya state menu + scroll listener.
// TIDAK memakai Framer Motion → hydration cepat, hamburger langsung responsif.
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-ink-700 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell flex h-[72px] items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-amber" : "text-bone-dim hover:text-bone"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/kontak" className="btn-primary">
              Konsultasi Gratis
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            data-open={open}
            className="burger relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-ink-700 lg:hidden"
          >
            <span className="block h-[1.5px] w-5 bg-bone" />
            <span className="block h-[1.5px] w-5 bg-bone" />
            <span className="block h-[1.5px] w-5 bg-bone" />
          </button>
        </nav>
      </header>

      {/* Menu mobile / tablet — selalu ter-render, ditampilkan via CSS */}
      <div
        data-open={open}
        className="mobile-menu fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
      >
        <div className="absolute inset-0 blueprint opacity-30" />
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28 sm:px-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <li key={item.href} className="menu-item border-b border-ink-800">
                <Link
                  href={item.href}
                  className={`flex items-baseline justify-between py-5 font-display text-3xl font-semibold sm:text-4xl ${
                    isActive(item.href) ? "text-amber" : "text-bone"
                  }`}
                >
                  {item.label}
                  <span className="text-xs font-medium text-bone-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <Link href="/kontak" className="btn-primary w-full">
              Konsultasi Gratis
            </Link>
            <p className="text-xs text-bone-muted">Denpasar, Bali · Kontraktor Umum</p>
          </div>
        </div>
      </div>
    </>
  );
}
