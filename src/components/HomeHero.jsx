"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company, stats } from "@/data/site";

const ease = [0.22, 1, 0.36, 1];

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 blueprint opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber/10 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink" />

      <div className="shell relative w-full pb-16 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow"
        >
          <span className="h-px w-7 bg-amber" />
          Kontraktor Umum · Denpasar, Bali
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-[88px]">
          {["Membangun", "Presisi,", "Mewujudkan"].map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block text-amber"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease }}
            >
              Mahakarya
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-7 max-w-xl text-base leading-relaxed text-bone-dim sm:text-lg"
        >
          {company.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/proyek" className="btn-primary">
            Lihat Proyek Kami
            <span aria-hidden>→</span>
          </Link>
          <Link href="/kontak" className="btn-ghost">
            Konsultasi Gratis
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-700 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-bone sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-bone-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-bone-muted"
      >
        Gulir
      </motion.div>
    </section>
  );
}
