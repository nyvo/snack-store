import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 0.75rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-100);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-200);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-300);
  }
`;

export const ListContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SeeAllButton = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0; /* Prevent button from shrinking */
  white-space: nowrap; /* Keep button text on one line */
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  color: var(--color-primary-900);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-grow: 1; /* Allow title to take available space */
`;
