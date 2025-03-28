import styled from "styled-components";
import useMobile from "../hooks/useMobile";
import SearchBar from "@/features/search/SearchBar";
import Cart from "@/features/cart/Cart";
import MobileMenu from "@/features/mobilemenu/MobileMenu";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import React from "react";

// Define header items without conditional logic
const getHeaderItems = (toggleStates) => [
  {
    component: (
      <SearchBar
        isOpen={toggleStates.search.isOpen}
        animateOut={toggleStates.search.animateOut}
        toggleMenu={toggleStates.search.toggleMenu}
        closeMenu={toggleStates.search.closeMenu}
      />
    ),
    key: "search",
    ariaLabel: "Toggle search",
  },
  {
    component: (
      <Cart
        isOpen={toggleStates.cart.isOpen}
        animateOut={toggleStates.cart.animateOut}
        toggleMenu={toggleStates.cart.toggleMenu}
        closeMenu={toggleStates.cart.closeMenu}
      />
    ),
    key: "cart",
    ariaLabel: "Toggle cart",
  },
  {
    component: (
      <MobileMenu
        isOpen={toggleStates.menu.isOpen}
        animateOut={toggleStates.menu.animateOut}
        toggleMenu={toggleStates.menu.toggleMenu}
        closeMenu={toggleStates.menu.closeMenu}
      />
    ),
    key: "mobile-menu",
    ariaLabel: "Toggle mobile menu",
  },
];

const Header = () => {
  const isMobile = useMobile();

  // Call hooks at the top level
  const searchToggle = useAnimatedToggle();
  const cartToggle = useAnimatedToggle();
  const menuToggle = useAnimatedToggle();

  // Memoize toggleStates to prevent recreation on every render
  const toggleStates = React.useMemo(
    () => ({
      search: searchToggle,
      cart: cartToggle,
      menu: menuToggle,
    }),
    [searchToggle, cartToggle, menuToggle]
  );

  // Lock body scroll when any menu is open
  useBodyScrollLock(
    Object.values(toggleStates).some((toggle) => toggle.isOpen)
  );

  // Memoize header items with stable toggleStates
  const headerItems = React.useMemo(
    () =>
      isMobile
        ? getHeaderItems(toggleStates)
        : getHeaderItems(toggleStates).filter(
            (item) => item.key !== "mobile-menu"
          ),
    [isMobile, toggleStates]
  );

  return (
    <HeaderContainer role="banner">
      <LogoContainer>
        <a href="/" aria-label="Home">
          <img src="/images/logo.svg" alt="Company Logo" />
        </a>
      </LogoContainer>

      <NavList role="navigation">
        {headerItems.map((item) => (
          <ListItem key={item.key}>
            <IconContainer
              aria-label={item.ariaLabel}
              onClick={item.component.props.toggleMenu}
            >
              {item.component}
            </IconContainer>
          </ListItem>
        ))}
      </NavList>
    </HeaderContainer>
  );
};

export default Header;

/* ----------STYLES---------- */

const HeaderContainer = styled.header`
  display: flex;
  height: 50px;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
`;
