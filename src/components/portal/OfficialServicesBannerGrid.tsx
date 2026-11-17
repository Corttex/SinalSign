"use client";

import { useState } from "react";
import { OFFICIAL_SERVICES_18, OfficialServiceCategory } from "@/lib/officialServicesData";
import { ArrowUpRight, PhoneCall, Sparkles, Images, X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export function OfficialServicesBannerGrid() {
  const [selectedService, setSelectedService] = useState<OfficialServiceCategory | null>(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0);

  const openGallery = (service: OfficialServiceCategory) => {
    setSelectedService(service);
    setCurrentPhotoIdx(0);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setCurrentPhotoIdx(0);
  };

  const nextPhoto = () => {
    if (!selectedService || selectedService.realPhotos.length === 0) return;
    setCurrentPhotoIdx((prev) => (prev + 1) % selectedService.realPhotos.length);
  };

  const prevPhoto = () => {
    if (!selectedService || selectedService.realPhotos.length === 0) return;
    setCurrentPhotoIdx((prev) => (prev - 1 + selectedService.realPhotos.length) % selectedService.realPhotos.length);
  };

  return (
    <section id="solucoes" className="space-y-10">
      {/* Topo da Seção de Serviços */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill text-xs text-[#85BCD7] font-heading font-semibold mb-2 border border-[#85BCD7]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F7E540]" />
            CATÁLOGO & PORTFÓLIO REAL • 18 CATEGORIAS E 146 OBRAS ENTREGUES NO DF
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase font-heading">
            Nossas Categorias de Serviços
          </h2>
          <p className="text-sm text-neutral-300 font-sans mt-2 max-w-2xl font-normal">
            Fabricação própria com usinagem a laser, CNC Router, corte eletrônico e impressão UV direta. Clique em qualquer serviço para visualizar as fotos reais das obras executadas pela Sinal Sign.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#simulador"
            className="liquid-pill px-6 py-3 rounded-xl text-xs font-heading font-semibold text-white hover:text-[#85BCD7] flex items-center gap-2 border border-white/15 w-fit shrink-0"
          >
            Simular Medidas por m²
            <ArrowUpRight className="w-3.5 h-3.5 text-[#85BCD7]" />
          </a>
        </div>
      </div>

      {/* Grid de Banners Visuais: 18 Categorias Oficiais com Fotos Reais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {OFFICIAL_SERVICES_18.map((item) => {
          const waUrl = `https://wa.me/5561984853485?text=${encodeURIComponent(
            `Olá Sinal Sign! Gostaria de solicitar um orçamento para o serviço de: ${item.name}.`
          )}`;

          return (
            <div
              key={item.id}
              className="group relative min-h-[360px] rounded-3xl overflow-hidden border border-white/10 bg-[#06070A] flex flex-col justify-between p-7 transition-all duration-500 hover:border-[#85BCD7]/70 shadow-xl shadow-black/70"
            >
              {/* Imagem Fotográfica Real de Fundo com Alta Nitidez e Zoom Suave */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={`Serviço de ${item.name} em Brasília - Sinal Sign`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0 opacity-70 group-hover:opacity-85 brightness-95"
                loading="lazy"
              />

              {/* Película de Vidro Líquido Gradual Escurecida na Base para Legibilidade Perfeita */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-[#06070A]/60 to-black/25 z-0 pointer-events-none group-hover:via-[#06070A]/50 transition-colors" />

              {/* Topo do Bloco: Badge da Especialidade + Contador de Fotos Reais */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[#85BCD7] backdrop-blur-md">
                  {item.badge}
                </span>

                <button
                  type="button"
                  onClick={() => openGallery(item)}
                  title="Ver fotos reais deste serviço"
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#303590] border border-white/15 hover:border-[#85BCD7]/50 flex items-center gap-1.5 text-[11px] font-medium text-white transition-all cursor-pointer backdrop-blur-md group-hover:scale-105"
                >
                  <Images className="w-3.5 h-3.5 text-[#F7E540]" />
                  <span>{item.photosCount} {item.photosCount === 1 ? "foto" : "fotos"}</span>
                </button>
              </div>

              {/* Base do Bloco: Título, Síntese e Botões de Ação */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#85BCD7] transition-colors leading-snug font-heading">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  {/* Botão Ver Obras Reais */}
                  <button
                    type="button"
                    onClick={() => openGallery(item)}
                    className="w-full py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md"
                  >
                    <Images className="w-3.5 h-3.5 text-[#85BCD7]" />
                    Ver {item.photosCount} {item.photosCount === 1 ? "Obra Real" : "Obras Reais"}
                  </button>

                  {/* Botão Orçamento Direto WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#303590] hover:bg-[#252a75] border border-[#85BCD7]/40 text-white text-xs font-heading font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#303590]/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F7E540]" />
                    Orçar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal / Carrossel em Alta Resolução de Obras Reais */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#090B10] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Header do Modal */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#85BCD7] animate-pulse" />
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-white uppercase flex items-center gap-2">
                    {selectedService.name}
                    <span className="text-xs font-mono font-normal text-[#85BCD7] border border-[#85BCD7]/30 px-2 py-0.5 rounded-full">
                      {selectedService.badge}
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Obras e referências reais fabricadas e instaladas pela Sinal Sign no Distrito Federal
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo Central: Foto Grande + Controles */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 min-h-[350px] md:min-h-[480px]">
              {selectedService.realPhotos.length > 0 ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedService.realPhotos[currentPhotoIdx]}
                    alt={`${selectedService.name} - Referência ${currentPhotoIdx + 1}`}
                    className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
                  />

                  {/* Botões de Navegação Anterior/Próxima */}
                  {selectedService.realPhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevPhoto}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        type="button"
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Contador Superior */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 border border-white/20 text-xs font-mono text-white backdrop-blur-md">
                    Foto {currentPhotoIdx + 1} de {selectedService.realPhotos.length}
                  </div>
                </>
              ) : (
                <div className="text-center text-neutral-400 text-sm">
                  Nenhuma imagem catalogada para esta categoria.
                </div>
              )}
            </div>

            {/* Barra de Miniaturas (Thumbnails) */}
            {selectedService.realPhotos.length > 1 && (
              <div className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-thin">
                {selectedService.realPhotos.map((photo, idx) => (
                  <button
                    key={photo}
                    type="button"
                    onClick={() => setCurrentPhotoIdx(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      idx === currentPhotoIdx
                        ? "border-[#85BCD7] scale-105 shadow-md shadow-[#85BCD7]/40"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Rodapé do Modal com CTA Direto */}
            <div className="p-4 bg-[#06070A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#85BCD7]" />
                <span>Gostou de alguma dessas referências? Fabricamos com o seu logotipo e medidas exatas.</span>
              </div>

              <a
                href={`https://wa.me/5561984853485?text=${encodeURIComponent(
                  `Olá Sinal Sign! Estive vendo as referências de ${selectedService.name} no site e gostaria de solicitar um orçamento para o meu projeto.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#303590] hover:bg-[#252a75] border border-[#85BCD7]/40 text-white text-xs font-heading font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#F7E540]" />
                Pedir Orçamento Deste Modelo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
