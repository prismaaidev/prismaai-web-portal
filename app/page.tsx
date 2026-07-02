
import { FooterSection } from "@/app/_components/landing/footer";
import { Header } from "@/app/_components/landing/header";
import { ImportantNoticePopup } from "@/app/_components/landing/important-notice-popup";


import SolutionCarousel from "./_components/landing/SolutionCarousel";
import HeroLanding from "./_components/landing/hero-landing";
import UseCase from "./_components/landing/use-case";
import AIVisionSection from "./_components/landing/vision-section";
import BrandMarquee from "./_components/landing/brand-marquee";
import GlobalImpact from "./_components/landing/global-impact";
import SectionTitle from "./_components/landing/SectionTitle";
import DeploymentProcess from "./_components/landing/deployment-process";
import Engines from "./_components/landing/engines";
import { GetStartedToday } from "./_components/landing/getstartedtoday"
import Pipeline from "./_components/landing/pipeline"
// import VisualDataShowcase from "./_components/landing/vision-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <ImportantNoticePopup />
      <Header />
      <HeroLanding/>
           <SectionTitle 
        mainTitle="AI Vision "
        subtitle="The Prisma AI Vision Platform transforms live video streams into real-time operational intelligence using advanced AI vision technology. "
      />
      <AIVisionSection/> 
      {/* <BrandMarquee />  */}
         <SectionTitle 
        mainTitle=" AI Vision Processing Pipeline"
        subtitle=" End-to-end visual intelligence pipeline from input to output"
      />
	  <Pipeline/>
           <SectionTitle 
        mainTitle="Engines"
        subtitle="The platform has the capability to understand human body languages, recognize objects, and read texts using machine learning "
      />
      <Engines/> 
           <SectionTitle 
        mainTitle="Use Cases"
        subtitle="Discover how Prisma AI delivers smarter security, surveillance, and automation through advanced AI-powered solutions."
      />
      <UseCase/>
      
           <SectionTitle 
        mainTitle="Global impact"
        subtitle="Choose the perfect plan for your business scale, from startup to enterprise."
      />
      <GlobalImpact/>
            <SectionTitle 
        mainTitle="How It Works"
        subtitle="Deploy AI Vision in Four Simple Steps"
      />
      <DeploymentProcess/>
      <SectionTitle 
        mainTitle="Solutions"
        subtitle="AI Vision Across Environments AI vision deployments designed to improve safety, monitoring, and operational intelligence across real-world environments."
      />
      <SolutionCarousel/>

      <GetStartedToday />
     
      <FooterSection />
      {/* <SolutionCarousel/> */}
      
      {/* <HeroSection /> */}
      {/* <VisualDataShowcase/> 
      <SolutionCarousel/>
      <PartnerStrip />
      <AboutSection />
      <StoryMosaicSection />
      <StatsSection />
      <CoreAlgorithmSection />
      <ProductsSection />
      <IndustriesSection />
      <ContactSection />
      <FooterSection />  */}
    </main>
  );
}
