"use client";

import { Star, ShieldCheck, ExternalLink, Quote } from "lucide-react";

export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  avatarLetter: string;
  serviceType: string;
}

export const GOOGLE_REVIEWS_TOP10: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Eng. Marcos Albuquerque",
    role: "Diretor de Obras • Construtora Alvorada DF",
    rating: 5,
    date: "Há 1 semana",
    comment:
      "A Sinal Sign entregou toda a fachada em ACM e os totens do nosso centro clínico em Águas Claras com precisão milimétrica. O acabamento dos acrílicos e a fixação estrutural foram impecáveis. Recomendo de olhos fechados!",
    avatarLetter: "M",
    serviceType: "Fachada em ACM & Totem",
  },
  {
    id: "rev-2",
    author: "Dra. Camila Resende",
    role: "Sócia-Fundadora • Resende Advocacia Asa Sul",
    rating: 5,
    date: "Há 2 semanas",
    comment:
      "Fizemos o logotipo em acrílico espelhado dourado para a recepção do nosso escritório e a sinalização interna. Ficou simplesmente deslumbrante, elevou o padrão da nossa clínica para outro nível.",
    avatarLetter: "C",
    serviceType: "Logo em Acrílico Espelhado",
  },
  {
    id: "rev-3",
    author: "Thiago Vasconcelos",
    role: "Gestor Operacional • Auto Prime Motors",
    rating: 5,
    date: "Há 3 semanas",
    comment:
      "Qualidade do corte laser e da pintura automotiva das letras caixa é absurda. Módulos de LED muito fortes e uniformes, com efeito backlight perfeito à noite. Atendimento ágil e entrega antes do prazo.",
    avatarLetter: "T",
    serviceType: "Letras Caixa 3D com LED",
  },
  {
    id: "rev-4",
    author: "Síndico Roberto Freitas",
    role: "Condomínio Residencial Park Sul",
    rating: 5,
    date: "Há 1 mês",
    comment:
      "Substituímos toda a sinalização predial e placas viárias do condomínio. Material de alta espessura e resistente ao sol forte do DF. Instalação rápida e equipe muito educada e técnica.",
    avatarLetter: "R",
    serviceType: "Sinalização Predial & Viária",
  },
  {
    id: "rev-5",
    author: "Juliana Mendes",
    role: "Proprietária • Send Beauty Cosméticos",
    rating: 5,
    date: "Há 1 mês",
    comment:
      "Adesivagem das vitrines e letreiro frontal ficaram maravilhosos! A impressão UV tem cores muito vivas e a resolução é perfeita. O cuidado na instalação fez toda a diferença.",
    avatarLetter: "J",
    serviceType: "Vitrines & Impressão UV",
  },
  {
    id: "rev-6",
    author: "Dr. Fernando Siqueira",
    role: "Clínica Odonto Premium DF",
    rating: 5,
    date: "Há 1 mês",
    comment:
      "Profissionalismo de ponta do orçamento à instalação final. Projeto aprovado rapidamente e executado exatamente como renderizado no 3D. Nota 5 estrelas merecida!",
    avatarLetter: "F",
    serviceType: "Letras Inox & Painel Ripado",
  },
  {
    id: "rev-7",
    author: "Patricia Cavalcante",
    role: "Gerente de Marketing • Grupo Carlton",
    rating: 5,
    date: "Há 2 meses",
    comment:
      "Parceria de anos com a Sinal Sign. Já fizemos fachadas, backdrops e placas de homenagem. A usinagem CNC e o atendimento com medição in-loco em Brasília nos dá total segurança.",
    avatarLetter: "P",
    serviceType: "Backdrop & Placas em Acrílico",
  },
  {
    id: "rev-8",
    author: "Lucas Nogueira",
    role: "Administrador • Coworking Sudoeste",
    rating: 5,
    date: "Há 2 meses",
    comment:
      "Letras em PVC expandido com acabamento acetinado de alto padrão. Encaixe perfeito e suporte pós-instalação de primeira linha. Sem dúvida a melhor empresa de comunicação visual do DF.",
    avatarLetter: "L",
    serviceType: "Letra Caixa PVC Automotivo",
  },
  {
    id: "rev-9",
    author: "Beatriz Dornelles",
    role: "Arquiteta de Interiores",
    rating: 5,
    date: "Há 3 meses",
    comment:
      "Como arquiteta, sou muito exigente com alinhamento, solda e corte. A Sinal Sign é a única que executa fielmente o detalhamento técnico sem distorcer o projeto. Super recomendo a todos meus clientes.",
    avatarLetter: "B",
    serviceType: "Projetos Especiais & Acrílicos",
  },
  {
    id: "rev-10",
    author: "Gustavo Meireles",
    role: "Diretor Comercial • Rede Drogaria DF",
    rating: 5,
    date: "Há 3 meses",
    comment:
      "Padronização visual impecável em 4 unidades simultâneas. Prazo cumprido à risca, material de primeira e garantia real. Empresa séria com maquinário industrial próprio.",
    avatarLetter: "G",
    serviceType: "Fachadas ACM & Envelopamento",
  },
];

