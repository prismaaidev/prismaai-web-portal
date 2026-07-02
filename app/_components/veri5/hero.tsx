import Image from 'next/image';
import Link from "next/link";
import {

  Cpu
} from "lucide-react";
export default function SplitSection() {
  return (
      <section className="relative mt-16 mb-0 w-full bg-[#020618] text-white flex items-center justify-center px-6 pt-10 md:px-12 lg:px-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00AEEF]/10 blur-[120px]" />

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        {/* Left Content Side */}
        <div className="flex flex-col space-y-6 max-w-xl">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border w-[272px] border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-2 text-xs text-white/70">
            <Cpu size={14} className="text-[#00AEEF]" />
            AI-Powered Computer Vision Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-slate-100">
           What is <span className="text-[#00AEEF]">Veri5</span>? 
          </h1>

          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
          Veri5 is an Visual AI-driven facial recognition product that utilizes Prisma AI’s patented visual recognition platform, Gryphos®. </p>
           <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
        
This sophisticated system employs a multi layered verification approach, incorporating methods such as email and mobile verification, captcha challenges, facial and gesture recognition, liveness detection, government ID authentication and video calls.
   </p>

 <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
These diverse layers work together to significantly enhance the accuracy, Integrity and security of identity authentication, ensuring a reliable and robust verification process.
          </p>
        </div>

        {/* Right Media Side */}
        {/* <div className="relative w-full aspect-video lg:aspect-square max-w-xl mx-auto flex items-center justify-center">
          <div className="w-[96%] h-[96%] rounded-xl overflow-hidden relative group">
             <img
              src="/img/veri5.png"
              alt="Manufacturing Industry AI Analytics"
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        </div> */}
       <div className="relative w-full aspect-video lg:aspect-square max-w-xl mx-auto flex items-center justify-center rounded-xl">
  <div className="w-[96%] h-[96%] overflow-hidden relative group flex items-center justify-center">
    <img 
      src="/veri5/veri5.png" 
      alt="Manufacturing Industry AI Analytics" 
      className="max-w-full max-h-full object-contain" 
    />
  </div>
</div>


      </div>
    </section>
  );
}