
import Hexagon from "./hexagon";

export default function RecognitionGrid() {
  const logo = "/gryfas-logo.png";

  return (
    <section className="bg-[#020618] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-medium mb-16">
          Prisma&apos;s Patented Visual Recognition Platform
        </h2>

        <div className="flex flex-col items-center">

          {/* TOP */}
          <div className="flex">
            <Hexagon />
            <Hexagon />
            <Hexagon active image={"/logo/Gryphos.png"} />
            <Hexagon />
            <Hexagon />
          </div>

          {/* MIDDLE */}
          <div className="flex -mt-7">
            <Hexagon />
            <Hexagon active image={"/logo/GrySCAN.png"} />
            <Hexagon active image={"/logo/Veri5.png"} />
            <Hexagon active image={"/logo/GryFAS.png"} />
            <Hexagon active image={"/logo/GrySCAN.png"} />
            <Hexagon />
          </div>

          {/* BOTTOM */}
          <div className="flex -mt-7">
            <Hexagon />
            <Hexagon />
            <Hexagon active image={"/logo/GrySEC.png"} />
            <Hexagon />
            <Hexagon />
          </div>

        </div>
      </div>
    </section>
  );
}