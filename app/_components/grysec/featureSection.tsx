"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dataset containing your 8 custom items and unique local PNG icon image paths
const FEATURES_DATA = [

  {
    id: 1,
    title: "Windows Domain Login",
    description:
      "GrySEC verifies the identity of users accessing a system through facial recognition technology, adding an extra layer of authentication beyond traditional usernames and passwords.",
    imageUrl: "/img/settings.png",
  },
  {
    id: 2,
    title: "Multi-User Functionality",
    description:
      "GrySEC offers multi-user functionality, allowing multiple authorized individuals to access the same device as needed. It is flexible, efficient, and ideal for teamwork.",
    imageUrl: "/img/settings.png",
  },
  {
    id: 3,
    title: "Real-Time Alerts",
    description:
      "GrySEC provides instant notifications for unauthorized access attempts. This enables quick responses to potential security threats, minimizing risks.",
    imageUrl: "/img/settings.png",
  },
  {
    id: 4,
    title: "Authorized Entry Area",
    description:
      "GrySEC allows the creation of secure zones accessible only to authorized personnel. This enhances security by preventing unauthorized access to sensitive areas.",
    imageUrl: "/img/settings.png",
  },
  {
    id: 5,
    title: "Logical Access Management",
    description:
      "GrySEC implements a maker-checker mechanism to enforce dual control in critical workflows, requiring one user to initiate and another to approve actions, while facial authentication further secures each step by linking it to a verified identity.",
    imageUrl: "/img/settings.png",
  },
  {
    id: 6,
    title: "Intelligent Access Management",
    description:
      "GrySEC implements intelligent access management through role-based controls, ensuring only authorized users receive permissions aligned with their responsibilities, with all access governed by secure control mechanisms.",
    imageUrl: "/img/settings.png",
  },


];

const smoothFadeVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
};

export default function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewports dynamically (< 768px width)
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let visibleItems = [];
  let totalDots = 2;

  if (isMobile) {
    totalDots = FEATURES_DATA.length;
    visibleItems = [FEATURES_DATA[currentIndex]];
  } else {
    totalDots = 2;
    const currentDesktopPage = currentIndex < 4 ? 0 : 1;
    visibleItems = FEATURES_DATA.slice(currentDesktopPage * 4, (currentDesktopPage + 1) * 4);
  }

  const handleTabChange = (index: number) => {
    if (isMobile) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(index * 4);
    }
  };

  const isDotActive = (dotIndex: number) => {
    if (isMobile) {
      return dotIndex === currentIndex;
    }
    const currentDesktopPage = currentIndex < 4 ? 0 : 1;
    return dotIndex === currentDesktopPage;
  };

  return (
    <section className=" text-white py-16 mt-5 px-6 md:px-0 lg:px-0 font-sans  flex flex-col justify-center select-none">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white">
            Features
          </h2>
       
          <p className="text-slate-400 text-sm md:text-base max-w-xs text-left md:text-right font-light leading-relaxed">
           Advanced identity verification and access management  for {" "}
            <span className="">secure.</span>
          </p>
        </div>

        {/* Dynamic Grid Container Layout */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={isMobile ? currentIndex : (currentIndex < 4 ? 0 : 1)}
              variants={smoothFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {visibleItems.map((feature) => (
                <div
                  key={feature.id}
                  className="border border-gray-800  backdrop-blur-sm  rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[260px] transition-colors duration-300 hover:border-gray-700"
                >
                  <div>
                    {/* Custom PNG Icon container matching the layout structure */}
                    <div className="mb-6 flex items-center justify-start">
                      <div className="feature-img flex items-center justify-center p-2 overflow-hidden">
                        <img 
                          src={feature.imageUrl} 
                          alt={`${feature.title} icon asset`}
                          className="w-full h-full object-contain filter brightness-95" 
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Feature Title */}
                    <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-wide text-gray-100">
                      {feature.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab Pagination System */}
        <div className="mt-12 flex justify-center items-center gap-2.5">
          {Array.from({ length: totalDots }).map((_, index) => {
            const isActive = isDotActive(index);
            return (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                aria-label={`Switch to slide step ${index + 1}`}
                className="relative h-2.5 block focus:outline-none"
              >
                <div
                  className={`h-full rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-6 bg-white" : "w-2.5 bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
