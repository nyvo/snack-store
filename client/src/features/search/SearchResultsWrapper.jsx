import LoadingSpinnerWithText from "@/shared/styles/LoadingStyles";
import { ErrorNoResults, ErrorSearch } from "@/shared/styles/ErrorStyles";
import SearchResults from "./SearchResults";
import { SearchContext } from "@/app/context/SearchContext";
import { useContext } from "react";

const SearchResultsWrapper = () => {
  const { products, loading, error, query } = useContext(SearchContext);

  if (loading) {
    return <LoadingSpinnerWithText />;
  }
  if (error) {
    return <ErrorSearch error={error} />;
  }
  if (!loading && products.length === 0 && query.trim().length >= 1) {
    return <ErrorNoResults />;
  }
  return <SearchResults products={products} />;
};

export default SearchResultsWrapper;
