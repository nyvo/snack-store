import { useState } from "react";

export const useButtonState = () => {
  const [buttonState, setButtonState] = useState("Add to Cart");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const startProcessing = () => {
    setIsProcessing(true);
    setButtonState("Adding to Cart");
  };

  const completeProcessing = () => {
    setButtonState("Added to Cart");
    setIsAdded(true);

    setTimeout(() => {
      resetState();
    }, 1000);
  };

  const resetState = () => {
    setButtonState("Add to Cart");
    setIsAdded(false);
    setIsProcessing(false);
  };

  return {
    buttonState,
    isProcessing,
    isAdded,
    startProcessing,
    completeProcessing,
  };
};
