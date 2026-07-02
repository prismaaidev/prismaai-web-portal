import React from 'react';

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section 
      className="relative w-full pt-24 px-4 min-h-[40vh] md:min-h-[45vh] flex items-center bg-[#051318] bg-cover bg-center overflow-hidden py-8 md:px-16 lg:px-24"
      style={{ backgroundImage: `url('/img/blog-hero.png')` }}
    >
    
      <div className="absolute  inset-0 bg-gradient-to-r from-[#051318]/90 via-[#051318]/70 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10  max-w-7xl mx-auto w-full">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight select-none">
          {title}
        </h1>

        {/* Accent Underline */}
        <div className="w-24 md:w-36 h-[3px] md:h-[4px] bg-[#38bdf8] mt-4 mb-6 md:mt-5 md:mb-8" />

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
          {description}
        </p>
        
      </div>
    </section>
  );
}
