import { FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SocialsButtonsContainer, SocialIcons } from "./OrderConfirmStyles";
import { BodySemiBold } from "@/shared/styles/CombinedFontStyles";

const socialData = [
  { icon: <FaInstagram size={24} color="var(--color-950)" />, href: "/" },
  { icon: <FaXTwitter size={24} color="var(--color-950)" />, href: "/" },
  { icon: <FaYoutube size={24} color="var(--color-950)" />, href: "/" },
  { icon: <FaDiscord size={24} color="var(--color-950)" />, href: "/" },
];

export const SocialSection = () => (
  <SocialsButtonsContainer>
    <BodySemiBold>Follow us</BodySemiBold>
    <SocialIcons>
      {socialData.map((item, index) => (
        <a href={item.href} key={index}>
          {item.icon}
        </a>
      ))}
    </SocialIcons>
  </SocialsButtonsContainer>
);
