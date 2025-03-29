import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BodySemiBold,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles.jsx";
import { StockStatus } from "@/shared/components/StockStatus";
const CategoryCard = ({ product }) => {
  const productPrice = product.variants[0].price;

  return (
    <>
      <CardContainer href={`/product/${product.id}`}>
        <ImgContainer>
          <ProductImg src={product.image} alt={product.title} />
        </ImgContainer>
        <ProductContent>
          <VendorTitleContainer>
            <BodySemiBold>{product.vendor}</BodySemiBold>
            <SmallRegular color="var(--color-600)">
              {product.title}
            </SmallRegular>
          </VendorTitleContainer>
          <PriceStockContainer>
            <BodySemiBold>${productPrice}</BodySemiBold>
            <StockStatus product={product} />
          </PriceStockContainer>
        </ProductContent>
      </CardContainer>
    </>
  );
};

CategoryCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CategoryCard;

/* ----------STYLES---------- */

const CardContainer = styled.a`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-050);
  }
`;

const ImgContainer = styled.div`
  height: 70px;
  display: flex;
`;

const ProductImg = styled.img`
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

const VendorTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const PriceStockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
