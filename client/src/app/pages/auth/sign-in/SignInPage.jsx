import SignInContent from "./SignInContent";
import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";
import HeaderNoNav from "@/shared/components/HeaderNoNav";

const SignInPage = () => {
  return (
    <>
      <PageContainer>
        <HeaderNoNav />
        <ContentContainer>
          <SignInContent />
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default SignInPage;
