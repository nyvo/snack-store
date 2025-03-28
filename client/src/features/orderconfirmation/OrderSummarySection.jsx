import {
  OrderSummaryContainer,
  OrderSummaryItem,
  ItemDetails,
  Divider,
  ImgContainer,
  ItemTitlePriceContainer,
  ItemTitleContainer,
  OrderDetailsContainer,
  ShippingValueContainer,
  FlexGrowContainer,
} from "./OrderConfirmStyles";
import {
  SmallMedium,
  LabelRegular,
  H5SemiBold,
  LabelMedium,
} from "@/shared/styles/CombinedFontStyles";
import PropTypes from "prop-types";

export const OrderSummarySection = ({ orderDetails }) => {
  // Failsafe defaults for shipping address
  const shippingAddress = orderDetails.shippingAddress || {};
  const formattedShippingDetails = [
    { label: "Full Name", value: shippingAddress.name || "N/A" },
    { label: "Street Address", value: shippingAddress.line1 || "N/A" },
    ...(shippingAddress.line2
      ? [{ label: "Street Address Line 2", value: shippingAddress.line2 }]
      : []),
    { 
      label: "City/State/Postal",
      value:
        `${shippingAddress.city || ""}, ${shippingAddress.state || ""} ${
          shippingAddress.postal_code || ""
        }`.trim() || "N/A",
    },
    { label: "Country", value: shippingAddress.country || "N/A" },
  ];

  return (
    <OrderSummaryContainer>
      <H5SemiBold>Order #{orderDetails.orderNumber || "Pending"}</H5SemiBold>
      {(orderDetails.items || []).map((item, index) => (
        <OrderSummaryItem key={index}>
          <ImgContainer>
            <img
              src={item.image || "placeholder.jpg"}
              alt={item.title || "Item"}
            />
          </ImgContainer>
          <ItemDetails>
            <ItemTitlePriceContainer>
              <ItemTitleContainer>
                <SmallMedium>{item.title || "N/A"}</SmallMedium>
              </ItemTitleContainer>
              <LabelMedium>${item.price || "0.00"}</LabelMedium>
            </ItemTitlePriceContainer>
            <LabelRegular color="var(--color-500)">
              Quantity: {item.quantity || 0}
            </LabelRegular>
          </ItemDetails>
        </OrderSummaryItem>
      ))}
      <Divider />
      <OrderDetailsContainer>
        <LabelRegular style={{ width: "75%", whiteSpace: "normal" }}>
          Total price including shipping, taxes and coupons
        </LabelRegular>
        <SmallMedium>${orderDetails.total || "0.00"}</SmallMedium>
      </OrderDetailsContainer>

      <OrderDetailsContainer>
        <FlexGrowContainer>
          <LabelRegular>Shipping address</LabelRegular>
        </FlexGrowContainer>
        <ShippingValueContainer>
          {formattedShippingDetails.map((detail, index) => (
            <div key={index}>
              <LabelRegular>{detail.value}</LabelRegular>
            </div>
          ))}
        </ShippingValueContainer>
      </OrderDetailsContainer>

      <Divider />
    </OrderSummaryContainer>
  );
};

OrderSummarySection.propTypes = {
  orderDetails: PropTypes.object.isRequired,
};

export default OrderSummarySection;
