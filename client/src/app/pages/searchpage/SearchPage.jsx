import SearchPageContent from "./SearchPageContent";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";

const SearchPage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <SearchPageContent />
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
};

export default SearchPage;
