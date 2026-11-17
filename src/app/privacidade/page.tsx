import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function PrivacidadePage() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-10 text-neutral-300">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#85BCD7] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao Portal
      </Link>

      <div className="space-y-3 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#E06196] font-mono">
          <Lock className="w-3.5 h-3.5" />
          PRIVACIDADE DE DADOS • LGPD (LEI Nº 13.709/2018)
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif italic">
          Políticas de Privacidade &amp; Proteção de Dados
        </h1>
        <p className="text-xs text-neutral-400 font-mono">
          Compromisso de transparência e segurança de dados da {siteConfig.legalName}
        </p>
      </div>

      <div className="liquid-glass p-8 md:p-10 space-y-6 text-sm font-sans leading-relaxed text-neutral-300">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">1. Coleta e Finalidade dos Dados</h2>
          <p>
            Coletamos apenas os dados estritamente necessários para viabilizar orçamentos e atendimentos comerciais solicitados pelo usuário (nome, WhatsApp, empresa e região do DF onde a obra será instalada). Seus dados nunca são comercializados, alugados ou compartilhados com terceiros para fins publicitários externos.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">2. Segurança Dobrada e Blindagem Server-Side</h2>
          <p>
            Nosso portal opera com arquitetura blindada no servidor, utilizando criptografia HTTPS/TLS moderna, Content Security Policy (CSP) estrita com nonces criptográficos e proteção contra injeções e vazamentos no DOM/HTML. Nenhuma fórmula de precificação confidencial ou dado sensível de cliente fica exposto ao navegador.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">3. Cookies e Rastreamento de Anúncios</h2>
          <p>
            Utilizamos ferramentas analíticas padrão da indústria (Google Tag Manager, Google Analytics e Meta Conversions API via servidor) para mensurar a eficácia de nossas campanhas de tráfego pago no Distrito Federal. Os identificadores enviados via servidor são previamente anonimizados via algoritmo criptográfico SHA-256.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">4. Direitos do Titular (LGPD)</h2>
          <p>
            O titular dos dados pode a qualquer momento solicitar a confirmação, retificação ou exclusão definitiva de seus registros de contato em nossos bancos de dados internos através do e-mail <strong>contato@sinalsign.com.br</strong> ou pelo WhatsApp oficial <strong>(61) 98485-3485</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}

