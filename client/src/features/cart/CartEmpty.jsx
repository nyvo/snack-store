import styled from "styled-components";
import { CloseButton } from "@/shared/icons/CloseButton";
import {
  SmallRegular,
  H5SemiBold,
  SmallMedium,
} from "@/shared/styles/CombinedFontStyles";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const CartEmpty = ({ toggleMenu, closeMenu }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (collectionHandle) => {
    navigate(`/${collectionHandle}`);
    toggleMenu();
  };

  const collections = [
    { title: "Keyboards", handle: "keyboards" },
    { title: "Keycaps", handle: "keycaps" },
    { title: "Switches", handle: "switches" },
    { title: "Accessories", handle: "accessories" },
  ];

  return (
    <Container>
      <CloseOverlayContainer>
        <CloseButton onClick={closeMenu} />
      </CloseOverlayContainer>

      <TitleContainer>
        <H5SemiBold>Your cart is currently empty</H5SemiBold>
        <SmallRegular color="var(--color-800)">
          Browse our categories to discover and add items to your cart!
        </SmallRegular>
      </TitleContainer>

      <CategoryContainer>
        {collections.map((collection) => (
          <CategoryButton
            key={collection.id}
            href={`/${collection.handle}`}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(collection.handle);
            }}
          >
            <SmallMedium>{collection.title}</SmallMedium>
          </CategoryButton>
        ))}
      </CategoryContainer>
    </Container>
  );
};

CartEmpty.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default CartEmpty;

/* ----------STYLES---------- */

const Container = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const CloseOverlayContainer = styled.div`
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  flex-shrink: 0;
  align-self: stretch;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const CategoryContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

const CategoryButton = styled.button`
  display: flex;
  width: 200px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--color-950);
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    border: 1px solid var(--color-primary-500);
    background-color: var(--color-050);
  }
`;
