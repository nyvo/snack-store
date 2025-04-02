import { useContext, useEffect, useState } from "react";
import CartEmpty from "./CartEmpty";
import CartWithItems from "./CartWithItems";
import { CartContext } from "@/features/cart/CartProvider";
import { MobileSlidingOverlay, Backdrop } from "@/shared/styles/OverlayStyles";
import CartIconItemCount from "./CartIconItemCount";
import PropTypes from "prop-types";

const Cart = ({ isOpen, toggleMenu, closeMenu }) => {
  const { cartItems } = useContext(CartContext);
  const [prevCartItemsLength, setPrevCartItemsLength] = useState(
    cartItems.length
  );

  useEffect(() => {
    if (prevCartItemsLength > 0 && cartItems.length === 0 && isOpen) {
      closeMenu();
    }
    setPrevCartItemsLength(cartItems.length);
  }, [cartItems.length, isOpen, closeMenu, prevCartItemsLength]);

  return (
    <>
      <CartIconItemCount
        onClick={toggleMenu}
        ariaExpanded={isOpen}
        aria-label={isOpen ? "Close cart" : "Open cart"}
      />
      <Backdrop isOpen={isOpen} onClick={closeMenu} />
      <MobileSlidingOverlay
        isOpen={isOpen}
        role="dialog"
        aria-label="Shopping cart"
        onClick={(e) => e.stopPropagation()}
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
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Cart;
