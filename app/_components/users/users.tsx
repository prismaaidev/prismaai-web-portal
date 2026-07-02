import React from 'react';

export default function UsersSection() {
  // Array of partner logos data for the grid
  const partners = [
    { name: '1', logo: '/users-logo/m1.png' },
    { name: '2', logo: '/users-logo/m2.png' },
    { name: '3', logo: '/users-logo/m1.png' },
    { name: '4', logo: '/users-logo/m2.png' },
    { name: '5', logo: '/users-logo/m1.png' }, // Placeholder fallback URL if needed
    { name: '6', logo: '/users-logo/m2.png' },
    { name: '7', logo: '/users-logo/m1.png' },
    { name: '8', logo: '/users-logo/m2.png' },
    { name: '9', logo: '/users-logo/m1.png' },
    { name: '10', logo: '/users-logo/m2.png' },
    { name: '11 Atmos', logo: '/users-logo/m1.png' },
    { name: '12', logo: '/users-logo/m2.png' },
    { name: '13', logo: '/users-logo/m1.png' },
    { name: '14', logo: '/users-logo/m2.png' },
    { name: '15 Atmos', logo: '/users-logo/m1.png' },
    { name: '16', logo: '/users-logo/m2.png' },
    { name: '12', logo: '/users-logo/m2.png' },
    { name: '13', logo: '/users-logo/m1.png' },
    { name: '14', logo: '/users-logo/m2.png' },
    { name: '15 Atmos', logo: '/users-logo/m1.png' },
    { name: '16', logo: '/users-logo/m2.png' },
  ];

  return (
    <div className="w-full  min-h-screen flex flex-col md:flex-row relative select-none" >

      {/* LEFT STICKY SECTION */}
  
      <div className="w-full md:w-4/12 h-fit md:h-screen md:sticky md:top-18  bg-[#0d1425]   flex flex-col justify-between p-4 md:p-12 lg:p-20 overflow-hidden">
        
        {/* Top Header Group  */}
        <div className="flex flex-col gap-4 animate-fade-in">
          <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
            Our
            <span className="block mt-1 font-black tracking-tight text-[#00AEEF]">
              Users
            </span>
          </h2>
      
        </div>

        {/* Bottom Abstract Description Text */}
        <div className="mt-20 md:mt-0 hidden md:block  text-slate-400 text-sm lg:text-base leading-relaxed font-light max-w-sm border-l border-slate-800 pl-4">
          <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </div>

   
      <div className="w-full md:w-8/12 relative bg-[#020617]  min-h-screen">
        <div className="grid grid-cols-3 w-full  h-full relative">
          
          {/* Inner Grid Separation Lines */}
          <div className="absolute inset-0 grid grid-cols-3 bg-[#020617]  pointer-events-none">
            <div className="border-r border-slate-100 h-full"></div>
            <div className="border-r border-slate-100 h-full"></div>
            <div></div>
          </div>

          {/* Loop through Partner Cards */}
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-8 lg:p-14 min-h-[180px] lg:min-h-[260px] border-b border-slate-100 overflow-hidden  transition-all duration-500 ease-out hover:bg-slate-50/50"
            >
              {/* Modern Hover Background Indicator Effect */}
              <span className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Logo Graphic Container with Reveal Animations */}
              <div className="relative w-full h-12 lg:h-16 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
