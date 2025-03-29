import { useContext } from "react";
import { CartContext } from "./CartProvider";
import { BodySemiBold, SmallRegular } from "@/shared/styles/CombinedFontStyles";
import CartQuantity from "./CartQuantity";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import {
  PriceStockContainer,
  VendorTitleContainer,
} from "@/shared/styles/SearchStyles";
import { StockStatus } from "@/shared/components/StockStatus";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <CloseButton onClick={() => removeFromCart(item.variantId)} />
      <ProductFrame>
        <ImgContainer>
          <ProductImg src={item.image} alt={item.title} />
        </ImgContainer>
        <ProductContent>
          <VendorTitleContainer>
            <FlexSpaceBetween>
              <BodySemiBold>{item.vendor}</BodySemiBold>
              <CartQuantity item={item} />
            </FlexSpaceBetween>
            <SmallRegular color="var(--color-600)">{item.title}</SmallRegular>
          </VendorTitleContainer>
          <PriceStockContainer>
            <BodySemiBold>${item.price}</BodySemiBold>
            <StockStatus quantityAvailable={item.quantityAvailable} />
          </PriceStockContainer>
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

export const ImgContainer = styled.div`
  height: 60px;
  display: flex;
`;

export const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
`;

const CloseButton = styled(IoIosClose)`
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-950);
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 12px;
`;
