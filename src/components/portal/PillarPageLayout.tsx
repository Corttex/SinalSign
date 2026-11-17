import React from "react";
import Link from "next/link";
import { FloatingNavbar } from "@/components/portal/FloatingNavbar";
import { ComprehensiveFooter } from "@/components/portal/ComprehensiveFooter";
import { siteConfig } from "@/lib/seo";
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  MapPin,
  Clock,
  Layers,
  Wrench,
  ChevronRight,
  Home,
} from "lucide-react";

export interface PillarTechnicalSpec {
  label: string;
  value: string;
}

export interface PillarCaseItem {
  clientName: string;
  niche: string;
  location: string;
  specs: string;
  imageUrl?: string;
}

export interface PillarFaqItem {
  question: string;
  answer: string;
}

export interface PillarPageLayoutProps {
  slugPath?: string;
  categoryBadge: string;
  h1Title: string;
  subtitle: string;
  primaryKeyword: string;
  descriptionText: string[];
  technicalSpecs: PillarTechnicalSpec[];
  materialsUsed: string[];
  processSteps: { title: string; desc: string }[];
  cases: PillarCaseItem[];
  faqs: PillarFaqItem[];
  relatedPillars: { title: string; href: string; anchorText: string }[];
}

export function PillarPageLayout({
  slugPath = "",
  categoryBadge,
  h1Title,
  subtitle,
  primaryKeyword,
  descriptionText,
  technicalSpecs,
  materialsUsed,
  processSteps,
  cases,
  faqs,
  relatedPillars,
}: PillarPageLayoutProps) {
  const currentUrl = `${siteConfig.url}${slugPath}`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Olá! Tenho interesse em um projeto de ${primaryKeyword} e gostaria de solicitar uma avaliação técnica e orçamento.`
  )}`;

  // 1. Schema.org estruturado em JSON-LD para FAQPage (Rich Snippets sanfonados na busca do Google)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  // 2. Schema.org estruturado em JSON-LD para BreadcrumbList (Hierarquia visual nas SERPs)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": siteConfig.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": primaryKeyword,
        "item": currentUrl,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col">
      {/* Injeção dos Schemas Rich Snippets para o Google */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Fixo Flutuante */}
      <FloatingNavbar whatsappUrl={whatsappUrl} />

      {/* Hero da Página Pilar */}
      <section className="relative w-full overflow-hidden border-b border-white/10 bg-[#06070A] pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-6">
          {/* Trilha de Navegação Visual (Breadcrumbs Semânticos) */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-[#85BCD7] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-neutral-400" />
              Início
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-600" />
            <span className="text-[#85BCD7] font-semibold">{primaryKeyword}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-pill text-xs text-[#85BCD7] w-fit font-mono border border-[#85BCD7]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
            {categoryBadge}
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              {h1Title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#303590] via-[#1C205C] to-[#303590] text-white text-sm font-bold hover:opacity-95 transition-all flex items-center gap-3 border border-[#85BCD7]/40 shadow-xl shadow-[#303590]/50"
            >
              <PhoneCall className="w-4 h-4 text-[#85BCD7]" />
              Falar com Engenheiro Técnico no WhatsApp
            </a>
            <a
              href="#especificacoes"
              className="liquid-pill px-8 py-4 rounded-full text-sm font-semibold text-white hover:text-[#85BCD7] flex items-center gap-2 border border-white/20 backdrop-blur-md transition-colors"
            >
              Especificações Técnicas
              <ArrowRight className="w-4 h-4 text-[#85BCD7]" />
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="w-full px-4 md:px-8 py-16 max-w-7xl mx-auto flex flex-col gap-24">
        {/* Bloco de Autoridade e Engenharia */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-neutral-300 font-sans text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Fabricação Própria, Rigor Estrutural e Precisão em Brasília
            </h2>
            {descriptionText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-heading text-sm mb-0.5">Sem Terceirização</strong>
                  Produzido 100% em nosso parque industrial no Distrito Federal.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#F7E540] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="block text-white font-heading text-sm mb-0.5">Garantia Formal de Acabamento</strong>
                  Materiais homologados resistentes à forte radiação solar e seca do DF.
                </div>
              </div>
            </div>
          </div>

          <div id="especificacoes" className="lg:col-span-5 liquid-glass p-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2 border-b border-white/10 pb-4">
              <Cpu className="w-5 h-5 text-[#85BCD7]" />
              Ficha Técnica do Padrão Sinal Sign
            </h3>

            <div className="divide-y divide-white/10 text-xs">
              {technicalSpecs.map((spec, i) => (
                <div key={i} className="py-3 flex justify-between items-center gap-4">
                  <span className="text-neutral-400 font-medium">{spec.label}</span>
                  <span className="text-white font-mono font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-[#85BCD7] mb-2 tracking-wider">Materiais & Ligas Utilizadas:</h4>
              <div className="flex flex-wrap gap-1.5">
                {materialsUsed.map((mat, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-[11px] text-neutral-300">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Etapas do Processo de Fabricação à Instalação */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Como Executamos Seu Projeto
            </h2>
            <p className="text-sm text-neutral-400 font-sans">
              Do arquivo técnico à montagem final no local com equipe própria e equipamentos de segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="liquid-glass p-6 space-y-4 relative overflow-hidden">
                <span className="text-4xl font-black text-white/10 font-mono absolute top-4 right-4">
                  0{idx + 1}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#303590]/40 border border-[#85BCD7]/30 flex items-center justify-center text-[#85BCD7] font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-white font-heading">{step.title}</h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Casos Reais Executados em Brasília */}
        {cases.length > 0 && (
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Projetos Entregues no Distrito Federal
              </h2>
              <p className="text-sm text-neutral-400 font-sans">
                Obras reais com materiais e acabamentos especificados instaladas pela equipe Sinal Sign.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c, idx) => (
                <div key={idx} className="liquid-glass overflow-hidden flex flex-col group">
                  {c.imageUrl && (
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.imageUrl}
                        alt={`Projeto ${c.clientName} executado pela Sinal Sign em ${c.location}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#85BCD7]">
                        {c.location}
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#E06196] uppercase">{c.niche}</span>
                      <h3 className="text-lg font-bold text-white font-heading">{c.clientName}</h3>
                      <p className="text-xs text-neutral-300 font-sans pt-2 leading-relaxed">
                        {c.specs}
                      </p>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#85BCD7] hover:text-white flex items-center gap-1.5 pt-2 border-t border-white/10 transition-colors"
                    >
                      Solicitar projeto similar para sua empresa
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Perguntas Frequentes Técnicas (FAQ Schema Alinhado) */}
        {faqs.length > 0 && (
          <section className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Dúvidas Frequentes sobre {primaryKeyword}
              </h2>
              <p className="text-sm text-neutral-400 font-sans">
                Esclarecimentos técnicos sobre durabilidade, prazos, aprovação e instalação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="liquid-glass p-6 space-y-3">
                  <h3 className="text-base font-bold text-white font-heading leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links Internos Estruturados (Cluster Sem Canibalização) */}
        <section className="liquid-glass p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">
              Outras Soluções de Engenharia Visual em Brasília
            </h3>
            <p className="text-xs text-neutral-400 font-sans">
              Explore outros serviços fabricados e instalados pela Sinal Sign no Distrito Federal:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedPillars.map((p, idx) => (
              <Link
                key={idx}
                href={p.href}
                className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#85BCD7]/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-neutral-300 group-hover:text-white font-sans">
                  {p.anchorText}
                </span>
                <ArrowRight className="w-4 h-4 text-[#85BCD7] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#303590]/40 via-[#06070A] to-[#1C205C]/50 border border-[#85BCD7]/30 p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#85BCD7]">
            <MapPin className="w-3.5 h-3.5 text-[#E06196]" />
            Atendimento Técnico Presencial em Todo o DF
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading max-w-2xl">
            Precisa de um Projeto de {primaryKeyword} com Padrão de Engenharia?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 font-sans max-w-xl">
            Envie as dimensões, fotos do local ou arquivo vetorizado. Nossa equipe técnica elabora o detalhamento com visita e medição in loco.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#303590] via-[#1C205C] to-[#303590] text-white text-sm font-bold hover:opacity-95 transition-all flex items-center gap-3 border border-[#85BCD7]/40 shadow-xl shadow-[#303590]/50"
          >
            <PhoneCall className="w-4 h-4 text-[#85BCD7]" />
            Solicitar Orçamento no WhatsApp: (61) 98485-3485
          </a>
        </section>
      </div>

      {/* Rodapé Completo */}
      <ComprehensiveFooter />
    </div>
  );
}
