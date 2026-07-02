"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "ANDY LAW",
    image: "/carousel-Items/m1.jpg",
    description:
      "Allows you to collaborate, experiment, and test much more effectively and efficiently.",
  },
  {
    id: 2,
    name: "JOHN MILLER",
    image: "/carousel-Items/m2.jpg",
    description: "An amazing platform that improves workflow and productivity.",
  },
  {
    id: 3,
    name: "DAVID KING",
    image: "/carousel-Items/m3.jpg",
    description: "The collaboration tools are smooth and intuitive.",
  },
  {
    id: 4,
    name: "SARAH PARK",
    image: "/carousel-Items/m4.jpg",
    description: "Beautiful interface with excellent usability.",
  },
  {
    id: 5,
    name: "JAMES CARTER",
    image: "/carousel-Items/m1.jpg",
    description: "One of the most efficient systems I've used recently.",
  },
];

export default function ReviewsSection() {
  const [active, setActive] = useState(reviews[0]);

  return (
    <section className="w-full bg-[#f4f4f4] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-[80px_1fr] gap-10 lg:grid-cols-[120px_1fr]">
          {/* Vertical Text */}
          <div className="flex items-center justify-center">
            <h2 className="rotate-180 text-[52px] font-bold text-slate-700 writing-mode-vertical">
              Reviews
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              {/* Featured Image */}
              <div className="relative h-[330px] w-[280px] overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />

                {/* Small Indicator */}
                <div className="absolute bottom-4 right-4 h-6 w-6 rounded-full border border-white bg-white/30 backdrop-blur-sm" />
              </div>

              {/* Text */}
              <div className="max-w-md pt-2">
                <span className="text-4xl font-bold text-slate-700">
                  #{active.id}
                </span>

                <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-700">
                  {active.name}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-12 flex gap-5">
              {reviews.map((review) => (
                <button
                  key={review.id}
                  onClick={() => setActive(review)}
                  className={`relative h-[110px] w-[90px] overflow-hidden transition-all duration-300 ${
                    active.id === review.id
                      ? "ring-2 ring-slate-700"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
