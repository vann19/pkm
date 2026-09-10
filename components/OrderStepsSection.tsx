export default function OrderStepsSection() {
  return (
    <section className="w-full py-space-4xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-space-3xl">
          <span
            data-aos="fade-down"
            data-aos-duration="500"
            className="font-code-tech text-code-tech uppercase tracking-widest text-amber-gold font-bold mb-space-2xs"
          >
            Prosedur Praktis
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight"
          >
            3 Langkah Mudah Pemesanan
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs"
          >
            Alur pemesanan transparan tanpa birokrasi rumit, langsung terhubung dengan tim teknis pabrik.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl relative">
          {/* Step 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="relative bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-surface-container"
          >
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-display text-headline-sm font-black mb-space-md">
              1
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Pilih Tipe & Volume</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Tentukan model paving (Bata, Hexagon, Trihex), ketebalan (6 cm atau 8 cm), pilihan warna, dan estimasi
              luas area (m²).
            </p>
            <div className="mt-space-md inline-flex items-center gap-1 font-code-tech text-code-tech text-amber-gold font-bold">
              <span className="material-symbols-outlined text-[18px]">straighten</span>
              <span>Bantuan hitung luas gratis</span>
            </div>
          </div>

          {/* Step 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-md transition-shadow border-2 border-amber-gold/40"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-gold text-primary flex items-center justify-center font-display text-headline-sm font-black mb-space-md shadow-sm">
              2
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
              Hubungi via WhatsApp
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Konsultasikan kebutuhan proyek Anda secara langsung dengan customer support teknis kami untuk mendapatkan
              penawaran resmi dan sampel material cuma-cuma.
            </p>
            <div className="mt-space-md inline-flex items-center gap-1 font-code-tech text-code-tech text-[#25D366] font-bold">
              <span className="material-symbols-outlined text-[18px]">forum</span>
              <span>Respon Cepat &lt; 15 Menit</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-surface-container"
          >
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-display text-headline-sm font-black mb-space-md">
              3
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Konfirmasi & Kirim</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Setelah kesepakatan PO, armada truk derek kami bergerak mengantar produk langsung ke lokasi kerja Anda
              sesuai jadwal yang disepakati.
            </p>
            <div className="mt-space-md inline-flex items-center gap-1 font-code-tech text-code-tech text-amber-gold font-bold">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>Bisa Langsung Bongkar Crane</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Callout */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-space-3xl bg-[#08274A] text-on-primary rounded-2xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl border border-primary-container"
        >
          <div className="flex flex-col">
            <span className="font-code-tech text-code-tech text-amber-gold font-bold uppercase tracking-wider">
              Layanan Konsultasi Bebas Biaya
            </span>
            <h3 className="font-headline-md text-headline-md font-bold mt-1 text-on-primary">
              Butuh Estimasi Biaya & Sampel Fisik?
            </h3>
            <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
              Kirimkan ukuran lahan atau denah DWG/PDF Anda, kami kalkulasikan rincian biayanya hari ini.
            </p>
          </div>
          <a
            href="https://wa.me/628118920443?text=Halo%20Conblock%20Prima,%20saya%20ingin%20minta%20sampel%20dan%20penawaran%20harga%20resmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary px-space-xl py-3.5 rounded-xl font-label-md text-label-md font-bold shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[22px]">chat</span>
            <span>Mulai Pesan Sekarang via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
