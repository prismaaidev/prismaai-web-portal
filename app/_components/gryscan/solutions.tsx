'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

// Unified Dataset: Using a single clean image URL per slide item
const UI_DATA = [
  {
    id: 1,
    imageSrc: '/img/test-m1.png', 
    heading: 'Why its matters?', 
    text1: 'Gain deeper clarity about your inner patterns and how your mind responds to everyday situations.',
    text2: 'By understanding your stress triggers, emotional responses, and behavioural tendencies, you uncover hidden blind spots that may influence your decisions.',
    text3: 'This awareness helps you respond consciously, improve emotional balance, and make confident choices - leading to stronger personal growth, better professional performance, and more intentional progress in life.',
  },
  {
    id: 2,
    imageSrc: '/img/test-m2.png',
    heading: 'Advanced Analytics',
    text1: 'Explore predictive behavior models powered by highly precise recognition engines.',
    text2: 'Track visual markers and biometrics smoothly to adapt your workflow without unnecessary delays.',
    text3: 'Build a comprehensive strategy around objective cognitive metrics tailored perfectly for your daily life.',
  },
   {
    id: 3,
    imageSrc: '/img/test-m1.png', 
    heading: 'Why its matters?', 
    text1: 'Gain deeper clarity about your inner patterns and how your mind responds to everyday situations.',
    text2: 'By understanding your stress triggers, emotional responses, and behavioural tendencies, you uncover hidden blind spots that may influence your decisions.',
    text3: 'This awareness helps you respond consciously, improve emotional balance, and make confident choices - leading to stronger personal growth, better professional performance, and more intentional progress in life.',
  },
  {
    id: 4,
    imageSrc: '/img/test-m2.png',
    heading: 'Advanced Analytics',
    text1: 'Explore predictive behavior models powered by highly precise recognition engines.',
    text2: 'Track visual markers and biometrics smoothly to adapt your workflow without unnecessary delays.',
    text3: 'Build a comprehensive strategy around objective cognitive metrics tailored perfectly for your daily life.',
  },
  {
    id: 5,
    imageSrc: '/img/test-m1.png',
    heading: 'Cognitive Tracking',
    text1: 'Gain true real-time visibility into focused states and distraction metrics.',
    text2: 'Leverage our neural telemetry pipelines to understand patterns behind peak creative output.',
    text3: 'Optimize your environment by taking action on data-backed insights delivered directly to you.',
  }
];

export default function GryScanSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % UI_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + UI_DATA.length) % UI_DATA.length);
  };

  const getVisibleThumbnails = () => {
    const total = UI_DATA.length;
    const firstVisibleIdx = activeIndex % total;
    const secondVisibleIdx = (activeIndex + 1) % total;
    return [
      { ...UI_DATA[firstVisibleIdx], globalIdx: firstVisibleIdx },
      { ...UI_DATA[secondVisibleIdx], globalIdx: secondVisibleIdx }
    ];
  };

  const currentData = UI_DATA[activeIndex];
  const visibleThumbs = getVisibleThumbnails();

  // FIX: Added explicit strict typing parentheses around (dir) to clear your editor error
  // Added ": number" to explicitly declare the type for TypeScript/ESLint
  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -40 : 40,
      opacity: 0
    })
  };


  return (
    <section className=" text-white flex flex-col items-center justify-center font-sans px-4 py-12 md:py-24 overflow-hidden selection:bg-indigo-500">
      
      {/* Title */}
      {/* <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-12 md:mb-20 text-slate-100"
      >
        GrySCAN AI Solutions
      </motion.h1> */}
<h2 className="text-3xl mb-17 text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
             AI Solutions
          </h2>
      {/* Main Grid Wrapper */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-2 md:px-6">
        
        {/* Left Side: Twin-Thumbnail Slider */}
        <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col items-center justify-center gap-5 order-2 lg:order-1 mt-6 lg:mt-0">
          
          {/* Arrow Up / Left */}
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-all active:scale-95 z-10 group"
          >
            <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors rotate-270 lg:rotate-0" />
          </button>

          {/* Masked Slider Area */}
          <div className="relative flex flex-row lg:flex-col gap-4 h-auto lg:h-[280px] w-auto items-center justify-center overflow-hidden py-1 px-1">
            <AnimatePresence mode="popLayout" custom={direction}>
              {visibleThumbs.map((item) => {
                const isSelected = item.globalIdx === activeIndex;
                return (
                  <motion.div
                    key={`${item.id}-${item.globalIdx}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={() => {
                      if (!isSelected) {
                        setDirection(1);
                        setActiveIndex(item.globalIdx);
                      }
                    }}
                    className={`relative w-20 h-24 md:w-28 md:h-32 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 shadow-xl ${
                      isSelected 
                        ? 'border-[#00AEEF] scale-105 ring-4 ring-indigo-500/20 opacity-100 z-10' 
                        : 'border-slate-800/80 opacity-40 hover:opacity-80'
                    }`}
                  >
                    {/* Replaced thumbSrc with shared imageSrc */}
                    <img 
                      src={item.imageSrc} 
                      alt="Nav interface preview thumbnail" 
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Corner Reticle Decoration */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-cyan-400/70" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-cyan-400/70" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Arrow Down / Right */}
          <button 
            onClick={handleNext}
            className="p-2 rounded-full border border-slate-800 bg-slate-900/60 hover:bg-slate-800 transition-all active:scale-95 z-10 group"
          >
            <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors rotate-270 lg:rotate-0" />
          </button>
        </div>

        {/* Center: Hero Image Display */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-slate-800/60 bg-slate-900/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97, x: direction * 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: -direction * 10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full"
              >
                {/* Replaced mainSrc with shared imageSrc */}
                <img 
                  src={currentData.imageSrc} 
                  alt="Primary feature display representation" 
                  className="w-full h-full object-cover object-center brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color-add opacity-30 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Description Content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center order-3 pl-0 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-5 text-left"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 tracking-tight leading-tight">
                {currentData.heading}
              </h2>
              <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed ">
                <p>{currentData.text1}</p>
                <p>{currentData.text2}</p>
                <p>{currentData.text3}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
