import Image from "next/image";

const galleryItems = [
  {
    colSpan: "md:col-span-7",
    height: "h-80 lg:h-96",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1W6A4v3nP4c_z5gT3n4nn1nqEcF3p16aU0LnJ-ii5_18Qmel_zDRwL-YTVXYB-yYhdNwbuwmUDoIPbUNk8xf6J8ZxS5zhWwKuVOLeAf920hfz-SdPoEbsMSB2k9GVMlR0xwDofL66iINtvMIOWSmjilCm-kWfcS3y-QX6DYmqChyR7kahOBmM5jVaTp9qv_6QhT018rV_CO-z9JGWbczHPzOUOoZ9KWe411H4bgP5we9Ehye6f_0g1AJMU",
    alt: "Driveway Mewah Hunian Modern dengan Conblock Kombinasi",
    tag: "Perumahan Elit Serpong",
    title: "Driveway & Carport Cluster Modern",
    desc: "Kombinasi Paving Bata Terracotta dan Hexagon Basalt K-350.",
    padding: "p-space-lg",
    titleSize: "font-headline-md text-headline-md",
    aos: "fade-right",
    aosDelay: 0,
  },
  {
    colSpan: "md:col-span-5",
    height: "h-80 lg:h-96",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFSDlm8P5klabxwRQH7EF-4qB3w9Tj5mpfOlR_rbWqRmvP5pgRHxmEoy1MelrcfDRTjXGrjgWtLmcgkuXedymm-GqBBN4B4ByxTPNP_EW5QNmHdK6qMdMdqj-cW5CPTsZ4ZMFBRYe7YG5w2aHEltWb-1dFCFCv1rD212zFnMmibbKYUY_7tenfeE3QU9Fl0OwH4p2tuD5c8KtdfsAr5Xm4grQ-HqluiamWXytC10FfY8r4FlnwoRQHsw",
    alt: "Industrial logistics park container yard paved",
    tag: "Kawasan Industri Cikarang",
    title: "Jalur Logistik Kontainer 40 Ton",
    desc: "Paving Trihex 10 cm Mutu Beton K-500 Heavy Load.",
    padding: "p-space-lg",
    titleSize: "font-headline-md text-headline-md",
    aos: "fade-left",
    aosDelay: 100,
  },
  {
    colSpan: "md:col-span-4",
    height: "h-72",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpi5Gysi1CJKs5Ao7NgqH_nMMPcnbnWbF5z87t37P_kNwB8-4k6CUW_yoaKV_MU5dBFKsqaE-U_d071cjoCdeJt36Be5ZRvKUpdzusjfQmD5ucGXH-MTkQj8U82F0isXWrQ74mZxCFk-elRtIzhNCWAIGO0b9kx9K-qfvsg6Heyx94kbk3tZNo4Wl9G5Tosq3aBZFzmjKRqkUxYYa7VQwnDU4YeGiP8IHqwUIBekaukN7esVXgswAGyw",
    alt: "Modern wide urban pedestrian sidewalk paved",
    tag: "Penataan Kota",
    title: "Trotoar & Jalur Pedestrian",
    desc: "Tipe Ubin 30x30 cm Anti-Slip K-300.",
    padding: "p-space-md",
    titleSize: "font-headline-sm text-headline-sm",
    aos: "fade-up",
    aosDelay: 0,
  },
  {
    colSpan: "md:col-span-4",
    height: "h-72",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVwAE1rDXut11IiSI0lnC6bpEfhjtoSoY8kUMqpeNoDHZhf-S4XfDLs3Uop_4YTVNlkyl5fD39yXPAhcvc8Iy5iiJHxZi6UefoYadoDWL0rzWzgQOPloENBIGFojlLwu-S0Ap1-qS5sJZqNVZ_110EV5FVaN8U7ALKVzeCC745A0hxft_OKT7L4xUm02dSdGRB4srQx3a_NF8WhHxPiCkyuL5CylX_w2ULi6C74__Wlcy0YQT_193jA",
    alt: "Tropical villa resort parking area with grassblock paving",
    tag: "Resort & Hospitality",
    title: "Area Parkir Resapan Air Hijau",
    desc: "Grass Block 8 Lubang tebal 8 cm terintegrasi drainase.",
    padding: "p-space-md",
    titleSize: "font-headline-sm text-headline-sm",
    aos: "fade-up",
    aosDelay: 100,
  },
  {
    colSpan: "md:col-span-4",
    height: "h-72",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcFEY3OvUjM6CYh9Y2iCUFJQSTZeCP4RP-d5-7YF4-v7QhXM-qrEhV7q52OVqr0Zylt-UaUnRMubQPkj_emd_89h-Xe5cLy-GEIPZNa9Ovk7eGZP9Y5xrrdGG4XVs7Khi8G9M9sBoen7_XTjV2KyhXKtjXnU6d_RpgUAg7bp33kn-cYBruIIccKkj-NVz9zq4jYgmb_xR4dD0xZiD-irQilSOjZBoeyjfDBDEokkJVcrZRlQ-bG_dVvA",
    alt: "Commercial retail center plaza with decorative interlocking concrete paving",
    tag: "Komersial Plaza",
    title: "Plaza Lifestyle Mall",
    desc: "Pola Kombinasi Hexagon & Bata Warna K-350.",
    padding: "p-space-md",
    titleSize: "font-headline-sm text-headline-sm",
    aos: "fade-up",
    aosDelay: 200,
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="w-full py-space-4xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span
              data-aos="fade-right"
              data-aos-duration="500"
              className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold"
            >
              Track Record
            </span>
            <h2
              data-aos="fade-right"
              data-aos-delay="100"
              className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight mt-1"
            >
              Portofolio Proyek Terpercaya
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="font-body-md text-body-md text-on-surface-variant mt-1"
            >
              Dari driveway hunian mewah hingga jalan logistik pergudangan nasional.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest px-space-md py-2 rounded-full border border-surface-container shadow-sm"
          >
            <span className="material-symbols-outlined text-amber-gold">domain_verification</span>
            <span className="font-semibold text-primary">500+ Titik Selesai Tanpa Retur</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              data-aos={item.aos}
              data-aos-delay={item.aosDelay}
              className={`${item.colSpan} relative ${item.height} rounded-2xl overflow-hidden group shadow-md border border-surface-container`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent flex flex-col justify-end ${item.padding}`}
              >
                <span className="font-code-tech text-code-tech text-amber-gold uppercase tracking-wider font-bold">
                  {item.tag}
                </span>
                <h3 className={`${item.titleSize} text-on-primary font-bold`}>{item.title}</h3>
                <p className="font-body-sm text-body-sm text-surface-container-highest">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
