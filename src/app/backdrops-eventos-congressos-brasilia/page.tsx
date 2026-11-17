import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Backdrops para Eventos e Congressos em Brasília (DF) | Sinal Sign",
  description:
    "Painéis de fundo de palco (backdrops), paredes fotográficas para coletivas de imprensa, premiações e estandes no Centro de Convenções Ulysses Guimarães e hotéis do DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/backdrops-eventos-congressos-brasilia",
  },
  keywords: [
    "backdrop eventos brasilia",
    "painel de fotos congresso df",
    "backdrop centro de convencoes ulysses guimaraes",
    "fundo de palco personalizado df",
    "painel pantografico tecido lona brasilia",
  ],
  openGraph: {
    title: "Backdrops para Eventos e Congressos em Brasília (DF) | Sinal Sign",
    description: "Estruturas de palco e painéis fotográficos anti-reflexo para grandes congressos no Distrito Federal.",
    url: "https://sinalsign.com.br/backdrops-eventos-congressos-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BackdropsEventosPage() {
  return (
    <PillarPageLayout
      slugPath="/backdrops-eventos-congressos-brasilia"
      categoryBadge="EVENTOS CORPORATIVOS & CONGRESSOS NACIONAIS"
      h1Title="Backdrops para Eventos e Congressos em Brasília (DF)"
      subtitle="Painéis fotográficos para coletivas de imprensa, formaturas, premiações e congressos médicos. Lonas foscas especiais anti-reflexo com estruturas metálicas e box truss no DF."
      primaryKeyword="Backdrops para Eventos e Congressos"
      descriptionText={[
        "Brasília é o epicentro dos maiores congressos nacionais, conferências governamentais, eventos diplomáticos e feiras de negócios do país. A Sinal Sign fornece estruturas completas de backdrops com dimensionamento milimétrico para atender o Centro de Convenções Ulysses Guimarães, Centro de Eventos Brasil 21, CICB e o setor hoteleiro da capital.",
        "Nossos backdrops são confeccionados em lona vinílica fosca de 440g anti-reflexo ou tecido sublimado de alta gramatura. Essa característica óptica elimina o efeito de reflexo estourado de flashes de câmeras fotográficas e luzes de estúdio de televisão durante transmissões ao vivo e registros oficiais.",
        "Disponibilizamos modelos modulares pantográficos de rápida montagem, estruturas rígidas em perfis de alumínio tensionado e painéis em grid estrutural tipo Box Truss (Q20 e Q30) com bolsas de transporte e montagem local com pontualidade britânica."
      ]}
      technicalSpecs={[
        { label: "Dimensões Típicas", value: "2,00x2,00m, 3,00x2,50m, 4,00x2,50m e 6,00x3,00m" },
        { label: "Propriedade Óptica", value: "Acabamento 100% Matte Fosco Anti-Glareshield (Sem Reflexo)" },
        { label: "Sistemas Estruturais", value: "Painel Pantográfico (Pop-Up), Estrutura Tubular ou Box Truss" },
        { label: "Gramatura da Lona", value: "Lona 440g Fosca de Alta Densidade com Trama Interna" },
        { label: "Fixação Perimetral", value: "Ilhós com abraçadeiras enforcagato ou canaletas de encaixe" },
        { label: "Agilidade de Entrega", value: "Produção expressa para eventos com prazo crítico" },
      ]}
      materialsUsed={[
        "Lona Vinílica Fosca Extra Opaca",
        "Tecido Poliéster com Impressão Sublimática Direta",
        "Perfis e Conectores de Alumínio Anodizado",
        "Abraçadeiras de Nylon de Alta Resistência",
        "Bolsas de Transporte Reforçadas com Rodízios"
      ]}
      processSteps={[
        {
          title: "Grid de Logos & Proporção da Arte",
          desc: "Alinhamento das marcas dos patrocinadores em padrão xadrez (step-and-repeat) para aparecer atrás das pessoas."
        },
        {
          title: "Impressão com Calibração Fotográfica",
          desc: "Plotagem com perfis de cores calibrados para reproduzir logomarcas oficiais sem distorções de saturação."
        },
        {
          title: "Conformação Estrutural e Pré-Montagem",
          desc: "Montagem de teste no parque fabril da Sinal Sign para conferir tensão da lona e ausência de rugas."
        },
        {
          title: "Montagem no Pavilhão do Evento",
          desc: "Nossa equipe entrega montado no palco ou estande antes do credenciamento dos participantes."
        }
      ]}
      cases={[
        {
          clientName: "Congresso Nacional Médico",
          niche: "Medicina & Saúde",
          location: "Centro de Convenções Ulysses Guimarães - DF",
          specs: "Painel de backdrop monumental de 8,00m x 2,60m em lona fosca anti-reflexo com logos de 24 patrocinadores.",
          imageUrl: "/images/servicos-reais/backdrop/WhatsApp Image 2026-11-13 at 10.10.37 (2).jpeg"
        },
        {
          clientName: "Solenidade Governamental",
          niche: "Setor Público & Cerimonial",
          location: "Setor de Autarquias Norte - Brasília / DF",
          specs: "Fundo de púlpito e coletiva de imprensa em tecido tensionado com iluminação cênica dirigida.",
          imageUrl: "/images/servicos-reais/backdrop/WhatsApp Image 2026-11-13 at 10.10.42.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Por que não devo usar lona com brilho em fotos com flash?",
          answer: "A lona com brilho reflete diretamente o feixe do flash da câmera ou refletores de estúdio, gerando círculos brancos ofuscantes que cobrem os logotipos dos patrocinadores nas fotos de divulgação do evento."
        },
        {
          question: "Qual o tamanho de backdrop mais recomendado para tirar fotos de 2 a 4 pessoas?",
          answer: "O tamanho padrão mais utilizado é 3,00 metros de largura por 2,20 a 2,50 metros de altura, pois enquadra perfeitamente um grupo de pessoas em pé da cabeça aos pés sem vazar as laterais."
        },
        {
          question: "Vocês atendem montagens de madrugada ou finais de semana nos centros de convenções?",
          answer: "Sim! Trabalhamos com equipe de plantão de montagem e desmontagem 24 horas para respeitar as janelas de montagem dos pavilhões do DF."
        }
      ]}
      relatedPillars={[
        {
          title: "Impressão de Banners e Lonas",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Lonas Frontlight e Banners Promocionais"
        },
        {
          title: "Totens Monumentais e Solo",
          href: "/letreiros-luminosos-totens-brasilia",
          anchorText: "Ver Totens e Balizadores de Entrada de Pavilhões"
        },
        {
          title: "Impressão Digital UV",
          href: "/impressao-digital-uv-dtf-brasilia",
          anchorText: "Conhecer Placas Rígidas e Quadros em Acrílico"
        }
      ]}
    />
  );
}
