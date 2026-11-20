"use client";

import { MessageCircle, ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export function FinalCtaConversationSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá! Tenho uma ideia de projeto de comunicação visual e gostaria de conversar para colocar em prática com a Sinal Sign."
  )}`;

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14 liquid-glass border border-white/15 bg-gradient-to-br from-[#303590]/35 via-[#06070A] to-[#1C205C]/35 shadow-2xl shadow-[#303590]/25">
      {/* Luz ambiente interna com o Azul e Dourado da marca */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#85BCD7]/20 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#303590]/35 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full liquid-pill text-[11px] sm:text-xs text-[#85BCD7] font-heading font-semibold border border-[#85BCD7]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F7E540] shrink-0" />
            <span>TRANSFORME SEU ESPAÇO COM ENGENHARIA VISUAL</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-heading leading-tight">
            Tem uma ideia e quer colocar em prática?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
            Seja uma fachada imponente em ACM, letras caixa iluminadas, placas em acrílico ou sinalização predial completa: nossa equipe de engenharia e fabricação própria está pronta para tirar seu projeto do papel em Brasília e Entorno.
          </p>
        </div>

        {/* Botão de Ação "Vamos Conversar" */}
        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#303590] via-[#1C205C] to-[#303590] hover:from-[#3a3fa5] hover:to-[#242a7a] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 sm:gap-3 border border-[#85BCD7]/40 shadow-xl shadow-[#303590]/50 hover:shadow-[#85BCD7]/30 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-[#85BCD7] fill-[#85BCD7]/20 shrink-0" />
            <span>Vamos Conversar no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#F7E540] shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

