"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-6 bg-amber" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-bone sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed text-bone-dim sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-700 pt-[72px]">
      <div className="absolute inset-0 blueprint opacity-30" />
      <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-amber/10 blur-[130px]" />
      <div className="shell relative py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-bone sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-dim sm:text-lg">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
