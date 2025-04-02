import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { LabelMedium } from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";
import styled from "styled-components";

const CartQuantity = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const onQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.variantId);
    } else {
      updateQuantity(item.variantId, newQuantity);
    }
  };

  const handleDecrease = (e) => {
    e.stopPropagation(); // Prevent bubbling to parent
    onQuantityChange(item.quantity - 1);
  };

  const handleIncrease = (e) => {
    e.stopPropagation(); // Prevent bubbling to parent
    onQuantityChange(item.quantity + 1);
  };

  return (
    <QuantityFrame>
      <QuantitySelector onClick={handleDecrease}>
        <img src="/images/minusselector.svg" alt="quantity minus" />
      </QuantitySelector>
      <LabelMedium>{item.quantity}</LabelMedium>
      <QuantitySelector onClick={handleIncrease}>
        <img src="/images/plusselector.svg" alt="quantity plus" />
      </QuantitySelector>
    </QuantityFrame>
  );
};

CartQuantity.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartQuantity;

const QuantityFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const QuantitySelector = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 8px 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--color-white, #fff);

  &:hover {
    cursor: pointer;
  }
`;
