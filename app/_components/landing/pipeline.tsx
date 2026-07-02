"use client";

import {
  User,
  Cpu,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Cameras",
    desc: "IP / CCTV",
  },
  {
    icon: Cpu,
    title: "Video Streams",
    desc: "Real-time ingestion",
    glow: true,
  },
  {
    icon: Building2,
    title: "AI Processing",
    desc: "Vision models",
  },
  {
    icon: Sparkles,
    title: "Detection",
    desc: "Object & event detection",
  },
  {
    icon: Sparkles,
    title: "Alerts",
    desc: "Insights & analytics",
  },
];

export default function FlowChart() {
  return (
    <section className="relative overflow-hidden px-6 selection:text-black">
      {/* Keyframes to smoothly drive one icon across the entire component */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes globalRun {
          0% {
            left: 0%;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .animate-global-runner {
          animation: globalRun 6s linear infinite;
        }
      `}} />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* FLOW CONTAINER */}
        <div className="relative py-12">
          
          {/* Static Background Line */}
          <div className="absolute left-[110px] right-[110px] top-1/2 hidden h-[2px] -translate-y-1/2 bg-[#00AEEF]/20 md:block z-0" />

          {/* Running Icon Container Track */}
          <div className="absolute left-[110px] right-[110px] top-1/2 hidden -translate-y-1/2 md:block h-6 z-10 pointer-events-none">
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 animate-global-runner flex items-center justify-center">
              {/* Glowing Runner Icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute h-6 w-6 rounded-full bg-[#00AEEF]/40 blur-md animate-pulse" />
                <ArrowRight size={18} className="text-[#00AEEF] relative z-10 drop-shadow-[0_0_8px_#00AEEF]" />
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="relative flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between z-20">
            {steps.map((step) => (
              <div key={step.title} className="flex items-center">
                <Node {...step} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= NODE ================= */

function Node({
  icon: Icon,
  title,
  desc,
  glow = false,
}: {
  icon: any;
  title: string;
  desc: string;
  glow?: boolean;
}) {
  return (
    <div className="relative w-[220px] shrink-0">
      {/* Glow */}
      {glow && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[140px] w-[140px] rounded-full bg-[#00AEEF]/10 blur-[60px]" />
        </div>
      )}

      {/* Card */}
      <div className="relative rounded-lg border border-white/10 bg-[#0d1425] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/40 hover:bg-white/[0.06]">
        {/* Icon */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#00AEEF]/20 bg-[#00AEEF]/10">
            <Icon size={20} className="text-[#00AEEF]" />
          </div>

          <h3 className="text-sm font-medium text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-white/60">{desc}</p>
      </div>
    </div>
  );
}
