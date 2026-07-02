import Image from 'next/image';

export default function GryScanHero() {
  return (
    <div className=''>


    <section className="max-w-7xl px-4 md:px-0 mx-auto w-full">
      {/* Main Container Card */}
      <div className="w-full bg-[#0d1425] rounded-lg border border-gray-800 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-3/5 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-slate-100">
            What is <span className="text-[#00AEEF]">GrySCAN</span>? 
          </h1>
        
          <div className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
            <p className='mb-5'>
          To enhance suspicious bag detection and streamline decision-making processes at the inline, we implement advanced technology for efficient capture of passenger data and facial information, stored securely for analysis. Utilizing a dashboard interface, passenger data is profiled comprehensively, integrating information from boarding passes at the Baggage Security Module (BSM) to identify potential threats.
            </p>
            <p>
               Our system also facilitates the detection of repeating offenders and promptly notifies authorities of any passenger loitering, ensuring proactive security measures are in place.
            </p>
          </div>
        </div>

        {/* Right Side: Graphic Image Container */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[340px] aspect-square bg-white rounded-lg p-4 shadow-xl flex items-center justify-center">
            {/* Replace /placeholder-graphic.png with your actual image path */}
            <div className="relative w-full h-full">
              <Image
                src="/img/grysec-hero.png" 
                alt="GrySEC Security Overview"
                fill
                className="object-contain  rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
      </div>
  );
}
