"use client";

import { useState } from "react";
import {
  Search,
  Building2,
  MapPin,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  FileSpreadsheet,
} from "lucide-react";

const NICHES = [
  "Clínicas Odontológicas",
  "Clínicas de Estética & Harmonização",
  "Escritórios de Advocacia",
  "Salões de Beleza & Studios",
  "Restaurantes & Gastronomia",
  "Condomínios & Edifícios Comerciais",
  "Academias & Crossfit",
  "Contabilidades & Consultorias",
  "Pet Shops & Veterinárias",
];

const REGIONS = [
  "Águas Claras",
  "Asa Sul",
  "Asa Norte",
  "Sudoeste",
  "Noroeste",
  "Taguatinga",
  "Vicente Pires",
  "Guará I e II",
  "Lago Sul",
  "Lago Norte",
  "SIA / SOF Sul",
  "Ceilândia",
];

export function ScraperControl() {
  const [theme, setTheme] = useState(NICHES[0]);
  const [region, setRegion] = useState(REGIONS[0]);
  const [maxResults, setMaxResults] = useState(30);
  const [running, setRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Exemplo de leads simulados prontos para prospecção após extração
  const [extractedLeads, setExtractedLeads] = useState<any[]>([
    {
      tradeName: "Dra. Paula Clínica Odonto Premium",
      niche: "Clínicas Odontológicas",
      region: "Águas Claras - DF",
      phone: "5561991234567",
      whatsappValid: true,
      hasWebsite: true,
      googleRating: 4.9,
      reviews: 8, // Poucas avaliações = aberta recentemente, precisando de fachada!
    },
    {
      tradeName: "Harmonize Studio & Estética Facial",
      niche: "Clínicas de Estética",
      region: "Águas Claras - DF",
      phone: "5561998765432",
      whatsappValid: true,
      hasWebsite: false,
      googleRating: 5.0,
      reviews: 5,
    },
    {
      tradeName: "Carvalho & Silveira Advogados Associados",
      niche: "Escritórios de Advocacia",
      region: "Águas Claras - DF",
      phone: "5561981112233",
      whatsappValid: true,
      hasWebsite: true,
      googleRating: 4.8,
      reviews: 14,
    },
  ]);

  const handleStartScrape = async () => {
    setRunning(true);
    setStatusMessage(`Disparando busca de empresas: '${theme}' em '${region}'...`);

    // Simula comunicação segura com o microserviço Python na porta 8001
    setTimeout(() => {
      setRunning(false);
      setStatusMessage(
        `✓ Bateria concluída! 12 novos estabelecimentos identificados no Google Maps e higienizados para o nicho ${theme}.`
      );
    }, 2500);
  };

  return (
    <div className="space-y-8">
      {/* Configuração da Bateria de Prospecção */}
      <div className="liquid-glass p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <Search className="w-5 h-5 text-[#D4AF37]" />
              Configurar Bateria de Prospecção por Tema (DF)
            </h2>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Busca automatizada no Google Maps, extração de WhatsApp e qualificação de novas empresas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-neutral-300">
              Nicho / Tema Campeão
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {NICHES.map((n) => (
                <option key={n} value={n} className="bg-[#08090B]">
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-neutral-300">
              Região Administrativa (DF)
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r} className="bg-[#08090B]">
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-neutral-300">
              Limite de Empresas por Busca
            </label>
            <input
              type="number"
              min="10"
              max="100"
              value={maxResults}
              onChange={(e) => setMaxResults(parseInt(e.target.value) || 20)}
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-mono"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {statusMessage ? (
            <div className="text-xs font-mono text-[#D4AF37] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {statusMessage}
            </div>
          ) : (
            <div className="text-xs text-neutral-500 font-mono">
              Pronto para iniciar extração controlada via Chromium Headless.
            </div>
          )}

          <button
            onClick={handleStartScrape}
            disabled={running}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8C6239] text-black font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-95 cursor-pointer disabled:opacity-50"
          >
            {running ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                Extraindo Empresas do DF...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black" />
                Iniciar Extração no Google Maps
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabela de Leads Qualificados Extraídos */}
      <div className="liquid-glass p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Leads Identificados com Oportunidade de Fachada / Letra Caixa
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              Empresas com menos de 20 avaliações ou sem fachada moderna identificada
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {extractedLeads.length} leads prontos para abordagem
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-sans border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono text-neutral-400 uppercase">
                <th className="py-3 px-4">Estabelecimento / Nicho</th>
                <th className="py-3 px-4">Região DF</th>
                <th className="py-3 px-4">WhatsApp Validado</th>
                <th className="py-3 px-4">Google Maps</th>
                <th className="py-3 px-4 text-right">Ação Direta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {extractedLeads.map((lead, idx) => {
                const message = encodeURIComponent(
                  `Olá, tudo bem? Vi a unidade da ${lead.tradeName} em ${lead.region}. Sou da Sinal Sign Comunicação Visual e fabricamos fachadas em ACM e letras caixa 3D aqui no DF. Podemos enviar uma simulação de projeto sem compromisso?`
                );
                const waUrl = `https://wa.me/${lead.phone}?text=${message}`;

                return (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-medium text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#D4AF37]" />
                        {lead.tradeName}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5 font-mono">
                        {lead.niche}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono text-neutral-300">
                      {lead.region}
                    </td>
                    <td className="py-4 px-4 text-xs font-mono text-emerald-400 flex items-center gap-1.5 pt-5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {lead.phone}
                    </td>
                    <td className="py-4 px-4 text-xs font-mono text-amber-400">
                      ★ {lead.googleRating} ({lead.reviews} avaliações)
                    </td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Abordar no WhatsApp
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

