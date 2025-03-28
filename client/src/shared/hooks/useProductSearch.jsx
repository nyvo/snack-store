import { useState, useEffect, useRef } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const useProductSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedFetch = useRef(
    debounce(async (query) => {
      console.log(
        "Debounced fetch executed at:",
        new Date().toISOString(),
        "with query:",
        query
      );

      try {
        // Changed minimum length from 2 to 1
        if (query.trim().length >= 1) {
          const response = await axios.get(
            `http://localhost:3001/search/${query}`
          );
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Sorry, we're having server issues. Please try again later!");
      } finally {
        setLoading(false);
      }
    }, 300)
  ).current;

  useEffect(() => {
    console.log(
      "Effect triggered at:",
      new Date().toISOString(),
      "with query:",
      query
    );

    // Reset states for empty queries
    if (!query.trim()) {
      setProducts([]);
      setLoading(false);
      setError(null);
      return;
    }

    // Changed minimum length from 2 to 1
    if (query.trim().length >= 1) {
      setLoading(true);
      setError(null);
      debouncedFetch(query);
    }

    return () => debouncedFetch.cancel();
  }, [query, debouncedFetch]);

  return { products, loading, error };
};

export default useProductSearch;
