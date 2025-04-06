import { useParams } from "react-router-dom";
import { ProductProvider } from "@/app/context/ProductProvider";
import ProductPageContent from "./ProductPageContent";
import { ContentContainer } from "@/shared/styles/LayoutStyles";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <ContentContainer>
      <ProductProvider productId={productId}>
        <ProductPageContent />
      </ProductProvider>
    </ContentContainer>
  );
};

export default ProductPage;
