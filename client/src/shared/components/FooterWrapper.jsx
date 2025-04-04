import useMobile from "../hooks/useMobile";

const FooterWrapper = () => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
};

export default FooterWrapper;
