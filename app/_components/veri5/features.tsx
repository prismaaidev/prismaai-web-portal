import React from "react";

import { ShieldCheck, Layers, Fingerprint, Workflow, Server, LockKeyhole, BadgeCheck, Files,ClipboardList,VideoIcon } from "lucide-react";

const featuresData = [
  {
    id: 1,
    title: "Single sign on",
    description:
      "Veri5 enables seamless access across multiple applications by allowing users to log in once and gain entry to various services with a simple face scan.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Multi Layer Verification",
    description:
      "Veri5 employs multiple layers of authentication, including facial recognition, gesture verification, liveness detection, and government ID verification to provide a robust and secure identity verification process for users.",
    icon: Layers,
  },
  {
    id: 3,
    title: "Secure Access Delegation",
    description:
      "Veri5 empowers verified users to manage access to their accounts on digital platforms by enabling multiple users to gain entry with their consent.",
    icon: Fingerprint,
  },
   {
    id: 4,
    title: "Customizable Workflows",
    description:
      "Veri5 allows businesses to tailor the verification process to their specific needs and regulatory requirements.",
    icon: Workflow,
  },
   {
    id: 5,
    title: "On-Premise Veri5ication",
    description:
      "Veri5 supports identity verification for online services and offers on-premise solutions that allow identity verification processes to be managed locally within an organization’s infrastructure.",
    icon: BadgeCheck,
  },
   {
    id: 6,
    title: "Document Veri5ication",
    description:
      "Veri5 is capable of scanning and verifying government issued IDs, passport, Aadhaar, Pan, and other identity documents.",
    icon: Files,
  },
   {
    id: 7,
    title: "Regulatory Records",
    description:
      "Veri5 maintains records of all verification attempts, success rates, and reasons for failures to support regulatory compliance.",
    icon: ClipboardList,
  },
   {
    id: 8,
    title: "Online Video Veri5ication",
    description:
      "Veri5 allows users to opt for online video verification when automated verification through other layers fails, such as in cases of face mismatch or when identity cannot be conclusively validated.",
    icon: VideoIcon,
  },
];

export default function QualityFeatures() {
  return (
    <section className="bg-[#020617] text-gray-300 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      <div className="max-w-7xl w-full space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            Quality
            <br />
           <span className="text-[#00AEEF]">Features</span> 
          </h2>
          <p className="text-gray-400 text-sm md:text-right max-w-xs md:max-w-sm leading-relaxed font-light">
            Tons of features to make you Veri5ied,
            <br className="hidden md:inline" /> Smart, secure, and simplified.
          </p>
        </div>

        {/* Features List Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  {featuresData.map((feature) => {
    const IconComponent = feature.icon;

    return (
      <div
        key={feature.id}
        className="md:col-span-6 hover:-translate-y-1 hover:border-[#00AEEF]/40 backdrop-blur-xl border border-white/10 rounded-lg p-5 md:p-6 transition duration-300 "
      >
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md">
            <IconComponent className="w-5 h-5 md:w-6 md:h-6 stroke-[1.75] text-[#00AEEF]" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-medium text-white tracking-wide mb-2">
              {feature.title}
            </h3>

            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}
