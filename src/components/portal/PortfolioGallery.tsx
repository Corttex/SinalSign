"use client";

import { useState } from "react";
import { CLIENT_PORTFOLIO_CASES } from "@/lib/catalogData";
import { MediaBox } from "@/components/portal/MediaBox";
import { ArrowUpRight, Sparkles, Images, PhoneCall, MapPin } from "lucide-react";

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "Todas as Obras" },
    { id: "FACHADAS", label: "Fachadas ACM" },
    { id: "ACRILICO", label: "Acrílicos & Letras 3D" },
    { id: "TOTENS", label: "Totens & Condomínios" },
  ];

  const filteredCases = CLIENT_PORTFOLIO_CASES.filter((c) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "FACHADAS") return c.projectType.includes("ACM");
    if (selectedCategory === "ACRILICO") return c.projectType.includes("Acrílico") || c.projectType.includes("Letras");
    if (selectedCategory === "TOTENS") return c.projectType.includes("Totem") || c.niche.includes("Condomínio");
    return true;
  });

  return (
    <section id="portfolio" className="space-y-8">
      {/* Cabeçalho da Seção */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-heading font-semibold border border-[#85BCD7]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
          GALERIA EXECUTIVA DE CLIENTES
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase font-heading">
          Obras Reais Instaladas em Brasília &amp; Entorno
        </h2>
        <p className="text-sm text-neutral-300 font-sans max-w-3xl font-normal leading-relaxed">
          Projetos reais de empresas, condomínios nobres, clínicas e escritórios que confiam na engenharia e fabricação própria da Sinal Sign.
        </p>

        {/* Filtros em Abas de Vidro posicionados ABAIXO do texto */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#303590] text-white font-semibold shadow-md shadow-[#303590]/50 border border-[#85BCD7]/40"
                  : "liquid-pill text-neutral-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Blocos das Obras com o Mesmo Padrão Visual e Tipográfico das Categorias de Serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((caseItem) => {
          const waUrl = `https://wa.me/5561984853485?text=${encodeURIComponent(
            `Olá Sinal Sign! Gostei da obra da ${caseItem.clientName} (${caseItem.projectType}) e gostaria de um orçamento similar para minha empresa.`
          )}`;

          return (
            <div
              key={caseItem.id}
              className="group relative min-h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-[#06070A] flex flex-col justify-between p-7 transition-all duration-500 hover:border-[#85BCD7]/70 shadow-xl shadow-black/70"
            >
              {/* Imagem Fotográfica Real de Fundo com Alta Nitidez e Zoom Suave */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={caseItem.imageUrl || "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"}
                alt={`Obra de ${caseItem.clientName} em ${caseItem.cityRegion} - Sinal Sign`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0 opacity-70 group-hover:opacity-85 brightness-95"
                loading="lazy"
              />

              {/* Película de Vidro Líquido Gradual Escurecida na Base para Legibilidade Perfeita */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-[#06070A]/60 to-black/25 z-0 pointer-events-none group-hover:via-[#06070A]/50 transition-colors" />

              {/* Topo do Bloco: Badge da Especialidade + Localização/Nicho (Idêntico ao Card de Serviços) */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[#85BCD7] backdrop-blur-md">
                  {caseItem.cityRegion}
                </span>

                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-medium text-white backdrop-blur-md">
                  {caseItem.niche}
                </span>
              </div>

              {/* Base do Bloco: Título, Síntese e Botão com a Mesma Tipografia e Estilo do Print 1 */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#85BCD7] transition-colors leading-snug font-heading">
                  {caseItem.clientName}
                </h3>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-2">
                  {caseItem.highlights}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  {/* Botão Orçamento Direto WhatsApp com as Mesmas Cores e Fonte do Print 1 */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#303590] hover:bg-[#252a75] border border-[#85BCD7]/40 text-white text-xs font-heading font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#303590]/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F7E540]" />
                    Orçar Projeto Similar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
