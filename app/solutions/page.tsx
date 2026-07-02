import Link from "next/link";

import { FooterSection } from "@/app/_components/landing/footer";
import { Header } from "@/app/_components/landing/header";
import HeroSection from "../_components/common_component/common-hero";

// import ComputerVisionPlatform from "../_components/solution/visionPalteform";
// import DeploymentInstances from "../_components/solution/DelpoymentInstances";
import SolutionCards from "../_components/solution/solutionCrads";
import SectionTitle from "../_components/landing/SectionTitle";

export default function IndustriesPage() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <Header />

      <div>
        <HeroSection
          label="Solutions"
          title="Computer Vision Platform For Industries"
          backgroundImage="/img/about.png"
        />
      </div>

      {/* <ComputerVisionPlatform /> */}
      {/* <DeploymentInstances /> */}
      <SectionTitle
        mainTitle="Solutions"
        subtitle="AI Vision Across Environments AI vision deployments designed to improve safety, monitoring, and operational intelligence across real-world environments."
      />
      <SolutionCards />
      <div className="mb-26 "></div>
      <FooterSection />
    </main>
  );
}
