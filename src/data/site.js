// Pusat data perusahaan. Sebagian angka & detail kontak bersifat
// placeholder — silakan ganti dengan data resmi PT Labda Jagat Konstruksi.

export const company = {
  name: "Labda Jagat Konstruksi",
  legalName: "PT Labda Jagat Konstruksi",
  tagline: "Membangun Presisi, Mewujudkan Mahakarya",
  intro:
    "Kontraktor umum berbadan hukum yang berbasis di Bali. Kami menghadirkan layanan konstruksi terintegrasi — dari perencanaan, desain, hingga pelaksanaan — dengan standar mutu, keselamatan, dan ketepatan waktu.",
  meaning:
    "“Labda” berarti tercapai dan mahir, “Jagat” berarti dunia. Sebuah janji: keahlian yang membangun dunia.",
  founder: "I Nyoman Jagat Maya, S.T., M.T.",
  association: "Anggota GAPENSI (Gabungan Pelaksana Konstruksi Indonesia)",
  address: "Jl. Bukit Sari, Denpasar, Bali, Indonesia",
  phone: "+62 361 000 000",
  email: "halo@labdajagatkonstruksi.com",
  whatsapp: "+62 812 0000 0000",
  hours: "Senin – Jumat, 08.00 – 17.00 WITA",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "120+", label: "Proyek Diselesaikan" },
  { value: "50+", label: "Tenaga Profesional" },
  { value: "98%", label: "Tingkat Kepuasan Klien" },
];

export const services = [
  {
    slug: "general-contractor",
    no: "01",
    title: "General Contractor",
    summary:
      "Pelaksanaan konstruksi menyeluruh untuk bangunan komersial, hunian, dan infrastruktur dengan kendali mutu di setiap tahap.",
    points: [
      "Bangunan gedung & komersial",
      "Hunian & vila premium",
      "Infrastruktur & sipil",
      "Renovasi & restorasi",
    ],
  },
  {
    slug: "design-build",
    no: "02",
    title: "Design & Build",
    summary:
      "Satu pintu dari perancangan hingga pembangunan. Efisiensi biaya dan waktu lewat tim desain dan konstruksi yang terintegrasi.",
    points: [
      "Konsep arsitektur & struktur",
      "Engineering terpadu",
      "Optimasi biaya (value engineering)",
      "Eksekusi cepat & terukur",
    ],
  },
  {
    slug: "construction-management",
    no: "03",
    title: "Construction Management",
    summary:
      "Manajemen proyek profesional yang menjaga jadwal, anggaran, dan kualitas — dengan pelaporan transparan kepada klien.",
    points: [
      "Perencanaan & penjadwalan",
      "Pengendalian biaya & mutu",
      "Manajemen K3 (HSE)",
      "Pelaporan progres berkala",
    ],
  },
  {
    slug: "pre-construction",
    no: "04",
    title: "Pre-Construction Consulting",
    summary:
      "Konsultasi pra-konstruksi untuk memastikan proyek dimulai dengan fondasi rencana yang matang dan minim risiko.",
    points: [
      "Studi kelayakan & estimasi",
      "Perizinan & regulasi",
      "Analisis risiko proyek",
      "Penjadwalan awal & BoQ",
    ],
  },
];

export const projects = [
  {
    title: "Sanur Beachfront Villa",
    category: "Hunian Premium",
    year: "2024",
    location: "Sanur, Bali",
    tone: "amber",
  },
  {
    title: "Jagat Commercial Tower",
    category: "Gedung Komersial",
    year: "2023",
    location: "Denpasar, Bali",
    tone: "slate",
  },
  {
    title: "Ubud Wellness Resort",
    category: "Hospitality",
    year: "2023",
    location: "Ubud, Bali",
    tone: "green",
  },
  {
    title: "Canggu Boutique Office",
    category: "Perkantoran",
    year: "2022",
    location: "Canggu, Bali",
    tone: "amber",
  },
  {
    title: "Tabanan Civil Infrastructure",
    category: "Infrastruktur Sipil",
    year: "2022",
    location: "Tabanan, Bali",
    tone: "slate",
  },
  {
    title: "Nusa Dua Private Estate",
    category: "Hunian Premium",
    year: "2021",
    location: "Nusa Dua, Bali",
    tone: "green",
  },
];

export const values = [
  {
    title: "Presisi",
    body: "Setiap milimeter penting. Kami bekerja dengan perencanaan detail dan eksekusi yang terukur.",
  },
  {
    title: "Integritas",
    body: "Transparansi biaya, jadwal, dan mutu. Kepercayaan klien adalah fondasi kami.",
  },
  {
    title: "Keselamatan",
    body: "Budaya K3 yang ketat melindungi pekerja, klien, dan lingkungan di setiap proyek.",
  },
  {
    title: "Mahakarya",
    body: "Kami tak sekadar membangun — kami menciptakan karya yang bertahan lintas generasi.",
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Konsultasi & Studi",
    body: "Memahami kebutuhan, lahan, anggaran, dan tujuan proyek Anda.",
  },
  {
    no: "02",
    title: "Desain & Perencanaan",
    body: "Merancang solusi arsitektur, struktur, dan jadwal yang matang.",
  },
  {
    no: "03",
    title: "Konstruksi",
    body: "Eksekusi lapangan dengan kendali mutu, biaya, dan keselamatan.",
  },
  {
    no: "04",
    title: "Serah Terima",
    body: "Penyelesaian, inspeksi akhir, dan dukungan purna proyek.",
  },
];

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Proyek", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];
