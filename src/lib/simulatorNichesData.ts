export interface BusinessNicheProfile {
  id: string;
  name: string;
  iconEmoji: string;
  badge: string;
  description: string;
  suggestedItems: {
    id: string;
    title: string;
    category: string;
    desc: string;
    recommended?: boolean;
  }[];
}

export const BUSINESS_NICHES_DATA: BusinessNicheProfile[] = [
  {
    id: "clinica-consultorio",
    name: "Clínica, Odontologia & Consultório",
    iconEmoji: "🩺",
    badge: "Saúde & Estética Nobre",
    description: "Ambientes que demandam sofisticação, acabamento asséptico e recepção elegante.",
    suggestedItems: [
      {
        id: "logo-acrilico-recepcao",
        title: "Logomarca em Acrílico Espelhado (Recepção)",
        category: "Usinagem Laser",
        desc: "Dourado, Prata ou Rosé com corte laser preciso em parede ou painel ripado.",
        recommended: true,
      },
      {
        id: "fachada-acm-clinica",
        title: "Fachada em ACM Branco Puro ou Amadeirado",
        category: "Fachadas",
        desc: "Dobra sem emenda com letras caixa e iluminação backlight suave.",
        recommended: true,
      },
      {
        id: "placas-portas-consultorio",
        title: "Placas Indicativas de Salas & Consultórios",
        category: "Sinalização Interna",
        desc: "Acrílico cristal com botões prolongadores em inox.",
      },
      {
        id: "adesivo-jateado-vidros",
        title: "Película Jateada para Divisórias de Vidro",
        category: "Adesivagem",
        desc: "Privacidade técnica com recorte vazado da sua identidade visual.",
      },
    ],
  },
  {
    id: "comercio-loja",
    name: "Loja de Rua, Shopping & Vitrine",
    iconEmoji: "🛍️",
    badge: "Alta Atração de Clientes",
    description: "Foco total em visibilidade, destaque de marca e iluminação noturna impactante.",
    suggestedItems: [
      {
        id: "fachada-acm-luminoso",
        title: "Fachada Completa em ACM com Iluminação LED",
        category: "Fachadas",
        desc: "Módulos LED de alta intensidade para destacar sua loja dia e noite.",
        recommended: true,
      },
      {
        id: "letras-caixa-alta-visibilidade",
        title: "Letras Caixa 3D em Alto Relevo com Frontlight",
        category: "Letreiros 3D",
        desc: "Volumetria em aço inox ou acrílico translúcido.",
        recommended: true,
      },
      {
        id: "adesivo-vitrine-promocional",
        title: "Adesivagem de Vitrine & Campanhas UV",
        category: "Vitrines",
        desc: "Vinil polimérico de alta resolução para lançamentos e promoções.",
      },
      {
        id: "totem-calcada",
        title: "Totem Dupla Face para Calçada / Entrada",
        category: "Totens",
        desc: "Estrutura vertical para visualização de motoristas e pedestres.",
      },
    ],
  },
  {
    id: "restaurante-gastronomia",
    name: "Restaurante, Bar & Cafeteria",
    iconEmoji: "🍽️",
    badge: "Gastronomia & Experiência",
    description: "Comunicação visual acolhedora, com iluminação quente e destaque de fachada.",
    suggestedItems: [
      {
        id: "letreiro-led-vintage",
        title: "Letreiro Iluminado em LED Warm / Neon Led",
        category: "Iluminação",
        desc: "Ambiente instagramável e letreiro de fachada convidativo.",
        recommended: true,
      },
      {
        id: "fachada-acm-preto-fosco",
        title: "Fachada em ACM Preto Fosco ou Corten",
        category: "Fachadas",
        desc: "Estilo industrial e moderno com fixação estrutural reforçada.",
        recommended: true,
      },
      {
        id: "menu-board-acrilico",
        title: "Menu Boards & Cardápios Luminosos em Acrílico",
        category: "Displays",
        desc: "Impressão UV direta backlight com troca rápida de informativos.",
      },
      {
        id: "placas-sanitarios-estilizadas",
        title: "Sinalização Temática de Ambientes & Sanitários",
        category: "Sinalização",
        desc: "Corte milimétrico a laser de acrílico ou PVC estilizado.",
      },
    ],
  },
  {
    id: "escritorio-corporativo",
    name: "Escritório, Advocacia & Coworking",
    iconEmoji: "⚖️",
    badge: "Corporativo & Autoridade",
    description: "Identidade sóbria, elegante e com materiais nobres como inox e acrílico.",
    suggestedItems: [
      {
        id: "logo-inox-escovado",
        title: "Logomarca em Aço Inox Escovado (Sem Corrosão)",
        category: "Letras Caixa",
        desc: "Durabilidade eterna com brilho acetinado para salas de reunião e entrada.",
        recommended: true,
      },
      {
        id: "painel-acrilico-homenagem",
        title: "Painel em Acrílico com Espaçadores de Inox",
        category: "Usinagem Laser",
        desc: "Transparência pura com impressão UV e acabamento bisotado.",
        recommended: true,
      },
      {
        id: "adesivo-faixa-seguranca",
        title: "Faixas Jateadas Normatizadas para Portas de Vidro",
        category: "Adesivagem",
        desc: "Atendimento às normas de segurança com design corporativo discreto.",
      },
      {
        id: "totem-direcional-interno",
        title: "Totem Direcional & Indicador de Salas",
        category: "Totens",
        desc: "Organização visual para circulação de clientes e equipes.",
      },
    ],
  },
  {
    id: "condominio-predial",
    name: "Condomínio Residencial & Comercial",
    iconEmoji: "🏢",
    badge: "Sinalização & Segurança",
    description: "Projetos robustos, resistentes ao sol e chuva do DF com alta legibilidade.",
    suggestedItems: [
      {
        id: "totem-portaria-led",
        title: "Totem Monumental de Entrada / Portaria",
        category: "Totens",
        desc: "Estrutura em ACM estruturado com iluminação em LED fotocélula.",
        recommended: true,
      },
      {
        id: "placas-viarias-estacionamento",
        title: "Kit de Placas Viárias & Numeração de Vagas",
        category: "Sinalização Viária",
        desc: "Chapas em PS ou Alumínio com película refletiva homologada.",
        recommended: true,
      },
      {
        id: "placas-blocos-portarias",
        title: "Identificação de Blocos em Letras Caixa",
        category: "Letras Caixa",
        desc: "Letras grandes em bloco visíveis a longa distância dia e noite.",
      },
      {
        id: "sinalizacao-emergencia",
        title: "Sinalização de Rota de Fuga & Extintores Fotoluminescente",
        category: "Normas de Bombeiros",
        desc: "Placas técnicas em conformidade com o CBMDF.",
      },
    ],
  },
  {
    id: "industria-galpao-oficina",
    name: "Indústria, Galpão, Oficina & Auto Center",
    iconEmoji: "⚙️",
    badge: "Grande Formato & Durabilidade",
    description: "Sinalização de grande escala, lona reforçada e adesivação de veículos comerciais.",
    suggestedItems: [
      {
        id: "envelopamento-frota",
        title: "Adesivação & Envelopamento de Frotas de Veículos",
        category: "Plotagem",
        desc: "Vinil cast automotivo de alta conformabilidade e proteção UV.",
        recommended: true,
      },
      {
        id: "fachada-lona-frontlight",
        title: "Fachada em Lona Frontlight / Painel Metálico",
        category: "Grandes Formatos",
        desc: "Lona 440g anti-rasgo com estrutura galvanizada de alta extensão.",
        recommended: true,
      },
      {
        id: "sinalizacao-seguranca-epi",
        title: "Placas de Segurança do Trabalho (NR) & Demarcação",
        category: "Sinalização Industrial",
        desc: "Resistência a óleos, calor e atrito operacional.",
      },
      {
        id: "letreiro-galpao-gigante",
        title: "Letreiro Monumental em Chapa Galvanizada",
        category: "Letreiros",
        desc: "Visibilidade em rodovias e avenidas de grande fluxo no DF.",
      },
    ],
  },
  {
    id: "outro-projeto",
    name: "Outro Segmento / Projeto Especial Sob Medida",
    iconEmoji: "✨",
    badge: "Projeto Customizado",
    description: "Desenvolvimento 100% livre conforme o seu briefing ou arquivo de arquitetura.",
    suggestedItems: [
      {
        id: "projeto-especial-cnc",
        title: "Usinagem CNC & Corte Laser Personalizado",
        category: "Especiais",
        desc: "Transformamos arquivos DWG, DXF, PDF ou ideias em peças reais.",
        recommended: true,
      },
      {
        id: "fachada-mista",
        title: "Fachada Mista (ACM + Madeira + Acrílico + LED)",
        category: "Fachadas",
        desc: "Integração multidisciplinar de materiais nobres.",
        recommended: true,
      },
      {
        id: "displays-feiras",
        title: "Estruturas para Feiras, Eventos & Estandes",
        category: "Eventos",
        desc: "Backdrops modulares, totens móveis e balcões promocionais.",
      },
    ],
  },
];
