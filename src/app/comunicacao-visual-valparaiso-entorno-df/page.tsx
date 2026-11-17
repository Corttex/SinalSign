import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Comunicação Visual em Valparaíso de Goiás e Entorno do DF | Sinal Sign",
  description:
    "Comunicação visual para o Entorno do DF: Valparaíso de Goiás (BR-040, Cidade Jardins), Luziânia, Novo Gama e Águas Lindas. Fachadas em ACM, Letreiros 3D e Totens de Rodovia.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-valparaiso-entorno-df",
  },
  keywords: [
    "comunicacao visual valparaiso de goias",
    "fachadas em acm br 040 entorno",
    "comunicacao visual luziania",
    "letreiro luminoso novo gama",
    "comunicacao visual aguas lindas go",
  ],
  openGraph: {
    title: "Comunicação Visual em Valparaíso de Goiás e Entorno do DF | Sinal Sign",
    description: "Projetos de grande impacto e alta resistência com preço de fábrica para o Entorno do DF.",
    url: "https://sinalsign.com.br/comunicacao-visual-valparaiso-entorno-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ComunicacaoVisualValparaisoEntornoPage() {
  return (
    <PillarPageLayout
      slugPath="/comunicacao-visual-valparaiso-entorno-df"
      categoryBadge="ENTORNO DO DF & CORREDOR COMERCIAL DA BR-040"
      h1Title="Comunicação Visual em Valparaíso de Goiás e Entorno do DF"
      subtitle="Fachadas estruturadas em ACM, totens monolíticos de rodovia e letreiros luminosos para redes de lojas, shoppings e concessionárias no corredor da BR-040 e cidades vizinhas do DF."
      primaryKeyword="Comunicação Visual em Valparaíso e Entorno"
      descriptionText={[
        "A Região Metropolitana do Entorno do Distrito Federal, encabeçada por Valparaíso de Goiás, Luziânia, Cidade Ocidental, Novo Gama e Águas Lindas, reúne mais de 1,5 milhão de habitantes e um dos comércios de rua e atacado que mais cresce na região Centro-Oeste. O fluxo intenso da rodovia BR-040 exige estruturas de grande visibilidade e resistência climática superior.",
        "A Sinal Sign atende o Entorno do DF com parque industrial próprio localizado no Distrito Federal, garantindo logística rápida, assistência técnica permanente e preço direto de fabricante sem atravessadores.",
        "Desenvolvemos projetos de alta visibilidade: letreiros de grande porte para atacarejos e concessionárias, fachadas em ACM para franquias nos shoppings locais (Shopping Sul de Valparaíso) e totens de solo monumentais para condomínios horizontais fechados da região."
      ]}
      technicalSpecs={[
        { label: "Cidades Atendidas", value: "Valparaíso de Goiás, Luziânia, Cidade Ocidental, Novo Gama e Águas Lindas" },
        { label: "Serviços Mais Procurados", value: "Mega Fachadas em ACM, Totens de Rodovia, Letras 3D e Lonas" },
        { label: "Resistência Estrutural", value: "Cálculo para rajadas de vento em rodovias abertas (BR-040 e BR-070)" },
        { label: "Visita Técnica", value: "Atendimento no local para medição e levantamento de medidas" },
        { label: "Garantia de Materiais", value: "Pintura automotiva PVDF e módulos LED IP68 à prova de intempéries" },
        { label: "Assistência Pós-Venda", value: "Equipe técnica própria para manutenção rápida no Entorno" },
      ]}
      materialsUsed={[
        "Chapas de Alumínio Composto ACM 3mm e 4mm Kynar/PVDF",
        "Tubos Metalon Galvanizados e Vigas Estruturais de Aço",
        "Módulos LED de Alta Intensidade Lumínica 12V",
        "Lonas Vinílicas Frontlight 440g Tramadas",
        "Aço Inox 304 Escovado e Acrílico Cristal Puro"
      ]}
      processSteps={[
        {
          title: "Levantamento Técnico no Endereço",
          desc: "Visita de um consultor ao seu ponto comercial no Valparaíso ou cidades vizinhas para medição precisa."
        },
        {
          title: "Engenharia Visual e Render 3D",
          desc: "Apresentação da maquete digital da fachada e detalhamento das espessuras de metalon e chapas de ACM."
        },
        {
          title: "Fabricação no Parque Fabril do DF",
          desc: "Usinagem CNC, corte laser e montagem dos módulos no parque industrial próprio da Sinal Sign."
        },
        {
          title: "Transporte e Montagem Estrutural",
          desc: "Entrega com frota própria e equipe equipada para montagem e ligação elétrica segura."
        }
      ]}
      cases={[
        {
          clientName: "Atacarejo & Centro Comercial de Variedades",
          niche: "Atacado & Varejo",
          location: "Marginal da BR-040 - Valparaíso de Goiás",
          specs: "Fachada monumental de 52m em ACM amarelo e azul com letras caixa de 1,60m de altura iluminadas em LED.",
          imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg"
        },
        {
          clientName: "Condomínio Residencial Fechado",
          niche: "Condomínio Horizontal",
          location: "Cidade Jardins - Valparaíso de Goiás",
          specs: "Totem monolítico de entrada de 4,50m de altura em ACM preto com iluminação balizada de acesso.",
          imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
        }
      ]}
      faqs={[
        {
          question: "A Sinal Sign atende empresas em Valparaíso e Luziânia com facilidade?",
          answer: "Sim! Por estarmos situados no Distrito Federal e com frota própria, nosso deslocamento até Valparaíso, Luziânia e Cidade Ocidental é diário e ágil."
        },
        {
          question: "Vocês atendem lojas instaladas no Shopping Sul de Valparaíso?",
          answer: "Sim! Executamos adesivagem de vitrines, tapumes noturnos de obra e letreiros com credenciamento junto à administração do shopping."
        },
        {
          question: "Como funciona a garantia contra sol e chuva para fachadas no Entorno?",
          answer: "Utilizamos chapas de ACM com pintura Kynar/PVDF e módulos LED com vedação IP68 à prova d'água, garantindo retenção de cor e funcionamento noturno por mais de 10 anos."
        }
      ]}
      relatedPillars={[
        {
          title: "Comunicação Visual no Gama e Santa Maria",
          href: "/comunicacao-visual-gama-santa-maria-df",
          anchorText: "Ver Projetos de Comunicação Visual na Saída Sul"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Conhecer Nossas Fachadas em Alumínio Composto"
        },
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Modelos de Totens de Rodovia e Condomínios"
        }
      ]}
    />
  );
}
