import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual na Asa Sul em Brasília (DF) | Sinal Sign",
  description:
    "Comunicação visual refinada para comércios das CLS, W3 Sul e centros clínicos da Asa Sul no DF. Fachadas em ACM, Letras Caixa Inox, Placas em Acrílico e Totens.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-asa-sul-brasilia",
  },
  keywords: [
    "comunicacao visual asa sul",
    "fachadas em acm asa sul df",
    "letra caixa asa sul brasilia",
    "comunicacao visual cls w3 sul",
    "placas clinicas setor hospitalar sul df",
  ],
  openGraph: {
    title: "Comunicação Visual na Asa Sul em Brasília (DF) | Sinal Sign",
    description: "Projetos em conformidade com o tombamento histórico e arquitetura nobre da Asa Sul.",
    url: "https://sinalsign.com.br/comunicacao-visual-asa-sul-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualAsaSulPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-asa-sul-brasilia"
      categoryBadge="PLANO PILOTO & ARQUITETURA CORPOTIVA NOBRE"
      h1Title="Comunicação Visual na Asa Sul em Brasília (DF)"
      subtitle="Engenharia de fachadas e letreiros volumétricos projetados com sobriedade arquitetônica para as quadras comerciais (CLS), W3 Sul e o polo médico do Setor Hospitalar Sul."
      primaryKeyword="Comunicação Visual na Asa Sul"
      descriptionText={[
        "A Asa Sul é uma das áreas mais tradicionais e nobres de Brasília, abrigando importantes centros gastronômicos nas quadras 100, 200, 300 e 400, o polo de moda e serviços da W3 Sul, além da maior concentração de clínicas médicas e odontológicas do Centro-Oeste no Setor Hospitalar Sul (SHLS).",
        "Atuar na Asa Sul exige respeito rigoroso às normas de preservação do Plano Piloto (Decreto de Tombamento e diretrizes urbanísticas de Brasília). A Sinal Sign desenvolve projetos que harmonizam modernidade e discrição, priorizando materiais perenes como aço inoxidável 304 escovado, acrílico cristal bisotado e revestimentos em ACM com acabamento acetinado.",
        "Nossa equipe técnica atende consultórios em edifícios consagrados como o Centro Clínico Sul, Edifício Pioneiras Sociais e Centro Médico de Brasília, instalando placas de identificação com prolongadores e logomarcas iluminadas com efeito halo de alta elegância."
      ]}
      technicalSpecs={[
        { label: "Áreas com Maior Presença", value: "CLS 100 a 400, W3 Sul, SHLS e Setor Bancário Sul" },
        { label: "Materiais Recomendados", value: "Aço Inox 304 escovado, Acrílico Puro e ACM Acetinado" },
        { label: "Conformidade Urbanística", value: "Projetos alinhados às regras de publicidade do Plano Piloto" },
        { label: "Tempo de Resposta", value: "Deslocamento imediato para levantamento técnico in loco" },
        { label: "Instalação Estrutural", value: "Fixações seguras sem danos a marquises e alvenarias nobres" },
        { label: "Garantia de Fábrica", value: "Certificação contra oxidação e delaminação solar" },
      ]}
      materialsUsed={[
        "Aço Inox AISI 304 com Acabamento Escovado Scotch-Brite",
        "Acrílico Cristal Puro 8mm a 15mm Bisotado",
        "Acrílico Espelhado Dourado e Prata de Alto Vácuo",
        "Chapas de Alumínio Composto ACM 4mm",
        "Módulos LED de Temperatura de Cor Neutra (4000K)"
      ]}
      processSteps={[
        {
          title: "Vistoria Técnica na Asa Sul",
          desc: "Avaliação da testeira, marquise e conformidade com o manual da quadra comercial ou centro clínico."
        },
        {
          title: "Detalhamento Arquitetônico 3D",
          desc: "Renderização do letreiro respeitando proporções minimalistas e cores elegantes."
        },
        {
          title: "Usinagem Laser e Serralheria Fina",
          desc: "Corte milimétrico sem queima e montagem das letras bloco em nossa fábrica no DF."
        },
        {
          title: "Instalação com Proteção do Local",
          desc: "Montagem silenciosa e limpa com equipamentos de proteção e nível a laser."
        }
      ]}
      cases={[
        {
          clientName: "Resende Advocacia e Consultoria",
          niche: "Escritório de Advocacia",
          location: "Asa Sul - DF",
          specs: "Logomarca em acrílico dourado espelhado 5mm instalada sobre painel de madeira nobre na recepção.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        },
        {
          clientName: "St. Paul Plaza Hotel",
          niche: "Setor Hoteleiro Sul",
          location: "SHS - Asa Sul / DF",
          specs: "Totem monumental vertical em ACM e aço galvanizado com iluminação balizada de acesso.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-12.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Existem restrições de tamanho para letreiros e fachadas nas comerciais da Asa Sul?",
          answer: "Sim. O Plano Diretor do Plano Piloto estipula dimensões máximas para testeiras e proíbe engenhos publicitários que descaracterizem o conjunto arquitetônico tombado. Nossa equipe projeta 100% dentro das normas vigentes."
        },
        {
          question: "Vocês fabricam placas para clínicas no Setor Hospitalar Sul?",
          answer: "Sim! Somos especialistas em placas de consultório em acrílico cristal com prolongadores de inox e logomarcas em alto relevo para clínicas do SHLS."
        },
        {
          question: "Quanto tempo dura uma letra caixa em aço inox instalada na Asa Sul?",
          answer: "O aço inoxidável 304 não enferruja e resiste permanentemente à chuva e ao sol, mantendo seu brilho metálico por décadas."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual na Asa Norte",
          href: "/comunicacao-visual-asa-norte-brasilia",
          anchorText: "Ver Projetos de Comunicação Visual na Asa Norte"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras em Aço Inox 304 Escovado"
        },
        {
          title: "Placas em Acrílico para Consultório",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Conhecer Placas para Clínicas Médicas no DF"
        }
      ]}
    />
  );
}
