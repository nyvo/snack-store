import styled from "styled-components";
import { BodyRegular, H5SemiBold, SmallRegular } from "./CombinedFontStyles";
import PropTypes from "prop-types";

export const ErrorSearch = ({ error }) => (
  <FlexRow>
    <SmallRegular>
      {error || "Something went wrong. Please try again later."}
    </SmallRegular>
  </FlexRow>
);

export const ErrorProduct = () => (
  <Container>
    <FlexColumn>
      <H5SemiBold>We&apos;re experiencing a server issue.</H5SemiBold>
      <BodyRegular color="var(--color-800)">
        Please try again later, we&apos;re working on fixing this!
      </BodyRegular>
    </FlexColumn>
  </Container>
);

export const ErrorNoResults = () => (
  <FlexRow>
    <SmallRegular>No products found.</SmallRegular>
  </FlexRow>
);

// Styled components

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

ErrorSearch.propTypes = {
  error: PropTypes.string,
};
