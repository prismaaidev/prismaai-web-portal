'use client';

import React, { useRef, useState, UIEvent } from 'react';

export default function BenefitsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const benefits = [
    {
      id: '01',
      title: 'Hack Resilient Authentication Layer',
      description: 'Creates a multi-layered security framework using liveness detection, spoof prevention, and identity verification. Protects accounts from fraud, impersonation, and unauthorized access attempts.',
    },
    {
      id: '02',
      title: 'Passwordless and Frictionless Security',
      description: 'Eliminates the need for passwords and OTPs through secure facial authentication. Provides a faster, more convenient user experience without compromising security.',
    },
    {
      id: '03',
      title: 'Seamless Integration',
      description: 'Integrates smoothly with existing applications, platforms, and authentication systems. Enables rapid deployment with minimal changes to current infrastructure.',
    },
    {
      id: '04',
      title: 'Real-Time Verification',
      description: 'Authenticates users instantly through live facial analysis and ownership validation. Detects suspicious activities in real time, reducing fraud and security risks.',
    },
    {
      id: '05',
      title: 'User Enrollment Flexibility',
      description: 'Offers a simple and adaptable onboarding process for diverse user groups. Supports secure biometric registration while ensuring a smooth enrollment experience.',
    },
     {
      id: '06',
      title: 'Highly Scalable',
      description: 'Handles large volumes of authentication requests across multiple channels and users. Maintains consistent performance, security, and reliability as demand grows.',
    },
  ];

  // Calculate dynamic scroll height percentage for the bar fill
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const totalScroll = target.scrollHeight - target.clientHeight;
    if (totalScroll > 0) {
      const currentScroll = target.scrollTop;
      const percentage = (currentScroll / totalScroll) * 100;
      setScrollPercentage(percentage);
    }
  };

  return (
    <section className="flex items-center justify-center p-4 sm:p-8 antialiased">
      {/* Outer Card Container */}
      <div className="w-full max-w-7xl bg-[#111827] rounded-lg border border-slate-800 px-6 py-10 md:py-16 md:px-16 flex flex-col md:flex-row gap-8 md:gap-4 items-stretch">
        
        {/* Left Side: Sticky Header Text Block */}
        <div className="w-full md:w-[45%] flex items-center md:sticky md:top-0">
          <h2 className="text-white text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.15] tracking-wide select-none">
            Benefits<br /><span className='text-[#29adec]'>That</span><br />Matter
          </h2>
        </div>

        <div className="w-full md:w-[55%] flex flex-col md:flex-row h-[350px] md:h-[400px] relative gap-6 md:gap-0">
          
          {/* Scroll Progress Bar Track */}
              {/* Scroll Progress Bar Track */}
          <div className="h-[10px] md:h-auto w-full md:w-[10px] bg-white/10 rounded-full relative overflow-hidden shrink-0">
            <div 
              className="absolute bg-white rounded-full transition-all duration-75 ease-out
                         w-[var(--progress-w)] h-[var(--progress-h)] 
                         min-w-[var(--progress-min-w)] min-h-[var(--progress-min-h)]
                         md:[--progress-w:10px] md:[--progress-h:var(--pct)] 
                         md:[--progress-min-w:auto] md:[--progress-min-h:40px]
                         [--progress-w:var(--pct)] [--progress-h:10px] 
                         [--progress-min-w:40px] [--progress-min-h:auto]"
              style={{ 
                top: 0,
                left: 0,
                '--pct': `${scrollPercentage}%`
              } as React.CSSProperties}
            />
          </div>


          {/* Scrollable Benefits List Window */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-col gap-10 pl-0 md:pl-10 overflow-y-auto h-full scrollbar-none snap-y snap-mandatory w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-2 shrink-0 snap-start py-1"
              >
                {/* Number Item Label ID */}
                <span className="text-[#3b82f6] font-bold text-xl sm:text-2xl tracking-wide block">
                  {benefit.id}
                </span>
                
                {/* Feature Title */}
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2 ">
                  {benefit.title}
                </h3>
                
                {/* Paragraph Content Wrap */}
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
