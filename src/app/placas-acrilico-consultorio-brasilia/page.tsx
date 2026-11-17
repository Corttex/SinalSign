import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Placas em Acrílico para Consultório em Brasília (DF) | Sinal Sign",
  description:
    "Placas de identificação médica, jurídica e corporativa em acrílico cristal virgem com prolongadores em aço inox e impressão UV de alta definição no DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/placas-acrilico-consultorio-brasilia",
  },
  keywords: [
    "placas em acrilico consultorio brasilia",
    "placa de identificacao com prolongador df",
    "placa medica acrilico brasilia",
    "placa para porta de escritorio df",
    "placa de homenagem em acrilico df",
  ],
  openGraph: {
    title: "Placas em Acrílico para Consultório em Brasília (DF) | Sinal Sign",
    description: "Placas sofisticadas de identificação com corte bisotado e prolongadores em aço inox no Distrito Federal.",
    url: "https://sinalsign.com.br/placas-acrilico-consultorio-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PlacasAcrilicoConsultorioPage() {
  return (
    <PillarPageLayout
      slugPath="/placas-acrilico-consultorio-brasilia"
      categoryBadge="SINALIZAÇÃO CORPORATIVA & IDENTIFICAÇÃO NOBRE"
      h1Title="Placas em Acrílico para Consultório em Brasília (DF)"
      subtitle="Identificação de salas médicas, consultórios de odontologia, escritórios de advocacia e cartórios no DF com acrílico cristal virgem polido e fixadores prolongadores em aço inox escovado."
      primaryKeyword="Placas em Acrílico para Consultório"
      descriptionText={[
        "A identificação visual de portas e fachadas internas de clínicas e escritórios exige sobriedade, legibilidade e refinamento. A Sinal Sign produz placas em acrílico puro cortadas a laser com arestas chanfradas em bisotê e furação precisa para prolongadores metálicos.",
        "A arte e os dados institucionais (nome do profissional, CRM/OAB, especialidades e logotipo) são impressos diretamente no verso do acrílico por meio de cura UV industrial, o que protege a arte contra riscos mecânicos e confere um efeito vítreo de profundidade incomparável.",
        "Disponibilizamos acabamentos com fundo transparente, fundo jateado translúcido ou fundo branco opaco, além de chapas de acrílico espelhado dourado e prata sobrepostas para homenagens e premiações corporativas."
      ]}
      technicalSpecs={[
        { label: "Espessuras Disponíveis", value: "3mm, 5mm, 8mm, 10mm e 15mm" },
        { label: "Tecnologia de Impressão", value: "Impressão UV direta no verso com tinta branca opaca" },
        { label: "Fixadores Inclusos", value: "Prolongadores metálicos em Aço Inox 304 escovado" },
        { label: "Afastamento da Parede", value: "15mm a 25mm de distância com espaçadores" },
        { label: "Acabamento de Borda", value: "Polimento térmico a laser e chanfro em bisotê 45°" },
        { label: "Durabilidade Interna", value: "Superior a 15 anos sem amarelamento" },
      ]}
      materialsUsed={[
        "Acrílico Cristal 100% Virgem de Alta Transparência",
        "Prolongadores Cilíndricos em Aço Inox 304",
        "Buchas de Fixação SX Fischer e Parafusos Inox",
        "Tinta UV Industrial Flexível com Cura LED",
        "Acrílicos Espelhados Decorativos"
      ]}
      processSteps={[
        {
          title: "Layout e Conformidade com Conselhos",
          desc: "Diagramação respeitando as normas de publicidade médica (CFM), odontológica (CFO) e jurídica (OAB)."
        },
        {
          title: "Corte e Furação Computadorizada",
          desc: "Furação simétrica nas quatro extremidades e corte dos cantos retos ou arredondados na máquina laser."
        },
        {
          title: "Impressão UV Reversa de Alta Fidelidade",
          desc: "Deposição da tinta colorida no verso da peça selada com uma densa camada de branco de cobertura."
        },
        {
          title: "Instalação Limpa com Nível a Laser",
          desc: "Fixação das bases dos prolongadores com buchas adequadas (drywall ou alvenaria) e aperto manual seguro."
        }
      ]}
      cases={[
        {
          clientName: "Centro Clínico Lúcio Costa",
          niche: "Consultório Médico",
          location: "Setor Médico Hospitalar Sul - Brasília / DF",
          specs: "Placas em acrílico cristal 8mm com prolongadores em inox 304 e impressão UV direta no verso com fundo jateado.",
          imageUrl: "/images/servicos-reais/identificacao-comercial/WhatsApp Image 2026-11-13 at 10.10.49 (1).jpeg"
        },
        {
          clientName: "Resende Advocacia",
          niche: "Escritório de Advocacia",
          location: "Asa Sul - DF",
          specs: "Placa institucional de recepção com sobreposição de acrílico cristal 10mm e letras em relevo dourado espelhado.",
          imageUrl: "/images/servicos-reais/placas-acrilico/WhatsApp Image 2026-11-13 at 10.10.46 (1).jpeg"
        }
      ]}
      faqs={[
        {
          question: "A placa pode ser instalada em paredes de drywall (gesso acartonado)?",
          answer: "Sim! Fornecemos buchas metálicas especiais para drywall (tipo basculante ou expansão) que suportam o peso do acrílico sem ceder ou esfarelar o gesso."
        },
        {
          question: "Qual a vantagem de imprimir no verso do acrílico em vez de colar um adesivo?",
          answer: "A impressão direta no verso protege a tinta contra unhas, produtos de limpeza e riscos acidentais. Além disso, elimina totalmente o risco de bolhas de ar ou cantos de adesivo descolando ao longo dos anos."
        },
        {
          question: "Vocês atendem pedidos de uma única placa para consultório?",
          answer: "Sim! Fabricamos desde placas individuais personalizadas para novos profissionais até conjuntos completos de sinalização para clínicas com dezenas de salas."
        }
      ]}
      relatedPillars={[
        {
          title: "Logo em Acrílico para Recepção",
          href: "/logo-acrilico-recepcao-brasilia",
          anchorText: "Ver Logomarcas em Alto Relevo para Recepções"
        },
        {
          title: "Placas em PS e PVC para Segurança",
          href: "/placas-ps-pvc-sinalizacao-brasilia",
          anchorText: "Ver Placas de Segurança e Sinalização Predial em PS"
        },
        {
          title: "Adesivos Jateados para Vidros",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Conhecer Películas Jateadas para Privacidade de Consultórios"
        }
      ]}
    />
  );
}
