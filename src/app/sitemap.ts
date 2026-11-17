import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sinalsign.com.br";
  const now = new Date("2026-11-17T00:00:00.000Z");

  return [
    // 1. Rota Principal e Canônica Matriz
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/comunicacao-visual-em-brasilia`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // 2. Os 7 Pilares Verticais Fundamentais
    {
      url: `${baseUrl}/comunicacao-visual-brasilia`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fachadas-em-acm-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/letras-caixa-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/letreiros-luminosos-totens-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressao-digital-uv-dtf-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adesivos-plotagem-veiculos-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressao-banners-lonas-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 3. Os 15 Novos Pilares Especializados (Técnicos & Geotargeting DF)
    {
      url: `${baseUrl}/corte-laser-acrilico-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/logo-acrilico-recepcao-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/placas-acrilico-consultorio-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/placas-ps-pvc-sinalizacao-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sinalizacao-viaria-estacionamentos-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/adesivos-jateados-vidros-divisorias-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/adesivacao-vitrines-tapumes-shoppings-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/backdrops-eventos-congressos-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-aguas-claras`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comunicacao-visual-asa-sul-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comunicacao-visual-asa-norte-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comunicacao-visual-taguatinga-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comunicacao-visual-sudoeste-noroeste-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comunicacao-visual-sia-sof-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-guara-vicente-pires-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-lago-sul-lago-norte-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-ceilandia-samambaia-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-sobradinho-planaltina-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-gama-santa-maria-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/comunicacao-visual-valparaiso-entorno-df`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/quanto-custa-fachada-acm-preco-m2-brasilia`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // 4. Páginas Institucionais Legais
    {
      url: `${baseUrl}/termos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
