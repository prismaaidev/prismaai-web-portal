import React from 'react';

const LOGOS = [
  { id: 1, name: 'Sentientlogics AI Consultancies Co. LLC', src: '/users-logo/m1.png' },
  { id: 2, name: 'Red Ballon', src: '/users-logo/m2.png' },
  { id: 3, name: 'Spectra Narnolia', src: '/users-logo/m1.png' },
  { id: 4, name: 'Pitney Bowes Software Pte. Ltd.', src: '/users-logo/m2.png' },
  { id: 5, name: 'SYLOZ International LLC', src: '/users-logo/m1.png' },
  { id: 6, name: 'Software Products Italia', src: '/users-logo/m2.png' },
   { id: 7, name: 'Sentientlogics AI Consultancies Co. LLC', src: '/users-logo/m1.png' },
  { id: 8, name: 'Red Ballon', src: '/users-logo/m2.png' },
  { id: 9, name: 'Spectra Narnolia', src: '/users-logo/m1.png' },
  { id: 10, name: 'Pitney Bowes Software Pte. Ltd.', src: '/users-logo/m2.png' },
  { id: 11, name: 'SYLOZ International LLC', src: '/users-logo/m1.png' },
  { id: 12, name: 'Software Products Italia', src: '/users-logo/m2.png' },
];

export default function AlliancePartners() {
  return (
    <section className=" py-16 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-sans">
          Partners we are <span className="text-[#00AEEF]">proud of</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>

        {/* 
          Unified Responsive Grid Layout:
          - grid-cols-2: Displays exactly 2 cards in a row on mobile/phone screens.
          - lg:grid-cols-3: Scales seamlessly to 3 cards per row on larger desktop layouts.
        */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-3  overflow-hidden border-t border-l border-slate-800/80">
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="relative flex items-center justify-center h-36 sm:h-48 border-b border-r border-slate-800/80  overflow-hidden select-none group"
            >
              {/* Pure CSS Radial Gradient Overlay fading in on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />

              {/* Logo Asset */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-18 sm:max-h-26 max-w-[85%] object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
