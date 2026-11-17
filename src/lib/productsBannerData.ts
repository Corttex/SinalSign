export interface ProductBannerItem {
  id: string;
  categoryBadge: string;
  title: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  quoteKeyword: string;
  featured?: boolean;
}

export const PRODUCT_BANNER_CATALOG: ProductBannerItem[] = [
  {
    id: "fachadas-acm",
    categoryBadge: "Engenharia de Fachadas",
    title: "Fachadas em ACM Personalizadas",
    description: "Desenvolvimento e fabricação em ACM 3mm e 4mm com dobra tupia e juntas estruturais siliconadas, garantindo presença visual marcante e durabilidade contra o sol rigoroso do DF.",
    bullets: ["Acabamento profissional", "Estrutura metálica galvanizada", "Pintura PVDF de alta resistência"],
    imageUrl: "/images/products/fachadas-acm-engenharia.jpg",
    quoteKeyword: "Fachada em ACM",
    featured: true,
  },
  {
    id: "letras-caixa",
    categoryBadge: "Identidade Tridimensional",
    title: "Letras Caixa em Alto Relevo",
    description: "Letras caixa e logotipos volumétricos que adicionam profundidade e destaque vital ao seu projeto. Fabricação computadorizada com acabamento de alto padrão.",
    bullets: ["Aço Inox escovado e polido", "Acrílico espelhado (Dourado, Prata, Rosé)", "PVC Expandido e pintura automotiva PU"],
    imageUrl: "/images/products/letras-caixa-3d.jpg",
    quoteKeyword: "Letras Caixa 3D",
    featured: true,
  },
  {
    id: "acrilicos-especiais",
    categoryBadge: "Usinagem Laser CNC",
    title: "Acrílicos de Precisão (Diversos Tamanhos)",
    description: "Chapas 100% virgens de 2mm a 20mm de espessura. Perfeito para logotipos espelhados em recepções, púlpitos, placas de homenagem e displays corporativos.",
    bullets: ["Espessuras de 2mm até 20mm", "Acrílico Cristal Puro e Espelhados", "Bordas bisotadas sem rebarbas"],
    imageUrl: "/images/products/acrilicos-especiais.jpg",
    quoteKeyword: "Acrílicos e Placas",
  },
  {
    id: "led-iluminados",
    categoryBadge: "Iluminação Noturna IP68",
    title: "Projetos Iluminados em LED",
    description: "Luminosos e backlight que garantem visibilidade e impacto noturno com eficiência energética. Módulos de LED blindados para lojas, clínicas e empresas.",
    bullets: ["Efeito Halo / Backlight indireto", "Face difusa em acrílico leitoso", "Fontes dimensionadas de longa vida útil"],
    imageUrl: "/images/products/letras-caixa-3d.jpg",
    quoteKeyword: "Luminosos LED",
  },
  {
    id: "adesivagem-frotas",
    categoryBadge: "Publicidade Móvel",
    title: "Adesivagem de Frotas Comerciais",
    description: "Torne seus veículos comerciais facilmente reconhecíveis no trânsito de Brasília. Vinil automotivo com impressão fotográfica e laminação protetora UV.",
    bullets: ["Envelopamento total e parcial", "Vans, caminhões e utilitários", "Remoção sem danos à pintura"],
    imageUrl: "/images/products/adesivos-envelopamento.jpg",
    quoteKeyword: "Adesivagem de Frota",
  },
  {
    id: "adesivacao-vitrine",
    categoryBadge: "Visual Merchandising",
    title: "Adesivação de Vitrine & Jateados",
    description: "A melhor forma de chamar a atenção do público em shopping centers e lojas de rua, além de películas jateadas para privacidade em consultórios e salas de reunião.",
    bullets: ["Películas jateadas de privacidade", "Vinil microperfurado homologado", "Impressão de alta definição e recorte de contorno"],
    imageUrl: "/images/products/adesivos-envelopamento.jpg",
    quoteKeyword: "Adesivos de Vitrine e Jateados",
  },
  {
    id: "placas-ps-sinalizacao",
    categoryBadge: "Sinalização Interna & Externa",
    title: "Placas em PS (Poliestireno) & Sinalização",
    description: "Sinalização corporativa, industrial, de eventos e segurança. Placas rígidas em PS de 1mm a 3mm com impressão UV direta e alta resistência a intempéries.",
    bullets: ["Rotas de fuga e sinalização de emergência", "Placas com prolongadores em inox", "Sinalização de estacionamentos e garagens"],
    imageUrl: "/images/products/placas-ps-pvc.jpg",
    quoteKeyword: "Placas em PS e Sinalização",
  },
  {
    id: "paineis-totens",
    categoryBadge: "Monumentos de Solo",
    title: "Painéis & Totens Personalizados",
    description: "Estruturas monumentais monolíticas para destacar a identidade visual na entrada de empresas, condomínios residenciais e centros comerciais no DF.",
    bullets: ["Chassi de aço estrutural chumbado", "Revestimento em ACM e iluminação na base", "Resistente a ventos fortes"],
    imageUrl: "/images/products/totens-condominios.jpg",
    quoteKeyword: "Totens e Painéis",
  },
  {
    id: "impressao-uv-dtf",
    categoryBadge: "Tecnologia Gráfica Direta",
    title: "Impressão Digital, UV & DTF",
    description: "Cura ultravioleta instantânea diretamente sobre acrílico, vidro, MDF e metal. Tecnologia UV DTF para relevos sem fundo com máxima aderência.",
    bullets: ["Impressão em rígidos até 50mm", "Verniz localizado de alto brilho", "Resolução fotográfica até 1440 DPI"],
    imageUrl: "/images/products/impressao-uv-dtf.jpg",
    quoteKeyword: "Impressão UV e DTF",
  },
  {
    id: "banners-lonas",
    categoryBadge: "Comunicação Promocional",
    title: "Banners Roll-Up & Lonas Frontlight",
    description: "Aumente a visibilidade da sua marca em eventos, congressos e pontos de venda com lonas vinílicas 440g reforçadas e acabamento impecável.",
    bullets: ["Lonas com solda eletrônica e ilhós", "Banners retráteis roll-up", "Backdrops para fotos e coletivas"],
    imageUrl: "/images/products/lonas-banners.jpg",
    quoteKeyword: "Banners e Lonas",
  },
  {
    id: "sinalizacao-viaria",
    categoryBadge: "Infraestrutura & Trânsito",
    title: "Sinalização Viária Horizontal & Polos Geradores",
    description: "Sinalização viária completa para condomínios, indústrias, polos geradores de tráfego e estacionamentos de shoppings, com total adequação às normas técnicas.",
    bullets: ["Pintura refletiva e antiderrapante de faixas", "Tachões, tachas e balizadores auxiliares", "Sinalização horizontal e vertical regulamentar"],
    imageUrl: "/images/products/sinalizacao-viaria.jpg",
    quoteKeyword: "Sinalização Viária e Polos",
  },
];

