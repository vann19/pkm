"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", path: "#beranda" },
  { label: "Produk", path: "#katalog-produk" },
  { label: "Keunggulan", path: "#keunggulan" },
  { label: "Galeri", path: "#galeri" },
  { label: "Testimoni", path: "#testimoni" },
  { label: "Kontak", path: "#kontak" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("#beranda");
  const [clickedLink, setClickedLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ripple, setRipple] = useState<{ id: string; x: number; y: number } | null>(null);

  // ── Navbar shadow on scroll ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── IntersectionObserver: update active link berdasarkan section ──────────
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.path.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(`#${id}`);
        },
        { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Klik nav link: smooth scroll + ripple + animasi ─────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      e.preventDefault();

      // Ripple effect
      const rect = e.currentTarget.getBoundingClientRect();
      setRipple({
        id: path,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setTimeout(() => setRipple(null), 600);

      // Highlight sementara saat klik
      setClickedLink(path);
      setTimeout(() => setClickedLink(null), 400);

      // Update active
      setActiveLink(path);

      // Smooth scroll
      const id = path.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Tutup mobile menu
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-surface-container transition-all duration-300 ${
          scrolled
            ? "bg-surface-container-lowest/98 backdrop-blur-lg shadow-[0_4px_24px_rgba(8,39,74,0.12)]"
            : "bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(8,39,74,0.06)]"
        }`}
      >
        <div className="h-20 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">

          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-space-sm group"
          >
            <Image
              src="/img/logo.jpeg"
              alt="ECOVING Logo"
              width={164}
              height={132}
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none font-bold transition-colors duration-200 group-hover:text-amber-gold">
                ECOVING
              </span>
              <span className="font-code-tech text-code-tech text-on-surface-variant tracking-wider uppercase leading-none mt-1">
                Paving inovatif dari serat kelapa & limbah HDPE.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-space-xs" aria-label="Navigasi utama">
            {navLinks.map((link) => {
              const isActive = activeLink === link.path;
              const isClicked = clickedLink === link.path;
              const hasRipple = ripple?.id === link.path;

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`relative overflow-hidden px-space-sm py-space-xs rounded-lg font-label-md text-label-md font-semibold
                    transition-all duration-200 select-none
                    ${isActive
                      ? "bg-surface-container text-primary border-b-2 border-amber-gold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container/60"
                    }
                    ${isClicked ? "scale-95" : "scale-100"}
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Label teks */}
                  <span className="relative z-10">{link.label}</span>

                  {/* Underline animasi slide-in */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-amber-gold rounded-full transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Ripple effect */}
                  {hasRipple && (
                    <span
                      className="absolute rounded-full bg-amber-gold/30 animate-ripple pointer-events-none"
                      style={{
                        left: ripple.x - 20,
                        top: ripple.y - 20,
                        width: 40,
                        height: 40,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-space-sm">
            <a
              href="https://wa.me/6282192231128?text=Halo%20ECOVING,%20saya%20ingin%20konsultasi%20penawaran%20harga%20paving%20block"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary px-space-md py-space-xs rounded-lg font-label-md text-label-md shadow-[0_2px_8px_rgba(37,211,102,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Pesan via WhatsApp</span>
            </a>

            {/* Hamburger button (mobile) */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[2px] w-5 bg-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-primary rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu — slide-down */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-surface-container ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav className="flex flex-col bg-surface-container-lowest/98 backdrop-blur-lg px-gutter-mobile py-space-md gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`flex items-center gap-space-sm px-space-md py-space-sm rounded-xl font-label-md text-label-md font-semibold transition-all duration-200
                    ${isActive
                      ? "bg-primary/10 text-primary border-l-[3px] border-amber-gold pl-[calc(theme(spacing.space-md)-3px)]"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }
                  `}
                  style={{
                    transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
                    transform: mobileOpen ? "translateX(0)" : "translateX(-8px)",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${isActive ? "bg-amber-gold" : "bg-on-surface-variant/40"}`} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}

            <a
              href="https://wa.me/6282192231128?text=Halo%20ECOVING,%20saya%20ingin%20konsultasi%20penawaran%20harga%20paving%20block"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-space-xs bg-[#25D366] hover:bg-[#1faa52] text-on-primary px-space-md py-3 rounded-xl font-label-md text-label-md font-bold shadow transition-all"
              onClick={() => setMobileOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Pesan via WhatsApp</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Ripple keyframe — inject via style tag */}
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(0);   opacity: 0.6; }
          100% { transform: scale(5);   opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 0.6s linear forwards;
        }
      `}</style>
    </>
  );
}
