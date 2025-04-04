import { useParams } from "react-router-dom";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";

import { ProductProvider } from "@/app/context/ProductProvider";
import ProductPageContent from "./ProductPageContent";
import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ProductProvider productId={productId}>
          <ProductPageContent />
        </ProductProvider>
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
};

export default ProductPage;
