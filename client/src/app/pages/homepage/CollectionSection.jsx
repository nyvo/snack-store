import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CollectionContext } from "@/app/context/CollectionProvider";
import {
  Container,
  ListContainer,
  CollectionTitle,
} from "@/shared/styles/CollectionsStyle";
import Card from "@/app/pages/homepage/Card";
import { SmallMedium } from "@/shared/styles/CombinedFontStyles";
import styled from "styled-components";
import SkeletonCollectionSection from "@/shared/components/ui/SkeletonCollectionSection";

const CollectionSection = () => {
  const { collection, loading, products } = useContext(CollectionContext);
  const navigate = useNavigate();
  if (loading) return <SkeletonCollectionSection />;

  if (!collection || !products) return null;

  return (
    <Container>
      <CollectionTitle>{collection?.title}</CollectionTitle>

      <AuthButton onClick={() => navigate(`/${collection?.handle}`)}>
        <SmallMedium color="var(--color-white)">
          Shop all {collection?.title}
        </SmallMedium>
      </AuthButton>

      <ListContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CollectionSection;

const AuthButton = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 999px;
  background: var(--color-primary-500, #4362ee);
  transition: all 0.2s ease; /* Smooth transitions */

  &:hover {
    box-shadow: 0 0 6px rgba(67, 98, 238, 0.6); /* Blue glow matching #4362EE */
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98); /* Slight shrink for press */
    box-shadow: 0 0 4px rgba(67, 98, 238, 0.4); /* Dimmer glow when pressed */
    background: #2f49c2; /* Darker blue */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(67, 98, 238, 0.6); /* Same glow as hover */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none; /* No glow when disabled */
    transform: none;
  }
`;
