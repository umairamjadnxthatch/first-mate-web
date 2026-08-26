import PricingPlans from "@/components/packages/PricingPlans";
import WhatsIncluded from "@/components/packages/WhatsIncluded";
import FAQ from "@/components/shared/FAQ";
import FinalCTA from "@/components/shared/FinalCTA";

export default function PackagesPage() {
  return (
    <main>
      <PricingPlans />
      <WhatsIncluded />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
