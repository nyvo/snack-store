import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";
import HeaderNoNav from "@/shared/components/HeaderNoNav";
import ForgotPasswordContent from "./ForgotPassword";

const ForgotPasswordContainer = () => {
  return (
    <PageContainer>
      <HeaderNoNav />
      <ContentContainer>
        <ForgotPasswordContent />
      </ContentContainer>
    </PageContainer>
  );
};

export default ForgotPasswordContainer;
