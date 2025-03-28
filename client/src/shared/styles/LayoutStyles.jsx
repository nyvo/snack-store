import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  padding: 1rem;
  gap: 1rem;
  flex: 1;
`;

export const ContentContainerBigGap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  padding: 1rem;
  gap: 2rem;
  flex: 1;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
