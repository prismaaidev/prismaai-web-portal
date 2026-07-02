import Link from "next/link";
import React from "react";
import { PocRequestModal } from "./poc-request-modal";
import { Cpu } from "lucide-react";

export default function HeroLanding() {
  return (
    <section className="relative mt-16 mb-0 w-full bg-[#020618] text-white flex items-center justify-center px-6 pt-10 md:px-0 lg:px-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00AEEF]/10 blur-[120px]" />

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        {/* Left Content Side */}
        <div className="flex flex-col space-y-6 max-w-xl">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border w-[272px] border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-2 text-xs text-white/70">
            <Cpu size={14} className="text-[#00AEEF]" />
            AI-Powered Computer Vision Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-slate-100">
            Transform Camera Smart{" "}
            <span className="text-[#00AEEF]">Intelligence</span> with Visual AI
            {/* A Global Pioneer in Visual{" "}
             Intelligence */}
          </h1>

          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            Transform video feeds into real-time operational intelligence with
            AI-powered vision systems built for facilities, infrastructure, and
            large-scale operations.
          </p>

          <div className="flex  flex-wrap gap-4 pt-4">
         
               <Link
              href="/contact"
              className="rounded-lg  px-6 py-2  lg:inline-flex px-6 rounded-lg bg-[#00AEEF] text-white text-sm font-medium flex items-center gap-2 hover:bg-[#0095cc] transition shadow-[0_0_30px_rgba(0,174,239,0.25)]"
            >
              Book a Demo
            </Link>
            <Link
              href="/solutions"
              className=" rounded-lg px-6 py-2 lg:inline-flex text-sm font-medium items-center gap-2 transition border border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white"
            >
              Explore Soluction
            </Link>
          </div>
        </div>

        {/* Right Media Side */}
        <div className="relative w-full aspect-video lg:aspect-square max-w-xl mx-auto flex items-center justify-center">
          {/* Video Container Wrapper */}
          <div className="w-[96%] h-[96%] rounded-lg overflow-hidden relative group bg-slate-900/50 border border-white/5 shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/videos/landing_hero.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
