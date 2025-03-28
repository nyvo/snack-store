import MobileMenuContent from "./MobileMenuContent";
import { MobileSlidingOverlay } from "@/shared/styles/OverlayStyles";
import { MenuButton } from "@/shared/icons/HeaderIcons";
import PropTypes from "prop-types";
const MobileMenu = ({ isOpen, animateOut, toggleMenu, closeMenu }) => {
  return (
    <>
      <MenuButton onClick={toggleMenu} />
      {isOpen && (
        <MobileSlidingOverlay isOpen={isOpen} animateOut={animateOut}>
          <MobileMenuContent toggleMenu={toggleMenu} closeMenu={closeMenu} />
        </MobileSlidingOverlay>
      )}
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  animateOut: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
