import { useContext } from "react";
import { CollectionContext } from "@/app/context/CollectionProvider";
import {
  Container,
  ListContainer,
  CollectionTitle,
  CollectionLink,
} from "@/shared/styles/CollectionsStyle";
import Card from "@/app/pages/homepage/Card";
import { SmallMedium } from "@/shared/styles/CombinedFontStyles";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import SkeletonCollectionSection from "@/shared/components/ui/SkeletonCollectionSection";

const CollectionSection = () => {
  const { collection, loading, products } = useContext(CollectionContext);

  if (loading) return <SkeletonCollectionSection />;

  if (!collection || !products) return null;

  return (
    <Container>
      <CollectionTitle>{collection?.title}</CollectionTitle>
      <CollectionLink href={collection?.handle}>
        <SmallMedium color="var(--color-black)">
          Shop all {collection?.title}
        </SmallMedium>
        <StyledArrow />
      </CollectionLink>
      <ListContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CollectionSection;

const StyledArrow = styled(MdKeyboardArrowRight)`
  font-size: 1rem;
  color: var(--color-black);
`;
