"use client";

import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const stepsData = [
  {
    id: 1,
    title: "Define Scope",
    description:
      "Work with our team to define the deployment scope and operational objectives.",
    imageUrl: "/deploiment/define_scope.png",
  },
  {
    id: 2,
    title: "Configure AI Models",
    description:
      "We configure the AI vision models and detection capabilities best suited for your environment.",
    imageUrl: "/deploiment/configure_ai_models.png",
  },
  {
    id: 3,
    title: "Run Proof of Concept",
    description:
      "A controlled pilot validates system performance within your operational environment.",
    imageUrl: "/deploiment/run_poc.png",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Once validated, the system is deployed across your operational infrastructure.",
    imageUrl: "/deploiment/deployment.png",
  },
];

export default function DeploymentProcess() {
  const [activeStep, setActiveStep] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveStep((prevStep) => (prevStep % stepsData.length) + 1);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="w-full text-white flex flex-col justify-center items-center px-4 selection:bg-cyan-500 selection:text-black">
      <div className="relative w-full max-w-7xl">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes borderBlink {
            0%, 100% { border-color: rgba(0, 174, 239, 0.3); box-shadow: 0 0 4px rgba(0, 174, 239, 0.1); }
            50% { border-color: rgba(0, 174, 239, 1); box-shadow: 0 0 12px rgba(0, 174, 239, 0.4); }
          }
          .animate-border-blink {
            animation: borderBlink 1.5s infinite ease-in-out;
          }
        `,
          }}
        />

        <div
          className="w-full border border-slate-800 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Side: Step Progress Navigation (Width 50%) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:p-12 bg-transparent">
            <div className="flex flex-col relative w-full">
              {stepsData.map((step, index) => {
                const isCompleted = step.id < activeStep;
                const isActive = step.id === activeStep;
                const isLast = index === stepsData.length - 1;

                return (
                  <div
                    key={step.id}
                    className="flex items-start group cursor-pointer relative pb-8 last:pb-0"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Vertical Line Connector */}
                    {!isLast && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-slate-800 z-0">
                        <div
                          className="w-full bg-[#00AEEF] transition-all duration-500 origin-top"
                          style={{ height: isCompleted ? "100%" : "0%" }}
                        />
                      </div>
                    )}

                    {/* Status Indicator Circle */}
                    <div className="relative z-10 mr-4">
                      {isCompleted ? (
                        <div className="w-10 h-10 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF] flex items-center justify-center text-[#00AEEF] shadow-[0_0_15px_rgba(0,174,239,0.2)] transition-all duration-300">
                          <Check className="w-5 h-5" />
                        </div>
                      ) : isActive ? (
                        <div className="w-10 h-10 rounded-full bg-[#00AEEF] border border-[#00AEEF] flex items-center justify-center text-white font-semibold shadow-[0_0_20px_rgba(0,174,239,0.4)] transition-all duration-300">
                          {step.id}
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 font-medium group-hover:border-slate-500 group-hover:text-slate-200 transition-all duration-300">
                          {step.id}
                        </div>
                      )}
                    </div>

                    {/* Text Content Block */}
                    <div
                      className={`flex-1 transition-all duration-300 rounded-lg p-3 -mt-2 flex items-center justify-between border ${
                        isActive
                          ? "bg-slate-800/40 border-[#00AEEF] animate-border-blink"
                          : "border-transparent hover:bg-slate-900/30"
                      }`}
                    >
                      <span
                        className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-white font-semibold"
                            : isCompleted
                              ? "text-slate-300"
                              : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </span>
                      {isActive && (
                        <span className="text-[#00AEEF] text-sm font-light animate-pulse font-sans">
                          →
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Content Box Full Image Display (Width 50%) */}
          <div className="w-full md:w-1/2 relative bg-transparent min-h-[400px] md:min-h-[500px] transition-all duration-500">
            {stepsData.map((step) => {
              if (step.id !== activeStep) return null;
              return (
                <div
                  key={step.id}
                  className="absolute inset-0 w-full h-full group overflow-hidden"
                >
                  {/* Full Size Image */}
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 dropping-shadow-sm">
                      {step.title}
                    </h3> */}
                    <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-md drop-shadow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
