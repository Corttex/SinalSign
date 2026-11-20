"use client";

import { useEffect, useState } from "react";

const SERVICES_ROTATION = [
  "Fachadas em ACM",
  "Acrílicos de Precisão",
  "Letras Caixa em Relevo",
  "Chapas em PS & Totens",
  "Adesivagem de Frotas",
  "Adesivos de Vitrine",
  "Impressão UV & DTF",
  "Luminosos em LED",
  "Sinalização Viária",
  "Banners & Lonas 440g",
];

export function TypewriterHeadline() {
  const [currentText, setCurrentText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = SERVICES_ROTATION[serviceIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitando
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pausa no texto completo antes de apagar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Apagando
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % SERVICES_ROTATION.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, serviceIndex]);

  return (
    <div className="w-full flex flex-col gap-0.5 sm:gap-1.5">
      {/* LINHA 1: Especialistas em */}
      <div className="text-[1.35rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black tracking-tight text-white/90 uppercase font-heading leading-tight whitespace-nowrap">
        Especialistas em
      </div>

      {/* LINHA 2: Texto sendo escrito com altura reservada para nunca empurrar a Linha 3 */}
      <div className="min-h-[1.25em] text-[1.35rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black tracking-tight uppercase font-heading leading-tight flex items-center whitespace-nowrap">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85BCD7] via-[#E06196] to-[#F7E540] drop-shadow-[0_0_35px_rgba(48,53,144,0.65)]">
          {currentText}
        </span>
        <span className="inline-block w-[3px] sm:w-[4px] h-[0.8em] ml-2 bg-[#85BCD7] animate-pulse align-middle" />
      </div>

      {/* LINHA 3: em Brasília. fixo com total estabilidade */}
      <div className="text-[1.35rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-black tracking-tight text-white uppercase font-heading leading-tight opacity-95 whitespace-nowrap">
        em Brasília.
      </div>
    </div>
  );
}
