import useMobile from "../hooks/useMobile";
import FooterMobile from "./FooterMobile";

const FooterWrapper = () => {
  const isMobile = useMobile();

  return (
    <>
      {/* {isMobile ? <FooterMobile /> : <FooterDesktop />} */}
      <FooterMobile />
    </>
  );
};

export default FooterWrapper;
