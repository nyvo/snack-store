// CategoryPageContent.js
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { H1SemiBold, SmallMedium } from "@/shared/styles/CombinedFontStyles";
import { CollectionContext } from "@/app/context/CollectionProvider";
import CategoryCard from "@/app/pages/categorypage/CategoryCard";
import { SkeletonCollectionPage } from "@/shared/components/ui/SkeletonColletionPage";
import { ErrorProduct } from "@/shared/styles/ErrorStyles";

const CategoryPageContent = () => {
  const { collection, loading, error, products } =
    useContext(CollectionContext);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");

  useEffect(() => {
    if (collection) {
      setCollectionTitle(collection.title);
      setCollectionDescription(collection.description);
    }
  }, [collection]);

  if (loading) return <SkeletonCollectionPage />;
  if (error) return <ErrorProduct />;

  return (
    <>
      <TitleContainer>
        <H1SemiBold>{collectionTitle}</H1SemiBold>
        <SmallMedium color="var(--color-500)">
          {collectionDescription}
        </SmallMedium>
      </TitleContainer>
      <ProductContainer>
        {products?.map((product) => (
          <CategoryCard
            key={product.id} // unique key for each card
            product={product} // pass the whole product object
          />
        ))}
      </ProductContainer>
    </>
  );
};

export default CategoryPageContent;

/* ----------STYLES---------- */

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
