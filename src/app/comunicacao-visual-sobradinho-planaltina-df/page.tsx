import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Sobradinho e Planaltina (DF) | Sinal Sign",
  description:
    "Comunicação visual para Sobradinho I e II, Grande Colorado e Planaltina DF: Fachadas em ACM, Letreiros 3D em Inox, Totens de Entrada de Condomínio e Lonas.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-sobradinho-planaltina-df",
  },
  keywords: [
    "comunicacao visual sobradinho df",
    "fachadas acm grande colorado",
    "comunicacao visual planaltina df",
    "totem condominio sobradinho",
    "letra caixa cartorio sobradinho",
  ],
  openGraph: {
    title: "Comunicação Visual em Sobradinho e Planaltina (DF) | Sinal Sign",
    description: "Projetos de engenharia visual para os comércios e condomínios de Sobradinho, Grande Colorado e Planaltina.",
    url: "https://sinalsign.com.br/comunicacao-visual-sobradinho-planaltina-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualSobradinhoPlanaltinaPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-sobradinho-planaltina-df"
      categoryBadge="SAÍDA NORTE & GRANDES CONDOMÍNIOS DO DF"
      h1Title="Comunicação Visual em Sobradinho e Planaltina (DF)"
      subtitle="Fachadas de alta resistência climática em ACM, letreiros iluminados e totens monolíticos para o comércio e os condomínios horizontais do Grande Colorado, Sobradinho e Planaltina."
      primaryKeyword="Comunicação Visual em Sobradinho e Planaltina"
      descriptionText={[
        "A Saída Norte do Distrito Federal reúne o polo de condomínios fechados do Grande Colorado, Sobradinho I e II e a histórica cidade de Planaltina. Com rodovias de alta velocidade (BR-020 e DF-003) e centros comerciais em rápida modernização, a comunicação visual precisa aliar impacto de visibilidade rodoviária com acabamento de alto padrão.",
        "A Sinal Sign atende ativamente essa região, sendo responsável por grandes marcos visuais como o monumento iluminado do Cartório Colorado e dezenas de portarias de condomínios residenciais fechados.",
        "Fabricamos totens de solo de grande porte dimensionados para ventos fortes, letras caixa em aço inoxidável e chapas em acrílico com iluminação LED de alta eficiência energética."
      ]}
      technicalSpecs={[
        { label: "Regiões Cobertas", value: "Grande Colorado, Sobradinho I e II, Planaltina DF, Taquari e Setor de Mansões" },
        { label: "Especialidades na Região", value: "Totens de Condomínio, Letras de Rodovia e Fachadas em ACM" },
        { label: "Resistência Estrutural", value: "Projetado para rajadas de vento características da Saída Norte" },
        { label: "Visita Técnica", value: "Atendimento presencial no seu condomínio ou comércio" },
        { label: "Equipe de Montagem", value: "Frota própria e equipe capacitada para instalações em altura" },
        { label: "Garantia de Materiais", value: "Tratamento galvânico anticorrosivo e módulos LED IP68" },
      ]}
      materialsUsed={[
        "Chapas de Alumínio Composto ACM 4mm com Pintura PVDF",
        "Aço Inox AISI 304 Escovado",
        "Estruturas em Tubos de Metalon Galvanizado a Fogo",
        "Módulos LED High Lumen de Baixo Consumo 12V",
        "Selantes Estruturais PU 40 Anti-Infiltração"
      ]}
      processSteps={[
        {
          title: "Levantamento Técnico no Local",
          desc: "Visita do consultor técnico no Grande Colorado, Sobradinho ou Planaltina para estudo topográfico e medidas."
        },
        {
          title: "Cálculo Estrutural e Projeto 3D",
          desc: "Dimensionamento dos pilares e renderização realista para apresentação em assembleias ou à diretoria."
        },
        {
          title: "Fabricação Industrial Monitorada",
          desc: "Corte laser, usinagem CNC e montagem dos módulos elétricos no parque fabril da Sinal Sign."
        },
        {
          title: "Içamento e Instalação Concluída",
          desc: "Fixação das sapatas de solo ou ancoragem em testeira com entrega técnica e teste luminotécnico."
        }
      ]}
      cases={[
        {
          clientName: "Cartório Colorado",
          niche: "Serviços Notariais & Registrais",
          location: "Grande Colorado / Sobradinho - DF",
          specs: "Letras monolíticas em bloco com símbolo tridimensional iluminado em módulos LED de alta intensidade.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg"
        },
        {
          clientName: "Condomínio Solar da Serra",
          niche: "Condomínio Residencial Fechado",
          location: "Sobradinho - DF",
          specs: "Totem monolítico de portaria em ACM amadeirado e preto fosco com identificação de visitantes.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês atendem condomínios fechados no Grande Colorado e Sobradinho?",
          answer: "Sim! Somos especialistas em portais de entrada, totens de identificação, placas de sinalização viária interna e sinalização de segurança para condomínios na Saída Norte."
        },
        {
          question: "Os letreiros resistem aos ventos fortes da rodovia BR-020?",
          answer: "Sim! Dimensionamos as estruturas metálicas internas de acordo com a norma NBR 6123, utilizando sapatas com chumbadores químicos de alta ancoragem."
        },
        {
          question: "Qual o prazo para confeccionar uma fachada comercial em Sobradinho ou Planaltina?",
          answer: "Normalmente entre 10 e 20 dias úteis após a aprovação do projeto executivo."
        }
      ]}
      relatedPillars={[
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Modelos de Totens de Entrada de Condomínio"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Nossas Fachadas em Alumínio Composto"
        },
        {
          title: "Sinalização Viária para Condomínios",
          href: "/sinalizacao-viaria-estacionamentos-df",
          anchorText: "Ver Placas de Trânsito e Lombadas para Condomínios"
        }
      ]}
    />
  );
}
