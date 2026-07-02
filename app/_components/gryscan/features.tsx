import React from 'react';

// Reusable SVG Icon Component matching the image placeholders
const SecurityIcon = () => (
  <svg 
    className="w-6 h-6 text-slate-400 group-hover:text-sky-400 transition-colors duration-300"
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0A48.536 48.536 0 0112 3m0 0c2.917 0 5.747.294 8.5.862m-21 10.398c0-.552.448-1 1-1h6.25a1 1 0 011 1v3.83a1 1 0 01-1 1H2.5a1 1 0 01-1-1v-3.83z" />
  </svg>
);

export default function AirportFeatures() {
  return (
    <section className=" text-white pt-16 px-6 md:px-12 lg:px-24  flex flex-col justify-center font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Section Header */}
        
   <h2 className="text-3xl mb-10 text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
             Features
          </h2>
        {/* Responsive Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative">
          
          {/* LEFT SIDE: Big Headline Block */}
          <div className="lg:col-span-3 flex flex-col justify-center p-0 md:p-12 pb-12 lg:pb-12 border-b lg:border-b-0 lg:border-r border-[#00AEEF] relative group">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white max-w-xl transition-all duration-300 group-hover:text-sky-100">
              smart surveillance for <span className="text-[#00AEEF]">enhanced</span> airport security
            </h3>
          </div>

          {/* RIGHT SIDE: Top Single Feature (Smart Passenger Profiling Platform) */}
          <div className="lg:col-span-2 p-8 md:p-12  border-[#00AEEF] group hover:bg-slate-900/20 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="p-2 w-fit bg-slate-900/60 rounded-lg border border-slate-800 group-hover:border-[#00AEEF] transition-all">
                <SecurityIcon />
              </div>
              <h4 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2  group-hover:text-sky-400 transition-colors">
                Smart Passenger Profiling Platform
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
               Integrates boarding data for enhanced threat detection.
              </p>
            </div>
          </div>

          {/* BOTTOM ROW: Three Multi-Columns Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-0">
            
            {/* Feature 1: Real-Time Security Alerts */}
            <div className="p-8 md:p-12 border-b border-t md:border-b-0 border-r-0 md:border-r border-[#00AEEF] group hover:bg-slate-900/20 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-fit bg-slate-900/60 rounded-lg border border-slate-800 group-hover:border-sky-500/30 transition-all">
                  <SecurityIcon />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2   group-hover:text-sky-400 transition-colors">
                  Real-Time Security Alerts
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
               Instant notifications warn officers of suspicious activity.
                </p>
              </div>
            </div>

            {/* Feature 2: AI Airport Security System */}
            <div className="p-8 md:p-12 border-b border-t md:border-b-0 border-r-0 lg:border-r  border-[#00AEEF] group hover:bg-slate-900/20 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-fit bg-slate-900/60 rounded-lg border border-slate-800 group-hover:border-[#00AEEF] transition-all">
                  <SecurityIcon />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2   group-hover:text-sky-400 transition-colors">
                  AI Airport Security System
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                AI detects suspicious bags and profiles passengers.
                </p>
              </div>
            </div>

            {/* Feature 3: Facial Recognition Data Hub */}
            <div className="p-8 md:p-12 group border-t border-[#00AEEF] hover:bg-slate-900/20 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-fit bg-slate-900/60 rounded-lg border border-slate-800 group-hover:border-[#00AEEF] transition-all">
                  <SecurityIcon />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2   group-hover:text-sky-400 transition-colors">
                  Facial Recognition Data Hub
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                 Captures and stores passenger identities for analysis.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
