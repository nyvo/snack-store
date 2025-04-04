import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

const MenuButton = styled(FiMenu)`
  color: var(--color-white);
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
`;

const SearchButton = styled(IoIosSearch)`
  color: var(--color-white);
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const CartButton = styled(IoCartOutline)`
  color: var(--color-white);
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const AccountButton = styled(RiAccountCircleLine)`
  color: var(--color-white);
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export { MenuButton, SearchButton, CartButton, AccountButton };
