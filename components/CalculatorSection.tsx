"use client";

import { useState, useEffect } from "react";

const pavingOptions = [
  { label: "Paving Bata (44 pcs/m²)", pcsPerM2: 44, name: "Paving Bata (10x20 cm)" },
  { label: "Paving Hexagon (27 pcs/m²)", pcsPerM2: 27, name: "Paving Hexagon (Dia. 20 cm)" },
];

export default function CalculatorSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [area, setArea] = useState(100);
  const [totalPcs, setTotalPcs] = useState(0);
  const [trucks, setTrucks] = useState(0);

  useEffect(() => {
    const pcsPerM2 = pavingOptions[selectedIdx].pcsPerM2;
    const pcs = Math.ceil(area * pcsPerM2);
    const truckCapacityM2 = 30;
    const truckCount = area > 0 ? Math.max(1, Math.ceil(area / truckCapacityM2)) : 0;
    setTotalPcs(pcs);
    setTrucks(truckCount);
  }, [selectedIdx, area]);

  const handleSendWa = () => {
    const pavingName = pavingOptions[selectedIdx].name;
    const text = encodeURIComponent(
      `Halo Conblock Prima, saya telah menghitung kebutuhan di website:\n- Produk: ${pavingName}\n- Luas: ${area} m²\n- Estimasi Kebutuhan: ${totalPcs.toLocaleString("id-ID")} pcs.\n\nMohon info harga diskon pabrik dan ongkos kirim ke lokasi saya.`
    );
    window.open(`https://wa.me/628118920443?text=${text}`, "_blank");
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low/50 border-t border-surface-container">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="bg-surface-container-lowest rounded-2xl p-space-xl lg:p-space-2xl shadow-md border border-surface-container"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left info */}
            <div className="lg:col-span-5">
              <span
                data-aos="fade-right"
                data-aos-delay="100"
                className="font-code-tech text-code-tech text-amber-gold font-bold uppercase tracking-wider"
              >
                Kalkulator Estimasi Instan
              </span>
              <h3
                data-aos="fade-right"
                data-aos-delay="200"
                className="font-headline-lg text-headline-lg text-primary font-bold mt-1 mb-space-sm"
              >
                Hitung Kebutuhan Paving Anda
              </h3>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed"
              >
                Masukkan estimasi luas area yang akan dipasang. Kami akan langsung mengkalkulasikan jumlah estimasi
                pieces dan rekomendasi armada logistik.
              </p>
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                className="space-y-space-xs font-code-tech text-code-tech text-on-surface-variant"
              >
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-gold text-[18px]">check</span>
                  Termasuk rekomendasi buffer susun 3% - 5%
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-amber-gold text-[18px]">check</span>
                  Langsung terhubung ke penawaran resmi pabrik
                </p>
              </div>
            </div>

            {/* Right calculator */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl border border-surface-container"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-md">
                <div>
                  <label
                    className="block font-label-sm text-label-sm text-primary font-semibold mb-1"
                    htmlFor="paving-type"
                  >
                    Pilih Model Paving
                  </label>
                  <select
                    id="paving-type"
                    value={selectedIdx}
                    onChange={(e) => setSelectedIdx(Number(e.target.value))}
                    className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm p-2.5 rounded-lg border border-surface-container focus:outline-none focus:ring-2 focus:ring-amber-gold"
                  >
                    {pavingOptions.map((opt, i) => (
                      <option key={opt.name} value={i}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block font-label-sm text-label-sm text-primary font-semibold mb-1"
                    htmlFor="area-input"
                  >
                    Luas Area (m²)
                  </label>
                  <input
                    id="area-input"
                    type="number"
                    min={1}
                    placeholder="Contoh: 150"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value) || 0)}
                    className="w-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm p-2.5 rounded-lg border border-surface-container focus:outline-none focus:ring-2 focus:ring-amber-gold"
                  />
                </div>
              </div>

              {/* Output */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl grid grid-cols-2 sm:grid-cols-3 gap-space-sm text-center mb-space-md border border-surface-container">
                <div>
                  <span className="font-code-tech text-code-tech text-on-surface-variant block">Total Volume</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    {totalPcs.toLocaleString("id-ID")}
                  </span>
                  <span className="font-code-tech text-code-tech text-outline block">Pieces</span>
                </div>
                <div>
                  <span className="font-code-tech text-code-tech text-on-surface-variant block">Estimasi Truk</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">{trucks}</span>
                  <span className="font-code-tech text-code-tech text-outline block">Colt Diesel (CDD)</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-code-tech text-code-tech text-on-surface-variant block">Status Pasokan</span>
                  <span className="font-headline-sm text-headline-sm text-[#16A34A] font-bold">Ready Plant</span>
                  <span className="font-code-tech text-code-tech text-[#16A34A] block">Siap Kirim</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSendWa}
                className="w-full inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary py-3 rounded-xl font-label-md text-label-md font-bold transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Dapatkan Penawaran WhatsApp untuk Kalkulasi Ini</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
