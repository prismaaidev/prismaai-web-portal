"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BENEFITS_DATA = [
  {
    id: 1,
    title: "PREVENTION OF IDENTITY FRAUDS",
    bullets: [
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
    ],
    imageUrl: "/img/test-m1.png", 
  },
  {
    id: 2,
    title: "PREVENTION OF IDENTITY FRAUDS 1",
    bullets: [
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
    ],
    imageUrl: "/img/test-m2.png",
  },
  {
    id: 3,
    title: "PREVENTION OF IDENTITY FRAUDS 2",
    bullets: [
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
    ],
    imageUrl: "/img/test-m1.png",
  },
  {
    id: 4,
    title: "PREVENTION OF IDENTITY FRAUDS 4",
    bullets: [
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
      "Browse the Marketplace, educational videos,",
    ],
    imageUrl: "/img/test-m2.png",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function BenefitsSectionSEC() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = BENEFITS_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection: number) => {
    let nextIndex = page + newDirection;
    if (nextIndex >= totalItems) nextIndex = 0;
    if (nextIndex < 0) nextIndex = totalItems - 1;
    setPage([nextIndex, newDirection]);
  };

  const idx0 = page;
  const idx1 = (page + 1) % totalItems;
  
  const visibleItems = isMobile 
    ? [{ data: BENEFITS_DATA[idx0], type: "full" }] 
    : [
        { data: BENEFITS_DATA[idx0], type: "full" }, 
        { data: BENEFITS_DATA[idx1], type: "partial" }
      ];

  return (
    <section className="text-white px-4  md:pr-0 font-sans min-h-[75vh] flex flex-col justify-center select-none overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-end mb-10 gap-6 ">
          <div className="md:col-span-8 space-y-4  ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
              Benefits
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-lg font-light leading-relaxed">
              Browse the Marketplace, educational videos, and customer stories to find what you need to succeed with Webflow.
            </p>
          </div>
        
          {/* Desktop Controls Buttons (Hidden on mobile) */}
          <div className="hidden md:flex md:col-span-4 justify-end gap-3 pb-2">
            <button
              onClick={() => paginate(-1)}
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all focus:outline-none text-gray-300 hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all focus:outline-none text-gray-300 hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Updated Height Area to make space for mobile layout */}
        <div className="w-full relative min-h-[622px] sm:min-h-[580px] md:min-h-[400px] lg:min-h-[350px] overflow-visible">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ 
                x: { type: "spring", stiffness: 180, damping: 24 }, 
                opacity: { duration: 0.2 } 
              }}
              className="flex gap-6 w-full absolute top-0 left-0"
            >
              {visibleItems.map(({ data, type }) => (
                <div
                  key={data.id}
                  className={`border border-gray-800/80 bg-[#0d1425] backdrop-blur-md rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 lg:gap-8 items-center shrink-0 transition-all duration-300 hover:border-gray-700 h-auto overflow-hidden ${
                    type === "partial" 
                      ? "w-[45%] opacity-35 pointer-events-none" 
                      : "w-full md:w-[85%] lg:w-[80%]" 
                  }`}
                >
                  {/* Left Side: Image container */}
                 <div className="w-full md:w-[45%] lg:w-[40%] min-w-[180px] md:min-w-[240px] max-w-[320px] aspect-square rounded-lg overflow-hidden relative shadow-xl shrink-0 flex items-center justify-center">
  <img
    src={data.imageUrl}
    alt={`${data.title} graphic`}
    className="w-full h-full "
    loading="eager"
  />
</div>

                  {/* Right Side: Copy Structure */}
                  <div className="flex-1 w-full min-w-[260px] space-y-5 align-middle self-center py-2 shrink-0">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-gray-100 leading-snug uppercase">
                      {data.title}
                    </h3>
                    
                    <ul className="space-y-3 list-none m-0 p-0">
                      {data.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm flex items-start gap-3 leading-relaxed">
                          <span className="text-white mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-white/70" />
                          <span className="text-justify">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Controls Buttons (Pushed lower down) */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-gray-700 bg-[#0d1127]/60 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all focus:outline-none text-gray-300 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-gray-700 bg-[#0d1127]/60 flex items-center justify-center hover:bg-white/5 active:scale-95 transition-all focus:outline-none text-gray-300 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
