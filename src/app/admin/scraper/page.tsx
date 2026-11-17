import { ScraperControl } from "@/components/admin/ScraperControl";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

export default function ScraperAdminPage() {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Topo do Módulo Scraper */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <Link
            href="/admin"
            className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao Dashboard
          </Link>
          <h1 className="text-3xl font-light text-white tracking-tight font-serif italic">
            Lead Hunter B2B — Prospecção por Temas no DF
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 liquid-pill px-3 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          Extração Segura via Stealth Chromium
        </div>
      </div>

      <ScraperControl />
    </div>
  );
}

