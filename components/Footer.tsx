import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="w-full bg-[#08274A] text-on-primary pt-space-3xl pb-space-2xl border-t border-primary-container"
    >
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl">
          {/* Brand */}
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="lg:col-span-4 space-y-space-md"
          >
            <div className="flex items-center gap-space-sm">
              <div className="p-1.5 bg-surface-container-lowest rounded">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UOfnmOHcYO4GSu4_eGwanl80G12ED1yVVHTjA4pNY555CYEztzHDDoPUU1CzpdEu7HlNp1eYwLEBwqhb0un7Zu475aaJjvx41YReROoWJgjDLUEEP1Nn0DKWdeWsOgKMuPEeg3VSa2_vtxVW-mTs8Y1AxlY2iw6Fx4wJYGJmgaYGhtSCm-CyXLDWHxS3OSIIfesUMhQQYrihh0CDsFrMexg7AEGev1ntSmUI2VQYE2KUU6SDbbV07l0rc6"
                  alt="Conblock Prima Logo Footer"
                  width={56}
                  height={28}
                  className="h-7 w-auto object-contain"
                  unoptimized
                />
              </div>
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight font-bold">
                CONBLOCK PRIMA
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Produsen material paving block mutu tinggi (K-300 s/d K-500), grassblock, kanstin, dan precast industri
              untuk proyek sipil, komersial, perumahan, dan pelabuhan seluruh Indonesia.
            </p>
            <div className="flex items-center gap-space-sm text-on-primary-container">
              <span className="material-symbols-outlined text-[20px] text-amber-gold">verified</span>
              <span className="font-code-tech text-code-tech uppercase tracking-wide">
                Standar Mutu SNI 03-0691-1996
              </span>
            </div>
          </div>

          {/* Kontak */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:col-span-3 space-y-space-sm"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Kantor & Showroom</h3>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Kawasan Industri Jababeka Tahap II, Blok C-18, Cikarang, Bekasi, Jawa Barat 17530
            </p>
            <div className="pt-space-xs space-y-space-2xs font-body-sm text-body-sm text-on-primary-container">
              <p>
                <strong className="text-on-primary">Telepon Pabrik:</strong> +62 21 8934 1120
              </p>
              <p>
                <strong className="text-on-primary">WhatsApp Hotline:</strong> +62 811 8920 443
              </p>
              <p>
                <strong className="text-on-primary">Email:</strong> marketing@conblockprima.co.id
              </p>
            </div>
          </div>

          {/* Jam Operasional */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:col-span-2 space-y-space-sm"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Jam Operasional</h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li>
                <span className="block text-on-primary font-semibold">Senin - Jumat:</span> 08.00 - 17.00 WIB
              </li>
              <li>
                <span className="block text-on-primary font-semibold">Sabtu:</span> 08.00 - 14.00 WIB
              </li>
              <li>
                <span className="block text-on-primary font-semibold">Minggu & Hari Libur:</span> Layanan Darurat
                Proyek On-Call
              </li>
            </ul>
          </div>

          {/* Lokasi Pabrik */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="lg:col-span-3 space-y-space-sm"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Lokasi Pabrik & Plant</h3>
            <div className="w-full h-32 rounded-lg bg-primary-container flex flex-col items-center justify-center p-space-sm text-center relative overflow-hidden group border border-surface-tint/20">
              <span className="material-symbols-outlined text-[32px] text-amber-gold mb-1">pin_drop</span>
              <span className="font-label-md text-label-md text-on-primary font-bold">Pabrik Utama Cikarang</span>
              <span className="font-code-tech text-code-tech text-on-primary-container">
                Buka Rute Pengiriman Logistik
              </span>
              <a
                href="#"
                className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-label-sm text-label-sm text-amber-gold font-bold"
              >
                Lihat Panduan Logistik
              </a>
            </div>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-amber-gold hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                href="#galeri"
                className="w-9 h-9 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-amber-gold hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">photo_library</span>
              </a>
              <a
                href="mailto:marketing@conblockprima.co.id"
                className="w-9 h-9 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-amber-gold hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-primary-container font-body-sm text-body-sm border-t border-primary-container"
        >
          <p>© 2024 PT Conblock Prima Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-space-md">
            <a href="#katalog-produk" className="hover:text-amber-gold transition-colors">
              Katalog Teknis
            </a>
            <a href="#" className="hover:text-amber-gold transition-colors">
              Kebijakan Pengiriman & Garansi Mutu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
