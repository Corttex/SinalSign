import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Brasília (DF) | Fábrica de Fachadas e Letras — Sinal Sign",
  description:
    "Empresa líder em Comunicação Visual no Distrito Federal. Parque fabril próprio: Fachadas em ACM, Letras Caixa 3D, Corte a Laser de Acrílico, Impressão UV e Totens com instalação técnica em todo o DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-brasilia",
  },
  keywords: [
    "comunicação visual brasília",
    "empresa de comunicação visual df",
    "fachadas em acm brasília",
    "letras caixa brasília",
    "corte laser acrilico df",
    "sinalização comercial e predial brasília",
  ],
  openGraph: {
    title: "Comunicação Visual em Brasília (DF) | Sinal Sign",
    description:
      "Parque industrial próprio de comunicação visual e engenharia de sinalização no Distrito Federal.",
    url: "https://sinalsign.com.br/comunicacao-visual-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualBrasiliaPillarPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-brasilia"
      categoryBadge="PARQUE INDUSTRIAL PRÓPRIO NO DISTRITO FEDERAL"
      h1Title="Comunicação Visual em Brasília (DF)"
      subtitle="Engenharia de fachadas comerciais, corte a laser de precisão, usinagem CNC e projetos corporativos de alto padrão. Atendimento técnico direto da fábrica sem intermediários."
      primaryKeyword="Comunicação Visual em Brasília"
      descriptionText={[
        "A Sinal Sign é uma indústria de comunicação visual sediada no Distrito Federal, especializada em transformar projetos arquitetônicos e identidades corporativas em estruturas de alto impacto. Com maquinário CNC Router de grande porte, estações de corte a laser milimétrico de acrílico e metais, e impressoras planas UV industriais, eliminamos completamente a figura de revendedores ou intermediários.",
        "Nossa engenharia atua de ponta a ponta: desde a consultoria técnica e medição in loco em qualquer Região Administrativa do DF (Plano Piloto, Águas Claras, Taguatinga, Sudoeste, SIA, Guará e cidades vizinhas) até a montagem estrutural em conformidade com as normas regulamentadoras de segurança.",
        "Seja para a fachada monumental de uma concessionária, a sinalização predial de um condomínio nobre ou a logomarca tridimensional de um consultório de alto luxo, entregamos acabamento com garantia técnica formal e durabilidade comprovada sob a radiação solar de Brasília."
      ]}
      technicalSpecs={[
        { label: "Capacidade Fabril", value: "Parque industrial próprio de usinagem e corte no DF" },
        { label: "Tecnologias de Corte", value: "Laser de CO2/Fibra e CNC Router de 3 eixos" },
        { label: "Área de Atendimento", value: "Todo o Distrito Federal e cidades do Entorno" },
        { label: "Equipe de Montagem", value: "Técnicos próprios certificados em NR-35 (Trabalho em Altura)" },
        { label: "Consultoria Pré-Venda", value: "Levantamento dimensional e projeto 3D de detalhamento" },
        { label: "Garantia de Qualidade", value: "Materiais homologados de primeira linha com laudo" },
      ]}
      materialsUsed={[
        "Chapas de Alumínio Composto (ACM 3mm e 4mm)",
        "Acrílicos Cristal e Espelhados Virgens (2mm a 20mm)",
        "Aço Inox AISI 304 Escovado e Polido",
        "PVC Expandido e Poliestireno de Alto Impacto (PS)",
        "Vinis Automotivos e Películas Jateadas",
        "Módulos LED IP68 High Lumen com Fontes Blindadas"
      ]}
      processSteps={[
        {
          title: "Diagnóstico e Medição In Loco",
          desc: "Visita de um consultor técnico ao seu endereço no DF para levantamento de medidas, fotos técnicas e análise estrutural."
        },
        {
          title: "Detalhamento de Engenharia & 3D",
          desc: "Elaboração de maquetes virtuais com especificação exata de materiais, espessuras, pontos de energia e fixadores."
        },
        {
          title: "Fabricação Industrial Monitorada",
          desc: "Corte laser, usinagem e montagem no parque industrial da Sinal Sign com controle de qualidade em cada etapa."
        },
        {
          title: "Instalação Própria & Entrega Técnica",
          desc: "Montagem ágil com equipe equipada com EPIs, andaimes ou plataformas elevatórias e descarte ecológico de sobras."
        }
      ]}
      cases={[
        {
          clientName: "Send Beauty Cosméticos",
          niche: "Salão de Beleza & Estética Nobre",
          location: "Águas Claras - DF",
          specs: "Fachada completa em ACM com iluminação LED perimetral e letras caixa tridimensionais com acabamento premium.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        },
        {
          clientName: "ABDI (Governo & Indústria)",
          niche: "Órgão Governamental",
          location: "Setor Bancário Norte - DF",
          specs: "Identidade institucional em relevo usinada a laser com padrão de cores rigorosamente certificado.",
          imageUrl: "/images/servicos-reais/letras-acrilico/sinal-sign-comunicacao-letras-em-acrilico-08.jpeg"
        },
        {
          clientName: "Cartório Colorado",
          niche: "Serviços Notariais",
          location: "Grande Colorado / Sobradinho - DF",
          specs: "Monumento frontal iluminado com módulos LED de alta eficiência energética e visibilidade na rodovia.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Como solicitar uma visita técnica da Sinal Sign em minha empresa?",
          answer: "Basta entrar em contato pelo nosso WhatsApp comercial (61) 98485-3485 ou preencher o simulador no site. Agendamos o deslocamento da equipe técnica diretamente ao seu ponto comercial no DF."
        },
        {
          question: "A Sinal Sign terceiriza a fabricação ou a montagem?",
          answer: "Não! Temos parque fabril próprio e frota equipada de instalação com montadores treinados, o que assegura prazos rígidos de entrega, controle absoluto de qualidade e preços justos de fábrica."
        },
        {
          question: "Vocês atendem condomínios e órgãos públicos no DF?",
          answer: "Sim. Atendemos condomínios horizontais e verticais em todo o DF (Lago Sul, Noroeste, Sudoeste, Park Way e Águas Claras), emitindo Nota Fiscal eletrônica completa, documentação trabalhista e garantias formais."
        },
        {
          question: "Qual o diferencial dos materiais usados pela Sinal Sign contra o sol do cerrado?",
          answer: "O clima do Distrito Federal possui alta incidência de raios UV e umidade relativa do ar extremamente baixa no inverno. Por isso, selecionamos exclusivamente chapas com proteção PVDF, acrílicos virgens de grau óptico e módulos LED com vedação IP68 à prova de intempéries."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Fachadas em ACM Estruturadas em Brasília"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras Caixa em Aço Inox e Acrílico Laser"
        },
        {
          title: "Letreiros Luminosos & Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens Monumentais e Painéis Luminosos no DF"
        },
        {
          title: "Impressão UV e DTF",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Ver Impressão UV Direta em Chapas Rígidas e Vidro"
        },
        {
          title: "Adesivos & Frotas",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Plotagem de Veículos e Adesivação de Vitrines"
        },
        {
          title: "Banners & Lonas",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Banners Promocionais e Lonas de Grande Formato"
        }
      ]}
    />
  );
}
