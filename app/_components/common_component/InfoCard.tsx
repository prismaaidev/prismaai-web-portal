// components/InfoCard.tsx
import Image from "next/image";

interface InfoCardProps {
  logo?: string;
  title?: string;
  descriptions?: string[];
}

export default function InfoCard({
  logo,
  title,
  descriptions = [],
}: InfoCardProps) {
  return (
    <div>
      {logo && (
        <div className="mb-6">
          <Image
            src={logo}
            alt={title || "logo"}
            width={200}
            height={120}
            className="object-contain d-flex items-center justify-center mx-auto"
          />
        </div>
      )}

      {title && (
        <h2 className="mb-8 text-3xl sm:text-4xl text-white font-semibold d-flex text-center mx-auto">
          {title}
        </h2>
      )}

      {descriptions.length > 0 && (
        <div className="space-y-2 md:mx-0 px-4 md:px-0 sm:px-0  text-md text-gray-400 dark:text-gray-400 text-justify">
          {descriptions.map((line, index) => (
            <p key={index} className="mb-4 text-justify">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
