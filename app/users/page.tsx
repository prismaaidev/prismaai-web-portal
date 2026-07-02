
import AwardsSection from "../_components/awards/awards-cards";
import HeroSection from "../_components/common_component/common-hero";
import { ProductPageShell } from "../_components/products/product-page-shell";
import UsersSection from "../_components/users/users";


export default function UsersPage() {
  return (
    <ProductPageShell>
         <HeroSection
          label="Users"
          title="Lorem Ipsum is simply dummy text of the"
          backgroundImage="/img/about.png"
        />
    <UsersSection/>
  <AwardsSection/>
    </ProductPageShell>
  );
}
