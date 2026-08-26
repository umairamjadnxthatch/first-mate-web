import LegalLayout from "@/components/legal/LegalLayout";
import {
  privacyPolicyIntro,
  privacyPolicySections,
} from "@/components/legal/privacyPolicyContent";
import FinalCTA from "@/components/shared/FinalCTA";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <LegalLayout
        title="Privacy Policy"
        updatedDate="May 20, 2024"
        intro={privacyPolicyIntro}
        sections={privacyPolicySections}
      />
      <FinalCTA />
    </main>
  );
}
