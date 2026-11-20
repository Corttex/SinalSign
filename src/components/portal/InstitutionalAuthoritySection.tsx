import { ShieldCheck, Users, Clock, Award, CheckCircle } from "lucide-react";

export function InstitutionalAuthoritySection() {
  return (
    <section className="space-y-8 sm:space-y-12">
      {/* 1. Bloco de Gestão e Execução de Obras */}
      <div className="liquid-glass p-5 sm:p-8 md:p-12 border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
        <div className="space-y-4 sm:space-y-5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full liquid-pill text-[11px] sm:text-xs text-[#85BCD7] font-mono border border-[#85BCD7]/30">
            <Award className="w-3.5 h-3.5 text-[#F7E540] shrink-0" />
            <span>ENGENHARIA VISUAL &amp; INFRAESTRUTURA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-tight font-serif italic">
            Nós Projetamos, Prestamos os Serviços e Gerenciamos a <span className="text-[#85BCD7]">Sua Obra.</span>
          </h2>

          <p className="text-sm md:text-base text-neutral-300 font-sans leading-relaxed">
            A <strong>Sinal Sign</strong> é referência em soluções completas de Comunicação Visual e Sinalização Técnica em todo o Distrito Federal e Entorno. Nosso compromisso é entregar qualidade estrutural, acabamento sem rebarbas e total conformidade técnica.
          </p>

          <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
            Contamos com equipe própria especializada, equipamentos modernos (Router CNC, Laser de Fibra, Impressora UV e Dobradeiras) e expertise para executar desde fachadas comerciais em ACM e logomarcas em acrílico até sinalização viária para polos geradores de tráfego, condomínios e shoppings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#85BCD7] block">ATENDIMENTO TÉCNICO</span>
              <p className="text-xs text-neutral-400">Visitas e medições in-loco com acompanhamento em campo.</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#E06196] block">EQUIPE CERTIFICADA</span>
              <p className="text-xs text-neutral-400">Instaladores com NR-35 (altura) e alinhados às normas técnicas.</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#F7E540] block">PRAZOS E SEGURANÇA</span>
              <p className="text-xs text-neutral-400">Materiais homologados de alta durabilidade com garantia real.</p>
            </div>
          </div>
        </div>

        {/* Card Visual de Autoridade da Fábrica */}
        <div className="w-full lg:w-96 rounded-3xl overflow-hidden border border-white/15 bg-black/40 p-6 flex flex-col justify-between gap-6 shadow-2xl relative">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-[#85BCD7] tracking-widest block">
              INFRAESTRUTURA INDUSTRIAL PRÓPRIA
            </span>
            <h4 className="text-lg font-semibold text-white">
              Parque Fabril Próprio no Distrito Federal
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Sem terceirização nem intermediários. Do corte a laser de acrílicos e chapas em PS à instalação estrutural de fachadas e totens.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Corte Laser em Acrílicos 2mm a 20mm</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Chapas em PS e PVC de Alta Densidade</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Usinagem CNC de ACM e Letras 3D</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sinalização Viária &amp; Polos Geradores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

