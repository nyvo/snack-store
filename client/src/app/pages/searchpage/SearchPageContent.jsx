import { useParams } from "react-router-dom";
import useProductSearch from "@/shared/hooks/useProductSearch";
import SearchResults from "@/features/search/SearchResults";
import { H5SemiBold } from "@/shared/styles/CombinedFontStyles";
import LoadingSpinnerWithText from "@/shared/styles/LoadingStyles";
import { ErrorNoResults, ErrorSearch } from "@/shared/styles/ErrorStyles";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SearchPageContent = () => {
  const { query: urlQuery = "" } = useParams();
  const [query, setQuery] = useState(decodeURIComponent(urlQuery));
  const { products, loading, error } = useProductSearch(query);

  useEffect(() => {
    setQuery(decodeURIComponent(urlQuery));
  }, [urlQuery]);

  if (error) {
    return <ErrorSearch error={error} />;
  }

  if (loading) {
    return <LoadingSpinnerWithText />;
  }

  const capitalizedQuery = query.charAt(0).toUpperCase() + query.slice(1);

  return (
    <Container>
      {products.length > 0 && (
        <H5SemiBold>Results for: {capitalizedQuery}</H5SemiBold>
      )}
      {products.length === 0 ? (
        <ErrorNoResults />
      ) : (
        <Results>
          <SearchResults products={products} />
        </Results>
      )}
    </Container>
  );
};

export default SearchPageContent;

// Styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1rem;
`;
