"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  /** Angka akhir untuk count-up. null = tidak ada animasi angka (langsung tampil statis) */
  target: number | null;
  /** Suffix setelah angka, mis: "k+", "%", "+" */
  suffix: string;
  /** Prefix sebelum angka, mis: "$" */
  prefix?: string;
  /** Jumlah desimal yang ditampilkan */
  decimals?: number;
  label: string;
  sub: string;
  border: boolean;
}

const stats: Stat[] = [
  {
    target: 500,
    suffix: "k+",
    decimals: 0,
    label: "m² Paving Terpasang",
    sub: "Komersial & Residensial",
    border: true,
  },
  {
    target: 99.4,
    suffix: "%",
    decimals: 1,
    label: "Presisi Dimensi Pabrik",
    sub: "Sesuai SNI 03-0691",
    border: true,
  },
  {
    target: 15,
    suffix: "+",
    decimals: 0,
    label: "Tahun Pengalaman",
    sub: "Sejak 2009 di Indonesia",
    border: true,
  },
  {
    target: 100,
    suffix: "%",
    decimals: 0,
    label: "Jangkauan Pengiriman",
    sub: "Jabodetabek & Seluruh RI",
    border: false,
  },
];

// ─── Hook: Count-Up ────────────────────────────────────────────────────────────
function useCountUp(
  target: number,
  decimals: number,
  duration: number,
  active: boolean
): string {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutCubic untuk efek melambat di akhir
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count.toFixed(decimals);
}

// ─── Komponen satu stat item ────────────────────────────────────────────────────
function StatItem({
  stat,
  index,
  active,
}: {
  stat: Stat;
  index: number;
  active: boolean;
}) {
  const duration = 1800 + index * 200; // stagger durasi per item
  const countStr = useCountUp(
    stat.target ?? 0,
    stat.decimals ?? 0,
    duration,
    active
  );

  return (
    <div
      className={`flex flex-col transition-all duration-700 ease-out ${
        stat.border ? "md:border-r border-primary-container/80 md:pr-space-md" : ""
      } ${
        active
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Angka animasi */}
      <span
        className="font-display text-headline-xl lg:text-display text-amber-gold leading-none font-black tabular-nums"
        aria-live="polite"
        aria-atomic="true"
      >
        {stat.prefix ?? ""}
        {stat.target !== null ? countStr : ""}
        {stat.suffix}
      </span>

      <span className="font-label-md text-label-md text-surface-bright mt-1">
        {stat.label}
      </span>
      <span className="font-code-tech text-code-tech text-on-primary-container mt-0.5">
        {stat.sub}
      </span>

      {/* Garis bawah dekoratif yang tumbuh */}
      <span
        className="block h-0.5 bg-amber-gold/40 rounded-full mt-3 origin-left transition-all duration-700 ease-out"
        style={{
          width: active ? "40px" : "0px",
          transitionDelay: `${index * 120 + 400}ms`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Section utama ──────────────────────────────────────────────────────────────
export default function StatsSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); // animasi hanya sekali
        }
      },
      { threshold: 0.25 } // mulai saat 25% section terlihat
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#08274A] text-on-primary py-space-xl border-y border-primary-container overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md lg:gap-space-xl text-center md:text-left">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
