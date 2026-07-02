"use client";

import React, { useState } from "react";

// Define the Employee interface
interface Employee {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

// Mock Data for 5 Executive Team Members
const employees: Employee[] = [
  {
    id: 1,
    name: "Dr. Shreeram Iyer",
    role: "Chairman & Group CEO",
    image: "/team/Shree-sir.png",
    description:
      "Dr. Shreeram Iyer has 25 years of experience in the software industry. Amongst his many notable previous experiences was the role of Senior VP of International Operations at Patni Computers. He has a PhD by the European International University (EIU), Paris in the field of Computer Vision and Business Specification. He has Bachelors in Mechanical Engineering. He has also pursued EP, Artificial Intelligence and Business specifications from Massachusetts Institute of Technology (MIT).",
  },
  {
    id: 2,
    name: "Amitabh Roy Chowdhury",
    role: "Group COO",
    image: "/team/Amitabh-Roy-Chowdhury.png",
    description:
      "Amitabh has over 25 years of experience in IT, in multiple Senior Management roles in Operations, Account Management, Marketing and Business Development of Software Products and IT Solutions. He has extensive International exposure across the continents of US, Western Europe and South Asia through premier IT Organizations like Tata Consultancy Services, i-flex Solutions, Oracle Financial Software Services, QS Advisory, etc.",
  },
  {
    id: 3,
    name: "Hari Janardhanan",
    role: "Chief Investment Officer",
    image: "/team/hari1.png",
    description:
      "Over 30 years of extensive client-facing experience in Investment Banking and Corporate Finance Advisory, Expertise in handling complex valuations, Financial Due Diligence, M&A, IPO readiness, and transaction execution.Hari has worked with leading organizations such as EY, Deloitte, HDFC, and reputable investment banks and sovereign wealth funds in the MENA/GCC region and is a professional from the Institute of Chartered Accountants of India, Institute of Cost & Works Accountants of India, A certified Big Data expert from IIM Kashipur and a Charterholder of the Chartered Institute for Securities & Investment (UK). Hari is recognized for a strong track record as a seasoned finance and investment leader with experience spanning across the Middle East, Asia Pacific, and Europe.",
  },
  {
    id: 4,
    name: "Asha Suvarna",
    role: "Chief Financial Officer (CFO)",
    image: "/team/Asha-Suvarna.png",
    description:
      "Asha is a Chartered Accountant with over 23 years of experience in global MNCs. She has held senior leadership roles including Group CFO – South Asia at Dentsu Media India, Finance Director – Compliance & M&A at GroupM Media India, and Senior Commercial Director at Mindshare Fulcrum, GroupM Media India.​She brings strong expertise in financial strategy, compliance, mergers & acquisitions, and business transformation, and is known for driving operational excellence, strategic growth, and sustainable value creation across complex organizations.She had played significant role as part of the industry committee for media sector during two major financial developments in India; the implementation of Goods and Services Tax(GST) and the introduction of Equilisation levy.",
  },
  {
    id: 5,
    name: "Juspreet Singh Walia",
    role: "Advisor- Marketing",
    image: "/team/Juspreet-Singh-Walia.png",
    description:
      "Juspreet is an entrepreneur, investor, and skilled subject matter expert in brand management. He has over 20 years of global experience developing brands and fostering successful talent-brand partnerships. Juspreet is industry agnostic having invested in and worked across technology, financial services, hospitality, media, entertainment, and sports. His investments include CreditEnable, one of the world's largest managed technology platforms for SME credit, Swipecast which lets you book talent directly without having to go through an agency, and The Roll Company, a Bombay-based QSR.Most recently Juspreet headed up the talent division at SONY, prior to this he was the Executive Director at GS Entertainment for over a decade. Juspreet’s past work experience includes working as a Business Analyst at Carlin Equities, New York, and SAP America, a Fortune Global 500 Company. At present, Juspreet serves as the Founder and CEO of The Gratitude Company, a talent, brand, and enterprise advisory and management consulting firm.",
  },
  {
    id: 6,
    name: "Naresh Taneja",
    role: "Executive Vice President HR & Admin",
    image: "/team/Naresh-Taneja.png",
    description:
      "With over 46 years of experience in human resources and administration, Wg Cdr Naresh Taneja (Retd) combines strategic leadership with practical expertise, fostering organizational excellence across diverse sectors. His career began with 21 years of service in the Indian Air Force, where he received specialized training at the Defence Institute of Psychological Research for officers' selection. This foundation in performance, discipline, and human psychology laid the groundwork for his transition into the private sector. In his most recent role as Group President (HR and Administration) at a leading infrastructure company, Wg Cdr Taneja played a pivotal role in shaping the HR landscape for over 6,500 employees.",
  },
  {
    id: 7,
    name: "Santosh Chavan",
    role: "Consultant - Govt Liaisoning and Public Affairs",
    image: "/team/Santosh-Chavan.png",
    description:
      "Santosh Chavan is a successful entrepreneur and is the Chairman of Seawoods Group of Companies. Santosh has been handling India Sales and Marketing for Prisma since June, 2020.",
  },

  {
    id: 9,
    name: "Binal Soni",
    role: "Consultant",
    image: "/team/binal.png",
    description:
      "Ms. Binal Soni, a counseling psychologist,  has over 9 years of experience in closely working with students and professionals. She plunged into Career Counseling after a decade of experience in software programming. Binal is very passionate about nurturing young minds and helping people achieve their full potential. Binal is a Masters in Computer Applications and also a Masters in Counseling Psychology.She has done her Global Career Counseling from the University of California. She is a Certified Career Analyst from eduMilestones and also a ISO certified Handwriting Analyst. Her knowledge also extends in Dream Analysis, Transactional Analysis and Parenting Coaching. Over 1800 students have benefited from Binal's counselling services and they now work under her direction to prepare for rewarding and happy careers.",
  },
  {
    id: 10,
    name: "Jay Vora",
    role: "Advisor- Legal",
    image: "/team/jay-vohra.png",
    description:
      "Jay is an expertise in litigation cases pertaining to civil/property, income tax and indirect tax, intellectual property rights, Testamentary and labour laws on the non-litigation side, he has a good experience of drafting and reviewing of Agreements and including Joint Venture and Tender Agreements and Contracts (Domestic and International), advising on cross border corporate structuring/restructuring from a taxation perspective, advising on M&A and debt transactions.",
  },
];

export default function TeamSection() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative bg-slate-950 min-h-screen bg-gray-50 p-6 md:p-0 font-sans overflow-x-hidden " id="executive-team">
      {/* Changed lg:grid-cols-3 to xl:grid-cols-4 for desktop screens */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-24">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="relative bg-white rounded-lg  overflow-hidden shadow-sm border border-gray-100 group"
          >
            {/* Image Aspect Box */}
            <div className="aspect-[4/5] w-full bg-gray-200 overflow-hidden">
              <img
                src={emp.image}
                alt={emp.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-lg p-2.5 sm:p-4 flex items-center justify-between shadow-lg border border-white/40">
              <div className="min-w-0 pr-1">
                <h3 className="font-semibold text-gray-900 text-xs sm:text-base lg:text-lg leading-tight truncate">
                  {emp.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5 sm:mt-1 truncate">
                  {emp.role}
                </p>
              </div>
              <button
                onClick={() => openDrawer(emp)}
                className="w-7 h-7 cursor-pointer sm:w-10 sm:h-10 bg-cyan-400 hover:bg-cyan-500 rounded-full flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide-over Side Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex  justify-end">
          {/* Backdrop Blur/Fade */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeDrawer}
          />

          {/* Animated Drawer Body */}
          <div className="relative w-full max-w-md bg-slate-950 h-full shadow-2xl z-10 flex flex-col transform transition-transform duration-300 ease-out translate-x-0 animate-slide-in">
            {/* Close Button Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 text-white">
                Profile Details
              </h3>
              <button
                onClick={closeDrawer}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            {selectedEmployee && (
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={selectedEmployee.image}
                    alt={selectedEmployee.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">
                    {selectedEmployee.name}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-500 mt-1 uppercase tracking-wider">
                    {selectedEmployee.role}
                  </p>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-2">
                    About
                  </h5>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedEmployee.description}
                  </p>
                </div>

                {/* Suggestions List Section */}
                <div className="pt-4">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Other Members
                  </h5>
                  <div className="space-y-3">
                    {employees
                      .filter((e) => e.id !== selectedEmployee.id)
                      .map((suggested) => (
                        <div
                          key={suggested.id}
                          onClick={() => setSelectedEmployee(suggested)}
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-400 border border-transparent hover:border-gray-100 cursor-pointer transition-all"
                        >
                          <img
                            src={suggested.image}
                            alt={suggested.name}
                            className="w-12 h-12 rounded-lg object-cover object-top"
                          />
                          <div className="flex-1">
                            <h6 className="text-sm font-semibold text-gray-100">
                              {suggested.name}
                            </h6>
                            <p className="text-xs text-gray-400">
                              {suggested.role}
                            </p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-cyan-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
