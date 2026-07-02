import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2026",
    title: "National AI Excellence Award",
    description:
      "Awarded “AI Company of the Year 2026”  at the Times Aspire National AI & Digital  Transformation Awards.",
  },
  {
    year: "2025",
    title: "Strategic Public Sector Partnerships",
    description:
      "Partnered with Maharashtra Police for AI road safety, enabled smart access at Shirdi Temple, and named “Leading SME of India 2025” by Dun & Bradstreet.",
  },
  {
    year: "2024",
    title: "Global Recognition & Certifications",
    description:
      "Secured a major customs contract, certified with ISO 42001:2023 and ISO 27001:2022, named “Global Firm of the Year” in Visual AI, and partnered with jpp.",
  },
  {
    year: "2020",
    title: "Large-Scale AI Deployment",
    description:
      "Secured a major kitchen contract for Asia’s largest airport and advanced posture  recognition tech, expanding to over 300 computer vision APIs.",
  },
  {
    year: "2017",
    title: "Singapore Headquarters Launch",
    description:
      "Established Asian headquarters in Singapore to drive regional growth and innovation.",
  },
  {
    year: "2012",
    title: "AI Product Expansion",
    description:
      "Launched advanced AI products, saw significant contract growth, and secured a major win with the European highway authority for intelligent infrastructure soln.",
  },
  {
    year: "2010",
    title: "Gryphos® Platform Created",
    description:
      "Created Gryphos® to unify and standardize Prisma’s image recognition capabilities into  a single powerful platform.",
  },
  {
    year: "2000",
    title: "Strategic Growth Partnership",
    description:
      "Prisma partners with Patni as its Extended Development Center, a collaboration led by Dr. Iyer, who later drives Prisma’s growth by acquiring the company.",
  },
  {
    year: "1981",
    title: "Company Founded",
    description:
      "In 1981, the company was founded in Germany by a team of former IBM professionals.",
  },
];

export default function StickyTimelineSection() {
  return (
    // Explicit flex structure to ensure the body container layout allows normal document scrolling
    <section
      className="bg-slate-950 text-white min-h-screen w-full block"
      id="history"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 pt-24">
        {/* THE PARENT GRID CONTAINER: items-start is required to let the right side expand beyond the left side */}
        <div className="grid lg:grid-cols-2 gap-16 items-start relative h-full">
          {/* LEFT SIDE - STICKY COMPONENT */}
          <div className="lg:sticky lg:top-[120px] h-fit block">
            <div>
              <span className="text-sky-400 uppercase tracking-[0.2em] text-sm">
                Our Journey
              </span>
              <h5 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Building the Future of AI
              </h5>
              <p className="mt-6 text-slate-400 text-lg max-w-lg">
                From a small startup to a globally recognized AI platform, every
                milestone represents innovation, growth, and impact.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - LONG CONTENT COMPONENT */}
          <div className="block">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-slate-800" />

              <div className="space-y-10">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Dot */}
                    <div className="relative z-10 mt-6">
                      <div className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_15px_#38bdf8]" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 backdrop-blur-xl border border-slate-800 rounded-lg p-6 hover:border-sky-400/40 transition-all duration-300">
                      <span className="text-sky-400 font-semibold text-lg">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
