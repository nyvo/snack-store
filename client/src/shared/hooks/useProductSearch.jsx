import { useState, useEffect, useRef } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const useProductSearch = (query) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  const debouncedFetch = useRef(
    debounce(async (searchQuery, cursor) => {
      console.log("Fetching with query:", searchQuery, "cursor:", cursor);
      try {
        if (searchQuery.trim().length >= 1) {
          setLoading(true);
          const response = await axios.get(
            `http://localhost:3001/search/${searchQuery}`,
            { params: { first: 10, after: cursor } }
          );
          const newProducts = response.data.products;
          setProducts((prev) =>
            cursor ? [...prev, ...newProducts] : newProducts
          );
          setHasNextPage(response.data.pageInfo.hasNextPage);
          setEndCursor(response.data.pageInfo.endCursor);
        } else {
          setProducts([]);
          setHasNextPage(false);
          setEndCursor(null);
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
    if (!query.trim()) {
      setProducts([]);
      setLoading(false);
      setError(null);
      setHasNextPage(false);
      setEndCursor(null);
      return;
    }

    if (query.trim().length >= 1) {
      setLoading(true);
      setError(null);
      debouncedFetch(query, null); // Initial fetch
    }

    return () => debouncedFetch.cancel();
  }, [query, debouncedFetch]);

  const loadMore = () => {
    if (hasNextPage && !loading) {
      debouncedFetch(query, endCursor); // Fetch next page with current cursor
    }
  };

  return { products, loading, error, hasNextPage, loadMore };
};

export default useProductSearch;
