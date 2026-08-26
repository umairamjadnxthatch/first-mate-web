import LegalLayout from "@/components/legal/LegalLayout";
import {
  termsConditionsIntro,
  termsConditionsSections,
} from "@/components/legal/termsConditionsContent";
import FinalCTA from "@/components/shared/FinalCTA";

export default function TermsConditionsPage() {
  return (
    <main>
      <LegalLayout
        title="Terms & Conditions"
        updatedDate="May 20, 2024"
        intro={termsConditionsIntro}
        sections={termsConditionsSections}
      />
      <FinalCTA />
    </main>
  );
}
