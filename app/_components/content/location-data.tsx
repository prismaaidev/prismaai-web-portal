"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Updated Mock Data Structure for Image Flags ---
interface OfficeLocation {
  id: string;
  country: string;
  flagUrl: string; 
  cities: string;
  companyName: string;
  imageUrl: string;
  addresses: string[];
  contact: string;
}

const locationsData: OfficeLocation[] = [
  {
    id: "singapore",
    country: "Singapore",
    flagUrl: "/location/flags/singapore.png", 
    cities: "Singapore",
    companyName: "Prisma AI India Pvt. Ltd.",
    imageUrl: "/location/Singapore.png",
    addresses: ["10 Ubi Crescent #04-25 Ubi TechPark (Lobby B) Singapore 408564"],
    contact: "+65 9642 9199",
  },
  {
    id: "india",
    country: "India",
    flagUrl: "/location/flags/india.png", 
    cities: "Mumbai & Bengaluru",
    companyName: "Prisma Global Limited",
    imageUrl: "/location/India.png",
    addresses: [
      "5th floor, STAR Hub 2, Sahar Airport Road, Andheri East, Mumbai, Maharashtra 400059.​",
      "08-112, Block D3, Manyata Tech Park Rd, Thannisandra, Bengaluru 560045",
    ],
    contact: "022- 4503110",
  },
  {
    id: "italy",
    country: "Italy",
    flagUrl: "/location/flags/Italy.png", 
    cities: "Sesto Fiorentino",
    companyName: "Software Products Italia",
    imageUrl: "/location/Italy.png",
    addresses: ["S. R. L. Via Arno, 108, 50019 Sesto Fiorentino (FI), Italy"],
    contact: "+39 055 33651",
  },
  {
    id: "germany",
    country: "Germany",
    flagUrl: "/location/flags/Germany.png",
    cities: "Berlin",
    companyName: "Prisma",
    imageUrl: "/location/Germany.png",
    addresses: ["Singerstrasse, 14, 10243, Berlin,Germany"],
    contact: "022-4503110",
  },
  {
    id: "uk",
    country: "United Kingdom",
    flagUrl: "/location/flags/London.png",
    cities: "London",
    companyName: "Prisma AI Limited",
    imageUrl: "/location/London.png",
    addresses: ["134 Buckingham Palace Road, London, England, SW1W 9SA"],
    contact: "022-4503110",
  },
  {
    id: "uae",
    country: "UAE",
    flagUrl: "/location/flags/Dubai.png", 
    cities: "Dubai",
    companyName: "Prisma",
    imageUrl: "/location/Dubai.png",
    addresses: ["Unit no. 4 / 403 One Business Bay by Omniyat, Burj Khalifa"],
    contact: "022- =4503110",
  },
];

export default function OfficeLocations() {
  const [activeTab, setActiveTab] = useState<OfficeLocation>(locationsData[0]);

  return (
    <div className="bg-[#020617] text-white p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/40 p-4 md:p-6 rounded-lg border border-slate-800 backdrop-blur-sm">
        
        {/* --- LEFT SIDE: TABS LIST --- */}
        <div className="flex flex-col gap-3 h-[300px] md:h-[550px] overflow-y-auto pr-1 custom-scrollbar">
          {locationsData.map((item) => {
            const isActive = activeTab.id === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left p-4 md:py-4 py-6 rounded-lg flex items-center gap-4 transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? "bg-[#29adec] text-slate-950 font-semibold shadow-lg shadow-[#29adec]/20"
                    : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300"
                }`}
              >
                {/* Visual indicator bar for non-active hovered items */}
                {!isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#29adec] scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
                )}
                
                {/* Rendered Flag Image instead of Emoji Text */}
                <div className="w-10 h-8 relative shrink-0 overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.flagUrl} 
                    alt={`${item.country} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col truncate">
                  <span className="text-sm md:text-base font-medium">{item.country}</span>
                  <span
                    className={`text-xs truncate ${
                      isActive ? "text-slate-800" : "text-slate-500"
                    }`}
                  >
                    {item.cities}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* --- RIGHT SIDE: ANIMATED CONTENT DISPLAY --- */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-900/60 border border-slate-800/80 p-5 md:p-6 rounded-lg overflow-hidden relative min-h-[650px] md:min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
            >
              {/* Image Container with Custom Expand Animation */}
              <div className="relative w-full h-[220px] sm:h-full rounded-lg overflow-hidden shadow-2xl group">
                <motion.img
                  initial={{ scale: 0.75, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 14,
                    mass: 0.8
                  }}
                  src={activeTab.imageUrl}
                  alt={activeTab.country}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Text Information Column */}
              <div className="flex flex-col justify-center h-full space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                      {activeTab.country}
                    </h2>
                  </div>
                  <p className="text-sm text-[#29adec] font-medium mt-1">
                    {activeTab.companyName}
                  </p>
                </motion.div>

                {/* Addresses mapping zone */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                    Address{activeTab.addresses.length > 1 ? "es" : ""}
                  </span>
                  
                  {activeTab.addresses.map((addr, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 bg-slate-950/30 border border-slate-800 p-3 rounded-lg hover:border-slate-700 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 text-[#29adec] shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        {addr}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="space-y-2"
                >
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                    Contact
                  </span>
                  <div className="flex items-center gap-3 bg-slate-950/30 border border-slate-800 p-3 rounded-lg">
                    <div className="p-2 rounded-lg bg-slate-900 text-[#29adec] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm text-slate-300 tracking-medium">
                      {activeTab.contact}

                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
