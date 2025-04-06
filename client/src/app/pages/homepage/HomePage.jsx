// HomePage.jsx
import { useContext } from "react";
import {
  CollectionProvider,
  CollectionContext,
} from "@/app/context/CollectionProvider";
import CollectionSection from "./CollectionSection";
import { ErrorProduct } from "@/shared/styles/ErrorStyles";
import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";

const HomePage = () => {
  const { collections, error } = useContext(CollectionContext);
  const collectionIds = collections.map((collection) => collection.id);

  return (
    <>
      <PageContainer>
        <ContentContainer>
          {error && <ErrorProduct />}
          {collectionIds.map((id) => (
            <CollectionProvider key={id} collectionId={id} error={error}>
              <CollectionSection />
            </CollectionProvider>
          ))}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default HomePage;
