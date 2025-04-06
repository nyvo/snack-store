import styled from "styled-components";
import { FullWidthContainer } from "../styles/LayoutStyles";
import Header from "./Header";
import FooterWrapper from "./FooterWrapper";
import { Outlet } from "react-router-dom";
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1 0 auto;
`;

export const Layout = () => (
  <LayoutWrapper>
    <FullWidthContainer bgColor="var(--color-white)">
      <Header />
    </FullWidthContainer>
    <MainContent>
      <Outlet />
    </MainContent>
    <FullWidthContainer bgColor="var(--color-primary-900)">
      <FooterWrapper />
    </FullWidthContainer>
  </LayoutWrapper>
);
