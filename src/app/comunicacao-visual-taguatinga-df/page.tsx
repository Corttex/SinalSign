import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Taguatinga (DF) | Fachadas, Letras e Lonas — Sinal Sign",
  description:
    "Comunicação visual para o maior polo comercial do DF: Taguatinga Centro, Taguatinga Sul, Norte e Pistão Sul. Fachadas em ACM, Letreiros 3D, Lonas e Totens Comerciais.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-taguatinga-df",
  },
  keywords: [
    "comunicacao visual taguatinga",
    "fachadas em acm taguatinga df",
    "letra caixa pistao sul taguatinga",
    "banners e lonas taguatinga",
    "empresa de comunicacao visual taguatinga df",
  ],
  openGraph: {
    title: "Comunicação Visual em Taguatinga (DF) | Sinal Sign",
    description: "Estruturas de grande impacto e alta visibilidade para o comércio vibrante de Taguatinga DF.",
    url: "https://sinalsign.com.br/comunicacao-visual-taguatinga-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualTaguatingaPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-taguatinga-df"
      categoryBadge="POLO COMERCIAL & VAREJO DE GRANDE IMPACTO"
      h1Title="Comunicação Visual em Taguatinga (DF)"
      subtitle="Fachadas imponentes em ACM, letras caixa gigantes para o Pistão Sul, letreiros luminosos para o Centro e comunicação visual para concessionárias e lojas em Taguatinga."
      primaryKeyword="Comunicação Visual em Taguatinga"
      descriptionText={[
        "Taguatinga é a capital econômica do varejo no Distrito Federal. Com avenidas comerciais de intenso tráfego como o Pistão Sul, Comercial Norte, Avenida das Palmeiras e o movimentado Taguatinga Centro, a comunicação visual precisa ser imponente, durável e visível de grandes distâncias.",
        "A Sinal Sign atende empresas de Taguatinga fabricando fachadas completas em ACM com pórticos monumentais, letreiros em letras bloco 3D com iluminação LED de alto fluxo lumínico e lonas frontlight de alta gramatura para fechamentos de lojas e empenas.",
        "Com parque industrial próprio, atendemos também indústrias, distribuidoras e centros automotivos com sinalização técnica de segurança, pintura de solo para estacionamentos e envelopamento de frotas comerciais."
      ]}
      technicalSpecs={[
        { label: "Áreas de Forte Presença", value: "Pistão Sul, Taguatinga Centro, Comercial Norte e Pistão Norte" },
        { label: "Produtos Mais Procurados", value: "Mega Fachadas ACM, Letras Caixa Iluminadas e Totens de Solo" },
        { label: "Visibilidade de Longa Distância", value: "Letreiros projetados com tipografia de alta legibilidade óptica" },
        { label: "Capacidade Estrutural", value: "Metalon galvanizado pesado para testeiras de grande metragem" },
        { label: "Velocidade de Fabricação", value: "Prazos rápidos para inaugurações e reinaugurações no varejo" },
        { label: "Atendimento Presencial", value: "Medição técnica in loco rápida em Taguatinga" },
      ]}
      materialsUsed={[
        "Chapas de ACM 3mm e 4mm com Núcleo Termoplástico",
        "Tubos Metalon Galvanizados com Pintura Protetiva",
        "Módulos LED Samsung 12V IP68 para Iluminação Noturna",
        "Lonas Vinílicas Frontlight 440g Tramadas",
        "Aço Inox 304 e Chapa Galvanizada com Pintura PU"
      ]}
      processSteps={[
        {
          title: "Visita no Ponto Comercial em Taguatinga",
          desc: "Medição de grandes extensões de fachada e análise da estrutura metálica existente."
        },
        {
          title: "Engenharia e Projeto Visual 3D",
          desc: "Desenho da fachada com cálculo de carga de vento e dimensionamento da iluminação."
        },
        {
          title: "Produção Industrial em Larga Escala",
          desc: "Dobra de bandejas de ACM na router CNC e soldagem dos caixilhos com solda MIG."
        },
        {
          title: "Instalação com Andaimes e Munck",
          desc: "Montagem ágil com equipe própria para liberação rápida da calçada e vitrine."
        }
      ]}
      cases={[
        {
          clientName: "Concessionária & Centro Automotivo",
          niche: "Setor Automotivo",
          location: "Pistão Sul - Taguatinga / DF",
          specs: "Fachada em ACM azul royal de 34m de extensão com pórtico de entrada e letras caixa de 1,20m iluminadas.",
          imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"
        },
        {
          clientName: "Mega Loja de Varejo Comercial",
          niche: "Comércio e Calçados",
          location: "Taguatinga Centro - DF",
          specs: "Revestimento em ACM com testeira em balanço e painel backlight de lona translúcida de alto brilho.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês atendem reformas e substituição de lonas antigas em Taguatinga?",
          answer: "Sim! Avaliamos a estrutura existente, realizamos o reforço de solda ou troca de chapas e substituímos a comunicação antiga por ACM moderno ou lona nova tensionada."
        },
        {
          question: "Qual o prazo para confeccionar faixas ou banners promocionais em Taguatinga?",
          answer: "Temos capacidade de produção expressa em nossa fábrica para entrega de banners e faixas em 24 a 48 horas úteis."
        },
        {
          question: "As fachadas suportam as rajadas de vento do Pistão Sul?",
          answer: "Sim! Todas as nossas fachadas utilizam chassi metálico galvanizado com mãos-francesas e ancoragens químicas dimensionadas para suportar intempéries."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual em Águas Claras",
          href: "/comunicacao-visual-aguas-claras",
          anchorText: "Ver Projetos de Comunicação Visual em Águas Claras"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Nossas Fachadas em Alumínio Composto"
        },
        {
          title: "Adesivos e Frotas",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Plotagem de Frotas de Vans e Caminhões no DF"
        }
      ]}
    />
  );
}
