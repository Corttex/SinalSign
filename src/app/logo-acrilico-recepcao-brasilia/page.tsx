import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Logo em Acrílico para Recepção em Brasília (DF) | Sinal Sign",
  description:
    "Logomarcas corporativas tridimensionais em acrílico espelhado e cristal virgem para recepções, consultórios e salas de reunião no DF. Aplicação sobre alvenaria e painel ripado.",
  alternates: {
    canonical: "https://sinalsign.com.br/logo-acrilico-recepcao-brasilia",
  },
  keywords: [
    "logo em acrilico recepcao brasilia",
    "logomarca em acrilico espelhado df",
    "logo 3d consultorio brasilia",
    "logomarca para painel ripado df",
    "letreiro recepcao acrilico dourado",
  ],
  openGraph: {
    title: "Logo em Acrílico para Recepção em Brasília (DF) | Sinal Sign",
    description: "Identidade visual nobre em alto relevo com acrílico cortado a laser para recepções corporativas no DF.",
    url: "https://sinalsign.com.br/logo-acrilico-recepcao-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function LogoAcrilicoRecepcaoPage() {
  return (
    <PillarPageLayout
      slugPath="/logo-acrilico-recepcao-brasilia"
      categoryBadge="RECEPAÇÃO CORPORATIVA & CONSULTÓRIOS NOBRES"
      h1Title="Logo em Acrílico para Recepção em Brasília (DF)"
      subtitle="Transforme a entrada do seu consultório ou escritório com logomarcas em acrílico espelhado (dourado, prata, rosé) ou cristal puro com fixação oculta sem parafusos aparentes."
      primaryKeyword="Logo em Acrílico para Recepção"
      descriptionText={[
        "A primeira impressão de clientes e parceiros ao entrar no seu consultório ou sede corporativa em Brasília é definida pela parede da recepção. A Sinal Sign fabrica logomarcas e símbolos em acrílico cortados a laser com acabamento de joalheria, valorizando o design do ambiente.",
        "Trabalhamos com composições multicamadas: base em acrílico cristal de alta densidade (proporcionando profundidade tridimensional) combinada com face em acrílico espelhado dourado, prata, bronze ou cores institucionais sólidas em padrão Pantone.",
        "Nossa instalação é realizada com fita estrutural automotiva 3M VHB ou pinos roscados milimétricos com gabarito técnico escala 1:1, garantindo nivelamento perfeito sem furar ou danificar painéis nobres de madeira ripada, mármore ou porcelanato."
      ]}
      technicalSpecs={[
        { label: "Espessura Total do Relevo", value: "3mm a 30mm em camadas sobrepostas" },
        { label: "Cores de Acrílico Espelhado", value: "Dourado Nobre, Prata Polido, Rosé Gold e Bronze" },
        { label: "Opções de Acabamento", value: "Brilho Espelhado de Vácuo ou Esmaltação Fosca" },
        { label: "Fixação Oculta", value: "Fita 3M VHB de Alta Aderência / Pinos Roscados Ocultos" },
        { label: "Superfícies de Aplicação", value: "Paredes lisas, painéis ripados, mármore e vidros" },
        { label: "Gabarito de Montagem", value: "Molde impresso em escala 1:1 para alinhamento milimétrico" },
      ]}
      materialsUsed={[
        "Acrílico Espelhado 2mm e 3mm de Alto Vácuo",
        "Acrílico Cristal 5mm a 15mm de Base Estrutural",
        "Fita Dupla Face Estrutural 3M VHB",
        "Pinos de Encaixe em Latão/Inox",
        "Pintura Automotiva PU para Cores Específicas"
      ]}
      processSteps={[
        {
          title: "Vetorização e Proporção do Espaço",
          desc: "Calculamos a largura e altura ideais da logomarca em relação à bancada de atendimento e ao pé-direito da sala."
        },
        {
          title: "Corte a Laser Computadorizado",
          desc: "Corte das arestas com queima limpa e cristalina de cada letra e símbolo tipográfico da sua marca."
        },
        {
          title: "Laminação & Montagem das Camadas",
          desc: "União das peças espelhadas sobre a base cristalina com adesivo óptico transparente livre de bolhas."
        },
        {
          title: "Fixação Técnica no Seu Escritório",
          desc: "Instalação no seu endereço no DF por montadores próprios da Sinal Sign com luvas cirúrgicas anti-marcas."
        }
      ]}
      cases={[
        {
          clientName: "Resende Advocacia e Consultoria",
          niche: "Escritório de Advocacia",
          location: "Asa Sul - DF",
          specs: "Logomarca em acrílico dourado espelhado 5mm instalada sobre painel ripado de madeira nobre com alinhamento milimétrico.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        },
        {
          clientName: "Clínica Integrada de Especialidades",
          niche: "Medicina Avançada",
          location: "Centro Clínico Sul - Brasília / DF",
          specs: "Logo corporativa em acrílico cristal 10mm com face prata espelhada e retroiluminação suave de contorno.",
          imageUrl: "/images/servicos-reais/logo-acrilico/WhatsApp Image 2026-11-13 at 10.10.51 (2).jpeg"
        }
      ]}
      faqs={[
        {
          question: "A logomarca pode ser instalada diretamente em painel ripado de madeira?",
          answer: "Sim! Desenvolvemos uma técnica exclusiva de montagem que cruza os frisos do ripado com pontos de ancoragem invisíveis, mantendo as letras perfeitamente planas e sem balanço."
        },
        {
          question: "Como é feita a limpeza do acrílico espelhado na recepção?",
          answer: "Acompanha um guia de manutenção: deve-se utilizar exclusivamente pano de microfibra macio levemente umedecido em água ou detergente neutro diluído, evitando produtos abrasivos como álcool puro ou limpa-vidros com amoníaco."
        },
        {
          question: "É possível retirar a logomarca no futuro caso eu mude de sala comercial?",
          answer: "Sim. A fita 3M VHB pode ser removida com fio de nylon técnico e solvente de base cítrica sem arrancar a alvenaria ou o acabamento da madeira."
        }
      ]}
      relatedPillars={[
        {
          title: "Corte a Laser em Acrílico",
          href: "/corte-laser-acrilico-brasilia",
          anchorText: "Ver Especificações do Corte a Laser de Acrílico no DF"
        },
        {
          title: "Placas em Acrílico para Consultório",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Ver Placas de Identificação com Prolongadores Metálicos"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Conhecer Letras em Aço Inox Escovado para Ambientes Corporativos"
        }
      ]}
    />
  );
}
