import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual no Gama e Santa Maria (DF) | Sinal Sign",
  description:
    "Comunicação visual para empresas no Gama e Santa Maria DF: Fachadas em ACM para lojas e concessionárias, Letras Caixa LED, Lonas e Totens de grande porte na Saída Sul.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-gama-santa-maria-df",
  },
  keywords: [
    "comunicacao visual gama df",
    "fachadas em acm gama setor central",
    "comunicacao visual santa maria df",
    "letra caixa gama sul",
    "banners e lonas gama brasilia",
  ],
  openGraph: {
    title: "Comunicação Visual no Gama e Santa Maria (DF) | Sinal Sign",
    description: "Projetos de alta resistência e visibilidade para o comércio e indústrias do Gama e Santa Maria DF.",
    url: "https://sinalsign.com.br/comunicacao-visual-gama-santa-maria-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualGamaSantaMariaPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-gama-santa-maria-df"
      categoryBadge="SAÍDA SUL DO DF & POLO DE SAÚDE E VAREJO"
      h1Title="Comunicação Visual no Gama e Santa Maria (DF)"
      subtitle="Fachadas modernas em ACM, letreiros volumétricos iluminados, lonas de grande formato e totens comerciais para o polo de saúde do Gama e o forte comércio de Santa Maria."
      primaryKeyword="Comunicação Visual no Gama e Santa Maria"
      descriptionText={[
        "O Gama e Santa Maria formam o principal eixo de desenvolvimento econômico da Saída Sul do Distrito Federal. O Gama se consolidou como uma referência regional em serviços de saúde com o Setor Central e Hospitalar, além de um varejo dinâmico nos Setores Sul, Leste e Norte. Já Santa Maria destaca-se pela força das avenidas comerciais (Avenida Alagados) e polo industrial.",
        "A Sinal Sign atende os empresários da região fornecendo comunicação visual de ponta com garantia direta de fábrica: fachadas estruturadas em ACM resistentes ao calor e poeira, letras caixa em alto relevo com iluminação noturna LED e identificação para clínicas e laboratórios.",
        "Atendemos também concessionárias, distribuidoras e galpões do Setor de Indústria do Gama com sinalização pesada, totens monolíticos de solo e lonas de grande formato para campanhas promocionais."
      ]}
      technicalSpecs={[
        { label: "Bairros Cobertos", value: "Gama (Setor Central, Sul, Leste, Oeste, Norte e Indústria) e Santa Maria (Norte/Sul)" },
        { label: "Serviços Mais Solicitados", value: "Fachadas em ACM, Letras Caixa LED, Totens e Banners Promocionais" },
        { label: "Durabilidade Estimada", value: "Acima de 10 a 15 anos com chapas de pintura automotiva" },
        { label: "Visita Técnica", value: "Agendamento de consultoria e medição técnica no local" },
        { label: "Equipe de Montagem", value: "Montadores próprios treinados com ferramentas de precisão" },
        { label: "Condições Comerciais", value: "Parcelamento para empresas e preço justo sem intermediários" },
      ]}
      materialsUsed={[
        "Chapas de Alumínio Composto ACM 3mm e 4mm",
        "Aço Inox 304 e Acrílico Cristal Puro",
        "Tubos Metalon Galvanizados e Tratados contra Ferrugem",
        "Módulos LED 12V IP68 para Iluminação Noturna",
        "Lonas Vinílicas Frontlight 440g de Alta Trama"
      ]}
      processSteps={[
        {
          title: "Vistoria no Ponto no Gama ou Santa Maria",
          desc: "Levantamento das medidas com trena a laser, fotos da fachada e análise dos pontos de energia."
        },
        {
          title: "Desenho da Fachada em 3D",
          desc: "Simulação realista das cores da sua marca e dimensionamento das letras para máxima visibilidade."
        },
        {
          title: "Fabricação no Parque Industrial",
          desc: "Corte laser e usinagem CNC nas máquinas da fábrica própria da Sinal Sign no DF."
        },
        {
          title: "Montagem Nivelada e Iluminação",
          desc: "Instalação ágil com equipe equipada com andaimes para entrega limpa e sem atrasos."
        }
      ]}
      cases={[
        {
          clientName: "Centro Clínico de Diagnóstico e Saúde",
          niche: "Saúde & Medicina",
          location: "Setor Central - Gama / DF",
          specs: "Fachada em ACM branco e azul royal com letras bloco iluminadas e placas internas de consultório.",
          imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"
        },
        {
          clientName: "Concessionária de Motos e Serviços",
          niche: "Comércio Automotivo",
          location: "Avenida Alagados - Santa Maria / DF",
          specs: "Fachada com pórtico em ACM vermelho de 28m e testeira com módulos LED de alta luminosidade.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês atendem clínicas e consultórios médicos no Gama?",
          answer: "Sim! Fornecemos tanto a fachada externa em ACM quanto a sinalização interna: placas com prolongadores em acrílico, logomarcas em alto relevo para recepção e películas jateadas em vidros."
        },
        {
          question: "Qual o prazo para confeccionar uma fachada de loja no Gama ou Santa Maria?",
          answer: "Geralmente entre 10 e 15 dias úteis a partir da aprovação do projeto executivo."
        },
        {
          question: "A visita técnica de orçamento na Saída Sul é gratuita?",
          answer: "Sim! Não cobramos deslocamento para avaliação técnica e medição no Gama e em Santa Maria."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual em Valparaíso e Entorno",
          href: "/comunicacao-visual-valparaiso-entorno-df",
          anchorText: "Ver Projetos de Fachadas no Entorno Sul do DF"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Revestimentos Comerciais em ACM"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras em Relevo com Iluminação LED"
        }
      ]}
    />
  );
}
