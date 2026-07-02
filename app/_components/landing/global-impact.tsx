'use client';

import { motion, Variants } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '125', suffix: '+', label: 'Global Deployments' },
  { value: '425,000', suffix: '+', label: 'Cameras Running Gryphos®' },
  { value: '06', suffix: '', label: 'Continents Covered' },
  { value: '$260m', suffix: '+', label: 'Total Contracts Till Date' },
];

export default function GlobalImpact() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.610, 0.355, 1.000] 
      } 
    },
  };

  return (
    <>
      
      <style jsx global>{`
        @keyframes border-spin {
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>

      <section className="relative w-full bg-slate-950 md:py-0 overflow-hidden selection:bg-indigo-500 selection:text-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-[1px] overflow-hidden rounded-lg bg-slate-900/50"
              >
          
                <div className="absolute inset-0 h-[200%] w-[200%] top-[-50%] left-[-50%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_40%,#00AEEF_70%,transparent_100%)] pointer-events-none" />
                
             
                <div className="relative h-full w-full rounded-lg bg-slate-950 p-6 z-10">
                  <div className="flex items-baseline justify-center sm:justify-start gap-1 mb-3">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-2xl md:text-3xl font-bold text-[#00AEEF]">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
