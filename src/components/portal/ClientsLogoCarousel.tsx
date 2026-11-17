"use client";

import { Building2, Award } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  niche: string;
  logoUrl?: string;
}

// Lista inicial dos clientes atendidos no DF (Pronto para receber as logos enviadas)
const CLIENT_LOGOS: ClientLogo[] = [
  { id: "send-beauty", name: "Send Beauty Cosméticos", niche: "Estética & Beleza" },
  { id: "resende-advocacia", name: "Resende Advocacia", niche: "Jurídico & Consultoria" },
  { id: "carlton-tower", name: "Carlton Tower", niche: "Centro Empresarial" },
  { id: "vila-flores", name: "Residencial Vila das Flores", niche: "Condomínio Residencial" },
  { id: "invest-flat", name: "Invest Flat", niche: "Mercado Imobiliário" },
  { id: "rsalon-biodanza", name: "R Salon & Biodanza", niche: "Saúde & Bem-Estar" },
  { id: "auto-prime", name: "Auto Prime Motors", niche: "Concessionária" },
  { id: "clinica-odonto-df", name: "Odonto Premium DF", niche: "Saúde Integrada" },
];

export function ClientsLogoCarousel() {
  // Duplicamos a lista para criar o efeito infinito contínuo e suave (seamless marquee)
  const infiniteList = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="space-y-8 py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-heading font-semibold mb-2 border border-[#85BCD7]/30">
            <Award className="w-3.5 h-3.5 text-[#F7E540]" />
            MARCAS &amp; EMPRESAS QUE CONFIAM NA SINAL SIGN
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight font-heading uppercase">
            Clientes que Atendemos no Distrito Federal
          </h3>
        </div>

        <span className="text-xs font-mono text-neutral-400">
          +1.500 projetos executados com fabricação própria
        </span>
      </div>

      {/* Carrossel Infinito com Desfoque Lateral (Fade Edges) */}
      <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex items-center gap-6 w-max animate-carousel-infinite">
          {infiniteList.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl liquid-glass border border-white/10 hover:border-[#85BCD7]/50 transition-all shrink-0 min-w-[220px] max-w-[280px] group shadow-lg shadow-black/40"
            >
              {/* Espaço de Logo com Fallback Elegante */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#85BCD7]/40 transition-all">
                {client.logoUrl ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="w-full h-full object-contain p-1.5"
                  />
                ) : (
                  <Building2 className="w-5 h-5 text-[#85BCD7] group-hover:text-[#F7E540] transition-colors" />
                )}
              </div>

              {/* Nome do Cliente */}
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold text-white tracking-tight truncate group-hover:text-[#85BCD7] transition-colors font-heading">
                  {client.name}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 truncate">
                  {client.niche}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

