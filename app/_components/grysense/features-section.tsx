'use client';

import React, { useState, useEffect, useRef } from 'react';

// 1. Updated interface to accept imageUrl
interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  imageUrl: string; 
}

export default function FeaturesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(true); 
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // 2. Updated data array with local or absolute placeholder image paths
  const rawFeatures: FeatureItem[] = [
    {
      id: 1,
    title: 'Mind',
    description: "Provides deep insights into your ability to focus, your levels of mental fatigue, and the way you naturally process information and make decisions in different situations.",
    imageUrl: '/grysense/mind.jpg',
      imageAlt: "Mind authentication feature illustration"
    },
    {
      id: 2,
        title: 'Personality',
    description: "Reveals your confidence levels, identifies your leadership qualities, and shows how effectively you adapt and interact in social and professional environments.",
    imageUrl: '/grysense/personality.jpg',
      imageAlt: "Emotions analysis feature illustration"
    },
    {
      id: 3,
   title: 'Emotions',
    description: "Helps uncover your stress patterns, evaluates your emotional stability, and reveals suppressed or unexpressed emotions that may influence your thoughts and actions.",
    imageUrl: '/grysense/emotion.jpg',
      imageAlt: "Mind authentication feature illustration"
    },
    {
      id: 4,
      title: 'Behaviour',
    description: "Highlights your natural strengths, brings awareness to internal conflicts that may affect your progress, and reflects your level of independence in thinking and actions.",
    imageUrl: '/grysense/m2.png',
      imageAlt: "Emotions analysis feature illustration"
    },
    
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 1024;
      setIsMobile(mobileView);
      setCurrentIndex(1); 
    };

    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const totalSlides = isMobile ? rawFeatures.length : Math.ceil(rawFeatures.length / 2);

  const processedSlides = React.useMemo(() => {
    if (isMobile) {
      const groups = rawFeatures.map(item => [item]);
      const lastGroup = groups[groups.length - 1];
      const firstGroup = groups[0];
      return [lastGroup, ...groups, firstGroup];
    } else {
      const groups: FeatureItem[][] = [];
      for (let i = 0; i < rawFeatures.length; i += 2) {
        groups.push(rawFeatures.slice(i, i + 2));
      }
      const lastGroup = groups[groups.length - 1];
      const firstGroup = groups[0];
      return [lastGroup, ...groups, firstGroup];
    }
  }, [isMobile, rawFeatures]);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const requestAnimationFrameId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(requestAnimationFrameId);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isHovered && isTransitioning && isVisible) {
      autoPlayTimer.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 4000);
    }

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [isHovered, isTransitioning, isVisible]);

  let activeDotIndex = currentIndex - 1;
  if (currentIndex === 0) activeDotIndex = totalSlides - 1;
  if (currentIndex === totalSlides + 1) activeDotIndex = 0;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + 1);
  };

  return (
    <section className="my-20 py-10 text-white px-4 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        
        <h2 className="text-center text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
          What GrySENSE reveals
        </h2>

        <div 
          className="w-full overflow-hidden mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {processedSlides.map((slideGroup, groupIndex) => (
              <div 
                key={groupIndex} 
                className="w-full flex-shrink-0 flex gap-0 px-2 lg:px-0"
              >
                {slideGroup.map((feature) => (
                  <div 
                    key={feature.id} 
                    className={`px-0 md:px-4 flex-shrink-0 ${isMobile ? 'w-full' : 'w-1/2'}`}
                  >
                    <div className="border border-white/30 rounded-lg p-6 md:pb-10 md:pt-6 flex flex-col md:flex-row gap-8 items-center max-w-md mx-auto md:max-w-full">
                      {/* IMAGE FRAME SYSTEM */}
                      <div className="relative w-full max-w-[290px] md:w-[270px] aspect-[4/3] flex-shrink-0 select-none mx-auto md:mx-0">
                        
                        {/* 1. THE BACKSIDE ELEMENT */}
                        <div className="absolute inset-0 right-8 h-[109%] z-0">
                          <div className="absolute w-[85%] h-[100%] border-l-[10px] border-b-[10px] border-[#0091ff]" />
                          <div className="absolute w-[85%] h-[100%] border-l-[10px] border-t-[10px] border-[#0091ff]" />
                        </div>
                        {/* 2. THE FOREGROUND ELEMENT */}
                        <div className="absolute top-4 left-5 right-0 bottom-0 bg-white rounded-sm  flex items-center justify-center z-10 shadow-2xl shadow-black/50">
                          <div className="relative w-full h-full bg-[#f1f5f9] flex items-center justify-center rounded-sm overflow-hidden">
                            {/* 3. Rendered img element handling the URL dynamically */}
                            <img 
                              src={feature.imageUrl} 
                              alt={feature.imageAlt}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Content Description Frame */}
                      <div className="flex flex-col text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">{feature.description}</p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeDotIndex ? 'bg-[#0091ff] w-6' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
