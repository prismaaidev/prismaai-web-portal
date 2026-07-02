import Image from 'next/image';

interface Award {
  id: number;
  year: string;
  title: string;
  description: string;
  images: string[];
}
const awardsData: Award[] = [
  {
    "id": 1,
    "year": "2026",
    "title": "Titanium Architectural Grand Prix",
    "description": "Awarded for the structural engineering and sleek vertical geometry of the Neo-Metropolis Highrise project.",
  "images": [
      "/img/face-1.png",
    ]
  },
  {
    "id": 2,
    "year": "2026",
    "title": "Avant-Garde Digital System of the Year",
    "description": "Recognised globally for crafting highly responsive, accessible design frameworks for international fintech spaces.",
    "images": [
      "/img/face-1.png",
    ]
  },
  {
    "id": 3,
    "year": "2025",
    "title": "International Sustainable Design Gold",
    "description": "Honoured for the carbon-neutral development and eco-conscious landscape blueprints executed in Tokyo.",
   "images": [
      "/img/face-1.png",
    ]
  },
   {
    "id": 4,
    "year": "2026",
    "title": "Titanium Architectural Grand Prix",
    "description": "Awarded for the structural engineering and sleek vertical geometry of the Neo-Metropolis Highrise project.",
  "images": [
      "/img/face-1.png",
    ]
  },
  {
    "id": 5,
    "year": "2026",
    "title": "Avant-Garde Digital System of the Year",
    "description": "Recognised globally for crafting highly responsive, accessible design frameworks for international fintech spaces.",
    "images": [
      "/img/face-1.png",
    ]
  },
  {
    "id": 6,
    "year": "2025",
    "title": "International Sustainable Design Gold",
    "description": "Honoured for the carbon-neutral development and eco-conscious landscape blueprints executed in Tokyo.",
   "images": [
      "/img/face-1.png",
    ]
  }
];

export default function AwardsShowcase() {
  return (
    <section className="bg-[#020617] text-slate-100 min-h-screen py-24 px-4 sm:px-6 lg:px-8 antialiased selection:bg-[#00AEEF] selection:text-[#020617]">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {awardsData.map((award, index) => {
            const isStaggered = index % 2 === 1;

            return (
              <div 
                key={award.id} 
                className={`group flex flex-col border border-slate-900/60 bg-slate-950/20 rounded-2xl p-5 transition-all duration-500 hover:border-slate-800 hover:bg-slate-900/10 ${
                  isStaggered ? 'lg:translate-y-12' : ''
                }`}
              >

                <div className="relative aspect-[3/4] w-full rounded-xl bg-slate-950 mb-6">

                  {award.images[2] && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 scale-90 translate-x-0 translate-y-0 group-hover:opacity-25 group-hover:scale-95 group-hover:translate-x-5 group-hover:-translate-y-5 transition-all duration-500 ease-out border border-slate-800/80 z-0">
                      <Image 
                        src={award.images[2]} 
                        alt={`${award.title} tertiary perspective`} 
                        fill 
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover grayscale"
                      />
                    </div>
                  )}

                  {award.images[1] && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 scale-90 translate-x-0 translate-y-0 group-hover:opacity-45 group-hover:scale-95 group-hover:-translate-x-4 group-hover:translate-y-4 transition-all duration-500 ease-out delay-75 border border-slate-800/80 z-10">
                      <Image 
                        src={award.images[1]} 
                        alt={`${award.title} alternate aspect`} 
                        fill 
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover grayscale"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-xl overflow-hidden border border-slate-800/80 group-hover:border-[#00AEEF]/40 transition-all duration-500 z-20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/90 z-30 opacity-90" />
                    
                    {/* Primary Color Overlay Glow */}
                    <div className="absolute inset-0 bg-[#00AEEF] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-30" />              
                    <Image
                      src={award.images[0]}
                      alt={`${award.title} primary display`}
                      fill
                      priority={index < 3}
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    {/* Classic Floating Year Tag */}
                    <div className="absolute top-4 left-4 z-40 bg-[#020617]/85 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full">
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-300 group-hover:text-[#00AEEF] transition-colors duration-300">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>


                <div className="flex-grow flex flex-col justify-between px-1">
                  <div>
                    {/* Visual Anchor Line */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-[1px] w-4 bg-[#00AEEF]/40 group-hover:w-8 transition-all duration-500"></span>
                      <span className="text-[10px] font-mono tracking-widest text-[#00AEEF] uppercase">
                        NO. {String(award.id).padStart(2, '0')}
                      </span>
                    </div>
                    

                    <h3 className="text-xl font-light text-white tracking-tight mb-2.5 group-hover:text-[#00AEEF] transition-colors duration-300">
                      {award.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mt-2 line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
