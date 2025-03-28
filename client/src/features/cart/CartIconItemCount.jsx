import { useContext } from "react";
import { CartContext } from "@/features/cart/CartProvider";
import styled from "styled-components";
import { CartButton } from "@/shared/icons/HeaderIcons";
import PropTypes from "prop-types";


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
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
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
  top: -7px;
  right: -7px;
  background-color: var(--color-primary-500);
  color: white;
  border-radius: 50%;
  padding: 1px 6px;
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-medium);
`;
