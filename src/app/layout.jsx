import { Sora, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://labdajagatkonstruksi.com"),
  title: {
    default: `${company.legalName} — Kontraktor & Konstruksi Bali`,
    template: `%s — ${company.name}`,
  },
  description: company.intro,
  keywords: [
    "kontraktor Bali",
    "konstruksi Bali",
    "general contractor",
    "design and build",
    "Labda Jagat Konstruksi",
    "kontraktor Denpasar",
  ],
  openGraph: {
    title: `${company.legalName} — ${company.tagline}`,
    description: company.intro,
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = {
  themeColor: "#0C0C0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <Loader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
