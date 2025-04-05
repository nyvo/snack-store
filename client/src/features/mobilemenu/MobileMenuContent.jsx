import { BodyMedium } from "@/shared/styles/CombinedFontStyles";
import { CloseButton } from "@/shared/icons/CloseButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "@/app/context/AuthProvider";
import { useContext } from "react";

const MobileMenuContent = ({ toggleMenu }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const collections = [
    { id: 1, title: "Drinks", handle: "drinks" },
    { id: 2, title: "Snacks", handle: "snacks" },
    { id: 3, title: "Seasoning", handle: "seasoning" },
  ];

  return (
    <>
      <CloseOverlayContainer>
        <CloseButton
          onClick={toggleMenu}
          style={{ color: "var(--color-white)" }}
        />
      </CloseOverlayContainer>

      <MainLinksContainer>
        <LinksContainer>
          <BodyMedium color="var(--color-secondary-300)">
            Best sellers
          </BodyMedium>
          {collections.map((collection) => (
            <BodyMedium
              as={Link}
              to={`/${collection.handle}`}
              key={collection.id}
              onClick={toggleMenu}
              color="var(--color-white)"
            >
              {collection.title}
            </BodyMedium>
          ))}
        </LinksContainer>
        {isAuthenticated ? (
          <>
            <CategoryButton as={Link} to="/" onClick={toggleMenu}>
              <BodyMedium color="var(--color-white)">My account</BodyMedium>
            </CategoryButton>
          </>
        ) : (
          <>
            <CategoryButton as={Link} to="/sign-in" onClick={toggleMenu}>
              <BodyMedium color="var(--color-white)">Log in</BodyMedium>
            </CategoryButton>
          </>
        )}
        <CategoryButton as={Link} to="/" onClick={toggleMenu}>
          <BodyMedium color="var(--color-white)">Contact us</BodyMedium>
        </CategoryButton>
      </MainLinksContainer>
      <Divider />
      <SubscribeContainer>
        <SubscribeTitle>
          <BodyMedium color="var(--color-secondary-300)">Subscribe</BodyMedium>
          <BodyMedium color="var(--color-white)">
            Subscribe to our newsletter
          </BodyMedium>
        </SubscribeTitle>
      </SubscribeContainer>
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

const MainLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const CategoryButton = styled.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: #0e4f6b;
`;

const LinksContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const Divider = styled.div`
  display: flex;
  height: 1px;
  flex-direction: column;
  align-items: flex-start;
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
