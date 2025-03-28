import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BodyBold,
  BodySemiBold,
  LabelRegular,
} from "@/shared/styles/CombinedFontStyles";
import { StockStatus } from "@/shared/components/StockStatus";

const Card = ({ product }) => {
  const productId = product.id;
  const productPrice = product.variants[0].price;

  return (
    <>
      <CardContainer href={`/product/${productId}`}>
        <MainContent>
          <CardFlexOne>
            <LabelRegular color="var(--color-700)">
              {product.vendor}
            </LabelRegular>
          </CardFlexOne>

          <BodyBold>{product.title}</BodyBold>
          <ImgContainer>
            <ProductImg
              src={product.image || "Error loading image"}
              alt={product.title}
            />
          </ImgContainer>

          <StockStatus product={product} />
          <LabelRegular color="var(--color-500)">
            {product.description}
          </LabelRegular>
        </MainContent>

        <BodySemiBold>${productPrice}</BodySemiBold>
      </CardContainer>
    </>
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
  gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  min-width: 225px;
  max-width: 225px;
  min-height: 325px;
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
  gap: 0.75rem;
`;

const CardFlexOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 66.7%; /* 3:2 aspect ratio */
  position: relative;
`;

const ProductImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
