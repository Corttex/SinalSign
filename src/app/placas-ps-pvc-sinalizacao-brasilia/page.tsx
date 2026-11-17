import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Placas em PS e PVC para Sinalização Predial em Brasília (DF) | Sinal Sign",
  description:
    "Placas rígidas em Poliestireno (PS) 1mm a 3mm e PVC Expandido usinado no DF. Sinalização de segurança de bombeiros, rotas de fuga fotoluminescentes, garagens e condomínios.",
  alternates: {
    canonical: "https://sinalsign.com.br/placas-ps-pvc-sinalizacao-brasilia",
  },
  keywords: [
    "placas em ps sinalizacao brasilia",
    "placa rota de fuga fotoluminescente df",
    "sinalizacao corpo de bombeiros brasilia",
    "placas de garagem condominio df",
    "pvc expandido corte cnc brasilia",
  ],
  openGraph: {
    title: "Placas em PS e PVC para Sinalização Predial em Brasília (DF) | Sinal Sign",
    description: "Placas técnicas e normatizadas para condomínios, indústrias e garagens no Distrito Federal.",
    url: "https://sinalsign.com.br/placas-ps-pvc-sinalizacao-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PlacasPsPvcSinalizacaoPage() {
  return (
    <PillarPageLayout
      slugPath="/placas-ps-pvc-sinalizacao-brasilia"
      categoryBadge="SINALIZAÇÃO TÉCNICA, PREDIAL & SEGURANÇA"
      h1Title="Placas em PS e PVC para Sinalização Predial em Brasília (DF)"
      subtitle="Chapas em Poliestireno de Alto Impacto (PSAI) de 1mm a 3mm e PVC expandido maciço com impressão UV direta. Conformidade total com normas do CBMDF e ABNT."
      primaryKeyword="Placas em PS e PVC para Sinalização"
      descriptionText={[
        "A sinalização predial, condominial e industrial no Distrito Federal exige conformidade rigorosa com normas técnicas do Corpo de Bombeiros Militar do DF (CBMDF) e normas ABNT NBR 13434 e 9050 (acessibilidade). A Sinal Sign fabrica placas em chapas de PS rígido de alto impacto e PVC expandido com corte computadorizado e impressão direta indelével.",
        "Nossa linha atende condomínios residenciais e comerciais, garagens subterrâneas, rotas de fuga, hidrantes, extintores, sinalização de pavimentos, numeração predial e placas táteis em Braille.",
        "Para rotas de fuga e saídas de emergência, utilizamos pigmentos fotoluminescentes certificados com autonomia de luminescência comprovada, garantindo visibilidade mesmo em quedas totais de energia elétrica."
      ]}
      technicalSpecs={[
        { label: "Espessuras do PS", value: "PSAI 1mm, 2mm e 3mm maciço" },
        { label: "Espessuras do PVC", value: "PVC Expandido de 10mm a 25mm" },
        { label: "Propriedades Fotoluminescentes", value: "Autonomia de emissão luminosa conforme NBR 13434" },
        { label: "Método de Impressão", value: "Impressão UV direta com cura LED ou serigrafia técnica" },
        { label: "Fixação e Instalação", value: "Adesivo dupla face espumado de alta fixação ou parafusos" },
        { label: "Resistência ao Fogo", value: "Materiais autoextinguíveis que não propagam chama" },
      ]}
      materialsUsed={[
        "Poliestireno de Alto Impacto (PSAI Virgem)",
        "PVC Expandido de Alta Densidade",
        "Pigmento Fotoluminescente com Laudo Técnico",
        "Fita Dupla Face Espumada para Alvenaria",
        "Polionda / Polipropileno Alveolar para Obras"
      ]}
      processSteps={[
        {
          title: "Levantamento do Projeto de Incêndio",
          desc: "Mapeamento dos pontos de extintores, hidrantes e saídas de emergência conforme projeto aprovado no CBMDF."
        },
        {
          title: "Corte na Guilhotina & Router CNC",
          desc: "Corte em esquadro perfeito das placas de PS e usinagem de formas especiais em PVC expandido."
        },
        {
          title: "Impressão UV Direta com Alta Resolução",
          desc: "Aplicação das cores regulamentares (vermelho bombeiro, amarelo segurança, verde emergência)."
        },
        {
          title: "Instalação Padronizada por Altura",
          desc: "Montagem nas alturas oficiais regulamentadas com alinhamento a laser em todos os andares do condomínio."
        }
      ]}
      cases={[
        {
          clientName: "Edifício Comercial Carlton Tower",
          niche: "Centro Empresarial",
          location: "Setor Hoteleiro Norte - DF",
          specs: "Sinalização completa de garagens subterrâneas, placas de vagas rotativas e rotas de fuga fotoluminescentes.",
          imageUrl: "/images/servicos-reais/identificacao-comercial/WhatsApp Image 2026-11-13 at 10.10.49 (1).jpeg"
        },
        {
          clientName: "Condomínio Residencial Park Sul",
          niche: "Condomínio Residencial",
          location: "Park Sul - DF",
          specs: "Mais de 250 placas em PS 2mm com sinalização de blocos, portarias, áreas comuns e extintores.",
          imageUrl: "/images/servicos-reais/identificacao-comercial/WhatsApp Image 2026-11-13 at 10.10.49.jpeg"
        }
      ]}
      faqs={[
        {
          question: "As placas de rota de fuga atendem às vistorias do Corpo de Bombeiros de Brasília?",
          answer: "Sim! Nossas placas fotoluminescentes possuem os dados técnicos impressos exigidos pelo CBMDF (tempo de atenuação e intensidade luminosa em milicandelas por m²)."
        },
        {
          question: "Qual a diferença entre chapa de PS e PVC Expandido?",
          answer: "O PS (Poliestireno) é uma chapa rígida e delgada (1mm a 3mm), ideal para placas planas de parede e portas. O PVC Expandido é mais encorpado e maciço (10mm a 25mm), ideal para letras em relevo e placas robustas autoportantes."
        },
        {
          question: "Vocês fornecem kits completos para aprovação de habite-se de condomínios?",
          answer: "Sim! Montamos o lote completo com todas as placas de identificação de garagem, lixeiras, hidrantes, elevadores e rotas de fuga para liberação de Habite-se junto à Administração Regional."
        }
      ]}
      relatedPillars={[
        {
          title: "Placas em Acrílico para Consultório",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Ver Placas Nobres de Acrílico com Prolongador"
        },
        {
          title: "Sinalização Viária e Estacionamentos",
          href: "/sinalizacao-viaria-estacionamentos-df",
          anchorText: "Conhecer Placas Refletivas e Sinalização Viária no DF"
        },
        {
          title: "Impressão UV Direta",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Ver Tecnologia de Impressão Direta em Substratos Rígidos"
        }
      ]}
    />
  );
}
