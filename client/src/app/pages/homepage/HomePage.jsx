// HomePage.jsx
import { useContext } from "react";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import {
  CollectionProvider,
  CollectionContext,
} from "@/app/context/CollectionProvider";
import CollectionSection from "./CollectionSection";
import { ErrorProduct } from "@/shared/styles/ErrorStyles";
import {
  FullWidthContainer,
  PageContainer,
  ContentContainer,
} from "@/shared/styles/LayoutStyles";
import FooterMobile from "@/shared/components/FooterMobile";

const HomePage = () => {
  const { collections, error } = useContext(CollectionContext);
  const collectionIds = collections.map((collection) => collection.id);

  return (
    <>
      <FullWidthContainer>
        <Header />
      </FullWidthContainer>
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
      <FullWidthContainer>
        <FooterMobile />
      </FullWidthContainer>
    </>
  );
};

export default HomePage;
