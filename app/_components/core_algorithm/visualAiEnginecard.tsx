import EngineCard from "./ai_engines";

const cards = [
  {
    title: "Face Recognition",
    description:
      "Prisma AI’s facial recognition is a technology capable of identifying or verifying a person from a digital image or a video frame from a video source. Facial recognition can be used for security and access, payment authorization, attendance tracking and many more.",
    image: "/icons/control-system.png",
  },
  {
    title: "Object Recognition",
    description:
      "Prisma AI’s Object recognition engine can detect and identify objects of various types in images and videos. The algorithm identifies the shape, size and nature of the object and presents the result i.e., what the object is. Object recognition algorithms can be trained to identify new types of objects in videos and images.",
    image: "/icons/person 1.png",
  },
  {
    title: "Image Recognition",
    description:
      "The image recognition engine identifies the type of element in the image and presents the result i.e., whether it is a person, object, animal etc. Image recognition technology can be implemented in various industries and has the potential to revolutionize those industries by providing accurate and efficient ways to analyze and understand visual information.",
    image: "/icons/right-arrow (6) 1.png",
  },
  {
    title: "OCR",
    description:
      "Prisma AI’s OCR engine executes and transmutes the most complex forms of any article to the simplest form. Powered by the precision of Artificial Intelligence, it identifies different characters and converts them into readable form. It also extracts text from an image, video, or document and may include handwriting, license plates, or documents of various kinds. ",
    image: "/icons/user-profile 1.png",
  },
  {
    title: "Body Pose Estimation",
    description:
      "Body Behavioral Analysis is a computer vision-based technology used for understanding human behavior, body gestures, identifying movement and detecting suspicious behavior.",
    image: "/icons/control-system.png",
  },
  {
    title: "Biometric",
    description:
      "Biometrics are used as a form of identification and access control. Biometrics technology is used to measure and analyze physical characteristics such as fingerprints and iris scans to name a few. Prisma’s Biometric engine is specially designed to deliver accurate outputs. Biometrics can be used in various sectors for different purposes.",
    image: "/icons/right-arrow (6) 1.png",
  },
  {
    title: "Video Recognition",
    description:
      "Video Recognition engine is capable of identifying various elements such as objects, people, animals, incidents, within any live or recorded video easily deducing the type of each element. This is very useful for identifying and tracking down lost or misplaced objects or pets, finding specific people or those who are deemed suspicious, and locations where any incident takes place. ",
    image: "/icons/right-arrow (6) 1.png",
  },
];

export default function VisualAIEngines() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl sm:text-4xl font-semibold text-white">
          Visual AI Engines
        </h2>

        {/* Grid */}
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <EngineCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
