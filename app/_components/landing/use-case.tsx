"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAROUSEL_DATA = [
  {
    id: 1,
    title: "Progressive Smart Policing in Mumbai-Centric Design",
    description: "Prisma AI, with the MBVV Police Commissionerate, deployed Visual AI to transform urban policing across Mira–Bhayander–Vasai–Virar. ",
    imageUrl: "/use-case/mumbai-centric.png", 
  },
    {
    id: 2,
    title: "Maharashtra’s Leading Toll Operator",
    description: "Prisma AI’s Visual AI platform transforms toll monitoring at MEP Infra, ensuring accurate vehicle classification, axle counting.",
    imageUrl: "/use-case/toll-operator.png",
  },
      {
    id: 3,
    title: "SSST Shirdi – AI-Powered Smart Management Growth",
    description: "Prisma AI’s Cognitive Visual AI platform transforms security and visitor management at Shirdi Sai Baba Sansthan Trust.",
    imageUrl: "/use-case/SSST.png",
  },
  {
    id: 4,
    title: "Smart AI Policing",
    description: "Prisma AI’s Visual AI platform empowers Jaipur Police to enhance urban security with real-time crowd counting, person/vehicle re-identification.",
    imageUrl: "/use-case/jaipur-police 1.png",
  },

  {
    id: 5,
    title: "Smart AI-Driven Policing",
    description: "Prisma AI, with Surat Police, deployed Visual AI to modernize city policing. The system detects violations like red-light jumping.",
    imageUrl: "/use-case/smart-policing.png",
  },


];

const smoothFadeVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export default function UseCase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = CAROUSEL_DATA.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Set up auto-sliding timer that respects the hover state
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const firstCardIndex = currentIndex;
  const secondCardIndex = (currentIndex + 1) % totalItems;

  return (
    <div className="w-full  bg-[#020618] text-white flex flex-col justify-center items-center px-4  selection:bg-cyan-500 selection:text-black">
      <div className="relative w-full max-w-7xl">
        
  <div 
  className="w-full overflow-hidden cursor-pointer"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <AnimatePresence mode="popLayout" initial={false}>
    <motion.div
      key={currentIndex}
      variants={smoothFadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Card One Component layout */}
      {/* Added 'transition-colors duration-500 hover:border-[#00aeef]' */}
      <div className="group bg-gradient-to-br from-[#0f162a] to-[#0b0f19] border border-white/10 rounded-lg p-6 lg:p-6 flex flex-col lg:flex-row gap-6 items-center justify-between min-h-[320px] shadow-2xl transition-colors duration-500 hover:border-[#00aeef]">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-white leading-snug">
            {CAROUSEL_DATA[firstCardIndex].title}
          </h3>
          <p className="text-sm lg:text-base text-gray-400 leading-relaxed ">
            {CAROUSEL_DATA[firstCardIndex].description}
          </p>
        </div>
        <div className="w-full lg:w-[45%] aspect-[4/3] use-case-img rounded-lg overflow-hidden relative border border-white/5 bg-slate-900/50">
          <img
            src={CAROUSEL_DATA[firstCardIndex].imageUrl}
            alt="Fleet asset presentation frame"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        </div>
      </div>

      {/* Card Two Component layout */}
      {/* Added 'transition-colors duration-500 hover:border-[#00aeef]' */}
      <div className="hidden md:flex group bg-gradient-to-br from-[#0f162a] to-[#0b0f19] border border-white/10 rounded-lg p-6 lg:p-6 flex-col lg:flex-row gap-6 items-center justify-between min-h-[320px] shadow-2xl transition-colors duration-500 hover:border-[#00aeef]">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-white leading-snug">
            {CAROUSEL_DATA[secondCardIndex].title}
          </h3>
          <p className="text-sm lg:text-base text-gray-400 leading-relaxed ">
            {CAROUSEL_DATA[secondCardIndex].description}
          </p>
        </div>
        <div className="w-full lg:w-[45%] aspect-[4/3] use-case-img rounded-lg overflow-hidden relative border border-white/5 bg-slate-900/50">
          <img
            src={CAROUSEL_DATA[secondCardIndex].imageUrl}
            alt="Fleet asset presentation frame"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</div>



      </div>

      {/* Pagination Tracking Pill indicators */}
      <div className="mt-6 flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-md">
        {CAROUSEL_DATA.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative h-2.5 focus:outline-none group"
            >
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  isActive ? " w-10 bg-[#00aeef]" : "w-2.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
