import Link from "next/link";
import { SinalSignLogo } from "@/components/brand/SinalSignLogo";
import { siteConfig } from "@/lib/seo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
} from "lucide-react";

export function ComprehensiveFooter() {
  const currentYear = 2026;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com o departamento comercial da Sinal Sign."
  )}`;

  return (
    <footer className="w-full pt-10 sm:pt-16 pb-8 sm:pb-12 border-t border-white/10 mt-10 sm:mt-16 space-y-8 sm:space-y-12">
      {/* Grid Principal com 4 Colunas Informativas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-neutral-300">
        {/* Coluna 1: Identidade da Marca & Manifesto */}
        <div className="space-y-4">
          <SinalSignLogo variant="white" showSubtitle={true} />
          <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-2">
            Referência em engenharia visual, corte a laser de acrílicos, chapas em PS, adesivos especiais, fachadas em ACM e sinalização corporativa e viária em Brasília e Entorno. Fabricação 100% própria com precisão milimétrica.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#85BCD7]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Parque Fabril Operando no DF
          </div>
        </div>

        {/* Coluna 2: Atendimento, Contatos & Horários */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-wide uppercase font-heading border-b border-white/10 pb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#85BCD7]" />
            Atendimento Comercial
          </h4>
          <ul className="space-y-3 text-xs font-sans">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#85BCD7] shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white font-heading text-[11px] tracking-wide uppercase">Central WhatsApp:</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#85BCD7] font-heading font-medium transition-colors"
                >
                  (61) 98485-3485
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#E06196] shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white font-heading text-[11px] tracking-wide uppercase">E-mail Comercial:</span>
                <a
                  href="mailto:contato@sinalsign.com.br"
                  className="text-neutral-300 hover:text-white font-sans transition-colors"
                >
                  contato@sinalsign.com.br
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#F7E540] shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white font-heading text-[11px] tracking-wide uppercase">Horário de Funcionamento:</span>
                <span className="text-neutral-300 font-sans">
                  Segunda a Sexta: 08:00 às 18:00
                </span>
                <span className="block text-[11px] text-neutral-400">
                  Sábado: Plantão de Atendimento e Montagens
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Soluções Especializadas em Brasília (Links Internos com Âncoras Descritivas) */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-wide uppercase font-heading border-b border-white/10 pb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#85BCD7]" />
            Soluções Especializadas
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <Link href="/sinalizacao-em-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-semibold text-white">
                • Sinalização em Brasília (Fábrica)
              </Link>
            </li>
            <li>
              <Link href="/comunicacao-visual-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Comunicação Visual em Brasília
              </Link>
            </li>
            <li>
              <Link href="/fachadas-em-acm-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Fachadas em ACM em Brasília
              </Link>
            </li>
            <li>
              <Link href="/letras-caixa-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Letras Caixa e Letreiros 3D
              </Link>
            </li>
            <li>
              <Link href="/letreiros-luminosos-totens-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Letreiros Luminosos e Totens
              </Link>
            </li>
            <li>
              <Link href="/impressao-digital-uv-dtf-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Impressão Digital UV e DTF
              </Link>
            </li>
            <li>
              <Link href="/adesivos-plotagem-veiculos-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Adesivos e Plotagem de Veículos
              </Link>
            </li>
            <li>
              <Link href="/impressao-banners-lonas-brasilia" className="text-neutral-300 hover:text-[#85BCD7] transition-colors flex items-center gap-1.5 font-medium">
                • Banners e Lonas Reforçadas
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Fábrica & Cobertura Regional DF */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white tracking-wide uppercase font-heading border-b border-white/10 pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E06196]" />
            Fábrica &amp; Cobertura DF
          </h4>
          <ul className="space-y-3 text-xs font-sans text-neutral-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#85BCD7] shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white font-heading text-[11px] tracking-wide uppercase">Parque Fabril &amp; Escritório:</span>
                <span>Distrito Federal — Brasília / DF</span>
                <span className="block text-[11px] text-neutral-400 mt-0.5">
                  Atendimento presencial com medição técnica in loco.
                </span>
              </div>
            </li>
            <li className="pt-1">
              <span className="block font-semibold text-white font-heading text-[11px] tracking-wide uppercase mb-1">Cidades Atendidas:</span>
              <p className="text-[11px] leading-relaxed text-neutral-400">
                Plano Piloto (Asa Sul/Norte), Águas Claras, Sudoeste, Noroeste, Taguatinga, Guará, Vicente Pires, SIA, Ceilândia e Entorno do DF.
              </p>
            </li>
            <li className="pt-2 border-t border-white/10 flex flex-col gap-1">
              <Link href="/termos" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#85BCD7]" />
                Termos de Uso e Garantia Técnica
              </Link>
              <Link href="/privacidade" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#E06196]" />
                Políticas de Privacidade (LGPD)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Faixa Inferior de Direitos */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-400">
        <div>
          © {currentYear} <span className="font-heading font-semibold text-neutral-300">{siteConfig.legalName}</span>. Todos os direitos reservados.
          <span className="block text-[11px] text-neutral-500 mt-0.5">
            CNPJ &amp; Fabricação Própria de Comunicação Visual • Brasília - DF
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px] font-heading font-semibold tracking-wide">
          <Link href="/termos" className="hover:text-[#85BCD7] transition-colors">
            Termos de Uso
          </Link>
          <span>•</span>
          <Link href="/privacidade" className="hover:text-[#85BCD7] transition-colors">
            Privacidade &amp; Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
