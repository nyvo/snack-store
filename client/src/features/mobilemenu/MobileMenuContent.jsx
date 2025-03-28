import { BodyMedium, H5Bold } from "@/shared/styles/CombinedFontStyles";
import { CloseButton } from "@/shared/icons/CloseButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";

const MobileMenuContent = ({ toggleMenu }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const collections = [
    { id: 1, title: "Keyboards", handle: "keyboards" },
    { id: 2, title: "Keycaps", handle: "keycaps" },
    { id: 3, title: "Switches", handle: "switches" },
    { id: 4, title: "Accessories", handle: "accessories" },
  ];

  return (
    <>
      <CloseOverlayContainer>
        <CloseButton onClick={toggleMenu} />
      </CloseOverlayContainer>

      <SectionContainer>
        <H5Bold color="var(--color-primary-500)">Account</H5Bold>
        <SectionCard>
          {isAuthenticated ? (
            <>
              <CategoryItemContainer as={Link} to="/" onClick={toggleMenu}>
                <BodyMedium color="var(--color-950)">Home</BodyMedium>
              </CategoryItemContainer>
              <CategoryItemContainer
                as={Link}
                to="/orders"
                onClick={toggleMenu}
              >
                <BodyMedium color="var(--color-950)">Orders</BodyMedium>
              </CategoryItemContainer>
              <CategoryItemContainer
                as={Link}
                to="/logout"
                onClick={toggleMenu}
              >
                <BodyMedium color="var(--color-950)">Sign Out</BodyMedium>
              </CategoryItemContainer>
            </>
          ) : (
            <>
              <CategoryItemContainer
                as={Link}
                to="/sign-in"
                onClick={toggleMenu}
              >
                <BodyMedium color="var(--color-950)">Sign In</BodyMedium>
              </CategoryItemContainer>
              <CategoryItemContainer
                as={Link}
                to="/sign-up"
                onClick={toggleMenu}
              >
                <BodyMedium color="var(--color-950)">Create Account</BodyMedium>
              </CategoryItemContainer>
            </>
          )}
        </SectionCard>
      </SectionContainer>

      <SectionContainer>
        <H5Bold color="var(--color-primary-500)">Shop</H5Bold>
        <SectionCard>
          {collections.map((collection) => (
            <CategoryItemContainer
              as={Link}
              to={`/${collection.handle}`}
              key={collection.id}
              onClick={toggleMenu}
            >
              <BodyMedium color="var(--color-950)">
                {collection.title}
              </BodyMedium>
            </CategoryItemContainer>
          ))}
        </SectionCard>
      </SectionContainer>

      <SectionContainer>
        <H5Bold color="var(--color-primary-500)">Support</H5Bold>
        <SectionCard>
          <CategoryItemContainer as={Link} to="/contact" onClick={toggleMenu}>
            <BodyMedium color="var(--color-950)">Contact</BodyMedium>
          </CategoryItemContainer>
          <CategoryItemContainer as={Link} to="/faq" onClick={toggleMenu}>
            <BodyMedium color="var(--color-950)">FAQ</BodyMedium>
          </CategoryItemContainer>
        </SectionCard>
      </SectionContainer>
    </>
  );
};

MobileMenuContent.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenuContent;

/* ----------STYLES---------- */
const CloseOverlayContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--color-050, #262626);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0);
`;

const CategoryItemContainer = styled.div`
  display: flex;
  padding: 14px;
`;
