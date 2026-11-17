import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Corte a Laser em Acrílico em Brasília (DF) | Precisão e Polimento — Sinal Sign",
  description:
    "Usinagem milimétrica e corte a laser de chapas de acrílico cristal virgem, espelhado (dourado, prata, rosé) de 2mm a 20mm no DF. Bisotê, arestas diamantadas e gravação.",
  alternates: {
    canonical: "https://sinalsign.com.br/corte-laser-acrilico-brasilia",
  },
  keywords: [
    "corte a laser acrilico brasília",
    "acrilico espelhado brasília",
    "corte laser df",
    "chapa de acrilico cortada sob medida brasília",
    "acrilico virgem 10mm df",
  ],
  openGraph: {
    title: "Corte a Laser em Acrílico em Brasília (DF) | Sinal Sign",
    description: "Corte computadorizado a laser de alta precisão em chapas acrílicas virgens e espelhadas no DF.",
    url: "https://sinalsign.com.br/corte-laser-acrilico-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function CorteLaserAcrilicoPage() {
  return (
    <PillarPageLayout
      slugPath="/corte-laser-acrilico-brasilia"
      categoryBadge="PRECISÃO LASER & GRAVAÇÃO COMPUTADORIZADA"
      h1Title="Corte a Laser em Acrílico em Brasília (DF)"
      subtitle="Usinagem óptica de alta fidelidade em chapas 100% virgens de 2mm a 20mm. Polimento térmico automático, ausência de rebarbas e gravação de detalhes milimétricos."
      primaryKeyword="Corte a Laser em Acrílico"
      descriptionText={[
        "O corte a laser em acrílico da Sinal Sign representa o estado da arte em tolerância geométrica para o mercado corporativo de Brasília. Operando com feixe óptico de CO2 de alta potência com controle CNC, cortamos e gravamos acrílicos cristalinos, leitosos, fumês e espelhados sem produzir trincas ou tensões internas no material.",
        "Diferente do corte mecânico por serra que deixa marcas foscas de dentes, o laser vaporiza a linha de corte com acabamento brilhante diamantado imediato, dispensando polimento manual e garantindo arestas lisas ao toque.",
        "Atendemos desde arquitetos de interiores e escritórios de advocacia que demandam peças decorativas com medidas exatas até demandas industriais de visores, cúpulas de proteção e componentes sob medida."
      ]}
      technicalSpecs={[
        { label: "Espessuras Cortadas", value: "2mm, 3mm, 4mm, 5mm, 8mm, 10mm, 15mm e 20mm" },
        { label: "Área Útil de Mesa", value: "Até 1,30m x 2,50m em chapa única" },
        { label: "Tolerância Dimensional", value: "Precisão micrométrica de ±0.1mm" },
        { label: "Acabamento de Borda", value: "Brilho vítreo polido direto do laser" },
        { label: "Tipos de Acrílico", value: "Cristal 100% virgem (Cast) e Espelhado de vácuo" },
        { label: "Origem do Substrato", value: "Polimetilmetacrilato (PMMA) livre de impurezas" },
      ]}
      materialsUsed={[
        "Acrílico Cristal Virgem Puro",
        "Acrílico Espelhado Dourado, Prata e Rosé Gold",
        "Acrílico Branco Leitoso Difusor de Luz",
        "Acrílico Preto Black Piano Alto Brilho",
        "Película Protetora Anti-Risco de Alta Densidade"
      ]}
      processSteps={[
        {
          title: "Vetorização & Otimização Nesting",
          desc: "Disposição inteligente das peças no software para máximo aproveitamento da chapa e redução de desperdício."
        },
        {
          title: "Calibração Focal do Feixe Óptico",
          desc: "Ajuste milimétrico do foco de laser conforme a espessura da chapa para evitar conicidade no corte."
        },
        {
          title: "Corte & Polimento Automático",
          desc: "Execução automatizada com exaustão de gases e arrefecimento assistido para garantir transparência nas bordas."
        },
        {
          title: "Inspeção Dimensional & Embalagem",
          desc: "Checagem de medidas com paquímetro digital e proteção plástica integral para transporte seguro no DF."
        }
      ]}
      cases={[
        {
          clientName: "Resende Advocacia e Consultoria",
          niche: "Advocacia de Luxo",
          location: "Asa Sul - DF",
          specs: "Letras e brasão cortados a laser em acrílico espelhado dourado 5mm com arestas perfeitas sobre ripado de madeira nobre.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        },
        {
          clientName: "ABDI",
          niche: "Órgão Governamental",
          location: "Setor Bancário Norte - DF",
          specs: "Tipografia institucional em acrílico cristal virgem 10mm cortada a laser com esmaltação técnica pantone.",
          imageUrl: "/images/servicos-reais/letras-acrilico/sinal-sign-comunicacao-letras-em-acrilico-08.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Qual a diferença entre acrílico virgem e acrílico reciclado?",
          answer: "O acrílico 100% virgem (Cast) possui clareza óptica superior ao vidro, não amarela sob o sol do DF e aceita corte a laser com acabamento polido sem cheiro químico residual. O acrílico reciclado perde transparência e racha facilmente no corte."
        },
        {
          question: "Vocês executam corte de peças a partir de arquivos DWG ou DXF?",
          answer: "Sim, aceitamos arquivos vetorizados em PDF, DWG, DXF, CDR ou AI, além de termos departamento de desenho para vetorizar a partir de fotos com medidas."
        },
        {
          question: "Qual a espessura máxima que a máquina de laser corta?",
          answer: "Cortamos chapas maciças de acrílico cristal de até 20mm de espessura com bordas translúcidas e regulares."
        }
      ]}
      relatedPillars={[
        {
          title: "Logomarcas em Acrílico",
          href: "/logo-acrilico-recepcao-brasilia",
          anchorText: "Ver Logomarcas em Acrílico para Recepções e Clínicas"
        },
        {
          title: "Placas em Acrílico",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Ver Placas de Identificação com Prolongadores de Inox"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Conhecer Letras Caixa em Relevo com Acrílico e Inox"
        }
      ]}
    />
  );
}
