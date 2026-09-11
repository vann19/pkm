const testimonials = [
  {
    stars: 5,
    quote:
      '"Saya memilih Ecoving karena inovatif memanfaatkan limbah plastik dan serat kelapa. Selain kokoh, produk ini terbukti nyata ramah lingkungan."',
    avatarBg: "bg-primary",
    avatarText: "text-on-primary",
    initials: "HG",
    name: "Iwan",
    role: "Pelanggan Ecoving",
    image: "img/iwan.jpeg",
  },
  {
    stars: 5,
    quote:
      '" “Paving Block Ecoving menjadi kunci utama dalam penataan taman untuk kompetisi OLIVIA. Produknya tidak hanya estetik dan presisi saat dipasang, tetapi konsep ramah lingkungannya memberi nilai tambah besar hingga kami berhasil meraih Juara 1.”"',
    avatarBg: "bg-amber-gold",
    avatarText: "text-primary",
    initials: "BS",
    name: "Tim Mahasiswa UNS",
    role: "Juara 1 Lomba OLIVIA Landscape Gardening  Design",
    image: "img/uns_person.jpeg",
  },

];

export default function TestimoniSection() {
  return (
    <section id="testimoni" className="w-full py-space-4xl bg-surface-container-low/40 border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-space-3xl">
          <span
            data-aos="fade-down"
            data-aos-duration="500"
            className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold mb-space-2xs"
          >
            Reputasi Lapangan
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight"
          >
            Kepercayaan Pelanggan & Mitra Kontraktor
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs"
          >
            Ulasan nyata dari para profesional konstruksi, pengembang properti, dan pemilik hunian.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-gold mb-space-md">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span
                      key={j}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic leading-relaxed mb-space-lg">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md border-t border-surface-container">
                {t.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center ${t.avatarText} font-headline-sm font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">{t.name}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
