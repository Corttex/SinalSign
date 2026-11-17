import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Ceilândia e Samambaia (DF) | Sinal Sign",
  description:
    "Soluções em Comunicação Visual de alto impacto e preço de fábrica para Ceilândia Centro, Ceilândia Sul/Norte e Samambaia DF: Fachadas em ACM, Letreiros Luminosos, Lonas e Banners.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-ceilandia-samambaia-df",
  },
  keywords: [
    "comunicacao visual ceilandia",
    "fachadas em acm ceilandia df",
    "comunicacao visual samambaia",
    "banners e lonas ceilandia sul norte",
    "letreiro luminoso samambaia df",
  ],
  openGraph: {
    title: "Comunicação Visual em Ceilândia e Samambaia (DF) | Sinal Sign",
    description: "Fabricação própria com prazos rápidos e condições diretas para o forte comércio de Ceilândia e Samambaia.",
    url: "https://sinalsign.com.br/comunicacao-visual-ceilandia-samambaia-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualCeilandiaSamambaiaPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-ceilandia-samambaia-df"
      categoryBadge="COMÉRCIO POPULAR, ATACADO & GRANDES REDES"
      h1Title="Comunicação Visual em Ceilândia e Samambaia (DF)"
      subtitle="Estruturas de grande impacto visual, lonas reforçadas de alta durabilidade, fachadas em ACM e letreiros iluminados com preço direto de fábrica para Ceilândia e Samambaia."
      primaryKeyword="Comunicação Visual em Ceilândia e Samambaia"
      descriptionText={[
        "Ceilândia é a cidade mais populosa e com um dos maiores polos econômicos independentes do Distrito Federal, abrigando milhares de empresas na Feira Central, Ceilândia Centro (CNM/CNN), Ceilândia Sul, Norte e Setor de Indústria da Ceilândia. Ao lado, Samambaia vive uma franca expansão comercial ao longo da Primeira e Segunda Avenidas.",
        "Nesse mercado competitivo e de alto volume de clientes, uma fachada moderna e bem iluminada é o divisor de águas para atrair o público e consolidar marcas fortes. A Sinal Sign atende redes de supermercados, farmácias, óticas, lojas de confecção, materiais de construção e academias na região.",
        "Oferecemos soluções completas: desde painéis de lona frontlight com estrutura tubular reforçada para quem busca agilidade e menor investimento até fachadas imponentes em ACM com letras bloco 3D e módulos LED de alta luminosidade."
      ]}
      technicalSpecs={[
        { label: "Cidades Cobertas", value: "Ceilândia Centro, Sul, Norte, P Sul, P Norte, QNQ, QNR e Samambaia Sul/Norte" },
        { label: "Serviços Mais Procurados", value: "Fachadas em ACM, Letras 3D, Lonas Frontlight e Banners Promocionais" },
        { label: "Capacidade de Produção", value: "Grande parque fabril no DF com maquinário para pedidos em larga escala" },
        { label: "Visita Técnica", value: "Equipe técnica com visita e levantamento dimensional ágil" },
        { label: "Formas de Pagamento", value: "Condições facilitadas direto de fábrica e parcelamento para empresas" },
        { label: "Garantia de Acabamento", value: "Solda eletrônica, tratamento antiferrugem e materiais de 1ª linha" },
      ]}
      materialsUsed={[
        "Lonas Vinílicas Frontlight 440g Tramadas de Alta Tenacidade",
        "Chapas de Alumínio Composto ACM 3mm",
        "Tubos Metálicos Galvanizados Tratados com Zarcão",
        "Módulos LED 12V com Proteção Contra Chuva",
        "Adesivos Vinílicos de Alta Aderência para Vitrines"
      ]}
      processSteps={[
        {
          title: "Visita no Ponto Comercial",
          desc: "Nossos consultores visitam sua empresa em Ceilândia ou Samambaia para avaliar medidas e alinhamento."
        },
        {
          title: "Desenho da Fachada em 3D",
          desc: "Apresentamos o projeto visual detalhado com simulação do letreiro e estudo das cores da sua marca."
        },
        {
          title: "Produção Rápida em Fábrica",
          desc: "Fabricação com corte computadorizado e solda contínua na fábrica própria da Sinal Sign no DF."
        },
        {
          title: "Instalação Segura no Local",
          desc: "Montagem ágil por equipe treinada e equipada com andaimes para não interromper as vendas da sua loja."
        }
      ]}
      cases={[
        {
          clientName: "Supermercado & Atacarejo Regional",
          niche: "Alimentos & Varejo Popular",
          location: "Ceilândia Centro - DF",
          specs: "Fachada monumental de 48m de extensão em ACM vermelho e amarelo com letras bloco de 1,50m de altura iluminadas.",
          imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"
        },
        {
          clientName: "Rede de Óticas e Acessórios",
          niche: "Ótica & Saúde Visual",
          location: "Samambaia Sul (Primeira Avenida) - DF",
          specs: "Revestimento de testeira em ACM preto brilhante com blade sign circular dupla face para calçada.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês atendem pequenas lojas comerciais em Ceilândia?",
          answer: "Sim! Fabricamos desde placas de identificação e banners avulsos para pequenas lojas até fachadas inteiras de redes com dezenas de filiais no DF."
        },
        {
          question: "Qual o prazo para confeccionar lonas ou faixas para liquidações?",
          answer: "Para campanhas promocionais de varejo (queima de estoque, inaugurações), produzimos lonas e banners com prazos expressos de 24h a 48h úteis."
        },
        {
          question: "A Sinal Sign facilita o pagamento para empresas do DF?",
          answer: "Sim! Trabalhamos com faturamento para pessoas jurídicas, cartão de crédito parcelado e condições especiais direto de fábrica."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual em Taguatinga",
          href: "/comunicacao-visual-taguatinga-df",
          anchorText: "Ver Projetos de Comunicação Visual em Taguatinga"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Revestimentos Comerciais em ACM"
        },
        {
          title: "Impressão de Banners e Lonas",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Lonas Frontlight e Faixas Promocionais no DF"
        }
      ]}
    />
  );
}
