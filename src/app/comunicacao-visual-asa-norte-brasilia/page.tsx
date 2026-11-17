import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual na Asa Norte em Brasília (DF) | Sinal Sign",
  description:
    "Comunicação visual para as CLN, W3 Norte, polo gastronômico e Setor Hospitalar Norte no DF. Fachadas em ACM, Letras Caixa LED, Totens e Placas Corporativas.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-asa-norte-brasilia",
  },
  keywords: [
    "comunicacao visual asa norte",
    "fachadas em acm asa norte df",
    "letra caixa cln w3 norte",
    "comunicacao visual setor hospitalar norte",
    "totem comercial asa norte brasilia",
  ],
  openGraph: {
    title: "Comunicação Visual na Asa Norte em Brasília (DF) | Sinal Sign",
    description: "Projetos de identidade visual e fachadas modernas para o comércio e clínicas da Asa Norte.",
    url: "https://sinalsign.com.br/comunicacao-visual-asa-norte-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualAsaNortePage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-asa-norte-brasilia"
      categoryBadge="PLANO PILOTO & SETOR UNIVERSITÁRIO E COMERCIAL"
      h1Title="Comunicação Visual na Asa Norte em Brasília (DF)"
      subtitle="Soluções estruturadas para o circuito gastronômico das comerciais locais (CLN), empresas da W3 Norte, shoppings (Boulevard e Iguatemi) e o polo médico do Setor Hospitalar Norte."
      primaryKeyword="Comunicação Visual na Asa Norte"
      descriptionText={[
        "A Asa Norte reúne um público altamente qualificado, combinando polos universitários, quadras de design e decoração (como a famosa 308/309 Norte), restaurantes premiados nas comerciais locais e centros de atendimento médico de ponta no Setor Hospitalar Norte (SHLN).",
        "A Sinal Sign atende empresas da Asa Norte fornecendo fachadas em ACM com acabamentos contemporâneos, letreiros volumétricos iluminados em módulos LED e vitrines adesivadas com padrões geométricos elegantes.",
        "Para os centros clínicos e consultórios de saúde e estética, fabricamos placas em acrílico cristal com impressão UV em alta definição, garantindo clareza e autoridade na identificação profissional."
      ]}
      technicalSpecs={[
        { label: "Quadras com Grande Atuação", value: "CLN 100 a 400, W3 Norte, SHLN e Setor Hoteleiro Norte" },
        { label: "Destaques Técnicos", value: "ACM de 4mm, Letras Caixa Backlight e Acrílico Laser" },
        { label: "Compatibilidade Elétrica", value: "Fontes blindadas contra oscilações de energia do DF" },
        { label: "Visita Técnica no Local", value: "Agendamento ágil com levantamento dimensional" },
        { label: "Resistência aos Ventos", value: "Estruturas dimensionadas para as amplas tesourinhas e vias da Asa Norte" },
        { label: "Garantia Formal", value: "Acabamento automotivo PU com proteção anti-UV" },
      ]}
      materialsUsed={[
        "Alumínio Composto ACM Kynar 500",
        "Aço Inox 304 Polido e Micro-Escovado",
        "Acrílico Cristal 100% Puro de Grau Óptico",
        "Módulos LED IP68 para Chuvas Fortes",
        "Selantes Elásticos PU 40 Estruturais"
      ]}
      processSteps={[
        {
          title: "Vistoria e Levantamento Dimensional",
          desc: "Conferência das medidas da marquise, alvenaria e estudo de visibilidade do ângulo dos motoristas."
        },
        {
          title: "Desenho Técnico e Simulação 3D",
          desc: "Apresentação da maquete digital com fotomontagem real da fachada do seu negócio na Asa Norte."
        },
        {
          title: "Corte CNC e Montagem em Fábrica",
          desc: "Usinagem de precisão nas máquinas router e laser com controle de qualidade minucioso."
        },
        {
          title: "Instalação Noturna ou Diurna",
          desc: "Equipe com andaimes tubulares e EPIs para montagem rápida sem interditar a passagem de clientes."
        }
      ]}
      cases={[
        {
          clientName: "Carlton Tower",
          niche: "Centro Empresarial & Hoteleiro",
          location: "Setor Hoteleiro Norte - Asa Norte / DF",
          specs: "Totem monolítico de entrada e letras caixa volumétricas em aço inox escovado com iluminação retroiluminada.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-19.jpeg"
        },
        {
          clientName: "Kubitschek Plaza Hotel",
          niche: "Hotelaria & Gastronomia Nobre",
          location: "SHN - Asa Norte / DF",
          specs: "Letras bloco de grande formato em aço inox 304 com fixadores prolongadores metálicos de alta resistência.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-24.jpeg"
        }
      ]}
      faqs={[
        {
          question: "A iluminação da fachada precisa de aprovação na Administração de Brasília?",
          answer: "Iluminações externas não podem ofuscar a visão de motoristas nas vias públicas. Por isso, utilizamos iluminação indireta (efeito Halo) ou módulos LED difusos devidamente calibrados em lux."
        },
        {
          question: "Vocês atendem lojas nos shoppings da Asa Norte (Boulevard e Iguatemi)?",
          answer: "Sim! Executamos adesivagem de vitrines, tapumes de obras e letreiros luminosos com montagem noturna credenciada."
        },
        {
          question: "Qual o prazo para a instalação de uma fachada completa na Asa Norte?",
          answer: "Geralmente de 10 a 15 dias úteis a partir da aprovação do projeto executivo."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual na Asa Sul",
          href: "/comunicacao-visual-asa-sul-brasilia",
          anchorText: "Ver Projetos de Comunicação Visual na Asa Sul"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Nossos Revestimentos em ACM no DF"
        },
        {
          title: "Letreiros Luminosos e Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens e Painéis Backlight Iluminados"
        }
      ]}
    />
  );
}
