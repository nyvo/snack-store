import SearchPageContent from "./SearchPageContent";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";
import NewsLetter from "@/shared/components/NewsLetter";

const SearchPage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <SearchPageContent />
      </ContentContainer>
      <NewsLetter />
      <Footer />
    </PageContainer>
  );
};

export default SearchPage;
