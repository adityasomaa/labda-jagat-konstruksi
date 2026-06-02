import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 blueprint opacity-30" />
      <div className="shell relative text-center">
        <p className="font-display text-[120px] font-extrabold leading-none text-ink-700 sm:text-[180px]">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-bone sm:text-3xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-bone-dim">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
