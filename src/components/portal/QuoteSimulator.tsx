"use client";

import { useState } from "react";
import { BUSINESS_NICHES_DATA, BusinessNicheProfile } from "@/lib/simulatorNichesData";
import {
  Sparkles,
  CheckCircle2,
  Send,
  MessageCircle,
  Bot,
  User,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Building2,
  HelpCircle,
  PhoneCall,
  Loader2,
  ChevronRight,
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  Scale,
  Building,
  Factory,
  Layers,
} from "lucide-react";

interface ChatMessage {
  role: "assistant" | "user";
  content: string;
}

export function QuoteSimulator() {
  // Estado do Formulário Inteligente
  const [selectedNiche, setSelectedNiche] = useState<BusinessNicheProfile | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [customDemand, setCustomDemand] = useState<string>("");
  const [clientRegion, setClientRegion] = useState<string>("Águas Claras");
  const [clientName, setClientName] = useState<string>("");

  // Estado do Chat Online com IA
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);

  // Toggle de itens sugeridos
  const handleToggleItem = (title: string) => {
    setSelectedItems((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]
    );
  };

  // Monta o resumo formatado do briefing
  const getBriefingSummary = () => {
    const nicheTitle = selectedNiche?.name || "Projeto de Comunicação Visual";
    const itemsText =
      selectedItems.length > 0 ? selectedItems.join(", ") : "Soluções recomendadas";
    const demandText = customDemand.trim()
      ? `\nObservação específica do que procuro: "${customDemand.trim()}"`
      : "";

    return `Olá! Meu nome é ${clientName.trim() || "Cliente"}. Tenho um negócio no segmento: ${nicheTitle}.
Tenho interesse em: ${itemsText}.${demandText}
Região de instalação: ${clientRegion} (DF/Entorno).
Gostaria de falar com o atendimento técnico para orçamento e detalhes!`;
  };

  // Iniciar Atendimento via Chat Online Inteligente com IA
  const handleStartOnlineChat = async () => {
    if (!selectedNiche) return;

    setIsChatOpen(true);
    setIsAiThinking(true);

    const initialContext = {
      nicheName: selectedNiche.name,
      selectedItems,
      customDemand,
      region: clientRegion,
      name: clientName,
    };

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Início do atendimento pelo simulador." }],
          contextData: initialContext,
        }),
      });

      const data = await res.json();
      setChatMessages([
        {
          role: "assistant",
          content:
            data.reply ||
            `Olá! Sou a assistente de projetos da Sinal Sign. Já identifiquei que você procura soluções para ${selectedNiche.name}. Como posso te ajudar a avançar?`,
        },
      ]);
    } catch {
      setChatMessages([
        {
          role: "assistant",
          content: `Olá! Sou a assistente de projetos da Sinal Sign DF. Prazer falar com você! Identifiquei o perfil do seu negócio (${selectedNiche.name}). Você já tem as medidas ou o logotipo da empresa?`,
        },
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  // Enviar nova mensagem no Chat Online
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isAiThinking) return;

    const userText = inputMessage.trim();
    setInputMessage("");

    const updatedMessages: ChatMessage[] = [
      ...chatMessages,
      { role: "user", content: userText },
    ];
    setChatMessages(updatedMessages);
    setIsAiThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          contextData: {
            nicheName: selectedNiche?.name,
            selectedItems,
            customDemand,
            region: clientRegion,
            name: clientName,
          },
        }),
      });

      const data = await res.json();
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Perfeito! Já anotei tudo por aqui.",
        },
      ]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Compreendi! Para agilizar seu projeto, posso conectar você agora diretamente com nosso responsável técnico no WhatsApp oficial.",
        },
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  // URL Direta de WhatsApp com o Briefing já montado
  const whatsappBriefingUrl = `https://wa.me/5561984853485?text=${encodeURIComponent(
    getBriefingSummary()
  )}`;

  return (
    <section id="simulador" className="w-full max-w-5xl mx-auto my-8 sm:my-12 relative z-20">
      <div className="liquid-glass p-4 sm:p-6 md:p-10 border border-white/15 relative overflow-hidden rounded-2xl sm:rounded-3xl">
        {/* Topo do Simulador Inteligente */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#303590]/50 border border-[#85BCD7]/30 text-[#85BCD7] text-xs font-heading font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
              SIMULADOR DINÂMICO DE NECESSIDADE &amp; BRIEFING INTELIGENTE
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase font-heading">
              Encontre o Projeto Ideal Para o Seu Negócio
            </h3>
            <p className="text-sm text-neutral-300 font-sans mt-1">
              Diga qual é a sua área de atuação: sugerimos os itens mais eficientes e montamos o seu briefing para atendimento imediato.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono bg-white/[0.05] border border-white/10 px-3.5 py-2 rounded-xl shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Atendimento com IA + Engenharia Humana
          </div>
        </div>

        {/* PASSO 1: QUAL O SEU TIPO DE NEGÓCIO? */}
        <div className="mt-8 space-y-4">
          <label className="text-xs font-mono uppercase tracking-wider text-[#85BCD7] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#303590] text-white flex items-center justify-center text-[10px] font-bold">
              1
            </span>
            Qual é o seu tipo de negócio ou segmento?
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BUSINESS_NICHES_DATA.map((niche) => {
              const isSelected = selectedNiche?.id === niche.id;
              return (
                <button
                  key={niche.id}
                  type="button"
                  onClick={() => {
                    setSelectedNiche(niche);
                    // Pré-seleciona os itens recomendados desse perfil
                    const recommended = niche.suggestedItems
                      .filter((item) => item.recommended)
                      .map((item) => item.title);
                    setSelectedItems(recommended);
                  }}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-[#303590]/40 border-[#85BCD7] shadow-lg shadow-[#303590]/40 ring-1 ring-[#85BCD7]"
                      : "bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#85BCD7] group-hover:border-[#85BCD7]/40 transition-colors">
                      {niche.id === "clinica-consultorio" && <Stethoscope className="w-5 h-5 text-[#85BCD7]" />}
                      {niche.id === "loja-shopping-vitrine" && <ShoppingBag className="w-5 h-5 text-[#E06196]" />}
                      {niche.id === "restaurante-bar-cafeteria" && <UtensilsCrossed className="w-5 h-5 text-[#F7E540]" />}
                      {niche.id === "escritorio-advocacia-coworking" && <Scale className="w-5 h-5 text-[#D4AF37]" />}
                      {niche.id === "condominio-residencial-comercial" && <Building className="w-5 h-5 text-[#85BCD7]" />}
                      {niche.id === "industria-galpao-oficina" && <Factory className="w-5 h-5 text-neutral-300]" />}
                      {niche.id === "projeto-especial-customizado" && <Sparkles className="w-5 h-5 text-[#F7E540]" />}
                      {!["clinica-consultorio", "loja-shopping-vitrine", "restaurante-bar-cafeteria", "escritorio-advocacia-coworking", "condominio-residencial-comercial", "industria-galpao-oficina", "projeto-especial-customizado"].includes(niche.id) && (
                        <Layers className="w-5 h-5 text-[#85BCD7]" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-[#85BCD7] border border-white/10">
                      {niche.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {niche.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans mt-1 line-clamp-2">
                      {niche.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PASSO 2: ITENS SUGERIDOS PARA ESTE PERFIL (QUANDO SELECIONADO) */}
        {selectedNiche && (
          <div className="mt-8 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#85BCD7] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#303590] text-white flex items-center justify-center text-[10px] font-bold">
                  2
                </span>
                Soluções recomendadas para {selectedNiche.name}:
              </label>
              <span className="text-[11px] font-mono text-neutral-400">
                (Clique para marcar ou desmarcar o que precisa)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedNiche.suggestedItems.map((item) => {
                const isChecked = selectedItems.includes(item.title);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleItem(item.title)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? "bg-[#303590]/30 border-[#85BCD7]/70 shadow-md"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        isChecked
                          ? "bg-[#85BCD7] text-[#06070A]"
                          : "border border-white/20 bg-white/[0.05]"
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white font-heading">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 bg-white/[0.05] px-1.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-300 font-sans mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* PASSO 3: O QUE PROCURA NÃO É ISSO? OU TEM ALGUM DETALHE ESPECÍFICO? */}
        {selectedNiche && (
          <div className="mt-8 space-y-4 pt-6 border-t border-white/10 animate-in fade-in duration-300">
            <label className="text-xs font-mono uppercase tracking-wider text-[#85BCD7] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#303590] text-white flex items-center justify-center text-[10px] font-bold">
                3
              </span>
              O que você procura não está acima? Descreva aqui:
            </label>

            <textarea
              rows={3}
              value={customDemand}
              onChange={(e) => setCustomDemand(e.target.value)}
              placeholder="Ex: Preciso de uma fachada de 8 metros com iluminação quente indireta, placa de vidro para o corredor e 2 adesivos para vitrine..."
              className="w-full bg-white/[0.04] border border-white/15 rounded-2xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#85BCD7] transition-all font-sans"
            />

            {/* Dados Complementares Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[11px] font-mono text-neutral-400 uppercase block mb-1">
                  Seu Nome ou Nome da Empresa (Opcional):
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Dra. Juliana / Padaria Bom Gosto"
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#85BCD7]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-neutral-400 uppercase block mb-1">
                  Região do DF / Entorno para Instalação:
                </label>
                <select
                  value={clientRegion}
                  onChange={(e) => setClientRegion(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#85BCD7]"
                >
                  <option value="Plano Piloto (Asa Sul / Norte)" className="bg-[#090B10]">
                    Plano Piloto (Asa Sul / Norte)
                  </option>
                  <option value="Águas Claras" className="bg-[#090B10]">Águas Claras</option>
                  <option value="Taguatinga" className="bg-[#090B10]">Taguatinga</option>
                  <option value="Sudoeste / Noroeste / Octogonal" className="bg-[#090B10]">
                    Sudoeste / Noroeste / Octogonal
                  </option>
                  <option value="Lago Sul / Lago Norte" className="bg-[#090B10]">
                    Lago Sul / Lago Norte
                  </option>
                  <option value="Guará I e II" className="bg-[#090B10]">Guará I e II</option>
                  <option value="Ceilândia / Samambaia" className="bg-[#090B10]">
                    Ceilândia / Samambaia
                  </option>
                  <option value="SIA / SOF Sul" className="bg-[#090B10]">SIA / SOF Sul</option>
                  <option value="Valparaíso / Entorno DF" className="bg-[#090B10]">
                    Valparaíso / Entorno DF
                  </option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* PASSO 4: TEXTO GERADO AUTOMATICAMENTE + AÇÕES DE ENVIO */}
        {selectedNiche && (
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#F7E540] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Briefing Pronto para Iniciar Atendimento:
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                Texto formatado em tempo real
              </span>
            </div>

            {/* Caixa com o texto gerado */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/15 text-xs text-neutral-200 font-mono whitespace-pre-line leading-relaxed">
              {getBriefingSummary()}
            </div>

            {/* Botões Duplos: Iniciar Chat Online com IA ou Enviar via WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleStartOnlineChat}
                className="w-full sm:w-1/2 py-4 rounded-2xl bg-gradient-to-r from-[#303590] via-[#1C205C] to-[#303590] hover:opacity-95 border border-[#85BCD7]/40 text-white text-sm font-heading font-bold flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#303590]/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#85BCD7]" />
                Chat Online
              </button>

              <a
                href={whatsappBriefingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-black text-sm font-heading font-bold flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-950/40 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-black" />
                Enviar Direto no WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* MODAL DO CHAT ONLINE INTELIGENTE COM IA */}
        {isChatOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
            <div className="w-full max-w-2xl bg-[#090B10] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[580px]">
              {/* Header do Chat */}
              <div className="p-4 bg-gradient-to-r from-[#1C205C] via-[#303590] to-[#1C205C] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Bot className="w-5 h-5 text-[#85BCD7]" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1C205C] animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                      Assistente Técnica Sinal Sign
                      <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full text-[#F7E540]">
                        IA Ativa
                      </span>
                    </h4>
                    <p className="text-[11px] text-neutral-300 font-sans">
                      Atendimento humanizado para triagem e pré-orçamento no DF
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="text-xs font-mono text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>

              {/* Mensagens do Chat */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#06070A] to-[#090B10]">
                {chatMessages.map((msg, idx) => {
                  const isAssistant = msg.role === "assistant";
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${
                        isAssistant ? "justify-start" : "justify-end"
                      }`}
                    >
                      {isAssistant && (
                        <div className="w-8 h-8 rounded-full bg-[#303590] text-white flex items-center justify-center text-xs shrink-0 font-bold border border-[#85BCD7]/40">
                          SS
                        </div>
                      )}

                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                          isAssistant
                            ? "bg-white/[0.06] border border-white/10 text-neutral-200 font-sans"
                            : "bg-[#303590] text-white font-sans border border-[#85BCD7]/30"
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>

                      {!isAssistant && (
                        <div className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {isAiThinking && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#85BCD7] p-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Assistente analisando detalhes do projeto...
                  </div>
                )}
              </div>

              {/* Barra de Ação de Transferência Humana */}
              <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-xs font-sans text-neutral-400">
                <span>Deseja falar com engenheiro humano agora?</span>
                <a
                  href={whatsappBriefingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
                >
                  Continuar no WhatsApp <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Input de Mensagem */}
              <form onSubmit={handleSendMessage} className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escreva sua mensagem ou dúvida sobre materiais..."
                  className="flex-1 bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#85BCD7]"
                />
                <button
                  type="submit"
                  disabled={isAiThinking || !inputMessage.trim()}
                  className="w-12 h-11 rounded-xl bg-[#303590] hover:bg-[#252a75] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer border border-[#85BCD7]/30"
                >
                  <Send className="w-4 h-4 text-[#85BCD7]" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