export function GoogleReviewsCarousel() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sinal+Sign+Comunicação+Visual+Brasília+DF";

  // Duplicamos a lista para criar um loop suave e lento (slow marquee)
  const infiniteReviews = [...GOOGLE_REVIEWS_TOP10, ...GOOGLE_REVIEWS_TOP10];

  return (
    <section id="avaliacoes" className="space-y-6 sm:space-y-8 py-3 sm:py-4">
      {/* Cabeçalho de Autoridade e Prova Social Google */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-3 sm:pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full liquid-pill text-[11px] sm:text-xs text-[#85BCD7] font-heading font-semibold mb-2 border border-[#85BCD7]/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>REPUTAÇÃO VERIFICADA NO GOOGLE • NOTA 4.9 DE SATISFAÇÃO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight uppercase font-heading">
            O Que Nossos Clientes Dizem no Google
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 max-w-2xl font-normal leading-relaxed">
            Confiança construída com precisão técnica, acabamento industrial e cumprimento rigoroso de prazos em obras por todo o Distrito Federal.
          </p>
        </div>

        {/* Badge Oficial Google com Nota 4.9 */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-3 sm:gap-4 border border-white/15 hover:border-[#85BCD7]/60 transition-all group shrink-0 shadow-xl shadow-black/40 rounded-xl sm:rounded-2xl w-fit"
        >
          {/* Logo Oficial Colorida do Google */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center p-2 shadow-md shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl font-black text-white font-heading">4.9</span>
              <div className="flex items-center text-[#F7E540]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F7E540]" />
                ))}
              </div>
            </div>
            <span className="text-[11px] sm:text-xs text-neutral-300 font-sans flex items-center gap-1 group-hover:text-[#85BCD7] transition-colors">
              Ver avaliações no Google <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </div>
        </a>
      </div>

      {/* Carrossel Infinito e Lento das 10 Últimas Avaliações */}
      <div className="relative w-full overflow-hidden py-2 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex items-stretch gap-3.5 sm:gap-6 w-max animate-reviews-slow">
          {infiniteReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="flex flex-col justify-between w-[275px] xs:w-[300px] sm:w-[380px] p-4 sm:p-6 rounded-2xl sm:rounded-3xl liquid-glass border border-white/10 hover:border-[#85BCD7]/50 transition-all shrink-0 group shadow-xl shadow-black/50"
            >
              {/* Topo do Card: Estrelas + Badge de Serviço */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#F7E540] gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F7E540]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded-full">
                    {rev.date}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-mono font-medium text-[#85BCD7] bg-[#303590]/30 border border-[#85BCD7]/30 px-2.5 py-0.5 rounded-full">
                  {rev.serviceType}
                </span>

                {/* Comentário Real */}
                <p className="text-xs text-neutral-200 font-sans leading-relaxed pt-1 italic line-clamp-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Autor da Avaliação */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#303590] to-[#85BCD7] text-white flex items-center justify-center font-bold text-xs shrink-0 font-heading shadow-md">
                  {rev.avatarLetter}
                </div>

                <div className="flex flex-col overflow-hidden">
                  <h4 className="text-xs font-bold text-white font-heading truncate">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-sans truncate">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
