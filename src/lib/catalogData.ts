export interface ServiceCatalogItem {
  id: string;
  category: "ACRILICOS" | "PLACAS_PS" | "ADESIVOS" | "FACHADAS_ACM" | "LETRAS_CAIXA" | "IMPRESSAO_UV_DTF" | "LONAS_BANNERS" | "SINALIZACAO_CONDOMINIOS";
  title: string;
  tagline: string;
  description: string;
  thicknessesOrSizes: string[];
  applications: string[];
  materials: string[];
  imagePlaceholderId: string;
  imageUrl?: string;
  recommendedNiches: string[];
}

export const COMPREHENSIVE_SERVICES: ServiceCatalogItem[] = [
  // 1. Acrílicos de Diversos Tamanhos e Espessuras
  {
    id: "acrilicos-especiais",
    category: "ACRILICOS",
    title: "Acrílicos de Precisão (2mm a 20mm)",
    tagline: "Corte laser milimétrico, polimento diamantado e dobragem térmica.",
    description: "Chapas 100% virgens de altíssima transparência ótica (cristal) e chapas espelhadas coloridas. Não amarelada e com acabamento sem rebarbas.",
    thicknessesOrSizes: ["2mm", "3mm", "4mm", "5mm", "8mm", "10mm", "15mm", "20mm"],
    applications: [
      "Logomarcas 3D para Recepção",
      "Placas de Homenagem e Troféus",
      "Púlpitos, Displays e Porta-Folhetos",
      "Painéis de Proteção e Divisórias Corporativas",
      "Urnas, Caixas e Cúpulas de Exposição"
    ],
    materials: ["Acrílico Cristal Puro", "Acrílico Espelhado Dourado/Prata/Rosé", "Acrílico Preto Black Piano", "Acrílico Branco Leitoso Difusor"],
    imagePlaceholderId: "img-acrilicos-laser",
    imageUrl: "/images/products/sinal-sign-comunicacao-acrilicos-de-precisao-01.jpg",
    recommendedNiches: ["Advocacia", "Clínicas Médicas", "Recepções Corporativas", "Eventos"]
  },

  // 2. Chapas em PS (Poliestireno), PVC Expandido & Alveolar
  {
    id: "placas-ps-pvc",
    category: "PLACAS_PS",
    title: "Placas em PS (Poliestireno) & PVC Expandido",
    tagline: "Leveza, rigidez estrutural e excelente custo-benefício.",
    description: "Chapas rígidas de PS de 1mm a 3mm e PVC Expandido de 10mm a 25mm. Ideais para sinalização de segurança, quadros de avisos, placas de rota de fuga e letras corpóreas.",
    thicknessesOrSizes: ["PS 1mm", "PS 2mm", "PS 3mm", "PVC Expandido 10mm", "PVC 15mm", "PVC 20mm"],
    applications: [
      "Sinalização Interna de Segurança e Bombeiros",
      "Placas de Rota de Fuga Fotoluminescentes",
      "Sinalização de Garagens e Estacionamentos",
      "Displays Promocionais de Ponto de Venda (PDV)",
      "Letras em Relevo com Pintura Automotiva PU"
    ],
    materials: ["Poliestireno de Alto Impacto (PSAI)", "PVC Expandido Maciço", "Polionda / Alveolar"],
    imagePlaceholderId: "img-placas-ps-sinalizacao",
    imageUrl: "/images/products/sinal-sign-comunicacao-placas-em-ps-e-pvc-01.jpg",
    recommendedNiches: ["Indústrias", "Condomínios", "Comércio", "Supermercados"]
  },

  // 3. Adesivos de Alta Performance & Recorte Eletrônico
  {
    id: "adesivos-envelopamento",
    category: "ADESIVOS",
    title: "Adesivos Vinil, Jateados & Envelopamento de Frota",
    tagline: "Impressão fotográfica de alta definição e recorte digital de contorno.",
    description: "Linha completa de vinis poliméricos e monoméricos. Desde adesivos jateados para privacidade de vidros até envelopamento total de frotas e vitrines de shopping.",
    thicknessesOrSizes: ["Bobinas de 1.06m a 1.52m", "Recorte Eletrônico sob medida", "Microperfurado Homologado"],
    applications: [
      "Adesivo Jateado para Divisórias de Vidro de Clínicas e Escritórios",
      "Envelopamento de Frotas, Vans, Caminhões e Carros Comerciais",
      "Adesivação de Vitrines e Tapumes de Shopping Center",
      "Adesivo Perfurado com Visão Unidirecional para Veículos e Fachadas",
      "Adesivo de Piso Antiderrapante para Sinalização e Eventos",
      "Rótulos e Etiquetas em Vinil com Meio-Corte"
    ],
    materials: ["Vinil Polimérico Premium", "Vinil Monomérico Promocional", "Película Jateada", "Vinil Blackout"],
    imagePlaceholderId: "img-adesivos-vitrine-frota",
    imageUrl: "/images/products/sinal-sign-comunicacao-adesivos-de-vitrine-e-frotas-01.jpg",
    recommendedNiches: ["Lojas de Shopping", "Clínicas Odontológicas", "Empresas com Frota", "Escritórios"]
  },

  // 4. Fachadas Arquitetônicas em ACM
  {
    id: "fachadas-acm-engenharia",
    category: "FACHADAS_ACM",
    title: "Fachadas Estruturadas em ACM (Alumínio Composto)",
    tagline: "Engenharia de fachadas com dobra tupia e juntas de dilatação siliconadas.",
    description: "Paineis de alumínio com núcleo termoplástico de 3mm e 4mm. Pintura automotiva PVDF resistente ao sol rigoroso e poeira do cerrado de Brasília.",
    thicknessesOrSizes: ["ACM 3mm Núcleo PE", "ACM 3mm Pintura Kynar PVDF", "ACM 4mm Núcleo Mineral Anti-Fogo"],
    applications: [
      "Revestimento Total de Fachadas Comerciais e Prediais",
      "Pórticos de Entrada e Marquises",
      "Pilares e Revestimentos de Vigas",
      "Painéis Ripados e Fachadas com Brises Geométricos"
    ],
    materials: ["Alumínio Composto (ACM)", "Estrutura Tubular Galvanizada (Metalon)", "Selante Estrutural PU 40"],
    imagePlaceholderId: "img-case-send-beauty",
    imageUrl: "/images/products/sinal-sign-comunicacao-fachadas-em-acm-01.jpg",
    recommendedNiches: ["Concessionárias", "Franquias", "Salões Nobres", "Clínicas"]
  },

  // 5. Letras Caixa 3D, Logomarcas & Luminosos
  {
    id: "letras-caixa-3d",
    category: "LETRAS_CAIXA",
    title: "Letras Caixa 3D em Inox, Acrílico & Luminosos LED",
    tagline: "Profundidade escultural, corte computadorizado e iluminação noturna IP68.",
    description: "Fabricação artesanal e industrial de logomarcas em relevo com laterais soldadas e polidas. Opções com iluminação direta ou efeito Halo (retroiluminação suave).",
    thicknessesOrSizes: ["Relevo de 2cm a 20cm de profundidade", "Letras de 10cm até 2.50m de altura"],
    applications: [
      "Fachadas Noturnas Iluminadas com Módulos LED",
      "Letras em Aço Inox Escovado (Sem ferrugem)",
      "Logomarcas em Acrílico Dourado Espelhado para Recepção",
      "Luminosos Circulares (Blade Signs) Dupla Face",
      "Painéis Backlight com Lona Translúcida Iluminada"
    ],
    materials: ["Aço Inox 304 Escovado/Polido", "Acrílico Cristal e Difusor", "Galvanizado Pintado PU", "Módulos LED IP68 Samsung/Osram"],
    imagePlaceholderId: "img-case-resende-advocacia",
    imageUrl: "/images/products/sinal-sign-comunicacao-letras-caixa-3d-01.jpg",
    recommendedNiches: ["Boutiques", "Consultórios", "Hotéis", "Restaurantes"]
  },

  // 6. Impressão Digital UV Direta & Tecnologia DTF
  {
    id: "impressao-uv-dtf",
    category: "IMPRESSAO_UV_DTF",
    title: "Impressão UV Rígida de Alta Resolução & DTF",
    tagline: "Cura UV instantânea em qualquer substrato sem solvente.",
    description: "Impressão digital direta sobre chapas rígidas de acrílico, MDF, vidro, alumínio e PS. Tecnologia DTF e UV DTF para adesivos sem fundo de alta aderência.",
    thicknessesOrSizes: ["Resolução fotográfica até 1440 DPI", "Impressão direta até 50mm de espessura de substrato"],
    applications: [
      "Impressão Direta em Chapas de PS e Acrílico",
      "Adesivos UV DTF com Verniz Localizado de Alto Relevo",
      "Quadros Decorativos em Vidro e Acrílico",
      "Placas de Patrimônio e Etiquetas Industriais Invioláveis"
    ],
    materials: ["Tintas UV com Cura LED", "Verniz de Proteção Gloss", "Filme DTF"],
    imagePlaceholderId: "img-impressao-uv-direta",
    imageUrl: "/images/products/sinal-sign-comunicacao-impressao-uv-e-dtf-01.jpg",
    recommendedNiches: ["Comunicação Visual Premium", "Arquitetos de Interiores", "Brindes Corporativos"]
  },

  // 7. Lonas Reforçadas, Banners & Faixas
  {
    id: "lonas-banners",
    category: "LONAS_BANNERS",
    title: "Lonas Frontlight 440g, Banners & Mega Banners",
    tagline: "Solda eletrônica de alta resistência e ilhós inoxidáveis.",
    description: "Lonas vinílicas tramadas de alta densidade resistentes a ventos fortes. Acabamento profissional com reforço perimetral, bastões de madeira nobre ou estruturas metálicas esticadas.",
    thicknessesOrSizes: ["Lona 440g Fosca e Brilho", "Lona 280g Promocional", "Lona Ortopoly", "Mega Banners sem Emenda até 3.20m"],
    applications: [
      "Banners Roll-Up Retráteis para Eventos e Congressos",
      "Lonas Esticadas para Painéis Frontlight e Outdoors",
      "Faixas Promocionais de Inauguração e Venda",
      "Lonas Backlight Translúcidas para Painéis Iluminados",
      "Painéis de Fundo de Palco (Backdrops) para Coletivas e Fotos"
    ],
    materials: ["Lona Trama 500x500", "Ilhós com Proteção Anticorrosiva", "Solda Térmica de Frequência"],
    imagePlaceholderId: "img-lonas-mega-banners",
    imageUrl: "/images/products/sinal-sign-comunicacao-lonas-e-banners-01.jpg",
    recommendedNiches: ["Congressos no Centro de Convenções", "Concessionárias", "Imobiliárias", "Comércio"]
  },

  // 8. Totens, Sinalização Predial & Condomínios no DF
  {
    id: "totens-condominios",
    category: "SINALIZACAO_CONDOMINIOS",
    title: "Totens Monumentais, Pórticos & Sinalização Predial",
    tagline: "Estruturas de solo chumbadas e projetos arquitetônicos completos para condomínios.",
    description: "Sinalização imponente para a entrada de edifícios residenciais, comerciais, hospitais e condomínios fechados em Brasília. Chassi de alta resistência contra rajadas de vento.",
    thicknessesOrSizes: ["Totens de 2.00m até 8.00m de altura", "Sapatas com chumbadores químicos"],
    applications: [
      "Totens Monolíticos Dupla Face Iluminados na Entrada",
      "Sinalização de Blocos, Torres e Garagens Subterrâneas",
      "Placas Direcionais em Vidro Temperado com Prolongadores de Inox",
      "Numeração Predial Monumental em Inox Relevo 3D",
      "Quadro de Avisos e Diretórios em Acrílico com Chave"
    ],
    materials: ["Aço Estrutural Viga U/I", "Revestimento em ACM", "Iluminação LED de Balizamento"],
    imagePlaceholderId: "img-case-carlton-tower",
    imageUrl: "/images/products/sinal-sign-comunicacao-totens-monumentais-01.jpg",
    recommendedNiches: ["Condomínios Residenciais", "Centros Clínicos", "Edifícios Comerciais", "Shoppings"]
  }
];

