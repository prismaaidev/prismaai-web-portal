"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";

interface HeroSectionProps {
  label?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  height?: string;

  // optional logo
  logo?: string;

  // visibility controls
  showLogo?: boolean;
  showLabel?: boolean;
}

const HeroSection = ({
  label,
  title,
  logo,
  showLogo = true,
  showLabel = true,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 px-6">
      {/* LEFT SIDE PREMIUM GLOW */}
      <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00AEEF]/10 blur-[180px] rounded-full" />

      {/* SOFT CENTER BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00AEEF]/5 blur-[200px] rounded-full" />

      <div className="absolute inset-0">
        {/* main core glow */}
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#00AEEF]/20 blur-[180px] rounded-full animate-pulse" />

        {/* secondary glow */}
        <div className="absolute bottom-[-220px] right-[-120px] w-[520px] h-[520px] bg-[#00AEEF]/10 blur-[160px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />

        {/* sweeping energy layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00AEEF]/10 to-transparent animate-[ping_12s_linear_infinite] opacity-30" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* LOGO */}
        {showLogo && logo && (
          <div className="flex justify-center mb-0">
            <Image
              src={logo}
              alt="logo"
              width={130}
              height={70}
              className="object-contain"
            />
          </div>
        )}

        {/* LABEL */}
        {showLabel && label && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 backdrop-blur-xl tracking-wide">
            <Building2 size={14} className="text-[#00AEEF]" />
            {label}
          </div>
        )}

        {/* TITLE */}
        <h1 className="mt-7 text-4xl md:text-5xl font-medium tracking-tight leading-tight text-white">
          {title}
        </h1>

        {/* DIVIDER */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
