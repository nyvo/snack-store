// ProductContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

// Create a Context
export const ProductContext = createContext();

// Create a Provider Component
export const ProductProvider = ({ productId, children }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/product/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  ProductProvider.propTypes = {
    productId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
