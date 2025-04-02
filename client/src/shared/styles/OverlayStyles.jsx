import styled from "styled-components";
import { slideIn, slideOut, popIn, popOut } from "./AnimationStyles";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s ease,
    visibility 0s ${({ isOpen }) => (isOpen ? "0s" : "0.5s")};
`;

export const MobileSlidingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-white);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 2rem;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.6s ease-in-out
    forwards; /* Slower, smoother */
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: visibility 0s ${({ isOpen }) => (isOpen ? "0s" : "0.6s")}; /* Match animation duration */

  > * {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 400px;
    left: auto;
    right: 0;
  }
`;

export const PopupOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 200px;
  left: 50;
  transform: translate(-50%, -50%);
  background: var(--color-white);
  border-radius: 0.5rem;
  z-index: 999;
  padding: 1rem;
  gap: 1rem;
  overflow-y: auto;
  width: 90vw;
  max-width: 390px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  animation: ${({ animateOut }) =>
      animateOut ? popOut : ({ isOpen }) => (isOpen ? popIn : "none")}
    0.3s ease forwards;
`;

export const MobilePopupOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-white);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 2rem;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  animation: ${({ animateOut }) =>
      animateOut ? popOut : ({ isOpen }) => (isOpen ? popIn : "none")}
    0.3s ease forwards;
`;

export const LoadingOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;
