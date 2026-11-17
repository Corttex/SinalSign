"use client";

import { PRODUCT_BANNER_CATALOG } from "@/lib/productsBannerData";
import { ArrowUpRight, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

export function ProductsBannerCatalog() {
  return (
    <section id="solucoes" className="space-y-10">
      {/* Cabeçalho Editorial com Síntese Limpa */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-mono mb-2 border border-[#85BCD7]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
            SOLUÇÕES COMPLETAS DE FABRICAÇÃO PRÓPRIA NO DF
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight font-serif italic">
            Nossas Soluções em Comunicação Visual &amp; Sinalização
          </h2>
          <p className="text-sm text-neutral-300 font-sans mt-2 max-w-2xl">
            Projetamos, fabricamos e gerenciamos a instalação da sua obra com equipe técnica própria, materiais homologados e alta precisão industrial.
          </p>
        </div>

        <a
          href="#simulador"
          className="liquid-pill px-6 py-3 rounded-xl text-xs font-mono text-white hover:text-[#85BCD7] flex items-center gap-2 border border-white/15 w-fit shrink-0"
        >
          Simulador de Medidas ($m²)
          <ArrowUpRight className="w-3.5 h-3.5 text-[#85BCD7]" />
        </a>
      </div>

      {/* Grid de Blocos Estilo Banner Visual com Imagem no Fundo e Informações Diretas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_BANNER_CATALOG.map((item) => {
          const waUrl = `https://wa.me/5561984853485?text=${encodeURIComponent(
            `Olá Sinal Sign! Gostaria de um orçamento para: ${item.title} (${item.categoryBadge}).`
          )}`;

          return (
            <div
              key={item.id}
              className="group relative min-h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-[#06070A] flex flex-col justify-between p-7 transition-all duration-500 hover:border-[#85BCD7]/60 shadow-xl shadow-black/60"
            >
              {/* Imagem Fotográfica de Fundo com Maior Visibilidade */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0 opacity-70 group-hover:opacity-85 brightness-95"
              />

              {/* Película de Vidro Líquido e Degradê Escuro Otimizado para Garantir Legibilidade e Imagem Visível */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-[#06070A]/55 to-black/20 z-0 pointer-events-none group-hover:via-[#06070A]/45 transition-colors" />

              {/* Topo do Bloco: Badge da Categoria */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[#85BCD7] backdrop-blur-md">
                  {item.categoryBadge}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#F7E540] group-hover:border-[#F7E540]/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Base do Bloco: Informações Diretas e Objetivas com Imagem no Fundo */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight group-hover:text-[#85BCD7] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Bullets Rápidos */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-neutral-400">
                  {item.bullets.slice(0, 2).map((bullet, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#85BCD7]" />
                      {bullet}
                    </span>
                  ))}
                </div>

                {/* Botão de Ação Direta no WhatsApp */}
                <div className="pt-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/[0.08] hover:bg-[#303590] border border-white/15 hover:border-[#85BCD7]/40 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-md"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#85BCD7]" />
                    Orçar {item.title.split(" ")[0]} no WhatsApp
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

