import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoWarningOutline } from "react-icons/io5";
import { LabelRegular, SmallRegular } from "./CombinedFontStyles";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export const AuthGoogleButton = styled.button`
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 999px;
  border: 1px solid #8e918f;
  background: #131314;
  transition: all 0.2s ease; /* Smooth transitions */

  &:hover {
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.4); /* White glow for neutral contrast */
    background: #1a1a1b; /* Slightly lighter dark */
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px); /* Slight downward shift */
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.3); /* Dimmer glow when pressed */
    background: #0f0f10; /* Darker for click */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.4); /* Same glow as hover */
  }
`;

export const AuthButton = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 999px;
  background: var(--color-primary-500, #4362ee);
  transition: all 0.2s ease; /* Smooth transitions */

  &:hover {
    box-shadow: 0 0 6px rgba(67, 98, 238, 0.6); /* Blue glow matching #4362EE */
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98); /* Slight shrink for press */
    box-shadow: 0 0 4px rgba(67, 98, 238, 0.4); /* Dimmer glow when pressed */
    background: #2f49c2; /* Darker blue */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px rgba(67, 98, 238, 0.6); /* Same glow as hover */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none; /* No glow when disabled */
    transform: none;
  }
`;

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const AuthGoogleContainer = styled(FlexContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const AuthGoogleIcon = styled(FcGoogle)`
  font-size: 20px;
`;

export const Divider = styled.div`
  display: flex;
  height: 1px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: var(--color-100, #e7e7e7);
`;

export const AuthInputContainer = styled(FlexContainer)`
  gap: 1rem;
`;

export const AuthInput = styled(FlexContainer)`
  gap: 4px;
`;

export const AuthInputField = styled.input`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--color-800, #454545);
  background: var(--color-050, #f6f6f6);

  &::placeholder {
    color: var(--color-400, #888);
    /* Small Regular 14 */
    font-family: var(--Typeface-Family-Text, "Basier Square");
    font-size: var(--Typeface-Size-s, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 145%; /* 20.3px */
    letter-spacing: 0.07px;
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 2px 2px rgba(238, 130, 67, 0.5);
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const PageContainer = styled.div`
  display: flex;
  max-width: 390px;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const AuthInfoFrame = styled(FlexContainer)`
  display: flex;
  padding: 4px 0px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--color-secondary-500, #f44336);
  background: var(--color-secondary-200, #ffccc8);
`;

export const AuthInfoText = styled(LabelRegular)`
  color: var(--color-secondary-900);
  text-align: center;
`;

export const NewUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const NewUserText = styled(SmallRegular)`
  color: var(--color-800);
  text-align: center;
`;

export const NewUserLink = styled(Link)`
  color: var(--color-primary-500, #4362ee);
  text-align: center;

  /* Small Medium 14 */
  font-family: var(--Typeface-Family-Text, "Basier Square");
  font-size: var(--Typeface-Size-s, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 0.07px;
`;

export const ErrorFrame = styled.div`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--color-warning-500, #ffc107);
  background: var(--color-warning-200, #fff885);
`;

export const ErrorText = styled(LabelRegular)`
  color: var(--color-warning-900);
`;

export const ErrorIcon = styled(IoWarningOutline)`
  color: var(--color-warning-900);
`;
