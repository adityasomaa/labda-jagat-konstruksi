"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Graphic from "./Graphic";
import { projects } from "@/data/site";

const variantPool = ["tower", "villa", "skyline"];

export default function ProjectsGrid() {
  const categories = ["Semua", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              active === c
                ? "border-amber bg-amber text-ink"
                : "border-ink-700 text-bone-dim hover:border-amber/50 hover:text-bone"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink-700">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                  <Graphic tone={p.tone} variant={variantPool[i % variantPool.length]} />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-bone">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-bone-muted">
                    {p.category} · {p.location}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-bone-muted">{p.year}</span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
