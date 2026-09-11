import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";

// Pre-generate semua slug saat build
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

// Metadata dinamis per halaman
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };
  return {
    title: `${product.title} | ECOVING Paving Block`,
    description: product.descLong ?? product.desc,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/#katalog-produk" className="hover:text-primary transition-colors">
            Katalog Produk
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary font-semibold" aria-current="page">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gambar Produk */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-surface-container">
            <Image
              src={product.img}
              alt={product.alt}
              fill
              className="object-cover"
              unoptimized
              priority
            />
            {/* Badge Mutu */}
            <div className="absolute top-4 left-4 bg-primary text-on-primary font-code-tech text-code-tech px-3 py-1.5 rounded-md font-bold text-sm">
              {product.mutu}
            </div>
            <div className="absolute top-4 right-4 bg-[#DCFCE7] text-[#16A34A] font-code-tech text-code-tech px-3 py-1.5 rounded-md font-semibold text-sm">
              Tersedia
            </div>
          </div>

          {/* Info Produk */}
          <div className="flex flex-col gap-6">
            {/* Judul & Deskripsi */}
            <div>
              <span className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold text-xs">
                Produk Unggulan
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary font-bold mt-1">
                {product.title}
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                {product.descLong ?? product.desc}
              </p>
            </div>

            {/* Spesifikasi */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-surface-container">
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold mb-4">
                Spesifikasi Teknis
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="font-code-tech text-code-tech text-on-surface-variant uppercase tracking-wide text-xs">
                      {spec.label}
                    </span>
                    <strong className="font-body-md text-body-md text-primary font-semibold mt-0.5">
                      {spec.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitur / Keunggulan */}
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold mb-3">
                  Keunggulan Produk
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant">
                      <span
                        className="material-symbols-outlined text-[18px] text-[#16A34A] mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={`https://wa.me/6282192231128?text=${product.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa52] text-white py-3.5 rounded-xl font-label-md text-label-md font-bold shadow-sm hover:shadow transition-all"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chat</span>
                <span>Pesan via WhatsApp</span>
              </a>
              <Link
                href="/#katalog-produk"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary py-3.5 rounded-xl font-label-md text-label-md font-semibold border border-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_back</span>
                <span>Lihat Produk Lain</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Terkait */}
      <RelatedProducts currentId={product.id} />
    </main>
  );
}

// Komponen produk terkait (server component)
function RelatedProducts({ currentId }: { currentId: string }) {
  const related = products
    .filter((p) => p.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 border-t border-surface-container mt-8">
      <h2 className="font-headline-md text-headline-md text-primary font-bold mb-6">
        Produk Lainnya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link
            key={p.id}
            href={`/produk/${p.id}`}
            className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-surface-container"
          >
            <div className="relative h-48 bg-surface-container overflow-hidden">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-4">
              <span className="font-code-tech text-code-tech text-amber-gold text-xs font-bold uppercase">
                {p.mutu}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                {p.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                {p.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
