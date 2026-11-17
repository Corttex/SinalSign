import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/lib/seo";
import { Suspense } from "react";
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Phone,
  FileCheck,
  Building,
  Layers,
  ArrowRight,
} from "lucide-react";

interface ProposalPageProps {
  params: Promise<{ token: string }>;
}

async function ProposalContent({ params }: ProposalPageProps) {
  const { token } = await params;

  if (!token || token.length < 8) {
    notFound();
  }

  const proposal = await prisma.commercialProposal.findUnique({
    where: { publicToken: token },
    include: {
      client: true,
    },
  });

  if (!proposal) {
    notFound();
  }

  // Audita visualização no servidor de forma silenciosa
  try {
    await prisma.commercialProposal.update({
      where: { id: proposal.id },
      data: {
        viewCount: { increment: 1 },
        lastViewedAt: new Date(),
        status:
          proposal.status === "DRAFT" || proposal.status === "SENT"
            ? "VIEWED"
            : proposal.status,
      },
    });
  } catch (e) {
    console.error("[Proposal Audit Warning]:", e);
  }

  const items = Array.isArray(proposal.itemsJson)
    ? (proposal.itemsJson as any[])
    : [];

  const subtotal = Number(proposal.subtotalAmount);
  const discount = Number(proposal.discountAmount);
  const total = Number(proposal.totalAmount);

  const whatsappApproveUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Olá! Sou ${proposal.client.tradeName || proposal.client.name} e aprovei a Proposta Comercial nº ${proposal.id.slice(-6).toUpperCase()} no valor de R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}. Gostaria de dar sequência à fabricação!`
  )}`;

  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-8 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Topo Institucional de Confiança */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D4AF37] via-[#16697A] to-[#8C6239] flex items-center justify-center font-bold text-black text-sm font-mono">
            SS
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">
              SINAL SIGN COMUNICAÇÃO VISUAL
            </h1>
            <p className="text-xs text-neutral-400 font-mono">
              Engenharia Visual, Fachadas &amp; Letras Caixa • Brasília - DF
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full liquid-pill text-xs text-[#D4AF37] font-mono w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Proposta Comercial Segura &amp; Criptografada
        </div>
      </div>

      {/* Card Principal da Proposta (Liquid Glass) */}
      <div className="liquid-glass p-8 md:p-10 space-y-8">
        {/* Cabeçalho do Orçamento */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              PROPOSTA Nº SS-{proposal.id.slice(-6).toUpperCase()}
            </span>
            <h2 className="text-3xl font-light text-white tracking-tight mt-1 font-serif italic">
              {proposal.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-neutral-300 font-mono">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#D4AF37]" />
                {proposal.client.tradeName || proposal.client.name}
              </span>
              <span>•</span>
              <span>Região: {proposal.client.cityRegion || "Brasília - DF"}</span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-neutral-400">Status</span>
            <div className="text-sm font-semibold text-emerald-400 font-mono mt-0.5 uppercase tracking-wide">
              {proposal.status === "APPROVED" ? "Aprovado em Produção" : "Aguardando Aprovação"}
            </div>
            {proposal.expiresAt && (
              <div className="text-[11px] text-neutral-400 font-mono mt-1 flex items-center gap-1 justify-end">
                <Clock className="w-3 h-3" />
                Válida até {new Date(proposal.expiresAt).toLocaleDateString("pt-BR")}
              </div>
            )}
          </div>
        </div>

        {/* Tabela de Itens de Engenharia e Especificações */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            Especificações de Materiais e Fabricação
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-neutral-400 uppercase">
                  <th className="py-3 px-4">Item / Especificação Técnica</th>
                  <th className="py-3 px-4">Medidas / Área</th>
                  <th className="py-3 px-4 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {items.length > 0 ? (
                  items.map((item: any, idx: number) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-medium text-white">{item.name || `Item ${idx + 1}`}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">
                          {item.description || "Fabricação com acabamento e corte computadorizado."}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-neutral-300">
                        {item.dimensions || item.unit || "Projeto sob medida"}
                      </td>
                      <td className="py-4 px-4 text-right font-mono text-white font-medium">
                        R$ {Number(item.price || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-4 px-4 font-medium text-white">
                      Projeto Completo de Comunicação Visual
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-neutral-300">
                      Conforme Levantamento Técnico
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-white font-medium">
                      R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totais & Resumo Financeiro */}
        <div className="pt-6 border-t border-white/10 flex flex-col items-end gap-2 text-right">
          <div className="flex items-center justify-between w-full max-w-xs text-xs font-mono text-neutral-400">
            <span>Subtotal:</span>
            <span>R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          </div>
          {discount > 0 && (
            <div className="flex items-center justify-between w-full max-w-xs text-xs font-mono text-emerald-400">
              <span>Desconto Comercial:</span>
              <span>- R$ {discount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </div>
          )}
          <div className="flex items-center justify-between w-full max-w-xs text-base font-semibold text-white pt-2 border-t border-white/10">
            <span>Investimento Total:</span>
            <span className="text-2xl text-[#D4AF37] font-mono">
              R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Condições de Pagamento e Prazo */}
        {proposal.conditions && (
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-sans text-neutral-300 space-y-1">
            <span className="font-mono uppercase text-[#D4AF37] text-[10px] tracking-wider block">
              Condições Comerciais &amp; Garantia:
            </span>
            <p className="leading-relaxed whitespace-pre-line">{proposal.conditions}</p>
          </div>
        )}

        {/* Ação de Aprovação Direta via WhatsApp Oficial */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 font-sans flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            Ao aprovar, a ordem de corte a laser e preparação dos materiais é iniciada.
          </div>

          <a
            href={whatsappApproveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8C6239] text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
          >
            <FileCheck className="w-4 h-4" />
            Aprovar Proposta no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Rodapé da Proposta */}
      <div className="text-center text-xs font-mono text-neutral-500">
        Sinal Sign Fachadas e Luminosos • (61) 98485-3485 • Brasília - DF
      </div>
    </div>
  );
}

export default function ProposalPublicPage({ params }: ProposalPageProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen flex items-center justify-center text-neutral-400 font-mono text-xs">
          Carregando proposta segura...
        </div>
      }
    >
      <ProposalContent params={params} />
    </Suspense>
  );
}
