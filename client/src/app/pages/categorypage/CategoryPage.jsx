import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CollectionProvider } from "@/app/context/CollectionProvider";
import CategoryPageContent from "./CategoryPageContent";
import { CollectionContext } from "@/app/context/CollectionProvider";
import { SkeletonCollectionPage } from "@/shared/components/ui/SkeletonColletionPage";
import { ContentContainer } from "@/shared/styles/LayoutStyles";

const CategoryPage = () => {
  const { collections } = useContext(CollectionContext); // Get collections from context
  const { collectionType } = useParams(); // Get the collection type from the URL

  // Find the collection with a matching handle
  const matchedCollection = collections?.find(
    (collection) => collection.handle === collectionType
  );

  const collectionId = matchedCollection?.id; // Extract numeric ID if matched

  return (
    <ContentContainer>
      {collectionId ? (
        <CollectionProvider collectionId={collectionId}>
          <CategoryPageContent />
        </CollectionProvider>
      ) : (
        <SkeletonCollectionPage />
      )}
    </ContentContainer>
  );
};

export default CategoryPage;