export interface ClientPortfolioCase {
  id: string;
  clientName: string;
  niche: string;
  cityRegion: string;
  projectType: string;
  materialsUsed: string[];
  dimensions: string;
  highlights: string;
  imagePlaceholderId: string;
  imageUrl?: string;
}

export const CLIENT_PORTFOLIO_CASES: ClientPortfolioCase[] = [
  {
    id: "cartorio-colorado",
    clientName: "Cartório Colorado",
    niche: "Serviços Notariais & Registrais",
    cityRegion: "Grande Colorado / Sobradinho - DF",
    projectType: "Letras Caixa Monolíticas com Logo Iluminada em LED",
    materialsUsed: ["Letras Bloco em Aço com Pintura Eletrostática", "Face em Acrílico Difusor", "Módulos LED IP68 High Lumen"],
    dimensions: "Extensão frontal com logo caixa de 1.80m",
    highlights: "Tipografia monumental iluminada e símbolo geométrico tridimensional instalados sobre estrutura tubular de fechamento em vidro.",
    imagePlaceholderId: "img-portfolio-cartorio-colorado",
    imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-01.jpeg"
  },
  {
    id: "send-beauty",
    clientName: "Send Beauty Cosméticos",
    niche: "Salão de Beleza & Estética",
    cityRegion: "Águas Claras - DF",
    projectType: "Fachada Arquitetônica em ACM + Letras Caixa Iluminadas",
    materialsUsed: ["ACM 3mm PVDF Cinza Grafite", "Letras em Acrílico Leitoso Difusor", "Módulos LED IP68", "Blade Sign Lateral Dupla Face"],
    dimensions: "22.50m x 1.60m (36.0 m²)",
    highlights: "Fachada com cápsula moldada, iluminação uniforme noturna e acabamento de alto padrão visível de longa distância.",
    imagePlaceholderId: "img-portfolio-send-beauty",
    imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-22.jpeg"
  },
  {
    id: "resende-advocacia",
    clientName: "Resende Advocacia e Consultoria",
    niche: "Escritório de Advocacia",
    cityRegion: "Asa Sul - DF",
    projectType: "Logomarca em Acrílico Dourado Espelhado sobre Ripado",
    materialsUsed: ["Acrílico Espelhado Dourado 5mm Laser", "Fixação Invisível 3M VHB", "Acrílico Cristal 10mm de Base"],
    dimensions: "2.40m x 0.90m",
    highlights: "Corte a laser de altíssima precisão com arestas cristalinas sem distorção reflexiva, instalado em painel de madeira nobre.",
    imagePlaceholderId: "img-portfolio-resende-advocacia",
    imageUrl: "/images/servicos-reais/logo-acrilico/sinal-sign-comunicacao-logo-em-acrilico-21.jpeg"
  },
  {
    id: "carlton-tower",
    clientName: "Carlton Tower",
    niche: "Centro Empresarial & Hoteleiro",
    cityRegion: "Setor Hoteleiro Norte - DF",
    projectType: "Totem Monumental de Solo & Letras Caixa em Relevo",
    materialsUsed: ["Aço Inox Escovado 304", "ACM Preto Fosco", "Letras Caixa em Relevo Iluminadas"],
    dimensions: "3.80m de altura x 1.40m de largura",
    highlights: "Totem monolítico com base estruturada e tipografia executiva retroiluminada para identificação predial nobre.",
    imagePlaceholderId: "img-portfolio-carlton-tower",
    imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-19.jpeg"
  },
  {
    id: "kubitschek-plaza",
    clientName: "Kubitschek Plaza Hotel",
    niche: "Hotelaria & Eventos Nobres",
    cityRegion: "Setor Hoteleiro Norte - DF",
    projectType: "Letras Caixa em Aço Inox Escovado & Placas em Acrílico",
    materialsUsed: ["Aço Inox 304 Escovado", "Acrílico Cristal 10mm Bisotado", "Fixadores Prolongadores Metálicos"],
    dimensions: "Identificação de fachada e portaria principal",
    highlights: "Padrão hoteleiro 5 estrelas em aço inoxidável com resistência total à oxidação e acabamento escovado refinado.",
    imagePlaceholderId: "img-portfolio-kubitschek-plaza",
    imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-24.jpeg"
  },
  {
    id: "st-paul-plaza",
    clientName: "St. Paul Plaza Hotel",
    niche: "Hotelaria & Gastronomia Corporativa",
    cityRegion: "Setor Hoteleiro Sul - DF",
    projectType: "Totem Monumental Arquitetônico & Letreiros Caixa",
    materialsUsed: ["Estrutura em Metalon Galvanizado", "ACM Naval Tratado", "Iluminação LED Frontlight"],
    dimensions: "4.20m de altura x 1.60m de largura",
    highlights: "Totem vertical monumental com alta visibilidade viária no Setor Hoteleiro e letreiros em relevo.",
    imagePlaceholderId: "img-portfolio-st-paul",
    imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-12.jpeg"
  },
  {
    id: "abdi",
    clientName: "ABDI (Agência Brasileira de Desenvolvimento Industrial)",
    niche: "Órgãos Governamentais & Indústria",
    cityRegion: "Setor Bancário Norte - DF",
    projectType: "Letras Caixa & Logomarca em Acrílico de Alta Precisão",
    materialsUsed: ["Acrílico Virgem 10mm Corte Laser", "Pintura Técnica Pantone Oficial", "Gabarito de Alinhamento Milimétrico"],
    dimensions: "Painel institucional com 3.20m de extensão",
    highlights: "Fidelidade cromática rigorosa do padrão governamental com corte a laser sem arestas e fixação oculta.",
    imagePlaceholderId: "img-portfolio-abdi",
    imageUrl: "/images/servicos-reais/letras-acrilico/sinal-sign-comunicacao-letras-em-acrilico-08.jpeg"
  },
  {
    id: "cris-barros",
    clientName: "Cris Barros Boutique",
    niche: "Moda & Varejo de Luxo",
    cityRegion: "Brasília - DF",
    projectType: "Letras Caixa Elegantes com Acabamento Premium",
    materialsUsed: ["Latão/Inox Polido Micro-escovado", "Pinos Roscados Invisíveis", "Fixação sobre Mármore"],
    dimensions: "Tipografia minimalista com 25cm de altura",
    highlights: "Acabamento requintado para loja de alto luxo, combinando discrição, requinte metálico e sombra projetada natural.",
    imagePlaceholderId: "img-portfolio-cris-barros",
    imageUrl: "/images/servicos-reais/letra-caixa/sinal-sign-comunicacao-letra-caixa-10.jpeg"
  },
  {
    id: "vila-das-flores",
    clientName: "Residencial Vila das Flores",
    niche: "Condomínio Residencial Nobre",
    cityRegion: "Park Way / Noroeste - DF",
    projectType: "Totem Estruturado de Entrada & Identificação de Portaria",
    materialsUsed: ["ACM Amadeirado e Preto Fosco", "Letras em Relevo Vazado", "Refletores LED Embutidos"],
    dimensions: "3.20m x 1.20m",
    highlights: "Totem monumental de condomínio integrado ao paisagismo, proporcionando sofisticação e localização imediata aos visitantes.",
    imagePlaceholderId: "img-portfolio-vila-flores",
    imageUrl: "/images/servicos-reais/totem/sinal-sign-comunicacao-totem-06.jpeg"
  }
];
