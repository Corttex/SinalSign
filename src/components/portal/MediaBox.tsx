"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface MediaBoxProps {
  id: string;
  title: string;
  subtitle?: string;
  aspectRatio?: "video" | "square" | "tall" | "wide";
  badge?: string;
  imageSrc?: string;
}

export function MediaBox({
  id,
  title,
  subtitle,
  aspectRatio = "video",
  badge,
  imageSrc,
}: MediaBoxProps) {
  const [imageError, setImageError] = useState(false);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    tall: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  return (
    <div
      className={`group relative w-full ${aspectClasses} rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] via-black/40 to-white/[0.01] transition-all duration-500 hover:border-[#85BCD7]/60 flex flex-col justify-between p-5 shadow-lg shadow-black/40`}
    >
      {/* Película de Vidro Líquido Otimizada para Garantir Maior Visibilidade da Foto */}
      {imageSrc && !imageError ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100 brightness-95"
          />
          {/* Película de Vidro Líquido e Contraste Tipográfico */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06070A]/95 via-black/20 to-black/15 group-hover:via-black/10 transition-colors pointer-events-none" />
        </>
      ) : null}

      {/* Indicador no Topo */}
      <div className="flex items-center justify-between z-10">
        {badge ? (
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[#85BCD7] backdrop-blur-md">
            {badge}
          </span>
        ) : (
          <div />
        )}

        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
          {id}
        </span>
      </div>

      {/* Fallback de Slot quando não há imagem */}
      {(!imageSrc || imageError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-0 pointer-events-none">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#85BCD7] group-hover:scale-110 transition-transform duration-500 shadow-inner">
            <ImageIcon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 mt-3 group-hover:text-white transition-colors">
            Bloco de Imagem do Projeto
          </span>
          <span className="text-[9px] font-mono text-neutral-600 mt-0.5">
            (Upload via CMS / Painel de Mídia)
          </span>
        </div>
      )}

      {/* Rodapé com Informações do Case / Serviço */}
      <div className="z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent -mx-5 -mb-5 p-5 pt-8 backdrop-blur-[1px]">
        <h4 className="text-sm font-semibold text-white tracking-tight leading-snug group-hover:text-[#85BCD7] transition-colors">
          {title}
        </h4>
        {subtitle && (
          <p className="text-xs text-neutral-300 mt-1 font-mono line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
