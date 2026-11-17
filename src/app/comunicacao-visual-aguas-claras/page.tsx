import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Águas Claras (DF) | Fachadas e Letras — Sinal Sign",
  description:
    "Empresa líder em Comunicação Visual em Águas Claras DF: Fachadas em ACM para lojas de rua e shoppings, Letras Caixa em Inox, Logomarcas em Acrílico para Consultórios e Totens.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-aguas-claras",
  },
  keywords: [
    "comunicacao visual aguas claras",
    "fachadas em acm aguas claras df",
    "letra caixa aguas claras",
    "adesivacao vitrine aguas claras",
    "logomarca acrilico clinica aguas claras",
  ],
  openGraph: {
    title: "Comunicação Visual em Águas Claras (DF) | Sinal Sign",
    description: "Atendimento presencial com medição in loco rápida para o comércio e clínicas de Águas Claras.",
    url: "https://sinalsign.com.br/comunicacao-visual-aguas-claras",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualAguasClarasPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-aguas-claras"
      categoryBadge="ATENDIMENTO DEDICADO & MEDIÇÃO EM ÁGUAS CLARAS"
      h1Title="Comunicação Visual em Águas Claras (DF)"
      subtitle="Projetos modernos de fachadas em ACM, letras caixa iluminadas, adesivos jateados e logomarcas em acrílico para o dinâmico comércio e centros clínicos de Águas Claras."
      primaryKeyword="Comunicação Visual em Águas Claras"
      descriptionText={[
        "Águas Claras é uma das regiões administrativas mais verticais e com maior densidade comercial do Brasil. Com milhares de lojas de rua, avenidas gastronômicas (Avenida Castanheiras e Araucárias) e centenas de consultórios em edifícios empresariais, a concorrência visual exige estruturas refinadas e acabamentos de alto padrão.",
        "A Sinal Sign atua diretamente em Águas Claras com equipe volante de medição técnica rápida. Desenvolvemos desde fachadas completas em ACM para lojas térreas e academias até logomarcas em acrílico dourado espelhado para consultórios e estúdios de beleza.",
        "Executamos também sinalizações completas para os novos condomínios residenciais verticais de Águas Claras, fornecendo placas de garagem, rotas de fuga normatizadas pelo CBMDF e totens de entrada iluminados."
      ]}
      technicalSpecs={[
        { label: "Tempo Médio de Visita Técnica", value: "Em até 24h úteis em qualquer quadra de Águas Claras" },
        { label: "Serviços Mais Demandados", value: "Fachadas em ACM, Letras Caixa LED e Logos em Acrílico" },
        { label: "Atendimento em Shoppings", value: "Credenciamento no Águas Claras Shopping e Felicittà" },
        { label: "Normas de Instalação", value: "Técnicos habilitados em NR-35 para montagem em altura" },
        { label: "Garantia de Materiais", value: "Resistência total contra insolação intensa do DF" },
        { label: "Origem dos Produtos", value: "Fabricação própria direta no DF sem intermediários" },
      ]}
      materialsUsed={[
        "ACM 3mm e 4mm Kynar/PVDF Cores Nobres",
        "Acrílico Espelhado Dourado, Rosé e Prata",
        "Aço Inox 304 Escovado Anti-Ferrugem",
        "Módulos LED IP68 para Visibilidade Noturna",
        "Películas Jateadas Arquitetônicas"
      ]}
      processSteps={[
        {
          title: "Agendamento da Visita em Águas Claras",
          desc: "Nosso consultor técnico vai até sua loja ou consultório para conferir medidas, desníveis e alvenaria."
        },
        {
          title: "Apresentação do Projeto 3D e Orçamento",
          desc: "Simulação do projeto com aplicação da sua marca e memorial descritivo dos materiais utilizados."
        },
        {
          title: "Fabricação no Parque Industrial",
          desc: "Corte laser, usinagem CNC e preparação elétrica nas bancadas da fábrica da Sinal Sign."
        },
        {
          title: "Instalação com Agilidade e Limpeza",
          desc: "Montagem coordenada respeitando as regras de barulho e horário do condomínio ou centro comercial."
        }
      ]}
      cases={[
        {
          clientName: "Send Beauty Cosméticos",
          niche: "Salão de Beleza & Estética",
          location: "Águas Claras - DF",
          specs: "Fachada completa em ACM 3mm grafite com 22,50m de extensão, letras caixa iluminadas e blade sign lateral.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        },
        {
          clientName: "Consultório Odontológico Integrado",
          niche: "Odontologia Especializada",
          location: "Edifício E-Business Águas Claras - DF",
          specs: "Logo em acrílico dourado sobre painel ripado na recepção e películas jateadas nas divisórias de vidro.",
          imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
        }
      ]}
      faqs={[
        {
          question: "A Sinal Sign faz visita técnica em Águas Claras sem custo?",
          answer: "Sim! Enviamos nosso técnico ao seu endereço em Águas Claras (Avenida das Castanheiras, Araucárias ou quadras residenciais) para levantamento dimensional detalhado."
        },
        {
          question: "Vocês instalam fachadas em galerias e prédios comerciais de Águas Claras?",
          answer: "Sim, atendemos centros comerciais como Metropolitan, Vitrinni Shopping, Águas Claras Shopping, DF Century Plaza e galerias de rua."
        },
        {
          question: "Qual o prazo médio para fabricar uma logomarca de recepção em acrílico?",
          answer: "Para logomarcas em acrílico com corte a laser, o prazo médio de entrega e instalação é de 5 a 8 dias úteis após aprovação do layout."
        }
      ]}
      relatedPillars={[
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Projetos de Fachadas em ACM no Distrito Federal"
        },
        {
          title: "Logo em Acrílico para Recepção",
          href: "/logo-acrilico-recepcao-brasilia",
          anchorText: "Ver Modelos de Logomarcas em Acrílico Espelhado"
        },
        {
          title: "Comunicação Visual em Taguatinga",
          href: "/comunicacao-visual-taguatinga-df",
          anchorText: "Conhecer Nossos Projetos de Fachadas em Taguatinga"
        }
      ]}
    />
  );
}
