import { Metadata } from "next";

export const siteConfig = {
  name: "Sinal Sign Comunicação Visual",
  legalName: "Sinal Sign Fachadas e Luminosos LTDA",
  description:
    "Comunicação visual de alta engenharia em Brasília e Entorno. Fabricação própria de Fachadas em ACM, Letras Caixa em Inox e Acrílico, Impressão UV, DTF e Projetos Especiais.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sinalsign.com.br",
  telephone: "+55-61-98485-3485",
  whatsapp: "5561984853485",
  whatsappFormatted: "(61) 98485-3485",
  address: {
    streetAddress: "Distrito Federal e Entorno",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70000-000",
    addressCountry: "BR",
  },
  geo: {
    latitude: -15.7942,
    longitude: -47.8822,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  serviceAreas: [
    "Brasília",
    "Asa Sul",
    "Asa Norte",
    "Águas Claras",
    "Taguatinga",
    "Sudoeste",
    "Noroeste",
    "Lago Sul",
    "Lago Norte",
    "Ceilândia",
    "Vicente Pires",
    "Guará",
    "Valparaíso de Goiás",
  ],
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Fachadas em ACM, Letra Caixa & Impressão UV em Brasília`;

  const metaDesc = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  const defaultKeywords = [
    "comunicação visual brasília",
    "fachadas acm brasília",
    "letra caixa águas claras",
    "luminoso brasília",
    "acrílico espelhado brasília",
    "adesivação de vitrine df",
    "totem comercial df",
    "impressão uv df",
    "painel ripado acm",
  ];

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// JSON-LD estruturado LocalBusiness + AggregateRating + Service para SEO Técnico Local no DF
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    priceRange: "$$",
    image: `${siteConfig.url}/og-image.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "128",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo Oficial de Soluções de Comunicação Visual",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fachadas em ACM de Alta Resistência",
            description: "Revestimento em chapas de alumínio composto 3mm e 4mm com dobra tupia e estrutura galvanizada tratada.",
            url: `${siteConfig.url}/fachadas-em-acm-brasilia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Letras Caixa 3D em Aço Inox e Acrílico",
            description: "Corte computadorizado a laser de precisão com acabamento polido, escovado e retroiluminação LED.",
            url: `${siteConfig.url}/letras-caixa-brasilia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Letreiros Luminosos e Totens de Solo",
            description: "Monolitos de entrada para condomínios e fachadas backlight com módulos LED IP68 High Lumen.",
            url: `${siteConfig.url}/letreiros-luminosos-totens-brasilia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Impressão Digital UV e Tecnologia DTF",
            description: "Impressão direta de alta definição e cura ultravioleta sobre acrílico, vidro, PS e adesivos UV DTF.",
            url: `${siteConfig.url}/impressao-digital-uv-dtf-brasilia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adesivos Personalizados e Plotagem de Veículos",
            description: "Envelopamento de frotas comerciais, adesivo jateado com recorte para escritórios e vitrines no DF.",
            url: `${siteConfig.url}/adesivos-plotagem-veiculos-brasilia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Impressão de Banners e Lonas Reforçadas",
            description: "Lonas frontlight e backlight 440g com solda eletrônica e ilhós inoxidável para eventos e comércio.",
            url: `${siteConfig.url}/impressao-banners-lonas-brasilia`,
          },
        },
      ],
    },
  };
}
