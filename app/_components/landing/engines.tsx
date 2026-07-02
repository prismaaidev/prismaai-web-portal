"use client";

import React, { useState, useRef } from "react";

interface TabConfig {
  id: string;
  tabLabel: string;
  heading: string;
  description: string;
  points: string[]; // Added array for 3 key metrics/features
  bgImage: string;
  overlayImage: string;
}

const SECTION_CONTENT: TabConfig[] = [
  {
    id: "sight",
    tabLabel: "Face Engine",
    heading: "Connecting Faces with Meaningful Insights",
    description:
      "Empowering businesses to harness the full potential of facial data, connecting it to insights that enhance interaction, engagement, and security",
    points: [
      "Face Core",
      "Face Matching",
      "Face Gesture",
      "Face Liveness",
    ],
    bgImage: "/tab-img/face.png",
    overlayImage: "/tab-img/face-cover.png",
  },
  {
    id: "intelligence",
    tabLabel: "Object Engine",
    heading: "Turning Objects into Insights",
    description:
      "Transforming raw data from objects into actionable insights, enabling smarter decisions, enhancing and unlocking potential across applications with real-time intelligent analysis",
    points: [
      "Object Engine",
      "Object Tracking",
      "Object Specification",
      "Object Counting",
    ],
    bgImage: "/tab-img/object.png",
    overlayImage: "/tab-img/object-cover.png",
  },
  {
    id: "scaling",
    tabLabel: "OCR Engine",
    heading: "Decode and extract data with accuracy",
    description:
      "With pinpoint accuracy, we decode and extract data to reveal valuable insights, empowering precise, data-driven outcomes for smarter and faster decisions.",
    points: [
      "ANPR",
      "Printed Text Detection & Recognition",
      "Document Text Detection & Recognition (KYC DOCS/ID)",
      "Handwritten Text Detection & Recognition",
    ],
    bgImage: "/tab-img/tab1-1.png",
    overlayImage: "/tab-img/tab1-2.png",
  },
];

export default function Engines() {
  const [activeTab, setActiveTab] = useState<string>("sight");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeContent =
    SECTION_CONTENT.find((t) => t.id === activeTab) || SECTION_CONTENT[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" || isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="w-full text-white flex flex-col justify-center items-center px-4 selection:bg-cyan-500 selection:text-black">
      <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
        {/* Tab Switcher */}
        <div className="flex items-center justify-between bg-[#0d1425] rounded-lg p-1 w-full max-w-[560px] shadow-lg border-m">
          {SECTION_CONTENT.map((tab) => {
            const isSelected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center py-2.5 px-4 md:px-8 rounded-lg text-[13px] font-medium tracking-wide transition-all duration-300 ${
                  isSelected
                    ? "bg-[#00AEEF] text-[white] shadow-md"
                    : "text-gray-500"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="w-full border-m grid grid-cols-1 lg:grid-cols-12 gap-8  items-center rounded-lg">
          {/* Text Information Panel */}
          <div className="lg:col-span-5 space-y-6 max-w-[460px] md:ps-10 p-4 pt-8">
            <div className="space-y-4 ">
              <h2 className="text-3xl md:text-[38px] font-bold text-white leading-[1.15] tracking-tight">
                {activeContent.heading}
              </h2>
              <p className="text-gray-400  text-[15px] md:text-[16px] leading-relaxed font-normal ">
                {activeContent.description}
              </p>
            </div>

            {/* 3 Point Feature Checklist */}
            <ul className="space-y-3 pt-2">
              {activeContent.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14px] md:text-[15px] text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Image Compare Slider */}
          <div className="lg:col-span-7 w-full">
            <div
              ref={containerRef}
              onPointerMove={handlePointerMove}
              className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-slate-900 shadow-2xl select-none cursor-ew-resize touch-none"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeContent.bgImage}
                  alt="Raw Input Frame"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-10"
                style={{
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
                }}
              >
                <img
                  src={activeContent.overlayImage}
                  alt="AI Processed Frame"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    width:
                      containerRef.current?.getBoundingClientRect().width ||
                      "100%",
                  }}
                />
              </div>

              <div
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                className="absolute top-0 bottom-0 w-[3px] bg-white z-20 flex items-center justify-center cursor-ew-resize active:scale-x-125 transition-transform duration-100"
                style={{
                  left: `${sliderPosition}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="w-8 h-8 bg-white text-slate-900 rounded-full shadow-xl flex items-center justify-center border border-white/20 select-none pointer-events-none transform scale-100 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l-4 4 4 4m8-8l4 4-4 4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
