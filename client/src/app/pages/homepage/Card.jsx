import styled from "styled-components";
import PropTypes from "prop-types";
import { BodySemiBold, SmallRegular } from "@/shared/styles/CombinedFontStyles";
import { StockStatus } from "@/shared/components/StockStatus";

const Card = ({ product }) => {
  const productId = product.id;
  const productPrice = product.variants[0].price;

  return (
    <CardContainer href={`/product/${productId}`}>
      <MainContent>
        <CardFlexOne>
          <BodySemiBold>{product.vendor}</BodySemiBold>
        </CardFlexOne>

        <TitleWrapper>
          <SmallRegular>{product.title}</SmallRegular>
        </TitleWrapper>

        <ImgContainer>
          <ProductImg
            src={product.image || "Error loading image"}
            alt={product.title}
          />
        </ImgContainer>

        <StockStatus product={product} />
      </MainContent>

      <PriceWrapper>
        <BodySemiBold>${productPrice}</BodySemiBold>
      </PriceWrapper>
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
  width: 100%;
  min-width: 225px;
  max-width: 225px;
  background-color: var(--color-050);
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardFlexOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  min-height: 2.5rem; /* Ensures space for 2 lines if needed */
  display: flex;
  align-items: flex-start;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100px;
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

const PriceWrapper = styled.div`
  margin-top: 0.5rem;
  text-align: right;
`;
