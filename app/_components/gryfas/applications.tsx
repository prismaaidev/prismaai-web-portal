
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface SlideData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  iconUrl: string; 
}

const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "Login & Account Access",
    description: "Enables secure, passwordless access to internet and mobile banking through face-based authentication, ensuring only authorized users can log in.",
    imageSrc: "/img/test-m1.png", 
    imageAlt: "Security Traffic Surveillance Monitoring",
    iconUrl: "/img/settings.png" 
  },
  {
    id: 2,
    title: "Internet Bankingt",
    description: "Authorizes high-risk and high-value transactions in real time using face-based authorization and the primary account holder’s approval.",
    imageSrc: "/img/test-m2.png",
    imageAlt: "Live Concert Crowd Management",
    iconUrl: "/img/verified.png" 
  },
  {
    id: 3,
    title: "Mobile Banking",
    description: "Enables seamless on-the-go transaction authorization through face-based authentication, delivering instant fraud detection and secure approvals.",
    imageSrc: "/img/test-m1.png", 
    imageAlt: "Security Traffic Surveillance Monitoring",
    iconUrl: "/img/settings.png" 
  },
  {
    id: 4,
    title: "ATM Systems",
    description: "Enables face-based authentication at ATMs, adding a secure identity layer alongside or as an alternative to PINs for safe cash withdrawals and transactions.",
    imageSrc: "/img/test-m2.png",
    imageAlt: "Live Concert Crowd Management",
    iconUrl: "/img/verified.png" 
  },
  {
    id: 5,
    title: "Retail Payments",
    description: "Enables face-based authorization at POS terminals, streamlining the checkout experience while reducing fraud and transaction friction.",
    imageSrc: "/img/test-m1.png", 
    imageAlt: "Security Traffic Surveillance Monitoring",
    iconUrl: "/img/settings.png" 
  },
  {
    id: 6,
    title: "Digital Wallets",
    description: "Enables secure wallet access and transaction approval using face-based authentication and real-time owner verification for fraud resistant payments.",
    imageSrc: "/img/test-m2.png",
    imageAlt: "Live Concert Crowd Management",
    iconUrl: "/img/verified.png" 
  }
];

export default function GryFASApplications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const [pathLength, setPathLength] = useState(0);

  // Function to safely trigger the running border animation
  const triggerAnimation = () => {
    setIsAnimating(false);
    // Tiny timeout allows React to drop the animation class, resetting it for the next click
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  // Trigger on every button click
  const handleSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
    triggerAnimation();
  };

  // Calculate the exact perimeter pixels of the card dynamically
  useEffect(() => {
    if (rectRef.current) {
      setPathLength(rectRef.current.getTotalLength());
    }
  }, [currentIndex]);

  // Run automatically the very first time it scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.disconnect(); // Runs only once for the initial scroll
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeSlide = SLIDES_DATA[currentIndex];
  const backgroundSlide = SLIDES_DATA[(currentIndex + 1) % SLIDES_DATA.length];

  return (
    <section ref={sectionRef} className="w-full mt-6 mb-25  flex items-center justify-center p-4 antialiased text-white">
      
      {/* CSS Styles optimized for a perfect singular drawing stroke */}
      <style>{`
        @keyframes drawSingleBorder {
          from { stroke-dashoffset: ${pathLength}; }
          to { stroke-dashoffset: 0; }
        }
        .animate-single-border {
          stroke-dasharray: ${pathLength};
          animation: drawSingleBorder 4.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="w-full max-w-7xl bg-[#0d1425] rounded-lg border border-slate-800  px-6 py-12 md:p-16 flex flex-col items-center">

  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
             Applications
          </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Overlapping Layered Image Stack */}
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <div className="absolute left-0 top-4 w-[55%] h-[80%] rounded-xl overflow-hidden border border-gray-800/60 shadow-2xl z-10 transition-all duration-700 ease-out transform origin-bottom-left">
              <img 
                key={`bg-${backgroundSlide.id}`}
                src={backgroundSlide.imageSrc} 
                alt={backgroundSlide.imageAlt}
                className="w-full h-full object-cover brightness-50 contrast-125 transition-opacity duration-500"
              />
            </div>

            <div className="absolute right-4 bottom-0 w-[65%] h-[90%] rounded-xl overflow-hidden border border-emerald-500/30 shadow-2xl z-20 transition-all duration-700 ease-out transform">
              <img 
                key={`active-${activeSlide.id}`}
                src={activeSlide.imageSrc} 
                alt={activeSlide.imageAlt}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Informational Content Box & Controls */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto md:mx-0">
            
            <div className="relative overflow-hidden  runborder-section border border-gray-900/80 rounded-lg p-8 shadow-xl min-h-[260px] flex flex-col justify-center">
              
              {/* SVG Overlay using the conditional isAnimating flag */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" >
                <rect 
                  ref={rectRef}
                  x="1" 
                  y="1" 
                  width="calc(100% - 2px)" 
                  height="calc(100% - 2px)" 
                  rx="8" 
                  fill="none" 
                  stroke="#00AEEF" 
                  strokeWidth="1.5" 
                  className={isAnimating ? "animate-single-border" : ""}
                  style={{ strokeDasharray: pathLength, strokeDashoffset: isAnimating ? undefined : pathLength }}
                />
              </svg>

              {/* Icon Container */}
              <div className="mb-5 w-12 h-12 rounded-full bg-[#00aeef] overflow-hidden flex items-center justify-center p-2 shadow-inner transition-transform duration-500 hover:rotate-12">
                <img 
                  key={`icon-${activeSlide.id}`}
                  src={activeSlide.iconUrl} 
                  alt={`${activeSlide.title} icon`}
                  className="w-full h-full object-contain transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-blue-600 rounded-full">
                          <span class="text-white text-xs font-bold font-mono">IMG</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Text Area */}
              <div key={activeSlide.id} className="space-y-3 transition-all duration-500 transform translate-x-0 animate-fade-in">
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2 ">
                  {activeSlide.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  {activeSlide.description}
                </p>
              </div>
            </div>

            {/* Swipe Toggle Button */}
            <button 
              onClick={handleSwipe}
              className="flex items-center justify-center lg:inline-flex gap-2 rounded-lg bg-[#00AEEF] px-6 py-2 font-medium text-lg text-white shadow-[0_0_30px_rgba(0,174,239,0.25)] transition duration-200 hover:bg-[#0095cc]"
            >
              <span>Swipe</span>
              <span className="flex h-5 items-center">
                <img src="/img/right-chevron.png" className="h-full w-auto object-contain" alt="right arrow" />
                <img src="/img/right-chevron.png" className="h-full w-auto object-contain" alt="right arrow" />
                <img src="/img/right-chevron.png" className="h-full w-auto object-contain" alt="right arrow" />
              </span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
