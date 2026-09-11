import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import AOSInit from "@/components/AOSInit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ecoving - Concrete Paver Terkemuka Indonesia | Pabrik Paving Block",
  description:
    "Produsen paving block mutu tinggi K-300 hingga K-500 dengan teknologi hydraulic vibro-press. Layanan langsung pabrik untuk proyek perumahan, kawasan industri, dan jalan raya seluruh Indonesia.",
  keywords: [
    "paving block",
    "conblock",
    "paving block k300",
    "paving block k400",
    "paving block k500",
    "pabrik paving block",
    "jual paving block",
    "harga paving block",
    "paving block indonesia",
    "hydraulic vibro-press",
    "ecoving",
  ],
  authors: [{ name: "Ecoving" }],
  creator: "Ecoving",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.ecoving.co.id", // Ganti dengan URL domain asli Anda nantinya
    title: "Ecoving - Concrete Paver Terkemuka Indonesia",
    description:
      "Produsen paving block mutu tinggi K-300 hingga K-500 dengan teknologi hydraulic vibro-press. Layanan langsung pabrik untuk proyek perumahan, kawasan industri, dan jalan raya seluruh Indonesia.",
    siteName: "Ecoving",
    images: [
      {
        url: "/images/og-image.jpg", // Pastikan Anda memiliki gambar ini di folder public/images/
        width: 1200,
        height: 630,
        alt: "Ecoving Paving Block",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecoving - Concrete Paver Terkemuka Indonesia",
    description:
      "Produsen paving block mutu tinggi K-300 hingga K-500 dengan teknologi hydraulic vibro-press.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", // Pastikan ada file favicon.ico di folder public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Pastikan ada file apple-touch-icon.png (180x180px) di folder public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "O_fIMG8sWsKri9iBJalWMCvXW4zK1veY__e1zo5WOLI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background font-body-md text-body-md text-on-background selection:bg-amber-gold selection:text-primary">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
