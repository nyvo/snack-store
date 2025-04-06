// LayoutStyles.js
import styled from "styled-components";

export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: flex-start;
  min-width: 375px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  max-width: 1200px;
  padding: 1rem;
  gap: 2rem;
  flex: 1;
  margin: 0 auto; // Center the content
  width: 100%;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContentContainerBigGap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  padding: 1rem;
  gap: 2rem;
  flex: 1;
`;

export const FormContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
