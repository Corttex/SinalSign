import Image from "next/image";

interface SinalSignLogoProps {
  variant?: "blue" | "white" | "black" | "icon" | "icon-transparent";
  className?: string;
  width?: number;
  height?: number;
  showSubtitle?: boolean;
}

export function SinalSignLogo({
  variant = "white",
  className = "",
  width = 180,
  height = 50,
  showSubtitle = true,
}: SinalSignLogoProps) {
  if (variant === "icon") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Icon.svg"
          alt="Sinal Sign Comunicação Visual"
          className="w-10 h-10 object-contain drop-shadow-[0_4px_16px_rgba(48,53,144,0.4)]"
          width={40}
          height={40}
        />
      </div>
    );
  }

  if (variant === "blue") {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Logo Azul.svg"
          alt="Sinal Sign Comunicação Visual"
          className="h-10 w-auto object-contain drop-shadow-[0_4px_20px_rgba(48,53,144,0.35)]"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {/* Tipografia Vetorial Negativa Oficial Limpa (Sem o Ícone Circular) */}
      <div className="flex flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Negativa White.svg"
          alt="Sinal Sign Comunicação Visual"
          className="h-7 md:h-8 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        />
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#85BCD7]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06196]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F7E540]" />
            <span className="text-[9px] font-mono tracking-widest text-[#85BCD7] uppercase ml-1">
              BRASÍLIA • DF
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
