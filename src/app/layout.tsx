import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { buildMetadata, getLocalBusinessSchema } from "@/lib/seo";
import { AdsAnalytics } from "@/components/analytics/AdsAnalytics";
import { SitePreloader } from "@/components/portal/SitePreloader";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Fonte robusta, geométrica e encorpada para Títulos e Headlines
const montserratHeading = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  ...buildMetadata({}),
  icons: {
    icon: [
      { url: "/brand/Icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/Icon.svg",
    apple: "/brand/Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = JSON.stringify(getLocalBusinessSchema());

  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/brand/Icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/brand/Icon.svg" />
        {/* Schema.org estruturado em JSON-LD para SEO Local de Alto Impacto */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
      </head>
      <body
        className={`${jakartaSans.variable} ${montserratHeading.variable} ${jetbrainsMono.variable} antialiased font-sans bg-[#06070A] text-[#F4F4F6] relative`}
      >
        {/* Preloader com Logo P&B se transformando em Colorida */}
        <SitePreloader />

        {/* Camada 1 & 2: Organic Mesh Background com a Paleta Oficial Sinal Sign */}
        <div className="ambient-mesh">
          {/* Azul Royal Sinal Sign #303590 */}
          <div
            className="ambient-blob w-[580px] h-[580px] bg-[#303590]/40 -top-20 -left-20"
            style={{ animationDuration: "25s" }}
          />
          {/* Ciano #85BCD7 */}
          <div
            className="ambient-blob w-[500px] h-[500px] bg-[#85BCD7]/25 top-1/4 -right-10"
            style={{ animationDuration: "28s" }}
          />
          {/* Magenta #E06196 */}
          <div
            className="ambient-blob w-[450px] h-[450px] bg-[#E06196]/20 bottom-1/3 left-1/5"
            style={{ animationDuration: "22s" }}
          />
          {/* Dourado / Amarelo #F7E540 */}
          <div
            className="ambient-blob w-[420px] h-[420px] bg-[#F7E540]/15 bottom-10 right-1/4"
            style={{ animationDuration: "30s" }}
          />
        </div>

        {/* Camada 3: Analog Film Grain Overlay via SVG feTurbulence */}
        <svg className="film-grain">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Gerenciador Unificado de Meta Ads e Google Ads */}
        <AdsAnalytics />

        {/* Conteúdo Principal */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
