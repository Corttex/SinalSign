"use client";

import { useEffect, useState } from "react";
import { SinalSignLogo } from "@/components/brand/SinalSignLogo";

interface FloatingNavbarProps {
  whatsappUrl: string;
}

export function FloatingNavbar({ whatsappUrl }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o estado fosco e denso logo após começar a rolar a página
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-8 pointer-events-none transition-all duration-500">
      <div
        className={`max-w-7xl mx-auto w-full rounded-2xl md:rounded-full px-5 md:px-7 py-2.5 md:py-3 flex items-center justify-between border pointer-events-auto transition-all duration-500 ${
          isScrolled
            ? "bg-[#06070a]/92 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            : "liquid-glass border-white/15 shadow-2xl shadow-black/70"
        }`}
      >
        <a href="/" className="hover:opacity-95 transition-opacity">
          <SinalSignLogo variant="white" showSubtitle={true} />
        </a>

        {/* Menu com Fonte Montserrat Geométrica Encorpada */}
        <nav className="hidden lg:flex items-center gap-7 font-heading text-[13px] font-semibold tracking-wide text-neutral-300">
          <a
            href="#solucoes"
            className="hover:text-[#85BCD7] transition-all hover:-translate-y-0.5"
          >
            Categorias de Serviços
          </a>
          <a
            href="#institucional"
            className="hover:text-[#85BCD7] transition-all hover:-translate-y-0.5"
          >
            Engenharia &amp; Obras
          </a>
          <a
            href="#portfolio"
            className="hover:text-[#85BCD7] transition-all hover:-translate-y-0.5"
          >
            Galeria de Clientes
          </a>
          <a
            href="#simulador"
            className="hover:text-[#85BCD7] transition-all hover:-translate-y-0.5"
          >
            Simulador Inteligente
          </a>
          <a
            href="#faq"
            className="hover:text-[#85BCD7] transition-all hover:-translate-y-0.5"
          >
            FAQ Técnico
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-pill px-4 py-2 rounded-full text-xs font-heading font-semibold text-neutral-200 hover:text-white flex items-center gap-2.5 border border-white/20 backdrop-blur-lg"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Fábrica no DF • (61) 98485-3485
        </a>
      </div>
    </header>
  );
}
