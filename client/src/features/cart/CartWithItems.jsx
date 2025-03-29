import { useContext, useMemo } from "react";
import { CartContext } from "./CartProvider";
import { CloseButton } from "@/shared/icons/CloseButton";
import CartItem from "./CartItem";
import {
  LabelRegular,
  H5Bold,
  SmallMedium,
  BodySemiBold,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles";
import { Spinner } from "@/shared/components/Spinner";
import PropTypes from "prop-types";
import styled from "styled-components";

const CartWithItems = ({ closeMenu }) => {
  const { cartItems, handleCheckout, isUpdating, isCheckingOut } =
    useContext(CartContext);

  const subtotal = useMemo(
    () =>
      cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2),
    [cartItems]
  );

  return (
    <>
      <CloseOverlayContainer>
        <H5Bold>Your Cart</H5Bold>
        <CloseButton onClick={closeMenu} aria-label="Close cart" />
      </CloseOverlayContainer>

      <ItemsContainer role="list">
        {cartItems.map((item) => (
          <CartItem key={item.variantId} item={item} />
        ))}
      </ItemsContainer>

      <CheckoutContainer>
        <SmallRegular color="var(--color-600)">
          Shipping, taxes or coupons will be calculated at checkout.
        </SmallRegular>
        <CheckoutPriceContainer>
          <BodySemiBold>Subtotal</BodySemiBold>
          <BodySemiBold>${subtotal}</BodySemiBold>
        </CheckoutPriceContainer>
        <CheckoutButton
          onClick={handleCheckout}
          disabled={isUpdating || isCheckingOut || cartItems.length === 0}
        >
          <SmallMedium color="var(--color-white)">
            {isCheckingOut ? <Spinner color="white" /> : "Checkout"}
          </SmallMedium>
        </CheckoutButton>
      </CheckoutContainer>
    </>
  );
};

CartWithItems.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default CartWithItems;

/* ----------STYLES---------- NEW */

const CloseOverlayContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const CheckoutPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const CheckoutButton = styled.button`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 999px;
  background: var(--color-primary-500, #4362ee);
`;
