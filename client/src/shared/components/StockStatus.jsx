import {
  OutOfStockIcon,
  LowStockIcon,
  InStockIcon,
} from "@/shared/icons/StockStatusIcons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { LabelRegular } from "@/shared/styles/CombinedFontStyles";

const STOCK_STATUS = {
  OUT_OF_STOCK: {
    icon: <OutOfStockIcon />,
    text: "Out of stock",
  },
  LOW_STOCK: {
    icon: <LowStockIcon />,
    text: (quantity) => `${quantity} left in stock`,
  },
  IN_STOCK: {
    icon: <InStockIcon />,
    text: "In stock",
  },
};

export const StockStatus = ({ product, quantityAvailable }) => {
  const availableStock =
    quantityAvailable ?? product?.variants?.[0]?.quantityAvailable ?? 0;

  let status = STOCK_STATUS.IN_STOCK;
  if (availableStock === 0) {
    status = STOCK_STATUS.OUT_OF_STOCK;
  } else if (availableStock < 5) {
    status = STOCK_STATUS.LOW_STOCK;
  }

  return (
    <StockStatusWrapper>
      {status.icon}
      <LabelRegular color="var(--color-600)">
        {typeof status.text === "function"
          ? status.text(availableStock)
          : status.text}
      </LabelRegular>
    </StockStatusWrapper>
  );
};

// Updated PropTypes to support both product and direct quantityAvailable
StockStatus.propTypes = {
  product: PropTypes.shape({
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        quantityAvailable: PropTypes.number,
      })
    ),
  }),
  quantityAvailable: PropTypes.number, // Optional, for cart items
};

const StockStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;
