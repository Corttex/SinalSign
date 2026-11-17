import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function TermosPage() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-10 text-neutral-300">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#85BCD7] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao Portal
      </Link>

      <div className="space-y-3 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-mono">
          <FileText className="w-3.5 h-3.5 text-[#F7E540]" />
          DOCUMENTO JURÍDICO &amp; GARANTIA TÉCNICA
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif italic">
          Termos de Uso &amp; Garantia de Fabricação
        </h1>
        <p className="text-xs text-neutral-400 font-mono">
          Última atualização: Novembro de 2026 • {siteConfig.legalName}
        </p>
      </div>

      <div className="liquid-glass p-8 md:p-10 space-y-6 text-sm font-sans leading-relaxed text-neutral-300">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">1. Objeto e Serviços</h2>
          <p>
            A <strong>{siteConfig.legalName}</strong> é uma indústria de comunicação visual especializada no desenvolvimento, corte computadorizado a laser/CNC, impressão digital UV/DTF, montagem e instalação de fachadas em ACM, letras caixa tridimensionais, acrílicos, chapas em PS e sinalização viária e corporativa no Distrito Federal e Entorno.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">2. Orçamentos e Medições Técnicas</h2>
          <p>
            As simulações geradas pelo simulador digital do portal representam estimativas preliminares com base nas metragens ($m^2$) e acabamentos fornecidos. O orçamento definitivo e vinculante está sujeito à visita técnica in-loco para validação estrutural de alvenaria, pontos de ancoragem e cabeamento elétrico.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">3. Garantia Técnica dos Materiais</h2>
          <p>
            • <strong>Fachadas em ACM:</strong> Garantia estrutural de até 5 (cinco) anos contra delaminação e desbotamento para chapas com pintura PVDF Kynar.<br />
            • <strong>Letras Caixa e Módulos LED:</strong> Garantia de 1 (um) ano para fontes e módulos de LED com certificação IP68 contra infiltrações e queima precoce.<br />
            • <strong>Adesivos e Vinis:</strong> Garantia de 1 a 3 anos conforme a especificação (polimérico ou jateado com proteção UV).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">4. Propriedade Intelectual e Vetores</h2>
          <p>
            Os layouts, artes e projetos simulados desenvolvidos pela Sinal Sign são protegidos pela legislação de direitos autorais. Logomarcas enviadas pelos clientes permanecem de titularidade exclusiva de seus respectivos detentores.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">5. Foro e Legislação Aplicável</h2>
          <p>
            Estes termos são regidos pelas leis da República Federativa do Brasil, elegendo-se o Foro da Circunscrição Judiciária de Brasília - DF para dirimir quaisquer controvérsias.
          </p>
        </section>
      </div>
    </div>
  );
}

