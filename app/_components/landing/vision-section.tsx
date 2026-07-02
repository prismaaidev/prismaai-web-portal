"use client";

import React, { useState } from "react";

// Define the structure for slide data
interface VideoGridSlide {
  id: number;
  videos: {
    title: string;
    videoUrl: string;
    tagColor: string;
  }[];
}

export default function AIVisionSection() {
  // Slide data containing different mock video URLs per view
  const slides: VideoGridSlide[] = [
    {
      id: 1,
      videos: [
        {
          title: "Seatbelt & Helmet detected",
          videoUrl: "/videos/v1.mp4",
          tagColor: "",
        },
        {
          title: "Lane Violation",
          videoUrl: "/videos/v2.mp4",
          tagColor: "border-blue-500",
        },
        {
          title: "Security Chair Empty",
          videoUrl: "/videos/v3.mp4",
          tagColor: "border-pink-500",
        },
        {
          title: "Person detected near moving forklift",
          videoUrl: "/videos/v4.mp4",
          tagColor: "border-green-500",
        },
      ],
    },
    {
      id: 2,
      videos: [
        {
          title: "Incorrect Placement",
          videoUrl: "/videos/v5.mp4",
          tagColor: "border-yellow-500",
        },
        {
          title: "Toll Naka",
          videoUrl: "/videos/v6.mp4",
          tagColor: "border-purple-500",
        },
        {
          title: "Person Detected more than 3 people",
          videoUrl: "/videos/v7.mp4",
          tagColor: "border-orange-500",
        },
        {
          title: "Worker eating in restricted area",
          videoUrl: "/videos/v8.mp4",
          tagColor: "border-teal-500",
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-[#020618]  flex items-center justify-center  font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT SECTION: Dark Monitor Layout */}
        <div className="lg:col-span-7 w-full  rounded-lg px-4 md:px-0 flex flex-col justify-between  relative aspect-[4/3] min-h-[350px] md:min-h-[500px]">
          {/* Main Grid Viewport */}
          <div className="w-full h-full relative overflow-hidden">
            {slides.map((slide, slideIdx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 transition-all duration-500 ease-in-out transform ${
                  slideIdx === currentSlide
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
              >
                {slide.videos.map((item, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg overflow-hidden bg-[#141b2e]  flex items-center justify-center`}
                  >
                    {/* Background Video */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      src={item.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    {/* Bottom Label Badge */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap z-10 shadow-lg">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Central Overlapping Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="bg-white text-[#020618] text-xs md:text-sm font-semibold px-4 py-2 rounded-lg border border-white/10 shadow-2xl flex items-center gap-2 whitespace-nowrap">
                <span>AI Vision</span>
              </div>
            </div>
          </div>

          {/* Navigation Dots Container */}
          <div className="flex justify-center items-center gap-2 mt-6 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 bg-[#00aeef]"
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION: Content Copy */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-4 md:space-y-6 px-4 md:px-6">
          {/* Section Icon Label */}
          {/* <div className="text-3xl md:text-2xl lg:text-2xl text-white tracking-tight leading-tight">
           
            <span>AI Vision</span> 
          </div> */}

          {/* Header Title */}
          <h5 className="text-3xl  font-bold text-white tracking-tight leading-tight">
          Prisma AI - A Global Pioneer in <span className="text-[#00AEEF]">Visual Artificial</span> Intelligence
          </h5>

          {/* Description Paragraph */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md text-justify">
            The Prisma AI Vision Platform transforms live video streams into
            real-time operational intelligence using advanced AI vision
            technology. By detecting safety incidents, operational anomalies,
            and environmental changes across complex environments, the platform
            delivers actionable insights that enhance security, improve
            efficiency, and enable faster decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
