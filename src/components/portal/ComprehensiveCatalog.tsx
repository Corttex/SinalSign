"use client";

import { COMPREHENSIVE_SERVICES } from "@/lib/catalogData";
import { MediaBox } from "@/components/portal/MediaBox";
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Cpu,
} from "lucide-react";

export function ComprehensiveCatalog() {
  return (
    <section id="solucoes" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-mono mb-2 border border-[#85BCD7]/30">
            <Cpu className="w-3.5 h-3.5 text-[#F7E540]" />
            CATÁLOGO INDUSTRIAL COMPLETO DE FABRICAÇÃO PRÓPRIA
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight font-serif italic">
            Engenharia de Materiais, Acrílicos, PS &amp; Adesivos
          </h2>
          <p className="text-sm text-neutral-400 font-sans mt-2 max-w-2xl">
            Atendemos desde corte a laser milimétrico em acrílicos de 2mm a 20mm até fachadas monumentais em ACM estruturado e impressão UV de grandes formatos.
          </p>
        </div>

        <a
          href="#simulador"
          className="liquid-pill px-6 py-3 rounded-xl text-xs font-mono text-white hover:text-[#85BCD7] flex items-center gap-2 w-fit border border-white/15"
        >
          Calcular por m² no Simulador
          <ArrowRight className="w-3.5 h-3.5 text-[#85BCD7]" />
        </a>
      </div>

      {/* Grid de 8 Categorias Industriais com Imagens Fotorrealistas Aplicadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMPREHENSIVE_SERVICES.map((service) => (
          <div
            key={service.id}
            className="liquid-glass p-5 flex flex-col justify-between gap-5 group hover:border-[#85BCD7]/50 transition-all"
          >
            {/* Bloco de Imagem com Render Fotográfico Real */}
            <MediaBox
              id={service.imagePlaceholderId}
              title={service.title}
              subtitle={service.tagline}
              badge={service.category.replace("_", " ")}
              aspectRatio="square"
              imageSrc={service.imageUrl}
            />

            {/* Conteúdo Técnico */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-3">
                {service.description}
              </p>

              {/* Espessuras / Tamanhos disponíveis */}
              <div className="pt-2 border-t border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-[#85BCD7] uppercase tracking-wider block">
                  Espessuras / Formatos:
                </span>
                <div className="flex flex-wrap gap-1">
                  {service.thicknessesOrSizes.slice(0, 4).map((th, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300"
                    >
                      {th}
                    </span>
                  ))}
                </div>
              </div>

              {/* Aplicações Práticas */}
              <div className="pt-2 border-t border-white/10 space-y-1">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Principais Aplicações:
                </span>
                <ul className="text-[11px] text-neutral-300 font-sans space-y-1">
                  {service.applications.slice(0, 3).map((app, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-[#F7E540] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botão de Orçamento Rápido da Categoria */}
            <div className="pt-3 border-t border-white/10">
              <a
                href={`https://wa.me/5561984853485?text=${encodeURIComponent(
                  `Olá! Gostaria de cotar o serviço: ${service.title} (Acrílicos, PS ou Adesivos).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white hover:border-[#85BCD7] hover:text-[#85BCD7] text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                Orçar {service.title.split(" ")[0]}
                <ArrowRight className="w-3.5 h-3.5 text-[#85BCD7]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
