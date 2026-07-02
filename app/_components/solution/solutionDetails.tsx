import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // Imported Variants type

export interface DeploymentData {
  title: string;
  description: string;
  imageSrc: string;
}

interface FeatureCardProps {
  subtitle: string;
  title: string;
  description: string;
  points?: string[];
  badgeText?: string;
  badgeSubText?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  deployments?: DeploymentData[]; 
  onDeployClick?: (data: DeploymentData[]) => void; 
}

export default function SolutionDetails({
  subtitle,
  description,
  points = [],
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  deployments = [], 
  onDeployClick,
}: FeatureCardProps) {
  const isImageLeft = imagePosition === 'left';

  // Explicitly typed Image Scale Variants
  const imageVariants: Variants = {
    hidden: { scale: 1.15, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], 
      },
    },
  };

  // Explicitly typed Container Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Explicitly typed List Item Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Explicitly typed Typewriter Text Variants
  const sentenceVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 py-0 md:py-2 bg-[#020618]">
      <div
        className={`flex mb-8 flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-[#0d1425] border border-slate-800 p-6 md:p-8 gap-8 md:gap-12 ${
          isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Animated Image Container */}
        <div className="w-full md:w-5/12 min-h-[300px] md:min-h-[380px] rounded-lg overflow-hidden flex-shrink-0 relative">
          <motion.div
            className="absolute inset-0 w-full h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 40vw"
              priority
            />
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-7/12 flex flex-col justify-center text-left relative pb-12 md:pb-14">
          <h6 className="text-2xl font-bold tracking-widest text-[#00AEEF] uppercase mb-3">
            {subtitle}
          </h6>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            {description}
          </p> 

          {/* Bullet Points Section */}
          {points.length > 0 && (
            <motion.ul 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {points.map((point, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start text-sm text-slate-300"
                >
                  <svg className="w-5 h-5 text-[#00AEEF] mr-2.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  
                  <motion.span variants={sentenceVariants}>
                    {point.split("").map((char, charIndex) => (
                      <motion.span key={charIndex} variants={letterVariants}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          )}
      
          {/* Render button only if deployments array has items */}
          {deployments.length > 0 && onDeployClick && (
            <div className="absolute bottom-0 right-0">
              <button
                onClick={() => onDeployClick(deployments)}
                className="text-sm font-semibold text-[#00AEEF] hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group bg-[#0d1425] px-3 py-1.5 rounded-md border border-slate-800 hover:border-slate-700"
              >
                Use Cases ({deployments.length})
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
