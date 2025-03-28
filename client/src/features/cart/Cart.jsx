import { useContext } from "react";
import CartEmpty from "./CartEmpty";
import CartWithItems from "./CartWithItems";
import { CartContext } from "@/features/cart/CartProvider";
import { MobileSlidingOverlay } from "@/shared/styles/OverlayStyles";
import CartIconItemCount from "./CartIconItemCount";
import PropTypes from "prop-types";

const Cart = ({ isOpen, animateOut, toggleMenu, closeMenu }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <CartIconItemCount
        onClick={toggleMenu}
        ariaExpanded={isOpen}
        aria-label={isOpen ? "Close cart" : "Open cart"}
      />
      <MobileSlidingOverlay
        isOpen={isOpen}
        animateOut={animateOut}
        role="dialog" // Moved from CartWithItems
        aria-label="Shopping cart" // Moved from CartWithItems
      >
        {cartItems.length === 0 ? (
          <CartEmpty toggleMenu={toggleMenu} closeMenu={closeMenu} />
        ) : (
          <CartWithItems toggleMenu={toggleMenu} closeMenu={closeMenu} />
        )}
      </MobileSlidingOverlay>
    </>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  animateOut: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Cart;
