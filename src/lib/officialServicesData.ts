export interface OfficialServiceCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  imageUrl: string;
  quotePrompt: string;
  photosCount: number;
  realPhotos: string[];
}

import manifest from "./realPortfolioManifest.json";

interface ManifestItem {
  originalName: string;
  slug: string;
  count: number;
  cover: string;
  images: string[];
}

const typedManifest = manifest as Record<string, ManifestItem>;

export const OFFICIAL_SERVICES_18: OfficialServiceCategory[] = [
  {
    id: "fachada-acm",
    name: "Fachada em ACM",
    badge: "Engenharia de Fachadas",
    description: "Revestimento estruturado em alumínio composto (ACM 3mm e 4mm) com dobra tupia, vedação em PU estrutural e alta resistência ao sol e intempéries do DF.",
    imageUrl: typedManifest["fachada-acm"]?.cover || "/images/products/fachadas-acm-engenharia.jpg",
    quotePrompt: "Fachada em ACM Personalizada",
    photosCount: typedManifest["fachada-acm"]?.count || 13,
    realPhotos: typedManifest["fachada-acm"]?.images || [],
  },
  {
    id: "letra-caixa",
    name: "Letra Caixa",
    badge: "Identidade 3D & Relevo",
    description: "Letras volumétricas usinadas em aço inox escovado/polido, acrílico nobre e PVC expandido com pintura automotiva e iluminação LED frontal ou backlight.",
    imageUrl: typedManifest["letra-caixa"]?.cover || "/images/products/letras-caixa-3d.jpg",
    quotePrompt: "Letras Caixa em Relevo",
    photosCount: typedManifest["letra-caixa"]?.count || 31,
    realPhotos: typedManifest["letra-caixa"]?.images || [],
  },
  {
    id: "logo-acrilico",
    name: "Logo em Acrílico",
    badge: "Recepção Nobre",
    description: "Logomarcas corporativas tridimensionais usinadas a laser aplicadas sobre paredes lisas ou painéis ripados com fixação invisível de altíssima elegância.",
    imageUrl: typedManifest["logo-acrilico"]?.cover || "/images/products/acrilicos-especiais.jpg",
    quotePrompt: "Logomarca em Acrílico para Recepção",
    photosCount: typedManifest["logo-acrilico"]?.count || 24,
    realPhotos: typedManifest["logo-acrilico"]?.images || [],
  },
  {
    id: "letras-acrilico",
    name: "Letras em Acrílico",
    badge: "Precisão & Brilho Laser",
    description: "Corte a laser milimétrico com arestas polidas diamantadas em acrílicos espelhados (Dourado, Prata, Rosé Gold) e acrílicos virgens coloridos.",
    imageUrl: typedManifest["letras-acrilico"]?.cover || "/images/products/acrilicos-especiais.jpg",
    quotePrompt: "Letras em Acrílico Laser",
    photosCount: typedManifest["letras-acrilico"]?.count || 11,
    realPhotos: typedManifest["letras-acrilico"]?.images || [],
  },
  {
    id: "placas-acrilico",
    name: "Placas em Acrílico",
    badge: "Corte Laser CNC",
    description: "Acrílico cristal virgem polido com bisotê e chapas espelhadas, fixação sofisticada por prolongadores em aço inox para recepções e consultórios.",
    imageUrl: typedManifest["placas-acrilico"]?.cover || "/images/products/acrilicos-especiais.jpg",
    quotePrompt: "Placas em Acrílico com Prolongadores",
    photosCount: typedManifest["placas-acrilico"]?.count || 2,
    realPhotos: typedManifest["placas-acrilico"]?.images || [],
  },
  {
    id: "totem",
    name: "Totem",
    badge: "Monumento de Solo",
    description: "Estruturas verticais de grande porte com chassi estrutural galvanizado, revestimento em ACM e iluminação LED de alta potência para portarias e entradas.",
    imageUrl: typedManifest["totem"]?.cover || "/images/products/totens-condominios.jpg",
    quotePrompt: "Totem Monumental de Solo",
    photosCount: typedManifest["totem"]?.count || 15,
    realPhotos: typedManifest["totem"]?.images || [],
  },
  {
    id: "adesivo-vinil",
    name: "Adesivos Vinil de Alta Qualidade",
    badge: "Impressão Fotográfica",
    description: "Vinis poliméricos com impressão digital UV de alta resolução e laminação de proteção contra raios solares, umidade e produtos químicos de limpeza.",
    imageUrl: typedManifest["adesivo-vinil"]?.cover || "/images/products/adesivos-envelopamento.jpg",
    quotePrompt: "Adesivos Vinil de Alta Qualidade",
    photosCount: typedManifest["adesivo-vinil"]?.count || 8,
    realPhotos: typedManifest["adesivo-vinil"]?.images || [],
  },
  {
    id: "adesivo-recortado",
    name: "Adesivo Recortado",
    badge: "Plotter de Precisão",
    description: "Adesivos vinílicos recortados eletronicamente sem fundo para aplicação direta em vitrines, vidros temperados, veículos e sinalizações internas.",
    imageUrl: typedManifest["adesivo-recortado"]?.cover || "/images/products/adesivos-envelopamento.jpg",
    quotePrompt: "Adesivo Recortado Eletrônico",
    photosCount: typedManifest["adesivo-recortado"]?.count || 1,
    realPhotos: typedManifest["adesivo-recortado"]?.images || [],
  },
  {
    id: "plotagem",
    name: "Plotagem",
    badge: "Envelopamento & Frotas",
    description: "Plotagem e envelopamento de frotas comerciais, vitrines de shopping centers, divisórias de vidro corporativas e personalização de superfícies.",
    imageUrl: typedManifest["plotagem"]?.cover || "/images/products/adesivos-envelopamento.jpg",
    quotePrompt: "Plotagem de Veículos e Vitrines",
    photosCount: typedManifest["plotagem"]?.count || 4,
    realPhotos: typedManifest["plotagem"]?.images || [],
  },
  {
    id: "faixa-fachada",
    name: "Faixa de Fachada",
    badge: "Visibilidade Comercial",
    description: "Faixas e painéis em lona tensionada com estrutura metálica perimetral reforçada para comunicação comercial de alto impacto visual e rápida instalação.",
    imageUrl: typedManifest["faixa-fachada"]?.cover || "/images/products/fachadas-acm-engenharia.jpg",
    quotePrompt: "Faixa e Painel de Fachada",
    photosCount: typedManifest["faixa-fachada"]?.count || 7,
    realPhotos: typedManifest["faixa-fachada"]?.images || [],
  },
  {
    id: "lona-impressa",
    name: "Lona Impressa",
    badge: "Impressão Grande Formato",
    description: "Lonas frontlight e backlight com trama reforçada, acabamentos com bainha e ilhós reforçado, ideais para empenas, outdoors e eventos.",
    imageUrl: typedManifest["lona-impressa"]?.cover || "/images/products/lonas-banners.jpg",
    quotePrompt: "Lona Impressa Grande Formato",
    photosCount: typedManifest["lona-impressa"]?.count || 3,
    realPhotos: typedManifest["lona-impressa"]?.images || [],
  },
  {
    id: "banner",
    name: "Banner",
    badge: "Comunicação Ágil",
    description: "Banners promocionais em lona frontlight 440g com acabamento em madeira e cordão ou ilhós inoxidável para eventos, cursos e lançamentos.",
    imageUrl: typedManifest["banner"]?.cover || "/images/products/lonas-banners.jpg",
    quotePrompt: "Banners Promocionais em Lona",
    photosCount: typedManifest["banner"]?.count || 4,
    realPhotos: typedManifest["banner"]?.images || [],
  },
  {
    id: "backdrop",
    name: "BackDrop",
    badge: "Painel de Fundo & Palco",
    description: "Painéis de fundo de palco e estandes para coletivas de imprensa, premiações, sessões de fotos e congressos no Centro de Convenções do DF.",
    imageUrl: typedManifest["backdrop"]?.cover || "/images/products/lonas-banners.jpg",
    quotePrompt: "BackDrop para Eventos e Fotos",
    photosCount: typedManifest["backdrop"]?.count || 5,
    realPhotos: typedManifest["backdrop"]?.images || [],
  },
  {
    id: "balcao-personalizado",
    name: "Balcão Personalizado",
    badge: "Ponto de Atendimento",
    description: "Revestimento em ACM, acrílico moldado ou adesivação fosca/brilho para balcões de recepção, clínicas, estandes e feiras de negócios.",
    imageUrl: typedManifest["balcao-personalizado"]?.cover || "/images/products/fachadas-acm-engenharia.jpg",
    quotePrompt: "Balcão Personalizado",
    photosCount: typedManifest["balcao-personalizado"]?.count || 1,
    realPhotos: typedManifest["balcao-personalizado"]?.images || [],
  },
  {
    id: "display-acrilico",
    name: "Display em Acrílico",
    badge: "Expositores & PDV",
    description: "Porta-folhetos, displays de mesa, sinalizadores de cardápio e caixas expositoras dobradas termicamente sem emendas aparentes.",
    imageUrl: typedManifest["display-acrilico"]?.cover || "/images/products/acrilicos-especiais.jpg",
    quotePrompt: "Display em Acrílico sob Medida",
    photosCount: typedManifest["display-acrilico"]?.count || 4,
    realPhotos: typedManifest["display-acrilico"]?.images || [],
  },
  {
    id: "projetos-acrilico",
    name: "Projetos em Acrílico Sob Demanda",
    badge: "Peças Especiais Sob Medida",
    description: "Desenvolvimento de peças exclusivas, cúpulas de proteção, urnas, troféus corporativos e maquetes conforme desenho técnico ou arquivo vetorizado.",
    imageUrl: typedManifest["projetos-acrilico"]?.cover || "/images/products/acrilicos-especiais.jpg",
    quotePrompt: "Projetos em Acrílico Sob Demanda",
    photosCount: typedManifest["projetos-acrilico"]?.count || 4,
    realPhotos: typedManifest["projetos-acrilico"]?.images || [],
  },
  {
    id: "identificacao-comercial",
    name: "Identificação para Hotéis e Comércio",
    badge: "Sinalização de Ambientes",
    description: "Placas de quartos, sinalização de andares, diretórios executivos, placas táteis e sinalização direcional harmônica com o projeto arquitetônico.",
    imageUrl: typedManifest["identificacao-comercial"]?.cover || "/images/products/placas-ps-pvc.jpg",
    quotePrompt: "Sinalização para Hotéis e Comércio",
    photosCount: typedManifest["identificacao-comercial"]?.count || 3,
    realPhotos: typedManifest["identificacao-comercial"]?.images || [],
  },
  {
    id: "quadros-personalizados",
    name: "Quadros Personalizados",
    badge: "Decoração Corporativa",
    description: "Impressão UV direta com cura LED em vidro, acrílico cristal ou telas de altíssima resolução para recepções de escritórios, consultórios e residências.",
    imageUrl: typedManifest["quadros-personalizados"]?.cover || "/images/products/impressao-uv-dtf.jpg",
    quotePrompt: "Quadros Personalizados em Vidro/Acrílico",
    photosCount: typedManifest["quadros-personalizados"]?.count || 6,
    realPhotos: typedManifest["quadros-personalizados"]?.images || [],
  },
];

// Compatibilidade retroativa
export const OFFICIAL_SERVICES_17 = OFFICIAL_SERVICES_18;
