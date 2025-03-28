import styled from "styled-components";
import { FaCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const StockStatusFrame = styled.div`
  display: flex;
  padding: 0.25rem 0.7rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 25px;

  background: ${(props) =>
    props.inventoryQuantity ? null : "var(--color-primary-500)"};

  &:hover {
    cursor: ${(props) => (props.inventoryQuantity ? "inherit" : "pointer")};
  }
`;

const InventoryStatus = styled.p`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-145);
  letter-spacing: var(--letter-spacing-pos-007px);
  color: ${(props) =>
    props.inventoryQuantity
      ? "var(--color-success-500)"
      : "var(--color-error-500)"};
`;

const PriceStatus = styled.p`
  color: var(--color-black);
  font-size: var(--font-size-regular);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-145);
  margin-top: auto;
`;

const CircleStyled = styled(FaCircle)`
  color: var(--color-success-300);
`;

const BellStyled = styled(FaBell)`
  color: var(--color-white);
`;

export {
  StockStatusFrame,
  InventoryStatus,
  PriceStatus,
  CircleStyled,
  BellStyled,
};
