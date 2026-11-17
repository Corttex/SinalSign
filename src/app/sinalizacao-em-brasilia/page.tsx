import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Sinalização em Brasília (DF) | Fábrica de Placas, Totens e Sinalização — Sinal Sign",
  description:
    "Fábrica própria de Sinalização em Brasília: Placas comerciais, prediais, industriais (CBMDF/ABNT) e viárias. Corte a laser de acrílico, placas em PS, chapas em ACM e pintura refletiva no DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/sinalizacao-em-brasilia",
  },
  keywords: [
    "sinalização em brasília",
    "sinalizacao em brasilia df",
    "fabrica de placas de sinalizacao df",
    "placas de sinalizacao brasília",
    "sinalização predial e comercial df",
    "sinalizacao corpo de bombeiros brasilia",
    "empresa de sinalizacao brasilia",
  ],
  openGraph: {
    title: "Sinalização em Brasília (DF) | Sinal Sign Comunicação Visual",
    description:
      "Fabricação industrial de sistemas de sinalização corporativa, predial, viária e industrial no Distrito Federal.",
    url: "https://sinalsign.com.br/sinalizacao-em-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SinalizacaoEmBrasiliaPage() {
  return (
    <PillarPageLayout
      slugPath="/sinalizacao-em-brasilia"
      categoryBadge="FÁBRICA PRÓPRIA DE SINALIZAÇÃO NO DISTRITO FEDERAL"
      h1Title="Sinalização em Brasília (DF) | Placas Comerciais, Prediais e Viárias"
      subtitle="Engenharia e fabricação própria de placas técnicas normatizadas (CBMDF/ABNT), sinalização arquitetônica de consultórios, totens monolíticos e sinalização viária refletiva no DF."
      primaryKeyword="Sinalização em Brasília"
      descriptionText={[
        "A Sinal Sign é uma indústria sediada no Distrito Federal especializada em engenharia de sinalização para ambientes corporativos, condomínios verticais e horizontais, hospitais, shopping centers e indústrias. Fabricamos desde placas de identificação refinadas com corte a laser em acrílico até grandes monumentos verticais e sinalização de tráfego normatizada.",
        "Em Brasília, o projeto de sinalização urbana e predial deve obedecer aos códigos técnicos e diretrizes urbanísticas: normas do CBMDF (Corpo de Bombeiros Militar do DF para combate a incêndio e pânico NBR 13434), padrões de acessibilidade NBR 9050 com placas táteis em Braille, e o código oficial de cores de sinalização viária (Verde para rotas/direções, Azul para serviços e identificação, Marrom para pontos turísticos e Branco para regulamentações).",
        "Com parque industrial próprio equipado com router CNC, laser de alta precisão e impressão plana UV industrial direta, entregamos soluções turnkey: levantamento técnico in loco em qualquer Região Administrativa do DF, confecção sem intermediários e instalação própria em altura com equipe certificada pelas normas NR-35 e NR-18."
      ]}
      technicalSpecs={[
        { label: "Linhas de Produção", value: "Sinalização Comercial, Predial, Industrial e Viária" },
        { label: "Normas de Bombeiros", value: "Conformidade total com CBMDF e ABNT NBR 13434" },
        { label: "Acessibilidade Universal", value: "Placas táteis em alto relevo e Braille (NBR 9050)" },
        { label: "Código de Cores do DF", value: "Padrão oficial (Verde, Azul, Marrom, Branco e Vermelho CBMDF)" },
        { label: "Materiais Estruturais", value: "Acrílico Cristal 100% Virgem, ACM 3mm/4mm, PS e Aço Inox 304" },
        { label: "Garantia Técnica", value: "Resistência comprovada à forte insolação e seca do cerrado" },
      ]}
      materialsUsed={[
        "Chapas de Acrílico Cristal Puro e Espelhado de 2mm a 20mm",
        "Poliestireno de Alto Impacto (PSAI 1mm a 3mm) e PVC Expandido",
        "Alumínio Composto (ACM 3mm e 4mm) com Pintura PVDF",
        "Aço Inox AISI 304 Escovado com Prolongadores Cilíndricos",
        "Películas Fotoluminescentes Certificadas com Laudo",
        "Películas Refletivas Prismáticas Grau Engenharia (CONTRAN)"
      ]}
      processSteps={[
        {
          title: "Vistoria Técnica & Mapeamento no DF",
          desc: "Nossos consultores visitam o seu imóvel no DF para auditar pontos críticos de fluxo, alturas regulamentares e alvenarias."
        },
        {
          title: "Projeto de Sinalização 3D e Memorial",
          desc: "Elaboração de pranchas técnicas com dimensionamento, pictogramas universais e memorial descritivo dos materiais."
        },
        {
          title: "Fabricação no Parque Industrial Próprio",
          desc: "Usinagem de precisão em router CNC, corte a laser e impressão UV direta com cura LED instantânea sem solventes."
        },
        {
          title: "Instalação Padronizada com Nível a Laser",
          desc: "Fixação alinhada em todos os pavimentos, garagens ou fachadas com fixadores apropriados e equipe capacitada."
        }
      ]}
      cases={[
        {
          clientName: "Carlton Tower",
          niche: "Centro Empresarial & Hoteleiro",
          location: "Setor Hoteleiro Norte - Brasília / DF",
          specs: "Sinalização completa de garagens subterrâneas, placas direcionais em vidro e acrílico, e totens verticais de acesso.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-19.jpeg"
        },
        {
          clientName: "ABDI",
          niche: "Órgão Governamental",
          location: "Setor Bancário Norte - DF",
          specs: "Identificação de andares, salas executivas e placas em acrílico virgem cortado a laser com fidelidade cromática.",
          imageUrl: "/images/servicos-reais/letras-acrilico/sinal-sign-comunicacao-letras-em-acrilico-08.jpeg"
        },
        {
          clientName: "Cartório Colorado",
          niche: "Serviços Notariais",
          location: "Grande Colorado / Sobradinho - DF",
          specs: "Monumento de sinalização frontal com letras bloco iluminadas visíveis em longa distância na rodovia.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Quais são as exigências do Corpo de Bombeiros (CBMDF) para placas de sinalização?",
          answer: "O CBMDF exige que todas as placas de rota de fuga, saídas de emergência, hidrantes e extintores utilizem pigmento fotoluminescente com autonomia mínima comprovada de luminescência e espessura adequada em material autoextinguível (como PS ou PVC antichama), contendo os dados do fabricante e laudo no verso."
        },
        {
          question: "Qual o código de cores da sinalização urbana em Brasília?",
          answer: "Em conformidade com o Manual Interamericano e o planejamento de Brasília: Verde é utilizado para orientação de rotas, direções e rodovias; Azul indica localização, serviços e edifícios públicos; Marrom identifica atrativos turísticos e culturais; Branco e Preto são utilizados para placas regulamentares de trânsito e tráfego."
        },
        {
          question: "Qual a durabilidade de placas de sinalização sob o sol de Brasília?",
          answer: "Empregamos impressão UV direta com cura LED ou películas com bloqueio de radiação ultravioleta. Enquanto placas promocionais comuns desbotam em meses, nossas peças mantêm legibilidade e cores vivas por mais de 5 a 10 anos mesmo sob o sol rigoroso do cerrado."
        },
        {
          question: "A Sinal Sign faz o levantamento completo para Habite-se de condomínios?",
          answer: "Sim! Montamos o lote técnico integral para liberação de Habite-se junto às Administrações Regionais do DF: placas de garagem, quadros de aviso, lixeiras seletivas, acessibilidade tátil e rotas de emergência."
        }
      ]}
      relatedPillars={[
        {
          title: "Sinalização Viária e Estacionamentos",
          href: "/sinalizacao-viaria-estacionamentos-df",
          anchorText: "Ver Placas de Trânsito Refletivas CONTRAN e Pintura de Solo"
        },
        {
          title: "Placas em PS e PVC para Segurança",
          href: "/placas-ps-pvc-sinalizacao-brasilia",
          anchorText: "Ver Placas de Rota de Fuga Fotoluminescentes e CBMDF"
        },
        {
          title: "Placas em Acrílico para Consultório",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Conhecer Placas de Identificação com Prolongador em Inox"
        },
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens de Solo para Condomínios e Entradas Comerciais"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Revestimento de Fachadas em Alumínio Composto no DF"
        },
        {
          title: "Adesivos Jateados para Vidros",
          href: "/adesivos-jateados-vidros-divisorias-df",
          anchorText: "Ver Faixas de Segurança e Películas Jateadas para Vidros"
        }
      ]}
    />
  );
}
