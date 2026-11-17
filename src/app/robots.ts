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
          "/corte-laser-acrilico-brasilia",
          "/logo-acrilico-recepcao-brasilia",
          "/placas-acrilico-consultorio-brasilia",
          "/placas-ps-pvc-sinalizacao-brasilia",
          "/sinalizacao-viaria-estacionamentos-df",
          "/adesivos-jateados-vidros-divisorias-df",
          "/adesivacao-vitrines-tapumes-shoppings-df",
          "/backdrops-eventos-congressos-brasilia",
          "/comunicacao-visual-aguas-claras",
          "/comunicacao-visual-asa-sul-brasilia",
          "/comunicacao-visual-asa-norte-brasilia",
          "/comunicacao-visual-taguatinga-df",
          "/comunicacao-visual-sudoeste-noroeste-df",
          "/comunicacao-visual-sia-sof-brasilia",
          "/comunicacao-visual-guara-vicente-pires-df",
          "/comunicacao-visual-lago-sul-lago-norte-df",
          "/comunicacao-visual-ceilandia-samambaia-df",
          "/comunicacao-visual-sobradinho-planaltina-df",
          "/comunicacao-visual-gama-santa-maria-df",
          "/comunicacao-visual-valparaiso-entorno-df",
          "/quanto-custa-fachada-acm-preco-m2-brasilia",
        ],
        disallow: ["/admin/*", "/p/*", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
