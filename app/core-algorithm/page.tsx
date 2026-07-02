import Link from "next/link";

import { FooterSection } from "@/app/_components/landing/footer";
import { Header } from "@/app/_components/landing/header";
import InfoCard from "../_components/common_component/InfoCard";
import VisualAIEngines from "../_components/core_algorithm/visualAiEnginecard";
// import ReviewCarousel from "../_components/core_algorithm/ReviewCarousel";
import RecognitionGrid from "../_components/core_algorithm/VisualRecognition";
import TrueFixedCardSlider from "../_components/core_algorithm/applicationPI";

import Aboutus from "../_components/content/common-about";
import HeroSection from "../_components/common_component/common-hero";

export default function CoreAlgorithmPage() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <Header />
      {/* about gryphos */}
      <div>
        <HeroSection
          logo="/logo/Gryphos.png"
          title="Visual AI Platform"
          description="Choose the perfect plan for your business scale, from startup to enterprise"
          backgroundImage="/img/about.png"
        />
      </div>

      <div className="pt-12">
        <div className=" max-w-7xl mx-4 md:mx-auto my-10">
          <InfoCard
            // logo="/logo/Gryphos.png"
            descriptions={[
              "Gryphos is our core computer vision platform, which utilizes active AI-based machine learning algorithms conceived and developed by Prisma AI. Gryphos helps create a second language that can be used to understand human body language, signals and behavior, using machine learning and Deep Convolutional Neural Networks. Gryphos' exemplary Deep Learning System can be used for analysis of videos, images, objects, face for information and predictive analysis using Cognitive intelligence, which in turn can be used to analyze characterization by gestures and behavioral patterns for more analytics and effective information.",
              "With the usage of Gryphos platform, Prisma AI has developed several core AI engines with wide-spanning uses such as baggage tracking, incident detection, access surveillance, illegal object detection, smart parking systems and many more. Gryphos is a complete Visual Recognition platform to build solutions that work seamlessly by matching visual interfaces (image, video, object) and deliver precise visual recognition results in real time. ",
              "We provide AI-powered solutions to domains including, but not limited to, Security, Highway Automation System, Automobile, Infrastructure, Retail, Education, Real Estate and Online Media & Entertainment . With roots in Germany and experience adapted from major implementations and deployments globally, ‘Gryphos’, Prisma AI’s proprietary AI algorithm has placed us at the forefront of the global 'Visual AI' industry.",
            ]}
          />
        </div>
      </div>
      <div>
        <RecognitionGrid />
      </div>
      <div>
        <VisualAIEngines />
      </div>

      <TrueFixedCardSlider />
      <FooterSection />
    </main>
  );
}
