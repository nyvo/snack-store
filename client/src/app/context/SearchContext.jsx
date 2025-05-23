import { createContext, useState } from "react";
import useProductSearch from "@/shared/hooks/useProductSearch";
import PropTypes from "prop-types";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { products, loading, error, hasNextPage, loadMore } =
    useProductSearch(query);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        products,
        loading,
        error,
        hasNextPage,
        loadMore,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
