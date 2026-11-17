import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Impressão de Banners e Lonas em Brasília (DF) | Frontlight e Eventos — Sinal Sign",
  description:
    "Fabricação rápida e industrial de Banners em Lona 440g, Mega Lonas Frontlight/Backlight e Backdrops para Eventos e Congressos em Brasília e DF. Solda térmica reforçada e ilhós inoxidáveis.",
  alternates: {
    canonical: "https://sinalsign.com.br/impressao-banners-lonas-brasilia",
  },
  keywords: [
    "impressão de banners brasília",
    "banners personalizados df",
    "lona frontlight brasília",
    "painel backdrop eventos df",
    "mega banners brasília",
    "faixas em lona comercial df",
  ],
  openGraph: {
    title: "Impressão de Banners e Lonas em Brasília (DF) | Sinal Sign",
    description:
      "Impressão em grande formato de lonas resistentes a vento e banners promocionais com acabamento profissional no Distrito Federal.",
    url: "https://sinalsign.com.br/impressao-banners-lonas-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BannersLonasPage() {
  return (
    <PillarPageLayout
      slugPath="/impressao-banners-lonas-brasilia"
      categoryBadge="GRANDES FORMATOS & ESTRUTURAS PROMOCIONAIS"
      h1Title="Impressão de Banners e Lonas Reforçadas em Brasília (DF)"
      subtitle="Lonas vinílicas tramadas de alta gramatura (440g) com solda eletrônica de alta frequência, ilhós anticorrosivo e backdrops para congressos e eventos no Centro de Convenções do DF."
      primaryKeyword="Impressão de Banners e Lonas"
      descriptionText={[
        "Para eventos, campanhas comerciais de alto impacto, inaugurações e fechamentos de empenas, a Sinal Sign oferece capacidade de impressão de grande formato em lonas vinílicas frontlight e backlight com largura de boca de até 3,20m em peça única sem costura intermediária.",
        "Nossas lonas utilizam trama interna de poliéster 500x500 de alta tenacidade, resistindo a fortes rajadas de vento e variações térmicas sem rasgar ou descolar nos pontos de tração. O acabamento perimetral recebe reforço soldado por alta frequência (solda térmica eletrônica) e anéis de ilhós de aço niquelado antioxidante aplicados sob pressão pneumática.",
        "Atendemos com agilidade congressos, seminários e feiras no Centro de Convenções Ulysses Guimarães, Centro de Eventos Brasil 21 e hotéis de Brasília, produzindo painéis pantográficos, backdrops com estruturas desmontáveis em alumínio e banners roll-up com bolsas de transporte."
      ]}
      technicalSpecs={[
        { label: "Gramatura das Lonas", value: "440g Frontlight / 500g Backlight Translúcida" },
        { label: "Largura Máxima sem Emenda", value: "Até 3,20 metros contínuos" },
        { label: "Tecnologia de Solda", value: "Solda eletrônica por alta frequência" },
        { label: "Ilhós e Fixadores", value: "Ilhós de aço niquelado antiferrugem" },
        { label: "Resolução de Saída", value: "Até 1200 DPI em grandes formatos" },
        { label: "Estruturas de Apoio", value: "Tubos de madeira, perfis de alumínio e tripés retráteis" },
      ]}
      materialsUsed={[
        "Lona Vinílica 440g Fosca e Brilhante",
        "Lona Translúcida Backlight para Caixas de Luz",
        "Lona Ortopoly Perfurada Anti-Vento (Mesh)",
        "Ilhós Niquelados com Arruela de Retenção",
        "Bastões de Madeira Nobre e Ponteiras Plásticas",
        "Perfis e Suportes Roll-Up em Alumínio Anodizado"
      ]}
      processSteps={[
        {
          title: "Fechamento de Arquivo & Sangria",
          desc: "Conferência da proporção, resolução dos bitmaps e inclusão de margens de segurança para dobras e soldas perimetrais."
        },
        {
          title: "Plotagem em Grande Formato",
          desc: "Impressão em impressoras industriais com perfil de cores saturado e excelente densidade de preto para fundos fotográficos."
        },
        {
          title: "Solda Eletrônica & Aplicação de Ilhós",
          desc: "Reforço das bainhas por fusão molecular térmica e perfuração milimétrica com posicionamento equidistante dos anéis."
        },
        {
          title: "Montagem de Estruturas ou Entrega Ágil",
          desc: "Montagem em tripés retráteis ou envio com embalagem tubular protetora para preservação da lona contra marcas de dobra."
        }
      ]}
      cases={[
        {
          clientName: "Backdrops para Congressos & Coletivas",
          niche: "Eventos & Conferências Corporativas",
          location: "Centro de Convenções Ulysses Guimarães - DF",
          specs: "Painel modular de fundo de palco em lona fosca anti-reflexo com estrutura de alumínio autoportante de 6,00m x 2,50m.",
          imageUrl: "/images/servicos-reais/backdrop/WhatsApp Image 2026-11-13 at 10.10.37 (2).jpeg"
        },
        {
          clientName: "Banners Promocionais para Redes Comerciais",
          niche: "Varejo & Franquias",
          location: "Taguatinga e Plano Piloto - DF",
          specs: "Banners em lona frontlight 440g com acabamento superior em bastão e cordão para divulgação de lançamentos comerciais.",
          imageUrl: "/images/servicos-reais/banner/WhatsApp Image 2026-11-13 at 10.10.42 (1).jpeg"
        }
      ]}
      faqs={[
        {
          question: "Qual a diferença entre lona fosca e lona com brilho?",
          answer: "A lona fosca é indispensável para eventos, coletivas de imprensa, fundos de palco e locais com iluminação direta de refletores ou flashes de câmeras, pois elimina reflexos brancos nas fotos. A lona com brilho é mais usada em ambientes externos, aumentando a vivacidade e o contraste das cores."
        },
        {
          question: "Como evitar que a lona rasgue quando instalada em locais com muito vento?",
          answer: "Executamos a bainha com solda eletrônica dupla, reforçando o perímetro onde o ilhós é aplicado. Para áreas abertas de alto vento (como fachadas altas e empenas), recomendamos a Lona Perfurada (Mesh), que permite a passagem do ar sem criar efeito vela."
        },
        {
          question: "Qual o prazo de entrega para banners de urgência para eventos no DF?",
          answer: "Para tiragens pontuais de banners e faixas com artes já vetorizadas e aprovadas, temos capacidade de produção expressa em até 24 a 48 horas úteis."
        },
        {
          question: "Vocês alugam ou vendem a estrutura metálica do backdrop?",
          answer: "Sim, fornecemos tanto os suportes retráteis em alumínio (porta-banner roll-up e box truss) quanto a estrutura completa sob medida para venda definitiva ou projetos turnkey de eventos."
        }
      ]}
      relatedPillars={[
        {
          title: "Letreiros Luminosos & Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Painéis Backlight e Totens Monolíticos de Solo"
        },
        {
          title: "Adesivos & Frotas",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Adesivos de Vinil para Vitrines e Eventos"
        },
        {
          title: "Impressão UV Direta",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Ver Impressão UV em Placas Rígidas e Quadros"
        }
      ]}
    />
  );
}
