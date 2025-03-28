import styled from "styled-components";

const HeaderNoNav = () => {
  return (
    <HeaderContainer role="banner">
      <LogoContainer>
        <a href="/" aria-label="Home">
          <img src="/images/logo.svg" alt="Company Logo" />
        </a>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default HeaderNoNav;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--color-white);
  height: 50px;
  width: 100%;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
`;
