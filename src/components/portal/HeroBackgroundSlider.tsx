"use client";

import { useEffect, useState } from "react";

interface HeroImage {
  url: string;
  alt: string;
  clientName: string;
  projectType: string;
}

const HERO_SLIDES: HeroImage[] = [
  {
    url: "/images/servicos-reais/fachada-acm/sinal-sign-comunicacao-fachada-em-acm-01.jpeg",
    alt: "SinalSign Comunicação - Fachadas em ACM e Letreiros em Brasília",
    clientName: "Espaço Odonto & Estética",
    projectType: "Fachada em ACM & Tipografia Caixa Alta",
  },
  {
    url: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg",
    alt: "SinalSign Comunicação - Letras Caixa Iluminadas Cartório Colorado",
    clientName: "Cartório Colorado",
    projectType: "Letras Caixa 3D & Símbolo Iluminado em LED",
  },
  {
    url: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg",
    alt: "SinalSign Comunicação - Fachada Send Beauty Cosméticos",
    clientName: "Send Beauty Cosméticos",
    projectType: "Fachada Arquitetônica ACM & Blade Sign",
  },
  {
    url: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-12.jpeg",
    alt: "SinalSign Comunicação - Totem Monumental St. Paul Plaza Hotel",
    clientName: "St. Paul Plaza Hotel",
    projectType: "Totem Monumental de Solo em Aço & ACM",
  },
  {
    url: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-24.jpeg",
    alt: "SinalSign Comunicação - Kubitschek Plaza Hotel Letras Inox",
    clientName: "Kubitschek Plaza Hotel",
    projectType: "Letras em Aço Inox Escovado 304",
  },
  {
    url: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg",
    alt: "SinalSign Comunicação - Resende Advocacia Acrílico Espelhado",
    clientName: "Resende Advocacia e Consultoria",
    projectType: "Logo em Acrílico Dourado Espelhado Laser",
  },
  {
    url: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg",
    alt: "SinalSign Comunicação - Residencial Vila das Flores Totem",
    clientName: "Residencial Vila das Flores",
    projectType: "Totem Estruturado com Iluminação LED",
  },
];

export function HeroBackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // Transiciona a cada 4.5 segundos suavemente

    return () => clearInterval(interval);
  }, []);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Imagens com Crossfade Suave e Efeito de Escala Ken Burns */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover object-center filter contrast-105 brightness-95 transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Gradientes Translúcidos Estratégicos para destacar a imagem e garantir leitura cristalina do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06070A]/92 via-[#06070A]/75 to-[#06070A]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06070A]/75 via-transparent to-[#06070A]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,53,144,0.45),transparent_65%)]" />

      {/* Badge Flutuante no Canto Inferior Direito Identificando o Cliente Atual */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 hidden sm:flex items-center gap-3 px-4 py-2 rounded-full liquid-glass border border-white/15 backdrop-blur-xl shadow-xl shadow-black/80">
        <span className="w-2 h-2 rounded-full bg-[#85BCD7] animate-pulse" />
        <div className="text-left font-mono text-[11px] leading-tight">
          <span className="text-white font-bold block">{currentSlide.clientName}</span>
          <span className="text-neutral-400 text-[10px]">{currentSlide.projectType}</span>
        </div>
      </div>
    </div>
  );
}
