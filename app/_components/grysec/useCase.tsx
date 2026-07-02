import React from 'react';

export default function UseCasesSEC() {
  // 6 completely unique data items as requested
  const useCasesData = [
    {
      id: 1,
      title: "Corporate Office Security",
      description: "Enhances corporate office security by controlling access to sensitive areas, ensuring only authorized personnel can enter secure zones."
    },
    {
      id: 2,
      title: "Remote Workforce Management",
      description: "For organizations with remote employees, GrySEC verifies the identities of users accessing corporate devices on any network, ensuring secure access to sensitive data."
    },
    {
      id: 3,
      title: "Government Building Security",
      description: "GrySEC can be deployed in government facilities to manage access to restricted areas, ensuring that only authorized personnel can enter sensitive zones and maintain national security."
    },
    {
      id: 4,
      title: "Bank Lockers and Vault Security",
      description: "Secure bank lockers and vault rooms with an intelligent face-recognition layer at the entrance. Entry is granted exclusively to verified faces, ensuring maximum protection against unauthorized access."
    },
    {
      id: 5,
      title: "Data Center Security",
      description: "In data centers, access to critical infrastructure is controlled, ensuring that only authorized IT staff can enter secure areas."
    },
    {
      id: 6,
      title: "Time and Attendance Tracking",
      description: "GrySEC, implemented during the initial rollout, leverages facial recognition technology to digitize and standardize employee check-in and check-out processes, improving accuracy and reducing administrative dependency on legacy attendance methods."
    }
  ];

  return (
    <section className="min-h-screen mb-20 text-white py-20 px-4 sm:px-8 md:px-0 lg:px-0 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
      

  <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
             Use Cases
          </h2>
       
          <p className="text-slate-400 text-sm md:text-base max-w-xs text-left md:text-right font-light leading-relaxed">
            GrySEC enhances security and access control with fast, accurate{" "}
            <span className="">  facial recognition.</span>
          </p>
        </div>
        {/* 2-Column Responsive Layout Block */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-y-8">
            {/* Top Image */}
            <div className="">
              <img 
                src="/img/face-1.png" 
                alt="City concert and event" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom 3 Text Blocks (Items 4, 5, 6) */}
            <div className="flex flex-col gap-y-4">
              {useCasesData.slice(3, 6).map((item) => (
                <AccordionCard key={item.id} title={item.title} description={item.description} />
              ))}
            </div>
          </div>  

          {/* RIGHT COLUMN */}
          {/* lg:mt-0 gives standard flow, ordering logic perfectly positions things for responsive views */}
          <div className="flex flex-col gap-y-8 order-last lg:order-none mt-4 lg:mt-0">
            {/* Top 3 Text Blocks (Items 1, 2, 3) */}
            <div className="flex flex-col gap-y-4">
              {useCasesData.slice(0, 3).map((item) => (
                <AccordionCard key={item.id} title={item.title} description={item.description} />
              ))}
            </div>
            
            {/* Bottom Image */}
            <div className=" ">
              <img 
                src="/img/face-2.png" 
                alt="Futuristic retail experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

{/* Sub-component for clean item renders */}
function AccordionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="w-full  rounded-lg border border-slate-800/60 overflow-hidden group transition-all duration-200">
      {/* Active Header State */}
      <div className="bg-[#f0f4f8] text-[#0f172a] px-6 py-[14px] font-semibold text-base sm:text-lg tracking-wide">
        {title}
      </div>
      {/* Content Body */}
      <div className="px-6 py-5">
        <p className="text-slate-400 text-sm md:text-base leading-relaxed ">
          {description}
        </p>
      </div>
    </div>
  );
}
