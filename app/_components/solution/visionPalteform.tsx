import React from "react";

// Mock data for the 3 lower cards
const industriesData = [
  {
    id: 1,
    title: "Manufacturing Industries",
    description:
      "Leverage advanced AI-powered video analytics to enhance security, safety, and operational efficiency.",
    image: "/tab-img/face.png",
  },
  {
    id: 2,
    title: "Manufacturing Industries",
    description:
      "Leverage advanced AI-powered video analytics to enhance security, safety, and operational efficiency.",
    image: "/tab-img/face.png",
  },
  {
    id: 3,
    title: "Manufacturing Industries",
    description:
      "Leverage advanced AI-powered video analytics to enhance security, safety, and operational efficiency.",
    image: "/tab-img/face.png",
  },
];

export default function ComputerVisionPlatform() {
  return (
    <div className=" text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mt-12 mb-10 tracking-tight">
          Computer Vision Platform For Industries
        </h2>
        <div className="bg-[#0d1425] border border-slate-800 rounded-lg p-5 mx-8 mt-8 flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
            <img
              src="/tab-img/face.png"
              alt="Manufacturing Industry AI Analytics"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>

          {/* Main Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">
                Manufacturing Industries
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Leverage advanced AI-powered video analytics to enhance
                security, safety, and operational efficiency. Our intelligent
                solutions enable face recognition-based financial transactions,
                illegal object detection, suspicious behavior monitoring, lost
                bag identification, attendance tracking, and assistance for the
                elderly.
              </p>
            </div>

            <div className="pt-4 ">
              <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                AI That Sees Beyond Security.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="bg-[#0d1425] rounded-lg p-5 flex flex-col justify-between space-y-4 border border-slate-800 transition duration-300"
            >
              {/* Card Image */}
              <div className="w-full h-44 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Card Text */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
