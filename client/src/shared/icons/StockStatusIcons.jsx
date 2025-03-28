import styled from "styled-components";
import {
  LuPackage,
  LuPackageX,
  LuPackageMinus,
  LuPackageCheck,
} from "react-icons/lu";

export const StockIcon = styled(LuPackage)`
  color: ${(props) =>
    props.color || "var(--color-success-500)"}; // default green color
  font-size: 16px;
`;

export const OutOfStockIcon = styled(LuPackageX)`
  color: ${(props) =>
    props.color || "var(--color-error-500)"}; // default red color
  font-size: 16px;
`;

export const LowStockIcon = styled(LuPackageMinus)`
  color: ${(props) =>
    props.color || "var(--color-warning-500)"}; // default yellow/warning color
  font-size: 16px;
`;

export const InStockIcon = styled(LuPackageCheck)`
  color: ${(props) =>
    props.color || "var(--color-success-500)"}; // default green color
  font-size: 16px;
`;
