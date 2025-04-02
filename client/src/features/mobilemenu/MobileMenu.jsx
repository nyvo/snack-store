import MobileMenuContent from "./MobileMenuContent";
import { MobileSlidingOverlay } from "@/shared/styles/OverlayStyles";
import { MenuButton } from "@/shared/icons/HeaderIcons";
import PropTypes from "prop-types";

const MobileMenu = ({ isOpen, toggleMenu, closeMenu }) => {
  return (
    <>
      <MenuButton onClick={toggleMenu} />
      <MobileSlidingOverlay
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <MobileMenuContent toggleMenu={toggleMenu} closeMenu={closeMenu} />
      </MobileSlidingOverlay>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
