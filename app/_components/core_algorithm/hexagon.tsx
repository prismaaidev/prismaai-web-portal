// components/Hexagon.tsx

interface HexagonProps {
  active?: boolean;
  image?: string;
}

export default function Hexagon({ active = false, image }: HexagonProps) {
  return (
    <div
      className="relative w-[clamp(70px,10vw,120px)]
h-[clamp(60px,8.5vw,104px)]"
    >
      {active && (
        <div className="absolute inset-0 flex shadow items-center justify-center">
          <div className="w-[140px] h-[140px] rounded-full bg-white/30 blur-3xl" />
        </div>
      )}

      <svg viewBox="0 0 120 104" className="absolute inset-0 w-full h-full">
        <path
          d="M60 4
       Q64 4 68 7
       L102 27
       Q108 30 108 37
       L108 67
       Q108 74 102 77
       L68 97
       Q64 100 60 100
       Q56 100 52 97
       L18 77
       Q12 74 12 67
       L12 37
       Q12 30 18 27
       L52 7
       Q56 4 60 4Z"
          fill={active ? "#fff" : "#d9d9d9"}
        />
      </svg>

      {image && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={image}
            alt=""
            className="max-w-[65%] max-h-[40px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
