

import AlliancePartners from "../_components/alliancePartners/alliancePartners";
import HeroSection from "../_components/common_component/common-hero";
import { ProductPageShell } from "../_components/products/product-page-shell";





export default function PartnerPage() {
  return (
    <ProductPageShell>
         <HeroSection
          label="Partners"
          title="Lorem Ipsum is simply dummy text of the"
          backgroundImage="/img/about.png"
        />
    <AlliancePartners/>
        <section className="px-4 pb-20  sm:px-6 lg:px-8 lg:pb-28">
      </section>
    </ProductPageShell>
  );
}
