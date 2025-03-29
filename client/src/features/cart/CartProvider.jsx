import { createContext, useContext, useState, useCallback } from "react";
import { useSyncedCart } from "@/shared/hooks/useSyncedCart";
import PropTypes from "prop-types";
import { AuthContext } from "@/app/context/AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useSyncedCart([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { user } = useContext(AuthContext);

  const createCartItem = (product) => {
    const { id, title, description, vendor, image, variants } = product;

    const variantId = variants[0].id;
    const quantityAvailable = variants[0].quantityAvailable;

    return {
      id,
      variantId,
      title,
      description,
      vendor,
      image,
      price: variants[0].price,
      quantity: 1,
      quantityAvailable,
    };
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.variantId === product.variantId
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (variantId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.variantId !== variantId)
    );
  };

  const updateQuantity = (variantId, quantity) => {
    setIsUpdating(true);
    const timeoutId = setTimeout(() => {
      setCartItems((prevItems) => {
        try {
          const updatedItems = prevItems.map((item) => {
            if (item.variantId === variantId) {
              return { ...item, quantity };
            }
            return item;
          });
          return updatedItems;
        } catch (error) {
          console.error("Failed to update quantity", error);
          return prevItems;
        } finally {
          setIsUpdating(false);
        }
      });
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      console.log("Current user:", user);
      console.log("User ID being sent:", user?.uid);

      const response = await fetch(
        "http://localhost:3001/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartItems: cartItems.map((item) => ({
              title: item.title,
              description: item.description,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
              id: item.id,
              variantId: item.variantId,
            })),
            userId: user?.uid || null,
          }),
        }
      );

      const { url } = await response.json();
      console.log("Redirecting to Stripe URL:", url);
      if (url) {
        sessionStorage.setItem("pendingCart", JSON.stringify(cartItems));
        window.location.href = url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const clearCart = useCallback(() => {
    try {
      setCartItems([]);
      sessionStorage.removeItem("pendingCart");
      localStorage.removeItem("cartItems");
    } catch (error) {
      console.error("Error clearing cart:", error);
      setCartItems([]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isUpdating,
        handleCheckout,
        isCheckingOut,
        createCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
