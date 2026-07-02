import Image from "next/image";

import { ProductPageShell } from "@/app/_components/products/product-page-shell";
import GrySenseHero from "../_components/grysense/hero";
import FeaturesSection from "../_components/grysense/features-section";
import InsightsSection from "../_components/grysense/insights-section";
import RoleCarousel from "../_components/grysense/role";

export default function ProductGrySECPage() {
  return (
    <ProductPageShell>
     <section className=" px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
      </section>
      <GrySenseHero/>
     <FeaturesSection/>
     <InsightsSection/>
     <RoleCarousel/>
    </ProductPageShell>
  );
}
