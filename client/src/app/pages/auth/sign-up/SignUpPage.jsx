import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";
import SignUpContent from "./SignUpContent";
import HeaderNoNav from "@/shared/components/HeaderNoNav";
const SignUpPage = () => {
  return (
    <>
      <PageContainer>
        <HeaderNoNav />
        <ContentContainer>
          <SignUpContent />
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default SignUpPage;
