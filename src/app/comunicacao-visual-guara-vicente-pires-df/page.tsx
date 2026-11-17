import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual no Guará e Vicente Pires (DF) | Sinal Sign",
  description:
    "Projetos de fachadas em ACM, letreiros em relevo 3D, banners, faixas e adesivos comerciais para o comércio do Guará I e II e Vicente Pires no Distrito Federal.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-guara-vicente-pires-df",
  },
  keywords: [
    "comunicacao visual guara df",
    "fachadas em acm vicente pires",
    "letra caixa guara brasilia",
    "adesivos e lonas vicente pires df",
    "comunicacao visual guara 1 e 2",
  ],
  openGraph: {
    title: "Comunicação Visual no Guará e Vicente Pires (DF) | Sinal Sign",
    description: "Atendimento técnico próximo e rápido para lojas e condomínios no Guará e Vicente Pires DF.",
    url: "https://sinalsign.com.br/comunicacao-visual-guara-vicente-pires-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualGuaraVicentePiresPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-guara-vicente-pires-df"
      categoryBadge="COMÉRCIO LOCAL & CONDOMÍNIOS HORIZONTAIS"
      h1Title="Comunicação Visual no Guará e Vicente Pires (DF)"
      subtitle="Fachadas modernas em ACM, letras em alto relevo, placas para clínicas e sinalização para o forte polo comercial do Guará (I e II) e para as galerias e condomínios de Vicente Pires."
      primaryKeyword="Comunicação Visual no Guará e Vicente Pires"
      descriptionText={[
        "O Guará e Vicente Pires são duas das regiões com maior crescimento comercial e residencial do Distrito Federal. Enquanto o Guará se destaca por seus centros gastronômicos tradicionais, polos de moda e a Avenida Central, Vicente Pires vive uma intensa urbanização com novas galerias, strip malls e centenas de condomínios horizontais que demandam sinalização profissional.",
        "A Sinal Sign atende os lojistas do Guará e Vicente Pires com projetos personalizados de fachadas em alumínio composto (ACM), letras caixa em inox e acrílico com iluminação noturna, e adesivação de vitrines para promoções e lançamentos.",
        "Para os condomínios fechados da região, fabricamos portais de entrada, totens de identificação em ACM amadeirado, placas de velocidade interna, lombadas e placas fotoluminescentes de combate a incêndio."
      ]}
      technicalSpecs={[
        { label: "Bairros Atendidos", value: "Guará I, Guará II, QE, QI, Vicente Pires (Ruas 1 a 12) e Colônia Agrícola" },
        { label: "Projetos em Destaque", value: "Fachadas de Galerias Comerciais, Totens de Condomínio e Letras 3D" },
        { label: "Visita Técnica no Local", value: "Atendimento em até 24 horas para levantamento de medidas" },
        { label: "Garantia Térmica", value: "Pintura resistente ao sol forte e às chuvas intensas do DF" },
        { label: "Equipe de Instalação", value: "Montadores próprios certificados e veículos equipados" },
        { label: "Preço de Fábrica", value: "Fabricação direta sem custos de intermediários" },
      ]}
      materialsUsed={[
        "Chapas de Alumínio Composto ACM 3mm e 4mm",
        "Aço Inox 304 Escovado e Acrílico Cristal Virgem",
        "PVC Expandido com Pintura Automotiva PU",
        "Módulos LED IP68 Prova d'Água 12V",
        "Vinis Automotivos e Películas Jateadas"
      ]}
      processSteps={[
        {
          title: "Medição no Seu Endereço",
          desc: "Nosso técnico vai até sua loja ou portaria no Guará ou Vicente Pires para tirar medidas com trena a laser."
        },
        {
          title: "Elaboração da Proposta Visual 3D",
          desc: "Montamos a prévia digital da fachada ou letreiro para você aprovar antes de iniciar a produção."
        },
        {
          title: "Usinagem de Precisão em Máquinas CNC",
          desc: "Corte das bandejas de ACM, usinagem das letras e montagem da estrutura no parque industrial da Sinal Sign."
        },
        {
          title: "Instalação Segura e Limpa",
          desc: "Montagem da estrutura, ligação elétrica e testes completos de iluminação no local."
        }
      ]}
      cases={[
        {
          clientName: "Galeria Comercial & Restaurante",
          niche: "Gastronomia & Comércio",
          location: "Guará II - DF",
          specs: "Fachada em ACM preto fosco com letras em aço escovado e retroiluminação LED quente de alta elegância.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        },
        {
          clientName: "Condomínio Residencial Fechado",
          niche: "Condomínio Horizontal",
          location: "Vicente Pires (Rua 4) - DF",
          specs: "Totem monolítico de portaria com letras em relevo vazadas iluminadas e placas de trânsito internas.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês atendem condomínios residenciais em Vicente Pires?",
          answer: "Sim! Somos especialistas em totens de entrada de condomínios, numeração de quadras/lotes e placas de trânsito interno para condomínios horizontais de Vicente Pires."
        },
        {
          question: "A visita para orçamento no Guará tem algum custo?",
          answer: "Não! A visita técnica de um consultor da Sinal Sign para medição e consultoria inicial é 100% gratuita."
        },
        {
          question: "Qual o prazo para confeccionar uma fachada em ACM no Guará?",
          answer: "Geralmente entre 10 e 15 dias úteis, dependendo da metragem total e dos acabamentos luminosos escolhidos."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual em Águas Claras",
          href: "/comunicacao-visual-aguas-claras",
          anchorText: "Ver Projetos de Comunicação Visual em Águas Claras"
        },
        {
          title: "Comunicação Visual em Taguatinga",
          href: "/comunicacao-visual-taguatinga-df",
          anchorText: "Conhecer Fachadas em Taguatinga DF"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Nossa Linha Completa de Fachadas em ACM"
        }
      ]}
    />
  );
}
