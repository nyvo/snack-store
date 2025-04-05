import { useContext } from "react";
import { CartContext } from "@/features/cart/CartProvider";
import styled from "styled-components";
import { CartButton } from "@/shared/icons/HeaderIcons";
import PropTypes from "prop-types";
import { LabelMedium } from "@/shared/styles/CombinedFontStyles";

const CartIconItemCount = ({ onClick, ariaExpanded, ariaLabel }) => {
  const { cartItems } = useContext(CartContext);

  // Calculate total items in cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartWrapper
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      <CartButton />
      {itemCount > 0 && (
        <ItemCount>
          <LabelMedium color="var(--color-black)">{itemCount}</LabelMedium>
        </ItemCount>
      )}
    </CartWrapper>
  );
};

CartIconItemCount.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaExpanded: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default CartIconItemCount;

/* ----------STYLES---------- */

const CartWrapper = styled.div`
  position: relative;
  cursor: pointer; /* Make it clickable */
`;

const ItemCount = styled.div`
  position: absolute;
  top: -7.5px;
  right: -7.5px;
  background-color: var(--color-secondary-500);
  border-radius: 50%;
  width: 18px; /* Fixed width for circle */
  height: 18px; /* Fixed height for circle */
  display: flex; /* Center the content */
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
`;
