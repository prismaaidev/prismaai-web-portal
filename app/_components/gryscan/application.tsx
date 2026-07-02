"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Interface for slide data
interface ApplicationSlide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  overlayText?: string;
}

// Sample mock data matching your UI layout structure
const slideData: ApplicationSlide[] = [
  {
    id: 1,
    title: "Luggage X-ray Image Auto Annotation",
    description: "AI auto‑annotates suggested items in x‑ray luggage scans, speeding screening, reducing errors, and improving efficiency.",
    imageSrc: "/img/test-m1.png", // Hospital/Clinic stock image
    imageAlt: "Medical environment scanning analysis",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  },
  {
    id: 2,
    title: "Pilferage Detection at Inline",
    description: "AI monitors inline camera feeds to detect pilferage, sending instant alerts when passenger bags are opened.",
    imageSrc: "/img/test-m2.png", // Aerial airport stock image
    imageAlt: "Airport terminal aerial view",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  },
  {
    id: 3,
    title: "Offender Notification at Red Channel",
    description: "AI flags passengers at the red channel via facial match with offender list, sending real‑time push alerts to the Prisma AI app.",
    imageSrc: "/img/test-m1.png",
    imageAlt: "Digital data network stream",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  },
   {
    id: 4,
    title: "In App Loitering Notification",
    description: "System will trigger in-app loitering notification for passengers who leaves the airport after staying at airport for long duration",
    imageSrc: "/img/test-m2.png", // Aerial airport stock image
    imageAlt: "Airport terminal aerial view",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  },
    {
    id: 5,
    title: "Passport number extraction",
    description: "The AI model extracts the data from machine readable zone (MRZ) in passport and automatically screens against the blacklist database.",
    imageSrc: "/img/test-m2.png", // Aerial airport stock image
    imageAlt: "Airport terminal aerial view",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  },
  {
    id: 6,
    title: "Unattended bag detection",
    description: "The AI model detects unaccompanied or stationary objects post defined cut-off duration.",
    imageSrc: "/img/test-m1.png",
    imageAlt: "Digital data network stream",
    overlayText: "Gain deeper clarity about your inner patterns and how your mind responds to everyday situations."
  }
];

export default function GryScanApplications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track if the user is hovering over images

  // Auto-advance carousel functionality (Pauses when isPaused is true)
  useEffect(() => {
    if (isPaused) return; // Exit and do not set interval if paused

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideData.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isPaused]); // Reset interval whenever pause state changes

  // Compute indices to show two items simultaneously (matching the reference UI)
  const firstItemIndex = activeIndex;
  const secondItemIndex = (activeIndex + 1) % slideData.length;

  return (
    <div className="w-full mb-25 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans antialiased">
      {/* Main Container Card */}
      <div className="w-full max-w-7xl rounded-lg border-1 border-white bg-[#0d1425] p-6 sm:p-10 md:p-12 lg:p-16  relative overflow-hidden group">
        
        {/* Decorative background glow animation */}
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:bg-blue-500/15" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Fixed Header Text */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              GrySCAN <br />
                <span className="text-[#00AEEF]">Applications</span>
              
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm"
            >
              Gain deeper clarity about your inner patterns and how your mind responds to everyday situations.
            </motion.p>
          </div>

          {/* Right Column: Interactive Animated Slide Track */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8">
            
            {/* Cards Grid Container - Monitors mouse entry and exit */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                
                {/* Visible Card 1 */}
                <motion.div
                  key={`card-1-${firstItemIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col space-y-4"
                >
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-900 group/card shadow-lg cursor-pointer">
                    <Image
                      src={slideData[firstItemIndex].imageSrc}
                      alt={slideData[firstItemIndex].imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                      sizes="(max-w-768px) 100vw, 350px"
                    />
                    {slideData[firstItemIndex].overlayText && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                        <p className="text-white/500 text-sm md:text-base leading-relaxed max-w-sm">
                          {slideData[firstItemIndex].overlayText}
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-white tracking-wide">
                    {slideData[firstItemIndex].title}
                  </h3>
                </motion.div>

                {/* Visible Card 2 */}
                <motion.div
                  key={`card-2-${secondItemIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeInOut" }}
                  className="flex flex-col space-y-4 hidden sm:flex"
                >
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-900 group/card shadow-lg cursor-pointer">
                    <Image
                      src={slideData[secondItemIndex].imageSrc}
                      alt={slideData[secondItemIndex].imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                      sizes="(max-w-768px) 100vw, 350px"
                    />
                    {slideData[secondItemIndex].overlayText && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-4">
                        <p className="text-white/500 text-sm md:text-base leading-relaxed max-w-sm">
                          {slideData[secondItemIndex].overlayText}
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-white tracking-wide">
                    {slideData[secondItemIndex].title}
                  </h3>
                </motion.div>

              </AnimatePresence>
            </div>

            {/* Custom Pagination Indicator Track */}
            <div className="flex items-center space-x-2 pt-2 self-start sm:self-center lg:self-start">
              {slideData.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="focus:outline-none relative h-1.5 transition-all duration-300"
                    style={{ width: isActive ? "2rem" : "0.375rem" }}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`h-full w-full rounded-full transition-all duration-500 ${
                        isActive ? "bg-[#00a2ff]" : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
