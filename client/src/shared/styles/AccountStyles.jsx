import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const OrdersItem = styled(Link)`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--color-050, #f6f6f6);
`;

export const OrdersItemRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AccountDetails = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const EmailContainer = styled.div`
  display: flex;
  height: 2.25rem;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid var(--color-300, #b0b0b0);
  background: var(--color-050, #f6f6f6);
`;

export const ChangePasswordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const ChangePasswordInput = styled.input`
  display: flex;
  height: 2.25rem;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--color-100, #e7e7e7);

  &::placeholder {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-regular);
    color: var(--color-400);
  }
`;

export const ForgotPasswordLink = styled(Link)`
  &:hover {
    text-decoration-line: underline;
    color: var(--color-black);
  }
`;

export const ChangePasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;
