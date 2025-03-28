import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

export const CloseButton = styled(IoIosClose)`
  cursor: pointer;
  color: var(--color-black); /* Change this color to match your design */
  font-size: 2rem;
`;

export const CloseButtonAbsolute = styled(IoIosClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-black); /* Change this color to match your design */
`;
