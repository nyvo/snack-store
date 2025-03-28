import styled from "styled-components";
import { LabelMedium } from "../styles/CombinedFontStyles";
import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Consolidate links into a single object for better organization
const footerData = {
  nav: [
    { name: "About us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Support", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Firmware", href: "#" },
  ],
  social: [
    { icon: <FaInstagram size={24} color="var(--color-white)" />, href: "#" },
    { icon: <FaXTwitter size={24} color="var(--color-white)" />, href: "#" },
    { icon: <FaYoutube size={24} color="var(--color-white)" />, href: "#" },
    { icon: <FaDiscord size={24} color="var(--color-white)" />, href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const Footer = () => {
  return (
    <FooterContainer>
      <LogoTextContainer>
        <LogoContainer>
          <img src="/images/logofooter.svg" alt="Company Logo" />
        </LogoContainer>
        <LabelMedium color="var(--color-white)">Oslo, Norway</LabelMedium>
        <LabelMedium color="var(--color-white)">
          contact@companymail.com
        </LabelMedium>
      </LogoTextContainer>

      <FlexRow>
        <NavList>
          {footerData.nav.map((link) => (
            <ListItem key={`nav-${link.name}`}>
              <a href={link.href}>{link.name}</a>
            </ListItem>
          ))}
        </NavList>

        <SocialList>
          <ListItem>
            <span>Follow us</span>
          </ListItem>
          <SocialIcons>
            {footerData.social.map((social, index) => (
              <ListItem key={`social-${index}`}>
                <a href={social.href}>{social.icon}</a>
              </ListItem>
            ))}
          </SocialIcons>
        </SocialList>
      </FlexRow>

      <LabelContainer>
        <FooterTextLeft>
          © {new Date().getFullYear()} CompanyName
        </FooterTextLeft>
        {footerData.legal.map((link) => (
          <ListItemFooter key={`legal-${link.name}`}>
            <a href={link.href}>{link.name}</a>
          </ListItemFooter>
        ))}
      </LabelContainer>
    </FooterContainer>
  );
};

export default Footer;

/* ----------STYLES---------- */

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 1rem;
  background-color: var(--color-black);
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 90px;
`;

const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  align-items: center;

  a {
    font-weight: var(--font-weight-medium);
  }
`;

const FooterTextLeft = styled.div`
  flex: 1;
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-145);
  letter-spacing: var(--letter-spacing-pos-007px);
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ListItem = styled.li`
  list-style: none;

  a,
  span {
    text-decoration: none;
    color: var(--color-white);
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-145);
  }
`;

const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItemFooter = styled.li`
  list-style: none;
  a {
    color: var(--color-white);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-145);
    letter-spacing: var(--letter-spacing-pos-007px);
    text-decoration: none;
  }
`;
