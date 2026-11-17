import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Guia de Orçamento e Preço por m² de Fachadas no DF | Sinal Sign",
  description:
    "Descubra quanto custa uma Fachada em ACM, Letra Caixa Inox e Luminoso em Brasília. Fatores de precificação por m², normas da Administração Regional e simulador online.",
  alternates: {
    canonical: "https://sinalsign.com.br/quanto-custa-fachada-acm-preco-m2-brasilia",
  },
  keywords: [
    "quanto custa fachada acm brasilia",
    "preco m2 fachada acm df",
    "preco letra caixa inox brasília",
    "orcamento comunicacao visual brasilia",
    "calculadora m2 fachada df",
  ],
  openGraph: {
    title: "Guia de Orçamento e Preço por m² de Fachadas no DF | Sinal Sign",
    description: "Tabela comparativa, especificações de engenharia e faixas de preço para fachadas comerciais em Brasília.",
    url: "https://sinalsign.com.br/quanto-custa-fachada-acm-preco-m2-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function QuantoCustaFachadaAcmPage() {
  return (
    <PillarPageLayout
      slugPath="/quanto-custa-fachada-acm-preco-m2-brasilia"
      categoryBadge="GUIA DE INVESTIMENTO & TRANSPARÊNCIA TÉCNICA"
      h1Title="Quanto Custa uma Fachada em ACM em Brasília? Guia de Preço por m²"
      subtitle="Entenda com transparência técnica como é calculado o valor por metro quadrado de fachadas comerciais, letreiros 3D e painéis no Distrito Federal, evitando armadilhas e retrabalhos."
      primaryKeyword="Preço por m² de Fachadas no DF"
      descriptionText={[
        "Ao planejar a identidade visual de uma empresa em Brasília, a dúvida mais comum dos empresários e arquitetos é: 'Qual o valor do m² de uma fachada em ACM?'. No entanto, o preço de uma fachada comercial não depende apenas da chapa de alumínio, mas de um conjunto completo de engenharia estrutural, método de fixação e sistemas de iluminação.",
        "Em Brasília, o investimento médio por metro quadrado de uma fachada em ACM instalada com chassi galvanizado varia conforme o tipo de núcleo da chapa (Polietileno PE vs Núcleo Mineral Anti-chama), o tipo de pintura (Poliéster simples vs Kynar/PVDF resistente ao sol do cerrado) e a complexidade de curvas e bandejas.",
        "Neste guia transparente, a Sinal Sign detalha os componentes reais de custo que formam um orçamento profissional, as exigências de licenciamento da Administração Regional do DF e disponibiliza nossa ferramenta de simulação online com visita técnica in loco gratuita."
      ]}
      technicalSpecs={[
        { label: "Faixa Típica ACM Standard", value: "R$ 480 a R$ 680 / m² instalado com chassi" },
        { label: "Faixa Típica ACM Kynar/PVDF", value: "R$ 650 a R$ 950 / m² instalado de alta durabilidade" },
        { label: "Letras Caixa em PVC Expandido", value: "A partir de R$ 35 a R$ 90 por caractere em relevo" },
        { label: "Letras Caixa em Aço Inox 304", value: "A partir de R$ 95 a R$ 220 por caractere usinado" },
        { label: "Iluminação LED IP68 Módulos", value: "R$ 150 a R$ 350 / metro linear com fonte blindada" },
        { label: "Visita Técnica e Medição", value: "Gratuita em todo o DF sem compromisso" },
      ]}
      materialsUsed={[
        "Chapas Homologadas ACM 3mm e 4mm",
        "Tubos Metalon Galvanizados e Tratados",
        "Módulos LED de Alta Eficiência Lumínica",
        "Aço Inox 304 Polido e Escovado",
        "Selante Estrutural PU 40"
      ]}
      processSteps={[
        {
          title: "Levantamento das Medidas (Largura x Altura)",
          desc: "Multiplicação da extensão pela altura da testeira para obter a área bruta em metros quadrados (m²)."
        },
        {
          title: "Avaliação da Estrutura e Alvenaria",
          desc: "Inspeção para verificar se a parede requer chassi novo ou se a marquise suporta o peso com segurança."
        },
        {
          title: "Escolha dos Acabamentos Luminosos",
          desc: "Definição entre letras em relevo com LED embutido, iluminação indireta Halo ou spots direcionados."
        },
        {
          title: "Memorial Descritivo Fechado",
          desc: "Envio de proposta comercial detalhada item por item com garantia formal de acabamento."
        }
      ]}
      cases={[
        {
          clientName: "Send Beauty Cosméticos",
          niche: "Salão de Beleza",
          location: "Águas Claras - DF",
          specs: "Fachada de 36m² em ACM Kynar com cápsula moldada, letras em relevo iluminadas e blade sign lateral.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        },
        {
          clientName: "Resende Advocacia e Consultoria",
          niche: "Escritório de Advocacia",
          location: "Asa Sul - DF",
          specs: "Projeto interno em acrílico dourado espelhado com acabamento de alta joalheria sobre madeira.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Por que orçamentos muito baratos costumam sair caros no DF?",
          answer: "Orçamentos excessivamente baixos geralmente utilizam ACM com pintura de baixa qualidade (que queima e desbota em menos de 1 ano no sol do cerrado), metalon de parede fina sem galvanização (que enferruja e escorre ferrugem pela calçada) e silicone comum que resseca e solta as bandejas."
        },
        {
          question: "A visita para medição da fachada em Brasília tem algum custo?",
          answer: "Não! A Sinal Sign envia um técnico ao seu endereço comercial no DF para tirar as medidas com trena a laser e avaliar a estrutura gratuitamente."
        },
        {
          question: "Posso simular o valor do meu projeto online antes da visita?",
          answer: "Sim! Disponibilizamos nosso simulador interativo de pré-orçamento diretamente na página principal do site da Sinal Sign."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Especificações Completas de Fachadas em ACM"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Conhecer Letras em Aço Inox e Acrílico Laser"
        },
        {
          title: "Comunicação Visual em Brasília",
          href: "/comunicacao-visual-brasilia",
          anchorText: "Ver Soluções Globais de Comunicação Visual no DF"
        }
      ]}
    />
  );
}
