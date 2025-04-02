import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "@/features/search/SearchBar";
import Cart from "@/features/cart/Cart";
import MobileMenu from "@/features/mobilemenu/MobileMenu";
import useMobile from "@/shared/hooks/useMobile";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleSearch = () => setSearchOpen(!searchOpen);
  const closeSearch = () => setSearchOpen(false);
  const toggleCart = () => setCartOpen(!cartOpen);
  const closeCart = () => setCartOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (searchOpen || cartOpen || menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchOpen, cartOpen, menuOpen]);

  return (
    <HeaderContainer role="banner">
      <LogoContainer>
        <a href="/" aria-label="Home">
          <img src="/images/logo.svg" alt="Company Logo" />
        </a>
      </LogoContainer>

      <NavList role="navigation">
        <ListItem>
          <IconContainer aria-label="Toggle search" onClick={toggleSearch}>
            <SearchBar
              isOpen={searchOpen}
              toggleMenu={toggleSearch}
              closeMenu={closeSearch}
            />
          </IconContainer>
        </ListItem>
        <ListItem>
          <IconContainer aria-label="Toggle cart" onClick={toggleCart}>
            <Cart
              isOpen={cartOpen}
              toggleMenu={toggleCart}
              closeMenu={closeCart}
            />
          </IconContainer>
        </ListItem>
        {isMobile && (
          <ListItem>
            <IconContainer aria-label="Toggle mobile menu" onClick={toggleMenu}>
              <MobileMenu
                isOpen={menuOpen}
                toggleMenu={toggleMenu}
                closeMenu={closeMenu}
              />
            </IconContainer>
          </ListItem>
        )}
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
