import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "@/features/cart/CartProvider";
import { useButtonState } from "@/shared/hooks/useButtonState";
import styled from "styled-components";
import { Spinner } from "./Spinner";
import { FaCheck } from "react-icons/fa";

export const AddToCart = ({ product }) => {
  const { addToCart, createCartItem } = useContext(CartContext);
  const {
    buttonState,
    isProcessing,
    isAdded,
    startProcessing,
    completeProcessing,
  } = useButtonState();

  const isOutOfStock = !product.variants[0].availableForSale;

  const getButtonText = () => {
    if (isOutOfStock) return "Out of Stock";
    if (isAdded) return buttonState;
    if (isProcessing) return buttonState;
    return "Add to Cart";
  };

  const handleAddToCart = () => {
    if (isProcessing || !product) return;

    try {
      startProcessing();
      const cartItem = createCartItem(product);

      setTimeout(() => {
        try {
          addToCart(cartItem);
        } catch (error) {
          console.error("Failed to add item to cart:", error);
        } finally {
          completeProcessing();
        }
      }, 1000);
    } catch (error) {
      console.error("Failed to prepare cart item:", error);
      completeProcessing();
    }
  };

  return (
    <ButtonContainer
      onClick={handleAddToCart}
      disabled={isProcessing || isOutOfStock}
      isAdded={isAdded}
      isProcessing={isProcessing}
      isOutOfStock={isOutOfStock}
    >
      {isAdded && <CheckmarkIcon size={14} />}
      {!isAdded && isProcessing && <Spinner className="mr-4" />}
      <BodySemiBold color="var(--color-white)">{getButtonText()}</BodySemiBold>
    </ButtonContainer>
  );
};

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.number.isRequired,
        availableForSale: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default AddToCart;

// ----------STYLES---------- //

const ButtonContainer = styled.button`
  display: flex;
  padding: 8px 0px;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => {
    if (props.isOutOfStock) return "var(--color-950)";
    if (props.isAdded) return "black";
    return "var(--color-primary-500)";
  }};
  color: var(--color-white);
  font-weight: bold;
  cursor: ${(props) => {
    if (props.isOutOfStock) return "not-allowed";
    if (props.isProcessing) return "not-allowed";
    return "pointer";
  }};
  pointer-events: ${(props) =>
    props.isProcessing || props.isOutOfStock ? "none" : "auto"};
  opacity: ${(props) => (props.isOutOfStock ? 0.7 : 1)};
`;

const CheckmarkIcon = styled(FaCheck)`
  margin-right: 1rem;
  color: var(--color-success-200);
`;

const BodySemiBold = styled.span`
  font-weight: 600;
  color: ${(props) => props.color || "inherit"};
`;
