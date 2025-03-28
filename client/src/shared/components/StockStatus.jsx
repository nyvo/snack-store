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

const ProductShape = PropTypes.shape({
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      quantityAvailable: PropTypes.number.isRequired,
    })
  ).isRequired,
}).isRequired;

export const StockStatus = ({ product }) => {
  const quantityAvailable = product.variants?.[0]?.quantityAvailable ?? 0;
  let status = STOCK_STATUS.IN_STOCK;

  if (quantityAvailable === 0) {
    status = STOCK_STATUS.OUT_OF_STOCK;
  } else if (quantityAvailable < 5) {
    status = STOCK_STATUS.LOW_STOCK;
  }

  return (
    <StockStatusWrapper>
      {status.icon}
      <LabelRegular>
        {typeof status.text === "function"
          ? status.text(quantityAvailable)
          : status.text}
      </LabelRegular>
    </StockStatusWrapper>
  );
};

const StockStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

StockStatus.propTypes = {
  product: ProductShape,
};
