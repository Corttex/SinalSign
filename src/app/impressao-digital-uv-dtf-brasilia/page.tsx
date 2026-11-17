import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Impressão Digital UV e DTF em Brasília (DF) | Rígidos e Flexíveis — Sinal Sign",
  description:
    "Serviços especializados de Impressão Digital UV de alta resolução e Tecnologia UV DTF em Brasília e DF. Impressão direta em acrílico, vidro, PS, MDF, alumínio e adesivos sem fundo com verniz localizado.",
  alternates: {
    canonical: "https://sinalsign.com.br/impressao-digital-uv-dtf-brasilia",
  },
  keywords: [
    "impressão digital brasília",
    "impressao uv df",
    "impressao uv dtf brasília",
    "impressao direta em acrilico df",
    "impressao em vidro brasília",
    "placas de patrimonio uv",
  ],
  openGraph: {
    title: "Impressão Digital UV e DTF em Brasília (DF) | Sinal Sign",
    description:
      "Impressão plana com cura ultravioleta instantânea em substratos rígidos e flexíveis de alta fidelidade cromática no Distrito Federal.",
    url: "https://sinalsign.com.br/impressao-digital-uv-dtf-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ImpressaoUvDtfPage() {
  return (
    <PillarPageLayout
      slugPath="/impressao-digital-uv-dtf-brasilia"
      categoryBadge="IMPRESSÃO INDUSTRIAL DE ALTA DEFINIÇÃO"
      h1Title="Impressão Digital UV e DTF em Brasília (DF)"
      subtitle="Cura instantânea por LED ultravioleta com ancoragem química sobre acrílico, vidro, metal, madeira e PS. Fidelidade fotográfica de 1440 DPI e tecnologia UV DTF com verniz em relevo."
      primaryKeyword="Impressão Digital UV e DTF"
      descriptionText={[
        "A tecnologia de impressão UV direta plana (Flatbed) da Sinal Sign revoluciona os padrões de comunicação visual em Brasília. Ao contrário da impressão convencional à base de solvente que desbota com a umidade e a luz solar, a tinta ultravioleta cura instantaneamente sob feixes de LED UV, solidificando-se como uma película polimérica indelével e inodora.",
        "Imprimimos diretamente sobre materiais rígidos de até 50mm de espessura, como acrílicos virgens, placas de poliestireno (PS), PVC expandido, vidro temperado, placas de aço e ACM. A capacidade de imprimir tinta branca permite criar fundos opacos em superfícies transparentes ou escuras, com contraste absoluto e sem desvio de cor.",
        "Para personalizações milimétricas e superfícies curvas onde a mesa plana não alcança, disponibilizamos a tecnologia UV DTF: decalques industriais de alta aderência aplicáveis a frio com efeito de verniz localizado e relevo tátil sofisticado."
      ]}
      technicalSpecs={[
        { label: "Resolução Máxima", value: "Até 1440 DPI com gotas microscópicas" },
        { label: "Cura Ultravioleta", value: "LED UV frio sem aquecimento do substrato" },
        { label: "Área Útil de Mesa Plana", value: "Até 2,50m x 1,30m em peça única" },
        { label: "Espessura de Substrato", value: "De 0,5mm até 50mm de altura" },
        { label: "Configuração de Tintas", value: "CMYK + Branco de Alta Cobertura + Verniz Gloss" },
        { label: "Resistência Química", value: "Imune a álcool 70%, água e radiação UV" },
      ]}
      materialsUsed={[
        "Acrílico Cristal, Branco e Espelhado",
        "Chapas de Vidro Temperado e Espelhos",
        "Poliestireno de Alto Impacto (PSAI 1mm a 3mm)",
        "PVC Expandido e Placas de MDF",
        "Chapas de Alumínio Composto (ACM)",
        "Filmes Poliméricos UV DTF A+B"
      ]}
      processSteps={[
        {
          title: "Calibração de Cor & Perfil ICC",
          desc: "Ajuste colorimétrico no software RIP para correspondência fiel às escalas Pantone e padrões corporativos."
        },
        {
          title: "Tratamento Superficial & Primer",
          desc: "Desengorduramento estático e aplicação de primer de adesão para materiais de alta tensão superficial como vidro e metal."
        },
        {
          title: "Impressão UV Plana com Cura LED",
          desc: "Passagem das cabeças industriais depositando gotas variáveis de tinta e cura imediata sem tempo de secagem."
        },
        {
          title: "Controle de Qualidade & Embalagem",
          desc: "Inspeção visual milimétrica sob luz padronizada e aplicação de película plástica de proteção contra riscos durante o transporte."
        }
      ]}
      cases={[
        {
          clientName: "Quadros Decorativos Corporativos",
          niche: "Arquitetura Corporativa & Clínicas",
          location: "Asa Norte - DF",
          specs: "Impressão UV em alta resolução no verso de acrílico cristal virgem 8mm com fundo branco opaco e acabamento bisotado.",
          imageUrl: "/images/servicos-reais/quadros-personalizados/WhatsApp Image 2026-11-13 at 10.10.51.jpeg"
        },
        {
          clientName: "Sinalização Técnica Predial",
          niche: "Condomínios & Indústrias",
          location: "Setor de Indústria e Abastecimento (SIA) - DF",
          specs: "Placas de identificação e rotas de fuga em PS 2mm impressas em UV com pigmento fotoluminescente e verniz de proteção.",
          imageUrl: "/images/servicos-reais/identificacao-comercial/WhatsApp Image 2026-11-13 at 10.10.49 (1).jpeg"
        }
      ]}
      faqs={[
        {
          question: "Qual a durabilidade da impressão UV comparada à tinta solvente?",
          answer: "A impressão UV não desbota facilmente, resistindo de 3 a 5 anos exposta ao ar livre no cerrado e mais de 10 anos em ambientes internos sem alteração de tonalidade ou perda de saturação."
        },
        {
          question: "A impressão UV sai ao lavar ou limpar com produtos químicos?",
          answer: "Não. A resina curada por raios UV é extremamente resistente à água, sabão neutro e álcool 70%, o que a torna a escolha obrigatória para ambientes hospitalares, clínicas e consultórios médicos."
        },
        {
          question: "O que é a tecnologia UV DTF e quando ela é recomendada?",
          answer: "O UV DTF imprime uma estampa autoadesiva ultrarresistente com cola permanente e verniz de acabamento. Ela permite transferir logomarcas com relevo em qualquer superfície irregular (como garrafas, móveis, acrílicos moldados e equipamentos) sem precisar levar a peça inteira para a máquina de impressão."
        },
        {
          question: "Vocês imprimem arquivos com fundo transparente?",
          answer: "Sim. Com a tecnologia de canal de tinta branca (White Ink), podemos criar áreas 100% opacas e manter outras totalmente cristalinas no mesmo painel de acrílico ou vidro."
        }
      ]}
      relatedPillars={[
        {
          title: "Adesivos & Frotas",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Adesivos de Vinil com Impressão Digital e Recorte"
        },
        {
          title: "Letras Caixa 3D",
          href: "/letras-caixa-brasilia",
          anchorText: "Ver Letras em Acrílico com Corte a Laser de Precisão"
        },
        {
          title: "Banners & Lonas",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Impressão em Grandes Formatos para Eventos no DF"
        }
      ]}
    />
  );
}
