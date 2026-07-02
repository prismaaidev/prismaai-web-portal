import Link from "next/link";

import { FooterSection } from "@/app/_components/landing/footer";
import { Header } from "@/app/_components/landing/header";
import TeamSection from "../_components/about/executive-team";
import SectionTitle from "../_components/landing/SectionTitle";
import HeroSection from "../_components/common_component/common-hero";
import Aboutus from "../_components/content/common-about";
import CompanyTimeline from "../_components/about/Time-line-Item";
import InfoCard from "../_components/common_component/InfoCard";

import AgentCard from "../_components/about/agent-card";

/* eslint-disable @next/next/no-img-element */


export default function AboutPage() {
  return (
    <div>


      <main className="">
        <Header />
        <div>
          <HeroSection
            label="ABOUT PRISMA AI"
            title="Intelligent Visual AI Systems"
            description="Choose the perfect plan for your business scale, from startup to enterprise"
            backgroundImage="/img/about.png"
          />
        </div>
        <div id="prisma-ai" className="px-4">
          <Aboutus />
        </div>
        <AgentCard />
         <div id="history">
          <CompanyTimeline />
        </div>
        <SectionTitle
          mainTitle="Team"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, "
        />
        <InfoCard />
        <div id="executive-team" className="scroll-mt-[280px]">
          <TeamSection />
        </div>
        <FooterSection />
      </main>

    </div>
  );
}
