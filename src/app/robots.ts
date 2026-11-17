import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sinalsign.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/p/*", // Proteção: propostas comerciais privadas /p/[token] NUNCA indexadas
        ],
      },
      // Permissão explícita para os crawlers de IA (GEO Search / Perplexity / SearchGPT / Gemini)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: [
          "/",
          "/comunicacao-visual-em-brasilia",
          "/comunicacao-visual-brasilia",
          "/fachadas-em-acm-brasilia",
          "/letras-caixa-brasilia",
          "/letreiros-luminosos-totens-brasilia",
          "/impressao-digital-uv-dtf-brasilia",
          "/adesivos-plotagem-veiculos-brasilia",
          "/impressao-banners-lonas-brasilia",
        ],
        disallow: ["/admin/*", "/p/*", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
