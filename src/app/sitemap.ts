import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sinalsign.com.br";
  const now = new Date("2026-11-17T00:00:00.000Z");

  return [
    // 1. Rota Principal e Rota Canônica de Ouro
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

    // 2. Os 7 Pilares Verticais Especializados (Topic Clusters sem Canibalização)
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

    // 3. Páginas Institucionais Legais
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
