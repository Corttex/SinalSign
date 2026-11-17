"use server";

import { prisma } from "@/lib/prisma";
import { sendMetaServerEvent } from "@/lib/metaCapi";
import { headers } from "next/headers";

interface QuoteSimulationInput {
  serviceType: "FACHADA_ACM" | "LETRA_CAIXA" | "IMPRESSAO_UV" | "TOTEM";
  widthMeters: number;
  heightMeters: number;
  materialFinish: string;
  lightingType: "NONE" | "LED_DIRECT" | "HALO_BACKLIGHT";
  clientName?: string;
  clientPhone?: string;
  niche?: string;
  region?: string;
}

interface QuoteSimulationResult {
  success: boolean;
  squareMeters: number;
  estimatedMin: number;
  estimatedMax: number;
  summary: string;
  whatsappDirectUrl: string;
}

// TABELA BASE DE ENGENHARIA (MANTIDA 100% NO SERVIDOR - NADA VAZA PARA O CLIENTE)
const PRICING_RULES = {
  FACHADA_ACM: {
    baseM2: 380, // Preço base m²
    materials: {
      acm_3mm_polietileno: 1.0,
      acm_3mm_pvdf: 1.25,
      acm_4mm_mineral: 1.45,
      acm_amadeirado: 1.35,
    },
    lighting: {
      NONE: 0,
      LED_DIRECT: 120, // por m²
      HALO_BACKLIGHT: 160,
    },
  },
  LETRA_CAIXA: {
    baseM2: 550,
    materials: {
      acrilico_espelhado: 1.2,
      inox_escovado: 1.4,
      pvc_expandido: 0.9,
    },
    lighting: {
      NONE: 0,
      LED_DIRECT: 180,
      HALO_BACKLIGHT: 220,
    },
  },
  IMPRESSAO_UV: {
    baseM2: 120,
    materials: {
      lona_frontlight: 0.8,
      adesivo_vinil_polimerico: 1.0,
      adesivo_jateado: 1.3,
      chapa_ps_uv: 1.5,
    },
    lighting: {
      NONE: 0,
      LED_DIRECT: 0,
      HALO_BACKLIGHT: 0,
    },
  },
  TOTEM: {
    baseM2: 850,
    materials: {
      acm_com_estrutura: 1.0,
      dupla_face_iluminado: 1.5,
    },
    lighting: {
      NONE: 0,
      LED_DIRECT: 250,
      HALO_BACKLIGHT: 250,
    },
  },
};

export async function calculateQuoteSecure(
  input: QuoteSimulationInput
): Promise<QuoteSimulationResult> {
  const {
    serviceType,
    widthMeters,
    heightMeters,
    materialFinish,
    lightingType,
    clientName,
    clientPhone,
    niche,
    region,
  } = input;

  // Sanitização e Validação Estrita de Limites Físicos
  const width = Math.min(Math.max(Number(widthMeters) || 1, 0.2), 50);
  const height = Math.min(Math.max(Number(heightMeters) || 1, 0.2), 20);
  const squareMeters = parseFloat((width * height).toFixed(2));

  const rule = PRICING_RULES[serviceType] || PRICING_RULES.FACHADA_ACM;
  const finishMultiplier =
    (rule.materials as Record<string, number>)[materialFinish] || 1.0;
  const lightAddon =
    (rule.lighting as Record<string, number>)[lightingType] || 0;

  // Cálculo de Custo e Margem Comercial Protegida
  const baseCost = squareMeters * rule.baseM2 * finishMultiplier;
  const lightingCost = squareMeters * lightAddon;
  const totalBase = baseCost + lightingCost;

  // Faixa de segurança para orçamento preliminar (estimativa de engenharia)
  const estimatedMin = Math.round(totalBase * 0.95);
  const estimatedMax = Math.round(totalBase * 1.15);

  // Registro do Lead no Banco de Dados se telefone foi informado
  if (clientPhone && clientPhone.length >= 10) {
    const cleanPhone = clientPhone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("55") ? cleanPhone : `55${cleanPhone}`;

    try {
      await prisma.client.upsert({
        where: { whatsapp: formattedPhone },
        update: {
          name: clientName || "Lead do Simulador",
          niche: niche || "Geral",
          cityRegion: region || "Brasília - DF",
          stage: "QUOTING",
          notes: `Simulação m²: ${serviceType} - ${squareMeters}m² (${width}x${height}m). Est: R$ ${estimatedMin} - R$ ${estimatedMax}`,
        },
        create: {
          name: clientName || "Lead do Simulador",
          whatsapp: formattedPhone,
          niche: niche || "Geral",
          cityRegion: region || "Brasília - DF",
          source: "SITE_SIMULATOR",
          stage: "QUOTING",
          notes: `Simulação m²: ${serviceType} - ${squareMeters}m² (${width}x${height}m). Est: R$ ${estimatedMin} - R$ ${estimatedMax}`,
        },
      });

      // Disparo Seguro de Conversão Server-Side para Meta Ads CAPI
      const reqHeaders = await headers();
      const clientIp = reqHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();
      const userAgent = reqHeaders.get("user-agent") || undefined;

      await sendMetaServerEvent({
        eventName: "Lead",
        userData: {
          clientIpAddress: clientIp,
          clientUserAgent: userAgent,
          phone: formattedPhone,
        },
        customData: {
          contentName: `Simulador - ${serviceType}`,
          value: estimatedMin,
          currency: "BRL",
        },
      });
    } catch (e) {
      console.error("[Prisma/CAPI Lead Save Warning]:", e);
    }
  }

  const messageText = encodeURIComponent(
    `Olá! Fiz uma simulação técnica no site da Sinal Sign:\n` +
      `*Serviço:* ${serviceType}\n` +
      `*Medida:* ${width}m x ${height}m (${squareMeters} m²)\n` +
      `*Material/Acabamento:* ${materialFinish}\n` +
      `*Iluminação:* ${lightingType}\n` +
      `*Estimativa:* R$ ${estimatedMin.toLocaleString("pt-BR")} a R$ ${estimatedMax.toLocaleString("pt-BR")}\n` +
      `Gostaria de agendar a medição no local / refinar o projeto.`
  );

  const whatsappDirectUrl = `https://wa.me/5561984853485?text=${messageText}`;

  return {
    success: true,
    squareMeters,
    estimatedMin,
    estimatedMax,
    summary: `${squareMeters} m² projetados (${width}m x ${height}m)`,
    whatsappDirectUrl,
  };
}

