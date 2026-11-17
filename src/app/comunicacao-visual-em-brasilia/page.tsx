import { Metadata } from "next";
import HomePage from "../page";

export const metadata: Metadata = {
  title: "Comunicação Visual em Brasília e DF | Fachadas ACM & Letras Caixa | Sinal Sign",
  description:
    "Fábrica própria de Comunicação Visual em Brasília: Fachadas em ACM, Acrílicos 2mm a 20mm, Letras Caixa 3D, Adesivos e Totens. Simulação online por m² e visita no DF.",
  alternates: {
    canonical: "https://sinalsign.com.br/comunicacao-visual-em-brasilia",
  },
  keywords: [
    "comunicação visual em brasília",
    "comunicação visual brasília df",
    "fachadas em acm brasília",
    "letra caixa águas claras",
    "corte a laser acrilico df",
    "sinalização viária brasília",
    "totem comercial df",
    "empresa de comunicação visual no df",
  ],
  openGraph: {
    title: "Comunicação Visual em Brasília e DF | Sinal Sign",
    description:
      "Fabricação própria de Fachadas em ACM, Acrílicos, Letras Caixa e Sinalização Predial no Distrito Federal.",
    url: "https://sinalsign.com.br/comunicacao-visual-em-brasilia",
    siteName: "Sinal Sign Comunicação Visual",
    locale: "pt_BR",
    type: "website",
  },
};

export default function CanonicalBrasiliaPage() {
  return <HomePage />;
}

