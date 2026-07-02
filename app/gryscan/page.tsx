import Image from "next/image";

import { ProductPageShell } from "@/app/_components/products/product-page-shell";
import GryScanHero from "../_components/gryscan/hero";
import GryScanApplications from "../_components/gryscan/application";
import GryScanSection from "../_components/gryscan/solutions";
import AirportFeatures from "../_components/gryscan/features";

export default function ProductSCANPage() {
  return (
    <ProductPageShell>
        <section className=" px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
      </section>
    <GryScanHero/>
    <AirportFeatures/>
    <GryScanSection/>
<GryScanApplications/> 
    </ProductPageShell>
  );
}
