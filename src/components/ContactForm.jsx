"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/site";

const serviceOptions = [
  "General Contractor",
  "Design & Build",
  "Construction Management",
  "Pre-Construction Consulting",
  "Lainnya",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [waUrl, setWaUrl] = useState(company.whatsappLink);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    message: "",
  });

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const buildWaUrl = () => {
    const lines = [
      `Halo ${company.name}, saya ingin berkonsultasi.`,
      "",
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Telepon: ${form.phone}` : null,
      `Layanan: ${form.service}`,
      "",
      "Pesan:",
      form.message,
    ].filter((l) => l !== null);
    return `${company.whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const url = buildWaUrl();
    setWaUrl(url);
    // Buka WhatsApp dengan pesan yang sudah terisi.
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("sent");
    }, 500);
  };

  const inputClass =
    "w-full rounded-xl border border-ink-700 bg-ink-soft px-4 py-3 text-sm text-bone placeholder:text-bone-muted outline-none transition-colors focus:border-amber";

  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-soft p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber text-2xl text-amber">
              ✓
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-bone">
              Mengarahkan ke WhatsApp...
            </h3>
            <p className="mt-3 max-w-sm text-sm text-bone-dim">
              Terima kasih, {form.name.split(" ")[0] || "Sahabat"}! Pesan Anda
              telah kami siapkan di WhatsApp. Jika tab tidak terbuka otomatis,
              gunakan tombol di bawah.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Buka WhatsApp
            </a>
            <button
              onClick={() => {
                setForm({ name: "", email: "", phone: "", service: serviceOptions[0], message: "" });
                setStatus("idle");
              }}
              className="mt-4 text-sm font-medium text-bone-muted transition-colors hover:text-amber"
            >
              Kirim pesan lain
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nama Lengkap">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Nama Anda"
                  className={inputClass}
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="email@contoh.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nomor Telepon">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+62 ..."
                  className={inputClass}
                />
              </Field>
              <Field label="Layanan">
                <select value={form.service} onChange={update("service")} className={inputClass}>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o} className="bg-ink-soft">
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Pesan">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="Ceritakan kebutuhan proyek Anda..."
                className={`${inputClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "sending" ? "Membuka WhatsApp..." : "Kirim via WhatsApp"}
            </button>
            <p className="text-center text-xs text-bone-muted">
              Pesan akan dikirim melalui WhatsApp ke {company.whatsapp}.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
