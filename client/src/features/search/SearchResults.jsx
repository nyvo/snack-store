import { LabelRegular, SmallMedium } from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";
import {
  ProductContainer,
  ProductContent,
  ProductDescriptionContainer,
  ProductFlexStretch,
  ProductImg,
  ProductTitleContainer,
} from "@/shared/styles/SearchStyles";

const SearchResults = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        const productUrl = `/product/${product.id}`;

        return (
          <ProductContainer href={productUrl} key={product.id}>
            <ProductImg
              src={product.image} // fallback for missing images
              alt={product.title}
            />
            <ProductContent>
              <ProductTitleContainer>
                <ProductFlexStretch>
                  <SmallMedium>{product.title}</SmallMedium>
                </ProductFlexStretch>
                <LabelRegular color="var(--color-800)">
                  {product.vendor}
                </LabelRegular>
              </ProductTitleContainer>
              <ProductDescriptionContainer>
                <ProductFlexStretch>
                  <LabelRegular color="var(--color-500)">
                    {product.description}
                  </LabelRegular>
                </ProductFlexStretch>
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
