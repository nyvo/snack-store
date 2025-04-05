import styled from "styled-components";
import {
  BodySemiBold,
  LabelMedium,
  LabelRegular,
  SmallMedium,
} from "../styles/CombinedFontStyles";
import { Link } from "react-router-dom";

const FooterMobile = () => {
  return (
    <>
      <FooterContainer>
        <FlexRow>
          <LinksContainer>
            <BodySemiBold color="var(--color-primary-500)">About</BodySemiBold>
            <LinksColumn>
              <SmallMedium color="var(--color-white)">Oslo, Norway</SmallMedium>
              <SmallMedium to="/" color="var(--color-white)">
                +47 95133850
              </SmallMedium>
              <SmallMedium color="var(--color-white)">
                store@mail.com
              </SmallMedium>
            </LinksColumn>
          </LinksContainer>

          <LinksContainer>
            <BodySemiBold color="var(--color-primary-500)">
              Support
            </BodySemiBold>
            <LinksColumn>
              <SmallMedium as={Link} to="/" color="var(--color-white)">
                Contact us
              </SmallMedium>
              <SmallMedium as={Link} to="/" color="var(--color-white)">
                FAQ
              </SmallMedium>
              <SmallMedium as={Link} to="/" color="var(--color-white)">
                Privacy Policy
              </SmallMedium>
              <SmallMedium as={Link} to="/" color="var(--color-white)">
                Shipping & Returns
              </SmallMedium>
            </LinksColumn>
          </LinksContainer>
        </FlexRow>
        <Divider />
        <SubscribeContainer>
          <SubscribeTitle>
            <BodySemiBold color="var(--color-primary-500)">
              Subscribe
            </BodySemiBold>
            <SmallMedium color="var(--color-white)">
              Get 10% off your first order
            </SmallMedium>
            <SubscribeForm>
              <SubscribeInput type="email" placeholder="Enter email address" />
              <SubscribeButton>
                <SmallMedium color="var(--color-secondary-900)">
                  Sign up
                </SmallMedium>
              </SubscribeButton>
            </SubscribeForm>
          </SubscribeTitle>
        </SubscribeContainer>
        <Divider />
        <PaymentsContainer>
          <BodySemiBold color="var(--color-primary-500)">
            We accept
          </BodySemiBold>
          <PaymentIcons>
            <LabelMedium color="var(--color-white)">
              payment icons goes here
            </LabelMedium>
          </PaymentIcons>
        </PaymentsContainer>
        <SocialsContainer>
          <SocialIcons>
            <LabelMedium color="var(--color-white)">
              social icons goes here
            </LabelMedium>
          </SocialIcons>
          <LabelRegular style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            © 2025 [Company Name]
          </LabelRegular>
        </SocialsContainer>
      </FooterContainer>
    </>
  );
};

export default FooterMobile;

/* ----------STYLES---------- */

const FooterContainer = styled.footer`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: var(--color-primary-900);
  max-width: 1200px;
  margin: 0 auto;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const Divider = styled.div`
  display: flex;
  height: 1px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  background: #454545;
`;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  max-width: 350px;
`;

const SubscribeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const SubscribeForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const SubscribeInput = styled.input`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;

  border: 1px solid var(--color-800, #454545);
  background: var(--color-050, #f6f6f6);
`;

const SubscribeButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  height: 42px;
  border: 1px solid var(--color-800, #454545);
  background: var(--color-accent-500);
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  margin-top: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;
