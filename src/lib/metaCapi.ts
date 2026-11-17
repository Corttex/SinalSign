import crypto from "crypto";

interface ServerConversionPayload {
  eventName: "Lead" | "Contact" | "ViewContent" | "Purchase";
  eventId?: string;
  sourceUrl?: string;
  userData: {
    clientIpAddress?: string;
    clientUserAgent?: string;
    phone?: string;
    email?: string;
    externalId?: string;
  };
  customData?: {
    value?: number;
    currency?: string;
    contentName?: string;
  };
}

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function sendMetaServerEvent(payload: ServerConversionPayload) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    // Modo silencioso caso as chaves ainda não estejam configuradas em produção
    return { success: false, reason: "CAPI não configurado no .env" };
  }

  const user_data: Record<string, any> = {};

  if (payload.userData.phone) {
    const cleanPhone = payload.userData.phone.replace(/\D/g, "");
    user_data.ph = [sha256(cleanPhone)];
  }
  if (payload.userData.email) {
    user_data.em = [sha256(payload.userData.email)];
  }
  if (payload.userData.clientIpAddress) {
    user_data.client_ip_address = payload.userData.clientIpAddress;
  }
  if (payload.userData.clientUserAgent) {
    user_data.client_user_agent = payload.userData.clientUserAgent;
  }
  if (payload.userData.externalId) {
    user_data.external_id = [sha256(payload.userData.externalId)];
  }

  const eventPayload = {
    data: [
      {
        event_name: payload.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId || crypto.randomUUID(),
        event_source_url: payload.sourceUrl || process.env.NEXT_PUBLIC_SITE_URL,
        action_source: "website",
        user_data,
        custom_data: payload.customData,
      },
    ],
  };

  try {
    const res = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPayload),
    });

    const result = await res.json();
    return { success: res.ok, data: result };
  } catch (error) {
    console.error("[Meta CAPI Error]:", error);
    return { success: false, error };
  }
}

