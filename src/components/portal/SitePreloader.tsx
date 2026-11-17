"use client";

import { useEffect, useState } from "react";

export function SitePreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1. Trava anti-congelamento absoluta (Fail-safe):
    // Se por qualquer razão (iOS WebKit, modo economia, aba inativa, etc.) passar de 3.5 segundos,
    // desmonta e libera a página principal imediatamente!
    const fallbackTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 300);
    }, 3500);

    // 2. Incremento progressivo do carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearTimeout(fallbackTimer);
          setTimeout(() => setFadeOut(true), 150);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        // Incremento rápido e suave para concluir em ~1.2s no máximo
        const increment = prev < 50 ? 12 : prev < 85 ? 8 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 35);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      onClick={() => {
        // Clique de emergência do usuário dispensa o loading instantaneamente
        setFadeOut(true);
        setTimeout(() => setLoading(false), 150);
      }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06070A] transition-opacity duration-500 ease-in-out cursor-pointer ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Luz ambiente de fundo */}
      <div
        className="absolute w-[360px] md:w-[450px] h-[360px] md:h-[450px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(48,53,144,${0.25 + (progress / 100) * 0.35}) 0%, rgba(133,188,215,${(progress / 100) * 0.25}) 60%, transparent 100%)`,
        }}
      />

      {/* Container Central com a Logo */}
      <div className="relative flex flex-col items-center justify-center pointer-events-none">
        {/* Caixa da Logo com Transição Cromática */}
        <div className="relative w-36 md:w-48 h-36 md:h-48 flex items-center justify-center">
          {/* Camada 1: Logo em Preto e Branco */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 brightness-75">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Icon.svg"
              alt="Sinal Sign Loading B&W"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Camada 2: Logo Oficial Revelada */}
          <div
            className="absolute inset-0 flex items-center justify-center drop-shadow-[0_0_25px_rgba(48,53,144,0.6)]"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`,
              WebkitClipPath: `inset(${100 - progress}% 0 0 0)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Icon.svg"
              alt="Sinal Sign Loading Color"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* Anel ao redor do Ícone */}
          <div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{
              borderColor: `rgba(133, 188, 215, ${progress / 180})`,
              boxShadow: `0 0 ${progress / 3}px rgba(48, 53, 144, 0.4)`,
              transform: `scale(${0.96 + (progress / 100) * 0.06})`,
            }}
          />
        </div>

        {/* Tipografia Vetorial Oficial */}
        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-6 md:h-7 w-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Negativa White.svg"
              alt="Sinal Sign"
              className="h-6 md:h-7 w-auto object-contain transition-opacity duration-300"
              style={{ opacity: Math.max(0.3, progress / 100) }}
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: progress > 30 ? "#85BCD7" : "#555" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: progress > 60 ? "#E06196" : "#555" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: progress > 85 ? "#F7E540" : "#555" }}
            />
            <span className="text-[10px] font-mono tracking-widest text-[#85BCD7] uppercase ml-1">
              BRASÍLIA • DF
            </span>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="mt-6 w-44 md:w-52 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#303590] via-[#85BCD7] to-[#F7E540] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Indicador Numérico Monospaçado */}
        <div className="mt-3 text-[11px] font-mono text-neutral-400 tracking-wider">
          CARREGANDO ENGENHARIA VISUAL • {progress}%
        </div>
      </div>
    </div>
  );
}
