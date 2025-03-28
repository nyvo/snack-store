import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 10px 10px var(--font-size-l);
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  background: var(--color-white);
  border: 1px solid var(--color-100);

  &:focus-within {
    border-color: var(--color-secondary-500);
  }
`;



export const FormInput = styled.input`
  all: unset;
  width: 100%;
  padding: 0.8rem 2rem 0.8rem 0;
  font-family: var(--font-family-basier-square);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-145);
  letter-spacing: var(--letter-spacing-pos-007px);

  &::placeholder {
    color: var(--color-400);
  }

  &:focus {
    color: var(--color-black);
    font-family: var(--font-family-basier-square);
    font-size: var(--Typeface-Size-xs, 12px);
    line-height: var(--line-height-145);
    letter-spacing: var(--letter-spacing-pos-007px);
  }
`;

export const FormButton = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--color-primary-500);
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: auto;
  color: var(--color-white);
  font-family: var(--font-family-basier-square);
  font-size: var(--font-size-xs);
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-145);
  letter-spacing: var(--letter-spacing-pos-007px);
`;
