import AIChatShowcase from "@/components/home/AIChatShowcase";
import BoatSelection from "@/components/home/BoatSelection";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrustFeatures from "@/components/home/TrustFeatures";
import HowItWorks from "@/components/home/HowItWorks";
import HeroSection from "@/components/home/HeroSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustFeatures />
      <HowItWorks />
      <VideoShowcase />
      <AIChatShowcase />
      <BoatSelection />
      <Testimonials />
      <WhyChooseUs />
      <PricingSection />
      <FinalCTA />
    </main>
  );
}
