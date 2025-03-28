import { useContext } from "react";
import styled from "styled-components";
import Divider from "@/shared/components/Divider";
import { ProductContext } from "@/app/context/ProductProvider";
import { H1Bold, BodyRegular } from "@/shared/styles/CombinedFontStyles";
import AddToCart from "@/shared/components/AddToCart";
import SkeletonProductPage from "@/shared/components/ui/SkeletonProductPage";
import { ErrorProduct } from "@/shared/styles/ErrorStyles";
import { StockStatus } from "@/shared/components/StockStatus";
import { BodySemiBold } from "@/shared/styles/CombinedFontStyles";

const ProductPageContent = () => {
  const { product, loading, error } = useContext(ProductContext);

  if (loading) return <SkeletonProductPage />;
  if (error) return <ErrorProduct />;

  const isOutOfStock = !product.variants?.[0]?.quantityAvailable;

  return (
    <>
      <ImgContainer>
        <img src={product.image} alt={product.title} />
      </ImgContainer>
      <ProductDetails>
        <H1Bold>{product.title}</H1Bold>
        <BodyRegular color="var(--color-500)">
          {product.description}
        </BodyRegular>
      </ProductDetails>
      <Divider />
      <PurchaseSection>
        {isOutOfStock ? (
          <ButtonContainer>
            <BodySemiBold color="var(--color-white)">Remind me</BodySemiBold>
          </ButtonContainer>
        ) : (
          <AddToCart product={product} />
        )}
        <StockStatus product={product} />
      </PurchaseSection>
    </>
  );
};

export default ProductPageContent;

/* ----------STYLES---------- */

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const PurchaseSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const ButtonContainer = styled.button`
  display: flex;
  padding: 8px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--color-900);
  pointer-events: none;
`;
