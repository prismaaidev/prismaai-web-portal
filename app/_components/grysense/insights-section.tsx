import React from 'react';
import Image from 'next/image';

export default function InsightsSection() {
  return (
    <section className="  text-white flex items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text Content */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why its <span className="text-[#00AEEF]">matters</span>?
          </h2>
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Gain deeper clarity about your inner patterns and how your mind responds to everyday situations. 
              By understanding your stress triggers, emotional responses, and behavioural tendencies, you 
              uncover hidden blind spots that may influence your decisions.
            </p>
            <p>
              This awareness helps you respond consciously, improve emotional balance, and make confident 
              choices - leading to stronger personal growth, better professional performance, and more 
              intentional progress in life.
            </p>
          </div>
        </div>

        {/* Right Side: Step-by-Step Cards Visual Showcase */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start w-full">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 lg:self-center">
            How it works?
          </h3>
          
          {/* Main Visual Container with relative positioning */}
          <div className="relative w-full max-w-[480px] h-[460px] mx-auto">
            {/* Card 01 - Top Left */}
            <div className="absolute top-0 left-0 w-[240px] md:w-[260px] aspect-[4/3] border border-cyan-500/30 rounded-sm bg-[#060b18]/60 backdrop-blur-sm shadow-xl p-3 z-10 group hover:border-cyan-400 transition-colors">
              <div className="relative w-full h-full overflow-hidden bg-[#0a1124]">
                {/* Next.js Background Image */}
                <Image 
                  src="/grysense/write.png" 
                  alt="Step 1 Visual"
                  fill
                  sizes="(max-w-768px) 240px, 260px"
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-300"
                  priority
                />
                {/* Text and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF] via-transparent to-transparent flex flex-col justify-between p-3 z-10">
                  <p className="text-lg md:text-lg font-semibold  drop-shadow-md">
                    Submit a handwritten Sample
                  </p>
                </div>
              </div>
              {/* Badge 01 */}
              <div className="absolute -top-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-white text-[#00AEEF] font-bold rounded-full flex items-center justify-center text-sm md:text-base shadow-lg z-30">
                01
              </div>
            </div>

            {/* Card 02 - Middle Right Overlapping */}
            <div className="absolute top-[120px] right-0 w-[240px] md:w-[260px] aspect-[4/3] border border-cyan-500/30 rounded-sm bg-[#060b18]/60 backdrop-blur-sm shadow-2xl p-3 z-20 group hover:border-cyan-400 transition-colors">
              <div className="relative w-full h-full overflow-hidden bg-[#0a1124]">
                {/* Next.js Background Image */}
                <Image 
                  src="/grysense/analysis.jpg" 
                  alt="Step 2 Visual"
                  fill
                  sizes="(max-w-768px) 240px, 260px"
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-300"
                />
                {/* Text and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF] via-transparent to-transparent flex flex-col justify-between p-3 z-10">
                  <p className="text-lg md:text-lg font-semibold  drop-shadow-md">
                   Our AI analyses key elements
                  </p>
                </div>
              </div>
              {/* Badge 02 */}
              <div className="absolute -bottom-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-white text-[#00AEEF] font-bold rounded-full flex items-center justify-center text-sm md:text-base shadow-lg z-30">
                02
              </div>
            </div>

            {/* Card 03 - Bottom Left Overlapping */}
            <div className="absolute bottom-0 left-[40px] w-[240px] md:w-[260px] aspect-[4/3] border border-cyan-500/30 rounded-sm bg-[#060b18]/60 backdrop-blur-sm shadow-2xl p-3 z-20 group hover:border-cyan-400 transition-colors">
              <div className="relative w-full h-full overflow-hidden bg-[#0a1124]">
                {/* Next.js Background Image */}
                <Image 
                  src="/grysense/report.jpg" 
                  alt="Step 3 Visual"
                  fill
                  sizes="(max-w-768px) 240px, 260px"
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-300"
                />
                {/* Text and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF] via-transparent to-transparent flex flex-col justify-between p-3 z-10">
                  <p className="text-lg md:text-lg font-semibold  drop-shadow-md">
                   Receive a detailed insightful report
                  </p>
                </div>
              </div>
              {/* Badge 03 */}
              <div className="absolute bottom-[30px] -left-5 w-10 h-10 md:w-12 md:h-12 bg-white text-[#00AEEF] font-bold rounded-full flex items-center justify-center text-sm md:text-base shadow-lg z-30">
                03
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
