import React from "react";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower businesses with intelligent AI systems that transform visual data into actionable insights, enabling smarter decisions and automation at scale.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a global leader in Visual AI, shaping a future where machines understand and enhance human environments seamlessly and responsibly.",
    icon: Eye,
  },
];

const MissionVision = () => {
  return (
    <section className="bg-slate-950 pb-0 md:pb-10 px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="relative group rounded-lg border border-white/10 backdrop-blur-xl p-8 
              shadow-lg hover:border-white/20 transition"
            >
              {/* Icon badge */}
              <div className="absolute -top-5 left-6  border border-white/10 p-3 rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <Icon className="w-5 h-5 text-sky-400 " />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mt-6">
                {card.title}
              </h3>

              <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MissionVision;
