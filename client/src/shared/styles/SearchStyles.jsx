import styled from "styled-components";
import { fadeIn } from "./AnimationStyles";

const Product = styled.a`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--color-050, #f6f6f6);
`;

export const ProductContainer = styled(Product)`
  animation: ${fadeIn} 0.5s ease-in-out;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: stretch;
`;

export const ProductFlexStretch = styled.div`
  display: flex;
  flex: 1 0 0;
`;
