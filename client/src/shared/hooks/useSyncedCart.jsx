import { useEffect, useState } from "react";

export function useSyncedCart(initialCart = []) {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve initial cart state from localStorage or use the initialCart
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : initialCart;
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Listen for changes to localStorage from other tabs
  useEffect(() => {
    const syncCartAcrossTabs = (event) => {
      if (event.key === "cartItems") {
        const updatedCart = JSON.parse(event.newValue);
        if (updatedCart) {
          setCartItems(updatedCart);
        }
      }
    };

    window.addEventListener("storage", syncCartAcrossTabs);

    return () => {
      window.removeEventListener("storage", syncCartAcrossTabs);
    };
  }, []);

  return [cartItems, setCartItems];
}

