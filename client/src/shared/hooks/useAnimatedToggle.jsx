import { useState, useCallback, useEffect } from "react";

const useAnimatedToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const toggleMenu = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      setAnimateOut(false);
    } else {
      setAnimateOut(true);
    }
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    if (isOpen) {
      setAnimateOut(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setAnimateOut(false);
      }, 500); // Adjust to match animation duration
      return () => clearTimeout(timer);
    }
  }, [animateOut]);

  return {
    isOpen,
    animateOut,
    toggleMenu,
    closeMenu,
  };
};

export default useAnimatedToggle;
