import { BodySemiBold, SmallRegular } from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";
import {
  ProductContainer,
  ProductContent,
  ProductImg,
  ImgContainer,
  VendorTitleContainer,
  PriceStockContainer,
} from "@/shared/styles/SearchStyles";
import { StockStatus } from "@/shared/components/StockStatus";

const SearchResults = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        const productUrl = `/product/${product.id}`;

        return (
          <ProductContainer href={productUrl} key={product.id}>
            <ImgContainer>
              <ProductImg
                src={product.image} // fallback for missing images
                alt={product.title}
              />
            </ImgContainer>
            <ProductContent>
              <VendorTitleContainer>
                <BodySemiBold>{product.vendor}</BodySemiBold>
                <SmallRegular color="var(--color-600)">
                  {product.title}
                </SmallRegular>
              </VendorTitleContainer>
              <PriceStockContainer>
                <BodySemiBold>${product.variants[0].price}</BodySemiBold>
                <StockStatus product={product} />
              </PriceStockContainer>
            </ProductContent>
          </ProductContainer>
        );
      })}
    </>
  );
};

SearchResults.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchResults;
