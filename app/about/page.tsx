import AboutHero from "@/components/about/AboutHero";
import AboutFeatures from "@/components/about/AboutFeatures";
import LakeNormanSection from "@/components/about/LakeNormanSection";
import WhyWeBuilt from "@/components/about/WhyWeBuilt";
import OurMission from "@/components/about/OurMission";
import FAQ from "@/components/shared/FAQ";
import FinalCTA from "@/components/shared/FinalCTA";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutFeatures />
            <LakeNormanSection />
            <WhyWeBuilt />
            <OurMission />
            <FAQ />
            <FinalCTA />
        </main>
    );
}

