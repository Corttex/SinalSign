import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual no Lago Sul e Lago Norte (DF) | Sinal Sign",
  description:
    "Comunicação visual de alto luxo e arquitetura contemporânea para mansões, centros de compras (Gilberto Salomão, Deck Brasil, Iguatemi) e condomínios do Lago Sul e Lago Norte no DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-lago-sul-lago-norte-df",
  },
  keywords: [
    "comunicacao visual lago sul",
    "comunicacao visual lago norte df",
    "letra caixa gilberto salomao",
    "totem condominio lago sul df",
    "fachada de alto padrao brasilia",
  ],
  openGraph: {
    title: "Comunicação Visual no Lago Sul e Lago Norte (DF) | Sinal Sign",
    description: "Acabamentos de altíssimo padrão com aço inox, acrílico e design minimalista para o Lago Sul e Norte.",
    url: "https://sinalsign.com.br/comunicacao-visual-lago-sul-lago-norte-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualLagosPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-lago-sul-lago-norte-df"
      categoryBadge="ALTO LUXO & ARQUITETURA DE PADRÃO INTERNACIONAL"
      h1Title="Comunicação Visual no Lago Sul e Lago Norte (DF)"
      subtitle="Engenharia de precisão e materiais nobres para as embaixadas, centros comerciais exclusivos (Gilberto Salomão, Deck Brasil, Pontão) e condomínios de alto luxo dos Lagos Sul e Norte."
      primaryKeyword="Comunicação Visual no Lago Sul e Lago Norte"
      descriptionText={[
        "O Lago Sul e o Lago Norte concentram a maior renda per capita do Distrito Federal, abrigando representações diplomáticas internacionais, clínicas de cirurgia plástica e estética de padrão VIP, bistrôs gastronômicos e os centros comerciais mais exclusivos de Brasília.",
        "Nesse segmento de alto padrão, a comunicação visual não pode ser ostensiva ou genérica: ela deve expressar sofisticação discreta, tipografia minimalista e acabamento impecável. A Sinal Sign desenvolve letreiros em aço inox 304 escovado com solda invisível, placas em acrílico cristal com lapidação diamantada e totens monolíticos integrados a projetos de paisagismo.",
        "Trabalhamos em estreita parceria com os principais escritórios de arquitetura e design de interiores de Brasília, garantindo fidelidade absoluta às maquetes 3D e aos materiais especificados nos projetos executivos."
      ]}
      technicalSpecs={[
        { label: "Centros Atendidos", value: "Gilberto Salomão, Deck Brasil, Pontão do Lago Sul, Iguatemi e Centros Clínicos" },
        { label: "Materiais de Linha Nobre", value: "Aço Inox 304, Latão Polido, Acrílicos Cast e ACM Especial" },
        { label: "Iluminação Exclusiva", value: "Micro-LEDs de temperatura quente com difusores anti-pontos de sombra" },
        { label: "Tolerância Dimensional", value: "Padrão de relojoaria com usinagem a laser CNC" },
        { label: "Nível de Discrição", value: "Fixações totalmente ocultas com pinos roscados internos" },
        { label: "Garantia de Durabilidade", value: "Resistência total à umidade da orla do Lago Paranoá" },
      ]}
      materialsUsed={[
        "Aço Inox AISI 304 Naval Escovado e Polido",
        "Acrílico Cristal Virgem 10mm a 20mm de Espessura",
        "Acrílico Espelhado Dourado e Rosé Gold",
        "ACM com Acabamentos Amadeirados e Corten",
        "Pinos Roscados Ocultos e Buchas Metálicas Nobres"
      ]}
      processSteps={[
        {
          title: "Alinhamento com o Escritório de Arquitetura",
          desc: "Estudo conjunto do projeto luminotécnico e dos acabamentos especificados para o espaço."
        },
        {
          title: "Amostras Reais de Materiais",
          desc: "Apresentação de amostras físicas de aço inox, acrílico e iluminação para aprovação do cliente."
        },
        {
          title: "Usinagem Artesanal e Laser",
          desc: "Corte milimétrico e acabamento manual primoroso por mestres serralheiros e polidores da fábrica."
        },
        {
          title: "Instalação VIP com Agendamento",
          desc: "Montagem silenciosa, limpa e com proteção de todos os pisos e revestimentos nobres do imóvel."
        }
      ]}
      cases={[
        {
          clientName: "Boutique de Luxo Cris Barros",
          niche: "Moda de Luxo",
          location: "Brasília / DF",
          specs: "Letras caixa ultrafinas com acabamento escovado premium e fixação invisível sobre mármore nobre.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-10.jpeg"
        },
        {
          clientName: "Clínica de Estética e Cirurgia Plástica",
          niche: "Medicina de Alto Padrão",
          location: "Centro Comercial Gilberto Salomão - Lago Sul / DF",
          specs: "Logomarca em acrílico cristal 15mm bisotado com sobreposição dourada e retroiluminação indireta.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Os materiais resistem à umidade da orla do Lago Paranoá?",
          answer: "Sim! Utilizamos exclusivamente aço inoxidável da classe AISI 304 (marítimo/naval) e componentes com tratamento anticorrosivo, impedindo qualquer surgimento de manchas de ferrugem provocadas pela maresia do lago."
        },
        {
          question: "Vocês trabalham com fornecimento de amostras antes da produção final?",
          answer: "Sim! Para projetos corporativos e residenciais nobres nos Lagos, apresentamos amostras reais de aço, acrílico e LED para validação pelo arquiteto responsável."
        },
        {
          question: "É possível instalar letreiros em paredes de mármore Travertino ou porcelanatos especiais?",
          answer: "Sim! Dispomos de brocas diamantadas e metodologia de perfuração controlada que não lasca ou trinca pedras nobres e porcelanatos de grande formato."
        }
      ]}
      relatedPillars={[
        {
          title: "Logo em Acrílico para Recepção",
          href: "/logo-acrilico-recepcao-brasilia",
          anchorText: "Ver Logomarcas em Acrílico Nobre para Recepções"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras em Aço Inox 304 Escovado e Polido"
        },
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens Arquitetônicos de Entrada no DF"
        }
      ]}
    />
  );
}
