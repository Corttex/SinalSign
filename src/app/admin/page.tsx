import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import {
  Users,
  FileSpreadsheet,
  Layers,
  Sparkles,
  TrendingUp,
  Search,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

async function DashboardContent() {
  // Coleta dados das entidades
  let totalClients = 0;
  let totalProposals = 0;
  let quotingClients = 0;
  let recentLeads: any[] = [];
  let recentProposals: any[] = [];

  try {
    totalClients = await prisma.client.count();
    totalProposals = await prisma.commercialProposal.count();
    quotingClients = await prisma.client.count({
      where: { stage: "QUOTING" },
    });
    recentLeads = await prisma.client.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
    });
    recentProposals = await prisma.commercialProposal.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { client: true },
    });
  } catch (err) {
    console.error("[Admin Dashboard Query Warning]:", err);
  }

  return (
    <>
      {/* Grid de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="liquid-glass p-6 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">TOTAL DE LEADS / CLIENTES</span>
            <Users className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">{totalClients}</div>
          <span className="text-[11px] text-neutral-400">Captados via Site, Ads e Scraper</span>
        </div>

        <div className="liquid-glass p-6 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">EM LEVANTAMENTO (ORÇANDO)</span>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">{quotingClients}</div>
          <span className="text-[11px] text-neutral-400">Aguardando medição técnica ou aprovação</span>
        </div>

        <div className="liquid-glass p-6 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">PROPOSTAS GERADAS</span>
            <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-white font-mono">{totalProposals}</div>
          <span className="text-[11px] text-neutral-400">Links seguros com rastreamento</span>
        </div>
      </div>

      {/* Seção Dupla: Leads Recentes & Propostas Ativas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leads Recentes */}
        <div className="liquid-glass p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              Últimos Leads Registrados
            </h2>
            <span className="text-xs font-mono text-neutral-400">Origem &amp; Região</span>
          </div>

          <div className="divide-y divide-white/5">
            {recentLeads.length > 0 ? (
              recentLeads.map((lead) => (
                <div key={lead.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">{lead.name}</div>
                    <div className="text-xs text-neutral-400 font-mono">
                      {lead.whatsapp} • {lead.cityRegion || "DF"}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#D4AF37]">
                    {lead.stage}
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-neutral-500 font-mono">
                Nenhum lead registrado no momento.
              </div>
            )}
          </div>
        </div>

        {/* Propostas Comerciais Recentes */}
        <div className="liquid-glass p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#D4AF37]" />
              Propostas Ativas
            </h2>
            <span className="text-xs font-mono text-neutral-400">Acessos &amp; Links</span>
          </div>

          <div className="divide-y divide-white/5">
            {recentProposals.length > 0 ? (
              recentProposals.map((prop) => (
                <div key={prop.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white">{prop.title}</div>
                    <div className="text-xs text-neutral-400 font-mono">
                      Cliente: {prop.client.name} • Total: R${" "}
                      {Number(prop.totalAmount).toLocaleString("pt-BR")}
                    </div>
                  </div>
                  <Link
                    href={`/p/${prop.publicToken}`}
                    target="_blank"
                    className="text-xs font-mono text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    Ver Proposta <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-neutral-500 font-mono">
                Nenhuma proposta cadastrada ainda.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function AdminDashboardPage() {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Topo do Painel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#D4AF37] font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            PAINEL INTERNO DE ENGENHARIA &amp; VENDAS
          </div>
          <h1 className="text-3xl font-light text-white tracking-tight font-serif italic">
            Sinal Sign OS — Controle Operacional
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/scraper"
            className="liquid-pill px-4 py-2 rounded-xl text-xs font-mono text-white hover:text-[#D4AF37] flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-[#D4AF37]" />
            Scraper B2B de Leads
          </Link>
          <Link
            href="/admin/propostas/nova"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8C6239] text-black font-semibold text-xs flex items-center gap-1.5"
          >
            + Nova Proposta
          </Link>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="p-12 text-center text-neutral-400 font-mono text-xs">
            Carregando métricas do banco de dados...
          </div>
        }
      >
        <DashboardContent />
      </Suspense>
    </div>
  );
}

