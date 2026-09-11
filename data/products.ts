// ============================================================
// FILE INI BISA DIEDIT UNTUK MENAMBAH / MENGUBAH DATA PRODUK
// ============================================================
// Setiap produk memiliki `id` yang sekaligus menjadi slug URL
// Contoh: id: "bata"  →  URL: /produk/bata

export type Category = "all" | "heavy" | "residential" | "decorative";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  /** Slug URL — harus unik, huruf kecil, tanpa spasi (gunakan tanda hubung) */
  id: string;
  categories: Exclude<Category, "all">[];
  img: string;
  alt: string;
  /** Mutu beton, ditampilkan sebagai badge */
  mutu: string;
  title: string;
  /** Deskripsi singkat untuk kartu produk */
  desc: string;
  /** Deskripsi panjang untuk halaman detail (opsional) */
  descLong?: string;
  specs: ProductSpec[];
  /** Teks pesan WhatsApp (URL-encoded) */
  waText: string;
  /** Fitur/keunggulan tambahan untuk halaman detail (opsional) */
  features?: string[];
}

export const products: Product[] = [
  {
    id: "bata",
    categories: ["residential", "heavy"],
    img: "/img/paving.jpeg",
    alt: "Paving Bata True Rectangular Brick Mutu K-400",
    mutu: "K-300 / K-400",
    title: "Tipe Bata (True Rectangular)",
    desc: "Model paving klasik terpopuler dengan fleksibilitas pola pemasangan anyam tikar, tulang ikan, atau susun bata sejajar.",
    descLong:
      "Paving Tipe Bata adalah pilihan paling populer untuk berbagai jenis proyek. Bentuknya yang persegi panjang klasik memberikan fleksibilitas pola pemasangan yang tinggi, mulai dari anyam tikar, tulang ikan, hingga susun bata sejajar. Dibuat dari beton mutu K-300 hingga K-400, produk ini mampu menahan beban kendaraan ringan hingga sedang.",
    specs: [
      { label: "Dimensi:", value: "10 x 20 cm" },
      { label: "Ketebalan:", value: "6 cm & 8 cm" },
      { label: "Kebutuhan / m²:", value: "44 Pcs / m²" },
      { label: "Warna:", value: "Abu, Merah, Hitam" },
    ],
    features: [
      "Pola pemasangan fleksibel (anyam tikar, tulang ikan, susun sejajar)",
      "Tersedia dalam berbagai pilihan warna",
      "Cocok untuk perumahan, parkir, dan jalan lingkungan",
      "Mudah diperbaiki per unit tanpa membongkar seluruh area",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Paving%20Tipe%20Bata%20ECOVING",
  },
  {
    id: "hexagon",
    categories: ["residential", "decorative"],
    img: "/img/paving_segi6.jpeg",
    alt: "Paving Segi Enam Hexagon Terracotta dan Basalt",
    mutu: "K-300 / K-350",
    title: "Tipe Segi Enam (Hexagon)",
    desc: "Desain pola sarang lebah geometris kokoh memberikan nuansa arsitektural modern untuk area pedestrian, taman, dan pelataran hotel.",
    descLong:
      "Paving Tipe Segi Enam (Hexagon) menghadirkan estetika arsitektural tinggi dengan pola sarang lebah yang khas. Cocok untuk area pedestrian, taman, plaza hotel, dan ruang publik yang mengutamakan tampilan visual. Tersedia dalam pilihan warna Terracotta dan Basalt yang elegan.",
    specs: [
      { label: "Dimensi:", value: "Diameter 20 cm" },
      { label: "Ketebalan:", value: "6 cm & 8 cm" },
      { label: "Kebutuhan / m²:", value: "27 Pcs / m²" },
      { label: "Warna:", value: "Abu, Terracotta, Basalt" },
    ],
    features: [
      "Tampilan estetis pola sarang lebah yang unik",
      "Pilihan warna premium: Terracotta & Basalt",
      "Ideal untuk taman, pedestrian, dan area komersial",
      "Tahan lama dan rendah perawatan",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Paving%20Tipe%20Hexagon%20ECOVING",
  },
];

/** Cari produk berdasarkan slug/id */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}
