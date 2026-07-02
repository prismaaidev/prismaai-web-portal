'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SolutionDetails, { DeploymentData } from "./solutionDetails";

export default function SolutionCards() {
  const [isOpen, setIsOpen] = useState(false);
  // 1. State now holds an array of DeploymentData objects instead of just one
  const [activeDeployments, setActiveDeployments] = useState<DeploymentData[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleOpenSidebar = (data: DeploymentData[]) => {
    setActiveDeployments(data);
    setIsOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className=" bg-[#020618] relative min-h-screen">
      <div id="banking" className="scroll-mt-24" >
      <SolutionDetails
        subtitle="Banking"
        title="Finance Solutions- Secure Verification"
        description="AI-powered solutions for secure, efficient, and intelligent banking operations. Enables face recognition-based transactions, fraud/suspicious activity detection, lost item identification, and automated attendance tracking with enhanced customer support."
        points={[
          "Face recognition based financial transactions",
          "Illegal object detection",
          "Suspicious behaviour alert",
          "Identification of lost bag ",
          "Tracking of attendance",
          "Providing assistance  to elderly",
        ]}
        imageSrc="/industries/banking-finance.png"
        imageAlt="Construction workers discussing"
        imagePosition="left"
         deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },{
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
        onDeployClick={handleOpenSidebar}
      />
      </div>
      {/* Card 2: Image Right with Points */}
      <div id="aviation" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Aviation"
        title="Airport Security & Operations"
        description="Smart airport solutions enhancing passenger safety and experience through face-based boarding access, assistance for special needs and elderly passengers, baggage tracking, unattended bag alerts, and intelligent security monitoring."
        points={[
          "Providing assistance to special individuals",
          "Face-as-boarding pass for access",
          "Providing assistance  to elderly",
          "Identification of lost bag ",
          "Alert for unattended bag/ purse",
        ]}
        imageSrc="/industries/Aviation.png"
        imageAlt="Construction workers discussing"
        imagePosition="right"
         deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
        onDeployClick={handleOpenSidebar}
      />
      </div>
       <div id="infrastructure" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Infrastructure"
        title=""
        description="AI-driven traffic and infrastructure management system enabling automated violation ticketing, accident alerts, license plate-based toll collection, and smart monitoring for safer and efficient transportation."
        points={[
          "Ticketing for red light violations",
          "Ticketing for reckless driving",
          "Alert on accident",
          "Toll collection through license plate",
          "Ticketing for speed violation",
          "Alert on accident",
        ]}
        imageSrc="/industries/Infrastructure.png"
        imageAlt="infrastructure"
        imagePosition="left"
         deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
         onDeployClick={handleOpenSidebar}
      />
      </div>
       <div id="security" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Security"
        title="Airport Security & Operations"
        description="Advanced surveillance system for real-time threat detection including crowd incidents, suspicious behavior, hazardous objects, banned person alerts, facial authentication, and crowd sentiment analysis for safer environments."
        points={[
          "Incident detection in crowd",
          "Crowd sentiment analysis",
          "Hazardous object detection", 
          "Facial authentication for entry",
          "Banned person alert",
          "Suspicious behavior alert",
        ]}
        imageSrc="/industries/Security.png"
        imageAlt="security"
        imagePosition="right"
         deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
         onDeployClick={handleOpenSidebar}
      />
      </div>
       <div id="education" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Education"
        title="Campus Safety & Security"
        description="AI-based education management system for detecting suspicious exam activity, sentiment analysis, banned object detection, automated attendance, and intelligent paper evaluation for improved integrity and efficiency."
        points={[
          "Suspicious activity - body movements",
          "Suspicious activity - eye movements",
          "Sentiment analysis",
          "Detection of banned objects",
          "Tracking of attendance",
          "Automated paper corrections",
        ]}
        imageSrc="/industries/Education.png"
        imageAlt="Construction workers discussing"
        imagePosition="left"
           deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
         onDeployClick={handleOpenSidebar}
      />
</div>
<div id="events" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Events"
        title="Smart Access & Crowd Safety"
        description="Smart event management solution offering crowd monitoring, incident detection, sentiment and density analysis, face-based entry, parking management, and hazard detection for safe and smooth events."
        points={[
          "Incident detection in crowd",
          "Crowd sentiment analysis",
          "Parking management system",
          "Face-as-a-ticket for entry",
          "Crowd density analysis",
          "Hazardous object detection",
        ]}
        imageSrc="/industries/Event.png"
        imageAlt="Construction workers discussing"
        imagePosition="right"
           deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
         onDeployClick={handleOpenSidebar}
      />
</div>
<div id="manufacturing" className="scroll-mt-24">
      <SolutionDetails
        subtitle="Manufacturing"
        title="Safety & Productivity"
        description="Industrial AI system for secure access control, attendance tracking, safety gear detection, predictive maintenance, and defect alerting to improve safety, quality, and productivity."
        points={[
          "Face recognition for entry",
          "Tracking of attendance",
          "Detection of safety gear",
          "Predictive maintenance",
          "Alert on defect detection",
        ]}
        imageSrc="/industries/Manufacturing.png"
        imageAlt="Construction workers discussing"
        imagePosition="left"
           deployments={[
          {
            title: "Private Edge Cloud Infrastructure",
            description: "On-premise hardware setup deployed directly inside local server rooms for sub-millisecond core verification speed.",
            imageSrc: "/industries/banking-finance.png"
          },
          {
            title: "Global Cloud API Integration",
            description: "Scalable fallback cluster managed entirely via AWS regions for multi-branch sync networks.",
            imageSrc: "/industries/Aviation.png"
          }
        ]}
         onDeployClick={handleOpenSidebar}
      />
</div>
      {/* BACKGROUND SHIELD OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleCloseSidebar}
      />

     {/* SIDEBAR CONTAINER */}
<div 
  className={`fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-[#0d1425] border-l border-slate-800 z-50 p-6 md:p-8 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {activeDeployments.length > 0 && (
    <div className="flex flex-col h-full overflow-hidden">
      
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4 flex-shrink-0">
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">Use Case</h3>
        </div>
        <button onClick={handleCloseSidebar} className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable Workspace (Scrollbar Hidden) */}
      <div className="flex-1 overflow-y-auto space-y-6 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {activeDeployments.map((deploy, index) => (
          <div 
            key={index} 
            className="hover:border-slate-700 transition-all group"
          >
            <div className="relative w-full h-[160px] rounded-lg overflow-hidden border border-slate-800/50 mb-4">
              <Image 
                src={deploy.imageSrc} 
                alt={deploy.title} 
                fill 
                className="object-cover"
              />
            </div>
            <h4 className="text-base font-bold text-[#00AEEF] mb-1.5 group-hover:text-cyan-400 transition-colors">
              {deploy.title}
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              {deploy.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )}
</div>


    </div>
  );
}
