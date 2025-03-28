import styled from "styled-components";
import PropTypes from "prop-types";
import {
  LabelRegular,
  BodySemiBold,
} from "@/shared/styles/CombinedFontStyles.jsx";
import { StockStatus } from "@/shared/components/StockStatus";
const CategoryCard = ({ product }) => {
  const productPrice = product.variants[0].price;

  return (
    <>
      <CardContainer href={`/product/${product.id}`}>
        <FlexOne>
          <ProductImg src={product.image} alt={product.title} />
          <PriceContainer>
            <BodySemiBold>${productPrice}</BodySemiBold>
            <StockStatus product={product} />
          </PriceContainer>
        </FlexOne>
        <CardContent>
          <LabelRegular>{product.vendor}</LabelRegular>
          <BodySemiBold>{product.title}</BodySemiBold>
          <LabelRegular>{product.description}</LabelRegular>
        </CardContent>
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
  width: 100%;
  padding: 1rem 0;
  align-items: flex-start;
  text-decoration: none;
  gap: 0.5rem;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-050);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
`;

const ProductImg = styled.img`
  width: 175px;
  height: auto;
  min-height: 120px;
  max-height: 120px;
  object-fit: cover;
  border-radius: 15px;
`;

const FlexOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
