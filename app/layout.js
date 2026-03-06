import { Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://poroshukum.com"),
  title: {
    default: "Poros Hukum - Database Hukum Indonesia",
    template: "%s | Poros Hukum"
  },
  description:
    "Platform database hukum Indonesia untuk putusan, pasal, KUHP, regulasi, dan legal perusahaan yang cepat, terbuka, dan terstruktur.",
  keywords: [
    "database hukum indonesia",
    "putusan pengadilan",
    "undang-undang indonesia",
    "peraturan pemerintah",
    "peraturan presiden",
    "peraturan menteri",
    "peraturan daerah",
    "KUHP",
    "legal perusahaan",
    "pencarian hukum"
  ],
  applicationName: "Poros Hukum",
  authors: [{ name: "Poros Hukum" }],
  creator: "Poros Hukum",
  publisher: "Poros Hukum",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Poros Hukum",
    title: "Poros Hukum - Database Hukum Indonesia",
    description:
      "Akses putusan, pasal, KUHP, regulasi, dan legal perusahaan Indonesia dalam satu platform."
  },
  twitter: {
    card: "summary_large_image",
    title: "Poros Hukum - Database Hukum Indonesia",
    description:
      "Pusat data hukum digital Indonesia untuk pencarian hukum yang cepat dan terstruktur."
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "legal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${sora.variable} ${sourceSans.variable}`}>{children}</body>
    </html>
  );
}
