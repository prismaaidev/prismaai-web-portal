'use client';

import React, { useRef } from 'react';
import Image from "next/image";

// Interface defining the shape of our card data
interface CardItem {
  id: number;
  title: string;
  description: string;
  imageBg: string;
}

const CARDS_DATA: CardItem[] = [
  {
    id: 1,
    title: 'Veri5 V-KYC (Know-Your-Customer)',
    description: 'Veri5 enables banks and financial institutions to securely verify customer identities and maintain a safe, compliant environment.',
    imageBg: '/veri5/v-kyc.png',
  },
  {
    id: 2,
    title: 'Veri5 for Event Access Control',
    description: 'Veri5 helps event management organizations quickly verify attendee identities at entry points, ensuring only ticket holders or authorized guests are allowed inside.',
    imageBg: '/veri5/access-control.png',
  },
  {
    id: 3,
    title: 'Veri5 for Employee Onboarding',
    description: "Veri5 helps organizations make hiring easier and safer by verifying the identities of new employees, ensuring they are who they say they are.",
    imageBg: '/veri5/employee-onboarding.png',
  },
  {
    id: 4,
    title: 'Veri5 for Educational Institutions',
    description: 'Veri5 helps educational institutions verify student identities before online, competitive, and board examinations, preventing impersonation and ensuring the integrity of the examination process.',
    imageBg: '/veri5/educational-institute.png',
  },
  {
    id: 5,
    title: 'Veri5 for Telecom Operators',
    description: 'Veri5 supports telecom operators with secure SIM activation through real-time identity verification, preventing SIM swap and identity fraud using live face matching, gesture verification, and government ID checks',
    imageBg: '/veri5/telecom-operator.png',
  },
   {
    id: 6,
    title: 'Veri5 for Visa & Airport Immigration',
    description: 'Veri5 supports visa and airport immigration authorities with secure identity verification, reducing fraud and enabling faster, trusted clearance.',
    imageBg: '/veri5/airport-imigration.png',
  }
];

export default function CourseCarousel(): React.JSX.Element {
  // Explicitly typing the HTML element reference
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right'): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#020618] text-white flex flex-col justify-center py-16 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white"> Veri5 <span className="text-[#00AEEF]">Use Cases</span> to Better <br/>Understand Its Capabilities</h2>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since 1966.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-800 hover:border-gray-600 bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-200 focus:outline-none"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-800 hover:border-gray-600 bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-all duration-200 focus:outline-none"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CARDS_DATA.map((card: CardItem) => (
            <div 
              key={card.id}
              className="min-w-[290px] sm:min-w-[340px] max-w-[340px] flex-shrink-0 snap-start border border-gray-800/60 rounded-lg p-4 flex flex-col justify-between group hover:border-gray-700 transition-all duration-300"
            >
              {/* Card Header: Graphical/Image Placeholder */}
              <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-5 relative">

                {/* <div className={`w-full h-full ${card.imageBg} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} /> */}
                  <Image
    src={card.imageBg}
    alt="card image"
    fill
    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
  />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>

              {/* Card Body Info */}
              <div className="flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-medium text-white tracking-tight line-clamp-2 min-h-[3.5rem]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                {/* <div className="pt-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-1.5 text-xs font-normal text-gray-300 hover:text-white transition-colors duration-200 group/link"
                  >
                    <span>Learn more</span>
                    <svg 
                      className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}