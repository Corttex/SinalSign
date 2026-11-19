"use client";

import { Award } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  niche: string;
  logoUrl: string;
  alt: string;
  width: number;
  height: number;
  logoClass: string;
  restingOpacity?: string;
}

const ROW_ONE_LOGOS: ClientLogo[] = [
  {
    id: "paulo-octavio",
    name: "Paulo Octávio",
    niche: "Incorporação & Construção",
    logoUrl:
      "/brand/clients/logo-paulo-octavio-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Paulo Octávio — cliente corporativo de comunicação visual e sinalização da Sinal Sign em Brasília DF",
    width: 860,
    height: 265,
    logoClass: "max-h-[48px] max-w-[168px]",
    restingOpacity: "opacity-[0.86]",
  },
  {
    id: "carlton-tower",
    name: "Carlton Tower",
    niche: "Centro Empresarial",
    logoUrl:
      "/brand/clients/logo-carlton-tower-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Carlton Tower — cliente de sinalização corporativa e fachadas da Sinal Sign em Brasília DF",
    width: 586,
    height: 177,
    logoClass: "max-h-[54px] max-w-[182px]",
  },
  {
    id: "liquigas",
    name: "Liquigás",
    niche: "Energia & Gás",
    logoUrl:
      "/brand/clients/logo-liquigas-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Liquigás — cliente de comunicação visual, placas e adesivação da Sinal Sign em Brasília DF",
    width: 788,
    height: 227,
    logoClass: "max-h-[52px] max-w-[182px]",
  },
  {
    id: "kallyne-alcantara-advocacia",
    name: "Kallyne Alcântara Advocacia",
    niche: "Advocacia & Consultoria Jurídica",
    logoUrl:
      "/brand/clients/logo-kallyne-alcantara-advocacia-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Kallyne Alcântara Advocacia — cliente de letreiro em acrílico e sinalização jurídica da Sinal Sign em Brasília DF",
    width: 523,
    height: 277,
    logoClass: "max-h-[68px] max-w-[176px]",
  },
  {
    id: "velocity",
    name: "Velocity",
    niche: "Fitness & Bem-Estar",
    logoUrl:
      "/brand/clients/logo-velocity-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Velocity — cliente de comunicação visual e letreiros da Sinal Sign em Brasília DF",
    width: 791,
    height: 150,
    logoClass: "max-h-[38px] max-w-[188px]",
  },
  {
    id: "soror-laboratorio-veterinario",
    name: "Soror Laboratório Veterinário",
    niche: "Laboratório Veterinário",
    logoUrl:
      "/brand/clients/logo-soror-laboratorio-veterinario-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Soror Laboratório Veterinário — cliente de fachada e placas em acrílico da Sinal Sign em Brasília DF",
    width: 475,
    height: 187,
    logoClass: "max-h-[58px] max-w-[176px]",
  },
  {
    id: "spa-das-sobrancelhas",
    name: "Spa das Sobrancelhas",
    niche: "Estética & Beleza",
    logoUrl:
      "/brand/clients/logo-spa-das-sobrancelhas-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Spa das Sobrancelhas — cliente de fachada em ACM, adesivos e acrílico da Sinal Sign em Brasília DF",
    width: 432,
    height: 468,
    logoClass: "max-h-[70px] max-w-[130px]",
  },
  {
    id: "cartorio-colorado",
    name: "Cartório Colorado",
    niche: "Serviços Cartorários",
    logoUrl:
      "/brand/clients/logo-cartorio-colorado-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Cartório Colorado — cliente de sinalização interna e fachadas da Sinal Sign em Brasília DF",
    width: 599,
    height: 158,
    logoClass: "max-h-[50px] max-w-[184px]",
  },
  {
    id: "terra-e-brasa",
    name: "Terra & Brasa",
    niche: "Gastronomia & Churrascaria",
    logoUrl:
      "/brand/clients/logo-terra-e-brasa-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Terra & Brasa — cliente de letreiro caixa e comunicação visual gastronômica da Sinal Sign em Brasília DF",
    width: 620,
    height: 214,
    logoClass: "max-h-[58px] max-w-[182px]",
  },
  {
    id: "delov",
    name: "Delov",
    niche: "Marca & Varejo",
    logoUrl:
      "/brand/clients/logo-delov-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Delov — cliente de identidade visual, vitrine e letreiro da Sinal Sign em Brasília DF",
    width: 570,
    height: 129,
    logoClass: "max-h-[40px] max-w-[178px]",
  },
  {
    id: "alfa-tecnologia",
    name: "Alfa Tecnologia",
    niche: "Tecnologia",
    logoUrl:
      "/brand/clients/logo-alfa-tecnologia-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Alfa Tecnologia — cliente de sinalização corporativa e acrílico da Sinal Sign em Brasília DF",
    width: 641,
    height: 320,
    logoClass: "max-h-[66px] max-w-[172px]",
  },
];

