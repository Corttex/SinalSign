import { Metadata } from "next";
import { PillarPageLayout } from "@/components/portal/PillarPageLayout";

export const metadata: Metadata = {
  title: "Adesivos Jateados para Vidros e Divisórias em Brasília (DF) | Sinal Sign",
  description:
    "Instalação profissional de Películas e Adesivos Jateados para vidros de clínicas, salas de reunião e consultórios no DF. Faixas de segurança normatizadas e recorte de logomarca.",
  alternates: {
    canonical: "https://sinalsign.com.br/adesivos-jateados-vidros-divisorias-df",
  },
  keywords: [
    "adesivo jateado brasília",
    "pelicula jateada para vidro df",
    "adesivagem de divisoria de vidro brasília",
    "faixa de segurança para vidro df",
    "jateamento em vidro consultorio df",
  ],
  openGraph: {
    title: "Adesivos Jateados para Vidros e Divisórias em Brasília (DF) | Sinal Sign",
    description: "Privacidade elegante com luz natural e recorte computadorizado para divisórias de vidro no DF.",
    url: "https://sinalsign.com.br/adesivos-jateados-vidros-divisorias-df",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AdesivosJateadosPage() {
  return (
    <PillarPageLayout
      slugPath="/adesivos-jateados-vidros-divisorias-df"
      categoryBadge="PRIVACIDADE ARQUITETÔNICA & SEGURANÇA EM VIDROS"
      h1Title="Adesivos Jateados para Vidros e Divisórias em Brasília (DF)"
      subtitle="Equilíbrio impecável entre privacidade acústica/visual e aproveitamento da luz natural. Películas vinílicas jateadas com recorte eletrônico para clínicas, escritórios e salas de reunião."
      primaryKeyword="Adesivos Jateados para Vidros"
      descriptionText={[
        "As divisórias e portas de vidro temperado são elementos fundamentais da arquitetura corporativa moderna em Brasília, mas frequentemente exigem controle de privacidade visual sem bloquear a iluminação natural do ambiente. A Sinal Sign fornece e instala películas vinílicas jateadas de grau arquitetônico com textura acetinada translúcida.",
        "Empregamos tecnologia de recorte eletrônico computadorizado para personalizar os vidros com faixas decorativas contínuas, padrões geométricos modernos, listras de segurança e aplicação de logomarcas vazadas com extrema definição.",
        "Além da privacidade e sofisticação estética, as faixas jateadas cumprem a exigência de segurança da ABNT NBR 7199, alertando pedestres e colaboradores contra colisões acidentais em portas e painéis de vidro transparentes."
      ]}
      technicalSpecs={[
        { label: "Espessura da Película", value: "Vinil Polimérico Jateado de 80 micras" },
        { label: "Transmissão Luminosa", value: "Bloqueia a visibilidade direta mantendo 75% da luz natural" },
        { label: "Tipo de Adesivo", value: "Acrílico transparente permanente à base de solvente" },
        { label: "Resistência Térmica", value: "Não enruga, não descasca e resiste ao ar-condicionado" },
        { label: "Acabamento de Superfície", value: "Fosco translúcido jateado sem brilho reflexivo" },
        { label: "Conformidade Normativa", value: "Atende à NBR 7199 para sinalização de vidros translúcidos" },
      ]}
      materialsUsed={[
        "Película Vinílica Jateada Polimérica Premium",
        "Película Fumê Jateada para Alto Contraste",
        "Solução Desengordurante Isopropílica",
        "Espátulas de Silicone de Alta Dureza com Feltro Protetor",
        "Máscara de Transferência de Papel Microporoso"
      ]}
      processSteps={[
        {
          title: "Levantamento Dimensional dos Vidros",
          desc: "Medição de cada vão de divisória, portas de correr e caixilhos com indicação da altura de privacidade."
        },
        {
          title: "Corte em Plotter de Precisão",
          desc: "Recorte dos frisos, logotipos e padrões geométricos com lâmina de titânio para bordas milimétricas."
        },
        {
          title: "Higienização Química do Vidro",
          desc: "Remoção de poeira, gordura e silicone com raspador técnico e solução desengordurante."
        },
        {
          title: "Aplicação Úmida Anti-Bolhas",
          desc: "Instalação com processo úmido e espatulamento cruzado para drenagem total de água sem deixar marcas."
        }
      ]}
      cases={[
        {
          clientName: "Clínica Integrada Odontológica",
          niche: "Odontologia & Estética",
          location: "Águas Claras - DF",
          specs: "Aplicação de 42 metros lineares de película jateada com faixa de 1,20m de altura e logotipo vazado na recepção.",
          imageUrl: "/images/servicos-reais/adesivo-recortado/WhatsApp Image 2026-11-13 at 10.10.53 (3).jpeg"
        },
        {
          clientName: "Sede Corporativa de Tecnologia",
          niche: "Escritório Corporativo",
          location: "Setor Comercial Norte - DF",
          specs: "Divisórias acústicas com faixas jateadas geométricas e numeração de salas de conferência em vinil fosco.",
          imageUrl: "/images/servicos-reais/adesivo-vinil/WhatsApp Image 2026-11-13 at 10.10.28 (1).jpeg"
        }
      ]}
      faqs={[
        {
          question: "A película jateada pode ser limpa com produtos de limpeza de vidros?",
          answer: "Sim, após o período de cura do adesivo (cerca de 72 horas), a película pode ser higienizada normalmente com pano macio, água e sabão neutro ou limpa-vidros comum sem descolar."
        },
        {
          question: "Qual a durabilidade de um adesivo jateado instalado internamente?",
          answer: "Em ambientes internos protegidos de intempéries, a durabilidade ultrapassa de 7 a 10 anos sem amarelar, craquelar ou soltar as pontas."
        },
        {
          question: "Se eu precisar devolver o imóvel alugado, a película é fácil de remover?",
          answer: "Sim! Ao contrário do jateamento com ácido ou areia que danifica o vidro para sempre, a película adesiva pode ser removida com soprador térmico, deixando o vidro original 100% intacto."
        }
      ]}
      relatedPillars={[
        {
          title: "Adesivos e Plotagem de Veículos",
          href: "/adesivos-plotagem-veiculos-brasilia",
          anchorText: "Ver Adesivos de Vinil e Envelopamento de Frotas"
        },
        {
          title: "Placas em Acrílico para Consultório",
          href: "/placas-acrilico-consultorio-brasilia",
          anchorText: "Ver Placas de Identificação com Prolongador de Inox"
        },
        {
          title: "Logo em Acrílico para Recepção",
          href: "/logo-acrilico-recepcao-brasilia",
          anchorText: "Conhecer Logomarcas em Acrílico Espelhado para Recepção"
        }
      ]}
    />
  );
}
