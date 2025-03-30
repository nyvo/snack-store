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

export const ImgContainer = styled.div`
  height: 70px;
  display: flex;
`;

export const ProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const VendorTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  text-align: left;
`;

export const PriceStockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
