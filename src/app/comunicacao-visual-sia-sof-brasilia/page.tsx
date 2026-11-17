import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual e Sinalização Industrial no SIA e SOF (DF) | Sinal Sign",
  description:
    "Comunicação visual para indústrias, distribuidoras e galpões no Setor de Indústria e Abastecimento (SIA) e SOF Sul/Norte. Fachadas robustas em ACM, totens industriais e sinalização técnica.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-sia-sof-brasilia",
  },
  keywords: [
    "comunicacao visual sia df",
    "fachada acm galpao sia brasilia",
    "sinalizacao industrial df",
    "totem industrial sia sof sul",
    "placas de seguranca galpao logistico df",
  ],
  openGraph: {
    title: "Comunicação Visual e Sinalização Industrial no SIA e SOF (DF) | Sinal Sign",
    description: "Projetos de grande porte e estruturas pesadas para galpões e indústrias no SIA e SOF.",
    url: "https://sinalsign.com.br/comunicacao-visual-sia-sof-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualSiaSofPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-sia-sof-brasilia"
      categoryBadge="POLO INDUSTRIAL & LOGÍSTICA DE GRANDE PORTE"
      h1Title="Comunicação Visual e Sinalização Industrial no SIA e SOF (DF)"
      subtitle="Estruturas de grande escala para galpões logísticos, distribuidoras, concessionárias pesadas e indústrias no Setor de Indústria e Abastecimento (SIA) e Setor de Oficinas (SOF)."
      primaryKeyword="Comunicação Visual no SIA e SOF"
      descriptionText={[
        "O SIA (Setor de Indústria e Abastecimento) e os setores de oficinas (SOF Sul e Norte) concentram os maiores centros de distribuição, atacadistas, concessionárias e indústrias do Distrito Federal. Nesse ambiente de grande circulação de caminhões e galpões com testadas monumentais, a comunicação visual precisa ser robusta, visível de longas distâncias e resistente à poeira e intempéries.",
        "A Sinal Sign projeta e fabrica pórticos em ACM de grande vão livre, totens industriais de solo com até 8 metros de altura e letreiros monolíticos com iluminação LED de alta potência para identificação corporativa de galpões e centros de armazenagem.",
        "Além da identidade externa, fornecemos a sinalização técnica interna completa: placas de segurança do trabalho (EPIs, riscos químicos, rotas de fuga), demarcação de solo para empilhadeiras, placas de docas de carga e descarga e numeração de galpões."
      ]}
      technicalSpecs={[
        { label: "Regiões de Atuação", value: "SIA (Trechos 1 a 17), SOF Sul, SOF Norte e SCIA" },
        { label: "Porte das Estruturas", value: "Fachadas de 20m a 60m de extensão e totens de solo até 8m" },
        { label: "Chassi Metálico", value: "Perfis estruturais pesados de aço carbono e vigas galvanizadas" },
        { label: "Sinalização Interna", value: "Placas em PS 2mm/3mm, ACM e fitas refletivas para docas" },
        { label: "Montagem Especializada", value: "Caminhão munck, plataformas elevatórias e equipe com NR-35/NR-18" },
        { label: "Garantia Estrutural", value: "Cálculo mecânico com Anotação de Responsabilidade Técnica (ART)" },
      ]}
      materialsUsed={[
        "ACM 4mm com Núcleo Mineral e Pintura PVDF Heavy Duty",
        "Aço Carbono Estrutural ASTM A36 / Vigas I e U",
        "Módulos LED de Alta Intensidade Lumínica (High Lumen)",
        "Tachões Viários e Tintas Epóxi de Alta Abrasão",
        "Chumbadores Químicos Hilti de Alta Capacidade de Tração"
      ]}
      processSteps={[
        {
          title: "Vistoria com Drone e Levantamento de Vão",
          desc: "Inspeção técnica das alturas de telhado e testeira de galpões e pontos de ancoragem da estrutura."
        },
        {
          title: "Engenharia Mecânica e Cálculo de Vento",
          desc: "Dimensionamento dos pilares e fundações em conformidade com as normas NBR 6123 e NBR 8800."
        },
        {
          title: "Serralheria Pesada e Usinagem CNC",
          desc: "Solda contínua MIG/MAG, pintura eletrostática e conformação de chapas de grande formato."
        },
        {
          title: "Içamento e Montagem com Munck",
          desc: "Equipe especializada em montagem pesada com guindaste articulado e sinalização de via."
        }
      ]}
      cases={[
        {
          clientName: "Centro Logístico de Distribuição Farmacêutica",
          niche: "Logística & Farmacêutica",
          location: "SIA Trecho 3 - Brasília / DF",
          specs: "Pórtico monumental de entrada em ACM 4mm cinza e azul de 42m com identificação de 12 docas em relevo.",
          imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"
        },
        {
          clientName: "Concessionária de Máquinas e Caminhões",
          niche: "Veículos Pesados & Agronegócio",
          location: "SIA Trecho 1 - DF",
          specs: "Totem monolítico de solo de 7,50m de altura com iluminação LED interna e letreiros frontais tridimensionais.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-12.jpeg"
        }
      ]}
      faqs={[
        {
          question: "A Sinal Sign fornece laudo técnico e ART para estruturas no SIA?",
          answer: "Sim! Para pórticos, marquises e totens de grande porte, emitimos Anotação de Responsabilidade Técnica (ART) com assinatura de engenheiro civil/mecânico habilitado no CREA-DF."
        },
        {
          question: "Vocês fazem demarcação de piso para trânsito de empilhadeiras em galpões?",
          answer: "Sim! Aplicamos pintura epóxi e poliuretano de alta abrasão com faixas amarelas e zebradas de segurança, vagas de pallets e faixas de pedestres industriais."
        },
        {
          question: "Qual o prazo de execução para uma fachada industrial de grande metragem?",
          answer: "Normalmente entre 15 a 25 dias úteis, considerando o tempo de fabricação da estrutura metálica pesada, usinagem do ACM e içamento no local."
        }
      ]}
      relatedPillars={[
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens de Entrada de Grande Porte no DF"
        },
        {
          title: "Sinalização Viária e de Estacionamento",
          href: "/sinalizacao-viaria-estacionamentos-df",
          anchorText: "Ver Demarcação de Solo e Placas Refletivas"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Revestimentos Industriais em ACM"
        }
      ]}
    />
  );
}
