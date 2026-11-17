import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Adesivos Personalizados e Plotagem de Veículos no DF | Sinal Sign",
  description:
    "Especialistas em Adesivos Personalizados, Envelopamento de Frotas Comerciais e Adesivação de Vitrines em Brasília e DF. Vinis poliméricos de alta durabilidade, películas jateadas e recorte eletrônico sem fundo.",
  alternates: {
    canonical: "https://sinalsign.com.br/adesivos-plotagem-veiculos-brasilia",
  },
  keywords: [
    "adesivos personalizados brasília",
    "plotagem de veículos brasília",
    "envelopamento de frotas df",
    "adesivo jateado brasília",
    "adesivagem de vitrine df",
    "adesivo perfurado brasília",
  ],
  openGraph: {
    title: "Adesivos Personalizados e Plotagem de Veículos no DF | Sinal Sign",
    description:
      "Vinis automotivos e decorativos de alta performance com impressão de alta resolução e aplicação técnica sem bolhas no Distrito Federal.",
    url: "https://sinalsign.com.br/adesivos-plotagem-veiculos-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AdesivosPlotagemPage() {
  return (
    <PillarPageLayout
      slugPath="/adesivos-plotagem-veiculos-brasilia"
      categoryBadge="COMUNICAÇÃO ADESIVA & ENVELOPAMENTO TÉCNICO"
      h1Title="Adesivos Personalizados e Plotagem de Veículos no DF"
      subtitle="Vinis poliméricos de alta ancoragem, películas de controle de privacidade jateadas e envelopamento total ou parcial de veículos comerciais e frotas corporativas em Brasília."
      primaryKeyword="Adesivos Personalizados e Plotagem de Veículos"
      descriptionText={[
        "Os adesivos comerciais e a plotagem de veículos da Sinal Sign transformam a frota e os vidros da sua empresa em canais ativos de atração de clientes. Trabalhamos exclusivamente com vinis automotivos e arquitetônicos de linhagem polimérica, dotados de adesivo solvente acrílico que não agride a pintura original dos automóveis e não deixa resíduos pegajosos durante a remoção.",
        "Em veículos, vans e caminhões, executamos desde a aplicação de logomarcas em recorte eletrônico com proteção UV até o envelopamento total com filmes cast conformáveis que moldam com perfeição sobre vincos e canaletas de lataria. Nos vidros traseiros, utilizamos películas perfuradas homologadas pelo CONTRAN que preservam a visibilidade interna do condutor.",
        "No segmento corporativo e comercial, realizamos a adesivação de vitrines para shopping centers, tapumes de obras em drywall e aplicação de película jateada com recorte de logomarcas para proporcionar privacidade visual elegante em consultórios e salas de reunião."
      ]}
      technicalSpecs={[
        { label: "Tipos de Vinis", value: "Polimérico Premium, Fundido (Cast) e Jateado" },
        { label: "Acabamentos", value: "Brilho, Fosco Acetinado e Jateado Fumê/Cristal" },
        { label: "Durabilidade Externa", value: "Até 5 a 7 anos sem craquelar ou desbotar" },
        { label: "Tecnologia de Recorte", value: "Plotter japonesa de alta precisão com leitor óptico" },
        { label: "Película Perfurada", value: "Homologada CONTRAN com transmissão luminosa de 50%" },
        { label: "Aplicação Técnica", value: "Instaladores com soprador térmico e espatulamento anti-bolha" },
      ]}
      materialsUsed={[
        "Vinil Automotivo Polimérico de Alta Performance",
        "Película Vinílica Jateada para Vidros",
        "Vinil Perfurado Homologado 120g",
        "Laminador Protetor UV Transparente",
        "Adesivo Blackout com Bloqueio de Luz",
        "Máscara de Transferência de Papel e Plástica"
      ]}
      processSteps={[
        {
          title: "Gabarito Dimensional do Veículo",
          desc: "Carregamos o modelo exato do veículo (Fiorino, van, caminhão ou caminhonete) para diagramar as artes respeitando maçanetas e frisos."
        },
        {
          title: "Impressão em Alta Definição & Laminação",
          desc: "Impressão fotográfica com cores vivas e aplicação de camada protetora transparente para resistir a lavagens e pedriscos de estrada."
        },
        {
          title: "Preparação Química da Superfície",
          desc: "Descontaminação da pintura automotiva e vidros com álcool isopropílico para garantir aderência molecular total."
        },
        {
          title: "Aplicação Térmica Sem Bolhas",
          desc: "Instalação técnica em ambiente fechado, utilizando soprador térmico nos cantos para eliminar memória de elasticidade do vinil."
        }
      ]}
      cases={[
        {
          clientName: "Frota de Vans & Utilitários Comerciais",
          niche: "Logística & Serviços Técnicos",
          location: "Setor de Cargas e Vicente Pires - DF",
          specs: "Plotagem parcial com adesivo polimérico laminado nas laterais e película perfurada certificada no vidro traseiro.",
          imageUrl: "/images/servicos-reais/plotagem/WhatsApp Image 2026-11-13 at 10.10.49 (2).jpeg"
        },
        {
          clientName: "Divisórias em Vidro de Clínica Odontológica",
          niche: "Saúde & Estética Avançada",
          location: "Águas Claras - DF",
          specs: "Aplicação de película jateada com faixas de segurança e logotipo recortado eletronicamente para privacidade de consultórios.",
          imageUrl: "/images/servicos-reais/adesivo-recortado/WhatsApp Image 2026-11-13 at 10.10.53 (3).jpeg"
        }
      ]}
      faqs={[
        {
          question: "A plotagem de veículos estraga a pintura original do carro?",
          answer: "Não! Os vinis automotivos de linha profissional que utilizamos protegem a pintura de fábrica contra microrriscos, sol e intempéries. Quando retirados, a lataria se mantém conservada como no dia da aplicação."
        },
        {
          question: "É obrigatório mudar o documento do carro se fizer envelopamento?",
          answer: "Pelas regras do Detran-DF e Contran, se a adesivação cobrir mais de 50% da área pintada do veículo com uma cor diferente da original, é necessário atualizar a cor predominante no documento (CRLV). Caso seja uma plotagem parcial inferior a 50%, não há necessidade de alteração cadastral."
        },
        {
          question: "Qual o cuidado necessário para lavar um carro envelopado?",
          answer: "Recomenda-se lavagem convencional com água e xampu automotivo neutro, evitando jatos de alta pressão muito próximos às bordas do adesivo e o uso de produtos à base de solvente ou querosene."
        },
        {
          question: "Vocês atendem em shoppings no período noturno?",
          answer: "Sim. Nossa equipe técnica de instalação possui credenciamento e atua nos horários determinados pelos shopping centers do DF (Águas Claras Shopping, ParkShopping, Iguatemi, Conjunto Nacional, JK Shopping e Taguatinga Shopping)."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Revestimento de Fachadas de Lojas em ACM"
        },
        {
          title: "Impressão UV Rígida",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Conhecer Impressão UV em Vidro e Acrílico"
        },
        {
          title: "Banners Promocionais",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Banners e Lonas para Campanhas Comerciais"
        }
      ]}
    />
  );
}
