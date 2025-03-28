import { useEffect } from "react";

const useBodyScrollLock = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
};

export default useBodyScrollLock;
