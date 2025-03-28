import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const OrderActionContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--color-050, #f6f6f6);
`;

export const OrderSummaryItem = styled.div`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--color-050, #f6f6f6);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

export const ItemTitlePriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

export const Divider = styled.div`
  display: flex;
  height: 1px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: var(--color-100, #e7e7e7);
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-050);
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const FlexColumnSmallGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const Button = styled.button`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 999px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const SignUpButton = styled(Button)`
  background: var(--color-primary-500, #4362ee);
`;

export const LogInButton = styled(Button)`
  border: 1px solid var(--color-950, #262626);
`;

export const SocialsButtonsContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const SupportContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const SupportButton = styled.button`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 1px solid var(--color-secondary-500, #41a5fc);
  background: var(--color-secondary-100, #daf0ff);
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const ShippingValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

export const FlexGrowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
`;
