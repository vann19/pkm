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
  {
    id: "trihex",
    categories: ["heavy"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa7gbIHLJhE6fEkEDjd4P119Q2dSSmdXDLw5kkFESPL7mIse6v4S14xRd8gUbS4ahkB-F6rrIV3Oa9Sa0xbUfIN-TLUvolQdFT8O3HwSBOatGekLRZequHRA8ZqMl0qZ8W7wChZ74fjzXmedzIkHGM_WVQZpsn-U3kjovMFs41CTpkLky2TBcfoZlmFL9zIcgfURhTEw0fdBoUyqoc0U40mWssLcseYPLzRyi7ss36ptNKLh4898hK-A",
    alt: "Trihex interlocking heavy duty concrete pavers",
    mutu: "K-400 / K-500",
    title: "Tipe Trihex Interlocking",
    desc: "Sistem interlocking kuncian 3 arah anti-geser yang didesain khusus untuk menahan torsi belokan ban kendaraan muatan berat.",
    descLong:
      "Paving Trihex Interlocking dirancang untuk aplikasi beban berat. Sistem kuncian 3 arah yang inovatif memberikan resistensi anti-geser maksimal terhadap torsi dan tekanan dari kendaraan muatan berat. Ideal untuk jalan industri, area gudang logistik, dan kawasan pabrik.",
    specs: [
      { label: "Dimensi:", value: "19.7 x 9.6 cm" },
      { label: "Ketebalan:", value: "8 cm & 10 cm" },
      { label: "Kebutuhan / m²:", value: "39 Pcs / m²" },
      { label: "Aplikasi:", value: "Jalan Industri, Gudang" },
    ],
    features: [
      "Sistem kuncian 3 arah — anti-geser maksimal",
      "Mutu beton K-400 hingga K-500",
      "Tahan beban kendaraan berat & forklift",
      "Cocok untuk kawasan industri & logistik",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Paving%20Tipe%20Trihex%20ECOVING",
  },
  {
    id: "cacing",
    categories: ["heavy"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIksRDmqG54Dy12i6WT3aI72_TNwTu8_6lzDcat29KetXC-LEIgQfAqPF0cn2SRjsZ9jDe-dfHNOEbDYgs8bRWzfQ--OhN6IQVfibW44GXQSSCRn3iDsJfU97LpACc0gsf17B9NdVRtY_QfooahaSX4A3O05wN7u_v1Ec9RzTqfBoYCzEtDp7SypT8rtpKGuxZRJHYj4j5rwZah5kI8T2HUpIK11LDGEwdt5nVWj4JbbGnQtCAP_buGg",
    alt: "Wave Zigzag interlocking paving blocks",
    mutu: "K-400 / K-450",
    title: "Tipe Cacing (Wave Zigzag)",
    desc: "Kuncian dinamis maksimal pada sisi bergelombang, mencegah pergeseran horisontal akibat akselerasi kontainer dan truk forklift.",
    descLong:
      "Paving Tipe Cacing (Wave Zigzag) memiliki profil sisi yang bergelombang, memberikan kuncian dinamis maksimal antar unit. Desain ini secara efektif mencegah pergeseran horizontal yang biasa terjadi akibat akselerasi dan pengereman kendaraan berat seperti kontainer, truk, dan forklift.",
    specs: [
      { label: "Dimensi:", value: "11.5 x 22.5 cm" },
      { label: "Ketebalan:", value: "6 cm & 8 cm" },
      { label: "Kebutuhan / m²:", value: "39 Pcs / m²" },
      { label: "Aplikasi:", value: "Pelabuhan, SPBU, Terminal" },
    ],
    features: [
      "Profil bergelombang — kuncian dinamis antar unit",
      "Mencegah pergeseran horizontal akibat kendaraan berat",
      "Ideal untuk pelabuhan, SPBU, dan terminal",
      "Pemasangan cepat dengan pola berulang yang konsisten",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Paving%20Tipe%20Cacing%20ECOVING",
  },
  {
    id: "ubin",
    categories: ["residential", "decorative"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5388r1v3n3pqKUIPJEoe32ymQpxXrMOfHPTQUic4PFutV8f2hZj4WMD5HZ8M2l4fVOgb9dPlBVyQV0twrEFyK9dZCln1v_GDyGWL-h8lzmwXiykzBj6qIkQc_EO-HT6KkZHNh25rcxuYjPzWqVLJURaSfNvv_DGkhzuPd8jK234347rbCpDphb1kA_Ne-VAThbZ8TJGAgPpKgvoc87EovDOEHAXWZ_-j9nPl1s1Ptyqn04gCunNpFcQ",
    alt: "Square concrete paving tiles outdoor luxury plaza",
    mutu: "K-300",
    title: "Tipe Ubin (Square Stone)",
    desc: "Format ubin kubus berukuran lebar yang menghadirkan impresi mewah, clean, dan minimalis untuk trotoar dan plaza modern.",
    descLong:
      "Paving Tipe Ubin (Square Stone) hadir dalam format kubus besar yang memberikan kesan mewah, bersih, dan minimalis. Sangat cocok untuk trotoar kota, plaza komersial, dan area publik modern yang mengutamakan estetika. Tersedia dalam pilihan warna natural, hitam, dan kuning.",
    specs: [
      { label: "Dimensi:", value: "20x20 & 30x30 cm" },
      { label: "Ketebalan:", value: "6 cm & 8 cm" },
      { label: "Kebutuhan / m²:", value: "25 / 11 Pcs/m²" },
      { label: "Warna:", value: "Natural, Hitam, Kuning" },
    ],
    features: [
      "Tampilan mewah dan minimalis modern",
      "Tersedia dalam 2 ukuran: 20×20 dan 30×30 cm",
      "Pilihan warna: Natural, Hitam, Kuning",
      "Ideal untuk trotoar kota dan plaza komersial",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Paving%20Tipe%20Ubin%20ECOVING",
  },
  {
    id: "grassblock",
    categories: ["residential", "decorative"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-4WEWyUtDLJv_qqVmjW6PhB_6qApxsCua86-QNdg5g_gEpLDtq_9dNOVePO0NwHF1E4fdsj6S1RIa9MU_95lE9uwrED_MVZwBXh8mylk6VL_JvVE1WpIVx5tr25AZGqemKHUGAeSicdmar4A4c8nhMq3a1gkyKp4hwLDIzmKrFnP0MfQ80j3iOU9b_sQqPU2Te-yy-_2fTO6NL7rd2W5Fl_0b36qRWRKT1O-BlBokstAYO9CZ6l3XCQ",
    alt: "Concrete grass block pavers with lush green turf",
    mutu: "K-300",
    title: "Grass Block (Paving Rumput)",
    desc: "Solusi paving ramah lingkungan dengan rongga resapan air hujan optimal, mencegah genangan sekaligus menjaga penghijauan area.",
    descLong:
      "Grass Block adalah solusi paving ramah lingkungan yang memungkinkan air hujan meresap langsung ke dalam tanah melalui rongga-rongganya. Ini membantu mencegah genangan air (banjir lokal) sekaligus mempertahankan penghijauan area. Cocok untuk area parkir perumahan, taman, dan kawasan yang memerlukan drainase alami.",
    specs: [
      { label: "Dimensi:", value: "40 x 40 cm" },
      { label: "Varian:", value: "Lubang 5 & Lubang 8" },
      { label: "Ketebalan:", value: "6 cm & 8 cm" },
      { label: "Kebutuhan / m²:", value: "6.25 Pcs / m²" },
    ],
    features: [
      "Ramah lingkungan — air hujan meresap alami",
      "Mencegah genangan dan banjir lokal",
      "Tersedia varian Lubang 5 dan Lubang 8",
      "Ideal untuk parkir perumahan dan taman",
    ],
    waText: "Halo,%20saya%20tertarik%20dengan%20Grass%20Block%20ECOVING",
  },
];

/** Cari produk berdasarkan slug/id */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}
