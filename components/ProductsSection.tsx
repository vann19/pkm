"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, type Category } from "@/data/products";

const filters: { label: string; value: Category }[] = [
  { label: "Semua", value: "all" },
  { label: "Heavy Duty", value: "heavy" },
  { label: "Residensial", value: "residential" },
  { label: "Dekoratif", value: "decorative" },
];

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visible = products.filter(
    (p) => activeFilter === "all" || p.categories.includes(activeFilter as Exclude<Category, "all">)
  );

  return (
    <section id="katalog-produk" className="w-full py-space-4xl bg-surface-container-low/60 border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span
              data-aos="fade-right"
              data-aos-duration="500"
              className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold"
            >
              Ready Stock Pabrik
            </span>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mt-1"
            >
              Koleksi Tipe Paving Block Unggulan
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="font-body-md text-body-md text-on-surface-variant mt-1"
            >
              Spesifikasi komprehensif untuk estimasi rancang bangun presisi.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="inline-flex bg-surface-container p-1 rounded-xl shadow-inner self-start md:self-auto border border-surface-container-high"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setActiveFilter(f.value)}
                className={`px-space-md py-1.5 rounded-lg font-label-sm text-label-sm font-semibold transition-all ${
                  activeFilter === f.value
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
          {visible.map((product, i) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-surface-container"
            >
              {/* Gambar — klik ke halaman detail */}
              <Link
                href={`/produk/${product.id}`}
                className="relative h-64 bg-surface-container overflow-hidden block"
                aria-label={`Lihat detail ${product.title}`}
              >
                <Image
                  src={product.img}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-3 left-3 bg-primary text-on-primary font-code-tech text-code-tech px-2.5 py-1 rounded-md font-bold">
                  {product.mutu}
                </div>
                <div className="absolute top-3 right-3 bg-[#DCFCE7] text-[#16A34A] font-code-tech text-code-tech px-2.5 py-1 rounded-md font-semibold">
                  Tersedia
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-primary font-semibold text-sm px-4 py-2 rounded-full shadow flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    Lihat Detail
                  </span>
                </div>
              </Link>

              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <Link href={`/produk/${product.id}`}>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1 hover:underline underline-offset-2 decoration-primary/40">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{product.desc}</p>
                  <div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-space-sm rounded-xl mb-space-md font-code-tech text-code-tech">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="text-on-surface-variant block">{spec.label}</span>
                        <strong className="text-primary">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/produk/${product.id}`}
                    className="w-full inline-flex items-center justify-center gap-space-xs bg-primary/10 hover:bg-primary/20 text-primary py-2.5 rounded-xl font-label-sm text-label-sm font-semibold transition-all border border-primary/20"
                  >
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    <span>Lihat Detail</span>
                  </Link>
                  <a
                    href={`https://wa.me/628118920443?text=${product.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary py-3 rounded-xl font-label-md text-label-md font-bold shadow-sm hover:shadow transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
