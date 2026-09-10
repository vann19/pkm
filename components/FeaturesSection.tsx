const features = [
  {
    icon: "fitness_center",
    badge: "Heavy Load",
    title: "Tahan Lama & Kuat Beban",
    desc: "Komposisi agregat pilihan dengan uji tekan laboratorium, sanggup menahan beban truk tronton & kontainer hingga 40 ton.",
    cta: "Uji Lab SNI Terverifikasi",
  },
  {
    icon: "texture",
    badge: "Safety First",
    title: "Permukaan Anti-Licin",
    desc: "Tekstur micro-grip teruji aman untuk lintasan pedestrian, carport basah, maupun tanjakan parkir komersial curam.",
    cta: "Aman untuk Cuaca Ekstrem",
  },
  {
    icon: "payments",
    badge: "Best Value",
    title: "Harga Pabrik Langsung",
    desc: "Penawaran tangan pertama tanpa perantara dengan opsi diskon volume proyek besar dan skema tempo B2B fleksibel.",
    cta: "Diskon Proyek Terbuka",
  },
  {
    icon: "local_shipping",
    badge: "Logistics Fleet",
    title: "Pengiriman Cepat & Siap",
    desc: "Armada truk derek dan dump truck mandiri menjamin pengiriman tepat jadwal langsung ke lokasi proyek Anda.",
    cta: "Tracking Pengiriman Riil",
  },
];

export default function FeaturesSection() {
  return (
    <section id="keunggulan" className="w-full py-space-4xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-space-3xl">
          <span
            data-aos="fade-down"
            data-aos-duration="500"
            className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold mb-space-2xs"
          >
            Keunggulan Spesifikasi
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight"
          >
            Standar Kualitas Tanpa Kompromi
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-xs"
          >
            Diformulasikan dengan teknologi hydraulic vibro-press mutakhir untuk memberikan ketahanan maksimal di segala
            jenis medan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container hover:border-amber-gold/40"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center text-amber-gold group-hover:bg-amber-gold group-hover:text-primary transition-colors mb-space-md shadow-inner">
                  <span className="material-symbols-outlined text-[32px]">{f.icon}</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-primary text-on-primary font-code-tech text-code-tech uppercase mb-space-xs font-semibold">
                  {f.badge}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{f.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center text-amber-gold font-label-sm text-label-sm font-semibold gap-1 group-hover:translate-x-1 transition-transform">
                <span>{f.cta}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
