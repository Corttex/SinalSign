"use client";

import Script from "next/script";

// Declaração de tipos para window.gtag e window.fbq
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export function AdsAnalytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* Google Tag (gtag.js) & Google Ads */}
      {googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-ads-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel (Facebook & Instagram Ads) */}
      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

// Funções utilitárias seguras para disparo de eventos de conversão no Cliente
export const trackEvent = {
  // Clique para WhatsApp
  whatsappClick: (label: string = "Contato Geral") => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "Engagement",
          event_label: `WhatsApp - ${label}`,
        });
      }
      if (window.fbq) {
        window.fbq("track", "Contact", { content_name: label });
      }
    }
  },

  // Simulação de Orçamento Concluída
  simulatorComplete: (serviceName: string, estimatedValue: number) => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "qualify_lead", {
          service: serviceName,
          value: estimatedValue,
          currency: "BRL",
        });
      }
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: serviceName,
          value: estimatedValue,
          currency: "BRL",
        });
      }
    }
  },

  // Visualização de Proposta
  proposalView: (proposalTitle: string) => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "ViewContent", { content_name: proposalTitle });
      }
    }
  },
};

