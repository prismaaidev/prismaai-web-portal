import Image from "next/image";

import { ProductPageShell } from "@/app/_components/products/product-page-shell";
import GryFasSection from "../_components/gryfas/hero";
import FeaturesSection from "../_components/gryfas/features";
import BenefitsSection from "../_components/gryfas/benefits";
import GryFASApplications from "../_components/gryfas/applications";

export default function ProductGryFASPage() {
  return (
    <ProductPageShell >
       <section className=" px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
      </section>
      <GryFasSection/>
      <FeaturesSection/>
      <BenefitsSection/>
      <GryFASApplications/>
    </ProductPageShell>
  );
}
