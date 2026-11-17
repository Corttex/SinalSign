import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Letreiros Luminosos e Totens no DF | Fachadas e Monumentos — Sinal Sign",
  description:
    "Fabricação própria de Letreiros Luminosos, Caixas Backlight, Frontlight e Totens Monumentais de Solo em Brasília e DF. Chassi de aço galvanizado, revestimento em ACM e LED IP68.",
  alternates: {
    canonical: "https://sinalsign.com.br/letreiros-luminosos-totens-brasilia",
  },
  keywords: [
    "letreiros luminosos brasília",
    "totens comerciais df",
    "totem para condomínio brasília",
    "fachada luminosa df",
    "backlight brasília",
    "painel luminoso comercial",
  ],
  openGraph: {
    title: "Letreiros Luminosos e Totens no DF | Sinal Sign",
    description:
      "Sistemas de iluminação e estruturas verticais monolíticas com engenharia de cálculo estrutural no Distrito Federal.",
    url: "https://sinalsign.com.br/letreiros-luminosos-totens-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function LuminososTotensPage() {
  return (
    <PillarPageLayout
      slugPath="/letreiros-luminosos-totens-brasilia"
      categoryBadge="VISIBILIDADE NOTURNA & MONUMENTOS DE SOLO"
      h1Title="Letreiros Luminosos e Totens Monumentais no DF"
      subtitle="Sistemas luminosos de alta eficiência energética e totens verticais estruturados para condomínios, hotéis e centros empresariais em todo o Distrito Federal."
      primaryKeyword="Letreiros Luminosos e Totens"
      descriptionText={[
        "A visibilidade noturna de um estabelecimento comercial ou condomínio define a autoridade do seu endereço. A Sinal Sign desenvolve projetos completos de letreiros luminosos, painéis backlight/frontlight e totens monolíticos de solo, combinando engenharia metalúrgica, cálculo de carga de vento e módulos LED de última geração.",
        "Nossos totens verticais são construídos a partir de chassis de vigas metálicas galvanizadas e soldados conforme normas técnicas. O fechamento é executado com bandejas de ACM conformadas por dobra tupia, com vazados a laser para letras translúcidas ou aplicação de elementos tridimensionais em relevo.",
        "Toda a infraestrutura luminosa conta com módulos LED de alto rendimento lumínico (High Lumen) com blindagem IP68 (à prova de poeira e tempestades torrenciais do cerrado), alimentados por fontes blindadas com proteção contra surtos de tensão da rede elétrica de Brasília."
      ]}
      technicalSpecs={[
        { label: "Altura dos Totens", value: "2,00m a 8,00m com ancoragem calculada" },
        { label: "Ancoragem de Solo", value: "Sapatas de concreto com chumbadores químicos" },
        { label: "Grau de Proteção Elétrica", value: "Módulos LED IP68 e caixas herméticas" },
        { label: "Fechamento Externo", value: "Chapas em ACM 3mm e 4mm com dobra CNC" },
        { label: "Sistemas Luminosos", value: "Backlight, Frontlight e Halo Effect" },
        { label: "Normas de Vento", value: "Dimensionado conforme NBR 6123 (Cargas de Vento)" },
      ]}
      materialsUsed={[
        "Vigas Estruturais de Aço Tubular Galvanizado",
        "Chapas de Alumínio Composto (ACM)",
        "Acrílico Translúcido Difusor de Alta Difusão",
        "Módulos LED 12V IP68 com Lentes Ópticas",
        "Fontes Chaveadas Blindadas MeanWell / Similares",
        "Chumbadores Químicos de Aço Carbono Zincado"
      ]}
      processSteps={[
        {
          title: "Sondagem do Local & Cálculo Estrutural",
          desc: "Avaliação do tipo de solo ou calçada, altura requerida para visibilidade dos motoristas e dimensionamento da sapata."
        },
        {
          title: "Serralheria Pesada & Tratamento",
          desc: "Montagem da gaiola estrutural, solda MIG contínua e aplicação de fundo convertedor de ferrugem e epóxi protetivo."
        },
        {
          title: "Revestimento em ACM & Elétrica LED",
          desc: "Usinagem das bandejas de acabamento, recorte das logos e instalação das fitas/módulos LED com cabos normatizados."
        },
        {
          title: "Içamento, Fixação & Comissionamento",
          desc: "Transporte em caminhão munck, fixação nos chumbadores, ligação elétrica subterrânea e testes de luminosidade."
        }
      ]}
      cases={[
        {
          clientName: "Cartório Colorado",
          niche: "Serviços Notariais",
          location: "Sobradinho / Grande Colorado - DF",
          specs: "Letras monolíticas com iluminação interna LED de alta intensidade instaladas sobre fechamento de vidro e pórtico comercial.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg"
        },
        {
          clientName: "St. Paul Plaza Hotel",
          niche: "Hotelaria & Gastronomia Corporativa",
          location: "Setor Hoteleiro Sul - DF",
          specs: "Totem vertical monumental de 4,20m de altura com estrutura galvanizada, acabamento em ACM naval e iluminação frontal balizada.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-12.jpeg"
        },
        {
          clientName: "Residencial Vila das Flores",
          niche: "Condomínio Residencial Nobre",
          location: "Park Way / Noroeste - DF",
          specs: "Totem arquitetônico de entrada combinando ACM amadeirado, letras vazadas retroiluminadas e iluminação balizada de paisagismo.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        }
      ]}
      faqs={[
        {
          question: "É necessária autorização da Administração Regional para instalar um totem?",
          answer: "Sim. Em Brasília e cidades do DF, totens de calçada e áreas públicas exigem conformidade com a Lei de Engenhos Publicitários do DF. Nós fornecemos o projeto dimensional e ART (Anotação de Responsabilidade Técnica) quando necessário para o processo de licenciamento."
        },
        {
          question: "Qual o consumo de energia de um letreiro luminoso moderno em LED?",
          answer: "Graças à tecnologia dos módulos LED de alta eficiência lumínica, o consumo é até 80% inferior aos antigos tubos de neon ou lâmpadas fluorescentes, além de operarem em baixa tensão (12V), eliminando riscos de choque elétrico."
        },
        {
          question: "Os totens resistem às tempestades de vento de Brasília?",
          answer: "Sim. Todas as nossas estruturas de solo são dimensionadas com base na NBR 6123, considerando as velocidades de rajada características do planalto central, fixadas em sapatas de concreto com chumbadores de aço zincado."
        },
        {
          question: "O que acontece se um módulo de LED queimar?",
          answer: "Nossos projetos são modulares e possuem acesso facilitado por tampas de inspeção invisíveis. A substituição de uma régua ou fonte é feita rapidamente sem necessidade de desmontar o totem."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Projetos de Fachadas Comerciais em ACM no DF"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras em Alto Relevo Inox e Acrílico"
        },
        {
          title: "Lonas e Banners",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Lonas Backlight para Painéis Luminosos de Grande Formato"
        }
      ]}
    />
  );
}
