import { TitleContainer } from "./OrderConfirmStyles";
import { H2SemiBold, SmallRegular } from "@/shared/styles/CombinedFontStyles";

export const OrderTitle = ({ user }) => (
  <TitleContainer>
    <H2SemiBold>Your order is confirmed</H2SemiBold>
    <SmallRegular color="var(--color-600)">
      You will receive an order confirmation to your email {user?.email}
    </SmallRegular>
  </TitleContainer>
);
