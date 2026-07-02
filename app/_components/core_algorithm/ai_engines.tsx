import Image from "next/image";

type EngineCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function EngineCard({
  title,
  description,
  image,
}: EngineCardProps) {
  return (
    <div className="group relative">
      {/* Glow Effect (hover spotlight like first card) */}
      <div className="absolute -inset-10 rounded-lg bg-white/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div
        className="
          relative z-10
          rounded-lg
          
          
          p-8
          transition-all duration-500
          active:border-white/60
          hover:border-white/60
          active:shadow-[0_0_60px_rgba(255,255,255,0.12)]
          hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]
          hover:border border-white/10
          active:-translate-y-1
          hover:-translate-y-1
        "
      >
        {/* Image */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-medium text-white">{title}</h3>

        {/* Description */}
        <p className="text-sm leading-6 text-white">{description}</p>
      </div>
    </div>
  );
}
