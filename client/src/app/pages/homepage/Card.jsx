import styled from "styled-components";
import PropTypes from "prop-types";
import { BodySemiBold, SmallRegular } from "@/shared/styles/CombinedFontStyles";
import { StockStatus } from "@/shared/components/StockStatus";

const Card = ({ product }) => {
  const productId = product.id;
  const productPrice = product.variants[0].price;

  return (
    <CardContainer href={`/product/${productId}`}>
      <ImgContainer>
        <ProductImg
          src={product.image || "Error loading image"}
          alt={product.title}
        />
      </ImgContainer>
      <ProductInfoContainer>
        <VendorTitleContainer>
          <BodySemiBold>{product.vendor}</BodySemiBold>
          <SmallRegular color="var(--color-600)">{product.title}</SmallRegular>
        </VendorTitleContainer>
        <PriceStockContainer>
          <BodySemiBold>${productPrice}</BodySemiBold>
          <StockStatus product={product} />
        </PriceStockContainer>
      </ProductInfoContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;

/* ----------STYLES---------- */

const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  min-width: 225px;
  max-width: 225px;
  min-height: 320px;
  background-color: var(--color-050);
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  justify-content: space-between;
  flex: 1;
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
