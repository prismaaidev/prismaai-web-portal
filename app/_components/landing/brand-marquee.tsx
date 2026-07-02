'use client';



export default function BrandMarquee() {

 const brands = [
  "/users/npci.png",
  "/users/maharashtra police.png",
  "/users/adani.png",
  "/users/ydigital.png",
  "/users/berlin de.png",
  "/users/bvg.png",
  "/users/c and a.png",
  "/users/dna.png",
  "/users/e-plus.png",
  "/users/fraunhofer gesellschaft.png",
  "/users/grandplix.png",
  "/users/gvk.png",
  "/users/h and m.png",
  "/users/ikea.png",
  "/users/kfc.png",
  "/users/ksa.png",
  "/users/lbb.png",
  "/users/mcdonald.png",
  "/users/mibrag.png",
  "/users/netto.png",
  "/users/otto.png",
  "/users/penny.png",
  "/users/pandg.png",
  "/users/panjab kesari.png",
  "/users/subway.png",
  "/users/heinrich heine.png",
  "/users/vivantes.png",
  "/users/air india.png",
  "/users/bayer.png",
  "/users/fc bayern.png",
  
];

 
  const scrollItems = [...brands, ...brands, ...brands];

  return (
  <div className="w-full  bg-[#020618] text-white flex flex-col justify-center items-center  selection:bg-cyan-500 selection:text-black">

      <div className="w-full max-w-5xl  rounded-md overflow-hidden relative   bg-[#0B0F19] relative w-full max-w-7xl user-logos">
        
   
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-track {
            animation: infiniteScroll 60s linear infinite;
          }
        `}} />

      
        <div className="flex w-max items-center animate-track bg-[#E0E0E0] hover:[animation-play-state:paused]">
          {scrollItems.map((imgSrc, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 sm:mx-12 md:mx-16 min-w-[80px] sm:min-w-[100px]  transition-transform duration-200 hover:scale-105 select-none"
            >
              <img 
                src={imgSrc} 
                alt={`Brand logo ${index + 1}`}
                className="max-h-full w-auto object-contain filter contrast-125"
                draggable="false"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
