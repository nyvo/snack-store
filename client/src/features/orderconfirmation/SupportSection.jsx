import { SupportContainer, SupportButton } from "./OrderConfirmStyles";
import { LabelRegular, LabelMedium } from "@/shared/styles/CombinedFontStyles";

export const SupportSection = () => (
  <SupportContainer>
    <LabelRegular>Need help with this order?</LabelRegular>
    <SupportButton>
      <LabelMedium>Support</LabelMedium>
    </SupportButton>
  </SupportContainer>
);
