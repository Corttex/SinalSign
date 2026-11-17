"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, FileCode, CheckCircle2 } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Quais tamanhos e espessuras de acrílico a Sinal Sign trabalha?",
    a: "Trabalhamos com chapas de acrílico cristal virgem e acrílico espelhado (dourado, prata, rosé e fumê) nas espessuras de 2mm, 3mm, 4mm, 5mm, 8mm, 10mm, 15mm e 20mm. Todas cortadas na Router Laser CNC com polimento diamantado térmico para total transparência ótica.",
  },
  {
    q: "Qual a diferença entre placas em PS (Poliestireno) e placas em PVC Expandido?",
    a: "O PS (Poliestireno de Alto Impacto) é uma chapa rígida e lisa de 1mm a 3mm, perfeita para sinalização de segurança, placas de rota de fuga, quadros de aviso e impressão UV direta. Já o PVC Expandido possui maior densidade e espessura (10mm a 25mm), sendo a melhor escolha para letras caixa volumétricas e logomarcas usinadas com pintura automotiva PU.",
  },
  {
    q: "O revestimento em ACM e os adesivos resistem ao sol forte e clima seco de Brasília?",
    a: "Sim. Nossas fachadas utilizam chapas de ACM com pintura PVDF Kynar 500, que conta com proteção contra radiação ultravioleta e não desbota nem resseca com o calor e a poeira do DF. Nossos adesivos vinílicos poliméricos recebem laminação transparente com bloqueador solar para vitrines e veículos.",
  },
  {
    q: "Quais formatos de arquivo devo enviar para corte laser ou impressão?",
    a: "Aceitamos arquivos vetorizados em CorelDRAW (.cdr em curvas), Adobe Illustrator (.ai), PDF/X-1a e (.eps). Caso você ainda não tenha o vetor da sua logomarca ou as medidas exatas, nossa equipe de engenharia visual faz o fechamento do arquivo e a simulação digital para você.",
  },
  {
    q: "Vocês atendem apenas o Plano Piloto ou realizam instalação no Entorno?",
    a: "Temos equipes próprias de montagem estrutural e instalação equipadas com andaimes e veículos adaptados atendendo todo o Distrito Federal (Águas Claras, Taguatinga, Asa Sul/Norte, Sudoeste, Noroeste, Guará, Ceilândia, etc.) e cidades do Entorno (Valparaíso de Goiás, Luziânia, Águas Lindas).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-8 max-w-4xl mx-auto w-full">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-heading font-semibold">
          <HelpCircle className="w-3.5 h-3.5 text-[#F7E540]" />
          GUIA TÉCNICO &amp; PERGUNTAS FREQUENTES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-heading leading-tight">
          Dúvidas sobre Materiais, Medidas &amp; Prazos
        </h2>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="liquid-glass overflow-hidden border border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-semibold text-sm md:text-base text-white tracking-tight font-heading">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#85BCD7] transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs md:text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-300">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
