import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    title: "Prevention of Identity Frauds",
    description:
      "A new digital HUB for Houston’s biggest startup ecosystem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/tab-img/face.png",
    reverse: false,
  },
  {
    title: "Seamless Integration",
    description:
      "A brand new digital identity and website for subscription services focused on happy users.",
    image: "/deploiment/define_scope.png",
    reverse: true,
  },
  {
    title: "Passwordless Veri5ication",
    description:
      "How we turned a local studio into one of the biggest video agencies in the UK.",
    image: "/deploiment/define_scope.png",
    reverse: false,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "How we turned a local studio into one of the biggest video agencies in the UK.",
    image: "/deploiment/define_scope.png",
    reverse: false,
  },
   {
    title: "Cross-Platform Compatibility",
    description:
      "How we turned a local studio into one of the biggest video agencies in the UK.",
    image: "/deploiment/define_scope.png",
    reverse: false,
  },
];
export default function BenefitsSection() {
  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-20 sm:px-12 lg:px-0 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight pb-16 text-left">
          Check <span className="text-[#00AEEF]">Benefits</span> of Veri5
        </h2>

        <div className="space-y-24 md:space-y-36">
          {benefitsData.map((item, index) => {
            const imageLeft = index % 2 === 0; // 0,2,4 → left | 1,3 → right

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
              >
                {/* Image */}
                <div
                  className={`w-full ${imageLeft ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="relative aspect-[12/6] w-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale-[10%] brightness-95 contrast-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-4 ${imageLeft ? "md:order-2" : "md:order-1"}`}
                >
                  <h3 className="text-xl md:text-2xl font-bold tracking-wider leading-snug max-w-md">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                    {item.description}
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
