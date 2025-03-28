import { useContext } from "react";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import NewsLetter from "@/shared/components/NewsLetter";
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
    <PageContainer>
      <Header />
      {error && <ErrorProduct />}
      <ContentContainer>
        {collectionIds.map((id) => (
          <CollectionProvider key={id} collectionId={id} error={error}>
            <CollectionSection />
          </CollectionProvider>
        ))}
      </ContentContainer>
      <NewsLetter />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
