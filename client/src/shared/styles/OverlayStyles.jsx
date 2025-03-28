import styled from "styled-components";
import { slideIn, slideOut, popIn, popOut } from "./AnimationStyles";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent black */
  z-index: 998; /* One level below the cart */
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s ease;
`;

export const SlidingOverlay = styled.div`
  position: fixed;
  top: 0; /* Stick to the top of the screen */
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
  width: 100vw; /* Full width */
  min-height: 50vh;
  height: 90vh; /* Set to 70% of the viewport height */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  animation: ${({ animateOut }) =>
      animateOut ? slideOut : ({ isOpen }) => (isOpen ? slideIn : "none")}
    0.5s ease forwards;
`;

export const MobileSlidingOverlay = styled.div`
  position: fixed;
  top: 0; /* Stick to the top of the screen */
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
  width: 100vw; /* Full width */
  height: 100vh;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  animation: ${({ animateOut }) =>
      animateOut ? slideOut : ({ isOpen }) => (isOpen ? slideIn : "none")}
    0.5s ease forwards;
  cursor: auto;
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
