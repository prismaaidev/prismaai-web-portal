"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation"; // 1. Import router

const carouselItems = [
  {
    id: 1,
    slug: "banking", // 2. Add slugs matching your section IDs
    title: "Banking ",
    description: "Finance Solutions- Secure Verification",
    image: "/industries/banking-finance.png",
  },
  {
    id: 2,
    slug: "aviation",
    title: "Aviation",
    description: "Airport Security & Operations",
    image: "/industries/Aviation.png",
  },
  {
    id: 3,
    slug: "infrastructure",
    title: "Infrastructure",
    description: "Building Security",
    image: "/industries/Infrastructure.png",
  },
  {
    id: 4,
    slug: "security",
    title: "Security",
    description: "surveillance system",
    image: "/industries/Security.png",
  },
  {
    id: 5,
    slug: "education",
    title: "Education",
    description: "Campus Safety & Security",
    image: "/industries/Education.png",
  },
  {
    id: 6,
    slug: "events",
    title: "Events",
    description: "Smart Access & Crowd Safety",
    image: "/industries/Event.png",
  },
  {
    id: 7,
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Safety & Productivity",
    image: "/industries/Manufacturing.png",
  },
];

export default function SolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const router = useRouter(); // 3. Initialize router

  const handleCardClick = (index: number, slug: string) => {
    if (activeIndex === index) {
      // 4. If already active, redirect to the specific section
      router.push(`/solutions#${slug}`);
    } else {
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#020618] overflow-hidden select-none">
      <div className="relative flex items-center justify-center w-full max-w-7xl h-[420px]">
        {carouselItems.map((item, index) => {
          let position = index - activeIndex;
          if (position < -2) position += carouselItems.length;
          if (position > 2) position -= carouselItems.length;

          const isActive = position === 0;
          const isFarLeft = position === -2;
          const isLeft = position === -1;
          const isRight = position === 1;
          const isFarRight = position === 2;

          let xOffset = 0;
          if (isActive) xOffset = 0;
          if (isLeft) xOffset = -220;
          if (isFarLeft) xOffset = -420;
          if (isRight) xOffset = 220;
          if (isFarRight) xOffset = 420;

          return (
            <motion.div
              key={item.id}
              onClick={() => handleCardClick(index, item.slug)} // 5. Update click handler
              style={{
                borderColor: isActive ? "#00AEEF" : "rgba(255,255,255,0.03)",
                boxShadow: isActive ? "0 0 35px -5px rgba(33, 216, 210, 0.3)" : "none",
              }}
              animate={{
                scale: isActive ? 1.05 : isLeft || isRight ? 0.85 : 0.7,
                x: xOffset,
                zIndex: isActive ? 30 : isLeft || isRight ? 20 : 10,
                opacity: isActive ? 1 : isLeft || isRight ? 0.9 : 0.4,
                filter: isActive ? "blur(0px)" : isLeft || isRight ? "blur(1px)" : "blur(3px)",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="absolute w-[310px] h-[390px] rounded-lg bg-[#121318] border flex flex-col justify-end overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-transparent" />
              <div className="relative z-10 w-full p-6 flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex flex-col items-center"
                    >
                      <h3 className="text-xl font-medium text-white tracking-wide mb-2">{item.title}</h3>
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-[250px]">{item.description}</p>
                    </motion.div>
                  ) : (
                    <div className="w-full text-center transition-opacity duration-300">
                      <h3 className="text-sm font-medium text-neutral-500 tracking-wide truncate">{item.title}</h3>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute left-2 lg:left-8 z-40 p-3 rounded-full border border-neutral-800 bg-[#0b0c0e]/90 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-2 lg:right-8 z-40 p-3 rounded-full border border-neutral-800 bg-[#0b0c0e]/90 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {carouselItems.map((_, idx) => (
          <button key={idx} onClick={() => setActiveIndex(idx)} className="h-1 rounded-full transition-all duration-300 cursor-pointer" style={{ width: idx === activeIndex ? "28px" : "6px", backgroundColor: idx === activeIndex ? "#00AEEF " : "#24262e" }} />
        ))}
      </div>
    </div>
  );
}
