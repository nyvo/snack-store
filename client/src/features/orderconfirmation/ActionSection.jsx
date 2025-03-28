import {
  OrderActionContainer,
  FlexColumnSmallGap,
  ButtonsContainer,
  SignUpButton,
  LogInButton,
} from "./OrderConfirmStyles";
import {
  BodySemiBold,
  SmallMedium,
  LabelRegular,
} from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";

export const ActionSection = ({ isAuthenticated, navigate }) => (
  <OrderActionContainer>
    {isAuthenticated ? (
      <>
        <FlexColumnSmallGap>
          <BodySemiBold>Thank you for your order 🎉</BodySemiBold>
          <LabelRegular color="var(--color-500)">
            Order details can be found on your order page.
          </LabelRegular>
        </FlexColumnSmallGap>
        <ButtonsContainer>
          <SignUpButton onClick={() => navigate("/")}>
            <SmallMedium color="var(--color-white)">
              Continue Shopping
            </SmallMedium>
          </SignUpButton>
          <LogInButton onClick={() => navigate("/orders")}>
            <SmallMedium>My Orders</SmallMedium>
          </LogInButton>
        </ButtonsContainer>
      </>
    ) : (
      <>
        <FlexColumnSmallGap>
          <BodySemiBold>Thank you for your order 🎉</BodySemiBold>
          <LabelRegular color="var(--color-600)">
            Order details will be sent to your email.
          </LabelRegular>
        </FlexColumnSmallGap>
        <FlexColumnSmallGap>
          <BodySemiBold>Not a member yet?</BodySemiBold>
          <LabelRegular color="var(--color-600)">
            Sign up now for detailed order tracking and access to exclusive
            offers or discounts.
          </LabelRegular>
        </FlexColumnSmallGap>
        <ButtonsContainer>
          <SignUpButton onClick={() => navigate("/sign-up")}>
            <SmallMedium color="var(--color-white)">Sign up</SmallMedium>
          </SignUpButton>
          <LogInButton onClick={() => navigate("/sign-in")}>
            <SmallMedium>Log in</SmallMedium>
          </LogInButton>
        </ButtonsContainer>
      </>
    )}
  </OrderActionContainer>
);

ActionSection.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
};
