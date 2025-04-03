import styled from "styled-components";
import { ContentContainer } from "../styles/LayoutStyles";
import { BodySemiBold, SmallMedium } from "../styles/CombinedFontStyles";

const FooterNew = () => {
  return (
    <>
      <ContentContainer style={{ backgroundColor: "var(--color-950)" }}>
        <SpaceBetweenRow>
          <LinksContainer>
            <BodySemiBold color="var(--color-white)">About</BodySemiBold>
            <LinksColumn>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
            </LinksColumn>
          </LinksContainer>

          <LinksContainer>
            <BodySemiBold color="var(--color-white)">Support</BodySemiBold>
            <LinksColumn>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
              <SmallMedium style={{ color: "#AABACF" }}>
                Oslo, Norway
              </SmallMedium>
            </LinksColumn>
          </LinksContainer>
        </SpaceBetweenRow>
        <Divider />
      </ContentContainer>
    </>
  );
};

export default FooterNew;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const SpaceBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
