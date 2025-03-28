import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { LabelRegular, SmallMedium } from "@/shared/styles/CombinedFontStyles";
import CartQuantity from "./CartQuantity";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <CloseButton onClick={() => removeFromCart(item.variantId)} />
      <ProductFrame>
        <ImgFrame>
          <ProductImg src={item.image} alt={item.title} />
        </ImgFrame>
        <ProductContent>
          <ProductContentHeader>
            <ProductContentTitle>
              <SmallMedium>{item.title}</SmallMedium>
            </ProductContentTitle>
            <CartQuantity item={item} />
          </ProductContentHeader>
          <ProductDescriptionContainer>
            <ProductContentDescription>
              <LabelRegular color="var(--color-500)">
                {item.description}
              </LabelRegular>
            </ProductContentDescription>
            <SmallMedium>${item.price}</SmallMedium>
          </ProductDescriptionContainer>
        </ProductContent>
      </ProductFrame>
    </ProductContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const ProductFrame = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--color-050, #f6f6f6);
  width: 100%;
`;

const ImgFrame = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  width: 100%;
`;

const ProductContentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const ProductContentTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

const ProductDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
`;

const ProductContentDescription = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  width: 100%;
`;

const CloseButton = styled(IoIosClose)`
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-950);
`;
