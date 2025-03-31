import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CollectionContext } from "@/app/context/CollectionProvider";
import {
  Container,
  ListContainer,
  TitleContainer,
  SeeAllButton,
  ArrowRightIcon,
  TitleWrapper,
} from "@/shared/styles/CollectionsStyle";
import Card from "@/app/pages/homepage/Card";
import SkeletonCollectionSection from "@/shared/components/ui/SkeletonCollectionSection";
import { BodyMedium, H2SemiBold } from "@/shared/styles/CombinedFontStyles";

const CollectionSection = () => {
  const { collection, loading, products } = useContext(CollectionContext);
  const navigate = useNavigate();
  if (loading) return <SkeletonCollectionSection />;

  if (!collection || !products) return null;

  return (
    <Container>
      <TitleContainer>
        <TitleWrapper>
          <H2SemiBold>{collection?.title}</H2SemiBold>
        </TitleWrapper>

        <SeeAllButton
          href={`/${collection?.handle}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            navigate(`/${collection?.handle}`); // Use React Router navigation
          }}
        >
          <BodyMedium color="var(--color-primary-500)">See All</BodyMedium>
          <ArrowRightIcon />
        </SeeAllButton>
      </TitleContainer>
      <ListContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CollectionSection;
