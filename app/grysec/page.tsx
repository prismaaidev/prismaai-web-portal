import Image from "next/image";

import { ProductPageShell } from "@/app/_components/products/product-page-shell";
import GrySecSection from "../_components/grysec/hero";
import FeaturesSection from "../_components/grysec/featureSection";
import BenefitsSectionSEC from "../_components/grysec/benefits";

import UseCasesSEC from "../_components/grysec/useCase";




export default function ProductGrySECPage() {
  return (
    <ProductPageShell>
      <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
    
      </section>
     <GrySecSection/>
     <FeaturesSection/>
     <BenefitsSectionSEC/>
     <UseCasesSEC/>
    </ProductPageShell>
  );
}