const ROW_TWO_LOGOS: ClientLogo[] = [
  {
    id: "crefisa",
    name: "Crefisa",
    niche: "Serviços Financeiros",
    logoUrl:
      "/brand/clients/logo-crefisa-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Crefisa — cliente de fachadas comerciais e comunicação visual da Sinal Sign em Brasília DF",
    width: 679,
    height: 262,
    logoClass: "max-h-[52px] max-w-[166px]",
  },
  {
    id: "plaza-brasilia-hoteis",
    name: "Plaza Brasília Hotéis",
    niche: "Hotelaria",
    logoUrl:
      "/brand/clients/logo-plaza-brasilia-hoteis-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Plaza Brasília Hotéis — cliente de sinalização hoteleira e identificação predial da Sinal Sign em Brasília DF",
    width: 679,
    height: 281,
    logoClass: "max-h-[64px] max-w-[178px]",
  },
  {
    id: "uab-universidade-aberta-do-brasil",
    name: "UAB — Universidade Aberta do Brasil",
    niche: "Educação Superior",
    logoUrl:
      "/brand/clients/logo-uab-universidade-aberta-do-brasil-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo UAB Universidade Aberta do Brasil — cliente de comunicação visual institucional e sinalização da Sinal Sign em Brasília DF",
    width: 517,
    height: 281,
    logoClass: "max-h-[64px] max-w-[170px]",
  },
  {
    id: "touti",
    name: "Touti",
    niche: "Cosméticos & Perfumaria",
    logoUrl:
      "/brand/clients/logo-touti-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Touti — cliente de quiosques, displays em acrílico e letreiros da Sinal Sign em Brasília DF",
    width: 480,
    height: 111,
    logoClass: "max-h-[34px] max-w-[160px]",
  },
  {
    id: "neude-nascimento-studio-de-beleza",
    name: "Neude Nascimento Studio de Beleza",
    niche: "Studio de Beleza",
    logoUrl:
      "/brand/clients/logo-neude-nascimento-studio-de-beleza-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Neude Nascimento Studio de Beleza — cliente de logo em acrílico espelhado e fachada da Sinal Sign em Brasília DF",
    width: 903,
    height: 334,
    logoClass: "max-h-[66px] max-w-[186px]",
  },
  {
    id: "caes-e-gatos-servicos-veterinarios",
    name: "Cães e Gatos Serviços Veterinários",
    niche: "Serviços Veterinários",
    logoUrl:
      "/brand/clients/logo-caes-e-gatos-servicos-veterinarios-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Cães e Gatos Serviços Veterinários — cliente de fachada em ACM e sinalização clínica da Sinal Sign em Brasília DF",
    width: 609,
    height: 173,
    logoClass: "max-h-[54px] max-w-[186px]",
  },
  {
    id: "seth-capital",
    name: "Seth Capital",
    niche: "Gestão & Investimentos",
    logoUrl:
      "/brand/clients/logo-seth-capital-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Seth Capital — cliente de letreiro corporativo em acrílico e inox da Sinal Sign em Brasília DF",
    width: 586,
    height: 329,
    logoClass: "max-h-[66px] max-w-[168px]",
  },
  {
    id: "corbucci-acai",
    name: "Corbucci Açaí",
    niche: "Alimentação & Açaí",
    logoUrl:
      "/brand/clients/logo-corbucci-acai-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Corbucci Açaí — cliente de fachadas, luminosos e adesivação comercial da Sinal Sign em Brasília DF",
    width: 421,
    height: 161,
    logoClass: "max-h-[58px] max-w-[170px]",
  },
  {
    id: "luna-lavanderia-express",
    name: "Luna Lavanderia Express",
    niche: "Lavanderia Express",
    logoUrl:
      "/brand/clients/logo-luna-lavanderia-express-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Luna Lavanderia Express — cliente de comunicação visual, vitrine e letreiros da Sinal Sign em Brasília DF",
    width: 321,
    height: 425,
    logoClass: "max-h-[72px] max-w-[120px]",
  },
  {
    id: "levi",
    name: "Lévi",
    niche: "Moda & Lifestyle",
    logoUrl:
      "/brand/clients/logo-levi-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Lévi — cliente de letreiros, displays e sinalização de loja da Sinal Sign em Brasília DF",
    width: 395,
    height: 272,
    logoClass: "max-h-[62px] max-w-[140px]",
  },
  {
    id: "revelando-o-mundo-turismo",
    name: "Revelando o Mundo Turismo",
    niche: "Agência de Turismo",
    logoUrl:
      "/brand/clients/logo-revelando-o-mundo-turismo-cliente-sinal-sign-comunicacao-visual-brasilia.svg",
    alt: "Logo Revelando o Mundo Turismo — cliente de comunicação visual e plotagem da Sinal Sign em Brasília DF",
    width: 304,
    height: 347,
    logoClass: "max-h-[72px] max-w-[130px]",
  },
];

