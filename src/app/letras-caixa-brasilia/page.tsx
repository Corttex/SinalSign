import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Letras Caixa e Letreiros 3D em Brasília (DF) | Inox, Acrílico e LED — Sinal Sign",
  description:
    "Fabricação própria de Letras Caixa 3D em Brasília e DF. Letras em aço inox escovado/polido, acrílico nobre com corte a laser, PVC expandido com pintura automotiva e iluminação LED frontal ou backlight.",
  alternates: {
    canonical: "https://sinalsign.com.br/letras-caixa-brasilia",
  },
  keywords: [
    "letras caixa brasília",
    "letreiro 3d brasília",
    "letra caixa inox df",
    "letra caixa acrilico brasília",
    "letra caixa pvc expandido",
    "logomarca em relevo recepcao df",
  ],
  openGraph: {
    title: "Letras Caixa e Letreiros 3D em Brasília (DF) | Sinal Sign",
    description:
      "Letras em alto relevo de alta precisão usinadas a laser e CNC para fachadas e recepções corporativas no Distrito Federal.",
    url: "https://sinalsign.com.br/letras-caixa-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function LetrasCaixaPage() {
  return (
    <PillarPageLayout
      slugPath="/letras-caixa-brasilia"
      categoryBadge="IDENTIDADE TRIDIMENSIONAL & RELEVO CORPORATIVO"
      h1Title="Letras Caixa e Letreiros 3D em Brasília (DF)"
      subtitle="Esculturas volumétricas em aço inoxidável 304, acrílico cristal virgem e PVC expandido. Corte a laser milimétrico, acabamentos nobres e iluminação LED para fachadas e interiores."
      primaryKeyword="Letras Caixa"
      descriptionText={[
        "As letras caixa e logomarcas em relevo 3D da Sinal Sign transformam a presença física da sua empresa em Brasília. Produzidas sob rigorosos padrões de tolerância dimensional, nossas peças são fabricadas em aço inox 304 (garantia anticorrosiva permanente), acrílicos virgens de 2mm a 20mm e PVC expandido maciço com acabamento automotivo em cabine de pintura.",
        "Para fachadas externas, as letras recebem laterais soldadas com profundidades de 2cm a 20cm, criando volume escultural visível sob qualquer ângulo da via. Em recepções e consultórios, aplicamos logomarcas recortadas a laser com fita 3M VHB estrutural ou pinos roscados invisíveis, inclusive sobre painéis ripados de madeira nobre.",
        "Trabalhamos com sistemas de iluminação direta (face acrílica translúcida difusora) ou backlight / efeito halo (luz indireta refletida na parede), equipados com módulos LED Samsung/Osram com proteção IP68 à prova d'água e baixa dissipação térmica."
      ]}
      technicalSpecs={[
        { label: "Materiais Estruturais", value: "Aço Inox 304, Acrílico e PVC Expandido" },
        { label: "Acabamentos Disponíveis", value: "Escovado, Polido, Dourado/Prata Espelhado e Pintura PU" },
        { label: "Profundidades do Relevo", value: "20mm a 250mm de espessura lateral" },
        { label: "Tecnologia de Iluminação", value: "LED IP68 com dissipador de calor e fonte chaveada" },
        { label: "Fixação e Montagem", value: "Pinos roscados invisíveis / Fita estrutural 3M VHB" },
        { label: "Garantia Técnica", value: "Resistência à corrosão e integridade óptica do acrílico" },
      ]}
      materialsUsed={[
        "Aço Inox AISI 304 (Escovado / Polido)",
        "Acrílico Cristal Puro 100% Virgem",
        "Acrílico Espelhado Dourado e Rosé",
        "PVC Expandido de 10mm a 25mm",
        "Módulos LED IP68 High Lumen",
        "Esmalte PU Automotivo Bi-componente"
      ]}
      processSteps={[
        {
          title: "Vetorização & Análise Tipográfica",
          desc: "Ajustamos as curvas e proporções da sua marca para garantir máxima legibilidade e resistência mecânica no relevo."
        },
        {
          title: "Corte Laser & Usinagem CNC",
          desc: "Corte milimétrico da face e das laterais nas máquinas laser e router do parque fabril da Sinal Sign."
        },
        {
          title: "Solda Fina, Conformação & Pintura",
          desc: "Soldagem artesanal das laterais, lixamento fino e polimento químico ou aplicação de tinta automotiva em estufa."
        },
        {
          title: "Instalação com Gabarito Técnico",
          desc: "Fixação na parede ou fachada utilizando gabarito escala 1:1, nivelamento a laser e ocultação total da fiação elétrica."
        }
      ]}
      cases={[
        {
          clientName: "Resende Advocacia e Consultoria",
          niche: "Escritório de Advocacia",
          location: "Asa Sul - DF",
          specs: "Logomarca em acrílico dourado espelhado 5mm cortada a laser e aplicada com alinhamento milimétrico sobre painel ripado de madeira nobre.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        },
        {
          clientName: "Kubitschek Plaza Hotel",
          niche: "Hotelaria 5 Estrelas",
          location: "Setor Hoteleiro Norte - DF",
          specs: "Letras caixa em aço inox 304 escovado de grande porte com fixadores prolongadores metálicos resistentes ao tempo.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-24.jpeg"
        },
        {
          clientName: "ABDI",
          niche: "Agência Brasileira de Desenvolvimento Industrial",
          location: "Setor Bancário Norte - DF",
          specs: "Tipografia institucional e símbolo em relevo com acabamento esmaltado fosco rigorosamente alinhado ao manual de marca.",
          imageUrl: "/images/servicos-reais/letras-acrilico/sinal-sign-comunicacao-letras-em-acrilico-08.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Qual a diferença entre letra caixa de Aço Inox e PVC Expandido?",
          answer: "O aço inox 304 oferece o brilho metálico nobre (polido ou escovado) e durabilidade eterna sem oxidação, ideal para fachadas externas e hotéis. O PVC expandido é usinado em relevo e recebe pintura automotiva fosca ou brilhante, oferecendo versatilidade total de cores com excelente custo-benefício."
        },
        {
          question: "Como funciona a iluminação de efeito Halo (retroiluminada)?",
          answer: "As letras são fixadas com um afastamento de 15mm a 30mm da parede. Os módulos LED são instalados no verso das letras apontando para a parede, gerando uma elegante coroa de luz suave ao redor do contorno."
        },
        {
          question: "É possível instalar letra caixa sobre painel ripado ou textura?",
          answer: "Sim. Nossos instaladores utilizam pinos roscados com buchas embutidas e espaçadores metálicos milimétricos, garantindo que as letras fiquem perfeitamente alinhadas mesmo em superfícies irregulares."
        },
        {
          question: "As letras em acrílico espelhado perdem o reflexo com o tempo?",
          answer: "Utilizamos chapas de acrílico virgem de grau óptico com espelhamento de alto vácuo protegido no verso por verniz náutico, prevenindo descascamento e manchas reflexivas."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Fachadas em ACM como base para Letras Caixa"
        },
        {
          title: "Letreiros Luminosos & Totens",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Conhecer Painéis Backlight e Totens Iluminados"
        },
        {
          title: "Impressão UV Rígida",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Ver Impressão Digital UV Direta em Acrílico e Vidro"
        }
      ]}
    />
  );
}
