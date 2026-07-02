import React from "react";
import { PocRequestModal } from "./poc-request-modal";

export function GetStartedToday() {
  return (
    <section className="relative overflow-hidden bg-slate-950 md:py-24">
      {/* Soft Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00aeef]/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="px-0 pt-24 md:pt-6  sm:px-12 lg:px-20">
          {/* Small Heading */}
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#00aeef]">
            Get Started Today
          </p>

          {/* Main Heading */}
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl ">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#00aeef]/80 bg-clip-text text-transparent">
              Video Security?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-gray-300 sm:text-lg">
            Empower your organization with AI-powered video intelligence
            designed to enhance security, improve operational efficiency, and
            deliver real-time insights.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Seamless deployment after successful POC validation",
              "Dedicated on-boarding and expert support",
              "Flexible custom integrations tailored to your needs",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-800  bg-[#00AEEF]/10 p-5 transition-all duration-300 hover:border-[#00AEEF] hover:bg-white/[0.0] transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-sm font-bold text-[#00AEEF]">
                    ✓
                  </div>

                  <p className="text-sm leading-6 text-gray-200">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center mb-8">
            <PocRequestModal buttonClassName="hidden rounded-lg  px-15 py-3  lg:inline-flex px-6 rounded-md bg-[#00AEEF] text-white text-lg font-medium flex items-center gap-2 hover:bg-[#0095cc] transition shadow-[0_0_30px_rgba(0,174,239,0.25)]" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