function LogoCard({
  client,
  isClone = false,
}: {
  client: ClientLogo;
  isClone?: boolean;
}) {
  return (
    <div
      role={isClone ? undefined : "listitem"}
      title={isClone ? undefined : `${client.name} — ${client.niche}`}
      className="relative flex items-center justify-center w-[216px] sm:w-[236px] h-[94px] sm:h-[104px] px-6 py-4 liquid-glass border border-white/12 hover:border-[#85BCD7]/50 transition-all duration-300 shrink-0 group shadow-lg shadow-black/45"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logoUrl}
        alt={isClone ? "" : client.alt}
        title={isClone ? undefined : `${client.name} — ${client.niche}`}
        width={client.width}
        height={client.height}
        loading="eager"
        decoding="async"
        className={`w-auto h-auto object-contain select-none brightness-0 invert ${client.restingOpacity ?? "opacity-90"} group-hover:opacity-100 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_12px_rgba(133,188,215,0.35)] transition-all duration-300 ${client.logoClass}`}
      />
    </div>
  );
}

function LogoMarqueeRow({
  items,
  reverse = false,
}: {
  items: ClientLogo[];
  reverse?: boolean;
}) {
  return (
    <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max ${
          reverse
            ? "animate-carousel-infinite-reverse"
            : "animate-carousel-infinite"
        }`}
      >
        <div
          role="list"
          className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0"
        >
          {items.map((client) => (
            <LogoCard key={client.id} client={client} />
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0"
        >
          {items.map((client) => (
            <LogoCard key={`${client.id}-clone`} client={client} isClone />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsLogoCarousel() {
  return (
    <section aria-labelledby="clientes-df-heading" className="space-y-8 py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-heading font-semibold mb-2 border border-[#85BCD7]/30">
            <Award className="w-3.5 h-3.5 text-[#F7E540]" />
            MARCAS &amp; EMPRESAS QUE CONFIAM NA SINAL SIGN
          </div>
          <h3
            id="clientes-df-heading"
            className="text-2xl md:text-4xl font-bold text-white tracking-tight font-heading uppercase"
          >
            Clientes que Atendemos no Distrito Federal
          </h3>
        </div>

        <span className="text-xs font-mono text-neutral-400">
          +1.500 projetos executados com fabricação própria
        </span>
      </div>

      {/* Carrossel Infinito em Duas Faixas com Direções Opostas */}
      <div className="space-y-4">
        <LogoMarqueeRow items={ROW_ONE_LOGOS} />
        <LogoMarqueeRow items={ROW_TWO_LOGOS} reverse />
      </div>
    </section>
  );
}
