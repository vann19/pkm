import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative w-full bg-surface-container-low/50 pb-space-3xl pt-space-xl border-b border-surface-container"
    >
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Hero Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="inline-flex items-center gap-space-2xs bg-surface-container-lowest border border-amber-gold/40 px-space-sm py-1 rounded-full mb-space-md shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-amber-gold">verified_user</span>
              <span className="font-code-tech text-code-tech text-primary uppercase tracking-wider font-semibold">
                Pabrikasi Hidrolik Otomatis SNI
              </span>
            </div>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-display text-headline-xl lg:text-display text-primary leading-tight font-extrabold tracking-tight mb-space-md"
            >
              Paving Block Berkualitas{" "}
              <span className="text-amber-gold">untuk Setiap Kebutuhan Anda</span>
            </h1>

            {/* Subtext */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-xl max-w-xl"
            >
              Solusi conblock mutu beton presisi K-300 hingga K-500 dengan daya tahan beban tinggi, anti-licin, dan
              estetika arsitektural modern untuk perumahan, kawasan industri, dan jalan raya.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full sm:w-auto"
            >
              <a
                href="https://wa.me/628118920443?text=Halo%20Conblock%20Prima,%20saya%20ingin%20konsultasi%20penawaran%20harga%20paving%20block"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary px-space-lg py-3.5 rounded-xl font-label-md text-label-md shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-all transform hover:-translate-y-0.5 font-bold"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Konsultasi via WhatsApp</span>
              </a>
              <a
                href="#katalog-produk"
                className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest hover:bg-surface-container text-primary border border-surface-container px-space-lg py-3.5 rounded-xl font-label-md text-label-md shadow-sm transition-all transform hover:-translate-y-0.5 font-semibold"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">view_quilt</span>
                <span>Lihat Katalog Produk</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="grid grid-cols-3 gap-space-xs mt-space-xl pt-space-md w-full border-t border-surface-container"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-gold text-[20px]">check_circle</span>
                <span className="font-code-tech text-code-tech text-on-surface-variant font-medium">
                  Mutu K-300 - K-500
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-gold text-[20px]">shield</span>
                <span className="font-code-tech text-code-tech text-on-surface-variant font-medium">Garansi 10 Tahun</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-gold text-[20px]">factory</span>
                <span className="font-code-tech text-code-tech text-on-surface-variant font-medium">Direct Factory</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="900"
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-surface-container-high">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1W6A4v3nP4c_z5gT3n4nn1nqEcF3p16aU0LnJ-ii5_18Qmel_zDRwL-YTVXYB-yYhdNwbuwmUDoIPbUNk8xf6J8ZxS5zhWwKuVOLeAf920hfz-SdPoEbsMSB2k9GVMlR0xwDofL66iINtvMIOWSmjilCm-kWfcS3y-QX6DYmqChyR7kahOBmM5jVaTp9qv_6QhT018rV_CO-z9JGWbczHPzOUOoZ9KWe411H4bgP5we9Ehye6f_0g1AJMU"
                alt="Instalasi Paving Block Arsitektural Mewah"
                width={800}
                height={460}
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              {/* Floating overlay */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-xl shadow-xl flex items-center gap-space-md border border-surface-container">
                <div className="w-12 h-12 rounded-lg bg-amber-gold/15 flex items-center justify-center text-amber-gold">
                  <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">Pabrikasi Hidrolik Presisi</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Toleransi presisi ±1.5mm sudut rapi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
