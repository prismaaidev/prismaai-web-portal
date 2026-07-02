"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialData = [
  {
    id: "bag-tracking",
    name: "Bag Tracking",
    role: "Lost bag",
    // stars: 5,
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type and scrambled it.",
    image: "/carousel-Items/m4.jpg",
  },
  {
    id: "app-programming",
    name: "Application Programming Interface",
    role: "Core Framework",
    // stars: 5,
    quote: "Our deployment efficiency skyrocketed by nearly 40% within the very first month of integration. Seamless streaming pathways maximize daily system execution speeds.",
    image: "/carousel-Items/m3.jpg",
  },
  {
    id: "sprint-sync",
    name: "Sprint Optimization Modules",
    role: "Agile Development",
    // stars: 5,
    quote: "The interface completely revolutionized how our design team syncs up on daily sprints. It feels less like a tool and more like an extension of our collective engineering thoughts.",
    image:  "/carousel-Items/m2.jpg",
  },
  {
    id: "collaboration-hub",
    name: "Enterprise Global Testing Hub",
    role: "Deployment Protocol",
    // stars: 5,
    quote: "Allows your distributed infrastructure network to collaborate, safely experiment, and run critical performance tests much more effectively and efficiently.",
    image: "/carousel-Items/m1.jpg",
  },
  {
    id: "predictive-analytics",
    name: "Predictive Intelligence Engines",
    role: "AI Analytics Layer",
    // stars: 5,
    quote: "Advanced machine learning modules parse operational data metrics on the fly, accurately forecasting platform anomalies before they affect system stability.",
    image: "/carousel-Items/m4.jpg",
  },
  {
    id: "neural-routing",
    name: "Neural Data Routing",
    role: "Edge Protocol",
    // stars: 5,
    quote: "Real-time edge data streaming layer optimized with dynamic fail-safes to bypass local network spikes cleanly without losing payload packets.",
    image: "/carousel-Items/m4.jpg",
  },
];

export default function ModernDarkSlider() {
  const [items, setItems] = useState(initialData);
  
  // Position 2 (Index 1) is our permanent static focused frame window on desktop
  const activeCard = items[1]; 

  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === 1) return; // Already active center view

    let updatedItems = [...items];

    if (clickedIndex === 0) {
      // Rotate data backward natively
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
    } else {
      // Rotate data forward natively to shift item into the center active frame position
      const steps = clickedIndex - 1;
      for (let i = 0; i < steps; i++) {
        const firstItem = updatedItems.shift();
        updatedItems.push(firstItem);
      }
    }
    setItems(updatedItems);
  };

  return (
    <div className="relative min-h-screen w-full block overflow-x-hidden overflow-y-auto bg-slate-950 text-white font-sans antialiased py-12 flex flex-col justify-center">
      {/* Maximum grid constraint pushed out to max-w-[90rem] (1440px) to balance 4 sub-thumbnails elegantly */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 pb-20 flex flex-col items-center">
        
        {/* TOP LEVEL LOGO HEADER */}
        <div className="w-full text-center select-none mb-12 md:mb-16">
          {/* <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-300">
            Application Programming Interface
          </h2> */}
          <h2 className=" text-center text-3xl sm:text-4xl font-semibold text-white">Application Programming Interface</h2>
           
        </div>

        {/* MAIN DESIGN PLATFORM STAGE */}
        <div className="w-full flex flex-col md:grid md:grid-cols-[140px_380px_1fr] gap-6 md:gap-8 items-center md:items-end h-auto md:h-[480px] overflow-visible">
          
          {/* TRACK GROUP: Left thumbnail and Active Large Card */}
          <div className="w-full flex items-end justify-center gap-4 md:contents">
            
            {/* CARD POSITION 1 (Left Preview Thumbnail) */}
            <button
              onClick={() => handleCardClick(0)}
              className="hidden md:block group relative h-[160px] w-[140px] shrink-0 overflow-hidden rounded-lg bg-slate-900 shadow-lg focus:outline-none transition-transform duration-300 active:scale-95"
            >
              <img
                src={items[0].image}
                alt={items[0].name}
                className="h-full w-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
              />
            </button>

            {/* CARD POSITION 2 (Large Active Focused Center Window) */}
            <div className="relative h-[320px] w-[240px] sm:h-[480px] sm:w-[380px] shrink-0 overflow-hidden rounded-lg bg-slate-900 shadow-2xl border border-white/5">
              <img
                src={activeCard.image}
                alt={activeCard.name}
                className="h-full w-full object-cover opacity-90 brightness-[0.95]"
              />
              
              
            </div>

          </div>

          {/* COLUMN POSITION 3 (Right Text Info Box + Remaining 4 Sub-Thumbnails) */}
          <div className="flex flex-col justify-between h-auto md:h-[480px] md:pl-0 w-full overflow-visible gap-8 md:gap-0">
            
            {/* TEXT BOX AREA */}
            <div className="flex-1 flex flex-col justify-center select-none text-center md:text-left py-2 md:py-0 md:max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeCard.id}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Gold Stars Rating Layer */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3 text-amber-400 text-sm">
                    {Array.from({ length: activeCard.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Quote Context Paragraph Description */}
                  <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-400 mb-6 border-b border-white/10 pb-6">
                    {activeCard.quote}
                  </p>

                  {/* Active Card Interactive Header Identity */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
                    {activeCard.name}
                  </h3>
                  <span className="block text-xs sm:text-sm font-medium tracking-wide text-gray-500 mt-1">
                    {activeCard.role}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* REMAINING DESKTOP & MOBILE BOTTOM MULTI-THUMBNAIL TRACK ROW */}
            {/* Slices the rest of the array to cleanly present all 4 preview thumbnail thumbnails concurrently */}
            <div className="flex gap-4 items-end justify-center md:justify-start h-[100px] sm:h-[140px] shrink-0 overflow-x-auto md:overflow-x-visible w-full max-w-full py-1">
              {items.slice(2).map((card, sliceIdx) => {
                const trueTrackIdx = sliceIdx + 2;
                
                return (
                  <button
                    key={`slot-thumb-${card.id}`}
                    onClick={() => handleCardClick(trueTrackIdx)}
                    className="group relative h-[90px] w-[75px] sm:h-[140px] sm:w-[110px] shrink-0 overflow-hidden rounded-lg bg-slate-900 border border-white/5 focus:outline-none transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
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