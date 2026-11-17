import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual no Sudoeste e Noroeste em Brasília (DF) | Sinal Sign",
  description:
    "Comunicação visual para os bairros mais nobres de Brasília: Sudoeste (CLSW) e Noroeste (CRNW). Fachadas elegantes em ACM, Letras Caixa Inox, Placas em Acrílico e Totens Condominiais.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-sudoeste-noroeste-df",
  },
  keywords: [
    "comunicacao visual sudoeste df",
    "comunicacao visual noroeste brasilia",
    "fachadas clsw sudoeste",
    "letra caixa crnw noroeste",
    "totem condominio noroeste brasilia",
  ],
  openGraph: {
    title: "Comunicação Visual no Sudoeste e Noroeste em Brasília (DF) | Sinal Sign",
    description: "Projetos de alta sofisticação arquitetônica e materiais nobres para o Sudoeste e Noroeste DF.",
    url: "https://sinalsign.com.br/comunicacao-visual-sudoeste-noroeste-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualSudoesteNoroestePage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-sudoeste-noroeste-df"
      categoryBadge="BAIRROS NOBRES & PADRÃO ARQUITETÔNICO ELEVADO"
      h1Title="Comunicação Visual no Sudoeste e Noroeste em Brasília (DF)"
      subtitle="Identidade visual discreta, nobre e altamente durável para os centros clínicos, galerias gastronômicas do Sudoeste (CLSW/CCSW) e os modernos empreendimentos do Noroeste (CRNW)."
      primaryKeyword="Comunicação Visual no Sudoeste e Noroeste"
      descriptionText={[
        "O Sudoeste e o Noroeste representam o ápice da sofisticação residencial e corporativa no Distrito Federal. Com exigências estéticas elevadas, fachadas revestidas em granito e restrições urbanísticas bem delineadas pelas administrações locais, a comunicação visual precisa ser executada com discrição e materiais nobres.",
        "A Sinal Sign atende clínicas de dermatologia, consultórios médicos, escritórios de investimentos e lojas de alta gastronomia instaladas nas quadras comerciais do Sudoeste (CLSW e CCSW) e nas novas galerias do Noroeste (CRNW 500 e 700).",
        "Fabricamos também totens monumentais de identificação predial em ACM amadeirado e aço inox para as portarias dos edifícios de altíssimo padrão construtivo dessas regiões, combinando beleza contemporânea com iluminação balizada de paisagismo."
      ]}
      technicalSpecs={[
        { label: "Regiões Atendidas", value: "Sudoeste (CLSW, CCSW, QMSW), Octogonal e Noroeste (CRNW, SQNW)" },
        { label: "Materiais Predominantes", value: "Aço Inox 304 Escovado, Acrílico Bisotado e ACM Amadeirado" },
        { label: "Iluminação Típica", value: "Efeito Halo (luz indireta quente 3000K/4000K) anti-ofuscamento" },
        { label: "Nível de Ruído na Instalação", value: "Montagem silenciosa e limpa respeitando vizinhança residencial" },
        { label: "Proteção Térmica", value: "Componentes com verniz náutico e vedação total contra insetos" },
        { label: "Durabilidade Estimada", value: "Superior a 15 anos com baixíssima manutenção" },
      ]}
      materialsUsed={[
        "Aço Inox AISI 304 com Acabamento Micro-Escovado",
        "Acrílico Cristal Puro 100% Virgem Bisotado",
        "ACM com Textura Amadeirada e Preto Acetinado",
        "Módulos LED de Alto Índice de Reprodução de Cor (IRC > 80)",
        "Fixadores Ocultos Roscados em Latão e Aço"
      ]}
      processSteps={[
        {
          title: "Análise Arquitetônica e da Alvenaria",
          desc: "Avaliação do tipo de revestimento da fachada (granito, porcelanato ou ACM existente) para definir a fixação."
        },
        {
          title: "Render 3D de Alta Fidelidade",
          desc: "Apresentação da proposta visual integrada à iluminação noturna da fachada."
        },
        {
          title: "Corte a Laser e Polimento Fino",
          desc: "Produção milimétrica com acabamento de borda sem rebarbas ou marcas de solda."
        },
        {
          title: "Instalação Discreta e Nivelada",
          desc: "Montagem técnica com gabarito escala 1:1 e ferramentas com aspiração de pó."
        }
      ]}
      cases={[
        {
          clientName: "Residencial de Alto Padrão Vila das Flores",
          niche: "Condomínio Residencial Nobre",
          location: "Noroeste / Park Way - DF",
          specs: "Totem monolítico de entrada em ACM amadeirado com letras vazadas retroiluminadas e balizadores de solo.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        },
        {
          clientName: "Boutique de Estética e Dermatologia",
          niche: "Saúde & Beleza Avançada",
          location: "CLSW 300 - Sudoeste / DF",
          specs: "Letras em aço inox escovado com luz indireta quente e logo em acrílico dourado espelhado sobre ripado.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-10.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Os condomínios do Noroeste exigem padrão específico para totens e letreiros?",
          answer: "Sim, muitos condomínios do Noroeste possuem comitês de arquitetura que exigem aprovação prévia do projeto visual. A Sinal Sign fornece plantas, memorial descritivo e renders 3D para facilitar a aprovação."
        },
        {
          question: "A fixação de letras caixa pode danificar o revestimento de granito da fachada?",
          answer: "Não. Utilizamos brocas diamantadas de alta precisão com refrigeração a água e parafusos de expansão química que não provocam trincas nas pedras nobres."
        },
        {
          question: "Vocês atendem os centros comerciais da quadra 300 do Sudoeste?",
          answer: "Sim! Atendemos comércios, academias, restaurantes e clínicas nas quadras 100, 300 e 500 do Sudoeste com visitas técnicas diárias."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual na Asa Sul",
          href: "/comunicacao-visual-asa-sul-brasilia",
          anchorText: "Ver Projetos de Comunicação Visual na Asa Sul"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Conhecer Letras Caixa em Aço Inox 304"
        },
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens Arquitetônicos de Entrada de Condomínio"
        }
      ]}
    />
  );
}
