"use client";

import { useEffect, useState } from "react";

// Loader murni CSS: animasi & dismissal-nya berjalan lewat CSS, TIDAK
// bergantung pada React hydration. Jadi overlay selalu hilang tepat waktu
// meski JS belum selesai dimuat, dan scroll tidak pernah dikunci.
export default function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Hapus dari DOM setelah animasi CSS selesai (sekadar bersih-bersih).
    const t = setTimeout(() => setGone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="loader" role="status" aria-label="Memuat">
      <div className="absolute inset-0 blueprint opacity-40" />
      <div className="relative flex flex-col items-center">
        <svg className="loader__mark" width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 4 L50 16 V40 L28 52 L6 40 V16 Z" stroke="#E0A338" strokeWidth="1.5" />
          <path
            d="M18 38 V22 L28 16 L38 22 V38"
            stroke="#F4F2ED"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M28 16 V38" stroke="#E0A338" strokeWidth="2" />
        </svg>
        <p className="loader__title">LABDA JAGAT</p>
        <p className="loader__sub">Konstruksi</p>
        <span className="loader__bar">
          <span className="loader__bar-fill" />
        </span>
      </div>
    </div>
  );
}
