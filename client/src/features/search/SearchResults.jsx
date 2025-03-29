import {
  BodySemiBold,
  SmallMedium,
  SmallRegular,
} from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";
import {
  ProductContainer,
  ProductContent,
  ProductDescriptionContainer,
  ProductFlexStretch,
  ProductImg,
  ImgContainer,
  ProductTitleContainer,
} from "@/shared/styles/SearchStyles";

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
              <ProductTitleContainer>
                <ProductFlexStretch>
                  <SmallRegular>{product.title}</SmallRegular>
                </ProductFlexStretch>
                <BodySemiBold>{product.vendor}</BodySemiBold>
              </ProductTitleContainer>
              <ProductDescriptionContainer>
                <SmallMedium>${product.variants[0].price}</SmallMedium>
              </ProductDescriptionContainer>
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
