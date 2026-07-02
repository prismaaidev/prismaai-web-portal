import { OfficeLocationsSection } from "@/app/_components/content/office-locations-section";
// import { ContactMessageForm } from "@/app/_components/landing/contact-message-form";
import { FooterSection } from "@/app/_components/landing/footer";
import { Header } from "@/app/_components/landing/header";
import OfficeLocations from "../_components/content/location-data";
import { ProductPageShell } from "../_components/products/product-page-shell";
import { ContactMessageForm } from "../_components/landing/contact-message-form";
import HeroSection from "../_components/common_component/common-hero";


const contactCards = [
  {
    title: "+1 (202) 555-0186",
    body: "Speak with our team about product discovery, workflow design, and enterprise deployment planning.",
    chip: "Phone Number",
    action: "Call Us Now",
  },
  {
    title: "contact@prism.ai",
    body: "Send project details, product requirements, or implementation questions and we will route them securely.",
    chip: "Email Address",
    action: "Write to Us",
  },
  {
    title: "Global Presence",
    body: "Connect with Prisma offices across Asia, Europe, the Middle East, and India for local coordination.",
    chip: "Regional Offices",
    action: "View Locations",
  },
];

export default function ContactPage() {
  return (
    <ProductPageShell>
         <HeroSection
          label="Contact"
          title="Lorem Ipsum is simply dummy text of the"
          backgroundImage="/img/about.png"
        />
        <section className="px-4 pb-20  sm:px-6 lg:px-8 lg:pb-28">
      </section>
    
     <OfficeLocations/>
           <ContactMessageForm
          />
            <section className=" px-4 pb-20 pt-8 ">
      </section>
    </ProductPageShell>
  );
}
