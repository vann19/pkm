export default function WhatsAppFAB() {
  return (
    <aside
      aria-label="Customer Service WhatsApp"
      className="fixed bottom-space-lg right-space-lg z-50 flex items-center gap-space-xs"
    >
      <span className="hidden md:inline-block bg-[#08274A] text-on-primary font-label-sm text-label-sm px-space-sm py-1.5 rounded-lg shadow-lg border border-primary-container">
        Hubungi Pabrik Kami
      </span>
      <a
        href="https://wa.me/6282192231128?text=Halo%20Conblock%20Prima,%20saya%20ingin%20konsultasi"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1faa52] text-on-primary rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform transform hover:scale-105"
      >
        <span className="material-symbols-outlined text-[28px]">support_agent</span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-gold"></span>
        </span>
      </a>
    </aside>
  );
}
