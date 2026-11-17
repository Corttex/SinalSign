"use client";

import { useEffect, useState } from "react";

export function SitePreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Incrementa suavemente o progresso simulando a hidratação e assets
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 250);
          setTimeout(() => setLoading(false), 850);
          return 100;
        }
        // Curva de aceleração orgânica
        const increment = prev < 50 ? 5 : prev < 85 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06070A] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Luz ambiente de fundo sincronizada com as cores da marca */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, rgba(48,53,144,${0.2 + (progress / 100) * 0.45}) 0%, rgba(133,188,215,${(progress / 100) * 0.3}) 60%, transparent 100%)`,
        }}
      />

      {/* Container Central com a Logo e Efeito Preto & Branco -> Colorido */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Caixa da Logo com Transição Cromática Progressiva */}
        <div className="relative w-44 md:w-56 h-44 md:h-56 flex items-center justify-center">
          {/* Camada 1: Logo em Preto e Branco (Monocromática Fundo) */}
          <div className="absolute inset-0 flex items-center justify-center filter grayscale opacity-40 brightness-75">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Icon.svg"
              alt="Sinal Sign Loading B&W"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Camada 2: Logo Oficial Colorida Revelada por Máscara de Altura (clip-path) */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-150 ease-out drop-shadow-[0_0_25px_rgba(48,53,144,0.6)]"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Icon.svg"
              alt="Sinal Sign Loading Color"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Anel Pulsante de Vidro Líquido ao redor do Ícone */}
          <div
            className="absolute inset-0 rounded-full border border-white/10 pointer-events-none transition-all duration-500"
            style={{
              borderColor: `rgba(133, 188, 215, ${progress / 180})`,
              boxShadow: `0 0 ${progress / 3}px rgba(48, 53, 144, 0.4)`,
              transform: `scale(${0.95 + (progress / 100) * 0.08})`,
            }}
          />
        </div>

        {/* Tipografia Vetorial Oficial Revelada Suavemente */}
        <div className="mt-6 flex flex-col items-center">
          <div className="relative h-7 w-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Negativa White.svg"
              alt="Sinal Sign"
              className="h-7 w-auto object-contain transition-opacity duration-500"
              style={{ opacity: Math.max(0.2, progress / 100) }}
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: progress > 30 ? "#85BCD7" : "#555",
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: progress > 60 ? "#E06196" : "#555",
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: progress > 85 ? "#F7E540" : "#555",
              }}
            />
            <span className="text-[10px] font-mono tracking-widest text-[#85BCD7] uppercase ml-1">
              BRASÍLIA • DF
            </span>
          </div>
        </div>

        {/* Barra de Progresso Fina e Elegante */}
        <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#303590] via-[#85BCD7] to-[#F7E540] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Indicador Numérico Monospaçado de Precisão */}
        <div className="mt-3 text-[11px] font-mono text-neutral-400 tracking-wider">
          CARREGANDO ENGENHARIA VISUAL • {progress}%
        </div>
      </div>
    </div>
  );
}

