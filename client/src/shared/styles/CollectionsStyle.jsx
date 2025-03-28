import styled from "styled-components";

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

export const CollectionTitle = styled.h2`
  color: var(--color-black);
  font-family: var(--font-family-basier-square);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  line-height: var(--line-height-135);
  letter-spacing: var(--letter-spacing-neg-042px);
  text-decoration: none;
`;

export const CollectionLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid var(--color-black);
  color: var(--color-white);
`;
