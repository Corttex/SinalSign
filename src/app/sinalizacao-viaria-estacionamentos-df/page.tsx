import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Sinalização Viária e de Estacionamento no DF | Sinal Sign",
  description:
    "Fabricação e implantação de placas de trânsito regulamentares, prismas de solo, tachões refletivos, pintura de faixas e sinalização horizontal e vertical de condomínios e vias no DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/sinalizacao-viaria-estacionamentos-df",
  },
  keywords: [
    "sinalização viária df",
    "placas de transito brasilia",
    "sinalizacao de estacionamento condominio df",
    "pintura de vagas garagem brasilia",
    "tachao refletivo df",
  ],
  openGraph: {
    title: "Sinalização Viária e de Estacionamento no DF | Sinal Sign",
    description: "Engenharia de tráfego, placas refletivas e sinalização de estacionamentos no Distrito Federal.",
    url: "https://sinalsign.com.br/sinalizacao-viaria-estacionamentos-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SinalizacaoViariaPage() {
  return (
    <PillarPageLayout
      slugPath="/sinalizacao-viaria-estacionamentos-df"
      categoryBadge="ENGENHARIA VIÁRIA & CONTROLE DE TRÁFEGO"
      h1Title="Sinalização Viária e de Estacionamento no DF"
      subtitle="Placas refletivas com películas prismáticas homologadas pelo CONTRAN, sinalização vertical e horizontal para condomínios, centros comerciais, supermercados e garagens no Distrito Federal."
      primaryKeyword="Sinalização Viária e de Estacionamento"
      descriptionText={[
        "O fluxo seguro de veículos e pedestres em condomínios horizontais, estacionamentos de shopping centers e vias internas do DF exige engenharia de sinalização viária normatizada. A Sinal Sign projeta, fabrica e instala o conjunto completo de sinalização vertical (placas de regulamentação, advertência e indicação) e horizontal (pintura termoplástica e acrílica de solo).",
        "Nossas placas de trânsito utilizam chapas de aço galvanizado #18 ou alumínio composto de alta resistência estrutural, revestidas por películas refletivas prismáticas de alta intensidade (Grau Engenharia e Grau Diamante) que refletem a luz dos faróis mesmo em chuvas torrenciais ou baixa visibilidade noturna.",
        "Executamos a demarcação de vagas com pintura mecanizada com microesferas de vidro refletivas, instalação de tachões bidirecionais (tartarugas), lombadas de borracha vulcanizada, prismas de concreto e balizadores tubulares flexíveis."
      ]}
      technicalSpecs={[
        { label: "Substrato das Placas", value: "Chapa de Aço Galvanizado #18 / ACM 4mm" },
        { label: "Películas Refletivas", value: "Grau Técnico / Grau Engenharia Prismático (Tipo I e III)" },
        { label: "Pintura de Solo", value: "Tinta Acrílica a base de resinas com Microesferas de Vidro" },
        { label: "Postes de Fixação", value: "Tubo de Aço Galvanizado a Fogo de 2\" com Tampa e Chapa Base" },
        { label: "Dispositivos Auxiliares", value: "Tachões de Resina, Balizadores e Batedores de Borracha" },
        { label: "Normas de Conformidade", value: "Resoluções do CONTRAN e Manuais de Trânsito do DETRAN-DF" },
      ]}
      materialsUsed={[
        "Aço Carbono Galvanizado SAE 1020",
        "Películas Autoadesivas Refletivas 3M / Avery",
        "Tinta Viária Normatizada NBR 11862",
        "Microesferas de Vidro Premix e Drop-On",
        "Tachões e Tachinhas com Lentes Prismáticas",
        "Chumbadores Expansivos Parabolt de 1/2\""
      ]}
      processSteps={[
        {
          title: "Estudo de Circulação & Sentidos",
          desc: "Mapeamento do fluxo de entrada, saída, raios de curva e vagas preferenciais (PCD e Idosos)."
        },
        {
          title: "Estamparia & Laminação Refletiva",
          desc: "Corte das chapas nos formatos regulamentares (octogonal, circular, triangular) e aplicação da película com calandra."
        },
        {
          title: "Pintura Mecanizada de Vagas no DF",
          desc: "Aplicação de tinta viária de secagem ultrarrápida com aspersão de microesferas para brilho noturno."
        },
        {
          title: "Chumbamento dos Postes & Fixação",
          desc: "Perfuração com martelete e fixação com chumbadores químicos ou sapatas de concreto no solo."
        }
      ]}
      cases={[
        {
          clientName: "Estacionamento Centro Empresarial",
          niche: "Edifício Corporativo",
          location: "Setor de Autarquias Sul - DF",
          specs: "Demarcação de 180 vagas de garagem com pintura refletiva e 45 placas viárias refletivas em tubos galvanizados.",
          imageUrl: "/images/products/sinal-sign-comunicacao-sinalizacao-viaria-01.jpg"
        },
        {
          clientName: "Condomínio Horizontal Vila das Flores",
          niche: "Condomínio Residencial Fechado",
          location: "Park Way - DF",
          specs: "Implantação de placas de limite de velocidade 20 km/h, tachões redutores e faixas de pedestres normatizadas.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Condomínios privados no DF precisam seguir o padrão oficial do CONTRAN?",
          answer: "Sim! Pelo Código de Trânsito Brasileiro (CTB), vias internas de condomínios fechados são consideradas vias terrestres abertas à circulação restrita, devendo seguir a padronização oficial de formatos, cores e simbologia do CONTRAN."
        },
        {
          question: "Quanto tempo dura a pintura viária em garagens subterrâneas?",
          answer: "Com a nossa tinta à base de resina acrílica pura de alta abrasão e limpeza prévia do piso de concreto polido ou asfalto, a durabilidade ultrapassa de 2 a 4 anos mesmo em garagens de alto tráfego."
        },
        {
          question: "Vocês fornecem os postes de fixação já com o serviço de furação e concreto?",
          answer: "Sim! Entregamos a solução chave na mão (turnkey): placas, postes tratados contra ferrugem, abraçadeiras, parafusos e equipe com maquinário de furação para asfalto ou concreto."
        }
      ]}
      relatedPillars={[
        {
          title: "Placas em PS e PVC para Segurança",
          href: "/placas-ps-pvc-sinalizacao-brasilia",
          anchorText: "Ver Placas de Rotas de Fuga e Bombeiros"
        },
        {
          title: "Letreiros Luminosos e Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens de Entrada de Condomínio e Solo"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Revestimento de Portarias de Condomínio em ACM"
        }
      ]}
    />
  );
}
