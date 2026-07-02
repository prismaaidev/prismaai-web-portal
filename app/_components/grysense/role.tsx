'use client';

import React, { useState, useEffect } from 'react';

const baseItems = [
  {
    id: 'Entrepreneurs',
      title: "Entrepreneurs",
      description: "Gain clarity on leadership style, risk appetite, and strategic thinking patterns. Understand behavioral strengths that influence decision making and team management.",
    imageSrc: '/grysense/mind.jpg', 
    alt: 'Happy family laughing together on a couch',
  },
  {
    id: 'Parents',
     title: "Parents",
      description: "Gain insights into a child’s emotional state, confidence levels, and adaptability. Support their development with better communication and guidance.",
    imageSrc: '/grysense/personality.jpg',
    alt: 'Teacher high-fiving students in a classroom',
  },
  {
    id: 'Professionals',
  title: "Professionals",
      description: "Enhance self-awareness to improve workplace performance and communication. Identify stress patterns and behavioral tendencies that impact professional growth.",
    imageSrc: '/grysense/emotion.jpg',
    alt: 'Professional counselor speaking with a client',
  },
  {
    id: 'Behaviour',
  title: "HR & Talent Team",
      description: "Assess behavioral traits, leadership potential, and workplace compatibility. Support smarter hiring, team-building, and performance development decisions.",
    imageSrc: '/grysense/m2.png',
    alt: 'Teacher high-fiving students in a classroom',
  },
    {
    id: 'Students',
title: "Students",
      description: "Discover natural strengths, focus levels, and learning patterns. Make informed academic and career choices aligned with personality traits.",
      imageSrc: '/tab-img/object.png',
    alt: 'Teacher high-fiving students in a classroom',
  },
    {
    id: 'Performance',
 title: "High-Performance Individuals",
      description: "Identify mental blocks, stress triggers, and focus challenges. Optimize performance through deeper behavioral understanding.",
      imageSrc: '/tab-img/face.png',
    alt: 'Teacher high-fiving students in a classroom',
  },
];

export default function GrySenseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = baseItems.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <section className="text-white flex flex-col items-center justify-center my-20 pb-20 px-0 overflow-hidden select-none">
      
      <h2 className="text-center text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
        What GrySENSE reveals?
      </h2>

      {/* Slider viewport container */}
      <div 
        className="relative w-full max-w-[1200px] flex items-center justify-center h-[360px] md:h-[480px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          
          {baseItems.map((item, index) => {
            // Calculate dynamic offsets relative to the active slide
            let offset = index - currentIndex;
            
            // Handle looping offsets correctly
            if (offset < -1) offset += total;
            if (offset > total - 2) offset -= total;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = isCenter || isLeft || isRight;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                style={{
                  transform: isCenter 
                    ? 'translateX(0%) scale(1)' 
                    : isLeft 
                      ? 'translateX(-56%) scale(0.82)' 
                      : isRight
                        ? 'translateX(56%) scale(0.82)'
                        : 'translateX(0%) scale(0.6)', // Hidden slides
                }}
                className={`absolute w-[85%] sm:w-[70%] md:w-[52%] lg:w-[655px] h-full rounded-lg overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.04] transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) ${
                  isCenter ? 'z-20 opacity-100 pointer-events-auto' : 
                  isLeft || isRight ? 'z-10 opacity-40 pointer-events-auto' : 
                  'z-0 opacity-0 pointer-events-none'
                }`}
              >
                {/* Container Image Visuals */}
                <div className="relative w-full h-full bg-[#0d0e12]">
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Text Backdrop Plate Blur Mask */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-black/60  border-t border-white/[0.08] flex flex-col justify-end min-h-[140px]">
                  <h3 className="text-xl font-semibold text-white mb-2.5 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {baseItems.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="focus:outline-none h-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-[6px] rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
                  isActive ? 'bg-[#00a3ff] w-[42px]' : 'bg-[#4b5563] w-[7px]'
                }`}
              />
            </button>
          );
        })}
      </div>

    </section>
  );
}
