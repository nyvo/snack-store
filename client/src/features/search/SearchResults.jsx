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

const SearchResults = ({ products, hasNextPage, loadMore }) => {
  const handleLoadMore = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    loadMore();
  };

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
      {hasNextPage && (
        <button onClick={handleLoadMore} style={{ marginTop: "20px" }}>
          Load More
        </button>
      )}
    </>
  );
};

SearchResults.propTypes = {
  products: PropTypes.array.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default SearchResults;
