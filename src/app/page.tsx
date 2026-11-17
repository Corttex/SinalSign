import { OfficialServicesBannerGrid } from "@/components/portal/OfficialServicesBannerGrid";
import { InstitutionalAuthoritySection } from "@/components/portal/InstitutionalAuthoritySection";
import { ClientsLogoCarousel } from "@/components/portal/ClientsLogoCarousel";
import { GoogleReviewsCarousel } from "@/components/portal/GoogleReviewsCarousel";
import { PortfolioGallery } from "@/components/portal/PortfolioGallery";
import { QuoteSimulator } from "@/components/portal/QuoteSimulator";
import { FaqSection } from "@/components/portal/FaqSection";
import { TypewriterHeadline } from "@/components/portal/TypewriterHeadline";
import { FloatingNavbar } from "@/components/portal/FloatingNavbar";
import { HeroBackgroundSlider } from "@/components/portal/HeroBackgroundSlider";
import { FinalCtaConversationSection } from "@/components/portal/FinalCtaConversationSection";
import { ComprehensiveFooter } from "@/components/portal/ComprehensiveFooter";
import { SinalSignLogo } from "@/components/brand/SinalSignLogo";
import { siteConfig } from "@/lib/seo";
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Zap,
  Box,
  Cpu,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá! Acessei o portal da Sinal Sign e gostaria de solicitar um orçamento para o meu projeto."
  )}`;

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col">
      {/* Header Fixo Flutuante Inteligente (Fosco e denso ao rolar a página) */}
      <FloatingNavbar whatsappUrl={whatsappUrl} />

      {/* 1 & 2. HERO FULL-WIDTH COM SLIDER DINÂMICO DE OBRAS REAIS DOS CLIENTES */}
      <section className="relative w-full overflow-hidden border-b border-white/10 bg-[#06070A] pt-24 md:pt-28">
        {/* Slider de Fundo com Transição Automática Suave e Identificação dos Clientes */}
        <HeroBackgroundSlider />

        {/* Conteúdo Centralizado da Hero (Headline + CTAs) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col gap-12 md:gap-16">
          {/* Bloco Hero Principal */}
          <div className="pt-4 pb-14 md:pb-20 flex flex-col gap-8 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-pill text-xs text-[#85BCD7] w-fit font-mono border border-[#85BCD7]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
              FABRICAÇÃO PRÓPRIA DE COMUNICAÇÃO VISUAL &amp; SINALIZAÇÃO NO DF
            </div>

            {/* Headline Dinâmica em Montserrat Ultra-Bold */}
            <TypewriterHeadline />

            <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-sans font-normal drop-shadow-md">
              Projetamos e fabricamos Fachadas em ACM, Letras Caixa em alto relevo, Acrílicos de 2mm a 20mm, Chapas em PS, Adesivagem de Frotas e Vitrines, Totens monumentais e Sinalização Viária. Da usinagem CNC e corte laser à instalação técnica em todo o Distrito Federal.
            </p>

            {/* CTAs em Vidro Líquido com o Azul Royal e Detalhes da Marca */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#simulador"
                className="liquid-pill px-8 py-4 rounded-full text-sm font-semibold text-white hover:text-[#85BCD7] flex items-center gap-3 border border-white/25 shadow-2xl shadow-black/60 backdrop-blur-lg"
              >
                Simular Projeto Ideal
                <ArrowUpRight className="w-4 h-4 text-[#85BCD7]" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#303590] via-[#1C205C] to-[#303590] text-white text-sm font-bold hover:opacity-95 transition-all flex items-center gap-3 border border-[#85BCD7]/40 shadow-xl shadow-[#303590]/50"
              >
                <PhoneCall className="w-4 h-4 text-[#85BCD7]" />
                Falar com Especialista Técnico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESTANTE DO CONTEÚDO DENTRO DO GRID CENTRALIZADO */}
      <div className="w-full px-4 md:px-8 py-16 max-w-7xl mx-auto flex flex-col gap-28">

      {/* 3. Indicadores de Engenharia */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Corte Laser & CNC Router",
            desc: "Usinagem milimétrica de acrílicos virgens até 20mm, chapas de PS, alumínio e inox.",
            icon: Cpu,
            color: "text-[#85BCD7]",
          },
          {
            title: "+1.500 Projetos Entregues",
            desc: "Fachadas corporativas, consultórios, sinalização predial de condomínios e vitrines.",
            icon: Box,
            color: "text-[#E06196]",
          },
          {
            title: "Resistência ao Sol do DF",
            desc: "ACM com pintura PVDF e películas vinílicas com bloqueador UV contra radiação solar.",
            icon: ShieldCheck,
            color: "text-[#F7E540]",
          },
          {
            title: "Instalação Própria",
            desc: "Equipe especializada equipada para montagem em altura e fixação estrutural segura.",
            icon: Zap,
            color: "text-[#85BCD7]",
          },
        ].map((item, idx) => (
          <div key={idx} className="liquid-glass p-6 flex flex-col justify-start gap-5">
            <div className="h-7 flex items-center">
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div className="min-h-[48px] flex items-center">
              <h4 className="text-base font-semibold text-white tracking-tight leading-snug font-heading">
                {item.title}
              </h4>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans pt-1 border-t border-white/5">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* 4. As 17 Categorias Oficiais dos Serviços (Blocos em Banner com Imagem de Fundo) */}
      <OfficialServicesBannerGrid />

      {/* 5. Carrossel Contínuo com Logos dos Clientes Atendidos */}
      <ClientsLogoCarousel />

      {/* 5.1 Prova Social: Carrossel do Google com Nota 4.9 e as 10 Últimas Avaliações */}
      <GoogleReviewsCarousel />

      {/* 6. Autoridade Institucional: Nós Projetamos, Prestamos os Serviços e Gerenciamos sua Obra */}
      <div id="institucional">
        <InstitutionalAuthoritySection />
      </div>

      {/* 7. Galeria dos Clientes Atendidos com Fichas Técnicas Reais */}
      <PortfolioGallery />

      {/* 8. Simulador Dinâmico Seguro de Pré-Orçamento ($m²) */}
      <QuoteSimulator />

      {/* 9. Guia Técnico & FAQ */}
      <div id="faq">
        <FaqSection />
      </div>

      {/* 10. Bloco Final de Alta Conversão: "Tem uma ideia e quer colocar em prática? (Vamos conversar)" */}
      <FinalCtaConversationSection />

      {/* 11. Cobertura Regional de Brasília e Entorno */}
      <section className="liquid-glass p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2 font-heading">
              <MapPin className="w-5 h-5 text-[#85BCD7]" />
              Atendimento &amp; Instalação Técnica em Todo o Distrito Federal e Entorno
            </h3>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Fabricação com medição in-loco e instalação profissional nas seguintes regiões:
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Plano Piloto (Asa Sul & Asa Norte)",
            "Águas Claras",
            "Taguatinga",
            "Sudoeste & Octogonal",
            "Noroeste",
            "Lago Sul & Lago Norte",
            "Guará I e II",
            "Vicente Pires",
            "Ceilândia & Samambaia",
            "SIA & SOF Sul/Norte",
            "Sobradinho & Planaltina",
            "Gama & Santa Maria",
            "Valparaíso de Goiás & Luziânia",
          ].map((region, i) => (
            <span
              key={i}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-[#85BCD7]/40 transition-colors"
            >
              • {region}
            </span>
          ))}
        </div>
      </section>

      {/* 12. Rodapé Completo */}
      <ComprehensiveFooter />
      </div>
    </div>
  );
}
