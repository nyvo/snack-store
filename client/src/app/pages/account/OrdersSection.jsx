import {
  OrdersContainer,
  OrdersItem,
  OrdersItemRow,
  FlexRowSpaceBetween,
  FlexColumnCenter,
  OrderStatus,
} from "@/shared/styles/AccountStyles";
import {
  BodyMedium,
  SmallMedium,
  LabelRegular,
  LabelMedium,
} from "@/shared/styles/CombinedFontStyles";
import { StockIcon } from "@/shared/icons/StockStatusIcons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/shared/components/ui/accordion";
import { Spinner } from "@/shared/components/Spinner";
import PropTypes from "prop-types";
const OrdersSection = ({ orders, isOrdersLoading, error }) => {
  return (
    <OrdersContainer>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="orders" className="w-full">
          <AccordionTrigger className="w-full mb-4 border-b border-[var(--color-100)]">
            <BodyMedium color="var(--color-950)">Orders</BodyMedium>
          </AccordionTrigger>
          <AccordionContent>
            {isOrdersLoading ? (
              <Spinner color="black" />
            ) : error ? (
              <LabelRegular color="var(--color-950)">
                Error: {error}
              </LabelRegular>
            ) : !orders || orders.length === 0 ? (
              <LabelRegular color="var(--color-950)">
                No orders found
              </LabelRegular>
            ) : (
              orders.map((order) => (
                <OrdersItem key={order.id} to="/account/orders">
                  <OrdersItemRow>
                    <SmallMedium color="var(--color-950)">
                      {order.items?.[0]?.title || "Product Title"}
                    </SmallMedium>
                    <FlexRowSpaceBetween>
                      <FlexColumnCenter>
                        <LabelRegular color="var(--color-400)">
                          Order number
                        </LabelRegular>
                        <LabelMedium color="var(--color-950)">
                          #{order.shopifyOrderNumber}
                        </LabelMedium>
                      </FlexColumnCenter>
                      <FlexColumnCenter>
                        <LabelRegular color="var(--color-400)">
                          Order date
                        </LabelRegular>
                        <LabelMedium color="var(--color-950)">
                          {order.createdAt.toDate().toLocaleDateString()}
                        </LabelMedium>
                      </FlexColumnCenter>
                    </FlexRowSpaceBetween>
                  </OrdersItemRow>
                  <FlexRowSpaceBetween>
                    <OrderStatus>
                      <StockIcon />
                      <LabelRegular color="var(--color-950)">
                        {order.status || "N/A"}
                      </LabelRegular>
                    </OrderStatus>
                    <SmallMedium color="var(--color-950)">
                      ${order.total}
                    </SmallMedium>
                  </FlexRowSpaceBetween>
                </OrdersItem>
              ))
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </OrdersContainer>
  );
};
export default OrdersSection;

OrdersSection.propTypes = {
  orders: PropTypes.array.isRequired,
  isOrdersLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
