'use client';

import React, { useState } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: FeatureItem[][] = [
    [
      {
        id: '01',
        title: 'Liveness Detection',
        description: 'This feature ensures that the user is physically present and alert during the authentication process. By analyzing specific facial movements like blinking, smiling, etc.',
      },
      {
        id: '02',
        title: 'Trusted User Authenticationn',
        description: 'GryFAS performs face-based authentication and ownership verification with liveness checks, ensuring a genuine user and preventing impersonation or spoofing.',
      },
      {
        id: '03',
        title: 'Spoof Detection',
        description: 'Identifies and blocks attempts to deceive the system using fake images or videos, ensuring only legitimate users/account holders can access accounts.',
      },
    ],
    [
      {
        id: '04',
        title: 'Sentiment Analysis',
        description: 'When a user tries to authenticate, GryFAS evaluates their emotional state in real time. If it detects signs of coercion, like anxiety or fear, it can trigger alerts.',
      },
      {
        id: '05',
        title: 'Authorization of Third Party/Relatives',
        description: 'GryFAS notifies the account holder in real time if a transaction is initiated by someone other than the primary user, allowing them to approve, reject, or report the activity',
      },
      {
        id: '06',
        title: 'Context-Aware Authorization Interface',
        description: 'Presents real-time visual proof, risk indicators, and clear decision controls (Approve / Reject / Report), enabling users to make secure, informed decisions instantly.',
      },
    ]
  ];

  // Handles dot selection transitions smoothly
  const handleSlideChange = (nextIndex: number) => {
    if (nextIndex === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      setIsTransitioning(false);
    }, 300);
  }; 

  return (
    <section className="w-full mt-10 mb-6 md:mb-2 flex items-center justify-center p-4 md:p-8 text-white font-sans antialiased select-none">
      
      {/* Outer Card Canvas Grid */}
      <div className="relative max-w-7xl  px-4 md:px-0 mx-auto w-full min-h-[580px] bg-[#0d1425] rounded-lg p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-2xl rounded-lg border border-slate-800">
        
        {/* RIGHT SIDE SYMMETRIC HALF-CIRCLE DESIGN CONTAINER */}
        <div className="absolute right-0 top-0 bottom-0 w-[48%] h-full pointer-events-none hidden lg:block overflow-hidden">
          {/* Outer Boundary Crescent Frame Layer */}
          <div className="absolute top-1/2 -right-[40%] -translate-y-1/2 w-[820px] h-[820px] rounded-full border-[52px] border-[#1b1e27]/80 opacity-90 shadow-2xl z-0" />
          {/* Inner masking alignment to keep inner bounds clean */}
          <div className="absolute top-1/2 -right-[20%] -translate-y-1/2 w-[540px] h-[540px] rounded-full  z-0" />
        </div>

        {/* ABSOLUTE CENTER TITLE LABELLING */}
        <div className="absolute top-8 left-0 right-0 text-center hidden lg:block z-20">
         
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
             Features
          </h2>
        </div> 

        {/* LEFT COMPONENT SIDE: Responsive Grid Track & Cards */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between h-full relative z-10 pt-6 lg:pt-8 min-h-[440px]">
          
          {/* Central Connecting Vertical Track Line */}
          <div className="absolute  " />

  {/* Functional Switchable Cards Track Container */}
<div className={`flex flex-col gap-5 transition-all duration-300 ease-in-out ${
  isTransitioning ? 'opacity-0 scale-[0.99] blur-[2px]' : 'opacity-100 scale-100 blur-0'
}`}>
  {slides[currentSlide].map((item) => (
    <div key={item.id} className="relative flex items-center w-full pl-0 md:pl-5">
      
      {/* CIRCULAR NUMBER BADGE */}
      <div className="absolute left-0 md:-left-[-1px] top-1/2 -translate-y-1/2 flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#00AEEF] font-bold text-lg flex items-center justify-center shadow-md z-30 border border-zinc-800/10">
        {item.id}
      </div>
      
      {/* Inside Content Structure Grid Layout */}
      <div className="w-full bg-[#0d1425] border border-zinc-700/50 rounded-xl py-5 pl-14 pr-6 md:pl-10 flex flex-col md:flex-row items-start md:items-center justify-start  md:gap-8 min-h-[92px] transition-all duration-300 hover:border-zinc-500/70">
        
        {/* Fixed-width title box that forces wrapping up to 2 lines */}
        <h3 className="text-sm font-semibold tracking-wide text-white w-full md:w-[150px] md:min-w-[150px] shrink-0 break-words line-clamp-2">
          {item.title}
        </h3>
        
        {/* Description now starts at the exact same horizontal alignment */}
        <p className="text-gray-400 text-xs md:text-sm font-light flex-1 leading-relaxed">
          {item.description}
        </p>
      </div>

    </div>
  ))}
</div>


          {/* 2-DOT SLIDER INDICATOR TRACK */}
          <div className="flex items-center gap-2 mt-8 justify-center lg:justify-start lg:pl-5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-10 bg-[#0091ff]' : 'w-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Switch to layout slide group ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COMPONENT SIDE: Context Headers inside the Half-Circle Boundaries */}
        <div className="w-full lg:w-[42%]  flex flex-col justify-center text-left z-10 mt-12 lg:mt-0 ">
            <div className="ps-0 md:ps-25">
          <span className="text-base font-medium tracking-wide text-white mb-4 lg:hidden text-center self-center">
            Features
          </span>
          
  <h2 className="text-3xl md:text-[42px] font-bold leading-[50px] tracking-tight text-white mb-5">
  Powerful <br className="hidden md:inline" />
  <span className="text-[#29adec]">Features,</span> <br className="hidden md:inline" />
  Seamless <br className="hidden md:inline" />
  Experience
</h2>

          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            GryFAS revolutionizes financial authentication by providing unparalleled level of security through 
            facial authentication for every transaction. It surpasses traditional method like PIN, OTP, offering 
            an extra layer of protection against unauthorized access and fraud.
          </p>
        </div>
  </div>
      </div>
    </section>
  );
}
