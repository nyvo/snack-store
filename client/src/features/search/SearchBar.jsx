import { useContext } from "react";
import { H5SemiBold } from "@/shared/styles/CombinedFontStyles";
import { CloseButton } from "@/shared/icons/CloseButton";
import SearchResultsWrapper from "./SearchResultsWrapper";
import { MobileSlidingOverlay } from "@/shared/styles/OverlayStyles";
import { SearchButton } from "@/shared/icons/HeaderIcons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { SearchContext } from "@/app/context/SearchContext";
import styled from "styled-components";

const SearchBar = ({ isOpen, animateOut, toggleMenu, closeMenu }) => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(SearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query)}`);
      setQuery("");
      closeMenu();
    }
  };

  return (
    <>
      <SearchButton
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close search" : "Open search"}
      />
      {isOpen && (
        <MobileSlidingOverlay isOpen={isOpen} animateOut={animateOut}>
          <TitleContainer>
            <H5SemiBold>Search</H5SemiBold>
            <CloseButton onClick={closeMenu} />
          </TitleContainer>

          <SearchForm onSubmit={handleSubmit} role="search">
            <SearchInputContainer>
              <StyledSearchButton type="button" />
              <SearchFormInput
                type="text"
                placeholder="Search for a product..."
                aria-label="Search"
                value={query}
                onChange={handleChange}
                autoFocus
              />
            </SearchInputContainer>
          </SearchForm>

          <Results>
            <SearchResultsWrapper />
          </Results>
        </MobileSlidingOverlay>
      )}
    </>
  );
};

SearchBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  animateOut: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SearchBar;

const TitleContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledSearchButton = styled(SearchButton)`
  position: absolute;
  left: 1rem;
  pointer-events: none; /* Prevents the button from interfering with input clicks */
  color: var(--color-800);
`;

const SearchFormInput = styled.input`
  display: flex;
  padding: 8px 16px 8px 3rem; /* Matches AuthInputField, with extra left for icon */
  align-items: center;
  width: 100%;
  border-radius: 999px;
  border: 1px solid var(--color-800, #454545);
  background: var(--color-050, #f6f6f6);

  &::placeholder {
    color: var(--color-400, #888);
    font-family: var(--Typeface-Family-Text, "Basier Square");
    font-size: var(--Typeface-Size-s, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 145%; /* 20.3px */
    letter-spacing: 0.07px;
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500, #4362ee);
    box-shadow: 0 0 2px 2px rgba(238, 130, 67, 0.5);
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;
