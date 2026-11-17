import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Fachadas em ACM em Brasília (DF) | Fabricação e Instalação — Sinal Sign",
  description:
    "Fabricação própria de Fachadas em ACM em Brasília e DF. Revestimento em alumínio composto 3mm e 4mm Kynar/PVDF, estrutura tubular tratada e juntas de dilatação em PU estrutural.",
  alternates: {
    canonical: "https://sinalsign.com.br/fachadas-em-acm-brasilia",
  },
  keywords: [
    "fachadas em acm brasília",
    "fachada de loja em acm df",
    "revestimento em acm brasília",
    "painel de acm comercial df",
    "pórtico em acm águas claras",
    "fachadas comerciais brasília",
  ],
  openGraph: {
    title: "Fachadas em ACM em Brasília (DF) | Sinal Sign",
    description:
      "Projetos e montagens estruturais de fachadas em alumínio composto com alta resistência térmica no Distrito Federal.",
    url: "https://sinalsign.com.br/fachadas-em-acm-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function FachadasAcmPage() {
  return (
    <PillarPageLayout
      slugPath="/fachadas-em-acm-brasilia"
      categoryBadge="ENGENHARIA DE FACHADAS & ARQUITETURA COMERCIAL"
      h1Title="Fachadas em ACM em Brasília (DF)"
      subtitle="Revestimento monolítico em chapas de alumínio composto com usinagem CNC de dobra tupia, tratamento anticorrosivo e resistência extrema à radiação solar do Distrito Federal."
      primaryKeyword="Fachadas em ACM"
      descriptionText={[
        "A Sinal Sign projeta, modula e instala fachadas em ACM (Alumínio Composto) para comércios, clínicas, concessionárias e edifícios corporativos em todo o Distrito Federal. Utilizamos chapas homologadas de 3mm e 4mm com pintura automotiva e resina PVDF (Kynar 500), garantindo retenção de cor e resistência contra o ressecamento provocado pelo clima seco e ensolarado de Brasília.",
        "Nossa engenharia fabrica as bandejas com dobra tupia de 90° e 135°, reforçadas internamente por cantoneiras e fixadas sobre chassi estrutural de metalon galvanizado com pintura protetiva. Todas as juntas de dilatação são calafetadas com selante PU 40 de alta elasticidade, impedindo infiltrações e mantendo o alinhamento visual perfeito.",
        "Do projeto 3D executivo e levantamento topográfico da testeira à instalação em altura com equipe certificada pelas normas NR-35 e NR-18, garantimos uma entrega pontual e de alto impacto estético para sua marca."
      ]}
      technicalSpecs={[
        { label: "Espessuras das Chapas", value: "ACM 3mm e 4mm" },
        { label: "Pintura & Acabamento", value: "Poliéster HD / Kynar 500 PVDF" },
        { label: "Chassi Estrutural", value: "Tubo Metalon Galvanizado Tratado" },
        { label: "Calafetação de Juntas", value: "Selante de Poliuretano PU 40" },
        { label: "Usinagem de Dobras", value: "Fresa CNC Router de Precisão" },
        { label: "Garantia Estrutural", value: "Certificada contra empenamento e delaminação" },
      ]}
      materialsUsed={[
        "Chapas ACM 3mm",
        "Chapas ACM 4mm Mineral",
        "Metalon Galvanizado 20x20 a 50x50",
        "Selante Estrutural PU 40",
        "Parafusos Autobrocantes Inox",
        "Primer Anticorrosivo Epóxi"
      ]}
      processSteps={[
        {
          title: "Visita Técnica & Medição In Loco",
          desc: "Nossos técnicos vão até o seu endereço no DF para aferir níveis, esquadro, pontos elétricos e avaliar a alvenaria da fachada."
        },
        {
          title: "Projeto 3D Executivo & Modulação",
          desc: "Cálculo detalhado do aproveitamento das bandejas de ACM para minimizar emendas e garantir harmonia com o projeto arquitetônico."
        },
        {
          title: "Usinagem CNC & Usinagem em Fábrica",
          desc: "Corte, furação e chanfro das chapas em router computadorizada, com montagem dos reforços internos no parque fabril da Sinal Sign."
        },
        {
          title: "Fixação e Instalação no DF",
          desc: "Montagem do chassi nivelado, fixação das bandejas, aplicação de selante nas juntas e cabeamento elétrico seguro."
        }
      ]}
      cases={[
        {
          clientName: "Send Beauty Cosméticos",
          niche: "Salão de Beleza & Estética",
          location: "Águas Claras - DF",
          specs: "Fachada em ACM 3mm Grafite com cápsula moldada perimetral de 22,50m de extensão e aplicação de letras caixa iluminadas em LED IP68.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        },
        {
          clientName: "Carlton Tower",
          niche: "Centro Empresarial & Hoteleiro",
          location: "Setor Hoteleiro Norte - DF",
          specs: "Revestimento monolítico de pórtico em ACM preto acetinado estruturado sobre chassi galvanizado contra rajadas de vento.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-19.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Quanto tempo dura uma fachada em ACM no clima de Brasília?",
          answer: "Com chapas de pintura automotiva e resina PVDF, a vida útil ultrapassa 10 a 15 anos sem descascar, mantendo o brilho e a estabilidade dimensional mesmo exposta ao sol intenso e poeira do cerrado."
        },
        {
          question: "O ACM pode ser instalado sobre alvenaria antiga ou cerâmica?",
          answer: "Sim. O chassi estrutural de metalon galvanizado cria um afastamento seguro e corrige qualquer irregularidade, desnível ou imperfeição da parede original."
        },
        {
          question: "Vocês cuidam da iluminação e das letras em conjunto com a fachada?",
          answer: "Sim! Integramos letras caixa 3D iluminadas, fitas LED ocultas para iluminação indireta e blade signs no mesmo projeto elétrico e estrutural."
        },
        {
          question: "Qual o prazo médio de fabricação e montagem de uma fachada?",
          answer: "Geralmente entre 10 a 20 dias úteis após aprovação do projeto executivo e conferência das medidas finais."
        }
      ]}
      relatedPillars={[
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras Caixa 3D para aplicação sobre Fachadas em ACM"
        },
        {
          title: "Letreiros Luminosos & Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Conhecer Totens de Solo em ACM para Entradas Comerciais"
        },
        {
          title: "Adesivos & Vitrines",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Adesivação e Películas Jateadas para Vitrines de Loja"
        }
      ]}
    />
  );
}
