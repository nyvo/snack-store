import { PageContainer, ContentContainer } from "@/shared/styles/LayoutStyles";
import HeaderNoNav from "@/shared/components/HeaderNoNav";
import ResetPassword from "./ResetPassword";

const ResetPasswordContainer = () => {
  return (
    <PageContainer>
      <HeaderNoNav />
      <ContentContainer>
        <ResetPassword />
      </ContentContainer>
    </PageContainer>
  );
};

export default ResetPasswordContainer;
