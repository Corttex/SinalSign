import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Adesivação de Vitrines e Tapumes em Shoppings no DF | Sinal Sign",
  description:
    "Comunicação visual para inauguração, liquidação e tapumes de obras em shoppings de Brasília (ParkShopping, Iguatemi, Conjunto Nacional, Águas Claras, Taguatinga e JK Shopping).",
  alternates: {
    canonical: "https://sinalsign.com.br/adesivacao-vitrines-tapumes-shoppings-df",
  },
  keywords: [
    "adesivacao de vitrine df",
    "adesivo para tapume de shopping brasilia",
    "comunicacao visual shopping df",
    "adesivo promocional vitrine brasilia",
    "envelopamento de tapume de obra df",
  ],
  openGraph: {
    title: "Adesivação de Vitrines e Tapumes em Shoppings no DF | Sinal Sign",
    description: "Adesivos de grande impacto com instalação noturna credenciada em shoppings do DF.",
    url: "https://sinalsign.com.br/adesivacao-vitrines-tapumes-shoppings-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AdesivacaoVitrinesTapumesPage() {
  return (
    <PillarPageLayout
      slugPath="/adesivacao-vitrines-tapumes-shoppings-df"
      categoryBadge="VAREJO DE SHOPPING & COMUNICAÇÃO DE OBRAS"
      h1Title="Adesivação de Vitrines e Tapumes em Shoppings no DF"
      subtitle="Instalação noturna credenciada nos shopping centers de Brasília. Vinis blackout de alta cobertura para tapumes de obra e películas de alta definição para campanhas promocionais de vitrine."
      primaryKeyword="Adesivação de Vitrines e Tapumes"
      descriptionText={[
        "O varejo de shopping center no Distrito Federal obedece a cronogramas rígidos e padrões exigentes de apresentação visual. A Sinal Sign atua como parceira homologada de franquias, arquitetos comerciais e lojistas em shoppings como ParkShopping, Iguatemi, Conjunto Nacional, JK Shopping, Taguatinga Shopping e Pátio Brasil.",
        "Para tapumes de lojas em reforma ou expansão, utilizamos vinil blackout de 100 micras com fundo cinza opaco bloqueador. Esse material impede que a luz interna da obra ou imperfeições do drywall transpareçam, apresentando artes de 'Em Breve Uma Nova Loja' com qualidade fotográfica impecável.",
        "Nas vitrines promocionais, desenvolvemos projetos com adesivos de recorte sem fundo, vinis transparentes com impressão de tinta branca de alto contraste, adesivos eletrostáticos de fácil remoção e cartazes com ilhós e ventosas."
      ]}
      technicalSpecs={[
        { label: "Vinil para Tapumes", value: "Vinil Polimérico Blackout com Bloqueio de 100% da Luz" },
        { label: "Vinil para Vitrines", value: "Vinis Monoméricos / Poliméricos de Fácil Remoção (Removível)" },
        { label: "Horário de Montagem", value: "Turno noturno das 22h às 06h com credenciamento" },
        { label: "Documentação Fornecida", value: "RPA, ART, ASO e Certificados de NR-35/NR-18" },
        { label: "Largura de Painel", value: "Bobinas de até 1,52m com sobreposição invisível de 15mm" },
        { label: "Resolução de Impressão", value: "Alta saturação com tintas originais até 1440 DPI" },
      ]}
      materialsUsed={[
        "Vinil Opaco Blackout Grey Back",
        "Vinil Transparente Cristal com Tinta Branca",
        "Vinil Removível Sem Resíduo de Cola",
        "Adesivo Microperfurado Homologado",
        "Fita Crepe Automotiva e Linhas de Corte Knifeless"
      ]}
      processSteps={[
        {
          title: "Vistoria Técnica & Alinhamento com o Shopping",
          desc: "Conferência das medidas do tapume e envio prévio da documentação dos montadores à administração do shopping."
        },
        {
          title: "Diagramação & Fechamento em Escala",
          desc: "Adaptação da campanha de marketing respeitando os vãos de portas de acesso e alinhamento do piso do mall."
        },
        {
          title: "Impressão em Escala Industrial",
          desc: "Produção no parque fabril da Sinal Sign com laminação de proteção anti-grafite e anti-risco."
        },
        {
          title: "Montagem Noturna e Entrega Limpa",
          desc: "Instalação nas primeiras horas da madrugada para inauguração impecável na abertura das lojas às 10h."
        }
      ]}
      cases={[
        {
          clientName: "Boutique de Luxo Cris Barros",
          niche: "Moda Feminina & Alto Varejo",
          location: "ParkShopping - Brasília / DF",
          specs: "Adesivação de vitrine minimalista com letras metálicas recortadas a laser e adesivos de campanha sazonal.",
          imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-10.jpeg"
        },
        {
          clientName: "Rede de Franquias de Cosméticos",
          niche: "Cosméticos & Beleza",
          location: "Águas Claras Shopping - DF",
          specs: "Envelopamento integral de tapume de obra com 18m de extensão em vinil blackout com artes promocionais.",
          imageUrl: "/images/servicos-reais/adesivo-vinil/WhatsApp Image 2026-11-13 at 10.10.48.jpeg"
        }
      ]}
      faqs={[
        {
          question: "Vocês possuem a documentação de segurança exigida pelos shoppings do DF?",
          answer: "Sim! Nossa equipe conta com ASO (Atestado de Saúde Ocupacional), certificados de NR-35 (trabalho em altura), NR-18 e EPIs completos para liberação expressa da ordem de serviço junto à gerência de operações do shopping."
        },
        {
          question: "O adesivo da vitrine deixa resíduos de cola difíceis de limpar após a campanha?",
          answer: "Não. Para campanhas temporárias (Black Friday, Dia das Mães, Liquidações), utilizamos vinis de adesividade removível que saem por inteiro sem deixar resíduos pegajosos no vidro."
        },
        {
          question: "Vocês realizam o serviço de desinstalação e limpeza no final da obra?",
          answer: "Sim, realizamos o pacote completo: aplicação do tapume no início da obra, remoção na véspera da inauguração e limpeza química dos vidros."
        }
      ]}
      relatedPillars={[
        {
          title: "Adesivos e Plotagem de Veículos",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Linha Completa de Adesivos e Vinis Comerciais"
        },
        {
          title: "Fachadas em ACM",
          href: "/fachadas-em-acm-brasilia",
          anchorText: "Ver Fachadas em ACM para Lojas de Rua e Galerias"
        },
        {
          title: "Banners e Lonas",
          href: "/impressao-banners-lonas-brasilia",
          anchorText: "Ver Banners Promocionais e Roll-Ups para Lojas"
        }
      ]}
    />
  );
}
