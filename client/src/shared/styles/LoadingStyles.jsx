import styled from "styled-components";
import { Spinner } from "../components/Spinner";
import { SmallRegular } from "./CombinedFontStyles";

const LoadingSpinnerWithText = () => (
  <Container>
    <Spinner color="var(--color-950)" />
    <SmallRegular>Loading products...</SmallRegular>
  </Container>
);

export default LoadingSpinnerWithText;

// Styled components

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
