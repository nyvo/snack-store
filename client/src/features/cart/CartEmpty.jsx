import styled from "styled-components";
import { CloseButton } from "@/shared/icons/CloseButton";
import { H5SemiBold } from "@/shared/styles/CombinedFontStyles";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const CartEmpty = ({ toggleMenu, closeMenu }) => {
  const navigate = useNavigate();

  // const handleCategoryClick = (collectionHandle) => {
  //   navigate(`/${collectionHandle}`);
  //   toggleMenu();
  // };

  // const collections = [
  //   { title: "Keyboards", handle: "keyboards" },
  //   { title: "Keycaps", handle: "keycaps" },
  //   { title: "Switches", handle: "switches" },
  //   { title: "Accessories", handle: "accessories" },
  // ];

  return (
    <>
      <CloseOverlayContainer>
        <CloseButton onClick={closeMenu} />
      </CloseOverlayContainer>

      <TitleContainer>
        <H5SemiBold>Your cart is currently empty</H5SemiBold>
      </TitleContainer>
    </>
  );
};

CartEmpty.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default CartEmpty;

/* ----------STYLES---------- */

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
